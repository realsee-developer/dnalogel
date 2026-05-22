import * as THREE from 'three';
export default class OpecityMesh extends THREE.Mesh {
    name: string;
    constructor(width: number, height: number);
    removeFromParent(): this;
}
