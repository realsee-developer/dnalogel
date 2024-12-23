import { SvelteComponent as j, init as b, safe_not_equal as $, append_styles as z, element as p, create_component as _, space as w, attr as u, insert as v, mount_component as x, append as f, transition_in as c, transition_out as m, check_outros as L, detach as k, destroy_component as y, text as D, set_data as R, group_outros as S } from "../../../vendor/svelte/internal/index.js";
import q from "../Common/Shadow.js";
import C from "../Common/Icon/Icon.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "three";
import "../../utils/noTypecheck.js";
import "../../utils/getImageInfo.js";
import "../../utils/px2rem.js";
function I(r) {
  z(r, "svelte-e58ijk", ".wrapper.svelte-e58ijk{font-weight:600;cursor:pointer;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);display:flex;align-items:center;justify-content:center;flex-direction:column;pointer-events:auto}.text-wrapper.svelte-e58ijk{position:relative;display:flex;align-items:center;justify-content:center}.text.svelte-e58ijk{position:absolute;top:0;font-size:0.875rem;color:#ffffff;letter-spacing:0;text-align:center;max-width:8.75rem;width:-moz-max-content;width:max-content;line-height:1.125rem;text-shadow:0.125rem 0rem 0.5rem rgba(0, 0, 0, 0.15)}");
}
function h(r) {
  let i, n, l, a, e, t;
  return n = new q({
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
      i = p("div"), _(n.$$.fragment), l = w(), a = p("div"), e = D(
        /*title*/
        r[1]
      ), u(a, "class", "text svelte-e58ijk"), u(i, "class", "text-wrapper svelte-e58ijk");
    },
    m(o, s) {
      v(o, i, s), x(n, i, null), f(i, l), f(i, a), f(a, e), t = !0;
    },
    p(o, s) {
      (!t || s & /*title*/
      2) && R(
        e,
        /*title*/
        o[1]
      );
    },
    i(o) {
      t || (c(n.$$.fragment, o), t = !0);
    },
    o(o) {
      m(n.$$.fragment, o), t = !1;
    },
    d(o) {
      o && k(i), y(n);
    }
  };
}
function T(r) {
  let i, n, l, a;
  n = new C({
    props: { icon: (
      /*icon*/
      r[0]
    ), shadow: !0 }
  }), n.$on(
    "iconLoaded",
    /*iconLoaded_handler*/
    r[4]
  );
  let e = (
    /*title*/
    r[1] && /*iconLoaded*/
    r[2] && h(r)
  );
  return {
    c() {
      i = p("div"), _(n.$$.fragment), l = w(), e && e.c(), u(i, "class", "wrapper svelte-e58ijk");
    },
    m(t, o) {
      v(t, i, o), x(n, i, null), f(i, l), e && e.m(i, null), a = !0;
    },
    p(t, [o]) {
      const s = {};
      o & /*icon*/
      1 && (s.icon = /*icon*/
      t[0]), n.$set(s), /*title*/
      t[1] && /*iconLoaded*/
      t[2] ? e ? (e.p(t, o), o & /*title, iconLoaded*/
      6 && c(e, 1)) : (e = h(t), e.c(), c(e, 1), e.m(i, null)) : e && (S(), m(e, 1, 1, () => {
        e = null;
      }), L());
    },
    i(t) {
      a || (c(n.$$.fragment, t), c(e), a = !0);
    },
    o(t) {
      m(n.$$.fragment, t), m(e), a = !1;
    },
    d(t) {
      t && k(i), y(n), e && e.d();
    }
  };
}
function A(r, i, n) {
  let l, a, e, { tag: t } = i;
  const o = () => {
    n(2, l = !0);
  };
  return r.$$set = (s) => {
    "tag" in s && n(3, t = s.tag);
  }, r.$$.update = () => {
    var s, d, g;
    r.$$.dirty & /*tag*/
    8 && n(1, a = (s = t.data.title) != null ? s : t.data.text), r.$$.dirty & /*tag*/
    8 && n(0, e = (g = t.data.icon) != null ? g : (d = t.style) == null ? void 0 : d.point);
  }, n(2, l = !1), [e, a, l, t, o];
}
class O extends j {
  constructor(i) {
    super(), b(this, i, A, T, $, { tag: 3 }, I);
  }
}
export {
  O as default
};
