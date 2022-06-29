import * as BasePlugin from './BasePlugin'

type State = BasePlugin.State
type EventMap<PluginState extends State> = BasePlugin.EventMap<PluginState>

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
  data?: Record<string, any>
}

abstract class Controller<
  PluginState extends State,
  PluginEventMap extends EventMap<PluginState>,
  PluginServerData extends ServerData,
  PluginData,
> extends BasePlugin.Controller<PluginState, PluginEventMap> {
  protected abstract data?: PluginData

  /** 把原始数据转化为插件数据 */
  protected formatData?(serverData: PluginServerData): PluginData

  /**
   * 加载插件依赖数据
   * @param serverData 插件数据
   * @param state 插件 State
   */
  public abstract load(serverData: PluginServerData, state?: PluginState): void
}

export type { State, EventMap }
export { Controller }
