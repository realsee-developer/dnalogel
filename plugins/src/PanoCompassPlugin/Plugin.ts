import * as THREE from 'three'
import type { Five, FivePlugin } from '@realsee/five'
import { getRoomInfoInstance } from './getRoomInfoInstance'
import { loadTexture } from '../shared-utils/three/loadTexture'
import CSS3DRenderPlugin, { CSS3DRenderPluginExportType } from '../CSS3DRenderPlugin'
import type { FloorplanServerRoomItem } from '../floorplan/typings/floorplanServerData'
import { BetterTween, tweenProgress } from '../shared-utils/animationFrame/BetterTween'

export interface PanoCompassPluginParameterType {
  compassImageUrl?: string
  entryDoorImageUrl?: string
}
export interface PanoCompassPluginData {
  north_rad: null | number
  entrance:
    | null
    | undefined
    | {
        position: { x: number; y: number; z: number }
      }
  room_observers:
    | undefined
    | { index: number; floor_index: number; room: FloorplanServerRoomItem }[]
}
export type PanoCompassPluginExportType = PanoCompassController



export const PanoCompassPlugin: FivePlugin<
  PanoCompassPluginParameterType | undefined,
  PanoCompassController
> = function (five, config) {
  return new PanoCompassController(five, config)
}

export default PanoCompassPlugin

class PanoCompassController {
  public five: Five
  public data?: PanoCompassPluginData
  public config?: PanoCompassPluginParameterType
  private group = new THREE.Group()
  private modelLoaded = false
  private roomInfoInstance?: ReturnType<typeof getRoomInfoInstance>
  private roomInfoWrapperInstance?: ReturnType<CSS3DRenderPluginExportType['create3DDomContainer']>
  private compassMeshTween?: BetterTween<{ progress: number }>
  private compassMesh?: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>
  private entryDoorMesh?: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>

  public constructor(five: Five, config?: PanoCompassPluginParameterType) {
    this.five = five
    this.config = config
    this.five.scene.add(this.group)
    five.once('dispose', this.dispose)
    five.once('modelLoaded', this.onFiveFistPanoLoaded)
    this.five.on('panoArrived', this.onFivePanoArrived)
    this.five.on('panoWillArrive', this.onFivePanoWillArrive)
    this.five.on('cameraDirectionUpdate', this.onFiveCameraDirectionUpdate)
  }

  public load(data: PanoCompassPluginData) {
    this.data = data
    if (this.modelLoaded) this.init()
  }

  public dispose = () => {
    this.five.scene.remove(this.group)
    this.group.remove(...this.group.children)
    this.compassMesh?.material.map?.dispose()
    this.entryDoorMesh?.material.map?.dispose()
    this.five.off('panoArrived', this.onFivePanoArrived)
    this.five.off('panoWillArrive', this.onFivePanoWillArrive)
  }

  private onFiveFistPanoLoaded = () => {
    this.modelLoaded = true
    if (this.data) this.init()
  }

  private async init() {
    if (!this.data || !this.modelLoaded) return
    const northRad = this.data.north_rad
    if (northRad != null) {
      this.compassMesh = await this.loadCompassMesh()
      this.compassMesh.rotateX(-Math.PI / 2)
      this.compassMesh.rotateZ(northRad - Math.PI / 2)
      this.group.add(this.compassMesh)
    }
    if (this.data.entrance != null) {
      this.entryDoorMesh = await this.loadEntryDoorMesh()
      this.roomInfoWrapperInstance = this.loadRoomInfo()
      this.roomInfoInstance = getRoomInfoInstance()
      this.entryDoorMesh.rotateX(-Math.PI / 2)
      if (this.roomInfoWrapperInstance)
        this.roomInfoInstance.appendTo(this.roomInfoWrapperInstance.container)
      this.group.add(this.entryDoorMesh)
    }
    this.onFivePanoArrived(this.five.panoIndex || 0)
    this.five.needsRender = true
  }

  private async loadCompassMesh() {
    const compassImageUrl =
      this.config?.compassImageUrl ||
      '//vrlab-image4.ljcdn.com/release/web/v3/north-point-circle.96498e69.png'
    const compassTexture = await loadTexture(compassImageUrl)
    const compassGeometry = new THREE.CircleGeometry(0.7, 32)
    const compassMaterial = new THREE.MeshBasicMaterial({
      map: compassTexture,
      transparent: true,
      opacity: 0,
      depthTest: false,
    })
    const compassMesh = new THREE.Mesh(compassGeometry, compassMaterial)
    compassMesh.name = 'pano-compass-mesh'
    return compassMesh
  }

  private async loadEntryDoorMesh() {
    const entryDoorImageUrl =
      this.config?.entryDoorImageUrl ||
      '//vrlab-image4.ljcdn.com/release/web/enterDoor.831b8208.png'
    const entryDoorTexture = await loadTexture(entryDoorImageUrl)
    const entryDoorGeometry = new THREE.PlaneGeometry(0.2, 0.16)
    const entryDoorMaterial = new THREE.MeshBasicMaterial({
      map: entryDoorTexture,
      transparent: true,
      opacity: 0.8,
      depthTest: false,
    })
    const entryDoorMesh = new THREE.Mesh(entryDoorGeometry, entryDoorMaterial)
    entryDoorMesh.name = 'pano-compass-entry-door'
    return entryDoorMesh
  }

  private loadRoomInfo() {
    const points = [
      new THREE.Vector3(-0.7, 0, -0.7),
      new THREE.Vector3(0.7, 0, -0.7),
      new THREE.Vector3(0.7, 0, 0.7),
      new THREE.Vector3(-0.7, 0, 0.7),
    ]
    const roomInfo = CSS3DRenderPlugin(this.five).create3DDomContainer(points)

    return roomInfo
  }

  private onFivePanoWillArrive = (panoIndex: number) => {
    if (panoIndex === this.five.panoIndex) return
    this.compassMeshTween?.dispose()
    this.compassMesh?.material.setValues({ opacity: 0 })
  }

  private onFivePanoArrived = (panoIndex: number) => {
    // ======== fix compass position ========
    const standingPosition = this.five.work.observers[panoIndex].standingPosition
    if (this.compassMesh) {
      // 指南针上移 0.01m，防止与地板重合
      this.compassMesh.position.copy(standingPosition.clone().setY(standingPosition.y + 0.01))
      if (this.compassMesh.material.opacity !== 0) return
      this.compassMeshTween?.dispose()
      this.compassMeshTween = tweenProgress(1000)
        .onUpdate(({ progress }) => {
          this.compassMesh?.material.setValues({ opacity: progress })
          this.five.needsRender = true
        })
        .play()
    }
    // ======== fix entry door label position and rotation ========
    if (this.entryDoorMesh) {
      const entryDoorPosition = new THREE.Vector3(
        this.data.entrance.position.x,
        this.data.entrance.position.y,
        this.data.entrance.position.z,
      )
      const panoToEntryDoorVector = entryDoorPosition
        .clone()
        .setY(standingPosition.y)
        .sub(standingPosition)
        .normalize()
      const compassEntryDoorPosition = standingPosition
        .clone()
        .add(panoToEntryDoorVector.clone().multiplyScalar(0.7))
        .setY(standingPosition.y + 0.01)
      this.entryDoorMesh.rotation.z = new THREE.Vector3(0, 0, -1).angleTo(panoToEntryDoorVector)
      this.entryDoorMesh.position.copy(compassEntryDoorPosition)
      // 不是客厅时，隐藏入户门指引
      this.data?.room_observers[panoIndex].room.type === 1
        ? this.entryDoorMesh?.material.setValues({ opacity: 1 })
        : this.entryDoorMesh?.material.setValues({ opacity: 0 })
    }
    // ======== fix room info ========
    if (this.roomInfoInstance && this.roomInfoWrapperInstance) {
      this.roomInfoWrapperInstance.css3DObject.position.copy(
        standingPosition.clone().setY(standingPosition.y + 0.01),
      )
      this.roomInfoInstance.setRoom(this.data.room_observers[panoIndex].room)
    }
    this.five.needsRender = true
  }

  private onFiveCameraDirectionUpdate = ({
    longitude,
    latitude,
  }: {
    longitude: number
    latitude: number
  }) => {
    if (!this.roomInfoWrapperInstance) return
    this.roomInfoWrapperInstance.css3DObject.rotation.z = longitude
    latitude > 0.66 && this.five.getCurrentState().mode === 'Panorama'
      ? this.roomInfoInstance?.show()
      : this.roomInfoInstance?.hide()
  }
}
