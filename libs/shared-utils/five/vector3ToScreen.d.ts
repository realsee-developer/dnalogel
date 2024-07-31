import type * as THREE from 'three';
export default function vector3ToScreen(camera: THREE.Camera, vector3: THREE.Vector3): {
    leftPercent: number;
    topPercent: number;
};
