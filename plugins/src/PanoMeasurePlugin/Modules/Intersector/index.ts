import type { Five } from '@realsee/five'

import * as THREE from 'three'
import { ObjectIntersect } from '../ObjectIntersect'
import { intersectPlanImg, intersectDomImg } from './_Assets'

/** 移动端下的聚焦环
 * @description 暂时没想好起什么名字，先用这个名字吧
 */
export class IntersectController {
  private five: Five
  /** 父容器 DOM，即 appendTo 的 target */
  private wrapper?: HTMLElement
  /** 当前功能 DOM 容器 */
  private container = document.createElement('div')
  private intersectDom = document.createElement('div')
  private objectIntersect?: ObjectIntersect

  public constructor(five: Five) {
    this.five = five
    const texture = new THREE.TextureLoader().load(intersectPlanImg)
    this.objectIntersect = new ObjectIntersect({ planTexture: texture })
    this.initDom()
    five.on('cameraUpdate', this.onFiveCameraUpdate)
  }

  public appendTo(target: HTMLElement): void {
    this.wrapper = target
    this.objectIntersect?.appendTo(this.five.scene)
    this.onFiveCameraUpdate()
    target.append(this.container)
  }

  /** 从场景中移除当前功能 */
  public remove(): void {
    this.container.remove()
  }

  private initDom() {
    const container = this.container
    container.style.width = '6.75rem'
    container.style.height = '6.75rem'
    container.style.position = 'absolute'
    container.style.left = '50%'
    container.style.top = '50%'
    container.style.transform = 'translate(-50%, -50%)'

    const intersectDom = this.intersectDom
    intersectDom.style.width = '100%'
    intersectDom.style.height = '100%'
    intersectDom.style.backgroundImage = `url('${intersectDomImg}')`
    intersectDom.style.backgroundSize = '100% 100%'

    container.appendChild(intersectDom)
  }

  private onFiveCameraUpdate = () => {
    if (!this.intersectDom) return
    const center = new THREE.Vector2(0, 0)
    const raycaster = new THREE.Raycaster()
    raycaster.setFromCamera(center, this.five.camera)
    const intersect = this.five.model.intersectRaycaster(raycaster)[0]
    if (!intersect) return
    const normal = intersect.face?.normal
    if (!normal) return
    const point = intersect.point
    const position = point.clone()
    // const position = point.clone().add(normal.clone().multiplyScalar(0.05))
    // const lookAtPoint = position.clone().add(normal)
    this.objectIntersect.position.copy(position)
    // this.objectIntersect.lookAt(lookAtPoint)
    const modelViewMatrix = this.objectIntersect.planMesh.modelViewMatrix.clone().toArray()
    this.intersectDom.style.transform = `matrix3d(${modelViewMatrix.toString()})`
  }
}
