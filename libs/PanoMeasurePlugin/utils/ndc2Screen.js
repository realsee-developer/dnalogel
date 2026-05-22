import { Vector2 as c } from "three";
function n(t, e) {
  const r = (t.x + 1) / 2 * e.width, o = -(t.y - 1) / 2 * e.height;
  return new c(r, o);
}
export {
  n as default
};
