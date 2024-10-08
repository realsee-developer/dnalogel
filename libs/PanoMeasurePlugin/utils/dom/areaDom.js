var u = Object.defineProperty, D = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
var m = (i, o, t) => o in i ? u(i, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[o] = t, p = (i, o) => {
  for (var t in o || (o = {}))
    A.call(o, t) && m(i, t, o[t]);
  if (h)
    for (var t of h(o))
      T.call(o, t) && m(i, t, o[t]);
  return i;
}, s = (i, o) => D(i, f(o));
var l = (i, o, t) => (m(i, typeof o != "symbol" ? o + "" : o, t), t);
import { ItemDom as y } from "./base.js";
import { getGeometryInfo as I } from "../../../shared-utils/three/geometryUtil.js";
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/three/core/Sphere.js";
import "animejs";
import { isNil as P } from "../../../shared-utils/isNil.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../isNDCPointInScreen.js";
import "../../../shared-utils/three/centerPoint.js";
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
class Y extends y {
  constructor(t) {
    t.containerStyle = s(p({}, t.containerStyle), {
      zIndex: "1"
    }), t.contentStyle = s(p({}, t.contentStyle), {
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
  updateArea(t, e) {
    var c, d;
    const n = e != null ? e : this.area.polygon.geometry, r = I(n);
    if (!r) {
      this.ndcPosition = null, this.updateDomPosition(t);
      return;
    }
    const { area: a, center: x } = r;
    this.ndcPosition = x, this.updateDomPosition(t), (d = (c = this.area.model) == null ? void 0 : c.config) != null && d.getAreaText ? this.contentDom.innerText = this.area.model.config.getAreaText(a) : this.updateAreaText(a, { fix: 2 });
  }
  updateAreaText(t, e) {
    const { unit: n = "m²", fix: r } = e != null ? e : {};
    this.contentDom.innerText = `${P(r) ? t : t.toFixed(r)}${n}`;
  }
}
export {
  Y as AreaItem
};
