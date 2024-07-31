import { SvelteComponent as A, init as z, safe_not_equal as T, append_styles as q, empty as M, insert as h, transition_in as f, transition_out as c, check_outros as S, detach as _, setContext as I, element as C, attr as N, toggle_class as u, set_style as k, group_outros as v, update_keyed_each as j, outro_and_destroy_block as B, create_component as D, mount_component as E, destroy_component as F } from "../../vendor/svelte/internal/index.js";
import G from "./TagItem.js";
import "./Tag/index.js";
import "./Tag/TextTag/index.js";
import "./Tag/TextTag/TextTag.js";
import "./Common/Line/Straight.js";
import "../../vendor/svelte/transition/index.js";
import "../../vendor/svelte/easing/index.js";
import "../../shared-utils/uuid.js";
import "./Common/Shadow.js";
import "./Common/Text/FlyMText.js";
import "./Common/Text/FlyText.js";
import "animejs";
import "../../shared-utils/isNil.js";
import "three";
import "../utils/search.js";
import "../utils/constants.js";
import "./Common/Arrow.js";
import "../Assets/Icon.js";
import "../utils/doUtil.js";
import "../../shared-utils/svelte/resizeObserver.js";
import "../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "./Tag/TextTag/TextPlaneTag.js";
import "./Common/Text/MText.js";
import "../utils/px2rem.js";
import "./Tag/ImageTextTag.js";
import "./Common/Line/Polyline.js";
import "./Common/Media.js";
import "../../vendor/svelte-carousel/src/components/Carousel/Carousel.js";
import "../../vendor/svelte-carousel/src/components/Dots/Dots.js";
import "../../vendor/svelte-carousel/src/components/Dot/Dot.js";
import "../../vendor/svelte-carousel/src/components/Arrow/Arrow.js";
import "../../vendor/svelte-carousel/src/direction.js";
import "../../vendor/svelte-carousel/src/components/Progress/Progress.js";
import "../../vendor/svelte-carousel/src/actions/swipeable/swipeable.js";
import "../../vendor/svelte-carousel/src/actions/swipeable/event.js";
import "../../vendor/svelte-carousel/src/utils/event.js";
import "../../vendor/svelte-carousel/src/units.js";
import "../../vendor/svelte-carousel/src/actions/hoverable/hoverable.js";
import "../../vendor/svelte-carousel/src/actions/hoverable/event.js";
import "../../vendor/svelte-carousel/src/actions/tappable/tappable.js";
import "../../vendor/svelte-carousel/src/utils/math.js";
import "../../vendor/svelte-carousel/src/actions/tappable/event.js";
import "../../vendor/svelte-carousel/src/utils/page.js";
import "../../vendor/svelte-carousel/src/utils/clones.js";
import "../../vendor/svelte-carousel/src/utils/object.js";
import "../../vendor/svelte-carousel/src/components/Carousel/createCarousel.js";
import "../../vendor/easy-reactive/src/simply-reactive.js";
import "../../vendor/lodash.get/index.js";
import "../../_commonjsHelpers.js";
import "../../vendor/lodash.clonedeep/index.js";
import "../../vendor/easy-reactive/src/utils/subscription.js";
import "../../vendor/easy-reactive/src/utils/object.js";
import "../../vendor/lodash.isequal/index.js";
import "../../vendor/easy-reactive/src/utils/watcher.js";
import "../../vendor/svelte-carousel/src/utils/lazy.js";
import "../../vendor/svelte-carousel/src/utils/ProgressManager.js";
import "../../vendor/svelte-carousel/src/utils/interval.js";
import "./Common/MediaItem.js";
import "./Tag/MarketingTag.js";
import "hammerjs";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/positionToVector3.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/even.js";
import "../../shared-utils/Subscribe.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../utils/noTypecheck.js";
import "./Tag/AudioTag/index.js";
import "./Tag/AudioTag/AudioTag.js";
import "./Common/Audio.js";
import "../utils/audio/SharedAudio.js";
import "../../shared-utils/audio.js";
import "./Common/Icon/audioIcon.js";
import "./Tag/AudioTag/AudioPlaneTag.js";
import "./Tag/MediaPlane.js";
import "./Tag/LinkTag.js";
import "./Common/Icon/Icon.js";
import "../utils/getImageInfo.js";
import "./Tag/PanoramaTag.js";
import "./Tag/CustomTag.js";
import "../../vendor/classnames/index.js";
import "./Common/TagPoint.js";
function H(p) {
  q(p, "svelte-p0nosq", ".tag--container.svelte-p0nosq{box-sizing:border-box;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;opacity:1;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform:translate3d(0, 0, 0)}.withAnimation.svelte-p0nosq{transition:opacity 0.2s linear}.tag--container.hide.svelte-p0nosq{opacity:0;pointer-events:none}.tag--container.hide.svelte-p0nosq *{pointer-events:none !important}");
}
function b(p, t, e) {
  const i = p.slice();
  return i[9] = t[e], i;
}
function w(p) {
  let t, e = [], i = /* @__PURE__ */ new Map(), m, n = (
    /*tags*/
    p[1]
  );
  const l = (o) => (
    /*tag*/
    o[9].id
  );
  for (let o = 0; o < n.length; o += 1) {
    let r = b(p, n, o), s = l(r);
    i.set(s, e[o] = y(s, r));
  }
  return {
    c() {
      var o;
      t = C("div");
      for (let r = 0; r < e.length; r += 1)
        e[r].c();
      N(t, "class", "tag--container svelte-p0nosq"), u(t, "hide", !/*state*/
      p[5].visible || !/*temporaryState*/
      p[6].visible), u(
        t,
        "withAnimation",
        /*withAnimation*/
        p[0]
      ), k(
        t,
        "z-index",
        /*zIndex*/
        (o = p[7]) != null ? o : ""
      );
    },
    m(o, r) {
      h(o, t, r);
      for (let s = 0; s < e.length; s += 1)
        e[s] && e[s].m(t, null);
      m = !0;
    },
    p(o, r) {
      var s;
      r & /*state, temporaryState, withAnimation, tags, mediaStore, rendererMap, contentTypeMap*/
      127 && (n = /*tags*/
      o[1], v(), e = j(e, r, l, 1, o, n, i, t, B, y, null, b), S()), (!m || r & /*state, temporaryState*/
      96) && u(t, "hide", !/*state*/
      o[5].visible || !/*temporaryState*/
      o[6].visible), (!m || r & /*withAnimation*/
      1) && u(
        t,
        "withAnimation",
        /*withAnimation*/
        o[0]
      ), r & /*zIndex*/
      128 && k(
        t,
        "z-index",
        /*zIndex*/
        (s = o[7]) != null ? s : ""
      );
    },
    i(o) {
      if (!m) {
        for (let r = 0; r < n.length; r += 1)
          f(e[r]);
        m = !0;
      }
    },
    o(o) {
      for (let r = 0; r < e.length; r += 1)
        c(e[r]);
      m = !1;
    },
    d(o) {
      o && _(t);
      for (let r = 0; r < e.length; r += 1)
        e[r].d();
    }
  };
}
function y(p, t) {
  let e, i, m;
  return i = new G({
    props: {
      state: (
        /*state*/
        t[5]
      ),
      temporaryState: (
        /*temporaryState*/
        t[6]
      ),
      withAnimation: (
        /*withAnimation*/
        t[0]
      ),
      tag: (
        /*tag*/
        t[9]
      ),
      mediaStore: (
        /*mediaStore*/
        t[2]
      ),
      rendererMap: (
        /*rendererMap*/
        t[3]
      ),
      contentTypeMap: (
        /*contentTypeMap*/
        t[4]
      )
    }
  }), {
    key: p,
    first: null,
    c() {
      e = M(), D(i.$$.fragment), this.first = e;
    },
    m(n, l) {
      h(n, e, l), E(i, n, l), m = !0;
    },
    p(n, l) {
      t = n;
      const o = {};
      l & /*state*/
      32 && (o.state = /*state*/
      t[5]), l & /*temporaryState*/
      64 && (o.temporaryState = /*temporaryState*/
      t[6]), l & /*withAnimation*/
      1 && (o.withAnimation = /*withAnimation*/
      t[0]), l & /*tags*/
      2 && (o.tag = /*tag*/
      t[9]), l & /*mediaStore*/
      4 && (o.mediaStore = /*mediaStore*/
      t[2]), l & /*rendererMap*/
      8 && (o.rendererMap = /*rendererMap*/
      t[3]), l & /*contentTypeMap*/
      16 && (o.contentTypeMap = /*contentTypeMap*/
      t[4]), i.$set(o);
    },
    i(n) {
      m || (f(i.$$.fragment, n), m = !0);
    },
    o(n) {
      c(i.$$.fragment, n), m = !1;
    },
    d(n) {
      n && _(e), F(i, n);
    }
  };
}
function J(p) {
  let t, e, i = (
    /*state*/
    p[5].enabled && w(p)
  );
  return {
    c() {
      i && i.c(), t = M();
    },
    m(m, n) {
      i && i.m(m, n), h(m, t, n), e = !0;
    },
    p(m, [n]) {
      /*state*/
      m[5].enabled ? i ? (i.p(m, n), n & /*state*/
      32 && f(i, 1)) : (i = w(m), i.c(), f(i, 1), i.m(t.parentNode, t)) : i && (v(), c(i, 1, 1, () => {
        i = null;
      }), S());
    },
    i(m) {
      e || (f(i), e = !0);
    },
    o(m) {
      c(i), e = !1;
    },
    d(m) {
      i && i.d(m), m && _(t);
    }
  };
}
function K(p, t, e) {
  let { withAnimation: i = !1 } = t, { tags: m = [] } = t, { hooks: n } = t, { mediaStore: l } = t, { rendererMap: o } = t, { contentTypeMap: r } = t, { state: s } = t, { temporaryState: d } = t, { zIndex: g = void 0 } = t;
  return I("hooks", n), p.$$set = (a) => {
    "withAnimation" in a && e(0, i = a.withAnimation), "tags" in a && e(1, m = a.tags), "hooks" in a && e(8, n = a.hooks), "mediaStore" in a && e(2, l = a.mediaStore), "rendererMap" in a && e(3, o = a.rendererMap), "contentTypeMap" in a && e(4, r = a.contentTypeMap), "state" in a && e(5, s = a.state), "temporaryState" in a && e(6, d = a.temporaryState), "zIndex" in a && e(7, g = a.zIndex);
  }, [
    i,
    m,
    l,
    o,
    r,
    s,
    d,
    g,
    n
  ];
}
class Te extends A {
  constructor(t) {
    super(), z(
      this,
      t,
      K,
      J,
      T,
      {
        withAnimation: 0,
        tags: 1,
        hooks: 8,
        mediaStore: 2,
        rendererMap: 3,
        contentTypeMap: 4,
        state: 5,
        temporaryState: 6,
        zIndex: 7
      },
      H
    );
  }
}
export {
  Te as default
};
