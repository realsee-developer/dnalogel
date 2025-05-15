import { BaseController } from '../Base/BaseController';
import * as THREE from 'three';
import type { MoveHelperAbstract } from '../Helper';
type UseFaceNormalInterface = {
    enable?: boolean;
    /**
     * @description: 期望对齐的方向，默认为Y轴对齐Face的法向向量，即 `{ x: 0, y: 1, z: 0 }`
     */
    alignmentVector?: {
        x?: number;
        y?: number;
        z?: number;
    };
    /**
     * @description: 修正后的face
     */
    fixedFaceNormal?: (face: THREE.Vector3) => THREE.Vector3;
} | boolean;
export declare class MoveController<T extends MoveHelperAbstract = MoveHelperAbstract> extends BaseController<T> {
    get moveByMouseEnable(): boolean;
    protected name: string;
    private startInfo?;
    private _moveByMouse;
    private mouseInfo?;
    private mousedownEventListenerDisposer;
    constructor(...params: ConstructorParameters<typeof BaseController<T>>);
    dispose(): void;
    /**
     * @description: 跟随鼠标移动
     * @param {boolean} params.useFaceNormal 是否使用面的法线，默认为false
     * @param {boolean} params.useFaceNormal.enable 是否使用面的法线，默认为true
     * @param {Vector3} params.useFaceNormal.alignmentVector 期望对齐的方向，默认为Y轴对齐Face的法向向量，即 `{ x: 0, y: 1, z: 0 }`
     * @param {Function} params.useFaceNormal.fixedFaceNormal 修正后的face normal
     */
    moveByMouse(params?: {
        useFaceNormal: UseFaceNormalInterface;
    }): void;
    /**
     * @description: 禁用跟随鼠标移动
     */
    disableMoveByMouse(): void;
    onIntersectionOnModelUpdate(intersection: THREE.Intersection): void;
    private handleMouseDown;
    private handleMouseUp;
    /**
     * @description: 拖动开始，找出拖的Direction
     */
    private dragStart;
    private dragging;
    private move;
    private dragEnd;
}
export {};
