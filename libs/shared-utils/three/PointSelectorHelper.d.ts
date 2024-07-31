import * as THREE from 'three';
import type { Five } from '@realsee/five';
import { Magnifier, PointHelper, PointDomHelper } from '.';
import type { Intersection } from '../../typings/typings';
import { Subscribe } from '../Subscribe';
interface Options {
    magnifier?: Magnifier | null;
    magnifierParams?: ConstructorParameters<typeof Magnifier>[1];
    pointHelper?: PointHelper | null;
    pointDomHelper?: PointDomHelper | null;
    container?: Element;
}
type EventMap = {
    intersectionUpdate: (intersection: PointIntersection) => void;
    /** 功能开启 */
    enabled: () => void;
    /** 功能关闭 */
    disabled: () => void;
};
export interface PointIntersection extends Intersection {
    isVirtual?: boolean;
    raycaster?: THREE.Raycaster;
}
export declare class PointSelectorHelper {
    five: Five;
    hooks: Subscribe<EventMap>;
    position: PointIntersection | undefined;
    magnifier: Magnifier | null;
    private pointHelper;
    private pointDomHelper;
    private state;
    private group;
    constructor(five: Five, options?: Options);
    show: () => void;
    hide: () => void;
    enable(): void;
    disable(): void;
    dispose(): void;
    updateWithIntersect: (intersect: Intersection, config?: {
        emitEvent: boolean;
    }) => void;
    private abortUpdateMagnifier;
}
export {};
