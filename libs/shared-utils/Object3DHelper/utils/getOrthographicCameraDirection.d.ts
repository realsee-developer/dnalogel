import * as THREE from 'three';
/**
 * @description 获取正交相机的方向
 */
export declare function getOrthographicCameraDirection(pose: {
    longitude: number;
    latitude: number;
}): THREE.Vector3;
