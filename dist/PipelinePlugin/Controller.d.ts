import type { Five } from '@realsee/five';
import type { State, EventMap, ServerData, PluginData, LoadOptions, ShowHideOptions, SetSpeedOptions, ShowPipelinesOptions } from './typing';
import * as THREE from 'three';
import * as BasePlugin from '../base/BasePluginWithData';
import { ObjectFlowPipe } from './utils/Objects/FlowPipe';
export declare class Controller extends BasePlugin.Controller<State, EventMap, ServerData.RootObject, PluginData.RootObject> {
    data?: PluginData.RootObject;
    /** 插件状态
     * @property `visible` `<boolean>` 是否可见
     * @property `enabled` `<boolean>` 是否启用
     * @property `visiblePipeIDs` `<string[]>` 可见的管道 ID
     * @property `speed` `<Speed>` 水流速度
     * @property `speed.flowSpeed` `<number>` 横向流动速度，默认是 0.6 m/s
     * @property `speed.rotateSpeed` `<number>` 纵向旋转速度：默认是 0 deg/s
     */
    state: State;
    /** 当前插件所有新增 THREE 相关副作用都在 group 下 */
    group: THREE.Group;
    /** 用于展示水流的水管 */
    pipeObjects: ObjectFlowPipe[];
    /** 水管贴图缓存 */
    private texturePromiseCache;
    constructor(five: Five);
    /** 加载管道数据，重复调用会使用新数据覆盖旧数据
     * @param `data` `<Plugin.ServerData>` Open API 接口返回的数据。
     * @param `initialState` `<Plugin.State> | <undefined>` 数据加载后，要应用的 state，默认是 undefined。
     * @param `userAction` `<boolean> | <undefined>` 是否是用户操作，默认是 true。
     * @param `options` `<Plugin.LoadOptions> | <undefined>` 数据加载配置项。
     * @param `options.getPipeRadius` `<(pipe: ServerData.LinesDataset) => number> | <undefined>` 允许用户通过函数自定义管道半径。
     * @param `options.getPipeUrl` `<(water: Water) => string> | <undefined>` 允许用户通过函数自定义管道贴图，
     * 函数返回的 string 就是当前 water 对应的贴图地址。
     */
    load(data: ServerData.RootObject, initialState?: Partial<State>, userAction?: boolean, options?: Partial<LoadOptions>): Promise<void>;
    /** 更改插件 State
     * @param `state` `<Partial<Plugin.State>>` 插件属性 `state` 的子集。
     * @param `options` `<Option> | <undefined>`
     * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
     */
    setState(state: Partial<State>, options?: BasePlugin.BaseOptions): void;
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
    /** 展示管道模型，注意如果通过 `switchPipelines` 更改过 `visibleIDs`，则只会展示这一部分模型。
     * @param `options` `<Partial<ShowHideOptions>> | <undefined>`
     * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
     * @param `options.anime` `<AnimeOptions> | <undefined>` 动画配置。
     * @param `options.anime.duration` `<number> | <undefined>` 动画时间，默认是 500ms。
     */
    show(options?: Partial<ShowHideOptions>): Promise<void>;
    /** 插件内容整体隐藏
     * @param `options` `<Partial<ShowHideOptions>> | <undefined>`
     * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
     * @param `options.anime` `<AnimeOptions> | <undefined>` 动画配置。
     * @param `options.anime.duration` `<number> | <undefined>` 动画时间，默认是 500ms。
     */
    hide(options?: Partial<ShowHideOptions>): Promise<void>;
    /** 切换管路
     * @param `options` `Partial<ShowPipelinesOptions> | <undefined>`
     * @param `options.target` `<{ startLibraryID: number; endLibraryID: number }[]> | <undefined>`
     * 目标管路，存在时，展示目标管路包含的管道，同时隐藏其他管道。不存在则展示所有管道。
     * startLibraryID 和 endLibraryID 是起始和结束的设备 ID。
     * @param `options.showAnime` `<AnimeOptions> | <undefined>` 展示的动画配置。
     * @param `options.hideAnime` `<AnimeOptions> | <undefined>` 隐藏的动画配置。
     * @param `options.anime` `<AnimeOptions> | <undefined>` 兜底的动画配置。
     * @param `options.userAction` `<boolean> | <undefined>` 是否是否是用户操作。
     * */
    switchPipelines(options?: Partial<ShowPipelinesOptions>): Promise<void>;
    /** 开始流动 */
    flow(options?: BasePlugin.BaseOptions): void;
    /** 停止流动 */
    stopFlow(options?: BasePlugin.BaseOptions): void;
    /** 更改水管流速
     * @param `options` `<SetSpeedOptions> | <undefined>`
     * @param `options.speed` `<Speed> | <undefined>` 参考 `state.speed` 的描述。
     * @param `options.userAction` `<boolean> | <undefined>` 是否是否是用户操作。
     */
    setSpeed(options?: Partial<SetSpeedOptions>): void;
    /** 销毁插件，移除所有副作用，销毁后将不响应任何 API */
    dispose: () => void;
    protected formatData(data: ServerData.RootObject, options?: Partial<LoadOptions>): Promise<PluginData.RootObject>;
    private _enable;
    private _disable;
    private _show;
    private _hide;
    private _switchPipelines;
    private _flow;
    private _stopFlow;
    private _setSpeed;
    private updateState;
    /** 加载管道贴图，如果再加载中，复用之前的加载 Promise */
    private loadPipeTexture;
    /** 销毁所有动画 */
    private disposeAnime;
    /** 移除所有管道模型 */
    private removeAllPipes;
    /** 根据 ID 查找管道模型 */
    private findPipeObjectWithID;
    /** 根据 target 查找管道模型 */
    private findPipeObjectWithTarget;
    private onWantsFiveTapGesture;
}
