import { SvelteComponent as C, init as m, safe_not_equal as w, append_styles as z, element as _, svg_element as a, attr as e, set_style as u, insert as y, append as d, noop as b, detach as G } from "../../../vendor/svelte/internal/index.js";
function k(l) {
  z(l, "svelte-1d6rvbz", ".icon-container.svelte-1d6rvbz{width:3.25rem;height:3.25rem;background-color:var(--bg-color);border-radius:100%;display:flex;align-items:center;justify-content:center;z-index:2}");
}
function L(l) {
  let t, o, g, n, c, i, s, h, v, p;
  return {
    c() {
      t = _("div"), o = a("svg"), g = a("defs"), n = a("linearGradient"), c = a("stop"), i = a("stop"), s = a("linearGradient"), h = a("stop"), v = a("stop"), p = a("path"), e(
        c,
        "stop-color",
        /*color*/
        l[1]
      ), e(c, "offset", "0%"), e(
        i,
        "stop-color",
        /*color*/
        l[1]
      ), e(i, "stop-opacity", ".5"), e(i, "offset", "100%"), e(n, "x1", "53.2804066%"), e(n, "y1", "100%"), e(n, "x2", "64.4764442%"), e(n, "y2", "2.52981206%"), e(n, "id", "video-icon-gradient-a"), e(
        h,
        "stop-color",
        /*color*/
        l[1]
      ), e(h, "offset", "0%"), e(
        v,
        "stop-color",
        /*color*/
        l[1]
      ), e(v, "stop-opacity", "0"), e(v, "offset", "100%"), e(s, "x1", "50%"), e(s, "y1", "-5.89066117%"), e(s, "x2", "60.3018289%"), e(s, "y2", "32.0415872%"), e(s, "id", "video-icon-gradient-b"), e(p, "d", "M8.0883645,5.35 C8.27319183,5.35 8.45426937,5.40368245 8.61098984,5.50477659 L20.4341152,13.1314044 C20.6662958,13.2811749 20.8173539,13.5140616 20.8743923,13.7691613 C20.9300733,14.0181899 20.8962437,14.2885953 20.7601668,14.5243865 L8.61098984,22.4950731 C8.38014238,22.6439836 8.11267156,22.6823641 7.86680489,22.6238045 C7.62023287,22.5650769 7.39563144,22.408984 7.25097187,22.1700998 C7.15226844,22.0071054 7.1,21.8187509 7.1,21.6265526 L7.1,6.37329702 C7.1,6.09035119 7.2108925,5.83405961 7.39059316,5.64859123 C7.56916841,5.46428435 7.81578724,5.35 8.0883645,5.35 Z"), e(p, "fill", "url(#video-icon-gradient-a)"), e(p, "fill-rule", "nonzero"), e(p, "stroke", "url(#video-icon-gradient-b)"), e(p, "stroke-width", ".2"), e(o, "xmlns", "http://www.w3.org/2000/svg"), e(o, "viewBox", "0 0 28 28"), e(
        o,
        "width",
        /*size*/
        l[0]
      ), e(
        o,
        "height",
        /*size*/
        l[0]
      ), e(t, "class", "icon-container svelte-1d6rvbz"), u(
        t,
        "--bg-color",
        /*bgColor*/
        l[2]
      );
    },
    m(r, f) {
      y(r, t, f), d(t, o), d(o, g), d(g, n), d(n, c), d(n, i), d(g, s), d(s, h), d(s, v), d(o, p);
    },
    p(r, [f]) {
      f & /*color*/
      2 && e(
        c,
        "stop-color",
        /*color*/
        r[1]
      ), f & /*color*/
      2 && e(
        i,
        "stop-color",
        /*color*/
        r[1]
      ), f & /*color*/
      2 && e(
        h,
        "stop-color",
        /*color*/
        r[1]
      ), f & /*color*/
      2 && e(
        v,
        "stop-color",
        /*color*/
        r[1]
      ), f & /*size*/
      1 && e(
        o,
        "width",
        /*size*/
        r[0]
      ), f & /*size*/
      1 && e(
        o,
        "height",
        /*size*/
        r[0]
      ), f & /*bgColor*/
      4 && u(
        t,
        "--bg-color",
        /*bgColor*/
        r[2]
      );
    },
    i: b,
    o: b,
    d(r) {
      r && G(t);
    }
  };
}
function j(l, t, o) {
  let { size: g = "28" } = t, { color: n = "#ffffff" } = t, { bgColor: c = "#0000004d" } = t;
  return l.$$set = (i) => {
    "size" in i && o(0, g = i.size), "color" in i && o(1, n = i.color), "bgColor" in i && o(2, c = i.bgColor);
  }, [g, n, c];
}
class B extends C {
  constructor(t) {
    super(), m(this, t, j, L, w, { size: 0, color: 1, bgColor: 2 }, k);
  }
}
export {
  B as default
};
