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
    private dragging;
    private rotate;
    private dragEnd;
    private getAngleHelper;
    private setAngleHelperStart;
    private setAngleHelperLength;
    private setTipsAngle;
    private setTipsPosition;
}
