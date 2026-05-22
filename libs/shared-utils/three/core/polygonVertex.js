import * as r from "three";
import { earcut3D as c } from "../earcut3D.js";
function x(o) {
  const e = [...o], t = [];
  for (let n = 0; n < e.length - 2; n++)
    t.push(0, n + 1, n + 2);
  return t;
}
function s(o) {
  const e = o.map((n) => new r.Vector3(n[0], n[1], n[2]));
  return c(e);
}
export {
  s as concavePolygonVertexIndex,
  x as convexPolygonVertexIndex
};
