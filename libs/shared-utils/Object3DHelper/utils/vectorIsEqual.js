function u(a, c) {
  return !(Math.abs(a.x - c.x) > 1e-5 || Math.abs(a.y - c.y) > 1e-5 || Math.abs(a.z - c.z) > 1e-5);
}
export {
  u as vectorIsEqual
};
