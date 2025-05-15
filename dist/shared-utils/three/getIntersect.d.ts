import * as THREE from 'three';
import type { Five } from '@realsee/five';
export declare function getIntersectFromRelativePosition(five: Five, position: {
    x: number;
    y: number;
}): {
    raycaster: THREE.Raycaster;
    isVirtual: boolean;
    floor: number;
    model?: import("@realsee/five").Model;
    viewLayer?: import("@realsee/five").ModelViewLayer;
    distance: number;
    distanceToRay?: number;
    point: THREE.Vector3;
    index?: number;
    face?: THREE.Face3;
    faceIndex?: number;
    object: THREE.Object3D;
    uv?: THREE.Vector2;
    instanceId?: number;
};
