import type Line from '../Model/line'
import type Point from '../Model/point'
import type { EventCallback, Intersection, IntersectMeshInterface } from '@realsee/five'
import Hammer from 'hammerjs'
import DeleteDom from '../Modules/DeleteDom'
import isNDCPointInScreen from '../utils/isNDCPointInScreen'
import BaseController, { IControllerParams } from './BaseController'
import { Raycaster, Vector2 } from 'three'
import { closestPointOnLine } from '../utils/math'
import { findClosestPoint } from '../utils/findClosestPoint'
import { findAssociatedLines } from '../utils/findAssociatedLines'
import { getPointFromHammerEvent } from '../utils/getPointFromHammerEvent'

export default class WatchController extends BaseController {
  public type = 'watch'
  private deleteDom: DeleteDom
  private highlightedLines: Line[] = []
  private fiveElement?: HTMLCanvasElement
  private editPointState?: {
    point: Point
    associatedLines: Line[]
  }
  private hammer?: InstanceType<typeof Hammer['Manager']>

  public constructor(params: IControllerParams) {
    super(params)
    this.deleteDom = new DeleteDom(this.five, {
      onClick: this.deleteDomClickCallback,
      cancelDelete: this.cancelDeleteClickCallback,
    }).appendTo(this.container)
    this.model.lines.forEach((line) => {
      line.distanceItem.appendTo(this.container)
      line.distanceItem.update(this.five)
      line.hook.on('selected', this.chooseLine)
      this.group.add(line.mesh)
    })
    const fiveElement = this.five.getElement()
    if (fiveElement) {
      this.fiveElement = fiveElement
      const hammer = new Hammer(fiveElement)
      this.hammer = hammer
      hammer.on('pan', this.onPan)
      hammer.on('panstart', this.onPanStart)
      hammer.on('panend', this.onPanEnd)
    }

    this.model.hook.on('lineRemoved', this.lineRemoved)
    this.five.on('cameraUpdate', this.onCameraUpdate)
    this.five.on('wantsTapGesture', this.wantsTapGesture)
    this.five.on('wantsPanGesture', this.wantsPanGesture)
    this.five.needsRender = true
  }

  public dispose() {
    super.dispose()
    this.deleteDom.dispose()
    this.model.hook.off('lineRemoved', this.lineRemoved)
    this.five.off('cameraUpdate', this.onCameraUpdate)
    this.five.off('wantsPanGesture', this.wantsPanGesture)
    this.five.off('wantsTapGesture', this.wantsTapGesture)
    this.five.needsRender = true
    this.hook.emit('selectedChange', [])
    this.hammer?.destroy()
  }

  public highlightLine(line: Line) {
    if (line.selected) return
    line.selected = true
    this.group.add(line.lightMesh)
    line.distanceItem.highlight()
    this.five.needsRender = true
  }

  public clearHighlightLines() {
    if (this.group.children.length === 0) return
    this.deleteDom.setLines([]).hide()
    this.model.lines.forEach((line) => {
      line.selected = false
      line.distanceItem.unHighlight()
      this.group.remove(line.lightMesh)
    })
    this.highlightedLines = []
    this.five.needsRender = true
  }

  private onPanStart = (e: typeof Hammer['Input']) => {
    if (this.model.points.length === 0 || !this.fiveElement) return
    const mouse = getPointFromHammerEvent(e).point
    const closestPoint = findClosestPoint(this.five, this.model.points, mouse, 20)?.point
    if (!closestPoint) {
      this.editPointState = undefined
      return
    }
    const editPointState = {
      point: closestPoint,
      associatedLines: findAssociatedLines(closestPoint.lines[0]),
    }
    const cancelDragLine = this.hook.emit('wantsDragLine', {
      point: closestPoint.id,
      lines: editPointState.associatedLines.map(({ id }) => id),
    })
    if (cancelDragLine) return
    this.editPointState = editPointState
    this.magnifier.appendTo(this.container)
    this.group.add(this.mouseGroup)
  }

  private onPanEnd = () => {
    if (!this.editPointState) return
    // 把拖动的线从虚线转换为实线
    this.editPointState.point.lines.forEach((line) => line.mesh.setMaterial({ dashed: false }))
    // 还原选中态
    this.highlightLines(this.editPointState.associatedLines)
    this.editPointState = undefined

    this.magnifier.remove()
    this.group.remove(this.mouseGroup)
  }

  private onPan = (e: typeof Hammer['Input']) => {
    if (!this.editPointState || !this.fiveElement) return
    const mouse = getPointFromHammerEvent(e).ndcPoint
    const raycaster = new Raycaster()
    raycaster.setFromCamera(mouse, this.five.camera)
    const [intersection] = this.five.model.intersectRaycaster(raycaster)
    if (!intersection) return
    this.onIntersectionUpdate(intersection)
  }

  private onIntersectionUpdate = (intersection: Intersection, mesh?: IntersectMeshInterface) => {
    if (!this.editPointState) return
    // 拖动过程中清除选中态
    this.clearHighlightLines()
    // 把拖动点相关的线变成虚线 & 改变相关线的位置
    this.editPointState.point.position.copy(intersection.point)
    this.editPointState.point.lines.forEach((line) => {
      line.mesh.setPoints(line.points[0].position.clone(), line.points[1].position.clone())
      line.lightMesh.setPoints(line.points[0].position.clone(), line.points[1].position.clone())
      line.mesh.setMaterial({ dashed: true })
    })
    this.updateDistanceUI()
    this.magnifier.renderWithPoint(intersection.point)
    this.mouseGroup.position.copy(intersection.point)
    if (mesh) {
      this.mouseGroup.quaternion.copy(mesh.quaternion)
    } else if (intersection.face) {
      const face = intersection.face.normal
      const positionVector = face.clone().multiplyScalar(0.05)
      const position = intersection.point.clone().add(positionVector)
      const lookAtVector = position.clone().add(positionVector)
      this.mouseGroup.lookAt(lookAtVector)
    }
    this.five.needsRender = true
    this.hook.emit(
      'selectedChange',
      this.editPointState.associatedLines.map((line) => line.toCompletelyJson()),
    )
  }

  private wantsPanGesture: EventCallback['wantsPanGesture'] = () => {
    if (this.editPointState) return false
  }

  private wantsTapGesture: EventCallback['wantsTapGesture'] = (raycaster) => {
    const [target] = this.five.model.intersectRaycaster(raycaster)
    if (!target) return
    const camera = this.five.camera
    const ndcTarget = target.point.clone().project(camera)
    const screenWidth = this.container.clientWidth
    const screenHeight = this.container.clientHeight
    const targetScreenPosition = new Vector2(ndcTarget.x * screenWidth, ndcTarget.y * screenHeight)
    // 把线的端点全部映射到屏幕上，过滤掉不在视野内的线，同时乘以屏幕宽 & 高
    const screenLines = this.model.lines
      .map((line) => {
        const [startPoint, endPoint] = line.points
        const ndcStartPoint = startPoint.position.clone().project(camera)
        const ndcEndPoint = endPoint.position.clone().project(camera)
        if (!isNDCPointInScreen(ndcStartPoint) && !isNDCPointInScreen(ndcEndPoint)) return null
        const startScreenPosition = new Vector2(ndcStartPoint.x * screenWidth, ndcStartPoint.y * screenHeight)
        const endScreenPosition = new Vector2(ndcEndPoint.x * screenWidth, ndcEndPoint.y * screenHeight)
        return { id: line.id, points: [startScreenPosition, endScreenPosition] }
      })
      .filter((line) => !!line) as { id: string; points: Vector2[] }[]
    if (screenLines.length === 0) return
    // 找这些线距离鼠标点击位置最近的线
    const distanceLines = screenLines
      .map((line) => {
        const closestPoint = closestPointOnLine(targetScreenPosition, line.points)
        return { id: line.id, distance: closestPoint.distanceTo(targetScreenPosition) }
      })
      .sort((a, b) => a.distance - b.distance)
    const closestScreenLine = distanceLines[0]
    if (closestScreenLine.distance > 20) return
    const closestLine = this.model.lines.find(({ id }) => id === closestScreenLine.id)
    if (!closestLine) return
    this.chooseLine(closestLine)
    return false
  }

  private chooseLine = (line: Line) => {
    const highlightLines = findAssociatedLines(line)
    this.highlightLines(highlightLines)
    this.five.needsRender = true
    this.hook.emit(
      'selectedChange',
      highlightLines.map((line) => line.toCompletelyJson()),
    )
  }

  private highlightLines(lines: Line[]) {
    this.clearHighlightLines()
    this.highlightedLines = lines
    this.deleteDom.setLines(lines).updatePosition().show()
    lines.forEach((line) => this.highlightLine(line))
  }

  private lineRemoved = (line: Line) => {
    this.removeLine(line)
    // TODO: 这个逻辑不太好，改进一下
    this.hook.emit(
      'selectedChange',
      this.model.lines.filter((line) => line.selected).map((line) => line.toCompletelyJson()),
    )
  }

  private onCameraUpdate = () => {
    this.updateDistanceUI()
    this.highlightedLines.length > 0 && this.deleteDom.updatePosition()
  }

  private deleteDomClickCallback = () => {
    const firstLine = this.highlightedLines[0]
    // TODO: 优化折线的删除逻辑
    firstLine
      .getPolyline()
      .lines.slice()
      .reverse()
      .forEach((line) => this.model.removeLine(line))
    this.highlightedLines = []
    // this.clearHighlightLines()
    // this.highlightedLines.forEach((line) => this.model.removeLine(line))
    this.deleteDom.setLines([]).hide()
  }

  private cancelDeleteClickCallback = () => {
    this.clearHighlightLines()
  }
}
