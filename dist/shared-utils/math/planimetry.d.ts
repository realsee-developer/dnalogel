/**
 * 平面几何相关数学函数
 */
/**
 * 平面点坐标。
 */
export interface Point {
    x: number;
    y: number;
}
/**
 * 检查两个点是否位置相同
 * @param point1
 * @param point2
 * @return
 */
export declare function samePointAt(point1: Point, point2: Point): boolean;
/**
 * 计算两个点之间的位置
 * @param  {point} point1
 * @param  {point} point2
 * @return {number}
 */
export declare function distance(point1: Point, point2: Point): number;
/**
 * 两个计算的斜率是否相同
 * @param  {number} k1
 * @param  {number} k2
 * @return
 */
export declare function sameK(k1: number, k2: number): boolean;
/**
 * 获取两点之间的斜率
 * @param  {point} point1
 * @param  {point} point2
 * @return {number}
 */
export declare function getK(point1: Point, point2: Point): number;
/**
 * 获取一点对于线段上最近的一点，
 * 如果可以是过直线垂线的垂足，不行的话取线段的两端
 * @param  {point} point1
 * @param  {linePoints} linePoints
 * @return {point}
 */
export declare function closestPointOnLine(point: Point, linePoints: Point[]): {
    x: any;
    y: any;
};
/**
 * 点到线段的距离，
 * 如果可以是过直线垂线的垂足的距离，不行的话取线段的两端的距离
 * @param  {point} point1
 * @param  {linePoints} linePoints
 * @return {number}
 */
export declare function pointDistanceFromLine(point: Point, linePoints: Point[]): number;
/**
 * 做线段的距离一定值的平行线段
 * @param  {number} distanceOfLine
 * @param  {linePoints} linePoints
 * @return {[linePoints, linePoints]}
 */
export declare function linesWithDistanceOfLine(distanceOfLine: number, linePoints: Point[]): {
    x: any;
    y: any;
}[][];
/**
 * 做线段的距离一定值的平行线段 (如果线段是弧形的)
 * @param  {number} distanceOfLine
 * @param  {linePoints} linePoints
 * @param  {number} 弧形定点到线段的距离
 * @return {[linePoints, linePoints]}
 */
export declare function linesWithDistanceOfLineWithCurve(distanceOfLine: number, linePoints: Point[], curve: number): {
    x: number;
    y: number;
}[][];
/**
 * 两条线段(包括延长线)的交点点
 * @param  {linePoints} linePoints1
 * @param  {linePoints} linePoints2
 * @param   needIntersectionInLine 是否是延长线的相交
 * @return {point || false}
 */
export declare function intersectionOfLine(linePoints1: Point[], linePoints2: Point[], needIntersectionInLine: boolean): false | Point;
/**
 * 是否点在线段上
 * @param  {point} point
 * @param  {linePoints} linePoints
 * @return
 */
export declare function pointOnLine(point: Point, linePoints: Point[]): boolean;
/**
 * 让点按照另一个点为圆心，一定弧度的情况下转动得到下一个点
 * @param  {point} point
 * @param  {point} centerPoint
 * @param  {number} rad
 * @return {point}
 */
export declare function pointRotateByCenterPoint(point: Point, centerPoint: Point, rad: number): {
    x: number;
    y: number;
};
/**
 * 获取一些点的中心点
 * @param  {points} point
 * @return {point}
 */
export declare function getCenterPointOfPoints(points: Point[]): {
    x: number;
    y: number;
};
export declare function isIntersect(linePoints1: Point[], linePoints2: Point[]): 1 | 0;
export declare function getAreaSize(points: Point[]): number;
export declare function getAreaSizeWithoutLine(points: Point[]): number;
