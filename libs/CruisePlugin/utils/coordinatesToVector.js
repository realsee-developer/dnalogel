import * as e from "three";
function n(t) {
  const a = Math.abs(Math.cos(t.latitude));
  return new e.Vector3(
    /* x */
    -Math.sin(t.longitude) * a,
    /* y */
    -Math.sin(t.latitude),
    /* z */
    -Math.cos(t.longitude) * a
  );
}
export {
  n as coordinatesToVector
};
