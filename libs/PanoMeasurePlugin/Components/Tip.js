import { SvelteComponent as q, init as N, safe_not_equal as O, append_styles as P, empty as W, insert as w, transition_in as p, transition_out as k, check_outros as j, detach as M, onMount as A, onDestroy as B, element as y, text as F, attr as z, append as C, set_data as G, add_render_callback as H, create_bidirectional_transition as x, group_outros as I, binding_callbacks as J } from "../../vendor/svelte/internal/index.js";
import { fade as T } from "../../vendor/svelte/transition/index.js";
import "../../vendor/svelte/easing/index.js";
function K(l) {
  P(l, "svelte-1fzxlsz", ".Measure-Tips.svelte-1fzxlsz.svelte-1fzxlsz{box-sizing:border-box;position:absolute;pointer-events:none;top:0;width:100%;padding:0 2.5rem}.Measure-Tips.svelte-1fzxlsz .text.svelte-1fzxlsz{text-align:center;position:relative;max-width:100%;top:3.125rem;color:#fff;word-break:break-word;overflow-wrap:break-word;hyphens:auto;-webkit-hyphens:auto;text-shadow:0 0.0625rem 0.375rem rgba(0, 0, 0, 0.5);font-size:1.25rem;font-weight:bold}");
}
function v(l) {
  let o, i, e, n, r;
  return {
    c() {
      o = y("div"), i = y("div"), e = F(
        /*tip*/
        l[2]
      ), z(i, "class", "text svelte-1fzxlsz"), z(o, "class", "Measure-Tips svelte-1fzxlsz");
    },
    m(s, f) {
      w(s, o, f), C(o, i), C(i, e), l[7](i), r = !0;
    },
    p(s, f) {
      (!r || f & /*tip*/
      4) && G(
        e,
        /*tip*/
        s[2]
      );
    },
    i(s) {
      r || (H(() => {
        r && (n || (n = x(o, T, {}, !0)), n.run(1));
      }), r = !0);
    },
    o(s) {
      n || (n = x(o, T, {}, !1)), n.run(0), r = !1;
    },
    d(s) {
      s && M(o), l[7](null), s && n && n.end();
    }
  };
}
function L(l) {
  let o, i, e = (
    /*visible*/
    l[0] && v(l)
  );
  return {
    c() {
      e && e.c(), o = W();
    },
    m(n, r) {
      e && e.m(n, r), w(n, o, r), i = !0;
    },
    p(n, [r]) {
      /*visible*/
      n[0] ? e ? (e.p(n, r), r & /*visible*/
      1 && p(e, 1)) : (e = v(n), e.c(), p(e, 1), e.m(o.parentNode, o)) : e && (I(), k(e, 1, 1, () => {
        e = null;
      }), j());
    },
    i(n) {
      i || (p(e), i = !0);
    },
    o(n) {
      k(e), i = !1;
    },
    d(n) {
      e && e.d(n), n && M(o);
    }
  };
}
function Q(l, o, i) {
  let { measureController: e } = o, { i18n: n = (t) => t } = o, { tips: r } = o, { tipStyle: s = {} } = o, { visible: f = !0 } = o, a = null;
  const S = (t) => {
    const E = e.currentMeasureType;
    let d = "";
    return d = r[t], d === void 0 && (d = r[E][t]), d;
  }, c = (t) => {
    i(2, h = n(S(t)));
  }, u = () => {
    i(2, h = "");
  };
  let h = "";
  const m = (t) => {
    t === "Edit" && e.changeMeasureType ? c("start") : u();
  }, b = () => {
    e.getCurrentMode() === "Watch" && u();
  }, _ = () => {
    e.getCurrentMode() === "Edit" && c("start");
  }, g = (t) => {
    e.currentMeasureType === "area" && (t.length >= 2 ? c("close") : t.length === 0 ? c("start") : u());
  };
  A(() => {
    m(e.getCurrentMode()), e.hook.on("modeChange", m), e.hook.on("complete", b), e.hook.on("pointsChange", g), e.hook.on("measureTypeChange", _);
  }), B(() => {
    e.hook.off("modeChange", m), e.hook.off("complete", b), e.hook.off("pointsChange", g), e.hook.off("measureTypeChange", _), u();
  });
  function D(t) {
    J[t ? "unshift" : "push"](() => {
      a = t, i(1, a), i(6, s);
    });
  }
  return l.$$set = (t) => {
    "measureController" in t && i(3, e = t.measureController), "i18n" in t && i(4, n = t.i18n), "tips" in t && i(5, r = t.tips), "tipStyle" in t && i(6, s = t.tipStyle), "visible" in t && i(0, f = t.visible);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*textDom, tipStyle*/
    66 && a)
      for (const t in s)
        s.hasOwnProperty(t) && i(1, a.style[t] = s[t], a);
  }, [f, a, h, e, n, r, s, D];
}
class X extends q {
  constructor(o) {
    super(), N(
      this,
      o,
      Q,
      L,
      O,
      {
        measureController: 3,
        i18n: 4,
        tips: 5,
        tipStyle: 6,
        visible: 0
      },
      K
    );
  }
}
export {
  X as default
};
