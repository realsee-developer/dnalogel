var A = Object.defineProperty;
var x = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var y = (e, o, n) => o in e ? A(e, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[o] = n, P = (e, o) => {
  for (var n in o || (o = {}))
    D.call(o, n) && y(e, n, o[n]);
  if (x)
    for (var n of x(o))
      N.call(o, n) && y(e, n, o[n]);
  return e;
};
var I = (e, o, n) => new Promise((m, p) => {
  var t = (r) => {
    try {
      i(n.next(r));
    } catch (f) {
      p(f);
    }
  }, a = (r) => {
    try {
      i(n.throw(r));
    } catch (f) {
      p(f);
    }
  }, i = (r) => r.done ? m(r.value) : Promise.resolve(r.value).then(t, a);
  i((n = n.apply(e, o)).next());
});
import { Five as L } from "@realsee/five";
import { Easing as U } from "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { tweenProgress as R } from "../shared-utils/animationFrame/tween.js";
import { Rotation as u } from "./typing.js";
import { formatLatitude as E, formatLongitude as M } from "../shared-utils/animationFrame/formatRad.js";
import { progressNumber as b } from "../shared-utils/animationFrame/calculateProgress.js";
import "../shared-utils/animationFrame/index.js";
const s = (e, o, n) => {
  const m = Math.PI, p = m * 2;
  let t = M(e), a = M(o);
  return n === u.Anticlockwise && t < a && (t += p), n === u.Clockwise && a < t && (a += p), n === u.Loop && a - t > m ? s(t, a, u.Anticlockwise) : n === u.Loop && t - a > m ? s(t, a, u.Clockwise) : { from: t, to: a };
}, O = (e) => {
  const o = {}, n = (r, f, ...S) => I(void 0, [r, f, ...S], function* (t, a, i = { preload: !0 }) {
    return o.interruptCallback && o.interruptCallback(!1), i.asyncStartCallback && (yield i.asyncStartCallback()), t.mode && t.mode !== e.currentMode && (yield e.changeMode(t.mode)), i.preload && t.panoIndex !== void 0 && t.panoIndex !== e.panoIndex && (yield e.preloadPano(t.panoIndex)), i.asyncEndCallback && (yield i.asyncEndCallback()), t.panoIndex === void 0 && t.fov === void 0 && t.latitude === void 0 && t.longitude === void 0 ? !0 : yield new Promise((c, d) => {
      const l = t.panoIndex !== void 0 ? t.panoIndex : e.panoIndex;
      l !== void 0 ? e.moveToPano(l, P({
        duration: a,
        // 移动耗时
        moveEndCallback: () => c(!0),
        // 移动结束
        moveCancelCallback: () => d(new Error("move canceled"))
      }, t)) : d(new Error("unexpected error"));
    });
  }), m = (t) => {
    const a = e.state, i = E(a.latitude), r = E(t.latitude), { from: f, to: S } = s(
      a.longitude,
      t.longitude,
      t.rotation || u.Loop
    ), c = a.fov, d = t.fov;
    return {
      from: { latitude: i, longitude: f, fov: c },
      to: { latitude: r, longitude: S, fov: d }
    };
  };
  return {
    move: n,
    rotate: (r, f, ...S) => I(void 0, [r, f, ...S], function* (t, a, i = {}) {
      o.interruptCallback && o.interruptCallback(!1), i.asyncStartCallback && (yield i.asyncStartCallback()), e.currentMode !== L.Mode.Panorama && (yield e.changeMode(L.Mode.Panorama)), t.panoIndex !== void 0 && t.panoIndex !== e.panoIndex && (i.preload && (yield e.preloadPano(t.panoIndex)), yield new Promise((l, w) => {
        if (!t.panoIndex) {
          l(!0);
          return;
        }
        e.moveToPano(t.panoIndex, {
          moveEndCallback: () => l(!0),
          // 移动结束
          moveCancelCallback: () => w(new Error("move canceled"))
          // 移动开始
        });
      })), i.asyncEndCallback && (yield i.asyncEndCallback());
      const { from: c, to: d } = m(t);
      return yield new Promise((l) => {
        const w = ({ progress: C }) => {
          const k = {};
          k.longitude = b(c.longitude, d.longitude, C), k.latitude = b(c.latitude, d.latitude, C), k.fov = b(c.fov, d.fov, C), e.setState(k, !0);
        }, h = () => {
          l(!0);
        }, F = () => {
          l(!1);
        }, T = t.rotateSpeed ? Math.ceil(Math.abs(d.longitude - c.longitude) / t.rotateSpeed * 1e3) : a, v = R(T, U.Linear.None).onUpdate(w).onComplete(h).onDestroy(F);
        t.rotation === u.Loop && v.repeat(1 / 0).yoyo(!0), o.interruptCallback = (C = !0) => {
          v.destroy(), o.interruptCallback = void 0, o.timeoutId && (clearTimeout(o.timeoutId), o.timeoutId = void 0), l(C);
        }, o.timeoutId = setTimeout(() => {
          o.interruptCallback && o.interruptCallback(!0);
        }, a);
      });
    })
  };
};
export {
  O as CameraMovementPlugin,
  O as default
};
