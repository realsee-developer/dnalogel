var y = Object.defineProperty;
var g = (i, t, e) => t in i ? y(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var r = (i, t, e) => (g(i, typeof t != "symbol" ? t + "" : t, e), e);
import * as o from "three";
import { DirectionGroup as f, DirectionMesh as l } from "../../utils/direction.js";
class G extends f {
  constructor(e) {
    var c;
    super(e.direction);
    r(this, "line");
    r(this, "arrow");
    r(this, "lineHeight", 0.4);
    r(this, "arrowHeight", 0.1);
    r(this, "renderOrder", 50);
    r(this, "name", "ArrowGroup");
    const w = new o.Color((c = e.color) != null ? c : 16214315), n = new o.MeshBasicMaterial({
      color: w,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    }), d = new o.ConeGeometry(0.04, 0.1, 32), s = new l(d, n.clone(), e.direction);
    s.name = `arrow-${e.direction}`, this.arrow = s;
    const a = 4e-3, m = new o.CylinderGeometry(a, a, 0.4, 32), h = new l(m, n.clone(), e.direction);
    h.name = `line-${e.direction}`, this.line = h, this.formatArrow(), this.formatLine(), this.add(this.arrow, this.line);
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
