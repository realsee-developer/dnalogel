var x = Object.defineProperty;
var y = (r, s, e) => s in r ? x(r, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[s] = e;
var p = (r, s, e) => (y(r, typeof s != "symbol" ? s + "" : s, e), e);
import * as c from "three";
import { concavePolygonVertexIndex as a, convexPolygonVertexIndex as d } from "./polygonVertex.js";
class v extends c.BufferGeometry {
  constructor(e) {
    super();
    p(this, "bottomPositions", []);
    p(this, "topPosition", []);
    p(this, "_type", "Concave");
    e && this.setPosition(e);
  }
  /**
   * @description 设置底面和顶面的位置
   * @param params.bottomPositions 底面多边形的有序顶点，顺时针或逆时针均可
   * @param params.topPosition 底面多边形的第一个点对应的顶面的顶点
   * @param params.type 棱柱的类型，凹多边形（Concave）或凸多边形（Convex），默认为凹多边形。如果可以确定是凸多边形，建议设置为凸多边形，性能更好
   */
  setPosition(e) {
    var u, g, m;
    const n = (u = e.bottomPositions) != null ? u : this.bottomPositions, h = (g = e.topPosition) != null ? g : this.topPosition;
    if (this._type = (m = e.type) != null ? m : this._type, this.bottomPositions = n, this.topPosition = h, !n || n.length < 3) {
      console.error("PrismGeometry: Invalid parameters", n, h, e), this.bottomPositions = [], this.setAttribute("position", new c.BufferAttribute(new Float32Array([]), 3));
      return;
    }
    const i = [], t = [];
    t.push(...n), t[0][0] === t.at(-1)[0] && t[0][1] === t.at(-1)[1] && t[0][2] === t.at(-1)[2] && (t.length -= 1);
    const P = this._type === "Concave" ? a(t) : d(t);
    if (i.push(...P), h && h.length === 3) {
      const l = [h[0] - n[0][0], h[1] - n[0][1], h[2] - n[0][2]], f = t.map((o) => [o[0] + l[0], o[1] + l[1], o[2] + l[2]]);
      t.push(...f);
      const b = i.map((o) => o + t.length / 2);
      i.push(...b);
      for (let o = 0; o < t.length / 2 - 1; o++)
        i.push(o, o + 1, o + t.length / 2), i.push(o + 1, o + t.length / 2 + 1, o + t.length / 2);
      i.push(0, t.length / 2, t.length / 2 - 1), i.push(t.length / 2, t.length - 1, t.length / 2 - 1);
    }
    this.setAttribute("position", new c.Float32BufferAttribute(t.flat(), 3)), this.setIndex(i), this.computeBoundingSphere();
  }
}
export {
  v as PrismGeometry
};
