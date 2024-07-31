var r = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var y = (i, s, t) => s in i ? r(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var g = (i, s) => {
  var t = {};
  for (var e in i)
    u.call(i, e) && s.indexOf(e) < 0 && (t[e] = i[e]);
  if (i != null && o)
    for (var e of o(i))
      s.indexOf(e) < 0 && d.call(i, e) && (t[e] = i[e]);
  return t;
};
var h = (i, s, t) => (y(i, typeof s != "symbol" ? s + "" : s, t), t);
import { PolylineMesh as P } from "./Polyline.js";
import { PolygonMesh as p } from "./Polygon.js";
class S extends p {
  constructor(t) {
    const l = t != null ? t : {}, { points: e } = l, n = g(l, ["points"]);
    super();
    h(this, "name", "PolygonWithEdgeMesh");
    h(this, "line", new P());
    e && this.setPoints(e), n && this.setStyle(n);
  }
  get lineWidth() {
    return this.line.lineWidth;
  }
  get lineColor() {
    return this.line.lineColor;
  }
  setPoints(t, e = { closed: !0 }) {
    super.setPoints(t), this.points && (this.line.setPoints(this.points, e), this.addIfNotExists(this.line));
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
  S as PolygonWithEdgeMesh
};
