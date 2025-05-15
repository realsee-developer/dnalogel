import { IObject3D } from '../../shared-utils/three/IObject3D';
import { type AnyPosition } from '../../shared-utils/positionToVector3';
import type { AreaData } from './Area';
import * as THREE from 'three';
import type { LineStyle } from '../typings/style';
import type { ColoredMeshStyle } from '../utils/three/ColoredMesh';
import ColoredMesh from '../utils/three/ColoredMesh';
import { PrismGeometry } from '../../shared-utils/three/core/PrismGeometry';
export type PrismStyle = ColoredMeshStyle & LineStyle;
export interface PrismData extends AreaData {
    heightPoint: AnyPosition;
}
/**
 * @description: 多棱柱
 */
export declare class PrismMesh extends IObject3D {
    name: string;
    get topPosition(): THREE.Vector3;
    get bottomPositions(): THREE.Vector3[];
    get topPositions(): THREE.Vector3[];
    get style(): {
        color: THREE.Color;
        lineColor: THREE.Color;
        lineWidth: number;
        opacity: number;
        occlusionVisibility: boolean;
        occlusionMode: "depthTest" | "translucence";
    };
    get opacity(): number;
    get occlusionVisibility(): boolean;
    get occlusionMode(): "depthTest" | "translucence";
    /**
     * @deprecated notice: please use specified center instead, such as `localCenter` or `worldCenter`
     */
    get center(): THREE.Vector3;
    get localCenter(): THREE.Vector3;
    get geometryInfo(): {
        center: THREE.Vector3;
    };
    get worldCenter(): THREE.Vector3;
    get color(): THREE.Color;
    get lineWidth(): number;
    get lineColor(): THREE.Color;
    protected _geometryInfoCache?: {
        center: THREE.Vector3;
    };
    protected geometryInfoNeedUpdate: boolean;
    private edgeMesh;
    prismMesh: ColoredMesh & {
        geometry: PrismGeometry;
    };
    paramStyle: Partial<PrismStyle>;
    constructor(params?: Partial<PrismData & PrismStyle>);
    setStyle(params?: Partial<PrismStyle>): void;
    setPoints(params: Partial<PrismData>): void;
    highlight(): void;
    unhighlight(): void;
    raycast(raycaster: THREE.Raycaster, intersects: THREE.Intersection[]): boolean;
}
