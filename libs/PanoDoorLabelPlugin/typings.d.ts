import type * as THREE from 'three';
export interface DoorLabel {
    /** 观察点的房间 */
    roomName: string;
    /** 标签展示的房间名 */
    name: string;
    /** 标签的三维坐标位置 */
    position: THREE.Vector3;
    /** 标签的朝向 */
    toward: '' | 'left' | 'right' | 'back' | 'forward';
    [props: string]: any;
}
export interface LabelItemProp extends DoorLabel {
    /** css left */
    left: number;
    /** css top */
    top: number;
    /** css transform */
    transform: string;
    /** 当前点位有哪些标签可以展示 */
    visible: boolean;
    /** 是否能够展示在用户视线内（inSight 是 visible 的一个子集，当切换户型图模式或是有模型遮挡时，inSight 为 false） */
    inSight: boolean;
    /** icon 朝向 */
    cameraToward: '' | 'left' | 'right' | 'back' | 'forward';
}
export interface NeverOverlapLabel {
    left: number;
    top: number;
    disFromCameraToLabel: number;
    index: number;
    transform?: string;
}
export interface DoorLabelConfig {
    MinVisibledistance: number;
    MaxVisibledistance: number;
    OffsetHeight: number;
}
