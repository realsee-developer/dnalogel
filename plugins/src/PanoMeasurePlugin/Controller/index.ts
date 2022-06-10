import type BaseController from './BaseController'
import type { PluginData } from '../typings/data'
import type { PluginEvent } from '../typings/event.type'
import type { UserDistanceItem } from '../utils/distanceDom'
import Magnifier from '../Modules/Magnifier'
import FiveHelper from '../Modules/FiveHelper'
import EditController from './EditController'
import WatchController from './WatchController'
import { Group } from 'three'
import { Model } from '../Model'
import { Five, Subscribe } from '@realsee/five'
import { getMouseGroup } from '../utils/mouseGroup'
import { UIController } from '../Modules/UIController'
import { GuideController } from '../Modules/GuideController'
import { ShortcutKeyController } from './ShortcutKeyController'

export type Mode = 'Watch' | 'Edit'

// 参数
export interface MeasurePluginParameter {
  useUIController?: boolean
  useGuideController?: boolean
  // TODO: 这个参数传递的太恶心了，优化一下
  userDistanceItemCreator?: () => UserDistanceItem
}

export default class MeasureController {
  public hasOpen = false
  public hook = new Subscribe<PluginEvent>()

  private five: Five
  private model: Model
  private group: Group
  private magnifier: Magnifier
  private fiveHelper: FiveHelper
  private useUIController?: UIController
  private params: MeasurePluginParameter
  private useGuideController?: GuideController
  private container = document.createElement('div')
  private shortcutKeyController?: ShortcutKeyController
  private controller: WatchController | EditController | null = null
  private controllerParams: ConstructorParameters<typeof BaseController>[0]

  public constructor(five: Five, params: MeasurePluginParameter) {
    this.five = five
    this.params = params
    this.model = new Model({ userDistanceItemCreator: this.params.userDistanceItemCreator })
    this.fiveHelper = new FiveHelper(five)
    // magnifier
    const magnifierSize = 190
    const magnifierScale = 2
    this.magnifier = new Magnifier(five, { scale: magnifierScale, width: magnifierSize, height: magnifierSize })
    // ==================== Group ====================
    this.group = new Group()
    this.group.name = 'plugin-measure-group'
    this.container.classList.add('five-plugin-measure-container')
    this.container.style.position = 'relative'
    this.container.style.pointerEvents = 'none'
    this.container.style.width = '100%'
    this.container.style.height = '100%'
    this.container.style.opacity = '0'
    this.container.style.background = 'rgba(0, 0, 0, 0.15)'

    this.controllerParams = {
      five: this.five,
      hook: this.hook,
      group: this.group,
      model: this.model,
      magnifier: this.magnifier,
      container: this.container,
      fiveHelper: this.fiveHelper,
      mouseGroup: getMouseGroup(),
      userDistanceItemCreator: this.params.userDistanceItemCreator,
    }
    if (this.params.useUIController !== false) this.useUIController = new UIController(this, this.controllerParams)
    if (this.params.useUIController !== false)
      this.useGuideController = new GuideController(this, this.controllerParams)
  }

  public appendTo(parent: HTMLElement) {
    parent.append(this.container)
  }

  public dispose() {
    this.disable()
    this.useUIController?.dispose()
    this.magnifier?.dispose()
    this.five.needsRender = true
  }

  /** 加载数据
   * @description 数据加载时会覆盖当前已保存的数据
   * @description 如果当前正在编辑中，会自动退出并保存编辑
   */
  public load(data: PluginData) {
    this.model.parse(data)
    this.save()
  }

  /** 插件功能入口
   * @description 会隐藏鼠标的默认聚焦环
   * @description 会隐藏当前 VR 内的点位展示
   */
  public enable(): void {
    if (this.hasOpen) return
    this.hasOpen = true
    this.five.scene.add(this.group)
    // 修改透明度
    this.container.style.opacity = '1'
    // 隐藏点位和鼠标聚焦环
    this.five.helperVisible = false
    this.controller = new WatchController(this.controllerParams)
    this.useUIController?.show()
    this.useGuideController?.show()
    this.shortcutKeyController = new ShortcutKeyController(this, this.five)
    this.hook.emit('enable', true)
  }

  /** 关闭插件功能
   * @description 清除标尺线条
   * @description 还原点位展示和默认鼠标 UI
   */
  public disable(): void {
    this.hasOpen = false
    // 修改透明度
    this.container.style.opacity = '0'
    // 展示点位和鼠标聚焦环
    this.controller?.dispose()
    this.useUIController?.hide()
    this.useGuideController?.hide()
    this.shortcutKeyController?.dispose()
    this.controller = null
    this.five.helperVisible = true
    this.five.scene.remove(this.group)
    this.five.needsRender = true
    this.hook.emit('disable', true)
  }

  public getCurrentMode = (): Mode | null => {
    if (this.controller instanceof EditController) return 'Edit'
    if (this.controller instanceof WatchController) return 'Watch'
    return null
  }

  /** 变更场景
   * @description 如果从编辑场景改变到观看场景，不会自动保存，默认丢弃所有改动
   */
  public changeMode = (mode: Mode) => {
    if (!this.hasOpen) return
    if (this.getCurrentMode() === mode) return
    this.controller?.dispose()
    const controllerMap = {
      Watch: WatchController,
      Edit: EditController,
    }
    if (!controllerMap[mode]) throw new Error('不存在的 Mode')
    this.controller = new controllerMap[mode](this.controllerParams)
    this.hook.emit('modeChange', mode)
  }

  /** 撤销编辑 */
  public revoke(): void {
    if (!(this.controller instanceof EditController)) return
    this.controller.revoke()
    return
  }

  public removeLineByID(lineID: string) {
    this.model.removeLineByID(lineID)
  }

  /**
   * 高亮当前线段
   */
  public highlightLine(lineID: string) {
    if (this.getCurrentMode() !== 'Watch') return false
    const line = this.model.getLineByID(lineID)
    if (!line) return false
    ;(this.controller as WatchController).highlightLine(line)
    return true
  }

  public clearHighlightLines() {
    if (this.getCurrentMode() !== 'Watch') return false
    ;(this.controller as WatchController).clearHighlightLines()
    return true
  }

  /** 保存编辑 */
  public save() {
    if (!(this.controller instanceof EditController)) return this
    this.model.mergeModel(this.controller.model)
    return this
  }

  /** 把当前以保存的数据转换成 JSON 对象 */
  public toJson() {
    return this.model.toJson()
  }
}
