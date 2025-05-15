import { SvelteComponent as c, init as r, safe_not_equal as a, append_styles as g, element as l, attr as u, insert as d, listen as Q, noop as n, detach as C, is_function as k } from "../../../vendor/svelte/internal/index.js";
function p(e) {
  g(e, "svelte-1m0stw", ".exit.svelte-1m0stw{position:relative;pointer-events:all;cursor:pointer;left:1.5rem;top:1.5rem;width:1.5rem;height:1.5rem;background-image:url(data:image/png;base64,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);background-repeat:no-repeat;background-size:100% 100%}");
}
function B(e) {
  let A, i, o;
  return {
    c() {
      A = l("div"), u(A, "class", "exit svelte-1m0stw");
    },
    m(t, s) {
      d(t, A, s), i || (o = Q(A, "click", function() {
        k(
          /*onClick*/
          e[0]
        ) && e[0].apply(this, arguments);
      }), i = !0);
    },
    p(t, [s]) {
      e = t;
    },
    i: n,
    o: n,
    d(t) {
      t && C(A), i = !1, o();
    }
  };
}
function U(e, A, i) {
  let { onClick: o = null } = A;
  return e.$$set = (t) => {
    "onClick" in t && i(0, o = t.onClick);
  }, [o];
}
class S extends c {
  constructor(A) {
    super(), r(this, A, U, B, a, { onClick: 0 }, p);
  }
}
export {
  S as default
};
