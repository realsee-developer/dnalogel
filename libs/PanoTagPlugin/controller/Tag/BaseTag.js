var Q = Object.defineProperty, Y = Object.defineProperties;
var ee = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var $ = Object.prototype.hasOwnProperty, z = Object.prototype.propertyIsEnumerable;
var P = Math.pow, D = (g, t, e) => t in g ? Q(g, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : g[t] = e, y = (g, t) => {
  for (var e in t || (t = {}))
    $.call(t, e) && D(g, e, t[e]);
  if (V)
    for (var e of V(t))
      z.call(t, e) && D(g, e, t[e]);
  return g;
}, j = (g, t) => Y(g, ee(t));
var W = (g, t) => {
  var e = {};
  for (var i in g)
    $.call(g, i) && t.indexOf(i) < 0 && (e[i] = g[i]);
  if (g != null && V)
    for (var i of V(g))
      t.indexOf(i) < 0 && z.call(g, i) && (e[i] = g[i]);
  return e;
};
var a = (g, t, e) => (D(g, typeof t != "symbol" ? t + "" : t, e), e);
var L = (g, t, e) => new Promise((i, s) => {
  var o = (n) => {
    try {
      r(e.next(n));
    } catch (f) {
      s(f);
    }
  }, l = (n) => {
    try {
      r(e.throw(n));
    } catch (f) {
      s(f);
    }
  }, r = (n) => n.done ? i(n.value) : Promise.resolve(n.value).then(o, l);
  r((e = e.apply(g, t)).next());
});
import { Subscribe as te } from "../../../shared-utils/Subscribe.js";
import { calculateTagConfig as R } from "../../utils/tag/calculateTagConfig.js";
import { getTagStickType as ie } from "../../utils/tag/format.js";
import "../../../shared-utils/tag.js";
import { isPanoramaLike as E, isModelLike as B } from "../../../shared-utils/five/mode.js";
import * as k from "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import { centerPoint as ne } from "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { anyPositionToVector3 as w } from "../../../shared-utils/positionToVector3.js";
import { toArray as se } from "../../../shared-utils/util.js";
import "@realsee/five/line";
import { isNil as J, notNil as H } from "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import { blink as oe, reblink as re } from "../../../shared-utils/three/blink.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../vendor/earcut/src/earcut.js";
import { vectorToCoordinates as le } from "../../../shared-utils/vectorToCoordinate.js";
import { transformPosition as O } from "../../../shared-utils/five/transformPosition.js";
import { lookPoint as ae } from "../../../shared-utils/five/lookPoint.js";
import { uuid as fe } from "../../../shared-utils/uuid.js";
import "../../../shared-utils/five/FivePuppet.js";
import { objectAssignDeepExports as T } from "../../../vendor/object-assign-deep/objectAssignDeep.js";
import { getTagPosition as q, getTagCenterPosition as X } from "../../utils/tagPosition.js";
import { checkRange as S } from "../../utils/checkRange.js";
import { isMediaPlaneTag as Z, isMediaModelTag as _ } from "../../utils/tag/tagCheck.js";
import { getUrlExt as G } from "../../../shared-utils/url/getUrl.js";
import { getFloorIndex as de } from "../../../shared-utils/five/getFloorIndex.js";
import { safeObj as K } from "../../../shared-utils/safeObj.js";
import { Cache as ce } from "../../utils/Cache.js";
import { _raycaster as N } from "../../../shared-utils/three/temp.js";
import { withResolvers as ue } from "../../../shared-utils/promise/withResolvers.js";
import "../../../shared-utils/typescript/entries.js";
import "../../utils/tag/adaptConfig.js";
import "../../typings/tag/TagConfig.js";
import "@realsee/five";
import "../../../shared-utils/url/defaultUrls.js";
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
import "../../../shared-utils/five/getFiveFromParentChain.js";
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
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../../shared-utils/formatRad.js";
class Ht {
  constructor(t, e) {
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
    a(this, "tagNormalLine");
    a(this, "hooks");
    a(this, "zIndex");
    a(this, "manuallyOperated", !1);
    a(this, "normalLineLength");
    a(this, "play");
    a(this, "pause");
    a(this, "tag3DContentSvelte");
    a(this, "rectanglePlane");
    a(this, "boxShape");
    a(this, "polygonShape");
    a(this, "dom");
    a(this, "contentDom");
    a(this, "initialConfig");
    a(this, "computedConfig");
    /**
     * 存储当前的闪烁动画实例
     * @private
     */
    a(this, "_currentBlinkInstance");
    a(this, "cache");
    a(this, "entryFromModel");
    a(this, "_updating", !1);
    /**
     * 是否启用 hover 行为，默认 为config.popoverConfig.enabled
     */
    a(this, "hoverEnabled");
    a(this, "ready", () => {
      const { promise: t, resolve: e } = ue();
      if (!this._updating)
        e();
      else {
        const i = setInterval(() => {
          this._updating || (clearInterval(i), e());
        }, 17);
        setTimeout(() => {
          clearInterval(i), e();
        }, 300);
      }
      return t;
    });
    var f, m, p, d, c, u, v, b;
    this.plugin = t;
    const i = ie(e);
    e.stickType = i;
    const s = JSON.parse(JSON.stringify(e.data)), o = (f = e.initialConfig) != null ? f : e.config ? JSON.parse(JSON.stringify(e.config)) : {};
    e.initialConfig = o;
    const l = R(e, t.config), r = this.getConfig(e);
    e.config = r, this.id = (m = e.id) != null ? m : fe(), this.enabled = (p = e.enabled) != null ? p : !0, this.contentType = e.contentType, this.hoverEnabled = (c = (d = r.popoverConfig) == null ? void 0 : d.enabled) != null ? c : !0, this.data = (u = r.initialData) != null && u.important ? T(e.data, s, r.initialData) : T(e.data, r.initialData, s);
    let n;
    typeof r.unfoldedConfig == "object" ? r.unfoldedConfig.keep === "unfolded" ? n = !0 : r.unfoldedConfig.keep === "folded" ? n = !1 : n = !this.can("fold") : n = !this.can("fold"), this.state = y({
      visible: void 0,
      unfolded: n
    }, r.initialState), this.isPopoverConfigEnabled() && (this.state.unfolded = !1), this.normalLineLength = (b = (v = e.style) == null ? void 0 : v.point) == null ? void 0 : b.normalLen, this.originPosition = e.position, e.originPosition = this.originPosition, this.position = (() => {
      var U;
      const h = e.originPosition, x = t.workUtil.transform;
      if (e.stickType === "3DBox") {
        if (!h)
          return {
            start: [0, 0, 0],
            end: [0, 0, 0],
            rotation: [0, 0, 0]
          };
        const { start: C, end: A, rotation: F } = h;
        return {
          start: w(C.map((I) => Number(I))).toArray(),
          end: w(A.map((I) => Number(I))).toArray(),
          rotation: w(F.map((I) => Number(I))).toArray()
        };
      }
      if (e.stickType === "Polygon")
        return h ? h.map(w).map((C) => O(C, x).toArray()) : [];
      if (!h)
        return;
      let M = h;
      if (Array.isArray(h) && h.length === 4 ? M = h.map(w).map((C) => O(C, x).toArray()) : M = O(w(h), x).toArray(), (e.stickType === "2DPoint" || e.stickType === "3DPoint") && ((U = r == null ? void 0 : r.tagNormalLineConfig) != null && U.enabled) && e.normal && this.normalLineLength) {
        const C = new k.Vector3().fromArray(e.normal);
        M = new k.Vector3().fromArray(M).clone().add(C.clone().setLength(this.normalLineLength)).toArray();
      }
      return M;
    })(), this.matrix = e.matrix ? (() => {
      const h = new k.Matrix4().fromArray(e.matrix);
      return h.premultiply(t.workUtil.transform), h.elements;
    })() : e.matrix, this.initialConfig = o, this.computedConfig = l, this.stickType = i, this.config = e.config, this.fiveState = e.fiveState, this.normal = e.normal, this.cache = new ce(), this.hooks = new te(), Object.keys(e).forEach((h) => {
      this[h] === void 0 && e[h] !== void 0 && (this[h] = e[h]);
    });
  }
  get visible() {
    var t;
    return ((t = this.temporaryState) == null ? void 0 : t.visible) !== !1 && this.state.visible !== !1 && this.enabled !== !1;
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
    const t = q(this);
    return ne(...Array.isArray(t) ? t : [t]);
  }
  get currentConfig() {
    var s, o;
    const t = R(this, this.plugin.config, { useCache: !0 }), e = this.five.getCurrentState().mode, i = (s = t.configWithFiveMode) == null ? void 0 : s[e];
    return (o = i != null ? i : t) != null ? o : {};
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
  find(t) {
    return L(this, null, function* () {
      var s;
      const e = this.fiveState;
      if (!this.fiveState)
        return this;
      const i = (s = t == null ? void 0 : t.targetMode) != null ? s : this.five.state.mode;
      if (i === "Panorama") {
        const o = e == null ? void 0 : e.panoIndex;
        if (J(o))
          return this;
        const l = this.workUtil.getObserverPosition(o), r = this.centerPosition.clone().sub(l).normalize();
        this.five.setState(y({
          mode: "Panorama",
          workCode: this.workUtil.workCode,
          panoIndex: o
        }, le(r))), yield this.five.ready();
      } else
        i === "Mapview" && (yield ae(this.five, this.centerPosition, t == null ? void 0 : t.pointConfig));
      return this;
    });
  }
  /**
   * @description 获取额外的闪烁目标（子类可以重写此方法添加额外的闪烁目标，如法线等）
   * @returns 额外的闪烁目标或目标数组，返回 null/undefined 表示没有额外目标
   */
  getAdditionalBlinkTargets() {
    return null;
  }
  /**
   * @description 闪烁
   */
  blink(t) {
    return L(this, null, function* () {
      var r, n, f, m, p, d;
      yield this.ready(), this._currentBlinkInstance && !this._currentBlinkInstance.completed && ((n = (r = this._currentBlinkInstance).preComplete) == null || n.call(r), this._currentBlinkInstance = void 0);
      const e = (f = this.enabled) != null ? f : !0, i = (m = this.state) == null ? void 0 : m.visible, s = e && i;
      s === !1 && (this.state.visible = !0, this.enabled = !0, this.applyVisible(), this.plugin.render(), this.computeRenderType() !== "Mesh" ? yield new Promise((c) => {
        if (this.dom || this.contentDom) {
          c();
          return;
        }
        const u = setInterval(() => {
          (this.dom || this.contentDom) && (c(), clearInterval(u));
        }, 16.7);
      }) : this.stickType === "Model" && !((p = this.model) != null && p.object) ? yield (d = this.model) == null ? void 0 : d.promise : this.stickType === "Plane" && (yield new Promise((c) => {
        if (this.mediaPlane) {
          c();
          return;
        }
        const u = setInterval(() => {
          this.mediaPlane && (c(), clearInterval(u));
        }, 16.7);
      })), this.dom && (this.dom.style.visibility = "hidden"), this.contentDom && (this.contentDom.style.visibility = "hidden"));
      const o = (() => {
        var v, b, h;
        const c = [];
        c.push(this.dom), c.push((b = (v = this.tag3DContentSvelte) == null ? void 0 : v.css3DInstance) == null ? void 0 : b.container), c.push((h = this.model) == null ? void 0 : h.object), c.push(this.mediaPlane), c.push(this.boxShape), c.push(this.polygonShape);
        const u = this.getAdditionalBlinkTargets();
        if (u) {
          const x = Array.isArray(u) ? u : [u];
          c.push(...x);
        }
        return c.filter(Boolean);
      })();
      if (!o.length) {
        console.warn("tagDom is empty");
        return;
      }
      const l = s ? oe : re;
      this._currentBlinkInstance = l(o, y({
        begin: () => {
          s === !1 && (this.dom && (this.dom.style.visibility = ""), this.contentDom && (this.contentDom.style.visibility = ""));
        },
        updateRender: () => {
          this.five.needsRender = !0;
        }
      }, t));
      try {
        yield this._currentBlinkInstance.finished;
      } catch (c) {
        console.debug("Blink animation interrupted:", c);
      } finally {
        this._currentBlinkInstance = void 0;
      }
      e === !1 && (this.enabled = !1, this.updateVisible()), i === !1 && this.updateVisible(), s === !1 && (this.dom && (this.dom.style.visibility = ""), this.contentDom && (this.contentDom.style.visibility = ""));
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
    this.enabled = !0, this.hooks.emit("enable"), this.five.needsRender = !0, this.applyVisible();
  }
  /**
   * @description 禁用
   */
  disable() {
    var t, e, i;
    this.enabled = !1, this.hooks.emit("disable"), (t = this.rectanglePlane) == null || t.delete(), (e = this.boxShape) == null || e.delete(), (i = this.polygonShape) == null || i.delete(), this.five.needsRender = !0, this.applyVisible();
  }
  /**
   * @deprecated use `setData` instead
   */
  changeData(t, e = !0) {
    return this.setData(t, e);
  }
  /**
   * @deprecated use `setPosition` instead
   */
  changePosition(t) {
    return this.setPosition(t);
  }
  /**
   * @description 修改标签数据
   * @param deepMerge 是否深度合并 data，默认为 true
   */
  setData(t, e = !0) {
    e ? this.data = T(this.data, t) : this.data = y(y({}, this.data), t), this.hooks.emit("dataChanged", this.data);
  }
  /**
   * @description 修改标签位置
   */
  setPosition(t) {
    throw new Error("Method not implemented.");
  }
  /**
   * @description 设置标签实例的属性
   * @param deepMerge 是否深度合并 data，默认为 true
   */
  set(t, e = !0) {
    this.plugin.tagsLengthWillUpdate = !0, e ? T(this, t) : Object.assign(this, t), this.cache.clear();
  }
  updateConfig() {
    var i;
    const t = this.getConfig(void 0, { useCache: !1 });
    this.computedConfig = t;
    const e = this.getConfig();
    if (this.config = e, this.config.initialData) {
      const s = JSON.parse(JSON.stringify(this.data));
      this.data = (i = e.initialData) != null && i.important ? T(this.data, s, e.initialData) : T(this.data, e.initialData, s);
    }
    this.cache.clear();
  }
  updateVisible() {
    this.enabled ? (this.state.visible = this.getVisible(), this.applyVisible()) : this.applyVisible(), this.five.needsRender = !0, this._updating = !1;
  }
  updateZIndex() {
    const t = this.getSquaredDistance();
    this.zIndex = Math.round((1e4 - (t != null ? t : 0)) * 100);
  }
  getConfig(t, e) {
    var l, r, n;
    const i = R(t != null ? t : this, this.plugin.config, { useCache: e == null ? void 0 : e.useCache }), s = (l = e == null ? void 0 : e.fiveMode) != null ? l : this.five.getCurrentState().mode, o = (r = i.configWithFiveMode) == null ? void 0 : r[s];
    return (n = o != null ? o : i) != null ? n : {};
  }
  getDistance(t, e = 3) {
    const i = y(y({}, this.five.getCurrentState()), t), { panoIndex: s, mode: o } = i, l = o === "Panorama" ? this.workUtil.getObserverPosition(s) : this.five.camera.position, r = this.centerPosition;
    return !l || !r ? -1 : l.distanceTo(r);
  }
  /**
   * @description 用于排序的距离，性能更好
   */
  getSquaredDistance() {
    const t = this.five.camera.position;
    if (this.stickType === "3DBox") {
      const i = this.position;
      if (!i || !i.start)
        return 1 / 0;
      const s = i.start;
      return P(s[0] - t.x, 2) + P(s[1] - t.y, 2) + P(s[2] - t.z, 2);
    }
    if (this.stickType === "Polygon") {
      const i = this.position;
      if (!i || i.length === 0)
        return 1 / 0;
      const s = i[0];
      return P(s[0] - t.x, 2) + P(s[1] - t.y, 2) + P(s[2] - t.z, 2);
    }
    let e;
    return this.position || console.log(this, "no position"), Array.isArray(this.position[0]) ? e = this.position[0] : e = this.position, P(e[0] - t.x, 2) + P(e[1] - t.y, 2) + P(e[2] - t.z, 2);
  }
  getVisible(t) {
    if (!this.enabled || !this.plugin.state.enabled || !this.fiveUtil.model)
      return !1;
    const e = y(y({}, this.five.getCurrentState()), t);
    let i = this.cache.getVisible(this, e);
    return J(i) && (i = this.computeVisible(e).value, this.cache.setVisible(this, e, i)), i;
  }
  getUnfoldedByPanoIndex(t) {
    if (!this.currentVisible)
      return;
    const i = this.computeUnfoldedByPanoIndex(t);
    return i && this.getUnfoldedByCamera();
  }
  getUnfoldedByCamera() {
    return this.currentVisible ? this.computeUnfoldedByCamera() : void 0;
  }
  can(t) {
    var i, s;
    if ((t === "fold" || t === "unfold") && ((s = (i = this.currentConfig) == null ? void 0 : i.popoverConfig) == null ? void 0 : s.enabled) === !0)
      return !1;
    const e = this.currentConfig;
    if (!e || typeof e != "object")
      return !0;
    if (t === "show" || t === "hide") {
      if (!e.visibleConfig || typeof e.visibleConfig != "object")
        return !0;
      if (t === "show" && e.visibleConfig.keep === "hidden" || t === "hide" && e.visibleConfig.keep === "visible")
        return !1;
    }
    if (t === "fold" || t === "unfold") {
      if (!e.unfoldedConfig || typeof e.unfoldedConfig != "object")
        return !0;
      if (t === "fold" && e.unfoldedConfig.keep === "unfolded" || t === "unfold" && e.unfoldedConfig.keep === "folded")
        return !1;
    }
    return !0;
  }
  onClick(t) {
  }
  computeRenderType() {
    const t = (() => {
      if (this.stickType === "3DPoint")
        return "Dom";
      const e = this.getConfig();
      if (!e || typeof e != "object" || !e.renderType)
        return;
      const i = this.data.mediaData;
      if ((!i || i.length === 0) && Z(this))
        return e.renderType;
      if (e.renderType === "Mesh") {
        if (Z(this)) {
          if (i.length === 1) {
            if (i[0].type === "Video")
              return navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && navigator.userAgent.toLowerCase().indexOf("mobile") > -1 ? "Dom" : "Mesh";
            if (i[0].type === "Image")
              return G(i[0].url) === "gif" ? "Dom" : "Mesh";
          }
        } else if (_(this))
          return i.length === 1 && i[0].type === "Image" ? G(i[0].url) === "gif" ? "Dom" : "Mesh" : "BehindDom";
      }
    })();
    return t != null ? t : "Dom";
  }
  computeVisible(t) {
    const e = y(y({}, this.five.getCurrentState()), t), { panoIndex: i, mode: s } = e, o = [];
    return (() => {
      var f, p, d, c;
      const n = (f = this.getConfig().visibleConfig) != null ? f : {};
      if (typeof n == "function")
        return {
          value: n(this.five, { tag: this, distance: this.getDistance(e, void 0) }),
          checkedList: o,
          reason: "config function result"
        };
      {
        if (n.keep === "hidden")
          return { value: !1, checkedList: o, reason: "config.keep is hidden" };
        if (n.keep === "visible")
          return { value: !0, checkedList: o, reason: "config.keep is visible" };
        const u = this.computeVisibleByFiveMode(n, s);
        if ((u == null ? void 0 : u.value) === !1)
          return u;
        if (n.followModelVisibility === !0 && ["poincare", "aerophoto", "sand"].includes(this.workUtil.fromType) && (s === "Floorplan" || s === "Mapview")) {
          const m = this.computeVisibleByFloorIndex(), { value: v } = m, b = W(m, ["value"]);
          if (v === !1)
            return y({ value: !1, checkedList: o, reason: "followModelVisibility check failed" }, b);
        }
        if (E(s) && n.visiblePanoIndex !== void 0 && n.visiblePanoIndex !== "all" && i !== void 0) {
          if (o.push("visiblePanoIndex"), Array.isArray(n.visiblePanoIndex) && !n.visiblePanoIndex.includes(i))
            return {
              value: !1,
              checkedList: o,
              reason: `current panoIndex is not included in visiblePano. currentPanoIndex: ${i}, visiblePanoIndex: ${n.visiblePanoIndex}`
            };
          if (n.visiblePanoIndex === "current" && i !== ((p = this.fiveState) == null ? void 0 : p.panoIndex))
            return {
              value: !1,
              checkedList: o,
              reason: `current panoIndex is not equal to tag.panoIndex. currentPanoIndex: ${i}, tag.panoIndex: ${(d = this.fiveState) == null ? void 0 : d.panoIndex}`
            };
        }
        if (n.visibleDistance !== void 0 && (o.push("visibleDistance"), n.visibleDistance !== "unLimited")) {
          const v = this.getDistance(e, 1);
          if (S(v, n.visibleDistance) === !1)
            return {
              value: !1,
              checkedList: o,
              panoIndex: i,
              visibleDistance: n.visibleDistance,
              reason: `distance is not in visibleDistance. distance: ${v}, visibleDistance: ${n.visibleDistance.min} - ${n.visibleDistance.max}`
            };
        }
        if (n.intersectRaycaster !== !1 && (typeof n.intersectRaycaster != "object" || n.intersectRaycaster.enabled !== !1)) {
          if (o.push("intersectRaycaster"), i === void 0)
            return {
              value: !1,
              checkedList: o,
              reason: `intersectRaycaster check failed: panoIndex is ${i}`
            };
          if (i === ((c = this.fiveState) == null ? void 0 : c.panoIndex))
            o.push("intersectCheckSkiped");
          else {
            const v = this.computeVisibleByIntersect(i);
            if (v.value === !1)
              return Object.assign(v, { checkedList: o });
          }
        }
        return {
          value: !0,
          checkedList: o,
          reason: "all check passed"
        };
      }
    })();
  }
  /**
   * @description 计算标签可见性
   */
  computeVisibleByFiveMode(t, e) {
    const i = () => {
      var l, r;
      let o = typeof t.visibleFiveMode == "function" ? t.visibleFiveMode(this) : t.visibleFiveMode;
      if (o || (o = (r = (l = this.fiveState) == null ? void 0 : l.mode) != null ? r : this.workUtil.observers.length ? "Panorama" : "ModelLike"), Array.isArray(o))
        return o.includes(e);
      if (o === "ModelLike")
        return B(e);
      if (o === "PanoramaLike")
        return !E(e);
      if (o === "all")
        return !0;
      if (typeof o == "string")
        return o === e;
    };
    if ((() => {
      var l;
      const o = i();
      if (H((l = this.fiveState) == null ? void 0 : l.panoIndex) && t.entryFromModel) {
        if (B(e) && o ? this.entryFromModel = !1 : this.entryFromModel = !0, B(e))
          return !0;
      } else
        this.entryFromModel = !1;
      return o;
    })() === !1)
      return {
        value: !1,
        reason: "current mode is not included in visibleFiveMode",
        visibleFiveMode: t.visibleFiveMode,
        mode: e
      };
  }
  /** 通过射线检测标签可用性 */
  computeVisibleByIntersect(t) {
    var n, f, m, p;
    const e = K(K((n = this.getConfig().visibleConfig) != null ? n : {}).intersectRaycaster), i = t != null ? t : this.five.getCurrentState().panoIndex, s = E(this.five.getCurrentState().mode) ? this.workUtil.getObserverPosition(i) : this.five.camera.position;
    if (s === void 0)
      return { value: !1, reason: { type: "startPosition is undefined", fivePanoIndex: i } };
    const o = se(
      (() => {
        var c;
        const d = (c = e.checkPoints) != null ? c : "center";
        return d === "center" ? X(this) : d === "corner" ? q(this) : Array.isArray(d) ? d : [];
      })()
    );
    let l = 0, r = 0;
    for (const d of o) {
      const c = new k.Vector3().subVectors(d, s).normalize();
      let u;
      N.set(s, c);
      const [v] = this.fiveUtil.model.intersectRaycaster(N);
      u = v == null ? void 0 : v.distance;
      const b = (() => {
        if (!_(this))
          return;
        const C = this.plugin.tags.filter(_).map((F) => {
          var I;
          return (I = F.model) == null ? void 0 : I.object;
        }).filter(H), [A] = N.intersectObjects(C, !0);
        return A;
      })(), h = s.distanceTo(d), x = (f = e.distanceAccuracy) != null ? f : 0.01;
      u = Math.min(u != null ? u : 1 / 0, (m = b == null ? void 0 : b.distance) != null ? m : 1 / 0), u + x >= h ? l++ : r++;
      const U = (p = e.needPassed) != null ? p : 1;
      if (l >= U)
        return { value: !0 };
    }
    return r === 0 ? { value: !0 } : {
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
    var s, o, l, r, n, f, m;
    let t = 0;
    const e = (s = this.fiveState) == null ? void 0 : s.panoIndex;
    e !== void 0 ? t = (o = this.workUtil.getObserver(e)) == null ? void 0 : o.floorIndex : t = de(
      this.workUtil.work,
      (m = (f = (r = (l = this.model) == null ? void 0 : l.object) == null ? void 0 : r.position) != null ? f : (n = this.mediaPlane) == null ? void 0 : n.position) != null ? m : X(this)
    );
    const i = this.fiveUtil.model.shownFloor;
    return {
      value: i === null || i === t,
      currentFiveFloorIndex: i,
      tagFloorIndex: t
    };
  }
  /**
   * @description 获取是否展开
   */
  computeUnfoldedByPanoIndex(t) {
    const e = this.getConfig().unfoldedConfig;
    if (e) {
      if (typeof e == "function")
        return e(this.five, { tag: this, distance: this.getDistance({ panoIndex: t }) });
      if (e.keep === "folded")
        return !1;
      if (e.keep === "unfolded")
        return !0;
      if (e.unfoldDistance && S(this.getDistance({ panoIndex: t }), e.unfoldDistance) === !1)
        return !1;
    }
  }
  // 该方法有很大优化空间，这个检测显示方法不应该挂在tagBase下，做了多次不必要计算（MinimumDistance，ScreenCenter）。
  computeUnfoldedByCamera() {
    var e, i;
    if (this.entryFromModel && B(this.five.state.mode))
      return !1;
    const t = this.getConfig().unfoldedConfig;
    if (t) {
      if (typeof t == "function")
        return t(this.five, { tag: this, distance: this.getDistance() });
      if (t.keep === "folded")
        return !1;
      if (t.keep === "unfolded")
        return !0;
      if (typeof t != "object" || t.autoUnfold === void 0 || t.autoUnfold === !1 || t.autoUnfold.enable === !1 || !t.autoUnfold.strategy)
        return;
      if (t.autoUnfold.strategy === "ScreenPostion") {
        const s = this.computeTagProject();
        if (s && S(s.x, t.autoUnfold.autoUnfoldProjectX) === !1)
          return !1;
      }
      if (t.autoUnfold.strategy === "MinimumDistance") {
        const l = this.plugin.filterPointTag.filter((n) => n.currentVisible).filter((n) => {
          const f = this.computeTagProject();
          if (!f)
            return !1;
          const { x: m, y: p, z: d } = f;
          return !(Math.abs(d) > 1 || Math.abs(m) > 1 || Math.abs(p) > 1);
        }).map((n) => ({ tag: n, id: n.id, tagConfig: n.getConfig().unfoldedConfig })).filter(({ tagConfig: n }) => {
          var f, m;
          return !(typeof n == "function" || n.keep || n.autoUnfold === !1 || ((f = n.autoUnfold) == null ? void 0 : f.enable) === !1 || ((m = n.autoUnfold) == null ? void 0 : m.strategy) !== "MinimumDistance");
        }).map((n) => j(y({}, n), { distance: n.tag.getDistance() })).filter(({ distance: n, tagConfig: f }) => {
          const m = f.autoUnfold.distance;
          return !(m && S(n, m) === !1);
        }).sort((n, f) => n.distance - f.distance).findIndex((n) => n.id === this.id);
        if (l === -1 || l <= ((e = t.autoUnfold.maxNumber) != null ? e : 1) - 1 === !1)
          return !1;
      }
      if (t.autoUnfold.strategy === "FoldWhenMove")
        return !1;
      if (t.autoUnfold.strategy === "ScreenCenter") {
        const s = this.plugin.filterPointTag, o = new k.Matrix4();
        o.multiplyMatrices(this.five.camera.projectionMatrix, this.five.camera.matrixWorldInverse);
        const l = new k.Frustum();
        l.setFromProjectionMatrix(o);
        const r = this.five.camera.getWorldDirection(new k.Vector3()), f = s.filter((p) => {
          var v, b;
          if (!p.currentVisible)
            return !1;
          const d = p.getConfig().unfoldedConfig;
          if (p.manuallyOperated || typeof d != "object" || (d == null ? void 0 : d.autoUnfold) === !1 || ((v = d == null ? void 0 : d.autoUnfold) == null ? void 0 : v.strategy) !== "ScreenCenter" || d.keep || ((b = d.autoUnfold) == null ? void 0 : b.enable) === !1 || !l.containsPoint(new k.Vector3().fromArray(p.position)))
            return !1;
          const u = d.autoUnfold.distance;
          if (u) {
            const h = p.getDistance();
            if (S(h, u) === !1)
              return !1;
          }
          return !0;
        }).sort((p, d) => {
          const c = new k.Vector3().fromArray(p.position), u = new k.Vector3().fromArray(d.position);
          return r.angleTo(c.sub(this.five.camera.position)) - r.angleTo(u.sub(this.five.camera.position));
        }).findIndex((p) => p.id === this.id);
        if (f === -1 || f <= ((i = t.autoUnfold.maxNumber) != null ? i : 1) - 1 === !1)
          return !1;
      }
      return !0;
    }
  }
  computeTagProject() {
    const t = this.centerPosition;
    if (!t)
      return;
    const { x: e, y: i, z: s } = t.project(this.five.camera);
    if (!(s > 1))
      return { x: e, y: i, z: s };
  }
  addObjectClickHandler(t, e, i) {
    if (!e || !this.plugin.domEvents)
      return () => {
      };
    const s = () => !(!t.currentVisible || t.loading), o = (l) => {
      if (!s())
        return !1;
      i(l.origDomEvent);
    };
    return this.plugin.domEvents.addEventListener(e, "click", o), () => {
      var l;
      (l = this.plugin.domEvents) == null || l.removeEventListener(e, "click", o);
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
    const t = j(y({}, this.computeVisible()), {
      tagInstance: this
    });
    return t.value !== this.state.visible ? { reason: "插件故障，请联系维护人员, err: 0", info: t } : this.state.visible ? { reason: "应该是能看见才对", info: t } : t.value === !0 ? { reason: "插件故障，请联系维护人员, err: 1", info: t } : { reason: (e = t.reason.type) != null ? e : t.reason, info: t };
  }
  /**
   * @description 销毁并移除
   */
  destroy() {
    var e, i, s, o;
    const t = this.plugin.tags.findIndex((l) => l.id === this.id);
    if (t === -1) {
      console.warn(`Destroy failed: tag ${this.id} not found`);
      return;
    }
    this._currentBlinkInstance && !this._currentBlinkInstance.completed && ((i = (e = this._currentBlinkInstance).preComplete) == null || i.call(e), this._currentBlinkInstance = void 0), this.disable(), (o = (s = this.tag3DContentSvelte) == null ? void 0 : s.dispose) == null || o.call(s), this.hooks.off(), this.cache.clear(), this.plugin.tags.splice(t, 1), this.plugin.tagsLengthWillUpdate = !0, this.plugin.hooks.emit("tagsLengthChange");
  }
  /**
   * @description 判断 popover 是否在配置上启用（永久配置）
   */
  isPopoverConfigEnabled() {
    var t, e;
    return ((e = (t = this.currentConfig) == null ? void 0 : t.popoverConfig) == null ? void 0 : e.enabled) === !0;
  }
  /**
   * @description 判断当前标签是否允许临时 hover 弹出 popover（临时控制）
   */
  isHoverEnabled() {
    var t;
    return !(((t = this.plugin) == null ? void 0 : t.globalHoverEnabled) === !1 || this.hoverEnabled === !1);
  }
}
export {
  Ht as BaseTag
};
