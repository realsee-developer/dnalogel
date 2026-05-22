import * as THREE from 'three';
import type { Vector3Position } from '../../typings/math.type';
export declare function boxVertexes(box: {
    max: Vector3Position;
    min: Vector3Position;
}): THREE.Vector3[];
/**
 * @description
 * ```markdown
     5____4
  1/___0/|
  | 6__|_7
  2/___3/
 * ```
 */
export declare function boxVertex(box: {
    max: Vector3Position;
    min: Vector3Position;
}, index: number): THREE.Vector3;
export declare function boundingBox(object3D: THREE.Object3D): THREE.Box3;
export declare function boundingSphere(object3D: THREE.Object3D): THREE.Sphere;
export declare function worldBoundingBox(object3D: THREE.Object3D): THREE.Box3;
export declare function worldBoundingSphere(object3D: THREE.Object3D): THREE.Sphere;
export declare function worldBounding<T extends 'box3' | 'sphere'>(object3D: THREE.Object3D, boxOrSphereType: T): (T extends 'box3' ? THREE.Box3 : THREE.Sphere) | undefined;
export declare function bounding<T extends 'box3' | 'sphere'>(object3D: THREE.Object3D, boxOrSphereType: T): T extends 'box3' ? THREE.Box3 : THREE.Sphere | undefined;
