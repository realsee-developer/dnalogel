var w = (e, t, i) => new Promise((a, r) => {
  var u = (o) => {
    try {
      n(i.next(o));
    } catch (c) {
      r(c);
    }
  }, s = (o) => {
    try {
      n(i.throw(o));
    } catch (c) {
      r(c);
    }
  }, n = (o) => o.done ? a(o.value) : Promise.resolve(o.value).then(u, s);
  n((i = i.apply(e, t)).next());
});
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
const m = window.requestAnimationFrame || ((e) => setTimeout(e, 16)), F = window.cancelAnimationFrame || clearTimeout;
function T(e, t = 0) {
  t <= 0 ? m(e) : m(() => T(e, t - 1));
}
function A() {
  return w(this, null, function* () {
    return new Promise((e) => {
      m(() => e());
    });
  });
}
function l(e, t = 60) {
  let i = -1, a = 0, r = -1;
  const u = 1e3 / t;
  function s(n) {
    r === -1 && (r = n), i = m(s), !(n - a < u) && (a = n, e == null || e(n - r));
  }
  return i = m(s), function() {
    F(i);
  };
}
function p() {
  const e = Date.now();
  return new Promise((t) => {
    m(() => {
      t(Date.now() - e);
    });
  });
}
export {
  A as awaitNextFrame,
  p as getFrameTime,
  T as nextFrame,
  l as requestAnimationFrameInterval
};
