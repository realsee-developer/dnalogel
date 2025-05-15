var d = Object.defineProperty, u = Object.defineProperties;
var F = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var e = (i, t, o) => t in i ? d(i, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[t] = o, n = (i, t) => {
  for (var o in t || (t = {}))
    c.call(t, o) && e(i, o, t[o]);
  if (l)
    for (var o of l(t))
      w.call(t, o) && e(i, o, t[o]);
  return i;
}, h = (i, t) => u(i, F(t));
var s = (i, t, o) => (e(i, typeof t != "symbol" ? t + "" : t, o), o);
import "../../shared-utils/tag.js";
import * as b from "three";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { isNil as f } from "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import { boundingBox as C, boxVertex as a } from "../../shared-utils/three/boundingBox.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/five/FivePuppet.js";
import { ModelMakerBaseItem as S } from "./baseItem.js";
import "../../shared-utils/positionToVector3.js";
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
import "../../shared-utils/three/core/Sphere.js";
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../shared-utils/even.js";
import "../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/getObjectVisible.js";
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
import "@realsee/five";
import "../../shared-utils/three/addIfNotExists.js";
class Ro extends S {
  constructor(...o) {
    const r = o[0], p = C(r.model), m = new b.Vector3().lerpVectors(a(p, 0), a(p, 5), 0.5);
    super(h(n({}, r), { position: m }));
    s(this, "onModelShownFloorChange", (o) => {
      this.updateFiveCurrentFloorState(o), this.updateVisible();
    });
    s(this, "updateFiveCurrentFloorState", (o) => {
      var p, m;
      const r = (m = (p = this.rawData) == null ? void 0 : p.object_data) == null ? void 0 : m.floorIndex;
      f(r) ? this.visibles[1] = !0 : this.visibles[1] = o === null ? !0 : r === o;
    });
    this.enable(), this.updateVisible(), this.five.on("modelShownFloorChange", this.onModelShownFloorChange), this.disposers.push(() => {
      this.five.off("modelShownFloorChange", this.onModelShownFloorChange);
    });
  }
  show() {
    this.updateFiveCurrentFloorState(this.five.model.shownFloor), super.show();
  }
  hide() {
    super.hide();
  }
}
export {
  Ro as ModelMakerPrismItem
};
