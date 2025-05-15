var C = Object.defineProperty, F = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var u = (d, n, t) => n in d ? C(d, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : d[n] = t, p = (d, n) => {
  for (var t in n || (n = {}))
    A.call(n, t) && u(d, t, n[t]);
  if (g)
    for (var t of g(n))
      x.call(n, t) && u(d, t, n[t]);
  return d;
}, f = (d, n) => F(d, E(n));
var o = (d, n, t) => (u(d, typeof n != "symbol" ? n + "" : n, t), t);
var c = (d, n, t) => new Promise((i, e) => {
  var s = (h) => {
    try {
      a(t.next(h));
    } catch (l) {
      e(l);
    }
  }, r = (h) => {
    try {
      a(t.throw(h));
    } catch (l) {
      e(l);
    }
  }, a = (h) => h.done ? i(h.value) : Promise.resolve(h.value).then(s, r);
  a((t = t.apply(d, n)).next());
});
import * as S from "three";
import { equal as y } from "../../shared-utils/equal.js";
import { Main as T } from "../Components/Main.js";
import { formatData as v } from "../utils/formatData.js";
import { CAMERA_IMAGE as I } from "../Assets/camera.js";
import { omit as L } from "../../shared-utils/filter.js";
import { FLOOR_PLAN_ATTACHED_TO as _ } from "../constant.js";
import { Controller as M } from "../../base/BasePluginWithData.js";
import { changeMode as P } from "../../shared-utils/five/changeMode.js";
import { getPxmm as D, getAttachedY as O } from "../../shared-utils/getPxmm.js";
import { changeModelCanvasOpacity as b } from "../../shared-utils/changeModelCanvasOpacity.js";
import "../../shared-utils/tag.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { isNil as k } from "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/five/FivePuppet.js";
import "../../shared-utils/isTruelyObject.js";
import "../../vendor/svelte/internal/index.js";
import "../../vendor/svelte/transition/index.js";
import "../../vendor/svelte/easing/index.js";
import "../Components/CurrentFloor.js";
import "../../vendor/svelte/store/index.js";
import "../Components/BaseImage.js";
import "../Components/Normalmage.js";
import "../Components/SvgImage.js";
import "../Components/Items/Items.js";
import "../Components/Items/Item.js";
import "../../shared-utils/svelte/resizeObserver.js";
import "../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "../Components/RoomLabels/RoomLabels.js";
import "../Components/RoomLabels/RoomLabel.js";
import "../Components/RuleLabels/RuleLabels.js";
import "../Components/RuleLabels/RuleItem.js";
import "../Components/RoomMaterials/RoomMaterial.js";
import "../utils/formatPosition.js";
import "../Components/RoomMaterials/RoomMaterial_0.js";
import "../Components/RoomMaterials/RoomMaterial_1.js";
import "../Components/RoomMaterials/RoomMaterial_2.js";
import "../Components/RoomMaterials/RoomTriangle.js";
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
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/five/fiveEveryReadyListener.js";
import "../../shared-utils/throttle.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../shared-utils/even.js";
import "../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/CSS3DRender/index.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../shared-utils/three/IObject3D.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/util.js";
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../Sculpt/utils/unit.js";
import "../../Sculpt/utils/renderDom.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../../Sculpt/utils/three/rayOnLine.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
class Ri extends M {
  constructor(t, i) {
    var h, l;
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
      const { min: t, max: i } = this.data.bounding, e = i.x - t.x, s = i.y - t.y, r = this.state.config.attachedTo ? { attachedTo: this.state.config.attachedTo } : void 0, a = D(this.five, this.wrapper, this.floorIndex, r), h = Math.ceil(e * a), l = Math.ceil(s * a);
      return this.size.width === h && this.size.height === l || (this.container.style.width = h + "px", this.container.style.height = l + "px", this.size = { width: h, height: l }), !0;
    });
    /** 销毁插件 */
    o(this, "dispose", () => {
      var t, i;
      this.removeEventListener(), (t = this.app) == null || t.$destroy(), this.app = void 0, (i = this.container) == null || i.remove(), this.data = void 0, this.wrapper = void 0, this.selector = void 0, this.hooks.emit("dispose");
    });
    o(this, "highlight", (t) => {
      this.state.config.highlightEnable && (this.highlightData = t, this.render());
    });
    o(this, "unhighlight", () => {
      this.highlightData = {}, this.render();
    });
    o(this, "_disable", (t) => {
      var e, s;
      const { userAction: i } = t;
      (e = this.app) == null || e.$destroy(), this.app = void 0, (s = this.container) == null || s.remove(), this.removeEventListener(), this.hooks.emit("disable", { userAction: i });
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
    o(this, "onFiveModeChange", (...[t, , , , i]) => {
      t !== "Topview" && this.state.visible && (this.updateState({ visible: !1 }, i), this._hide({ userAction: i }));
    });
    o(this, "onFivePanoArrived", (t) => {
      var i;
      (i = this.five) != null && i.work && (this.panoIndex = t, this.floorIndex = this.workUtil.observers[t].floorIndex);
    });
    o(this, "onFiveCameraUpdate", (t, i) => {
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
      const { mode: i } = this.five.getCurrentState();
      i === "Topview" && !this.isHiddenByHideFunc && !this.state.visible && this.state.config.autoShowEnable && (this.updateState({ visible: !0 }, t), this._show({ userAction: t }));
    });
    o(this, "onModelShownFloorChange", (t) => {
      if (this.floorIndex !== t) {
        if (t === null) {
          const i = this.five.getCurrentState().panoIndex;
          this.floorIndex = this.workUtil.observers[i].floorIndex;
          return;
        }
        this.floorIndex = t, this.updateSize(), this.render();
      }
    });
    i != null && i.selector && (this.selector = i.selector, console.warn("不推荐继续使用 params.selector 配置父容器，请使用 appendTo 方法")), this.defaultMissingFloorConfig = {
      imageURL: this.staticPrefix + "/release/web/saas/missing-floorplan.e274c596.png",
      imageWidth: 200,
      imageHeight: 120,
      text: (l = (h = i.i18n) == null ? void 0 : h.call(i, "暂无平面图")) != null ? l : "暂无平面图",
      textFontSize: 14
    };
    const e = {
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
      roomNameOtherTypeEnable: !0,
      roomDimensionEnable: !0,
      cameraImageUrl: I,
      attachedTo: _.BOUNDING_CENTER,
      getLabelElement: void 0,
      missingFloorConfig: p(p({}, this.defaultMissingFloorConfig), i.missingFloorConfig),
      i18n: (m) => m,
      adaptiveRoomLabelVisibleEnable: !0,
      getRoomAreaText: (m) => (m / 1e6).toFixed(1) + "㎡",
      getRoomDimensionText: (m, w) => (m / 1e3).toFixed(1) + "m × " + (w / 1e3).toFixed(1) + "m",
      getRuleDistanceText: (m) => m.toString()
    }, s = i ? L(i, ["selector", "scale"]) : {}, r = p(p({}, e.missingFloorConfig), s.missingFloorConfig), a = f(p(p({}, e), s), { missingFloorConfig: r });
    this.state = { enabled: !0, visible: !1, config: a }, this.initContainer(), t.model.loaded ? this.onFiveModelLoaded() : t.once("modelLoaded", this.onFiveModelLoaded), t.once("dispose", this.dispose), this.addEventListener();
  }
  load(t, i, e = !0) {
    return c(this, null, function* () {
      function s(m) {
        return Object.prototype.hasOwnProperty.apply(m, ["version"]);
      }
      const r = t;
      r && k(r.version) && console.warn("传入 serverData.data 的方式后续可能不再支持，请把 serverData 整体传入 load 函数");
      const a = JSON.parse(JSON.stringify(t)), h = s(a) ? a.data : a, l = this.data;
      this.data = yield v(h), this.hooks.emit("dataLoaded", this.data), this.hooks.emit("dataChange", this.data, l), i && this.updateState(i, e), this.render();
    });
  }
  /** 更新户型图位置 */
  updatePosition() {
    var a;
    const t = O(this.five, this.floorIndex, this.state.config.attachedTo), i = (a = this.five.model) == null ? void 0 : a.bounding.getCenter(new S.Vector3()).setY(t);
    if (!i)
      return;
    const e = i.clone().project(this.five.camera), s = (e.x + 1) / 2, r = -(e.y - 1) / 2;
    this.container.style.left = s * 100 + "%", this.container.style.top = r * 100 + "%";
  }
  /** 把插件的渲染DOM插入到对应的容器中去 */
  appendTo(t) {
    if (this.wrapper = t, !!this.state.enabled)
      return t.appendChild(this.container), this.render(), this;
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
      if (this.isHiddenByHideFunc = !0, !this.state.visible)
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
    const e = this.state, s = i.userAction !== void 0 ? i.userAction : !0;
    if (this.updateState(t, s), t.enabled !== void 0 && e.enabled !== t.enabled) {
      const r = { userAction: s };
      t.enabled ? this._enable(r) : this._disable(r);
    }
    if (t.visible !== void 0 && e.visible !== t.visible) {
      const r = { userAction: s };
      t.visible ? this._show(r) : this._hide(r);
    }
  }
  changeConfigs(t, i = !0) {
    this.updateState({ config: t }, i), this.render();
  }
  formatData(t) {
    return c(this, null, function* () {
      return yield v(t.data);
    });
  }
  _show(t) {
    return c(this, null, function* () {
      if (!this.state.enabled)
        return;
      this.isHiddenByHideFunc = !1;
      const { userAction: i } = t;
      this.hooks.emit("show", { userAction: i, auto: !1 }), this.five.getCurrentState().mode !== "Topview" && (yield P(this.five, ["Topview", void 0, void 0, i])), this.five.model.show(this.floorIndex), this.updatePosition(), this.updateSize();
      const e = 500, s = this.state.config.modelOpacity;
      b(this.five, s, e), this.hooks.emit("showAnimationEnded", { userAction: i, auto: !1 }), this.render();
    });
  }
  _hide(t) {
    return c(this, null, function* () {
      if (!this.state.enabled)
        return;
      const { userAction: i } = t;
      this.hooks.emit("hide", { userAction: i, auto: !1 });
      const e = 1, s = 0;
      b(this.five, e, s), this.render();
    });
  }
  _enable(t) {
    const { userAction: i } = t;
    this.addEventListener(), this.wrapper && this.wrapper.append(this.container), this.hooks.emit("enable", { userAction: i }), this.state.visible && this._show({ userAction: i });
  }
  updateState(t, i) {
    var a;
    const e = this.state, s = (a = t.config) != null && a.missingFloorConfig ? p(p({}, e.config.missingFloorConfig), t.config.missingFloorConfig) : e.config.missingFloorConfig, r = t.config ? f(p(p({}, e.config), t.config), { missingFloorConfig: s }) : e.config;
    this.state = f(p(p({}, this.state), t), { config: r }), !y(this.state, e, { deep: !0 }) && this.hooks.emit("stateChange", { state: this.state, prevState: e, userAction: i });
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
    const i = f(p({}, this.state.config), {
      visible: this.state.visible,
      duration: t != null ? t : 0,
      panoIndex: this.panoIndex,
      floorIndex: this.floorIndex,
      floorplanData: this.data,
      lastPanoramaLongitude: this.lastPanoramaLongitude,
      highlightData: this.highlightData
    });
    if (this.app)
      return this.app.$set(i);
    this.app = new T({ target: this.container, intro: !0, props: i });
  }
}
export {
  Ri as Controller
};
