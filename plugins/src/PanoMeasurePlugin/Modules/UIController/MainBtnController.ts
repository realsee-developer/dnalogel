import type MeasureController from '../../Controller'
import type { PanoMeasurePluginEvent } from '../../typings/event.type'
import TWEEN from '@tweenjs/tween.js'
import { mainIconStyle, mainItemStyle } from './style'
import { BetterTween, tweenProgress } from '../../../shared-utils/animationFrame/BetterTween'
import { MAIN_NORMAL_PATH, MAIN_DONE_PATH, MAIN_MOUSE_ENTER_FILL, MAIN_MOUSE_LEAVE_FILL } from './HTML'

export class MainBtnController {
  private container: Element
  private measureController: MeasureController
  private mainIconMaskTween?: BetterTween<{ progress: number }>
  private mainElement: ReturnType<MainBtnController['getMainElement']>

  constructor(measureController: MeasureController, container: Element) {
    this.measureController = measureController
    this.container = container
    this.mainElement = this.getMainElement()

    Object.assign(this.mainElement.mainIcon.style, mainIconStyle)
    Object.assign(this.mainElement.mainItem.style, mainItemStyle)
    this.change2Add()

    this.measureController.hook.on('modeChange', this.modeChangeHandler)
    this.mainElement.mainIcon.addEventListener('click', this.onClick)
    this.mainElement.mainIcon.addEventListener('mouseenter', this.onMouseEnter)
    this.mainElement.mainIcon.addEventListener('mouseleave', this.onMouseLeave)
  }

  public dispose() {
    this.measureController.hook.off('modeChange', this.modeChangeHandler)
    this.measureController.hook.off('editedLineChange', this.editedLineChangeHandler)
    this.mainElement.mainIcon.removeEventListener('click', this.onClick)
    this.mainElement.mainIcon.removeEventListener('mouseenter', this.onMouseEnter)
    this.mainElement.mainIcon.removeEventListener('mouseleave', this.onMouseLeave)
  }

  private getMainElement() {
    const mainTextDom = this.container.querySelector<HTMLSpanElement>('.fpm__main-text')
    const mainItem = this.container.querySelector<HTMLButtonElement>('.fpm__main')
    const mainIcon = this.container.querySelector<HTMLElement>('.fpm__main-icon')
    const pathDom = mainItem?.querySelector<SVGPathElement>('.fpm__main-icon-path')
    const maskWhiteRect = mainIcon?.querySelector<SVGRectElement>('#fpm__main-icon-mask-white')
    if (!mainItem || !mainTextDom || !mainIcon || !pathDom || !maskWhiteRect) throw new Error('cannot find dom')

    return { mainTextDom, mainItem, mainIcon, pathDom, maskWhiteRect }
  }

  private change2Add() {
    this.measureController.hook.off('editedLineChange', this.editedLineChangeHandler)
    const { mainIcon, mainTextDom, pathDom } = this.mainElement
    mainIcon.style.transition = mainTextDom.innerText === '完成' ? 'none' : 'transform 300ms ease-in-out'
    mainIcon.style.transform = 'rotate(0deg)'
    mainTextDom.innerText = '添加'
    pathDom?.setAttribute('d', MAIN_NORMAL_PATH)
  }

  private change2Cancel(withAnime = true) {
    const { mainIcon, mainTextDom, pathDom } = this.mainElement
    pathDom.setAttribute('d', MAIN_NORMAL_PATH)
    pathDom.setAttribute('mask', '')
    mainIcon.style.transition = withAnime ? 'transform 300ms ease-in-out' : 'none'
    mainIcon.style.transform = 'rotate(45deg)'
    mainTextDom && (mainTextDom.innerText = '取消')
    this.measureController.hook.on('editedLineChange', this.editedLineChangeHandler)
  }

  private change2Done() {
    const { mainTextDom, mainIcon, pathDom, maskWhiteRect } = this.getMainElement()
    if (mainTextDom.innerText === '完成') return
    mainIcon.style.transition = 'none'
    mainIcon.style.transform = 'rotate(0deg)'
    mainTextDom.innerText = '完成'
    pathDom.setAttribute('d', MAIN_DONE_PATH)
    pathDom.setAttribute('mask', `url(#fpm__main-icon-mask)`)
    this.mainIconMaskTween?.dispose()
    this.mainIconMaskTween = tweenProgress()
      .easing(TWEEN.Easing.Quartic.InOut)
      .onUpdate(({ progress }) => {
        maskWhiteRect.setAttribute('width', (progress * 30).toString())
      })
      .onComplete(() => this.mainIconMaskTween?.dispose())
      .play()
  }

  /* 鼠标移入时变成蓝色 */
  private onMouseEnter = () => {
    const { mainItem, pathDom } = this.mainElement
    mainItem.style.opacity = '1'
    pathDom.setAttribute('fill', MAIN_MOUSE_ENTER_FILL)
  }

  /* 鼠标移出时变成灰色 */
  private onMouseLeave = () => {
    const { mainItem, pathDom } = this.mainElement
    mainItem.style.opacity = '0.7'
    pathDom.setAttribute('fill', MAIN_MOUSE_LEAVE_FILL)
  }

  private onClick = () => {
    const mode = this.measureController.getCurrentMode()
    mode === 'Watch' ? this.measureController.changeMode('Edit') : this.measureController.save().changeMode('Watch')
  }

  private editedLineChangeHandler: PanoMeasurePluginEvent['editedLineChange'] = (lines) => {
    // 线的数量大于 1 时，没有状态的变化
    if (lines.length > 1) return
    // 因为撤销导致的状态变更 -> 取消
    if (lines.length === 0) return this.change2Cancel(false)
    this.change2Done()
  }

  private modeChangeHandler: PanoMeasurePluginEvent['modeChange'] = (mode) => {
    mode === 'Watch' ? this.change2Add() : this.change2Cancel()
  }
}
