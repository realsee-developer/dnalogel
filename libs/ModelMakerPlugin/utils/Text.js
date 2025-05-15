import { SvelteComponent as r, init as m, safe_not_equal as d, append_styles as c, empty as p, insert as a, noop as f, detach as s, element as x, text as u, attr as _, append as b, set_data as v } from "../../vendor/svelte/internal/index.js";
function h(i) {
  c(i, "svelte-1q9fx3x", ".model-maker-tag.svelte-1q9fx3x{position:absolute;width:-moz-max-content;width:max-content;left:50%;top:50%;transform:translate(-50%, -50%);color:#fff;font-size:0.875rem;font-weight:bold;text-shadow:0.125rem 0 0.5rem rgba(0, 0, 0, 0.15)}");
}
function l(i) {
  let n, t;
  return {
    c() {
      n = x("div"), t = u(
        /*text*/
        i[0]
      ), _(n, "class", "model-maker-tag svelte-1q9fx3x");
    },
    m(e, o) {
      a(e, n, o), b(n, t);
    },
    p(e, o) {
      o & /*text*/
      1 && v(
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
function k(i) {
  let n, t = (
    /*text*/
    i[0] && l(i)
  );
  return {
    c() {
      t && t.c(), n = p();
    },
    m(e, o) {
      t && t.m(e, o), a(e, n, o);
    },
    p(e, [o]) {
      /*text*/
      e[0] ? t ? t.p(e, o) : (t = l(e), t.c(), t.m(n.parentNode, n)) : t && (t.d(1), t = null);
    },
    i: f,
    o: f,
    d(e) {
      t && t.d(e), e && s(n);
    }
  };
}
function q(i, n, t) {
  let { text: e } = n;
  return i.$$set = (o) => {
    "text" in o && t(0, e = o.text);
  }, [e];
}
class g extends r {
  constructor(n) {
    super(), m(this, n, q, k, d, { text: 0 }, h);
  }
}
export {
  g as default
};
