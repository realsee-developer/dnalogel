import { SvelteComponent as w, init as T, safe_not_equal as q, append_styles as I, empty as M, insert as _, transition_in as c, transition_out as u, check_outros as S, detach as d, setContext as C, element as N, attr as h, toggle_class as g, set_style as k, group_outros as v, update_keyed_each as j, outro_and_destroy_block as A, add_render_callback as B, create_in_transition as D, create_component as E, mount_component as F, destroy_component as G } from "../../vendor/svelte/internal/index.js";
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
import "../../vendor/animejs/lib/anime.es.js";
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
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/five/fiveEveryReadyListener.js";
import "../../shared-utils/throttle.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../shared-utils/even.js";
import "../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "@realsee/five/line";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../shared-utils/five/FivePuppet.js";
import "@realsee/five";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/five/initialCSS3DRender.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../shared-utils/three/IObject3D.js";
import "../../Sculpt/utils/removeAllTag.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/util.js";
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
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
import "../../shared-utils/CSS3DRender/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../../shared-utils/CSS3DRender/CSS3DObject.js";
import "../../shared-utils/three/GLTFLoader.js";
import "@realsee/five/gltf-loader";
import "../utils/planeNormal.js";
import "../utils/tag/tagCheck.js";
import "../utils/model/mediaPlane.js";
import "../../shared-utils/three/loadTexture.js";
import "../../shared-utils/three/Quadrangle.js";
import "../../shared-utils/math/pointsIsRectangle.js";
import "../../shared-utils/three/loadVideoTexture.js";
import "../../shared-utils/device.js";
import "../../shared-utils/three/getPositionsByObjectFit.js";
import "../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../shared-utils/three/getNormal.js";
import "../../shared-utils/constants.js";
import "../controller/Tag/BaseTag.js";
import "../utils/tag/calculateTagConfig.js";
import "../../vendor/object-assign-deep/objectAssignDeep.js";
import "../../shared-utils/typescript/entries.js";
import "../utils/tag/adaptConfig.js";
import "../typings/tag/TagConfig.js";
import "../../shared-utils/five/mode.js";
import "../utils/tag/format.js";
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
import "../../shared-utils/promise/withResolvers.js";
import "./Common/TagPoint.js";
function K(a) {
  I(a, "svelte-1owzhnq", ".tag--container.svelte-1owzhnq{box-sizing:border-box;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;opacity:1;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform:translate3d(0, 0, 0);transition:opacity 0.2s linear}.tag--container.hide.svelte-1owzhnq{opacity:0;pointer-events:none}.tag--container.hide.svelte-1owzhnq *{pointer-events:none !important}");
}
function b(a, t, o) {
  const i = a.slice();
  return i[8] = t[o], i;
}
function y(a) {
  let t, o = [], i = /* @__PURE__ */ new Map(), m, e, n = (
    /*tags*/
    a[0]
  );
  const f = (p) => (
    /*tag*/
    p[8].id
  );
  for (let p = 0; p < n.length; p += 1) {
    let r = b(a, n, p), s = f(r);
    i.set(s, o[p] = z(s, r));
  }
  return {
    c() {
      var p;
      t = N("div");
      for (let r = 0; r < o.length; r += 1)
        o[r].c();
      h(t, "class", "tag--container svelte-1owzhnq"), h(t, "data-infive", "1"), g(t, "hide", !/*state*/
      a[4].visible || !/*temporaryState*/
      a[5].visible), k(
        t,
        "z-index",
        /*zIndex*/
        (p = a[6]) != null ? p : ""
      );
    },
    m(p, r) {
      _(p, t, r);
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(t, null);
      e = !0;
    },
    p(p, r) {
      var s;
      r & /*state, temporaryState, tags, mediaStore, rendererMap, contentTypeMap*/
      63 && (n = /*tags*/
      p[0], v(), o = j(o, r, f, 1, p, n, i, t, A, z, null, b), S()), (!e || r & /*state, temporaryState*/
      48) && g(t, "hide", !/*state*/
      p[4].visible || !/*temporaryState*/
      p[5].visible), r & /*zIndex*/
      64 && k(
        t,
        "z-index",
        /*zIndex*/
        (s = p[6]) != null ? s : ""
      );
    },
    i(p) {
      if (!e) {
        for (let r = 0; r < n.length; r += 1)
          c(o[r]);
        m || B(() => {
          m = D(t, J, {}), m.start();
        }), e = !0;
      }
    },
    o(p) {
      for (let r = 0; r < o.length; r += 1)
        u(o[r]);
      e = !1;
    },
    d(p) {
      p && d(t);
      for (let r = 0; r < o.length; r += 1)
        o[r].d();
    }
  };
}
function z(a, t) {
  let o, i, m;
  return i = new H({
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
      o = M(), E(i.$$.fragment), this.first = o;
    },
    m(e, n) {
      _(e, o, n), F(i, e, n), m = !0;
    },
    p(e, n) {
      t = e;
      const f = {};
      n & /*state*/
      16 && (f.state = /*state*/
      t[4]), n & /*temporaryState*/
      32 && (f.temporaryState = /*temporaryState*/
      t[5]), n & /*tags*/
      1 && (f.tag = /*tag*/
      t[8]), n & /*mediaStore*/
      2 && (f.mediaStore = /*mediaStore*/
      t[1]), n & /*rendererMap*/
      4 && (f.rendererMap = /*rendererMap*/
      t[2]), n & /*contentTypeMap*/
      8 && (f.contentTypeMap = /*contentTypeMap*/
      t[3]), i.$set(f);
    },
    i(e) {
      m || (c(i.$$.fragment, e), m = !0);
    },
    o(e) {
      u(i.$$.fragment, e), m = !1;
    },
    d(e) {
      e && d(o), G(i, e);
    }
  };
}
function L(a) {
  let t, o, i = (
    /*state*/
    a[4].enabled && y(a)
  );
  return {
    c() {
      i && i.c(), t = M();
    },
    m(m, e) {
      i && i.m(m, e), _(m, t, e), o = !0;
    },
    p(m, [e]) {
      /*state*/
      m[4].enabled ? i ? (i.p(m, e), e & /*state*/
      16 && c(i, 1)) : (i = y(m), i.c(), c(i, 1), i.m(t.parentNode, t)) : i && (v(), u(i, 1, 1, () => {
        i = null;
      }), S());
    },
    i(m) {
      o || (c(i), o = !0);
    },
    o(m) {
      u(i), o = !1;
    },
    d(m) {
      i && i.d(m), m && d(t);
    }
  };
}
function O(a, t, o) {
  let { tags: i = [] } = t, { hooks: m } = t, { mediaStore: e } = t, { rendererMap: n } = t, { contentTypeMap: f } = t, { state: p } = t, { temporaryState: r } = t, { zIndex: s = void 0 } = t;
  return C("hooks", m), a.$$set = (l) => {
    "tags" in l && o(0, i = l.tags), "hooks" in l && o(7, m = l.hooks), "mediaStore" in l && o(1, e = l.mediaStore), "rendererMap" in l && o(2, n = l.rendererMap), "contentTypeMap" in l && o(3, f = l.contentTypeMap), "state" in l && o(4, p = l.state), "temporaryState" in l && o(5, r = l.temporaryState), "zIndex" in l && o(6, s = l.zIndex);
  }, [
    i,
    e,
    n,
    f,
    p,
    r,
    s,
    m
  ];
}
class Xo extends w {
  constructor(t) {
    super(), T(
      this,
      t,
      O,
      L,
      q,
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
  Xo as default
};
