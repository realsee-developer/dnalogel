import type { AnyPositions } from '../../shared-utils/positionToVector3';
import { PolylineMesh } from './Polyline';
import type { LineStyle } from '../utils/color';
import PolygonMesh, { type PolygonData, type PolygonStyle } from './Polygon';
import * as THREE from 'three';
export type PolygonWithEdgeMeshStyle = PolygonStyle & LineStyle;
/**
 * @description: 带边线的多边形
 */
export declare class PolygonWithEdgeMesh extends PolygonMesh {
    name: string;
    get lineWidth(): number;
    get lineColor(): THREE.Color;
    protected line: PolylineMesh;
    constructor(params?: Partial<PolygonWithEdgeMeshStyle & PolygonData>);
    setPoints(points: AnyPositions, params?: {
        closed: boolean;
    }): void;
    setStyle(style: Partial<PolygonWithEdgeMeshStyle>): void;
    highlight(): void;
    unhighlight(): void;
}
