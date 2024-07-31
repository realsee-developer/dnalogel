import * as THREE from 'three';
import { type OcclusionStyle } from '../utils/color';
import ColoredMesh, { type ColoredMeshStyle } from '../utils/three/ColoredMesh';
import { type AnyPosition } from '../../shared-utils/positionToVector3';
export type CircleStyle = ColoredMeshStyle & OcclusionStyle;
export type CircleData = {
    center: AnyPosition;
    normal: AnyPosition;
    radius: number;
};
type Params = Partial<CircleStyle & CircleData>;
export declare class CircleMesh extends ColoredMesh {
    get center(): THREE.Vector3;
    get normal(): THREE.Vector3;
    private set normal(value);
    get radius(): number;
    meshFont: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
    private _normal;
    private opacityBeforeHighlight;
    private highlighted;
    constructor(params?: Params);
    setPoints(params: CircleData): void;
    highlight(): void;
    unhighlight(): void;
}
export {};
