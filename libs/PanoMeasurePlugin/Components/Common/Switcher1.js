import { SvelteComponent as A, init as I, safe_not_equal as W, append_styles as q, element as k, space as w, attr as p, set_style as g, insert as S, append as d, noop as C, detach as y, destroy_each as T, text as Y, toggle_class as B, listen as D, set_data as E, binding_callbacks as K } from "../../../vendor/svelte/internal/index.js";
function F(e) {
  q(e, "svelte-1mfj5mk", '.Switcher.svelte-1mfj5mk.svelte-1mfj5mk{pointer-events:all;position:relative;margin-bottom:1.5rem;box-sizing:border-box;width:-moz-max-content;width:max-content}.Switcher.svelte-1mfj5mk .svelte-1mfj5mk{transition-duration:300ms;transition-timing-function:ease-out}.Switcher.svelte-1mfj5mk .content.svelte-1mfj5mk{transition-property:opacity}.Switcher.svelte-1mfj5mk .highlight.svelte-1mfj5mk{transition-property:width}.Switcher.svelte-1mfj5mk .Switcher-buttons.svelte-1mfj5mk{transition-property:transform}.Switcher.svelte-1mfj5mk .Switcher-buttons.svelte-1mfj5mk{position:absolute;top:50%;left:0;transform:translate(0, -50%);width:-moz-max-content;width:max-content}.Switcher.svelte-1mfj5mk .Switcher-buttons .button.svelte-1mfj5mk{display:inline-block;margin:0 0.5625rem}.Switcher.svelte-1mfj5mk .highlight.svelte-1mfj5mk{height:2rem;background:rgba(0, 0, 0, 0.3);border-radius:624.9375rem}.Switcher.svelte-1mfj5mk .content.svelte-1mfj5mk{position:relative;padding:0 0.75rem}.Switcher.svelte-1mfj5mk .button:not(.active) .content.svelte-1mfj5mk::before{content:"";position:absolute;top:50%;left:10%;width:80%;transform:translateY(-50%);height:0;box-shadow:0 0 0.9375rem 0.3125rem rgba(0, 0, 0, 0.3)}');
}
function z(e, t, n) {
  const s = e.slice();
  return s[13] = t[n], s[14] = t, s[15] = n, s;
}
function L(e) {
  let t;
  return {
    c() {
      t = k("span"), p(t, "class", "icon svelte-1mfj5mk"), g(
        t,
        "background-image",
        /*option*/
        e[13].icon
      );
    },
    m(n, s) {
      S(n, t, s);
    },
    p(n, s) {
      s & /*options*/
      1 && g(
        t,
        "background-image",
        /*option*/
        n[13].icon
      );
    },
    d(n) {
      n && y(t);
    }
  };
}
function R(e) {
  let t, n, s, f = (
    /*option*/
    e[13].value + ""
  ), c, o, i = (
    /*index*/
    e[15]
  ), a, l, m = (
    /*option*/
    e[13].icon && L(e)
  );
  const v = () => (
    /*div1_binding*/
    e[9](t, i)
  ), b = () => (
    /*div1_binding*/
    e[9](null, i)
  );
  function _() {
    return (
      /*click_handler*/
      e[10](
        /*option*/
        e[13],
        /*index*/
        e[15]
      )
    );
  }
  return {
    c() {
      t = k("div"), n = k("div"), m && m.c(), s = w(), c = Y(f), o = w(), p(n, "class", "content svelte-1mfj5mk"), p(t, "class", "button svelte-1mfj5mk"), B(
        t,
        "active",
        /*activeIndex*/
        e[4] === /*index*/
        e[15]
      );
    },
    m(u, h) {
      S(u, t, h), d(t, n), m && m.m(n, null), d(n, s), d(n, c), d(t, o), v(), a || (l = D(t, "click", _), a = !0);
    },
    p(u, h) {
      e = u, /*option*/
      e[13].icon ? m ? m.p(e, h) : (m = L(e), m.c(), m.m(n, s)) : m && (m.d(1), m = null), h & /*options*/
      1 && f !== (f = /*option*/
      e[13].value + "") && E(c, f), i !== /*index*/
      e[15] && (b(), i = /*index*/
      e[15], v()), h & /*activeIndex*/
      16 && B(
        t,
        "active",
        /*activeIndex*/
        e[4] === /*index*/
        e[15]
      );
    },
    d(u) {
      u && y(t), m && m.d(), b(), a = !1, l();
    }
  };
}
function G(e) {
  let t, n, s, f, c = (
    /*options*/
    e[0]
  ), o = [];
  for (let i = 0; i < c.length; i += 1)
    o[i] = R(z(e, c, i));
  return {
    c() {
      t = k("div"), n = k("div"), s = w(), f = k("div");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      p(n, "class", "highlight svelte-1mfj5mk"), g(
        n,
        "width",
        /*activeButtonWidth*/
        e[5] ? `${/*activeButtonWidth*/
        e[5]}px` : void 0
      ), p(f, "class", "Switcher-buttons svelte-1mfj5mk"), g(f, "transform", `translate(${/*activeButtonLeft*/
      e[6]}px, -50%)`), p(t, "class", "Switcher svelte-1mfj5mk");
    },
    m(i, a) {
      S(i, t, a), d(t, n), d(t, s), d(t, f);
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(f, null);
      e[11](t);
    },
    p(i, [a]) {
      if (a & /*activeButtonWidth*/
      32 && g(
        n,
        "width",
        /*activeButtonWidth*/
        i[5] ? `${/*activeButtonWidth*/
        i[5]}px` : void 0
      ), a & /*elementList, activeIndex, onChange, options*/
      23) {
        c = /*options*/
        i[0];
        let l;
        for (l = 0; l < c.length; l += 1) {
          const m = z(i, c, l);
          o[l] ? o[l].p(m, a) : (o[l] = R(m), o[l].c(), o[l].m(f, null));
        }
        for (; l < o.length; l += 1)
          o[l].d(1);
        o.length = c.length;
      }
      a & /*activeButtonLeft*/
      64 && g(f, "transform", `translate(${/*activeButtonLeft*/
      i[6]}px, -50%)`);
    },
    i: C,
    o: C,
    d(i) {
      i && y(t), T(o, i), e[11](null);
    }
  };
}
function H(e, t, n) {
  let s, f, { options: c } = t, { defaultKey: o = null } = t, { onChange: i } = t;
  const a = [];
  let l, m, v = 0;
  function b() {
    if (f && l) {
      n(5, m = f.clientWidth);
      const r = v + l.getBoundingClientRect().left - f.getBoundingClientRect().left;
      n(6, v = r);
    }
  }
  function _(r, j) {
    K[r ? "unshift" : "push"](() => {
      a[j] = r, n(2, a);
    });
  }
  const u = (r, j) => {
    i(r.key), n(4, s = j);
  };
  function h(r) {
    K[r ? "unshift" : "push"](() => {
      l = r, n(3, l);
    });
  }
  return e.$$set = (r) => {
    "options" in r && n(0, c = r.options), "defaultKey" in r && n(7, o = r.defaultKey), "onChange" in r && n(1, i = r.onChange);
  }, e.$$.update = () => {
    e.$$.dirty & /*defaultKey, options*/
    129 && n(4, s = o ? c.findIndex((r) => r.key === o) : 0), e.$$.dirty & /*elementList, activeIndex*/
    20 && n(8, f = a[s]), e.$$.dirty & /*activeButton, container*/
    264 && f && l && setTimeout(() => b(), 0);
  }, [
    c,
    i,
    a,
    l,
    s,
    m,
    v,
    o,
    f,
    _,
    u,
    h
  ];
}
class M extends A {
  constructor(t) {
    super(), I(this, t, H, G, W, { options: 0, defaultKey: 7, onChange: 1 }, F);
  }
}
export {
  M as default
};
