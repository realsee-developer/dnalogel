var e = Object.defineProperty;
var s = (r, o, t) => o in r ? e(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t;
var n = (r, o, t) => (s(r, typeof o != "symbol" ? o + "" : o, t), t);
import { Controller as l } from "./Controller.js";
class h {
  constructor(o = {}) {
    n(this, "controller");
    const t = Object.assign({
      currentColor: "#f44336",
      onUndoText: "回退",
      onExitText: "关闭"
    }, o);
    this.controller = new l(t);
  }
  on(o, t) {
    this.controller.on(o, t);
  }
  off(o, t) {
    this.controller.off(o, t);
  }
  once(o, t) {
    this.controller.once(o, t);
  }
  /**
   * 显示画笔。
   */
  show() {
    this.controller.openBrush();
  }
  action(o) {
    this.controller.action(o);
  }
  /**
   * 获取画笔状态。
   */
  get state() {
    return this.controller.state;
  }
  get configs() {
    return this.controller.configs;
  }
  /**
   * 销毁。
   *
   * @deprecated
   *
   * @description 画笔应该维护一个 **全局单例**，重复利用。
   */
  dispose() {
    return this.controller.destroyBrush();
  }
  setCurrentColor(o) {
    this.controller.updateCurrentColor(o);
  }
}
export {
  h as PaintBrush
};
