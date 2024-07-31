import { FLOOR_PLAN_ATTACHED_TO as m } from "../floorplan/constant.js";
import * as c from "three";
function s(o, t) {
  const r = Math.max(...o.work.observers.map((n) => n.floorIndex));
  return t > r ? o.model.bounding.max.y : Math.max(...o.work.observers.filter((n) => n.floorIndex === t).map((n) => n.standingPosition.y));
}
function l(o, t, r = m.BOUNDING_CENTER) {
  const n = s(o, t), e = s(o, t + 1);
  return r === m.BOUNDING_CENTER ? (o.model.bounding.max.y + o.model.bounding.min.y) / 2 : r === m.CEILING ? e : n;
}
function E(o, t, r, n) {
  const e = l(o, r, n == null ? void 0 : n.attachedTo), a = new c.Vector3(0, e, 0), i = new c.Vector3(1, e, 0), u = a.clone().project(o.camera), x = i.clone().project(o.camera);
  return Math.abs((x.x - u.x) / 1e3) * (t.getBoundingClientRect().width / 2);
}
export {
  l as getAttachedY,
  E as getPxmm
};
