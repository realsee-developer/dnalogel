function M(i, m, a) {
  const n = i.bounding, o = Math.pow(
    Math.pow(n.max.x - n.min.x + 1, 2) + Math.pow(n.max.y - n.min.y + 1, 2) + Math.pow(n.max.z - n.min.z + 1, 2),
    1 / 2
  );
  let t = o / 2 / Math.tan(Math.PI * m / 360);
  return a < 1 && (t = t / a), isNaN(t) ? o : t;
}
export {
  M as getDistanceFromModel
};
