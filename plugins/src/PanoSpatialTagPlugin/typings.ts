import * as THREE from 'three'

export type PanoSpatialTagPluginId = string | number;

export interface PanoSpatialTagPluginDataElement {
	id: PanoSpatialTagPluginId
	position: THREE.Vector3
	normal: THREE.Vector3
	content: string
	weight?: number
}

export interface PanoSpatialTagPluginTagElement {
	id: PanoSpatialTagPluginId
	position: THREE.Vector3
  normal: THREE.Vector3
  square: Array<THREE.Vector3>
  app: any
  destroying?: boolean
}

export interface PanoSpatialTagPluginOriginElement {
	id: PanoSpatialTagPluginId
  front: boolean
  left: number
  top: number
  destroying?: boolean
}

export interface PanoSpatialTagPluginPointElement {
	id: PanoSpatialTagPluginId
	position: THREE.Vector3
	normal: THREE.Vector3
	content: string
	weight: number
  distance: number,
}