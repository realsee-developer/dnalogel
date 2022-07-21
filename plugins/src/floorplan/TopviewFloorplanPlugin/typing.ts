import type { FLOOR_PLAN_ATTACHED_TO } from '../constant'
import type * as BasePlugin from '../../base/BasePluginWithData'
import type { FloorplanServerData } from '../typings/floorplanServerData'
import type { FloorplanData, FloorplanRoomItem } from '../typings/floorplanData'

export interface Config {
  /** 指北针的显示文案，默认为 '北' */
  northDesc: string
  /** 户型图展示时，模型的透明度，默认为 1 */
  modelOpacity: number
  /** 鼠标放置在分间上时，是否要自动高亮分间，默认为 true */
  hoverEnable: boolean
  /** 是否开启放大缩小和拖动功能，默认为 false */
  gestureEnable: boolean
  /** 是否要启用指北针功能，默认为 true */
  compassEnable: boolean
  /** Five 切换到 Topview Mode 时，是否自动展示户型图，默认为 true */
  autoShowEnable: boolean
  /** 是否要启用户型图分间标尺功能，默认为 true */
  ruleLabelsEnable: boolean
  /** 是否要启用户型图分间标签功能，默认为 true */
  roomLabelsEnable: boolean
  /** 自定义「雷达」图标 */
  cameraImageUrl: string
  /** 点击房间时，是否需要跳转到被点房间的全景态点位上，默认为 true */
  preventRoomClick?: boolean
  /** 计算户型图大小时，以模型的哪个高度为依据，默认为 BOUNDING_CENTER
   * - FLOOR_PLAN_ATTACHED_TO.FLOOR: 户型图大小与模型的地板进行贴合
   * - FLOOR_PLAN_ATTACHED_TO.CEILING: 户型图大小与模型的天花板进行贴合
   * - FLOOR_PLAN_ATTACHED_TO.BOUNDING_CENTER: 户型图大小与模型的中心进行贴合
   */
  attachedTo: FLOOR_PLAN_ATTACHED_TO
  /** 分间标签的自定义函数，通过返回自定义 DOM 替换对应分间的标签 */
  getLabelElement: undefined | ((room: FloorplanRoomItem) => Element | null)
  /** 是否支持房屋标签自适应展示，默认为 true
   * @description
   * * 标签边框超过房间边框时，自动隐藏；不超过时自动展示。
   * * 鼠标 hover 时，自动展示。
   * */
  adaptiveRoomLabelVisibleEnable: boolean
}

export interface State extends BasePlugin.State {
  visible: boolean
  config: Config
}

export interface EventMap extends BasePlugin.EventMap<State, FloorplanData> {
  /** 展示结束的回调
   * @param event.userAction 是否是用户操作
   */
  showAnimationEnded: (event: { userAction: boolean }) => void

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
  selector?: string | Element
  scale?: number
}

export interface PluginServerData extends BasePlugin.ServerData {
  version: number
  data: FloorplanServerData
}

export { FloorplanData as PluginData }
