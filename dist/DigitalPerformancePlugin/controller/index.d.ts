import type { Five } from '@realsee/five';
import { DigitalPlayground } from '../core/DigitalPlayground';
import type { DigitalHuman } from '../core/DigitalHuman';
import type { DigitalScript, DigitalChapter, DigitalPerformancePluginConfig, GlobalProgress, ChapterTimeInfo, ChapterLocation, ProgressListener } from '../typings';
export default class DigitalPerformancePluginController {
    five: Five;
    playground: DigitalPlayground;
    config: DigitalPerformancePluginConfig;
    state: {
        enabled: boolean;
        playing: boolean;
        currentChapter: DigitalChapter | null;
        currentScript: DigitalScript | null;
        continuousPlaying: boolean;
        playMode: 'single' | 'continuous';
    };
    NAME: string;
    private totalDurationCache;
    private chapterTimeMapCache;
    private progressListeners;
    private progressUpdateInterval;
    private progressUpdateTimer;
    private _autoPlayOnNaturalEnd;
    private playingPlayersListeners;
    constructor(five: Five, config?: DigitalPerformancePluginConfig);
    /**
     * 加载剧本数据
     */
    loadScript(script: DigitalScript): Promise<void>;
    private init;
    /**
     * 预加载资源
     */
    private preloadResources;
    /**
     * 播放指定章节
     */
    playChapter(chapter: DigitalChapter): Promise<void>;
    /**
     * 播放指定章节（内部方法，用于连续播放）
     */
    private playChapterForContinuous;
    /**
     * 播放指定章节（通过索引）
     */
    playChapterByIndex(index: number): Promise<void>;
    /**
     * 暂停播放
     */
    pause(): void;
    /**
     * 继续播放
     */
    continue(): Promise<void>;
    /**
     * 连续播放模式下的继续播放（从暂停位置继续播放所有剩余章节）
     */
    private continueAllRemaining;
    /**
     * 从当前章节播放到最后一个章节（连续自动播放）
     */
    playAllRemaining(): Promise<void>;
    /**
     * 重置播放
     */
    reset(): void;
    /**
     * 设置时间线
     */
    setTimelineTo(time: number): void;
    /**
     * 启用插件
     */
    enable(): void;
    /**
     * 禁用插件
     */
    disable(): void;
    /**
     * 重置并清理（完全重置插件状态，包括对 five 的操作和 DigitalHuman）
     */
    private resetAndCleanup;
    /**
     * 销毁插件（彻底释放资源）
     */
    dispose(): void;
    /**
     * 获取当前状态
     */
    getState(): {
        enabled: boolean;
        playing: boolean;
        currentChapter: DigitalChapter;
        currentScript: DigitalScript;
        continuousPlaying: boolean;
        playMode: "single" | "continuous";
    };
    /**
     * 获取可用章节列表
     */
    getChapters(): DigitalChapter[];
    /**
     * 获取数字人实例
     */
    getDigitalHuman(modelUrl: string, id?: string): DigitalHuman | null;
    /**
     * 获取当前播放进度信息
     */
    getProgress(): {
        currentTime: number;
        totalTime: number;
    } | null;
    /**
     * 对原始 res 数据进行 transformPosition 处理和章节分组，返回完整结构
     * @param res 原始数据
     * @param work 可选，存在时才做transformPosition
     * @param totalDelay 可选，默认0
     */
    transformScriptData(res: any, work?: any, totalDelay?: number): any;
    /**
     * 清理进度缓存
     */
    private clearProgressCache;
    /**
     * 计算单个章节的时长
     */
    private calculateChapterDuration;
    /**
     * 获取所有章节的总时长（毫秒）
     */
    getTotalDuration(): number;
    /**
     * 获取章节时间映射信息
     */
    getChapterTimeMap(): ChapterTimeInfo[];
    /**
     * 获取当前全局播放时间（毫秒）
     *
     * @deprecated 建议使用 getGlobalProgress().currentTime 获取更完整的信息
     * @returns 当前全局时间（毫秒）
     */
    getCurrentGlobalTime(): number;
    /**
     * 获取全局进度信息
     */
    getGlobalProgress(): GlobalProgress;
    /**
     * 根据全局时间获取对应的章节信息
     */
    getChapterByGlobalTime(globalTime: number): ChapterLocation | null;
    /**
     * 跳转到指定的全局时间
     */
    seekToGlobalTime(globalTime: number, autoPlay?: boolean): Promise<void>;
    /**
     * 初始化章节用于跳转（不自动播放）
     */
    private initializeChapterForSeek;
    /**
     * 跳转到指定百分比位置
     */
    seekToPercentage(percentage: number, autoPlay?: boolean): Promise<void>;
    /**
     * 跳转到指定章节的指定时间
     */
    seekToChapter(chapterIndex: number, chapterTime?: number, autoPlay?: boolean): Promise<void>;
    /**
     * 从指定全局时间开始播放所有剩余内容
     */
    playFromGlobalTime(globalTime: number): Promise<void>;
    /**
     * 注册进度变化监听器
     */
    onProgressChanged(callback: ProgressListener): () => void;
    /**
     * 移除进度监听器
     */
    offProgressChanged(callback: ProgressListener): void;
    /**
     * 设置进度回调频率（毫秒）
     */
    setProgressUpdateInterval(interval: number): void;
    /**
     * 启动进度更新定时器
     */
    private startProgressUpdateTimer;
    /**
     * 停止进度更新定时器
     */
    private stopProgressUpdateTimer;
    /**
     * 播放完整的所有章节（从头开始）
     */
    playAllChapters(): Promise<void>;
    /**
     * 获取播放范围信息
     */
    getPlaybackRange(): {
        startTime: number;
        endTime: number;
        estimatedDuration: number;
    };
    /**
     * 停止所有 player 的播放状态
     */
    private stopAllPlayers;
    private emit;
    /**
     * 注册监听当前正在播放的所有player变化
     */
    onPlayingPlayersChanged(callback: (players: any[]) => void): () => void;
    /**
     * 获取当前正在播放的所有player（数组）
     */
    private getCurrentPlayingPlayers;
    /**
     * 从指定章节获取正在播放的players
     */
    private getPlayingPlayersFromChapter;
    /**
     * 触发 playing-players-changed 事件
     */
    private emitPlayingPlayersChanged;
}
