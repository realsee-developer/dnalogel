import type { Five } from '@realsee/five';
import { PointSelectorHelper, type PointIntersection, type PointSelectorHelperConfig } from './utils/PointSelectorHelper';
import { type Vector3 } from 'three';
import * as THREE from 'three';
import { Subscribe } from '../../Subscribe';
import type { LiteralString } from '../../../typings/utils.type';
export type { PointIntersection };
export type ActionIfNoModelUnderMouse = LiteralString<'virtualPoint' | 'lastPoint' | 'disable'>;
type PointerSelectorMode = 'fixed' | 'cursor';
interface Config {
    /**
     * @description: 选点的两种模式, 'fixed' 为固定选点为屏幕中心点，拖动five画布来更新点，'cursor' 为跟随鼠标移动来更新点, 'auto' 则根据设备类型自动选择
     * @default: 'auto'
     */
    mode: PointerSelectorMode | 'auto';
    /**
     * @description 当鼠标位置没有模型时的行为
     * ```markdown
     * virtualPoint: 生成一个虚拟点
     * lastPoint: 选点器停留在上一个点处
     * disable: 禁止选点
     * ```
     * @default 'virtualPoint'
     */
    actionIfNoModelUnderMouse: ActionIfNoModelUnderMouse;
    helper: PointSelectorHelperConfig;
}
export type PointSelectorConfig = Partial<Config>;
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
    get outOfFive(): boolean;
    get enabled(): boolean;
    get cursorError(): boolean;
    set cursorError(cursorError: boolean);
    _cursorError: boolean;
    actionIfNoModelUnderMouse: ActionIfNoModelUnderMouse;
    plane?: THREE.Plane | null;
    readonly pointSelectorHelper: PointSelectorHelper;
    /** @deprecated directly use `pointSelector.on/off` instead */
    readonly hook: this;
    private five;
    private set outOfFive(value);
    private _outOfFive;
    private set enabled(value);
    private _enabled;
    private mode;
    /** 长按屏幕的动作触发后为true，手指抬起后为false */
    private pressDown;
    /** 一组吸附的点，光标靠近这些点时，会将helper以及放大镜的位置设置为这些点 */
    private adherePoints;
    /** 吸附点的半径 */
    private adherePointsRadius;
    /** 有值时表明处于按压检查阶段 */
    private setPressDown?;
    private lastFiveHelperVisible?;
    private lastIntersection?;
    private mousePosition;
    private _mouseDownInfo;
    private config;
    private get mouseNdcPosition();
    constructor(five: Five, config?: PointSelectorConfig);
    enable(): void;
    disable(): void;
    dispose(): void;
    setAdherePoints(points: Vector3[] | ((params: {
        intersection: PointIntersection;
        pointSelectorInstance: PointSelector;
    }) => Vector3[]) | null, radius?: number): void;
    /**
     * @description: 主动触发一次选点
     * @return: select 是否成功
     */
    select: (intersection?: PointIntersection) => boolean;
    private onMouseWheel;
    /**
     * @description: 鼠标进入five canvas时
     */
    private onEnter;
    /**
     * @description: 鼠标离开five canvas时
     */
    private onLeave;
    private onClick;
    private onMouseDown;
    private onMouseUp;
    private onTouchStart;
    private onTouchMove;
    private onTouchEnd;
    private updateByMousePosition;
    /**
     * @description: 根据鼠标位置计算焦点位置并更新
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
