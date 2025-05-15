function u(t) {
  const a = Math.PI * 2;
  let n = -Math.atan2(t.x, -t.z);
  n = (n % a + a) % a;
  const e = -Math.asin(t.y / 1);
  return { longitude: n, latitude: e };
}
export {
  u as default
};
