import * as g from "three";
import { vectorToCoordinates as f } from "../../shared-utils/vectorToCoordinate.js";
import "../../shared-utils/formatRad.js";
function A(o, n, t) {
  var e, i, r;
  const a = new g.Vector3().fromArray([(e = t.x) != null ? e : 0, (i = t.y) != null ? i : 0, (r = t.z) != null ? r : 0]), c = o.getPointAt(n).clone().add(a), d = o.getTangentAt(n), { longitude: m, latitude: s } = f(d);
  return { offset: c.clone(), longitude: m, latitude: s, distance: 0 };
}
export {
  A as getFiveStateOnCurve
};
