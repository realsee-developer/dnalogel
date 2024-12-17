import { Vector3 as o } from "three";
import { FiveLine as m } from "../five/FiveLine.js";
function f(t, i, n = new o(1, 1, 1), r = !1) {
  const e = new m(t, i);
  return e.setMaterial({ dashed: r, color: n, linewidth: 1 }), e.remove(e.points), e;
}
export {
  f as createLine
};
