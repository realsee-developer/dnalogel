import * as THREE from 'three';
export declare class Trace {
    tracePoints: THREE.Vector3[];
    curve: THREE.CatmullRomCurve3;
    constructor();
    addPoint(point: THREE.Vector3): void;
    clear(): void;
    getPoints(): THREE.Vector3[];
}
