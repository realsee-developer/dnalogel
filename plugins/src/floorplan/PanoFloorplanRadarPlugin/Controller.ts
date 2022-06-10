import type { Five } from '@realsee/five'
import type { FloorplanServerData } from '../typings/floorplanServerData'
import type {
  FloorplanData,
  FloorplanExtraObject3D,
  FloorplanExtraObject,
} from '../typings/floorplanData'

import Main from './Components/Main.svelte'
import formatData, { formatExtraObjects } from '../utils/formatData'

export interface PanoFloorplanRadarPluginControllerParameter {
  wrapper?: string | Element
  configs?: {
    hoverEnable?: boolean
    cameraImageUrl?: string
  }
}

export default class PanoFloorplanRadarPluginController {
  private app?: Main
  private five: Five
  private wrapperSelector = ''
  private data?: FloorplanData
  private wrapper: Element | null = null
  private extraObjects: FloorplanExtraObject[] = []
  private configs: NonNullable<PanoFloorplanRadarPluginControllerParameter['configs']> = {}

  public constructor(five: Five, params?: PanoFloorplanRadarPluginControllerParameter) {
    this.five = five
    params?.configs && Object.assign(this.configs, params.configs)

    if (typeof params?.wrapper === 'string') this.wrapperSelector = params.wrapper
    else if (params?.wrapper instanceof Element) this.wrapper = params.wrapper

    five.once('dispose', this.dispose)
  }

  public dispose = () => {
    this.app?.$destroy()
  }

  public load = async (data: FloorplanServerData) => {
    const copyData: FloorplanServerData = JSON.parse(JSON.stringify(data))
    const floorplanData = await formatData(copyData)
    this.data = floorplanData
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
    this.render()
  }

  /** 把插件的渲染DOM插入到对应的容器中去 */
  public appendTo(wrapper: Element) {
    this.wrapper = wrapper
    this.render()
  }

  public changeConfigs(configs: PanoFloorplanRadarPluginController['configs']) {
    Object.assign(this.configs, configs)
    this.render()
  }

  public setExtraObjectsWith3DPositions(data: FloorplanExtraObject3D[]) {
    if (!this.data) return
    this.extraObjects = formatExtraObjects(data, this.five, this.data)
    this.render()
  }

  private render() {
    // 处理 wrapper
    if (!this.wrapper) {
      const _wrapper = document.querySelector(this.wrapperSelector)
      this.wrapper = _wrapper
    }
    if (!this.data || !this.wrapper) return
    const props = {
      five: this.five,
      floorplanData: this.data,
      extraObjects: this.extraObjects,
      cameraImageUrl: this.configs.cameraImageUrl,
      hoverEnable: this.configs.hoverEnable ?? false,
    }
    if (!this.app) {
      this.app = new Main({
        target: this.wrapper,
        props,
      })
      return
    }
    this.app.$set(props)
  }
}
