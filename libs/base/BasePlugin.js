var e = Object.defineProperty;
var s = (o, t, r) => t in o ? e(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r;
var i = (o, t, r) => (s(o, typeof t != "symbol" ? t + "" : t, r), r);
import { Subscribe as l } from "../shared-utils/Subscribe.js";
import "../shared-utils/tag.js";
import "three";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { FiveUtil as m } from "../shared-utils/Utils/FiveUtil.js";
import { absoluteUrl as p } from "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/five/FivePuppet.js";
let F = class {
  constructor(t, r) {
    /**
     * @realsee/dnalogel 版本号
     */
    i(this, "VERSION", "3.66.2");
    i(this, "NAME");
    i(this, "five");
    i(this, "workUtil");
    i(this, "fiveUtil");
    /**
     * @description: 插件事件钩子
     */
    i(this, "hooks", new l());
    i(this, "staticPrefix", "//vr-image-4.realsee-cdn.cn");
    this.five = t, this.fiveUtil = new m(t), this.workUtil = this.fiveUtil.workUtil, r != null && r.staticPrefix && (this.staticPrefix = r.staticPrefix);
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
  /**
   * @description: 获取静态资源的url
   */
  absoluteUrl(t) {
    return p(this.staticPrefix, t);
  }
  onWorkCodeChange() {
  }
};
export {
  F as Controller
};
