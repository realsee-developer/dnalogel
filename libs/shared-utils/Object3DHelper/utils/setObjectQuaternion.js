import * as i from "three";
function r(n, t, o) {
  if (o) {
    const e = new i.Vector3().subVectors(n.position, o).applyQuaternion(n.quaternion.clone().inverse()).applyQuaternion(t).add(o);
    n.position.copy(e);
  }
  n.quaternion.copy(t);
}
export {
  r as setObjectQuaternion
};
