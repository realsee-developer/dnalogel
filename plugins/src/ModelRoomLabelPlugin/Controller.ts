import type { Five, Mode } from '@realsee/five'
import RoomLabelItems from './RoomLabelItems.svelte'
import { parseModelRoomLabelPluginData } from './utils/parseData'
import type { ModelRoomLabelPluginData, RoomLabel } from './typings'

export type ModelRoomLabelPluginParameters = undefined

export class ModelRoomLabelController {
  private five: Five
  private enabled = true
  private fiveModeEnabled: boolean
  private app?: RoomLabelItems = undefined
  private wrapper?: Element
  private roomLabels: RoomLabel[] = []
  private container = document.createElement('div')

  public constructor(five: Five) {
    this.five = five
    this.fiveModeEnabled = this.five.currentMode === 'Floorplan'
    // init container style
    this.container.classList.add('model-room-label-plugin-container')
    this.container.style.width = '100%'
    this.container.style.height = '100%'
    this.container.style.position = 'absolute'
    this.container.style.pointerEvents = 'none'
    this.container.style.left = '0'
    this.container.style.top = '0'
    this.container.style.zIndex = '5'
    // five listener
    this.five.once('dispose', () => this.dispose())
    this.five.on('modeChange', this.onFiveModeChange)
    this.render()
  }

  public dispose() {
    this.five.off('modeChange', this.onFiveModeChange)
    // ReactDOM.unmountComponentAtNode(this.container)
    this.container.remove()
  }

  /** 加载数据 */
  public load(data: ModelRoomLabelPluginData) {
    this.roomLabels = parseModelRoomLabelPluginData(data)
    this.render()
  }

  /** 设置插件容器 */
  public appendTo(wrapper: Element): this {
    this.wrapper = wrapper
    wrapper.appendChild(this.container)
    this.render()
    return this
  }

  /** 禁用插件功能
   * @description
   * - 如果当前正在展示中，会清除所有展示的 DOM
   * - 如果当前未展示，即使后续 Five 状态满足展示要求，也不会展示
   * */
  public disable(): this {
    this.enabled = false
    this.render()
    return this
  }

  /** 启用插件功能
   * @description
   * - 如果当前符合展示条件，会立刻展示
   * - 如果不符合展示条件，会等待 Five 状态满足条件后再展示
   */
  public enable(): this {
    this.enabled = true
    this.render()
    return this
  }

  /** 监听 Five Mode 变化
   * @description
   * Mode 不符合要求时，立刻消失，满足要求时，需要等待动画结束再展示
   */
  private onFiveModeChange = (mode: Mode) => {
    if (mode !== 'Floorplan') {
      this.fiveModeEnabled = false
      this.render()
      return
    }
    this.five.once('initAnimationEnded', () => {
      this.fiveModeEnabled = this.five.currentMode === 'Floorplan'
      this.render()
    })
  }

  private render() {
    if (!this.wrapper) return
    if (!this.enabled || !this.fiveModeEnabled) {
      this.app?.$destroy()
      this.app = undefined
      return
    }
    if (!this.app) {
      this.app = new RoomLabelItems({
        target: this.container,
        props: {
          five: this.five,
          roomLabels: this.roomLabels,
        },
      })
    } else {
      this.app.$set({ five: this.five, roomLabels: this.roomLabels })
    }
  }
}
