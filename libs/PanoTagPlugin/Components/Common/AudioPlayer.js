import { SvelteComponent as w, init as b, safe_not_equal as C, append_styles as T, element as g, create_component as z, space as k, text as x, attr as f, set_style as _, insert as A, append as r, mount_component as j, listen as q, set_data as I, transition_in as P, transition_out as S, detach as B, destroy_component as D, stop_propagation as E, is_function as F } from "../../../vendor/svelte/internal/index.js";
import G from "./Icon/audioIcon.js";
import "../../utils/px2rem.js";
import "./Shadow.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
function H(i) {
  T(i, "svelte-16y5k2u", ".pano-tag-audio-popup-inline-player-wrapper.svelte-16y5k2u{width:100%;height:1.75rem;background-color:rgba(255, 255, 255, 0.06);border-radius:0.125rem;display:flex;align-items:center;cursor:pointer}.pano-tag-audio-popup-inline-player-icon.svelte-16y5k2u{width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pano-tag-audio-popup-inline-player-progress.svelte-16y5k2u{flex-grow:1;display:flex;position:relative;height:100%;align-items:center}.pano-tag-audio-popup-inline-player-progress-bar.svelte-16y5k2u{width:0;height:100%;background:linear-gradient(to right, rgba(238, 238, 238, 0) 0, rgba(216, 216, 216, 0.3) 100%);position:absolute;top:0;left:0;z-index:0}.pano-tag-audio-popup-inline-player-elapsed-time.svelte-16y5k2u{position:absolute;z-index:1;font-weight:500;font-size:0.875rem;color:#ffffff;line-height:1.25rem;padding-left:0.25rem}");
}
function J(i) {
  let e, a, n, u, o, p, t, c, m, s, y, h;
  return n = new G({
    props: { playing: (
      /*playing*/
      i[0]
    ), width: 24 }
  }), {
    c() {
      e = g("div"), a = g("div"), z(n.$$.fragment), u = k(), o = g("div"), p = g("div"), t = k(), c = g("div"), m = x(
        /*elapsedTime*/
        i[1]
      ), f(a, "class", "pano-tag-audio-popup-inline-player-icon svelte-16y5k2u"), f(p, "class", "pano-tag-audio-popup-inline-player-progress-bar svelte-16y5k2u"), _(
        p,
        "width",
        /*progress*/
        i[2] + "%"
      ), f(c, "class", "pano-tag-audio-popup-inline-player-elapsed-time svelte-16y5k2u"), f(o, "class", "pano-tag-audio-popup-inline-player-progress svelte-16y5k2u"), f(e, "class", "pano-tag-audio-popup-inline-player-wrapper svelte-16y5k2u");
    },
    m(l, d) {
      A(l, e, d), r(e, a), j(n, a, null), r(e, u), r(e, o), r(o, p), r(o, t), r(o, c), r(c, m), s = !0, y || (h = q(e, "click", E(function() {
        F(
          /*onClick*/
          i[3]
        ) && i[3].apply(this, arguments);
      })), y = !0);
    },
    p(l, [d]) {
      i = l;
      const v = {};
      d & /*playing*/
      1 && (v.playing = /*playing*/
      i[0]), n.$set(v), (!s || d & /*progress*/
      4) && _(
        p,
        "width",
        /*progress*/
        i[2] + "%"
      ), (!s || d & /*elapsedTime*/
      2) && I(
        m,
        /*elapsedTime*/
        i[1]
      );
    },
    i(l) {
      s || (P(n.$$.fragment, l), s = !0);
    },
    o(l) {
      S(n.$$.fragment, l), s = !1;
    },
    d(l) {
      l && B(e), D(n), y = !1, h();
    }
  };
}
function K(i, e, a) {
  let { playing: n = !1 } = e, { elapsedTime: u = "00:00" } = e, { progress: o = 0 } = e, { onClick: p = () => {
  } } = e;
  return i.$$set = (t) => {
    "playing" in t && a(0, n = t.playing), "elapsedTime" in t && a(1, u = t.elapsedTime), "progress" in t && a(2, o = t.progress), "onClick" in t && a(3, p = t.onClick);
  }, [n, u, o, p];
}
class U extends w {
  constructor(e) {
    super(), b(
      this,
      e,
      K,
      J,
      C,
      {
        playing: 0,
        elapsedTime: 1,
        progress: 2,
        onClick: 3
      },
      H
    );
  }
}
export {
  U as default
};
