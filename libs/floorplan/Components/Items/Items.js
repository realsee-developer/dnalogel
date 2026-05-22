import { SvelteComponent as I, init as x, safe_not_equal as z, append_styles as D, empty as b, insert as d, transition_in as _, group_outros as y, transition_out as m, check_outros as v, detach as p, element as q, attr as w, action_destroyer as W, listen as C, update_keyed_each as M, outro_and_destroy_block as N, run_all as O, assign as R, create_component as S, mount_component as j, get_spread_update as A, destroy_component as B } from "../../../vendor/svelte/internal/index.js";
import { Item as E } from "./Item.js";
import { svelteResizeObserver as F } from "../../../shared-utils/svelte/resizeObserver.js";
function G(s) {
  D(s, "svelte-1c5mqz0", ".floorplan-plugin__room-items.svelte-1c5mqz0{width:100%;height:100%;position:absolute;left:0;top:0;z-index:20;pointer-events:none}");
}
function h(s, l, t) {
  const e = s.slice();
  return e[6] = l[t], e;
}
function g(s) {
  let l, t = [], e = /* @__PURE__ */ new Map(), o, f, a, n = (
    /*items*/
    s[1]
  );
  const c = (i) => (
    /*item*/
    i[6].id
  );
  for (let i = 0; i < n.length; i += 1) {
    let r = h(s, n, i), u = c(r);
    e.set(u, t[i] = k(u, r));
  }
  return {
    c() {
      l = q("div");
      for (let i = 0; i < t.length; i += 1)
        t[i].c();
      w(l, "class", "floorplan-plugin__room-items svelte-1c5mqz0");
    },
    m(i, r) {
      d(i, l, r);
      for (let u = 0; u < t.length; u += 1)
        t[u] && t[u].m(l, null);
      o = !0, f || (a = [
        W(F.call(null, l)),
        C(
          l,
          "clientWidth",
          /*clientWidth_handler*/
          s[4]
        )
      ], f = !0);
    },
    p(i, r) {
      r & /*items*/
      2 && (n = /*items*/
      i[1], y(), t = M(t, r, c, 1, i, n, e, l, N, k, null, h), v());
    },
    i(i) {
      if (!o) {
        for (let r = 0; r < n.length; r += 1)
          _(t[r]);
        o = !0;
      }
    },
    o(i) {
      for (let r = 0; r < t.length; r += 1)
        m(t[r]);
      o = !1;
    },
    d(i) {
      i && p(l);
      for (let r = 0; r < t.length; r += 1)
        t[r].d();
      f = !1, O(a);
    }
  };
}
function k(s, l) {
  let t, e, o;
  const f = [{ item: (
    /*item*/
    l[6]
  ) }];
  let a = {};
  for (let n = 0; n < f.length; n += 1)
    a = R(a, f[n]);
  return e = new E({ props: a }), {
    key: s,
    first: null,
    c() {
      t = b(), S(e.$$.fragment), this.first = t;
    },
    m(n, c) {
      d(n, t, c), j(e, n, c), o = !0;
    },
    p(n, c) {
      l = n;
      const i = c & /*items*/
      2 ? A(f, [{ item: (
        /*item*/
        l[6]
      ) }]) : {};
      e.$set(i);
    },
    i(n) {
      o || (_(e.$$.fragment, n), o = !0);
    },
    o(n) {
      m(e.$$.fragment, n), o = !1;
    },
    d(n) {
      n && p(t), B(e, n);
    }
  };
}
function H(s) {
  let l, t, e = (
    /*items*/
    s[1] && g(s)
  );
  return {
    c() {
      e && e.c(), l = b();
    },
    m(o, f) {
      e && e.m(o, f), d(o, l, f), t = !0;
    },
    p(o, [f]) {
      /*items*/
      o[1] ? e ? (e.p(o, f), f & /*items*/
      2 && _(e, 1)) : (e = g(o), e.c(), _(e, 1), e.m(l.parentNode, l)) : e && (y(), m(e, 1, 1, () => {
        e = null;
      }), v());
    },
    i(o) {
      t || (_(e), t = !0);
    },
    o(o) {
      m(e), t = !1;
    },
    d(o) {
      e && e.d(o), o && p(l);
    }
  };
}
function J(s, l, t) {
  let e, { floorIndex: o } = l, { floorplanData: f } = l, a = 0;
  const n = (c) => {
    t(0, a = c.detail);
  };
  return s.$$set = (c) => {
    "floorIndex" in c && t(2, o = c.floorIndex), "floorplanData" in c && t(3, f = c.floorplanData);
  }, s.$$.update = () => {
    if (s.$$.dirty & /*floorplanData, floorIndex*/
    12 && t(1, e = f.floorDatas[o].items), s.$$.dirty & /*floorplanData, clientWidth*/
    9) {
      const { max: c, min: i } = f.bounding;
      c.x - i.x;
    }
  }, [a, e, o, f, n];
}
class Q extends I {
  constructor(l) {
    super(), x(this, l, J, H, z, { floorIndex: 2, floorplanData: 3 }, G);
  }
}
export {
  Q as Items
};
