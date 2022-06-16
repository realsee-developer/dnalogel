import type MeasureController from '../../Controller'
import htmlString from './HTML'
import mobileHTMLString from './mobileHTML'
import {
  uiWrapperStyle,
  operatingSpaceStyle,
  controllerBackgroundStyle,
  buttonGroupStyle,
  exitIconStyle,
  exitItemStyle,
  textStyle,
} from './style'
import { MainBtnController } from './MainBtnController'
import { NewMainBtnController } from './NewMainBtnController'
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
  private mainController?: MainBtnController | NewMainBtnController
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
    const UIItems = this.container.querySelectorAll<HTMLDivElement>('.fpm__ui-item')
    const bgDom = this.container.querySelector<HTMLSpanElement>('.fpm_ui-bg')
    const operatingSpaceDom = this.container.querySelector<HTMLSpanElement>('.fpm_operating-space')

    Object.assign(bgDom?.style, controllerBackgroundStyle)
    Object.assign(operatingSpaceDom?.style, operatingSpaceStyle)
    Object.assign(this.container.style, uiWrapperStyle)
    UIItems.forEach((item) => Object.assign(item.style, buttonGroupStyle))
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
      this.mainController = new NewMainBtnController(this.measureController, this.container)
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
    const onMouseLeave = () => (exitItem.style.opacity = '0.7')
    const handleClick = () => {
      this.measureController.disable()
    }

    exitIcon.addEventListener('click', handleClick)
    exitIcon.addEventListener('mouseenter', onMouseEnter)
    exitIcon.addEventListener('mouseleave', onMouseLeave)

    return () => {
      exitIcon.removeEventListener('click', handleClick)
      exitIcon.removeEventListener('mouseenter', onMouseEnter)
      exitIcon.removeEventListener('mouseleave', onMouseLeave)
    }
  }
}
