import { FiveLine } from '../../shared-utils/five/FiveLine';
import type Line from '../Model/line';
import type { Texture, Vector3 } from 'three';
import { Color } from 'three';
type ISetMaterialOpts = Parameters<FiveLine['setMaterial']>[0];
export interface ICreateLineOpts extends ISetMaterialOpts {
    hasPoint?: boolean;
    pointSize?: number;
    lineWidth?: number;
    pointTexture?: Texture;
    lineRenderOrder?: number;
    pointsRenderOrder?: number;
    lineColor?: Color | string | number;
    pointColor?: Color | string | number;
}
export declare function createLine(start: Vector3, end: Vector3, opts?: ICreateLineOpts): FiveLine;
export declare function createLineMesh(line: Line, type: 'normal' | 'light'): FiveLine;
export {};
