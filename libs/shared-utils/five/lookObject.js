var F = Object.defineProperty;
var U = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var V = (o, e, t) => e in o ? F(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, T = (o, e) => {
  for (var t in e || (e = {}))
    H.call(e, t) && V(o, t, e[t]);
  if (U)
    for (var t of U(e))
      N.call(e, t) && V(o, t, e[t]);
  return o;
};
var g = (o, e, t) => new Promise((c, p) => {
  var f = (a) => {
    try {
      l(t.next(a));
    } catch (u) {
      p(u);
    }
  }, s = (a) => {
    try {
      l(t.throw(a));
    } catch (u) {
      p(u);
    }
  }, l = (a) => a.done ? c(a.value) : Promise.resolve(a.value).then(f, s);
  l((t = t.apply(o, e)).next());
});
import * as r from "three";
import "../../vendor/hammerjs/hammer.js";
import "../three/PointSelector/index.js";
import "../tag.js";
import { vectorToCoordinates as O } from "../vectorToCoordinate.js";
import { FiveUtil as Y } from "../Utils/FiveUtil.js";
import { notNil as k } from "../isNil.js";
import "../three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "./FivePuppet.js";
import "@realsee/five/line";
import "../three/core/Five_LineMaterial2.js";
import { worldBoundingSphere as j } from "../three/boundingBox.js";
import "../../vendor/animejs/lib/anime.es.js";
function at(o, e, t) {
  return g(this, null, function* () {
    var P, x, z;
    if (!e)
      return;
    const c = j(e);
    if (!c)
      return;
    const p = new Y(o), f = (P = t == null ? void 0 : t.scale) != null ? P : 1.4, s = c.center, l = o.camera.position.clone().sub(s).setY(0).normalize(), a = o.state.mode === "Mapview" ? o.state.fov : 60, C = Math.max(1.5, c.radius * f), A = C * (1 / Math.tan(r.MathUtils.degToRad(a / 2)));
    let m = 0;
    const d = [], M = (n) => {
      const i = r.MathUtils.degToRad(n);
      return l.clone().applyAxisAngle(new r.Vector3(0, 1, 0), i).clone().multiplyScalar(A).add(new r.Vector3(0, C, 0)).add(s);
    };
    for (; m !== 360; ) {
      let n = 0;
      const i = M(m), w = (y) => {
        const _ = y.distanceTo(i), B = new r.Raycaster(y, i.clone().sub(y).normalize()), h = p.model.intersectRaycaster(B, void 0, !0)[0], S = h == null ? void 0 : h.distance;
        k(S) ? S > _ && (n += 1) : n += 1;
      }, E = c.clampPoint(i, new r.Vector3());
      w(E);
      const I = new r.Vector3(s.x, i.y, s.z);
      if (w(I), k(d[n]) && m > d[n] || (d[n] = m), n === 2)
        break;
      m += 30;
    }
    const R = M((z = (x = d[2]) != null ? x : d[1]) != null ? z : 0), v = R.distanceTo(s), b = O(s.clone().sub(R).normalize());
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
  at as lookObject
};
