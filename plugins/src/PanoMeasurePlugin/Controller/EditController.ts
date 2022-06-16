import type { LineJson } from '../typings/data'
import type { Intersection, IntersectMeshInterface } from '@realsee/five'
import Hammer from 'hammerjs'
import { Model } from '../Model'
import Line from '../Model/line'
import Point from '../Model/point'
import throttle from '../../shared-utils/throttle'
import BaseController, { IControllerParams } from './BaseController'
import { getIntersectionFromEvent } from '../utils/getIntersectionFromEvent'

export interface EditEvent {
  editedLineChange: (lines: LineJson[]) => void
}

export default class EditController extends BaseController {
  public type = 'edit'
  public model = new Model({ userDistanceItemCreator: this.userDistanceItemCreator })
  private pressPoint?: Point
  private hasAppendDashed = false
  private hasAppendMouseGroup = false
  private fiveElement?: HTMLCanvasElement
  /** 上一个端点位置 */
  private lastPoint: Point | null = null
  /** 鼠标点到上一个端点连接的虚线 */
  private dashed: Line
  private hammer?: InstanceType<typeof Hammer['Manager']>

  /** 根据 intersection 更新放大镜和吸附点 */
  private onIntersectionUpdate = throttle((intersection: Intersection, mesh?: IntersectMeshInterface) => {
    if (this.hasAppendMouseGroup === false) {
      this.group.add(this.mouseGroup)
      this.magnifier.appendTo(this.container)
      this.hasAppendMouseGroup = true
    }
    const position = this.updateMouseGroup(intersection, mesh).position
    this.pressPoint?.position.copy(position)
    this.updateDashed()
    requestAnimationFrame(() => this.magnifier.renderWithPoint(this.mouseGroup.position))
    this.five.needsRender = true
  }, 20)

  public constructor(params: IControllerParams) {
    super(params)
    // ==================== 虚线 ====================
    this.dashed = new Line(new Point([0, 0, 0]), new Point([0, 0, 0]), this.model)
    this.dashed.mesh.setMaterial({ dashed: true, dashScale: 100 })
    // ==================== 事件监听 ====================
    // five
    this.five.on('cameraUpdate', this.onCameraUpdate)
    this.five.on('wantsPanGesture', this.onWantsPanGesture)
    this.five.on('wantsTapGesture', this.onWantsTapGesture)
    this.five.on('wantsToMoveToPano', this.onWantsToMoveToPano)
    this.five.on('intersectionOnModelUpdate', this.onIntersectionUpdate)
    // model
    this.model.hook.on('lineAdded', this.onLineChanged)
    this.model.hook.on('lineRemoved', this.onLineChanged)
    // hammer
    const fiveElement = this.five.getElement()
    if (fiveElement) {
      this.fiveElement = fiveElement
      const hammer = new Hammer(fiveElement)
      this.hammer = hammer
      hammer.on('tap', this.onTap)
      hammer.on('pan', this.onPan)
      hammer.on('press', this.onPress)
      hammer.on('panend', this.onPanEnd)
    }
    // fiveElement
    this.fiveElement?.addEventListener('mouseleave', this.onMouseLeave)
    // ==================== 其他 ====================
    this.hook.emit('anchorChange', null)
    this.five.refresh()
  }

  public dispose() {
    super.dispose()
    this.group.remove(this.mouseGroup, this.dashed.mesh)
    // ==================== 解除事件监听 ====================
    // five
    this.five.off('cameraUpdate', this.onCameraUpdate)
    this.five.off('wantsPanGesture', this.onWantsPanGesture)
    this.five.off('wantsTapGesture', this.onWantsTapGesture)
    this.five.off('wantsToMoveToPano', this.onWantsToMoveToPano)
    this.five.off('intersectionOnModelUpdate', this.onIntersectionUpdate)
    // model
    this.model.hook.off('lineAdded', this.onLineChanged)
    this.model.hook.off('lineRemoved', this.onLineChanged)
    // hammer
    this.hammer?.destroy()
    // fiveElement
    this.fiveElement?.removeEventListener('mouseleave', this.onMouseLeave)
    this.magnifier.dispose()
    this.dashed.distanceItem.remove()
    this.five.needsRender = true
  }

  public getEditingLines() {
    return this.model.lines
  }

  /** 撤销编辑 */
  public revoke = () => {
    // ============ revoke points ============
    // 如果当前没有虚线，只有起始点，需要删除起始点，重置起始状态。并删除虚线实例
    if (this.model.lines.length === 0 && this.lastPoint) {
      this.lastPoint = null
      this.hasAppendDashed = false
      this.dashed.distanceItem.remove()
      this.group.remove(this.dashed.mesh)
      this.hook.emit('anchorChange', null)
      this.five.needsRender = true
      return
    }
    if (this.model.lines.length === 0 && !this.lastPoint) return
    if (!this.lastPoint) return
    const revokedLine = this.model.lines[this.model.lines.length - 1]
    const lastPoint = revokedLine.findAnotherPoint(this.lastPoint)
    if (!lastPoint) return
    this.lastPoint = lastPoint
    this.hook.emit('anchorChange', lastPoint.position)
    // ============ revoke lines ============
    this.group.remove(revokedLine.mesh)
    this.model.removeLine(revokedLine)
    // ============ revoke mouse group ============
    this.hasAppendMouseGroup = false
    this.mouseGroup.position.copy(this.lastPoint.position)
    this.group.remove(this.mouseGroup)
    // ============ revoke lineDistance ============
    revokedLine.distanceItem.remove()
    // ============ revoke dashed ============
    this.updateDashed()
    // ============ revoke magnifier ============
    this.magnifier.remove()
    this.five.needsRender = true
  }

  private onMouseLeave = () => {
    this.magnifier.remove()
    this.group.remove(this.mouseGroup)
    this.hasAppendMouseGroup = false

    if (this.lastPoint) {
      this.mouseGroup.position.copy(this.lastPoint.position)
      this.updateDashed()
    }
  }

  /** 编辑线条发生改变时通知外部 */
  private onLineChanged = () => {
    this.hook.emit(
      'editedLineChange',
      this.model.lines.map((line) => line.toCompletelyJson()),
    )
  }

  private onPress = (e: typeof Hammer['Input']) => {
    const [intersection] = getIntersectionFromEvent(this.five, e)
    if (!intersection || !intersection.face) return
    const nowPoint = new Point(intersection.point)
    this.pressPoint = nowPoint
    this.onIntersectionUpdate(intersection)
  }

  /**
   * 1. 如果之前没有长按行为「即没有长按点时」-> 滑动全景
   * 2. 如果有长按点，把长按点位置更新为当前位置
   */
  private onPan = (e: typeof Hammer['Input']) => {
    if (!this.pressPoint) return
    const [intersection] = getIntersectionFromEvent(this.five, e)
    if (!intersection || !intersection.face) return
    this.onIntersectionUpdate(intersection)
  }

  private onPanEnd = (e: typeof Hammer['Input']) => {
    if (!this.pressPoint) return
    this.onTap(e)
  }

  /**
   * 1. 如果存在上一个点，需要绘制当前点到上一个点的连线
   * 2. 把上一个点的位置更新为当前点的位置
   * 3. 清除 mouseGroup 和 magnifier
   */
  private onTap = (e: typeof Hammer['Input']) => {
    if (!this.hasAppendDashed) {
      this.dashed.distanceItem.appendTo(this.container)
      this.group.add(this.dashed.mesh)
    }
    this.hasAppendDashed = true
    const [intersection] = getIntersectionFromEvent(this.five, e)
    this.updateMouseGroup(intersection)
    const nowPoint = new Point(this.mouseGroup.position)
    const lastPoint = this.lastPoint
    if (nowPoint) this.lastPoint = nowPoint
    if (nowPoint && lastPoint) {
      const line = new Line(lastPoint, nowPoint, this.model)
      line.distanceItem.appendTo(this.container)
      this.model.addLine(line)
      this.group.add(line.mesh)
      line.distanceItem.update(this.five)
    }
    this.pressPoint = undefined
    this.hasAppendMouseGroup = false
    this.magnifier.remove()
    this.group.remove(this.mouseGroup)
    this.updateDashed()
    this.five.needsRender = true
    this.hook.emit('anchorChange', nowPoint.position)
  }

  private onWantsTapGesture = (): false => false

  /** 编辑时取消走点 */
  private onWantsToMoveToPano = () => false

  /** 存在长按点时不能移动全景 */
  private onWantsPanGesture = (): false | undefined => (this.pressPoint ? false : undefined)

  /** 移动全景时更新 distanceItem 在屏幕上的位置 */
  private onCameraUpdate = () => {
    this.updateDistanceUI()
    this.dashed.distanceItem.update(this.five)
  }

  /** 更新虚线 */
  private updateDashed = () => {
    if (!this.lastPoint) return
    this.dashed.points[0].position.copy(this.lastPoint.position)
    this.dashed.points[1].position.copy(this.mouseGroup.position)
    this.dashed.mesh.setPoints(this.lastPoint.position, this.mouseGroup.position)
    this.dashed.distanceItem.update(this.five)
  }
}
