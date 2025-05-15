var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var h = (r, t, i) => t in r ? f(r, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[t] = i, u = (r, t) => {
  for (var i in t || (t = {}))
    v.call(t, i) && h(r, i, t[i]);
  if (c)
    for (var i of c(t))
      b.call(t, i) && h(r, i, t[i]);
  return r;
};
var e = (r, t, i) => (h(r, typeof t != "symbol" ? t + "" : t, i), i);
var n = (r, t, i) => new Promise((p, s) => {
  var m = (o) => {
    try {
      l(i.next(o));
    } catch (d) {
      s(d);
    }
  }, a = (o) => {
    try {
      l(i.throw(o));
    } catch (d) {
      s(d);
    }
  }, l = (o) => o.done ? p(o.value) : Promise.resolve(o.value).then(m, a);
  l((i = i.apply(r, t)).next());
});
import I from "./RulerItems.js";
import "../vendor/svelte/internal/index.js";
import "@realsee/five";
import "../shared-utils/animationFrame/index.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../shared-utils/tag.js";
import "../shared-utils/positionToVector3.js";
import "three";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/three/core/Raycaster.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/five/fiveEveryReadyListener.js";
import "../shared-utils/throttle.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../shared-utils/three/Magnifier.js";
import "../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../shared-utils/three/Assets/index.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../shared-utils/even.js";
import "../shared-utils/CSS3DRender/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/isNil.js";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../shared-utils/createResizeObserver.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../shared-utils/util.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../shared-utils/three/PointSelector/utils/html.js";
import "../shared-utils/CSS3DRender/index.js";
import "../shared-utils/five/fiveModelLoad.js";
import "../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../Sculpt/Meshes/Line.js";
import "../Sculpt/typings/style.js";
import "../shared-utils/three/IObject3D.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/three/core/LineGeometry.js";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
import "../Sculpt/utils/unit.js";
import "../Sculpt/utils/renderDom.js";
import "../shared-utils/five/FivePuppet.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getPosition.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
import "../Sculpt/utils/three/rayOnLine.js";
import "../shared-utils/equal.js";
import "../shared-utils/isTruelyObject.js";
import "../shared-utils/math/planimetry.js";
import "./RulerItem.js";
class zt {
  constructor(t, i) {
    e(this, "five");
    e(this, "container", document.createElement("div"));
    e(this, "panoRulerProData");
    e(this, "rulerItems");
    e(this, "state", {
      enabled: !1,
      loaded: !1,
      options: {
        className: "",
        distanceText: (t) => `${t.toFixed(1)}m`
      }
    });
    var p, s;
    this.five = t, this.container.classList.add("panoRulerProPlugin-container"), this.container.setAttribute(
      "style",
      "position: absolute;pointer-events: none;width: 100%;height: 100%;left: 0;top: 0;overflow: hidden;"
    ), i && (i.data && this.load(i.data), this.state.options = u(u({}, this.state.options), i.options || {}), (p = i.options) != null && p.className && this.container.classList.add((s = i.options) == null ? void 0 : s.className)), this.five.once("modelLoaded", () => n(this, null, function* () {
      var m, a;
      (a = (m = this.five.getElement()) == null ? void 0 : m.parentNode) == null || a.append(this.container);
    })), this.five.once("dispose", () => this.dispose());
  }
  load(t) {
    return n(this, null, function* () {
      if (!this.five.work)
        return;
      const i = t.data;
      if (!i)
        throw new Error("标尺数据依赖不齐全！");
      this.panoRulerProData = i, this.state.loaded = !0;
    });
  }
  enable() {
    return this.state.loaded ? (this.state.enabled || (this.state.enabled = !0, this.render()), !0) : !1;
  }
  disable() {
    return this.state.enabled && (this.state.enabled = !1, this.render()), !0;
  }
  render() {
    return n(this, null, function* () {
      var t;
      if (this.state.enabled) {
        if (!this.panoRulerProData || !this.container)
          return;
        this.rulerItems = new I({
          target: this.container,
          props: {
            five: this.five,
            rulerDatas: this.panoRulerProData,
            options: this.state.options
          }
        });
      } else
        (t = this.rulerItems) == null || t.$destroy(), this.rulerItems = void 0;
    });
  }
  dispose() {
    var t;
    this.container && ((t = this.rulerItems) == null || t.$destroy(), this.rulerItems = void 0), this.container.remove();
  }
}
export {
  zt as default
};
