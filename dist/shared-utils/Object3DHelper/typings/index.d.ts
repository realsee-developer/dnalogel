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
export type PositionFrom = 'objectPosition' | 'boundingBox' | 'boundingSphere' | THREE.Vector3 | ((object: THREE.Object3D) => THREE.Vector3);
export interface ObjectHelperControllers {
    moveController?: MoveController;
    rotateController?: RotateController;
    scaleController?: ScaleController;
    boundingBoxController?: BoundingBoxController;
}
export type ScaleCallback = (params: {
    intersectPoint: THREE.Vector3;
    scalePosition: ScalePosition;
    offset: THREE.Vector3;
}) => any;
export type ScalePosition = {
    id?: string;
    /**
     * @description 拖动块的位置
     */
    handlePosition: THREE.Vector3;
    /**
     * @description 基于什么位置去拖动，比如要向上拉伸一个物体，handlePosition在物体顶部，basePosition在物体底部
     */
    basePosition: THREE.Vector3;
};
