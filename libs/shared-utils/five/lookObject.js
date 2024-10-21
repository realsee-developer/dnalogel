var B = Object.defineProperty;
var U = Object.getOwnPropertySymbols;
var F = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var V = (o, e, t) => e in o ? B(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, T = (o, e) => {
  for (var t in e || (e = {}))
    F.call(e, t) && V(o, t, e[t]);
  if (U)
    for (var t of U(e))
      H.call(e, t) && V(o, t, e[t]);
  return o;
};
var g = (o, e, t) => new Promise((r, m) => {
  var u = (a) => {
    try {
      l(t.next(a));
    } catch (d) {
      m(d);
    }
  }, s = (a) => {
    try {
      l(t.throw(a));
    } catch (d) {
      m(d);
    }
  }, l = (a) => a.done ? r(a.value) : Promise.resolve(a.value).then(u, s);
  l((t = t.apply(o, e)).next());
});
import * as n from "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import { vectorToCoordinates as N } from "../vectorToCoordinate.js";
import { FiveUtil as O } from "../Utils/FiveUtil.js";
import { notNil as Y } from "../isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "@realsee/five/line";
import "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../tag.js";
import { worldBoundingSphere as j } from "../three/boundingBox.js";
import "animejs";
function ot(o, e, t) {
  return g(this, null, function* () {
    var P, x, z;
    if (!e)
      return;
    const r = j(e);
    if (!r)
      return;
    const m = new O(o), u = (P = t == null ? void 0 : t.scale) != null ? P : 1.4, s = r.center, l = o.camera.position.clone().sub(s).setY(0).normalize(), a = o.state.mode === "Mapview" ? o.state.fov : 60, C = Math.max(1.5, r.radius * u), k = C * (1 / Math.tan(n.MathUtils.degToRad(a / 2)));
    let p = 0;
    const w = [], M = (c) => {
      const i = n.MathUtils.degToRad(c);
      return l.clone().applyAxisAngle(new n.Vector3(0, 1, 0), i).clone().multiplyScalar(k).add(new n.Vector3(0, C, 0)).add(s);
    };
    for (; p !== 360; ) {
      let c = 0;
      const i = M(p), f = (y) => {
        const I = y.distanceTo(i), _ = new n.Raycaster(y, i.clone().sub(y).normalize()), h = m.model.intersectRaycaster(_, void 0, !0)[0], S = h == null ? void 0 : h.distance;
        Y(S) ? S > I && (c += 1) : c += 1;
      }, A = r.clampPoint(i, new n.Vector3());
      f(A);
      const E = new n.Vector3(s.x, i.y, s.z);
      if (f(E), w[c] = p, c === 2)
        break;
      p += 30;
    }
    const R = M((z = (x = w[2]) != null ? x : w[1]) != null ? z : 0), v = R.distanceTo(s), b = N(s.clone().sub(R).normalize());
    if (o.state.mode === "Mapview")
      return o.updateCamera(
        T({
          offset: s,
          distance: v
        }, b),
        800
      );
    o.setState(T({
      mode: "Mapview",
      offset: s,
      distance: v
    }, b)), yield o.ready();
  });
}
export {
  ot as lookObject
};
