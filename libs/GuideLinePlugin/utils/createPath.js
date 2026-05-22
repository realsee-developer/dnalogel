var b = Object.defineProperty, d = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var E = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var P = (e, t, r) => t in e ? b(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, $ = (e, t) => {
  for (var r in t || (t = {}))
    T.call(t, r) && P(e, r, t[r]);
  if (E)
    for (var r of E(t))
      V.call(t, r) && P(e, r, t[r]);
  return e;
}, g = (e, t) => d(e, H(t));
import * as j from "three";
import { transformPosition as q } from "../../shared-utils/five/transformPosition.js";
function B(e, t, r) {
  if (e.length < 2)
    return [];
  const c = [];
  e.forEach((a, C) => {
    var i, u, _, o, l, n, h, y;
    let f = (i = r == null ? void 0 : r.route_standing_positions) == null ? void 0 : i[a];
    if (f || (f = (_ = (u = t.observers[a]) == null ? void 0 : u.standingPosition) == null ? void 0 : _.toArray()), !f)
      return;
    const m = e[C - 1], s = (y = (l = (o = r == null ? void 0 : r.node_pair_to_route_points) == null ? void 0 : o[`${m}:${a}`]) == null ? void 0 : l.slice()) != null ? y : (h = (n = r == null ? void 0 : r.node_pair_to_route_points) == null ? void 0 : n[`${a}:${m}`]) == null ? void 0 : h.slice().reverse();
    s == null || s.forEach((R) => {
      c.push(R);
    }), c.push(f);
  });
  const v = t.transform, A = c.map((a) => q(new j.Vector3().fromArray(a), v).toArray());
  return [g($({}, r), { type: "CatmullRomCurve3", points: A })];
}
export {
  B as createPath
};
