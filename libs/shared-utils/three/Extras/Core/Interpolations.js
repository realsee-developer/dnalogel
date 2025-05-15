import * as l from "three";
import { QuadraticBezier as x, CubicBezier as a } from "./Interpolations2.js";
function y(e, r) {
  const c = r.length - 1;
  if (c < 1)
    throw new Error("length of points must greater than 2");
  if (c === 2)
    return new l.Vector3(
      x(e, r[0].x, r[1].x, r[2].x),
      x(e, r[0].y, r[1].y, r[2].y),
      x(e, r[0].z, r[1].z, r[2].z)
    );
  if (c === 3)
    return new l.Vector3(
      a(e, r[0].x, r[1].x, r[2].x, r[3].x),
      a(e, r[0].y, r[1].y, r[2].y, r[3].y),
      a(e, r[0].z, r[1].z, r[2].z, r[3].z)
    );
  if (c === 1) {
    const [u, z] = r;
    return u.clone().add(z.clone().sub(u).multiplyScalar(e));
  }
  const f = [];
  return r.reduce((u, z) => (f.push(y(e, [u, z])), z)), y(e, f);
}
export {
  y as Bezier
};
