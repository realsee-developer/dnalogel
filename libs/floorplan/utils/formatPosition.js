function a(o, t = {}) {
  let n = "";
  const { needZ: r, needA: i } = t;
  return (r ? o.slice().concat(o[0]) : o.slice()).forEach((u, e) => {
    const { x, y: s } = t.format ? t.format(u) : u, c = x + "," + s;
    return e === 0 ? (n += "M" + c, n) : i != null && i[e] ? (n += "A" + i[e] + "," + c, n) : (n += "L" + c, n);
  }), n + (r ? "Z" : "");
}
function f({ x: o, y: t }, n) {
  const { max: r, min: i } = n;
  return { x: o - i.x, y: r.y - t };
}
function d(o, t) {
  const n = o.x * 1e3 + t.bounding.origin.x, r = -o.z * 1e3 + t.bounding.origin.y;
  return { x: n, y: r };
}
function l(o, t) {
  const n = t.bounding, r = n.max.x - n.min.x, i = n.max.y - n.min.y;
  return {
    x: (o.x - n.min.x) / r,
    y: (n.max.y - o.y) / i
  };
}
function g(o, t) {
  return Math.max(
    ...t.work.observers.map((r) => o.z >= r.standingPosition.z ? r.floorIndex : 0)
  );
}
export {
  l as floorplanPosition2ImagePosition,
  f as formatFloorplanPoint,
  g as getFloorIndexFromModelPosition,
  d as modelPosition2FloorplanPosition,
  a as pathD
};
