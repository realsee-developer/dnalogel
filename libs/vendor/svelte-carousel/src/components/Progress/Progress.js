import { SvelteComponent as d, init as l, safe_not_equal as u, append_styles as f, element as _, attr as h, set_style as o, insert as p, noop as a, detach as v } from "../../../../svelte/internal/index.js";
function m(t) {
  f(t, "svelte-i7yfid", ".sc-carousel-progress__indicator.svelte-i7yfid{height:100%;background-color:var(--sc-color-hex-dark-50p)}");
}
function g(t) {
  let e;
  return {
    c() {
      e = _("div"), h(e, "class", "sc-carousel-progress__indicator svelte-i7yfid"), o(
        e,
        "width",
        /*width*/
        t[0] + "%"
      );
    },
    m(i, s) {
      p(i, e, s);
    },
    p(i, [s]) {
      s & /*width*/
      1 && o(
        e,
        "width",
        /*width*/
        i[0] + "%"
      );
    },
    i: a,
    o: a,
    d(i) {
      i && v(e);
    }
  };
}
const c = 100;
function y(t, e, i) {
  let s, { value: r = 0 } = e;
  return t.$$set = (n) => {
    "value" in n && i(1, r = n.value);
  }, t.$$.update = () => {
    t.$$.dirty & /*value*/
    2 && i(0, s = Math.min(Math.max(r * c, 0), c));
  }, [s, r];
}
class w extends d {
  constructor(e) {
    super(), l(this, e, y, g, u, { value: 1 }, m);
  }
}
export {
  w as Progress
};
