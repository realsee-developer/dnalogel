var s = Object.defineProperty;
var n = (e, t, i) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var o = (e, t, i) => (n(e, typeof t != "symbol" ? t + "" : t, i), i);
import "hammerjs";
import "three";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { tweenProgress as h } from "../../../shared-utils/animationFrame/BetterTween.js";
import { ObjectPipe as a } from "./Pipe.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../shared-utils/util.js";
import "../../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../../CSS3DRenderPlugin/utils/even.js";
import "../../../shared-utils/Subscribe.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../../shared-utils/animationFrame/index.js";
import "../../../shared-utils/three/Extras/Curves/BezierCurve3.js";
import "../../../shared-utils/three/Extras/Core/Interpolations.js";
import "../../../shared-utils/three/Extras/Core/Interpolations2.js";
class G extends a {
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
  G as ObjectHighlightPipe
};
