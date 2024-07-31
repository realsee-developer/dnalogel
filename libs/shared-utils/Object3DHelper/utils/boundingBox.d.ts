import * as THREE from 'three';
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
export default function boundingBox(object3D: THREE.Object3D): THREE.Box3 | undefined;
