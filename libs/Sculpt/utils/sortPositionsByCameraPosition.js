import { getNormal as m } from "../../shared-utils/three/getNormal.js";
import { centerPoint as a } from "../../shared-utils/three/centerPoint.js";
function f(r, t) {
  const e = m(r), n = a(...r), o = t.clone().sub(n);
  return e.dot(o) >= 0 ? r : r.slice().reverse();
}
export {
  f as sortPositionsByCameraPosition
};
