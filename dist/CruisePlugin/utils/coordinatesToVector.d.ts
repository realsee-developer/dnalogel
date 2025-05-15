import * as THREE from 'three';
/** 坐标转换成单位向量 */
declare function coordinatesToVector(coordinates: {
    longitude: number;
    latitude: number;
}): THREE.Vector3;
export { coordinatesToVector };
