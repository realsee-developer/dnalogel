var e = Object.defineProperty;
var s = (o, t, i) => t in o ? e(o, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[t] = i;
var r = (o, t, i) => (s(o, typeof t != "symbol" ? t + "" : t, i), i);
import { Subscribe as m } from "../shared-utils/Subscribe.js";
import "../shared-utils/tag.js";
import "three";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../shared-utils/three/blink.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../vendor/earcut/src/earcut.js";
import { FiveUtil as l } from "../shared-utils/Utils/FiveUtil.js";
import { DEFAULT_STATIC_PREFIX as p } from "../shared-utils/url/defaultUrls.js";
import "../shared-utils/five/FivePuppet.js";
let I = class {
  constructor(t, i) {
    /**
     * @realsee/dnalogel 版本号
     */
    r(this, "VERSION", "3.80.1");
    r(this, "NAME");
    r(this, "five");
    r(this, "workUtil");
    r(this, "fiveUtil");
    /**
     * @description: 插件事件钩子
     */
    r(this, "hooks", new m());
    r(this, "staticPrefix", p);
    this.five = t, this.fiveUtil = new l(t), this.workUtil = this.fiveUtil.workUtil, i != null && i.staticPrefix && (this.staticPrefix = i.staticPrefix);
  }
  set workCode(t) {
    this.workUtil.workCode = t, this.onWorkCodeChange();
  }
  get workCode() {
    return this.workUtil.workCode;
  }
  updateFive(t) {
    this.five = t, this.fiveUtil.five = t, this.workUtil.five = t;
  }
  /**
   * 获取当前的插件状态，如果当初插件内存在需要通过动画变更的 state 值，则通过此方法可以得到中间状态
   */
  getCurrentState() {
    return this.state;
  }
  onWorkCodeChange() {
  }
};
export {
  I as Controller
};
