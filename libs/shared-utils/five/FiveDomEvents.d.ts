/**
 * @version 2.29.0
 * 为什么重构？
 * 1. 点击事件没有考虑Five模型
 * 2. 为了在 mouseDown 的时候阻止 five tap 事件，需要提前做碰撞检测，但其实是没必要的，因为触发了 mouseDown 也不一定触发 点击事件 或者 Tap 事件，因为可能物体不可见或者有什么其他的判断
 * 3. 基于第二点，废弃了之前使用浏览器原生事件监听点击的方式，改为使用 wantsTapGesture 的方式
 * 4. 重构之后只会在 wantsTapGesture 事件触发的时候做射线检测
 */
import type { Five, Model as FiveModel } from '@realsee/five';
import type * as THREE from 'three';
export interface FiveDomEventMap {
    /**
     * @description 点击事件
     * @return {PreventFiveEvent} 返回 false 可以不阻止 five 的 tap 事件; default: true
     */
    click: (event: FiveDomEvent) => PreventFiveEvent | void;
    /**
     * @description 双击事件
     */
    dblclick: (event: FiveDomEvent) => void;
    /**
     * @description 鼠标按下事件
     */
    mousedown: (event: FiveDomEvent) => void;
    /**
     * @description 鼠标抬起事件
     */
    mouseup: (event: FiveDomEvent) => void;
    /**
     * @description 鼠标移入事件
     */
    hover: (event: FiveDomEvent) => void;
    /**
     * @description 鼠标移出事件
     */
    unHover: (event: FiveDomEvent) => void;
    /**
     * @description: 拖动开始
     */
    dragstart: (event: FiveDomEvent) => void;
    /**
     * @description: 拖动中
     */
    drag: (event: FiveDomEvent) => void;
    /**
     * @description: 拖动结束
     */
    dragend: (event: FiveDomEvent) => void;
}
type EventName = keyof FiveDomEventMap;
type PreventFiveEvent = boolean;
export interface EventHandlerConfig {
    /**
     * @description 不可见时不触发事件
     * @default false
     */
    noEmitWhenHide?: boolean;
    /**
     * @description 不在场景中时不触发事件
     * @default false
     */
    noEmitWhenNotInScene?: boolean;
    /**
     * @description 在全景点周围时，不触发事件
     * @default false
     */
    skipPano?: boolean;
    /**
     * @description 指定参与碰撞检测的five model，传null表示不参与碰撞检测
     * @default 当前 five.state.workCode 对应的模型
     */
    fiveModels?: FiveModel[] | null;
}
export interface FiveDomEvent {
    type: EventName;
    target: THREE.Object3D;
    origDomEvent?: Event;
    raycaster: THREE.Raycaster;
    intersects?: THREE.Intersection[];
    stopPropagation: () => void;
}
type Object3DWithEvent = THREE.Object3D & {
    _domEvent?: {
        [key in `${EventName | 'wantDblclick'}Handler`]?: Array<[FiveDomEventMap[EventName], Omit<EventHandlerConfig, 'fiveModels'>]>;
    };
    _hovered?: boolean;
    _dragging?: boolean;
    draggable?: boolean;
};
export declare class FiveDomEvents {
    private _five;
    get five(): Five;
    set five(five: Five);
    /**
     * @description: 拖动中
     */
    private dragging;
    private get haveDragEventObject();
    private boundObject;
    private config;
    private get model();
    constructor(five: Five, config?: EventHandlerConfig);
    /**
     * @description: added 时自动绑定事件，removed时自动解绑事件，也就是说只有物体在场景中的时候才会触发事件
     * @note: 注意：目前需要触发物体的 added 事件和 removed 事件才会生效
     * @todo: added 和 removed 还是不太智能
     */
    addAutoBindEventListener<T extends EventName = EventName>(object: Object3DWithEvent, event: T, callback: FiveDomEventMap[T], config?: Omit<EventHandlerConfig, 'fiveModels'>): () => void;
    /**
     * @description: add event listener
     * @param params.object: object
     * @param params.event: event name
     * @param params.callback: 返回 false 可以不阻止 five 的 tap 事件; default: true
     * @return {void}
     */
    addEventListener<T extends EventName = EventName>(object: Object3DWithEvent, event: T, callback: FiveDomEventMap[T], config?: Omit<EventHandlerConfig, 'fiveModels'>): void;
    removeEventListener(object: Object3DWithEvent, event?: EventName, callback?: (e: FiveDomEvent) => any, ...args: any[]): void;
    clear(): void;
    dispose(): void;
    toJSON(): {
        boundObject: Partial<Record<keyof FiveDomEventMap, Object3DWithEvent[]>>;
    };
    private getRaycaster;
    private handleWantsGesture;
    private handleDomEvent;
    private handleMouseEvent;
    private handleMousedown;
    private handleMouseup;
    private handleMousemove;
    private onDomEvent;
    private objectIsBound;
    private notify;
}
export {};
