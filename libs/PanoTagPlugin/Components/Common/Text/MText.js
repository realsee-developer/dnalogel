import { SvelteComponent as x, init as g, safe_not_equal as L, append_styles as W, element as k, attr as h, set_style as d, insert as u, transition_out as p, check_outros as N, transition_in as b, detach as _, group_outros as q, create_slot as C, update_slot_base as E, get_all_dirty_from_scope as M, get_slot_changes as S, space as T, empty as A, noop as m, text as z, set_data as j, append as B } from "../../../../vendor/svelte/internal/index.js";
import y from "../../../utils/px2rem.js";
function D(o) {
  W(o, "svelte-1j0cz4o", '.text.svelte-1j0cz4o{display:-webkit-box;display:-ms-box;display:-moz-box;position:relative;width:-moz-max-content;width:max-content;max-width:100%;-webkit-box-orient:vertical;-ms-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}@keyframes svelte-1j0cz4o-blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}.caret.svelte-1j0cz4o{position:absolute;width:0.0625rem;height:100%;background-color:#fff;animation:svelte-1j0cz4o-blink 1.2s infinite}.placeholder.svelte-1j0cz4o{opacity:0.5}.placeholder.svelte-1j0cz4o:empty::after{content:" "}');
}
function F(o) {
  let t;
  const l = (
    /*#slots*/
    o[6].default
  ), e = C(
    l,
    o,
    /*$$scope*/
    o[5],
    null
  );
  return {
    c() {
      e && e.c();
    },
    m(i, s) {
      e && e.m(i, s), t = !0;
    },
    p(i, s) {
      e && e.p && (!t || s & /*$$scope*/
      32) && E(
        e,
        l,
        i,
        /*$$scope*/
        i[5],
        t ? S(
          l,
          /*$$scope*/
          i[5],
          s,
          null
        ) : M(
          /*$$scope*/
          i[5]
        ),
        null
      );
    },
    i(i) {
      t || (b(e, i), t = !0);
    },
    o(i) {
      p(e, i), t = !1;
    },
    d(i) {
      e && e.d(i);
    }
  };
}
function G(o) {
  var s, a;
  let t, l, e = (
    /*edit*/
    ((s = o[3]) == null ? void 0 : s.inputting) && v()
  ), i = typeof /*edit*/
  ((a = o[3]) == null ? void 0 : a.placeholder) == "string" && w(o);
  return {
    c() {
      e && e.c(), t = T(), i && i.c(), l = A();
    },
    m(f, n) {
      e && e.m(f, n), u(f, t, n), i && i.m(f, n), u(f, l, n);
    },
    p(f, n) {
      var c, r;
      /*edit*/
      (c = f[3]) != null && c.inputting ? e || (e = v(), e.c(), e.m(t.parentNode, t)) : e && (e.d(1), e = null), typeof /*edit*/
      ((r = f[3]) == null ? void 0 : r.placeholder) == "string" ? i ? i.p(f, n) : (i = w(f), i.c(), i.m(l.parentNode, l)) : i && (i.d(1), i = null);
    },
    i: m,
    o: m,
    d(f) {
      e && e.d(f), f && _(t), i && i.d(f), f && _(l);
    }
  };
}
function H(o) {
  let t;
  return {
    c() {
      t = z(
        /*text*/
        o[2]
      );
    },
    m(l, e) {
      u(l, t, e);
    },
    p(l, e) {
      e & /*text*/
      4 && j(
        t,
        /*text*/
        l[2]
      );
    },
    i: m,
    o: m,
    d(l) {
      l && _(t);
    }
  };
}
function v(o) {
  let t;
  return {
    c() {
      t = k("div"), h(t, "class", "caret svelte-1j0cz4o");
    },
    m(l, e) {
      u(l, t, e);
    },
    d(l) {
      l && _(t);
    }
  };
}
function w(o) {
  let t, l = (
    /*edit*/
    o[3].placeholder + ""
  ), e;
  return {
    c() {
      t = k("span"), e = z(l), h(t, "class", "placeholder svelte-1j0cz4o");
    },
    m(i, s) {
      u(i, t, s), B(t, e);
    },
    p(i, s) {
      s & /*edit*/
      8 && l !== (l = /*edit*/
      i[3].placeholder + "") && j(e, l);
    },
    d(i) {
      i && _(t);
    }
  };
}
function I(o) {
  let t, l, e, i;
  const s = [H, G, F], a = [];
  function f(n, c) {
    return (
      /*text*/
      n[2] ? 0 : (
        /*isEditing*/
        n[4] ? 1 : 2
      )
    );
  }
  return l = f(o), e = a[l] = s[l](o), {
    c() {
      t = k("div"), e.c(), h(t, "class", "text svelte-1j0cz4o"), d(t, "max-width", typeof /*maxWidth*/
      o[1] == "number" ? y(
        /*maxWidth*/
        o[1]
      ) : (
        /*maxWidth*/
        o[1]
      )), d(
        t,
        "-webkit-line-clamp",
        /*maxLine*/
        o[0]
      );
    },
    m(n, c) {
      u(n, t, c), a[l].m(t, null), i = !0;
    },
    p(n, [c]) {
      let r = l;
      l = f(n), l === r ? a[l].p(n, c) : (q(), p(a[r], 1, 1, () => {
        a[r] = null;
      }), N(), e = a[l], e ? e.p(n, c) : (e = a[l] = s[l](n), e.c()), b(e, 1), e.m(t, null)), c & /*maxWidth*/
      2 && d(t, "max-width", typeof /*maxWidth*/
      n[1] == "number" ? y(
        /*maxWidth*/
        n[1]
      ) : (
        /*maxWidth*/
        n[1]
      )), c & /*maxLine*/
      1 && d(
        t,
        "-webkit-line-clamp",
        /*maxLine*/
        n[0]
      );
    },
    i(n) {
      i || (b(e), i = !0);
    },
    o(n) {
      p(e), i = !1;
    },
    d(n) {
      n && _(t), a[l].d();
    }
  };
}
function J(o, t, l) {
  let e, { $$slots: i = {}, $$scope: s } = t, { maxLine: a = null } = t, { maxWidth: f = null } = t, { text: n = null } = t, { edit: c = null } = t;
  return o.$$set = (r) => {
    "maxLine" in r && l(0, a = r.maxLine), "maxWidth" in r && l(1, f = r.maxWidth), "text" in r && l(2, n = r.text), "edit" in r && l(3, c = r.edit), "$$scope" in r && l(5, s = r.$$scope);
  }, o.$$.update = () => {
    o.$$.dirty & /*edit*/
    8 && l(4, e = typeof (c == null ? void 0 : c.placeholder) == "string" || (c == null ? void 0 : c.inputting));
  }, [a, f, n, c, e, s, i];
}
class P extends x {
  constructor(t) {
    super(), g(
      this,
      t,
      J,
      I,
      L,
      {
        maxLine: 0,
        maxWidth: 1,
        text: 2,
        edit: 3
      },
      D
    );
  }
}
export {
  P as default
};
