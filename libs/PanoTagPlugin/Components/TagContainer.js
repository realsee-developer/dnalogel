import { SvelteComponent as P, init as Z, safe_not_equal as j, append_styles as A, empty as q, insert as g, transition_in as d, transition_out as c, check_outros as E, detach as b, setContext as z, onMount as B, element as D, attr as h, toggle_class as C, set_style as _, group_outros as N, update_keyed_each as F, outro_and_destroy_block as G, add_render_callback as H, create_in_transition as J, create_component as K, mount_component as L, destroy_component as Q, binding_callbacks as R } from "../../vendor/svelte/internal/index.js";
import U from "./TagItem.js";
import { fade as V } from "../../vendor/svelte/transition/index.js";
import { getOrCreatePopoverContainer as W } from "../utils/popoverContainer.js";
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
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../shared-utils/three/blink.js";
import "../../shared-utils/util.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/CSS3DRender/index.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../shared-utils/three/IObject3D.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/five/getFiveFromParentChain.js";
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../Sculpt/utils/unit.js";
import "../../Sculpt/utils/renderDom.js";
import "../../vendor/earcut/src/earcut.js";
import "../../shared-utils/five/FivePuppet.js";
import "@realsee/five";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../../Sculpt/utils/three/rayOnLine.js";
import "./Tag/Assets/marketingIcon.js";
import "../utils/noTypecheck.js";
import "./Tag/AudioTag/index.js";
import "./Tag/AudioTag/AudioTag.js";
import "./Common/Audio.js";
import "../utils/audio/SharedAudio.js";
import "../../shared-utils/audio.js";
import "../utils/audio/AudioDiagnostics.js";
import "./Common/Icon/audioIcon.js";
import "./Tag/AudioTag/AudioPlaneTag.js";
import "./Tag/MediaPlane.js";
import "./Tag/LinkTag.js";
import "./Common/Icon/Icon.js";
import "../utils/getImageInfo.js";
import "./Common/Icon/animationUtils.js";
import "./Tag/PanoramaTag.js";
import "./Common/Icon/PanoramaIcon.js";
import "./Tag/CustomTag.js";
import "../../vendor/classnames/index.js";
import "../controller/Tag/ModelTag.js";
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
import "../../shared-utils/url/defaultUrls.js";
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
import "./Tag/AudioTag/AudioPoint.js";
import "./Common/TagPopover/index.js";
import "./Common/TagPopover/PopoverContent.js";
import "./Common/TagPopover/TagPopoverArrow.js";
import "./Common/Icon/tag-popover-arrow-base64.js";
import "./Common/TagPopover/TagPopup.js";
import "./Common/VideoIcon.js";
import "./Common/TagPopover/PanoramaIcon.js";
import "../utils/videoHelper.js";
import "./Common/AudioPlayer.js";
import "./Common/TagPopover/TagPopoverToolBar.js";
import "./Common/TagPopover/ArrowRightIcon.js";
import "./Common/TagPopover/ShareIcon.js";
function X(m) {
  A(m, "svelte-9ehqs9", ".tag--container.svelte-9ehqs9{box-sizing:border-box;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;opacity:1;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform:translate3d(0, 0, 0);transition:opacity 0.2s linear;overflow:hidden}.tag--container.hide.svelte-9ehqs9{opacity:0 !important;pointer-events:none}.tag--container.hide.svelte-9ehqs9 *{pointer-events:none !important}");
}
function w(m, t, o) {
  const i = m.slice();
  return i[12] = t[o], i;
}
function T(m) {
  let t, o = [], i = /* @__PURE__ */ new Map(), p, n, a, s = (
    /*tags*/
    m[0]
  );
  const u = (e) => (
    /*tag*/
    e[12].id
  );
  for (let e = 0; e < s.length; e += 1) {
    let r = w(m, s, e), f = u(r);
    i.set(f, o[e] = I(f, r));
  }
  return {
    c() {
      var e;
      t = D("div");
      for (let r = 0; r < o.length; r += 1)
        o[r].c();
      h(t, "class", "tag--container svelte-9ehqs9"), h(t, "data-infive", p = !/*state*/
      m[4].visible || !/*temporaryState*/
      m[5].visible ? "1" : "0"), C(t, "hide", !/*state*/
      m[4].visible || !/*temporaryState*/
      m[5].visible), _(
        t,
        "z-index",
        /*zIndex*/
        (e = m[6]) != null ? e : ""
      ), _(t, "opacity", !/*state*/
      m[4].visible || !/*temporaryState*/
      m[5].visible ? null : 1);
    },
    m(e, r) {
      g(e, t, r);
      for (let f = 0; f < o.length; f += 1)
        o[f] && o[f].m(t, null);
      m[10](t), a = !0;
    },
    p(e, r) {
      var f;
      r & /*state, temporaryState, tags, mediaStore, rendererMap, contentTypeMap, wrapperElement, popoverContainerEl*/
      447 && (s = /*tags*/
      e[0], N(), o = F(o, r, u, 1, e, s, i, t, G, I, null, w), E()), (!a || r & /*state, temporaryState*/
      48 && p !== (p = !/*state*/
      e[4].visible || !/*temporaryState*/
      e[5].visible ? "1" : "0")) && h(t, "data-infive", p), (!a || r & /*state, temporaryState*/
      48) && C(t, "hide", !/*state*/
      e[4].visible || !/*temporaryState*/
      e[5].visible), r & /*zIndex*/
      64 && _(
        t,
        "z-index",
        /*zIndex*/
        (f = e[6]) != null ? f : ""
      ), r & /*state, temporaryState*/
      48 && _(t, "opacity", !/*state*/
      e[4].visible || !/*temporaryState*/
      e[5].visible ? null : 1);
    },
    i(e) {
      if (!a) {
        for (let r = 0; r < s.length; r += 1)
          d(o[r]);
        n || H(() => {
          n = J(t, V, {}), n.start();
        }), a = !0;
      }
    },
    o(e) {
      for (let r = 0; r < o.length; r += 1)
        c(o[r]);
      a = !1;
    },
    d(e) {
      e && b(t);
      for (let r = 0; r < o.length; r += 1)
        o[r].d();
      m[10](null);
    }
  };
}
function I(m, t) {
  let o, i, p;
  return i = new U({
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
        t[12]
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
      ),
      wrapperElement: (
        /*wrapperElement*/
        t[7]
      ),
      popoverContainer: (
        /*popoverContainerEl*/
        t[8]
      )
    }
  }), {
    key: m,
    first: null,
    c() {
      o = q(), K(i.$$.fragment), this.first = o;
    },
    m(n, a) {
      g(n, o, a), L(i, n, a), p = !0;
    },
    p(n, a) {
      t = n;
      const s = {};
      a & /*state*/
      16 && (s.state = /*state*/
      t[4]), a & /*temporaryState*/
      32 && (s.temporaryState = /*temporaryState*/
      t[5]), a & /*tags*/
      1 && (s.tag = /*tag*/
      t[12]), a & /*mediaStore*/
      2 && (s.mediaStore = /*mediaStore*/
      t[1]), a & /*rendererMap*/
      4 && (s.rendererMap = /*rendererMap*/
      t[2]), a & /*contentTypeMap*/
      8 && (s.contentTypeMap = /*contentTypeMap*/
      t[3]), a & /*wrapperElement*/
      128 && (s.wrapperElement = /*wrapperElement*/
      t[7]), a & /*popoverContainerEl*/
      256 && (s.popoverContainer = /*popoverContainerEl*/
      t[8]), i.$set(s);
    },
    i(n) {
      p || (d(i.$$.fragment, n), p = !0);
    },
    o(n) {
      c(i.$$.fragment, n), p = !1;
    },
    d(n) {
      n && b(o), Q(i, n);
    }
  };
}
function Y(m) {
  let t, o, i = (
    /*state*/
    m[4].enabled && T(m)
  );
  return {
    c() {
      i && i.c(), t = q();
    },
    m(p, n) {
      i && i.m(p, n), g(p, t, n), o = !0;
    },
    p(p, [n]) {
      /*state*/
      p[4].enabled ? i ? (i.p(p, n), n & /*state*/
      16 && d(i, 1)) : (i = T(p), i.c(), d(i, 1), i.m(t.parentNode, t)) : i && (N(), c(i, 1, 1, () => {
        i = null;
      }), E());
    },
    i(p) {
      o || (d(i), o = !0);
    },
    o(p) {
      c(i), o = !1;
    },
    d(p) {
      i && i.d(p), p && b(t);
    }
  };
}
function x(m, t, o) {
  let { tags: i = [] } = t, { hooks: p } = t, { mediaStore: n } = t, { rendererMap: a } = t, { contentTypeMap: s } = t, { state: u } = t, { temporaryState: e } = t, { zIndex: r = void 0 } = t, f = null, v = null, k = 2e3;
  z("hooks", p), z("mediaStore", n), B(() => {
    o(8, v = W(k));
  });
  function O(l) {
    R[l ? "unshift" : "push"](() => {
      f = l, o(7, f);
    });
  }
  return m.$$set = (l) => {
    "tags" in l && o(0, i = l.tags), "hooks" in l && o(9, p = l.hooks), "mediaStore" in l && o(1, n = l.mediaStore), "rendererMap" in l && o(2, a = l.rendererMap), "contentTypeMap" in l && o(3, s = l.contentTypeMap), "state" in l && o(4, u = l.state), "temporaryState" in l && o(5, e = l.temporaryState), "zIndex" in l && o(6, r = l.zIndex);
  }, m.$$.update = () => {
    var l, y, M, S;
    m.$$.dirty & /*tags*/
    1 && i && i.length > 0 && (k = (S = (M = (y = (l = i[0]) == null ? void 0 : l.config) == null ? void 0 : y.popoverConfig) == null ? void 0 : M.zIndex) != null ? S : 2e6);
  }, [
    i,
    n,
    a,
    s,
    u,
    e,
    r,
    f,
    v,
    p,
    O
  ];
}
class Nr extends P {
  constructor(t) {
    super(), Z(
      this,
      t,
      x,
      Y,
      j,
      {
        tags: 0,
        hooks: 9,
        mediaStore: 1,
        rendererMap: 2,
        contentTypeMap: 3,
        state: 4,
        temporaryState: 5,
        zIndex: 6
      },
      X
    );
  }
}
export {
  Nr as default
};
