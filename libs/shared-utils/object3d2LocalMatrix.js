import * as f from "three";
const n = (t, a, i) => {
  const r = new f.Matrix4(), x = new f.Euler(t, a, i, "YXZ");
  return r.makeRotationFromEuler(x), r;
}, p = (t, {
  scale: a,
  rotation: i,
  position: r
}) => {
  if (a && t.scale.set(a, a, a), i) {
    const [x, o, e] = i;
    x && t.applyMatrix4(n(x, 0, 0)), o && t.applyMatrix4(n(0, o, 0)), e && t.applyMatrix4(n(0, 0, e));
  }
  return r && t.position.set(r.x, r.y, r.z), t;
};
export {
  p as bject3d2LocalMatrix
};
