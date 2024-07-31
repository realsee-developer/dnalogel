import { IObject3D } from '../../shared-utils/three/IObject3D';
import { type AnyPosition, type AnyPositions } from '../../shared-utils/positionToVector3';
import type { AreaData } from './Area';
import * as THREE from 'three';
import type { LineStyle } from '../utils/color';
import type { ColoredMeshStyle } from '../utils/three/ColoredMesh';
import { PolygonWithEdgeMesh } from './PolygonWithEdge';
export type PrismStyle = ColoredMeshStyle & LineStyle;
export interface PrismData extends AreaData {
    heightPoint: AnyPosition;
}
/**
 * @description: 多棱柱
 */
export declare class PrismMesh extends IObject3D {
    name: string;
    heightPoint: THREE.Vector3;
    bottomPolygon: PolygonWithEdgeMesh;
    topPolygon: PolygonWithEdgeMesh;
    /**
     * @deprecated notice: please use specified center instead, such as `localCenter` or `worldCenter`
     */
    get center(): THREE.Vector3;
    get localCenter(): THREE.Vector3;
    get worldCenter(): THREE.Vector3;
    get color(): THREE.Color;
    get lineWidth(): number;
    get lineColor(): THREE.Color;
    private edgePlanes;
    constructor(params?: Partial<PrismData & PrismStyle>);
    setStyle(params: Partial<PrismStyle>): void;
    setPoints(params: Partial<PrismData>): void;
    highlight(): void;
    unhighlight(): void;
    setBottomPoints(points: AnyPositions): void;
    setTopHeightPoint(heightPoint: THREE.Vector3): void;
    private setEdgePlanes;
}
