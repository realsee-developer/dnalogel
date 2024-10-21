var y = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var n = (e, i, t) => i in e ? y(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t, l = (e, i) => {
  for (var t in i || (i = {}))
    u.call(i, t) && n(e, t, i[t]);
  if (h)
    for (var t of h(i))
      c.call(i, t) && n(e, t, i[t]);
  return e;
};
var p = (e, i) => {
  var t = {};
  for (var s in e)
    u.call(e, s) && i.indexOf(s) < 0 && (t[s] = e[s]);
  if (e != null && h)
    for (var s of h(e))
      i.indexOf(s) < 0 && c.call(e, s) && (t[s] = e[s]);
  return t;
};
var o = (e, i, t) => (n(e, typeof i != "symbol" ? i + "" : i, t), t);
import { RectangleMesh as d } from "./Rectangle.js";
import { PolylineMesh as f } from "./Polyline.js";
class W extends d {
  constructor(t) {
    const r = t != null ? t : {}, { points: s } = r, g = p(r, ["points"]);
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
    if (super.setPoints(t), this.points) {
      const s = this.points;
      this.line.setPoints([s[0], s[1], s[2], s[3], s[0]]), this.addIfNotExists(this.line);
    }
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
