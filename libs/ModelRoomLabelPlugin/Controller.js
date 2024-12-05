var s = Object.defineProperty;
var n = (i, e, o) => e in i ? s(i, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[e] = o;
var t = (i, e, o) => (n(i, typeof e != "symbol" ? e + "" : e, o), o);
import r from "./RoomLabelItems.js";
import { parseModelRoomLabelPluginData as a } from "./utils/parseData.js";
import "../vendor/svelte/internal/index.js";
import "three";
import "./RoomLabelItem.js";
import "./Assets/roomLabelBg.js";
import "../shared-utils/svelte/resizeObserver.js";
import "../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
class u {
  constructor(e) {
    t(this, "five");
    t(this, "enabled", !0);
    t(this, "fiveModeEnabled");
    t(this, "app");
    t(this, "wrapper");
    t(this, "roomLabels", []);
    t(this, "container", document.createElement("div"));
    /** 监听 Five Mode 变化
     * @description
     * Mode 不符合要求时，立刻消失，满足要求时，需要等待动画结束再展示
     */
    t(this, "onFiveModeChange", (e) => {
      if (!this.checkFiveMode(e)) {
        this.fiveModeEnabled = !1, this.render();
        return;
      }
      this.five.once("initAnimationEnded", () => {
        this.fiveModeEnabled = this.checkFiveMode(this.five.getCurrentState().mode), this.render();
      });
    });
    this.five = e, this.fiveModeEnabled = this.checkFiveMode(e.getCurrentState().mode), this.container.classList.add("model-room-label-plugin-container"), this.container.style.width = "100%", this.container.style.height = "100%", this.container.style.position = "absolute", this.container.style.pointerEvents = "none", this.container.style.left = "0", this.container.style.top = "0", this.container.style.zIndex = "5", this.five.once("dispose", () => this.dispose()), this.five.on("modeChange", this.onFiveModeChange), this.render();
  }
  dispose() {
    this.five.off("modeChange", this.onFiveModeChange), this.container.remove();
  }
  /** 加载数据 */
  load(e) {
    this.roomLabels = a(e), this.render();
  }
  /** 设置插件容器 */
  appendTo(e) {
    return this.wrapper = e, e.appendChild(this.container), this.render(), this;
  }
  /** 禁用插件功能
   * @description
   * - 如果当前正在展示中，会清除所有展示的 DOM
   * - 如果当前未展示，即使后续 Five 状态满足展示要求，也不会展示
   * */
  disable() {
    return this.enabled = !1, this.render(), this;
  }
  /** 启用插件功能
   * @description
   * - 如果当前符合展示条件，会立刻展示
   * - 如果不符合展示条件，会等待 Five 状态满足条件后再展示
   */
  enable() {
    return this.enabled = !0, this.render(), this;
  }
  /** 检测 Five Mode 是否满足展示条件 */
  checkFiveMode(e) {
    return e === "Floorplan" || e === "Mapview";
  }
  render() {
    var e;
    if (this.wrapper) {
      if (!this.enabled || !this.fiveModeEnabled) {
        (e = this.app) == null || e.$destroy(), this.app = void 0;
        return;
      }
      this.app ? this.app.$set({ five: this.five, roomLabels: this.roomLabels }) : this.app = new r({
        target: this.container,
        props: {
          five: this.five,
          roomLabels: this.roomLabels
        }
      });
    }
  }
}
export {
  u as ModelRoomLabelController
};
