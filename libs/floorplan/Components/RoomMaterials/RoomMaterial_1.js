import { SvelteComponent as _, init as w, safe_not_equal as y, svg_element as h, space as k, attr as t, insert as l, append as d, noop as c, detach as m } from "../../../vendor/svelte/internal/index.js";
import { pathD as M } from "../../utils/formatPosition.js";
function v(n) {
  let a, e, i, p, f, o;
  return {
    c() {
      a = h("defs"), e = h("pattern"), i = h("rect"), p = h("path"), f = k(), o = h("path"), t(i, "x", "0"), t(i, "y", "0"), t(
        i,
        "width",
        /*width*/
        n[1]
      ), t(
        i,
        "height",
        /*width*/
        n[1]
      ), t(i, "fill", "#323747"), t(
        p,
        "d",
        /*patternPathD*/
        n[2]
      ), t(p, "stroke", "#ffffff"), t(p, "stroke-opacity", "0.06"), t(p, "stroke-width", "0.5"), t(p, "fill", "none"), t(e, "id", "fpm-room-pattern-0"), t(e, "x", "0"), t(e, "y", "0"), t(
        e,
        "width",
        /*width*/
        n[1]
      ), t(
        e,
        "height",
        /*width*/
        n[1]
      ), t(e, "patternUnits", "userSpaceOnUse"), t(e, "patternTransform", "scale(50 50)"), t(
        o,
        "d",
        /*d*/
        n[0]
      ), t(o, "fill", "url(#fpm-room-pattern-0)");
    },
    m(r, s) {
      l(r, a, s), d(a, e), d(e, i), d(e, p), l(r, f, s), l(r, o, s);
    },
    p(r, [s]) {
      s & /*d*/
      1 && t(
        o,
        "d",
        /*d*/
        r[0]
      );
    },
    i: c,
    o: c,
    d(r) {
      r && m(a), r && m(f), r && m(o);
    }
  };
}
const u = 6;
function D(n, a, e) {
  let i, { path: p } = a;
  const f = u * 2, o = `M0 ${u} h ${f} M${u} 0 v ${f}`;
  return n.$$set = (r) => {
    "path" in r && e(3, p = r.path);
  }, n.$$.update = () => {
    n.$$.dirty & /*path*/
    8 && e(0, i = M(p, { needZ: !0 }));
  }, [i, f, o, p];
}
class $ extends _ {
  constructor(a) {
    super(), w(this, a, D, v, y, { path: 3 });
  }
}
export {
  $ as RoomMaterial_1
};
