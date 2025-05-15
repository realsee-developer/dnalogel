import { Vector3 as n } from "three";
const f = ({ x: r, y: e, z: c }) => new n(r, e, c), a = (r) => new n().fromArray(r), t = (r) => {
  if (r)
    return r instanceof n ? r : Array.isArray(r) ? a(r) : f(r);
};
function o(r) {
  if (r)
    return Array.isArray(r) ? typeof r[0] == "number" ? t(r) : r.map(t) : t(r);
}
export {
  t as anyPositionToVector3,
  a as arrayPositionToVector3,
  f as positionToVector3,
  o as vector3Position
};
