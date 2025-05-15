import type * as THREE from 'three';
/** 单位向量转换成坐标 */
declare function vectorToCoordinates(vector: THREE.Vector3): {
    longitude: number;
    latitude: number;
};
export { vectorToCoordinates };
