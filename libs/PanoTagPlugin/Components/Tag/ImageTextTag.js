import { SvelteComponent as T, init as R, safe_not_equal as q, append_styles as z, empty as S, insert as c, transition_in as u, transition_out as _, check_outros as k, detach as $, create_component as b, space as v, element as h, attr as j, mount_component as g, group_outros as y, destroy_component as w } from "../../../vendor/svelte/internal/index.js";
import B from "../Common/Text/FlyText.js";
import F from "../Common/Line/Polyline.js";
import H from "../Common/Media.js";
import M from "../Common/Shadow.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../shared-utils/uuid.js";
import "../../../shared-utils/isNil.js";
import "three";
import "../../utils/search.js";
import "../../utils/constants.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "../../../vendor/svelte-carousel/src/components/Carousel/Carousel.js";
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
import "../Common/MediaItem.js";
import "../../Assets/Icon.js";
function V(l) {
  z(l, "svelte-1f7m1lj", ".line.svelte-1f7m1lj{position:absolute;width:6.5625rem;height:1.3125rem;transform:translateY(-100%)}.text.svelte-1f7m1lj{position:absolute;width:6.25rem;left:1rem;bottom:0.0625rem;font-weight:600}.media-wrapper.svelte-1f7m1lj{position:absolute;left:0.875rem;top:-5.3125rem;width:5.625rem;height:3.75rem;font-weight:600}");
}
function I(l) {
  let r, o, t, e, m, a, s, d;
  r = new M({
    props: {
      visible: (
        /*unfolded*/
        l[3]
      ),
      left: 61,
      bottom: 57,
      width: 2,
      blurRadius: 150,
      spreadRadius: 75
    }
  }), e = new F({
    props: {
      unfolded: (
        /*unfolded*/
        l[3]
      ),
      outDelay: 400
    }
  });
  let f = (
    /*content*/
    l[2] && N(l)
  ), n = (
    /*mediaData*/
    l[1] && P(l)
  );
  return {
    c() {
      b(r.$$.fragment), o = v(), t = h("div"), b(e.$$.fragment), m = v(), f && f.c(), a = v(), n && n.c(), s = S(), j(t, "class", "line svelte-1f7m1lj");
    },
    m(i, p) {
      g(r, i, p), c(i, o, p), c(i, t, p), g(e, t, null), c(i, m, p), f && f.m(i, p), c(i, a, p), n && n.m(i, p), c(i, s, p), d = !0;
    },
    p(i, p) {
      const D = {};
      p & /*unfolded*/
      8 && (D.visible = /*unfolded*/
      i[3]), r.$set(D);
      const C = {};
      p & /*unfolded*/
      8 && (C.unfolded = /*unfolded*/
      i[3]), e.$set(C), /*content*/
      i[2] ? f ? (f.p(i, p), p & /*content*/
      4 && u(f, 1)) : (f = N(i), f.c(), u(f, 1), f.m(a.parentNode, a)) : f && (y(), _(f, 1, 1, () => {
        f = null;
      }), k()), /*mediaData*/
      i[1] ? n ? (n.p(i, p), p & /*mediaData*/
      2 && u(n, 1)) : (n = P(i), n.c(), u(n, 1), n.m(s.parentNode, s)) : n && (y(), _(n, 1, 1, () => {
        n = null;
      }), k());
    },
    i(i) {
      d || (u(r.$$.fragment, i), u(e.$$.fragment, i), u(f), u(n), d = !0);
    },
    o(i) {
      _(r.$$.fragment, i), _(e.$$.fragment, i), _(f), _(n), d = !1;
    },
    d(i) {
      w(r, i), i && $(o), i && $(t), w(e), i && $(m), f && f.d(i), i && $(a), n && n.d(i), i && $(s);
    }
  };
}
function N(l) {
  let r, o, t;
  return o = new B({
    props: {
      unfolded: (
        /*unfolded*/
        l[3]
      ),
      content: (
        /*content*/
        l[2]
      ),
      inDelay: 500
    }
  }), {
    c() {
      r = h("div"), b(o.$$.fragment), j(r, "class", "text svelte-1f7m1lj");
    },
    m(e, m) {
      c(e, r, m), g(o, r, null), t = !0;
    },
    p(e, m) {
      const a = {};
      m & /*unfolded*/
      8 && (a.unfolded = /*unfolded*/
      e[3]), m & /*content*/
      4 && (a.content = /*content*/
      e[2]), o.$set(a);
    },
    i(e) {
      t || (u(o.$$.fragment, e), t = !0);
    },
    o(e) {
      _(o.$$.fragment, e), t = !1;
    },
    d(e) {
      e && $(r), w(o);
    }
  };
}
function P(l) {
  let r, o, t;
  return o = new H({
    props: {
      autoplayConfig: { autoplayCarousel: !1 },
      unfolded: (
        /*unfolded*/
        l[3]
      ),
      mediaData: (
        /*mediaData*/
        l[1]
      ),
      tag: (
        /*tag*/
        l[0]
      ),
      enableCarousel: !1,
      mediaItemConfig: {
        canPlay: !1,
        playButtonSizeIfNeed: "small",
        disableVideoIfHavePoster: !0
      },
      inDelay: 500,
      duration: 500
    }
  }), {
    c() {
      r = h("div"), b(o.$$.fragment), j(r, "class", "media-wrapper svelte-1f7m1lj");
    },
    m(e, m) {
      c(e, r, m), g(o, r, null), t = !0;
    },
    p(e, m) {
      const a = {};
      m & /*unfolded*/
      8 && (a.unfolded = /*unfolded*/
      e[3]), m & /*mediaData*/
      2 && (a.mediaData = /*mediaData*/
      e[1]), m & /*tag*/
      1 && (a.tag = /*tag*/
      e[0]), o.$set(a);
    },
    i(e) {
      t || (u(o.$$.fragment, e), t = !0);
    },
    o(e) {
      _(o.$$.fragment, e), t = !1;
    },
    d(e) {
      e && $(r), w(o);
    }
  };
}
function Y(l) {
  let r, o, t = (
    /*tag*/
    l[0].state && I(l)
  );
  return {
    c() {
      t && t.c(), r = S();
    },
    m(e, m) {
      t && t.m(e, m), c(e, r, m), o = !0;
    },
    p(e, [m]) {
      /*tag*/
      e[0].state ? t ? (t.p(e, m), m & /*tag*/
      1 && u(t, 1)) : (t = I(e), t.c(), u(t, 1), t.m(r.parentNode, r)) : t && (y(), _(t, 1, 1, () => {
        t = null;
      }), k());
    },
    i(e) {
      o || (u(t), o = !0);
    },
    o(e) {
      _(t), o = !1;
    },
    d(e) {
      t && t.d(e), e && $(r);
    }
  };
}
function A(l, r, o) {
  let t, e, m, a, { tag: s } = r;
  return l.$$set = (d) => {
    "tag" in d && o(0, s = d.tag);
  }, l.$$.update = () => {
    var d, f, n;
    l.$$.dirty & /*tag*/
    1 && o(3, t = s.state ? s.state.unfolded : !1), l.$$.dirty & /*tag*/
    1 && o(4, e = (f = (d = s.data.title) != null ? d : s.data.text) != null ? f : ""), l.$$.dirty & /*title*/
    16 && o(2, m = ((n = e.length) != null ? n : 0) > 7 ? e.substring(0, 6) + "..." : e), l.$$.dirty & /*tag*/
    1 && o(1, a = s.data.mediaData);
  }, [s, a, m, t, e];
}
class qe extends T {
  constructor(r) {
    super(), R(this, r, A, Y, q, { tag: 0 }, V);
  }
}
export {
  qe as default
};
