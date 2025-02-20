var g = Object.defineProperty;
var T = (c, a, t) => a in c ? g(c, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[a] = t;
var r = (c, a, t) => (T(c, typeof a != "symbol" ? a + "" : a, t), t);
import { DefaultConfig as D } from "../tag.config.js";
import "three";
import { anyPositionToVector3 as u } from "../../shared-utils/positionToVector3.js";
import { isPlaneTag as P, isMediaModelTag as _, isPoint3DTag as y } from "../utils/tag/tagCheck.js";
import { normalPositionToPositions as v } from "../utils/normalPositionToPositions.js";
import { writable as E } from "../../vendor/svelte/store/index.js";
import { isIOSWX as k } from "../../shared-utils/device.js";
import { VideoPlane as w } from "../utils/model/mediaPlane.js";
import { FiveDomEvents as f } from "../../shared-utils/five/FiveDomEvents.js";
import { Cache as I } from "../utils/Cache.js";
import { Controller as S } from "../../base/BasePlugin.js";
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
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/five/fiveEveryReadyListener.js";
import "../../shared-utils/throttle.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../shared-utils/even.js";
import "../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../shared-utils/five/FivePuppet.js";
import "@realsee/five";
import "../../shared-utils/five/fiveModelLoad.js";
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
import "../../shared-utils/url/absoluteUrl.js";
class ie extends S {
  constructor(t) {
    super(t);
    r(this, "tags", []);
    r(this, "cache", new I());
    r(this, "config", D);
    r(this, "renderQueue", /* @__PURE__ */ new Map());
    /** 插件参数 */
    r(this, "params");
    r(this, "mediaStore", E({
      currentMediaElement: null
    }));
    r(this, "store", {
      disposers: [],
      disposed: !1,
      resizeObserverDisposerAdding: !1,
      css3DRenderDisposer: /* @__PURE__ */ new Map()
    });
    r(this, "domEvents", new f(this.five));
    r(this, "_cache_pointTag");
    r(this, "_cache_2DPointTag");
    r(this, "_cache_css3DTag");
    r(this, "_container", null);
    r(this, "timeoutIds", []);
    r(this, "whyHide", (t) => {
      const e = this.getTagById(t);
      return e ? e.whyHide() : { reason: `tag ${t} not found` };
    });
    r(this, "loadVideoFirstFrame", () => {
      k && this.hooks.emit("loadVideoFirstFrame");
    });
    r(this, "tagsDo", (t, e, i = !0) => {
      let o = [...t != null ? t : this.tags].sort((s, m) => s.getSquaredDistance() - m.getSquaredDistance());
      this.timeoutIds.forEach((s) => clearTimeout(s)), this.timeoutIds.length = 0;
      for (let s = 0; s < 20; s++) {
        const m = o[s];
        m && (e(m), i && (m._updating = !1));
      }
      o = o.slice(20);
      const d = o.length > 1e3, n = d ? 30 : 17, l = d ? 1 : 3;
      for (let s = 0; s < o.length; s += l) {
        const m = [];
        for (let p = 0; p < l; p++)
          o[s + p] && m.push(o[s + p]);
        m.forEach((p) => {
          i && (p._updating = !0);
        });
        const h = setTimeout(() => {
          m.forEach((p) => {
            e(p), i && (p._updating = !1);
          });
        }, s * n);
        this.timeoutIds.push(h);
      }
    });
    this.mediaStore.subscribe(({ currentMediaElement: e }) => {
      this.tags.forEach((i) => {
        var o;
        if (i.mediaPlane instanceof w && e !== i.mediaPlane.videoInstance) {
          if (!((o = i.mediaPlane.videoInstance) != null && o.src) || e === i.mediaPlane.videoInstance)
            return;
          i.mediaPlane.pause();
        }
      });
    });
  }
  get container() {
    var t;
    return this._container || ((t = this.five.getElement()) == null ? void 0 : t.parentElement);
  }
  set container(t) {
    this._container = t;
  }
  // eslint-disable-next-line accessor-pairs
  set tagsLengthWillUpdate(t) {
    t && (this._cache_pointTag = this.tags.filter((e) => e.stickType === "2DPoint" || e.stickType === "3DPoint").filter((e) => e.position), this._cache_2DPointTag = this.tags.filter((e) => e.stickType === "2DPoint").filter((e) => e.position), this._cache_css3DTag = this.tags.filter(
      (e) => e.stickType === "3DPoint" || e.stickType === "Plane" || e.stickType === "Model" && e.contentType === "MediaModel"
    ).filter((e) => {
      const i = e.computeRenderType();
      return i === "BehindDom" || i === "Dom";
    }));
  }
  get filterPointTag() {
    var t;
    return (t = this._cache_pointTag) != null ? t : [];
  }
  get filter2DPointTag() {
    var t;
    return (t = this._cache_2DPointTag) != null ? t : [];
  }
  get filterCSS3DTag() {
    var t;
    return (t = this._cache_css3DTag) != null ? t : [];
  }
  updateFive(t) {
    super.updateFive(t), this.domEvents.dispose(), this.domEvents = new f(t);
  }
  addRenderQueue(t) {
    var d, n;
    const { type: e, keys: i = [], tags: o = [] } = t;
    this.renderQueue.has(e) ? this.renderQueue.set(e, {
      keys: Array.from(/* @__PURE__ */ new Set([...(d = this.renderQueue.get(e).keys) != null ? d : [], ...i])),
      tags: Array.from(/* @__PURE__ */ new Set([...(n = this.renderQueue.get(e).tags) != null ? n : [], ...o]))
    }) : this.renderQueue.set(e, { keys: i, tags: o });
  }
  getTagById(t) {
    const e = this.tags.find((i) => i.id === t);
    if (!e) {
      console.warn(`getTagById Error: can't find tag id: ${t}`);
      return;
    }
    return e;
  }
  /** 暂停当前标签内进行的所有多媒体 */
  pauseCurrentMedia() {
    this.mediaStore.set({ currentMediaElement: null });
  }
  getPositions(t) {
    if (P(t))
      return t.position;
    if (_(t))
      return t.data.mediaPosition;
    if (y(t))
      return v(this.five.camera.position, u(t.position), u(t.normal));
  }
  addObjectClickHandler(t, e, i) {
    if (!e || !this.domEvents)
      return () => {
      };
    const o = () => !(!t.currentVisible || t.loading), d = (n) => {
      if (!o())
        return !1;
      i(n.origDomEvent);
    };
    return this.domEvents.addEventListener(e, "click", d), () => {
      var n;
      (n = this.domEvents) == null || n.removeEventListener(e, "click", d);
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
  ie as TagUtil
};
