var F = Object.defineProperty;
var x = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var A = (e, a, t) => a in e ? F(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, C = (e, a) => {
  for (var t in a || (a = {}))
    H.call(a, t) && A(e, t, a[t]);
  if (x)
    for (var t of x(a))
      N.call(a, t) && A(e, t, a[t]);
  return e;
};
var L = (e, a, t) => new Promise((d, y) => {
  var z = (n) => {
    try {
      p(t.next(n));
    } catch (b) {
      y(b);
    }
  }, o = (n) => {
    try {
      p(t.throw(n));
    } catch (b) {
      y(b);
    }
  }, p = (n) => n.done ? d(n.value) : Promise.resolve(n.value).then(z, o);
  p((t = t.apply(e, a)).next());
});
import * as c from "three";
import "../../vendor/hammerjs/hammer.js";
import "../three/PointSelector/index.js";
import "../tag.js";
import { vectorToCoordinates as R } from "../vectorToCoordinate.js";
import { FiveUtil as Y } from "../Utils/FiveUtil.js";
import { notNil as U } from "../isNil.js";
import "../three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "./FivePuppet.js";
import "@realsee/five/line";
import "../three/core/Five_LineMaterial2.js";
import { worldBoundingSphere as j } from "../three/boundingBox.js";
import "../three/blink.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../vendor/earcut/src/earcut.js";
function it(e, a, t) {
  return L(this, null, function* () {
    var D, P, V;
    if (!a)
      return;
    const d = j(a);
    if (!d)
      return;
    const y = new Y(e), z = (D = t == null ? void 0 : t.scale) != null ? D : 1.4, o = d.center, p = e.camera.position.clone().sub(o).setY(0).normalize(), n = e.state.mode === "Mapview" ? e.state.fov : 60, v = Math.max(1.5, d.radius * z), k = v * (1 / Math.tan(c.MathUtils.degToRad(n / 2)));
    let u = 0;
    const w = [], S = (s) => {
      const l = c.MathUtils.degToRad(s);
      return p.clone().applyAxisAngle(new c.Vector3(0, 1, 0), l).clone().multiplyScalar(k).add(new c.Vector3(0, v, 0)).add(o);
    };
    for (; u !== 360; ) {
      let s = 0;
      const l = S(u), m = (M) => {
        const _ = M.distanceTo(l), B = new c.Raycaster(M, l.clone().sub(M).normalize()), T = y.model.intersectRaycaster(B)[0], f = T == null ? void 0 : T.distance;
        U(f) ? f > _ && (s += 1) : s += 1;
      }, E = d.clampPoint(l, new c.Vector3());
      m(E);
      const I = new c.Vector3(o.x, l.y, o.z);
      if (m(I), U(w[s]) && u > w[s] || (w[s] = u), s === 2)
        break;
      u += 30;
    }
    let O = (V = (P = w[2]) != null ? P : w[1]) != null ? V : 0, r = S(O), i = r.distanceTo(o), h = R(o.clone().sub(r).normalize());
    if (t != null && t.minDistance && i < t.minDistance) {
      i = t.minDistance;
      const s = r.clone().sub(o).normalize();
      r = o.clone().add(s.multiplyScalar(i)), h = R(o.clone().sub(r).normalize());
    }
    if (t != null && t.minLatitude && h.latitude < t.minLatitude) {
      const s = i * Math.cos(t.minLatitude), l = i * Math.sin(t.minLatitude), m = r.clone().sub(o);
      m.y = 0, m.normalize().multiplyScalar(s), r = o.clone().add(m).add(new c.Vector3(0, l, 0)), i = r.distanceTo(o), h = R(o.clone().sub(r).normalize());
    }
    if (e.state.mode === "Mapview")
      return e.updateCamera(
        C({
          offset: o,
          distance: i
        }, h),
        800
      );
    e.setState(C({
      mode: "Mapview",
      offset: o,
      distance: i
    }, h)), yield e.ready();
  });
}
export {
  it as lookObject
};
