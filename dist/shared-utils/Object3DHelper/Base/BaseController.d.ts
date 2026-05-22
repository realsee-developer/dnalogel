import * as THREE from 'three';
import { Subscribe } from '../../Subscribe';
import type { SolidGuideOptions } from '../utils/solidGuide';
import type { HelperEventMap, HelperOffset, InternalHelperEventMap, ScaleCallback } from '../typings';
import type { BaseHelper } from './BaseHelper';
import DomEvents from '../../threex/domevents';
export declare let originOpacity: {
    opacity: number;
} | null;
type Config = {
    offset?: HelperOffset;
    yAxis?: THREE.Vector3 | (() => THREE.Vector3);
    xAxis?: THREE.Vector3 | (() => THREE.Vector3);
    zAxis?: THREE.Vector3 | (() => THREE.Vector3);
    scaleCallback?: ScaleCallback;
    /** 实线样式与行为配置（透传给 SolidGuideLine） */
    solidGuide?: SolidGuideOptions;
};
export declare abstract class BaseController<T extends BaseHelper = BaseHelper, K extends THREE.Object3D = THREE.Object3D> {
    originObject3D: K;
    hooks: Subscribe<HelperEventMap>;
    preventTapDefaultEvent: boolean;
    protected internalHooks: Subscribe<InternalHelperEventMap>;
    protected readonly disposers: (() => void)[];
    protected helperObject3D: T;
    protected camera: THREE.Camera;
    protected model: THREE.Object3D;
    protected scene: THREE.Object3D;
    protected container: HTMLElement;
    protected domEvents: DomEvents;
    protected isDragging: boolean;
    protected enabled: boolean;
    protected name: string;
    protected boundingBox?: THREE.Box3;
    protected config: Config;
    private onRender;
    protected cameraHooks: Subscribe<{
        cameraUpdate: () => any;
    }>;
    /** 其他控制器的引用，用于跨控制器状态检查 */
    protected otherControllers?: {
        moveController?: BaseController;
        rotateController?: BaseController;
        scaleController?: BaseController;
    };
    /**
     * 更新其他控制器的引用
     */
    updateOtherControllers(otherControllers: {
        moveController?: BaseController;
        rotateController?: BaseController;
        scaleController?: BaseController;
    }): void;
    /**
     * 获取当前控制器的拖拽状态
     */
    getIsDragging(): boolean;
    constructor(params: {
        camera: THREE.Camera;
        model: THREE.Object3D;
        originObject3D: K;
        helperObject3D: T;
        container: HTMLElement;
        domEvents: DomEvents;
        scene: THREE.Object3D;
        onRender?: () => void;
        sharedHooks?: Subscribe<HelperEventMap>;
        sharedInternalHooks?: Subscribe<InternalHelperEventMap>;
        /** 其他控制器的引用，用于跨控制器状态检查 */
        otherControllers?: {
            moveController?: BaseController;
            rotateController?: BaseController;
            scaleController?: BaseController;
        };
    }, config?: Config);
    initialHelperPosition(): void;
    initialHelperQuaternion(): void;
    enable(): void;
    disable(): void;
    show(): void;
    hide(): void;
    dispose(): void;
    /**
     * @description: applyHelperMatrix4
     * @param {THREE.Matrix4} matrix position 偏移量
     */
    applyHelperMatrix4(matrix: THREE.Matrix4): void;
    /**
     * @description: applyHelperQuaternion
     * @param {THREE.Quaternion} quaternion 旋转四元数
     * @param {THREE.Vector3} origin 旋转中心
     */
    applyHelperQuaternion(quaternion: THREE.Quaternion, origin: THREE.Vector3): void;
    /**
     * @description: applyHelperScaleMatrix4
     * @param {THREE.Matrix4} matrix 缩放矩阵
     * @param {THREE.Vector3} origin 缩放中心
     */
    applyHelperScaleMatrix4(matrix: THREE.Matrix4, origin?: THREE.Vector3): void;
    onWantsTapGesture: (raycaster: THREE.Raycaster) => false | void;
    updateHelperScale: () => void;
    onWantsGesture(type: 'press' | 'pan' | string, pointers: {
        x: number;
        y: number;
    }[], final: boolean): false | void;
    onIntersectionOnModelUpdate(intersection: THREE.Intersection): void;
    /**
     * @description: onApplyOriginObjectScale
     * @param {THREE.Matrix4} params.matrix 缩放矩阵
     * @param {THREE.Vector3} params.origin 缩放中心
     */
    protected onApplyOriginObjectScale(params: {
        matrix: THREE.Matrix4;
        origin?: THREE.Vector3;
    }): void;
    /**
     * @description: onApplyOriginObjectRotate
     * @param {THREE.Quaternion} params.quaternion 旋转四元数
     * @param {THREE.Vector3} params.origin 旋转中心
     */
    protected onApplyOriginObjectRotate(params: {
        quaternion: THREE.Quaternion;
        origin: THREE.Vector3;
    }): void;
    /**
     * @description: onApplyOriginObjectPosition
     * @param {THREE.Matrix4} params.matrix position 偏移量
     */
    protected onApplyOriginObjectPosition(params: {
        matrix: THREE.Matrix4;
    }): void;
    protected onSetOriginObjectScale(scale: THREE.Vector3): void;
    protected onSetOriginObjectRotate(quaternion: THREE.Quaternion, origin: THREE.Vector3): void;
    protected onSetOriginObjectPosition(position: THREE.Vector3): void;
    protected render(): void;
    protected updateOffsetByScale(scale: THREE.Vector3): void;
    protected hoverListener(object3D: THREE.Object3D | undefined | THREE.Group | (THREE.Object3D | undefined | THREE.Group)[], hoverColor?: THREE.Color | string | number, hoverOpacity?: number): () => void;
    private getIntersectObject;
    private getBox;
    private calculateOffset;
}
export {};
