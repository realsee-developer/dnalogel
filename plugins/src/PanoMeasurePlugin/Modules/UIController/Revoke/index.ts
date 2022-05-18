import type { Mode } from '../../../Controller'
import type MeasureController from '../../../Controller'

export default class Revoke {
  private container: Element
  private revokeIcon: HTMLElement
  private revokeItem: HTMLDivElement
  private measureController: MeasureController

  constructor(measureController: MeasureController, container: Element) {
    this.measureController = measureController
    this.container = container

    const revokeIcon = this.container.querySelector<HTMLElement>('.fpm__revoke-icon')
    const revokeItem = this.container.querySelector<HTMLDivElement>('.fpm__revoke')
    if (!revokeIcon || !revokeItem) throw new Error('不正确的选择器')
    this.revokeIcon = revokeIcon
    this.revokeItem = revokeItem
    this.revokeIcon.addEventListener('click', this.onClick)
    measureController.hook.on('modeChange', this.onModeChange)
  }

  dispose() {
    this.revokeIcon.removeEventListener('click', this.onClick)
    this.measureController.hook.off('modeChange', this.onModeChange)
  }

  onClick = () => {
    this.measureController.revoke()
  }

  onModeChange = (mode: Mode) => {
    if (mode !== 'Edit') {
      this.revokeItem.classList.remove('enabled')
      return
    }
    this.revokeItem.classList.add('enabled')
  }

  handleRevoke = () => {
    return () => {}
  }
}
