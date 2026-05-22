var f = Object.defineProperty, g = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty, _ = Object.prototype.propertyIsEnumerable;
var p = (i, t, e) => t in i ? f(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, h = (i, t) => {
  for (var e in t || (t = {}))
    D.call(t, e) && p(i, e, t[e]);
  if (u)
    for (var e of u(t))
      _.call(t, e) && p(i, e, t[e]);
  return i;
}, y = (i, t) => g(i, I(t));
var r = (i, t, e) => (p(i, typeof t != "symbol" ? t + "" : t, e), e);
import * as a from "three";
import { generatePolygonGeometry as H } from "../../shared-utils/three/generatePolygonGeometry.js";
import { anyPositionToVector3 as b } from "../../shared-utils/positionToVector3.js";
import { ColoredMesh as S } from "../utils/three/ColoredMesh.js";
import { getGeometryInfo as k } from "../../shared-utils/three/geometryUtil.js";
import { LightTag as P } from "../../shared-utils/tag.js";
import { getLengthHTML as v } from "../utils/Meshes/getLengthHTML.js";
import { localToWorld as F } from "../../shared-utils/three/applyObjectMatrixWorld.js";
import { getFiveFromParentChain as A } from "../../shared-utils/five/getFiveFromParentChain.js";
import { transformUnitSquare as U } from "../utils/unit.js";
import { RenderDom as m } from "../utils/renderDom.js";
const c = new a.BufferGeometry();
c.name = "blankGeometry";
c.isBlank = !0;
class G extends S {
  constructor(e) {
    super(e);
    r(this, "name", "PolygonMesh");
    r(this, "points", []);
    r(this, "planeHelperNeedUpdate", !0);
    r(this, "geometryInfoNeedUpdate", !0);
    r(this, "_paramsStyle");
    r(this, "areaDom");
    r(this, "planeHelper", null);
    r(this, "_geometryInfo", null);
    r(this, "lastRenderAreaItem");
    r(this, "_onAdded", () => {
      this.areaDom || this.updateAreaItems();
    });
    r(this, "_onRemoved", () => {
      var e;
      (e = this.areaDom) == null || e.destroy(), this.areaDom = void 0;
    });
    r(this, "_onShowed", () => {
      this.areaDom && (this.areaDom.container.style.display = "block");
    });
    r(this, "_onHidden", () => {
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
    return A(this);
  }
  updateMatrixWorld(e) {
    if (super.updateMatrixWorld(e), this.center) {
      const s = F(this, this.center).toArray().join(",");
      s !== this.lastRenderAreaItem && (this.updateAreaItems(), this.lastRenderAreaItem = s);
    }
  }
  setStyle(e) {
    var n;
    this._paramsStyle = h(h({}, this._paramsStyle), e), super.setStyle(this._paramsStyle);
    const s = (n = this._paramsStyle.occlusionVisibility) != null ? n : !0;
    this.areaDom && (this.areaDom.intersectCheck = !s), this.updateAreaItems();
  }
  setPoints(e, s) {
    var o, l;
    const n = e.map(b);
    this.points = n, this.geometry = (l = H(this.points, { checkLinesIntersect: (o = s == null ? void 0 : s.checkLinesIntersect) != null ? o : !0 })) != null ? l : c, this.planeHelperNeedUpdate = !0, this.geometryInfoNeedUpdate = !0, this.updateAreaItems();
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
      var d;
      const o = new P(this.five), l = (d = this._paramsStyle.occlusionVisibility) != null ? d : !0;
      return o.intersectCheck = !l, o.simulate3D = !0, o;
    })(), this.areaDom.setPosition(this.center);
    const s = U(this.geometryInfo.area, this._paramsStyle.lengthUnit);
    s ? this.areaDom.container.innerHTML = v(s, {
      style: "color: #FFFFFF; background: #3366FF"
    }) : this.areaDom.container.innerHTML = "";
  }
}
export {
  G as PolygonMesh
};
