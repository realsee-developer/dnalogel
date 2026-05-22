import * as THREE from 'three';
type LineMaterialParameters = {
    color?: number | THREE.Vector3;
    linewidth?: number;
    dashed?: boolean;
    dashScale?: number;
    dashSize?: number;
    gapSize?: number;
    resolution?: THREE.Vector2;
};
declare class Five_LineMaterial2 extends THREE.ShaderMaterial {
    color: number | THREE.Vector3;
    dashed: boolean;
    dashScale: number;
    dashSize: number;
    gapSize: number;
    resolution: THREE.Vector2;
    constructor(parameters: LineMaterialParameters);
}
export { Five_LineMaterial2 };
