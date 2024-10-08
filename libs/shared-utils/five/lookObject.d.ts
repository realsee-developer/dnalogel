import * as THREE from 'three';
import type { Five } from '@realsee/five';
/**
 * @description 以最佳视角观察物体
 * @param five five 实例
 * @param object 要观察的物体
 * @param config.scale 值越大离物体越远，建议范围为 1~2 之间，默认值为 1.4
 */
export declare function lookObject(five: Five, object: THREE.Object3D, config?: {
    scale?: number;
}): Promise<void>;
