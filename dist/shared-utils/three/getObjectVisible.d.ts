import type * as THREE from 'three';
/**
 * @description 递归判断对象及其父对象是否可见
 */
export declare const getObjectVisible: (object?: THREE.Object3D | null) => boolean;
