var u = Object.defineProperty, m = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var s = (e, t, n) => t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, l = (e, t) => {
  for (var n in t || (t = {}))
    p.call(t, n) && s(e, n, t[n]);
  if (c)
    for (var n of c(t))
      y.call(t, n) && s(e, n, t[n]);
  return e;
}, a = (e, t) => m(e, d(t));
import * as i from "three";
import { getFiveModel as R } from "./getFiveModel.js";
function w(e, t, n) {
  const r = V(e, t);
  return n != null && n.virtualPoint ? r != null ? r : f(t) : r;
}
function f(e, t = 3) {
  const n = new i.Vector3().addVectors(
    e.ray.origin,
    e.ray.direction.clone().normalize().multiplyScalar(t)
  ), r = e.ray.direction.clone().negate();
  return {
    distance: t,
    point: n,
    object: new i.Object3D(),
    face: new i.Face3(0, 0, 0, r),
    raycaster: e,
    isVirtual: !0
  };
}
function V(e, t) {
  const o = R(e).intersectRaycaster(t)[0];
  if (o)
    return a(l({}, o), { raycaster: t, isVirtual: !1 });
}
export {
  w as getIntersectByRaycaster,
  f as getVirtualIntersectByRaycaster
};
