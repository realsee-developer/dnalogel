import * as s from "three";
import { calculateThreeMouse as c } from "./calculateThreeMouse.js";
function u(t, e, a) {
  if (!e || !a || !t)
    return;
  const r = c(e, a);
  if (Math.abs(r.x) === 1 || Math.abs(r.y) === 1)
    return;
  const o = new s.Raycaster();
  return o.setFromCamera(r, t), o;
}
export {
  u as getMouseRaycaster
};
