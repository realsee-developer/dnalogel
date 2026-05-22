var F = Object.defineProperty, I = Object.defineProperties;
var C = Object.getOwnPropertyDescriptors;
var b = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var g = (l, r, t) => r in l ? F(l, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[r] = t, p = (l, r) => {
  for (var t in r || (r = {}))
    y.call(r, t) && g(l, t, r[t]);
  if (b)
    for (var t of b(r))
      E.call(r, t) && g(l, t, r[t]);
  return l;
}, m = (l, r) => I(l, C(r));
var a = (l, r, t) => (g(l, typeof r != "symbol" ? r + "" : r, t), t);
var f = (l, r, t) => new Promise((i, e) => {
  var h = (n) => {
    try {
      s(t.next(n));
    } catch (d) {
      e(d);
    }
  }, o = (n) => {
    try {
      s(t.throw(n));
    } catch (d) {
      e(d);
    }
  }, s = (n) => n.done ? i(n.value) : Promise.resolve(n.value).then(h, o);
  s((t = t.apply(l, r)).next());
});
import _ from "./Components/Main.js";
import "../../shared-utils/tag.js";
import "three";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../shared-utils/three/blink.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../vendor/earcut/src/earcut.js";
import { FLOORPLAN_DEFAULT_IMAGE as v } from "../../shared-utils/url/defaultUrls.js";
import { replaceStaticPrefix as w } from "../../shared-utils/url/replace-static-prefix.js";
import { equal as D } from "../../shared-utils/equal.js";
import "../../shared-utils/five/FivePuppet.js";
import { CAMERA_IMAGE_BIG_DOT as O } from "../Assets/camera.js";
import { Controller as k } from "../../base/BasePluginWithData.js";
import { formatData as A, formatExtraObjects as P } from "../utils/formatData.js";
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
import "../Components/MissingFloor.js";
import "./Components/ObserverDots.js";
import "./Components/RoomLabels.js";
import "../../shared-utils/svelte/resizeObserver.js";
import "../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "./Components/RoomLabelItem.js";
import "./Components/FloorplanCompass.js";
import "../Assets/compass.js";
import "../../shared-utils/math/rad2Deg.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/five/fiveEveryReadyListener.js";
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
import "../../shared-utils/isNil.js";
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
import "../../shared-utils/five/getFiveFromParentChain.js";
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
import "../../vendor/animejs/lib/anime.es.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
import "../../shared-utils/url/absoluteUrl.js";
import "../../shared-utils/isTruelyObject.js";
import "../../base/BasePlugin.js";
import "../Assets/floorplanExtraObject.js";
class Fi extends k {
  constructor(t, i) {
    var o, s;
    super(t);
    // =============== public properties =================
    a(this, "name", "floorplanGuidePlugin");
    a(this, "state");
    // =============== protected properties =================
    a(this, "data");
    // =============== private properties =================
    a(this, "app");
    a(this, "wrapperSelector", "");
    a(this, "wrapper", null);
    a(this, "disposed", !1);
    a(this, "extraObjects", []);
    a(this, "highlightData", {});
    a(this, "defaultMissingFloorConfig");
    a(this, "dispose", () => {
      var t;
      this.disposed = !0, (t = this.app) == null || t.$destroy(), this.wrapper = null, this.wrapperSelector = "", this.five.off("panoArrived", this.handlePanoArrived), this.hooks.emit("dispose");
    });
    a(this, "highlight", (t) => {
      this.state.config.highlightEnable && (this.highlightData = t, this.render());
    });
    a(this, "unhighlight", () => {
      this.highlightData = {}, this.render();
    });
    /**
     * 处理户型图点击事件
     * 寻找距离点击位置最近的观察点，并移动到该点
     * @param clickData 点击事件数据
     */
    a(this, "handleFloorplanClick", (t) => {
      var d;
      const i = (d = this.data) == null ? void 0 : d.observers;
      if (!i || i.length === 0) {
        console.warn("No floorplan observers found");
        return;
      }
      const e = t.imageX, h = t.imageY, o = t.floorIndex;
      let s = null, n = 1 / 0;
      i.forEach((c) => {
        if (c.floorIndex !== o)
          return;
        const x = c.positionInImage.x, S = c.positionInImage.y, u = Math.sqrt(
          Math.pow(e - x, 2) + Math.pow(h - S, 2)
        );
        u < n && (n = u, s = {
          panoIndex: c.index,
          // 使用observer.index作为panoIndex
          distance: u,
          observer: c
        });
      }), s ? this.five.emit("wantsToMoveToPano", s.panoIndex, {}, !0) || this.five.moveToPano(s.panoIndex) : console.warn("No suitable observer found on the same floor");
    });
    a(this, "_disable", (t) => {
      var e;
      const { userAction: i } = t;
      (e = this.app) == null || e.$destroy(), this.app = void 0, this.hooks.emit("disable", { userAction: i });
    });
    a(this, "handlePanoArrived", () => {
      var i, e;
      const t = (e = (i = this.five.work.observers[this.five.getCurrentState().panoIndex]) == null ? void 0 : i.floorIndex) != null ? e : 0;
      this.updateState({ displayedFloorIndex: t }, !0), this.render();
    });
    this.five = t, this.defaultMissingFloorConfig = {
      imageURL: w(i == null ? void 0 : i.staticPrefix, v),
      imageWidth: 200,
      imageHeight: 120,
      text: (s = (o = i == null ? void 0 : i.i18n) == null ? void 0 : o.call(i, "暂无平面图")) != null ? s : "暂无平面图",
      textFontSize: 14
    };
    const e = {
      hoverEnable: !1,
      highlightEnable: !1,
      cameraImageUrl: O,
      missingFloorImageUrl: w(i == null ? void 0 : i.staticPrefix, v),
      missingFloorConfig: p(p({}, this.defaultMissingFloorConfig), i == null ? void 0 : i.missingFloorConfig),
      clickEnable: !0,
      roomLabelsEnable: !1,
      roomNameEnable: !0,
      roomNameOtherTypeEnable: !1,
      roomAreaEnable: !0,
      adaptiveRoomLabelVisibleEnable: !0,
      getRoomAreaText: (n) => (n / 1e6).toFixed(1) + "㎡",
      getLabelElement: void 0,
      compassEnable: !1,
      northDesc: "北",
      compassHeight: 50,
      observerDotSize: 12,
      cameraSize: 36,
      cameraOffset: 28.5,
      i18n: (i == null ? void 0 : i.i18n) || ((n) => n)
    }, h = p(p({}, e), i == null ? void 0 : i.configs);
    this.state = { enabled: !0, visible: !0, config: h }, i != null && i.wrapper && console.warn("不推荐继续使用 params.selector 配置父容器，请使用 appendTo 方法"), typeof (i == null ? void 0 : i.wrapper) == "string" ? this.wrapperSelector = i.wrapper : (i == null ? void 0 : i.wrapper) instanceof Element && (this.wrapper = i.wrapper), t.once("dispose", this.dispose), t.on("panoArrived", this.handlePanoArrived);
  }
  load(t, i, e = !0) {
    return f(this, null, function* () {
      function h(d) {
        return Object.prototype.hasOwnProperty.apply(d, ["version"]);
      }
      const o = JSON.parse(JSON.stringify(t)), s = h(o) ? o.data : o, n = this.data;
      this.data = yield A(s), this.hooks.emit("dataLoaded", this.data), this.hooks.emit("dataChange", this.data, n), i && this.updateState(i, e), this.render();
    });
  }
  show() {
    return f(this, arguments, function* (t = {}) {
      if (this.state.visible)
        return;
      const i = t.userAction !== void 0 ? t.userAction : !0;
      this.updateState({ visible: !0 }, i), this._show({ userAction: i });
    });
  }
  hide() {
    return f(this, arguments, function* (t = {}) {
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
    const e = this.state, h = i.userAction !== void 0 ? i.userAction : !0;
    if (this.updateState(t, h), t.enabled !== void 0 && e.enabled !== t.enabled) {
      const o = { userAction: h };
      t.enabled ? this._enable(o) : this._disable(o);
    }
    if (t.visible !== void 0 && e.visible !== t.visible) {
      const o = { userAction: h };
      t.visible ? this._show(o) : this._hide(o);
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
    this.data && (this.extraObjects = P(t, this.five, this.data), this.render());
  }
  /**
   * 更改显示的楼层
   * @param floorIndex 要显示的楼层索引
   */
  changeFloor(t) {
    if (!this.data) {
      console.warn("No floorplan data loaded");
      return;
    }
    if (t < 0 || t >= this.data.floorDatas.length) {
      console.warn(`Invalid floor index: ${t}. Available floors: 0-${this.data.floorDatas.length - 1}`);
      return;
    }
    this.updateState({ displayedFloorIndex: t }, !0), this.render();
  }
  formatData(t) {
    return f(this, null, function* () {
      return yield A(t.data);
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
    var s;
    const e = this.state, h = (s = t.config) != null && s.missingFloorConfig ? p(p({}, e.config.missingFloorConfig), t.config.missingFloorConfig) : e.config.missingFloorConfig, o = t.config ? m(p(p({}, e.config), t.config), { missingFloorConfig: h }) : e.config;
    this.state = m(p(p({}, this.state), t), { config: o }), !D(this.state, e, { deep: !0 }) && this.hooks.emit("stateChange", { state: this.state, prevState: e, userAction: i });
  }
  render() {
    var o, s;
    if (this.disposed || !this.state.enabled)
      return;
    if (!this.wrapper && this.wrapperSelector) {
      const n = document.querySelector(this.wrapperSelector);
      this.wrapper = n;
    }
    if (!this.data || !this.wrapper)
      return;
    const t = (s = (o = this.five.work.observers[this.five.getCurrentState().panoIndex]) == null ? void 0 : o.floorIndex) != null ? s : 0, i = this.state.displayedFloorIndex !== void 0 ? this.state.displayedFloorIndex : t, e = i === t, h = m(p({}, this.state.config), {
      five: this.five,
      floorplanData: this.data,
      visible: this.state.visible,
      extraObjects: this.extraObjects,
      highlightData: this.highlightData,
      displayedFloorIndex: i,
      shouldShowRadar: e,
      cameraSize: this.state.config.cameraSize || 36,
      cameraOffset: this.state.config.cameraOffset || 28.5,
      onFloorplanClick: this.state.config.clickEnable ? this.handleFloorplanClick : void 0
    });
    this.app ? this.app.$set(h) : this.app = new _({ target: this.wrapper, props: h });
  }
}
export {
  Fi as Controller
};
