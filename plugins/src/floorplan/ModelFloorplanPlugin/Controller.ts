import type { BaseOptions } from '../../base/BasePlugin'
import type { EventCallback, Five, Pose, Mode } from '@realsee/five'
import type { ShowState } from '../utils/correctFiveState'
import type { FloorplanServerData } from '../typings/floorplanServerData'
import type {
  State,
  Config,
  EventMap,
  ShowOptions,
  HideOptions,
  Parameters,
  PluginData,
  PluginServerData,
} from './typing'

import to from '../../shared-utils/to'
import equal from '../../shared-utils/equal'
import Main from '../Components/Main.svelte'
import formatData from '../utils/formatData'
import { CAMERA_IMAGE } from '../Assets/camera'
import { omit } from '../../shared-utils/filter'
import getPxmm from '../../shared-utils/getPxmm'
import { FLOOR_PLAN_ATTACHED_TO } from '../constant'
import * as BasePlugin from '../../base/BasePluginWithData'
import correctFiveState, { checkShowState } from '../utils/correctFiveState'
import changeModelCanvasOpacity from '../../shared-utils/changeModelCanvasOpacity'
import { FloorplanErrorType, FIVE_CAMERA_DEFAULT_FOV, SHOW_ANIME_DURATION } from '../utils/constant'

/** 当前 five 的相机视角是否满足户型图自动隐藏条件
 *
 * @description 水平旋转角大于正负 5 度 || 俯仰角度大于 5 度
 *
 */
function shouldFloorplanHideWithPose(pose: Pose) {
  const { latitude, longitude } = pose
  const latitudeHide = Math.abs(latitude - Math.PI / 2) > (5 * Math.PI) / 180
  const longitudeHide = longitude > 5 * (Math.PI / 180) && longitude < 355 * (Math.PI / 180)
  return latitudeHide || longitudeHide
}

/** 当前 five 的相机视角是否满足户型图自动展示隐藏条件
 *
 * @description 水平旋转角正负 30 度 && 俯仰角度小于 10 度
 *
 */
function shouldFloorplanShowWithPose(pose: Pose) {
  const { latitude, longitude } = pose
  const latitudeVisible = Math.abs(latitude - Math.PI / 2) < (10 * Math.PI) / 180
  const longitudeVisible = longitude < 30 * (Math.PI / 180) || longitude > 330 * (Math.PI / 180)
  return latitudeVisible && longitudeVisible
}

export class Controller extends BasePlugin.Controller<State, EventMap, PluginServerData, PluginData> {
  // =============== public properties =================
  public name = 'modelFloorplanPlugin'
  public state: State
  // =============== private properties =================
  protected data?: PluginData
  /** 展示户型图时，需要正确的状态 */
  protected showState: ShowState
  /** show 动画的公共 Promise */
  protected showPromise?: Promise<void>
  private app?: Main = undefined
  private panoIndex = 0
  private floorIndex = 0
  private selector?: string | Element
  /** 公共 Promise 的 reject 方法 */
  private showRejection?: (errorMsg?: string) => void
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
    // =============== init Show State ===============
    this.showState = {
      mode: 'Floorplan',
      longitude: 0,
      latitude: Math.PI / 2,
      fov: FIVE_CAMERA_DEFAULT_FOV / (params?.scale ?? 1),
    }
    // =============== init State ===============
    const baseConfig: Config = {
      northDesc: '北',
      modelOpacity: 1,
      hoverEnable: true,
      compassEnable: true,
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

  /** 把插件的渲染DOM插入到对应的容器中去 */
  public appendTo(wrapper: Element) {
    this.wrapper = wrapper

    // 插件 disabled 时，只是不执行副作用，但是 wrapper 还是要赋值的，不然 enable 的时候找不到父容器
    if (!this.state.enabled) return

    wrapper.appendChild(this.container)
    this.render()
    return this
  }

  /** 启用插件 */
  public enable(options: BaseOptions = {}) {
    if (this.state.enabled) return

    const userAction = options.userAction !== undefined ? options.userAction : true
    this.updateState({ enabled: true }, options.userAction || userAction)
    this._enable({ userAction })
  }

  /** 禁用插件 */
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

  /** 展示户型图
   * 1. show 函数大部分情况下需要耗时
   * 2. 如果当前已经在展示中，将不会触发任何事件
   * 3. 如果展示过程被中断，将抛出错误
   * 4. 多次调用 show 方法，只会触发一次 showAnimationEnded 事件，但是展示结果会取决于最后一次调用参数
   * 5. 如果多次调用 show 方法，参数与上次参数不一致时，上次 show Promise 会被 reject
   * @param opts.floorIndex 楼层
   * @param opts.modelOpacity 模型透明度
   * @param opts.immediately 是否立即展示
   * @param opts.isAutoShow 是否是自动展示
   * @param opts.userAction 是否是用户行为
   */
  public show = async (options: Omit<Partial<ShowOptions>, 'isAutoShow'> = {}): Promise<void> => {
    if (!this.state.enabled) return
    // 已经展示完成了，不做任何操作
    if (!this.showPromise && this.state.visible) return

    const userAction = options.userAction !== undefined ? options.userAction : true
    this.updateState({ visible: true }, userAction)
    this._show(options)
  }

  /** 隐藏户型图 */
  public hide = async (options: Partial<HideOptions> = {}) => {
    if (!this.state.enabled) return
    this.isHiddenByHideFunc = true
    if (this.state.visible === false) return

    this.updateState({ visible: false }, options.userAction || true)
    this._hide(options)
  }

  /** 更改插件 State */
  public setState(state: Partial<State>, options: BaseOptions = {}) {
    const prevState = this.state
    const userAction = options.userAction !== undefined ? options.userAction : true
    this.updateState(state, userAction)

    if (state.enabled !== undefined && prevState.enabled !== state.enabled) {
      state.enabled ? this._enable({ userAction }) : this._disable({ userAction })
    }

    if (state.visible !== undefined && prevState.visible !== state.visible) {
      const options = { userAction }
      state.visible ? this._show(options) : this._hide(options)
    }
  }

  public changeConfigs(_config: Partial<Config>, userAction = true) {
    const config = { ...this.state.config, ..._config }
    this.updateState({ config }, userAction)
    if (!this.container) return
    this.render()
  }

  /** 更新户型图大小 */
  public updateSize = () => {
    if (!this.data) return
    if (!checkShowState(this.five, this.showState)) return
    if (!this.container || !this.wrapper) return
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

  protected async formatData(serverData: PluginServerData) {
    return await formatData(serverData.data)
  }

  private _disable = (options: { userAction: boolean }) => {
    const { userAction } = options
    this.hooks.emit('disable', { userAction })
    // ===== 处理展示过程中 disable =====
    this.showRejection?.(FloorplanErrorType.BreakOffByDisable)
    this.showPromise = undefined
    this.app?.$destroy()
    this.app = undefined
    this.container?.remove()
    this.removeEventListener()
  }

  private _enable = (options: { userAction: boolean }) => {
    const { userAction } = options
    this.addEventListener()
    if (!this.wrapper) return
    this.wrapper.append(this.container)
    this.hooks.emit('enable', { userAction })
    if (this.state.visible) this._show({ userAction })
  }

  private _show = async (options: Partial<ShowOptions>) => {
    if (!this.state.enabled) return
    if (!this.five.model?.loaded) throw new Error(FloorplanErrorType.ModelNotLoaded)
    if (!this.data) throw new Error(FloorplanErrorType.DataNotLoaded)
    this.isHiddenByHideFunc = false
    // ===== 参数合并 =====
    const baseShowOpts: ShowOptions = {
      floorIndex: this.floorIndex,
      modelOpacity: this.state.config.modelOpacity,
      immediately: false,
      isAutoShow: false,
      userAction: true,
    }
    const mergedOptions: ShowOptions = { ...baseShowOpts, ...options }

    const getShowPromise = async () => {
      this.hooks.emit('show', { userAction: mergedOptions.userAction, auto: mergedOptions.isAutoShow })
      let hasRejected = false
      let externalErrorMsg: string | undefined
      this.showRejection = (errorMsg?: string) => {
        hasRejected = true
        externalErrorMsg = errorMsg
      }

      const [correctError] = await to(correctFiveState(this.five, this.showState, mergedOptions.userAction))
      if (correctError) throw correctError
      // 异步结束要判断当前是不是被中断了
      if (hasRejected) throw externalErrorMsg ? new Error(externalErrorMsg) : new Error(FloorplanErrorType.UnknownError)

      // 更新户型图大小
      this.updateSize()

      // 高亮当前楼层，有两个目的
      // 1. 点击模型时，可以跳转到当前楼层的点位上
      // 2. 当前楼层比较小时，户型图也比较小，如果展示全部楼层，会展示户型图外有一圈模型
      this.floorIndex = mergedOptions.floorIndex
      this.five.model.show(this.floorIndex)

      // 模型消失, 渲染户型图
      const modelOpacity = mergedOptions.modelOpacity
      const renderDuration = mergedOptions.immediately ? 0 : SHOW_ANIME_DURATION
      changeModelCanvasOpacity(this.five, modelOpacity, renderDuration)
      this.render(renderDuration)
    }

    this.showPromise = getShowPromise()
      .then(() => {
        this.hooks.emit('showAnimationEnded', {
          auto: mergedOptions.isAutoShow,
          userAction: mergedOptions.userAction,
        })
      })
      .catch((error: Error) => {
        this.updateState({ visible: false }, mergedOptions.userAction)
        // 自动展示的报错内部处理
        if (mergedOptions.isAutoShow) return
        // 非自动展示的报错继续向外抛出
        if (error instanceof Error) throw error
      })
      .finally(() => {
        this.showPromise = undefined
        this.showRejection = undefined
      })

    return this.showPromise
  }

  private _hide = (options: Partial<HideOptions>) => {
    // ===== 处理展示过程中 hide =====
    this.showRejection?.(FloorplanErrorType.BreakOffByHide)
    this.showPromise = undefined
    // ===== 合并参数 =====
    const baseOptions: HideOptions = {
      userAction: true,
      isAutoHide: false,
    }
    const mergedOptions: HideOptions = { ...baseOptions, ...options }

    changeModelCanvasOpacity(this.five, 1, 0)
    this.hooks.emit('hide', { auto: mergedOptions.isAutoHide, userAction: mergedOptions.userAction })
    this.render()
  }

  private updateState(state: Partial<State>, userAction: boolean) {
    const prevState = this.state
    this.state = { ...this.state, ...state }
    if (equal(this.state, prevState, { deep: true })) return
    this.hooks.emit('stateChange', { state: this.state, prevState, userAction })
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
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
      pointerEvents: 'none',
    })
    this.five.addExtraElement(this.container)
  }

  private handleClick = (): false | undefined => {
    if (!this.state.visible) return

    const preventDefault = this.hooks.emit('click')
    if (preventDefault) return false
  }

  private addEventListener() {
    if (!this.state.enabled) return
    if (this.hasAddedEventListener) return
    const five = this.five
    five.on('modeChange', this.onFiveModeChange)
    five.on('interiaPan', this.onFiveInteriaPan)
    five.on('panoArrived', this.onFivePanoArrived)
    five.on('cameraUpdate', this.onFiveCameraUpdate)
    five.on('wantsGesture', this.onFiveWantsGesture)
    five.on('wantsPanGesture', this.onFiveWantsPanGesture)
    five.on('wantsTapGesture', this.onFiveWantsTapGesture)
    five.on('wantsChangeMode', this.onFiveWantsChangeMode)
    five.on('modelShownFloorChange', this.onModelShownFloorChange)
  }

  private removeEventListener() {
    const five = this.five
    this.hasAddedEventListener = false
    // 注意这里并没有消除 dispose 的监听
    five.off('modelLoaded', this.onFiveModelLoaded)
    five.off('modeChange', this.onFiveModeChange)
    five.off('interiaPan', this.onFiveInteriaPan)
    five.off('panoArrived', this.onFivePanoArrived)
    five.off('cameraUpdate', this.onFiveCameraUpdate)
    five.off('wantsGesture', this.onFiveWantsGesture)
    five.off('wantsPanGesture', this.onFiveWantsPanGesture)
    five.off('wantsTapGesture', this.onFiveWantsTapGesture)
    five.off('wantsChangeMode', this.onFiveWantsChangeMode)
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

  /** 更改模型时，自动隐藏户型图 */
  private onFiveModeChange: EventCallback['modeChange'] = (mode) => {
    // 目前 Five modeChange 事件没有暴露 userAction，先拿 false 苟着
    if (mode !== this.showState.mode) {
      this.updateState({ visible: false }, false)
      this._hide({ userAction: false })
    }
  }

  /** 惯性结束后，判断能否自动展示户型图 */
  private onFiveInteriaPan = (_: any, isFinal: boolean) => {
    if (!isFinal) return
    if (this.state.config.autoShowEnable === false) return
    // 如果用户调用 hide 方法手动隐藏户型图，则不允许自动展示
    if (this.isHiddenByHideFunc) return
    const fiveCurrentState = this.five.getCurrentState()
    if (fiveCurrentState.mode !== 'Floorplan') return
    if (this.state.visible) return
    if (shouldFloorplanShowWithPose(fiveCurrentState)) {
      this.updateState({ visible: true }, true)
      this._show({ isAutoShow: true })
    }
  }

  /** panoIndex 改变时，更新 floorIndex */
  private onFivePanoArrived: EventCallback['panoArrived'] = (index) => {
    if (!this.five?.work) return
    this.panoIndex = index
    this.floorIndex = this.five.work.observers[index].floorIndex
  }

  /** cameraUpdate 时判断户型图是否应该自动隐藏 */
  private onFiveCameraUpdate: EventCallback['cameraUpdate'] = (_, userAction) => {
    if (!this.state.visible) return
    // 展示过程中不处理自动隐藏逻辑
    if (this.showPromise) return
    const fiveCurrentState = this.five.getCurrentState()

    if (shouldFloorplanHideWithPose(fiveCurrentState)) {
      this.updateState({ visible: false }, userAction)
      this._hide({ userAction, isAutoHide: true })
    }
  }

  /** 在户型图展示时阻止多指操作, 阻止鼠标放大 */
  private onFiveWantsGesture: EventCallback['wantsGesture'] = (type, pointers) => {
    if (!this.state.visible) return
    // 阻止多指操作
    if (pointers.length > 1) return false
    // 阻止鼠标滚轮行为
    if (type === 'mouseWheel') return false
  }

  /** 户型图展示中，转动三维模型，结束时应该自动修复模型状态 */
  private onFiveWantsPanGesture: EventCallback['panGesture'] = (_, isFinal) => {
    if (this.five.getCurrentState().mode !== 'Floorplan') return
    if (this.state.config.autoShowEnable === false) return

    if (isFinal && this.state.visible) {
      this.five.updateCamera(this.showState, 0)
      // 禁用掉 isFinal 的 panGesture 行为
      // 因为 panGesture 中包含对相机的处理，会跟回调事件中的处理逻辑冲突
      // 此行为也会禁用 pan 结束后的惯性处理
      return false
    }
  }

  /** 阻止点击分间走点 */
  private onFiveWantsTapGesture: EventCallback['wantsTapGesture'] = () => this.handleClick()

  /** 从 Panorama 切换到其他模态时，记录当前的相机水平视角 */
  private onFiveWantsChangeMode: EventCallback['wantsChangeMode'] = (mode, prevMode) => {
    if (prevMode === 'Panorama' && mode === 'Floorplan') {
      this.lastPanoramaLongitude = this.five.getCurrentState().longitude
    }

    // if (mode !== 'Floorplan') this.hide()
  }

  /** 模型楼层高亮改变时，自动进行楼层切换 */
  private onModelShownFloorChange = (shownFloor: number | null) => {
    if (this.floorIndex === shownFloor) return
    if (shownFloor === null) {
      const panoIndex = this.five.getCurrentState().panoIndex
      this.floorIndex = this.five.work.observers[panoIndex].floorIndex
      return
    }
    this.floorIndex = shownFloor
    this.updateSize()
    this.render()
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
