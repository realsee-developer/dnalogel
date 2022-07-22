import type { Five } from '@realsee/five'
import type { PanoRulerProPluginDatas, PanoRulerProPluginParameterType, PanoRulerProPluginState } from './typings'
import RulerItems from './RulerItems.svelte'
export default class Controller {
  private five: Five
  private container = document.createElement('div')
  private panoRulerProData: PanoRulerProPluginDatas | undefined
  private rulerItems: RulerItems | undefined
  public state: PanoRulerProPluginState = {
    enable: false,
    loaded: false,
    options: {
      className: '',
      distanceText: (distance) => `${distance.toFixed(1)}m`,
    },
  }

  public constructor(five: Five, params: PanoRulerProPluginParameterType) {
    this.five = five
    this.container.classList.add('panoRulerProPlugin-container')
    this.container.setAttribute(
      'style',
      `position: absolute;pointer-events: none;width: 100%;height: 100%;left: 0;top: 0;overflow: hidden;`,
    )

    if (params) this.load(params)

    this.five.once('modelLoaded', async () => {
      this.five.getElement()?.parentNode?.append(this.container)
    })
    this.five.once('dispose', () => this.dispose())
  }

  public async load(params: PanoRulerProPluginParameterType) {
    this.state.options = { ...this.state.options, ...params.options || {}}
    if (!this.five.work) return
    const data = params.panoRulerProData
    if (params.options?.className) this.container.classList.add(params.options?.className)
    if (!data) throw new Error('标尺数据依赖不齐全！')
    this.panoRulerProData = data
    this.state.loaded = true
  }

  public enable() {
    if (!this.state.loaded) return false
    if (this.state.enable) return true
    this.state.enable = true
    this.render()
    return true
  }

  public disable() {
    if (!this.state.enable) return true
    this.state.enable = false
    this.render()
    return true
  }

  private async render() {
    if (this.state.enable) {
      if (!this.panoRulerProData || !this.container) return
      this.rulerItems = new RulerItems({
        target: this.container,
        props: {
          five: this.five,
          rulerDatas: this.panoRulerProData,
          options: this.state.options
        },
      })
    } else {
      this.rulerItems?.$destroy()
      this.rulerItems = undefined
    }
  }

  private dispose() {
    if (this.container) {
      this.rulerItems.$destroy()
      this.rulerItems = undefined
    }
    this.container.remove()
  }
}
