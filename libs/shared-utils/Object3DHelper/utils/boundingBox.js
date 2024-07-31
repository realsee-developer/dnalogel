import * as m from "three";
function P(z, n) {
  const { max: e, min: t } = z;
  switch (n) {
    case 0:
      return new m.Vector3(e.x, e.y, e.z);
    case 1:
      return new m.Vector3(t.x, e.y, e.z);
    case 2:
      return new m.Vector3(t.x, t.y, e.z);
    case 3:
      return new m.Vector3(e.x, t.y, e.z);
    case 4:
      return new m.Vector3(e.x, e.y, t.z);
    case 5:
      return new m.Vector3(t.x, e.y, t.z);
    case 6:
      return new m.Vector3(t.x, t.y, t.z);
    case 7:
      return new m.Vector3(e.x, t.y, t.z);
  }
}
function g(z) {
  const n = new m.Box3(), e = new m.Vector3();
  if (z.updateWorldMatrix(!1, !1), z.traverse((t) => {
    var s;
    if (t.name === "shadow" || t.type === "Line2")
      return;
    const r = t.geometry;
    if (t.updateWorldMatrix(!1, !1), r !== void 0) {
      const c = (s = r == null ? void 0 : r.attributes) == null ? void 0 : s.position;
      if (c)
        for (let o = 0, i = c.count; o < i; o++)
          e.fromBufferAttribute(c, o).applyMatrix4(t.matrixWorld), n.expandByPoint(e);
      else
        r.vertices && r.vertices.forEach((o) => {
          const i = o.clone().applyMatrix4(t.matrixWorld);
          n.expandByPoint(i);
        });
    }
  }), !n.isEmpty())
    return n.applyMatrix4(h(z.matrixWorld.clone())), n;
}
const h = (z) => {
  const n = z.elements, e = n[0], t = n[1], r = n[2], s = n[3], c = n[4], o = n[5], i = n[6], a = n[7], u = n[8], x = n[9], f = n[10], l = n[11], p = n[12], y = n[13], d = n[14], w = n[15], v = x * d * a - y * f * a + y * i * l - o * d * l - x * i * w + o * f * w, B = p * f * a - u * d * a - p * i * l + c * d * l + u * i * w - c * f * w, M = u * y * a - p * x * a + p * o * l - c * y * l - u * o * w + c * x * w, W = p * x * i - u * y * i - p * o * f + c * y * f + u * o * d - c * x * d, E = e * v + t * B + r * M + s * W;
  if (E === 0)
    return z.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  const V = 1 / E;
  return n[0] = v * V, n[1] = (y * f * s - x * d * s - y * r * l + t * d * l + x * r * w - t * f * w) * V, n[2] = (o * d * s - y * i * s + y * r * a - t * d * a - o * r * w + t * i * w) * V, n[3] = (x * i * s - o * f * s - x * r * a + t * f * a + o * r * l - t * i * l) * V, n[4] = B * V, n[5] = (u * d * s - p * f * s + p * r * l - e * d * l - u * r * w + e * f * w) * V, n[6] = (p * i * s - c * d * s - p * r * a + e * d * a + c * r * w - e * i * w) * V, n[7] = (c * f * s - u * i * s + u * r * a - e * f * a - c * r * l + e * i * l) * V, n[8] = M * V, n[9] = (p * x * s - u * y * s - p * t * l + e * y * l + u * t * w - e * x * w) * V, n[10] = (c * y * s - p * o * s + p * t * a - e * y * a - c * t * w + e * o * w) * V, n[11] = (u * o * s - c * x * s - u * t * a + e * x * a + c * t * l - e * o * l) * V, n[12] = W * V, n[13] = (u * y * r - p * x * r + p * t * f - e * y * f - u * t * d + e * x * d) * V, n[14] = (p * o * r - c * y * r - p * t * i + e * y * i + c * t * d - e * o * d) * V, n[15] = (c * x * r - u * o * r + u * t * i - e * x * i - c * t * f + e * o * f) * V, z;
};
export {
  g as boundingBox,
  P as boxVertex
};
