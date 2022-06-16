import type MeasureController from '../../Controller'
import type { PanoMeasurePluginEvent } from '../../typings/event.type'
import { newMainIconStyle, newMainItemStyle } from './style'

export class NewMainBtnController {
  private container: Element
  private measureController: MeasureController
  private mainElement: ReturnType<NewMainBtnController['getMainElement']>

  public constructor(measureController: MeasureController, container: Element) {
    this.measureController = measureController
    this.container = container
    this.mainElement = this.getMainElement()

    Object.assign(this.mainElement.mainIcon.style, newMainIconStyle)
    Object.assign(this.mainElement.mainItem.style, newMainItemStyle)
    this.change2Add()

    this.mainElement.mainItem.addEventListener('click', this.onClick)
  }

  public dispose() {
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
    const { mainTextDom, mainIcon } = this.mainElement
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

  private onClick = () => {
    if( this.mainElement.mainTextDom.innerText === '开始'){
      this.measureController.hook.emit('willChangeState', 'watching', 'editing')
      this.change2Done()
    }else{
      this.measureController.hook.emit('willChangeState', 'editing', 'watching')
      this.change2Add()
    }
  }
}
