import Line from '../../Model/line'
import type { Five, Intersection, IntersectMeshInterface, Subscribe } from '@realsee/five'
import { DoubleSide, Group, Mesh, MeshBasicMaterial, Raycaster, RingGeometry, Vector3 } from 'three'
import type { Model } from '../../Model'
import type { PluginEvent } from '../../typings/event.type'
import type FiveHelper from '../FiveHelper'
import Point from '../../Model/point'
import TWEEN from '@tweenjs/tween.js'
import htmlString from './html'
import { requestAnimationFrameInterval } from '../../../shared-utils/animationFrame'
import noop from '../../../shared-utils/noop'
import calculateThreeMouse from '../../utils/calculateThreeMouse'
import { getMouseGroup } from '../../utils/mouseGroup'


export interface RangePieceControllerParams {
  container: Element
  five: Five
  group: Group
  model: Model
  mouseGroup: Group
  fiveHelper: FiveHelper
  hook: Subscribe<PluginEvent>
}

export default class RangePieceController {
  private container = document.createElement('div')
  private five: Five
  private group: Group
  private mouseGroup: Group
  private fiveHelper: FiveHelper
  private hook: Subscribe<PluginEvent>
  private content: HTMLElement | null
  private intersectMesh: Mesh
  private centerMouseXY: any
  private raycaster = new Raycaster()
  private pieceStyl = {
    matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    scale: 1,
    opacity: 0.4,
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(params: RangePieceControllerParams) {
    this.five = params.five
    this.hook = params.hook
    this.group = params.group
    this.mouseGroup = getMouseGroup()
    this.fiveHelper = params.fiveHelper
    this.container.innerHTML = htmlString
    this.container.classList.add('range-piece-controller')
    this.content = this.container.querySelector<HTMLElement>('.range-piece__content')
    if (this.content) {
      this.content.style.transform = `matrix3d(${this.pieceStyl.matrix3d.toString()}) scale(${this.pieceStyl.scale})`
      this.content.style.opacity = `${this.pieceStyl.opacity}`
    }
    this.group.add(this.mouseGroup)
    params.container.append(this.container)

    this.intersectMesh = new Mesh(
      new RingGeometry(0.04, 0.08, 32),
      new MeshBasicMaterial({ color: 0x12fffb, opacity: 0, side: DoubleSide, transparent: true }),
    )

    this.container.addEventListener('animationend', this.computedCenterMouseXY)

    this.five.on('cameraDirectionUpdate', this.onCameraDirectionUpdate)
    this.hook.on('modeChange', this.onModeChange)
    this.hook.on('willChangeMode', this.onWillChangeMode)
  }

  public dispose() {
    this.container.removeEventListener('animationend', this.computedCenterMouseXY)
    this.five.off('cameraDirectionUpdate', this.onCameraDirectionUpdate)
    this.hook.off('modeChange', this.onModeChange)
    this.hook.off('willChangeMode', this.onWillChangeMode)
    this.container.remove()
    this.group.remove(this.mouseGroup)
    this.mouseGroup.remove()
    this.five.scene.remove(this.intersectMesh)
  }

  private onCameraDirectionUpdate = () => {
    const intersection = this.getIntersection()
    if (intersection) {
      this.pieceChange(intersection)
      this.updateMouseGroup(intersection)
      const nowPoint = new Point(this.mouseGroup.position)
      this.hook.emit('nowPointChange', nowPoint)
    }
  }

  private onModeChange: PluginEvent['modeChange'] = (mode) => {
    this.dotAnimation()
    if (mode === 'Edit') {
      const point = this.getIntersection()?.point
      point && this.hook.emit('getStartPoint', new Point(point))
    }
  }

  private onWillChangeMode: PluginEvent['willChangeMode'] = (mode, newMode) => {
    if (mode === 'Edit' && newMode === 'Watch') {
      const point = this.getIntersection()?.point
      point && this.hook.emit('getEndPoint', new Point(point))
    }
  }

  /** 计算目标中心点经纬度 */
  private computedCenterMouseXY = () => {
    const aimRef = this.container.querySelector<HTMLElement>('.range-piece__aim')
    if (!aimRef) return null
    const { left, top, width, height } = aimRef.getBoundingClientRect()
    const mouseX = Math.round(left + width / 2)
    const mouseY = Math.round(top + height / 2)
    const mouse = { x: mouseX, y: mouseY }
    const mouseXY = calculateThreeMouse(mouse, this.five.getElement()) // 经纬度
    this.centerMouseXY = mouseXY
  }

  /** 计算目标中心点intersection */
  private getIntersection = () => {
    if (!this.centerMouseXY) return null
    this.raycaster.setFromCamera(this.centerMouseXY, this.five.camera)
    const intersection = this.five.model.intersectRaycaster(this.raycaster)[0]
    if (intersection) return intersection
    else return null
  }

  private pieceChange(intersection: Intersection) {
    const face = intersection.face
    const point = intersection.point
    if (face && point) {
      const normal = face.normal.clone()
      const positionVector = normal.clone().multiplyScalar(0.05)
      const position = point.clone().add(positionVector)
      this.intersectMesh.position.copy(position)
      const lookAtVector = position.clone().add(positionVector)
      this.intersectMesh.lookAt(lookAtVector)
      this.five.scene.add(this.intersectMesh)
      const matrix = this.intersectMesh.modelViewMatrix.clone().toArray()
      this.changePieceStyl('matrix3d', matrix)
      const scale = this.calculateSize(point)
      this.changePieceStyl('scale', scale)
    }
  }

  private calculateSize(vector: Vector3) {
    if (!vector) return
    const cameraPos = this.five.camera.position
    let distance = vector.distanceTo(cameraPos)
    const maxDis = 4
    const minDis = 0
    if (distance > maxDis) distance = maxDis
    const scale = (-0.6 / (maxDis - minDis)) * distance + 1
    return scale
  }

  /** 点击按钮时圆片动画 */
  private dotAnimation() {
    const firstEasing = TWEEN.Easing.Quadratic.InOut
    const from = { opacity: 0.4, scale: this.pieceStyl.scale }
    const to = { opacity: [1, 0.4], scale: [this.pieceStyl.scale * 0.8, this.pieceStyl.scale] }
    let stop = noop

    const firstTween = new TWEEN.Tween(from)
      .to(to, 500)
      .easing(firstEasing)
      .start(0)
      .onUpdate(({ opacity, scale }) => {
        this.changePieceStyl('scale', scale)
        this.changePieceStyl('opacity', opacity)
      })
      .onComplete(() => {
        stop()
      })

    stop = requestAnimationFrameInterval((time: number) => {
      firstTween.update(time)
    })
  }

  private changePieceStyl(key, value) {
    if (!this.content) return
    this.pieceStyl[key] = value
    this.content.style.transform = `matrix3d(${this.pieceStyl.matrix3d.toString()}) scale(${this.pieceStyl.scale})`
    this.content.style.opacity = `${this.pieceStyl.opacity}`
  }

  private updateMouseGroup(intersection: Intersection, mesh?: IntersectMeshInterface) {
    if (!intersection) return this.mouseGroup
    // ============ update mouseGroup position ============
    const adsorbentPoint = this.fiveHelper.getAdsorbentPoint(intersection)
    const viewPosition = adsorbentPoint ? adsorbentPoint : intersection.point
    this.mouseGroup.position.copy(viewPosition)
    // ============ update mouseGroup quaternion ============
    if (mesh) {
      this.mouseGroup.quaternion.copy(mesh.quaternion)
    } else if (intersection.face) {
      const normal = intersection.face.normal
      const positionVector = normal.clone().multiplyScalar(0.05)
      const position = intersection.point.clone().add(positionVector)
      const lookAtVector = position.clone().add(positionVector)
      this.mouseGroup.lookAt(lookAtVector)
    }
    return this.mouseGroup
  }
}

