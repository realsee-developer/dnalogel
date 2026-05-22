import type * as THREE from 'three';
export default function calculateScaleByCamera(camera: any, position: THREE.Vector3, limit?: {
    min?: number;
    max?: number;
}): number;
