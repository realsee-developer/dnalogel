import * as s from "three";
const m = (e, d) => {
  const r = new s.Box3();
  return e.models.find((o) => o.name === e.state.workCode).traverse((o) => {
    var t, n;
    ((n = (t = o == null ? void 0 : o.material) == null ? void 0 : t[0]) == null ? void 0 : n.floorIndex) === d && r.expandByObject(o);
  }), r;
};
export {
  m as getFloorMesh
};
