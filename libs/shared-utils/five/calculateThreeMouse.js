import * as i from "three";
function h(t, e) {
  const { top: n, left: o, width: r, height: c } = e.getBoundingClientRect();
  return new i.Vector2((t.x - o) / r * 2 - 1, -(t.y - n) / c * 2 + 1);
}
export {
  h as calculateThreeMouse
};
