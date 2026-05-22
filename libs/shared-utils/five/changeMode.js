var f = (t, c, n) => new Promise((e, r) => {
  var a = (o) => {
    try {
      u(n.next(o));
    } catch (s) {
      r(s);
    }
  }, i = (o) => {
    try {
      u(n.throw(o));
    } catch (s) {
      r(s);
    }
  }, u = (o) => o.done ? e(o.value) : Promise.resolve(o.value).then(a, i);
  u((n = n.apply(t, c)).next());
});
import { nearlyEqualRad as d, nearlyEqual as m } from "../nearlyEqual.js";
import { to as h } from "../to.js";
function w(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function l(t) {
  return w(t) && !!t.isVector3;
}
function j(t, c) {
  return f(this, null, function* () {
    const [n] = yield h(t.changeMode(...c));
    if (n)
      throw new Error("change mode canceled");
    yield new Promise((i) => {
      t.once("initAnimationWillStart", () => {
        t.once("initAnimationEnded", () => i());
      });
    });
    const e = c[1];
    if (!e)
      return !0;
    const r = t.getCurrentState();
    if (!b(e, r))
      throw new Error("pose 与预期不符");
  });
}
function b(t, c) {
  return Object.keys(t).every((n) => {
    const e = c[n], r = t[n];
    return e === void 0 || r === void 0 ? !0 : n === "longitude" || n === "latitude" ? d(e, r, 2) : typeof e == "number" && typeof r == "number" ? m(e, r, 2) : l(r) && l(e) ? r.distanceTo(e) < 0.01 : e === r;
  });
}
export {
  j as changeMode
};
