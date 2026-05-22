import * as n from "three";
function m(o, r) {
  const { x: a, y: s } = r, e = a * 2 - 1, c = s * 2 - 1, t = new n.Raycaster();
  return t.setFromCamera({ x: e, y: c }, o.camera), t.params.Points.threshold = 0.02, t;
}
export {
  m as getRaycasterByNdcPosition
};
