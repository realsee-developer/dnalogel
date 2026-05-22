import { Vector2 } from 'three';
/**
 * 获取一点对于线段上最近的一点，
 * 如果可以是过直线垂线的垂足，不行的话取线段的两端
 * @param point
 * @param linePoints
 * @return
 */
export declare function closestPointOnLine(point: Vector2, linePoints: Vector2[]): Vector2;
/**
 * 检查两个点是否位置相同
 * point: { x: number, y: number }
 * @param  point1
 * @param  point2
 * @return
 */
export declare function samePointAt(point1: Vector2, point2: Vector2): boolean;
