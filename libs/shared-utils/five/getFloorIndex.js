import { transformPosition as u } from "./transformPosition.js";
function d(t, f) {
  if (!t)
    return 0;
  const s = t.observers;
  if (!f || !s)
    return console.error("getFloorIndex: invalid arguments: ", { point: f, observer: s }), 0;
  const e = [];
  s.forEach((r) => {
    var n, l, c;
    const o = (l = (n = r.floorIndex) != null ? n : r.floor_index) != null ? l : 0;
    e[o] || (e[o] = []), e[o].push(u(r.position, (c = t.options) == null ? void 0 : c.transform).y);
  });
  const i = e.map((r) => r.reduce((o, n) => o + n, 0) / r.length);
  for (let r = i.length - 1; r > 0; r--)
    if (f.y >= i[r])
      return r;
  return 0;
}
export {
  d as getFloorIndex
};
