import * as t from "three";
const y = new t.Vector3();
function O(p) {
  var d;
  const { raycaster: e, line: n, clampToLine: m = !0 } = p;
  if (((d = e.camera) == null ? void 0 : d.type) === "OrthographicCamera") {
    const o = e.ray.origin.clone();
    return n.closestPointToPoint(o, !1, new t.Vector3());
  }
  const a = new t.Plane().setFromNormalAndCoplanarPoint(e.ray.direction.clone().normalize(), e.ray.origin), r = a.projectPoint(n.start, new t.Vector3()), s = a.projectPoint(n.end, new t.Vector3()), l = new t.Line3(r, s), c = l.closestPointToPoint(e.ray.origin, m, y), P = c.distanceTo(s), T = c.distanceTo(r), i = l.distance();
  if (P > T && P > i) {
    const o = -c.distanceTo(r) / i, u = n.start.clone().sub(n.end).normalize();
    return n.start.sub(u.clone().multiplyScalar(o * n.distance()));
  } else {
    const o = c.distanceTo(r) / i;
    return new t.Vector3().lerpVectors(n.start, n.end, o);
  }
}
export {
  O as rayOnLine
};
