import type * as BasePlugin from '../base/BasePluginWithData';
import type { VideoMeshController } from './VideoMeshController';
/** 单个视频元素 */
export interface VideoItem {
    /** client render ID
     * @remarks 为什么不用 id 作为唯一标识？
     * - id 是后端生成的，而 render_id 是前端生成的，在编辑时为了保证在请求后端数据之前也能进行渲染，使用额外的 id 进行渲染。
     * - 为了保证两端的数据一致性，插件里使用 render_id 作为唯一 ID。
     */
    render_id: string;
    /** 文件地址 */
    url: string;
    /** 算法处理的视频 uv 信息
     * @description [left, top, width, height]
     */
    origin: number[];
}
/** 点位视频元素 */
export interface PanoVideoItem {
    /** client render ID */
    render_id: string;
    /** 视频播放点位 */
    pano_index: number;
    /** 视频列表 */
    video_list: VideoItem[];
}
/** 点位视频模型参数 */
export interface VideoMeshParams {
    /** client render ID */
    renderID: string;
    /** video 文件地址 */
    url: string;
    /** 算法处理的视频 uv 信息
     * @description [left, top, width, height]
     */
    origin: number[];
    /** 视频播放点位 */
    panoIndex: number;
    /** 初始状态 */
    initialState?: {
        enabled?: boolean;
    };
}
/** 加载数据时的额外参数 */
export interface LoadParams {
    initialState?: {
        enabled?: boolean;
    };
}
export interface PluginState {
    enabled: boolean;
}
export interface PluginData {
    list: PanoVideoItem[];
}
export interface PluginEventMap extends BasePlugin.EventMap<PluginState, PluginData> {
    /** 点位视频模型开启 */
    enable: (params: {
        userAction: boolean;
    }) => void;
    /** 点位视频模型关闭 */
    disable: (params: {
        userAction: boolean;
    }) => void;
    /** 点位视频被点击 */
    click: (event: {
        target: VideoMeshController;
        preventDefault: () => void;
    }) => void;
}
