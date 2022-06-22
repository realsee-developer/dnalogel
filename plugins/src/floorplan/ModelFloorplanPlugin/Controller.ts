import type { FLOOR_PLAN_ATTACHED_TO } from '../constant'
import type { FloorplanEventHandlers } from './typings/events.type'
import type { FloorplanServerData } from '../typings/floorplanServerData'
import type { FloorplanData, FloorplanRoomItem } from '../typings/floorplanData'
import { omit } from '../../shared-utils/filter'
import { Five, EventCallback, Subscribe } from '@realsee/five'
import { FloorplanErrorType, FIVE_CAMERA_DEFAULT_FOV, SHOW_ANIME_DURATION } from './utils/constant'
import to from '../../shared-utils/to'
import Main from '../Components/Main.svelte'
import formatData from '../utils/formatData'
import equal from '../../shared-utils/equal'
import getPxmm from '../../shared-utils/getPxmm'
import correctFiveState, { checkShowState } from './utils/correctFiveState'
import changeModelCanvasOpacity from '../../shared-utils/changeModelCanvasOpacity'

export interface ModelFloorplanParameterType {
  northDesc?: string
  selector?: string | Element
  scale?: number
  modelOpacity?: number
  autoShowEnable?: boolean
  hoverEnable?: boolean
  compassEnable?: boolean
  ruleLabelsEnable?: boolean
  roomLabelsEnable?: boolean
  cameraImageUrl?: string
  attachedTo?: FLOOR_PLAN_ATTACHED_TO
  getLabelElement?: (room: FloorplanRoomItem) => Element | null
}

export type ModelFloorplanPluginsConfigs = Omit<ModelFloorplanParameterType, 'selector' | 'scale'>

export interface ModelFloorplanPluginsShowOpts {
  floorIndex?: number
  isAutoShow?: boolean
  modelOpacity?: number
  immediately?: boolean
  userAction?: boolean
}
export const MODEL_FLOORPLAN_PLUGIN_NAME = 'modelFloorplanPlugin'

export default class ModelFloorplanPluginController {
  public name = MODEL_FLOORPLAN_PLUGIN_NAME
  /** 用于绑定事件钩子 */
  public hooks: Subscribe<FloorplanEventHandlers>
  /** 展示状态 */
  public visible = false
  /** 户型图大小 */
  public size = { width: 0, height: 0 }

  private app?: Main = undefined
  private pxmm = 0
  private five: Five
  private panoIndex = 0
  private floorIndex = 0
  private configs: ModelFloorplanPluginsConfigs = {}
  private lastPanoramaLongitude = 0
  private selector?: string | Element
  private floorplanData?: FloorplanData
  private wrapper?: Element
  private container = document.createElement('div')
  private showState: { longitude: number; latitude: number; fov: number }
  /** 记录上次 show 的参数，如果不一致，需要 reject 掉正在进行的 showPromise */
  private ModelFloorplanPluginsShowOpts?: ModelFloorplanPluginsShowOpts
  private showPromise?: Promise<boolean>
  private showRejection?: (errorMsg?: string) => void

  public constructor(five: Five, params: ModelFloorplanParameterType) {
    this.five = five
    this.hooks = new Subscribe()
    this.selector = params.selector
    this.configs = omit(params, ['selector'])
    this.showState = { longitude: 0, latitude: Math.PI / 2, fov: FIVE_CAMERA_DEFAULT_FOV / (params?.scale ?? 1) }

    // 设置 container 样式
    this.container.classList.add('floorplan-plugin')
    Object.assign(this.container.style, {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
      pointerEvents: 'none'
    })

    this.five.addExtraElement(this.container)
    // 如果初始化的时候模型已经加载完毕了，就不用再等 modelLoaded
    this.five.model.loaded ? this.handleModelLoaded() : five.once('modelLoaded', this.handleModelLoaded)

    five.once('dispose', this.dispose)
    five.on('modeChange', this.handleModeChange)
    five.on('panoArrived', this.handlePanoArrived)
    five.on('wantsChangeMode', this.handleWantsChangeMode)
    five.on('wantsInteriaPan', this.handleWantsInteriaPan)
    five.on('modelShownFloorChange', this.onModelShownFloorChange)
  }

  public dispose = () => {
    const five = this.five
    this.hide()
    this.app?.$destroy()
    this.container?.remove()
    five.off('modelLoaded', this.handleModelLoaded)
    five.off('modeChange', this.handleModeChange)
    five.off('panGesture', this.handlePanGesture)
    five.off('panoArrived', this.handlePanoArrived)
    five.off('wantsChangeMode', this.handleWantsChangeMode)
    five.off('wantsInteriaPan', this.handleWantsInteriaPan)
    five.off('wantsTapGesture', this.handleWantsTapGesture)
    five.off('modelShownFloorChange', this.onModelShownFloorChange)
  }

  /** 加载户型图数据 */
  public async load(data: FloorplanServerData) {
    const copyData: FloorplanServerData = JSON.parse(JSON.stringify(data))
    this.floorplanData = await formatData(copyData)
    this.render()
  }

  /** 把插件的渲染DOM插入到对应的容器中去 */
  public appendTo(wrapper: Element) {
    this.wrapper = wrapper
    wrapper.appendChild(this.container)
    return this
  }

  /** 更新户型图大小 */
  public updateSize = () => {
    if (!this.floorplanData) return
    if (!checkShowState(this.five, this.showState)) return
    if (!this.container || !this.wrapper) return
    // 计算户型图展示大小
    const { min, max } = this.floorplanData.bounding
    const width = max.x - min.x
    const height = max.y - min.y
    // 每毫米对应的 px 值
    const options = this.configs.attachedTo ? { attachedTo: this.configs.attachedTo } : undefined
    const pxmm = getPxmm(this.five, this.wrapper, this.floorIndex, options)
    const _width = Math.ceil(width * pxmm)
    const _height = Math.ceil(height * pxmm)
    if (this.size.width === _width && this.size.height === _height) return
    this.pxmm = pxmm
    this.size = { width: _width, height: _height }
    this.container.style.width = _width + 'px'
    this.container.style.height = _height + 'px'
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
   */
  public show = async (opts?: ModelFloorplanPluginsShowOpts): Promise<boolean> => {
    // 已经在展示中了
    if (!this.showPromise && this.visible) return true
    if (!this.five.model?.loaded) throw new Error(FloorplanErrorType.ModelNotLoaded)
    if (!this.floorplanData) throw new Error(FloorplanErrorType.DataNotLoaded)
    this.visible = true

    if (this.showPromise) {
      const sameWithLastOpts = equal(opts, this.ModelFloorplanPluginsShowOpts, { deep: false })
      if (!!this.showPromise && sameWithLastOpts) return this.showPromise
      if (!!this.showPromise && !sameWithLastOpts) this.showRejection?.(FloorplanErrorType.DifferentShowParams)
    }

    this.ModelFloorplanPluginsShowOpts = opts

    const getShowPromise = async () => {
      let hasRejected = false
      let externalErrorMsg: string | undefined
      this.showRejection = (errorMsg?: string) => {
        hasRejected = true
        externalErrorMsg = errorMsg
      }
      const [correctError] = await to(correctFiveState(this.five, this.showState, opts?.userAction))
      if (correctError) throw correctError
      // 异步结束要判断当前是不是被中断了，是不是调用了隐藏
      if (hasRejected) throw externalErrorMsg ? new Error(externalErrorMsg) : new Error(FloorplanErrorType.UnknownError)
      if (!this.visible) throw new Error(FloorplanErrorType.UnknownError)

      // 更新户型图状态
      this.visible = true
      // 更新户型图大小
      this.updateSize()
      // 高亮当前楼层，有两个目的
      // 1. 点击模型时，可以跳转到当前楼层的点位上
      // 2. 当前楼层比较小时，户型图也比较小，如果展示全部楼层，会展示户型图外有一圈模型
      if (opts?.floorIndex) this.floorIndex = opts.floorIndex
      this.five.model.show(this.floorIndex)

      // 模型消失, 渲染户型图
      const modelOpacity = opts?.modelOpacity ?? this.configs.modelOpacity ?? 1
      const renderDuration = opts?.immediately ? 0 : SHOW_ANIME_DURATION
      changeModelCanvasOpacity(this.five, modelOpacity, renderDuration)
      this.render(renderDuration)

      // 展示之后的事件监听
      this.five.on('wantsGesture', this.handleWantsGesture)
      this.five.on('wantsTapGesture', this.handleWantsTapGesture)

      return true
    }
    const showPromise = getShowPromise()
      .then((): boolean => {
        this.hooks.emit('showAnimationEnded', { auto: !!opts?.isAutoShow, userAction: opts?.userAction ?? true })
        return true
      })
      .catch((error: Error): boolean => {
        // 自动展示的报错内部处理
        if (opts?.isAutoShow) return false
        if (!(error instanceof Error)) return false
        // 非自动展示的报错继续向外抛出
        throw error
      })
      .finally(() => {
        this.showPromise = undefined
        this.showRejection = undefined
      })
    this.showPromise = showPromise
    return showPromise
  }

  /** 隐藏户型图 */
  public hide = (options?: { isAutoHide?: boolean; userAction?: boolean }) => {
    if (this.size.width === 0) return true
    if (this.visible === false) return true

    const isAutoHide = !!options?.isAutoHide

    this.five.off('wantsGesture', this.handleWantsGesture)
    this.five.off('wantsTapGesture', this.handleWantsTapGesture)

    this.visible = false
    this.showRejection?.(FloorplanErrorType.BreakOffByHide)
    changeModelCanvasOpacity(this.five, 1, 0)
    this.render()

    this.hooks.emit('hide', { auto: isAutoHide, userAction: options?.userAction ?? true })
    return true
  }

  /** 更改户型图楼层 */
  public changeFloor(floorIndex: number) {
    this.five.model.show(floorIndex)
  }

  public changeConfigs(params: ModelFloorplanPluginsConfigs) {
    Object.assign(this.configs, params)
    if (!this.container) return
    this.render()
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

  private handleModelLoaded = () => {
    if (this.wrapper) return
    if (!this.selector) return
    const wrapper = this.selector instanceof Element ? this.selector : document.querySelector(this.selector)
    if (!wrapper) throw new Error('不正确的父容器选择器')

    this.wrapper = wrapper
    wrapper.append(this.container)
  }

  private handleClick = (): false | void => {
    if (!this.visible) return
    const prevented = this.hooks.emit('click')
    if (prevented) return false
  }

  private handleWantsTapGesture: EventCallback['wantsTapGesture'] = () => this.handleClick()

  /** 从 Panorama 切换到其他模态时，记录当前的相机水平视角 */
  private handleWantsChangeMode: EventCallback['wantsChangeMode'] = (mode) => {
    if (mode !== 'Panorama') {
      this.lastPanoramaLongitude = this.five.getCurrentState().longitude
    }
    if (mode !== 'Floorplan') this.hide()
  }

  /** 监听模型态变化，只有在模型态才进行手势动作监听 */
  private handleModeChange: EventCallback['modeChange'] = (mode) => {
    if (mode === 'Floorplan') {
      this.five.on('panGesture', this.handlePanGesture)
    } else {
      this.hide()
      this.five.off('panGesture', this.handlePanGesture)
    }
  }

  /** panoIndex 改变时，更新 floorIndex */
  private handlePanoArrived: EventCallback['panoArrived'] = (index) => {
    if (!this.five?.work) return
    this.panoIndex = index
    this.floorIndex = this.five.work.observers[index].floorIndex
  }

  /** 当户型图正在展示中的时候禁用惯性 */
  private handleWantsInteriaPan: EventCallback['wantsInteriaPan'] = () => {
    if (this.visible) return false
  }

  /** 在户型图展示时阻止多指操作, 阻止鼠标放大 */
  private handleWantsGesture: EventCallback['wantsGesture'] = (type, pointers) => {
    if (!this.visible) return
    if (pointers.length > 1) return false
    if (type === 'mouseWheel') return false
  }

  /** 监听三维模型滑动
   * 1. 在三维模型转动结束时，如果达到设置的阈值，会自动切换到户型图
   * 2. 如何户型图已经展示，滑动时关闭户型图
   */
  private handlePanGesture: EventCallback['panGesture'] = async ({ latitude, longitude }, isFinal) => {
    if (this.five.getCurrentState().mode !== 'Floorplan') return
    if (this.configs.autoShowEnable === false) return
    // 如果操作结束后，户型图还在展示中，初始化模型状态
    if (isFinal && this.visible) return this.five.setState(this.showState, true)

    // 满足消失的条件：
    // 水平旋转角大于正负 5 度 || 俯仰角度大于 5 度
    const latitudeHide = Math.abs(latitude - Math.PI / 2) > (5 * Math.PI) / 180
    const longitudeHide = longitude > 5 * (Math.PI / 180) && longitude < 355 * (Math.PI / 180)
    const canHide = latitudeHide || longitudeHide
    if (this.visible && canHide) return this.hide({ isAutoHide: true })
    if (this.five.camera.fov / FIVE_CAMERA_DEFAULT_FOV < 0.8) return

    // 户型图展示条件：
    // 水平旋转角正负 30 度 && 俯仰角度小于 10 度
    const latitudeVisible = Math.abs(latitude - Math.PI / 2) < (10 * Math.PI) / 180
    const longitudeVisible = longitude < 30 * (Math.PI / 180) || longitude > 330 * (Math.PI / 180)
    if (isFinal && !this.visible && latitudeVisible && longitudeVisible) {
      // 当手指离开时需要等惯性结束之后在进行判断
      const handleInteriaPan = async (any: any, isFinal: boolean) => {
        if (!isFinal) return
        this.five.off('interiaPan', handleInteriaPan)
        await this.show({ isAutoShow: true })
      }
      this.five.on('interiaPan', handleInteriaPan)
      return
    }
  }

  private render(duration?: number) {
    if (!this.container || !this.floorplanData) return
    if (this.size.width === 0) return
    const { northDesc, hoverEnable, cameraImageUrl, getLabelElement, roomLabelsEnable, compassEnable, ruleLabelsEnable } =
      this.configs
    const props = {
      cameraImageUrl,
      getLabelElement,
      northDesc: northDesc ?? '北',
      visible: this.visible,
      duration: duration ?? 0,
      panoIndex: this.panoIndex,
      floorIndex: this.floorIndex,
      floorplanData: this.floorplanData,
      hoverEnable: hoverEnable ?? false,
      compassEnable: compassEnable ?? true,
      ruleLabelsEnable: ruleLabelsEnable ?? true,
      roomLabelsEnable: roomLabelsEnable ?? true,
      lastPanoramaLongitude: this.lastPanoramaLongitude,
    }
    if (!this.app) {
      this.app = new Main({
        target: this.container,
        intro: true,
        props,
      })
    } else {
      this.app.$set(props)
    }
  }
}
