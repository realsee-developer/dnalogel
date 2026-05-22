import type { Mode, Pose } from '@realsee/five';
export interface CameraMovementPluginParameterType {
}
export interface CameraMovementPluginExportType {
    /**
     * 运镜：移动
     * @param moveArgs 移动参数
     * @param duration 移动耗时
     * @param opts 额外配置
     */
    move(moveArgs: Partial<MoveArgs>, duration: number, opts?: MoveOpts): Promise<boolean>;
    /**
     * 运镜：旋转
     * @param rotateArgs 旋转参数
     * @param duration 旋转耗时
     * @param opts 额外配置
     */
    rotate(rotateArgs: Partial<RotateArgs>, duration: number, opts?: RotateOpts): Promise<boolean>;
}
/**
 * 运镜效果
 */
export declare enum CameraMovementEffect {
    Move = "Move",
    Rotate = "Rotate"
}
/**
 * 旋转类型
 */
export declare enum Rotation {
    Clockwise = "Clockwise",
    Anticlockwise = "Anticlockwise",
    Loop = "Loop"
}
/**
 * 回调配置
 */
export interface CameraMovementOptsCallback {
    asyncStartCallback?: () => void;
    asyncEndCallback?: () => void;
}
/**
 * 移动运镜参数
 */
export type MoveArgs = {
    mode: Mode;
    panoIndex: number;
} & Pose;
/**
 * 移动运镜配置
 */
export type MoveOpts = {
    preload?: boolean;
} & CameraMovementOptsCallback;
/**
 * 旋转运镜参数
 */
export type RotateArgs = {
    panoIndex?: number;
    rotateSpeed?: number;
    rotation?: Rotation;
} & Pose;
/**
 * 旋转运镜配置
 */
export type RotateOpts = {
    preload?: boolean;
} & CameraMovementOptsCallback;
