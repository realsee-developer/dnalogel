var $ = Object.defineProperty, q = Object.defineProperties;
var z = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var G = Object.prototype.hasOwnProperty, X = Object.prototype.propertyIsEnumerable;
var D = (a, n, e) => n in a ? $(a, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[n] = e, W = (a, n) => {
  for (var e in n || (n = {}))
    G.call(n, e) && D(a, e, n[e]);
  if (S)
    for (var e of S(n))
      X.call(n, e) && D(a, e, n[e]);
  return a;
}, Q = (a, n) => q(a, z(n));
var s = (a, n, e) => (D(a, typeof n != "symbol" ? n + "" : n, e), e);
import { defaultGlobalConfig as J } from "../typings/tag/TagConfig.js";
import { DefaultConfig as K } from "../tag.config.js";
import "three";
import { anyPositionToVector3 as V } from "../../shared-utils/positionToVector3.js";
import { isPlaneTag as N, isMediaModelTag as U, isPoint3DTag as Y } from "../utils/tag/tagCheck.js";
import { normalPositionToPositions as Z } from "../utils/normalPositionToPositions.js";
import { writable as ee } from "../../vendor/svelte/store/index.js";
import { isIOSWX as te } from "../../shared-utils/device.js";
import { Five as ie } from "@realsee/five";
import { VideoPlane as oe } from "../utils/model/mediaPlane.js";
import "../../shared-utils/tag.js";
import { isPanoramaLike as re, isModelLike as ne } from "../../shared-utils/five/mode.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { FiveDomEvents as x } from "../../shared-utils/five/FiveDomEvents.js";
import "../../shared-utils/five/FivePuppet.js";
import { Cache as se } from "../utils/Cache.js";
import { Controller as ce } from "../../base/BasePlugin.js";
import { objectAssignDeepExports as P } from "../../vendor/object-assign-deep/objectAssignDeep.js";
import { entries as B } from "../../shared-utils/typescript/entries.js";
import H from "../utils/tag/adaptConfig.js";
import "../../vendor/svelte/internal/index.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/loadTexture.js";
import "../../shared-utils/three/Quadrangle.js";
import "../../shared-utils/math/pointsIsRectangle.js";
import "../../shared-utils/three/loadVideoTexture.js";
import "../Assets/Icon.js";
import "../../shared-utils/three/getPositionsByObjectFit.js";
import "../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../shared-utils/three/getNormal.js";
import "../../shared-utils/constants.js";
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
import "../../shared-utils/throttle.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../shared-utils/even.js";
import "../../shared-utils/CSS3DRender/OpacityMesh.js";
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
import "../../shared-utils/five/calculateThreeMouse.js";
import "../../shared-utils/url/absoluteUrl.js";
class zt extends ce {
  constructor(e) {
    super(e);
    s(this, "tags", []);
    s(this, "cache", new se());
    s(this, "config", K);
    s(this, "renderQueue", /* @__PURE__ */ new Map());
    /** 插件参数 */
    s(this, "params");
    // eslint-disable-next-line @typescript-eslint/member-ordering
    s(this, "mediaStore", ee({
      currentMediaElement: null
    }));
    s(this, "store", {
      disposers: [],
      disposed: !1,
      resizeObserverDisposerAdding: !1,
      css3DRenderDisposer: /* @__PURE__ */ new Map()
    });
    // eslint-disable-next-line @typescript-eslint/member-ordering
    s(this, "domEvents", new x(this.five));
    s(this, "_cache_pointTag");
    s(this, "_cache_2DPointTag");
    s(this, "_cache_css3DTag");
    s(this, "_container", null);
    s(this, "timeoutIds", []);
    s(this, "whyHide", (e) => {
      const t = this.getTagById(e);
      return t ? t.whyHide() : { reason: `tag ${e} not found` };
    });
    s(this, "loadVideoFirstFrame", () => {
      te && this.hooks.emit("loadVideoFirstFrame");
    });
    s(this, "tagsDo", (e, t, i = !0) => {
      let o = [...e != null ? e : this.tags].sort((r, f) => r.getSquaredDistance() - f.getSquaredDistance());
      this.timeoutIds.forEach((r) => clearTimeout(r)), this.timeoutIds.length = 0;
      for (let r = 0; r < 20; r++) {
        const f = o[r];
        f && (t(f), i && (f._updating = !1));
      }
      o = o.slice(20);
      const c = o.length > 1e3, p = c ? 30 : 17, l = c ? 1 : 3;
      for (let r = 0; r < o.length; r += l) {
        const f = [];
        for (let d = 0; d < l; d++)
          o[r + d] && f.push(o[r + d]);
        f.forEach((d) => {
          i && (d._updating = !0);
        });
        const T = setTimeout(() => {
          f.forEach((d) => {
            t(d), i && (d._updating = !1);
          });
        }, r * p);
        this.timeoutIds.push(T);
      }
    });
    this.mediaStore.subscribe(({ currentMediaElement: t }) => {
      this.tags.forEach((i) => {
        var o;
        if (i.mediaPlane instanceof oe && t !== i.mediaPlane.videoInstance) {
          if (!((o = i.mediaPlane.videoInstance) != null && o.src) || t === i.mediaPlane.videoInstance)
            return;
          i.mediaPlane.pause();
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
    e && (this._cache_pointTag = this.tags.filter((t) => t.stickType === "2DPoint" || t.stickType === "3DPoint").filter((t) => t.position), this._cache_2DPointTag = this.tags.filter((t) => t.stickType === "2DPoint").filter((t) => t.position), this._cache_css3DTag = this.tags.filter(
      (t) => t.stickType === "3DPoint" || t.stickType === "Plane" || t.stickType === "Model" && t.contentType === "MediaModel"
    ).filter((t) => {
      const i = t.computeRenderType();
      return i === "BehindDom" || i === "Dom";
    }));
  }
  get filterPointTag() {
    var e;
    return (e = this._cache_pointTag) != null ? e : [];
  }
  get filter2DPointTag() {
    var e;
    return (e = this._cache_2DPointTag) != null ? e : [];
  }
  get filterCSS3DTag() {
    var e;
    return (e = this._cache_css3DTag) != null ? e : [];
  }
  updateFive(e) {
    super.updateFive(e), this.domEvents.dispose(), this.domEvents = new x(e);
  }
  addRenderQueue(e) {
    var c, p;
    const { type: t, keys: i = [], tags: o = [] } = e;
    this.renderQueue.has(t) ? this.renderQueue.set(t, {
      keys: Array.from(/* @__PURE__ */ new Set([...(c = this.renderQueue.get(t).keys) != null ? c : [], ...i])),
      tags: Array.from(/* @__PURE__ */ new Set([...(p = this.renderQueue.get(t).tags) != null ? p : [], ...o]))
    }) : this.renderQueue.set(t, { keys: i, tags: o });
  }
  getTagById(e) {
    const t = this.tags.find((i) => i.id === e);
    if (!t) {
      console.warn(`getTagById Error: can't find tag id: ${e}`);
      return;
    }
    return t;
  }
  /** 暂停当前标签内进行的所有多媒体 */
  pauseCurrentMedia() {
    this.mediaStore.set({ currentMediaElement: null });
  }
  /**
   * @description 获取标签配置
   */
  getTagConfig(e, t) {
    var p, l, r;
    const i = this.calculateTagConfig(e, { useCache: t == null ? void 0 : t.useCache }), o = (p = t == null ? void 0 : t.fiveMode) != null ? p : this.five.getCurrentState().mode, c = (l = i.configWithFiveMode) == null ? void 0 : l[o];
    return (r = c != null ? c : i) != null ? r : {};
  }
  getPositions(e) {
    if (N(e))
      return e.position;
    if (U(e))
      return e.data.mediaPosition;
    if (Y(e))
      return Z(this.five.camera.position, V(e.position), V(e.normal));
  }
  addObjectClickHandler(e, t, i) {
    if (!t || !this.domEvents)
      return () => {
      };
    const o = () => !(!e.currentVisible || e.loading), c = (p) => {
      if (!o())
        return !1;
      i(p.origDomEvent);
    };
    return this.domEvents.addEventListener(t, "click", c), () => {
      var p;
      (p = this.domEvents) == null || p.removeEventListener(t, "click", c);
    };
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
  calculateTagConfig(e, t) {
    var E, b, I, A, F;
    const i = (E = t == null ? void 0 : t.useCache) != null ? E : !0;
    if (!e)
      return (b = this.config.globalConfig) != null ? b : {};
    if (i) {
      if ((I = e == null ? void 0 : e.computedConfig) != null && I._isMerged)
        return e.computedConfig;
      if ((A = e == null ? void 0 : e.config) != null && A._isMerged)
        return e.config;
    }
    const o = {}, c = {}, p = {};
    this.config.contentTypeConfig && Object.entries(this.config.contentTypeConfig).forEach(([u, h]) => {
      var w, L;
      const m = u, C = m.split("-"), j = u.startsWith("["), v = j ? C[0].slice(1, -1) : void 0, y = j ? C.slice(1) : C, M = v ? ["PanoramaLike", "ModelLike"].includes(v) ? (w = c[v]) != null ? w : c[v] = {} : (L = p[v]) != null ? L : p[v] = {} : o;
      if (!M[m]) {
        if (y.length === 0 && (M[m] = h), y.length === 1) {
          const [g] = y;
          (e.contentType === g || g === "Any") && (M[m] = h);
        }
        if (y.length === 2) {
          const [g = "Any", _ = "Any"] = y;
          g === "Mixin" && e.contentType === _ && (M[m] = h), (e.stickType === g || g === "Any") && (e.contentType === _ || _ === "Any") && (M[m] = h);
        }
        if (y.length === 3) {
          const [g = "Any", _, R] = y;
          if (_ === "Audio" && e.contentType === "Audio") {
            const O = e;
            (O.stickType === g || g === "Any") && O.data.appearance === R && (M[m] = h);
          }
        }
      }
    });
    const l = (F = e.initialConfig) != null ? F : {}, r = P({}, J, this.config.globalConfig, ...Object.values(o)), f = P({}, r, l), T = {}, d = Object.values(ie.Mode);
    B(c).forEach(([u, h]) => {
      d.forEach((m) => {
        (u === "PanoramaLike" && re(m) || u === "ModelLike" && ne(m)) && (T[m] = P({}, r, ...Object.values(h), l, { _isMerged: !0 }));
      });
    }), B(p).forEach(([u, h]) => {
      const m = T[u];
      T[u] = P({}, r, m, ...Object.values(h), l, { _isMerged: !0 });
    });
    const k = Q(W({}, f), { configWithFiveMode: T });
    return H(k), Object.values(T).forEach((u) => H(u)), k._isMerged = !0, k;
  }
}
export {
  zt as TagUtil
};
