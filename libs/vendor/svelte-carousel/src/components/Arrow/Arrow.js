import { SvelteComponent as u, init as w, safe_not_equal as b, append_styles as v, element as n, attr as d, toggle_class as c, insert as p, append as h, listen as x, noop as f, detach as g, bubble as m } from "../../../../svelte/internal/index.js";
import { NEXT as l, PREV as _ } from "../../direction.js";
function z(a) {
  v(a, "svelte-1bftafx", ":root{--sc-arrow-size:2px}.sc-carousel-arrow__circle.svelte-1bftafx{width:20px;height:20px;border-radius:50%;background-color:var(--sc-color-rgb-light-50p);display:flex;align-items:center;justify-content:center;transition:opacity 100ms ease;cursor:pointer;-webkit-tap-highlight-color:transparent}.sc-carousel-arrow__circle.svelte-1bftafx:hover{opacity:0.9}.sc-carousel-arrow__arrow.svelte-1bftafx{border:solid var(--sc-color-hex-dark);border-width:0 var(--sc-arrow-size) var(--sc-arrow-size) 0;padding:var(--sc-arrow-size);position:relative}.sc-carousel-arrow__arrow-next.svelte-1bftafx{transform:rotate(-45deg);left:calc(var(--sc-arrow-size) / -2)}.sc-carousel-arrow__arrow-prev.svelte-1bftafx{transform:rotate(135deg);right:calc(var(--sc-arrow-size) / -2)}.sc-carousel-arrow__circle_disabled.svelte-1bftafx,.sc-carousel-arrow__circle_disabled.svelte-1bftafx:hover{opacity:0.5}");
}
function k(a) {
  let r, o, t, i;
  return {
    c() {
      r = n("button"), o = n("i"), d(o, "class", "sc-carousel-arrow__arrow svelte-1bftafx"), c(
        o,
        "sc-carousel-arrow__arrow-next",
        /*direction*/
        a[0] === l
      ), c(
        o,
        "sc-carousel-arrow__arrow-prev",
        /*direction*/
        a[0] === _
      ), d(r, "class", "sc-carousel-button sc-carousel-arrow__circle svelte-1bftafx"), c(
        r,
        "sc-carousel-arrow__circle_disabled",
        /*disabled*/
        a[1]
      );
    },
    m(s, e) {
      p(s, r, e), h(r, o), t || (i = x(
        r,
        "click",
        /*click_handler*/
        a[2]
      ), t = !0);
    },
    p(s, [e]) {
      e & /*direction, NEXT*/
      1 && c(
        o,
        "sc-carousel-arrow__arrow-next",
        /*direction*/
        s[0] === l
      ), e & /*direction, PREV*/
      1 && c(
        o,
        "sc-carousel-arrow__arrow-prev",
        /*direction*/
        s[0] === _
      ), e & /*disabled*/
      2 && c(
        r,
        "sc-carousel-arrow__circle_disabled",
        /*disabled*/
        s[1]
      );
    },
    i: f,
    o: f,
    d(s) {
      s && g(r), t = !1, i();
    }
  };
}
function y(a, r, o) {
  let { direction: t = l } = r, { disabled: i = !1 } = r;
  function s(e) {
    m.call(this, a, e);
  }
  return a.$$set = (e) => {
    "direction" in e && o(0, t = e.direction), "disabled" in e && o(1, i = e.disabled);
  }, [t, i, s];
}
class q extends u {
  constructor(r) {
    super(), w(this, r, y, k, b, { direction: 0, disabled: 1 }, z);
  }
}
export {
  q as Arrow
};
