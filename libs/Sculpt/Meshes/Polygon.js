var f = Object.defineProperty, g = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty, _ = Object.prototype.propertyIsEnumerable;
var p = (s, t, e) => t in s ? f(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, h = (s, t) => {
  for (var e in t || (t = {}))
    D.call(t, e) && p(s, e, t[e]);
  if (u)
    for (var e of u(t))
      _.call(t, e) && p(s, e, t[e]);
  return s;
}, y = (s, t) => g(s, I(t));
var i = (s, t, e) => (p(s, typeof t != "symbol" ? t + "" : t, e), e);
import * as a from "three";
import { generatePolygonGeometry as b } from "../../shared-utils/three/generatePolygonGeometry.js";
import { anyPositionToVector3 as H } from "../../shared-utils/positionToVector3.js";
import { ColoredMesh as S } from "../utils/three/ColoredMesh.js";
import { getGeometryInfo as k } from "../../shared-utils/three/geometryUtil.js";
import { LightTag as v } from "../../shared-utils/tag.js";
import { getLengthHTML as P } from "../utils/Meshes/getLengthHTML.js";
import { localToWorld as A } from "../../shared-utils/three/applyObjectMatrixWorld.js";
import { transformUnitSquare as w } from "../utils/unit.js";
import { RenderDom as m } from "../utils/renderDom.js";
const d = new a.BufferGeometry();
d.name = "blankGeometry";
d.isBlank = !0;
class j extends S {
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
    return y(h({}, super.style), { lengthEnable: this._paramsStyle.lengthEnable });
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
    var o, l;
    const n = e.map(H);
    this.points = n, this.geometry = (l = b(this.points, { checkLinesIntersect: (o = r == null ? void 0 : r.checkLinesIntersect) != null ? o : !0 })) != null ? l : d, this.planeHelperNeedUpdate = !0, this.geometryInfoNeedUpdate = !0, this.updateAreaItems();
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
    var n;
    const e = () => {
      var o;
      (o = this.areaDom) == null || o.destroy(), this.areaDom = void 0;
    };
    if (!this._paramsStyle.lengthEnable || !this.geometryInfo)
      return e();
    if (!this.five)
      return console.error("Five not found");
    this.areaDom = (n = this.areaDom) != null ? n : (() => {
      var c;
      const o = new v(this.five), l = (c = this._paramsStyle.occlusionVisibility) != null ? c : !0;
      return o.intersectCheck = !l, o.simulate3D = !0, o;
    })(), this.areaDom.setPosition(this.center);
    const r = w(this.geometryInfo.area, this._paramsStyle.lengthUnit);
    r ? this.areaDom.container.innerHTML = P(r, {
      style: "color: #FFFFFF; background: #3366FF"
    }) : this.areaDom.container.innerHTML = "";
  }
}
export {
  j as PolygonMesh
};
