import * as THREE from 'three';
/**
 * @description: 在指定中心点上，使用 quaternion 旋转物体。
 * @param {THREE.Object3D} object 旋转对象
 * @param {THREE.Quaternion} quaternion 旋转四元数
 * @param {THREE.Vector3} rotateCenter 旋转中心
 */
export default function setObjectQuaternion(object: THREE.Object3D, quaternion: THREE.Quaternion, rotateCenter: THREE.Vector3): void;
