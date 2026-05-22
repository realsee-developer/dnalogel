import { SvelteComponent as p, init as b, safe_not_equal as v, append_styles as D, svg_element as s, attr as r, insert as h, append as d, transition_in as c, transition_out as _, check_outros as w, detach as g, add_render_callback as k, create_in_transition as O, create_out_transition as G, group_outros as I } from "../../../../vendor/svelte/internal/index.js";
import { uuid as L } from "../../../../shared-utils/uuid.js";
import { draw as m } from "../../../../vendor/svelte/transition/index.js";
import { cubicOut as S, cubicInOut as U } from "../../../../vendor/svelte/easing/index.js";
function q(n) {
  D(n, "svelte-blgtit", ".line.svelte-blgtit{width:100%;height:100%;overflow:visible;pointer-events:none}");
}
function y(n) {
  let e, a, l, o;
  return {
    c() {
      e = s("path"), r(e, "fill", "none"), r(e, "stroke", "url(#" + /*defsID*/
      n[4] + ")"), r(e, "stroke-width", "1"), r(e, "d", "M0 21 L14 0.5 L105 0.5");
    },
    m(i, t) {
      h(i, e, t), o = !0;
    },
    p(i, t) {
      n = i;
    },
    i(i) {
      o || (i && k(() => {
        o && (l && l.end(1), a = O(e, m, {
          duration: (
            /*duration*/
            n[1]
          ),
          delay: (
            /*inDelay*/
            n[0]
          ),
          easing: S
        }), a.start());
      }), o = !0);
    },
    o(i) {
      a && a.invalidate(), i && (l = G(e, m, {
        duration: (
          /*duration*/
          n[1]
        ),
        delay: (
          /*outDelay*/
          n[2]
        ),
        easing: U
      })), o = !1;
    },
    d(i) {
      i && g(e), i && l && l.end();
    }
  };
}
function B(n) {
  let e, a, l, o, i, t = (
    /*unfolded*/
    n[3] && y(n)
  );
  return {
    c() {
      e = s("svg"), a = s("defs"), l = s("linearGradient"), o = s("stop"), i = s("stop"), t && t.c(), r(o, "offset", "25%"), r(o, "stop-color", "white"), r(o, "stop-opacity", "1"), r(i, "offset", "100%"), r(i, "stop-color", "white"), r(i, "stop-opacity", "0.5"), r(
        l,
        "id",
        /*defsID*/
        n[4]
      ), r(l, "gradientUnits", "userSpaceOnUse"), r(e, "class", "line svelte-blgtit"), r(e, "viewBox", "0 0 105 21");
    },
    m(u, f) {
      h(u, e, f), d(e, a), d(a, l), d(l, o), d(l, i), t && t.m(e, null);
    },
    p(u, [f]) {
      /*unfolded*/
      u[3] ? t ? (t.p(u, f), f & /*unfolded*/
      8 && c(t, 1)) : (t = y(u), t.c(), c(t, 1), t.m(e, null)) : t && (I(), _(t, 1, 1, () => {
        t = null;
      }), w());
    },
    i(u) {
      c(t);
    },
    o(u) {
      _(t);
    },
    d(u) {
      u && g(e), t && t.d();
    }
  };
}
function C(n, e, a) {
  let { inDelay: l = 0 } = e, { duration: o = 1e3 } = e, { outDelay: i = 0 } = e, { unfolded: t } = e;
  const u = L();
  return n.$$set = (f) => {
    "inDelay" in f && a(0, l = f.inDelay), "duration" in f && a(1, o = f.duration), "outDelay" in f && a(2, i = f.outDelay), "unfolded" in f && a(3, t = f.unfolded);
  }, [l, o, i, t, u];
}
class A extends p {
  constructor(e) {
    super(), b(
      this,
      e,
      C,
      B,
      v,
      {
        inDelay: 0,
        duration: 1,
        outDelay: 2,
        unfolded: 3
      },
      q
    );
  }
}
export {
  A as default
};
