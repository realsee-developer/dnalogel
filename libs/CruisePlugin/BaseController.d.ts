import type { Five, State } from '@realsee/five';
import type { BaseOptions } from '../base/BasePlugin';
import type { GuideLinePluginExportType } from '../GuideLinePlugin';
import * as BasePlugin from '../base/BasePlugin';
import type { PluginState, EventMap, MoveEffect } from './typing';
import type { PartialDeep } from 'type-fest';
export declare const pluginFlag: (name: string) => string;
export default abstract class CruiseController<PluginData, Config = unknown> extends BasePlugin.Controller<PluginState, EventMap> {
    state: PluginState;
    protected data?: PluginData & {
        id: string | number;
    };
    protected config?: Config;
    protected pauseDataMap: Map<string | number, {
        fiveState: Partial<State>;
        id?: string | number;
        playedProgress: number;
        duration?: number;
    }>;
    protected privateState: {
        /**
         * privateState.playing 和 state.playing 的区别：
         * state.playing 先为true，然后才 handleplay，handleplay方法内会检查privateState.playing，如果已经开始（privateState.playing === true），就不执行操作，如果为false，就执行操作
         * 其实就是加了一个不允许重复执行handleplay的逻辑
         */
        playing: boolean;
        broke: boolean;
        playId?: string;
        moveToFirstPanoEffect?: MoveEffect;
        moveToFirstPanoDuration?: number;
        modeChanging?: boolean;
    };
    protected GuideLine?: GuideLinePluginExportType;
    constructor(five: Five, config?: Config);
    /**
     * @description Play | Continue play. if have been paused, continue play from the pause position; if playing, do nothing
     */
    play(options?: {
        userAction?: boolean;
    }): void;
    /**
     * @description Pause
     */
    pause(options?: {
        userAction?: boolean;
    }): void;
    /**
     * @description Show guide line
     */
    show(options?: {
        userAction?: boolean;
    }): Promise<void>;
    /**
     * @description Hide guide line
     */
    hide(options?: {
        userAction?: boolean;
    }): Promise<void>;
    /**
     * @description Enable
     */
    enable(options?: {
        userAction?: boolean;
    }): void;
    /**
     * @description Disable
     */
    disable(options?: {
        userAction?: boolean;
    }): void;
    /**
     * @description Dispose
     */
    dispose(): void;
    /**
     * @description Set state
     */
    setState(state: PartialDeep<PluginState>, options?: BaseOptions & Record<string, any>): void;
    /**
     * @description Clear pause data
     */
    protected clearPauseData(): boolean;
    protected changePlayState(play: boolean, options?: {
        userAction?: boolean;
        playFromIndex?: number;
        playFromId?: string;
    }): void;
    protected handleEnable(enabled: boolean, userAction?: boolean): void;
    protected handleVisible(visible: boolean, userAction?: boolean): void;
    /**
     * @description: listen interupted by five gesture
     */
    protected addInterruptListener(interrupt: () => void): () => void;
    /**
     * @description Get duration by speed
     */
    protected getSpeededDuration(duration: number): number;
    /**
     * @description Force interupt five updateCamera
     */
    protected forceInteruptUpdateCamera(): void;
    protected getPauseData(): {
        fiveState: Partial<State>;
        id?: string | number;
        playedProgress: number;
        duration?: number;
    };
    /**
     * @description Set pause data
     */
    protected setPauseData(): Map<string | number, {
        fiveState: Partial<State>;
        id?: string | number;
        playedProgress: number;
        duration?: number;
    }>;
    /**
     * @description: Restore state that before loaded
     */
    protected clear(): void;
    protected handleDispose(): void;
    /**
     * @description Action function if plugin is enable
     */
    protected actionIfStateIsEnabled<T = any>(func: () => T, options?: {
        warnLog?: true;
    }): T;
    protected disposedErrorLog: () => void;
    protected disableWarnLog: () => void;
    protected disableErrorLog: () => void;
    /**
     * @description Load Data and State
     */
    abstract load(serverData: unknown, state?: PluginState, userAction?: boolean): Promise<void>;
    /**
     * @description Play from first keyframe
     */
    abstract playFromStart(): void;
    /**
     * @description Play | Continue play. if have been paused, continue play from the pause position; if playing, do nothing
     * @param {number} options.playFromIndex play from keyframes index
     * @param {string} options.playFromId play from keyframes id
     */
    protected abstract handlePlay(options?: {
        userAction?: boolean;
        playFromIndex?: number;
        playFromId?: string;
        notEmitEvent?: true;
    }): Promise<string>;
    /**
     * @description: Change play speed
     */
    protected abstract changeSpeed(speed: number): void;
    /**
     * @description Get ratate progress
     */
    protected abstract getProgress(): number;
    /**
     * @description: Pause and record pause state
     */
    protected abstract handlePause(options?: {
        userAction?: boolean;
        notEmitEvent?: true;
    }): void;
}
