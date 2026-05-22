import { SvelteComponent as r, init as l, safe_not_equal as d, append_styles as h, element as u, attr as v, toggle_class as a, insert as _, listen as m, noop as n, detach as p, bubble as g } from "../../../../svelte/internal/index.js";
function f(e) {
  h(e, "svelte-1mgyhhn", `:root{--sc-dot-size:6px;--sc-active-dot-size:8px;--sc-dot-size-animation-time:250ms}.sc-carousel-dot__dot.svelte-1mgyhhn{background-color:var(--sc-color-rgb-light);border-radius:50%;display:inline-block;opacity:0.5;transition:opacity 100ms ease,\r
      height var(--sc-dot-size-animation-time) ease,\r
      width var(--sc-dot-size-animation-time) ease;cursor:pointer;-webkit-tap-highlight-color:transparent;height:var(--sc-dot-size);width:var(--sc-dot-size)}.sc-carousel-dot__dot.svelte-1mgyhhn:hover{opacity:0.9}.sc-carousel-dot__dot_active.svelte-1mgyhhn{opacity:0.7;height:var(--sc-active-dot-size);width:var(--sc-active-dot-size)}`);
}
function b(e) {
  let t, s, c;
  return {
    c() {
      t = u("button"), v(t, "class", "sc-carousel-button sc-carousel-dot__dot svelte-1mgyhhn"), a(
        t,
        "sc-carousel-dot__dot_active",
        /*active*/
        e[0]
      );
    },
    m(i, o) {
      _(i, t, o), s || (c = m(
        t,
        "click",
        /*click_handler*/
        e[1]
      ), s = !0);
    },
    p(i, [o]) {
      o & /*active*/
      1 && a(
        t,
        "sc-carousel-dot__dot_active",
        /*active*/
        i[0]
      );
    },
    i: n,
    o: n,
    d(i) {
      i && p(t), s = !1, c();
    }
  };
}
function y(e, t, s) {
  let { active: c = !1 } = t;
  function i(o) {
    g.call(this, e, o);
  }
  return e.$$set = (o) => {
    "active" in o && s(0, c = o.active);
  }, [c, i];
}
class k extends r {
  constructor(t) {
    super(), l(this, t, y, b, d, { active: 0 }, f);
  }
}
export {
  k as Dot
};
