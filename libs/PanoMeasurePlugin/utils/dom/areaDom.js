var u = Object.defineProperty, D = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
var e = (i, o, t) => o in i ? u(i, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[o] = t, n = (i, o) => {
  for (var t in o || (o = {}))
    A.call(o, t) && e(i, t, o[t]);
  if (h)
    for (var t of h(o))
      T.call(o, t) && e(i, t, o[t]);
  return i;
}, s = (i, o) => D(i, f(o));
var l = (i, o, t) => (e(i, typeof o != "symbol" ? o + "" : o, t), t);
import { ItemDom as y } from "./base.js";
import { getGeometryInfo as I } from "../../../shared-utils/three/geometryUtil.js";
import "../../../shared-utils/tag.js";
import "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { isNil as P } from "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../shared-utils/five/FivePuppet.js";
import "../isNDCPointInScreen.js";
import "../../../shared-utils/three/centerPoint.js";
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
import "../../../shared-utils/three/getObjectVisible.js";
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
class Bt extends y {
  constructor(t) {
    t.containerStyle = s(n({}, t.containerStyle), {
      zIndex: "1"
    }), t.contentStyle = s(n({}, t.contentStyle), {
      background: "#6386FF",
      borderRadius: "2px"
    });
    super(t);
    l(this, "area");
    this.area = t.area, this.containerDom.appendChild(this.contentDom);
  }
  /**
   * @description: dom 依赖的多边形的顶点的位置更新时，更新 dom 的位置和面积
   */
  updateArea(t, r) {
    var c, d;
    const p = r != null ? r : this.area.polygon.geometry, m = I(p);
    if (!m) {
      this.ndcPosition = null, this.updateDomPosition(t);
      return;
    }
    const { area: a, center: x } = m;
    this.ndcPosition = x.clone(), this.updateDomPosition(t), (d = (c = this.area.model) == null ? void 0 : c.config) != null && d.getAreaText ? this.contentDom.innerText = this.area.model.config.getAreaText(a) : this.updateAreaText(a, { fix: 2 });
  }
  updateAreaText(t, r) {
    const { unit: p = "m²", fix: m } = r != null ? r : {};
    this.contentDom.innerText = `${P(m) ? t : t.toFixed(m)}${p}`;
  }
}
export {
  Bt as AreaItem
};
