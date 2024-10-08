import { SvelteComponent as v, init as w, safe_not_equal as T, append_styles as q, empty as z, insert as _, transition_in as c, transition_out as u, check_outros as M, detach as d, setContext as I, element as C, attr as N, toggle_class as h, set_style as g, group_outros as S, update_keyed_each as j, outro_and_destroy_block as A, add_render_callback as B, create_in_transition as D, create_component as E, mount_component as F, destroy_component as G } from "../../vendor/svelte/internal/index.js";
import H from "./TagItem.js";
import { fade as J } from "../../vendor/svelte/transition/index.js";
import "./Tag/index.js";
import "./Tag/TextTag/index.js";
import "./Tag/TextTag/TextTag.js";
import "./Common/Line/Straight.js";
import "../../shared-utils/uuid.js";
import "../../vendor/svelte/easing/index.js";
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
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../vendor/three/build/three.module.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
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
import "../controller/Tag/ModelTag.js";
import "../../shared-utils/three/GLTFLoader.js";
import "@realsee/five/gltf-loader";
import "../utils/planeNormal.js";
import "../utils/tag/tagCheck.js";
import "../utils/model/mediaPlane.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/loadTexture.js";
import "../../shared-utils/three/Quadrangle.js";
import "../../shared-utils/math/pointsIsRectangle.js";
import "../../shared-utils/three/loadVideoTexture.js";
import "../../shared-utils/device.js";
import "../../shared-utils/three/getPositionsByObjectFit.js";
import "../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../shared-utils/three/getNormal.js";
import "../controller/Tag/BaseTag.js";
import "../utils/tag/calculateTagConfig.js";
import "../../vendor/object-assign-deep/objectAssignDeep.js";
import "../../shared-utils/typescript/entries.js";
import "../utils/tag/adaptConfig.js";
import "../typings/tag/TagConfig.js";
import "@realsee/five";
import "../../shared-utils/five/mode.js";
import "../utils/tag/format.js";
import "../../shared-utils/util.js";
import "../../shared-utils/three/blink.js";
import "../../shared-utils/vectorToCoordinate.js";
import "../../shared-utils/formatRad.js";
import "../../shared-utils/five/lookPoint.js";
import "../utils/tagPosition.js";
import "../utils/checkRange.js";
import "../../shared-utils/url/getUrl.js";
import "../../shared-utils/five/getFloorIndex.js";
import "../../shared-utils/safeObj.js";
import "../utils/Cache.js";
import "./Common/TagPoint.js";
function K(a) {
  q(a, "svelte-1owzhnq", ".tag--container.svelte-1owzhnq{box-sizing:border-box;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;opacity:1;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform:translate3d(0, 0, 0);transition:opacity 0.2s linear}.tag--container.hide.svelte-1owzhnq{opacity:0;pointer-events:none}.tag--container.hide.svelte-1owzhnq *{pointer-events:none !important}");
}
function k(a, t, i) {
  const e = a.slice();
  return e[8] = t[i], e;
}
function b(a) {
  let t, i = [], e = /* @__PURE__ */ new Map(), m, r, p = (
    /*tags*/
    a[0]
  );
  const f = (n) => (
    /*tag*/
    n[8].id
  );
  for (let n = 0; n < p.length; n += 1) {
    let o = k(a, p, n), s = f(o);
    e.set(s, i[n] = y(s, o));
  }
  return {
    c() {
      var n;
      t = C("div");
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      N(t, "class", "tag--container svelte-1owzhnq"), h(t, "hide", !/*state*/
      a[4].visible || !/*temporaryState*/
      a[5].visible), g(
        t,
        "z-index",
        /*zIndex*/
        (n = a[6]) != null ? n : ""
      );
    },
    m(n, o) {
      _(n, t, o);
      for (let s = 0; s < i.length; s += 1)
        i[s] && i[s].m(t, null);
      r = !0;
    },
    p(n, o) {
      var s;
      o & /*state, temporaryState, tags, mediaStore, rendererMap, contentTypeMap*/
      63 && (p = /*tags*/
      n[0], S(), i = j(i, o, f, 1, n, p, e, t, A, y, null, k), M()), (!r || o & /*state, temporaryState*/
      48) && h(t, "hide", !/*state*/
      n[4].visible || !/*temporaryState*/
      n[5].visible), o & /*zIndex*/
      64 && g(
        t,
        "z-index",
        /*zIndex*/
        (s = n[6]) != null ? s : ""
      );
    },
    i(n) {
      if (!r) {
        for (let o = 0; o < p.length; o += 1)
          c(i[o]);
        m || B(() => {
          m = D(t, J, {}), m.start();
        }), r = !0;
      }
    },
    o(n) {
      for (let o = 0; o < i.length; o += 1)
        u(i[o]);
      r = !1;
    },
    d(n) {
      n && d(t);
      for (let o = 0; o < i.length; o += 1)
        i[o].d();
    }
  };
}
function y(a, t) {
  let i, e, m;
  return e = new H({
    props: {
      state: (
        /*state*/
        t[4]
      ),
      temporaryState: (
        /*temporaryState*/
        t[5]
      ),
      tag: (
        /*tag*/
        t[8]
      ),
      mediaStore: (
        /*mediaStore*/
        t[1]
      ),
      rendererMap: (
        /*rendererMap*/
        t[2]
      ),
      contentTypeMap: (
        /*contentTypeMap*/
        t[3]
      )
    }
  }), {
    key: a,
    first: null,
    c() {
      i = z(), E(e.$$.fragment), this.first = i;
    },
    m(r, p) {
      _(r, i, p), F(e, r, p), m = !0;
    },
    p(r, p) {
      t = r;
      const f = {};
      p & /*state*/
      16 && (f.state = /*state*/
      t[4]), p & /*temporaryState*/
      32 && (f.temporaryState = /*temporaryState*/
      t[5]), p & /*tags*/
      1 && (f.tag = /*tag*/
      t[8]), p & /*mediaStore*/
      2 && (f.mediaStore = /*mediaStore*/
      t[1]), p & /*rendererMap*/
      4 && (f.rendererMap = /*rendererMap*/
      t[2]), p & /*contentTypeMap*/
      8 && (f.contentTypeMap = /*contentTypeMap*/
      t[3]), e.$set(f);
    },
    i(r) {
      m || (c(e.$$.fragment, r), m = !0);
    },
    o(r) {
      u(e.$$.fragment, r), m = !1;
    },
    d(r) {
      r && d(i), G(e, r);
    }
  };
}
function L(a) {
  let t, i, e = (
    /*state*/
    a[4].enabled && b(a)
  );
  return {
    c() {
      e && e.c(), t = z();
    },
    m(m, r) {
      e && e.m(m, r), _(m, t, r), i = !0;
    },
    p(m, [r]) {
      /*state*/
      m[4].enabled ? e ? (e.p(m, r), r & /*state*/
      16 && c(e, 1)) : (e = b(m), e.c(), c(e, 1), e.m(t.parentNode, t)) : e && (S(), u(e, 1, 1, () => {
        e = null;
      }), M());
    },
    i(m) {
      i || (c(e), i = !0);
    },
    o(m) {
      u(e), i = !1;
    },
    d(m) {
      e && e.d(m), m && d(t);
    }
  };
}
function O(a, t, i) {
  let { tags: e = [] } = t, { hooks: m } = t, { mediaStore: r } = t, { rendererMap: p } = t, { contentTypeMap: f } = t, { state: n } = t, { temporaryState: o } = t, { zIndex: s = void 0 } = t;
  return I("hooks", m), a.$$set = (l) => {
    "tags" in l && i(0, e = l.tags), "hooks" in l && i(7, m = l.hooks), "mediaStore" in l && i(1, r = l.mediaStore), "rendererMap" in l && i(2, p = l.rendererMap), "contentTypeMap" in l && i(3, f = l.contentTypeMap), "state" in l && i(4, n = l.state), "temporaryState" in l && i(5, o = l.temporaryState), "zIndex" in l && i(6, s = l.zIndex);
  }, [
    e,
    r,
    p,
    f,
    n,
    o,
    s,
    m
  ];
}
class si extends v {
  constructor(t) {
    super(), w(
      this,
      t,
      O,
      L,
      T,
      {
        tags: 0,
        hooks: 7,
        mediaStore: 1,
        rendererMap: 2,
        contentTypeMap: 3,
        state: 4,
        temporaryState: 5,
        zIndex: 6
      },
      K
    );
  }
}
export {
  si as default
};
