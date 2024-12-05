import { SvelteComponent as R, init as U, safe_not_equal as q, append_styles as L, empty as N, insert as $, transition_in as d, transition_out as c, check_outros as P, detach as v, element as m, create_component as w, attr as p, set_style as _, append as b, mount_component as j, destroy_component as k, space as S, group_outros as W, bubble as B, text as D, set_data as E } from "../../../../vendor/svelte/internal/index.js";
import F from "../../Common/Icon/audioIcon.js";
import G from "../../Common/Text/MText.js";
import H from "../../Common/Audio.js";
import "../../../utils/px2rem.js";
import "../../Common/Shadow.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
import "../../../utils/audio/SharedAudio.js";
import "../../../../shared-utils/audio.js";
function J(n) {
  L(n, "svelte-58hfjf", ".audio-tag__wrapper.svelte-58hfjf{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.audio-tag.svelte-58hfjf{position:relative;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;padding:0.1875rem;padding-right:0.625rem;border-radius:624999.9375rem;border:0.03125rem solid rgba(255, 255, 255, 0.2)}.audio__inner.svelte-58hfjf{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.text.svelte-58hfjf{font-weight:bold;font-size:0.75rem;margin-left:0.25rem}.audio-icon__wrapper.svelte-58hfjf{position:relative;vertical-align:top;pointer-events:none;width:1.375rem;height:1.375rem}");
}
function z(n) {
  let r, t, e, a;
  return e = new H({
    props: {
      style: "width: max-content; height: max-content;",
      enable: (
        /*tag*/
        n[0].state.visible
      ),
      url: (
        /*tag*/
        n[0].data.audioUrl
      ),
      hooksInfo: { tag: (
        /*tag*/
        n[0]
      ) },
      $$slots: { default: [O] },
      $$scope: { ctx: n }
    }
  }), e.$on(
    "play",
    /*play_handler*/
    n[6]
  ), e.$on(
    "pause",
    /*pause_handler*/
    n[7]
  ), e.$on(
    "error",
    /*error_handler*/
    n[8]
  ), e.$on(
    "timeupdate",
    /*timeupdate_handler*/
    n[9]
  ), e.$on(
    "duration",
    /*duration_handler*/
    n[10]
  ), e.$on(
    "audioRef",
    /*audioRef_handler*/
    n[11]
  ), {
    c() {
      r = m("div"), t = m("div"), w(e.$$.fragment), p(t, "class", "audio-tag svelte-58hfjf"), _(
        t,
        "background-color",
        /*theme*/
        n[4].bgColor
      ), _(
        t,
        "color",
        /*theme*/
        n[4].fontColor
      ), p(r, "class", "audio-tag__wrapper svelte-58hfjf");
    },
    m(o, i) {
      $(o, r, i), b(r, t), j(e, t, null), a = !0;
    },
    p(o, i) {
      const s = {};
      i & /*tag*/
      1 && (s.enable = /*tag*/
      o[0].state.visible), i & /*tag*/
      1 && (s.url = /*tag*/
      o[0].data.audioUrl), i & /*tag*/
      1 && (s.hooksInfo = { tag: (
        /*tag*/
        o[0]
      ) }), i & /*$$scope, title, playing*/
      8232 && (s.$$scope = { dirty: i, ctx: o }), e.$set(s), i & /*theme*/
      16 && _(
        t,
        "background-color",
        /*theme*/
        o[4].bgColor
      ), i & /*theme*/
      16 && _(
        t,
        "color",
        /*theme*/
        o[4].fontColor
      );
    },
    i(o) {
      a || (d(e.$$.fragment, o), a = !0);
    },
    o(o) {
      c(e.$$.fragment, o), a = !1;
    },
    d(o) {
      o && v(r), k(e);
    }
  };
}
function K(n) {
  let r;
  return {
    c() {
      r = D(
        /*title*/
        n[5]
      );
    },
    m(t, e) {
      $(t, r, e);
    },
    p(t, e) {
      e & /*title*/
      32 && E(
        r,
        /*title*/
        t[5]
      );
    },
    d(t) {
      t && v(r);
    }
  };
}
function O(n) {
  let r, t, e, a, o, i, s;
  return e = new F({ props: { playing: (
    /*playing*/
    n[3]
  ) } }), i = new G({
    props: {
      maxWidth: 72,
      maxLine: 1,
      $$slots: { default: [K] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      r = m("div"), t = m("div"), w(e.$$.fragment), a = S(), o = m("div"), w(i.$$.fragment), p(t, "class", "audio-icon__wrapper svelte-58hfjf"), p(o, "class", "text svelte-58hfjf"), p(r, "class", "audio__inner svelte-58hfjf");
    },
    m(l, u) {
      $(l, r, u), b(r, t), j(e, t, null), b(r, a), b(r, o), j(i, o, null), s = !0;
    },
    p(l, u) {
      const g = {};
      u & /*playing*/
      8 && (g.playing = /*playing*/
      l[3]), e.$set(g);
      const h = {};
      u & /*$$scope, title*/
      8224 && (h.$$scope = { dirty: u, ctx: l }), i.$set(h);
    },
    i(l) {
      s || (d(e.$$.fragment, l), d(i.$$.fragment, l), s = !0);
    },
    o(l) {
      c(e.$$.fragment, l), c(i.$$.fragment, l), s = !1;
    },
    d(l) {
      l && v(r), k(e), k(i);
    }
  };
}
function Q(n) {
  let r, t, e = (
    /*tag*/
    n[0].state && z(n)
  );
  return {
    c() {
      e && e.c(), r = N();
    },
    m(a, o) {
      e && e.m(a, o), $(a, r, o), t = !0;
    },
    p(a, [o]) {
      /*tag*/
      a[0].state ? e ? (e.p(a, o), o & /*tag*/
      1 && d(e, 1)) : (e = z(a), e.c(), d(e, 1), e.m(r.parentNode, r)) : e && (W(), c(e, 1, 1, () => {
        e = null;
      }), P());
    },
    i(a) {
      t || (d(e), t = !0);
    },
    o(a) {
      c(e), t = !1;
    },
    d(a) {
      e && e.d(a), a && v(r);
    }
  };
}
function V(n, r, t) {
  let e, a, { tag: o } = r;
  const i = {
    light: {
      bgColor: "rgba(255, 255, 255, 0.3)",
      fontColor: "rgba(0, 0, 0, 0.6)"
    },
    dark: {
      bgColor: "rgba(0, 0, 0, 0.3)",
      fontColor: "white"
    }
  };
  let s = 0, l = 0, u = !1;
  const g = () => {
    t(3, u = !0);
  }, h = () => {
    t(3, u = !1);
  }, A = () => {
    t(3, u = !1);
  }, I = (f) => {
    t(1, s = f.detail);
  }, T = (f) => {
    t(2, l = f.detail);
  };
  function M(f) {
    B.call(this, n, f);
  }
  return n.$$set = (f) => {
    "tag" in f && t(0, o = f.tag);
  }, n.$$.update = () => {
    var f, C, y;
    n.$$.dirty & /*tag*/
    1 && t(5, e = (C = (f = o.data.title) != null ? f : o.data.text) != null ? C : ""), n.$$.dirty & /*tag*/
    1 && t(4, a = (y = i[o.data.theme || "light"]) != null ? y : i.light);
  }, [
    o,
    s,
    l,
    u,
    a,
    e,
    g,
    h,
    A,
    I,
    T,
    M
  ];
}
class ie extends R {
  constructor(r) {
    super(), U(this, r, V, Q, q, { tag: 0 }, J);
  }
}
export {
  ie as default
};
