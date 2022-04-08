import MeasureController from '.'
import { Five } from '@realsee/five'

/** 快捷键控制器 */
export class ShortcutKeyController {
  five: Five
  measureController: MeasureController

  constructor(measureController: MeasureController, five: Five) {
    this.five = five
    this.measureController = measureController

    const fiveElement = this.five.getElement()
    if (!fiveElement) return
    document.body.addEventListener('keydown', this.onKeyDown)
    fiveElement.addEventListener('mousedown', this.onMouseDown)
  }

  public dispose() {
    const fiveElement = this.five.getElement()
    if (!fiveElement) return
    document.body.removeEventListener('keydown', this.onKeyDown)
    fiveElement.removeEventListener('mousedown', this.onMouseDown)
  }

  private escape() {
    if (this.measureController.getCurrentMode() === 'Watch') return this.measureController.close()
    return this.measureController.changeMode('Watch')
  }

  private onKeyDown = (e: KeyboardEvent) => {
    // Command + S -> 保存 & 更改场景
    if (e.metaKey && e.code === 'KeyS') {
      this.measureController.save().changeMode('Watch')
      e.preventDefault()
      return
    }

    // Escape -> 切换到观察模式 / 如果已经在观察模式，退出功能
    if (e.code === 'Escape') return this.escape()
  }

  private onMouseDown = (e: MouseEvent) => {
    // 鼠标右键取消
    if (e.button !== 2) return
    e.preventDefault()
    this.escape()
  }
}
