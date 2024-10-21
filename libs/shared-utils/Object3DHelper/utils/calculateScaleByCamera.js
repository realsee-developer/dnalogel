function v(c, s) {
  const e = c.position.distanceTo(s), o = c.fov, t = e / 3, a = o / 90;
  return t * a;
}
export {
  v as calculateScaleByCamera
};
