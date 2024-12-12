var u = Object.defineProperty, y = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
var h = (r, t, e) => t in r ? u(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, l = (r, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && h(r, e, t[e]);
  if (f)
    for (var e of f(t))
      I.call(t, e) && h(r, e, t[e]);
  return r;
}, d = (r, t) => y(r, g(t));
var i = (r, t, e) => (h(r, typeof t != "symbol" ? t + "" : t, e), e);
import * as a from "three";
import { generatePolygonGeometry as H } from "../../shared-utils/three/generatePolygonGeometry.js";
import { anyPositionToVector3 as P } from "../../shared-utils/positionToVector3.js";
import { ColoredMesh as _ } from "../utils/three/ColoredMesh.js";
import { getGeometryInfo as A } from "../../shared-utils/three/geometryUtil.js";
import { LightTag as S } from "../../shared-utils/tag.js";
import { getLengthHTML as w } from "../utils/Meshes/getLengthHTML.js";
import { localToWorld as D } from "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "@realsee/five/line";
import { notNil as M } from "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../shared-utils/five/FivePuppet.js";
const m = new a.BufferGeometry();
m.name = "blankGeometry";
m.isBlank = !0;
class q extends _ {
  constructor(e) {
    super(e);
    i(this, "name", "PolygonMesh");
    i(this, "points", []);
    i(this, "planeHelperNeedUpdate", !0);
    i(this, "geometryInfoNeedUpdate", !0);
    i(this, "_paramsStyle");
    i(this, "planeHelper", null);
    i(this, "_geometryInfo", null);
    i(this, "lastRenderAreaItem");
    i(this, "areaDom");
    e != null && e.points && this.setPoints(e.points), this._paramsStyle = e != null ? e : {}, this.updateAreaItems();
  }
  get style() {
    return d(l({}, super.style), { lengthEnable: this._paramsStyle.lengthEnable });
  }
  get isBlank() {
    return !!this.geometry.isBlank;
  }
  get center() {
    var e;
    return (e = this.geometryInfo) == null ? void 0 : e.center.clone();
  }
  get geometryInfo() {
    return this.geometryInfoNeedUpdate && (this.isBlank ? this._geometryInfo = null : this._geometryInfo = A(this.geometry), this.geometryInfoNeedUpdate = !1), this._geometryInfo;
  }
  get five() {
    var e, o;
    return (o = (e = window.globalModules) == null ? void 0 : e.five) != null ? o : window.$five;
  }
  updateMatrixWorld(e) {
    if (super.updateMatrixWorld(e), this.center) {
      const o = D(this, this.center).toArray().join(",");
      o !== this.lastRenderAreaItem && (this.updateAreaItems(), this.lastRenderAreaItem = o);
    }
  }
  setStyle(e) {
    this._paramsStyle = l(l({}, this._paramsStyle), e), super.setStyle(this._paramsStyle), this.updateAreaItems();
  }
  setPoints(e) {
    var n;
    const o = e.map(P);
    this.points = o, this.geometry = (n = H(this.points, { checkLinesIntersect: !0 })) != null ? n : m, this.planeHelperNeedUpdate = !0, this.geometryInfoNeedUpdate = !0, this.updateAreaItems();
  }
  /**
   * @description: 获取一个点投影在当前平面上的点
   */
  projectPoint(e) {
    return e && (this.planeHelperNeedUpdate && this.updatePlaneHelper(), this.planeHelper ? this.planeHelper.projectPoint(e, new a.Vector3()) : e);
  }
  updatePlaneHelper() {
    this.points.length >= 3 ? this.planeHelper = new a.Plane().setFromCoplanarPoints(this.points[0], this.points[1], this.points[2]) : this.planeHelper = null, this.planeHelperNeedUpdate = !1;
  }
  updateAreaItems() {
    var n, p;
    const e = () => {
      var s;
      (s = this.areaDom) == null || s.destroy(), this.areaDom = void 0;
    };
    if (!this._paramsStyle.lengthEnable || !this.geometryInfo)
      return e();
    if (!this.five)
      return console.error("Five not found");
    this.areaDom = (n = this.areaDom) != null ? n : (() => {
      const s = new S(this.five);
      return s.intersectCheck = !1, s.simulate3D = !0, s;
    })(), this.areaDom.setPosition(this.center);
    const o = this.geometryInfo.area.toFixed(2);
    o === "0.00" ? this.areaDom.container.innerHTML = "" : this.areaDom.container.innerHTML = w(o + "m²", {
      style: `color: #${M((p = this.style) == null ? void 0 : p.color) ? new a.Color(this.style.color).getHexString() : "000000"}`
    });
  }
}
export {
  q as PolygonMesh
};
