import * as THREE from 'three';
import { type ColorStyle, type OcclusionStyle } from '../utils/color';
import { IObject3D } from '../../shared-utils/three/IObject3D';
import type { PointData } from '../utils/data';
export type { PointData } from '../utils/data';
export declare const circleImageURL: string;
export type PointStyle = ColorStyle & {
    size: number;
} & OcclusionStyle;
export declare class PointMesh extends IObject3D {
    name: string;
    get color(): THREE.Color;
    get size(): number;
    private opacityBeforeHighlight;
    private highlighted;
    private fontMesh;
    private backgroundMesh;
    constructor(params?: Partial<PointStyle & PointData>);
    setStyle(params: Partial<PointStyle>): void;
    highlight(): void;
    unhighlight(): void;
}
