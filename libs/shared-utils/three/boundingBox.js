import * as z from "three";
import { THREESphere as S } from "./core/Sphere.js";
function O(u) {
  const { max: t, min: n } = u;
  return [
    new z.Vector3(t.x, t.y, t.z),
    new z.Vector3(n.x, t.y, t.z),
    new z.Vector3(n.x, n.y, t.z),
    new z.Vector3(t.x, n.y, t.z),
    new z.Vector3(t.x, t.y, n.z),
    new z.Vector3(n.x, t.y, n.z),
    new z.Vector3(n.x, n.y, n.z),
    new z.Vector3(t.x, n.y, n.z)
  ];
}
function P(u, t) {
  const { max: n, min: e } = u;
  switch (t) {
    case 0:
      return new z.Vector3(n.x, n.y, n.z);
    case 1:
      return new z.Vector3(e.x, n.y, n.z);
    case 2:
      return new z.Vector3(e.x, e.y, n.z);
    case 3:
      return new z.Vector3(n.x, e.y, n.z);
    case 4:
      return new z.Vector3(n.x, n.y, e.z);
    case 5:
      return new z.Vector3(e.x, n.y, e.z);
    case 6:
      return new z.Vector3(e.x, e.y, e.z);
    case 7:
      return new z.Vector3(n.x, e.y, e.z);
  }
}
function R(u) {
  return M(u, "box3");
}
function T(u) {
  return M(u, "sphere");
}
function A(u) {
  return h(u, "box3");
}
function I(u) {
  return h(u, "sphere");
}
function h(u, t) {
  const n = t === "box3" ? new z.Box3() : new S(), e = new z.Vector3();
  if (u.updateWorldMatrix(!1, !1), u.traverse((r) => {
    var x;
    if (r.name === "shadow" || r.type === "Line2")
      return;
    const o = r.geometry;
    if (r.updateWorldMatrix(!1, !1), o !== void 0) {
      const s = (x = o == null ? void 0 : o.attributes) == null ? void 0 : x.position;
      if (s)
        for (let c = 0, i = s.count; c < i; c++)
          e.fromBufferAttribute(s, c).applyMatrix4(r.matrixWorld), n.expandByPoint(e);
      else
        o.vertices && o.vertices.forEach((c) => {
          const i = c.clone().applyMatrix4(r.matrixWorld);
          n.expandByPoint(i);
        });
    }
  }), !n.isEmpty())
    return n;
}
function M(u, t) {
  const n = h(u, t);
  return n && n.applyMatrix4(W(u.matrixWorld.clone())), n;
}
const W = (u) => {
  const t = u.elements, n = t[0], e = t[1], r = t[2], o = t[3], x = t[4], s = t[5], c = t[6], i = t[7], a = t[8], f = t[9], p = t[10], w = t[11], y = t[12], d = t[13], l = t[14], V = t[15], B = f * l * i - d * p * i + d * c * w - s * l * w - f * c * V + s * p * V, v = y * p * i - a * l * i - y * c * w + x * l * w + a * c * V - x * p * V, g = a * d * i - y * f * i + y * s * w - x * d * w - a * s * V + x * f * V, E = y * f * c - a * d * c - y * s * p + x * d * p + a * s * l - x * f * l, b = n * B + e * v + r * g + o * E;
  if (b === 0)
    return u.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  const m = 1 / b;
  return t[0] = B * m, t[1] = (d * p * o - f * l * o - d * r * w + e * l * w + f * r * V - e * p * V) * m, t[2] = (s * l * o - d * c * o + d * r * i - e * l * i - s * r * V + e * c * V) * m, t[3] = (f * c * o - s * p * o - f * r * i + e * p * i + s * r * w - e * c * w) * m, t[4] = v * m, t[5] = (a * l * o - y * p * o + y * r * w - n * l * w - a * r * V + n * p * V) * m, t[6] = (y * c * o - x * l * o - y * r * i + n * l * i + x * r * V - n * c * V) * m, t[7] = (x * p * o - a * c * o + a * r * i - n * p * i - x * r * w + n * c * w) * m, t[8] = g * m, t[9] = (y * f * o - a * d * o - y * e * w + n * d * w + a * e * V - n * f * V) * m, t[10] = (x * d * o - y * s * o + y * e * i - n * d * i - x * e * V + n * s * V) * m, t[11] = (a * s * o - x * f * o - a * e * i + n * f * i + x * e * w - n * s * w) * m, t[12] = E * m, t[13] = (a * d * r - y * f * r + y * e * p - n * d * p - a * e * l + n * f * l) * m, t[14] = (y * s * r - x * d * r - y * e * c + n * d * c + x * e * l - n * s * l) * m, t[15] = (x * f * r - a * s * r + a * e * c - n * f * c - x * e * p + n * s * p) * m, u;
};
export {
  M as bounding,
  R as boundingBox,
  T as boundingSphere,
  P as boxVertex,
  O as boxVertexes,
  h as worldBounding,
  A as worldBoundingBox,
  I as worldBoundingSphere
};
