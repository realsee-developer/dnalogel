import type { AnyPositions } from '../../shared-utils/positionToVector3';
import { RectangleMesh, type RectangleData, type RectangleStyle } from './Rectangle';
import { PolylineMesh } from './Polyline';
import type { LineStyle } from '../utils/color';
import * as THREE from 'three';
export type RectangleWithEdgeMeshStyle = RectangleStyle & LineStyle;
/**
 * @description: 带边线的矩形
 */
export declare class RectangleWithEdgeMesh extends RectangleMesh {
    name: string;
    get lineWidth(): number;
    get lineColor(): THREE.Color;
    protected line: PolylineMesh;
    constructor(params?: Partial<RectangleWithEdgeMeshStyle & RectangleData>);
    setPoints(points: AnyPositions): void;
    setStyle(style: Partial<RectangleWithEdgeMeshStyle>): void;
    highlight(): void;
    unhighlight(): void;
}
