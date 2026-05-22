import * as e from "three";
const u = new e.Vector3();
function w(P) {
  const { raycaster: a, line: n, clampToLine: p = !0 } = P, r = new e.Plane().setFromNormalAndCoplanarPoint(a.ray.direction.clone().normalize(), new e.Vector3()), t = r.projectPoint(n.start, new e.Vector3()), s = r.projectPoint(n.end, new e.Vector3()), l = new e.Line3(t, s), o = l.closestPointToPoint(a.ray.origin, p, u), d = o.distanceTo(s), m = o.distanceTo(t), c = l.distance();
  if (d > m && d > c) {
    const i = -o.distanceTo(t) / c, T = n.start.clone().sub(n.end).normalize();
    return n.start.clone().sub(T.clone().multiplyScalar(i * n.distance()));
  } else {
    const i = o.distanceTo(t) / c;
    return new e.Vector3().lerpVectors(n.start, n.end, i);
  }
}
export {
  w as rayOnLine
};
