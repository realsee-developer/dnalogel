import { earcutExports as c } from "../../vendor/earcut/src/earcut.js";
import { getNormal as i } from "./getNormal.js";
import * as r from "three";
function p(o) {
  if (o.length < 3)
    return [];
  const n = i(o), e = new r.Quaternion().setFromUnitVectors(n, new r.Vector3(0, 1, 0)), a = o.map((t) => t.clone().applyQuaternion(e)).flatMap((t) => [t.x, t.z]);
  return c(a);
}
export {
  p as earcut3D
};
