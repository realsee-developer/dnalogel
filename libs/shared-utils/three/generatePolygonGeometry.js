import * as n from "three";
import { earcut3D as a } from "./earcut3D.js";
function m(r) {
  const t = [...new Set(r)];
  if (t.length < 3)
    return;
  t.at(-1).equals(t[0]) || t.push(t[0]);
  const i = t.flatMap((o) => [o.x, o.y, o.z]), s = new n.Float32BufferAttribute(i, 3), u = a(t), e = new n.BufferGeometry();
  return e.setAttribute("position", s), e.setIndex(u), e.name = "PolygonGeometry", e;
}
export {
  m as generatePolygonGeometry
};
