import { SvelteComponent as b, init as A, safe_not_equal as M, append_styles as L, element as f, space as R, attr as d, toggle_class as h, set_style as c, insert as S, append as _, transition_in as v, transition_out as m, check_outros as W, detach as j, create_component as q, mount_component as B, destroy_component as C, group_outros as H, binding_callbacks as w } from "../../../../vendor/svelte/internal/index.js";
import I from "../../../utils/px2rem.js";
import T from "../Shadow.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
function z(i) {
  L(i, "svelte-srt2pi", ".audio-icon__wrapper.svelte-srt2pi.svelte-srt2pi{display:inline-block}.audio-icon.svelte-srt2pi.svelte-srt2pi{display:flex;justify-content:center;align-items:center;position:relative;width:100%;height:100%;border-radius:50%;background-color:rgba(255, 255, 255, 0.8)}.audio-icon.svelte-srt2pi .sound-wave__container.svelte-srt2pi{position:absolute;pointer-events:none;width:60%;height:60%}.sound-wave.svelte-srt2pi.svelte-srt2pi{animation-duration:2s;animation-iteration-count:infinite;animation-play-state:paused;transition:opacity 0}.playing.svelte-srt2pi .sound-wave.svelte-srt2pi{animation-play-state:running}.playing.svelte-srt2pi .sound-wave-1.svelte-srt2pi{animation-name:svelte-srt2pi-sound_wave_1_animation}.playing.svelte-srt2pi .sound-wave-2.svelte-srt2pi{animation-name:svelte-srt2pi-sound_wave_2_animation}.playing.svelte-srt2pi .sound-wave-3.svelte-srt2pi{animation-name:svelte-srt2pi-sound_wave_3_animation}@keyframes svelte-srt2pi-sound_wave_1_animation{0%,10%{opacity:0}25%,100%{opacity:1}}@keyframes svelte-srt2pi-sound_wave_2_animation{0%,35%{opacity:0}50%,100%{opacity:1}}@keyframes svelte-srt2pi-sound_wave_3_animation{0%,60%{opacity:0}75%,100%{opacity:1}}");
}
function y(i) {
  let t, a;
  return t = new T({
    props: {
      center: !0,
      blurRadius: 12,
      spreadRadius: 5
    }
  }), {
    c() {
      q(t.$$.fragment);
    },
    m(n, r) {
      B(t, n, r), a = !0;
    },
    i(n) {
      a || (v(t.$$.fragment, n), a = !0);
    },
    o(n) {
      m(t.$$.fragment, n), a = !1;
    },
    d(n) {
      C(t, n);
    }
  };
}
function D(i) {
  let t, a, n, r, p, e = (
    /*shadow*/
    i[1] && y()
  );
  return {
    c() {
      t = f("div"), e && e.c(), a = R(), n = f("div"), r = f("div"), r.innerHTML = '<svg width="100%" height="100%" viewBox="0 0 128 128"><g transform="rotate(-45 12 64) translate(12 64)" fill="black" stroke="black" fill-opacity="0.6" stroke-opacity="0.6"><path stroke="none" class="sound-wave sound-wave-1 svelte-srt2pi" d="M0,23 A23,23 0 0,0 23,0 L0,0"></path><path fill="none" stroke-width="15" class="sound-wave sound-wave-2 svelte-srt2pi" d="M0,46 A46,46 0 0,0 46,0"></path><path fill="none" stroke-width="15" class="sound-wave sound-wave-3 svelte-srt2pi" d="M0,80 A80,80 0 0,0 80,0"></path></g></svg>', d(r, "class", "sound-wave__container svelte-srt2pi"), d(n, "class", "audio-icon svelte-srt2pi"), h(
        n,
        "playing",
        /*playing*/
        i[0]
      ), d(t, "class", "audio-icon__wrapper svelte-srt2pi"), d(
        t,
        "style",
        /*style*/
        i[2]
      ), c(
        t,
        "width",
        /*styleWidth*/
        i[5]
      ), c(
        t,
        "height",
        /*styleWidth*/
        i[5]
      );
    },
    m(s, l) {
      S(s, t, l), e && e.m(t, null), _(t, a), _(t, n), _(n, r), i[7](r), i[8](t), p = !0;
    },
    p(s, [l]) {
      /*shadow*/
      s[1] ? e ? l & /*shadow*/
      2 && v(e, 1) : (e = y(), e.c(), v(e, 1), e.m(t, a)) : e && (H(), m(e, 1, 1, () => {
        e = null;
      }), W()), (!p || l & /*playing*/
      1) && h(
        n,
        "playing",
        /*playing*/
        s[0]
      ), (!p || l & /*style*/
      4) && d(
        t,
        "style",
        /*style*/
        s[2]
      );
      const u = l & /*style*/
      4;
      (u || l & /*styleWidth, style*/
      36) && c(
        t,
        "width",
        /*styleWidth*/
        s[5]
      ), (u || l & /*styleWidth, style*/
      36) && c(
        t,
        "height",
        /*styleWidth*/
        s[5]
      );
    },
    i(s) {
      p || (v(e), p = !0);
    },
    o(s) {
      m(e), p = !1;
    },
    d(s) {
      s && j(t), e && e.d(), i[7](null), i[8](null);
    }
  };
}
function E(i, t, a) {
  let n, { playing: r } = t, { shadow: p = !1 } = t, { style: e = null } = t, { width: s = "100%" } = t, l, u;
  function g(o) {
    w[o ? "unshift" : "push"](() => {
      u = o, a(4, u);
    });
  }
  function k(o) {
    w[o ? "unshift" : "push"](() => {
      l = o, a(3, l);
    });
  }
  return i.$$set = (o) => {
    "playing" in o && a(0, r = o.playing), "shadow" in o && a(1, p = o.shadow), "style" in o && a(2, e = o.style), "width" in o && a(6, s = o.width);
  }, i.$$.update = () => {
    i.$$.dirty & /*width*/
    64 && a(5, n = typeof s == "number" ? I(s) : s);
  }, [
    r,
    p,
    e,
    l,
    u,
    n,
    s,
    g,
    k
  ];
}
class O extends b {
  constructor(t) {
    super(), A(
      this,
      t,
      E,
      D,
      M,
      {
        playing: 0,
        shadow: 1,
        style: 2,
        width: 6
      },
      z
    );
  }
}
export {
  O as default
};
