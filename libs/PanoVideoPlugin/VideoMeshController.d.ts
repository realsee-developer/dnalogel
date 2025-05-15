import type { Five } from '@realsee/five';
import type { VideoMeshParams } from './typings';
import type { Subscribe } from '../shared-utils/Subscribe';
import type { PluginEventMap } from './typings';
import type { Simplify } from 'type-fest';
import type { FiveUtil } from '../shared-utils/Utils/FiveUtil';
/** 点位视频控制器
 * @description 控制器存在副作用，包括：
 * - 对 Five 事件的监听。
 * - 对 DOM 原生事件的监听。
 * - 用于播放视频的模型。
 * - 视频实例。
 * @description 清除副作用的力度从弱到强：
 * - 隐藏：hide，用于隐藏 UI 元素；不销毁多媒体资源。用于临时隐藏。
 * - 取消挂载：unmount，销毁视频资源；移除模型。用于不符合自身展示条件时执行。
 * - 禁用：disable，销毁视频资源；移除模型；取消监听。用于外部条件变换导致的功能禁用。
 * - 销毁：dispose，用于彻底销毁实例，dispose 之后将不响应任何事件。
 */
export declare class VideoMeshController {
    /** 传入的 ID，不可更改 */
    get renderID(): string;
    /** 是否已经销毁 */
    get disposed(): boolean;
    /** 是否已经启用 */
    get enabled(): boolean;
    video: HTMLVideoElement;
    private fiveUtil?;
    private _id;
    /** 视频资源地址 */
    private readonly url;
    /** Five Instance */
    private five;
    /** 视频对应的点位 */
    private panoIndex;
    /** 视频对应的 Work Observer */
    private observer?;
    /** 视频在球面的 uv：[left, top, width, height] */
    private origin;
    /** Video DOM */
    /** Video Mesh */
    private videoMesh;
    private _enabled;
    private _disposed;
    /** 视频资源是否满足播放条件 */
    private videoDataLoaded;
    /** 视频是否曾经播放过 */
    private hasVideoEverPlayed;
    /** 自动 render five 的销毁函数
     * @remark 由于 render video 依赖 Five render，因此需要自动 render five。
     */
    private renderFiveDisposer?;
    private hooks;
    /** 初始化视频、模型以及相关事件监听。 */
    constructor(five: Five, params: VideoMeshParams & {
        fiveUtil?: FiveUtil;
    } & {
        hooks: Subscribe<Simplify<PluginEventMap>>;
    });
    /**
     * 取消静音
     *
     * @warning 需要注意：由于大部分浏览器的限制，视频的声音必须在用户有交互事件后才能开启，否则会被浏览器禁用视频播放。
     */
    unmute: () => void;
    /** 彻底销毁，不响应之后的任何事件 */
    dispose(): void;
    enable(): void;
    /** 禁用插件 */
    disable(): void;
    /** 切换到全景模式并看向视频
     * @remark 如果遇到不能自动播放的问题，需要放到用户交互事件中调用。
     */
    lookAtVideo(): void;
    /** 把 uv 值转换成位置 */
    private uv2Position;
    /** 获取视频中心点的 uv */
    private getUVCenter;
    /** 添加时间监听 */
    private addEventListeners;
    /** 移除事件监听 */
    private removeEventListeners;
    /** 如果满足 mount 条件，mount */
    private mountIfNeeded;
    /** 挂载：加载视频资源；添加模型。 */
    private mount;
    /** 卸载：销毁视频资源；移除模型。 */
    private unmount;
    /** 暂停视频，去除模型。 */
    private hide;
    /** Five 数据加载后需要根据点位位姿调整点位模型位置 */
    private onFiveDataLoaded;
    /** 兼容视频播放 */
    private onFiveWantsMoveToPano;
    /** 走到某个点位上时，挂载/卸载视频 */
    private onFivePanoArrived;
    private onFivePanoWillArrive;
    /** Five 模型变化 */
    private onFiveModeChange;
    /** Five mode change 动画结束 */
    private onFiveInitAnimationEnded;
    /** Five Canvas 点击 */
    private onFiveWantsTapGesture;
    /** video canplaythrough 事件触发 */
    private onVideoDataLoaded;
    /** video playing 事件触发
     * @remarks
     * 事件触发时机：
     * - video is ready to start after having been paused.
     * - video is ready to play after delayed due to lack of data.
     * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
     */
    private onVideoPlaying;
    /** 触发 playing 和 canplaythrough */
    private onVideoPlayingAndLoaded;
    /** video pause 事件触发 */
    private onVideoPaused;
    /** 控制台打印警告 */
    private logWarning;
    /** 检测射线与模型的交点是不是在视频的范围内 */
    private checkIntersectionInBounding;
}
