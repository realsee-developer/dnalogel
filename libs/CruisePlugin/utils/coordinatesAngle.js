import { coordinatesToVector as o } from "./coordinatesToVector.js";
import "three";
function s(t, n) {
  const e = o(t), r = o(n);
  return e.angleTo(r);
}
export {
  s as coordinatesAngle
};
