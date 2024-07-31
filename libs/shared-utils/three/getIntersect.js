var p = Object.defineProperty, R = Object.defineProperties;
var u = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, F = Object.prototype.propertyIsEnumerable;
var n = (e, t, s) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, a = (e, t) => {
  for (var s in t || (t = {}))
    x.call(t, s) && n(e, s, t[s]);
  if (c)
    for (var s of c(t))
      F.call(t, s) && n(e, s, t[s]);
  return e;
}, i = (e, t) => R(e, u(t));
import * as d from "three";
import { getFiveModel as g } from "../five/getFiveModel.js";
function C(e, t) {
  const s = g(e), { x: m, y: l } = t, f = m * 2 - 1, y = l * 2 - 1, r = new d.Raycaster();
  r.setFromCamera({ x: f, y }, e.camera);
  const o = s.intersectRaycaster(r)[0];
  if (o)
    return i(a({}, o), { raycaster: r, isVirtual: !1 });
}
export {
  C as getIntersectFromRelativePosition
};
