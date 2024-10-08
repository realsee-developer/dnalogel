import { SvelteComponent as p, init as D, safe_not_equal as A, append_styles as I, empty as R, insert as y, transition_in as d, transition_out as _, check_outros as S, detach as k, element as v, create_component as z, space as C, attr as c, set_style as N, mount_component as O, append as q, listen as j, add_render_callback as B, create_in_transition as E, create_out_transition as F, destroy_component as G, group_outros as H, bubble as J } from "../../../vendor/svelte/internal/index.js";
import { fade as w } from "../../../vendor/svelte/transition/index.js";
import { Image_Arrow as K } from "../../Assets/Icon.js";
import { cubicInOut as b } from "../../../vendor/svelte/easing/index.js";
import L from "./Shadow.js";
function M(i) {
  I(i, "svelte-1ogmlqq", ".arrow.svelte-1ogmlqq{width:100%;height:100%;background-size:100%;transition:transform 400ms ease-in-out;cursor:pointer;pointer-events:auto}.arrow-wrapper.svelte-1ogmlqq{position:relative;width:100%;height:100%}.arrow.left.svelte-1ogmlqq{transform:rotate(0deg)}.arrow.right.svelte-1ogmlqq{transform:rotate(-180deg)}.arrow.top.svelte-1ogmlqq{transform:rotate(90deg)}.arrow.bottom.svelte-1ogmlqq{transform:rotate(-90deg)}");
}
function h(i) {
  let r, o, e, t, l, f, s, u, n, g;
  return o = new L({
    props: {
      center: !0,
      blurRadius: 9,
      spreadRadius: 3
    }
  }), {
    c() {
      r = v("div"), z(o.$$.fragment), e = C(), t = v("div"), c(t, "class", l = "arrow " + /*direction*/
      i[0] + " svelte-1ogmlqq"), N(t, "background-image", "url(" + K + ")"), c(r, "class", "arrow-wrapper svelte-1ogmlqq");
    },
    m(a, m) {
      y(a, r, m), O(o, r, null), q(r, e), q(r, t), u = !0, n || (g = j(
        t,
        "click",
        /*click_handler*/
        i[5]
      ), n = !0);
    },
    p(a, m) {
      i = a, (!u || m & /*direction*/
      1 && l !== (l = "arrow " + /*direction*/
      i[0] + " svelte-1ogmlqq")) && c(t, "class", l);
    },
    i(a) {
      u || (d(o.$$.fragment, a), a && B(() => {
        u && (s && s.end(1), f = E(t, w, {
          duration: (
            /*duration*/
            i[2]
          ),
          delay: (
            /*inDelay*/
            i[3]
          ),
          easing: b
        }), f.start());
      }), u = !0);
    },
    o(a) {
      _(o.$$.fragment, a), f && f.invalidate(), a && (s = F(t, w, {
        duration: (
          /*duration*/
          i[2]
        ),
        delay: (
          /*outDelay*/
          i[4]
        ),
        easing: b
      })), u = !1;
    },
    d(a) {
      a && k(r), G(o), a && s && s.end(), n = !1, g();
    }
  };
}
function P(i) {
  let r, o, e = (
    /*visible*/
    i[1] && h(i)
  );
  return {
    c() {
      e && e.c(), r = R();
    },
    m(t, l) {
      e && e.m(t, l), y(t, r, l), o = !0;
    },
    p(t, [l]) {
      /*visible*/
      t[1] ? e ? (e.p(t, l), l & /*visible*/
      2 && d(e, 1)) : (e = h(t), e.c(), d(e, 1), e.m(r.parentNode, r)) : e && (H(), _(e, 1, 1, () => {
        e = null;
      }), S());
    },
    i(t) {
      o || (d(e), o = !0);
    },
    o(t) {
      _(e), o = !1;
    },
    d(t) {
      e && e.d(t), t && k(r);
    }
  };
}
function Q(i, r, o) {
  let { direction: e = "right" } = r, { visible: t = !0 } = r, { duration: l = 0 } = r, { inDelay: f = 0 } = r, { outDelay: s = 0 } = r;
  function u(n) {
    J.call(this, i, n);
  }
  return i.$$set = (n) => {
    "direction" in n && o(0, e = n.direction), "visible" in n && o(1, t = n.visible), "duration" in n && o(2, l = n.duration), "inDelay" in n && o(3, f = n.inDelay), "outDelay" in n && o(4, s = n.outDelay);
  }, [e, t, l, f, s, u];
}
class Y extends p {
  constructor(r) {
    super(), D(
      this,
      r,
      Q,
      P,
      A,
      {
        direction: 0,
        visible: 1,
        duration: 2,
        inDelay: 3,
        outDelay: 4
      },
      M
    );
  }
}
export {
  Y as default
};
