import { SvelteComponent as T, init as C, safe_not_equal as F, append_styles as Y, space as q, empty as A, insert as p, transition_in as u, transition_out as a, check_outros as h, detach as d, element as z, create_component as H, attr as D, set_style as v, mount_component as U, destroy_component as N, group_outros as y, binding_callbacks as B } from "../../../../vendor/svelte/internal/index.js";
import M from "./FlyText.js";
import j from "../Arrow.js";
import G from "../../../utils/doUtil.js";
import "../../../../vendor/animejs/lib/anime.es.js";
import "../../../../shared-utils/uuid.js";
import "../../../../shared-utils/isNil.js";
import "three";
import "../../../utils/search.js";
import "../../../utils/constants.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
import "../../../Assets/Icon.js";
import "../Shadow.js";
function I(o) {
  Y(o, "svelte-1fuzm7v", ".text.svelte-1fuzm7v{pointer-events:auto;box-sizing:border-box;display:inline-block;max-width:7.5rem;transition:transform 400ms ease-in-out;font-size:0.75rem;line-height:1.125rem;white-space:initial;cursor:pointer}.arrow.svelte-1fuzm7v{pointer-events:auto;display:inline-block;vertical-align:top;width:0.875rem;height:0.875rem;margin-left:0.125rem;margin-top:0.125rem}");
}
function w(o) {
  let r, t, l;
  return t = new M({
    props: {
      unfolded: (
        /*visible*/
        o[0]
      ),
      content: (
        /*content*/
        o[1]
      ),
      inDelay: 500,
      outDelay: (
        /*foldTextDelay*/
        o[5]
      )
    }
  }), {
    c() {
      r = z("div"), H(t.$$.fragment), D(r, "class", "text svelte-1fuzm7v"), v(
        r,
        "transform",
        /*transform*/
        o[7]
      );
    },
    m(e, i) {
      p(e, r, i), U(t, r, null), o[10](r), l = !0;
    },
    p(e, i) {
      const n = {};
      i & /*visible*/
      1 && (n.unfolded = /*visible*/
      e[0]), i & /*content*/
      2 && (n.content = /*content*/
      e[1]), i & /*foldTextDelay*/
      32 && (n.outDelay = /*foldTextDelay*/
      e[5]), t.$set(n), i & /*transform*/
      128 && v(
        r,
        "transform",
        /*transform*/
        e[7]
      );
    },
    i(e) {
      l || (u(t.$$.fragment, e), l = !0);
    },
    o(e) {
      a(t.$$.fragment, e), l = !1;
    },
    d(e) {
      e && d(r), N(t), o[10](null);
    }
  };
}
function k(o) {
  let r, t, l;
  return t = new j({
    props: {
      direction: (
        /*arrowDirection*/
        o[6]
      ),
      visible: (
        /*visible*/
        o[0]
      ),
      inDelay: 600,
      duration: 1e3
    }
  }), {
    c() {
      r = z("div"), H(t.$$.fragment), D(r, "class", "arrow svelte-1fuzm7v");
    },
    m(e, i) {
      p(e, r, i), U(t, r, null), l = !0;
    },
    p(e, i) {
      const n = {};
      i & /*arrowDirection*/
      64 && (n.direction = /*arrowDirection*/
      e[6]), i & /*visible*/
      1 && (n.visible = /*visible*/
      e[0]), t.$set(n);
    },
    i(e) {
      l || (u(t.$$.fragment, e), l = !0);
    },
    o(e) {
      a(t.$$.fragment, e), l = !1;
    },
    d(e) {
      e && d(r), N(t);
    }
  };
}
function J(o) {
  let r, t, l, e = (
    /*content*/
    o[1] && w(o)
  ), i = (
    /*lineHeight*/
    o[3] < /*textHeight*/
    o[4] && k(o)
  );
  return {
    c() {
      e && e.c(), r = q(), i && i.c(), t = A();
    },
    m(n, f) {
      e && e.m(n, f), p(n, r, f), i && i.m(n, f), p(n, t, f), l = !0;
    },
    p(n, [f]) {
      /*content*/
      n[1] ? e ? (e.p(n, f), f & /*content*/
      2 && u(e, 1)) : (e = w(n), e.c(), u(e, 1), e.m(r.parentNode, r)) : e && (y(), a(e, 1, 1, () => {
        e = null;
      }), h()), /*lineHeight*/
      n[3] < /*textHeight*/
      n[4] ? i ? (i.p(n, f), f & /*lineHeight, textHeight*/
      24 && u(i, 1)) : (i = k(n), i.c(), u(i, 1), i.m(t.parentNode, t)) : i && (y(), a(i, 1, 1, () => {
        i = null;
      }), h());
    },
    i(n) {
      l || (u(e), u(i), l = !0);
    },
    o(n) {
      a(e), a(i), l = !1;
    },
    d(n) {
      e && e.d(n), n && d(r), i && i.d(n), n && d(t);
    }
  };
}
function K(o, r, t) {
  let l, e, i, { visible: n = !1 } = r, { textUnfolded: f = !1 } = r, { content: _ } = r, m, g = 0, b = 0, c = 0;
  function S(s) {
    B[s ? "unshift" : "push"](() => {
      m = s, t(2, m);
    });
  }
  return o.$$set = (s) => {
    "visible" in s && t(0, n = s.visible), "textUnfolded" in s && t(8, f = s.textUnfolded), "content" in s && t(1, _ = s.content);
  }, o.$$.update = () => {
    if (o.$$.dirty & /*textElement, visible, content*/
    7 && m && n && _) {
      const { lineHeight: s } = getComputedStyle(m);
      t(4, c = m.offsetHeight), G(() => m == null ? void 0 : m.offsetHeight, Boolean).then(() => {
        t(4, c = m.offsetHeight);
      }), t(3, b = Number(s.replace("px", "")));
    }
    o.$$.dirty & /*textUnfolded, lineHeight, textHeight*/
    280 && t(9, g = f ? b - c : 0), o.$$.dirty & /*translateY*/
    512 && t(7, l = `translateY(${g}px)`), o.$$.dirty & /*textUnfolded*/
    256 && t(6, e = f ? "left" : "right"), o.$$.dirty & /*textUnfolded*/
    256 && t(5, i = f ? 450 : 0);
  }, [
    n,
    _,
    m,
    b,
    c,
    i,
    e,
    l,
    f,
    g,
    S
  ];
}
class ie extends T {
  constructor(r) {
    super(), C(this, r, K, J, F, { visible: 0, textUnfolded: 8, content: 1 }, I);
  }
}
export {
  ie as default
};
