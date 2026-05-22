import type { BaseOptions } from '../base/BasePlugin';
import { Five } from '@realsee/five';
import * as BasePlugin from '../base/BasePluginWithData';
import type { EventMap, PanoCompassPluginData, PanoCompassPluginParameterType, PluginData, PluginServerData, State } from './typings';
export declare class PanoCompassController extends BasePlugin.Controller<State, EventMap, PluginServerData, PluginData> {
    /**
     * 默认状态
     */
    state: State;
    data?: PanoCompassPluginData;
    private group;
    private roomInfoInstance?;
    private roomInfoWrapperInstance?;
    private compassMeshTween?;
    private compassMesh?;
    private logoMesh?;
    private logoMeshTween?;
    private entryDoorMesh?;
    constructor(five: Five, config?: PanoCompassPluginParameterType);
    /**
     * 启用插件，响应用户操作并展示UI
     * @param options
     */
    enable(options?: Required<BaseOptions>): void;
    /**
     * 禁用插件，禁止响应用户操作并隐藏UI
     * @param options
     */
    disable(options?: Required<BaseOptions>): void;
    /**
     * 展示UI
     * @param options
     * @returns
     * @todo 需要考虑动画
     */
    show(options?: Required<BaseOptions>): Promise<void>;
    /**
     * 隐藏UI
     * @param options
     * @returns
     * @todo 需要考虑动画
     */
    hide(options?: Required<BaseOptions>): Promise<void>;
    setState(state: Partial<State>, options?: Required<BaseOptions>): void;
    load(data: PluginServerData | PluginData, state?: State, userAction?: boolean): Promise<void>;
    /**
     * 销毁插件
     * @todo 销毁贴图时，最好还是直接销毁贴图吧，this.compassMesh?.material.map 这种都是很深层的引用了。THREE 的建议我看也是自己去管理和销毁公共贴图。
     */
    dispose: () => void;
    protected formatData(serverData: PluginServerData | PluginData): Promise<PluginData>;
    /**
     * 添加事件监听
     */
    private _addEventListener;
    /**
     * 移除事件监听
     */
    private _removeEventListener;
    /**
     * 启用，响应事件，展示UI
     */
    private _enable;
    /**
     * 禁用，不响应事件，不展示UI
     */
    private _disable;
    /**
     * 展示UI
     */
    private _toggleVisible;
    private _clearCompassIfNeed;
    private _clearLogoIfNeed;
    private _clearEntryDoorIfNeed;
    /**
     * 初始化
     * @todo 逻辑需要细分
     */
    private init;
    private loadCompassMesh;
    private loadLogoMesh;
    private loadEntryDoorMesh;
    private loadRoomInfo;
    private onFivePanoWillArrive;
    private onFivePanoArrived;
    private onFiveCameraDirectionUpdate;
    private onFiveModeChange;
}
