import { isNil as i } from "../../isNil.js";
import { clamp as l } from "../../clamp.js";
import { formatRad as r } from "../../formatRad.js";
function f(o) {
  let a = o.pose.latitude, e = o.pose.longitude;
  if (i(a) || i(e)) {
    const t = o.matrix.elements;
    a = Math.asin(l(t[9], -1, 1)), Math.abs(t[9]) < 0.9999999 ? e = r(Math.atan2(t[8], t[10])) : e = r(Math.atan2(-t[2], t[0]));
  }
  return { latitude: a, longitude: e };
}
export {
  f as getPoseFromCamera
};
