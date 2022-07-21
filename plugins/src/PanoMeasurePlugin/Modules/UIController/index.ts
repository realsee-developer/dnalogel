import type MeasureController from '../../Controller'
import htmlString from './HTML'
import mobileHTMLString from './mobileHTML'
import {
  uiWrapperStyle,
  operatingSpaceStyle,
  controllerBackgroundStyle,
  exitIconStyle,
  exitItemStyle,
  textStyle,
} from './style'
import { MainBtnController } from './MainBtnController'
import { mobileMainBtnController } from './mobileMainBtnController'
import Revoke from './Revoke'
import type { OpenParameter } from '../../typings/data'

export interface UIControllerParams {
  container: Element
  openParams?: OpenParameter
}

export type UIMode = 'pc' | 'mobile'

export class UIController {
  private revoke?: Revoke
  private container: HTMLDivElement
  private mainController?: MainBtnController | mobileMainBtnController
  private disposers: (() => unknown)[] = []
  private measureController: MeasureController
  private mode: UIMode

  constructor(measureController: MeasureController, params: UIControllerParams) {
    this.measureController = measureController
    this.mode = params.openParams?.isMobile ? 'mobile' : 'pc'
    this.container = document.createElement('div')
    this.container.innerHTML = params.openParams?.isMobile ? mobileHTMLString : htmlString
    this.container.classList.add('fpm__ui-controller', this.mode)
    params.container.appendChild(this.container)

    const textDoms = this.container.querySelectorAll<HTMLSpanElement>('.fpm__text')
    const bgDom = this.container.querySelector<HTMLSpanElement>('.fpm_ui-bg')
    const operatingSpaceDom = this.container.querySelector<HTMLSpanElement>('.fpm_operating-space')

    Object.assign(bgDom?.style, controllerBackgroundStyle)
    Object.assign(operatingSpaceDom?.style, operatingSpaceStyle)
    Object.assign(this.container.style, uiWrapperStyle)
    textDoms.forEach((item) => Object.assign(item.style, textStyle))
  }

  public dispose() {
    this.hide()
    this.container.remove()
  }

  public show() {
    this.container.style.display = 'block'
    this.container.style.opacity = '1'
    this.container.style.transform = 'translate(0, 0)'
    if (this.mode === 'pc') {
      this.revoke = new Revoke(this.measureController, this.container)
      this.mainController = new MainBtnController(this.measureController, this.container)
    } else {
      this.mainController = new mobileMainBtnController(this.measureController, this.container)
    }
    this.disposers.push(this.handleExit())
    return this
  }

  public hide() {
    this.container.style.display = 'none'
    this.container.style.opacity = '0'
    this.container.style.transform = 'translate(0, 10px)'
    this.mode === 'pc' && this.revoke?.dispose()
    this.mainController?.dispose()
    this.disposers.forEach((disposer) => disposer())
    this.disposers = []
    return this
  }

  private handleExit = () => {
    const exitIcon = this.container.querySelector<HTMLElement>('.fpm__exit-icon')
    const exitItem = this.container.querySelector<HTMLButtonElement>('.fpm__exit')
    if (!exitItem || !exitIcon) throw new Error('cannot find dom')

    if (this.mode === 'pc') {
      Object.assign(exitItem.style, exitItemStyle)
      Object.assign(exitIcon?.style, exitIconStyle)
    }

    const onMouseEnter = () => (exitItem.style.opacity = '1')
    const onMouseLeave = () => (exitItem.style.opacity = '0.85')
    const handleClick = () => {
      this.measureController.disable()
    }

    exitItem.addEventListener('click', handleClick)
    exitItem.addEventListener('mouseenter', onMouseEnter)
    exitItem.addEventListener('mouseleave', onMouseLeave)

    return () => {
      exitItem.removeEventListener('click', handleClick)
      exitItem.removeEventListener('mouseenter', onMouseEnter)
      exitItem.removeEventListener('mouseleave', onMouseLeave)
    }
  }
}
