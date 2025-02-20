var g = Object.defineProperty, I = Object.defineProperties;
var D = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var _ = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var p = (o, t, e) => t in o ? g(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, h = (o, t) => {
  for (var e in t || (t = {}))
    _.call(t, e) && p(o, e, t[e]);
  if (y)
    for (var e of y(t))
      H.call(t, e) && p(o, e, t[e]);
  return o;
}, u = (o, t) => I(o, D(t));
var i = (o, t, e) => (p(o, typeof t != "symbol" ? t + "" : t, e), e);
import * as a from "three";
import { generatePolygonGeometry as S } from "../../shared-utils/three/generatePolygonGeometry.js";
import { anyPositionToVector3 as b } from "../../shared-utils/positionToVector3.js";
import { ColoredMesh as v } from "../utils/three/ColoredMesh.js";
import { getGeometryInfo as k } from "../../shared-utils/three/geometryUtil.js";
import { LightTag as P } from "../../shared-utils/tag.js";
import { getLengthHTML as w } from "../utils/Meshes/getLengthHTML.js";
import { localToWorld as A } from "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as U } from "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import { transformUnitSquare as L } from "../utils/unit.js";
import { RenderDom as m } from "../utils/renderDom.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../shared-utils/five/FivePuppet.js";
const d = new a.BufferGeometry();
d.name = "blankGeometry";
d.isBlank = !0;
class Y extends v {
  constructor(e) {
    super(e);
    i(this, "name", "PolygonMesh");
    i(this, "points", []);
    i(this, "planeHelperNeedUpdate", !0);
    i(this, "geometryInfoNeedUpdate", !0);
    i(this, "_paramsStyle");
    i(this, "areaDom");
    i(this, "planeHelper", null);
    i(this, "_geometryInfo", null);
    i(this, "lastRenderAreaItem");
    i(this, "_onAdded", () => {
      this.areaDom || this.updateAreaItems();
    });
    i(this, "_onRemoved", () => {
      var e;
      (e = this.areaDom) == null || e.destroy(), this.areaDom = void 0;
    });
    i(this, "_onShowed", () => {
      this.areaDom && (this.areaDom.container.style.display = "block");
    });
    i(this, "_onHidden", () => {
      this.areaDom && (this.areaDom.container.style.display = "none");
    });
    e != null && e.points && this.setPoints(e.points), this._paramsStyle = e != null ? e : {}, this.updateAreaItems(), this.addEventListener("removed", () => {
      m.cacheObject.delete(this), m.checkDom(this);
    }), this.addEventListener("added", () => {
      m.cacheObject.add(this);
    }), m.checkDomEveryFrame();
  }
  get normal() {
    return this.points.length >= 3 ? new a.Vector3().crossVectors(this.points[1].clone().sub(this.points[0]), this.points[2].clone().sub(this.points[0])).normalize() : new a.Vector3(0, 0, 1);
  }
  get style() {
    return u(h({}, super.style), { lengthEnable: this._paramsStyle.lengthEnable });
  }
  get isBlank() {
    return !!this.geometry.isBlank;
  }
  get center() {
    var e;
    return (e = this.geometryInfo) == null ? void 0 : e.center.clone();
  }
  get geometryInfo() {
    return this.geometryInfoNeedUpdate && (this.isBlank ? this._geometryInfo = null : this._geometryInfo = k(this.geometry), this.geometryInfoNeedUpdate = !1), this._geometryInfo;
  }
  get five() {
    var e, r;
    return (r = (e = window.globalModules) == null ? void 0 : e.five) != null ? r : window.$five;
  }
  updateMatrixWorld(e) {
    if (super.updateMatrixWorld(e), this.center) {
      const r = A(this, this.center).toArray().join(",");
      r !== this.lastRenderAreaItem && (this.updateAreaItems(), this.lastRenderAreaItem = r);
    }
  }
  setStyle(e) {
    var n;
    this._paramsStyle = h(h({}, this._paramsStyle), e), super.setStyle(this._paramsStyle);
    const r = (n = this._paramsStyle.occlusionVisibility) != null ? n : !0;
    this.areaDom && (this.areaDom.intersectCheck = !r), this.updateAreaItems();
  }
  setPoints(e, r) {
    var l, s;
    const n = e.map(b);
    this.points = n, this.geometry = (s = S(this.points, { checkLinesIntersect: (l = r == null ? void 0 : r.checkLinesIntersect) != null ? l : !0 })) != null ? s : d, this.planeHelperNeedUpdate = !0, this.geometryInfoNeedUpdate = !0, this.updateAreaItems();
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
    var n, l;
    const e = () => {
      var s;
      (s = this.areaDom) == null || s.destroy(), this.areaDom = void 0;
    };
    if (!this._paramsStyle.lengthEnable || !this.geometryInfo)
      return e();
    if (!this.five)
      return console.error("Five not found");
    this.areaDom = (n = this.areaDom) != null ? n : (() => {
      var c;
      const s = new P(this.five), f = (c = this._paramsStyle.occlusionVisibility) != null ? c : !0;
      return s.intersectCheck = !f, s.simulate3D = !0, s;
    })(), this.areaDom.setPosition(this.center);
    const r = L(this.geometryInfo.area, this._paramsStyle.lengthUnit);
    r ? this.areaDom.container.innerHTML = w(r, {
      style: `color: #${U((l = this.style) == null ? void 0 : l.color) ? new a.Color(this.style.color).getHexString() : "000000"}`
    }) : this.areaDom.container.innerHTML = "";
  }
}
export {
  Y as PolygonMesh
};
