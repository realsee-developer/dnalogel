function a(r) {
  return Array.isArray(r) ? r.map((y) => [y.x, y.y, y.z]) : [r.x, r.y, r.z];
}
export {
  a as vector3ToArray
};
