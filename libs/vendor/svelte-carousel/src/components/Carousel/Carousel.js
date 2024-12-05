var k = (e, o, n) => new Promise((l, t) => {
  var i = (w) => {
    try {
      v(n.next(w));
    } catch (C) {
      t(C);
    }
  }, s = (w) => {
    try {
      v(n.throw(w));
    } catch (C) {
      t(C);
    }
  }, v = (w) => w.done ? l(w.value) : Promise.resolve(w.value).then(i, s);
  v((n = n.apply(e, o)).next());
});
import { SvelteComponent as Oe, init as Ve, safe_not_equal as Re, append_styles as He, create_slot as H, element as z, space as O, attr as D, set_style as F, insert as X, append as S, action_destroyer as $, listen as y, transition_in as m, group_outros as V, transition_out as p, check_outros as R, update_slot_base as A, get_all_dirty_from_scope as j, get_slot_changes as q, is_function as Xe, detach as B, run_all as Ae, createEventDispatcher as je, onMount as qe, tick as ae, onDestroy as Be, create_component as G, mount_component as J, destroy_component as K, binding_callbacks as le } from "../../../../svelte/internal/index.js";
import { Dots as Ge } from "../Dots/Dots.js";
import { Arrow as he } from "../Arrow/Arrow.js";
import { Progress as Je } from "../Progress/Progress.js";
import { NEXT as se, PREV as Ke } from "../../direction.js";
import { swipeable as Le } from "../../actions/swipeable/swipeable.js";
import { hoverable as Qe } from "../../actions/hoverable/hoverable.js";
import { tappable as Ue } from "../../actions/tappable/tappable.js";
import { createResizeObserver as Ye, applyParticleSizes as Ze } from "../../utils/page.js";
import { getClones as xe, applyClones as $e } from "../../utils/clones.js";
import { get as ee, switcher as re } from "../../utils/object.js";
import { createCarousel as et } from "./createCarousel.js";
function tt(e) {
  He(e, "svelte-sme1z4", ":root{--sc-color-rgb-light-50p:rgba(93, 93, 93, 0.5);--sc-color-rgb-light:#5d5d5d;--sc-color-hex-dark-50p:rgba(30, 30, 30, 0.5);--sc-color-hex-dark:#1e1e1e}.sc-carousel__carousel-container.svelte-sme1z4{display:flex;width:100%;flex-direction:column;align-items:center}.sc-carousel__content-container.svelte-sme1z4{position:relative;display:flex;width:100%}.sc-carousel__pages-window.svelte-sme1z4{flex:1;display:flex;overflow:hidden;box-sizing:border-box;position:relative}.sc-carousel__pages-container.svelte-sme1z4{width:100%;display:flex;transition-property:transform}.sc-carousel__arrow-container.svelte-sme1z4{padding:5px;box-sizing:border-box;display:flex;align-items:center;justify-content:center}.sc-carousel-progress__container.svelte-sme1z4{width:100%;height:5px;background-color:var(--sc-color-rgb-light-50p);position:absolute;bottom:0}.sc-carousel-button{all:unset;cursor:pointer}.sc-carousel-button:focus{outline:5px auto}");
}
const nt = (e) => ({
  currentPageIndex: e[0] & /*currentPageIndex*/
  32,
  pagesCount: e[0] & /*pagesCount*/
  1024,
  loaded: e[0] & /*loaded*/
  64
}), ue = (e) => ({
  currentPageIndex: (
    /*currentPageIndex*/
    e[5]
  ),
  pagesCount: (
    /*pagesCount*/
    e[10]
  ),
  showPage: (
    /*handlePageChange*/
    e[15]
  ),
  loaded: (
    /*loaded*/
    e[6]
  )
}), ot = (e) => ({
  loaded: e[0] & /*loaded*/
  64,
  currentPageIndex: e[0] & /*currentPageIndex*/
  32
}), ce = (e) => ({
  showNextPage: (
    /*methods*/
    e[14].showNextPage
  ),
  loaded: (
    /*loaded*/
    e[6]
  ),
  currentPageIndex: (
    /*currentPageIndex*/
    e[5]
  )
}), it = (e) => ({
  loaded: e[0] & /*loaded*/
  64,
  currentPageIndex: e[0] & /*currentPageIndex*/
  32
}), fe = (e) => ({
  loaded: (
    /*loaded*/
    e[6]
  ),
  currentPageIndex: (
    /*currentPageIndex*/
    e[5]
  )
}), at = (e) => ({
  loaded: e[0] & /*loaded*/
  64,
  currentPageIndex: e[0] & /*currentPageIndex*/
  32
}), de = (e) => ({
  showPrevPage: (
    /*methods*/
    e[14].showPrevPage
  ),
  loaded: (
    /*loaded*/
    e[6]
  ),
  currentPageIndex: (
    /*currentPageIndex*/
    e[5]
  )
});
function ge(e) {
  let o;
  const n = (
    /*#slots*/
    e[37].prev
  ), l = H(
    n,
    e,
    /*$$scope*/
    e[36],
    de
  ), t = l || lt(e);
  return {
    c() {
      t && t.c();
    },
    m(i, s) {
      t && t.m(i, s), o = !0;
    },
    p(i, s) {
      l ? l.p && (!o || s[0] & /*loaded, currentPageIndex*/
      96 | s[1] & /*$$scope*/
      32) && A(
        l,
        n,
        i,
        /*$$scope*/
        i[36],
        o ? q(
          n,
          /*$$scope*/
          i[36],
          s,
          at
        ) : j(
          /*$$scope*/
          i[36]
        ),
        de
      ) : t && t.p && (!o || s[0] & /*infinite, currentPageIndex*/
      36) && t.p(i, o ? s : [-1, -1]);
    },
    i(i) {
      o || (m(t, i), o = !0);
    },
    o(i) {
      p(t, i), o = !1;
    },
    d(i) {
      t && t.d(i);
    }
  };
}
function lt(e) {
  let o, n, l;
  return n = new he({
    props: {
      direction: "prev",
      disabled: !/*infinite*/
      e[2] && /*currentPageIndex*/
      e[5] === 0
    }
  }), n.$on(
    "click",
    /*showPrevPage*/
    e[23]
  ), {
    c() {
      o = z("div"), G(n.$$.fragment), D(o, "class", "sc-carousel__arrow-container svelte-sme1z4");
    },
    m(t, i) {
      X(t, o, i), J(n, o, null), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & /*infinite, currentPageIndex*/
      36 && (s.disabled = !/*infinite*/
      t[2] && /*currentPageIndex*/
      t[5] === 0), n.$set(s);
    },
    i(t) {
      l || (m(n.$$.fragment, t), l = !0);
    },
    o(t) {
      p(n.$$.fragment, t), l = !1;
    },
    d(t) {
      t && B(o), K(n);
    }
  };
}
function _e(e) {
  let o, n, l;
  return n = new Je({
    props: { value: (
      /*progressValue*/
      e[7]
    ) }
  }), {
    c() {
      o = z("div"), G(n.$$.fragment), D(o, "class", "sc-carousel-progress__container svelte-sme1z4");
    },
    m(t, i) {
      X(t, o, i), J(n, o, null), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & /*progressValue*/
      128 && (s.value = /*progressValue*/
      t[7]), n.$set(s);
    },
    i(t) {
      l || (m(n.$$.fragment, t), l = !0);
    },
    o(t) {
      p(n.$$.fragment, t), l = !1;
    },
    d(t) {
      t && B(o), K(n);
    }
  };
}
function me(e) {
  let o;
  const n = (
    /*#slots*/
    e[37].next
  ), l = H(
    n,
    e,
    /*$$scope*/
    e[36],
    ce
  ), t = l || st(e);
  return {
    c() {
      t && t.c();
    },
    m(i, s) {
      t && t.m(i, s), o = !0;
    },
    p(i, s) {
      l ? l.p && (!o || s[0] & /*loaded, currentPageIndex*/
      96 | s[1] & /*$$scope*/
      32) && A(
        l,
        n,
        i,
        /*$$scope*/
        i[36],
        o ? q(
          n,
          /*$$scope*/
          i[36],
          s,
          ot
        ) : j(
          /*$$scope*/
          i[36]
        ),
        ce
      ) : t && t.p && (!o || s[0] & /*infinite, currentPageIndex, pagesCount*/
      1060) && t.p(i, o ? s : [-1, -1]);
    },
    i(i) {
      o || (m(t, i), o = !0);
    },
    o(i) {
      p(t, i), o = !1;
    },
    d(i) {
      t && t.d(i);
    }
  };
}
function st(e) {
  let o, n, l;
  return n = new he({
    props: {
      direction: "next",
      disabled: !/*infinite*/
      e[2] && /*currentPageIndex*/
      e[5] === /*pagesCount*/
      e[10] - 1
    }
  }), n.$on(
    "click",
    /*methods*/
    e[14].showNextPage
  ), {
    c() {
      o = z("div"), G(n.$$.fragment), D(o, "class", "sc-carousel__arrow-container svelte-sme1z4");
    },
    m(t, i) {
      X(t, o, i), J(n, o, null), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & /*infinite, currentPageIndex, pagesCount*/
      1060 && (s.disabled = !/*infinite*/
      t[2] && /*currentPageIndex*/
      t[5] === /*pagesCount*/
      t[10] - 1), n.$set(s);
    },
    i(t) {
      l || (m(n.$$.fragment, t), l = !0);
    },
    o(t) {
      p(n.$$.fragment, t), l = !1;
    },
    d(t) {
      t && B(o), K(n);
    }
  };
}
function pe(e) {
  let o;
  const n = (
    /*#slots*/
    e[37].dots
  ), l = H(
    n,
    e,
    /*$$scope*/
    e[36],
    ue
  ), t = l || rt(e);
  return {
    c() {
      t && t.c();
    },
    m(i, s) {
      t && t.m(i, s), o = !0;
    },
    p(i, s) {
      l ? l.p && (!o || s[0] & /*currentPageIndex, pagesCount, loaded*/
      1120 | s[1] & /*$$scope*/
      32) && A(
        l,
        n,
        i,
        /*$$scope*/
        i[36],
        o ? q(
          n,
          /*$$scope*/
          i[36],
          s,
          nt
        ) : j(
          /*$$scope*/
          i[36]
        ),
        ue
      ) : t && t.p && (!o || s[0] & /*pagesCount, currentPageIndex*/
      1056) && t.p(i, o ? s : [-1, -1]);
    },
    i(i) {
      o || (m(t, i), o = !0);
    },
    o(i) {
      p(t, i), o = !1;
    },
    d(i) {
      t && t.d(i);
    }
  };
}
function rt(e) {
  let o, n;
  return o = new Ge({
    props: {
      pagesCount: (
        /*pagesCount*/
        e[10]
      ),
      currentPageIndex: (
        /*currentPageIndex*/
        e[5]
      )
    }
  }), o.$on(
    "pageChange",
    /*pageChange_handler*/
    e[41]
  ), {
    c() {
      G(o.$$.fragment);
    },
    m(l, t) {
      J(o, l, t), n = !0;
    },
    p(l, t) {
      const i = {};
      t[0] & /*pagesCount*/
      1024 && (i.pagesCount = /*pagesCount*/
      l[10]), t[0] & /*currentPageIndex*/
      32 && (i.currentPageIndex = /*currentPageIndex*/
      l[5]), o.$set(i);
    },
    i(l) {
      n || (m(o.$$.fragment, l), n = !0);
    },
    o(l) {
      p(o.$$.fragment, l), n = !1;
    },
    d(l) {
      K(o, l);
    }
  };
}
function ut(e) {
  let o, n, l, t, i, s, v, w, C, P, c, E, u = (
    /*arrows*/
    e[1] && ge(e)
  );
  const M = (
    /*#slots*/
    e[37].default
  ), b = H(
    M,
    e,
    /*$$scope*/
    e[36],
    fe
  );
  let d = (
    /*autoplayProgressVisible*/
    e[3] && _e(e)
  ), g = (
    /*arrows*/
    e[1] && me(e)
  ), f = (
    /*dots*/
    e[4] && pe(e)
  );
  return {
    c() {
      o = z("div"), n = z("div"), u && u.c(), l = O(), t = z("div"), i = z("div"), b && b.c(), v = O(), d && d.c(), w = O(), g && g.c(), C = O(), f && f.c(), D(i, "class", "sc-carousel__pages-container svelte-sme1z4"), F(i, "transform", "translateX(" + /*offset*/
      e[8] + "px)"), F(
        i,
        "transition-duration",
        /*durationMs*/
        e[9] + "ms"
      ), F(
        i,
        "transition-timing-function",
        /*timingFunction*/
        e[0]
      ), D(t, "class", "sc-carousel__pages-window svelte-sme1z4"), D(n, "class", "sc-carousel__content-container svelte-sme1z4"), D(o, "class", "sc-carousel__carousel-container svelte-sme1z4");
    },
    m(r, _) {
      X(r, o, _), S(o, n), u && u.m(n, null), S(n, l), S(n, t), S(t, i), b && b.m(i, null), e[39](i), S(t, v), d && d.m(t, null), e[40](t), S(n, w), g && g.m(n, null), S(o, C), f && f.m(o, null), P = !0, c || (E = [
        $(s = Le.call(null, i, {
          thresholdProvider: (
            /*swipeable_function*/
            e[38]
          )
        })),
        y(
          i,
          "swipeStart",
          /*handleSwipeStart*/
          e[16]
        ),
        y(
          i,
          "swipeMove",
          /*handleSwipeMove*/
          e[18]
        ),
        y(
          i,
          "swipeEnd",
          /*handleSwipeEnd*/
          e[19]
        ),
        y(
          i,
          "swipeFailed",
          /*handleSwipeFailed*/
          e[20]
        ),
        y(
          i,
          "swipeThresholdReached",
          /*handleSwipeThresholdReached*/
          e[17]
        ),
        $(Qe.call(null, t)),
        y(
          t,
          "hovered",
          /*handleHovered*/
          e[21]
        ),
        $(Ue.call(null, t)),
        y(
          t,
          "tapped",
          /*handleTapped*/
          e[22]
        )
      ], c = !0);
    },
    p(r, _) {
      /*arrows*/
      r[1] ? u ? (u.p(r, _), _[0] & /*arrows*/
      2 && m(u, 1)) : (u = ge(r), u.c(), m(u, 1), u.m(n, l)) : u && (V(), p(u, 1, 1, () => {
        u = null;
      }), R()), b && b.p && (!P || _[0] & /*loaded, currentPageIndex*/
      96 | _[1] & /*$$scope*/
      32) && A(
        b,
        M,
        r,
        /*$$scope*/
        r[36],
        P ? q(
          M,
          /*$$scope*/
          r[36],
          _,
          it
        ) : j(
          /*$$scope*/
          r[36]
        ),
        fe
      ), (!P || _[0] & /*offset*/
      256) && F(i, "transform", "translateX(" + /*offset*/
      r[8] + "px)"), (!P || _[0] & /*durationMs*/
      512) && F(
        i,
        "transition-duration",
        /*durationMs*/
        r[9] + "ms"
      ), (!P || _[0] & /*timingFunction*/
      1) && F(
        i,
        "transition-timing-function",
        /*timingFunction*/
        r[0]
      ), s && Xe(s.update) && _[0] & /*pageWindowWidth*/
      2048 && s.update.call(null, {
        thresholdProvider: (
          /*swipeable_function*/
          r[38]
        )
      }), /*autoplayProgressVisible*/
      r[3] ? d ? (d.p(r, _), _[0] & /*autoplayProgressVisible*/
      8 && m(d, 1)) : (d = _e(r), d.c(), m(d, 1), d.m(t, null)) : d && (V(), p(d, 1, 1, () => {
        d = null;
      }), R()), /*arrows*/
      r[1] ? g ? (g.p(r, _), _[0] & /*arrows*/
      2 && m(g, 1)) : (g = me(r), g.c(), m(g, 1), g.m(n, null)) : g && (V(), p(g, 1, 1, () => {
        g = null;
      }), R()), /*dots*/
      r[4] ? f ? (f.p(r, _), _[0] & /*dots*/
      16 && m(f, 1)) : (f = pe(r), f.c(), m(f, 1), f.m(o, null)) : f && (V(), p(f, 1, 1, () => {
        f = null;
      }), R());
    },
    i(r) {
      P || (m(u), m(b, r), m(d), m(g), m(f), P = !0);
    },
    o(r) {
      p(u), p(b, r), p(d), p(g), p(f), P = !1;
    },
    d(r) {
      r && B(o), u && u.d(), b && b.d(r), e[39](null), d && d.d(), e[40](null), g && g.d(), f && f.d(), c = !1, Ae(E);
    }
  };
}
function ct(e, o, n) {
  let { $$slots: l = {}, $$scope: t } = o, i = [], s, v, w = 0, C = 0, P = 1;
  const [{ data: c, progressManager: E }, u, M] = et((a, h) => {
    re({
      currentPageIndex: () => n(5, s = h),
      progressValue: () => n(7, v = h),
      offset: () => n(8, w = h),
      durationMs: () => n(9, C = h),
      pagesCount: () => n(10, P = h),
      loaded: () => n(6, i = h)
    })(a);
  }), b = je();
  let { timingFunction: d = "ease-in-out" } = o, { arrows: g = !0 } = o, { infinite: f = !0 } = o, { initialPageIndex: r = 0 } = o, { duration: _ = 500 } = o, { autoplay: L = !1 } = o, { autoplayDuration: Q = 3e3 } = o, { autoplayDirection: U = se } = o, { pauseOnFocus: Y = !1 } = o, { autoplayProgressVisible: te = !1 } = o, { dots: ne = !0 } = o, { swiping: I = !0 } = o, { particlesToShow: Z = 1 } = o, { particlesToScroll: x = 1 } = o;
  function we(a, h) {
    return k(this, null, function* () {
      const We = ee(h, "animated", !0);
      if (typeof a != "number")
        throw new Error("pageIndex should be a number");
      yield u.showPage(a, { animated: We });
    });
  }
  function be(a) {
    return k(this, null, function* () {
      const h = ee(a, "animated", !0);
      yield u.showPrevPage({ animated: h });
    });
  }
  function Pe(a) {
    return k(this, null, function* () {
      const h = ee(a, "animated", !0);
      yield u.showNextPage({ animated: h });
    });
  }
  let W = 0, N, T;
  const oe = Ye(({ width: a }) => {
    n(11, W = a), c.particleWidth = W / c.particlesToShow, Ze({
      particlesContainerChildren: T.children,
      particleWidth: c.particleWidth
    }), u.offsetPage({ animated: !1 });
  });
  function ve() {
    const { clonesToAppend: a, clonesToPrepend: h } = xe({
      clonesCountHead: c.clonesCountHead,
      clonesCountTail: c.clonesCountTail,
      particlesContainerChildren: T.children
    });
    $e({
      particlesContainer: T,
      clonesToAppend: a,
      clonesToPrepend: h
    });
  }
  qe(() => {
    k(this, null, function* () {
      yield ae(), T && N && (c.particlesCountWithoutClones = T.children.length, yield ae(), c.infinite && ve(), c.particlesCount = T.children.length, u.showPage(r, { animated: !1 }), oe.observe(N));
    });
  }), Be(() => {
    oe.disconnect(), E.reset();
  });
  function ie(a) {
    return k(this, null, function* () {
      yield u.showPage(a, { animated: !0 });
    });
  }
  function Ce() {
    I && (c.durationMs = 0);
  }
  function Te(a) {
    return k(this, null, function* () {
      I && (yield re({
        [se]: u.showNextPage,
        [Ke]: u.showPrevPage
      })(a.detail.direction));
    });
  }
  function ke(a) {
    I && (c.offset += a.detail.dx);
  }
  function Ie() {
    I && u.showParticle(c.currentParticleIndex);
  }
  function Se() {
    return k(this, null, function* () {
      I && (yield u.offsetPage({ animated: !0 }));
    });
  }
  function ye(a) {
    c.focused = a.detail.value;
  }
  function ze() {
    u.toggleFocused();
  }
  function De() {
    u.showPrevPage();
  }
  const Fe = () => W / 3;
  function Ne(a) {
    le[a ? "unshift" : "push"](() => {
      T = a, n(13, T);
    });
  }
  function Ee(a) {
    le[a ? "unshift" : "push"](() => {
      N = a, n(12, N);
    });
  }
  const Me = (a) => ie(a.detail);
  return e.$$set = (a) => {
    "timingFunction" in a && n(0, d = a.timingFunction), "arrows" in a && n(1, g = a.arrows), "infinite" in a && n(2, f = a.infinite), "initialPageIndex" in a && n(24, r = a.initialPageIndex), "duration" in a && n(25, _ = a.duration), "autoplay" in a && n(26, L = a.autoplay), "autoplayDuration" in a && n(27, Q = a.autoplayDuration), "autoplayDirection" in a && n(28, U = a.autoplayDirection), "pauseOnFocus" in a && n(29, Y = a.pauseOnFocus), "autoplayProgressVisible" in a && n(3, te = a.autoplayProgressVisible), "dots" in a && n(4, ne = a.dots), "swiping" in a && n(30, I = a.swiping), "particlesToShow" in a && n(31, Z = a.particlesToShow), "particlesToScroll" in a && n(32, x = a.particlesToScroll), "$$scope" in a && n(36, t = a.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*currentPageIndex*/
    32 && b("pageChange", s), e.$$.dirty[0] & /*infinite*/
    4 && (c.infinite = f), e.$$.dirty[0] & /*duration*/
    33554432 && (c.durationMsInit = _), e.$$.dirty[0] & /*autoplay*/
    67108864 && (c.autoplay = L), e.$$.dirty[0] & /*autoplayDuration*/
    134217728 && (c.autoplayDuration = Q), e.$$.dirty[0] & /*autoplayDirection*/
    268435456 && (c.autoplayDirection = U), e.$$.dirty[0] & /*pauseOnFocus*/
    536870912 && (c.pauseOnFocus = Y), e.$$.dirty[1] & /*particlesToShow*/
    1 && (c.particlesToShowInit = Z), e.$$.dirty[1] & /*particlesToScroll*/
    2 && (c.particlesToScrollInit = x);
  }, [
    d,
    g,
    f,
    te,
    ne,
    s,
    i,
    v,
    w,
    C,
    P,
    W,
    N,
    T,
    u,
    ie,
    Ce,
    Te,
    ke,
    Ie,
    Se,
    ye,
    ze,
    De,
    r,
    _,
    L,
    Q,
    U,
    Y,
    I,
    Z,
    x,
    we,
    be,
    Pe,
    t,
    l,
    Fe,
    Ne,
    Ee,
    Me
  ];
}
class kt extends Oe {
  constructor(o) {
    super(), Ve(
      this,
      o,
      ct,
      ut,
      Re,
      {
        timingFunction: 0,
        arrows: 1,
        infinite: 2,
        initialPageIndex: 24,
        duration: 25,
        autoplay: 26,
        autoplayDuration: 27,
        autoplayDirection: 28,
        pauseOnFocus: 29,
        autoplayProgressVisible: 3,
        dots: 4,
        swiping: 30,
        particlesToShow: 31,
        particlesToScroll: 32,
        goTo: 33,
        goToPrev: 34,
        goToNext: 35
      },
      tt,
      [-1, -1]
    );
  }
  get goTo() {
    return this.$$.ctx[33];
  }
  get goToPrev() {
    return this.$$.ctx[34];
  }
  get goToNext() {
    return this.$$.ctx[35];
  }
}
export {
  kt as Carousel
};
