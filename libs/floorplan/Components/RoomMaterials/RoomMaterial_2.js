import { SvelteComponent as S, init as c, safe_not_equal as x, svg_element as f, space as U, attr as t, insert as s, append as w, noop as y, detach as m } from "../../../vendor/svelte/internal/index.js";
import { pathD as D } from "../../utils/formatPosition.js";
function O(o) {
  let n, i, p, r, l, _, d, k, h, B, u;
  return {
    c() {
      n = f("defs"), i = f("pattern"), p = f("rect"), r = f("pattern"), l = f("rect"), _ = U(), d = f("path"), k = U(), h = f("path"), B = U(), u = f("path"), t(p, "x", "0"), t(p, "y", "0"), t(p, "width", "6"), t(p, "height", "50"), t(p, "fill", "none"), t(p, "stroke", "#4B4B57"), t(p, "stroke-width", "0.5"), t(i, "id", "room-material-pattern-1"), t(i, "x", "0"), t(i, "y", "0"), t(i, "width", "12"), t(i, "height", "50"), t(i, "patternUnits", "userSpaceOnUse"), t(i, "patternTransform", "scale(50 50)"), t(l, "x", "0"), t(l, "y", "0"), t(l, "width", "6"), t(l, "height", "50"), t(l, "fill", "none"), t(l, "stroke", "#4B4B57"), t(l, "stroke-width", "0.5"), t(r, "id", "room-material-pattern-2"), t(r, "x", "6"), t(r, "y", "25"), t(r, "width", "12"), t(r, "height", "50"), t(r, "patternUnits", "userSpaceOnUse"), t(r, "patternTransform", "scale(50 50)"), t(
        d,
        "d",
        /*d*/
        o[0]
      ), t(d, "fill", "#43434D"), t(
        h,
        "d",
        /*d*/
        o[0]
      ), t(h, "fill", "url(#room-material-pattern-1)"), t(
        u,
        "d",
        /*d*/
        o[0]
      ), t(u, "fill", "url(#room-material-pattern-2)");
    },
    m(e, a) {
      s(e, n, a), w(n, i), w(i, p), w(n, r), w(r, l), s(e, _, a), s(e, d, a), s(e, k, a), s(e, h, a), s(e, B, a), s(e, u, a);
    },
    p(e, [a]) {
      a & /*d*/
      1 && t(
        d,
        "d",
        /*d*/
        e[0]
      ), a & /*d*/
      1 && t(
        h,
        "d",
        /*d*/
        e[0]
      ), a & /*d*/
      1 && t(
        u,
        "d",
        /*d*/
        e[0]
      );
    },
    i: y,
    o: y,
    d(e) {
      e && m(n), e && m(_), e && m(d), e && m(k), e && m(h), e && m(B), e && m(u);
    }
  };
}
function T(o, n, i) {
  let p, { path: r } = n;
  return o.$$set = (l) => {
    "path" in l && i(1, r = l.path);
  }, o.$$.update = () => {
    o.$$.dirty & /*path*/
    2 && i(0, p = D(r, { needZ: !0 }));
  }, [p, r];
}
class C extends S {
  constructor(n) {
    super(), c(this, n, T, O, x, { path: 1 });
  }
}
export {
  C as RoomMaterial_2
};
