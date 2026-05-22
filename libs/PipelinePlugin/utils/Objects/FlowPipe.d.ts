import type { PipeParams as BasePipeParams } from './Pipe';
import { ObjectPipe } from './Pipe';
export type PipeParams = BasePipeParams;
export declare class ObjectFlowPipe extends ObjectPipe {
    /** 初始状态下，当前水管内的水流在整体管道上的位移
     * @description 因为水管是不连续的，而要达到水流的连续效果，需要用过贴图的 uOffset 控制每根水管的初始状态
     */
    private initialDisplacement;
    private oldTime;
    /** 横向流动速度：m / s */
    private flowSpeed;
    /** 纵向旋转速度：deg / s */
    private rotateSpeed;
    constructor(params: PipeParams);
    setInitialDisplacement(distance: number, direction?: 'forward' | 'backward'): void;
    /** 水流移动「基于初始位置」
     * @description 因为贴图的运动与 u 的 uOffset 相反，比较反直觉，所以封装方法易于理解
     * @param displacement 位移：米 * 方向(向前 -> 正, 向后 -> 负)
     */
    moveFromOrigin(displacement: number): boolean;
    /** 水流移动「基于调整管道差值之后的位置」
     *
     * @param distance 位移：米 * 方向
     */
    moveForwardFromInitialOffset(distance: number): void;
    flow(): void;
    stopFlow(): void;
    setSpeed(speed?: {
        flowSpeed?: number;
        rotateSpeed?: number;
    }): void;
    disposeAnime(): void;
    private flowAnimationDisposer;
}
