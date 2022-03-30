import * as THREE from 'three'

export interface PanoSpatialTagPluginTagElement {
	id: string | number
	position: THREE.Vector3
  normal: THREE.Vector3
  square: Array<THREE.Vector3>
  hidden?: boolean
  app: any
  dispose: () => void
}

export interface PanoSpatialTagPluginOriginElement {
	id: string | number
	position: THREE.Vector3
  normal: THREE.Vector3
  front: boolean
  hidden?: boolean
  left: number
  top: number
}

export interface PanoSpatialTagPluginDataElement {
	id: string | number
	position: THREE.Vector3
	normal: THREE.Vector3
	weight?: number
	content: string
}