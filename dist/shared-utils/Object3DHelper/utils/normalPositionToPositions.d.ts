import type { Vector3 } from 'three';
export declare function normalPositionToPositions(cameraPosition: Vector3, position: Vector3, normal: Vector3, config?: {
    width?: number;
    height?: number;
}): [Vector3, Vector3, Vector3, Vector3];
