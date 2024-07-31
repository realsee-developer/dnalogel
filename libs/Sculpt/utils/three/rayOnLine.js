import * as e from "three";
function w(m) {
  var p;
  const { cameraPosition: r, raycaster: a, line: n, clampToLine: T = !0 } = m;
  if (((p = a.camera) == null ? void 0 : p.type) === "OrthographicCamera") {
    const t = a.ray.origin.clone();
    return n.closestPointToPoint(t, !1, new e.Vector3());
  }
  const s = new e.Plane().setFromNormalAndCoplanarPoint(a.ray.direction.clone().normalize(), r), o = s.projectPoint(n.start, new e.Vector3()), l = s.projectPoint(n.end, new e.Vector3()), P = new e.Line3(o, l), c = P.closestPointToPoint(r, T, new e.Vector3()), d = c.distanceTo(l), u = c.distanceTo(o), i = P.distance();
  if (d > u && d > i) {
    const t = -c.distanceTo(o) / i, O = n.start.clone().sub(n.end).normalize();
    return n.start.sub(O.clone().multiplyScalar(t * n.distance()));
  } else {
    const t = c.distanceTo(o) / i;
    return new e.Vector3().lerpVectors(n.start, n.end, t);
  }
}
export {
  w as rayOnLine
};
