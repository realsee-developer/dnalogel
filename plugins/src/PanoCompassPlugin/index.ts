import * as THREE from 'three'
import type { Five, FivePlugin } from '@realsee/five'
import { loadTexture } from '../shared-utils/three/loadTexture'
import { BetterTween, tweenProgress } from '../shared-utils/animationFrame/BetterTween'

export interface PanoCompassPluginParameterType {
  compassImageUrl?: string
}
export interface PanoCompassPluginData {
  north_rad: number
}
export type PanoCompassPluginExportType = PanoCompassController

export const PanoCompassPlugin: FivePlugin<PanoCompassPluginParameterType | undefined, PanoCompassController> =
  function (five, config) {
    return new PanoCompassController(five, config)
  }

export default PanoCompassPlugin

class PanoCompassController {
  public five: Five
  public data?: PanoCompassPluginData
  public config?: PanoCompassPluginParameterType
  private compassMeshTween?: BetterTween<{ progress: number }>
  private compassMesh?: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>

  public constructor(five: Five, config?: PanoCompassPluginParameterType) {
    this.five = five
    this.config = config
    five.once('panoLoaded', this.loadCompassMesh)
    five.once('dispose', this.dispose)
    this.five.on('panoArrived', this.onFivePanoArrived)
    this.five.on('panoWillArrive', this.onFivePanoWillArrive)
  }

  public load(data: PanoCompassPluginData) {
    this.data = data
    if (this.compassMesh && !this.five.scene.children.includes(this.compassMesh)) {
      // 模型已经加载好了，才加载数据
      this.fixRotation(data.north_rad)
      this.fixPosition(this.five.panoIndex || 0)
      this.five.scene.add(this.compassMesh)
    }
  }

  public dispose = () => {
    this.five.off('panoArrived', this.onFivePanoArrived)
    this.five.off('panoWillArrive', this.onFivePanoWillArrive)
    this.five.off()
  }

  private loadCompassMesh = async () => {
    const compassImageUrl =
      this.config?.compassImageUrl || '//vrlab-image4.ljcdn.com/release/web/v3/north-point-circle.96498e69.png'
    const texture = await loadTexture(compassImageUrl)
    const compassGeometry = new THREE.CircleGeometry(0.7, 32)
    const compassMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 1,
      depthTest: false,
    })
    const compassMesh = new THREE.Mesh(compassGeometry, compassMaterial)
    compassMesh.rotateX(-Math.PI / 2)
    compassMesh.name = 'pano-compass-mesh'
    this.compassMesh = compassMesh
    this.fixPosition(this.five.panoIndex || 0)
    if (!this.data) return
    this.fixRotation(this.data.north_rad)
    this.five.scene.add(compassMesh)
  }

  private onFivePanoWillArrive = (panoIndex: number) => {
    if (panoIndex === this.five.panoIndex) return
    this.compassMeshTween?.dispose()
    this.compassMesh?.material.setValues({ opacity: 0 })
  }

  private onFivePanoArrived = (panoIndex: number) => {
    if (this.compassMesh?.material.opacity !== 0) return
    this.fixPosition(panoIndex)
    this.compassMeshTween?.dispose()
    this.compassMeshTween = tweenProgress(1000)
      .onUpdate(({ progress }) => {
        this.compassMesh?.material.setValues({ opacity: progress })
        this.five.needsRender = true
      })
      .play()
  }

  private fixPosition(panoIndex: number) {
    if (!this.compassMesh) return
    const standingPosition = this.five.work.observers[panoIndex].standingPosition
    // 指南针上移 0.01m，防止与地板重合
    const compassPosition = standingPosition.clone().add(new THREE.Vector3(0, 0.01, 0))
    this.compassMesh.position.copy(compassPosition)
    this.five!.needsRender = true
  }

  private fixRotation(northRad: number) {
    if (!this.compassMesh) return
    this.compassMesh.rotateZ(northRad - Math.PI / 2)
    this.five!.needsRender = true
  }
}
