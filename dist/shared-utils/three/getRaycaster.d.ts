import * as THREE from 'three';
import type { Five } from '@realsee/five';
export declare function getRaycasterFromFivePointer(five: Five, pointer: {
    x: number;
    y: number;
}): THREE.Raycaster;
