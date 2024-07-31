var l = Object.defineProperty;
var g = (r, e, t) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var s = (r, e, t) => (g(r, typeof e != "symbol" ? e + "" : e, t), t);
import { Controller as f } from "../../base/BasePlugin.js";
import "../../shared-utils/Subscribe.js";
import "hammerjs";
import "three";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/positionToVector3.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/even.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import "../../shared-utils/url/absoluteUrl.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/five/getFiveModel.js";
class L extends f {
  constructor(t) {
    super(t);
    s(this, "tagCacheByPanoIndex", {});
  }
  clearCacheById(t) {
    Object.values(this.tagCacheByPanoIndex).forEach((n) => {
      n.delete(t);
    });
  }
  getPanoIndexCache(t) {
    var h;
    const { five: n, fiveUtil: C } = this, { panoIndex: a, id: i, key: m } = t != null ? t : {}, c = a != null ? a : n.getCurrentState().panoIndex;
    if (c === void 0)
      throw new Error(`TagCacheController getPanoIndexCache(): fivePanoIndex is ${c}`);
    const p = `${C.model.uuid}__${c}`;
    let o = this.tagCacheByPanoIndex[p];
    if (o || (o = /* @__PURE__ */ new Map(), this.tagCacheByPanoIndex[p] = o), i === void 0)
      return o;
    if (m === void 0) {
      const d = o.get(i);
      return d || (o.set(i, {}), o.get(i));
    }
    return (h = o.get(i)) == null ? void 0 : h[m];
  }
  /**
   * @description 清除所有缓存
   */
  clearCache() {
    this.tagCacheByPanoIndex = {};
  }
  removeCache() {
  }
}
export {
  L as TagCache
};
