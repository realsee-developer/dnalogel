import { SvelteComponent as V, init as W, safe_not_equal as q, append_styles as B, empty as k, insert as m, update_keyed_each as G, noop as F, detach as p, destroy_block as X, binding_callbacks as M, element as I, text as Y, attr as A, append as v, set_data as z } from "../../../../vendor/svelte/internal/index.js";
import { anime as N } from "../../../../vendor/animejs/lib/anime.es.js";
import { uuid as w } from "../../../../shared-utils/uuid.js";
import { notNil as H } from "../../../../shared-utils/isNil.js";
import "three";
import { searchFirstValueSmallThanLastValue as K } from "../../../utils/search.js";
import { RANDON_STRING as y } from "../../../utils/constants.js";
function Q(o) {
  B(o, "svelte-1b2n9wi", ".text-char.svelte-1b2n9wi{display:inline-block;text-shadow:0.125rem 0rem 0.5rem rgba(0, 0, 0, 0.15)}");
}
function R(o, e, i) {
  const l = o.slice();
  return l[19] = e[i].id, l[0] = e[i].content, l[20] = e, l[21] = i, l;
}
function Z(o) {
  let e, i = (
    /*content*/
    o[0] + ""
  ), l, a = (
    /*index*/
    o[21]
  );
  const _ = () => (
    /*span_binding_1*/
    o[10](e, a)
  ), t = () => (
    /*span_binding_1*/
    o[10](null, a)
  );
  return {
    c() {
      e = I("span"), l = Y(i), A(e, "class", "text-char svelte-1b2n9wi");
    },
    m(n, s) {
      m(n, e, s), v(e, l), _();
    },
    p(n, s) {
      o = n, s & /*contentList*/
      4 && i !== (i = /*content*/
      o[0] + "") && z(l, i), a !== /*index*/
      o[21] && (t(), a = /*index*/
      o[21], _());
    },
    d(n) {
      n && p(e), t();
    }
  };
}
function x(o) {
  let e;
  return {
    c() {
      e = I("br");
    },
    m(i, l) {
      m(i, e, l);
    },
    p: F,
    d(i) {
      i && p(e);
    }
  };
}
function $(o) {
  let e, i = (
    /*index*/
    o[21]
  );
  const l = () => (
    /*span_binding*/
    o[9](e, i)
  ), a = () => (
    /*span_binding*/
    o[9](null, i)
  );
  return {
    c() {
      e = I("span"), e.textContent = " ", A(e, "class", "text-char svelte-1b2n9wi");
    },
    m(_, t) {
      m(_, e, t), l();
    },
    p(_, t) {
      o = _, i !== /*index*/
      o[21] && (a(), i = /*index*/
      o[21], l());
    },
    d(_) {
      _ && p(e), a();
    }
  };
}
function S(o, e) {
  let i, l;
  function a(n, s) {
    return (
      /*content*/
      n[0] === /*__SpaceFlag__*/
      n[3] ? $ : (
        /*content*/
        n[0] === /*__NewLineFlag__*/
        n[4] ? x : Z
      )
    );
  }
  let _ = a(e), t = _(e);
  return {
    key: o,
    first: null,
    c() {
      i = k(), t.c(), l = k(), this.first = i;
    },
    m(n, s) {
      m(n, i, s), t.m(n, s), m(n, l, s);
    },
    p(n, s) {
      e = n, _ === (_ = a(e)) && t ? t.p(e, s) : (t.d(1), t = _(e), t && (t.c(), t.m(l.parentNode, l)));
    },
    d(n) {
      n && p(i), t.d(n), n && p(l);
    }
  };
}
function ee(o) {
  let e = [], i = /* @__PURE__ */ new Map(), l, a = (
    /*contentList*/
    o[2]
  );
  const _ = (t) => (
    /*id*/
    t[19]
  );
  for (let t = 0; t < a.length; t += 1) {
    let n = R(o, a, t), s = _(n);
    i.set(s, e[t] = S(s, n));
  }
  return {
    c() {
      for (let t = 0; t < e.length; t += 1)
        e[t].c();
      l = k();
    },
    m(t, n) {
      for (let s = 0; s < e.length; s += 1)
        e[s] && e[s].m(t, n);
      m(t, l, n);
    },
    p(t, [n]) {
      n & /*spanEleList, contentList, __SpaceFlag__, __NewLineFlag__*/
      30 && (a = /*contentList*/
      t[2], e = G(e, n, _, 1, t, a, i, l.parentNode, X, S, l, R));
    },
    i: F,
    o: F,
    d(t) {
      for (let n = 0; n < e.length; n += 1)
        e[n].d(t);
      t && p(l);
    }
  };
}
function te(o, e, i) {
  let l, { inDelay: a = 0 } = e, { outDelay: _ = 0 } = e, { content: t } = e, { unfolded: n } = e, { isFistUnfoldedUpdate: s = !0 } = e;
  const E = `__EMOJI_SPLIT_${y}__`, b = `__EMOJI_${y}__`, j = `__SPACE_${y}__`, D = `__NEW_LINE_${y}__`;
  let U, f, d = [];
  function C(r) {
    const u = [], g = new RegExp(new RegExp("\\p{Regional_Indicator}\\p{Regional_Indicator}|\\p{Emoji}(\\p{Emoji_Modifier}+|\\uFE0F\\u20E3?)?(\\u200D\\p{Emoji}(\\p{Emoji_Modifier}+|\\uFE0F\\u20E3?)?)+|\\p{Emoji_Presentation}(\\p{Emoji_Modifier}+|\\uFE0F\\u20E3?)?|\\p{Emoji}(\\p{Emoji_Modifier}+|\\uFE0F\\u20E3?)", "gu"));
    return r.slice().replace(g, (c) => `${E}${b}${c}${E}`).split(E).forEach((c) => c.startsWith(b) ? u.push({
      id: w(),
      content: c.slice(b.length)
    }) : u.push(...c.split("").map((h) => h === " " ? j : h === `
` ? D : h).map((h) => ({ id: w(), content: h })))), u;
  }
  function L() {
    if (!f)
      return;
    const r = !n;
    f.reversed !== r && f.reverse(), f.play();
  }
  function T(r) {
    if (s) {
      i(5, s = !1);
      return;
    }
    clearTimeout(U), U = setTimeout(L, r ? a : _);
  }
  function O(r) {
    const u = function() {
      const g = K((c) => r[c].getBoundingClientRect().x, [Math.min(r.length - 1, 10), Math.min(r.length - 1, 30)]);
      if (g > 0)
        return g;
    }();
    f = N({
      targets: r.slice(0, u).filter(H),
      autoplay: !1,
      duration: 400,
      scale: [0.7, 1],
      rotate: [20, 0],
      opacity: [0, 1],
      translateX: [4, 0],
      translateY: [10, 0],
      delay: N.stagger(50),
      easing: "easeInOutCubic"
    }), n && f.seek(f.duration);
  }
  function P(r, u) {
    M[r ? "unshift" : "push"](() => {
      d[u] = r, i(1, d);
    });
  }
  function J(r, u) {
    M[r ? "unshift" : "push"](() => {
      d[u] = r, i(1, d);
    });
  }
  return o.$$set = (r) => {
    "inDelay" in r && i(6, a = r.inDelay), "outDelay" in r && i(7, _ = r.outDelay), "content" in r && i(0, t = r.content), "unfolded" in r && i(8, n = r.unfolded), "isFistUnfoldedUpdate" in r && i(5, s = r.isFistUnfoldedUpdate);
  }, o.$$.update = () => {
    o.$$.dirty & /*content*/
    1 && i(2, l = C(t)), o.$$.dirty & /*unfolded*/
    256 && T(n), o.$$.dirty & /*spanEleList*/
    2 && O(d.filter((r) => !!r));
  }, [
    t,
    d,
    l,
    j,
    D,
    s,
    a,
    _,
    n,
    P,
    J
  ];
}
class ae extends V {
  constructor(e) {
    super(), W(
      this,
      e,
      te,
      ee,
      q,
      {
        inDelay: 6,
        outDelay: 7,
        content: 0,
        unfolded: 8,
        isFistUnfoldedUpdate: 5
      },
      Q
    );
  }
}
export {
  ae as default
};
