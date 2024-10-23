var y = Object.defineProperty;
var g = (r, t, e) => t in r ? y(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var i = (r, t, e) => (g(r, typeof t != "symbol" ? t + "" : t, e), e);
import * as o from "three";
import { DirectionGroup as f, DirectionMesh as l } from "../../utils/direction.js";
class G extends f {
  constructor(e) {
    var c;
    super(e.direction);
    i(this, "line");
    i(this, "arrow");
    i(this, "lineHeight", 0.4);
    i(this, "arrowHeight", 0.1);
    this.name = "ArrowGroup";
    const d = new o.Color((c = e.color) != null ? c : 16214315), n = new o.MeshBasicMaterial({
      color: d,
      depthTest: !1,
      depthWrite: !1,
      opacity: 1,
      transparent: !0,
      side: o.DoubleSide
    });
    this.renderOrder = 50;
    const w = new o.ConeGeometry(0.04, 0.1, 32), s = new l(w, n.clone(), e.direction);
    s.name = `arrow-${e.direction}`, this.arrow = s;
    const h = 4e-3, m = new o.CylinderGeometry(h, h, 0.4, 32), a = new l(m, n.clone(), e.direction);
    a.name = `line-${e.direction}`, this.line = a, this.formatArrow(), this.formatLine(), this.add(this.arrow, this.line);
  }
  formatArrow() {
    this.arrow.geometry.translate(0, this.lineHeight + this.arrowHeight / 2, 0), this.direction === "x" ? (this.arrow.geometry.rotateX(Math.PI / 2), this.arrow.geometry.rotateY(Math.PI / 2)) : this.direction === "z" && this.arrow.geometry.rotateX(Math.PI / 2);
  }
  formatLine() {
    this.line.geometry.translate(0, this.lineHeight / 2, 0), this.direction === "x" ? (this.line.geometry.rotateX(Math.PI / 2), this.line.geometry.rotateY(Math.PI / 2)) : this.direction === "z" && this.line.geometry.rotateX(Math.PI / 2);
  }
}
export {
  G as ArrowGroup
};
