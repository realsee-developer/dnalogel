import type { Five } from '@realsee/five';
import { PointSelectorHelper, type PointIntersection } from './PointSelectorHelper';
import type { Vector3 } from 'three';
import { Subscribe } from '../Subscribe';
interface Config {
    /**
     * @description: 选点的两种模式, 'fixed' 为固定选点为屏幕中心点，拖动five画布来更新点，'cursor' 为跟随鼠标移动来更新点, 'auto' 则根据设备类型自动选择
     * @default: 'auto'
     */
    mode: 'fixed' | 'cursor' | 'auto';
    pointSelectorHelperParams: ConstructorParameters<typeof PointSelectorHelper>[1];
}
type EventMap = {
    /**
     * @description: 与模型交点更新时触发，移出监听范围时为null
     * @param isAdhered 是否为吸附的点
     */
    intersectionUpdate: (intersection: PointIntersection | null, isAdhered?: boolean) => void;
    /**
     * @description: 试图打点，返回false则不打点
     */
    wantsSelect: (intersection: PointIntersection) => boolean | void;
    /**
     * @description: 打点成功
     */
    select: (intersection: PointIntersection) => void;
    /**
     * @description: 功能开启
     */
    enable: () => void;
    /**
     * @description: 功能关闭
     */
    disable: () => void;
};
/**
 * @description: 在屏幕上选点
 */
export declare class PointSelector extends Subscribe<EventMap> {
    get position(): PointIntersection;
    /**
     * @description: 不在 five canvas 上时为 true
     */
    outOfFive: boolean;
    enabled: boolean;
    pointSelectorHelper: PointSelectorHelper;
    /** @deprecated directly use `pointSelector.on/off` instead */
    hook: this;
    private five;
    private hammer?;
    private mode;
    /** 长按屏幕的动作触发后为true，手指抬起后为false */
    private pressDown;
    /** 一组吸附的点，光标靠近这些点时，会将helper以及放大镜的位置设置为这些点 */
    private adherePoints;
    /** 吸附点的半径 */
    private adherePointsRadius;
    private lastFiveHelperVisible?;
    private mousePosition;
    private get mouseNdcPosition();
    constructor(five: Five, config?: Partial<Config>);
    enable(): void;
    disable(): void;
    dispose(): void;
    setAdherePoints(points: Vector3[] | ((intersection: PointIntersection) => Vector3[]) | null, radius?: number): void;
    /**
     * @description: 主动触发一次选点
     * @return: select 是否成功
     */
    select: (intersection?: PointIntersection) => boolean;
    /**
     * @description: 鼠标进入five canvas时
     */
    private onEnter;
    /**
     * @description: 鼠标离开five canvas时
     */
    private onLeave;
    private onTap;
    /**
     * 1. 如果之前没有长按行为「即没有长按点时」-> 滑动全景
     * 2. 如果有长按点，把长按点位置更新为当前位置
     */
    private onPan;
    /**
     * @description: 长按屏幕后，更新长按点的位置
     */
    private onPress;
    /**
     * @description: 手指抬起后，重置pressDown状态
     */
    private onPanEnd;
    private updateByMousePosition;
    /**
     * @description: 根据鼠标位置更新helper位置
     */
    private updateByNdcPosition;
    /**
     * @description: 更新 pointSelectorHelper 的焦点位置
     */
    private updatePointSelectorHelperIntersect;
    private mousePositionToNdcPosition;
    private onFiveWantsPanGesture;
    private renderScreenCenter;
    private emitIntersectionUpdate;
}
export {};
