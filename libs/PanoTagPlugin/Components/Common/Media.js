import { SvelteComponent as oe, init as re, safe_not_equal as me, append_styles as ue, empty as U, insert as D, transition_in as c, transition_out as p, check_outros as q, detach as w, getContext as F, onMount as se, onDestroy as fe, element as G, attr as H, toggle_class as y, append as de, group_outros as M, add_render_callback as ce, create_in_transition as _e, identity as J, create_out_transition as ge, binding_callbacks as E, assign as W, bind as X, create_component as S, mount_component as V, get_spread_update as Y, get_spread_object as Z, add_flush_callback as x, destroy_component as N, destroy_each as pe } from "../../../vendor/svelte/internal/index.js";
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
function P(t, i, l) {
  const a = t.slice();
  return a[28] = i[l], a[29] = i, a[30] = l, a;
}
function Q(t) {
  let i, l, a, e, u, r, n;
  const o = [ye, Ie], s = [];
  function I(f, _) {
    return (
      /*carouselEnabled*/
      f[13] && /*mediaDataList*/
      f[10].length > 1 ? 0 : 1
    );
  }
  return a = I(t), e = s[a] = o[a](t), {
    c() {
      i = G("div"), l = G("div"), e.c(), H(l, "class", "media-list svelte-1mrbqlg"), y(
        l,
        "carouselEnabled",
        /*carouselEnabled*/
        t[13]
      ), H(i, "class", "media-list-wrapper svelte-1mrbqlg"), y(
        i,
        "unfolded",
        /*unfolded*/
        t[5]
      );
    },
    m(f, _) {
      D(f, i, _), de(i, l), s[a].m(l, null), n = !0;
    },
    p(f, _) {
      t = f;
      let b = a;
      a = I(t), a === b ? s[a].p(t, _) : (M(), p(s[b], 1, 1, () => {
        s[b] = null;
      }), q(), e = s[a], e ? e.p(t, _) : (e = s[a] = o[a](t), e.c()), c(e, 1), e.m(l, null)), (!n || _[0] & /*carouselEnabled*/
      8192) && y(
        l,
        "carouselEnabled",
        /*carouselEnabled*/
        t[13]
      ), (!n || _[0] & /*unfolded*/
      32) && y(
        i,
        "unfolded",
        /*unfolded*/
        t[5]
      );
    },
    i(f) {
      n || (c(e), f && ce(() => {
        n && (r && r.end(1), u = _e(
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
    o(f) {
      p(e), u && u.invalidate(), f && (r = ge(
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
    d(f) {
      f && w(i), s[a].d(), f && r && r.end();
    }
  };
}
function Ie(t) {
  let i, l, a;
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
  let r = {};
  for (let n = 0; n < e.length; n += 1)
    r = W(r, e[n]);
  return (
    /*mediaInstanceList*/
    t[8][0] !== void 0 && (r.mediaInstance = /*mediaInstanceList*/
    t[8][0]), i = new $({ props: r }), E.push(() => X(i, "mediaInstance", u)), {
      c() {
        S(i.$$.fragment);
      },
      m(n, o) {
        V(i, n, o), a = !0;
      },
      p(n, o) {
        const s = o[0] & /*mediaData, autoplayVideo, mediaItemConfig, tag*/
        16515 ? Y(e, [
          o[0] & /*mediaData*/
          2 && { media: (
            /*mediaData*/
            n[1][0]
          ) },
          o[0] & /*autoplayVideo*/
          16384 && { autoplayVideo: (
            /*autoplayVideo*/
            n[14]
          ) },
          o[0] & /*mediaItemConfig*/
          128 && Z(
            /*mediaItemConfig*/
            n[7]
          ),
          o[0] & /*tag*/
          1 && { tag: (
            /*tag*/
            n[0]
          ) }
        ]) : {};
        !l && o[0] & /*mediaInstanceList*/
        256 && (l = !0, s.mediaInstance = /*mediaInstanceList*/
        n[8][0], x(() => l = !1)), i.$set(s);
      },
      i(n) {
        a || (c(i.$$.fragment, n), a = !0);
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
  let i, l, a = {
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
      V(i, e, u), l = !0;
    },
    p(e, u) {
      const r = {};
      u[0] & /*mediaDataList, mediaItemConfig, tag, mediaInstanceList*/
      1409 | u[1] & /*$$scope*/
      1 && (r.$$scope = { dirty: u, ctx: e }), i.$set(r);
    },
    i(e) {
      l || (c(i.$$.fragment, e), l = !0);
    },
    o(e) {
      p(i.$$.fragment, e), l = !1;
    },
    d(e) {
      t[19](null), N(i, e);
    }
  };
}
function R(t) {
  let i, l, a;
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
  let r = {};
  for (let n = 0; n < e.length; n += 1)
    r = W(r, e[n]);
  return (
    /*mediaInstanceList*/
    t[8][
      /*index*/
      t[30]
    ] !== void 0 && (r.mediaInstance = /*mediaInstanceList*/
    t[8][
      /*index*/
      t[30]
    ]), i = new $({ props: r }), E.push(() => X(i, "mediaInstance", u)), {
      c() {
        S(i.$$.fragment);
      },
      m(n, o) {
        V(i, n, o), a = !0;
      },
      p(n, o) {
        t = n;
        const s = o[0] & /*mediaItemConfig, mediaDataList, tag*/
        1153 ? Y(e, [
          o[0] & /*mediaItemConfig*/
          128 && Z(
            /*mediaItemConfig*/
            t[7]
          ),
          o[0] & /*mediaDataList*/
          1024 && { media: (
            /*media*/
            t[28]
          ) },
          o[0] & /*tag*/
          1 && { tag: (
            /*tag*/
            t[0]
          ) }
        ]) : {};
        !l && o[0] & /*mediaInstanceList*/
        256 && (l = !0, s.mediaInstance = /*mediaInstanceList*/
        t[8][
          /*index*/
          t[30]
        ], x(() => l = !1)), i.$set(s);
      },
      i(n) {
        a || (c(i.$$.fragment, n), a = !0);
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
  let i, l, a = (
    /*mediaDataList*/
    t[10]
  ), e = [];
  for (let r = 0; r < a.length; r += 1)
    e[r] = R(P(t, a, r));
  const u = (r) => p(e[r], 1, 1, () => {
    e[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < e.length; r += 1)
        e[r].c();
      i = U();
    },
    m(r, n) {
      for (let o = 0; o < e.length; o += 1)
        e[o] && e[o].m(r, n);
      D(r, i, n), l = !0;
    },
    p(r, n) {
      if (n[0] & /*mediaItemConfig, mediaDataList, tag, mediaInstanceList*/
      1409) {
        a = /*mediaDataList*/
        r[10];
        let o;
        for (o = 0; o < a.length; o += 1) {
          const s = P(r, a, o);
          e[o] ? (e[o].p(s, n), c(e[o], 1)) : (e[o] = R(s), e[o].c(), c(e[o], 1), e[o].m(i.parentNode, i));
        }
        for (M(), o = a.length; o < e.length; o += 1)
          u(o);
        q();
      }
    },
    i(r) {
      if (!l) {
        for (let n = 0; n < a.length; n += 1)
          c(e[n]);
        l = !0;
      }
    },
    o(r) {
      e = e.filter(Boolean);
      for (let n = 0; n < e.length; n += 1)
        p(e[n]);
      l = !1;
    },
    d(r) {
      pe(e, r), r && w(i);
    }
  };
}
function Ce(t) {
  let i, l, a = (
    /*unfolded*/
    t[5] && Q(t)
  );
  return {
    c() {
      a && a.c(), i = U();
    },
    m(e, u) {
      a && a.m(e, u), D(e, i, u), l = !0;
    },
    p(e, u) {
      /*unfolded*/
      e[5] ? a ? (a.p(e, u), u[0] & /*unfolded*/
      32 && c(a, 1)) : (a = Q(e), a.c(), c(a, 1), a.m(i.parentNode, i)) : a && (M(), p(a, 1, 1, () => {
        a = null;
      }), q());
    },
    i(e) {
      l || (c(a), l = !0);
    },
    o(e) {
      p(a), l = !1;
    },
    d(e) {
      a && a.d(e), e && w(i);
    }
  };
}
function ve(t, i, l) {
  let a, e, u, r, { tag: n } = i, { mediaData: o } = i, { inDelay: s = 0 } = i, { outDelay: I = 0 } = i, { duration: f = 0 } = i, { unfolded: _ = !0 } = i, { animation: b = !0 } = i, { mediaItemConfig: j } = i, { enableCarousel: k = !0 } = i, { autoplayConfig: C = {} } = i;
  const { autoplayVideo: ee = !1, autoplayCarousel: te = !0, autoplayVideoInCarousel: De = !1 } = C;
  let g = [], v = 0, h, L = null;
  const B = F("hooks"), O = F("mediaStore");
  function T() {
    const m = g[v], d = m == null ? void 0 : m.videoInstance;
    d && (d.paused ? (d.muted = !1, d.play()) : d.pause());
  }
  se(() => {
    B.on("click", (m) => {
      var d, z, A;
      (A = (z = (d = n.tag3DContentSvelte) == null ? void 0 : d.css3DInstance) == null ? void 0 : z.css3DObject) != null && A.opacityMesh && m.tag.id === n.id && T();
    }), L = setInterval(
      () => {
        r && (h == null || h.goToNext());
      },
      3e3
    );
  }), fe(() => {
    clearInterval(L), B.off("click", T);
  });
  function ie(m, d) {
    t.$$.not_equal(g[d], m) && (g[d] = m, l(8, g));
  }
  function ne(m) {
    E[m ? "unshift" : "push"](() => {
      h = m, l(12, h);
    });
  }
  const ae = (m) => {
    a || O.set({ currentMediaElement: null }), l(11, v = m.detail);
  };
  function le(m) {
    t.$$.not_equal(g[0], m) && (g[0] = m, l(8, g));
  }
  return t.$$set = (m) => {
    "tag" in m && l(0, n = m.tag), "mediaData" in m && l(1, o = m.mediaData), "inDelay" in m && l(2, s = m.inDelay), "outDelay" in m && l(3, I = m.outDelay), "duration" in m && l(4, f = m.duration), "unfolded" in m && l(5, _ = m.unfolded), "animation" in m && l(6, b = m.animation), "mediaItemConfig" in m && l(7, j = m.mediaItemConfig), "enableCarousel" in m && l(16, k = m.enableCarousel), "autoplayConfig" in m && l(17, C = m.autoplayConfig);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*mediaInstanceList*/
    256 && l(9, a = g.every((m) => m.paused)), t.$$.dirty[0] & /*enableCarousel, mediaData*/
    65538 && l(13, e = k && (o == null ? void 0 : o.length) > 1), t.$$.dirty[0] & /*mediaData*/
    2 && l(10, u = o), t.$$.dirty[0] & /*mediaDataList, paused*/
    1536 && (r = u.length > 1 && te && a);
  }, [
    n,
    o,
    s,
    I,
    f,
    _,
    b,
    j,
    g,
    a,
    u,
    v,
    h,
    e,
    ee,
    O,
    k,
    C,
    ie,
    ne,
    ae,
    le
  ];
}
class ot extends oe {
  constructor(i) {
    super(), re(
      this,
      i,
      ve,
      Ce,
      me,
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
  ot as default
};
