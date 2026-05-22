import { SvelteComponent as k, init as b, safe_not_equal as v, append_styles as D, empty as y, insert as d, noop as _, detach as g, element as c, space as w, text as S, attr as f, set_style as u, append as p, set_data as C } from "../../vendor/svelte/internal/index.js";
import { COMPASS_IMAGE as x } from "../Assets/compass.js";
import { rad2Deg as z } from "../../shared-utils/math/rad2Deg.js";
function A(r) {
  D(r, "svelte-rpkaro", ".floorplan-plugin__compass.svelte-rpkaro{position:absolute;left:50%;top:-2.875rem;width:14.4375rem;height:2.5625rem;will-change:opacity;transform-origin:center 11.5rem}.floorplan-plugin__compass-image.svelte-rpkaro{width:100%;height:100%;position:absolute;left:0;top:0;opacity:0.1;background-repeat:no-repeat;background-size:100% 100%}.floorplan-plugin__compass-text.svelte-rpkaro{position:absolute;left:50%;top:0.9375rem;transform:translateX(-50%);opacity:0.2;font-weight:bold;font-size:0.625rem;color:#fff}");
}
function M(r) {
  let t, e, o, a, n;
  return {
    c() {
      t = c("div"), e = c("div"), o = w(), a = c("span"), n = S(
        /*northDesc*/
        r[0]
      ), f(e, "class", "floorplan-plugin__compass-image svelte-rpkaro"), u(e, "background-image", `url(${x})`), f(a, "class", "floorplan-plugin__compass-text svelte-rpkaro"), f(t, "class", "floorplan-plugin__compass svelte-rpkaro"), u(
        t,
        "transform",
        /*compassTransformStyle*/
        r[2]
      );
    },
    m(s, l) {
      d(s, t, l), p(t, e), p(t, o), p(t, a), p(a, n);
    },
    p(s, l) {
      l & /*northDesc*/
      1 && C(
        n,
        /*northDesc*/
        s[0]
      );
    },
    d(s) {
      s && g(t);
    }
  };
}
function R(r) {
  let t, e = (
    /*canCompassShow*/
    r[1] && M(r)
  );
  return {
    c() {
      e && e.c(), t = y();
    },
    m(o, a) {
      e && e.m(o, a), d(o, t, a);
    },
    p(o, [a]) {
      /*canCompassShow*/
      o[1] && e.p(o, a);
    },
    i: _,
    o: _,
    d(o) {
      e && e.d(o), o && g(t);
    }
  };
}
function X(r, t, e) {
  var m;
  let { floorplanData: o } = t, { northDesc: a } = t;
  const n = (m = o.entrance) == null ? void 0 : m.northRad, s = typeof n == "number", h = `translateX(-50%) translateZ(10px) rotate(${-(n ? z(n) : 0) + 90}deg)`;
  return r.$$set = (i) => {
    "floorplanData" in i && e(3, o = i.floorplanData), "northDesc" in i && e(0, a = i.northDesc);
  }, [a, s, h, o];
}
class I extends k {
  constructor(t) {
    super(), b(this, t, X, R, v, { floorplanData: 3, northDesc: 0 }, A);
  }
}
export {
  I as Compass
};
