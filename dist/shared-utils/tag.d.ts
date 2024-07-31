import type { Five } from '@realsee/five';
import { type AnyPosition } from './positionToVector3';
import * as THREE from 'three';
export declare class LightTag {
    container: HTMLDivElement;
    visible: boolean;
    enabled: boolean;
    wrapper: HTMLElement;
    private five;
    private originPosition;
    private transformedPosition;
    private disposer;
    private config;
    constructor(five: Five, position: AnyPosition, config?: {
        wrapper?: HTMLElement;
    });
    show(): void;
    hide(params?: {
        withAnimation?: boolean;
    }): void;
    enable(): void;
    disable(): void;
    setTransformMatrix(matrix: THREE.Matrix4): void;
    private onCameraUpdate;
    private onFiveEveryReady;
}
export declare function tag(five: Five, position: AnyPosition, config?: {
    wrapper?: HTMLElement;
}): LightTag;
