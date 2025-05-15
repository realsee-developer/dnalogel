var e = Object.defineProperty;
var s = (o, i, t) => i in o ? e(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t;
var p = (o, i, t) => (s(o, typeof i != "symbol" ? i + "" : i, t), t);
import { ModelMakerBaseItem as a } from "./baseItem.js";
import "three";
import "../../shared-utils/three/addIfNotExists.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/three/core/Raycaster.js";
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
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/CSS3DRender/index.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../shared-utils/three/IObject3D.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../Sculpt/utils/unit.js";
import "../../Sculpt/utils/renderDom.js";
import "../../shared-utils/five/FivePuppet.js";
import "@realsee/five";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../../Sculpt/utils/three/rayOnLine.js";
import "../../shared-utils/three/boundingBox.js";
class Ct extends a {
  constructor(...t) {
    super(...t);
    p(this, "onPanoArrived", (t) => {
      this.updatePanoIndex(t), this.updateVisible();
    });
    p(this, "onModeChange", (t) => {
      this.updateMode(t), this.updateVisible();
    });
    p(this, "updatePanoIndex", (t) => {
      var r, m;
      this.visibles[1] = ((m = (r = this.rawData) == null ? void 0 : r.object_data) == null ? void 0 : m.panoIndex) === t;
    });
    p(this, "updateMode", (t) => {
      this.visibles[2] = t === "Panorama";
    });
    this.updatePanoIndex(this.five.state.panoIndex), this.updateMode(this.five.state.mode), this.enable(), this.updateVisible(), this.five.on("panoArrived", this.onPanoArrived), this.five.on("modeChange", this.onModeChange), this.disposers.push(() => {
      this.five.off("panoArrived", this.onPanoArrived), this.five.off("modeChange", this.onModeChange);
    });
  }
  show() {
    this.updatePanoIndex(this.five.state.panoIndex), this.updateMode(this.five.state.mode), super.show();
  }
}
export {
  Ct as ModelMakerPolygonItem
};
