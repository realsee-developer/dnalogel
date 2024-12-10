import * as THREE from 'three';
/**
 * @description 从相机反算pose
 */
export declare function getPoseFromCamera(camera: THREE.Camera): {
    latitude: number;
    longitude: number;
};
