import type { Five } from '@realsee/five';
import type { BaseOptions } from '../../base/BasePlugin';
import type { FloorplanServerData } from '../typings/floorplanServerData';
import type { FloorplanExtraObject3D } from '../typings/floorplanData';
import type { HighlightData } from '../typings';
import type { State, Config, EventMap, Parameters, PluginData, PluginServerData } from './typing';
import * as BasePlugin from '../../base/BasePluginWithData';
export declare class Controller extends BasePlugin.Controller<State, EventMap, PluginServerData, PluginData> {
    name: string;
    state: State;
    protected data?: PluginData;
    private app?;
    private wrapperSelector;
    private wrapper;
    private disposed;
    private extraObjects;
    private highlightData;
    constructor(five: Five, params?: Parameters);
    dispose: () => void;
    load(serverData: PluginServerData | FloorplanServerData, state?: Partial<State>, userAction?: boolean): Promise<void>;
    show(options?: BaseOptions): Promise<void>;
    hide(options?: BaseOptions): Promise<void>;
    enable(options?: BaseOptions): void;
    disable(options?: BaseOptions): void;
    highlight: (highlightData: HighlightData) => void;
    unhighlight: () => void;
    /** 更改插件 State */
    setState(state: Partial<State>, options?: BaseOptions): void;
    /** 把插件的渲染DOM插入到对应的容器中去 */
    appendTo(wrapper: Element): void;
    changeConfigs(config: Config, userAction?: boolean): void;
    setExtraObjectsWith3DPositions(data: FloorplanExtraObject3D[]): void;
    protected formatData(serverData: PluginServerData): Promise<PluginData>;
    private _enable;
    private _disable;
    private _show;
    private _hide;
    private updateState;
    private render;
}
