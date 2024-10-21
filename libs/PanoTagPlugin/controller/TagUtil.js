var d = Object.defineProperty;
var c = (a, n, e) => n in a ? d(a, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[n] = e;
var r = (a, n, e) => (c(a, typeof n != "symbol" ? n + "" : n, e), e);
import { DefaultConfig as l } from "../tag.config.js";
import "three";
import { anyPositionToVector3 as p } from "../../shared-utils/positionToVector3.js";
import { isPlaneTag as u, isMediaModelTag as f, isPoint3DTag as h } from "../utils/tag/tagCheck.js";
import { normalPositionToPositions as g } from "../utils/normalPositionToPositions.js";
import { writable as P } from "../../vendor/svelte/store/index.js";
import { isIOSWX as T } from "../../shared-utils/device.js";
import { CSS3DRenderPlugin as D } from "../../CSS3DRenderPlugin/index.js";
import { VideoPlane as _ } from "../utils/model/mediaPlane.js";
import { FiveDomEvents as y } from "../../shared-utils/five/FiveDomEvents.js";
import { Cache as v } from "../utils/Cache.js";
import { Controller as E } from "../../base/BasePlugin.js";
import "../../vendor/svelte/internal/index.js";
import "../../CSS3DRenderPlugin/Controller.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "../../CSS3DRenderPlugin/utils/three/THREEJS_CSS3DRenderer.js";
import "../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/even.js";
import "../../shared-utils/Subscribe.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/getObjectVisible.js";
import "hammerjs";
import "@realsee/five/line";
import "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../vendor/three/build/three.module.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/three/core/Sphere.js";
import "animejs";
import "../../shared-utils/isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../../shared-utils/url/absoluteUrl.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/loadTexture.js";
import "../../shared-utils/three/Quadrangle.js";
import "../../shared-utils/math/pointsIsRectangle.js";
import "../../shared-utils/three/loadVideoTexture.js";
import "../Assets/Icon.js";
import "../../shared-utils/three/getPositionsByObjectFit.js";
import "../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../shared-utils/three/getNormal.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/isTouchDevice.js";
class be extends E {
  constructor(e) {
    super(e);
    r(this, "tags", []);
    r(this, "cache", new v());
    r(this, "config", l);
    r(this, "renderQueue", /* @__PURE__ */ new Map());
    /** 插件参数 */
    r(this, "params");
    r(this, "mediaStore", P({
      currentMediaElement: null
    }));
    r(this, "store", {
      disposers: [],
      disposed: !1,
      resizeObserverDisposerAdding: !1,
      css3DRenderDisposer: /* @__PURE__ */ new Map()
    });
    r(this, "domEvents", new y(this.five));
    r(this, "_cache_pointTag");
    r(this, "_cache_2DPointTag");
    r(this, "_cache_css3DTag");
    r(this, "_container", null);
    r(this, "_css3DRenderPlugin");
    r(this, "whyHide", (e) => {
      const t = this.getTagById(e);
      return t ? t.whyHide() : { reason: `tag ${e} not found` };
    });
    r(this, "loadVideoFirstFrame", () => {
      T && this.hooks.emit("loadVideoFirstFrame");
    });
    this.mediaStore.subscribe(({ currentMediaElement: t }) => {
      this.tags.forEach((i) => {
        var o;
        if (i.mediaPlane instanceof _ && t !== i.mediaPlane.videoInstance) {
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
  /** css3DRenderPlugin */
  get css3DRenderPlugin() {
    var e, t, i;
    if (!this._css3DRenderPlugin) {
      const o = D(this.five);
      this._css3DRenderPlugin = o, (e = o.frontModeCSS3DRenderer) != null && e.domElementWrapper && (o.frontModeCSS3DRenderer.domElementWrapper.style.zIndex = (i = (t = this.params.containerZIndex) == null ? void 0 : t.toString()) != null ? i : "");
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
  get filterCSS3DTag() {
    var e;
    return (e = this._cache_css3DTag) != null ? e : [];
  }
  addRenderQueue(e) {
    var m, s;
    const { type: t, keys: i = [], tags: o = [] } = e;
    this.renderQueue.has(t) ? this.renderQueue.set(t, {
      keys: Array.from(/* @__PURE__ */ new Set([...(m = this.renderQueue.get(t).keys) != null ? m : [], ...i])),
      tags: Array.from(/* @__PURE__ */ new Set([...(s = this.renderQueue.get(t).tags) != null ? s : [], ...o]))
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
  getPositions(e) {
    if (u(e))
      return e.position;
    if (f(e))
      return e.data.mediaPosition;
    if (h(e))
      return g(this.five.camera.position, p(e.position), p(e.normal));
  }
  addObjectClickHandler(e, t, i) {
    if (!t || !this.domEvents)
      return () => {
      };
    const o = () => !(!e.currentVisible || e.loading), m = (s) => {
      if (!o())
        return !1;
      i(s.origDomEvent);
    };
    return this.domEvents.addEventListener(t, "click", m), () => {
      var s;
      (s = this.domEvents) == null || s.removeEventListener(t, "click", m);
    };
  }
  /**
   * @description 检查是否已经销毁
   * @returns isDisposed; 已经销毁返回 true，否则返回 false
   */
  checkDisposed() {
    return this.store.disposed ? (console.error("PanoTagPluginController has been disposed"), !0) : !1;
  }
}
export {
  be as TagUtil
};
