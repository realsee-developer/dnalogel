import * as r from "three";
function i(t, e) {
  const { offsetWidth: o, offsetHeight: n } = e, { top: f, left: h } = e.getBoundingClientRect();
  return new r.Vector2().set((t.x - h) / o * 2 - 1, -(t.y - f) / n * 2 + 1);
}
function s(t, e) {
  const { offsetWidth: o, offsetHeight: n } = e;
  return new r.Vector2().set(t.x / o * 2 - 1, -t.y / n * 2 + 1);
}
export {
  i as getCoordsFromClient,
  s as getCoordsFromElement
};
