import type { PartialDeep } from 'type-fest';
import type { BaseOptions } from '../../base/BasePlugin';
import type { Five } from '@realsee/five';
import type { ShowState } from '../utils/correctFiveState';
import type { FloorplanServerData } from '../typings/floorplanServerData';
import type { State, Config, EventMap, ShowOptions, HideOptions, Parameters, PluginData, PluginServerData, HighlightData } from './typing';
import * as BasePlugin from '../../base/BasePluginWithData';
export declare class Controller extends BasePlugin.Controller<State, EventMap, PluginServerData, PluginData> {
    name: string;
    state: State;
    protected data?: PluginData;
    /** 展示户型图时，需要正确的状态 */
    protected showState: ShowState;
    /** show 动画的公共 Promise */
    protected showPromise?: Promise<void>;
    private app?;
    private panoIndex;
    private floorIndex;
    private selector?;
    /** 公共 Promise 的 reject 方法 */
    private showRejection?;
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
    private store;
    constructor(five: Five, params?: Parameters);
    load(serverData: PluginServerData | FloorplanServerData, state?: Partial<State>, userAction?: boolean): Promise<void>;
    /** 把插件的渲染DOM插入到对应的容器中去 */
    appendTo(wrapper: Element): this;
    /** 启用插件 */
    enable(options?: BaseOptions): void;
    /** 禁用插件 */
    disable(options?: BaseOptions): void;
    /** 销毁插件 */
    dispose: () => void;
    /** 展示户型图
     * 1. show 函数大部分情况下需要耗时
     * 2. 如果当前已经在展示中，将不会触发任何事件
     * 3. 如果展示过程被中断，将抛出错误
     * 4. 多次调用 show 方法，只会触发一次 showAnimationEnded 事件，但是展示结果会取决于最后一次调用参数
     * 5. 如果多次调用 show 方法，参数与上次参数不一致时，上次 show Promise 会被 reject
     * @param opts.floorIndex 楼层
     * @param opts.modelOpacity 模型透明度
     * @param opts.immediately 是否立即展示
     * @param opts.isAutoShow 是否是自动展示
     * @param opts.userAction 是否是用户行为
     */
    show: (options?: Omit<Partial<ShowOptions>, 'isAutoShow'>) => Promise<void>;
    /** 隐藏户型图 */
    hide: (options?: Partial<HideOptions>) => Promise<void>;
    /** 更改插件 State */
    setState(state: PartialDeep<State>, options?: BaseOptions): void;
    changeConfigs(config: Partial<Config>, userAction?: boolean): void;
    /** 更新户型图大小 */
    updateSize: () => boolean;
    highlight: (highlightData: HighlightData) => void;
    unhighlight: () => void;
    protected formatData(serverData: PluginServerData): Promise<PluginData>;
    private _disable;
    private _enable;
    private _show;
    private _hide;
    private updateState;
    /** 如果用户是通过 selector 设置父容器，需要在 modelLoaded 之后把 container 自动放到父容器里
     *
     * - TODO: 等 selector 功能下掉之后删除这个逻辑
     */
    private initContainer;
    private handleClick;
    private addEventListener;
    private removeEventListener;
    /** modelLoaded 之后自动执行 append container 操作  */
    private onFiveModelLoaded;
    /** 更改模型时，自动隐藏户型图 */
    private onFiveModeChange;
    /** 惯性结束后，判断能否自动展示户型图 */
    private onFiveInteriaPan;
    /** panoIndex 改变时，更新 floorIndex */
    private onFivePanoArrived;
    /** cameraUpdate 时判断户型图是否应该自动隐藏 */
    private onFiveCameraUpdate;
    /** 在户型图展示时阻止多指操作, 阻止鼠标放大 */
    private onFiveWantsGesture;
    /** 户型图展示中，转动三维模型，结束时应该自动修复模型状态 */
    private onFiveWantsPanGesture;
    /** 阻止点击分间走点 */
    private onFiveWantsTapGesture;
    /** 从 Panorama 切换到其他模态时，记录当前的相机水平视角 */
    private onFiveWantsChangeMode;
    /** 模型楼层高亮改变时，自动进行楼层切换 */
    private onModelShownFloorChange;
    private render;
}
