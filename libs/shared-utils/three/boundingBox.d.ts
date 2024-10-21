import * as THREE from 'three';
export declare function boxVertexes(box: {
    max: {
        x: number;
        y: number;
        z: number;
    };
    min: {
        x: number;
        y: number;
        z: number;
    };
}): THREE.Vector3[];
export declare function boxVertex(box: {
    max: {
        x: number;
        y: number;
        z: number;
    };
    min: {
        x: number;
        y: number;
        z: number;
    };
}, index: number): THREE.Vector3;
export declare function boundingBox(object3D: THREE.Object3D): THREE.Box3;
export declare function boundingSphere(object3D: THREE.Object3D): THREE.Sphere;
export declare function worldBoundingBox(object3D: THREE.Object3D): THREE.Box3;
export declare function worldBoundingSphere(object3D: THREE.Object3D): THREE.Sphere;
export declare function worldBounding<T extends 'box3' | 'sphere'>(object3D: THREE.Object3D, boxOrSphereType: T): (T extends 'box3' ? THREE.Box3 : THREE.Sphere) | undefined;
export declare function bounding<T extends 'box3' | 'sphere'>(object3D: THREE.Object3D, boxOrSphereType: T): T extends 'box3' ? THREE.Box3 : THREE.Sphere | undefined;
