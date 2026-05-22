import * as THREE from 'three';
/**
 * @description 根据camera的位置，将positions重新排序，使positions的正面朝向camera
 */
export declare function sortPositionsByCameraPosition(sourcePositions: THREE.Vector3[], cameraPosition: THREE.Vector3): THREE.Vector3[];
