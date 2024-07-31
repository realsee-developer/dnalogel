import type * as THREE from 'three';
import type { MoveController } from '../Controller/MoveController';
import type { RotateController } from '../Controller/RotateController';
import type { BoundingBoxController } from '../Controller/BoundingBoxController';
import type { ScaleController } from '../Controller/ScaleController';
export * from './Scissor';
export * from './Direction';
export * from './Hooks';
export interface HelperOffset {
    x: number | {
        percents: number;
    };
    y: number | {
        percents: number;
    };
    z: number | {
        percents: number;
    };
}
export type Color = THREE.Color | string | number;
export type ClassFunctionParameters<C extends new (...params: any[]) => any, F extends keyof InstanceType<C>> = Parameters<InstanceType<C>[F]>;
export type PositionFrom = 'objectPosition' | 'boundingBox' | THREE.Vector3 | (() => THREE.Vector3);
export interface ObjectHelperControllers {
    moveController?: MoveController;
    rotateController?: RotateController;
    scaleController?: ScaleController;
    boundingBoxController?: BoundingBoxController;
}
export type ScaleCallback = (params: {
    ratio: number;
    intersectPoint: THREE.Vector3;
    scalePosition: ScalePosition;
}) => any;
export type ScalePosition = {
    id?: string;
    handlePosition: THREE.Vector3;
    basePosition: THREE.Vector3;
};
