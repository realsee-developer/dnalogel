var c = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var n = (i, e, t) => e in i ? c(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, l = (i, e) => {
  for (var t in e || (e = {}))
    u.call(e, t) && n(i, t, e[t]);
  if (h)
    for (var t of h(e))
      p.call(e, t) && n(i, t, e[t]);
  return i;
};
var y = (i, e) => {
  var t = {};
  for (var s in i)
    u.call(i, s) && e.indexOf(s) < 0 && (t[s] = i[s]);
  if (i != null && h)
    for (var s of h(i))
      e.indexOf(s) < 0 && p.call(i, s) && (t[s] = i[s]);
  return t;
};
var o = (i, e, t) => (n(i, typeof e != "symbol" ? e + "" : e, t), t);
import { RectangleMesh as d } from "./Rectangle.js";
import { PolylineMesh as f } from "./Polyline.js";
class W extends d {
  constructor(t) {
    const r = t != null ? t : {}, { points: s } = r, g = y(r, ["points"]);
    super();
    o(this, "name", "RectangleWithEdgeMesh");
    o(this, "line", new f());
    s && this.setPoints(s), g && this.setStyle(g);
  }
  get style() {
    return l(l({}, super.style), this.line.style);
  }
  get lineWidth() {
    return this.line.lineWidth;
  }
  get lineColor() {
    return this.line.lineColor;
  }
  setPoints(t) {
    super.setPoints(t), this.points && (this.line.setPoints([this.points[0], this.points[1], this.points[2], this.points[3], this.points[0]]), this.addIfNotExists(this.line));
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
  W as RectangleWithEdgeMesh
};
