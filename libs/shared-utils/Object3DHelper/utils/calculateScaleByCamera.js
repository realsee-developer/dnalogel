function S(e, o, a) {
  const t = e.position.distanceTo(o), r = e.fov, b = e.distance || 3, D = t / 3, f = r / 90, u = b / 3, s = D * f * u, c = (a == null ? void 0 : a.min) || 0.6, n = a == null ? void 0 : a.max;
  return c && s < c ? c : n && s > n ? n : s;
}
export {
  S as calculateScaleByCamera
};
