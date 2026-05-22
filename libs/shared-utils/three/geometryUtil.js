import { Vector3 as l } from "three";
import { centerPoint as p } from "./centerPoint.js";
function b(n) {
  return a(n).reduce((e, [r, i, o]) => e + u(r, i, o), 0);
}
function h(n) {
  const t = a(n);
  if (t.length === 0) {
    console.warn("No geometry triangles found"), console.debug({ geometry: n, triangles: t });
    return;
  }
  let e = 0, r = new l();
  for (const [i, o, c] of t) {
    const s = u(i, o, c), g = A(i, o, c, s);
    e += s, r.add(g);
  }
  return r = r.divideScalar(e), { center: r, area: e };
}
function u(n, t, e) {
  return t.clone().sub(n).cross(e.clone().sub(n)).length() / 2;
}
function A(n, t, e, r) {
  const i = r != null ? r : u(n, t, e);
  return p(n, t, e).multiplyScalar(i);
}
function a(n) {
  var i;
  const t = n.getAttribute("position"), e = (i = n.getIndex()) == null ? void 0 : i.array;
  if (!t || !e)
    return [];
  let r = [];
  for (let o = 0; o < e.length; o += 3) {
    const c = e[o], s = e[o + 1], g = e[o + 2], f = new l().fromArray([t.getX(c), t.getY(c), t.getZ(c)]), m = new l().fromArray([t.getX(s), t.getY(s), t.getZ(s)]), d = new l().fromArray([t.getX(g), t.getY(g), t.getZ(g)]);
    r.push([f, m, d]);
  }
  return r;
}
export {
  b as getGeometryArea,
  h as getGeometryInfo,
  u as triangleArea,
  A as triangleCenter
};
