import { SvelteComponent as I, init as M, safe_not_equal as R, append_styles as j, element as A, space as q, svg_element as _, attr as t, set_style as v, insert as z, append as d, transition_in as b, transition_out as Z, check_outros as B, detach as C, onDestroy as D, create_component as W, mount_component as x, destroy_component as E, group_outros as F, binding_callbacks as H } from "../../../../vendor/svelte/internal/index.js";
import J from "../../../utils/px2rem.js";
import K from "../Shadow.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
function L(o) {
  j(o, "svelte-6pnkgc", ".audio-icon__wrapper.svelte-6pnkgc.svelte-6pnkgc{display:inline-block}.audio-icon.svelte-6pnkgc.svelte-6pnkgc{display:flex;justify-content:center;align-items:center;position:relative;width:100%;height:100%;border-radius:50%}.audio-icon.svelte-6pnkgc .sound-wave__container.svelte-6pnkgc{position:absolute;pointer-events:none;top:0;left:0;width:100%;height:100%}@keyframes svelte-6pnkgc-sound_wave_1_animation{0%,10%{opacity:0}25%,100%{opacity:1}}@keyframes svelte-6pnkgc-sound_wave_2_animation{0%,35%{opacity:0}50%,100%{opacity:1}}@keyframes svelte-6pnkgc-sound_wave_3_animation{0%,60%{opacity:0}75%,100%{opacity:1}}");
}
function G(o) {
  let n, i;
  return n = new K({
    props: {
      center: !0,
      blurRadius: 12,
      spreadRadius: 5
    }
  }), {
    c() {
      W(n.$$.fragment);
    },
    m(l, g) {
      x(n, l, g), i = !0;
    },
    i(l) {
      i || (b(n.$$.fragment, l), i = !0);
    },
    o(l) {
      Z(n.$$.fragment, l), i = !1;
    },
    d(l) {
      E(n, l);
    }
  };
}
function N(o) {
  let n, i, l, g, u, k, r, f, h, s, m, a, c, y, e = (
    /*shadow*/
    o[0] && G()
  );
  return {
    c() {
      n = A("div"), e && e.c(), i = q(), l = A("div"), g = A("div"), u = _("svg"), k = _("defs"), r = _("linearGradient"), f = _("stop"), h = _("stop"), s = _("linearGradient"), m = _("stop"), a = _("stop"), c = _("path"), t(f, "stop-color", "rgba(255, 255, 255, 1)"), t(f, "stop-opacity", ".5"), t(f, "offset", "0%"), t(h, "stop-color", "rgba(255, 255, 255, 1)"), t(h, "offset", "100%"), t(r, "x1", "8.653%"), t(r, "y1", "15.676%"), t(r, "x2", "85.159%"), t(r, "y2", "79.274%"), t(r, "id", "dnalogel-audio-icon-linear-gradient-1"), t(m, "stop-color", "rgba(255, 255, 255, 1)"), t(m, "offset", "0%"), t(a, "stop-color", "rgba(255, 255, 255, 1)"), t(a, "stop-opacity", "0"), t(a, "offset", "100%"), t(s, "x1", "0%"), t(s, "y1", "0%"), t(s, "x2", "64.422%"), t(s, "y2", "62.326%"), t(s, "id", "dnalogel-audio-icon-linear-gradient-2"), t(
        c,
        "d",
        /*d*/
        o[3]
      ), t(c, "fill", "url(#dnalogel-audio-icon-linear-gradient-1)"), t(c, "fill-rule", "nonzero"), t(c, "stroke", "url(#dnalogel-audio-icon-linear-gradient-2)"), t(c, "stroke-width", ".5"), t(u, "viewBox", "0 0 24 24"), t(u, "version", "1.1"), t(u, "aria-label", "audio-icon"), t(g, "class", "sound-wave__container svelte-6pnkgc"), t(l, "class", "audio-icon svelte-6pnkgc"), t(n, "class", "audio-icon__wrapper svelte-6pnkgc"), t(
        n,
        "style",
        /*style*/
        o[1]
      ), v(
        n,
        "width",
        /*styleWidth*/
        o[4]
      ), v(
        n,
        "height",
        /*styleWidth*/
        o[4]
      );
    },
    m(p, w) {
      z(p, n, w), e && e.m(n, null), d(n, i), d(n, l), d(l, g), d(g, u), d(u, k), d(k, r), d(r, f), d(r, h), d(k, s), d(s, m), d(s, a), d(u, c), o[10](g), y = !0;
    },
    p(p, [w]) {
      /*shadow*/
      p[0] ? e ? w & /*shadow*/
      1 && b(e, 1) : (e = G(), e.c(), b(e, 1), e.m(n, i)) : e && (F(), Z(e, 1, 1, () => {
        e = null;
      }), B()), (!y || w & /*d*/
      8) && t(
        c,
        "d",
        /*d*/
        p[3]
      ), (!y || w & /*style*/
      2) && t(
        n,
        "style",
        /*style*/
        p[1]
      );
      const S = w & /*style*/
      2;
      (S || w & /*styleWidth, style*/
      18) && v(
        n,
        "width",
        /*styleWidth*/
        p[4]
      ), (S || w & /*styleWidth, style*/
      18) && v(
        n,
        "height",
        /*styleWidth*/
        p[4]
      );
    },
    i(p) {
      y || (b(e), y = !0);
    },
    o(p) {
      Z(e), y = !1;
    },
    d(p) {
      p && C(n), e && e.d(), o[10](null);
    }
  };
}
function O(o, n, i) {
  let l, g, { playing: u } = n, { shadow: k = !1 } = n, { style: r = null } = n, { width: f = "100%" } = n, { animated: h = !0 } = n, s, m = 0, a = null;
  const c = [
    "M12 3.25c2.416 0 4.604.98 6.187 2.563A8.723 8.723 0 0 1 20.75 12c0 2.416-.98 4.604-2.563 6.187A8.723 8.723 0 0 1 12 20.75a8.723 8.723 0 0 1-6.187-2.563A8.723 8.723 0 0 1 3.25 12c0-2.416.98-4.604 2.563-6.187A8.723 8.723 0 0 1 12 3.25Zm1.534 3.282-1.29 1.289.186.183a5.86 5.86 0 0 1 1.663 4.095c0 1.555-.605 2.965-1.786 4.236l1.118 1.12.2-.19a7.46 7.46 0 0 0 2.225-5.322 7.46 7.46 0 0 0-2.316-5.411Zm-2.046 2.047-1.245 1.243.14.133a3.04 3.04 0 0 1 .882 2.144c0 .795-.308 1.516-.955 2.24l1.23 1.231.168-.168a4.793 4.793 0 0 0 1.314-3.303c0-1.39-.59-2.643-1.534-3.52Zm-1.752 1.78-1.69 1.689 1.745 1.743.132-.13a2.29 2.29 0 0 0-.187-3.302Z",
    "M12 3.25c2.416 0 4.604.98 6.187 2.563A8.723 8.723 0 0 1 20.75 12c0 2.416-.98 4.604-2.563 6.187A8.723 8.723 0 0 1 12 20.75a8.723 8.723 0 0 1-6.187-2.563A8.723 8.723 0 0 1 3.25 12c0-2.416.98-4.604 2.563-6.187A8.723 8.723 0 0 1 12 3.25Zm-2.264 7.109-1.69 1.689 1.745 1.743.132-.13a2.29 2.29 0 0 0-.187-3.302Z",
    "M12 3.25c2.416 0 4.604.98 6.187 2.563A8.723 8.723 0 0 1 20.75 12c0 2.416-.98 4.604-2.563 6.187A8.723 8.723 0 0 1 12 20.75a8.723 8.723 0 0 1-6.187-2.563A8.723 8.723 0 0 1 3.25 12c0-2.416.98-4.604 2.563-6.187A8.723 8.723 0 0 1 12 3.25Zm-.512 5.329-1.245 1.243.14.133a3.04 3.04 0 0 1 .882 2.144c0 .795-.308 1.516-.955 2.24l1.23 1.231.168-.168a4.793 4.793 0 0 0 1.314-3.303c0-1.39-.59-2.643-1.534-3.52Zm-1.752 1.78-1.69 1.689 1.745 1.743.132-.13a2.29 2.29 0 0 0-.187-3.302Z"
  ];
  D(() => {
    a && (clearInterval(a), i(9, a = null));
  });
  function y(e) {
    H[e ? "unshift" : "push"](() => {
      s = e, i(2, s);
    });
  }
  return o.$$set = (e) => {
    "playing" in e && i(5, u = e.playing), "shadow" in e && i(0, k = e.shadow), "style" in e && i(1, r = e.style), "width" in e && i(6, f = e.width), "animated" in e && i(7, h = e.animated);
  }, o.$$.update = () => {
    var e;
    o.$$.dirty & /*width*/
    64 && i(4, l = typeof f == "number" ? J(f) : f), o.$$.dirty & /*playing, timer, animationStep*/
    800 && (u ? a || i(9, a = setInterval(
      () => {
        i(8, m = (m + 1) % c.length);
      },
      500
    )) : (a && (clearInterval(a), i(9, a = null)), i(8, m = 0))), o.$$.dirty & /*animated, animationStep*/
    384 && i(3, g = (e = c[h ? m : 0]) != null ? e : c[0]);
  }, [
    k,
    r,
    s,
    g,
    l,
    u,
    f,
    h,
    m,
    a,
    y
  ];
}
class X extends I {
  constructor(n) {
    super(), M(
      this,
      n,
      O,
      N,
      R,
      {
        playing: 5,
        shadow: 0,
        style: 1,
        width: 6,
        animated: 7
      },
      L
    );
  }
}
export {
  X as default
};
