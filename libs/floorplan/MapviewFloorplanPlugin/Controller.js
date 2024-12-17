var F = Object.defineProperty, P = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var v = (d, n, t) => n in d ? F(d, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : d[n] = t, l = (d, n) => {
  for (var t in n || (n = {}))
    x.call(n, t) && v(d, t, n[t]);
  if (w)
    for (var t of w(n))
      M.call(n, t) && v(d, t, n[t]);
  return d;
}, c = (d, n) => P(d, E(n));
var o = (d, n, t) => (v(d, typeof n != "symbol" ? n + "" : n, t), t);
var f = (d, n, t) => new Promise((e, i) => {
  var r = (a) => {
    try {
      s(t.next(a));
    } catch (m) {
      i(m);
    }
  }, h = (a) => {
    try {
      s(t.throw(a));
    } catch (m) {
      i(m);
    }
  }, s = (a) => a.done ? e(a.value) : Promise.resolve(a.value).then(r, h);
  s((t = t.apply(d, n)).next());
});
import * as b from "three";
import { to as I } from "../../shared-utils/to.js";
import { equal as y } from "../../shared-utils/equal.js";
import { Main as _ } from "../Components/Main.js";
import { formatData as S } from "../utils/formatData.js";
import { CAMERA_IMAGE as L } from "../Assets/camera.js";
import { omit as C } from "../../shared-utils/filter.js";
import { FLOOR_PLAN_ATTACHED_TO as O } from "../constant.js";
import { Controller as D } from "../../base/BasePluginWithData.js";
import { getPxmm as T, getAttachedY as k } from "../../shared-utils/getPxmm.js";
import { correctFiveState as R } from "../utils/correctFiveState.js";
import { changeModelCanvasOpacity as A } from "../../shared-utils/changeModelCanvasOpacity.js";
import { FloorplanErrorType as u, SHOW_ANIME_DURATION as H } from "../utils/constant.js";
import "../../shared-utils/tag.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "@realsee/five/line";
import { isNil as U } from "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import { waitFiveModelLoaded as z } from "../../shared-utils/five/fiveModelLoad.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
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
import "../../shared-utils/five/changeMode.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/five/fiveEveryReadyListener.js";
import "../../shared-utils/throttle.js";
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
import "../../shared-utils/five/initialCSS3DRender.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../shared-utils/three/IObject3D.js";
import "../../Sculpt/utils/removeAllTag.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/util.js";
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "@realsee/five";
function W(d) {
  const { latitude: n, longitude: t } = d, e = Math.abs(n - Math.PI / 2) > 5 * Math.PI / 180, i = t > 5 * (Math.PI / 180) && t < 355 * (Math.PI / 180);
  return e || i;
}
function G(d) {
  const { latitude: n, longitude: t } = d, e = Math.abs(n - Math.PI / 2) < 10 * Math.PI / 180, i = t < 30 * (Math.PI / 180) || t > 330 * (Math.PI / 180);
  return e && i;
}
class Re extends D {
  constructor(t, e) {
    var a, m;
    super(t);
    // =============== public properties =================
    o(this, "name", "modelFloorplanPlugin");
    o(this, "state");
    // =============== private properties =================
    o(this, "data");
    /** 展示户型图时，需要正确的状态 */
    o(this, "showState");
    /** show 动画的公共 Promise */
    o(this, "showPromise");
    o(this, "app");
    o(this, "panoIndex", 0);
    o(this, "floorIndex", 0);
    o(this, "selector");
    /** 公共 Promise 的 reject 方法 */
    o(this, "showRejection");
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
    o(this, "store", { roomOnMouse: null });
    /** 销毁插件 */
    o(this, "dispose", () => {
      var t, e;
      this.removeEventListener(), (t = this.app) == null || t.$destroy(), this.app = void 0, (e = this.container) == null || e.remove(), this.data = void 0, this.wrapper = void 0, this.selector = void 0, this.hooks.emit("dispose");
    });
    /** 展示户型图
     * 1. show 函数大部分情况下需要耗时
     * 2. 如果当前已经在展示中，将不会触发任何事件
     * 3. 如果展示过程被中断，将抛出错误
     * 4. 多次调用 show 方法，只会触发一次 showAnimationEnded 事件，但是展示结果会取决于最后一次调用参数
     * 5. 如果多次调用 show 方法，参数与上次参数不一致时，上次 show Promise 会被 reject
     * @param opts.floorIndex 楼层
     * @param opts.modelOpacity 模型透明度
     * @param opts.immediately 是否立即展示
     * @param opts.isAutoShow 是否是自动展示
     * @param opts.userAction 是否是用户行为
     */
    o(this, "show", (...e) => f(this, [...e], function* (t = {}) {
      if (!this.state.enabled || !this.showPromise && this.state.visible)
        return;
      const i = t.userAction !== void 0 ? t.userAction : !0;
      this.updateState({ visible: !0 }, i), this._show(t);
    }));
    /** 隐藏户型图 */
    o(this, "hide", (...e) => f(this, [...e], function* (t = {}) {
      this.state.enabled && (this.isHiddenByHideFunc = !0, this.state.visible !== !1 && (this.updateState({ visible: !1 }, t.userAction || !0), this._hide(t)));
    }));
    /** 更新户型图大小 */
    o(this, "updateSize", () => {
      if (!this.data || !this.container || !this.wrapper)
        return !1;
      const { min: t, max: e } = this.data.bounding, i = e.x - t.x, r = e.y - t.y, h = this.state.config.attachedTo ? { attachedTo: this.state.config.attachedTo } : void 0, s = T(this.five, this.wrapper, this.floorIndex, h), a = Math.ceil(i * s), m = Math.ceil(r * s);
      return this.size.width === a && this.size.height === m || (this.container.style.width = a + "px", this.container.style.height = m + "px", this.size = { width: a, height: m }), !0;
    });
    o(this, "highlight", (t) => {
      this.state.config.highlightEnable && (this.highlightData = t, this.render());
    });
    o(this, "unhighlight", () => {
      this.highlightData = {}, this.render();
    });
    o(this, "_disable", (t) => {
      var i, r, h;
      const { userAction: e } = t;
      this.hooks.emit("disable", { userAction: e }), (i = this.showRejection) == null || i.call(this, u.BreakOffByDisable), this.showPromise = void 0, (r = this.app) == null || r.$destroy(), this.app = void 0, (h = this.container) == null || h.remove(), this.removeEventListener();
    });
    o(this, "_enable", (t) => {
      const { userAction: e } = t;
      this.addEventListener(), this.wrapper && (this.wrapper.append(this.container), this.hooks.emit("enable", { userAction: e }), this.state.visible && this._show({ userAction: e }));
    });
    o(this, "_show", (t) => f(this, null, function* () {
      var h;
      if (!this.state.enabled)
        return;
      if (!((h = this.fiveUtil.model) != null && h.loaded))
        throw new Error(u.ModelNotLoaded);
      if (!this.data)
        throw new Error(u.DataNotLoaded);
      if (this.showPromise)
        return this.showPromise;
      const e = {
        floorIndex: this.floorIndex,
        modelOpacity: this.state.config.modelOpacity,
        immediately: !1,
        isAutoShow: !1,
        userAction: !0
      }, i = l(l({}, e), t), r = () => f(this, null, function* () {
        this.hooks.emit("show", { userAction: i.userAction, auto: i.isAutoShow });
        let s = !1, a;
        this.showRejection = (g) => {
          s = !0, a = g;
        };
        const [m] = yield I(R(this.five, this.showState, i.userAction));
        if (m)
          throw m;
        if (s)
          throw a ? new Error(a) : new Error(u.UnknownError);
        if (!this.updateSize())
          throw new Error(u.UpdateSizeError);
        this.updatePosition(), this.floorIndex = i.floorIndex, this.fiveUtil.model.show(this.floorIndex);
      });
      return this.isHiddenByHideFunc = !1, this.showPromise = r().then(() => {
        this.showPromise = void 0, this.showRejection = void 0;
        const s = i.modelOpacity, a = i.immediately ? 0 : H;
        A(this.five, s, a), this.render(a), this.hooks.emit("showAnimationEnded", {
          auto: i.isAutoShow,
          userAction: i.userAction
        });
      }).catch((s) => {
        if (this.showPromise = void 0, this.showRejection = void 0, this.updateState({ visible: !1 }, i.userAction), !i.isAutoShow && s instanceof Error)
          throw s;
      }), this.showPromise;
    }));
    o(this, "_hide", (t) => {
      var r;
      (r = this.showRejection) == null || r.call(this, u.BreakOffByHide), this.showPromise = void 0;
      const i = l(l({}, {
        userAction: !0,
        isAutoHide: !1
      }), t);
      A(this.five, 1, 0), this.hooks.emit("hide", { auto: i.isAutoHide, userAction: i.userAction }), this.render();
    });
    o(this, "handleClick", () => {
      if (!this.state.visible)
        return;
      if (this.hooks.emit("click", this.store.roomOnMouse))
        return !1;
    });
    /** modelLoaded 之后自动执行 append container 操作  */
    o(this, "onFiveModelLoaded", () => {
      const e = this.five.model.bounding.getCenter(new b.Vector3());
      if (this.showState.offset = e, this.state.enabled === !1 || this.wrapper || !this.selector)
        return;
      const i = this.selector instanceof Element ? this.selector : document.querySelector(this.selector);
      if (!i)
        throw new Error("不正确的父容器选择器");
      this.wrapper = i, i.append(this.container);
    });
    /** 更改模型时，自动隐藏户型图 */
    o(this, "onFiveModeChange", (t) => {
      t !== this.showState.mode && (this.updateState({ visible: !1 }, !1), this._hide({ userAction: !1 }));
    });
    /** 惯性结束后，判断能否自动展示户型图 */
    o(this, "onFiveInteriaPan", (t, e) => {
      if (!e || this.state.visible || this.state.config.autoShowEnable === !1 || this.isHiddenByHideFunc)
        return;
      const i = this.five.getCurrentState();
      i.mode === this.showState.mode && G(i) && (this.updateState({ visible: !0 }, !0), this._show({ isAutoShow: !0 }));
    });
    /** panoIndex 改变时，更新 floorIndex */
    o(this, "onFivePanoArrived", (t) => {
      var e;
      (e = this.five) != null && e.work && (this.panoIndex = t, this.floorIndex = this.workUtil.observers[t].floorIndex);
    });
    /** cameraUpdate 时判断户型图是否应该自动隐藏 */
    o(this, "onFiveCameraUpdate", (t, e) => {
      if (!this.state.visible || this.showPromise)
        return;
      const i = this.five.getCurrentState();
      this.updatePosition(), this.updateSize(), W(i) && (this.updateState({ visible: !1 }, e), this._hide({ userAction: e }));
    });
    /** 户型图展示中，转动三维模型，结束时应该自动修复模型状态 */
    o(this, "onFiveWantsPanGesture", (t, e) => {
      if (this.five.getCurrentState().mode === this.showState.mode && this.state.config.autoShowEnable !== !1 && e && this.state.visible)
        return this.five.updateCamera(C(this.showState, ["offset"]), 0), !1;
    });
    /** 阻止点击分间走点 */
    o(this, "onFiveWantsTapGesture", () => this.handleClick());
    /** 从 Panorama 切换到其他模态时，记录当前的相机水平视角 */
    o(this, "onFiveWantsChangeMode", (t, e) => {
      e === "Panorama" && t === this.showState.mode && (this.lastPanoramaLongitude = this.five.getCurrentState().longitude);
    });
    /** 模型楼层高亮改变时，自动进行楼层切换 */
    o(this, "onModelShownFloorChange", (t) => {
      var e;
      if (this.floorIndex !== t) {
        if (t === null) {
          const i = this.five.getCurrentState().panoIndex;
          this.floorIndex = (e = this.five.work) == null ? void 0 : e.observers[i].floorIndex;
          return;
        }
        this.floorIndex = t, this.updateSize(), this.render();
      }
    });
    e != null && e.selector && (this.selector = e.selector, console.warn("不推荐继续使用 params.selector 配置父容器，请使用 appendTo 方法")), this.showState = {
      mode: "Mapview",
      longitude: 0,
      latitude: Math.PI / 2
    }, this.defaultMissingFloorConfig = {
      imageURL: this.staticPrefix + "/release/web/saas/missing-floorplan.e274c596.png",
      imageWidth: 200,
      imageHeight: 120,
      text: (m = (a = e.i18n) == null ? void 0 : a.call(e, "暂无平面图")) != null ? m : "暂无平面图",
      textFontSize: 14
    };
    const i = {
      northDesc: "北",
      modelOpacity: 1,
      cameraEnable: !0,
      highlightEnable: !1,
      hoverEnable: !0,
      compassEnable: !0,
      autoShowEnable: !0,
      ruleLabelsEnable: !0,
      roomLabelsEnable: !0,
      roomAreaEnable: !0,
      roomNameEnable: !0,
      roomDimensionEnable: !0,
      cameraImageUrl: L,
      attachedTo: O.BOUNDING_CENTER,
      getLabelElement: void 0,
      adaptiveRoomLabelVisibleEnable: !0,
      missingFloorConfig: l(l({}, this.defaultMissingFloorConfig), e.missingFloorConfig),
      i18n: (p) => p,
      getRoomAreaText: (p) => (p / 1e6).toFixed(1) + "㎡",
      getRoomDimensionText: (p, g) => (p / 1e3).toFixed(1) + "m × " + (g / 1e3).toFixed(1) + "m",
      getRuleDistanceText: (p) => p.toString()
    }, r = e ? C(e, ["selector", "scale"]) : {}, h = l(l({}, i.missingFloorConfig), r.missingFloorConfig), s = c(l(l({}, i), r), { missingFloorConfig: h });
    this.state = { enabled: !0, visible: !1, config: s }, this.initContainer(), z(t).then(this.onFiveModelLoaded), t.once("dispose", this.dispose), this.addEventListener();
  }
  load(t, e, i = !0) {
    return f(this, null, function* () {
      function r(p) {
        return Object.prototype.hasOwnProperty.apply(p, ["version"]);
      }
      const h = t;
      h && U(h.version) && console.warn("传入 serverData.data 的方式后续可能不再支持，请把 serverData 整体传入 load 函数");
      const s = JSON.parse(JSON.stringify(t)), a = r(s) ? s.data : s, m = this.data;
      this.data = yield S(a), this.hooks.emit("dataLoaded", this.data), this.hooks.emit("dataChange", this.data, m), e && this.updateState(e, i), this.render();
    });
  }
  /** 把插件的渲染DOM插入到对应的容器中去 */
  appendTo(t) {
    if (this.wrapper = t, !!this.state.enabled)
      return t.appendChild(this.container), this.render(), this;
  }
  /** 启用插件 */
  enable(t = {}) {
    if (this.state.enabled)
      return;
    const e = t.userAction !== void 0 ? t.userAction : !0;
    this.updateState({ enabled: !0 }, t.userAction || e), this._enable({ userAction: e });
  }
  /** 禁用插件 */
  disable(t = {}) {
    if (!this.state.enabled)
      return;
    const e = t.userAction !== void 0 ? t.userAction : !0;
    this.updateState({ enabled: !1 }, t.userAction || e), this._disable({ userAction: e });
  }
  /** 更改插件 State */
  setState(t, e = {}) {
    const i = this.state, r = e.userAction !== void 0 ? e.userAction : !0;
    if (this.updateState(t, r), t.enabled !== void 0 && i.enabled !== t.enabled && (t.enabled ? this._enable({ userAction: r }) : this._disable({ userAction: r })), t.visible !== void 0 && i.visible !== t.visible) {
      const h = { userAction: r };
      t.visible ? this._show(h) : this._hide(h);
    }
  }
  changeConfigs(t, e = !0) {
    this.updateState({ config: t }, e), this.render();
  }
  /** 更新户型图位置 */
  updatePosition() {
    var s;
    const t = k(this.five, this.floorIndex, this.state.config.attachedTo), e = (s = this.fiveUtil.model) == null ? void 0 : s.bounding.getCenter(new b.Vector3()).setY(t);
    if (!e)
      return;
    const i = e.clone().project(this.five.camera), r = (i.x + 1) / 2, h = -(i.y - 1) / 2;
    this.container.style.left = r * 100 + "%", this.container.style.top = h * 100 + "%";
  }
  formatData(t) {
    return f(this, null, function* () {
      return yield S(t.data);
    });
  }
  updateState(t, e) {
    var s;
    const i = this.state, r = (s = t.config) != null && s.missingFloorConfig ? l(l({}, i.config.missingFloorConfig), t.config.missingFloorConfig) : i.config.missingFloorConfig, h = t.config ? c(l(l({}, i.config), t.config), { missingFloorConfig: r }) : i.config;
    this.state = c(l(l({}, this.state), t), { config: h }), !y(this.state, i, { deep: !0 }) && this.hooks.emit("stateChange", { state: this.state, prevState: i, userAction: e });
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
      transform: "translate(-50%, -50%)",
      zIndex: 10,
      pointerEvents: "none"
    }), this.five.addExtraElement(this.container);
  }
  addEventListener() {
    if (!this.state.enabled || this.hasAddedEventListener)
      return;
    const t = this.five;
    t.on("modeChange", this.onFiveModeChange), t.on("interiaPan", this.onFiveInteriaPan), t.on("panoArrived", this.onFivePanoArrived), t.on("cameraUpdate", this.onFiveCameraUpdate), t.on("wantsPanGesture", this.onFiveWantsPanGesture), t.on("wantsTapGesture", this.onFiveWantsTapGesture), t.on("wantsChangeMode", this.onFiveWantsChangeMode), t.on("modelShownFloorChange", this.onModelShownFloorChange);
  }
  removeEventListener() {
    const t = this.five;
    this.hasAddedEventListener = !1, t.off("modelLoaded", this.onFiveModelLoaded), t.off("modeChange", this.onFiveModeChange), t.off("panoArrived", this.onFivePanoArrived), t.off("cameraUpdate", this.onFiveCameraUpdate), t.off("wantsPanGesture", this.onFiveWantsPanGesture), t.off("wantsTapGesture", this.onFiveWantsTapGesture), t.off("wantsChangeMode", this.onFiveWantsChangeMode), t.off("modelShownFloorChange", this.onModelShownFloorChange);
  }
  render(t) {
    if (!this.state.enabled || !this.container || !this.data || this.size.width === 0 || this.showPromise)
      return;
    const e = c(l({}, this.state.config), {
      visible: this.state.visible,
      duration: t != null ? t : 0,
      panoIndex: this.panoIndex,
      floorIndex: this.floorIndex,
      floorplanData: this.data,
      lastPanoramaLongitude: this.lastPanoramaLongitude,
      highlightData: this.highlightData,
      store: this.store
    });
    if (this.app)
      return this.app.$set(e);
    this.app = new _({ target: this.container, intro: !0, props: e });
  }
}
export {
  Re as Controller
};
