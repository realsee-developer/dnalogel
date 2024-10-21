import type { Five, State } from '@realsee/five';
import type { PluginState, PluginServerData, PluginData, CruiseKeyframe, MoveEffect, Config } from './typing';
import CruiseController from './BaseController';
export default class WalkController extends CruiseController<PluginData, Config> {
    state: PluginState;
    protected privateState: {
        /**
         * privateState.playing 和 state.playing 的区别：
         * state.playing 先为true，然后才 handleplay，handleplay方法内会检查privateState.playing，如果已经开始（privateState.playing === true），就不执行操作，如果为false，就执行操作
         * 其实就是加了一个不允许重复执行handleplay的逻辑
         */
        playing: boolean;
        currentPlayKeyframe: {
            keyframe: CruiseKeyframe;
            originDuration?: number;
        } | null;
        currentPlayQueue: Promise<any>[];
        broke: boolean;
        playId?: string;
        moveToFirstPanoEffect?: MoveEffect;
        moveToFirstPanoDuration?: number;
        modeChanging?: boolean;
    };
    constructor(five: Five, config?: Config);
    /**
     * @description Load Data and State
     */
    load(serverData: PluginServerData | PluginServerData['data'], state?: PluginState, userAction?: boolean): Promise<void>;
    /**
     * @description If playing, first pause, then play from keyframes index/id
     * @param {number} options.index play from keyframes index
     * @param {string} options.id play from keyframes id
     */
    playFrom(options: {
        userAction?: boolean;
        index?: number;
        id?: string;
    }): void;
    /**
     * @description Play from first keyframe
     */
    playFromStart(options?: {
        userAction?: boolean;
    }): void;
    /**
     * @description Format data
     */
    protected formatData(serverData: PluginServerData | PluginServerData['data']): Promise<PluginData>;
    /**
     * @description Play | Continue play. if have been paused, continue play from the pause position; if playing, do nothing
     * @param {number} options.playFromIndex play from keyframes index
     * @param {string} options.playFromId play from keyframes id
     */
    protected handlePlay(options?: {
        userAction?: boolean;
        playFromIndex?: number;
        playFromId?: string;
        notEmitEvent?: true;
    }): Promise<string>;
    /**
     * @description: Pause and record pause state
     */
    protected handlePause(options?: {
        userAction?: boolean;
        notEmitEvent?: true;
    }): void;
    /**
     * @description: Change play speed
     */
    protected changeSpeed(speed: number, userAction?: boolean): void;
    /**
     * @description Get ratate progress
     */
    protected getProgress(): any;
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
    /**
     * @description Play single keyframe
     */
    private playKeyframe;
    /**
     * @description: getPlayPromise
     */
    private getPlayPromise;
    /**
     * @description Action promise queue in sequence
     */
    private actionPromiseQueue;
    /**
     * @description Action move keyframe
     */
    private move;
    /**
     * @description Action rotate keyframe
     */
    private rotate;
    /**
     * @description Update five camera
     */
    private updateCamera;
    /**
     * @description: Change five pano
     */
    private changePano;
    /**
     * @description Change five mode
     */
    private changeMode;
}
