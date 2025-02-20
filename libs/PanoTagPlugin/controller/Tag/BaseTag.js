var G = Object.defineProperty, K = Object.defineProperties;
var Q = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty, j = Object.prototype.propertyIsEnumerable;
var k = Math.pow, M = (c, i, e) => i in c ? G(c, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[i] = e, p = (c, i) => {
  for (var e in i || (i = {}))
    D.call(i, e) && M(c, e, i[e]);
  if (C)
    for (var e of C(i))
      j.call(i, e) && M(c, e, i[e]);
  return c;
}, w = (c, i) => K(c, Q(i));
var A = (c, i) => {
  var e = {};
  for (var t in c)
    D.call(c, t) && i.indexOf(t) < 0 && (e[t] = c[t]);
  if (c != null && C)
    for (var t of C(c))
      i.indexOf(t) < 0 && j.call(c, t) && (e[t] = c[t]);
  return e;
};
var f = (c, i, e) => (M(c, typeof i != "symbol" ? i + "" : i, e), e);
var P = (c, i, e) => new Promise((t, r) => {
  var s = (n) => {
    try {
      o(e.next(n));
    } catch (d) {
      r(d);
    }
  }, l = (n) => {
    try {
      o(e.throw(n));
    } catch (d) {
      r(d);
    }
  }, o = (n) => n.done ? t(n.value) : Promise.resolve(n.value).then(s, l);
  o((e = e.apply(c, i)).next());
});
import { Subscribe as Y } from "../../../shared-utils/Subscribe.js";
import { calculateTagConfig as U } from "../../utils/tag/calculateTagConfig.js";
import { getTagStickType as ee } from "../../utils/tag/format.js";
import "../../../shared-utils/tag.js";
import { isPanoramaLike as T, isModelLike as x } from "../../../shared-utils/five/mode.js";
import * as B from "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import { centerPoint as ie } from "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { anyPositionToVector3 as O } from "../../../shared-utils/positionToVector3.js";
import { toArray as te } from "../../../shared-utils/util.js";
import "@realsee/five/line";
import { isNil as R, notNil as E } from "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import { blink as se, reblink as ne } from "../../../shared-utils/three/blink.js";
import { vectorToCoordinates as oe } from "../../../shared-utils/vectorToCoordinate.js";
import { transformPosition as L } from "../../../shared-utils/five/transformPosition.js";
import { lookPoint as re } from "../../../shared-utils/five/lookPoint.js";
import { uuid as le } from "../../../shared-utils/uuid.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../shared-utils/five/FivePuppet.js";
import { objectAssignDeepExports as y } from "../../../vendor/object-assign-deep/objectAssignDeep.js";
import { getTagPosition as $, getTagCenterPosition as z } from "../../utils/tagPosition.js";
import { checkRange as I } from "../../utils/checkRange.js";
import { isMediaPlaneTag as ae, isMediaModelTag as S } from "../../utils/tag/tagCheck.js";
import { getUrlExt as N } from "../../../shared-utils/url/getUrl.js";
import { getFloorIndex as fe } from "../../../shared-utils/five/getFloorIndex.js";
import { safeObj as J } from "../../../shared-utils/safeObj.js";
import { Cache as de } from "../../utils/Cache.js";
import { _raycaster as V } from "../../../shared-utils/three/temp.js";
import { withResolvers as ce } from "../../../shared-utils/promise/withResolvers.js";
import "../../../shared-utils/typescript/entries.js";
import "../../utils/tag/adaptConfig.js";
import "../../typings/tag/TagConfig.js";
import "@realsee/five";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/five/fiveEveryReadyListener.js";
import "../../../shared-utils/throttle.js";
import "../../../shared-utils/five/fiveModelLoad.js";
import "../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../shared-utils/even.js";
import "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/three/core/Raycaster.js";
import "../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../shared-utils/CSS3DRender/index.js";
import "../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../shared-utils/createResizeObserver.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../Sculpt/Meshes/Line.js";
import "../../../Sculpt/typings/style.js";
import "../../../shared-utils/three/IObject3D.js";
import "../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/three/core/LineGeometry.js";
import "../../../shared-utils/three/core/LineMaterial.js";
import "../../../shared-utils/three/core/Line2.js";
import "../../../shared-utils/three/core/LineMaterial2.js";
import "../../../Sculpt/utils/unit.js";
import "../../../Sculpt/utils/renderDom.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../Sculpt/utils/three/rayOnLine.js";
import "../../../shared-utils/formatRad.js";
class Li {
  constructor(i, e) {
    f(this, "plugin");
    f(this, "id");
    f(this, "contentType");
    f(this, "stickType");
    f(this, "enabled");
    f(this, "config");
    f(this, "data");
    f(this, "state");
    f(this, "temporaryState", { visible: !0 });
    f(this, "originPosition");
    f(this, "position");
    f(this, "fiveState");
    f(this, "model");
    f(this, "matrix");
    f(this, "screenPosition");
    f(this, "normal");
    f(this, "mediaPlane");
    f(this, "hooks");
    f(this, "zIndex");
    f(this, "play");
    f(this, "pause");
    f(this, "tag3DContentSvelte");
    f(this, "dom");
    f(this, "contentDom");
    f(this, "initialConfig");
    f(this, "computedConfig");
    f(this, "cache");
    f(this, "entryFromModel");
    f(this, "_updating", !1);
    f(this, "ready", () => {
      const { promise: i, resolve: e } = ce();
      if (!this._updating)
        e();
      else {
        const t = setInterval(() => {
          this._updating || (clearInterval(t), e());
        }, 17);
        setTimeout(() => {
          clearInterval(t), e();
        }, 300);
      }
      return i;
    });
    var n, d, h, u;
    this.plugin = i;
    const t = ee(e);
    e.stickType = t;
    const r = JSON.parse(JSON.stringify(e.data)), s = (n = e.initialConfig) != null ? n : e.config ? JSON.parse(JSON.stringify(e.config)) : {};
    e.initialConfig = s;
    const l = U(e, i.config), o = this.getConfig(e);
    e.config = o, this.id = (d = e.id) != null ? d : le(), this.enabled = (h = e.enabled) != null ? h : !0, this.contentType = e.contentType, this.data = (u = o.initialData) != null && u.important ? y(e.data, r, o.initialData) : y(e.data, o.initialData, r), this.state = p({
      visible: void 0,
      unfolded: !this.can("fold")
    }, o.initialState), this.originPosition = e.position, e.originPosition = this.originPosition, this.position = (() => {
      const a = e.originPosition;
      if (!a)
        return;
      const m = i.workUtil.transform;
      return Array.isArray(a) && a.length === 4 ? a.map(O).map((g) => L(g, m).toArray()) : L(O(a), m).toArray();
    })(), this.matrix = e.matrix ? (() => {
      const a = new B.Matrix4().fromArray(e.matrix);
      return a.premultiply(i.workUtil.transform), a.elements;
    })() : e.matrix, this.initialConfig = s, this.computedConfig = l, this.stickType = t, this.config = e.config, this.fiveState = e.fiveState, this.normal = e.normal, this.cache = new de(), this.hooks = new Y(), Object.keys(e).forEach((a) => {
      this[a] === void 0 && e[a] !== void 0 && (this[a] = e[a]);
    });
  }
  get visible() {
    var i;
    return ((i = this.temporaryState) == null ? void 0 : i.visible) !== !1 && this.state.visible !== !1 && this.enabled !== !1;
  }
  get five() {
    return this.plugin.five;
  }
  get fiveUtil() {
    return this.plugin.fiveUtil;
  }
  get workUtil() {
    return this.plugin.workUtil;
  }
  get centerPosition() {
    const i = $(this);
    return ie(...Array.isArray(i) ? i : [i]);
  }
  get currentConfig() {
    var r, s;
    const i = U(this, this.plugin.config, { useCache: !0 }), e = this.five.getCurrentState().mode, t = (r = i.configWithFiveMode) == null ? void 0 : r[e];
    return (s = t != null ? t : i) != null ? s : {};
  }
  get currentVisible() {
    return !(!this.plugin.state.enabled || !this.plugin.state.visible || !this.enabled || !this.state.visible);
  }
  get sharedCache() {
    return this.plugin.cache;
  }
  /**
   * @description 使 state.visible 生效，但是只是加入渲染队列。等下次渲染时再真正生效
   */
  applyVisible() {
    throw new Error("Method not implemented.");
  }
  /**
   * @description 找到标签
   */
  find(i) {
    return P(this, null, function* () {
      var r;
      const e = this.fiveState;
      if (!this.fiveState)
        return this;
      const t = (r = i == null ? void 0 : i.targetMode) != null ? r : this.five.state.mode;
      if (t === "Panorama") {
        const s = e == null ? void 0 : e.panoIndex;
        if (R(s))
          return this;
        const l = this.workUtil.getObserverPosition(s), o = this.centerPosition.clone().sub(l).normalize();
        this.five.setState(p({
          mode: "Panorama",
          workCode: this.workUtil.workCode,
          panoIndex: s
        }, oe(o))), yield this.five.ready();
      } else
        t === "Mapview" && (yield re(this.five, this.centerPosition, i == null ? void 0 : i.pointConfig));
      return this;
    });
  }
  /**
   * @description 闪烁
   */
  blink(i) {
    return P(this, null, function* () {
      var o, n, d, h;
      yield this.ready();
      const e = (o = this.enabled) != null ? o : !0, t = (n = this.state) == null ? void 0 : n.visible, r = e && t;
      r === !1 && (this.state.visible = !0, this.enabled = !0, this.applyVisible(), this.plugin.render(), this.computeRenderType() !== "Mesh" ? yield new Promise((u) => P(this, null, function* () {
        if (this.dom || this.contentDom) {
          u();
          return;
        }
        const a = setInterval(() => {
          (this.dom || this.contentDom) && (u(), clearInterval(a));
        }, 16.7);
      })) : this.stickType === "Model" && !((d = this.model) != null && d.object) ? yield (h = this.model) == null ? void 0 : h.promise : this.stickType === "Plane" && (yield new Promise((u) => P(this, null, function* () {
        if (this.mediaPlane) {
          u();
          return;
        }
        const a = setInterval(() => {
          this.mediaPlane && (u(), clearInterval(a));
        }, 16.7);
      }))), this.dom && (this.dom.style.visibility = "hidden"), this.contentDom && (this.contentDom.style.visibility = "hidden"));
      const s = (() => {
        var a, m;
        const u = [];
        return u.push(this.dom), u.push((a = this.tag3DContentSvelte) == null ? void 0 : a.css3DInstance), u.push((m = this.model) == null ? void 0 : m.object), u.push(this.mediaPlane), u.filter(Boolean);
      })();
      if (!s.length) {
        console.warn("tagDom is empty");
        return;
      }
      yield (r ? se : ne)(s, p({
        begin: () => {
          r === !1 && (this.dom && (this.dom.style.visibility = ""), this.contentDom && (this.contentDom.style.visibility = ""));
        },
        updateRender: () => {
          this.five.needsRender = !0;
        }
      }, i)).finished, e === !1 && (this.enabled = !1, this.updateVisible()), t === !1 && this.updateVisible(), r === !1 && (this.dom && (this.dom.style.visibility = ""), this.contentDom && (this.contentDom.style.visibility = ""));
    });
  }
  /**
   * @description 展开
   */
  unfold() {
  }
  /**
   * @description 展开自己，收起其他标签
   */
  unfoldAndFoldOthers() {
  }
  /**
   * @description 收起
   */
  fold() {
  }
  /**
   * @description 启用
   */
  enable() {
    this.enabled = !0, this.hooks.emit("enable"), this.applyVisible();
  }
  /**
   * @description 禁用
   */
  disable() {
    this.enabled = !1, this.hooks.emit("disable"), this.applyVisible();
  }
  /**
   * @deprecated use `setData` instead
   */
  changeData(i, e = !0) {
    return this.setData(i, e);
  }
  /**
   * @deprecated use `setPosition` instead
   */
  changePosition(i) {
    return this.setPosition(i);
  }
  /**
   * @description 修改标签数据
   * @param deepMerge 是否深度合并 data，默认为 true
   */
  setData(i, e = !0) {
    e ? this.data = y(this.data, i) : this.data = p(p({}, this.data), i), this.hooks.emit("dataChanged", this.data);
  }
  /**
   * @description 修改标签位置
   */
  setPosition(i) {
    throw new Error("Method not implemented.");
  }
  /**
   * @description 设置标签实例的属性
   * @param deepMerge 是否深度合并 data，默认为 true
   */
  set(i, e = !0) {
    this.plugin.tagsLengthWillUpdate = !0, e ? y(this, i) : Object.assign(this, i), this.cache.clear();
  }
  updateConfig() {
    var t;
    const i = this.getConfig(void 0, { useCache: !1 });
    this.computedConfig = i;
    const e = this.getConfig();
    if (this.config = e, this.config.initialData) {
      const r = JSON.parse(JSON.stringify(this.data));
      this.data = (t = e.initialData) != null && t.important ? y(this.data, r, e.initialData) : y(this.data, e.initialData, r);
    }
    this.cache.clear();
  }
  updateVisible() {
    this.enabled ? (this.state.visible = this.getVisible(), this.applyVisible()) : this.applyVisible(), this._updating = !1;
  }
  updateZIndex() {
    const i = this.getSquaredDistance();
    this.zIndex = Math.round((1e4 - (i != null ? i : 0)) * 100);
  }
  getConfig(i, e) {
    var l, o, n;
    const t = U(i != null ? i : this, this.plugin.config, { useCache: e == null ? void 0 : e.useCache }), r = (l = e == null ? void 0 : e.fiveMode) != null ? l : this.five.getCurrentState().mode, s = (o = t.configWithFiveMode) == null ? void 0 : o[r];
    return (n = s != null ? s : t) != null ? n : {};
  }
  getDistance(i, e = 3) {
    const t = p(p({}, this.five.getCurrentState()), i), { panoIndex: r, mode: s } = t, l = s === "Panorama" ? this.workUtil.getObserverPosition(r) : this.five.camera.position, o = this.centerPosition;
    return !l || !o ? -1 : l.distanceTo(o);
  }
  /**
   * @description 用于排序的距离，性能更好
   */
  getSquaredDistance() {
    const i = this.five.camera.position;
    let e;
    return Array.isArray(this.position[0]) ? e = this.position[0] : e = this.position, k(e[0] - i.x, 2) + k(e[1] - i.y, 2) + k(e[2] - i.z, 2);
  }
  getVisible(i) {
    if (!this.enabled || !this.plugin.state.enabled || !this.fiveUtil.model)
      return !1;
    const e = p(p({}, this.five.getCurrentState()), i);
    let t = this.cache.getVisible(this, e);
    return R(t) && (t = this.computeVisible(e).value, this.cache.setVisible(this, e, t)), t;
  }
  getUnfoldedByPanoIndex(i) {
    if (!this.currentVisible)
      return;
    const t = this.computeUnfoldedByPanoIndex(i);
    return t && this.getUnfoldedByCamera();
  }
  getUnfoldedByCamera() {
    return this.currentVisible ? this.computeUnfoldedByCamera() : void 0;
  }
  can(i) {
    const e = this.currentConfig;
    if (!e || typeof e != "object")
      return !0;
    if (i === "show" || i === "hide") {
      if (!e.visibleConfig || typeof e.visibleConfig != "object")
        return !0;
      if (i === "show" && e.visibleConfig.keep === "hidden" || i === "hide" && e.visibleConfig.keep === "visible")
        return !1;
    }
    if (i === "fold" || i === "unfold") {
      if (!e.unfoldedConfig || typeof e.unfoldedConfig != "object")
        return !0;
      if (i === "fold" && e.unfoldedConfig.keep === "unfolded" || i === "unfold" && e.unfoldedConfig.keep === "folded")
        return !1;
    }
    return !0;
  }
  onClick(i) {
  }
  computeRenderType() {
    const i = (() => {
      if (this.stickType === "3DPoint")
        return "Dom";
      const e = this.getConfig();
      if (!e || typeof e != "object" || !e.renderType)
        return;
      const t = this.data.mediaData;
      if (!(!t || t.length === 0) && e.renderType === "Mesh") {
        if (ae(this)) {
          if (t.length === 1) {
            if (t[0].type === "Video")
              return navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && navigator.userAgent.toLowerCase().indexOf("mobile") > -1 ? "Dom" : "Mesh";
            if (t[0].type === "Image")
              return N(t[0].url) === "gif" ? "Dom" : "Mesh";
          }
        } else if (S(this))
          return t.length === 1 && t[0].type === "Image" ? N(t[0].url) === "gif" ? "Dom" : "Mesh" : "BehindDom";
      }
    })();
    return i != null ? i : "Dom";
  }
  computeVisible(i) {
    const e = p(p({}, this.five.getCurrentState()), i), { panoIndex: t, mode: r } = e, s = [];
    return (() => {
      var d, u, a, m;
      const n = (d = this.getConfig().visibleConfig) != null ? d : {};
      if (typeof n == "function")
        return {
          value: n(this.five, { tag: this, distance: this.getDistance(e, void 0) }),
          checkedList: s,
          reason: "config function result"
        };
      {
        if (n.keep === "hidden")
          return { value: !1, checkedList: s, reason: "config.keep is hidden" };
        if (n.keep === "visible")
          return { value: !0, checkedList: s, reason: "config.keep is visible" };
        const g = this.computeVisibleByFiveMode(n, r);
        if ((g == null ? void 0 : g.value) === !1)
          return g;
        if (n.followModelVisibility === !0 && ["poincare", "aerophoto", "sand"].includes(this.workUtil.fromType) && (r === "Floorplan" || r === "Mapview")) {
          const h = this.computeVisibleByFloorIndex(), { value: v } = h, b = A(h, ["value"]);
          if (v === !1)
            return p({ value: !1, checkedList: s, reason: "followModelVisibility check failed" }, b);
        }
        if (T(r) && n.visiblePanoIndex !== void 0 && n.visiblePanoIndex !== "all" && t !== void 0) {
          if (s.push("visiblePanoIndex"), Array.isArray(n.visiblePanoIndex) && !n.visiblePanoIndex.includes(t))
            return {
              value: !1,
              checkedList: s,
              reason: `current panoIndex is not included in visiblePano. currentPanoIndex: ${t}, visiblePanoIndex: ${n.visiblePanoIndex}`
            };
          if (n.visiblePanoIndex === "current" && t !== ((u = this.fiveState) == null ? void 0 : u.panoIndex))
            return {
              value: !1,
              checkedList: s,
              reason: `current panoIndex is not equal to tag.panoIndex. currentPanoIndex: ${t}, tag.panoIndex: ${(a = this.fiveState) == null ? void 0 : a.panoIndex}`
            };
        }
        if (n.visibleDistance !== void 0 && (s.push("visibleDistance"), n.visibleDistance !== "unLimited")) {
          const v = this.getDistance(e, 1);
          if (I(v, n.visibleDistance) === !1)
            return {
              value: !1,
              checkedList: s,
              panoIndex: t,
              visibleDistance: n.visibleDistance,
              reason: `distance is not in visibleDistance. distance: ${v}, visibleDistance: ${n.visibleDistance.min} - ${n.visibleDistance.max}`
            };
        }
        if (n.intersectRaycaster !== !1 && (typeof n.intersectRaycaster != "object" || n.intersectRaycaster.enabled !== !1)) {
          if (s.push("intersectRaycaster"), t === void 0)
            return {
              value: !1,
              checkedList: s,
              reason: `intersectRaycaster check failed: panoIndex is ${t}`
            };
          if (t === ((m = this.fiveState) == null ? void 0 : m.panoIndex))
            s.push("intersectCheckSkiped");
          else {
            const v = this.computeVisibleByIntersect(t);
            if (v.value === !1)
              return Object.assign(v, { checkedList: s });
          }
        }
        return {
          value: !0,
          checkedList: s,
          reason: "all check passed"
        };
      }
    })();
  }
  /**
   * @description 计算标签可见性
   */
  computeVisibleByFiveMode(i, e) {
    const t = () => {
      var l, o;
      let s = typeof i.visibleFiveMode == "function" ? i.visibleFiveMode(this) : i.visibleFiveMode;
      if (s || (s = (o = (l = this.fiveState) == null ? void 0 : l.mode) != null ? o : this.workUtil.observers.length ? "Panorama" : "ModelLike"), Array.isArray(s))
        return s.includes(e);
      if (s === "ModelLike")
        return x(e);
      if (s === "PanoramaLike")
        return !T(e);
      if (s === "all")
        return !0;
      if (typeof s == "string")
        return s === e;
    };
    if ((() => {
      var l;
      const s = t();
      if (E((l = this.fiveState) == null ? void 0 : l.panoIndex) && i.entryFromModel) {
        if (x(e) && s ? this.entryFromModel = !1 : this.entryFromModel = !0, x(e))
          return !0;
      } else
        this.entryFromModel = !1;
      return s;
    })() === !1)
      return {
        value: !1,
        reason: "current mode is not included in visibleFiveMode",
        visibleFiveMode: i.visibleFiveMode,
        mode: e
      };
  }
  /** 通过射线检测标签可用性 */
  computeVisibleByIntersect(i) {
    var n, d, h, u;
    const e = J(J((n = this.getConfig().visibleConfig) != null ? n : {}).intersectRaycaster), t = i != null ? i : this.five.getCurrentState().panoIndex, r = T(this.five.getCurrentState().mode) ? this.workUtil.getObserverPosition(t) : this.five.camera.position;
    if (r === void 0)
      return { value: !1, reason: { type: "startPosition is undefined", fivePanoIndex: t } };
    const s = te(
      (() => {
        var m;
        const a = (m = e.checkPoints) != null ? m : "center";
        return a === "center" ? z(this) : a === "corner" ? $(this) : Array.isArray(a) ? a : [];
      })()
    );
    let l = 0, o = 0;
    for (const a of s) {
      const m = new B.Vector3().subVectors(a, r).normalize();
      let g;
      V.set(r, m);
      const [v] = this.fiveUtil.model.intersectRaycaster(V);
      g = v == null ? void 0 : v.distance;
      const b = (() => {
        if (!S(this))
          return;
        const H = this.plugin.tags.filter(S).map((Z) => {
          var F;
          return (F = Z.model) == null ? void 0 : F.object;
        }).filter(E), [X] = V.intersectObjects(H, !0);
        return X;
      })(), _ = r.distanceTo(a), W = (d = e.distanceAccuracy) != null ? d : 0.01;
      g = Math.min(g != null ? g : 1 / 0, (h = b == null ? void 0 : b.distance) != null ? h : 1 / 0), g + W >= _ ? l++ : o++;
      const q = (u = e.needPassed) != null ? u : 1;
      if (l >= q)
        return { value: !0 };
    }
    return o === 0 ? { value: !0 } : {
      value: !1,
      reason: {
        type: "intersectRaycaster check failed",
        passedCount: l,
        needPassed: e.needPassed,
        model: this.fiveUtil.model.name
      }
    };
  }
  computeVisibleByFloorIndex() {
    var r, s, l, o, n, d, h;
    let i = 0;
    const e = (r = this.fiveState) == null ? void 0 : r.panoIndex;
    e !== void 0 ? i = (s = this.workUtil.getObserver(e)) == null ? void 0 : s.floorIndex : i = fe(
      this.workUtil.work,
      (h = (d = (o = (l = this.model) == null ? void 0 : l.object) == null ? void 0 : o.position) != null ? d : (n = this.mediaPlane) == null ? void 0 : n.position) != null ? h : z(this)
    );
    const t = this.fiveUtil.model.shownFloor;
    return {
      value: t === null || t === i,
      currentFiveFloorIndex: t,
      tagFloorIndex: i
    };
  }
  /**
   * @description 获取是否展开
   */
  computeUnfoldedByPanoIndex(i) {
    const e = this.getConfig().unfoldedConfig;
    if (e) {
      if (typeof e == "function")
        return e(this.five, { tag: this, distance: this.getDistance({ panoIndex: i }) });
      if (e.keep === "folded")
        return !1;
      if (e.keep === "unfolded")
        return !0;
      if (e.unfoldDistance && I(this.getDistance({ panoIndex: i }), e.unfoldDistance) === !1)
        return !1;
    }
  }
  computeUnfoldedByCamera() {
    var e;
    if (this.entryFromModel && x(this.five.state.mode))
      return !1;
    const i = this.getConfig().unfoldedConfig;
    if (i) {
      if (typeof i == "function")
        return i(this.five, { tag: this, distance: this.getDistance() });
      if (i.keep === "folded")
        return !1;
      if (i.keep === "unfolded")
        return !0;
      if (i.autoUnfold === void 0 || i.autoUnfold === !1 || i.autoUnfold.enable === !1 || !i.autoUnfold.strategy)
        return;
      if (i.autoUnfold.strategy === "ScreenPostion") {
        const t = this.computeTagProject();
        if (t && I(t.x, i.autoUnfold.autoUnfoldProjectX) === !1)
          return !1;
      }
      if (i.autoUnfold.strategy === "MinimumDistance") {
        const s = this.plugin.filterPointTag.filter((o) => o.currentVisible).filter((o) => {
          const n = this.computeTagProject();
          if (!n)
            return !1;
          const { x: d, y: h, z: u } = n;
          return !(Math.abs(u) > 1 || Math.abs(d) > 1 || Math.abs(h) > 1);
        }).map((o) => ({ tag: o, id: o.id, tagConfig: o.getConfig().unfoldedConfig })).filter(({ tagConfig: o }) => {
          var n, d;
          return !(typeof o == "function" || o.keep || o.autoUnfold === !1 || ((n = o.autoUnfold) == null ? void 0 : n.enable) === !1 || ((d = o.autoUnfold) == null ? void 0 : d.strategy) !== "MinimumDistance");
        }).map((o) => w(p({}, o), { distance: o.tag.getDistance() })).filter(({ distance: o, tagConfig: n }) => {
          const d = n.autoUnfold.distance;
          return !(d && I(o, d) === !1);
        }).sort((o, n) => o.distance - n.distance).findIndex((o) => o.id === this.id);
        if (s === -1 || s <= ((e = i.autoUnfold.maxNumber) != null ? e : 1) - 1 === !1)
          return !1;
      }
      return i.autoUnfold.strategy !== "FoldWhenMove";
    }
  }
  computeTagProject() {
    const i = this.centerPosition;
    if (!i)
      return;
    const { x: e, y: t, z: r } = i.project(this.five.camera);
    if (!(r > 1))
      return { x: e, y: t, z: r };
  }
  addObjectClickHandler(i, e, t) {
    if (!e || !this.plugin.domEvents)
      return () => {
      };
    const r = () => !(!i.currentVisible || i.loading), s = (l) => {
      if (!r())
        return !1;
      t(l.origDomEvent);
    };
    return this.plugin.domEvents.addEventListener(e, "click", s), () => {
      var l;
      (l = this.plugin.domEvents) == null || l.removeEventListener(e, "click", s);
    };
  }
  whyHide() {
    var e;
    if (!this.plugin.state.enabled)
      return { reason: `plugin.state.enabled is ${this.plugin.state.enabled}` };
    if (!this.plugin.state.visible)
      return { reason: `plugin.state.visible is ${this.plugin.state.visible}` };
    if (!this.enabled)
      return { reason: `tag ${this.id} enabled is: ${this.enabled}` };
    const i = w(p({}, this.computeVisible()), {
      tagInstance: this
    });
    return i.value !== this.state.visible ? { reason: "插件故障，请联系维护人员, err: 0", info: i } : this.state.visible ? { reason: "应该是能看见才对", info: i } : i.value === !0 ? { reason: "插件故障，请联系维护人员, err: 1", info: i } : { reason: (e = i.reason.type) != null ? e : i.reason, info: i };
  }
  /**
   * @description 销毁并移除
   */
  destroy() {
    var e, t;
    const i = this.plugin.tags.findIndex((r) => r.id === this.id);
    if (i === -1) {
      console.warn(`Destroy failed: tag ${this.id} not found`);
      return;
    }
    this.disable(), (t = (e = this.tag3DContentSvelte) == null ? void 0 : e.dispose) == null || t.call(e), this.hooks.off(), this.cache.clear(), this.plugin.tags.splice(i, 1), this.plugin.tagsLengthWillUpdate = !0, this.plugin.hooks.emit("tagsLengthChange");
  }
}
export {
  Li as BaseTag
};
