import type MeasureController from '../Controller'
import type { PanoMeasurePluginEvent } from '../typings/event.type'

export interface GuideControllerParams {
  container: Element
}

export class GuideController {
  private measureController: MeasureController
  private textDom = document.createElement('span')
  private container = document.createElement('div')
  private hasAnchor = false

  constructor(measureController: MeasureController, params: GuideControllerParams) {
    this.initDom()
    params.container.append(this.container)

    this.measureController = measureController
    measureController.hook.on('modeChange', this.onModelChange)
    measureController.hook.on('anchorChange', this.anchorChange)
    measureController.hook.on('editedLineChange', this.onEditedLineChange)
  }

  public dispose() {
    this.hide()
    this.container.remove()
  }

  public show() {
    this.container.style.opacity = '1'
    this.container.style.transform = 'translate(0, 0)'
    return this
  }

  public hide() {
    this.container.style.opacity = '0'
    this.container.style.transform = 'translate(0, -10px)'
    this.measureController.hook.off('modeChange', this.onModelChange)
    this.measureController.hook.off('anchorChange', this.anchorChange)
    this.measureController.hook.off('editedLineChange', this.onEditedLineChange)
    return this
  }

  private initDom() {
    const container = this.container
    const textDom = this.textDom
    container.classList.add('fpm__guide-container')
    container.style.position = 'absolute'
    container.style.top = '0px'
    container.style.left = '0px'
    container.style.width = '100%'
    container.style.height = '110px'
    container.style.display = 'flex'
    container.style.alignItems = 'center'
    container.style.justifyContent = 'center'
    container.style.transform = 'translate(0, -10px)'
    container.style.background = `linear-gradient(180deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.00) 100%)`
    container.style.transition = 'opacity 500ms ease-in-out, transform 500ms ease-in-out'
    container.style.opacity = '0'
    textDom.classList.add('fpm__guide-text')
    textDom.style.color = '#fff'
    textDom.style.fontSize = '20px'
    textDom.innerText = `点击下方“添加”开始测距`
    container.appendChild(textDom)
  }

  private onModelChange: PanoMeasurePluginEvent['modeChange'] = (mode) => {
    if (mode === 'Watch') {
      this.textDom.innerText = ``
      return
    }
    this.textDom.innerText = `请选择第一个测量点，Esc或单击鼠标右键可取消选择`
  }

  private anchorChange: PanoMeasurePluginEvent['anchorChange'] = (anchor) => {
    if (!this.hasAnchor && !!anchor) {
      this.hasAnchor = true
      this.textDom.innerText = `选择下一个测量点，Esc或单击鼠标右键取消选择`
    } else if (!anchor) {
      this.hasAnchor = false
      this.textDom.innerText = `请选择第一个测量点，Esc或单击鼠标右键可取消选择`
    }
  }

  private onEditedLineChange: PanoMeasurePluginEvent['editedLineChange'] = (lines) => {
    if (lines.length === 1) {
      this.textDom.innerText = `可以连续选择测量点，或点击下方“完成”结束测量（Esc取消，Command+S保存）`
    }
  }
}
