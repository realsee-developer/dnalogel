import { vectorIsEqual as o } from "../../shared-utils/three/vectorIsEqual.js";
import * as n from "three";
function s(e) {
  if (e.length < 3 || !o(e[0], e.at(-1)))
    return !1;
  let l = !0;
  const a = new n.Vector3().subVectors(e[1], e[0]).normalize();
  for (let r = 2; r < e.length; r++) {
    const t = new n.Vector3().subVectors(e[r], e[0]).normalize();
    if (!o(t, a) && !o(t, a.clone().negate())) {
      l = !1;
      break;
    }
  }
  if (l)
    return !1;
  const c = new n.Plane().setFromCoplanarPoints(e[0], e[1], e[2]);
  return e.every((r, t) => t < 3 ? !0 : c.distanceToPoint(r) < 1e-6);
}
export {
  s as validatePolygon
};
