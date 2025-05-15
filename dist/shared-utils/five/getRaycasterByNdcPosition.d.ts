import type { Five } from '@realsee/five';
import * as THREE from 'three';
export declare function getRaycasterByNdcPosition(five: Five, position: {
    x: number;
    y: number;
}): THREE.Raycaster;
