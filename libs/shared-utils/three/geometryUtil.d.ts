import type * as THREE from 'three';
import { Vector3 } from 'three';
export declare function getGeometryArea(geometry: THREE.BufferGeometry): number;
export declare function getGeometryInfo(geometry: THREE.BufferGeometry): {
    center: Vector3;
    area: number;
} | undefined;
/**
 * @description: 计算三角形的面积
 */
export declare function triangleArea(p1: Vector3, p2: Vector3, p3: Vector3): number;
/**
 * @description: 计算三角形的质心
 */
export declare function triangleCenter(p1: Vector3, p2: Vector3, p3: Vector3, area?: number): Vector3;
