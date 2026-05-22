import { Vector3 as a } from "three";
function f(t, e) {
  const n = Math.abs(t.top + t.height / 2 - e.top - e.height / 2), i = Math.abs(t.left + t.width / 2 - e.left - e.width / 2), o = (t.height + e.height) / 2, r = (t.width + e.width) / 2;
  return !(n > o && i > r);
}
function s(t) {
  const { camera: e } = t, n = e.getWorldDirection(new a());
  let i = Math.atan(n.z / n.x) * 180 / Math.PI, o = "";
  return n.x < 0 && (i += 180), i < 0 && (i += 360), i > 315 || i <= 45 ? o = "right" : i > 45 && i <= 135 ? o = "back" : i > 135 && i <= 225 ? o = "left" : i > 225 && i <= 315 && (o = "forward"), o;
}
function l(t, e) {
  return Math.sqrt(Math.pow(t.z - e.z, 2) + Math.pow(t.x - e.x, 2));
}
function c(t) {
  const e = Math.PI / 4;
  return t > -e && t <= e ? "left" : t > e * 3 || t <= -e * 3 ? "right" : t > -e * 3 && t <= -e ? "forward" : t > e && t <= e * 3 ? "back" : "";
}
export {
  s as getCameraToward,
  l as getDistance,
  c as getToward,
  f as isTwoRectOverlaped
};
