var m = Object.defineProperty;
var s = (p, i, t) => i in p ? m(p, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[i] = t;
var o = (p, i, t) => (s(p, typeof i != "symbol" ? i + "" : i, t), t);
import { IObject3D as e } from "../../shared-utils/three/IObject3D.js";
import { LineWithDotsMesh as h } from "../../Sculpt/Meshes/LineWithDots.js";
import { PolygonMesh as l } from "../../Sculpt/Meshes/Polygon.js";
import { validatePolygon as n } from "./validatePolygon.js";
import "three";
import "../../shared-utils/positionToVector3.js";
import "../../Sculpt/Meshes/Point.js";
import "../../Sculpt/typings/style.js";
import "../../shared-utils/tag.js";
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
import "../../shared-utils/three/generatePolygonGeometry.js";
import "../../shared-utils/three/earcut3D.js";
import "../../vendor/earcut/src/earcut.js";
import "../../shared-utils/three/getNormal.js";
import "../../PanoMeasurePlugin/utils/isIntersecting.js";
import "../../Sculpt/utils/three/ColoredMesh.js";
import "../../shared-utils/three/geometryUtil.js";
import "../../shared-utils/three/vectorIsEqual.js";
class zt extends e {
  constructor(t) {
    super();
    o(this, "name", "MeasureMesh");
    o(this, "isMeasureMesh", !0);
    o(this, "points", []);
    o(this, "isPolygon", !1);
    o(this, "selected", !1);
    o(this, "line");
    o(this, "polygon");
    this.line = new h(t == null ? void 0 : t.lineStyle), this.polygon = new l(t == null ? void 0 : t.polygonStyle), this.add(this.line);
  }
  changeConfig(t) {
    this.line.setStyle(t == null ? void 0 : t.lineStyle), this.polygon.setStyle(t == null ? void 0 : t.polygonStyle);
  }
  setPoints(t) {
    this.points = t, this.line.setPoints(this.points);
    const r = n(this.points);
    this.isPolygon = r, r && (this.addIfNotExists(this.polygon), this.polygon.setPoints(this.points));
  }
  select() {
    this.highlight(3373055), this.selected = !0;
  }
  unselect() {
    this.unhighlight(), this.selected = !1;
  }
  hover() {
    this.selected || this.highlight();
  }
  unhover() {
    this.selected || this.unhighlight();
  }
  highlight(t) {
    this.line.highlight({ color: t }), this.polygon.highlight({ color: t });
  }
  unhighlight() {
    this.line.unhighlight(), this.polygon.unhighlight();
  }
}
export {
  zt as MeasureMesh
};
