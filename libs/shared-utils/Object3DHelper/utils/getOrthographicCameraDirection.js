import * as n from "three";
function a(t) {
  const { latitude: r, longitude: o } = t, e = new n.Vector3();
  return i - r < 0.03 ? e.set(0, 1, 0) : s(0, o) ? e.set(0, 0, 1) : s(Math.PI, o) ? e.set(0, 0, -1) : s(i, o) ? e.set(1, 0, 0) : e.set(-1, 0, 0), e;
}
const i = Number((Math.PI / 2).toFixed(5));
function s(t, r) {
  return typeof t != "number" || typeof r != "number" ? !1 : Math.abs(t - r) < 1e-3;
}
export {
  a as getOrthographicCameraDirection
};
