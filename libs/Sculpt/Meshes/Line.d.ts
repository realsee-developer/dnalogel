import * as THREE from 'three';
import { type OcclusionStyle, type LineStyle } from '../utils/color';
import { type AnyPositions } from '../../shared-utils/positionToVector3';
import { IObject3D } from '../../shared-utils/three/IObject3D';
import type { PointsData } from '../utils/data';
export type LineMeshStyle = LineStyle & {
    dashed?: boolean;
} & OcclusionStyle;
export type LineData = PointsData;
export declare class LineMesh extends IObject3D {
    name: string;
    points: THREE.Vector3[];
    get lineWidth(): number;
    get color(): THREE.Color;
    get dashed(): boolean;
    get occlusionVisibility(): boolean;
    get occlusionMode(): "translucence" | "depthTest";
    protected highlighted: boolean;
    private line;
    private backLine;
    private opacityBeforeHighlight;
    private paramsStyle;
    constructor(params?: Partial<LineMeshStyle & LineData>);
    setPoints(points: AnyPositions): void;
    setResolution(width: number, height: number): void;
    setStyle(params: Partial<LineMeshStyle>): void;
    highlight(): void;
    unhighlight(): void;
}
