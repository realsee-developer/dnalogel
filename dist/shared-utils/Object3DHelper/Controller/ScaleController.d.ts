import { BaseController } from '../Base/BaseController';
import type { ScaleHelperAbstract } from '../Helper';
import * as THREE from 'three';
export declare class ScaleController<T extends ScaleHelperAbstract = ScaleHelperAbstract> extends BaseController<T> {
    protected name: string;
    private startInfo?;
    constructor(...params: ConstructorParameters<typeof BaseController<T>>);
    initialHelperPosition(): void;
    dragStart: (params: {
        intersect: THREE.Intersection;
    }) => void;
    dragging: (point: {
        x: number;
        y: number;
    } | TouchEvent) => false | void;
    setScale(scale: number | {
        x?: number;
        y?: number;
        z?: number;
    }): void;
    scale: (raycaster: THREE.Raycaster) => void;
    dragEnd: () => void;
}
