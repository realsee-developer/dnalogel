import type { Vector3 } from 'three';
import { type AnyPosition } from '../../shared-utils/positionToVector3';
export declare function planeNormal(points: [AnyPosition, AnyPosition, AnyPosition] | [AnyPosition, AnyPosition, AnyPosition, AnyPosition]): Vector3;
export declare function planeNormal(points: AnyPosition[]): Vector3 | void;
