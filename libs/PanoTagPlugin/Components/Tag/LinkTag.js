import { SvelteComponent as A, init as C, safe_not_equal as E, append_styles as G, element as d, create_component as D, space as L, attr as g, insert as T, mount_component as I, append as m, transition_in as f, transition_out as u, check_outros as N, detach as R, destroy_component as S, text as P, set_style as v, set_data as X, group_outros as B } from "../../../vendor/svelte/internal/index.js";
import F from "../Common/Shadow.js";
import H from "../Common/Icon/Icon.js";
import J from "../../utils/px2rem.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "three";
import "../../utils/noTypecheck.js";
import "../../utils/getImageInfo.js";
function K(n) {
  G(n, "svelte-e58ijk", ".wrapper.svelte-e58ijk{font-weight:600;cursor:pointer;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);display:flex;align-items:center;justify-content:center;flex-direction:column;pointer-events:auto}.text-wrapper.svelte-e58ijk{position:relative;display:flex;align-items:center;justify-content:center}.text.svelte-e58ijk{position:absolute;top:0;font-size:0.875rem;color:#ffffff;letter-spacing:0;text-align:center;max-width:8.75rem;width:-moz-max-content;width:max-content;line-height:1.125rem;text-shadow:0.125rem 0rem 0.5rem rgba(0, 0, 0, 0.15)}");
}
function z(n) {
  let i, e, l, a, t, o;
  return e = new F({
    props: {
      outDelay: 0,
      inDelay: 0,
      center: !0,
      width: "80%",
      blurRadius: 40,
      spreadRadius: 16,
      opacity: 0.08
    }
  }), {
    c() {
      i = d("div"), D(e.$$.fragment), l = L(), a = d("div"), t = P(
        /*title*/
        n[2]
      ), g(a, "class", "text svelte-e58ijk"), v(
        a,
        "top",
        /*textTop*/
        n[1]
      ), g(i, "class", "text-wrapper svelte-e58ijk");
    },
    m(r, s) {
      T(r, i, s), I(e, i, null), m(i, l), m(i, a), m(a, t), o = !0;
    },
    p(r, s) {
      (!o || s & /*title*/
      4) && X(
        t,
        /*title*/
        r[2]
      ), s & /*textTop*/
      2 && v(
        a,
        "top",
        /*textTop*/
        r[1]
      );
    },
    i(r) {
      o || (f(e.$$.fragment, r), o = !0);
    },
    o(r) {
      u(e.$$.fragment, r), o = !1;
    },
    d(r) {
      r && R(i), S(e);
    }
  };
}
function M(n) {
  let i, e, l, a;
  e = new H({
    props: { icon: (
      /*icon*/
      n[0]
    ), shadow: !0 }
  }), e.$on(
    "iconLoaded",
    /*iconLoaded_handler*/
    n[8]
  );
  let t = (
    /*title*/
    n[2] && /*iconLoaded*/
    n[3] && z(n)
  );
  return {
    c() {
      i = d("div"), D(e.$$.fragment), l = L(), t && t.c(), g(i, "class", "wrapper svelte-e58ijk");
    },
    m(o, r) {
      T(o, i, r), I(e, i, null), m(i, l), t && t.m(i, null), a = !0;
    },
    p(o, [r]) {
      const s = {};
      r & /*icon*/
      1 && (s.icon = /*icon*/
      o[0]), e.$set(s), /*title*/
      o[2] && /*iconLoaded*/
      o[3] ? t ? (t.p(o, r), r & /*title, iconLoaded*/
      12 && f(t, 1)) : (t = z(o), t.c(), f(t, 1), t.m(i, null)) : t && (B(), u(t, 1, 1, () => {
        t = null;
      }), N());
    },
    i(o) {
      a || (f(e.$$.fragment, o), f(t), a = !0);
    },
    o(o) {
      u(e.$$.fragment, o), u(t), a = !1;
    },
    d(o) {
      o && R(i), S(e), t && t.d();
    }
  };
}
const O = 4;
function Q(n, i, e) {
  let l, a, t, o, r, s, h, { tag: c } = i;
  const q = () => {
    e(3, l = !0);
  };
  return n.$$set = (p) => {
    "tag" in p && e(4, c = p.tag);
  }, n.$$.update = () => {
    var p, _, w, y, x, k, b, j;
    n.$$.dirty & /*tag*/
    16 && e(2, a = (p = c.data.title) != null ? p : c.data.text), n.$$.dirty & /*tag*/
    16 && e(0, t = (w = c.data.icon) != null ? w : (_ = c.style) == null ? void 0 : _.point), n.$$.dirty & /*tag*/
    16 && e(6, o = (x = (y = c.style) == null ? void 0 : y.point) == null ? void 0 : x.width), n.$$.dirty & /*tag*/
    16 && e(5, r = (j = (b = (k = c.style) == null ? void 0 : k.point) == null ? void 0 : b.scale) != null ? j : 1), n.$$.dirty & /*icon*/
    1 && e(7, s = t == null ? void 0 : t.bgcolor), n.$$.dirty & /*bgcolor, width, scale*/
    224 && e(1, h = s && o && typeof o == "number" ? J(o * 0.414 * r / 2 + O) : 0);
  }, e(3, l = !1), [
    t,
    h,
    a,
    l,
    c,
    r,
    o,
    s,
    q
  ];
}
class nt extends A {
  constructor(i) {
    super(), C(this, i, Q, M, E, { tag: 4 }, K);
  }
}
export {
  nt as default
};
