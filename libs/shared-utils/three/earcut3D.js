import c from "earcut";
import { getNormal as l } from "./getNormal.js";
import * as r from "three";
function s(t) {
  if (t.length < 3)
    return [];
  const e = l([t[0].clone(), t[1].clone(), t[2].clone()]), n = new r.Quaternion().setFromUnitVectors(new r.Vector3(0, 1, 0), e), a = t.map((o) => o.clone().applyQuaternion(n)).flatMap((o) => [o.x, o.z]);
  return c(a);
}
export {
  s as earcut3D
};
