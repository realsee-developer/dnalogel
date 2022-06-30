import * as BasePlugin from './BasePlugin'

type State<PluginConfig> = BasePlugin.State<PluginConfig>

interface EventMap<PluginState, PluginData> extends BasePlugin.EventMap<PluginState> {
  dataChange: (data: PluginData, prevData?: PluginData) => void
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
  data?: Record<string, any>
}

abstract class Controller<
  PluginConfig,
  PluginState extends State<PluginConfig>,
  PluginEventMap extends EventMap<PluginState, PluginData>,
  PluginServerData extends ServerData,
  PluginData,
> extends BasePlugin.Controller<PluginConfig, PluginState, PluginEventMap> {
  protected abstract data?: PluginData

  /** 把原始数据转化为插件数据 */
  protected formatData?(serverData: PluginServerData): PluginData

  /**
   * 加载插件依赖数据
   * @param serverData 插件数据
   * @param state 插件 State
   */
  public abstract load(serverData: PluginServerData, state?: PluginState): Promise<void>
}

export type { State, EventMap }
export { Controller }
