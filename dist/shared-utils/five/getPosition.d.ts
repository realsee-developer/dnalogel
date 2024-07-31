import * as THREE from 'three';
import type { Five } from '@realsee/five';
interface IIntersection extends THREE.Intersection {
    raycaster: THREE.Raycaster;
    isVirtual: boolean;
}
export declare function getIntersectByNdcPosition(five: Five, position: {
    x: number;
    y: number;
}): IIntersection;
export declare function getIntersectByRaycaster(five: Five, raycaster: THREE.Raycaster): IIntersection;
export declare function getVirtualIntersectByRaycaster(raycaster: THREE.Raycaster): IIntersection;
export declare function getRealIntersectByRaycaster(five: Five, raycaster: THREE.Raycaster): IIntersection;
export {};
