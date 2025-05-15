import * as o from "three";
import { calculateThreeMouse as n } from "./calculateThreeMouse.js";
function u(a, e, s) {
  if (!e || !s || !a)
    return;
  const r = n(e, s);
  if (Math.abs(r.x) === 1 || Math.abs(r.y) === 1)
    return;
  const t = new o.Raycaster();
  return t.setFromCamera(r, a), t.params.Points.threshold = 0.1, t;
}
export {
  u as getMouseRaycaster
};
