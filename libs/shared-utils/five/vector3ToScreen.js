function i(e, n) {
  const { x: t, y: o, z: r } = n.clone().project(e);
  return r > 1 ? void 0 : { leftPercent: (t + 1) / 2 * 100, topPercent: (-o + 1) / 2 * 100 };
}
export {
  i as vector3ToScreen
};
