import { SvelteComponent as m, init as f, safe_not_equal as w, append_styles as u, empty as v, insert as p, noop as c, detach as g, element as d, attr as s } from "../../../../vendor/svelte/internal/index.js";
import { tagPopoverArrowLightRight as q, tagPopoverArrowLightLeft as b, tagPopoverArrowLightBottom as k, tagPopoverArrowLightTop as _, tagPopoverArrowDarkRight as y, tagPopoverArrowDarkLeft as A, tagPopoverArrowDarkBottom as P, tagPopoverArrowDarkTop as L } from "../Icon/tag-popover-arrow-base64.js";
function D(a) {
  u(a, "svelte-1yhqqec", ".tag-popover-arrow-wrapper.svelte-1yhqqec{position:absolute;transform-origin:center;background-position:center;background-repeat:no-repeat;background-size:100% 100%}.tag-popover-arrow-top.svelte-1yhqqec{width:1rem;height:0.625rem;top:0;left:50%;transform:translateX(-50%)}.tag-popover-arrow-bottom.svelte-1yhqqec{width:1rem;height:0.625rem;bottom:0;left:50%;transform:translateX(-50%)}.tag-popover-arrow-left.svelte-1yhqqec{width:0.625rem;height:1rem;top:50%;left:0;transform:translateY(-50%)}.tag-popover-arrow-right.svelte-1yhqqec{width:0.625rem;height:1rem;top:50%;right:0;transform:translateY(-50%)}");
}
function h(a) {
  let t, e, r;
  return {
    c() {
      t = d("div"), s(t, "class", e = "tag-popover-arrow-wrapper tag-popover-arrow-" + /*direction*/
      a[0] + " theme-" + /*theme*/
      a[2] + " svelte-1yhqqec"), s(t, "style", r = `background-image: url(${/*arrowImage*/
      a[3]})`);
    },
    m(o, i) {
      p(o, t, i);
    },
    p(o, i) {
      i & /*direction, theme*/
      5 && e !== (e = "tag-popover-arrow-wrapper tag-popover-arrow-" + /*direction*/
      o[0] + " theme-" + /*theme*/
      o[2] + " svelte-1yhqqec") && s(t, "class", e), i & /*arrowImage*/
      8 && r !== (r = `background-image: url(${/*arrowImage*/
      o[3]})`) && s(t, "style", r);
    },
    d(o) {
      o && g(t);
    }
  };
}
function T(a) {
  let t, e = (
    /*show*/
    a[1] && h(a)
  );
  return {
    c() {
      e && e.c(), t = v();
    },
    m(r, o) {
      e && e.m(r, o), p(r, t, o);
    },
    p(r, [o]) {
      /*show*/
      r[1] ? e ? e.p(r, o) : (e = h(r), e.c(), e.m(t.parentNode, t)) : e && (e.d(1), e = null);
    },
    i: c,
    o: c,
    d(r) {
      e && e.d(r), r && g(t);
    }
  };
}
function B(a, t, e) {
  let r, { direction: o = "bottom" } = t, { show: i = !0 } = t, { theme: l = "dark" } = t;
  return a.$$set = (n) => {
    "direction" in n && e(0, o = n.direction), "show" in n && e(1, i = n.show), "theme" in n && e(2, l = n.theme);
  }, a.$$.update = () => {
    a.$$.dirty & /*theme, direction*/
    5 && e(3, r = (() => {
      switch (l) {
        case "dark":
          switch (o) {
            case "top":
              return L;
            case "bottom":
              return P;
            case "left":
              return A;
            case "right":
              return y;
          }
        case "light":
          switch (o) {
            case "top":
              return _;
            case "bottom":
              return k;
            case "left":
              return b;
            case "right":
              return q;
          }
      }
    })());
  }, [o, i, l, r];
}
class Y extends m {
  constructor(t) {
    super(), f(this, t, B, T, w, { direction: 0, show: 1, theme: 2 }, D);
  }
}
export {
  Y as default
};
