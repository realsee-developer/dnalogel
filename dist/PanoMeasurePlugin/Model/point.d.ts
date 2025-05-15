import type { PointJson } from '../typings/data';
import { Vector3 } from 'three';
export default class Point {
    id: string;
    position: Vector3;
    readonly type = "point";
    constructor(position: Vector3 | number[]);
    toJson(): PointJson;
    clone(): Point;
}
