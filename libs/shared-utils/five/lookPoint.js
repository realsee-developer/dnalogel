var g = Object.defineProperty;
var b = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var U = (o, t, e) => t in o ? g(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, y = (o, t) => {
  for (var e in t || (t = {}))
    x.call(t, e) && U(o, e, t[e]);
  if (b)
    for (var e of b(t))
      E.call(t, e) && U(o, e, t[e]);
  return o;
};
var P = (o, t, e) => new Promise((r, d) => {
  var f = (s) => {
    try {
      a(e.next(s));
    } catch (l) {
      d(l);
    }
  }, i = (s) => {
    try {
      a(e.throw(s));
    } catch (l) {
      d(l);
    }
  }, a = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(f, i);
  a((e = e.apply(o, t)).next());
});
import * as c from "three";
import { vectorToCoordinates as S } from "../vectorToCoordinate.js";
import { FiveUtil as V } from "../Utils/FiveUtil.js";
import { notNil as _ } from "../isNil.js";
function j(o, t, e) {
  return P(this, null, function* () {
    var h, C;
    if (!t)
      return;
    const r = (h = e == null ? void 0 : e.distance) != null ? h : 3, d = new V(o), f = o.camera.position.clone().sub(t).setY(0).normalize(), i = o.state.mode === "Mapview" ? o.state.fov : 60, a = r, s = a * Math.cos(c.MathUtils.degToRad(i / 2)), l = a * Math.sin(c.MathUtils.degToRad(i / 2));
    let m = 0;
    const R = [], M = (n) => {
      const u = c.MathUtils.degToRad(n);
      return f.clone().applyAxisAngle(new c.Vector3(0, 1, 0), u).clone().multiplyScalar(s).add(new c.Vector3(0, l, 0)).add(t);
    };
    for (; m !== 360; ) {
      let n = 0;
      const u = M(m);
      if (((w) => {
        const A = w.distanceTo(u), I = new c.Raycaster(w, u.clone().sub(w).normalize()), p = d.model.intersectRaycaster(I, void 0, !0)[0], v = p == null ? void 0 : p.distance;
        _(v) ? v > A && (n += 1) : n += 1;
      })(t), R[n] = m, n === 1)
        break;
      m += 30;
    }
    const k = M((C = R[1]) != null ? C : 0), T = S(t.clone().sub(k).normalize());
    if (o.state.mode === "Mapview")
      return o.updateCamera(
        y({
          offset: t,
          distance: r
        }, T),
        800
      );
    o.setState(y({
      mode: "Mapview",
      offset: t,
      distance: r
    }, T)), yield o.ready();
  });
}
export {
  j as lookPoint
};
