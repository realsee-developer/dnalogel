import { Vector3 as e } from "three";
function l(r) {
  if (r.length < 3) {
    console.error("points.length < 3");
    return;
  }
  const [n, o, t] = r;
  return new e().subVectors(t, o).cross(new e().subVectors(n, o)).normalize();
}
export {
  l as getNormal
};
