var g = Object.defineProperty, w = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var c = (o, e, t) => e in o ? g(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, n = (o, e) => {
  for (var t in e || (e = {}))
    A.call(e, t) && c(o, t, e[t]);
  if (f)
    for (var t of f(e))
      S.call(e, t) && c(o, t, e[t]);
  return o;
}, u = (o, e) => w(o, v(e));
var s = (o, e, t) => (c(o, typeof e != "symbol" ? e + "" : e, t), t);
var l = (o, e, t) => new Promise((i, r) => {
  var p = (h) => {
    try {
      m(t.next(h));
    } catch (d) {
      r(d);
    }
  }, a = (h) => {
    try {
      m(t.throw(h));
    } catch (d) {
      r(d);
    }
  }, m = (h) => h.done ? i(h.value) : Promise.resolve(h.value).then(p, a);
  m((t = t.apply(o, e)).next());
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
import "../../shared-utils/tag.js";
import "../../shared-utils/positionToVector3.js";
import "three";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/five/fiveEveryReadyListener.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../shared-utils/even.js";
import "../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/CSS3DRender/index.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../shared-utils/three/IObject3D.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../Sculpt/utils/unit.js";
import "../../Sculpt/utils/renderDom.js";
import "../../shared-utils/five/FivePuppet.js";
import "@realsee/five";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../../Sculpt/utils/three/rayOnLine.js";
import "../../shared-utils/url/absoluteUrl.js";
import "../Assets/floorplanExtraObject.js";
class si extends O {
  constructor(t, i) {
    super(t);
    // =============== public properties =================
    s(this, "name", "panoFloorplanRadarPlugin");
    s(this, "state");
    // =============== protected properties =================
    s(this, "data");
    // =============== private properties =================
    s(this, "app");
    s(this, "wrapperSelector", "");
    s(this, "wrapper", null);
    s(this, "disposed", !1);
    s(this, "extraObjects", []);
    s(this, "highlightData", {});
    s(this, "dispose", () => {
      var t;
      this.disposed = !0, (t = this.app) == null || t.$destroy(), this.wrapper = null, this.wrapperSelector = "", this.hooks.emit("dispose");
    });
    s(this, "highlight", (t) => {
      this.state.config.highlightEnable && (this.highlightData = t, this.render());
    });
    s(this, "unhighlight", () => {
      this.highlightData = {}, this.render();
    });
    s(this, "_disable", (t) => {
      var r;
      const { userAction: i } = t;
      (r = this.app) == null || r.$destroy(), this.app = void 0, this.hooks.emit("disable", { userAction: i });
    });
    this.five = t;
    const r = {
      hoverEnable: !1,
      highlightEnable: !1,
      cameraImageUrl: D,
      missingFloorImageUrl: this.staticPrefix + "/release/web/saas/missing-floor.d687a5ed.png"
    }, p = n(n({}, r), i == null ? void 0 : i.configs);
    this.state = { enabled: !0, visible: !0, config: p }, i != null && i.wrapper && console.warn("不推荐继续使用 params.selector 配置父容器，请使用 appendTo 方法"), typeof (i == null ? void 0 : i.wrapper) == "string" ? this.wrapperSelector = i.wrapper : (i == null ? void 0 : i.wrapper) instanceof Element && (this.wrapper = i.wrapper), t.once("dispose", this.dispose);
  }
  load(t, i, r = !0) {
    return l(this, null, function* () {
      function p(d) {
        return Object.prototype.hasOwnProperty.apply(d, ["version"]);
      }
      const a = JSON.parse(JSON.stringify(t)), m = p(a) ? a.data : a, h = this.data;
      this.data = yield b(m), this.hooks.emit("dataLoaded", this.data), this.hooks.emit("dataChange", this.data, h), i && this.updateState(i, r), this.render();
    });
  }
  show() {
    return l(this, arguments, function* (t = {}) {
      if (this.state.visible)
        return;
      const i = t.userAction !== void 0 ? t.userAction : !0;
      this.updateState({ visible: !0 }, i), this._show({ userAction: i });
    });
  }
  hide() {
    return l(this, arguments, function* (t = {}) {
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
    const r = this.state, p = i.userAction !== void 0 ? i.userAction : !0;
    if (this.updateState(t, p), t.enabled !== void 0 && r.enabled !== t.enabled) {
      const a = { userAction: p };
      t.enabled ? this._enable(a) : this._disable(a);
    }
    if (t.visible !== void 0 && r.visible !== t.visible) {
      const a = { userAction: p };
      t.visible ? this._show(a) : this._hide(a);
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
    return l(this, null, function* () {
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
    const r = this.state, p = t.config ? n(n({}, r.config), t.config) : r.config;
    this.state = u(n(n({}, this.state), t), { config: p }), !y(this.state, r, { deep: !0 }) && this.hooks.emit("stateChange", { state: this.state, prevState: r, userAction: i });
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
    const t = u(n({}, this.state.config), {
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
  si as Controller
};
