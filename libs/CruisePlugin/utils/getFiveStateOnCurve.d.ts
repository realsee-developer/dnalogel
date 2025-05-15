import * as THREE from 'three';
export declare function getFiveStateOnCurve(curve: THREE.Curve<THREE.Vector3>, progress: number, curveOffset: Partial<{
    x: number;
    y: number;
    z: number;
}>): {
    offset: THREE.Vector3;
    longitude: number;
    latitude: number;
    distance: number;
};
