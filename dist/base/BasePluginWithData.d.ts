import * as BasePlugin from './BasePlugin';
type State = BasePlugin.State;
type Config = BasePlugin.Config;
interface EventMap<PluginState, PluginData> extends BasePlugin.EventMap<PluginState> {
    /** 数据变更 */
    dataChange: (data: PluginData, prevData?: PluginData) => void;
    /** 数据加载完成 */
    dataLoaded: (data: PluginData) => void;
}
declare abstract class Controller<PluginState extends State, PluginEventMap extends EventMap<PluginState, PluginData>, PluginServerData, PluginData> extends BasePlugin.Controller<PluginState, PluginEventMap> {
    protected abstract data?: PluginData;
    /**
     * 加载插件依赖数据
     * @param serverData 插件数据
     * @param state 插件 State
     */
    abstract load(serverData: PluginServerData, state?: PluginState, userAction?: boolean): Promise<void>;
}
export type { State, EventMap, Config };
export type { BaseOptions } from './BasePlugin';
export { Controller };
