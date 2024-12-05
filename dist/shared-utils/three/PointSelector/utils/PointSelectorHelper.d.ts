import * as THREE from 'three';
import type { Five } from '@realsee/five';
import { Magnifier } from '../..';
import type { Intersection } from '../../../../typings/typings';
import { Subscribe } from '../../../Subscribe';
import type { PointHelperAbstract } from './typing';
export interface PointSelectorHelperConfig {
    magnifier?: Magnifier | null;
    magnifierParams?: ConstructorParameters<typeof Magnifier>[1];
    pointHelper?: PointHelperAbstract | 'default' | 'highlight' | null;
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
    pointHelper: PointHelperAbstract | null;
    state: {
        enabled: boolean;
        visible: boolean;
    };
    private group;
    constructor(five: Five, options?: PointSelectorHelperConfig);
    show: () => void;
    hide: () => void;
    enable(): void;
    disable(): void;
    dispose(): void;
    updateWithIntersect: (intersect?: Intersection, config?: {
        emitEvent: boolean;
    }) => void;
    private abortUpdateMagnifier;
}
export {};
