import type { AnyPositions } from '../../shared-utils/positionToVector3';
import { PolylineMesh } from './Polyline';
import type { LineStyle } from '../typings/style';
import { PolygonMesh, type PolygonData, type PolygonStyle } from './Polygon';
import type * as THREE from 'three';
export type PolygonWithEdgeMeshStyle = PolygonStyle & LineStyle;
/**
 * @description: 带边线的多边形
 */
export declare class PolygonWithEdgeMesh extends PolygonMesh {
    name: string;
    get style(): {
        lineWidth: number;
        lineColor: THREE.Color;
        lengthEnable: boolean;
        color: THREE.Color;
        opacity: number;
        occlusionVisibility: boolean;
        occlusionMode: "depthTest" | "translucence";
    };
    get lineWidth(): number;
    get lineColor(): THREE.Color;
    line: PolylineMesh;
    constructor(params?: Partial<PolygonWithEdgeMeshStyle & PolygonData>);
    raycast(raycaster: THREE.Raycaster, intersects: THREE.Intersection[]): boolean;
    setPoints(points: AnyPositions, params?: {
        closed?: boolean;
        checkLinesIntersect?: boolean;
    }): void;
    setStyle(style: Partial<PolygonWithEdgeMeshStyle>): void;
    highlight(): void;
    unhighlight(): void;
}
