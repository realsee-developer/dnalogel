function u(n, o) {
  if (n.length < 3) {
    console.error("points.length < 3");
    return;
  }
  const [r, t, c] = n, l = r.clone().sub(t), s = r.clone().sub(c), e = l.cross(s).normalize();
  return typeof o == "number" ? e.multiplyScalar(o) : e;
}
export {
  u as getNormal
};
