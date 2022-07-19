import type MeasureController from '../../Controller'
import type { PanoMeasurePluginEvent } from '../../typings/event.type'
import { mainIconStyle, mainItemStyle } from './style'
export class MainBtnController {
  private container: Element
  private measureController: MeasureController
  private mainElement: ReturnType<MainBtnController['getMainElement']>

  constructor(measureController: MeasureController, container: Element) {
    this.measureController = measureController
    this.container = container
    this.mainElement = this.getMainElement()

    Object.assign(this.mainElement.mainIcon.style, mainIconStyle)
    Object.assign(this.mainElement.mainItem.style, mainItemStyle)
    this.change2Add()

    this.measureController.hook.on('modeChange', this.modeChangeHandler)
    this.mainElement.mainItem.addEventListener('click', this.onClick)
    this.mainElement.mainItem.addEventListener('mouseenter', this.onMouseEnter)
    this.mainElement.mainItem.addEventListener('mouseleave', this.onMouseLeave)
  }

  public dispose() {
    this.measureController.hook.off('modeChange', this.modeChangeHandler)
    this.mainElement.mainItem.removeEventListener('click', this.onClick)
    this.mainElement.mainItem.removeEventListener('mouseenter', this.onMouseEnter)
    this.mainElement.mainItem.removeEventListener('mouseleave', this.onMouseLeave)
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
    if (mainIcon.className.includes('fpm__main__start')) return
    if (mainIcon.className.includes('fpm__main__end')) {
      mainIcon.style.transform = `scale(0.8)`
      if (mainTextDom.className.includes('fpm__main-text__show')) {
        mainTextDom.classList.replace('fpm__main-text__show', 'fpm__main-text__hide')
      } else {
        mainTextDom.classList.add('fpm__main-text__hide')
      }
      setTimeout(() => {
        mainIcon.classList.replace('fpm__main__end', 'fpm__main__start')
        mainIcon.style.transform = 'scale(1)'
        mainTextDom.innerText = '开始'
        mainTextDom.classList.replace('fpm__main-text__hide', 'fpm__main-text__show')
      }, 200)
    }
  }

  private change2Done() {
    const { mainTextDom, mainIcon } = this.getMainElement()
    if (mainTextDom.innerText === '结束') return
    if (mainIcon.className.includes('fpm__main__end')) return
    if (mainIcon.className.includes('fpm__main__start')) {
      mainIcon.style.transform = `scale(0.8)`
      if (mainTextDom.className.includes('fpm__main-text__show')) {
        mainTextDom.classList.replace('fpm__main-text__show', 'fpm__main-text__hide')
      } else {
        mainTextDom.classList.add('fpm__main-text__hide')
      }
      setTimeout(() => {
        mainIcon.classList.replace('fpm__main__start', 'fpm__main__end')
        mainIcon.style.transform = 'scale(1)'
        mainTextDom.innerText = '结束'
        mainTextDom.classList.replace('fpm__main-text__hide', 'fpm__main-text__show')
      }, 200)
    }
  }

  /* 鼠标移入时 */
  private onMouseEnter = () => {
    const { mainItem } = this.mainElement
    mainItem.style.opacity = '1'
  }

  /* 鼠标移出时 */
  private onMouseLeave = () => {
    const { mainItem } = this.mainElement
    mainItem.style.opacity = '0.85'
  }

  private onClick = () => {
    const mode = this.measureController.getCurrentMode()
    mode === 'Watch' ? this.measureController.changeMode('Edit') : this.measureController.save().changeMode('Watch')
  }

  private modeChangeHandler: PanoMeasurePluginEvent['modeChange'] = (mode) => {
    mode === 'Watch' ? this.change2Add() : this.change2Done()
  }
}
