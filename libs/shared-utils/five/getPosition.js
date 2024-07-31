var u = Object.defineProperty, d = Object.defineProperties;
var m = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var s = (t, e, n) => e in t ? u(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, a = (t, e) => {
  for (var n in e || (e = {}))
    y.call(e, n) && s(t, n, e[n]);
  if (i)
    for (var n of i(e))
      f.call(e, n) && s(t, n, e[n]);
  return t;
}, l = (t, e) => d(t, m(e));
import * as o from "three";
import { getRaycasterByNdcPosition as g } from "./getRaycasterByNdcPosition.js";
import { getFiveModel as p } from "./getFiveModel.js";
function j(t, e) {
  const n = g(t, e);
  return R(t, n);
}
function R(t, e) {
  var n;
  return (n = B(t, e)) != null ? n : I(e);
}
function I(t) {
  const n = new o.Vector3().addVectors(
    t.ray.origin,
    t.ray.direction.clone().normalize().multiplyScalar(3)
  ), r = t.ray.direction.clone().negate();
  return {
    distance: 3,
    point: n,
    object: new o.Object3D(),
    face: new o.Face3(0, 0, 0, r),
    raycaster: t,
    isVirtual: !0
  };
}
function B(t, e) {
  const c = p(t).intersectRaycaster(e)[0];
  if (c)
    return l(a({}, c), { raycaster: e, isVirtual: !1 });
}
export {
  j as getIntersectByNdcPosition,
  R as getIntersectByRaycaster
};
