import type { Point } from '../typings';
import { DIRECTION } from '../typings';
export declare function parseModelTVVideoPoints(points: Point[][] | Record<DIRECTION, Point>[]): Point[][];
