import * as THREE from 'three';
import type { Five } from '@realsee/five';
import * as BasePlugin from '../base/BasePluginWithData';
import { AreaMakerItem } from './utils/Item';
import type * as PluginType from './typing';
export declare class Controller extends BasePlugin.Controller<PluginType.State, PluginType.EventMap, PluginType.ServerData, PluginType.PluginData> {
    /** 插件当前状态 */
    state: PluginType.State;
    /** 标注模型 { id: item } 的映射表 */
    itemMap: Map<string | number, AreaMakerItem>;
    /** 自定义 DOM */
    itemRenderer?: PluginType.ItemRenderer;
    /** 标注模型容器 */
    modelGroup: THREE.Group;
    /** 当前使用的数据 */
    data?: PluginType.PluginData;
    /** tag 容器 */
    tagDomContainer: HTMLDivElement;
    /** 插件配置项 */
    get config(): {
        modelDepthTest: boolean;
    };
    /** 是否已经被销毁 */
    get disposed(): boolean;
    /** 查询问题使用的调试对象 */
    checkMsg: {
        childrenMountedState: string;
    };
    /** 是否在 Five Change Mode 动画中 */
    private isInFiveChangeModeAnime;
    /** 子组件是否挂载 */
    private childrenMountedState;
    /** config 的原始值 */
    private _config;
    /** disposed 的原始值 */
    private _disposed;
    /** AreaMakerPlugin
     * @param `five` `<Five>` Five 实例
     * @param `params` `<PluginType.Params> | <undefined>` 插件初始化参数
     * @param `params.initialState` `<PluginType.State> | <undefined>` 插件初始化后，使用的状态
     */
    constructor(five: Five, params?: PluginType.Params);
    /** 加载数据，重复调用会使用新数据覆盖旧数据 */
    load(data: PluginType.ServerData): Promise<void>;
    /** 将插件的 DOM 容器添加到指定的 DOM 元素上 */
    appendTo(wrapper: Element): void;
    /** 启用插件
     * @param `options` `<Option> | <undefined>`
     * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
     */
    enable(options?: BasePlugin.BaseOptions): void;
    /** 禁用插件
     * @param `options` `<Option> | <undefined>`
     * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
     */
    disable(options?: BasePlugin.BaseOptions): void;
    /** 展示标注
     * @param `options` `<Partial<ShowHideOptions>> | <undefined>`
     * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
     */
    show(options?: Partial<PluginType.ShowHideOptions>): Promise<void>;
    /** 插件内容整体隐藏
     * @param `options` `<Partial<ShowHideOptions>> | <undefined>`
     * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
     */
    hide(options?: Partial<PluginType.ShowHideOptions>): Promise<void>;
    /** 更改插件 State
     * @param `state` `<Partial<Plugin.State>>` 插件属性 `state` 的子集。
     * @param `options` `<Option> | <undefined>`
     * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
     */
    setState(state: Partial<PluginType.State>, options?: BasePlugin.BaseOptions): void;
    /** 更改插件 Config
     * @param `config` `<Partial<Plugin.Config>>` 插件属性 `config` 的子集。
     * @param `options` `<Option> | <undefined>`
     */
    updateConfig(config: Partial<PluginType.Config>, options?: BasePlugin.BaseOptions): void;
    /** 根据 ID 获取标注 */
    getMaskItemByID(id: string | number): AreaMakerItem;
    /** 销毁插件，移除所有副作用，销毁后将不响应任何 API */
    dispose: () => void;
    protected formatData(serverData: PluginType.ServerData): PluginType.PluginData;
    private checkChildrenMountedState;
    private updateChildrenMountedState;
    private onFiveInitAnimationWillStart;
    private onFiveInitAnimationEnded;
    private onFiveCameraUpdate;
    private onFiveModeChange;
    private onMakerTagClick;
    private updateState;
    private _enable;
    private onWantsFiveTapGesture;
    private _disable;
    private _show;
    private _hide;
}
