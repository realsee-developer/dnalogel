import { SvelteComponent as _, init as b, safe_not_equal as k, append_styles as v, create_component as m, mount_component as c, transition_in as g, transition_out as p, destroy_component as h, createEventDispatcher as M, element as w, attr as E, insert as C, listen as d, is_function as f, detach as P, run_all as L } from "../../../../vendor/svelte/internal/index.js";
import R from "../../Common/Audio.js";
import A from "../../Common/Icon/audioIcon.js";
import "../../../utils/audio/SharedAudio.js";
import "../../../../shared-utils/audio.js";
import "../../../utils/audio/AudioDiagnostics.js";
import "../../../utils/px2rem.js";
import "../../Common/Shadow.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
function I(t) {
  v(t, "svelte-cksy1a", ".audio-tag-point.svelte-cksy1a{position:relative;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;padding:0.25rem;border-radius:100%;border:0.0625rem solid rgba(255, 255, 255, 0.6);background:linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));box-shadow:inset 0 0 0.25rem 0 rgba(255, 255, 255, 0.3);display:flex;align-items:center;justify-content:center}");
}
function z(t) {
  let e, a, n, o, l;
  return a = new A({
    props: { playing: (
      /*playing*/
      t[0]
    ), width: 24 }
  }), {
    c() {
      e = w("div"), m(a.$$.fragment), E(e, "class", "audio-tag-point svelte-cksy1a");
    },
    m(r, s) {
      C(r, e, s), c(a, e, null), n = !0, o || (l = [
        d(e, "click", function() {
          f(
            /*handlePointClick*/
            t[2]
          ) && t[2].apply(this, arguments);
        }),
        d(e, "pointerenter", function() {
          f(
            /*handleMouseEnter*/
            t[3]
          ) && t[3].apply(this, arguments);
        }),
        d(e, "pointerleave", function() {
          f(
            /*handleMouseLeave*/
            t[4]
          ) && t[4].apply(this, arguments);
        })
      ], o = !0);
    },
    p(r, s) {
      t = r;
      const u = {};
      s & /*playing*/
      1 && (u.playing = /*playing*/
      t[0]), a.$set(u);
    },
    i(r) {
      n || (g(a.$$.fragment, r), n = !0);
    },
    o(r) {
      p(a.$$.fragment, r), n = !1;
    },
    d(r) {
      r && P(e), h(a), o = !1, L(l);
    }
  };
}
function U(t) {
  let e, a;
  return e = new R({
    props: {
      url: (
        /*tag*/
        t[1].data.audioUrl
      ),
      enable: (
        /*tag*/
        t[1].state.visible
      ),
      style: "width: max-content; height: max-content;",
      hooksInfo: { tag: (
        /*tag*/
        t[1]
      ) },
      $$slots: { default: [z] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "play",
    /*audioEventHandlers*/
    t[5].play
  ), e.$on(
    "pause",
    /*audioEventHandlers*/
    t[5].pause
  ), e.$on(
    "error",
    /*audioEventHandlers*/
    t[5].error
  ), e.$on(
    "timeupdate",
    /*audioEventHandlers*/
    t[5].timeupdate
  ), e.$on(
    "duration",
    /*audioEventHandlers*/
    t[5].duration
  ), e.$on(
    "audioRef",
    /*audioEventHandlers*/
    t[5].audioRef
  ), {
    c() {
      m(e.$$.fragment);
    },
    m(n, o) {
      c(e, n, o), a = !0;
    },
    p(n, [o]) {
      const l = {};
      o & /*tag*/
      2 && (l.url = /*tag*/
      n[1].data.audioUrl), o & /*tag*/
      2 && (l.enable = /*tag*/
      n[1].state.visible), o & /*tag*/
      2 && (l.hooksInfo = { tag: (
        /*tag*/
        n[1]
      ) }), o & /*$$scope, handlePointClick, handleMouseEnter, handleMouseLeave, playing*/
      157 && (l.$$scope = { dirty: o, ctx: n }), e.$set(l);
    },
    i(n) {
      a || (g(e.$$.fragment, n), a = !0);
    },
    o(n) {
      p(e.$$.fragment, n), a = !1;
    },
    d(n) {
      h(e, n);
    }
  };
}
function j(t, e, a) {
  let { playing: n = !1 } = e, { tag: o } = e, { handlePointClick: l = () => {
  } } = e, { handleMouseEnter: r = () => {
  } } = e, { handleMouseLeave: s = () => {
  } } = e;
  const u = M(), y = {
    audioRef: (i) => u("audioRef", i.detail),
    play: () => {
      a(0, n = !0), u("play");
    },
    pause: () => {
      a(0, n = !1), u("pause");
    },
    error: () => {
      a(0, n = !1), u("pause");
    },
    timeupdate: (i) => u("timeupdate", i.detail),
    duration: (i) => u("duration", i.detail)
  };
  return t.$$set = (i) => {
    "playing" in i && a(0, n = i.playing), "tag" in i && a(1, o = i.tag), "handlePointClick" in i && a(2, l = i.handlePointClick), "handleMouseEnter" in i && a(3, r = i.handleMouseEnter), "handleMouseLeave" in i && a(4, s = i.handleMouseLeave);
  }, [
    n,
    o,
    l,
    r,
    s,
    y
  ];
}
class O extends _ {
  constructor(e) {
    super(), b(
      this,
      e,
      j,
      U,
      k,
      {
        playing: 0,
        tag: 1,
        handlePointClick: 2,
        handleMouseEnter: 3,
        handleMouseLeave: 4
      },
      I
    );
  }
}
export {
  O as default
};
