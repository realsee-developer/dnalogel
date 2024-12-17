var b = Object.defineProperty;
var m = (a, n, e) => n in a ? b(a, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[n] = e;
var x = (a, n, e) => (m(a, typeof n != "symbol" ? n + "" : n, e), e);
import * as i from "three";
import { pointsIsRectangle as v } from "../math/pointsIsRectangle.js";
import { centerPoint as g } from "./centerPoint.js";
class M extends i.Mesh {
  /**
   * @description 生成一个四边形的Mesh
   * @param {Vector3Position[]} points: 四个顶点的坐标, [左下，右下，右上，左上]
   */
  constructor(e, f, t) {
    if (e.length !== 4)
      throw new Error("QuadrangleMesh: Invalid number of points, it's not a quadrangle");
    const [s, p, u, l] = e, o = g(...e), A = [s.clone().sub(o), p.clone().sub(o), u.clone().sub(o), l.clone().sub(o)], c = new z(A, t);
    super(c, f);
    x(this, "name", "QuadrangleMesh");
    this.position.copy(o);
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
}
class z extends i.BufferGeometry {
  /**
   * @description 生成一个四边形的BufferGeometry，原点取 points[0]，即左下角
   * @param {Vector3Position[]} points: 四个顶点的坐标, [左下，右下，右上，左上]
   */
  constructor(e, f) {
    super();
    x(this, "name", "QuadrangleGeometry");
    x(this, "points");
    this.points = e;
    const t = f != null ? f : v(e) ? 64 : 1;
    if (e.length !== 4) {
      console.error("Invalid number of points, it's not a quadrangle");
      return;
    }
    const [s, p, u, l] = e, [o, A, c, d] = [new i.Vector2(0, 0), new i.Vector2(1, 0), new i.Vector2(1, 1), new i.Vector2(0, 1)], y = [], h = [];
    y.push(...s.toArray()), h.push(...o.toArray());
    for (let r = 1; r < t; r++)
      y.push(
        s.x + (p.x - s.x) * r / t,
        s.y + (p.y - s.y) * r / t,
        s.z + (p.z - s.z) * r / t
      ), h.push(o.x + (A.x - o.x) * r / t, o.y + (A.y - o.y) * r / t);
    y.push(...p.toArray()), h.push(...A.toArray()), y.push(...u.toArray()), h.push(...c.toArray());
    for (let r = 1; r < t; r++)
      y.push(
        u.x + (l.x - u.x) * r / t,
        u.y + (l.y - u.y) * r / t,
        u.z + (l.z - u.z) * r / t
      ), h.push(c.x + (d.x - c.x) * r / t, c.y + (d.y - c.y) * r / t);
    y.push(...l.toArray()), h.push(...d.toArray());
    const w = [];
    for (let r = 0; r < t; r++)
      w.push(r, r + 1, t * 2 - r, r, t * 2 - r, t * 2 + 1 - r);
    this.setAttribute("position", new i.BufferAttribute(new Float32Array(y), 3)), this.setAttribute("uv", new i.BufferAttribute(new Float32Array(h), 2)), this.setIndex(new i.BufferAttribute(new Uint32Array(w), 1));
  }
}
export {
  z as QuadrangleGeometry,
  M as QuadrangleMesh
};
