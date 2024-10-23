import l from "./ndc2Screen.js";
import u from "./isNDCPointInScreen.js";
import "three";
function p(i, o, s, r) {
  const e = i.getElement();
  if (!e || o.length === 0)
    return null;
  const d = { width: e.clientWidth, height: e.clientHeight }, c = o.map((n) => {
    const t = n.position.clone().project(i.camera);
    return u(t) ? { distance: l(t, d).distanceTo(s), point: n } : { distance: 1 / 0, point: n };
  }).sort((n, t) => n.distance - t.distance);
  return typeof r == "number" && c[0].distance > r ? null : c[0];
}
export {
  p as findClosestPoint
};
