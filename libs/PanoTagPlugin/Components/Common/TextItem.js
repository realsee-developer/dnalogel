import { SvelteComponent as h, init as p, safe_not_equal as k, append_styles as I, empty as g, insert as b, transition_in as d, transition_out as _, check_outros as q, detach as v, element as w, text as O, attr as C, append as N, set_data as S, add_render_callback as T, create_in_transition as j, create_out_transition as z, group_outros as A } from "../../../vendor/svelte/internal/index.js";
import { cubicInOut as m } from "../../../vendor/svelte/easing/index.js";
function B(a) {
  I(a, "svelte-1sfwqvc", ".text-char.svelte-1sfwqvc{opacity:1;display:inline-block;transform:translate(0, 0) scale(1) rotate(0)}");
}
function x(a) {
  let e, t, n, i, o;
  return {
    c() {
      e = w("span"), t = O(
        /*content*/
        a[1]
      ), C(e, "class", "text-char svelte-1sfwqvc");
    },
    m(r, c) {
      b(r, e, c), N(e, t), o = !0;
    },
    p(r, c) {
      (!o || c & /*content*/
      2) && S(
        t,
        /*content*/
        r[1]
      );
    },
    i(r) {
      o || (r && T(() => {
        o && (i && i.end(1), n = j(
          e,
          /*fly*/
          a[2],
          { duration: 400 }
        ), n.start());
      }), o = !0);
    },
    o(r) {
      n && n.invalidate(), r && (i = z(
        e,
        /*flyOut*/
        a[3],
        { duration: 400 }
      )), o = !1;
    },
    d(r) {
      r && v(e), r && i && i.end();
    }
  };
}
function D(a) {
  let e, t = (
    /*visible*/
    a[0] && x(a)
  );
  return {
    c() {
      t && t.c(), e = g();
    },
    m(n, i) {
      t && t.m(n, i), b(n, e, i);
    },
    p(n, [i]) {
      /*visible*/
      n[0] ? t ? (t.p(n, i), i & /*visible*/
      1 && d(t, 1)) : (t = x(n), t.c(), d(t, 1), t.m(e.parentNode, e)) : t && (A(), _(t, 1, 1, () => {
        t = null;
      }), q());
    },
    i(n) {
      d(t);
    },
    o(n) {
      _(t);
    },
    d(n) {
      t && t.d(n), n && v(e);
    }
  };
}
function E(a, e, t) {
  let { index: n } = e, { rightIndex: i } = e, { visible: o } = e, { content: r } = e;
  function c(s, { duration: f }) {
    return {
      duration: f,
      delay: n * 40,
      css: (u) => {
        const l = m(u);
        return `
          transform: translate(${4 * (1 - l)}px, ${10 * (1 - l)}px) scale(${0.7 + l * 0.3}) rotate(${20 * (1 - l)}deg);
          opacity: ${l};`;
      }
    };
  }
  function y(s, { duration: f }) {
    return {
      duration: f,
      delay: i * 40,
      css: (u) => {
        const l = m(u);
        return `
          transform: translate(${4 * (1 - l)}px, ${10 * (1 - l)}px) scale(${0.7 + l * 0.3}) rotate(${20 * (1 - l)}deg);
          opacity: ${l};`;
      }
    };
  }
  return a.$$set = (s) => {
    "index" in s && t(4, n = s.index), "rightIndex" in s && t(5, i = s.rightIndex), "visible" in s && t(0, o = s.visible), "content" in s && t(1, r = s.content);
  }, [o, r, c, y, n, i];
}
class H extends h {
  constructor(e) {
    super(), p(
      this,
      e,
      E,
      D,
      k,
      {
        index: 4,
        rightIndex: 5,
        visible: 0,
        content: 1
      },
      B
    );
  }
}
export {
  H as default
};
