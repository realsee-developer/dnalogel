var G = Object.defineProperty, K = Object.defineProperties;
var Q = Object.getOwnPropertyDescriptors;
var P = Object.getOwnPropertySymbols;
var j = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var k = Math.pow, w = (u, i, e) => i in u ? G(u, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : u[i] = e, g = (u, i) => {
  for (var e in i || (i = {}))
    j.call(i, e) && w(u, e, i[e]);
  if (P)
    for (var e of P(i))
      A.call(i, e) && w(u, e, i[e]);
  return u;
}, U = (u, i) => K(u, Q(i));
var E = (u, i) => {
  var e = {};
  for (var t in u)
    j.call(u, t) && i.indexOf(t) < 0 && (e[t] = u[t]);
  if (u != null && P)
    for (var t of P(u))
      i.indexOf(t) < 0 && A.call(u, t) && (e[t] = u[t]);
  return e;
};
var a = (u, i, e) => (w(u, typeof i != "symbol" ? i + "" : i, e), e);
var C = (u, i, e) => new Promise((t, r) => {
  var n = (s) => {
    try {
      o(e.next(s));
    } catch (f) {
      r(f);
    }
  }, l = (s) => {
    try {
      o(e.throw(s));
    } catch (f) {
      r(f);
    }
  }, o = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(n, l);
  o((e = e.apply(u, i)).next());
});
import { Subscribe as Y } from "../../../shared-utils/Subscribe.js";
import { calculateTagConfig as T } from "../../utils/tag/calculateTagConfig.js";
import { getTagStickType as ee } from "../../utils/tag/format.js";
import "../../../shared-utils/tag.js";
import { isPanoramaLike as S, isModelLike as x } from "../../../shared-utils/five/mode.js";
import * as B from "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import { centerPoint as ie } from "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { anyPositionToVector3 as O } from "../../../shared-utils/positionToVector3.js";
import { toArray as te } from "../../../shared-utils/util.js";
import "@realsee/five/line";
import { isNil as R, notNil as L } from "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import { blink as ne, reblink as se } from "../../../shared-utils/three/blink.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { vectorToCoordinates as oe } from "../../../shared-utils/vectorToCoordinate.js";
import { transformPosition as $ } from "../../../shared-utils/five/transformPosition.js";
import { lookPoint as re } from "../../../shared-utils/five/lookPoint.js";
import { uuid as le } from "../../../shared-utils/uuid.js";
import "../../../shared-utils/five/FivePuppet.js";
import { objectAssignDeepExports as y } from "../../../vendor/object-assign-deep/objectAssignDeep.js";
import { getTagPosition as z, getTagCenterPosition as N } from "../../utils/tagPosition.js";
import { checkRange as I } from "../../utils/checkRange.js";
import { isMediaPlaneTag as ae, isMediaModelTag as V } from "../../utils/tag/tagCheck.js";
import { getUrlExt as J } from "../../../shared-utils/url/getUrl.js";
import { getFloorIndex as fe } from "../../../shared-utils/five/getFloorIndex.js";
import { safeObj as _ } from "../../../shared-utils/safeObj.js";
import { Cache as de } from "../../utils/Cache.js";
import { _raycaster as F } from "../../../shared-utils/three/temp.js";
import { withResolvers as ue } from "../../../shared-utils/promise/withResolvers.js";
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
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../../shared-utils/formatRad.js";
class Ji {
  constructor(i, e) {
    a(this, "plugin");
    a(this, "id");
    a(this, "contentType");
    a(this, "stickType");
    a(this, "enabled");
    a(this, "config");
    a(this, "data");
    a(this, "state");
    a(this, "temporaryState", { visible: !0 });
    a(this, "originPosition");
    a(this, "position");
    a(this, "fiveState");
    a(this, "model");
    a(this, "matrix");
    a(this, "screenPosition");
    a(this, "normal");
    a(this, "mediaPlane");
    a(this, "hooks");
    a(this, "zIndex");
    a(this, "play");
    a(this, "pause");
    a(this, "tag3DContentSvelte");
    a(this, "dom");
    a(this, "contentDom");
    a(this, "initialConfig");
    a(this, "computedConfig");
    a(this, "cache");
    a(this, "entryFromModel");
    a(this, "_updating", !1);
    /**
     * 是否启用 hover 行为，默认 为config.popoverConfig.enabled
     */
    a(this, "hoverEnabled");
    a(this, "ready", () => {
      const { promise: i, resolve: e } = ue();
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
    var f, p, c, h, v, m;
    this.plugin = i;
    const t = ee(e);
    e.stickType = t;
    const r = JSON.parse(JSON.stringify(e.data)), n = (f = e.initialConfig) != null ? f : e.config ? JSON.parse(JSON.stringify(e.config)) : {};
    e.initialConfig = n;
    const l = T(e, i.config), o = this.getConfig(e);
    e.config = o, this.id = (p = e.id) != null ? p : le(), this.enabled = (c = e.enabled) != null ? c : !0, this.contentType = e.contentType, this.hoverEnabled = (v = (h = o.popoverConfig) == null ? void 0 : h.enabled) != null ? v : !0, this.data = (m = o.initialData) != null && m.important ? y(e.data, r, o.initialData) : y(e.data, o.initialData, r);
    let s;
    typeof o.unfoldedConfig == "object" ? o.unfoldedConfig.keep === "unfolded" ? s = !0 : o.unfoldedConfig.keep === "folded" ? s = !1 : s = !this.can("fold") : s = !this.can("fold"), this.state = g({
      visible: void 0,
      unfolded: s
    }, o.initialState), this.isPopoverConfigEnabled() && (this.state.unfolded = !1), this.originPosition = e.position, e.originPosition = this.originPosition, this.position = (() => {
      const d = e.originPosition;
      if (!d)
        return;
      const b = i.workUtil.transform;
      return Array.isArray(d) && d.length === 4 ? d.map(O).map((M) => $(M, b).toArray()) : $(O(d), b).toArray();
    })(), this.matrix = e.matrix ? (() => {
      const d = new B.Matrix4().fromArray(e.matrix);
      return d.premultiply(i.workUtil.transform), d.elements;
    })() : e.matrix, this.initialConfig = n, this.computedConfig = l, this.stickType = t, this.config = e.config, this.fiveState = e.fiveState, this.normal = e.normal, this.cache = new de(), this.hooks = new Y(), Object.keys(e).forEach((d) => {
      this[d] === void 0 && e[d] !== void 0 && (this[d] = e[d]);
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
    const i = z(this);
    return ie(...Array.isArray(i) ? i : [i]);
  }
  get currentConfig() {
    var r, n;
    const i = T(this, this.plugin.config, { useCache: !0 }), e = this.five.getCurrentState().mode, t = (r = i.configWithFiveMode) == null ? void 0 : r[e];
    return (n = t != null ? t : i) != null ? n : {};
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
    return C(this, null, function* () {
      var r;
      const e = this.fiveState;
      if (!this.fiveState)
        return this;
      const t = (r = i == null ? void 0 : i.targetMode) != null ? r : this.five.state.mode;
      if (t === "Panorama") {
        const n = e == null ? void 0 : e.panoIndex;
        if (R(n))
          return this;
        const l = this.workUtil.getObserverPosition(n), o = this.centerPosition.clone().sub(l).normalize();
        this.five.setState(g({
          mode: "Panorama",
          workCode: this.workUtil.workCode,
          panoIndex: n
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
    return C(this, null, function* () {
      var o, s, f, p;
      yield this.ready();
      const e = (o = this.enabled) != null ? o : !0, t = (s = this.state) == null ? void 0 : s.visible, r = e && t;
      r === !1 && (this.state.visible = !0, this.enabled = !0, this.applyVisible(), this.plugin.render(), this.computeRenderType() !== "Mesh" ? yield new Promise((c) => C(this, null, function* () {
        if (this.dom || this.contentDom) {
          c();
          return;
        }
        const h = setInterval(() => {
          (this.dom || this.contentDom) && (c(), clearInterval(h));
        }, 16.7);
      })) : this.stickType === "Model" && !((f = this.model) != null && f.object) ? yield (p = this.model) == null ? void 0 : p.promise : this.stickType === "Plane" && (yield new Promise((c) => C(this, null, function* () {
        if (this.mediaPlane) {
          c();
          return;
        }
        const h = setInterval(() => {
          this.mediaPlane && (c(), clearInterval(h));
        }, 16.7);
      }))), this.dom && (this.dom.style.visibility = "hidden"), this.contentDom && (this.contentDom.style.visibility = "hidden"));
      const n = (() => {
        var h, v, m;
        const c = [];
        return c.push(this.dom), c.push((v = (h = this.tag3DContentSvelte) == null ? void 0 : h.css3DInstance) == null ? void 0 : v.container), c.push((m = this.model) == null ? void 0 : m.object), c.push(this.mediaPlane), c.filter(Boolean);
      })();
      if (!n.length) {
        console.warn("tagDom is empty");
        return;
      }
      yield (r ? ne : se)(n, g({
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
    e ? this.data = y(this.data, i) : this.data = g(g({}, this.data), i), this.hooks.emit("dataChanged", this.data);
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
    var l, o, s;
    const t = T(i != null ? i : this, this.plugin.config, { useCache: e == null ? void 0 : e.useCache }), r = (l = e == null ? void 0 : e.fiveMode) != null ? l : this.five.getCurrentState().mode, n = (o = t.configWithFiveMode) == null ? void 0 : o[r];
    return (s = n != null ? n : t) != null ? s : {};
  }
  getDistance(i, e = 3) {
    const t = g(g({}, this.five.getCurrentState()), i), { panoIndex: r, mode: n } = t, l = n === "Panorama" ? this.workUtil.getObserverPosition(r) : this.five.camera.position, o = this.centerPosition;
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
    const e = g(g({}, this.five.getCurrentState()), i);
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
    var t, r;
    if ((i === "fold" || i === "unfold") && ((r = (t = this.currentConfig) == null ? void 0 : t.popoverConfig) == null ? void 0 : r.enabled) === !0)
      return !1;
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
              return J(t[0].url) === "gif" ? "Dom" : "Mesh";
          }
        } else if (V(this))
          return t.length === 1 && t[0].type === "Image" ? J(t[0].url) === "gif" ? "Dom" : "Mesh" : "BehindDom";
      }
    })();
    return i != null ? i : "Dom";
  }
  computeVisible(i) {
    const e = g(g({}, this.five.getCurrentState()), i), { panoIndex: t, mode: r } = e, n = [];
    return (() => {
      var f, c, h, v;
      const s = (f = this.getConfig().visibleConfig) != null ? f : {};
      if (typeof s == "function")
        return {
          value: s(this.five, { tag: this, distance: this.getDistance(e, void 0) }),
          checkedList: n,
          reason: "config function result"
        };
      {
        if (s.keep === "hidden")
          return { value: !1, checkedList: n, reason: "config.keep is hidden" };
        if (s.keep === "visible")
          return { value: !0, checkedList: n, reason: "config.keep is visible" };
        const m = this.computeVisibleByFiveMode(s, r);
        if ((m == null ? void 0 : m.value) === !1)
          return m;
        if (s.followModelVisibility === !0 && ["poincare", "aerophoto", "sand"].includes(this.workUtil.fromType) && (r === "Floorplan" || r === "Mapview")) {
          const p = this.computeVisibleByFloorIndex(), { value: d } = p, b = E(p, ["value"]);
          if (d === !1)
            return g({ value: !1, checkedList: n, reason: "followModelVisibility check failed" }, b);
        }
        if (S(r) && s.visiblePanoIndex !== void 0 && s.visiblePanoIndex !== "all" && t !== void 0) {
          if (n.push("visiblePanoIndex"), Array.isArray(s.visiblePanoIndex) && !s.visiblePanoIndex.includes(t))
            return {
              value: !1,
              checkedList: n,
              reason: `current panoIndex is not included in visiblePano. currentPanoIndex: ${t}, visiblePanoIndex: ${s.visiblePanoIndex}`
            };
          if (s.visiblePanoIndex === "current" && t !== ((c = this.fiveState) == null ? void 0 : c.panoIndex))
            return {
              value: !1,
              checkedList: n,
              reason: `current panoIndex is not equal to tag.panoIndex. currentPanoIndex: ${t}, tag.panoIndex: ${(h = this.fiveState) == null ? void 0 : h.panoIndex}`
            };
        }
        if (s.visibleDistance !== void 0 && (n.push("visibleDistance"), s.visibleDistance !== "unLimited")) {
          const d = this.getDistance(e, 1);
          if (I(d, s.visibleDistance) === !1)
            return {
              value: !1,
              checkedList: n,
              panoIndex: t,
              visibleDistance: s.visibleDistance,
              reason: `distance is not in visibleDistance. distance: ${d}, visibleDistance: ${s.visibleDistance.min} - ${s.visibleDistance.max}`
            };
        }
        if (s.intersectRaycaster !== !1 && (typeof s.intersectRaycaster != "object" || s.intersectRaycaster.enabled !== !1)) {
          if (n.push("intersectRaycaster"), t === void 0)
            return {
              value: !1,
              checkedList: n,
              reason: `intersectRaycaster check failed: panoIndex is ${t}`
            };
          if (t === ((v = this.fiveState) == null ? void 0 : v.panoIndex))
            n.push("intersectCheckSkiped");
          else {
            const d = this.computeVisibleByIntersect(t);
            if (d.value === !1)
              return Object.assign(d, { checkedList: n });
          }
        }
        return {
          value: !0,
          checkedList: n,
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
      let n = typeof i.visibleFiveMode == "function" ? i.visibleFiveMode(this) : i.visibleFiveMode;
      if (n || (n = (o = (l = this.fiveState) == null ? void 0 : l.mode) != null ? o : this.workUtil.observers.length ? "Panorama" : "ModelLike"), Array.isArray(n))
        return n.includes(e);
      if (n === "ModelLike")
        return x(e);
      if (n === "PanoramaLike")
        return !S(e);
      if (n === "all")
        return !0;
      if (typeof n == "string")
        return n === e;
    };
    if ((() => {
      var l;
      const n = t();
      if (L((l = this.fiveState) == null ? void 0 : l.panoIndex) && i.entryFromModel) {
        if (x(e) && n ? this.entryFromModel = !1 : this.entryFromModel = !0, x(e))
          return !0;
      } else
        this.entryFromModel = !1;
      return n;
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
    var s, f, p, c;
    const e = _(_((s = this.getConfig().visibleConfig) != null ? s : {}).intersectRaycaster), t = i != null ? i : this.five.getCurrentState().panoIndex, r = S(this.five.getCurrentState().mode) ? this.workUtil.getObserverPosition(t) : this.five.camera.position;
    if (r === void 0)
      return { value: !1, reason: { type: "startPosition is undefined", fivePanoIndex: t } };
    const n = te(
      (() => {
        var v;
        const h = (v = e.checkPoints) != null ? v : "center";
        return h === "center" ? N(this) : h === "corner" ? z(this) : Array.isArray(h) ? h : [];
      })()
    );
    let l = 0, o = 0;
    for (const h of n) {
      const v = new B.Vector3().subVectors(h, r).normalize();
      let m;
      F.set(r, v);
      const [d] = this.fiveUtil.model.intersectRaycaster(F);
      m = d == null ? void 0 : d.distance;
      const b = (() => {
        if (!V(this))
          return;
        const q = this.plugin.tags.filter(V).map((Z) => {
          var D;
          return (D = Z.model) == null ? void 0 : D.object;
        }).filter(L), [X] = F.intersectObjects(q, !0);
        return X;
      })(), M = r.distanceTo(h), H = (f = e.distanceAccuracy) != null ? f : 0.01;
      m = Math.min(m != null ? m : 1 / 0, (p = b == null ? void 0 : b.distance) != null ? p : 1 / 0), m + H >= M ? l++ : o++;
      const W = (c = e.needPassed) != null ? c : 1;
      if (l >= W)
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
    var r, n, l, o, s, f, p;
    let i = 0;
    const e = (r = this.fiveState) == null ? void 0 : r.panoIndex;
    e !== void 0 ? i = (n = this.workUtil.getObserver(e)) == null ? void 0 : n.floorIndex : i = fe(
      this.workUtil.work,
      (p = (f = (o = (l = this.model) == null ? void 0 : l.object) == null ? void 0 : o.position) != null ? f : (s = this.mediaPlane) == null ? void 0 : s.position) != null ? p : N(this)
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
        const n = this.plugin.filterPointTag.filter((o) => o.currentVisible).filter((o) => {
          const s = this.computeTagProject();
          if (!s)
            return !1;
          const { x: f, y: p, z: c } = s;
          return !(Math.abs(c) > 1 || Math.abs(f) > 1 || Math.abs(p) > 1);
        }).map((o) => ({ tag: o, id: o.id, tagConfig: o.getConfig().unfoldedConfig })).filter(({ tagConfig: o }) => {
          var s, f;
          return !(typeof o == "function" || o.keep || o.autoUnfold === !1 || ((s = o.autoUnfold) == null ? void 0 : s.enable) === !1 || ((f = o.autoUnfold) == null ? void 0 : f.strategy) !== "MinimumDistance");
        }).map((o) => U(g({}, o), { distance: o.tag.getDistance() })).filter(({ distance: o, tagConfig: s }) => {
          const f = s.autoUnfold.distance;
          return !(f && I(o, f) === !1);
        }).sort((o, s) => o.distance - s.distance).findIndex((o) => o.id === this.id);
        if (n === -1 || n <= ((e = i.autoUnfold.maxNumber) != null ? e : 1) - 1 === !1)
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
    const r = () => !(!i.currentVisible || i.loading), n = (l) => {
      if (!r())
        return !1;
      t(l.origDomEvent);
    };
    return this.plugin.domEvents.addEventListener(e, "click", n), () => {
      var l;
      (l = this.plugin.domEvents) == null || l.removeEventListener(e, "click", n);
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
    const i = U(g({}, this.computeVisible()), {
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
  /**
   * @description 判断 popover 是否在配置上启用（永久配置）
   */
  isPopoverConfigEnabled() {
    var i, e;
    return ((e = (i = this.currentConfig) == null ? void 0 : i.popoverConfig) == null ? void 0 : e.enabled) === !0;
  }
  /**
   * @description 判断当前标签是否允许临时 hover 弹出 popover（临时控制）
   */
  isHoverEnabled() {
    var i;
    return !(((i = this.plugin) == null ? void 0 : i.globalHoverEnabled) === !1 || this.hoverEnabled === !1);
  }
}
export {
  Ji as BaseTag
};
