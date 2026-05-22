import { SvelteComponent as v, init as f, safe_not_equal as h, append_styles as w, empty as u, insert as c, noop as g, detach as m, element as d, attr as s } from "../../../../vendor/svelte/internal/index.js";
import { tagPopoverArrowLightRight as b, tagPopoverArrowLightLeft as k, tagPopoverArrowLightBottom as _, tagPopoverArrowLightTop as A, tagPopoverArrowDarkRight as P, tagPopoverArrowDarkLeft as L, tagPopoverArrowDarkBottom as y, tagPopoverArrowDarkTop as D } from "../Icon/tag-popover-arrow-base64.js";
function T(a) {
  w(a, "svelte-16evpcg", ".tag-popover-arrow-wrapper.svelte-16evpcg{position:absolute;transform-origin:center;background-position:center;background-repeat:no-repeat;background-size:100% 100%}.tag-popover-arrow-top.svelte-16evpcg{width:1rem;height:0.625rem;top:0.5rem;left:50%;transform:translateX(-50%)}.tag-popover-arrow-bottom.svelte-16evpcg{width:1rem;height:0.625rem;bottom:0.5rem;left:50%;transform:translateX(-50%)}.tag-popover-arrow-left.svelte-16evpcg{width:0.625rem;height:1rem;top:50%;left:0.5rem;transform:translateY(-50%)}.tag-popover-arrow-right.svelte-16evpcg{width:0.625rem;height:1rem;top:50%;right:0.5rem;transform:translateY(-50%)}");
}
function l(a) {
  let t, e, r;
  return {
    c() {
      t = d("div"), s(t, "class", e = "tag-popover-arrow-wrapper tag-popover-arrow-" + /*direction*/
      a[0] + " theme-" + /*theme*/
      a[2] + " svelte-16evpcg"), s(t, "style", r = `background-image: url(${/*arrowImage*/
      a[3]})`);
    },
    m(o, i) {
      c(o, t, i);
    },
    p(o, i) {
      i & /*direction, theme*/
      5 && e !== (e = "tag-popover-arrow-wrapper tag-popover-arrow-" + /*direction*/
      o[0] + " theme-" + /*theme*/
      o[2] + " svelte-16evpcg") && s(t, "class", e), i & /*arrowImage*/
      8 && r !== (r = `background-image: url(${/*arrowImage*/
      o[3]})`) && s(t, "style", r);
    },
    d(o) {
      o && m(t);
    }
  };
}
function B(a) {
  let t, e = (
    /*show*/
    a[1] && l(a)
  );
  return {
    c() {
      e && e.c(), t = u();
    },
    m(r, o) {
      e && e.m(r, o), c(r, t, o);
    },
    p(r, [o]) {
      /*show*/
      r[1] ? e ? e.p(r, o) : (e = l(r), e.c(), e.m(t.parentNode, t)) : e && (e.d(1), e = null);
    },
    i: g,
    o: g,
    d(r) {
      e && e.d(r), r && m(t);
    }
  };
}
function R(a, t, e) {
  let r, { direction: o = "bottom" } = t, { show: i = !0 } = t, { theme: p = "dark" } = t;
  return a.$$set = (n) => {
    "direction" in n && e(0, o = n.direction), "show" in n && e(1, i = n.show), "theme" in n && e(2, p = n.theme);
  }, a.$$.update = () => {
    a.$$.dirty & /*theme, direction*/
    5 && e(3, r = (() => {
      switch (p) {
        case "dark":
          switch (o) {
            case "top":
              return D;
            case "bottom":
              return y;
            case "left":
              return L;
            case "right":
              return P;
          }
        case "light":
          switch (o) {
            case "top":
              return A;
            case "bottom":
              return _;
            case "left":
              return k;
            case "right":
              return b;
          }
      }
    })());
  }, [o, i, p, r];
}
class q extends v {
  constructor(t) {
    super(), f(this, t, R, B, h, { direction: 0, show: 1, theme: 2 }, T);
  }
}
export {
  q as default
};
