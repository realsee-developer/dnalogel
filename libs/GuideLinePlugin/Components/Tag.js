import { SvelteComponent as D, init as G, safe_not_equal as X, append_styles as x, element as u, space as p, attr as c, set_style as k, insert as T, append as a, noop as y, detach as z, text as h, set_data as j } from "../../vendor/svelte/internal/index.js";
function P(i) {
  x(i, "svelte-4qjwer", ".guide-line__tag.svelte-4qjwer.svelte-4qjwer{position:relative}.text-with-distance.svelte-4qjwer.svelte-4qjwer{display:flex;flex-direction:column;position:relative;padding:0.125rem 0.25rem;border-radius:0.125rem;background:linear-gradient(to top, rgba(147, 147, 147, 0.3), rgba(74, 74, 74, 0.3));box-shadow:0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.2)}.text-with-distance.svelte-4qjwer .border.svelte-4qjwer{position:absolute;top:-50%;right:-50%;bottom:-50%;left:-50%;padding:0.0625rem;border-radius:0.25rem;background:linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.2));-webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);mask-composite:exclude;-webkit-mask-composite:xor;transform:scale(0.5)}.distance-and-name.svelte-4qjwer.svelte-4qjwer{display:flex;gap:0.1875rem}.distance.svelte-4qjwer.svelte-4qjwer{white-space:nowrap;font-size:0.625rem;line-height:0.875rem;color:#66afff}.name.svelte-4qjwer.svelte-4qjwer{opacity:0.6;font-size:0.625rem;line-height:0.875rem;white-space:nowrap;color:#ffffff}.line-name.svelte-4qjwer.svelte-4qjwer{color:#fff;white-space:nowrap;font-size:0.625rem;line-height:0.875rem}.guide-line__tag-point.svelte-4qjwer.svelte-4qjwer{position:absolute;left:50%;bottom:0.0625rem;width:0.4375rem;height:0.125rem;transform:translateX(-50%);background:#fff;border-radius:50%;opacity:0.5}.guide-line__tag-line.svelte-4qjwer.svelte-4qjwer{position:absolute;left:50%;bottom:0.0625rem;width:0.0625rem;height:1.875rem;transform:translateX(-50%);background:linear-gradient(to top, #fff, rgba(255, 255, 255, 0))}.guide-line__tag-content.svelte-4qjwer.svelte-4qjwer{position:absolute;left:-0.9375rem;bottom:1.9375rem;display:flex}.guide-line__tag-icon.svelte-4qjwer.svelte-4qjwer{width:1.875rem;height:1.875rem;background-size:100%}.guide-line__tag-text.svelte-4qjwer.svelte-4qjwer{box-sizing:content-box;height:0.875rem;width:-moz-max-content;width:max-content;margin-top:0.3125rem;transform:translateX(-0.1875rem);white-space:nowrap;font-size:0.625rem;line-height:0.875rem;border:solid transparent;border-width:0.125rem 0.5rem 0.125rem 0.375rem;border-image-slice:6 25 6 18 fill;color:#fff}");
}
function E(i) {
  let e, r;
  return {
    c() {
      e = u("div"), r = h(
        /*text*/
        i[0]
      ), c(e, "class", "guide-line__tag-text svelte-4qjwer"), k(e, "border-image-source", `url(${/*text_background_url*/
      i[6]})`);
    },
    m(l, n) {
      T(l, e, n), a(e, r);
    },
    p(l, n) {
      n & /*text*/
      1 && j(
        r,
        /*text*/
        l[0]
      );
    },
    d(l) {
      l && z(e);
    }
  };
}
function I(i) {
  let e, r, l, n, v = (
    /*i18n*/
    i[5]("全程") + ""
  ), o, d, q = (
    /*i18n*/
    i[5]("米") + ""
  ), b, t, s, f, w, N, m = (
    /*name*/
    i[4] && _(i)
  );
  return {
    c() {
      e = u("div"), m && m.c(), r = p(), l = u("div"), n = u("span"), o = h(v), d = h(
        /*distance*/
        i[2]
      ), b = h(q), t = p(), s = u("span"), f = h(
        /*text*/
        i[0]
      ), w = p(), N = u("div"), c(n, "class", "distance svelte-4qjwer"), c(s, "class", "name svelte-4qjwer"), c(l, "class", "distance-and-name svelte-4qjwer"), c(N, "class", "border svelte-4qjwer"), c(e, "class", "text-with-distance svelte-4qjwer");
    },
    m(g, A) {
      T(g, e, A), m && m.m(e, null), a(e, r), a(e, l), a(l, n), a(n, o), a(n, d), a(n, b), a(l, t), a(l, s), a(s, f), a(e, w), a(e, N);
    },
    p(g, A) {
      /*name*/
      g[4] ? m ? m.p(g, A) : (m = _(g), m.c(), m.m(e, r)) : m && (m.d(1), m = null), A & /*i18n*/
      32 && v !== (v = /*i18n*/
      g[5]("全程") + "") && j(o, v), A & /*distance*/
      4 && j(
        d,
        /*distance*/
        g[2]
      ), A & /*i18n*/
      32 && q !== (q = /*i18n*/
      g[5]("米") + "") && j(b, q), A & /*text*/
      1 && j(
        f,
        /*text*/
        g[0]
      );
    },
    d(g) {
      g && z(e), m && m.d();
    }
  };
}
function _(i) {
  let e, r;
  return {
    c() {
      e = u("span"), r = h(
        /*name*/
        i[4]
      ), c(e, "class", "line-name svelte-4qjwer");
    },
    m(l, n) {
      T(l, e, n), a(e, r);
    },
    p(l, n) {
      n & /*name*/
      16 && j(
        r,
        /*name*/
        l[4]
      );
    },
    d(l) {
      l && z(e);
    }
  };
}
function Z(i) {
  let e, r, l, n, v, o, d, q, b, t = (
    /*text*/
    i[0] && !/*distance*/
    i[2] && E(i)
  ), s = (
    /*distance*/
    i[2] && I(i)
  );
  return {
    c() {
      e = u("div"), r = u("div"), l = p(), n = u("div"), v = p(), o = u("div"), d = u("div"), q = p(), t && t.c(), b = p(), s && s.c(), c(r, "class", "guide-line__tag-point svelte-4qjwer"), c(n, "class", "guide-line__tag-line svelte-4qjwer"), c(d, "class", "guide-line__tag-icon svelte-4qjwer"), k(d, "background-image", `url(${/*icon_url*/
      i[1]})`), c(o, "class", "guide-line__tag-content svelte-4qjwer"), c(e, "class", "guide-line__tag svelte-4qjwer"), k(
        e,
        "opacity",
        /*opacity*/
        i[3]
      );
    },
    m(f, w) {
      T(f, e, w), a(e, r), a(e, l), a(e, n), a(e, v), a(e, o), a(o, d), a(o, q), t && t.m(o, null), a(o, b), s && s.m(o, null);
    },
    p(f, [w]) {
      w & /*icon_url*/
      2 && k(d, "background-image", `url(${/*icon_url*/
      f[1]})`), /*text*/
      f[0] && !/*distance*/
      f[2] ? t ? t.p(f, w) : (t = E(f), t.c(), t.m(o, b)) : t && (t.d(1), t = null), /*distance*/
      f[2] ? s ? s.p(f, w) : (s = I(f), s.c(), s.m(o, null)) : s && (s.d(1), s = null), w & /*opacity*/
      8 && k(
        e,
        "opacity",
        /*opacity*/
        f[3]
      );
    },
    i: y,
    o: y,
    d(f) {
      f && z(e), t && t.d(), s && s.d();
    }
  };
}
function K(i, e, r) {
  let { text: l = "" } = e, { icon_url: n = "" } = e, { distance: v = 0 } = e, { opacity: o = 1 } = e, { name: d = "" } = e, { i18n: q = (t) => t } = e;
  const b = "data:image/png;base64,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";
  return i.$$set = (t) => {
    "text" in t && r(0, l = t.text), "icon_url" in t && r(1, n = t.icon_url), "distance" in t && r(2, v = t.distance), "opacity" in t && r(3, o = t.opacity), "name" in t && r(4, d = t.name), "i18n" in t && r(5, q = t.i18n);
  }, [l, n, v, o, d, q, b];
}
class F extends D {
  constructor(e) {
    super(), G(
      this,
      e,
      K,
      Z,
      X,
      {
        text: 0,
        icon_url: 1,
        distance: 2,
        opacity: 3,
        name: 4,
        i18n: 5
      },
      P
    );
  }
}
export {
  F as default
};
