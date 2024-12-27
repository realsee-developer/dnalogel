import { IObject3D } from '../../shared-utils/three/IObject3D';
import * as THREE from 'three';
import { CircleWithEdgeMesh, type CircleWithEdgeMeshStyle } from './CircleWithEdge';
import ColoredMesh from '../utils/three/ColoredMesh';
import { type AnyPosition } from '../../shared-utils/positionToVector3';
export type CylinderStyle = CircleWithEdgeMeshStyle;
export interface CylinderData {
    bottomCenter: AnyPosition;
    topCenter: AnyPosition;
    radius: number;
}
type Params = Partial<CylinderStyle & CylinderData>;
export declare class CylinderMesh extends IObject3D {
    get bottomCenter(): THREE.Vector3;
    get topCenter(): THREE.Vector3;
    get normal(): THREE.Vector3;
    get radius(): number;
    get color(): THREE.Color;
    bottomCircle: CircleWithEdgeMesh;
    topCircle: CircleWithEdgeMesh;
    protected edgeMesh: ColoredMesh;
    private highlighted;
    private params;
    private _topCenter;
    private _bottomCenter;
    private _radius;
    constructor(params?: Params);
    setPoints(params: Partial<CylinderData>): void;
    setTopCenter(center: THREE.Vector3): void;
    setBottomCenter(center: THREE.Vector3): void;
    setStyle(style: Partial<CylinderStyle>): void;
    highlight(): void;
    unhighlight(): void;
    private setEdgeMesh;
}
export {};
