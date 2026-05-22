import { SvelteComponent as S, init as w, safe_not_equal as F, append_styles as K, element as u, space as A, attr as v, set_style as r, insert as y, append as d, noop as _, detach as q, text as k, set_data as T } from "../../vendor/svelte/internal/index.js";
import { FONT_SIZE_MAP as O } from "../../shared-utils/fontSize.js";
import { px2rem as z } from "../../shared-utils/px2rem.js";
function B(t) {
  K(t, "svelte-f09cfl", ".guide-line__tag.svelte-f09cfl.svelte-f09cfl{position:relative}.text-with-distance.svelte-f09cfl.svelte-f09cfl{display:flex;flex-direction:column;position:relative;padding:0.125rem 0.25rem;border-radius:0.125rem;background:linear-gradient(to top, rgba(147, 147, 147, 0.3), rgba(74, 74, 74, 0.3));box-shadow:0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.2)}.text-with-distance.svelte-f09cfl .border.svelte-f09cfl{position:absolute;top:-50%;right:-50%;bottom:-50%;left:-50%;padding:0.0625rem;border-radius:0.25rem;background:linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.2));-webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);mask-composite:exclude;-webkit-mask-composite:xor;transform:scale(0.5)}.distance-and-name.svelte-f09cfl.svelte-f09cfl{display:flex;gap:0.1875rem}.distance.svelte-f09cfl.svelte-f09cfl{white-space:nowrap;font-size:0.625rem;line-height:0.875rem;color:#66afff}.name.svelte-f09cfl.svelte-f09cfl{opacity:0.6;font-size:0.625rem;line-height:0.875rem;white-space:nowrap;color:#ffffff}.line-name.svelte-f09cfl.svelte-f09cfl{color:#fff;white-space:nowrap;font-size:0.625rem;line-height:0.875rem}.guide-line__tag-point.svelte-f09cfl.svelte-f09cfl{position:absolute;left:50%;bottom:0.0625rem;width:0.4375rem;height:0.125rem;transform:translateX(-50%);background:#fff;border-radius:50%;opacity:0.5}.guide-line__tag-line.svelte-f09cfl.svelte-f09cfl{position:absolute;left:50%;bottom:0.0625rem;width:0.0625rem;height:1.875rem;transform:translateX(-50%);background:linear-gradient(to top, #fff, rgba(255, 255, 255, 0))}.guide-line__tag-content.svelte-f09cfl.svelte-f09cfl{position:absolute;left:-0.9375rem;bottom:1.9375rem;display:flex;justify-content:center;align-items:center}.guide-line__tag-icon.svelte-f09cfl.svelte-f09cfl{width:1.875rem;height:1.875rem;background-size:100%}.guide-line__tag-text.svelte-f09cfl.svelte-f09cfl{box-sizing:content-box;width:-moz-max-content;width:max-content;transform:translateX(-0.1875rem);white-space:nowrap;font-size:0.625rem;line-height:0.875rem;border:solid transparent;border-width:0.125rem 0.5rem 0.125rem 0.375rem;border-image-slice:6 25 6 18 fill;color:#fff;display:flex;align-items:center;justify-content:center}");
}
function D(t) {
  let e, n;
  return {
    c() {
      e = u("div"), n = k(
        /*text*/
        t[0]
      ), v(e, "class", "guide-line__tag-text svelte-f09cfl"), r(
        e,
        "font-size",
        /*nameSize*/
        t[8]
      ), r(
        e,
        "padding",
        /*paddingStyle*/
        t[7]
      ), r(e, "border-image-source", `url(${/*text_background_url*/
      t[9]})`);
    },
    m(i, a) {
      y(i, e, a), d(e, n);
    },
    p(i, a) {
      a & /*text*/
      1 && T(
        n,
        /*text*/
        i[0]
      ), a & /*nameSize*/
      256 && r(
        e,
        "font-size",
        /*nameSize*/
        i[8]
      ), a & /*paddingStyle*/
      128 && r(
        e,
        "padding",
        /*paddingStyle*/
        i[7]
      );
    },
    d(i) {
      i && q(e);
    }
  };
}
function G(t) {
  let e, n, i, a, b, m, c, h, p, s, l = (
    /*name*/
    t[4] && X(t)
  );
  return {
    c() {
      e = u("div"), l && l.c(), n = A(), i = u("div"), a = u("span"), b = k(
        /*distance*/
        t[2]
      ), m = A(), c = u("span"), h = k(
        /*text*/
        t[0]
      ), p = A(), s = u("div"), v(a, "class", "distance svelte-f09cfl"), r(
        a,
        "line-height",
        /*lineHeightStyle*/
        t[5]
      ), r(
        a,
        "font-size",
        /*nameSize*/
        t[8]
      ), v(c, "class", "name svelte-f09cfl"), r(
        c,
        "line-height",
        /*lineHeightStyle*/
        t[5]
      ), r(
        c,
        "font-size",
        /*nameSize*/
        t[8]
      ), v(i, "class", "distance-and-name svelte-f09cfl"), v(s, "class", "border svelte-f09cfl"), v(e, "class", "text-with-distance svelte-f09cfl"), r(
        e,
        "padding",
        /*distancePaddingStyle*/
        t[6]
      );
    },
    m(f, o) {
      y(f, e, o), l && l.m(e, null), d(e, n), d(e, i), d(i, a), d(a, b), d(i, m), d(i, c), d(c, h), d(e, p), d(e, s);
    },
    p(f, o) {
      /*name*/
      f[4] ? l ? l.p(f, o) : (l = X(f), l.c(), l.m(e, n)) : l && (l.d(1), l = null), o & /*distance*/
      4 && T(
        b,
        /*distance*/
        f[2]
      ), o & /*lineHeightStyle*/
      32 && r(
        a,
        "line-height",
        /*lineHeightStyle*/
        f[5]
      ), o & /*nameSize*/
      256 && r(
        a,
        "font-size",
        /*nameSize*/
        f[8]
      ), o & /*text*/
      1 && T(
        h,
        /*text*/
        f[0]
      ), o & /*lineHeightStyle*/
      32 && r(
        c,
        "line-height",
        /*lineHeightStyle*/
        f[5]
      ), o & /*nameSize*/
      256 && r(
        c,
        "font-size",
        /*nameSize*/
        f[8]
      ), o & /*distancePaddingStyle*/
      64 && r(
        e,
        "padding",
        /*distancePaddingStyle*/
        f[6]
      );
    },
    d(f) {
      f && q(e), l && l.d();
    }
  };
}
function X(t) {
  let e, n;
  return {
    c() {
      e = u("span"), n = k(
        /*name*/
        t[4]
      ), v(e, "class", "line-name svelte-f09cfl"), r(
        e,
        "line-height",
        /*lineHeightStyle*/
        t[5]
      ), r(
        e,
        "font-size",
        /*nameSize*/
        t[8]
      );
    },
    m(i, a) {
      y(i, e, a), d(e, n);
    },
    p(i, a) {
      a & /*name*/
      16 && T(
        n,
        /*name*/
        i[4]
      ), a & /*lineHeightStyle*/
      32 && r(
        e,
        "line-height",
        /*lineHeightStyle*/
        i[5]
      ), a & /*nameSize*/
      256 && r(
        e,
        "font-size",
        /*nameSize*/
        i[8]
      );
    },
    d(i) {
      i && q(e);
    }
  };
}
function V(t) {
  let e, n, i, a, b, m, c, h, p, s = (
    /*text*/
    t[0] && !/*distance*/
    t[2] && D(t)
  ), l = (
    /*distance*/
    t[2] && G(t)
  );
  return {
    c() {
      e = u("div"), n = u("div"), i = A(), a = u("div"), b = A(), m = u("div"), c = u("div"), h = A(), s && s.c(), p = A(), l && l.c(), v(n, "class", "guide-line__tag-point svelte-f09cfl"), v(a, "class", "guide-line__tag-line svelte-f09cfl"), v(c, "class", "guide-line__tag-icon svelte-f09cfl"), r(c, "background-image", `url(${/*icon_url*/
      t[1]})`), v(m, "class", "guide-line__tag-content svelte-f09cfl"), v(e, "class", "guide-line__tag svelte-f09cfl"), r(
        e,
        "opacity",
        /*opacity*/
        t[3]
      );
    },
    m(f, o) {
      y(f, e, o), d(e, n), d(e, i), d(e, a), d(e, b), d(e, m), d(m, c), d(m, h), s && s.m(m, null), d(m, p), l && l.m(m, null);
    },
    p(f, [o]) {
      o & /*icon_url*/
      2 && r(c, "background-image", `url(${/*icon_url*/
      f[1]})`), /*text*/
      f[0] && !/*distance*/
      f[2] ? s ? s.p(f, o) : (s = D(f), s.c(), s.m(m, p)) : s && (s.d(1), s = null), /*distance*/
      f[2] ? l ? l.p(f, o) : (l = G(f), l.c(), l.m(m, null)) : l && (l.d(1), l = null), o & /*opacity*/
      8 && r(
        e,
        "opacity",
        /*opacity*/
        f[3]
      );
    },
    i: _,
    o: _,
    d(f) {
      f && q(e), s && s.d(), l && l.d();
    }
  };
}
function Y(t, e, n) {
  let i, a, b, m, c, h, p, s, { text: l = "" } = e, { icon_url: f = "" } = e, { distance: o = "" } = e, { opacity: E = 1 } = e, { name: I = "" } = e, { fontSize: N = "md" } = e;
  const Z = "data:image/png;base64,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";
  return t.$$set = (g) => {
    "text" in g && n(0, l = g.text), "icon_url" in g && n(1, f = g.icon_url), "distance" in g && n(2, o = g.distance), "opacity" in g && n(3, E = g.opacity), "name" in g && n(4, I = g.name), "fontSize" in g && n(10, N = g.fontSize);
  }, t.$$.update = () => {
    var g, P;
    t.$$.dirty & /*fontSize*/
    1024 && n(12, i = O[N]), t.$$.dirty & /*fontConfig*/
    4096 && n(8, a = z((i == null ? void 0 : i.name) || 12)), t.$$.dirty & /*fontConfig*/
    4096 && n(14, b = ((g = i == null ? void 0 : i.padding) == null ? void 0 : g.guide) || [8, 2]), t.$$.dirty & /*padding*/
    16384 && n(7, m = `${z(b[1])} ${z(b[0])}`), t.$$.dirty & /*fontConfig*/
    4096 && n(13, c = ((P = i == null ? void 0 : i.padding) == null ? void 0 : P.distance) || [4, 2]), t.$$.dirty & /*distancePadding*/
    8192 && n(6, h = `${z(c[1])} ${z(c[0])}`), t.$$.dirty & /*fontConfig*/
    4096 && n(11, p = (i == null ? void 0 : i.lineHeight) || 14), t.$$.dirty & /*lineHeight*/
    2048 && n(5, s = z(p));
  }, [
    l,
    f,
    o,
    E,
    I,
    s,
    h,
    m,
    a,
    Z,
    N,
    p,
    i,
    c,
    b
  ];
}
class M extends S {
  constructor(e) {
    super(), w(
      this,
      e,
      Y,
      V,
      F,
      {
        text: 0,
        icon_url: 1,
        distance: 2,
        opacity: 3,
        name: 4,
        fontSize: 10
      },
      B
    );
  }
}
export {
  M as default
};
