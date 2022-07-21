import type { FLOOR_PLAN_ATTACHED_TO } from '../constant'
import type * as BasePlugin from '../../base/BasePluginWithData'
import type { FloorplanServerData } from '../typings/floorplanServerData'
import type { FloorplanData, FloorplanRoomItem } from '../typings/floorplanData'

export interface State extends BasePlugin.State {
  visible: boolean
  config: Config
}

export interface Config {
  /** 指北针的显示文案，默认为 '北' */
  northDesc: string
  /** 户型图展示时，模型的透明度，默认为 1 */
  modelOpacity: number
  /** 鼠标放置在分间上时，是否要自动高亮分间，默认为 true */
  hoverEnable: boolean
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

export interface Parameters extends Partial<Config> {
  selector?: string | Element
  scale?: number
}

export interface ViewEvent {
  /** 是否是用户滑动模型导致的户型图自动展示/消失 */
  auto: boolean
  /** 是否是用户操作 */
  userAction: boolean
}

export interface EventMap extends BasePlugin.EventMap<State, FloorplanData> {
  /**
   * 展示结束的回调
   * @param event.auto 是否是自动操作
   * @param event.userAction 是否是用户操作
   */
  showAnimationEnded: (event: ViewEvent) => void

  /** visible 从 false 到 true 的回调
   * @param event.userAction 是否是用户操作
   */
  show: (event: ViewEvent) => void

  /** visible 从 true 到 false 的回调
   * @param event.auto 是否是自动操作
   * @param event.userAction 是否是用户操作
   */
  hide: (event: ViewEvent) => void

  /** enabled 从 false 到 true 的回调
   * @param event.userAction 是否是用户操作
   */
  enable: (event: { userAction: boolean }) => void

  /** enabled 从 true 到 false 的回调
   * @param event.userAction 是否是用户操作
   */
  disable: (event: { userAction: boolean }) => void

  /**
   * 点击户型图的回调
   * @return 当返回 false 时，会阻止默认行为
   */
  click: () => boolean | void
}

export interface PluginServerData extends BasePlugin.ServerData {
  version: number
  data: FloorplanServerData
}

export interface ShowOptions {
  /** 展示户型图时，希望到达的楼层数 */
  floorIndex: number
  /** 是否自动展示 */
  isAutoShow: boolean
  /** 展示户型图时，模型透明度 */
  modelOpacity: number
  /** 是否需要 opacity 动画 */
  immediately: boolean
  /** 是否是用户操作 */
  userAction: boolean
}

export interface HideOptions {
  /** 是否自动隐藏 */
  isAutoHide: boolean
  /** 是否是用户操作 */
  userAction: boolean
}

export { FloorplanData as PluginData }
