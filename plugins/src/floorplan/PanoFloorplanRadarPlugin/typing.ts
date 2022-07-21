import type * as BasePlugin from '../../base/BasePluginWithData'
import type { FloorplanData } from '../typings/floorplanData'
import type { FloorplanServerData } from '../typings/floorplanServerData'

export interface Config {
  /** 鼠标放置在分间上时，是否要自动高亮分间 */
  hoverEnable: boolean
  /** 自定义「雷达」图标 */
  cameraImageUrl: string
}

export interface State extends BasePlugin.State {
  visible: boolean
  config: Config
}

export interface EventMap extends BasePlugin.EventMap<State, FloorplanData> {
  /** visible 从 false 到 true 的回调
   * @param event.userAction 是否是用户操作
   */
  show: (event: { userAction: boolean }) => void

  /** visible 从 true 到 false 的回调
   * @param event.userAction 是否是用户操作
   */
  hide: (event: { userAction: boolean }) => void

  /** enabled 从 false 到 true 的回调
   * @param event.userAction 是否是用户操作
   */
  enable: (event: { userAction: boolean }) => void

  /** enabled 从 true 到 false 的回调
   * @param event.userAction 是否是用户操作
   */
  disable: (event: { userAction: boolean }) => void
}

/** 插件初始化参数 */
export interface Parameters extends Partial<Config> {
  wrapper?: string | Element
  configs?: {
    hoverEnable?: boolean
    cameraImageUrl?: string
  }
}

export interface PluginServerData extends BasePlugin.ServerData {
  version: number
  data: FloorplanServerData
}

export { FloorplanData as PluginData }
