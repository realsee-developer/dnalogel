var C = Object.defineProperty, F = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var u = (d, n, t) => n in d ? C(d, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : d[n] = t, l = (d, n) => {
  for (var t in n || (n = {}))
    A.call(n, t) && u(d, t, n[t]);
  if (g)
    for (var t of g(n))
      x.call(n, t) && u(d, t, n[t]);
  return d;
}, m = (d, n) => F(d, E(n));
var o = (d, n, t) => (u(d, typeof n != "symbol" ? n + "" : n, t), t);
var f = (d, n, t) => new Promise((e, i) => {
  var s = (h) => {
    try {
      a(t.next(h));
    } catch (p) {
      i(p);
    }
  }, r = (h) => {
    try {
      a(t.throw(h));
    } catch (p) {
      i(p);
    }
  }, a = (h) => h.done ? e(h.value) : Promise.resolve(h.value).then(s, r);
  a((t = t.apply(d, n)).next());
});
import * as S from "three";
import { equal as y } from "../../shared-utils/equal.js";
import { Main as I } from "../Components/Main.js";
import { formatData as v } from "../utils/formatData.js";
import { CAMERA_IMAGE as L } from "../Assets/camera.js";
import { omit as T } from "../../shared-utils/filter.js";
import { FLOOR_PLAN_ATTACHED_TO as _ } from "../constant.js";
import { Controller as M } from "../../base/BasePluginWithData.js";
import { changeMode as P } from "../../shared-utils/five/changeMode.js";
import { getPxmm as D, getAttachedY as O } from "../../shared-utils/getPxmm.js";
import { changeModelCanvasOpacity as b } from "../../shared-utils/changeModelCanvasOpacity.js";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/three/core/Sphere.js";
import "animejs";
import { isNil as k } from "../../shared-utils/isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../shared-utils/isTruelyObject.js";
import "../../vendor/svelte/internal/index.js";
import "../../vendor/svelte/transition/index.js";
import "../../vendor/svelte/easing/index.js";
import "../Components/CurrentFloor.js";
import "../../vendor/svelte/store/index.js";
import "../Components/BaseImage.js";
import "../Components/Normalmage.js";
import "../Components/SvgImage.js";
import "../Components/RoomLabels/RoomLabels.js";
import "../Components/RoomLabels/RoomLabel.js";
import "../../shared-utils/svelte/resizeObserver.js";
import "../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "../Components/RuleLabels/RuleLabels.js";
import "../Components/RuleLabels/RuleItem.js";
import "../Components/RoomMaterials/RoomMaterial.js";
import "../utils/formatPosition.js";
import "../Components/RoomMaterials/RoomMaterial_0.js";
import "../Components/RoomMaterials/RoomMaterial_1.js";
import "../Components/RoomMaterials/RoomMaterial_2.js";
import "../Components/RoomHighlight/RoomHighlight.js";
import "../Components/RoomHighlight/Room.js";
import "../Components/MissingFloor.js";
import "../Components/Camera.js";
import "../../shared-utils/math/rad2Deg.js";
import "../Components/Compass.js";
import "../Assets/compass.js";
import "../Assets/floorplanExtraObject.js";
import "../../shared-utils/tap.js";
import "../../base/BasePlugin.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/url/absoluteUrl.js";
import "../../shared-utils/nearlyEqual.js";
import "../../shared-utils/to.js";
import "../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../vendor/three/build/three.module.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/dom/resizeObserver.js";
class Jt extends M {
  constructor(t, e) {
    var h, p;
    super(t);
    // =============== public properties =================
    o(this, "name", "topviewFloorplanPlugin");
    o(this, "state");
    // =============== private properties =================
    o(this, "data");
    o(this, "app");
    o(this, "selector");
    o(this, "panoIndex", 0);
    o(this, "floorIndex", 0);
    /** 户型图父容器 */
    o(this, "wrapper");
    /** 户型图主容器 */
    o(this, "container", document.createElement("div"));
    /** 展示户型图图前，Five 的 Panorama Longitude */
    o(this, "lastPanoramaLongitude", 0);
    /** 户型图大小 */
    o(this, "size", { width: 0, height: 0 });
    o(this, "defaultMissingFloorConfig");
    /** 是否已经执行过事件监听 */
    o(this, "hasAddedEventListener", !1);
    /** 上一次隐藏是否是用户调用了 hide 导致的 */
    o(this, "isHiddenByHideFunc", !1);
    /** 高亮区域 */
    o(this, "highlightData", {});
    /** 更新户型图大小 */
    o(this, "updateSize", () => {
      if (!this.data || !this.container || !this.wrapper || this.five.getCurrentState().mode !== "Topview")
        return !1;
      const { min: t, max: e } = this.data.bounding, i = e.x - t.x, s = e.y - t.y, r = this.state.config.attachedTo ? { attachedTo: this.state.config.attachedTo } : void 0, a = D(this.five, this.wrapper, this.floorIndex, r), h = Math.ceil(i * a), p = Math.ceil(s * a);
      return this.size.width === h && this.size.height === p || (this.container.style.width = h + "px", this.container.style.height = p + "px", this.size = { width: h, height: p }), !0;
    });
    /** 销毁插件 */
    o(this, "dispose", () => {
      var t, e;
      this.removeEventListener(), (t = this.app) == null || t.$destroy(), this.app = void 0, (e = this.container) == null || e.remove(), this.data = void 0, this.wrapper = void 0, this.selector = void 0, this.hooks.emit("dispose");
    });
    o(this, "highlight", (t) => {
      this.state.config.highlightEnable && (this.highlightData = t, this.render());
    });
    o(this, "unhighlight", () => {
      this.highlightData = {}, this.render();
    });
    o(this, "_disable", (t) => {
      var i, s;
      const { userAction: e } = t;
      (i = this.app) == null || i.$destroy(), this.app = void 0, (s = this.container) == null || s.remove(), this.removeEventListener(), this.hooks.emit("disable", { userAction: e });
    });
    /** modelLoaded 之后自动执行 append container 操作  */
    o(this, "onFiveModelLoaded", () => {
      if (this.state.enabled === !1 || this.wrapper || !this.selector)
        return;
      const t = this.selector instanceof Element ? this.selector : document.querySelector(this.selector);
      if (!t)
        throw new Error("不正确的父容器选择器");
      this.wrapper = t, t.append(this.container);
    });
    /** 非 Topview 态隐藏户型图 */
    o(this, "onFiveModeChange", (...[t, , , , e]) => {
      t !== "Topview" && this.state.visible && (this.updateState({ visible: !1 }, e), this._hide({ userAction: e }));
    });
    o(this, "onFivePanoArrived", (t) => {
      var e;
      (e = this.five) != null && e.work && (this.panoIndex = t, this.floorIndex = this.five.work.observers[t].floorIndex);
    });
    o(this, "onFiveCameraUpdate", (t, e) => {
      this.state.visible && (this.updatePosition(), this.updateSize());
    });
    o(this, "onFiveWantsGesture", (t) => {
      if (!(t !== "pan" && t !== "pinch" && t !== "mouseWheel") && this.state.visible && !this.state.config.gestureEnable)
        return !1;
    });
    o(this, "onFiveWantsMoveToPano", () => {
      if (this.state.visible && this.state.config.preventRoomClick)
        return !1;
    });
    /** 动画结束后是 Topview 态就展示户型图 */
    o(this, "onFiveInitAnimationEnded", (...[, , t]) => {
      const { mode: e } = this.five.getCurrentState();
      e === "Topview" && !this.isHiddenByHideFunc && !this.state.visible && this.state.config.autoShowEnable && (this.updateState({ visible: !0 }, t), this._show({ userAction: t }));
    });
    o(this, "onModelShownFloorChange", (t) => {
      if (this.floorIndex !== t) {
        if (t === null) {
          const e = this.five.getCurrentState().panoIndex;
          this.floorIndex = this.five.work.observers[e].floorIndex;
          return;
        }
        this.floorIndex = t, this.updateSize(), this.render();
      }
    });
    e != null && e.selector && (this.selector = e.selector, console.warn("不推荐继续使用 params.selector 配置父容器，请使用 appendTo 方法")), this.defaultMissingFloorConfig = {
      imageURL: this.staticPrefix + "/release/web/saas/missing-floorplan.e274c596.png",
      imageWidth: 200,
      imageHeight: 120,
      text: (p = (h = e.i18n) == null ? void 0 : h.call(e, "暂无平面图")) != null ? p : "暂无平面图",
      textFontSize: 14
    };
    const i = {
      northDesc: "北",
      modelOpacity: 1,
      cameraEnable: !0,
      hoverEnable: !0,
      highlightEnable: !1,
      compassEnable: !0,
      gestureEnable: !1,
      autoShowEnable: !0,
      ruleLabelsEnable: !0,
      roomLabelsEnable: !0,
      roomAreaEnable: !0,
      roomNameEnable: !0,
      roomDimensionEnable: !0,
      cameraImageUrl: L,
      attachedTo: _.BOUNDING_CENTER,
      getLabelElement: void 0,
      missingFloorConfig: l(l({}, this.defaultMissingFloorConfig), e.missingFloorConfig),
      i18n: (c) => c,
      adaptiveRoomLabelVisibleEnable: !0,
      getRoomAreaText: (c) => (c / 1e6).toFixed(1) + "㎡",
      getRoomDimensionText: (c, w) => (c / 1e3).toFixed(1) + "m × " + (w / 1e3).toFixed(1) + "m",
      getRuleDistanceText: (c) => c.toString()
    }, s = e ? T(e, ["selector", "scale"]) : {}, r = l(l({}, i.missingFloorConfig), s.missingFloorConfig), a = m(l(l({}, i), s), { missingFloorConfig: r });
    this.state = { enabled: !0, visible: !1, config: a }, this.initContainer(), t.model.loaded ? this.onFiveModelLoaded() : t.once("modelLoaded", this.onFiveModelLoaded), t.once("dispose", this.dispose), this.addEventListener();
  }
  load(t, e, i = !0) {
    return f(this, null, function* () {
      function s(c) {
        return Object.prototype.hasOwnProperty.apply(c, ["version"]);
      }
      const r = t;
      r && k(r.version) && console.warn("传入 serverData.data 的方式后续可能不再支持，请把 serverData 整体传入 load 函数");
      const a = JSON.parse(JSON.stringify(t)), h = s(a) ? a.data : a, p = this.data;
      this.data = yield v(h), this.hooks.emit("dataLoaded", this.data), this.hooks.emit("dataChange", this.data, p), e && this.updateState(e, i), this.render();
    });
  }
  /** 更新户型图位置 */
  updatePosition() {
    var a;
    const t = O(this.five, this.floorIndex, this.state.config.attachedTo), e = (a = this.five.model) == null ? void 0 : a.bounding.getCenter(new S.Vector3()).setY(t);
    if (!e)
      return;
    const i = e.clone().project(this.five.camera), s = (i.x + 1) / 2, r = -(i.y - 1) / 2;
    this.container.style.left = s * 100 + "%", this.container.style.top = r * 100 + "%";
  }
  /** 把插件的渲染DOM插入到对应的容器中去 */
  appendTo(t) {
    if (this.wrapper = t, !!this.state.enabled)
      return t.appendChild(this.container), this.render(), this;
  }
  show() {
    return f(this, arguments, function* (t = {}) {
      if (this.state.visible)
        return;
      const e = t.userAction !== void 0 ? t.userAction : !0;
      this.updateState({ visible: !0 }, e), this._show({ userAction: e });
    });
  }
  hide() {
    return f(this, arguments, function* (t = {}) {
      if (this.isHiddenByHideFunc = !0, !this.state.visible)
        return;
      const e = t.userAction !== void 0 ? t.userAction : !0;
      this.updateState({ visible: !1 }, e), this._hide({ userAction: e });
    });
  }
  enable(t = {}) {
    if (this.state.enabled)
      return;
    const e = t.userAction !== void 0 ? t.userAction : !0;
    this.updateState({ enabled: !0 }, t.userAction || e), this._enable({ userAction: e });
  }
  disable(t = {}) {
    if (!this.state.enabled)
      return;
    const e = t.userAction !== void 0 ? t.userAction : !0;
    this.updateState({ enabled: !1 }, t.userAction || e), this._disable({ userAction: e });
  }
  /** 更改插件 State */
  setState(t, e = {}) {
    const i = this.state, s = e.userAction !== void 0 ? e.userAction : !0;
    if (this.updateState(t, s), t.enabled !== void 0 && i.enabled !== t.enabled) {
      const r = { userAction: s };
      t.enabled ? this._enable(r) : this._disable(r);
    }
    if (t.visible !== void 0 && i.visible !== t.visible) {
      const r = { userAction: s };
      t.visible ? this._show(r) : this._hide(r);
    }
  }
  changeConfigs(t, e = !0) {
    this.updateState({ config: t }, e), this.render();
  }
  formatData(t) {
    return f(this, null, function* () {
      return yield v(t.data);
    });
  }
  _show(t) {
    return f(this, null, function* () {
      if (!this.state.enabled)
        return;
      this.isHiddenByHideFunc = !1;
      const { userAction: e } = t;
      this.hooks.emit("show", { userAction: e, auto: !1 }), this.five.getCurrentState().mode !== "Topview" && (yield P(this.five, ["Topview", void 0, void 0, e])), this.five.model.show(this.floorIndex), this.updatePosition(), this.updateSize();
      const i = 500, s = this.state.config.modelOpacity;
      b(this.five, s, i), this.hooks.emit("showAnimationEnded", { userAction: e, auto: !1 }), this.render();
    });
  }
  _hide(t) {
    return f(this, null, function* () {
      if (!this.state.enabled)
        return;
      const { userAction: e } = t;
      this.hooks.emit("hide", { userAction: e, auto: !1 });
      const i = 1, s = 0;
      b(this.five, i, s), this.render();
    });
  }
  _enable(t) {
    const { userAction: e } = t;
    this.addEventListener(), this.wrapper && this.wrapper.append(this.container), this.hooks.emit("enable", { userAction: e }), this.state.visible && this._show({ userAction: e });
  }
  updateState(t, e) {
    var a;
    const i = this.state, s = (a = t.config) != null && a.missingFloorConfig ? l(l({}, i.config.missingFloorConfig), t.config.missingFloorConfig) : i.config.missingFloorConfig, r = t.config ? m(l(l({}, i.config), t.config), { missingFloorConfig: s }) : i.config;
    this.state = m(l(l({}, this.state), t), { config: r }), !y(this.state, i, { deep: !0 }) && this.hooks.emit("stateChange", { state: this.state, prevState: i, userAction: e });
  }
  addEventListener() {
    if (!this.state.enabled || this.hasAddedEventListener)
      return;
    const t = this.five;
    t.on("modeChange", this.onFiveModeChange), t.on("panoArrived", this.onFivePanoArrived), t.on("cameraUpdate", this.onFiveCameraUpdate), t.on("wantsGesture", this.onFiveWantsGesture), t.on("wantsMoveToPano", this.onFiveWantsMoveToPano), t.on("initAnimationEnded", this.onFiveInitAnimationEnded), t.on("modelShownFloorChange", this.onModelShownFloorChange);
  }
  removeEventListener() {
    const t = this.five;
    this.hasAddedEventListener = !1, t.off("modeChange", this.onFiveModeChange), t.off("panoArrived", this.onFivePanoArrived), t.off("cameraUpdate", this.onFiveCameraUpdate), t.off("wantsGesture", this.onFiveWantsGesture), t.off("wantsMoveToPano", this.onFiveWantsMoveToPano), t.off("initAnimationEnded", this.onFiveInitAnimationEnded), t.off("modelShownFloorChange", this.onModelShownFloorChange);
  }
  /** 如果用户是通过 selector 设置父容器，需要在 modelLoaded 之后把 container 自动放到父容器里
   *
   * - TODO: 等 selector 功能下掉之后删除这个逻辑
   */
  initContainer() {
    this.container.classList.add("floorplan-plugin"), Object.assign(this.container.style, {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate3d(-50%, -50%, 10px)",
      zIndex: 10,
      pointerEvents: "none",
      "will-change": "width, height"
    }), this.five.addExtraElement(this.container);
  }
  render(t) {
    if (!this.state.enabled || !this.container || !this.data || this.size.width === 0)
      return;
    const e = m(l({}, this.state.config), {
      visible: this.state.visible,
      duration: t != null ? t : 0,
      panoIndex: this.panoIndex,
      floorIndex: this.floorIndex,
      floorplanData: this.data,
      lastPanoramaLongitude: this.lastPanoramaLongitude,
      highlightData: this.highlightData
    });
    if (this.app)
      return this.app.$set(e);
    this.app = new I({ target: this.container, intro: !0, props: e });
  }
}
export {
  Jt as Controller
};
