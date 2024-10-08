import * as i from "three";
function s(t, e) {
  const { offsetWidth: o, offsetHeight: c } = e, { top: n, left: f } = e.getBoundingClientRect();
  return Object.assign(new i.Vector2(), {
    x: (t.x - f) / o * 2 - 1,
    y: -(t.y - n) / c * 2 + 1
  });
}
export {
  s as calculateThreeMouse
};
