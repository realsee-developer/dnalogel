import type { Vector2 } from 'three';
import type Point from '../Model/point';
import type { Five } from '@realsee/five';
/**
 * @param tapPoint 注意这里的坐标是相对于 FiveElement 的
 */
export declare function findClosestPoint(five: Five, points: Point[], tapPoint: Vector2, maxDistance?: number): {
    distance: number;
    point: Point;
};
