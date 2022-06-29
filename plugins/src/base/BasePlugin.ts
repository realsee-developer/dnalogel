import { Subscribe } from '@realsee/five'
import type { SubscribeEventMap } from '@realsee/five'

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
}

/**
 * 插件基本事件
 */
interface EventMap<T extends State> extends SubscribeEventMap {
  /**
   * 插件状态变化
   * @param nextState 最新的状态
   * @param prevState 前一个状态
   */
  stateChange: (nextState: T, prevState?: T) => void
}

/**
 * plugin 的基本控制器
 */
abstract class Controller<PluginState extends State, PluginEventMap extends EventMap<PluginState>> {
  /**
   * 插件事件钩子
   */
  public hooks = new Subscribe<PluginEventMap>()

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

  /**
   * 获取当前的插件状态，如果当初插件内存在需要通过动画变更的 state 值，则通过此方法可以得到中间状态
   */
  public getCurrentState() {
    return this.state
  }

  /**
   * 展示UI
   */
  public show?(): void

  /**
   * 隐藏UI
   */
  public hide?(): void

  /**
   * 插件自身DOM添加到父容器
   * @param wrapper
   */
  public appendTo?(wrapper: Element): void

  /**
   * 启用插件，让插件能够响应交互
   */
  public abstract enable(): void

  /**
   * 禁用插件，让插件停止响应交互
   */
  public abstract disable(): void

  /**
   * 插件进行销毁
   */
  public abstract dispose(): void

  /**
   * 设置state
   * @param state 插件的目标状态
   */
  public abstract setState(state: PluginState): void
}

export type { State, EventMap }
export { Controller }
