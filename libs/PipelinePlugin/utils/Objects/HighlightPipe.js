var s = Object.defineProperty;
var n = (e, t, i) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var o = (e, t, i) => (n(e, typeof t != "symbol" ? t + "" : t, i), i);
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/three/core/Sphere.js";
import "animejs";
import { tweenProgress as h } from "../../../shared-utils/animationFrame/BetterTween.js";
import { ObjectPipe as a } from "./Pipe.js";
import "../../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../../vendor/three/build/three.module.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Subscribe.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../shared-utils/animationFrame/index.js";
import "../../../shared-utils/three/Extras/Curves/BezierCurve3.js";
import "../../../shared-utils/three/Extras/Core/Interpolations.js";
import "../../../shared-utils/three/Extras/Core/Interpolations2.js";
class J extends a {
  constructor(i) {
    super(i);
    o(this, "imageCount", 64);
    o(this, "highlightAnime");
  }
  highlight(i) {
    const r = (i == null ? void 0 : i.duration) || 500;
    this.disposeAnime(), this.highlightAnime = h(r).onUpdate(({ progress: m }) => this.setOpacity(m)).yoyo(!0).repeat(1 / 0).play();
  }
  highlight1(i) {
    const r = (i == null ? void 0 : i.duration) || 2500;
    this.disposeAnime(), this.highlightAnime = h(r).onUpdate(({ progress: m }) => {
      const p = -(Math.ceil(m * this.imageCount) - 1) / this.imageCount;
      this.material.uniforms.vOffset.value !== p && (this.material.uniforms.vOffset.value = p, this.material.needsUpdate = !0, this.needsRender = !0);
    }).repeat(1 / 0).play();
  }
  disposeAnime() {
    var i;
    super.disposeAnime(), (i = this.highlightAnime) == null || i.dispose(), this.highlightAnime = void 0;
  }
}
export {
  J as ObjectHighlightPipe
};
