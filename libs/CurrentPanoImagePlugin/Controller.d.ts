import type { Five } from '@realsee/five';
import * as BasePlugin from '../base/BasePlugin';
import type * as PluginType from './typings';
export declare class CurrentPanoImagePluginController extends BasePlugin.Controller<PluginType.State, PluginType.EventMap> {
    /** 插件当前状态 */
    state: PluginType.State;
    /** 插件配置项 */
    get config(): {
        width: number;
        yOffset: number;
        yRotate: number;
        imageURL: string;
        /** 插件当前状态 */
        staticPrefix?: string;
        i18n?: (key: string) => string;
    };
    /** 是否已经被销毁 */
    get disposed(): boolean;
    /** 查询问题使用的调试对象 */
    checkMsg: {
        /** mesh 隐藏的原因 */
        meshHidden: string;
        /** 插件 enabled 校验信息 */
        pluginDisabled: string;
        /** 插件 visible 校验信息 */
        pluginHidden: string;
    };
    private group;
    private mesh;
    private textureLoadingPromise?;
    private opacityAnimeTween?;
    /** 是否正在走点动画中 */
    private isInPanoMoveAnime;
    /** 上一次走点的全景图索引 */
    private lastArrivedPanoIndex;
    /** config 的原始值 */
    private _config;
    /** disposed 的原始值 */
    private _disposed;
    constructor(five: Five, params?: PluginType.Params);
    /**
     * 启用插件，响应用户操作并展示UI
     * @param options
     */
    enable(options?: BasePlugin.BaseOptions): void;
    /** 禁用插件
     * @param `options` `<Option> | <undefined>`
     * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
     */
    disable(options?: BasePlugin.BaseOptions): void;
    /** 插件内容整体展示
     * @param `options` `<Partial<BaseOptions>> | <undefined>`
     * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
     */
    show(options?: Partial<PluginType.ShowHideOptions>): Promise<void>;
    /** 插件内容整体隐藏
     * @param `options` `<Partial<BaseOptions>> | <undefined>`
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
    /**
     * 销毁插件
     * @todo 销毁贴图时，最好还是直接销毁贴图吧，this.mesh?.material.map 这种都是很深层的引用了。THREE 的建议我看也是自己去管理和销毁公共贴图。
     */
    dispose: () => void;
    /** 问什么看不到模型 */
    __whyCantSeeMesh(): string;
    private updateState;
    /** 根据各种条件更新 Mesh 的可见性 */
    private updateMeshVisible;
    /** 根据点位更新 Mesh 坐标 */
    private updateMeshPosition;
    /** 重新加载贴图，调用时会先清除已有的贴图 */
    private reloadTexture;
    /** north_rad 变化时，需要更新模型的旋转角度 */
    private updateMeshQuaternion;
    private checkMeshVisible;
    private _enable;
    private _disable;
    private _show;
    private _hide;
    /** 贴图加载完成的回调 */
    private onTextureLoaded;
    /** Five load Work 后 */
    private onFiveWillLoad;
    /** 走点前 */
    private onFivePanoWillArrive;
    /** 走点后 */
    private onFivePanoArrived;
    private onMeshVisibleChange;
    private onFiveModeChange;
}
