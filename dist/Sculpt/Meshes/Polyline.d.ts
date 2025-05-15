import { type AnyPositions } from '../../shared-utils/positionToVector3';
import { IObject3D } from '../../shared-utils/three/IObject3D';
import { LineWithDotsMesh } from './LineWithDots';
import type { LineMeshStyle } from './Line';
import type { PointsData } from '../utils/data';
import * as THREE from 'three';
export type PolylineStyle = LineMeshStyle;
export type PolylineData = PointsData;
export declare abstract class PolylineBaseMesh extends IObject3D {
    name: string;
    get style(): {
        lineColor: THREE.Color;
        lineWidth: number;
        opacity: number;
        dashed: boolean;
        occlusionVisibility: boolean;
        occlusionMode: "depthTest" | "translucence";
        lengthEnable: boolean;
    };
    get opacity(): number;
    get lineColor(): THREE.Color;
    get lineWidth(): number;
    get dashed(): boolean;
    get occlusionVisibility(): boolean;
    get occlusionMode(): "depthTest" | "translucence";
    get points(): THREE.Vector3[];
    lines: Array<LineWithDotsMesh>;
    private withDots;
    private paramsStyle;
    constructor(params?: Partial<PolylineStyle & PolylineData & {
        withDots: boolean;
    }>);
    setPoints(points: AnyPositions, params?: {
        closed: boolean;
    }): void;
    setStyle(style: Partial<PolylineStyle>): void;
    highlight(): void;
    unhighlight(): void;
}
export declare class PolylineMesh extends PolylineBaseMesh {
    name: string;
    constructor(...params: ConstructorParameters<typeof PolylineBaseMesh>);
}
export declare class PolylineWithDotsMesh extends PolylineBaseMesh {
    name: string;
    constructor(...params: ConstructorParameters<typeof PolylineBaseMesh>);
}
