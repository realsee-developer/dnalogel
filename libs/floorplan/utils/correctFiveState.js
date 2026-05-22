var l = (t, r, o) => new Promise((m, n) => {
  var f = (e) => {
    try {
      i(o.next(e));
    } catch (u) {
      n(u);
    }
  }, a = (e) => {
    try {
      i(o.throw(e));
    } catch (u) {
      n(u);
    }
  }, i = (e) => e.done ? m(e.value) : Promise.resolve(e.value).then(f, a);
  i((o = o.apply(t, r)).next());
});
import { to as s } from "../../shared-utils/to.js";
import { FloorplanErrorType as g } from "./constant.js";
import { nearlyEqual as d } from "../../shared-utils/nearlyEqual.js";
import { changeMode as C } from "../../shared-utils/five/changeMode.js";
import { omit as E } from "../../shared-utils/filter.js";
import { getDistanceFromModel as y } from "../../shared-utils/translateMode/getDistanceFromModel.js";
function h(t, r) {
  if (t.currentMode !== r.mode)
    return !1;
  const { latitude: o, longitude: m, fov: n, offset: f } = r, { latitude: a, longitude: i, offset: e } = t.getCurrentState(), u = t.camera.fov;
  return !(!d(o, a, 2) || !d(m, i, 2) || f !== void 0 && f.distanceTo(e) > 0.01 || !d(n, u, 2));
}
function x(t, r, o = !0) {
  return l(this, null, function* () {
    if (h(t, r) === !0)
      return;
    const n = t.getCurrentState();
    if (n.mode !== r.mode) {
      const p = t.models.find((M) => M.name === t.state.workCode);
      r.distance = y(p, r.fov, t.camera.aspect);
      const [c] = yield s(C(t, [r.mode, r, void 0, o]));
      if (c)
        throw c;
      return;
    }
    const { latitude: f, longitude: a, fov: i } = n, e = Math.min(
      1e3,
      Math.max(
        200,
        Math.abs(f - Math.PI / 2) * 1e3,
        (a > Math.PI ? 2 * Math.PI - a : a) * 500,
        typeof r.fov == "number" ? Math.abs(i - r.fov) * 10 : 1 / 0
      )
    ), [u] = yield s(t.updateCamera(E(r, ["mode"]), e, o));
    if (u)
      throw new Error(g.UpdateCameraError);
  });
}
export {
  x as correctFiveState
};
