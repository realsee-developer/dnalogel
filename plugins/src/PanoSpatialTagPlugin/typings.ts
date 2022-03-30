import * as THREE from 'three'

interface PanoSpatialTagPluginTagElement {
	id: string | number
	position: THREE.Vector3
  normal: THREE.Vector3
  square: Array<THREE.Vector3>
  hidden?: boolean
  container: Element
  dispose: void
}

interface PanoSpatialTagPluginOriginElement {
	id: string | number
	position: THREE.Vector3
  normal: THREE.Vector3
  front: boolean
  hidden?: boolean
  left: number
  top: number
}

export interface PanoSpatialTagPluginTag {
  [index: number]: PanoSpatialTagPluginTagElement
}

export interface PanoSpatialTagPluginOrigin {
  [index: number]: PanoSpatialTagPluginOriginElement
}

export interface PanoSpatialTagPluginDataElement {
	id: string | number
	position: THREE.Vector3
	normal: THREE.Vector3
	weight?: number
	slot: string
}