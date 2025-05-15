import * as THREE from 'three';
export default function vector3ToScreen(camera: THREE.Camera, vector3: THREE.Vector3, rendererSize: THREE.Vector2): {
    leftPx: number;
    topPx: number;
};
