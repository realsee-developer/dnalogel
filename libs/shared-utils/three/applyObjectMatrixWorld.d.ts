import type { Object3D } from 'three';
export declare function localToWorld<P extends THREE.Vector3 | THREE.Vector3[]>(object: Object3D, point: P): P;
export declare function worldToLocal<P extends THREE.Vector3 | THREE.Vector3[]>(object: Object3D, point: P): P;
