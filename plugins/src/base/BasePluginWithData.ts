import * as BasePlugin from './BasePlugin'

type State = BasePlugin.State

interface EventMap<PluginState, PluginData> extends BasePlugin.EventMap<PluginState> {
  /** 数据变更 */
  dataChange: (data: PluginData, prevData?: PluginData) => void
  /** 数据加载完成 */
  dataLoaded: (data: PluginData) => void
}

/**
 * 插件的基础数据
 */
interface ServerData {
  /**
   * 数据版本
   */
  version: number
  /**
   * 数据
   */
  data?: unknown
}

abstract class Controller<
  PluginState extends State,
  PluginEventMap extends EventMap<PluginState, PluginData>,
  PluginServerData extends ServerData,
  PluginData,
> extends BasePlugin.Controller<PluginState, PluginEventMap> {
  protected abstract data?: PluginData

  /**
   * 加载插件依赖数据
   * @param serverData 插件数据
   * @param state 插件 State
   */
  public abstract load(serverData: PluginServerData, state?: PluginState, userAction?: boolean): Promise<void>

  /** 把原始数据转化为插件数据 */
  protected abstract formatData?(serverData: PluginServerData): Promise<PluginData>
}

export type { State, EventMap, ServerData }
export { Controller }
