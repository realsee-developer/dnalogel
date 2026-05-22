import type { Five } from '@realsee/five';
import { type AnyPosition } from './positionToVector3';
export declare class LightTag {
    /**
     * @description 单个标签 dom
     */
    container: HTMLDivElement;
    visible: boolean;
    enabled: boolean;
    /**
     * @description 标签的可见性数组
     * ```
     * [0] this.visible
     * [1] 碰撞检测
     * [2] 元素遮挡
     * [3] 强制显示
     * ```
     */
    visibles: boolean[];
    get position(): import("three").Vector3;
    /**
     * @description 标签容器的父容器
     * @default this.five.getElement()?.parentElement
     */
    wrapper: HTMLElement;
    positionsForRotate?: THREE.Vector3[];
    /**
     * @description 碰撞检测
     * @default true
     */
    intersectCheck: boolean;
    /**
     * @description 用于碰撞检测的额外 Object3D
     */
    extraObjectsForIntersectCheck: THREE.Object3D[];
    /**
     * @description 模拟3D
     * @default false
     */
    simulate3D: boolean;
    set needsRender(val: true);
    /**
     * @description 标签的容器，根据 namespace 区分
     */
    private tagWrapper?;
    private five;
    private originPosition?;
    private transformedPosition?;
    private disposer;
    private config;
    private fiveUtil;
    private disposers;
    constructor(five: Five, position?: AnyPosition, config?: {
        wrapper?: HTMLElement;
        positionsForRotate?: AnyPosition[];
        namespace?: string;
        disableOpacityTransition?: boolean;
    });
    /**
     * @description 显示标签
     */
    show(params?: {
        force?: boolean;
    }): void;
    /**
     * @description 隐藏标签
     */
    hide(): void;
    /**
     * @description 启用标签
     */
    enable(): Promise<void>;
    /**
     * @description 禁用标签
     */
    disable(): void;
    /**
     * @description 销毁标签，并释放相关资源
     */
    destroy(): void;
    /**
     * @description 设置标签位置
     * @param position 位置
     * @param positionsForRotate 用于 css 旋转的斜线的两个端点
     */
    setPosition(position: AnyPosition, positionsForRotate?: AnyPosition[]): void;
    setTransformMatrix(matrix: THREE.Matrix4): void;
    updateScreenPosition(): void;
    private onModeChange;
    private onPanoArrived;
    private onCameraUpdate;
    private onCameraFovUpdate;
    private onFiveEveryReady;
    private updateVisible;
    private applyVisible;
    private updateIntersectCheckVisible;
    private addResizeListener;
}
export declare function tag(...params: ConstructorParameters<typeof LightTag>): LightTag;
