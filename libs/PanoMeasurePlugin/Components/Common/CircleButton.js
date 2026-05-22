import { SvelteComponent as C, init as h, safe_not_equal as y, append_styles as B, element as g, attr as v, set_style as a, insert as b, listen as I, transition_out as c, check_outros as w, transition_in as d, detach as p, text as j, append as q, set_data as x, add_render_callback as z, create_bidirectional_transition as f, is_function as S, group_outros as A, noop as D } from "../../../vendor/svelte/internal/index.js";
import { fade as m } from "../../../vendor/svelte/transition/index.js";
import { startIconImage as _, endIconImage as E } from "../../Modules/UIController/mobileHTML.js";
import "../../../vendor/svelte/easing/index.js";
function F(n) {
  B(n, "svelte-82ysdl", ".CircleButton.svelte-82ysdl.svelte-82ysdl{position:relative;display:flex;justify-content:center;align-items:center;width:4.5rem;height:4.5rem;background-image:inherit;background-size:100% auto;background-repeat:no-repeat;transition:transform 200ms ease-in-out}.CircleButton.svelte-82ysdl.svelte-82ysdl:active{transform:scale(0.8)}.CircleButton.svelte-82ysdl .text.svelte-82ysdl{position:absolute}");
}
function k(n) {
  let e, s, i, o;
  return {
    c() {
      e = g("div"), s = j(
        /*text*/
        n[0]
      ), v(e, "class", "text svelte-82ysdl");
    },
    m(r, t) {
      b(r, e, t), q(e, s), o = !0;
    },
    p(r, t) {
      (!o || t & /*text*/
      1) && x(
        s,
        /*text*/
        r[0]
      );
    },
    i(r) {
      o || (z(() => {
        o && (i || (i = f(e, m, { duration: 300 }, !0)), i.run(1));
      }), o = !0);
    },
    o(r) {
      i || (i = f(e, m, { duration: 300 }, !1)), i.run(0), o = !1;
    },
    d(r) {
      r && p(e), r && i && i.end();
    }
  };
}
function G(n) {
  let e, s = (
    /*text*/
    n[0]
  ), i, o, r, t = k(n);
  return {
    c() {
      e = g("div"), t.c(), v(e, "class", "CircleButton svelte-82ysdl"), a(e, "background-image", `url(${/*bgImage*/
      n[2]})`);
    },
    m(l, u) {
      b(l, e, u), t.m(e, null), i = !0, o || (r = I(e, "click", function() {
        S(
          /*onClick*/
          n[1]
        ) && n[1].apply(this, arguments);
      }), o = !0);
    },
    p(l, [u]) {
      n = l, u & /*text*/
      1 && y(s, s = /*text*/
      n[0]) ? (A(), c(t, 1, 1, D), w(), t = k(n), t.c(), d(t, 1), t.m(e, null)) : t.p(n, u), u & /*bgImage*/
      4 && a(e, "background-image", `url(${/*bgImage*/
      n[2]})`);
    },
    i(l) {
      i || (d(t), i = !0);
    },
    o(l) {
      c(t), i = !1;
    },
    d(l) {
      l && p(e), t.d(l), o = !1, r();
    }
  };
}
function H(n, e, s) {
  let i, { text: o } = e, { onClick: r = null } = e, { color: t = "white" } = e;
  return n.$$set = (l) => {
    "text" in l && s(0, o = l.text), "onClick" in l && s(1, r = l.onClick), "color" in l && s(3, t = l.color);
  }, n.$$.update = () => {
    n.$$.dirty & /*color*/
    8 && s(2, i = (() => t === "white" ? _ : t === "blue" ? E : _)());
  }, [o, r, i, t];
}
class N extends C {
  constructor(e) {
    super(), h(this, e, H, G, y, { text: 0, onClick: 1, color: 3 }, F);
  }
}
export {
  N as default
};
