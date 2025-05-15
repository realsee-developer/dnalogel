import * as THREE from 'three';
import type { Direction } from '../../typings';
import { DirectionGroup, DirectionMesh } from '../../utils';
interface InstanceParameter {
    direction: Direction;
    color?: THREE.Color | string | number;
}
export declare class ArrowGroup extends DirectionGroup {
    line: DirectionMesh<THREE.Geometry, THREE.MeshBasicMaterial>;
    arrow: DirectionMesh<THREE.ConeGeometry, THREE.MeshBasicMaterial>;
    private lineHeight;
    private arrowHeight;
    renderOrder: number;
    name: string;
    constructor(param: InstanceParameter);
    private formatArrow;
    private formatLine;
}
export {};
