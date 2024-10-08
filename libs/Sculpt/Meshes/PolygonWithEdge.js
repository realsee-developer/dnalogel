var f = Object.defineProperty, p = Object.defineProperties;
var P = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var l = (i, e, t) => e in i ? f(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, d = (i, e) => {
  for (var t in e || (e = {}))
    g.call(e, t) && l(i, t, e[t]);
  if (n)
    for (var t of n(e))
      u.call(e, t) && l(i, t, e[t]);
  return i;
}, y = (i, e) => p(i, P(e));
var c = (i, e) => {
  var t = {};
  for (var s in i)
    g.call(i, s) && e.indexOf(s) < 0 && (t[s] = i[s]);
  if (i != null && n)
    for (var s of n(i))
      e.indexOf(s) < 0 && u.call(i, s) && (t[s] = i[s]);
  return t;
};
var o = (i, e, t) => (l(i, typeof e != "symbol" ? e + "" : e, t), t);
import { PolylineMesh as W } from "./Polyline.js";
import { PolygonMesh as C } from "./Polygon.js";
import { intersectWithoutLine as E } from "../../shared-utils/three/core/Raycaster.js";
class w extends C {
  constructor(t) {
    const r = t != null ? t : {}, { points: s } = r, h = c(r, ["points"]);
    super();
    o(this, "name", "PolygonWithEdgeMesh");
    o(this, "line", new W());
    s && this.setPoints(s), h && this.setStyle(h);
  }
  get style() {
    return y(d({}, super.style), {
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
  setPoints(t, s = { closed: !0 }) {
    super.setPoints(t), this.points && (this.line.setPoints(this.points, s), this.addIfNotExists(this.line));
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
