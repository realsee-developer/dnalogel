import { Matrix4 as n } from "three";
import { centerPoint as e } from "../../shared-utils/three/centerPoint.js";
import { isMediaModelTag as a } from "./tag/tagCheck.js";
import { anyPositionToVector3 as m, vector3Position as s } from "../../shared-utils/positionToVector3.js";
function p(o) {
  const i = (() => {
    if (a(o) && o.matrix) {
      const r = new n().fromArray(o.matrix);
      return o.data.mediaPosition.map((t) => m(t).clone().applyMatrix4(r));
    } else
      return o.position;
  })();
  return s(i);
}
function x(o) {
  const i = p(o);
  return e(...Array.isArray(i) ? i : [i]);
}
export {
  x as getTagCenterPosition,
  p as getTagPosition
};
