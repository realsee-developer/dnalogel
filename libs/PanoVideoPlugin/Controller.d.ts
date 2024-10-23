import type { Five } from '@realsee/five';
import type { LoadParams, PluginEventMap, PluginState, PluginData, VideoItem } from './typings';
import { VideoMeshController } from './VideoMeshController';
import * as BasePlugin from '../base/BasePlugin';
export declare class PanoVideoPluginController extends BasePlugin.Controller<PluginState, PluginEventMap> {
    /** 插件 State */
    get state(): {
        enabled: boolean;
    };
    /** 插件是否已被销毁 */
    get disposed(): boolean;
    controllerMap: Map<string, VideoMeshController>;
    data?: PluginData;
    private enabled;
    private _disposed;
    constructor(five: Five);
    /** 加载点位视频数据，加载数据并不代表会加载点位视频。 */
    load(data: PluginData, params?: LoadParams): void;
    /** 开启插件功能。 */
    enable(options?: BasePlugin.BaseOptions): void;
    /** 禁用插件功能。 */
    disable(options?: BasePlugin.BaseOptions): void;
    /** 看向某个视频。
     * - 会自动切换到全景模式。
     * - 如果遇到不能自动播放的问题，需要放到用户交互事件中调用。
     */
    lookAtVideoItemByRenderID(id: string): void;
    /**
     * 取消静音。
     *
     * 大部分浏览器需要用户交互后才能开启视频声音。
     *
     * 如果需要取消静音，建议在用户交互事件中调用本方法。
     *
     * 例如:
     *
     * ```jsx
     * onClick={() => {
     *  panoVideoPluginController.lookAtVideoItemByRenderID('xxx')
     *  panoVideoPluginController.unmuteByRenderID('xxx')
     * }}
     * ```
     */
    unmuteByRenderID(id: string): void;
    /** 为一个点位添加视频（可以是多条）。 */
    add(panoIndex: number, videoItems: VideoItem[]): void;
    /** 根据 VideoItem render_id 删除某个视频。 */
    removeByRenderID(id: string): void;
    /** 清空现有数据 */
    clear(): void;
    /** 销毁插件 */
    dispose(): void;
    /** 控制台打印警告 */
    private logWarning;
}
