var Z = Object.defineProperty, G = Object.defineProperties;
var K = Object.getOwnPropertyDescriptors;
var P = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, D = Object.prototype.propertyIsEnumerable;
var M = (c, i, e) => i in c ? Z(c, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[i] = e, p = (c, i) => {
  for (var e in i || (i = {}))
    S.call(i, e) && M(c, e, i[e]);
  if (P)
    for (var e of P(i))
      D.call(i, e) && M(c, e, i[e]);
  return c;
}, I = (c, i) => G(c, K(i));
var j = (c, i) => {
  var e = {};
  for (var t in c)
    S.call(c, t) && i.indexOf(t) < 0 && (e[t] = c[t]);
  if (c != null && P)
    for (var t of P(c))
      i.indexOf(t) < 0 && D.call(c, t) && (e[t] = c[t]);
  return e;
};
var f = (c, i, e) => (M(c, typeof i != "symbol" ? i + "" : i, e), e);
var y = (c, i, e) => new Promise((t, r) => {
  var n = (s) => {
    try {
      o(e.next(s));
    } catch (d) {
      r(d);
    }
  }, l = (s) => {
    try {
      o(e.throw(s));
    } catch (d) {
      r(d);
    }
  }, o = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(n, l);
  o((e = e.apply(c, i)).next());
});
import { Subscribe as Q } from "../../../shared-utils/Subscribe.js";
import { calculateTagConfig as w } from "../../utils/tag/calculateTagConfig.js";
import { getTagStickType as Y } from "../../utils/tag/format.js";
import { isPanoramaLike as U, isModelLike as C } from "../../../shared-utils/five/mode.js";
import * as B from "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import { centerPoint as ee } from "../../../shared-utils/three/centerPoint.js";
import "@realsee/five/line";
import "../../../vendor/three/examples/jsm/lines/LineGeometry.js";
import { anyPositionToVector3 as A } from "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/tag.js";
import { toArray as ie } from "../../../shared-utils/util.js";
import "../../../shared-utils/three/core/Sphere.js";
import { blink as te, reblink as ne } from "../../../shared-utils/three/blink.js";
import { vectorToCoordinates as se } from "../../../shared-utils/vectorToCoordinate.js";
import { transformPosition as O } from "../../../shared-utils/five/transformPosition.js";
import { isNil as R, notNil as E } from "../../../shared-utils/isNil.js";
import { lookPoint as oe } from "../../../shared-utils/five/lookPoint.js";
import { uuid as re } from "../../../shared-utils/uuid.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { objectAssignDeepExports as b } from "../../../vendor/object-assign-deep/objectAssignDeep.js";
import { getTagPosition as L, getTagCenterPosition as $ } from "../../utils/tagPosition.js";
import { checkRange as k } from "../../utils/checkRange.js";
import { isMediaPlaneTag as le, isMediaModelTag as T } from "../../utils/tag/tagCheck.js";
import { getUrlExt as N } from "../../../shared-utils/url/getUrl.js";
import { getFloorIndex as ae } from "../../../shared-utils/five/getFloorIndex.js";
import { safeObj as z } from "../../../shared-utils/safeObj.js";
import { Cache as fe } from "../../utils/Cache.js";
import { _raycaster as V } from "../../../shared-utils/three/temp.js";
import "../../../shared-utils/typescript/entries.js";
import "../../utils/tag/adaptConfig.js";
import "../../typings/tag/TagConfig.js";
import "@realsee/five";
import "animejs";
import "../../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../../vendor/three/build/three.module.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/formatRad.js";
class ii {
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
    var s, d, h, u;
    this.plugin = i;
    const t = Y(e);
    e.stickType = t;
    const r = JSON.parse(JSON.stringify(e.data)), n = (s = e.initialConfig) != null ? s : e.config ? JSON.parse(JSON.stringify(e.config)) : {};
    e.initialConfig = n;
    const l = w(e, i.config), o = this.getConfig(e);
    e.config = o, this.id = (d = e.id) != null ? d : re(), this.enabled = (h = e.enabled) != null ? h : !0, this.contentType = e.contentType, this.data = (u = o.initialData) != null && u.important ? b(e.data, r, o.initialData) : b(e.data, o.initialData, r), this.state = p({
      visible: void 0,
      unfolded: !this.can("fold")
    }, o.initialState), this.originPosition = e.position, e.originPosition = this.originPosition, this.position = (() => {
      const a = e.originPosition;
      if (!a)
        return;
      const g = i.workUtil.transform;
      return Array.isArray(a) && a.length === 4 ? a.map(A).map((m) => O(m, g).toArray()) : O(A(a), g).toArray();
    })(), this.matrix = e.matrix ? (() => {
      const a = new B.Matrix4().fromArray(e.matrix);
      return a.premultiply(i.workUtil.transform), a.elements;
    })() : e.matrix, this.initialConfig = n, this.computedConfig = l, this.stickType = t, this.config = e.config, this.fiveState = e.fiveState, this.normal = e.normal, this.cache = new fe(), this.hooks = new Q(), Object.keys(e).forEach((a) => {
      this[a] === void 0 && e[a] !== void 0 && (this[a] = e[a]);
    });
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
    const i = L(this);
    return ee(...Array.isArray(i) ? i : [i]);
  }
  get currentConfig() {
    var r, n;
    const i = w(this, this.plugin.config, { useCache: !0 }), e = this.five.getCurrentState().mode, t = (r = i.configWithFiveMode) == null ? void 0 : r[e];
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
    return y(this, null, function* () {
      var r;
      const e = this.fiveState;
      if (!this.fiveState)
        return;
      const t = (r = i == null ? void 0 : i.targetMode) != null ? r : this.five.state.mode;
      if (t === "Panorama") {
        const n = e == null ? void 0 : e.panoIndex;
        if (R(n))
          return;
        const l = this.workUtil.getObserverPosition(n), o = this.centerPosition.clone().sub(l).normalize();
        this.five.setState(p({
          mode: "Panorama",
          workCode: this.workUtil.workCode,
          panoIndex: n
        }, se(o))), yield this.five.ready();
      } else
        t === "Mapview" && (yield oe(this.five, this.centerPosition, i == null ? void 0 : i.pointConfig));
    });
  }
  /**
   * @description 闪烁
   */
  blink(i) {
    return y(this, null, function* () {
      var o, s, d, h;
      const e = (o = this.enabled) != null ? o : !0, t = (s = this.state) == null ? void 0 : s.visible, r = e && t;
      r === !1 && (this.state.visible = !0, this.enabled = !0, this.applyVisible(), this.plugin.render(), this.computeRenderType() !== "Mesh" ? yield new Promise((u) => y(this, null, function* () {
        if (this.dom || this.contentDom) {
          u();
          return;
        }
        const a = setInterval(() => {
          (this.dom || this.contentDom) && (u(), clearInterval(a));
        }, 16.7);
      })) : this.stickType === "Model" && !((d = this.model) != null && d.object) ? yield (h = this.model) == null ? void 0 : h.promise : this.stickType === "Plane" && (yield new Promise((u) => y(this, null, function* () {
        if (this.mediaPlane) {
          u();
          return;
        }
        const a = setInterval(() => {
          this.mediaPlane && (u(), clearInterval(a));
        }, 16.7);
      }))), this.dom && (this.dom.style.visibility = "hidden"), this.contentDom && (this.contentDom.style.visibility = "hidden"));
      const n = (() => {
        var a;
        const u = [];
        return u.push(this.dom), this.stickType !== "2DPoint" && u.push(this.contentDom), u.push((a = this.model) == null ? void 0 : a.object), u.push(this.mediaPlane), u.filter(Boolean);
      })();
      if (!n.length) {
        console.warn("tagDom is empty");
        return;
      }
      yield (r ? te : ne)(n, p({
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
    e ? this.data = b(this.data, i) : this.data = p(p({}, this.data), i), this.hooks.emit("dataChanged", this.data);
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
    this.plugin.tagsLengthWillUpdate = !0, e ? b(this, i) : Object.assign(this, i), this.cache.clear();
  }
  updateConfig() {
    var t;
    const i = this.getConfig(void 0, { useCache: !1 });
    this.computedConfig = i;
    const e = this.getConfig();
    if (this.config = e, this.config.initialData) {
      const r = JSON.parse(JSON.stringify(this.data));
      this.data = (t = e.initialData) != null && t.important ? b(this.data, r, e.initialData) : b(this.data, e.initialData, r);
    }
    this.cache.clear();
  }
  updateVisible() {
    this.state.visible = this.getVisible(), this.applyVisible();
  }
  updateZIndex() {
    const i = this.getDistance();
    this.zIndex = Math.round((1e4 - (i != null ? i : 0)) * 100);
  }
  getConfig(i, e) {
    var l, o, s;
    const t = w(i != null ? i : this, this.plugin.config, { useCache: e == null ? void 0 : e.useCache }), r = (l = e == null ? void 0 : e.fiveMode) != null ? l : this.five.getCurrentState().mode, n = (o = t.configWithFiveMode) == null ? void 0 : o[r];
    return (s = n != null ? n : t) != null ? s : {};
  }
  getDistance(i, e = 3) {
    const t = p(p({}, this.five.getCurrentState()), i), { panoIndex: r, mode: n } = t, l = n === "Panorama" ? this.workUtil.getObserverPosition(r) : this.five.camera.position, o = this.centerPosition;
    return !l || !o ? -1 : l.distanceTo(o);
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
      if (i === "show" && e.visibleConfig.keep === "hidden" || i === "hide" && (e.visibleConfig.keep === "visible" || e.visibleConfig.alwaysShowWhenMovePano))
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
        if (le(this)) {
          if (t.length === 1) {
            if (t[0].type === "Video")
              return navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && navigator.userAgent.toLowerCase().indexOf("mobile") > -1 ? "Dom" : "Mesh";
            if (t[0].type === "Image")
              return N(t[0].url) === "gif" ? "Dom" : "Mesh";
          }
        } else if (T(this))
          return t.length === 1 && t[0].type === "Image" ? N(t[0].url) === "gif" ? "Dom" : "Mesh" : "BehindDom";
      }
    })();
    return i != null ? i : "Dom";
  }
  computeVisible(i) {
    const e = p(p({}, this.five.getCurrentState()), i), { panoIndex: t, mode: r } = e, n = [];
    return (() => {
      var d, u, a;
      const s = (d = this.getConfig().visibleConfig) != null ? d : {};
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
        const g = this.computeVisibleByFiveMode(s, r);
        if ((g == null ? void 0 : g.value) === !1)
          return g;
        if (s.followModelVisibility === !0 && ["poincare", "aerophoto", "sand"].includes(this.workUtil.fromType) && (r === "Floorplan" || r === "Mapview")) {
          const h = this.computeVisibleByFloorIndex(), { value: m } = h, v = j(h, ["value"]);
          if (m === !1)
            return p({ value: !1, checkedList: n, reason: "followModelVisibility check failed" }, v);
        }
        if (U(r) && s.visiblePanoIndex !== void 0 && s.visiblePanoIndex !== "all" && t !== void 0) {
          if (n.push("visiblePanoIndex"), Array.isArray(s.visiblePanoIndex) && !s.visiblePanoIndex.includes(t))
            return {
              value: !1,
              checkedList: n,
              reason: `current panoIndex is not included in visiblePano. currentPanoIndex: ${t}, visiblePanoIndex: ${s.visiblePanoIndex}`
            };
          if (s.visiblePanoIndex === "current" && t !== ((u = this.fiveState) == null ? void 0 : u.panoIndex))
            return {
              value: !1,
              checkedList: n,
              reason: `current panoIndex is not equal to tag.panoIndex. currentPanoIndex: ${t}, tag.panoIndex: ${(a = this.fiveState) == null ? void 0 : a.panoIndex}`
            };
        }
        if (s.visibleDistance !== void 0 && (n.push("visibleDistance"), s.visibleDistance !== "unLimited")) {
          const m = this.getDistance(e, 1);
          if (k(m, s.visibleDistance) === !1)
            return {
              value: !1,
              checkedList: n,
              panoIndex: t,
              visibleDistance: s.visibleDistance,
              reason: `distance is not in visibleDistance. distance: ${m}, visibleDistance: ${s.visibleDistance.min} - ${s.visibleDistance.max}`
            };
        }
        if (s.intersectRaycaster !== !1 && (typeof s.intersectRaycaster != "object" || s.intersectRaycaster.enabled !== !1)) {
          if (n.push("intersectRaycaster"), t === void 0)
            return {
              value: !1,
              checkedList: n,
              reason: `intersectRaycaster check failed: panoIndex is ${t}`
            };
          const m = this.computeVisibleByIntersect(t);
          if (m.value === !1)
            return Object.assign(m, { checkedList: n });
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
        return C(e);
      if (n === "PanoramaLike")
        return !U(e);
      if (n === "all")
        return !0;
      if (typeof n == "string")
        return n === e;
    };
    if ((() => {
      var l;
      const n = t();
      if (E((l = this.fiveState) == null ? void 0 : l.panoIndex) && i.entryFromModel) {
        if (C(e) && n ? this.entryFromModel = !1 : this.entryFromModel = !0, C(e))
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
    var s, d, h, u;
    const e = z(z((s = this.getConfig().visibleConfig) != null ? s : {}).intersectRaycaster), t = i != null ? i : this.five.getCurrentState().panoIndex, r = U(this.five.getCurrentState().mode) ? this.workUtil.getObserverPosition(t) : this.five.camera.position;
    if (r === void 0)
      return { value: !1, reason: { type: "startPosition is undefined", fivePanoIndex: t } };
    const n = ie(
      (() => {
        var g;
        const a = (g = e.checkPoints) != null ? g : "center";
        return a === "center" ? $(this) : a === "corner" ? L(this) : Array.isArray(a) ? a : [];
      })()
    );
    let l = 0, o = 0;
    for (const a of n) {
      const g = new B.Vector3().subVectors(a, r).normalize();
      let m;
      V.set(r, g);
      const [v] = this.fiveUtil.model.intersectRaycaster(V);
      m = v == null ? void 0 : v.distance;
      const x = (() => {
        if (!T(this))
          return;
        const _ = this.plugin.tags.filter(T).map((X) => {
          var F;
          return (F = X.model) == null ? void 0 : F.object;
        }).filter(E), [q] = V.intersectObjects(_, !0);
        return q;
      })(), J = r.distanceTo(a), W = (d = e.distanceAccuracy) != null ? d : 0.01;
      m = Math.min(m != null ? m : 1 / 0, (h = x == null ? void 0 : x.distance) != null ? h : 1 / 0), m + W >= J ? l++ : o++;
      const H = (u = e.needPassed) != null ? u : 1;
      if (l >= H)
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
    var r, n, l, o, s, d, h;
    let i = 0;
    const e = (r = this.fiveState) == null ? void 0 : r.panoIndex;
    e !== void 0 ? i = (n = this.workUtil.getObserver(e)) == null ? void 0 : n.floorIndex : i = ae(
      this.workUtil.work,
      (h = (d = (o = (l = this.model) == null ? void 0 : l.object) == null ? void 0 : o.position) != null ? d : (s = this.mediaPlane) == null ? void 0 : s.position) != null ? h : $(this)
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
      if (e.unfoldDistance && k(this.getDistance({ panoIndex: i }), e.unfoldDistance) === !1)
        return !1;
    }
  }
  computeUnfoldedByCamera() {
    var e;
    if (this.entryFromModel && C(this.five.state.mode))
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
        if (t && k(t.x, i.autoUnfold.autoUnfoldProjectX) === !1)
          return !1;
      }
      if (i.autoUnfold.strategy === "MinimumDistance") {
        const n = this.plugin.filterPointTag.filter((o) => o.currentVisible).filter((o) => {
          const s = this.computeTagProject();
          if (!s)
            return !1;
          const { x: d, y: h, z: u } = s;
          return !(Math.abs(u) > 1 || Math.abs(d) > 1 || Math.abs(h) > 1);
        }).map((o) => ({ tag: o, id: o.id, tagConfig: o.getConfig().unfoldedConfig })).filter(({ tagConfig: o }) => {
          var s, d;
          return !(typeof o == "function" || o.keep || o.autoUnfold === !1 || ((s = o.autoUnfold) == null ? void 0 : s.enable) === !1 || ((d = o.autoUnfold) == null ? void 0 : d.strategy) !== "MinimumDistance");
        }).map((o) => I(p({}, o), { distance: o.tag.getDistance() })).filter(({ distance: o, tagConfig: s }) => {
          const d = s.autoUnfold.distance;
          return !(d && k(o, d) === !1);
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
    const i = I(p({}, this.computeVisible()), {
      tagInstance: this
    });
    return i.value !== this.state.visible ? { reason: "插件故障，请联系维护人员, err: 0", info: i } : this.state.visible ? { reason: "应该是能看见才对", info: i } : i.value === !0 ? { reason: "插件故障，请联系维护人员, err: 1", info: i } : { reason: (e = i.reason.type) != null ? e : i.reason, info: i };
  }
  /**
   * @description 销毁并移除
   */
  destroy() {
    const i = this.plugin.tags.findIndex((e) => e.id === this.id);
    if (i === -1) {
      console.warn(`Destroy failed: tag ${this.id} not found`);
      return;
    }
    this.disable(), this.hooks.off(), this.cache.clear(), this.plugin.tags.splice(i, 1), this.plugin.tagsLengthWillUpdate = !0, this.plugin.hooks.emit("tagsLengthChange");
  }
}
export {
  ii as BaseTag
};
