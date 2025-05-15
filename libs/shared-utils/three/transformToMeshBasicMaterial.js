var p = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var s = (a, e, r) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, m = (a, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && s(a, r, e[r]);
  if (i)
    for (var r of i(e))
      f.call(e, r) && s(a, r, e[r]);
  return a;
};
import { MeshBasicMaterial as M } from "three";
function O(a, e) {
  a.traverse((r) => {
    var n;
    if (r.type === "Mesh") {
      const t = r, o = m({ map: t.material.map || {} }, e);
      t.material = new M(o), t.renderOrder = 1, ((n = r.parent) == null ? void 0 : n.type) === "Mesh" && (r.renderOrder = r.parent.renderOrder + 1);
    }
  });
}
export {
  O as transfromToMeshBasicMaterial
};
