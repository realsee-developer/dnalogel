var o = Object.defineProperty;
var s = (i, t, r) => t in i ? o(i, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[t] = r;
var e = (i, t, r) => (s(i, typeof t != "symbol" ? t + "" : t, r), r);
import { Subscribe as l } from "../shared-utils/Subscribe.js";
import "hammerjs";
import "three";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { absoluteUrl as a } from "../shared-utils/url/absoluteUrl.js";
import { FiveUtil as h } from "../shared-utils/Utils/FiveUtil.js";
let v = class {
  constructor(t, r) {
    /**
     * @realsee/dnalogel 版本号
     */
    e(this, "VERSION", "3.41.7");
    e(this, "NAME");
    e(this, "five");
    e(this, "workUtil");
    e(this, "fiveUtil");
    /**
     * @description: 插件事件钩子
     */
    e(this, "hooks", new l());
    e(this, "staticPrefix", "//vr-image-4.realsee-cdn.cn");
    this.updateFive(t), r != null && r.staticPrefix && (this.staticPrefix = r.staticPrefix);
  }
  set workCode(t) {
    this.workUtil.workCode = t, this.onWorkCodeChange();
  }
  get workCode() {
    return this.workUtil.workCode;
  }
  updateFive(t) {
    this.five = t, this.fiveUtil = new h(t), this.workUtil = this.fiveUtil.workUtil;
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
    return a(this.staticPrefix, t);
  }
  onWorkCodeChange() {
  }
};
export {
  v as Controller
};
