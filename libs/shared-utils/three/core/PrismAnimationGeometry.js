var B = Object.defineProperty;
var M = (d, l, t) => l in d ? B(d, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : d[l] = t;
var P = (d, l, t) => (M(d, typeof l != "symbol" ? l + "" : l, t), t);
import * as C from "three";
import { concavePolygonVertexIndex as I, convexPolygonVertexIndex as V } from "./polygonVertex.js";
class G extends C.BufferGeometry {
  constructor(t) {
    super();
    P(this, "bottomPositions", []);
    P(this, "topPosition", []);
    P(this, "faceCount", 0);
    P(this, "_type", "Concave");
    t && this.setPosition(t);
  }
  /**
   * 设置底面和顶面的位置，创建类似BoxGeometry的多面结构
   */
  setPosition(t) {
    var x, f, g;
    const i = (x = t.bottomPositions) != null ? x : this.bottomPositions, a = (f = t.topPosition) != null ? f : this.topPosition;
    if (this._type = (g = t.type) != null ? g : this._type, this.bottomPositions = i, this.topPosition = a, !i || i.length < 3 || !a || a.length !== 3) {
      console.error("PrismAnimationGeometry: Invalid parameters", i, a, t);
      return;
    }
    const n = [...i];
    n[0][0] === n.at(-1)[0] && n[0][1] === n.at(-1)[1] && n[0][2] === n.at(-1)[2] && (n.length -= 1);
    const p = [a[0] - i[0][0], a[1] - i[0][1], a[2] - i[0][2]], m = n.map((s) => [s[0] + p[0], s[1] + p[1], s[2] + p[2]]);
    this.faceCount = 2 + n.length;
    const h = [], e = [], r = [], c = [];
    let u = 0;
    this.addBottomFace(n, h, e, r, u, c, 0), u += this.getBottomFaceVertexCount(n), this.addTopFace(m, h, e, r, u, c, 1), u += this.getTopFaceVertexCount(m);
    for (let s = 0; s < n.length; s++) {
      const o = (s + 1) % n.length;
      this.addSideFace(
        n[s],
        n[o],
        m[s],
        m[o],
        h,
        e,
        r,
        u,
        c,
        2 + s
      ), u += 4;
    }
    this.setAttribute("position", new C.Float32BufferAttribute(h, 3)), this.setAttribute("uv", new C.Float32BufferAttribute(e, 2)), this.setIndex(r), this.clearGroups(), c.forEach((s) => {
      this.addGroup(s.start, s.count, s.materialIndex);
    }), this.computeBoundingSphere(), console.log("PrismAnimationGeometry UV debug:", {
      totalUVs: e.length / 2,
      totalPositions: h.length / 3,
      faceCount: this.faceCount,
      uvSample: e.slice(0, 20)
    });
  }
  addBottomFace(t, i, a, n, p, m, h) {
    const e = Math.min(...t.map((o) => o[0])), r = Math.max(...t.map((o) => o[0])), c = Math.min(...t.map((o) => o[2])), u = Math.max(...t.map((o) => o[2])), x = r - e || 1, f = u - c || 1;
    for (const o of t) {
      i.push(o[0], o[1], o[2]);
      const y = (o[0] - e) / x, F = (o[2] - c) / f;
      a.push(y, F);
    }
    const g = n.length, s = this._type === "Concave" ? I(t) : V(t);
    for (const o of s)
      n.push(o + p);
    m.push({
      start: g,
      count: n.length - g,
      materialIndex: h
    });
  }
  addTopFace(t, i, a, n, p, m, h) {
    const e = Math.min(...t.map((o) => o[0])), r = Math.max(...t.map((o) => o[0])), c = Math.min(...t.map((o) => o[2])), u = Math.max(...t.map((o) => o[2])), x = r - e || 1, f = u - c || 1;
    for (const o of t) {
      i.push(o[0], o[1], o[2]);
      const y = (o[0] - e) / x, F = (o[2] - c) / f;
      a.push(y, F);
    }
    const g = n.length, s = this._type === "Concave" ? I(t) : V(t);
    for (let o = s.length - 1; o >= 0; o--)
      n.push(s[o] + p);
    m.push({
      start: g,
      count: n.length - g,
      materialIndex: h
    });
  }
  addSideFace(t, i, a, n, p, m, h, e, r, c) {
    p.push(
      t[0],
      t[1],
      t[2],
      // 0
      i[0],
      i[1],
      i[2],
      // 1
      n[0],
      n[1],
      n[2],
      // 2
      a[0],
      a[1],
      a[2]
      // 3
    ), m.push(
      0,
      0,
      // bottom1 (左下)
      1,
      0,
      // bottom2 (右下)  
      1,
      1,
      // top2 (右上)
      0,
      1
      // top1 (左上)
    );
    const u = h.length;
    h.push(
      e + 0,
      e + 1,
      e + 2,
      // 第一个三角形
      e + 0,
      e + 2,
      e + 3
      // 第二个三角形
    ), r.push({
      start: u,
      count: 6,
      // 两个三角形，6个索引
      materialIndex: c
    });
  }
  getBottomFaceVertexCount(t) {
    return t.length;
  }
  getTopFaceVertexCount(t) {
    return t.length;
  }
}
export {
  G as PrismAnimationGeometry
};
