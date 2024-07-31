import { SvelteComponent as k, init as b, safe_not_equal as v, append_styles as D, empty as y, insert as d, noop as u, detach as g, element as c, space as w, text as S, attr as f, set_style as _, append as p, set_data as C } from "../../vendor/svelte/internal/index.js";
import { COMPASS_IMAGE as x } from "../Assets/compass.js";
function M(a) {
  D(a, "svelte-rpkaro", ".floorplan-plugin__compass.svelte-rpkaro{position:absolute;left:50%;top:-2.875rem;width:14.4375rem;height:2.5625rem;will-change:opacity;transform-origin:center 11.5rem}.floorplan-plugin__compass-image.svelte-rpkaro{width:100%;height:100%;position:absolute;left:0;top:0;opacity:0.1;background-repeat:no-repeat;background-size:100% 100%}.floorplan-plugin__compass-text.svelte-rpkaro{position:absolute;left:50%;top:0.9375rem;transform:translateX(-50%);opacity:0.2;font-weight:bold;font-size:0.625rem;color:#fff}");
}
function z(a) {
  let t, e, o, n, r;
  return {
    c() {
      t = c("div"), e = c("div"), o = w(), n = c("span"), r = S(
        /*northDesc*/
        a[0]
      ), f(e, "class", "floorplan-plugin__compass-image svelte-rpkaro"), _(e, "background-image", `url(${x})`), f(n, "class", "floorplan-plugin__compass-text svelte-rpkaro"), f(t, "class", "floorplan-plugin__compass svelte-rpkaro"), _(
        t,
        "transform",
        /*compassTransformStyle*/
        a[2]
      );
    },
    m(s, l) {
      d(s, t, l), p(t, e), p(t, o), p(t, n), p(n, r);
    },
    p(s, l) {
      l & /*northDesc*/
      1 && C(
        r,
        /*northDesc*/
        s[0]
      );
    },
    d(s) {
      s && g(t);
    }
  };
}
function A(a) {
  let t, e = (
    /*canCompassShow*/
    a[1] && z(a)
  );
  return {
    c() {
      e && e.c(), t = y();
    },
    m(o, n) {
      e && e.m(o, n), d(o, t, n);
    },
    p(o, [n]) {
      /*canCompassShow*/
      o[1] && e.p(o, n);
    },
    i: u,
    o: u,
    d(o) {
      e && e.d(o), o && g(t);
    }
  };
}
function I(a) {
  return a / Math.PI * 180;
}
function P(a, t, e) {
  var m;
  let { floorplanData: o } = t, { northDesc: n } = t;
  const r = (m = o.entrance) == null ? void 0 : m.northRad, s = typeof r == "number", h = `translateX(-50%) translateZ(10px) rotate(${-(r ? I(r) : 0) + 90}deg)`;
  return a.$$set = (i) => {
    "floorplanData" in i && e(3, o = i.floorplanData), "northDesc" in i && e(0, n = i.northDesc);
  }, [n, s, h, o];
}
class q extends k {
  constructor(t) {
    super(), b(this, t, P, A, v, { floorplanData: 3, northDesc: 0 }, M);
  }
}
export {
  q as Compass
};
