import { SvelteComponent as G, init as U, safe_not_equal as q, append_styles as A, empty as H, insert as y, noop as j, detach as w, element as I, svg_element as m, attr as l, toggle_class as g, set_style as v, append as h, transition_in as p, group_outros as M, transition_out as N, check_outros as O, add_render_callback as R, create_in_transition as V, identity as C, create_out_transition as E } from "../../../../vendor/svelte/internal/index.js";
import { draw as z } from "../../../../vendor/svelte/transition/index.js";
import { uuid as F } from "../../../../shared-utils/uuid.js";
import "../../../../vendor/svelte/easing/index.js";
function J(t) {
  A(t, "svelte-xuejcm", ".line.svelte-xuejcm{position:absolute;pointer-events:none}.line.vertical.svelte-xuejcm{transform:rotate(-90deg) translate3d(0.03125rem, 0, 0.625rem);transform-origin:0 0}.line.horizontal.svelte-xuejcm{transform:translate3d(0, -0.03125rem, 0.625rem)}.straight-line.svelte-xuejcm{display:block;width:100%;height:100%;overflow:visible}");
}
function L(t) {
  let e, i, o, n, s, r, _, f = (
    /*unfolded*/
    t[3] && B(t)
  );
  return {
    c() {
      e = I("div"), i = m("svg"), o = m("defs"), n = m("linearGradient"), s = m("stop"), r = m("stop"), f && f.c(), l(s, "offset", "25%"), l(
        s,
        "stop-color",
        /*color*/
        t[5]
      ), l(s, "stop-opacity", "1"), l(r, "offset", "100%"), l(
        r,
        "stop-color",
        /*color*/
        t[5]
      ), l(r, "stop-opacity", "0.5"), l(n, "x1", 0.5), l(n, "y1", 0.5), l(
        n,
        "x2",
        /*width*/
        t[8]
      ), l(n, "y2", 0.5), l(
        n,
        "id",
        /*defsID*/
        t[10]
      ), l(n, "gradientUnits", "userSpaceOnUse"), l(i, "class", "straight-line svelte-xuejcm"), l(i, "viewBox", _ = "0 0 " + /*width*/
      t[8] + " " + /*height*/
      t[7]), l(i, "preserveAspectRatio", "none"), l(e, "class", "line svelte-xuejcm"), g(
        e,
        "vertical",
        /*isVertical*/
        t[9]
      ), g(e, "horizontal", !/*isVertical*/
      t[9]), v(
        e,
        "width",
        /*width*/
        t[8] + "px"
      ), v(
        e,
        "height",
        /*height*/
        t[7] + "px"
      );
    },
    m(a, d) {
      y(a, e, d), h(e, i), h(i, o), h(o, n), h(n, s), h(n, r), f && f.m(i, null);
    },
    p(a, d) {
      d & /*color*/
      32 && l(
        s,
        "stop-color",
        /*color*/
        a[5]
      ), d & /*color*/
      32 && l(
        r,
        "stop-color",
        /*color*/
        a[5]
      ), d & /*width*/
      256 && l(
        n,
        "x2",
        /*width*/
        a[8]
      ), /*unfolded*/
      a[3] ? f ? (f.p(a, d), d & /*unfolded*/
      8 && p(f, 1)) : (f = B(a), f.c(), p(f, 1), f.m(i, null)) : f && (M(), N(f, 1, 1, () => {
        f = null;
      }), O()), d & /*width, height*/
      384 && _ !== (_ = "0 0 " + /*width*/
      a[8] + " " + /*height*/
      a[7]) && l(i, "viewBox", _), d & /*isVertical*/
      512 && g(
        e,
        "vertical",
        /*isVertical*/
        a[9]
      ), d & /*isVertical*/
      512 && g(e, "horizontal", !/*isVertical*/
      a[9]), d & /*width*/
      256 && v(
        e,
        "width",
        /*width*/
        a[8] + "px"
      ), d & /*height*/
      128 && v(
        e,
        "height",
        /*height*/
        a[7] + "px"
      );
    },
    d(a) {
      a && w(e), f && f.d();
    }
  };
}
function B(t) {
  let e, i, o, n, s;
  return {
    c() {
      e = m("path"), l(e, "fill", "none"), l(e, "stroke", i = /*useLinearColor*/
      t[4] ? `url(#${/*defsID*/
      t[10]})` : (
        /*color*/
        t[5]
      )), l(e, "stroke-width", 1), l(
        e,
        "d",
        /*path*/
        t[6]
      );
    },
    m(r, _) {
      y(r, e, _), s = !0;
    },
    p(r, _) {
      t = r, (!s || _ & /*useLinearColor, color*/
      48 && i !== (i = /*useLinearColor*/
      t[4] ? `url(#${/*defsID*/
      t[10]})` : (
        /*color*/
        t[5]
      ))) && l(e, "stroke", i), (!s || _ & /*path*/
      64) && l(
        e,
        "d",
        /*path*/
        t[6]
      );
    },
    i(r) {
      s || (r && R(() => {
        s && (n && n.end(1), o = V(e, z, {
          duration: (
            /*duration*/
            t[2]
          ),
          delay: (
            /*inDelay*/
            t[0]
          ),
          easing: C
        }), o.start());
      }), s = !0);
    },
    o(r) {
      o && o.invalidate(), r && (n = E(e, z, {
        duration: (
          /*duration*/
          t[2]
        ),
        delay: (
          /*outDelay*/
          t[1]
        ),
        easing: C
      })), s = !1;
    },
    d(r) {
      r && w(e), r && n && n.end();
    }
  };
}
function K(t) {
  let e, i = (
    /*width*/
    t[8] && L(t)
  );
  return {
    c() {
      i && i.c(), e = H();
    },
    m(o, n) {
      i && i.m(o, n), y(o, e, n);
    },
    p(o, [n]) {
      /*width*/
      o[8] ? i ? i.p(o, n) : (i = L(o), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null);
    },
    i: j,
    o: j,
    d(o) {
      i && i.d(o), o && w(e);
    }
  };
}
function P(t, e, i) {
  let o, n, s, r, { inDelay: _ = 0 } = e, { outDelay: f = 0 } = e, { duration: a = 1e3 } = e, { unfolded: d } = e, { length: c } = e, { direction: k = "horizontal" } = e, { useLinearColor: b = !1 } = e, { color: D = "white" } = e;
  const S = F();
  return t.$$set = (u) => {
    "inDelay" in u && i(0, _ = u.inDelay), "outDelay" in u && i(1, f = u.outDelay), "duration" in u && i(2, a = u.duration), "unfolded" in u && i(3, d = u.unfolded), "length" in u && i(11, c = u.length), "direction" in u && i(12, k = u.direction), "useLinearColor" in u && i(4, b = u.useLinearColor), "color" in u && i(5, D = u.color);
  }, t.$$.update = () => {
    t.$$.dirty & /*direction*/
    4096 && i(9, o = k === "vertical"), t.$$.dirty & /*length*/
    2048 && i(8, n = c), t.$$.dirty & /*length*/
    2048 && i(6, r = `M0.5 0.5 H ${c}`);
  }, i(7, s = 1), [
    _,
    f,
    a,
    d,
    b,
    D,
    r,
    s,
    n,
    o,
    S,
    c,
    k
  ];
}
class Y extends G {
  constructor(e) {
    super(), U(
      this,
      e,
      P,
      K,
      q,
      {
        inDelay: 0,
        outDelay: 1,
        duration: 2,
        unfolded: 3,
        length: 11,
        direction: 12,
        useLinearColor: 4,
        color: 5
      },
      J
    );
  }
}
export {
  Y as default
};
