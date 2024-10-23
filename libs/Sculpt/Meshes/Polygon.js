var d = Object.defineProperty, y = Object.defineProperties;
var u = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
var a = (i, t, e) => t in i ? d(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, h = (i, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && a(i, e, t[e]);
  if (g)
    for (var e of g(t))
      I.call(t, e) && a(i, e, t[e]);
  return i;
}, f = (i, t) => y(i, u(t));
var r = (i, t, e) => (a(i, typeof t != "symbol" ? t + "" : t, e), e);
import * as l from "three";
import { generatePolygonGeometry as H } from "../../shared-utils/three/generatePolygonGeometry.js";
import { DEFAULT_HIGHLIGHT_OPACITY as P } from "../typings/style.js";
import { anyPositionToVector3 as _ } from "../../shared-utils/positionToVector3.js";
import { ColoredMesh as A } from "../utils/three/ColoredMesh.js";
import { getGeometryInfo as S } from "../../shared-utils/three/geometryUtil.js";
import { LightTag as D } from "../../shared-utils/tag.js";
import { getLengthHTML as M } from "../utils/Meshes/getLengthHTML.js";
import { applyObjectMatrixWorld as w } from "../../shared-utils/three/applyObjectMatrixWorld.js";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../shared-utils/three/core/Sphere.js";
import "animejs";
import { notNil as B } from "../../shared-utils/isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
const p = new l.BufferGeometry();
p.name = "blankGeometry";
p.isBlank = !0;
class $ extends A {
  constructor(e) {
    super(e);
    r(this, "name", "PolygonMesh");
    r(this, "points", []);
    r(this, "planeHelperNeedUpdate", !0);
    r(this, "geometryInfoNeedUpdate", !0);
    r(this, "_paramsStyle");
    r(this, "planeHelper", null);
    r(this, "_geometryInfo", null);
    r(this, "opacityBeforeHighlight");
    r(this, "highlighted", !1);
    r(this, "lastRenderAreaItem");
    r(this, "areaDom");
    e != null && e.points && this.setPoints(e.points), this._paramsStyle = e != null ? e : {}, this.updateAreaItems();
  }
  get style() {
    return f(h({}, super.style), { lengthEnable: this._paramsStyle.lengthEnable });
  }
  get isBlank() {
    return !!this.geometry.isBlank;
  }
  get center() {
    var e;
    return (e = this.geometryInfo) == null ? void 0 : e.center;
  }
  get geometryInfo() {
    return this.geometryInfoNeedUpdate && (this.isBlank ? this._geometryInfo = null : this._geometryInfo = S(this.geometry), this.geometryInfoNeedUpdate = !1), this._geometryInfo;
  }
  get five() {
    var e, o;
    return (o = (e = window.globalModules) == null ? void 0 : e.five) != null ? o : window.$five;
  }
  updateMatrixWorld(e) {
    if (super.updateMatrixWorld(e), this.center) {
      const o = w(this, this.center).toArray().join(",");
      o !== this.lastRenderAreaItem && (this.updateAreaItems(), this.lastRenderAreaItem = o);
    }
  }
  setStyle(e) {
    this._paramsStyle = h(h({}, this._paramsStyle), e), super.setStyle(this._paramsStyle), this.updateAreaItems();
  }
  setPoints(e) {
    var n;
    const o = e.map(_);
    this.points = o, this.geometry = (n = H(this.points, { checkLinesIntersect: !0 })) != null ? n : p, this.planeHelperNeedUpdate = !0, this.geometryInfoNeedUpdate = !0, this.updateAreaItems();
  }
  /**
   * @description: 获取一个点投影在当前平面上的点
   */
  projectPoint(e) {
    return e && (this.planeHelperNeedUpdate && this.updatePlaneHelper(), this.planeHelper ? this.planeHelper.projectPoint(e, new l.Vector3()) : e);
  }
  highlight() {
    this.highlighted || (this.highlighted = !0, this.opacityBeforeHighlight = this.opacity, this.setStyle({ opacity: this.opacity * P }), this.needsRender = !0);
  }
  unhighlight() {
    this.highlighted && (this.highlighted = !1, this.setStyle({ opacity: this.opacityBeforeHighlight }), this.needsRender = !0);
  }
  updatePlaneHelper() {
    this.points.length >= 3 ? this.planeHelper = new l.Plane().setFromCoplanarPoints(this.points[0], this.points[1], this.points[2]) : this.planeHelper = null, this.planeHelperNeedUpdate = !1;
  }
  updateAreaItems() {
    var n, m;
    const e = () => {
      var s;
      (s = this.areaDom) == null || s.destroy(), this.areaDom = void 0;
    };
    if (!this._paramsStyle.lengthEnable || !this.geometryInfo)
      return e();
    if (!this.five)
      return console.error("Five not found");
    this.areaDom = (n = this.areaDom) != null ? n : (() => {
      const s = new D(this.five);
      return s.intersectCheck = !1, s.simulate3D = !0, s;
    })(), this.areaDom.setPosition(this.center);
    const o = this.geometryInfo.area.toFixed(2);
    o === "0.00" ? this.areaDom.container.innerHTML = "" : this.areaDom.container.innerHTML = M(o + "m²", {
      style: `color: #${B((m = this.style) == null ? void 0 : m.color) ? new l.Color(this.style.color).getHexString() : "000000"}`
    });
  }
}
export {
  $ as PolygonMesh
};
