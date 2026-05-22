import type * as THREE from 'three';
export type PanoSpatialTagPluginId = string | number;
export interface PanoSpatialTagPluginContentReplacement {
    [key: string]: string;
}
interface PanoSpatialTagPluginAppData {
    replacement: PanoSpatialTagPluginContentReplacement;
    weight?: number;
}
export interface PanoSpatialTagPluginDataElement extends PanoSpatialTagPluginAppData {
    id: PanoSpatialTagPluginId;
    position: number[];
    normal: number[];
}
export interface PanoSpatialTagPluginTagElement {
    id: PanoSpatialTagPluginId;
    position: THREE.Vector3;
    normal: THREE.Vector3;
    app: any;
    destroying?: boolean;
}
export interface PanoSpatialTagPluginOriginElement {
    id: PanoSpatialTagPluginId;
    front: boolean;
    left: number;
    top: number;
    destroying?: boolean;
}
export interface PanoSpatialTagPluginContentEvent {
    [className: string]: (id: PanoSpatialTagPluginId) => any;
}
export interface PanoSpatialTagPluginPointElement {
    id: PanoSpatialTagPluginId;
    position: THREE.Vector3;
    normal: THREE.Vector3;
    replacement: PanoSpatialTagPluginContentReplacement;
    weight: number;
    distance?: number;
}
export {};
