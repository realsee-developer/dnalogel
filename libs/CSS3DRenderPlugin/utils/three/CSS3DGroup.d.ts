import * as THREE from 'three';
import type { Object3D } from 'three';
import type { Mode } from './CSS3DObject';
export declare class CSS3DGroup extends THREE.Group {
    readonly isCSS3DGroup = true;
    mode: Mode;
    CSS3DObjectLength: number;
    constructor(mode: Mode);
    add(...objects: Object3D[]): this;
    setVisible(visible: boolean): void;
    remove(...objects: Object3D[]): this;
    private updateLength;
}
export declare class CSS3DFrontGroup extends CSS3DGroup {
    constructor();
}
export declare class CSS3DBehindGroup extends CSS3DGroup {
    private scene;
    constructor(scene: THREE.Scene);
    add(...objects: Object3D[]): this;
}
