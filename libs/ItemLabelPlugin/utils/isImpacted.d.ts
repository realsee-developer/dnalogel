import * as THREE from 'three';
import type { Five } from "@realsee/five";
declare const Vector3: typeof THREE.Vector3;
/**
 * 碰撞检测可见性
 * */
export declare const isImpacted: (five: Five, sourceVector: THREE.Vector3, targetVector: THREE.Vector3, distance: number) => boolean;
export {};
