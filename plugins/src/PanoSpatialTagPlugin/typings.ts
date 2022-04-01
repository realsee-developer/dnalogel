import * as THREE from 'three'

export interface PanoSpatialTagPluginDataElement {
	id: string | number
	position: THREE.Vector3
	normal: THREE.Vector3
	content: string
	weight?: number
}

export interface PanoSpatialTagPluginTagElement {
	id: string | number
	position: THREE.Vector3
  normal: THREE.Vector3
  square: Array<THREE.Vector3>
  app: any
  destroying?: boolean
}

export interface PanoSpatialTagPluginOriginElement {
	id: string | number
  front: boolean
  left: number
  top: number
  destroying?: boolean
}

export interface PanoSpatialTagPluginPointElement {
	id: string | number
	position: THREE.Vector3
	normal: THREE.Vector3
	content: string
	weight: number
  distance: number,
}