import * as THREE from 'three'

export type PanoSpatialTagPluginId = string | number;

export interface PanoSpatialTagPluginContentReplacement {
	[key: string]: string
}

interface PanoSpatialTagPluginDataElement {
	replacement: PanoSpatialTagPluginContentReplacement // 模板替换数据
	weight?: number // 权重，数字越大权重越大，默认为0
}
export interface PanoSpatialTagPluginDataElement {
	id: PanoSpatialTagPluginId
	position: number[] // 点xyz数组
	normal: number[] // 点所在平面法向xyz数组
}

export interface PanoSpatialTagPluginTagElement {
	id: PanoSpatialTagPluginId
	position: THREE.Vector3
  normal: THREE.Vector3
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

export interface PanoSpatialTagPluginContentEvent {
	[className: string]: (id: PanoSpatialTagPluginId) => any
}

export interface PanoSpatialTagPluginPointElement {
	id: PanoSpatialTagPluginId
	position: THREE.Vector3
	normal: THREE.Vector3
	replacement: PanoSpatialTagPluginContentReplacement
	weight: number
  distance?: number
}