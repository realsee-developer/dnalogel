function i(t, n, o) {
  const { x: c, y: e, z: r } = n.clone().project(t);
  return r > 1 ? void 0 : {
    leftPx: (c + 1) / 2 * o.x,
    topPx: (-e + 1) / 2 * o.y
  };
}
export {
  i as vector3ToScreen
};
