import { BaseController } from '../Base/BaseController';
import type { RectangleScaleHelperAbstract } from '../Helper';
import * as THREE from 'three';
import type { Direction4 } from '../typings';
import { Vector3 } from 'three';
interface StartInfo {
    startPoint: {
        position: Vector3;
        direction: Direction4;
    };
    dragPointInCenterBottom?: boolean | null;
    dragPointInCenterLeft?: boolean | null;
    plane: THREE.Plane;
}
export declare class RectangleScaleController<OriginObject3D extends THREE.Object3D, PointType extends THREE.Object3D | HTMLElement> extends BaseController<RectangleScaleHelperAbstract<OriginObject3D, PointType>> {
    protected startInfo?: StartInfo;
    protected name: string;
    constructor(...params: ConstructorParameters<typeof BaseController<RectangleScaleHelperAbstract<OriginObject3D, PointType>>>);
    enable(): void;
    disable(): void;
    show(): void;
    hide(): void;
    protected onApplyOriginObjectPosition(params: {
        matrix: THREE.Matrix4;
    }): void;
    protected onApplyOriginObjectScale(params: {
        matrix: THREE.Matrix4;
        origin?: THREE.Vector3;
    }): void;
    protected getDragPlane(): THREE.Plane;
    protected dragStart(mousePoint: {
        x: number;
        y: number;
    }, point: {
        position: THREE.Vector3;
        direction: Direction4;
    }): void;
    protected dragging(point: {
        x: number;
        y: number;
    }): false | void;
    protected scale(raycaster: THREE.Raycaster): void;
    protected dragEnd(): void;
}
export {};
