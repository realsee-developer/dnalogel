import { Vector2 as e } from "three";
function m(t) {
  const { x: c, y: i } = t.center, { clientWidth: r, clientHeight: s } = t.target, o = t.target.getBoundingClientRect(), n = new e(c, i).sub(new e(o.left, o.top)), l = new e(n.x / r * 2 - 1, -(n.y / s) * 2 + 1);
  return { point: n, ndcPoint: l };
}
export {
  m as getPointFromHammerEvent
};
