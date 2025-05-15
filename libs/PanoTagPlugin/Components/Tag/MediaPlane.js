import { SvelteComponent as _, init as b, safe_not_equal as I, append_styles as h, empty as w, insert as g, transition_in as u, transition_out as d, check_outros as C, detach as y, element as D, create_component as N, attr as P, mount_component as j, destroy_component as k, group_outros as B } from "../../../vendor/svelte/internal/index.js";
import F from "../Common/Media.js";
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
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "../Common/MediaItem.js";
import "../../Assets/Icon.js";
function M(o) {
  h(o, "svelte-10cw0el", ".media-wrapper.svelte-10cw0el{position:absolute;width:100%;height:100%}");
}
function c(o) {
  var a;
  let r, i, e;
  return i = new F({
    props: {
      mediaItemConfig: {
        canPlay: !0,
        playButtonSizeIfNeed: "large",
        playButtonIfNeed: (
          /*playIcon*/
          (a = o[4]) != null ? a : "withText"
        ),
        disableVideoIfHavePoster: !1,
        objectFit: (
          /*objectFit*/
          o[2]
        )
      },
      unfolded: (
        /*unfolded*/
        o[6]
      ),
      mediaData: (
        /*mediaData*/
        o[5]
      ),
      enableCarousel: (
        /*enableCarousel*/
        o[1]
      ),
      autoplayConfig: (
        /*autoplayConfig*/
        o[3]
      ),
      tag: (
        /*tag*/
        o[0]
      ),
      inDelay: 500,
      duration: 500
    }
  }), {
    c() {
      r = D("div"), N(i.$$.fragment), P(r, "class", "media-wrapper svelte-10cw0el");
    },
    m(t, n) {
      g(t, r, n), j(i, r, null), e = !0;
    },
    p(t, n) {
      var m;
      const l = {};
      n & /*playIcon, objectFit*/
      20 && (l.mediaItemConfig = {
        canPlay: !0,
        playButtonSizeIfNeed: "large",
        playButtonIfNeed: (
          /*playIcon*/
          (m = t[4]) != null ? m : "withText"
        ),
        disableVideoIfHavePoster: !1,
        objectFit: (
          /*objectFit*/
          t[2]
        )
      }), n & /*unfolded*/
      64 && (l.unfolded = /*unfolded*/
      t[6]), n & /*mediaData*/
      32 && (l.mediaData = /*mediaData*/
      t[5]), n & /*enableCarousel*/
      2 && (l.enableCarousel = /*enableCarousel*/
      t[1]), n & /*autoplayConfig*/
      8 && (l.autoplayConfig = /*autoplayConfig*/
      t[3]), n & /*tag*/
      1 && (l.tag = /*tag*/
      t[0]), i.$set(l);
    },
    i(t) {
      e || (u(i.$$.fragment, t), e = !0);
    },
    o(t) {
      d(i.$$.fragment, t), e = !1;
    },
    d(t) {
      t && y(r), k(i);
    }
  };
}
function S(o) {
  let r, i, e = (
    /*tag*/
    o[0].state && /*mediaData*/
    o[5] && c(o)
  );
  return {
    c() {
      e && e.c(), r = w();
    },
    m(a, t) {
      e && e.m(a, t), g(a, r, t), i = !0;
    },
    p(a, [t]) {
      /*tag*/
      a[0].state && /*mediaData*/
      a[5] ? e ? (e.p(a, t), t & /*tag, mediaData*/
      33 && u(e, 1)) : (e = c(a), e.c(), u(e, 1), e.m(r.parentNode, r)) : e && (B(), d(e, 1, 1, () => {
        e = null;
      }), C());
    },
    i(a) {
      i || (u(e), i = !0);
    },
    o(a) {
      d(e), i = !1;
    },
    d(a) {
      e && e.d(a), a && y(r);
    }
  };
}
function V(o, r, i) {
  let e, a, t, n, l, m, { tag: p } = r;
  return o.$$set = (f) => {
    "tag" in f && i(0, p = f.tag);
  }, o.$$.update = () => {
    var f, s;
    o.$$.dirty & /*tag*/
    1 && i(6, e = p.state ? p.state.unfolded : !1), o.$$.dirty & /*tag*/
    1 && i(5, a = p.data.mediaData), o.$$.dirty & /*tag*/
    1 && i(1, t = p.data.enableCarousel), o.$$.dirty & /*tag*/
    1 && i(4, n = p.data.playIcon), o.$$.dirty & /*tag, enableCarousel*/
    3 && i(3, l = (f = p.data.autoplayConfig) != null ? f : {
      autoplay: t != null ? t : !0,
      autoplayVideo: !0
    }), o.$$.dirty & /*tag*/
    1 && i(2, m = (s = p.data.objectFit) != null ? s : (() => p.data.adaptationMode === "stretch" ? "fill" : p.data.adaptationMode === "proportional" ? "contain" : void 0)());
  }, [p, t, m, l, n, a, e];
}
class gt extends _ {
  constructor(r) {
    super(), b(this, r, V, S, I, { tag: 0 }, M);
  }
}
export {
  gt as default
};
