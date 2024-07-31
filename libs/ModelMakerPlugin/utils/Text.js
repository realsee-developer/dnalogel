import { SvelteComponent as r, init as m, safe_not_equal as c, append_styles as d, empty as p, insert as l, noop as o, detach as s, element as u, text as _, attr as w, append as x, set_data as b } from "../../vendor/svelte/internal/index.js";
function h(a) {
  d(a, "svelte-129wfaa", ".withAnimation{transition:opacity 0.2s linear}.model-maker-tag.svelte-129wfaa{position:absolute;width:-moz-max-content;width:max-content;left:50%;top:50%;transform:translate(-50%, -50%);color:#fff;font-size:0.875rem;font-weight:bold;text-shadow:0.125rem 0 0.5rem rgba(0, 0, 0, 0.15)}");
}
function f(a) {
  let n, t;
  return {
    c() {
      n = u("div"), t = _(
        /*text*/
        a[0]
      ), w(n, "class", "model-maker-tag svelte-129wfaa");
    },
    m(e, i) {
      l(e, n, i), x(n, t);
    },
    p(e, i) {
      i & /*text*/
      1 && b(
        t,
        /*text*/
        e[0]
      );
    },
    d(e) {
      e && s(n);
    }
  };
}
function v(a) {
  let n, t = (
    /*text*/
    a[0] && f(a)
  );
  return {
    c() {
      t && t.c(), n = p();
    },
    m(e, i) {
      t && t.m(e, i), l(e, n, i);
    },
    p(e, [i]) {
      /*text*/
      e[0] ? t ? t.p(e, i) : (t = f(e), t.c(), t.m(n.parentNode, n)) : t && (t.d(1), t = null);
    },
    i: o,
    o,
    d(e) {
      t && t.d(e), e && s(n);
    }
  };
}
function k(a, n, t) {
  let { text: e } = n;
  return a.$$set = (i) => {
    "text" in i && t(0, e = i.text);
  }, [e];
}
class y extends r {
  constructor(n) {
    super(), m(this, n, k, v, c, { text: 0 }, h);
  }
}
export {
  y as default
};
