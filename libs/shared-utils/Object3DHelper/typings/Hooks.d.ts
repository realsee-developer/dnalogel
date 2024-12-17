import type * as THREE from 'three';
export type HelperEventMap = {
    wantToMove: (position: THREE.Vector3) => void;
    wantToRotate: (quaternion: THREE.Quaternion) => void;
    wantToScale: (scale: THREE.Vector3) => void;
    move: (position: THREE.Vector3) => void;
    rotate: (quaternion: THREE.Quaternion) => void;
    scale: (scale: THREE.Vector3) => void;
    moveStart: () => void;
    rotateStart: () => void;
    scaleStart: () => void;
    moveEnd: () => void;
    rotateEnd: () => void;
    scaleEnd: () => void;
    moveByMouseEnable: () => void;
    moveByMouseDisable: () => void;
};
export type InternalHelperEventMap = {
    initialHelperPosition: () => void;
    setObjectPosition: (position: THREE.Vector3) => void;
    setObjectRotate: (quaternion: THREE.Quaternion, origin?: THREE.Vector3) => void;
    setObjectScale: (scale: THREE.Vector3) => void;
    applyObjectPosition: (position: {
        matrix: THREE.Matrix4;
    }) => void;
    applyObjectRotate: (rotate: {
        quaternion: THREE.Quaternion;
        origin: THREE.Vector3;
    }) => void;
    applyObjectScale: (scale: {
        matrix: THREE.Matrix4;
        origin?: THREE.Vector3;
    }) => void;
};
export interface Object3DHelperState {
    enabled: boolean;
    visible: boolean;
    disposed: boolean;
}
export type Object3DHelperEventMap = HelperEventMap & {
    show: (options?: {
        userAction?: boolean;
    }) => void;
    hide: (options?: {
        userAction?: boolean;
    }) => void;
    enable: (options?: {
        userAction?: boolean;
    }) => void;
    disable: (options?: {
        userAction?: boolean;
    }) => void;
    dispose: () => void;
    stateChange: (params: {
        state: Object3DHelperState;
        prevState?: Object3DHelperState;
    }) => void;
};
