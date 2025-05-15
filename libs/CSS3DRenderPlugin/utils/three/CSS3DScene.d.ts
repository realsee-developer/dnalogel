import type { Object3D } from 'three';
import * as THREE from 'three';
export declare class CSS3DFrontScene extends THREE.Scene {
    constructor();
    add(...objects: Object3D[]): this;
}
export declare class CSS3DBehindScene extends THREE.Scene {
    private scene;
    constructor(scene: THREE.Scene);
    add(...objects: Object3D[]): this;
    remove(...objects: Object3D[]): this;
}
