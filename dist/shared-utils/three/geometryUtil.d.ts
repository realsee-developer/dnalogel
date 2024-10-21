import type * as THREE from 'three';
import { Vector3 } from 'three';
export declare function getGeometryArea(geometry: THREE.BufferGeometry): number;
export declare function getGeometryInfo(geometry: THREE.BufferGeometry): {
    center: Vector3;
    area: number;
} | undefined;
