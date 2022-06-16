import type { LineJson } from '../typings/data'
import type { EventCallback } from '@realsee/five'
import { Model } from '../Model'
import Line from '../Model/line'
import Point from '../Model/point'
import BaseController, { IControllerParams } from './BaseController'
import DeleteDom from '../Modules/DeleteDom'
import { findAssociatedLines } from '../utils/findAssociatedLines'
import { Vector2 } from 'three'
import isNDCPointInScreen from '../utils/isNDCPointInScreen'
import { closestPointOnLine } from '../utils/math'

export type State = 'watching' | 'editing'

export interface EditEvent {
  editedLineChange: (lines: LineJson[]) => void
}

export default class MixedController extends BaseController {
  public state: State = 'watching'
  public model = new Model({ userDistanceItemCreator: this.userDistanceItemCreator })
  private hasAppendDashed = false
  private fiveElement?: HTMLCanvasElement
  private mobileStartPoint: Point | null = null
  private mobileNowPoint: Point | null = null
  private highlightedLines: Line[] = []
  private deleteDom: DeleteDom
  /** 圆环点到上一个端点连接的虚线 */
  private dashed: Line

  public constructor(params: IControllerParams) {
    super(params)
    this.deleteDom = new DeleteDom(this.five, {
      onClick: this.deleteDomClickCallback,
      cancelDelete: this.cancelDeleteClickCallback,
    }).appendTo(this.container)
    // ==================== 虚线 ====================
    this.dashed = new Line(new Point([0, 0, 0]), new Point([0, 0, 0]), this.model)
    this.dashed.mesh.setMaterial({ dashed: true, dashScale: 100 })
    this.dashed.mesh.name = 'dashLine'
    // ==================== 事件监听 ====================
    // five
    this.five.on('cameraUpdate', this.onCameraUpdate)
    this.five.on('wantsTapGesture', this.onWantsTapGesture)
    this.five.on('wantsToMoveToPano', this.onWantsToMoveToPano)
    // model
    this.model.hook.on('lineAdded', this.onLineChanged)
    this.model.hook.on('lineRemoved', this.onLineChanged)

    // ==================== 其他 ====================
    this.hook.on('getStartPoint', this.onGetStartPoint)
    this.hook.on('getEndPoint', this.onGetEndPoint)
    this.hook.on('nowPointChange', this.onNowPointChange)
    this.hook.on('willChangeState', this.onWillChangeState)
    this.five.refresh()
  }

  public dispose() {
    super.dispose()
    this.group.remove(this.mouseGroup, this.dashed.mesh)
    // ==================== 解除事件监听 ====================
    // five
    this.five.off('cameraUpdate', this.onCameraUpdate)
    this.five.off('wantsTapGesture', this.onWantsTapGesture)
    this.five.off('wantsToMoveToPano', this.onWantsToMoveToPano)
    // model
    this.model.hook.off('lineAdded', this.onLineChanged)
    this.model.hook.off('lineRemoved', this.onLineChanged)

    this.hook.off('getStartPoint', this.onGetStartPoint)
    this.hook.off('getEndPoint', this.onGetEndPoint)
    this.hook.off('nowPointChange', this.onNowPointChange)
    this.hook.off('willChangeState', this.onWillChangeState)
    this.hook.emit('selectedChange', [])
    this.dashed.distanceItem.remove()
    this.five.needsRender = true
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

  public getEditingLines() {
    return this.model.lines
  }

  /** 编辑线条发生改变时通知外部 */
  private onLineChanged = () => {
    this.hook.emit(
      'editedLineChange',
      this.model.lines.map((line) => line.toCompletelyJson()),
    )
  }

  private onWantsTapGesture: EventCallback['wantsTapGesture'] = (raycaster) => {
    if (this.state === 'editing') return false

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

  /** 编辑时取消走点,watch时可以走 */
  private onWantsToMoveToPano = () => this.state === 'watching'

  /** 移动全景时更新 distanceItem 在屏幕上的位置 */
  private onCameraUpdate = () => {
    this.updateDistanceUI()
    this.dashed.distanceItem.update(this.five)
  }

  /** mobile态时更新虚线 */
  private updateMobileDashed = () => {
    if (!this.mobileStartPoint || !this.mobileNowPoint) return
    this.dashed.points[0].position.copy(this.mobileStartPoint.position)
    this.dashed.points[1].position.copy(this.mobileNowPoint.position)
    this.dashed.mesh.setPoints(this.mobileStartPoint.position, this.mobileNowPoint.position)
    this.dashed.distanceItem.update(this.five)
  }

  /** mobile态时更新放大镜 */
  private updateMagnifier = (point: Point) => {
    if (this.magnifier.visible === false) {
      this.magnifier.appendTo(this.container)
    }
    requestAnimationFrame(() => this.magnifier.renderWithPoint(point.position))
    this.five.needsRender = true
  }

  private onGetStartPoint = (point) => {
    this.mobileStartPoint = point
  }

  private onGetEndPoint = (point) => {
    const endPoint = this.mobileNowPoint

    this.removeLine(this.dashed)
    this.hasAppendDashed = false

    if (this.mobileStartPoint && endPoint) {
      const line = new Line(this.mobileStartPoint, endPoint, this.model)
      line.distanceItem.appendTo(this.container)
      line.distanceItem.update(this.five)
      line.hook.on('selected', this.chooseLine)
      this.group.add(line.mesh)
      this.model.addLine(line)
    }

    this.mobileStartPoint = null
    this.mobileNowPoint = null

    this.five.needsRender = true
  }

  private onNowPointChange = (point) => {
    if (this.state === 'watching') {
      this.mobileNowPoint = point
      this.updateMagnifier(point)
      return
    }

    if (!this.hasAppendDashed) {
      this.dashed.distanceItem.appendTo(this.container)
      this.group.add(this.dashed.mesh)
      this.hasAppendDashed = true
    }

    this.five.needsRender = true
    this.mobileNowPoint = point
    this.updateMobileDashed()
    this.updateMagnifier(point)
    this.five.needsRender = true
  }

  private onWillChangeState = (state, newState) => {
    this.state = newState
    if (this.state === 'watching') {
      this.five.helperVisible = true
    } else {
      // 隐藏点位和鼠标聚焦环
      this.five.helperVisible = false
    }
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

  private deleteDomClickCallback = () => {
    this.highlightedLines.forEach((line) => {
      this.removeLine(line)
      this.model.removeLine(line)
    })
    this.highlightedLines = []
    this.deleteDom.setLines([]).hide()
  }

  private cancelDeleteClickCallback = () => {
    this.clearHighlightLines()
  }
}
