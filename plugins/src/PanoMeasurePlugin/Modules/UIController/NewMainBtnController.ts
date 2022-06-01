import TWEEN from '@tweenjs/tween.js'
import type MeasureController from '../../Controller'
import { newMainIconStyle, newMainItemStyle } from './style'
import type { PluginEvent } from '../../typings/event.type'
import { BetterTween, tweenProgress } from '../../../shared-utils/animationFrame/BetterTween'
import { startSvg, endSvg } from './mobileHTML'

export class NewMainBtnController {
  private container: Element
  private measureController: MeasureController
  private mainIconMaskTween?: BetterTween<{ progress: number }>
  private mainElement: ReturnType<NewMainBtnController['getMainElement']>

  constructor(measureController: MeasureController, container: Element) {
    this.measureController = measureController
    this.container = container
    this.mainElement = this.getMainElement()

    Object.assign(this.mainElement.mainIcon.style, newMainIconStyle)
    Object.assign(this.mainElement.mainItem.style, newMainItemStyle)
    this.change2Add()

    this.measureController.hook.on('modeChange', this.modeChangeHandler)
    this.mainElement.mainItem.addEventListener('click', this.onClick)
  }

  public dispose() {
    this.measureController.hook.off('modeChange', this.modeChangeHandler)
    this.mainElement.mainItem.removeEventListener('click', this.onClick)
  }

  private getMainElement() {
    const mainTextDom = this.container.querySelector<HTMLSpanElement>('.fpm__main-text')
    const mainItem = this.container.querySelector<HTMLButtonElement>('.fpm__main')
    const mainIcon = this.container.querySelector<HTMLElement>('.fpm__main-icon')
    if (!mainItem || !mainTextDom || !mainIcon) throw new Error('cannot find dom')

    return { mainTextDom, mainItem, mainIcon }
  }

  private change2Add() {
    const { mainIcon, mainTextDom } = this.mainElement
    mainIcon.innerHTML = startSvg
    mainIcon.style.transition = mainTextDom.innerText === '结束' ? 'none' : 'transform 300ms ease-in-out'
    mainTextDom.innerText = '开始'
  }

  private change2Done() {
    const { mainTextDom, mainIcon } = this.getMainElement()
    if (mainTextDom.innerText === '结束') return
    mainIcon.innerHTML = endSvg
    mainIcon.style.transition = 'none'
    mainTextDom.innerText = '结束'
    this.mainIconMaskTween?.dispose()
    this.mainIconMaskTween = tweenProgress()
      .easing(TWEEN.Easing.Quartic.InOut)
      .onComplete(() => this.mainIconMaskTween?.dispose())
      .play()
  }

  private onClick = () => {
    const mode = this.measureController.getCurrentMode()
    mode === 'Watch' ? this.measureController.changeMode('Edit') : this.measureController.save().changeMode('Watch')
  }

  private modeChangeHandler: PluginEvent['modeChange'] = (mode) => {
    mode === 'Watch' ? this.change2Add() : this.change2Done()
  }
}
