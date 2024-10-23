import { SvelteComponent as le, init as re, safe_not_equal as se, append_styles as ue, empty as U, insert as D, transition_in as _, transition_out as p, check_outros as q, detach as w, getContext as F, onMount as me, onDestroy as fe, element as G, attr as H, toggle_class as k, append as de, group_outros as M, add_render_callback as ce, create_in_transition as _e, identity as J, create_out_transition as ge, binding_callbacks as E, assign as W, bind as X, create_component as S, mount_component as V, get_spread_update as Y, get_spread_object as Z, add_flush_callback as x, destroy_component as N, destroy_each as pe } from "../../../vendor/svelte/internal/index.js";
import { Carousel as be } from "../../../vendor/svelte-carousel/src/components/Carousel/Carousel.js";
import { fly as K } from "../../../vendor/svelte/transition/index.js";
import $ from "./MediaItem.js";
import "../../../vendor/svelte-carousel/src/components/Dots/Dots.js";
import "../../../vendor/svelte-carousel/src/components/Dot/Dot.js";
import "../../../vendor/svelte-carousel/src/components/Arrow/Arrow.js";
import "../../../vendor/svelte-carousel/src/direction.js";
import "../../../vendor/svelte-carousel/src/components/Progress/Progress.js";
import "../../../vendor/svelte-carousel/src/actions/swipeable/swipeable.js";
import "../../../vendor/svelte-carousel/src/actions/swipeable/event.js";
import "../../../vendor/svelte-carousel/src/utils/event.js";
import "../../../vendor/svelte-carousel/src/units.js";
import "../../../vendor/svelte-carousel/src/actions/hoverable/hoverable.js";
import "../../../vendor/svelte-carousel/src/actions/hoverable/event.js";
import "../../../vendor/svelte-carousel/src/actions/tappable/tappable.js";
import "../../../vendor/svelte-carousel/src/utils/math.js";
import "../../../vendor/svelte-carousel/src/actions/tappable/event.js";
import "../../../vendor/svelte-carousel/src/utils/page.js";
import "../../../vendor/svelte-carousel/src/utils/clones.js";
import "../../../vendor/svelte-carousel/src/utils/object.js";
import "../../../vendor/svelte-carousel/src/components/Carousel/createCarousel.js";
import "../../../vendor/easy-reactive/src/simply-reactive.js";
import "../../../vendor/lodash.get/index.js";
import "../../../_commonjsHelpers.js";
import "../../../vendor/lodash.clonedeep/index.js";
import "../../../vendor/easy-reactive/src/utils/subscription.js";
import "../../../vendor/easy-reactive/src/utils/object.js";
import "../../../vendor/lodash.isequal/index.js";
import "../../../vendor/easy-reactive/src/utils/watcher.js";
import "../../../vendor/svelte-carousel/src/utils/lazy.js";
import "../../../vendor/svelte-carousel/src/utils/ProgressManager.js";
import "../../../vendor/svelte-carousel/src/utils/interval.js";
import "../../../vendor/svelte/easing/index.js";
import "../../Assets/Icon.js";
function he(t) {
  ue(t, "svelte-1mrbqlg", ".media-list-wrapper.svelte-1mrbqlg.svelte-1mrbqlg{width:100%;height:100%;position:relative;overflow:hidden;border-radius:0.125rem}.media-list-wrapper.svelte-1mrbqlg .media-list.svelte-1mrbqlg{position:relative;pointer-events:auto;height:100%;left:50%;top:50%;transform:translate(-50%, -50%)}.media-list-wrapper.svelte-1mrbqlg .media-list.svelte-1mrbqlg .sc-carousel__carousel-container,.media-list-wrapper.svelte-1mrbqlg .media-list.svelte-1mrbqlg .sc-carousel__content-container{height:100%}");
}
function P(t, i, o) {
  const a = t.slice();
  return a[28] = i[o], a[29] = i, a[30] = o, a;
}
function Q(t) {
  let i, o, a, e, u, s, n;
  const l = [ye, Ie], m = [];
  function I(d, g) {
    return (
      /*carouselEnabled*/
      d[13] && /*mediaDataList*/
      d[10].length > 1 ? 0 : 1
    );
  }
  return a = I(t), e = m[a] = l[a](t), {
    c() {
      i = G("div"), o = G("div"), e.c(), H(o, "class", "media-list svelte-1mrbqlg"), k(
        o,
        "carouselEnabled",
        /*carouselEnabled*/
        t[13]
      ), H(i, "class", "media-list-wrapper svelte-1mrbqlg"), k(
        i,
        "unfolded",
        /*unfolded*/
        t[5]
      );
    },
    m(d, g) {
      D(d, i, g), de(i, o), m[a].m(o, null), n = !0;
    },
    p(d, g) {
      t = d;
      let b = a;
      a = I(t), a === b ? m[a].p(t, g) : (M(), p(m[b], 1, 1, () => {
        m[b] = null;
      }), q(), e = m[a], e ? e.p(t, g) : (e = m[a] = l[a](t), e.c()), _(e, 1), e.m(o, null)), (!n || g[0] & /*carouselEnabled*/
      8192) && k(
        o,
        "carouselEnabled",
        /*carouselEnabled*/
        t[13]
      ), (!n || g[0] & /*unfolded*/
      32) && k(
        i,
        "unfolded",
        /*unfolded*/
        t[5]
      );
    },
    i(d) {
      n || (_(e), d && ce(() => {
        n && (s && s.end(1), u = _e(
          i,
          K,
          /*animation*/
          t[6] ? {
            y: 4,
            duration: (
              /*duration*/
              t[4]
            ),
            delay: (
              /*inDelay*/
              t[2]
            ),
            easing: J
          } : void 0
        ), u.start());
      }), n = !0);
    },
    o(d) {
      p(e), u && u.invalidate(), d && (s = ge(
        i,
        K,
        /*animation*/
        t[6] ? {
          y: 4,
          duration: (
            /*duration*/
            t[4]
          ),
          delay: (
            /*outDelay*/
            t[3]
          ),
          easing: J
        } : void 0
      )), n = !1;
    },
    d(d) {
      d && w(i), m[a].d(), d && s && s.end();
    }
  };
}
function Ie(t) {
  let i, o, a;
  const e = [
    { media: (
      /*mediaData*/
      t[1][0]
    ) },
    { autoplayVideo: (
      /*autoplayVideo*/
      t[14]
    ) },
    /*mediaItemConfig*/
    t[7],
    { tag: (
      /*tag*/
      t[0]
    ) }
  ];
  function u(n) {
    t[21](n);
  }
  let s = {};
  for (let n = 0; n < e.length; n += 1)
    s = W(s, e[n]);
  return (
    /*mediaInstanceList*/
    t[8][0] !== void 0 && (s.mediaInstance = /*mediaInstanceList*/
    t[8][0]), i = new $({ props: s }), E.push(() => X(i, "mediaInstance", u)), {
      c() {
        S(i.$$.fragment);
      },
      m(n, l) {
        V(i, n, l), a = !0;
      },
      p(n, l) {
        const m = l[0] & /*mediaData, autoplayVideo, mediaItemConfig, tag*/
        16515 ? Y(e, [
          l[0] & /*mediaData*/
          2 && { media: (
            /*mediaData*/
            n[1][0]
          ) },
          l[0] & /*autoplayVideo*/
          16384 && { autoplayVideo: (
            /*autoplayVideo*/
            n[14]
          ) },
          l[0] & /*mediaItemConfig*/
          128 && Z(
            /*mediaItemConfig*/
            n[7]
          ),
          l[0] & /*tag*/
          1 && { tag: (
            /*tag*/
            n[0]
          ) }
        ]) : {};
        !o && l[0] & /*mediaInstanceList*/
        256 && (o = !0, m.mediaInstance = /*mediaInstanceList*/
        n[8][0], x(() => o = !1)), i.$set(m);
      },
      i(n) {
        a || (_(i.$$.fragment, n), a = !0);
      },
      o(n) {
        p(i.$$.fragment, n), a = !1;
      },
      d(n) {
        N(i, n);
      }
    }
  );
}
function ye(t) {
  let i, o, a = {
    dots: !1,
    arrows: !1,
    $$slots: { default: [ke] },
    $$scope: { ctx: t }
  };
  return i = new be({ props: a }), t[19](i), i.$on(
    "pageChange",
    /*pageChange_handler*/
    t[20]
  ), {
    c() {
      S(i.$$.fragment);
    },
    m(e, u) {
      V(i, e, u), o = !0;
    },
    p(e, u) {
      const s = {};
      u[0] & /*mediaDataList, mediaItemConfig, tag, mediaInstanceList*/
      1409 | u[1] & /*$$scope*/
      1 && (s.$$scope = { dirty: u, ctx: e }), i.$set(s);
    },
    i(e) {
      o || (_(i.$$.fragment, e), o = !0);
    },
    o(e) {
      p(i.$$.fragment, e), o = !1;
    },
    d(e) {
      t[19](null), N(i, e);
    }
  };
}
function R(t) {
  let i, o, a;
  const e = [
    /*mediaItemConfig*/
    t[7],
    { media: (
      /*media*/
      t[28]
    ) },
    { tag: (
      /*tag*/
      t[0]
    ) }
  ];
  function u(n) {
    t[18](
      n,
      /*index*/
      t[30]
    );
  }
  let s = {};
  for (let n = 0; n < e.length; n += 1)
    s = W(s, e[n]);
  return (
    /*mediaInstanceList*/
    t[8][
      /*index*/
      t[30]
    ] !== void 0 && (s.mediaInstance = /*mediaInstanceList*/
    t[8][
      /*index*/
      t[30]
    ]), i = new $({ props: s }), E.push(() => X(i, "mediaInstance", u)), {
      c() {
        S(i.$$.fragment);
      },
      m(n, l) {
        V(i, n, l), a = !0;
      },
      p(n, l) {
        t = n;
        const m = l[0] & /*mediaItemConfig, mediaDataList, tag*/
        1153 ? Y(e, [
          l[0] & /*mediaItemConfig*/
          128 && Z(
            /*mediaItemConfig*/
            t[7]
          ),
          l[0] & /*mediaDataList*/
          1024 && { media: (
            /*media*/
            t[28]
          ) },
          l[0] & /*tag*/
          1 && { tag: (
            /*tag*/
            t[0]
          ) }
        ]) : {};
        !o && l[0] & /*mediaInstanceList*/
        256 && (o = !0, m.mediaInstance = /*mediaInstanceList*/
        t[8][
          /*index*/
          t[30]
        ], x(() => o = !1)), i.$set(m);
      },
      i(n) {
        a || (_(i.$$.fragment, n), a = !0);
      },
      o(n) {
        p(i.$$.fragment, n), a = !1;
      },
      d(n) {
        N(i, n);
      }
    }
  );
}
function ke(t) {
  let i, o, a = (
    /*mediaDataList*/
    t[10]
  ), e = [];
  for (let s = 0; s < a.length; s += 1)
    e[s] = R(P(t, a, s));
  const u = (s) => p(e[s], 1, 1, () => {
    e[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      i = U();
    },
    m(s, n) {
      for (let l = 0; l < e.length; l += 1)
        e[l] && e[l].m(s, n);
      D(s, i, n), o = !0;
    },
    p(s, n) {
      if (n[0] & /*mediaItemConfig, mediaDataList, tag, mediaInstanceList*/
      1409) {
        a = /*mediaDataList*/
        s[10];
        let l;
        for (l = 0; l < a.length; l += 1) {
          const m = P(s, a, l);
          e[l] ? (e[l].p(m, n), _(e[l], 1)) : (e[l] = R(m), e[l].c(), _(e[l], 1), e[l].m(i.parentNode, i));
        }
        for (M(), l = a.length; l < e.length; l += 1)
          u(l);
        q();
      }
    },
    i(s) {
      if (!o) {
        for (let n = 0; n < a.length; n += 1)
          _(e[n]);
        o = !0;
      }
    },
    o(s) {
      e = e.filter(Boolean);
      for (let n = 0; n < e.length; n += 1)
        p(e[n]);
      o = !1;
    },
    d(s) {
      pe(e, s), s && w(i);
    }
  };
}
function Ce(t) {
  let i, o, a = (
    /*unfolded*/
    t[5] && Q(t)
  );
  return {
    c() {
      a && a.c(), i = U();
    },
    m(e, u) {
      a && a.m(e, u), D(e, i, u), o = !0;
    },
    p(e, u) {
      /*unfolded*/
      e[5] ? a ? (a.p(e, u), u[0] & /*unfolded*/
      32 && _(a, 1)) : (a = Q(e), a.c(), _(a, 1), a.m(i.parentNode, i)) : a && (M(), p(a, 1, 1, () => {
        a = null;
      }), q());
    },
    i(e) {
      o || (_(a), o = !0);
    },
    o(e) {
      p(a), o = !1;
    },
    d(e) {
      a && a.d(e), e && w(i);
    }
  };
}
function ve(t, i, o) {
  let a, e, u, s, { tag: n } = i, { mediaData: l } = i, { inDelay: m = 0 } = i, { outDelay: I = 0 } = i, { duration: d = 0 } = i, { unfolded: g = !0 } = i, { animation: b = !0 } = i, { mediaItemConfig: j } = i, { enableCarousel: C = !0 } = i, { autoplayConfig: v = {} } = i;
  const { autoplayVideo: ee = !1, autoplayCarousel: te = !0, autoplayVideoInCarousel: De = !1 } = v;
  let c = [], y = 0, h, L = null;
  const B = F("hooks"), O = F("mediaStore");
  function T() {
    const r = c[y], f = r == null ? void 0 : r.videoInstance;
    f && (f.paused ? (f.muted = !1, f.play()) : f.pause());
  }
  me(() => {
    B.on("click", (r) => {
      var f, z, A;
      (A = (z = (f = n.tag3DContentSvelte) == null ? void 0 : f.css3DInstance) == null ? void 0 : z.css3DObject) != null && A.opacityMesh && r.tag.id === n.id && T();
    }), o(
      0,
      n.play = () => {
        const r = c[y], f = r == null ? void 0 : r.videoInstance;
        f && (f.muted = !1, f.play());
      },
      n
    ), o(
      0,
      n.pause = () => {
        const r = c[y], f = r == null ? void 0 : r.videoInstance;
        f && f.pause();
      },
      n
    ), L = setInterval(
      () => {
        s && (h == null || h.goToNext());
      },
      3e3
    );
  }), fe(() => {
    clearInterval(L), B.off("click", T);
  });
  function ne(r, f) {
    t.$$.not_equal(c[f], r) && (c[f] = r, o(8, c));
  }
  function ie(r) {
    E[r ? "unshift" : "push"](() => {
      h = r, o(12, h);
    });
  }
  const ae = (r) => {
    a || O.set({ currentMediaElement: null }), o(11, y = r.detail);
  };
  function oe(r) {
    t.$$.not_equal(c[0], r) && (c[0] = r, o(8, c));
  }
  return t.$$set = (r) => {
    "tag" in r && o(0, n = r.tag), "mediaData" in r && o(1, l = r.mediaData), "inDelay" in r && o(2, m = r.inDelay), "outDelay" in r && o(3, I = r.outDelay), "duration" in r && o(4, d = r.duration), "unfolded" in r && o(5, g = r.unfolded), "animation" in r && o(6, b = r.animation), "mediaItemConfig" in r && o(7, j = r.mediaItemConfig), "enableCarousel" in r && o(16, C = r.enableCarousel), "autoplayConfig" in r && o(17, v = r.autoplayConfig);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*mediaInstanceList*/
    256 && o(9, a = c.every((r) => r.paused)), t.$$.dirty[0] & /*enableCarousel, mediaData*/
    65538 && o(13, e = C && (l == null ? void 0 : l.length) > 1), t.$$.dirty[0] & /*mediaData*/
    2 && o(10, u = l), t.$$.dirty[0] & /*mediaDataList, paused*/
    1536 && (s = u.length > 1 && te && a);
  }, [
    n,
    l,
    m,
    I,
    d,
    g,
    b,
    j,
    c,
    a,
    u,
    y,
    h,
    e,
    ee,
    O,
    C,
    v,
    ne,
    ie,
    ae,
    oe
  ];
}
class lt extends le {
  constructor(i) {
    super(), re(
      this,
      i,
      ve,
      Ce,
      se,
      {
        tag: 0,
        mediaData: 1,
        inDelay: 2,
        outDelay: 3,
        duration: 4,
        unfolded: 5,
        animation: 6,
        mediaItemConfig: 7,
        enableCarousel: 16,
        autoplayConfig: 17
      },
      he,
      [-1, -1]
    );
  }
}
export {
  lt as default
};
