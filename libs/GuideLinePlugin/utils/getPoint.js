import * as e from "three";
const o = [];
function c(r = new e.Vector3(1, 1, 1), a = 0) {
  const n = new e.SphereGeometry(0.02, 16, 16), t = [
    new e.MeshBasicMaterial({ color: 16776960 }),
    // 黄
    new e.MeshBasicMaterial({ color: 16711935 }),
    // 粉
    new e.MeshBasicMaterial({ color: 16711680 }),
    // 红
    new e.MeshBasicMaterial({ color: 65535 })
    // 蓝
  ][a], s = new e.Mesh(n, t);
  return t.depthTest = !1, t.transparent = !0, t.opacity = 0.6, t.side = e.DoubleSide, s.position.copy(r), o.push(s), s;
}
function l() {
  return o;
}
export {
  c as default,
  l as getAllMesh
};
