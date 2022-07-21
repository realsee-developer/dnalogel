import type { BaseOptions } from '../../base/BasePlugin'
import type { EventCallback, Five } from '@realsee/five'
import type { FloorplanServerData } from '../typings/floorplanServerData'
import type { State, Config, EventMap, Parameters, PluginData, PluginServerData } from './typing'

import * as THREE from 'three'
import equal from '../../shared-utils/equal'
import Main from '../Components/Main.svelte'
import formatData from '../utils/formatData'
import { CAMERA_IMAGE } from '../Assets/camera'
import { omit } from '../../shared-utils/filter'
import { FLOOR_PLAN_ATTACHED_TO } from '../constant'
import * as BasePlugin from '../../base/BasePluginWithData'
import changeMode from '../../shared-utils/five/changeMode'
import getPxmm, { getAttachedY } from '../../shared-utils/getPxmm'
import changeModelCanvasOpacity from '../../shared-utils/changeModelCanvasOpacity'

export class Controller extends BasePlugin.Controller<State, EventMap, PluginServerData, PluginData> {
  // =============== public properties =================
  public name = 'topviewFloorplanPlugin'
  public state: State
  // =============== private properties =================
  protected data?: PluginData
  private app?: Main = undefined
  private selector?: string | Element
  private panoIndex = 0
  private floorIndex = 0
  /** 户型图父容器 */
  private wrapper?: Element
  /** 户型图主容器 */
  private container = document.createElement('div')
  /** 展示户型图图前，Five 的 Panorama Longitude */
  private lastPanoramaLongitude = 0
  /** 户型图大小 */
  private size: { width: number; height: number } = { width: 0, height: 0 }
  /** 是否已经执行过事件监听 */
  private hasAddedEventListener = false
  /** 上一次隐藏是否是用户调用了 hide 导致的 */
  private isHiddenByHideFunc = false

  public constructor(five: Five, params?: Parameters) {
    super(five)

    if (params?.selector) {
      this.selector = params.selector
      console.warn('不推荐继续使用 params.selector 配置父容器，请使用 appendTo 方法')
    }
    // =============== init State ===============
    const baseConfig: Config = {
      northDesc: '北',
      modelOpacity: 1,
      hoverEnable: true,
      compassEnable: true,
      gestureEnable: false,
      autoShowEnable: true,
      ruleLabelsEnable: true,
      roomLabelsEnable: true,
      cameraImageUrl: CAMERA_IMAGE,
      attachedTo: FLOOR_PLAN_ATTACHED_TO.BOUNDING_CENTER,
      getLabelElement: undefined,
      adaptiveRoomLabelVisibleEnable: true,
    }
    const paramsConfig = params ? omit(params, ['selector', 'scale']) : {}
    const config: Config = { ...baseConfig, ...paramsConfig }
    this.state = {
      enabled: true,
      visible: false,
      config,
    }
    // =============== init Container ===============
    this.initContainer()
    // =============== init Listener ===============
    // 注意插件声明周期内只监听一次的事件不放在 addEventListener 里面
    // 如果初始化的时候模型已经加载完毕了，就不用再等 modelLoaded
    five.model.loaded ? this.onFiveModelLoaded() : five.once('modelLoaded', this.onFiveModelLoaded)
    five.once('dispose', this.dispose)
    this.addEventListener()
  }

  public async load(serverData: PluginServerData | FloorplanServerData, state?: Partial<State>, userAction = true) {
    function isPluginServerData(serverData: object): serverData is PluginServerData {
      return Object.prototype.hasOwnProperty.apply(serverData, ['version'])
    }
    const _data = serverData as any
    if (_data && !_data.version)
      console.warn('传入 serverData.data 的方式后续可能不再支持，请把 serverData 整体传入 load 函数')
    const copyData: PluginServerData | FloorplanServerData = JSON.parse(JSON.stringify(serverData))
    const _serverData = isPluginServerData(copyData) ? copyData.data : copyData
    const prevData = this.data
    this.data = await formatData(_serverData)

    this.hooks.emit('dataLoaded', this.data)
    this.hooks.emit('dataChange', this.data, prevData)

    if (state) this.updateState(state, userAction)

    this.render()
  }

  /** 更新户型图大小 */
  public updateSize = () => {
    if (!this.data) return
    if (!this.container || !this.wrapper) return
    if (this.five.getCurrentState().mode !== 'Topview') return
    // 计算户型图展示大小
    const { min, max } = this.data.bounding
    const width = max.x - min.x
    const height = max.y - min.y
    // 每毫米对应的 px 值
    const options = this.state.config.attachedTo ? { attachedTo: this.state.config.attachedTo } : undefined
    const pxmm = getPxmm(this.five, this.wrapper, this.floorIndex, options)
    const _width = Math.ceil(width * pxmm)
    const _height = Math.ceil(height * pxmm)

    if (this.size.width === _width && this.size.height === _height) return
    this.container.style.width = _width + 'px'
    this.container.style.height = _height + 'px'
    this.size = { width: _width, height: _height }
  }

  /** 更新户型图位置 */
  public updatePosition() {
    const y = getAttachedY(this.five, this.floorIndex, this.state.config.attachedTo)
    const modelPosition = this.five.model?.bounding.getCenter(new THREE.Vector3()).setY(y)
    if (!modelPosition) return
    const ndcPosition = modelPosition.clone().project(this.five.camera)
    const left = (ndcPosition.x + 1) / 2
    const top = -(ndcPosition.y - 1) / 2
    this.container.style.left = left * 100 + '%'
    this.container.style.top = top * 100 + '%'
  }

  /** 把插件的渲染DOM插入到对应的容器中去 */
  public appendTo(wrapper: Element) {
    this.wrapper = wrapper

    // 插件 disabled 时，只是不执行副作用，但是 wrapper 还是要赋值的，不然 enable 的时候找不到父容器
    if (!this.state.enabled) return

    wrapper.appendChild(this.container)
    this.render()
    return this
  }

  public async show(options: BaseOptions = {}) {
    // 已经展示完成了，不做任何操作
    if (this.state.visible) return
    const userAction = options.userAction !== undefined ? options.userAction : true
    this.updateState({ visible: true }, userAction)
    this._show({ userAction })
  }

  public async hide(options: BaseOptions = {}) {
    this.isHiddenByHideFunc = true
    if (!this.state.visible) return
    const userAction = options.userAction !== undefined ? options.userAction : true
    this.updateState({ visible: false }, userAction)
    this._hide({ userAction })
  }

  public enable(options: BaseOptions = {}) {
    if (this.state.enabled) return

    const userAction = options.userAction !== undefined ? options.userAction : true
    this.updateState({ enabled: true }, options.userAction || userAction)
    this._enable({ userAction })
  }

  public disable(options: BaseOptions = {}) {
    if (!this.state.enabled) return

    const userAction = options.userAction !== undefined ? options.userAction : true
    this.updateState({ enabled: false }, options.userAction || userAction)
    this._disable({ userAction })
  }

  /** 销毁插件 */
  public dispose = () => {
    this.removeEventListener()
    this.app?.$destroy()
    this.app = undefined
    this.container?.remove()
    this.data = undefined
    this.wrapper = undefined
    this.selector = undefined
    this.hooks.emit('dispose')
  }

  /** 更改插件 State */
  public setState(state: Partial<State>, options: BaseOptions = {}) {
    const prevState = this.state
    const userAction = options.userAction !== undefined ? options.userAction : true
    this.updateState(state, userAction)

    if (state.enabled !== undefined && prevState.enabled !== state.enabled) {
      const options = { userAction }
      state.enabled ? this._enable(options) : this._disable(options)
    }

    if (state.visible !== undefined && prevState.visible !== state.visible) {
      const options = { userAction }
      state.visible ? this._show(options) : this._hide(options)
    }
  }

  protected async formatData(serverData: PluginServerData) {
    return await formatData(serverData.data)
  }

  private async _show(options: { userAction: boolean }) {
    if (!this.state.enabled) return
    this.isHiddenByHideFunc = false
    const { userAction } = options
    this.hooks.emit('show', { userAction })
    if (this.five.getCurrentState().mode !== 'Topview') {
      await changeMode(this.five, ['Topview', undefined, undefined, userAction])
    }
    this.five.model.show(this.floorIndex)
    this.updatePosition()
    this.updateSize()
    const renderDuration = 500
    const modelOpacity = this.state.config.modelOpacity
    changeModelCanvasOpacity(this.five, modelOpacity, renderDuration)
    this.hooks.emit('showAnimationEnded', { userAction })
    this.render()
  }

  private async _hide(options: { userAction: boolean }) {
    if (!this.state.enabled) return
    const { userAction } = options
    this.hooks.emit('hide', { userAction })
    const modelOpacity = 1
    const renderDuration = 0
    changeModelCanvasOpacity(this.five, modelOpacity, renderDuration)
    this.render()
  }

  private _enable(options: { userAction: boolean }) {
    const { userAction } = options
    this.addEventListener()
    if (this.wrapper) this.wrapper.append(this.container)
    this.hooks.emit('enable', { userAction })
    if (this.state.visible) this._show({ userAction })
  }

  private _disable = (options: { userAction: boolean }) => {
    const { userAction } = options
    this.app?.$destroy()
    this.app = undefined
    this.container?.remove()
    this.removeEventListener()
    this.hooks.emit('disable', { userAction })
  }

  private updateState(state: Partial<State>, userAction: boolean) {
    const prevState = this.state
    this.state = { ...this.state, ...state }
    if (equal(this.state, prevState, { deep: true })) return
    this.hooks.emit('stateChange', { state: this.state, prevState, userAction })
  }

  private addEventListener() {
    if (!this.state.enabled) return
    if (this.hasAddedEventListener) return
    const five = this.five

    five.on('modeChange', this.onFiveModeChange)
    five.on('panoArrived', this.onFivePanoArrived)
    five.on('cameraUpdate', this.onFiveCameraUpdate)
    five.on('wantsGesture', this.onFiveWantsGesture)
    five.on('wantsMoveToPano', this.onFiveWantsMoveToPano)
    five.on('initAnimationEnded', this.onFiveInitAnimationEnded)
    five.on('modelShownFloorChange', this.onModelShownFloorChange)
  }

  private removeEventListener() {
    const five = this.five
    this.hasAddedEventListener = false
    // 注意这里并没有消除 dispose 的监听
    five.off('modeChange', this.onFiveModeChange)
    five.off('panoArrived', this.onFivePanoArrived)
    five.off('cameraUpdate', this.onFiveCameraUpdate)
    five.off('wantsGesture', this.onFiveWantsGesture)
    five.off('wantsMoveToPano', this.onFiveWantsMoveToPano)
    five.off('initAnimationEnded', this.onFiveInitAnimationEnded)
    five.off('modelShownFloorChange', this.onModelShownFloorChange)
  }

  /** modelLoaded 之后自动执行 append container 操作  */
  private onFiveModelLoaded = () => {
    if (this.state.enabled === false) return
    if (this.wrapper) return
    if (!this.selector) return
    const wrapper = this.selector instanceof Element ? this.selector : document.querySelector(this.selector)
    if (!wrapper) throw new Error('不正确的父容器选择器')

    this.wrapper = wrapper
    wrapper.append(this.container)
  }

  /** 非 Topview 态隐藏户型图 */
  private onFiveModeChange: EventCallback['modeChange'] = (...[mode, , , , userAction]) => {
    if (mode !== 'Topview' && this.state.visible) {
      this.updateState({ visible: false }, userAction)
      this._hide({ userAction })
    }
  }

  private onFivePanoArrived: EventCallback['panoArrived'] = (index) => {
    if (!this.five?.work) return
    this.panoIndex = index
    this.floorIndex = this.five.work.observers[index].floorIndex
  }

  private onFiveCameraUpdate: EventCallback['cameraUpdate'] = (_, userAction) => {
    if (!this.state.visible) return
    this.updatePosition()
    this.updateSize()
  }

  private onFiveWantsGesture: EventCallback['wantsGesture'] = (type) => {
    if (type !== 'pan' && type !== 'pinch' && type !== 'mouseWheel') return
    if (this.state.visible && !this.state.config.gestureEnable) return false
  }

  private onFiveWantsMoveToPano: EventCallback['wantsMoveToPano'] = () => {
    if (this.state.visible && this.state.config.preventRoomClick) return false
  }

  /** 动画结束后是 Topview 态就展示户型图 */
  private onFiveInitAnimationEnded: EventCallback['initAnimationEnded'] = (...[, , userAction]) => {
    const { mode } = this.five.getCurrentState()
    if (mode === 'Topview' && !this.isHiddenByHideFunc && !this.state.visible && this.state.config.autoShowEnable) {
      this.updateState({ visible: true }, userAction)
      this._show({ userAction })
    }
  }

  private onModelShownFloorChange = (shownFloor: number | null) => {
    if (this.floorIndex === shownFloor) return
    if (shownFloor === null) {
      const panoIndex = this.five.getCurrentState().panoIndex
      this.floorIndex = this.five.work.observers[panoIndex].floorIndex
      return
    }
    // 模型楼层高亮改变时，自动进行楼层切换
    this.floorIndex = shownFloor
    this.updateSize()
    this.render()
  }

  /** 如果用户是通过 selector 设置父容器，需要在 modelLoaded 之后把 container 自动放到父容器里
   *
   * - TODO: 等 selector 功能下掉之后删除这个逻辑
   */
  private initContainer() {
    this.container.classList.add('floorplan-plugin')
    Object.assign(this.container.style, {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate3d(-50%, -50%, 10px)',
      zIndex: 10,
      pointerEvents: 'none',
      'will-change': 'width, height',
    })
    this.five.addExtraElement(this.container)
  }

  private render(duration?: number) {
    if (!this.state.enabled) return
    if (!this.container || !this.data) return
    if (this.size.width === 0) return

    const props = {
      ...this.state.config,
      visible: this.state.visible,
      duration: duration ?? 0,
      panoIndex: this.panoIndex,
      floorIndex: this.floorIndex,
      floorplanData: this.data,
      lastPanoramaLongitude: this.lastPanoramaLongitude,
    }

    if (this.app) return this.app.$set(props)

    this.app = new Main({ target: this.container, intro: true, props })
  }
}
