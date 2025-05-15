import { SvelteComponent as m, init as G, safe_not_equal as z, svg_element as p, attr as o, set_style as k, insert as L, append as c, noop as v, detach as y } from "../../../../vendor/svelte/internal/index.js";
function q(i) {
  let e, h, r, g, s, n, a, w, u, d, f, _, C;
  return {
    c() {
      e = p("svg"), h = p("defs"), r = p("linearGradient"), g = p("stop"), s = p("stop"), a = p("linearGradient"), w = p("stop"), u = p("stop"), f = p("path"), o(
        g,
        "stop-color",
        /*color*/
        i[1]
      ), o(g, "offset", "0%"), o(
        s,
        "stop-color",
        /*color*/
        i[1]
      ), o(s, "stop-opacity", ".5"), o(s, "offset", "100%"), o(r, "id", n = "arrow-right-icon-gradient-" + /*color*/
      i[1]), o(r, "x1", "96.2%"), o(r, "y1", "50%"), o(r, "x2", "0%"), o(r, "y2", "50%"), o(
        w,
        "stop-color",
        /*color*/
        i[1]
      ), o(w, "offset", "0%"), o(
        u,
        "stop-color",
        /*color*/
        i[1]
      ), o(u, "stop-opacity", "0"), o(u, "offset", "100%"), o(a, "id", d = "arrow-right-icon-stroke-" + /*color*/
      i[1]), o(a, "x1", "50%"), o(a, "y1", "9.83%"), o(a, "x2", "41.99%"), o(a, "y2", "24.46%"), o(f, "d", "M4.84572153,2.14166669 C4.94036186,2.14170036 5.03490004,2.17870347 5.10676798,2.25203341 L9.39516942,6.66308361 C9.48635681,6.75687897 9.53195051,6.87843949 9.53195051,7 C9.53195051,7.12156051 9.48635681,7.24312103 9.39516942,7.33691639 L5.11673708,11.7390017 C5.02118573,11.813978 4.92122439,11.8514005 4.82705048,11.851434 C4.73517505,11.8514667 4.65029153,11.8150862 4.59276829,11.7576692 C4.51856427,11.6593496 4.48179951,11.5564146 4.48176638,11.4595899 C4.48173399,11.3649536 4.51747117,11.2773335 4.58937836,11.2035272 L7.74273899,7.43877755 C7.84906128,7.31184097 7.90222243,7.15592048 7.90222243,7 C7.90222243,6.84407952 7.84906128,6.68815903 7.74273449,6.56121708 L4.54804918,2.74803934 C4.65338339,2.20863952 4.74441906,2.14163065 4.84572153,2.14166669 Z"), o(f, "fill", _ = `url(#arrow-right-icon-gradient-${/*color*/
      i[1]})`), o(f, "fill-rule", "nonzero"), o(f, "stroke", C = `url(#arrow-right-icon-stroke-${/*color*/
      i[1]})`), o(f, "stroke-width", ".2"), o(e, "xmlns", "http://www.w3.org/2000/svg"), o(e, "viewBox", "0 0 14 14"), o(
        e,
        "width",
        /*size*/
        i[0]
      ), o(
        e,
        "height",
        /*size*/
        i[0]
      ), k(
        e,
        "opacity",
        /*opacity*/
        i[2]
      );
    },
    m(t, l) {
      L(t, e, l), c(e, h), c(h, r), c(r, g), c(r, s), c(h, a), c(a, w), c(a, u), c(e, f);
    },
    p(t, [l]) {
      l & /*color*/
      2 && o(
        g,
        "stop-color",
        /*color*/
        t[1]
      ), l & /*color*/
      2 && o(
        s,
        "stop-color",
        /*color*/
        t[1]
      ), l & /*color*/
      2 && n !== (n = "arrow-right-icon-gradient-" + /*color*/
      t[1]) && o(r, "id", n), l & /*color*/
      2 && o(
        w,
        "stop-color",
        /*color*/
        t[1]
      ), l & /*color*/
      2 && o(
        u,
        "stop-color",
        /*color*/
        t[1]
      ), l & /*color*/
      2 && d !== (d = "arrow-right-icon-stroke-" + /*color*/
      t[1]) && o(a, "id", d), l & /*color*/
      2 && _ !== (_ = `url(#arrow-right-icon-gradient-${/*color*/
      t[1]})`) && o(f, "fill", _), l & /*color*/
      2 && C !== (C = `url(#arrow-right-icon-stroke-${/*color*/
      t[1]})`) && o(f, "stroke", C), l & /*size*/
      1 && o(
        e,
        "width",
        /*size*/
        t[0]
      ), l & /*size*/
      1 && o(
        e,
        "height",
        /*size*/
        t[0]
      ), l & /*opacity*/
      4 && k(
        e,
        "opacity",
        /*opacity*/
        t[2]
      );
    },
    i: v,
    o: v,
    d(t) {
      t && y(e);
    }
  };
}
function A(i, e, h) {
  let { size: r = "14" } = e, { color: g = "#ffffff" } = e, { opacity: s = 1 } = e;
  return i.$$set = (n) => {
    "size" in n && h(0, r = n.size), "color" in n && h(1, g = n.color), "opacity" in n && h(2, s = n.opacity);
  }, [r, g, s];
}
class I extends m {
  constructor(e) {
    super(), G(this, e, A, q, z, { size: 0, color: 1, opacity: 2 });
  }
}
export {
  I as default
};
