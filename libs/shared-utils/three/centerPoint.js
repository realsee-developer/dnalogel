import { Vector3 as r } from "three";
function c(...t) {
  const e = new r();
  return t.forEach((n) => e.add(n)), e.divideScalar(t.length), e;
}
export {
  c as centerPoint
};
