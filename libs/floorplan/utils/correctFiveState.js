var l = (e, t, o) => new Promise((m, n) => {
  var i = (r) => {
    try {
      u(o.next(r));
    } catch (f) {
      n(f);
    }
  }, a = (r) => {
    try {
      u(o.throw(r));
    } catch (f) {
      n(f);
    }
  }, u = (r) => r.done ? m(r.value) : Promise.resolve(r.value).then(i, a);
  u((o = o.apply(e, t)).next());
});
import { to as s } from "../../shared-utils/to.js";
import { FloorplanErrorType as p } from "./constant.js";
import { nearlyEqual as d } from "../../shared-utils/nearlyEqual.js";
import { changeMode as M } from "../../shared-utils/five/changeMode.js";
import { omit as g } from "../../shared-utils/filter.js";
function h(e, t) {
  if (e.currentMode !== t.mode)
    return !1;
  const { latitude: o, longitude: m, fov: n, offset: i } = t, { latitude: a, longitude: u, offset: r } = e.getCurrentState(), f = e.camera.fov;
  return !(!d(o, a, 2) || !d(m, u, 2) || i !== void 0 && i.distanceTo(r) > 0.01 || !d(n, f, 2));
}
function b(e, t, o = !0) {
  return l(this, null, function* () {
    if (h(e, t) === !0)
      return;
    const n = e.getCurrentState();
    if (n.mode !== t.mode) {
      const [c] = yield s(M(e, [t.mode, t, void 0, o]));
      if (c)
        throw c;
      return;
    }
    const { latitude: i, longitude: a, fov: u } = n, r = Math.min(
      1e3,
      Math.max(
        200,
        Math.abs(i - Math.PI / 2) * 1e3,
        (a > Math.PI ? 2 * Math.PI - a : a) * 500,
        typeof t.fov == "number" ? Math.abs(u - t.fov) * 10 : 1 / 0
      )
    ), [f] = yield s(e.updateCamera(g(t, ["mode"]), r, o));
    if (f)
      throw new Error(p.UpdateCameraError);
  });
}
export {
  b as correctFiveState
};
