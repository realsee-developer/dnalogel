import { SvelteComponent as R, init as S, safe_not_equal as W, append_styles as C, empty as q, insert as v, transition_in as c, transition_out as b, check_outros as F, detach as y, create_component as T, space as U, element as I, attr as L, mount_component as k, action_destroyer as N, listen as D, destroy_component as $, run_all as O, group_outros as j } from "../../../../vendor/svelte/internal/index.js";
import A from "../../Common/Line/Straight.js";
import B from "../../Common/Shadow.js";
import E from "../../Common/Text/FlyMText.js";
import { svelteResizeObserver as G } from "../../../../shared-utils/svelte/resizeObserver.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
import "../../../../shared-utils/uuid.js";
import "../../Common/Text/FlyText.js";
import "../../../../vendor/animejs/lib/anime.es.js";
import "../../../../shared-utils/isNil.js";
import "three";
import "../../../utils/search.js";
import "../../../utils/constants.js";
import "../../Common/Arrow.js";
import "../../../Assets/Icon.js";
import "../../../utils/doUtil.js";
import "../../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
function H(n) {
  C(n, "svelte-5hip41", ".content.svelte-5hip41{--height:62.4375rem;width:-moz-max-content;width:max-content;height:var(--height);padding:calc(var(--height) - 1.125rem) 0.25rem 0 1rem;position:absolute;left:0;bottom:0;overflow:hidden;box-sizing:border-box;font-size:0;pointer-events:none;white-space:nowrap;font-weight:600}");
}
function M(n) {
  var u, w;
  let l, r, e, o, i, m, a, p, g;
  return l = new B({
    props: {
      visible: (
        /*unfolded*/
        n[2]
      ),
      left: (
        /*contentWidth*/
        n[3] / 2 + "px"
      ),
      bottom: 12,
      width: 2,
      blurRadius: 120,
      spreadRadius: 60
    }
  }), e = new A({
    props: {
      unfolded: (
        /*unfolded*/
        n[2]
      ),
      length: (
        /*contentWidth*/
        n[3]
      ),
      outDelay: (
        /*foldTextDelay*/
        n[4] + 40 * Math.min(
          /*textItems*/
          (w = (u = n[6][0]) == null ? void 0 : u.content.length) != null ? w : 10,
          15
        )
      ),
      useLinearColor: !0
    }
  }), m = new E({
    props: {
      visible: (
        /*unfolded*/
        n[2]
      ),
      textUnfolded: (
        /*textUnfolded*/
        n[1]
      ),
      content: (
        /*content*/
        n[5]
      )
    }
  }), {
    c() {
      T(l.$$.fragment), r = U(), T(e.$$.fragment), o = U(), i = I("div"), T(m.$$.fragment), L(i, "class", "content svelte-5hip41");
    },
    m(t, f) {
      k(l, t, f), v(t, r, f), k(e, t, f), v(t, o, f), v(t, i, f), k(m, i, null), a = !0, p || (g = [
        N(G.call(null, i)),
        D(
          i,
          "clientWidth",
          /*clientWidth_handler*/
          n[10]
        ),
        D(
          i,
          "click",
          /*toggleTextUnfolded*/
          n[7]
        )
      ], p = !0);
    },
    p(t, f) {
      var _, z;
      const s = {};
      f & /*unfolded*/
      4 && (s.visible = /*unfolded*/
      t[2]), f & /*contentWidth*/
      8 && (s.left = /*contentWidth*/
      t[3] / 2 + "px"), l.$set(s);
      const d = {};
      f & /*unfolded*/
      4 && (d.unfolded = /*unfolded*/
      t[2]), f & /*contentWidth*/
      8 && (d.length = /*contentWidth*/
      t[3]), f & /*foldTextDelay*/
      16 && (d.outDelay = /*foldTextDelay*/
      t[4] + 40 * Math.min(
        /*textItems*/
        (z = (_ = t[6][0]) == null ? void 0 : _.content.length) != null ? z : 10,
        15
      )), e.$set(d);
      const h = {};
      f & /*unfolded*/
      4 && (h.visible = /*unfolded*/
      t[2]), f & /*textUnfolded*/
      2 && (h.textUnfolded = /*textUnfolded*/
      t[1]), f & /*content*/
      32 && (h.content = /*content*/
      t[5]), m.$set(h);
    },
    i(t) {
      a || (c(l.$$.fragment, t), c(e.$$.fragment, t), c(m.$$.fragment, t), a = !0);
    },
    o(t) {
      b(l.$$.fragment, t), b(e.$$.fragment, t), b(m.$$.fragment, t), a = !1;
    },
    d(t) {
      $(l, t), t && y(r), $(e, t), t && y(o), t && y(i), $(m), p = !1, O(g);
    }
  };
}
function J(n) {
  let l, r, e = (
    /*tag*/
    n[0].state && M(n)
  );
  return {
    c() {
      e && e.c(), l = q();
    },
    m(o, i) {
      e && e.m(o, i), v(o, l, i), r = !0;
    },
    p(o, [i]) {
      /*tag*/
      o[0].state ? e ? (e.p(o, i), i & /*tag*/
      1 && c(e, 1)) : (e = M(o), e.c(), c(e, 1), e.m(l.parentNode, l)) : e && (j(), b(e, 1, 1, () => {
        e = null;
      }), F());
    },
    i(o) {
      r || (c(e), r = !0);
    },
    o(o) {
      b(e), r = !1;
    },
    d(o) {
      e && e.d(o), o && y(l);
    }
  };
}
function K(n, l, r) {
  let e, o, i, m, a, { tag: p } = l, g, u = !1, w = [];
  function t() {
    r(1, u = !u);
  }
  const f = (s) => {
    r(3, g = s.detail);
  };
  return n.$$set = (s) => {
    "tag" in s && r(0, p = s.tag);
  }, n.$$.update = () => {
    var s, d, h, _;
    n.$$.dirty & /*tag*/
    1 && r(2, e = !!((s = p.state) != null && s.unfolded)), n.$$.dirty & /*tag*/
    1 && r(9, o = (h = (d = p.data.title) != null ? d : p.data.text) != null ? h : ""), n.$$.dirty & /*tag*/
    1 && r(8, i = (_ = p.data.description) != null ? _ : ""), n.$$.dirty & /*title, description*/
    768 && r(5, m = (() => {
      if (o && i)
        return o + `
` + i;
      if (o)
        return o;
      if (i)
        return i;
    })()), n.$$.dirty & /*unfolded*/
    4 && (e || setTimeout(
      () => {
        r(1, u = !1);
      },
      20
    )), n.$$.dirty & /*textUnfolded*/
    2 && r(4, a = u ? 450 : 0);
  }, [
    p,
    u,
    e,
    g,
    a,
    m,
    w,
    t,
    i,
    o,
    f
  ];
}
class ut extends R {
  constructor(l) {
    super(), S(this, l, K, J, W, { tag: 0 }, H);
  }
}
export {
  ut as default
};
