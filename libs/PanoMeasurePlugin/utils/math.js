import { Vector2 as L } from "three";
function q(c, t) {
  const u = c.x - t[0].x, a = c.y - t[0].y, x = t[1].x - t[0].x, y = t[1].y - t[0].y, A = u * x + a * y, D = x * x + y * y, r = A / D;
  let f, m;
  return r < 0 || e(t[0], t[1]) ? (f = t[0].x, m = t[0].y) : r > 1 ? (f = t[1].x, m = t[1].y) : (f = t[0].x + r * x, m = t[0].y + r * y), new L(f, m);
}
function e(c, t) {
  return c.x === t.x && c.y === t.y;
}
export {
  q as closestPointOnLine,
  e as samePointAt
};
