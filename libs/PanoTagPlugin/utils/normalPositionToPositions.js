import * as s from "three";
function d(t, e, a) {
  const r = new s.Plane().setFromNormalAndCoplanarPoint(a, e), o = e.clone().sub(t).cross(new s.Vector3(0, 1, 0)).setLength(0.01), n = new s.Vector3(0, 0.01, 0);
  return [
    e.clone().sub(o).sub(n),
    // 左下
    e.clone().add(o).sub(n),
    // 右下
    e.clone().add(o).add(n),
    // 右上
    e.clone().sub(o).add(n)
    // 左上
  ].map((c) => r.projectPoint(c, new s.Vector3()));
}
export {
  d as normalPositionToPositions
};
