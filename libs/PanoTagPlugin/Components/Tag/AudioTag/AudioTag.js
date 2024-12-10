import { SvelteComponent as J, init as K, safe_not_equal as P, append_styles as Q, empty as V, insert as D, transition_in as h, transition_out as c, check_outros as E, detach as S, element as b, create_component as k, space as C, attr as w, set_style as X, toggle_class as q, mount_component as y, append as v, listen as F, action_destroyer as Y, group_outros as G, destroy_component as R, run_all as Z, add_render_callback as x, create_in_transition as ee, create_out_transition as te, bubble as ie } from "../../../../vendor/svelte/internal/index.js";
import { cubicInOut as L } from "../../../../vendor/svelte/easing/index.js";
import { fade as N } from "../../../../vendor/svelte/transition/index.js";
import ne from "../../Common/Audio.js";
import oe from "../../Common/Line/Straight.js";
import H from "../../Common/Shadow.js";
import re from "../../Common/Text/FlyMText.js";
import le from "../../Common/Icon/audioIcon.js";
import { svelteResizeObserver as ae } from "../../../../shared-utils/svelte/resizeObserver.js";
import "../../../utils/audio/SharedAudio.js";
import "../../../../shared-utils/audio.js";
import "../../../../shared-utils/uuid.js";
import "../../Common/Text/FlyText.js";
import "../../../../vendor/animejs/lib/anime.es.js";
import "../../../../shared-utils/isNil.js";
import "three";
import "../../../utils/search.js";
import "../../../utils/constants.js";
import "../../Common/Arrow.js";
import "../../../Assets/Icon.js";
import "../../../utils/doUtil.js";
import "../../../utils/px2rem.js";
import "../../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
function se(e) {
  Q(e, "svelte-1s6gk4a", ".audio-tag.svelte-1s6gk4a{position:absolute;left:0;top:0;width:0;height:0;overflow:visible}.audio-icon__wrapper.svelte-1s6gk4a{position:relative;vertical-align:top;width:100%;height:100%}.content.svelte-1s6gk4a{width:-moz-max-content;width:max-content;height:3.375rem;padding:2.25rem 0.25rem 0 1rem;position:absolute;left:0;bottom:0.125rem;overflow:hidden;box-sizing:border-box;font-size:0;white-space:nowrap;font-weight:600}.wrapper.svelte-1s6gk4a{position:relative;width:100%;height:100%}.audio-icon.svelte-1s6gk4a{pointer-events:none;vertical-align:top;display:inline-block;width:1rem;height:1rem;margin-right:0.25rem;margin-top:0.0625rem}.audio.svelte-1s6gk4a{position:relative;width:100%;height:100%}");
}
function j(e) {
  var g, z;
  let i, n, o, t, a, f, d, l, s, p, _, $, U, I;
  n = new H({
    props: {
      visible: (
        /*unfolded*/
        e[6]
      ),
      left: (
        /*contentWidth*/
        e[3] / 2 + "px"
      ),
      bottom: 12,
      width: 2,
      blurRadius: 120,
      spreadRadius: 60
    }
  });
  let u = (
    /*unfolded*/
    e[6] && B(e)
  );
  return s = new re({
    props: {
      visible: (
        /*unfolded*/
        e[6]
      ),
      textUnfolded: (
        /*textUnfolded*/
        e[1]
      ),
      content: (
        /*content*/
        e[5]
      )
    }
  }), _ = new oe({
    props: {
      unfolded: (
        /*unfolded*/
        e[6]
      ),
      length: (
        /*contentWidth*/
        e[3]
      ),
      outDelay: (
        /*foldTextDelay*/
        e[4] + 20 * Math.min(
          /*content*/
          (z = (g = e[5]) == null ? void 0 : g.length) != null ? z : 10,
          15
        )
      ),
      useLinearColor: !0
    }
  }), {
    c() {
      i = b("div"), k(n.$$.fragment), o = C(), t = b("div"), a = b("div"), f = b("div"), u && u.c(), d = C(), l = b("div"), k(s.$$.fragment), p = C(), k(_.$$.fragment), w(f, "class", "audio-icon svelte-1s6gk4a"), X(l, "display", "inline-block"), w(a, "class", "wrapper svelte-1s6gk4a"), w(t, "class", "content svelte-1s6gk4a"), w(i, "class", "audio-tag svelte-1s6gk4a"), q(
        i,
        "unfolded",
        /*unfolded*/
        e[6]
      );
    },
    m(r, m) {
      D(r, i, m), y(n, i, null), v(i, o), v(i, t), v(t, a), v(a, f), u && u.m(f, null), v(a, d), v(a, l), y(s, l, null), v(i, p), y(_, i, null), $ = !0, U || (I = [
        F(
          l,
          "click",
          /*clickContent*/
          e[7]
        ),
        Y(ae.call(null, l)),
        F(
          l,
          "clientWidth",
          /*clientWidth_handler*/
          e[12]
        )
      ], U = !0);
    },
    p(r, m) {
      var W, O;
      const T = {};
      m & /*unfolded*/
      64 && (T.visible = /*unfolded*/
      r[6]), m & /*contentWidth*/
      8 && (T.left = /*contentWidth*/
      r[3] / 2 + "px"), n.$set(T), /*unfolded*/
      r[6] ? u ? (u.p(r, m), m & /*unfolded*/
      64 && h(u, 1)) : (u = B(r), u.c(), h(u, 1), u.m(f, null)) : u && (G(), c(u, 1, 1, () => {
        u = null;
      }), E());
      const M = {};
      m & /*unfolded*/
      64 && (M.visible = /*unfolded*/
      r[6]), m & /*textUnfolded*/
      2 && (M.textUnfolded = /*textUnfolded*/
      r[1]), m & /*content*/
      32 && (M.content = /*content*/
      r[5]), s.$set(M);
      const A = {};
      m & /*unfolded*/
      64 && (A.unfolded = /*unfolded*/
      r[6]), m & /*contentWidth*/
      8 && (A.length = /*contentWidth*/
      r[3]), m & /*foldTextDelay, content*/
      48 && (A.outDelay = /*foldTextDelay*/
      r[4] + 20 * Math.min(
        /*content*/
        (O = (W = r[5]) == null ? void 0 : W.length) != null ? O : 10,
        15
      )), _.$set(A), (!$ || m & /*unfolded*/
      64) && q(
        i,
        "unfolded",
        /*unfolded*/
        r[6]
      );
    },
    i(r) {
      $ || (h(n.$$.fragment, r), h(u), h(s.$$.fragment, r), h(_.$$.fragment, r), $ = !0);
    },
    o(r) {
      c(n.$$.fragment, r), c(u), c(s.$$.fragment, r), c(_.$$.fragment, r), $ = !1;
    },
    d(r) {
      r && S(i), R(n), u && u.d(), R(s), R(_), U = !1, Z(I);
    }
  };
}
function B(e) {
  let i, n, o, t, a, f, d;
  return n = new H({
    props: {
      center: !0,
      blurRadius: 15,
      spreadRadius: 6
    }
  }), t = new ne({
    props: {
      enable: (
        /*unfolded*/
        e[6]
      ),
      url: (
        /*tag*/
        e[0].data.audioUrl
      ),
      hooksInfo: { tag: (
        /*tag*/
        e[0]
      ) },
      $$slots: { default: [fe] },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "play",
    /*play_handler*/
    e[8]
  ), t.$on(
    "pause",
    /*pause_handler*/
    e[9]
  ), t.$on(
    "error",
    /*error_handler*/
    e[10]
  ), t.$on(
    "audioRef",
    /*audioRef_handler*/
    e[11]
  ), {
    c() {
      i = b("div"), k(n.$$.fragment), o = C(), k(t.$$.fragment), w(i, "class", "audio svelte-1s6gk4a");
    },
    m(l, s) {
      D(l, i, s), y(n, i, null), v(i, o), y(t, i, null), d = !0;
    },
    p(l, s) {
      e = l;
      const p = {};
      s & /*unfolded*/
      64 && (p.enable = /*unfolded*/
      e[6]), s & /*tag*/
      1 && (p.url = /*tag*/
      e[0].data.audioUrl), s & /*tag*/
      1 && (p.hooksInfo = { tag: (
        /*tag*/
        e[0]
      ) }), s & /*$$scope, playing*/
      8196 && (p.$$scope = { dirty: s, ctx: e }), t.$set(p);
    },
    i(l) {
      d || (h(n.$$.fragment, l), h(t.$$.fragment, l), l && x(() => {
        d && (f && f.end(1), a = ee(i, N, {
          duration: 1e3,
          delay: 0,
          easing: L
        }), a.start());
      }), d = !0);
    },
    o(l) {
      var s, p;
      c(n.$$.fragment, l), c(t.$$.fragment, l), a && a.invalidate(), l && (f = te(i, N, {
        duration: 1e3,
        delay: 20 * Math.min(
          /*content*/
          (p = (s = e[5]) == null ? void 0 : s.length) != null ? p : 10,
          15
        ),
        easing: L
      })), d = !1;
    },
    d(l) {
      l && S(i), R(n), R(t), l && f && f.end();
    }
  };
}
function fe(e) {
  let i, n, o;
  return n = new le({ props: { playing: (
    /*playing*/
    e[2]
  ) } }), {
    c() {
      i = b("div"), k(n.$$.fragment), w(i, "class", "audio-icon__wrapper svelte-1s6gk4a");
    },
    m(t, a) {
      D(t, i, a), y(n, i, null), o = !0;
    },
    p(t, a) {
      const f = {};
      a & /*playing*/
      4 && (f.playing = /*playing*/
      t[2]), n.$set(f);
    },
    i(t) {
      o || (h(n.$$.fragment, t), o = !0);
    },
    o(t) {
      c(n.$$.fragment, t), o = !1;
    },
    d(t) {
      t && S(i), R(n);
    }
  };
}
function ue(e) {
  let i, n, o = (
    /*tag*/
    e[0].state && j(e)
  );
  return {
    c() {
      o && o.c(), i = V();
    },
    m(t, a) {
      o && o.m(t, a), D(t, i, a), n = !0;
    },
    p(t, [a]) {
      /*tag*/
      t[0].state ? o ? (o.p(t, a), a & /*tag*/
      1 && h(o, 1)) : (o = j(t), o.c(), h(o, 1), o.m(i.parentNode, i)) : o && (G(), c(o, 1, 1, () => {
        o = null;
      }), E());
    },
    i(t) {
      n || (h(o), n = !0);
    },
    o(t) {
      c(o), n = !1;
    },
    d(t) {
      o && o.d(t), t && S(i);
    }
  };
}
function de(e, i, n) {
  let o, t, a, { tag: f } = i, d = !1, l = !1, s;
  function p() {
    n(1, d = !d);
  }
  const _ = () => {
    n(2, l = !0);
  }, $ = () => {
    n(2, l = !1);
  }, U = () => {
    n(2, l = !1);
  };
  function I(g) {
    ie.call(this, e, g);
  }
  const u = (g) => {
    n(3, s = g.detail);
  };
  return e.$$set = (g) => {
    "tag" in g && n(0, f = g.tag);
  }, e.$$.update = () => {
    var g, z, r;
    e.$$.dirty & /*tag*/
    1 && n(6, o = !!((g = f.state) != null && g.unfolded)), e.$$.dirty & /*tag*/
    1 && n(5, t = (r = (z = f.data.title) != null ? z : f.data.text) != null ? r : ""), e.$$.dirty & /*textUnfolded*/
    2 && n(4, a = d ? 450 : 0);
  }, [
    f,
    d,
    l,
    s,
    a,
    t,
    o,
    p,
    _,
    $,
    U,
    I,
    u
  ];
}
class Oe extends J {
  constructor(i) {
    super(), K(this, i, de, ue, P, { tag: 0 }, se);
  }
}
export {
  Oe as default
};
