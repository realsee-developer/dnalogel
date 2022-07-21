import type { Five } from '@realsee/five'
import type { BaseOptions } from '../../base/BasePlugin'
import type { FloorplanServerData } from '../typings/floorplanServerData'
import type { FloorplanExtraObject3D, FloorplanExtraObject } from '../typings/floorplanData'
import type { State, Config, EventMap, Parameters, PluginData, PluginServerData } from './typing'

import Main from './Components/Main.svelte'
import equal from '../../shared-utils/equal'
import { CAMERA_IMAGE } from '../Assets/camera'
import * as BasePlugin from '../../base/BasePluginWithData'
import formatData, { formatExtraObjects } from '../utils/formatData'

export class Controller extends BasePlugin.Controller<State, EventMap, PluginServerData, PluginData> {
  // =============== public properties =================
  public name = 'panoFloorplanRadarPlugin'
  public state: State
  // =============== protected properties =================
  protected data?: PluginData
  // =============== private properties =================
  private app?: Main
  private wrapperSelector = ''
  private wrapper: Element | null = null
  private disposed = false
  private extraObjects: FloorplanExtraObject[] = []

  public constructor(five: Five, params?: Parameters) {
    super(five)
    this.five = five
    // =============== init State ===============
    const baseConfig: Config = {
      hoverEnable: false,
      cameraImageUrl: CAMERA_IMAGE,
    }
    const paramsConfig = params?.configs ? params.configs : {}
    const config: Config = { ...baseConfig, ...paramsConfig }
    this.state = { enabled: true, visible: true, config }
    // =============== init wrapper ===============
    if (params?.wrapper) console.warn('不推荐继续使用 params.selector 配置父容器，请使用 appendTo 方法')
    if (typeof params?.wrapper === 'string') this.wrapperSelector = params.wrapper
    else if (params?.wrapper instanceof Element) this.wrapper = params.wrapper
    // =============== init Listener ===============
    five.once('dispose', this.dispose)
  }

  public dispose = () => {
    this.disposed = true
    this.app?.$destroy()
    this.wrapper = null
    this.wrapperSelector = ''
    this.hooks.emit('dispose')
  }

  public async load(serverData: PluginServerData | FloorplanServerData, state?: Partial<State>, userAction = true) {
    // const loadImage = async () => {
    //   const floorIndex = this.five.work.observers[this.five.getCurrentState().panoIndex].floorIndex
    //   // 当有 svgString 时，没有加载过程
    //   if (floorplanData.outlines[floorIndex]?.svgContent) return
    //   // 如果当前楼层图片不存在，不存在加载过程
    //   const nowFloorImageSrc = floorplanData.outlines[floorIndex]?.url
    //   if (!nowFloorImageSrc) return
    //   // 图片加载完成时再 render
    //   await new Promise<void>((resolve) => {
    //     const nowFloorImage = new Image()
    //     nowFloorImage.src = nowFloorImageSrc
    //     nowFloorImage.onload = () => resolve()
    //   })
    // }
    // await loadImage()
    function isPluginServerData(serverData: object): serverData is PluginServerData {
      return Object.prototype.hasOwnProperty.apply(serverData, ['version'])
    }
    const copyData: PluginServerData | FloorplanServerData = JSON.parse(JSON.stringify(serverData))
    const _serverData = isPluginServerData(copyData) ? copyData.data : copyData
    const prevData = this.data
    this.data = await formatData(_serverData)

    this.hooks.emit('dataLoaded', this.data)
    this.hooks.emit('dataChange', this.data, prevData)

    if (state) this.updateState(state, userAction)

    this.render()
  }

  public async show(options: BaseOptions = {}) {
    // 已经展示完成了，不做任何操作
    if (this.state.visible) return
    const userAction = options.userAction !== undefined ? options.userAction : true
    this.updateState({ visible: true }, userAction)
    this._show({ userAction })
  }

  public async hide(options: BaseOptions = {}) {
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

  /** 把插件的渲染DOM插入到对应的容器中去 */
  public appendTo(wrapper: Element) {
    this.wrapper = wrapper
    this.render()
  }

  public changeConfigs(config: Config, userAction = true) {
    this.setState({ config }, { userAction })
    this.render()
  }

  public setExtraObjectsWith3DPositions(data: FloorplanExtraObject3D[]) {
    if (!this.data) return
    this.extraObjects = formatExtraObjects(data, this.five, this.data)
    this.render()
  }

  protected async formatData(serverData: PluginServerData) {
    return await formatData(serverData.data)
  }

  private _enable(options: { userAction: boolean }) {
    const { userAction } = options
    this.hooks.emit('enable', { userAction })
    if (this.state.visible) this._show({ userAction })
  }

  private _disable = (options: { userAction: boolean }) => {
    const { userAction } = options
    this.app?.$destroy()
    this.app = undefined
    this.hooks.emit('disable', { userAction })
  }

  private _show(options: { userAction: boolean }) {
    if (this.disposed) return
    if (!this.state.enabled) return
    const { userAction } = options
    this.hooks.emit('show', { userAction })
    this.render()
  }

  private _hide(options: { userAction: boolean }) {
    if (this.disposed) return
    if (!this.state.enabled) return
    const { userAction } = options
    this.hooks.emit('hide', { userAction })
    this.render()
  }

  private updateState(state: Partial<State>, userAction: boolean) {
    const prevState = this.state
    this.state = { ...this.state, ...state }
    if (equal(this.state, prevState, { deep: true })) return
    this.hooks.emit('stateChange', { state: this.state, prevState, userAction })
  }

  private render() {
    if (this.disposed) return
    if (!this.state.enabled) return
    // 处理 wrapper
    if (!this.wrapper && this.wrapperSelector) {
      const _wrapper = document.querySelector(this.wrapperSelector)
      this.wrapper = _wrapper
    }

    if (!this.data || !this.wrapper) return

    const props = {
      ...this.state.config,
      five: this.five,
      floorplanData: this.data,
      visible: this.state.visible,
      extraObjects: this.extraObjects,
    }
    this.app ? this.app.$set(props) : (this.app = new Main({ target: this.wrapper, props }))
  }
}
