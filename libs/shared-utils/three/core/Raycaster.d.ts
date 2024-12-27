import * as THREE from 'three';
export declare class THREERaycaster extends THREE.Raycaster {
    intersectObject(object: THREE.Object3D, recursive?: boolean, intersects?: any[]): any[];
    intersectObjects(objects: THREE.Object3D[], recursive?: boolean, intersects?: any[]): any[];
}
export declare function intersectWithoutLine(object: THREE.Object3D, raycaster: THREE.Raycaster, intersects: THREE.Intersection[], recursive: boolean): void;
