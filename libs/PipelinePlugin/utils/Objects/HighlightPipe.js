var s = Object.defineProperty;
var n = (r, t, i) => t in r ? s(r, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[t] = i;
var p = (r, t, i) => (n(r, typeof t != "symbol" ? t + "" : t, i), i);
import "../../../shared-utils/tag.js";
import "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { tweenProgress as h } from "../../../shared-utils/animationFrame/BetterTween.js";
import "../../../shared-utils/five/FivePuppet.js";
import { ObjectPipe as a } from "./Pipe.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Subscribe.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/three/core/Raycaster.js";
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
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/isNil.js";
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
import "../../../shared-utils/util.js";
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
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
import "../../../shared-utils/animationFrame/index.js";
import "../../../shared-utils/three/Extras/Curves/BezierCurve3.js";
import "../../../shared-utils/three/Extras/Core/Interpolations.js";
import "../../../shared-utils/three/Extras/Core/Interpolations2.js";
class Hi extends a {
  constructor(i) {
    super(i);
    p(this, "imageCount", 64);
    p(this, "highlightAnime");
  }
  highlight(i) {
    const m = (i == null ? void 0 : i.duration) || 500;
    this.disposeAnime(), this.highlightAnime = h(m).onUpdate(({ progress: o }) => this.setOpacity(o)).yoyo(!0).repeat(1 / 0).play();
  }
  highlight1(i) {
    const m = (i == null ? void 0 : i.duration) || 2500;
    this.disposeAnime(), this.highlightAnime = h(m).onUpdate(({ progress: o }) => {
      const e = -(Math.ceil(o * this.imageCount) - 1) / this.imageCount;
      this.material.uniforms.vOffset.value !== e && (this.material.uniforms.vOffset.value = e, this.material.needsUpdate = !0, this.needsRender = !0);
    }).repeat(1 / 0).play();
  }
  disposeAnime() {
    var i;
    super.disposeAnime(), (i = this.highlightAnime) == null || i.dispose(), this.highlightAnime = void 0;
  }
}
export {
  Hi as ObjectHighlightPipe
};
