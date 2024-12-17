import { SvelteComponent as v, init as k, safe_not_equal as y, append_styles as x, element as f, attr as _, insert as g, group_outros as C, update_keyed_each as w, outro_and_destroy_block as D, check_outros as I, transition_in as h, transition_out as p, detach as m, createEventDispatcher as P, create_component as b, space as j, mount_component as z, append as A, destroy_component as q } from "../../../../svelte/internal/index.js";
import { Dot as E } from "../Dot/Dot.js";
function M(l) {
  x(l, "svelte-670fde", ".sc-carousel-dots__container.svelte-670fde{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;padding:0 30px}.sc-carousel-dots__dot-container.svelte-670fde{height:calc(var(--sc-dot-size) + 14px);width:calc(var(--sc-dot-size) + 10px);display:flex;align-items:center;justify-content:center}");
}
function u(l, c, n) {
  const r = l.slice();
  return r[5] = c[n], r[7] = n, r;
}
function d(l, c) {
  let n, r, a, o;
  function i() {
    return (
      /*click_handler*/
      c[3](
        /*pageIndex*/
        c[7]
      )
    );
  }
  return r = new E({
    props: {
      active: (
        /*currentPageIndex*/
        c[1] === /*pageIndex*/
        c[7]
      )
    }
  }), r.$on("click", i), {
    key: l,
    first: null,
    c() {
      n = f("div"), b(r.$$.fragment), a = j(), _(n, "class", "sc-carousel-dots__dot-container svelte-670fde"), this.first = n;
    },
    m(t, e) {
      g(t, n, e), z(r, n, null), A(n, a), o = !0;
    },
    p(t, e) {
      c = t;
      const s = {};
      e & /*currentPageIndex, pagesCount*/
      3 && (s.active = /*currentPageIndex*/
      c[1] === /*pageIndex*/
      c[7]), r.$set(s);
    },
    i(t) {
      o || (h(r.$$.fragment, t), o = !0);
    },
    o(t) {
      p(r.$$.fragment, t), o = !1;
    },
    d(t) {
      t && m(n), q(r);
    }
  };
}
function S(l) {
  let c, n = [], r = /* @__PURE__ */ new Map(), a, o = Array(
    /*pagesCount*/
    l[0]
  );
  const i = (t) => (
    /*pageIndex*/
    t[7]
  );
  for (let t = 0; t < o.length; t += 1) {
    let e = u(l, o, t), s = i(e);
    r.set(s, n[t] = d(s, e));
  }
  return {
    c() {
      c = f("div");
      for (let t = 0; t < n.length; t += 1)
        n[t].c();
      _(c, "class", "sc-carousel-dots__container svelte-670fde");
    },
    m(t, e) {
      g(t, c, e);
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(c, null);
      a = !0;
    },
    p(t, [e]) {
      e & /*currentPageIndex, Array, pagesCount, handleDotClick*/
      7 && (o = Array(
        /*pagesCount*/
        t[0]
      ), C(), n = w(n, e, i, 1, t, o, r, c, D, d, null, u), I());
    },
    i(t) {
      if (!a) {
        for (let e = 0; e < o.length; e += 1)
          h(n[e]);
        a = !0;
      }
    },
    o(t) {
      for (let e = 0; e < n.length; e += 1)
        p(n[e]);
      a = !1;
    },
    d(t) {
      t && m(c);
      for (let e = 0; e < n.length; e += 1)
        n[e].d();
    }
  };
}
function B(l, c, n) {
  const r = P();
  let { pagesCount: a = 1 } = c, { currentPageIndex: o = 0 } = c;
  function i(e) {
    r("pageChange", e);
  }
  const t = (e) => i(e);
  return l.$$set = (e) => {
    "pagesCount" in e && n(0, a = e.pagesCount), "currentPageIndex" in e && n(1, o = e.currentPageIndex);
  }, [a, o, i, t];
}
class H extends v {
  constructor(c) {
    super(), k(this, c, B, S, y, { pagesCount: 0, currentPageIndex: 1 }, M);
  }
}
export {
  H as Dots
};
