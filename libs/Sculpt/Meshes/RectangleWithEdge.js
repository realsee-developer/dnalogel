var r = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var d = (e, s, t) => s in e ? r(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t;
var g = (e, s) => {
  var t = {};
  for (var i in e)
    u.call(e, i) && s.indexOf(i) < 0 && (t[i] = e[i]);
  if (e != null && o)
    for (var i of o(e))
      s.indexOf(i) < 0 && c.call(e, i) && (t[i] = e[i]);
  return t;
};
var h = (e, s, t) => (d(e, typeof s != "symbol" ? s + "" : s, t), t);
import { RectangleMesh as p } from "./Rectangle.js";
import { PolylineMesh as f } from "./Polyline.js";
class S extends p {
  constructor(t) {
    const l = t != null ? t : {}, { points: i } = l, n = g(l, ["points"]);
    super();
    h(this, "name", "RectangleWithEdgeMesh");
    h(this, "line", new f());
    i && this.setPoints(i), n && this.setStyle(n);
  }
  get lineWidth() {
    return this.line.lineWidth;
  }
  get lineColor() {
    return this.line.lineColor;
  }
  setPoints(t) {
    if (super.setPoints(t), this.points) {
      const i = this.points;
      this.line.setPoints([i[0], i[2], i[1], i[3], i[0]]), this.addIfNotExists(this.line);
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
  S as RectangleWithEdgeMesh
};
