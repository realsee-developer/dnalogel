import * as n from "three";
const c = (o, t) => {
  if (!t)
    return o;
  const e = new n.Vector3(), r = new n.Quaternion(), a = new n.Vector3();
  return t.decompose(e, r, a), o.clone().multiply(a).applyQuaternion(r).add(e);
};
export {
  c as transformPosition
};
