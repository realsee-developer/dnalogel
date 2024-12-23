import { SvelteComponent as E, init as N, safe_not_equal as O, append_styles as P, empty as W, insert as q, transition_in as h, transition_out as k, check_outros as j, detach as x, onMount as A, onDestroy as B, element as C, text as F, attr as y, append as T, set_data as G, add_render_callback as H, create_bidirectional_transition as M, group_outros as I, binding_callbacks as J } from "../../vendor/svelte/internal/index.js";
import { fade as v } from "../../vendor/svelte/transition/index.js";
import "../../vendor/svelte/easing/index.js";
function K(s) {
  P(s, "svelte-1q8gtp4", ".Measure-Tips.svelte-1q8gtp4.svelte-1q8gtp4{box-sizing:border-box;position:absolute;pointer-events:none;top:0;width:100%;padding:0 2.5rem}.Measure-Tips.svelte-1q8gtp4 .text.svelte-1q8gtp4{text-align:center;position:relative;max-width:100%;top:3.125rem;color:#fff;word-break:break-all;word-wrap:break-word;text-shadow:0 0.0625rem 0.375rem rgba(0, 0, 0, 0.5);font-size:1.25rem;font-weight:bold}");
}
function w(s) {
  let i, o, e, n, r;
  return {
    c() {
      i = C("div"), o = C("div"), e = F(
        /*tip*/
        s[2]
      ), y(o, "class", "text svelte-1q8gtp4"), y(i, "class", "Measure-Tips svelte-1q8gtp4");
    },
    m(l, f) {
      q(l, i, f), T(i, o), T(o, e), s[7](o), r = !0;
    },
    p(l, f) {
      (!r || f & /*tip*/
      4) && G(
        e,
        /*tip*/
        l[2]
      );
    },
    i(l) {
      r || (H(() => {
        r && (n || (n = M(i, v, {}, !0)), n.run(1));
      }), r = !0);
    },
    o(l) {
      n || (n = M(i, v, {}, !1)), n.run(0), r = !1;
    },
    d(l) {
      l && x(i), s[7](null), l && n && n.end();
    }
  };
}
function L(s) {
  let i, o, e = (
    /*visible*/
    s[0] && w(s)
  );
  return {
    c() {
      e && e.c(), i = W();
    },
    m(n, r) {
      e && e.m(n, r), q(n, i, r), o = !0;
    },
    p(n, [r]) {
      /*visible*/
      n[0] ? e ? (e.p(n, r), r & /*visible*/
      1 && h(e, 1)) : (e = w(n), e.c(), h(e, 1), e.m(i.parentNode, i)) : e && (I(), k(e, 1, 1, () => {
        e = null;
      }), j());
    },
    i(n) {
      o || (h(e), o = !0);
    },
    o(n) {
      k(e), o = !1;
    },
    d(n) {
      e && e.d(n), n && x(i);
    }
  };
}
function Q(s, i, o) {
  let { measureController: e } = i, { i18n: n = (t) => t } = i, { tips: r } = i, { tipStyle: l = {} } = i, { visible: f = !0 } = i, a = null;
  const S = (t) => {
    const D = e.currentMeasureType;
    let d = "";
    return d = r[t], d === void 0 && (d = r[D][t]), d;
  }, c = (t) => {
    o(2, p = n(S(t)));
  }, u = () => {
    o(2, p = "");
  };
  let p = "";
  const m = (t) => {
    t === "Edit" && e.changeMeasureType ? c("start") : u();
  }, g = () => {
    e.getCurrentMode() === "Watch" && u();
  }, _ = () => {
    e.getCurrentMode() === "Edit" && c("start");
  }, b = (t) => {
    e.currentMeasureType === "area" && (t.length >= 2 ? c("close") : t.length === 0 ? c("start") : u());
  };
  A(() => {
    m(e.getCurrentMode()), e.hook.on("modeChange", m), e.hook.on("complete", g), e.hook.on("pointsChange", b), e.hook.on("measureTypeChange", _);
  }), B(() => {
    e.hook.off("modeChange", m), e.hook.off("complete", g), e.hook.off("pointsChange", b), e.hook.off("measureTypeChange", _), u();
  });
  function z(t) {
    J[t ? "unshift" : "push"](() => {
      a = t, o(1, a), o(6, l);
    });
  }
  return s.$$set = (t) => {
    "measureController" in t && o(3, e = t.measureController), "i18n" in t && o(4, n = t.i18n), "tips" in t && o(5, r = t.tips), "tipStyle" in t && o(6, l = t.tipStyle), "visible" in t && o(0, f = t.visible);
  }, s.$$.update = () => {
    if (s.$$.dirty & /*textDom, tipStyle*/
    66 && a)
      for (const t in l)
        l.hasOwnProperty(t) && o(1, a.style[t] = l[t], a);
  }, [f, a, p, e, n, r, l, z];
}
class X extends E {
  constructor(i) {
    super(), N(
      this,
      i,
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
