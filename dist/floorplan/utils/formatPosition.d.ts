import type { Five } from '@realsee/five';
import type { Vector2Position } from '../../typings/math.type';
import type { FloorplanData, FloorplanBounding } from '../typings/floorplanData';
export declare function pathD(points: Vector2Position[], options?: {
    needZ?: boolean;
    needA?: Record<number, string>;
    format?: (vector: Vector2Position) => Vector2Position;
}): string;
/** 把户型图上点点位转换到 SVG 上的点位 */
export default function formatFloorplanPoint({ x, y }: Vector2Position, bounding: FloorplanBounding): {
    x: number;
    y: number;
};
/** 模型坐标转户型图坐标 */
export declare function modelPosition2FloorplanPosition(position: {
    x: number;
    y: number;
    z: number;
}, floorplanData: FloorplanData): {
    x: number;
    y: number;
};
/** 户型图点位转在图片上的相对坐标 */
export declare function floorplanPosition2ImagePosition(position: {
    x: number;
    y: number;
}, floorplanData: FloorplanData): {
    x: number;
    y: number;
};
/** 求三维坐标点所在的楼层 */
export declare function getFloorIndexFromModelPosition(position: {
    x: number;
    y: number;
    z: number;
}, five: Five): number;
