import { Controller } from './Controller'
import type { PaintBrushAction, PaintBrushConfigs, PaintBrushEventMap, PaintBrushState } from './typings'

export class PaintBrush {

  private controller: Controller

  constructor(configs: Partial<PaintBrushConfigs> = {}) {
    const _configs = Object.assign({
      currentColor: '#f44336',
      onUndoText: '回退',
      onExitText: '关闭'
    }, configs)

    this.controller = new Controller(_configs)
  }

  on<K extends keyof PaintBrushEventMap>(name: K,
    callback: (...args: Parameters<PaintBrushEventMap[K]>) => ReturnType<PaintBrushEventMap[K]>)
  {
    this.controller.on(name, callback)
  }

  off<K extends keyof PaintBrushEventMap>(name: K,
    callback: (...args: Parameters<PaintBrushEventMap[K]>) => ReturnType<PaintBrushEventMap[K]>)
  {
    this.controller.off(name, callback)
  }


  once<K extends keyof PaintBrushEventMap>(name: K,
    callback: (...args: Parameters<PaintBrushEventMap[K]>) => ReturnType<PaintBrushEventMap[K]>)
  {
    this.controller.once(name, callback)
  }

  /**
   * 显示画笔。
   */
  show() {
    this.controller.openBrush()
  }

  action(action: PaintBrushAction) {
    this.controller.action(action)
  }

  /**
   * 获取画笔状态。
   */
  get state() {
    return this.controller.state
  }

  get configs() {
    return this.controller.configs
  }

  /**
   * 销毁。
   *
   * @deprecated
   *
   * @description 画笔应该维护一个 **全局单例**，重复利用。
   */
  dispose() {
    return this.controller.destroyBrush()
  }

  setCurrentColor(color: string) {
    this.controller.updateCurrentColor(color)
  }
}
