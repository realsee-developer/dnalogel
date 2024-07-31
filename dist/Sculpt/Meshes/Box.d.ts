import { IObject3D } from '../../shared-utils/three/IObject3D';
import { type AnyPositions, type AnyPosition } from '../../shared-utils/positionToVector3';
import type * as THREE from 'three';
import type { LineStyle } from '../utils/color';
import { RectangleWithEdgeMesh } from './RectangleWithEdge';
import { RectangleMesh } from './Rectangle';
import type { PointsData } from '../utils/data';
import type { ColoredMeshStyle } from '../utils/three/ColoredMesh';
export type BoxStyle = ColoredMeshStyle & LineStyle;
export type BoxData = PointsData & {
    heightPoint: AnyPosition;
};
/**
 * @description: Box
 */
export declare class BoxMesh extends IObject3D {
    name: string;
    get planes(): RectangleMesh[];
    bottomPlane: RectangleWithEdgeMesh;
    topPlane: RectangleWithEdgeMesh;
    heightPoint: THREE.Vector3;
    protected edgePlanes: RectangleWithEdgeMesh[];
    get color(): THREE.Color;
    get lineColor(): THREE.Color;
    get lineWidth(): number;
    get occlusionVisibility(): boolean;
    get occlusionMode(): "translucence" | "depthTest";
    constructor(params?: Partial<BoxStyle & BoxData>);
    setPoints(params: Partial<BoxData>): void;
    setBottomPoints(points: AnyPositions): void;
    setTopHeightPoint(point: AnyPosition): void;
    setEdgePlanes(): void;
    setStyle(style: Partial<BoxStyle>): void;
    highlight(): void;
    unhighlight(): void;
}
