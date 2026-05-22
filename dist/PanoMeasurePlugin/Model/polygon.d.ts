import * as THREE from 'three';
import { IObject3D } from '../../shared-utils/three/IObject3D';
export declare const blankGeometry: THREE.BufferGeometry;
export declare class PolygonMesh extends IObject3D {
    readonly isPolygonMesh = true;
    geometry: THREE.BufferGeometry;
    isBlank: boolean;
    points: THREE.Vector3[];
    constructor(points?: THREE.Vector3[]);
    /**
     * @description: 按照新的端点来更新多边形的geometry
     */
    updatePoints(points: THREE.Vector3[]): void;
}
