import { Euler as y, Vector3 as t, Matrix4 as p } from "three";
import { centerPoint as x } from "../../shared-utils/three/centerPoint.js";
import { is3DBoxTag as M, isPolygonTag as d, isMediaModelTag as P, isMaskTag as T } from "./tag/tagCheck.js";
import { anyPositionToVector3 as a, vector3Position as z } from "../../shared-utils/positionToVector3.js";
import { transformPosition as A } from "../../shared-utils/five/transformPosition.js";
function h(o, i) {
  const n = a(o.start), r = a(o.end), e = new y().fromArray(o.rotation), s = A(new t((n.x + r.x) / 2, (n.y + r.y) / 2, (n.z + r.z) / 2), i), m = new t(Math.abs(r.x - n.x) / 2, Math.abs(r.y - n.y) / 2, Math.abs(r.z - n.z) / 2), u = new p().makeRotationFromEuler(e), f = [
    // 底面4个点 (y = -0.5)
    new t(-0.5, -0.5, -0.5),
    new t(0.5, -0.5, -0.5),
    new t(0.5, -0.5, 0.5),
    new t(-0.5, -0.5, 0.5),
    // 顶面4个点 (y = 0.5)
    new t(-0.5, 0.5, -0.5),
    new t(0.5, 0.5, -0.5),
    new t(0.5, 0.5, 0.5),
    new t(-0.5, 0.5, 0.5)
  ], l = m.clone().multiplyScalar(2);
  return f.map((w) => w.clone().multiply(l).applyMatrix4(u).add(s));
}
function c(o, i) {
  if (!i)
    return o;
  const n = new p().fromArray(i);
  return o.map((r) => r.clone().applyMatrix4(n));
}
function k(o) {
  const i = (() => {
    var n, r;
    if (M(o) && o.position) {
      const e = h(o.position, (r = (n = o.plugin) == null ? void 0 : n.workUtil) == null ? void 0 : r.transform);
      return c(e, o.matrix);
    }
    if (d(o) && o.position) {
      const e = o.position.map((s) => a(s));
      return c(e, o.matrix);
    }
    if (P(o) && o.matrix) {
      const e = o.data.mediaPosition.map((s) => a(s));
      return c(e, o.matrix);
    }
    return T(o) ? o.position && Array.isArray(o.position) ? a(o.position) : (console.warn("[getTagPosition] Mask tag without position, tag id:", o.id), new t(0, 0, 0)) : o.position;
  })();
  return z(i);
}
function v(o) {
  const i = k(o);
  return x(...Array.isArray(i) ? i : [i]);
}
export {
  c as applyMatrixToPoints,
  h as getBoxCorners,
  v as getTagCenterPosition,
  k as getTagPosition
};
