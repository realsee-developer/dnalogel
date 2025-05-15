import { SvelteComponent as I, init as T, safe_not_equal as x, append_styles as R, empty as U, insert as $, transition_in as c, transition_out as p, check_outros as q, detach as v, element as f, create_component as b, attr as m, append as h, mount_component as w, destroy_component as j, space as C, group_outros as L, bubble as M, text as N, set_data as P } from "../../../../vendor/svelte/internal/index.js";
import S from "../../Common/Icon/audioIcon.js";
import W from "../../Common/Text/MText.js";
import B from "../../Common/Audio.js";
import "../../../utils/px2rem.js";
import "../../Common/Shadow.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
import "../../../utils/audio/SharedAudio.js";
import "../../../../shared-utils/audio.js";
function D(a) {
  R(a, "svelte-nclraj", ".audio-tag__wrapper.svelte-nclraj{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.audio-tag.svelte-nclraj{position:relative;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;padding:0.25rem;padding-right:0.625rem;border-radius:624999.9375rem;border:0.0625rem solid rgba(255, 255, 255, 0.6);background:linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));box-shadow:inset 0 0 0.25rem 0 rgba(255, 255, 255, 0.3)}.audio__inner.svelte-nclraj{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.text.svelte-nclraj{font-weight:bold;font-size:0.75rem;margin-left:0.25rem}.audio-icon__wrapper.svelte-nclraj{position:relative;vertical-align:top;pointer-events:none;width:1.5rem;height:1.5rem}");
}
function y(a) {
  let t, n, e, r;
  return e = new B({
    props: {
      style: "width: max-content; height: max-content;",
      enable: (
        /*tag*/
        a[0].state.visible
      ),
      url: (
        /*tag*/
        a[0].data.audioUrl
      ),
      hooksInfo: { tag: (
        /*tag*/
        a[0]
      ) },
      $$slots: { default: [F] },
      $$scope: { ctx: a }
    }
  }), e.$on(
    "play",
    /*play_handler*/
    a[5]
  ), e.$on(
    "pause",
    /*pause_handler*/
    a[6]
  ), e.$on(
    "error",
    /*error_handler*/
    a[7]
  ), e.$on(
    "timeupdate",
    /*timeupdate_handler*/
    a[8]
  ), e.$on(
    "duration",
    /*duration_handler*/
    a[9]
  ), e.$on(
    "audioRef",
    /*audioRef_handler*/
    a[10]
  ), {
    c() {
      t = f("div"), n = f("div"), b(e.$$.fragment), m(n, "class", "audio-tag svelte-nclraj"), m(t, "class", "audio-tag__wrapper svelte-nclraj");
    },
    m(o, i) {
      $(o, t, i), h(t, n), w(e, n, null), r = !0;
    },
    p(o, i) {
      const l = {};
      i & /*tag*/
      1 && (l.enable = /*tag*/
      o[0].state.visible), i & /*tag*/
      1 && (l.url = /*tag*/
      o[0].data.audioUrl), i & /*tag*/
      1 && (l.hooksInfo = { tag: (
        /*tag*/
        o[0]
      ) }), i & /*$$scope, title, playing*/
      2072 && (l.$$scope = { dirty: i, ctx: o }), e.$set(l);
    },
    i(o) {
      r || (c(e.$$.fragment, o), r = !0);
    },
    o(o) {
      p(e.$$.fragment, o), r = !1;
    },
    d(o) {
      o && v(t), j(e);
    }
  };
}
function E(a) {
  let t;
  return {
    c() {
      t = N(
        /*title*/
        a[4]
      );
    },
    m(n, e) {
      $(n, t, e);
    },
    p(n, e) {
      e & /*title*/
      16 && P(
        t,
        /*title*/
        n[4]
      );
    },
    d(n) {
      n && v(t);
    }
  };
}
function F(a) {
  let t, n, e, r, o, i, l;
  return e = new S({ props: { playing: (
    /*playing*/
    a[3]
  ) } }), i = new W({
    props: {
      maxWidth: 72,
      maxLine: 1,
      $$slots: { default: [E] },
      $$scope: { ctx: a }
    }
  }), {
    c() {
      t = f("div"), n = f("div"), b(e.$$.fragment), r = C(), o = f("div"), b(i.$$.fragment), m(n, "class", "audio-icon__wrapper svelte-nclraj"), m(o, "class", "text svelte-nclraj"), m(t, "class", "audio__inner svelte-nclraj");
    },
    m(s, d) {
      $(s, t, d), h(t, n), w(e, n, null), h(t, r), h(t, o), w(i, o, null), l = !0;
    },
    p(s, d) {
      const g = {};
      d & /*playing*/
      8 && (g.playing = /*playing*/
      s[3]), e.$set(g);
      const _ = {};
      d & /*$$scope, title*/
      2064 && (_.$$scope = { dirty: d, ctx: s }), i.$set(_);
    },
    i(s) {
      l || (c(e.$$.fragment, s), c(i.$$.fragment, s), l = !0);
    },
    o(s) {
      p(e.$$.fragment, s), p(i.$$.fragment, s), l = !1;
    },
    d(s) {
      s && v(t), j(e), j(i);
    }
  };
}
function G(a) {
  let t, n, e = (
    /*tag*/
    a[0].state && y(a)
  );
  return {
    c() {
      e && e.c(), t = U();
    },
    m(r, o) {
      e && e.m(r, o), $(r, t, o), n = !0;
    },
    p(r, [o]) {
      /*tag*/
      r[0].state ? e ? (e.p(r, o), o & /*tag*/
      1 && c(e, 1)) : (e = y(r), e.c(), c(e, 1), e.m(t.parentNode, t)) : e && (L(), p(e, 1, 1, () => {
        e = null;
      }), q());
    },
    i(r) {
      n || (c(e), n = !0);
    },
    o(r) {
      p(e), n = !1;
    },
    d(r) {
      e && e.d(r), r && v(t);
    }
  };
}
function H(a, t, n) {
  let e, { tag: r } = t, o = 0, i = 0, l = !1;
  const s = () => {
    n(3, l = !0);
  }, d = () => {
    n(3, l = !1);
  }, g = () => {
    n(3, l = !1);
  }, _ = (u) => {
    n(1, o = u.detail);
  }, z = (u) => {
    n(2, i = u.detail);
  };
  function A(u) {
    M.call(this, a, u);
  }
  return a.$$set = (u) => {
    "tag" in u && n(0, r = u.tag);
  }, a.$$.update = () => {
    var u, k;
    a.$$.dirty & /*tag*/
    1 && n(4, e = (k = (u = r.data.title) != null ? u : r.data.text) != null ? k : "");
  }, [
    r,
    o,
    i,
    l,
    e,
    s,
    d,
    g,
    _,
    z,
    A
  ];
}
class ne extends I {
  constructor(t) {
    super(), T(this, t, H, G, x, { tag: 0 }, D);
  }
}
export {
  ne as default
};
