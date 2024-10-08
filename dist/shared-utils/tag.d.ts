import type { Five } from '@realsee/five';
import { type AnyPosition } from './positionToVector3';
import * as THREE from 'three';
export declare class LightTag {
    container: HTMLDivElement;
    visible: boolean;
    enabled: boolean;
    wrapper: HTMLElement;
    positionsForRotate?: THREE.Vector3[];
    /**
     * @description 碰撞检测
     * @default true
     */
    intersectCheck: boolean;
    /**
     * @description 模拟3D
     * @default true
     */
    simulate3D: boolean;
    private tagWrapper;
    private five;
    private originPosition?;
    private transformedPosition?;
    private disposer;
    private config;
    private fiveUtil;
    private disposers;
    constructor(five: Five, position?: AnyPosition, config?: {
        wrapper?: HTMLElement;
        positionsForRotate?: AnyPosition[];
    });
    show(): void;
    hide(): void;
    enable(): void;
    disable(): void;
    destroy(): void;
    setTransformMatrix(matrix: THREE.Matrix4): void;
    setPosition(position: THREE.Vector3, positionsForRotate?: THREE.Vector3[]): void;
    updateScreenPosition(): void;
    private onCameraUpdate;
    private onFiveEveryReady;
    private addResizeListener;
}
export declare function tag(five: Five, position: AnyPosition, config?: {
    wrapper?: HTMLElement;
}): LightTag;
