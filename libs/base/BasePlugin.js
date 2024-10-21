var o = Object.defineProperty;
var s = (e, t, r) => t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var i = (e, t, r) => (s(e, typeof t != "symbol" ? t + "" : t, r), r);
import { Subscribe as l } from "../shared-utils/Subscribe.js";
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../shared-utils/tag.js";
import "../shared-utils/three/core/Sphere.js";
import "animejs";
import { FiveUtil as a } from "../shared-utils/Utils/FiveUtil.js";
import { absoluteUrl as m } from "../shared-utils/url/absoluteUrl.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
let P = class {
  constructor(t, r) {
    /**
     * @realsee/dnalogel 版本号
     */
    i(this, "VERSION", "3.50.9");
    i(this, "NAME");
    i(this, "five");
    i(this, "workUtil");
    i(this, "fiveUtil");
    /**
     * @description: 插件事件钩子
     */
    i(this, "hooks", new l());
    i(this, "staticPrefix", "//vr-image-4.realsee-cdn.cn");
    this.updateFive(t), r != null && r.staticPrefix && (this.staticPrefix = r.staticPrefix);
  }
  set workCode(t) {
    this.workUtil.workCode = t, this.onWorkCodeChange();
  }
  get workCode() {
    return this.workUtil.workCode;
  }
  updateFive(t) {
    this.five = t, this.fiveUtil = new a(t), this.workUtil = this.fiveUtil.workUtil;
  }
  /**
   * 获取当前的插件状态，如果当初插件内存在需要通过动画变更的 state 值，则通过此方法可以得到中间状态
   */
  getCurrentState() {
    return this.state;
  }
  /**
   * @description: 获取静态资源的url
   */
  absoluteUrl(t) {
    return m(this.staticPrefix, t);
  }
  onWorkCodeChange() {
  }
};
export {
  P as Controller
};
