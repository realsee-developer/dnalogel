var g = Object.defineProperty, w = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var u = (r, e, t) => e in r ? g(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, p = (r, e) => {
  for (var t in e || (e = {}))
    A.call(e, t) && u(r, t, e[t]);
  if (m)
    for (var t of m(e))
      S.call(e, t) && u(r, t, e[t]);
  return r;
}, f = (r, e) => w(r, v(e));
var o = (r, e, t) => (u(r, typeof e != "symbol" ? e + "" : e, t), t);
var c = (r, e, t) => new Promise((i, s) => {
  var a = (n) => {
    try {
      d(t.next(n));
    } catch (l) {
      s(l);
    }
  }, h = (n) => {
    try {
      d(t.throw(n));
    } catch (l) {
      s(l);
    }
  }, d = (n) => n.done ? i(n.value) : Promise.resolve(n.value).then(a, h);
  d((t = t.apply(r, e)).next());
});
import _ from "./Components/Main.js";
import { equal as y } from "../../shared-utils/equal.js";
import { CAMERA_IMAGE as D } from "../Assets/camera.js";
import { Controller as O } from "../../base/BasePluginWithData.js";
import { formatData as b, formatExtraObjects as x } from "../utils/formatData.js";
import "../../vendor/svelte/internal/index.js";
import "./Components/Camera.js";
import "../../shared-utils/throttle.js";
import "./Components/CurrentFloor/CurrentFloor.js";
import "./Components/CurrentFloor/ExtraObjects.js";
import "../Components/BaseImage.js";
import "../Components/Normalmage.js";
import "../Components/SvgImage.js";
import "../Components/RoomHighlight/RoomHighlight.js";
import "../Components/RoomHighlight/Room.js";
import "../utils/formatPosition.js";
import "../../shared-utils/svelte/resizeObserver.js";
import "../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "../../shared-utils/isTruelyObject.js";
import "../../base/BasePlugin.js";
import "../../shared-utils/Subscribe.js";
import "hammerjs";
import "three";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/positionToVector3.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/even.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import "../../shared-utils/url/absoluteUrl.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/five/getFiveModel.js";
import "../Assets/floorplanExtraObject.js";
class St extends O {
  constructor(t, i) {
    super(t);
    // =============== public properties =================
    o(this, "name", "panoFloorplanRadarPlugin");
    o(this, "state");
    // =============== protected properties =================
    o(this, "data");
    // =============== private properties =================
    o(this, "app");
    o(this, "wrapperSelector", "");
    o(this, "wrapper", null);
    o(this, "disposed", !1);
    o(this, "extraObjects", []);
    o(this, "highlightData", {});
    o(this, "dispose", () => {
      var t;
      this.disposed = !0, (t = this.app) == null || t.$destroy(), this.wrapper = null, this.wrapperSelector = "", this.hooks.emit("dispose");
    });
    o(this, "highlight", (t) => {
      this.state.config.highlightEnable && (this.highlightData = t, this.render());
    });
    o(this, "unhighlight", () => {
      this.highlightData = {}, this.render();
    });
    o(this, "_disable", (t) => {
      var s;
      const { userAction: i } = t;
      (s = this.app) == null || s.$destroy(), this.app = void 0, this.hooks.emit("disable", { userAction: i });
    });
    this.five = t;
    const s = {
      hoverEnable: !0,
      highlightEnable: !0,
      cameraImageUrl: D,
      missingFloorImageUrl: this.staticPrefix + "/release/web/saas/missing-floor.d687a5ed.png"
    }, a = p(p({}, s), i == null ? void 0 : i.configs);
    this.state = { enabled: !0, visible: !0, config: a }, i != null && i.wrapper && console.warn("不推荐继续使用 params.selector 配置父容器，请使用 appendTo 方法"), typeof (i == null ? void 0 : i.wrapper) == "string" ? this.wrapperSelector = i.wrapper : (i == null ? void 0 : i.wrapper) instanceof Element && (this.wrapper = i.wrapper), t.once("dispose", this.dispose);
  }
  load(t, i, s = !0) {
    return c(this, null, function* () {
      function a(l) {
        return Object.prototype.hasOwnProperty.apply(l, ["version"]);
      }
      const h = JSON.parse(JSON.stringify(t)), d = a(h) ? h.data : h, n = this.data;
      this.data = yield b(d), this.hooks.emit("dataLoaded", this.data), this.hooks.emit("dataChange", this.data, n), i && this.updateState(i, s), this.render();
    });
  }
  show() {
    return c(this, arguments, function* (t = {}) {
      if (this.state.visible)
        return;
      const i = t.userAction !== void 0 ? t.userAction : !0;
      this.updateState({ visible: !0 }, i), this._show({ userAction: i });
    });
  }
  hide() {
    return c(this, arguments, function* (t = {}) {
      if (!this.state.visible)
        return;
      const i = t.userAction !== void 0 ? t.userAction : !0;
      this.updateState({ visible: !1 }, i), this._hide({ userAction: i });
    });
  }
  enable(t = {}) {
    if (this.state.enabled)
      return;
    const i = t.userAction !== void 0 ? t.userAction : !0;
    this.updateState({ enabled: !0 }, t.userAction || i), this._enable({ userAction: i });
  }
  disable(t = {}) {
    if (!this.state.enabled)
      return;
    const i = t.userAction !== void 0 ? t.userAction : !0;
    this.updateState({ enabled: !1 }, t.userAction || i), this._disable({ userAction: i });
  }
  /** 更改插件 State */
  setState(t, i = {}) {
    const s = this.state, a = i.userAction !== void 0 ? i.userAction : !0;
    if (this.updateState(t, a), t.enabled !== void 0 && s.enabled !== t.enabled) {
      const h = { userAction: a };
      t.enabled ? this._enable(h) : this._disable(h);
    }
    if (t.visible !== void 0 && s.visible !== t.visible) {
      const h = { userAction: a };
      t.visible ? this._show(h) : this._hide(h);
    }
  }
  /** 把插件的渲染DOM插入到对应的容器中去 */
  appendTo(t) {
    this.wrapper !== t && this.app && (this.app.$destroy(), this.app = void 0), this.wrapper = t, this.render();
  }
  changeConfigs(t, i = !0) {
    this.setState({ config: t }, { userAction: i }), this.render();
  }
  setExtraObjectsWith3DPositions(t) {
    this.data && (this.extraObjects = x(t, this.five, this.data), this.render());
  }
  formatData(t) {
    return c(this, null, function* () {
      return yield b(t.data);
    });
  }
  _enable(t) {
    const { userAction: i } = t;
    this.hooks.emit("enable", { userAction: i }), this.state.visible && this._show({ userAction: i });
  }
  _show(t) {
    if (this.disposed || !this.state.enabled)
      return;
    const { userAction: i } = t;
    this.hooks.emit("show", { userAction: i }), this.render();
  }
  _hide(t) {
    if (this.disposed || !this.state.enabled)
      return;
    const { userAction: i } = t;
    this.hooks.emit("hide", { userAction: i }), this.render();
  }
  updateState(t, i) {
    const s = this.state, a = t.config ? p(p({}, s.config), t.config) : s.config;
    this.state = f(p(p({}, this.state), t), { config: a }), !y(this.state, s, { deep: !0 }) && this.hooks.emit("stateChange", { state: this.state, prevState: s, userAction: i });
  }
  render() {
    if (this.disposed || !this.state.enabled)
      return;
    if (!this.wrapper && this.wrapperSelector) {
      const i = document.querySelector(this.wrapperSelector);
      this.wrapper = i;
    }
    if (!this.data || !this.wrapper)
      return;
    const t = f(p({}, this.state.config), {
      five: this.five,
      floorplanData: this.data,
      visible: this.state.visible,
      extraObjects: this.extraObjects,
      highlightData: this.highlightData
    });
    this.app ? this.app.$set(t) : this.app = new _({ target: this.wrapper, props: t });
  }
}
export {
  St as Controller
};
