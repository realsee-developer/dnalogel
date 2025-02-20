import type { PartialDeep } from 'type-fest';
import type { BaseOptions } from '../../base/BasePlugin';
import type { Five } from '@realsee/five';
import type { FloorplanServerData } from '../typings/floorplanServerData';
import type { State, Config, EventMap, Parameters, PluginData, PluginServerData, HighlightData } from './typing';
import * as BasePlugin from '../../base/BasePluginWithData';
export declare class Controller extends BasePlugin.Controller<State, EventMap, PluginServerData, PluginData> {
    name: string;
    state: State;
    protected data?: PluginData;
    private app?;
    private selector?;
    private panoIndex;
    private floorIndex;
    /** 户型图父容器 */
    private wrapper?;
    /** 户型图主容器 */
    private container;
    /** 展示户型图图前，Five 的 Panorama Longitude */
    private lastPanoramaLongitude;
    /** 户型图大小 */
    private size;
    private defaultMissingFloorConfig;
    /** 是否已经执行过事件监听 */
    private hasAddedEventListener;
    /** 上一次隐藏是否是用户调用了 hide 导致的 */
    private isHiddenByHideFunc;
    /** 高亮区域 */
    private highlightData;
    constructor(five: Five, params?: Parameters);
    load(serverData: PluginServerData | FloorplanServerData, state?: Partial<State>, userAction?: boolean): Promise<void>;
    /** 更新户型图大小 */
    updateSize: () => boolean;
    /** 更新户型图位置 */
    updatePosition(): void;
    /** 把插件的渲染DOM插入到对应的容器中去 */
    appendTo(wrapper: Element): this;
    show(options?: BaseOptions): Promise<void>;
    hide(options?: BaseOptions): Promise<void>;
    enable(options?: BaseOptions): void;
    disable(options?: BaseOptions): void;
    /** 销毁插件 */
    dispose: () => void;
    /** 更改插件 State */
    setState(state: PartialDeep<State>, options?: BaseOptions): void;
    changeConfigs(config: Partial<Config>, userAction?: boolean): void;
    highlight: (highlightData: HighlightData) => void;
    unhighlight: () => void;
    protected formatData(serverData: PluginServerData): Promise<PluginData>;
    private _show;
    private _hide;
    private _enable;
    private _disable;
    private updateState;
    private addEventListener;
    private removeEventListener;
    /** modelLoaded 之后自动执行 append container 操作  */
    private onFiveModelLoaded;
    /** 非 Topview 态隐藏户型图 */
    private onFiveModeChange;
    private onFivePanoArrived;
    private onFiveCameraUpdate;
    private onFiveWantsGesture;
    private onFiveWantsMoveToPano;
    /** 动画结束后是 Topview 态就展示户型图 */
    private onFiveInitAnimationEnded;
    private onModelShownFloorChange;
    /** 如果用户是通过 selector 设置父容器，需要在 modelLoaded 之后把 container 自动放到父容器里
     *
     * - TODO: 等 selector 功能下掉之后删除这个逻辑
     */
    private initContainer;
    private render;
}
