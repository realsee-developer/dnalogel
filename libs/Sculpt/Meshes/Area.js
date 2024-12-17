var a = Object.defineProperty;
var h = (s, e, o) => e in s ? a(s, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : s[e] = o;
var r = (s, e, o) => (h(s, typeof e != "symbol" ? e + "" : e, o), o);
import { PolygonWithEdgeMesh as t } from "./PolygonWithEdge.js";
class M extends t {
  constructor() {
    super(...arguments);
    r(this, "name", "AreaMesh");
  }
}
export {
  M as AreaMesh
};
