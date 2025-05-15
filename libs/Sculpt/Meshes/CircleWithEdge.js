var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var P = (i, s, e) => s in i ? c(i, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[s] = e;
var l = (i, s) => {
  var e = {};
  for (var t in i)
    u.call(i, t) && s.indexOf(t) < 0 && (e[t] = i[t]);
  if (i != null && r)
    for (var t of r(i))
      s.indexOf(t) < 0 && L.call(i, t) && (e[t] = i[t]);
  return e;
};
var d = (i, s, e) => (P(i, typeof s != "symbol" ? s + "" : s, e), e);
import { CircleMesh as p } from "./Circle.js";
import { LineMesh as y } from "./Line.js";
class S extends p {
  constructor(e) {
    const o = e != null ? e : {}, { normal: t, radius: h, center: n } = o, g = l(o, ["normal", "radius", "center"]);
    super(g);
    d(this, "edgeLine");
    this.edgeLine = new y(g), this.add(this.edgeLine), t && h && n && this.setPoints({ normal: t, radius: h, center: n });
  }
  setPoints(...e) {
    super.setPoints(...e);
    const t = this.meshFont.geometry.vertices.slice(1);
    this.edgeLine.setPoints(t.concat(t[0]));
  }
  setStyle(e) {
    super.setStyle(e), this.edgeLine.setStyle(e);
  }
  highlight() {
    super.highlight(), this.edgeLine.highlight();
  }
  unhighlight() {
    super.unhighlight(), this.edgeLine.unhighlight();
  }
}
export {
  S as CircleWithEdgeMesh
};
