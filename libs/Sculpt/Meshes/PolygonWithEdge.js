var p = Object.defineProperty, f = Object.defineProperties;
var P = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (t, e, i) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, h = (t, e) => {
  for (var i in e || (e = {}))
    d.call(e, i) && o(t, i, e[i]);
  if (l)
    for (var i of l(e))
      c.call(e, i) && o(t, i, e[i]);
  return t;
}, r = (t, e) => f(t, P(e));
var y = (t, e) => {
  var i = {};
  for (var s in t)
    d.call(t, s) && e.indexOf(s) < 0 && (i[s] = t[s]);
  if (t != null && l)
    for (var s of l(t))
      e.indexOf(s) < 0 && c.call(t, s) && (i[s] = t[s]);
  return i;
};
var g = (t, e, i) => (o(t, typeof e != "symbol" ? e + "" : e, i), i);
import { PolylineMesh as W } from "./Polyline.js";
import { PolygonMesh as S } from "./Polygon.js";
import { intersectWithoutLine as C } from "../../shared-utils/three/core/Raycaster.js";
class m extends S {
  constructor(i) {
    const u = i != null ? i : {}, { points: s } = u, n = y(u, ["points"]);
    super();
    g(this, "name", "PolygonWithEdgeMesh");
    g(this, "line", new W());
    s && this.setPoints(s), n && this.setStyle(n);
  }
  get style() {
    return r(h({}, super.style), {
      lineWidth: this.lineWidth,
      lineColor: this.lineColor
    });
  }
  get lineWidth() {
    return this.line.lineWidth;
  }
  get lineColor() {
    return this.line.lineColor;
  }
  raycast(i, s) {
    return this.children.forEach((n) => {
      C(n, i, s, !0);
    }), !1;
  }
  setPoints(i, s) {
    super.setPoints(i, h({ closed: !0 }, s)), this.points && (this.line.setPoints(this.points, h({ closed: !0 }, s)), this.addIfNotExists(this.line));
  }
  setStyle(i) {
    super.setStyle(i), i.lineOpacity !== void 0 ? this.line.setStyle(r(h({}, i), {
      // 强制设置line的lineOpacity
      lineOpacity: i.lineOpacity
    })) : this.line.setStyle(i), this.needsRender = !0;
  }
  highlight() {
    super.highlight(), this.line.highlight();
  }
  unhighlight() {
    super.unhighlight(), this.line.unhighlight();
  }
}
export {
  m as PolygonWithEdgeMesh
};
