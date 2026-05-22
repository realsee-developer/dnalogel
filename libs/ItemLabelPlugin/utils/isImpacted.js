import * as a from "three";
const { Raycaster: i, Vector3: m } = a, d = (c, n, t, o) => {
  const r = n.clone().sub(t).normalize(), e = new i();
  e.set(t, r);
  const [s] = c.model.intersectRaycaster(e);
  return s && s.distance + 0.01 < o;
};
export {
  d as isImpacted
};
