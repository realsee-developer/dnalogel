import * as THREE from 'three';
import type { Five } from '@realsee/five';
/**
 * @description 以最佳视角看向一个三维空间点
 * @param five five 实例
 * @param point 要观察的坐标点
 * @param config.distance 观察距离，单位为米，默认为 3
 */
export declare function lookPoint(five: Five, point: THREE.Vector3, config?: {
    distance?: number;
}): Promise<void>;
