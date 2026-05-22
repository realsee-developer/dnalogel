import type { Direction } from '../typings';
import * as THREE from 'three';
export declare class DirectionGroup extends THREE.Group {
    direction: Direction;
    constructor(direction?: Direction);
}
export declare class DirectionLine<T extends THREE.Geometry, K extends THREE.Material> extends THREE.Line<T, K> {
    direction: Direction;
    constructor(geometry?: T, material?: K, direction?: Direction);
}
export declare class DirectionMesh<T extends THREE.Geometry, K extends THREE.Material> extends THREE.Mesh<T, K> {
    direction: Direction;
    constructor(geometry?: T, material?: K, direction?: Direction);
}
