import * as THREE from 'three';
/**
 * N 阶贝塞尔曲线
 *
 * @param points points.length 阶数是 points.length - 1
 *
 * @description
 *
 * N 阶贝塞尔就是递归求插值, 从 N 阶一直降阶到 1 阶，也就是求直线线性插值
 */
export declare function Bezier(t: number, points: THREE.Vector3[]): THREE.Vector3;
