import * as THREE from 'three';
import type { Five } from '@realsee/five';
interface IIntersection extends THREE.Intersection {
    raycaster: THREE.Raycaster;
    isVirtual: boolean;
}
/**
 * @description 根据 ndc 坐标获取 Intersect
 */
export declare function getIntersectByNdcPosition(five: Five, position: {
    x: number;
    y: number;
}, config?: {
    virtualPoint?: boolean;
}): IIntersection | undefined;
/**
 * @description 根据射线获取 Intersect
 */
export declare function getIntersectByRaycaster(five: Five, raycaster: THREE.Raycaster, config?: {
    virtualPoint?: boolean;
}): IIntersection | undefined;
export declare function getVirtualIntersectByRaycaster(raycaster: THREE.Raycaster, distance?: number): IIntersection;
export declare function getRealIntersectByRaycaster(five: Five, raycaster: THREE.Raycaster): IIntersection;
export {};
