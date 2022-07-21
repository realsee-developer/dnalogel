import { Five, Subscribe } from '@realsee/five'

/**
 * 基本属性字段
 */
interface State {
  /**
   * 插件是否启用
   */
  enabled: boolean

  /**
   * 插件UI是否展示
   */
  visible?: boolean

  /**
   * 插件的配置项
   */
  config?: unknown
}

interface BaseOptions {
  /** 是否是用户行为 */
  userAction?: boolean
}

/**
 * 插件基本事件
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type EventMap<PluginState> = {
  /**
   * 插件被销毁
   */
  dispose: () => void

  /**
   * 插件状态变化
   * @param params.state      最新的State
   * @param params.prevState  上一个State
   * @param params.userAction 是否是用户触发
   */
  stateChange: (params: { state: PluginState; prevState?: PluginState; userAction: boolean }) => void
}

/**
 * plugin 的基本控制器
 */
abstract class Controller<PluginState extends State, PluginEventMap extends EventMap<PluginState>> {
  public five: Five
  /**
   * 插件事件钩子
   */
  public hooks: Subscribe<PluginEventMap> = new Subscribe()

  /**
   * 当前状态
   * @description
   * ```text
   * 可以通过 plugin.state 和 plugin.setState 来获取和设置。
   * 通过 state 设置后，plugin 会通过合适的动画运动来达到设置的效果。
   * 来迎合一些通过数据驱动的场景。
   * ```
   */
  public abstract state: PluginState

  public constructor(five: Five) {
    this.five = five
  }

  /**
   * 获取当前的插件状态，如果当初插件内存在需要通过动画变更的 state 值，则通过此方法可以得到中间状态
   */
  public getCurrentState() {
    return this.state
  }

  /**
   * 插件自身DOM添加到父容器
   * @param wrapper
   */
  public appendTo?(wrapper: Element): void

  /**
   * 展示UI
   */
  public show?(options?: BaseOptions): Promise<void>

  /**
   * 隐藏UI
   */
  public hide?(options?: BaseOptions): Promise<void>

  /**
   * 启用插件，让插件能够响应交互
   */
  public abstract enable(options?: BaseOptions): void

  /**
   * 禁用插件，让插件停止响应交互
   */
  public abstract disable(options?: BaseOptions): void

  /**
   * 插件进行销毁
   */
  public abstract dispose(): void

  /**
   * 设置state
   * @param state 插件的目标状态
   * @param options 配置项
   */
  public abstract setState(state: Partial<PluginState>, options?: BaseOptions): void
}

export type { State, EventMap, BaseOptions }
export { Controller }
