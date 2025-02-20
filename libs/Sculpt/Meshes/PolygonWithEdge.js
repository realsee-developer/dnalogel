var f = Object.defineProperty, p = Object.defineProperties;
var P = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var o = (i, e, t) => e in i ? f(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, n = (i, e) => {
  for (var t in e || (e = {}))
    u.call(e, t) && o(i, t, e[t]);
  if (l)
    for (var t of l(e))
      d.call(e, t) && o(i, t, e[t]);
  return i;
}, y = (i, e) => p(i, P(e));
var c = (i, e) => {
  var t = {};
  for (var s in i)
    u.call(i, s) && e.indexOf(s) < 0 && (t[s] = i[s]);
  if (i != null && l)
    for (var s of l(i))
      e.indexOf(s) < 0 && d.call(i, s) && (t[s] = i[s]);
  return t;
};
var r = (i, e, t) => (o(i, typeof e != "symbol" ? e + "" : e, t), t);
import { PolylineMesh as W } from "./Polyline.js";
import { PolygonMesh as C } from "./Polygon.js";
import { intersectWithoutLine as E } from "../../shared-utils/three/core/Raycaster.js";
class w extends C {
  constructor(t) {
    const g = t != null ? t : {}, { points: s } = g, h = c(g, ["points"]);
    super();
    r(this, "name", "PolygonWithEdgeMesh");
    r(this, "line", new W());
    s && this.setPoints(s), h && this.setStyle(h);
  }
  get style() {
    return y(n({}, super.style), {
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
  raycast(t, s) {
    return this.children.forEach((h) => {
      E(h, t, s, !0);
    }), !1;
  }
  setPoints(t, s) {
    super.setPoints(t, n({ closed: !0 }, s)), this.points && (this.line.setPoints(this.points, n({ closed: !0 }, s)), this.addIfNotExists(this.line));
  }
  setStyle(t) {
    super.setStyle(t), this.line.setStyle(t);
  }
  highlight() {
    super.highlight(), this.line.highlight();
  }
  unhighlight() {
    super.unhighlight(), this.line.unhighlight();
  }
}
export {
  w as PolygonWithEdgeMesh
};
