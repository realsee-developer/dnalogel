import { SvelteComponent as ae, init as oe, safe_not_equal as le, append_styles as re, empty as Q, insert as q, transition_in as _, transition_out as p, check_outros as D, detach as w, getContext as A, onMount as ue, onDestroy as se, element as F, attr as G, toggle_class as k, append as me, group_outros as M, add_render_callback as fe, create_in_transition as de, identity as H, create_out_transition as ce, binding_callbacks as E, assign as R, bind as U, create_component as S, mount_component as V, get_spread_update as W, get_spread_object as X, add_flush_callback as Y, destroy_component as N, destroy_each as _e } from "../../../vendor/svelte/internal/index.js";
import { Carousel as ge } from "../../../vendor/svelte-carousel/src/components/Carousel/Carousel.js";
import { fly as J } from "../../../vendor/svelte/transition/index.js";
import Z from "./MediaItem.js";
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
function pe(t) {
  re(t, "svelte-1mrbqlg", ".media-list-wrapper.svelte-1mrbqlg.svelte-1mrbqlg{width:100%;height:100%;position:relative;overflow:hidden;border-radius:0.125rem}.media-list-wrapper.svelte-1mrbqlg .media-list.svelte-1mrbqlg{position:relative;pointer-events:auto;height:100%;left:50%;top:50%;transform:translate(-50%, -50%)}.media-list-wrapper.svelte-1mrbqlg .media-list.svelte-1mrbqlg .sc-carousel__carousel-container,.media-list-wrapper.svelte-1mrbqlg .media-list.svelte-1mrbqlg .sc-carousel__content-container{height:100%}");
}
function K(t, i, o) {
  const a = t.slice();
  return a[28] = i[o], a[29] = i, a[30] = o, a;
}
function O(t) {
  let i, o, a, e, s, u, n;
  const r = [he, be], m = [];
  function I(d, g) {
    return (
      /*carouselEnabled*/
      d[13] && /*mediaDataList*/
      d[10].length > 1 ? 0 : 1
    );
  }
  return a = I(t), e = m[a] = r[a](t), {
    c() {
      i = F("div"), o = F("div"), e.c(), G(o, "class", "media-list svelte-1mrbqlg"), k(
        o,
        "carouselEnabled",
        /*carouselEnabled*/
        t[13]
      ), G(i, "class", "media-list-wrapper svelte-1mrbqlg"), k(
        i,
        "unfolded",
        /*unfolded*/
        t[5]
      );
    },
    m(d, g) {
      q(d, i, g), me(i, o), m[a].m(o, null), n = !0;
    },
    p(d, g) {
      t = d;
      let b = a;
      a = I(t), a === b ? m[a].p(t, g) : (M(), p(m[b], 1, 1, () => {
        m[b] = null;
      }), D(), e = m[a], e ? e.p(t, g) : (e = m[a] = r[a](t), e.c()), _(e, 1), e.m(o, null)), (!n || g[0] & /*carouselEnabled*/
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
      n || (_(e), d && fe(() => {
        n && (u && u.end(1), s = de(
          i,
          J,
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
            easing: H
          } : void 0
        ), s.start());
      }), n = !0);
    },
    o(d) {
      p(e), s && s.invalidate(), d && (u = ce(
        i,
        J,
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
          easing: H
        } : void 0
      )), n = !1;
    },
    d(d) {
      d && w(i), m[a].d(), d && u && u.end();
    }
  };
}
function be(t) {
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
  function s(n) {
    t[21](n);
  }
  let u = {};
  for (let n = 0; n < e.length; n += 1)
    u = R(u, e[n]);
  return (
    /*mediaInstanceList*/
    t[8][0] !== void 0 && (u.mediaInstance = /*mediaInstanceList*/
    t[8][0]), i = new Z({ props: u }), E.push(() => U(i, "mediaInstance", s)), {
      c() {
        S(i.$$.fragment);
      },
      m(n, r) {
        V(i, n, r), a = !0;
      },
      p(n, r) {
        const m = r[0] & /*mediaData, autoplayVideo, mediaItemConfig, tag*/
        16515 ? W(e, [
          r[0] & /*mediaData*/
          2 && { media: (
            /*mediaData*/
            n[1][0]
          ) },
          r[0] & /*autoplayVideo*/
          16384 && { autoplayVideo: (
            /*autoplayVideo*/
            n[14]
          ) },
          r[0] & /*mediaItemConfig*/
          128 && X(
            /*mediaItemConfig*/
            n[7]
          ),
          r[0] & /*tag*/
          1 && { tag: (
            /*tag*/
            n[0]
          ) }
        ]) : {};
        !o && r[0] & /*mediaInstanceList*/
        256 && (o = !0, m.mediaInstance = /*mediaInstanceList*/
        n[8][0], Y(() => o = !1)), i.$set(m);
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
function he(t) {
  let i, o, a = {
    dots: !1,
    arrows: !1,
    $$slots: { default: [Ie] },
    $$scope: { ctx: t }
  };
  return i = new ge({ props: a }), t[19](i), i.$on(
    "pageChange",
    /*pageChange_handler*/
    t[20]
  ), {
    c() {
      S(i.$$.fragment);
    },
    m(e, s) {
      V(i, e, s), o = !0;
    },
    p(e, s) {
      const u = {};
      s[0] & /*mediaDataList, mediaItemConfig, tag, mediaInstanceList*/
      1409 | s[1] & /*$$scope*/
      1 && (u.$$scope = { dirty: s, ctx: e }), i.$set(u);
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
function P(t) {
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
  function s(n) {
    t[18](
      n,
      /*index*/
      t[30]
    );
  }
  let u = {};
  for (let n = 0; n < e.length; n += 1)
    u = R(u, e[n]);
  return (
    /*mediaInstanceList*/
    t[8][
      /*index*/
      t[30]
    ] !== void 0 && (u.mediaInstance = /*mediaInstanceList*/
    t[8][
      /*index*/
      t[30]
    ]), i = new Z({ props: u }), E.push(() => U(i, "mediaInstance", s)), {
      c() {
        S(i.$$.fragment);
      },
      m(n, r) {
        V(i, n, r), a = !0;
      },
      p(n, r) {
        t = n;
        const m = r[0] & /*mediaItemConfig, mediaDataList, tag*/
        1153 ? W(e, [
          r[0] & /*mediaItemConfig*/
          128 && X(
            /*mediaItemConfig*/
            t[7]
          ),
          r[0] & /*mediaDataList*/
          1024 && { media: (
            /*media*/
            t[28]
          ) },
          r[0] & /*tag*/
          1 && { tag: (
            /*tag*/
            t[0]
          ) }
        ]) : {};
        !o && r[0] & /*mediaInstanceList*/
        256 && (o = !0, m.mediaInstance = /*mediaInstanceList*/
        t[8][
          /*index*/
          t[30]
        ], Y(() => o = !1)), i.$set(m);
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
function Ie(t) {
  let i, o, a = (
    /*mediaDataList*/
    t[10]
  ), e = [];
  for (let u = 0; u < a.length; u += 1)
    e[u] = P(K(t, a, u));
  const s = (u) => p(e[u], 1, 1, () => {
    e[u] = null;
  });
  return {
    c() {
      for (let u = 0; u < e.length; u += 1)
        e[u].c();
      i = Q();
    },
    m(u, n) {
      for (let r = 0; r < e.length; r += 1)
        e[r] && e[r].m(u, n);
      q(u, i, n), o = !0;
    },
    p(u, n) {
      if (n[0] & /*mediaItemConfig, mediaDataList, tag, mediaInstanceList*/
      1409) {
        a = /*mediaDataList*/
        u[10];
        let r;
        for (r = 0; r < a.length; r += 1) {
          const m = K(u, a, r);
          e[r] ? (e[r].p(m, n), _(e[r], 1)) : (e[r] = P(m), e[r].c(), _(e[r], 1), e[r].m(i.parentNode, i));
        }
        for (M(), r = a.length; r < e.length; r += 1)
          s(r);
        D();
      }
    },
    i(u) {
      if (!o) {
        for (let n = 0; n < a.length; n += 1)
          _(e[n]);
        o = !0;
      }
    },
    o(u) {
      e = e.filter(Boolean);
      for (let n = 0; n < e.length; n += 1)
        p(e[n]);
      o = !1;
    },
    d(u) {
      _e(e, u), u && w(i);
    }
  };
}
function ye(t) {
  let i, o, a = (
    /*unfolded*/
    t[5] && O(t)
  );
  return {
    c() {
      a && a.c(), i = Q();
    },
    m(e, s) {
      a && a.m(e, s), q(e, i, s), o = !0;
    },
    p(e, s) {
      /*unfolded*/
      e[5] ? a ? (a.p(e, s), s[0] & /*unfolded*/
      32 && _(a, 1)) : (a = O(e), a.c(), _(a, 1), a.m(i.parentNode, i)) : a && (M(), p(a, 1, 1, () => {
        a = null;
      }), D());
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
function ke(t, i, o) {
  let a, e, s, u, { tag: n } = i, { mediaData: r } = i, { inDelay: m = 0 } = i, { outDelay: I = 0 } = i, { duration: d = 0 } = i, { unfolded: g = !0 } = i, { animation: b = !0 } = i, { mediaItemConfig: L } = i, { enableCarousel: C = !0 } = i, { autoplayConfig: v = {} } = i;
  const { autoplayVideo: x = !1, autoplayCarousel: $ = !0, autoplayVideoInCarousel: Ce = !1 } = v;
  let c = [], y = 0, h, T = null;
  const j = A("hooks"), B = A("mediaStore");
  function z() {
    const l = c[y], f = l == null ? void 0 : l.videoInstance;
    f && (f.paused ? (f.muted = !1, f.play()) : f.pause());
  }
  ue(() => {
    j.on("click", (l) => {
      var f;
      (f = n.tag3DContentSvelte) != null && f.css3DInstance && l.tag.id === n.id && l.target === "TagContent" && z();
    }), o(
      0,
      n.play = () => {
        const l = c[y], f = l == null ? void 0 : l.videoInstance;
        f && (f.muted = !1, f.play());
      },
      n
    ), o(
      0,
      n.pause = () => {
        const l = c[y], f = l == null ? void 0 : l.videoInstance;
        f && f.pause();
      },
      n
    ), T = setInterval(
      () => {
        u && (h == null || h.goToNext());
      },
      3e3
    );
  }), se(() => {
    clearInterval(T), j.off("click", z);
  });
  function ee(l, f) {
    t.$$.not_equal(c[f], l) && (c[f] = l, o(8, c));
  }
  function te(l) {
    E[l ? "unshift" : "push"](() => {
      h = l, o(12, h);
    });
  }
  const ne = (l) => {
    a || B.set({ currentMediaElement: null }), o(11, y = l.detail);
  };
  function ie(l) {
    t.$$.not_equal(c[0], l) && (c[0] = l, o(8, c));
  }
  return t.$$set = (l) => {
    "tag" in l && o(0, n = l.tag), "mediaData" in l && o(1, r = l.mediaData), "inDelay" in l && o(2, m = l.inDelay), "outDelay" in l && o(3, I = l.outDelay), "duration" in l && o(4, d = l.duration), "unfolded" in l && o(5, g = l.unfolded), "animation" in l && o(6, b = l.animation), "mediaItemConfig" in l && o(7, L = l.mediaItemConfig), "enableCarousel" in l && o(16, C = l.enableCarousel), "autoplayConfig" in l && o(17, v = l.autoplayConfig);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*mediaInstanceList*/
    256 && o(9, a = c.every((l) => l.paused)), t.$$.dirty[0] & /*enableCarousel, mediaData*/
    65538 && o(13, e = C && (r == null ? void 0 : r.length) > 1), t.$$.dirty[0] & /*mediaData*/
    2 && o(10, s = r), t.$$.dirty[0] & /*mediaDataList, paused*/
    1536 && (u = s.length > 1 && $ && a);
  }, [
    n,
    r,
    m,
    I,
    d,
    g,
    b,
    L,
    c,
    a,
    s,
    y,
    h,
    e,
    x,
    B,
    C,
    v,
    ee,
    te,
    ne,
    ie
  ];
}
class at extends ae {
  constructor(i) {
    super(), oe(
      this,
      i,
      ke,
      ye,
      le,
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
      pe,
      [-1, -1]
    );
  }
}
export {
  at as default
};
