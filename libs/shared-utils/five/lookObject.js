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
var g = (o, e, t) => new Promise((c, d) => {
  var f = (a) => {
    try {
      m(t.next(a));
    } catch (u) {
      d(u);
    }
  }, s = (a) => {
    try {
      m(t.throw(a));
    } catch (u) {
      d(u);
    }
  }, m = (a) => a.done ? c(a.value) : Promise.resolve(a.value).then(f, s);
  m((t = t.apply(o, e)).next());
});
import * as n from "three";
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
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
function rt(o, e, t) {
  return g(this, null, function* () {
    var P, x, z;
    if (!e)
      return;
    const c = j(e);
    if (!c)
      return;
    const d = new Y(o), f = (P = t == null ? void 0 : t.scale) != null ? P : 1.4, s = c.center, m = o.camera.position.clone().sub(s).setY(0).normalize(), a = o.state.mode === "Mapview" ? o.state.fov : 60, C = Math.max(1.5, c.radius * f), A = C * (1 / Math.tan(n.MathUtils.degToRad(a / 2)));
    let l = 0;
    const p = [], M = (r) => {
      const i = n.MathUtils.degToRad(r);
      return m.clone().applyAxisAngle(new n.Vector3(0, 1, 0), i).clone().multiplyScalar(A).add(new n.Vector3(0, C, 0)).add(s);
    };
    for (; l !== 360; ) {
      let r = 0;
      const i = M(l), w = (y) => {
        const _ = y.distanceTo(i), B = new n.Raycaster(y, i.clone().sub(y).normalize()), h = d.model.intersectRaycaster(B, void 0, !0)[0], S = h == null ? void 0 : h.distance;
        k(S) ? S > _ && (r += 1) : r += 1;
      }, E = c.clampPoint(i, new n.Vector3());
      w(E);
      const I = new n.Vector3(s.x, i.y, s.z);
      if (w(I), k(p[r]) && l > p[r] || (p[r] = l), r === 2)
        break;
      l += 30;
    }
    const R = M((z = (x = p[2]) != null ? x : p[1]) != null ? z : 0), v = R.distanceTo(s), b = O(s.clone().sub(R).normalize());
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
  rt as lookObject
};
