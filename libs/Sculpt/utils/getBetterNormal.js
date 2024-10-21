import * as n from "three";
function l(e, o) {
  const r = new n.Plane().setFromCoplanarPoints(e[0], e[1], e[2]).projectPoint(o, new n.Vector3());
  return new n.Vector3().subVectors(o, r).normalize();
}
export {
  l as getBetterNormal
};
