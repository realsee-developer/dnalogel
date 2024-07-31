var q = Object.defineProperty, K = Object.defineProperties;
var Q = Object.getOwnPropertyDescriptors;
var L = Object.getOwnPropertySymbols;
var Y = Object.prototype.hasOwnProperty, ee = Object.prototype.propertyIsEnumerable;
var k = (l, s, e) => s in l ? q(l, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[s] = e, D = (l, s) => {
  for (var e in s || (s = {}))
    Y.call(s, e) && k(l, e, s[e]);
  if (L)
    for (var e of L(s))
      ee.call(s, e) && k(l, e, s[e]);
  return l;
}, V = (l, s) => K(l, Q(s));
var f = (l, s, e) => (k(l, typeof s != "symbol" ? s + "" : s, e), e);
import { defaultGlobalConfig as ie } from "../typings/tag/TagConfig.js";
import { objectAssignDeepExports as y } from "../../vendor/object-assign-deep/objectAssignDeep.js";
import * as U from "three";
import { DefaultConfig as te } from "../tag.config.js";
import { anyPositionToVector3 as P } from "../../shared-utils/positionToVector3.js";
import { planeNormal as E } from "../utils/planeNormal.js";
import { getTagCenterPosition as B } from "../utils/tagPosition.js";
import { normalPositionToPositions as oe } from "../utils/normalPositionToPositions.js";
import { TagCache as ne } from "./TagCache.js";
import { writable as re } from "../../vendor/svelte/store/index.js";
import { isIOSWX as se } from "../../shared-utils/device.js";
import { CSS3DRenderPlugin as fe } from "../../CSS3DRenderPlugin/index.js";
import { Five as ae } from "@realsee/five";
import { isMediaPlaneTag as ce, isMediaModelTag as N, isPlaneTag as le, isPoint3DTag as de } from "../utils/tag/tagCheck.js";
import { VideoPlane as ue } from "../utils/model/mediaPlane.js";
import { FiveDomEvents as me } from "../../shared-utils/five/FiveDomEvents.js";
import z from "../utils/tag/adaptConfig.js";
import { isPanoramaLike as S, isModelLike as $ } from "../../shared-utils/five/mode.js";
import "hammerjs";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "animejs";
import { entries as H } from "../../shared-utils/typescript/entries.js";
import { getUrlExt as J } from "../../shared-utils/url/getUrl.js";
import { transformPosition as G } from "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/centerPoint.js";
import "../../base/BasePlugin.js";
import "../../shared-utils/Subscribe.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/even.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../../shared-utils/url/absoluteUrl.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../vendor/svelte/internal/index.js";
import "../../CSS3DRenderPlugin/Controller.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/loadTexture.js";
import "../../shared-utils/three/Quadrangle.js";
import "../../shared-utils/math/pointIsRectangle.js";
import "../../shared-utils/three/loadVideoTexture.js";
import "../Assets/Icon.js";
import "../../shared-utils/three/getPositionsByObjectFit.js";
import "../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../shared-utils/three/getNormal.js";
import "../../shared-utils/five/calculateThreeMouse.js";
class Ti extends ne {
  constructor(e) {
    super(e);
    f(this, "tags", []);
    f(this, "config", te);
    /** 插件参数 */
    f(this, "params");
    f(this, "mediaStore", re({
      currentMediaElement: null
    }));
    f(this, "store", {
      disposers: [],
      disposed: !1,
      resizeObserverDisposerAdding: !1,
      css3DRenderDisposer: /* @__PURE__ */ new Map()
    });
    f(this, "domEvents", new me(this.five));
    f(this, "_cache_pointTag");
    f(this, "_cache_2DPointTag");
    f(this, "_cache_imagePlane");
    f(this, "_cache_mediaModel");
    f(this, "_cache_css3DTag");
    f(this, "_container", null);
    f(this, "_css3DRenderPlugin");
    f(this, "loadVideoFirstFrame", () => {
      se && this.hooks.emit("loadVideoFirstFrame");
    });
    this.mediaStore.subscribe(({ currentMediaElement: i }) => {
      this.tags.forEach((o) => {
        var t;
        if (o.mediaPlane instanceof ue && i !== o.mediaPlane.videoInstance) {
          if (!((t = o.mediaPlane.videoInstance) != null && t.src) || i === o.mediaPlane.videoInstance)
            return;
          o.mediaPlane.pause();
        }
      });
    });
  }
  get container() {
    var e;
    return this._container || ((e = this.five.getElement()) == null ? void 0 : e.parentElement);
  }
  set container(e) {
    this._container = e;
  }
  // eslint-disable-next-line accessor-pairs
  set tagsLengthWillUpdate(e) {
    e && (this._cache_pointTag = this.tags.filter((i) => i.stickType === "2DPoint" || i.stickType === "3DPoint").filter((i) => i.position), this._cache_2DPointTag = this.tags.filter((i) => i.stickType === "2DPoint").filter((i) => i.position), this._cache_imagePlane = this.tags.filter(
      (i) => i.contentType === "MediaPlane" && i.stickType === "Plane" && this.getRenderType(i) === "Mesh"
    ), this._cache_mediaModel = this.tags.filter((i) => i.stickType === "Model" && i.contentType === "MediaModel"), this._cache_css3DTag = this.tags.filter(
      (i) => i.stickType === "3DPoint" || i.stickType === "Plane" || i.stickType === "Model" && i.contentType === "MediaModel"
    ).filter((i) => {
      const o = this.getRenderType(i);
      return o === "BehindDom" || o === "Dom";
    }));
  }
  /** css3DRenderPlugin */
  get css3DRenderPlugin() {
    var e, i, o;
    if (!this._css3DRenderPlugin) {
      const t = fe(this.five);
      this._css3DRenderPlugin = t, (e = t.frontModeCSS3DRenderer) != null && e.domElementWrapper && (t.frontModeCSS3DRenderer.domElementWrapper.style.zIndex = (o = (i = this.params.containerZIndex) == null ? void 0 : i.toString()) != null ? o : "");
    }
    return this._css3DRenderPlugin;
  }
  get filterPointTag() {
    var e;
    return (e = this._cache_pointTag) != null ? e : [];
  }
  get filter2DPointTag() {
    var e;
    return (e = this._cache_2DPointTag) != null ? e : [];
  }
  get filterImagePlane() {
    var e;
    return (e = this._cache_imagePlane) != null ? e : [];
  }
  get filterMediaModel() {
    var e;
    return (e = this._cache_mediaModel) != null ? e : [];
  }
  get filterCSS3DTag() {
    var e;
    return (e = this._cache_css3DTag) != null ? e : [];
  }
  getTagById(e) {
    const i = this.tags.find((o) => o.id === e);
    if (!i) {
      console.warn(`getTagById Error: can't find tag id: ${e}`);
      return;
    }
    return i;
  }
  /** 暂停当前标签内进行的所有多媒体 */
  pauseCurrentMedia() {
    this.mediaStore.set({ currentMediaElement: null });
  }
  /**
   * @description 获取标签配置
   */
  getTagConfig(e, i) {
    var r, a, d;
    const o = this.calculateTagConfig(e, { useCache: i == null ? void 0 : i.useCache }), t = (r = i == null ? void 0 : i.fiveMode) != null ? r : this.five.getCurrentState().mode, n = (a = o.configWithFiveMode) == null ? void 0 : a[t];
    return (d = n != null ? n : o) != null ? d : {};
  }
  /**
   * @description 获取标签当前状态
   */
  getCurrentVisibleState(e) {
    return !(!this.state.enabled || !this.state.visible || !e.enabled || !e.state.visible);
  }
  updateTagConfig() {
    this.clearCache(), this.tags.forEach((e) => {
      var t;
      const i = this.getTagConfig(e, { useCache: !1 });
      e.computedConfig = i;
      const o = this.getTagConfig(e);
      if (e.config = o, e.config.initialData) {
        const n = JSON.parse(JSON.stringify(e.data));
        e.data = (t = o.initialData) != null && t.important ? y(e.data, n, o.initialData) : y(e.data, o.initialData, n);
      }
    });
  }
  can(e, i) {
    const o = i, t = this.getTagConfig(o);
    if (!t || typeof t != "object")
      return !0;
    if (e === "show" || e === "hide") {
      if (!t.visibleConfig || typeof t.visibleConfig != "object")
        return !0;
      if (e === "show" && t.visibleConfig.keep === "hidden" || e === "hide" && (t.visibleConfig.keep === "visible" || t.visibleConfig.alwaysShowWhenMovePano))
        return !1;
    }
    if (e === "fold" || e === "unfold") {
      if (!t.unfoldedConfig || typeof t.unfoldedConfig != "object")
        return !0;
      if (e === "fold" && t.unfoldedConfig.keep === "unfolded" || e === "unfold" && t.unfoldedConfig.keep === "folded")
        return !1;
    }
    return !0;
  }
  getRenderType(e) {
    const i = (() => {
      if (e.stickType === "3DPoint")
        return "Dom";
      const o = this.getTagConfig(e);
      if (!o || typeof o != "object" || !o.renderType)
        return;
      const t = e.data.mediaData;
      if (!(!t || t.length === 0) && o.renderType === "Mesh") {
        if (ce(e)) {
          if (t.length === 1) {
            if (t[0].type === "Video")
              return navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && navigator.userAgent.toLowerCase().indexOf("mobile") > -1 ? "Dom" : "Mesh";
            if (t[0].type === "Image")
              return J(t[0].url) === "gif" ? "Dom" : "Mesh";
          }
        } else if (N(e))
          return t.length === 1 && t[0].type === "Image" ? J(t[0].url) === "gif" ? "Dom" : "Mesh" : "BehindDom";
      }
    })();
    return i != null ? i : "Dom";
  }
  /**
   * @description 获取角度
   */
  getAngle(e, i) {
    const o = i != null ? i : this.five.getCurrentState().panoIndex;
    if (o === void 0)
      throw new Error(`getAngle(): fivePanoIndex is ${o}`);
    const t = this.getPanoIndexCache({ panoIndex: i, id: e.id });
    if (t.angle !== void 0)
      return t.angle;
    {
      const n = this.workUtil.getObserverPosition(o);
      if (n === void 0)
        throw new Error(`getAngle(): observerPosition is ${n}`);
      const r = (() => e.stickType === "3DPoint" ? P(e.normal) : E(e.position))();
      if (!r)
        return;
      const a = B(e);
      if (!a)
        return;
      const d = new U.Vector3().copy(n).sub(a), g = r.angleTo(d) * 180 / Math.PI;
      return t.angle = g, t.angle;
    }
  }
  /**
   * @description 获取距离
   */
  getDistance(e, i) {
    const o = D(D({}, this.five.getCurrentState()), i), { panoIndex: t, mode: n } = o, r = S(n) ? this.getPanoIndexCache({ panoIndex: t, id: e.id }) : void 0;
    if ((r == null ? void 0 : r.distance) !== void 0)
      return r.distance;
    const a = B(e);
    if (!a)
      return -1;
    if (S(n)) {
      const d = this.workUtil.getObserverPosition(t);
      if (d === void 0)
        return -1;
      const g = d.distanceTo(a);
      return r && (r.distance = g), g;
    }
    if ($(n))
      return this.five.camera.position.distanceTo(a);
  }
  getPositions(e) {
    if (le(e))
      return e.position;
    if (N(e))
      return e.data.mediaPosition;
    if (de(e))
      return oe(this.five.camera.position, P(e.position), P(e.normal));
  }
  addObjectClickHandler(e, i, o) {
    if (!i || !this.domEvents)
      return () => {
      };
    const t = () => !(!this.getCurrentVisibleState(e) || e.loading), n = (r) => {
      if (!t())
        return !1;
      o(r.origDomEvent);
    };
    return this.domEvents.addEventListener(i, "click", n), () => {
      var r;
      (r = this.domEvents) == null || r.removeEventListener(i, "click", n);
    };
  }
  getTagNormal(e) {
    if (e.normal)
      return P(e.normal);
    if (e.stickType === "Plane")
      return E(e.position);
    if (e.stickType === "Model")
      return E(this.getPositions(e));
  }
  getTransformedPostion(e) {
    if (!e)
      return;
    const i = this.workUtil.transform;
    return Array.isArray(e) && e.length === 4 ? e.map(P).map((o) => G(o, i)) : G(P(e), i);
  }
  getTransformedMatrix(e) {
    const i = new U.Matrix4().fromArray(e);
    return i.premultiply(this.workUtil.transform), i.elements;
  }
  /**
   * @description 检查是否已经销毁
   * @returns isDisposed; 已经销毁返回 true，否则返回 false
   */
  checkDisposed() {
    return this.store.disposed ? (console.error("PanoTagPluginController has been disposed"), !0) : !1;
  }
  /**
   * @description 获取merge后的配置
   */
  calculateTagConfig(e, i) {
    var w, A, x, O, I;
    const o = (w = i == null ? void 0 : i.useCache) != null ? w : !0;
    if (!e)
      return (A = this.config.globalConfig) != null ? A : {};
    if (o) {
      if ((x = e == null ? void 0 : e.computedConfig) != null && x._isMerged)
        return e.computedConfig;
      if ((O = e == null ? void 0 : e.config) != null && O._isMerged)
        return e.config;
    }
    const t = {}, n = {}, r = {};
    this.config.contentTypeConfig && Object.entries(this.config.contentTypeConfig).forEach(([u, m]) => {
      var W, R;
      const c = u, _ = c.split("-"), j = u.startsWith("["), T = j ? _[0].slice(1, -1) : void 0, h = j ? _.slice(1) : _, v = T ? ["PanoramaLike", "ModelLike"].includes(T) ? (W = n[T]) != null ? W : n[T] = {} : (R = r[T]) != null ? R : r[T] = {} : t;
      if (!v[c]) {
        if (h.length === 0 && (v[c] = m), h.length === 1) {
          const [p] = h;
          (e.contentType === p || p === "Any") && (v[c] = m);
        }
        if (h.length === 2) {
          const [p = "Any", M = "Any"] = h;
          p === "Mixin" && e.contentType === M && (v[c] = m), (e.stickType === p || p === "Any") && (e.contentType === M || M === "Any") && (v[c] = m);
        }
        if (h.length === 3) {
          const [p = "Any", M, Z] = h;
          if (M === "Audio" && e.contentType === "Audio") {
            const F = e;
            (F.stickType === p || p === "Any") && F.data.appearance === Z && (v[c] = m);
          }
        }
      }
    });
    const a = (I = e.initialConfig) != null ? I : {}, d = y({}, ie, this.config.globalConfig, ...Object.values(t)), g = y({}, d, a), C = {}, X = Object.values(ae.Mode);
    H(n).forEach(([u, m]) => {
      X.forEach((c) => {
        (u === "PanoramaLike" && S(c) || u === "ModelLike" && $(c)) && (C[c] = y({}, d, ...Object.values(m), a, { _isMerged: !0 }));
      });
    }), H(r).forEach(([u, m]) => {
      const c = C[u];
      C[u] = y({}, d, c, ...Object.values(m), a, { _isMerged: !0 });
    });
    const b = V(D({}, g), { configWithFiveMode: C });
    return z(b), Object.values(C).forEach((u) => z(u)), b._isMerged = !0, b;
  }
}
export {
  Ti as TagUtil
};
