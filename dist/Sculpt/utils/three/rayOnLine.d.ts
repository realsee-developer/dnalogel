import * as THREE from 'three';
/**
 * @description: 求射线与线段的交点（交点在线段上）
 * @param {THREE.Vector3} cameraPosition 摄像机位置
 * @param {THREE.Ray} ray 射线
 * @param {THREE.Line3} line 线段
 * @param {boolean} clampToLine 是否限制交点在线段上，默认为true，不限制则可以相交在线段的延长线上
 */
export declare function rayOnLine(params: {
    cameraPosition: THREE.Vector3;
    raycaster: THREE.Raycaster;
    line: THREE.Line3;
    clampToLine?: boolean;
}): THREE.Vector3;
