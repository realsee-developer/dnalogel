import { anyPositionToVector3 as e } from "../../shared-utils/positionToVector3.js";
import "three";
function i(r) {
  if (!r || r.length < 3)
    return;
  const o = r.map(e), t = o[1].clone().sub(o[0]), n = o[2].clone().sub(o[1]);
  return t.cross(n);
}
export {
  i as planeNormal
};
