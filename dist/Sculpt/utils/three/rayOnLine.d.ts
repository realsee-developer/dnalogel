import * as THREE from 'three';
/**
 * @description: 求射线与线段的交点（交点在线段上）
 * @param {THREE.Raycaster} params.ray 射线
 * @param {THREE.Line3} params.line 线段
 * @param {boolean} params.clampToLine `true` 限制交点在线段上, `false` 可以相交在线段的延长线上；默认为`true`
 */
export declare function rayOnLine(params: {
    raycaster: THREE.Raycaster;
    line: THREE.Line3;
    clampToLine?: boolean;
}): THREE.Vector3;
