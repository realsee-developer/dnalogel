var f = Object.defineProperty;
var g = (r, t, e) => t in r ? f(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var i = (r, t, e) => (g(r, typeof t != "symbol" ? t + "" : t, e), e);
import * as o from "three";
import { DirectionGroup as E, DirectionMesh as l } from "../../utils/direction.js";
import { RENDER_ORDER as d } from "../../Constants/RenderOrder.js";
class P extends E {
  constructor(e) {
    var c;
    super(e.direction);
    i(this, "line");
    i(this, "arrow");
    i(this, "lineHeight", 0.4);
    i(this, "arrowHeight", 0.1);
    i(this, "name", "ArrowGroup");
    const m = new o.Color((c = e.color) != null ? c : 16214315), a = new o.MeshBasicMaterial({
      color: m,
      transparent: !0,
      // 设置为透明材质，确保在透明渲染队列中
      opacity: 1,
      // 完全不透明，但使用透明渲染队列
      depthTest: !1,
      // 禁用深度测试，避免被其他对象遮挡
      depthWrite: !1
      // 禁用深度写入，避免影响其他透明对象
    }), w = new o.ConeGeometry(0.04, 0.1, 32), n = new l(w, a.clone(), e.direction);
    n.name = `arrow-${e.direction}`, n.renderOrder = d.MOVE_HELPER_ARROW, this.arrow = n;
    const h = 4e-3, y = new o.CylinderGeometry(h, h, 0.4, 32), s = new l(y, a.clone(), e.direction);
    s.name = `line-${e.direction}`, s.renderOrder = d.MOVE_HELPER_ARROW, this.line = s, this.formatArrow(), this.formatLine(), this.add(this.arrow, this.line);
  }
  formatArrow() {
    this.arrow.geometry.translate(0, this.lineHeight + this.arrowHeight / 2, 0), this.direction === "x" ? (this.arrow.geometry.rotateX(Math.PI / 2), this.arrow.geometry.rotateY(Math.PI / 2)) : this.direction === "z" && this.arrow.geometry.rotateX(Math.PI / 2);
  }
  formatLine() {
    this.line.geometry.translate(0, this.lineHeight / 2, 0), this.direction === "x" ? (this.line.geometry.rotateX(Math.PI / 2), this.line.geometry.rotateY(Math.PI / 2)) : this.direction === "z" && this.line.geometry.rotateX(Math.PI / 2);
  }
}
export {
  P as ArrowGroup
};
