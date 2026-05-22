import type { Vector3 } from 'three';
import { Matrix4 } from 'three';
import type { TagInstance, BoxPosition } from '../typings';
/**
 * 计算 BoxPosition 的8个角点
 */
export declare function getBoxCorners(boxPosition: BoxPosition, transform: Matrix4): Vector3[];
/**
 * 应用 matrix 变换到点数组
 */
export declare function applyMatrixToPoints(points: Vector3[], matrix?: number[]): Vector3[];
export declare function getTagPosition(tag: TagInstance): Vector3 | [Vector3, Vector3, Vector3, Vector3] | Vector3[];
export declare function getTagCenterPosition(tag: TagInstance): Vector3;
