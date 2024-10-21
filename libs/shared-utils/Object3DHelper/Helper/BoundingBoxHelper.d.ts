import * as THREE from 'three';
import { BoundingBoxHelperAbstract } from '../Base/BaseHelper';
export declare class BoundingBoxHelper<T extends THREE.Object3D = THREE.Object3D> extends BoundingBoxHelperAbstract<T> {
    box: THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>;
    outline: THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial>;
    private originObject;
    private positionAttribute;
    constructor(originObject: T);
    raycasterIntersectObject(raycaster: THREE.Raycaster, intersection: THREE.Intersection[]): THREE.Intersection[];
    raycast(raycaster: THREE.Raycaster, intersects: THREE.Intersection[]): void;
    private update;
    private createOutline;
    private createBox;
}
