var b = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var g = (n, o, t) => o in n ? b(n, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[o] = t, P = (n, o) => {
  for (var t in o || (o = {}))
    E.call(o, t) && g(n, t, o[t]);
  if (m)
    for (var t of m(o))
      C.call(o, t) && g(n, t, o[t]);
  return n;
};
var h = (n, o, t) => (g(n, typeof o != "symbol" ? o + "" : o, t), t);
import { IObject3D as c } from "../../shared-utils/three/IObject3D.js";
import { anyPositionToVector3 as a } from "../../shared-utils/positionToVector3.js";
import * as p from "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import { LineMesh as y } from "./Line.js";
import "../../shared-utils/three/core/Sphere.js";
import "animejs";
import { notNil as f } from "../../shared-utils/isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { PolygonMesh as d } from "./Polygon.js";
import { PolygonWithEdgeMesh as u } from "./PolygonWithEdge.js";
import { intersectWithoutLine as S } from "../../shared-utils/three/core/Raycaster.js";
class z extends c {
  constructor(t) {
    super();
    h(this, "name", "PrismMesh");
    h(this, "heightPoint");
    h(this, "bottomPolygon", new u());
    h(this, "topPolygon", new u());
    h(this, "paramStyle");
    h(this, "edgePlanes", new c());
    this.topPolygon.name = "TopPolygon", this.bottomPolygon.name = "BottomPolygon", this.edgePlanes.name = "EdgePlanes", this.addIfNotExists(this.bottomPolygon), t && this.setPoints(t), t && this.setStyle(t);
  }
  /**
   * @deprecated notice: please use specified center instead, such as `localCenter` or `worldCenter`
   */
  get center() {
    return this.localCenter;
  }
  get localCenter() {
    var s, i;
    const t = (s = this.topPolygon) == null ? void 0 : s.center, e = (i = this.bottomPolygon) == null ? void 0 : i.center;
    if (t && e)
      return new p.Vector3().lerpVectors(t, e, 0.5);
  }
  get worldCenter() {
    return this.updateMatrixWorld(), this.localToWorld(this.localCenter);
  }
  get color() {
    return this.bottomPolygon.color;
  }
  get lineWidth() {
    return this.bottomPolygon.lineWidth;
  }
  get lineColor() {
    return this.bottomPolygon.lineColor;
  }
  setStyle(t) {
    this.paramStyle = P(P({}, this.paramStyle), t), this.bottomPolygon.setStyle(this.paramStyle), this.topPolygon.setStyle(this.paramStyle), this.edgePlanes.children.forEach((e) => {
      (e instanceof y || e instanceof d) && e.setStyle(this.paramStyle);
    });
  }
  setPoints(t) {
    f(t.points) && this.setBottomPoints(t.points), f(t.heightPoint) && this.setTopHeightPoint(a(t.heightPoint));
  }
  highlight() {
    this.bottomPolygon.highlight(), this.topPolygon.highlight(), this.edgePlanes.children.forEach((t) => {
      typeof t.highlight == "function" && t.highlight();
    });
  }
  unhighlight() {
    this.bottomPolygon.unhighlight(), this.topPolygon.unhighlight(), this.edgePlanes.children.forEach((t) => {
      typeof t.unhighlight == "function" && t.unhighlight();
    });
  }
  setBottomPoints(t) {
    this.bottomPolygon.setPoints(t.map(a)), this.heightPoint && this.setTopHeightPoint(this.heightPoint);
  }
  setTopHeightPoint(t) {
    this.heightPoint = t, this.addIfNotExists(this.topPolygon);
    const e = this.bottomPolygon.projectPoint(t), s = new p.Vector3().subVectors(t, e);
    this.up.copy(s.clone().normalize());
    const r = this.bottomPolygon.points.map((l) => l.clone().add(s));
    this.topPolygon.setPoints(r), this.setEdgePlanes();
  }
  raycast(t, e) {
    return this.children.forEach((s) => {
      S(s, t, e, !0);
    }), !1;
  }
  setEdgePlanes() {
    const t = this.bottomPolygon.points, e = this.topPolygon.points;
    this.addIfNotExists(this.edgePlanes), this.edgePlanes.removeChildren(), t.forEach((s, i) => {
      if (i === 0)
        return;
      const r = new d({ color: this.color });
      r.setPoints([t[i - 1], t[i], e[i], e[i - 1]]);
      const l = new y({ lineColor: this.lineColor, lineWidth: this.lineWidth });
      l.name = "EdgeLine", l.setPoints([t[i - 1], e[i - 1]]), this.edgePlanes.add(r, l);
    });
  }
}
export {
  z as PrismMesh
};
