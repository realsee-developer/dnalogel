var l = Object.defineProperty, m = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var a = (i, e, t) => e in i ? l(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, s = (i, e) => {
  for (var t in e || (e = {}))
    u.call(e, t) && a(i, t, e[t]);
  if (p)
    for (var t of p(e))
      b.call(e, t) && a(i, t, e[t]);
  return i;
}, r = (i, e) => m(i, d(e));
var o = (i, e, t) => (a(i, typeof e != "symbol" ? e + "" : e, t), t);
import { Five as v } from "@realsee/five";
import { Controller as c } from "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../vendor/three/build/three.module.js";
import "../shared-utils/tag.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/three/core/Sphere.js";
import "animejs";
import "../shared-utils/url/absoluteUrl.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
class L extends c {
  constructor(t) {
    super(t);
    o(this, "state");
    o(this, "container");
    o(this, "enabled");
    this.five = t, this.five.once("dispose", this.dispose), this.enabled = !0, this.state = this.initState();
  }
  /**
   * 启用组件
   * @param options
   */
  enable(t) {
    this.enabled = !0, this.updateState(r(s({}, t), { userAction: !0 }));
  }
  /**
   * 禁用组件
   * @param options
   */
  disable(t) {
    this.enabled = !1, this.updateState(r(s({}, t), { userAction: !0 }));
  }
  /**
   * 显示 UI
   * @param options
   * @returns
   */
  show(t) {
    if (this.state.enabled)
      return this.setState(r(s({}, this.state), { visible: !0 }), t), Promise.resolve();
  }
  /**
   * 隐藏 UI
   * @param options
   * @returns
   */
  hide(t) {
    if (this.state.enabled)
      return this.setState(r(s({}, this.state), { visible: !1 }), t), Promise.resolve();
  }
  /**
   * 销毁对象
   */
  dispose() {
    this.container.remove();
  }
  /**
   * 设置状态
   * @param state @T 状态
   * @param options @BaseOptions 可选配置
   * @returns
   */
  setState(t, n) {
    if (!this.enabled)
      return;
    const h = s({}, this.state);
    this.state = s(s(s({}, this.state), t), n), this.stateChangedCallback(h, n);
  }
  get visible() {
    return this.five.state.mode === v.Mode.Panorama;
  }
  appendTo(t) {
    this.enabled && (this.container = t, this.render());
  }
  updateState(t) {
    this.setState(r(s({}, this.state), { enabled: this.enabled, visible: this.visible }), t);
  }
}
export {
  L as BasePanoPluginController
};
