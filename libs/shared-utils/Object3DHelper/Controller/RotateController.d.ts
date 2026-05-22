import { BaseController } from '../Base/BaseController';
import type { RotateHelperAbstract } from '../Helper';
import * as THREE from 'three';
export declare class RotateController<T extends RotateHelperAbstract = RotateHelperAbstract> extends BaseController<T> {
    protected name: string;
    private get rotateCenter();
    private startInfo?;
    private removeListener;
    constructor(...params: ConstructorParameters<typeof BaseController<T>>);
    setRotateAngle(angle: {
        x?: number;
        y?: number;
        z?: number;
    }): void;
    /**
     * @description 通过改变欧拉角中的某一个值来改变旋转，但保持其他两个轴的旋转不变
     * @param axis 要修改的轴 ('x' | 'y' | 'z')
     * @param angle 新的角度值（度）
     * @returns 新的四元数值
     */
    getEulerAngle(axis: 'x' | 'y' | 'z', angle: number): THREE.Quaternion;
    protected onApplyOriginObjectRotate(params: {
        quaternion: THREE.Quaternion;
        origin: THREE.Vector3;
    }): void;
    protected onApplyOriginObjectScale(params: {
        matrix: THREE.Matrix4;
        origin?: THREE.Vector3;
    }): void;
    /**
     * @description: 拖动开始，找出拖的Direction
     */
    private dragStart;
    private getMatrix;
    private getMatrixAngle;
    private parseAngleByDirection;
    private dragging;
    private rotate;
    private dragEnd;
    private updateOtherHelpers;
    private getAngleHelper;
    private setAngleHelperStart;
    private setAngleHelperLength;
    private setTipsAngle;
    private setTipsPosition;
}
