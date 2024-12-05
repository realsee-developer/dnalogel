import * as THREE from 'three';
import type { Intersection } from '../../../../typings/typings';
export declare abstract class PointHelperAbstract extends THREE.Object3D {
    abstract updateWithIntersect(intersect: Intersection): void;
    abstract show(): void;
    abstract hide(): void;
    abstract dispose(): void;
}
