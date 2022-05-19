import * as THREE from 'three'

export type PanoSpatialTagPluginId = string | number; // 标签唯一ID

export interface PanoSpatialTagPluginContentReplacement { // 模板替换数据
    [key: string]: string
}

interface PanoSpatialTagPluginAppData { // 业务配置数据
    replacement: PanoSpatialTagPluginContentReplacement
    weight?: number // 权重，数字越大权重越大，默认为-1
}

export interface PanoSpatialTagPluginDataElement extends PanoSpatialTagPluginAppData {
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

export interface PanoSpatialTagPluginContentEvent { // 自定义标签内容中className对应的点击事件
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
