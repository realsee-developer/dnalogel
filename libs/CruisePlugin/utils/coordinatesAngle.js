import { coordinatesToVector as l } from "./coordinatesToVector.js";
import "three";
function s(e, a) {
  const r = l(e), t = l(a);
  return r.angleTo(t);
}
function u(e, a, r = !1) {
  const t = a.longitude - e.longitude, n = a.latitude - e.latitude, o = Math.sqrt(t * t + n * n);
  return r ? Math.abs(t) >= Math.abs(n) ? t >= 0 ? o : -o : n >= 0 ? o : -o : o;
}
export {
  s as coordinatesAngle,
  u as coordinatesRotation
};
