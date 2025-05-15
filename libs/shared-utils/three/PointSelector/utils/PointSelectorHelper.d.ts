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
    /**
     * @description 被吸附
     */
    isAdsorbed?: boolean;
    /**
     * @description 原始焦点
     */
    originalPoint?: THREE.Vector3;
    /**
     * @description 虚拟生成的点
     */
    isVirtual?: boolean;
    /**
     * @description 射线
     */
    raycaster?: THREE.Raycaster;
    /**
     * @description 如果开启了吸附并且吸附到了平面，这里会有吸附的平面
     */
    adherePlane?: THREE.Plane;
    /**
     * @description 如果开启了吸附并且吸附到了点，这里会有吸附的点
     */
    adherePoint?: THREE.Vector3;
    /**
     * @description 如果开启了吸附并且吸附到了线，这里会有吸附的线
     */
    adhereLine?: THREE.Line3;
}
export declare class PointSelectorHelper {
    five: Five;
    hooks: Subscribe<EventMap>;
    position: PointIntersection | null;
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
