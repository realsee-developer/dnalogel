import * as i from "three";
import { earcut3D as f } from "./earcut3D.js";
import { isIntersecting as m } from "../../PanoMeasurePlugin/utils/isIntersecting.js";
function h(a, s) {
  const t = [...new Set(a)];
  if (t.length < 3)
    return;
  if (t.at(-1).equals(t[0]) || t.push(t[0]), s != null && s.checkLinesIntersect && t.length >= 5) {
    const e = t.map((r, o) => o === 0 ? null : { start: t[o - 1], end: t[o] }).filter(Boolean);
    for (let r = 0; r < e.length; r++)
      if (m(e[r], e.slice(r)))
        return;
  }
  const u = t.flatMap((e) => [e.x, e.y, e.z]), l = new i.Float32BufferAttribute(u, 3), c = f(t), n = new i.BufferGeometry();
  return n.setAttribute("position", l), n.setIndex(c), n.name = "PolygonGeometry", n;
}
export {
  h as generatePolygonGeometry
};
