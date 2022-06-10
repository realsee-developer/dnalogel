import type { Five, EventCallback } from '@realsee/five'
import type { FLOOR_PLAN_ATTACHED_TO } from '../constant'
import type { FloorplanServerData } from '../typings/floorplanServerData'
import type { FloorplanData, FloorplanRoomItem } from '../typings/floorplanData'

import * as THREE from 'three'
import { pluginStyle } from './style'
import formatData from '../utils/formatData'
import getPxmm from '../../shared-utils/getPxmm'
import { omit } from '../../shared-utils/filter'
import Main from '../Components/Main.svelte'
import changeModelCanvasOpacity from '../../shared-utils/changeModelCanvasOpacity'

/** TopviewFloorplanPlugin 配置参数 */
interface Configs {
  northDesc?: string
  modelOpacity?: number
  cameraImageUrl?: string
  /** 是否开启高亮房间功能，默认为 false */
  hoverEnable?: boolean
  /** 是否开启放大缩小和拖动功能，默认为 false */
  gestureEnable?: boolean
  /** 是否展示指南针，默认为 true */
  compassEnable?: boolean
  /** 是否展示户型图标尺，默认为 true */
  ruleLabelsEnable?: boolean
  /** 是否展示房间标签，默认为 true */
  roomLabelsEnable?: boolean
  /** 点击房间时，是否需要跳转到被点房间的全景态点位上，默认为 true */
  preventRoomClick?: boolean
  /** 户型图展示时，应该对应到模型的哪个位置上，默认是 BOUNDING_CENTER */
  attachedTo?: FLOOR_PLAN_ATTACHED_TO
  /** 用户自定义房间标间 DOM 函数 */
  getLabelElement?: (room: FloorplanRoomItem) => Element | null
}
/** TopviewFloorplanPlugin 初始化参数 */
export interface TopviewFloorplanPluginParameterType extends Configs {
  selector?: string | Element
  scale?: number
}

export type TopviewFloorplanPluginReturnType = TopviewFloorplanPluginController

export class TopviewFloorplanPluginController {
  public size = { width: 0, height: 0 }
  public visible = false

  private pxmm = 0
  private app?: Main
  private five: Five
  private panoIndex = 0
  private floorIndex = 0
  private configs: Configs = {}
  private lastPanoramaLongitude = 0
  private selector?: string | Element
  private floorplanData?: FloorplanData
  private wrapper?: Element
  private container = document.createElement('div')

  public constructor(five: Five, params: TopviewFloorplanPluginParameterType) {
    this.five = five
    this.selector = params.selector
    this.configs = omit(params, ['selector'])

    this.five.addExtraElement(this.container)
    // 设置 container 样式
    this.container.classList.add('floorplan-plugin')
    Object.assign(this.container.style, pluginStyle)

    // 如果初始化的时候模型已经加载完毕了，就不用再等 modelLoaded
    this.five.model.loaded
      ? this.onFiveModelLoaded()
      : five.once('modelLoaded', this.onFiveModelLoaded)

    this.five.once('dispose', this.dispose)
    this.five.on('modeChange', this.onFiveModeChange)
    this.five.on('panGesture', this.onFivePanGesture)
    this.five.on('mouseWheel', this.onFivePinchGesture)
    this.five.on('panoArrived', this.onFivePanoArrived)
    this.five.on('pinchGesture', this.onFivePinchGesture)
    this.five.on('wantsGesture', this.onFiveWantsGesture)
    this.five.on('wantsMoveToPano', this.onFiveWantsMoveToPano)
    this.five.on('initAnimationEnded', this.onFiveInitAnimationEnded)
    this.five.on('modelShownFloorChange', this.onModelShownFloorChange)
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

  public dispose = () => {
    this.hide()
    this.app?.$destroy()
    this.container?.remove()
    this.five.off('modeChange', this.onFiveModeChange)
    this.five.off('panGesture', this.onFivePanGesture)
    this.five.off('panoArrived', this.onFivePanoArrived)
    this.five.off('modelLoaded', this.onFiveModelLoaded)
    this.five.off('pinchGesture', this.onFivePinchGesture)
    this.five.off('wantsGesture', this.onFiveWantsGesture)
    this.five.off('wantsMoveToPano', this.onFiveWantsMoveToPano)
    this.five.off('initAnimationEnded', this.onFiveInitAnimationEnded)
    this.five.off('modelShownFloorChange', this.onModelShownFloorChange)
  }

  private onFiveWantsMoveToPano: EventCallback['wantsMoveToPano'] = () => {
    if (this.visible && this.configs.preventRoomClick) return false
  }

  private onFiveWantsGesture: EventCallback['wantsGesture'] = (type) => {
    if (type !== 'pan' && type !== 'pinch' && type !== 'mouseWheel') return
    if (this.visible && !this.configs.gestureEnable) return false
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

  private onFivePanoArrived: EventCallback['panoArrived'] = (index) => {
    if (!this.five?.work) return
    this.panoIndex = index
    this.floorIndex = this.five.work.observers[index].floorIndex
  }

  private onFivePanGesture: EventCallback['panGesture'] = () => {
    if (!this.visible) return
    this.updatePosition()
  }

  private onFivePinchGesture: EventCallback['pinchGesture'] = () => {
    if (!this.visible) return
    this.updatePosition()
    this.updateSize()
  }

  private onFiveModelLoaded = () => {
    if (this.wrapper) return
    if (!this.selector) return
    const wrapper =
      this.selector instanceof Element ? this.selector : document.querySelector(this.selector)
    if (!wrapper) throw new Error('不正确的父容器选择器')

    this.wrapper = wrapper
    wrapper.append(this.container)
  }

  /** 非 Topview 态隐藏户型图 */
  private onFiveModeChange: EventCallback['modeChange'] = (mode) => {
    if (mode !== 'Topview') return this.hide()
  }

  /** 动画结束后是 Topview 态就展示户型图 */
  private onFiveInitAnimationEnded: EventCallback['initAnimationEnded'] = () => {
    const { mode } = this.five.getCurrentState()
    if (mode === 'Topview') this.show()
  }

  private show() {
    this.visible = true
    this.five.model.show(this.floorIndex)
    this.updatePosition()
    this.updateSize()

    const renderDuration = 500
    const modelOpacity = this.configs.modelOpacity
    if (typeof modelOpacity === 'number') {
      changeModelCanvasOpacity(this.five, modelOpacity, renderDuration)
    }

    this.render(renderDuration)
  }

  private hide() {
    const modelOpacity = 1
    const renderDuration = 0
    this.visible = false
    changeModelCanvasOpacity(this.five, modelOpacity, renderDuration)
    this.render()
  }

  /** 更新户型图大小 */
  private updateSize = () => {
    if (!this.floorplanData) return
    if (!this.container || !this.wrapper) return
    if (this.five.getCurrentState().mode !== 'Topview') return
    // 计算户型图展示大小
    const { min, max } = this.floorplanData.bounding
    const width = max.x - min.x
    const height = max.y - min.y
    // 每毫米对应的 px 值
    const options = this.configs.attachedTo ? { attachedTo: this.configs.attachedTo } : undefined
    const pxmm = getPxmm(this.five, this.wrapper, this.floorIndex, options)
    const _width = Math.ceil(width * pxmm)
    const _height = Math.ceil(height * pxmm)
    this.pxmm = pxmm
    this.size = { width: _width, height: _height }
    this.container.style.width = _width + 'px'
    this.container.style.height = _height + 'px'
  }

  /** 更新户型图位置 */
  private updatePosition() {
    const modelCenter = this.five.model?.bounding.getCenter(new THREE.Vector3())
    if (!modelCenter) return
    const ndcModelCenter = modelCenter.clone().project(this.five.camera)
    const left = (ndcModelCenter.x + 1) / 2
    const top = -(ndcModelCenter.y - 1) / 2
    this.container.style.left = left * 100 + '%'
    this.container.style.top = top * 100 + '%'
  }

  private render(duration?: number) {
    if (!this.container || !this.floorplanData) return
    if (this.size.width === 0) return
    const {
      northDesc,
      getLabelElement,
      cameraImageUrl,
      hoverEnable,
      compassEnable,
      roomLabelsEnable,
      ruleLabelsEnable,
    } = this.configs
    const props = {
      getLabelElement,
      northDesc: northDesc ?? '北',
      cameraImageUrl,
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
