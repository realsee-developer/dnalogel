import { SvelteComponent as O, init as P, safe_not_equal as Z, append_styles as j, empty as I, insert as h, transition_in as d, transition_out as _, check_outros as q, detach as g, setContext as A, onMount as B, element as D, attr as c, toggle_class as S, set_style as z, group_outros as E, update_keyed_each as F, outro_and_destroy_block as G, add_render_callback as H, create_in_transition as J, create_component as K, mount_component as L, destroy_component as Q, binding_callbacks as R } from "../../vendor/svelte/internal/index.js";
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
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../shared-utils/util.js";
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
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../Sculpt/utils/unit.js";
import "../../Sculpt/utils/renderDom.js";
import "../../shared-utils/five/FivePuppet.js";
import "@realsee/five";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../../Sculpt/utils/three/rayOnLine.js";
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
import "./Common/TagPopover/index.js";
import "./Common/TagPopover/PopoverContent.js";
import "./Common/TagPopover/TagPopoverArrow.js";
import "./Common/Icon/tag-popover-arrow-base64.js";
import "./Common/TagPopover/TagPopup.js";
import "./Common/VideoIcon.js";
import "./Common/TagPopover/PanoramaIcon.js";
import "../utils/videoHelper.js";
import "./Common/TagPopover/TagPopoverToolBar.js";
import "./Common/TagPopover/ArrowRightIcon.js";
import "./Common/TagPopover/ShareIcon.js";
function X(n) {
  j(n, "svelte-9ehqs9", ".tag--container.svelte-9ehqs9{box-sizing:border-box;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;opacity:1;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform:translate3d(0, 0, 0);transition:opacity 0.2s linear;overflow:hidden}.tag--container.hide.svelte-9ehqs9{opacity:0 !important;pointer-events:none}.tag--container.hide.svelte-9ehqs9 *{pointer-events:none !important}");
}
function C(n, t, o) {
  const i = n.slice();
  return i[12] = t[o], i;
}
function w(n) {
  let t, o = [], i = /* @__PURE__ */ new Map(), m, p, l, f = (
    /*tags*/
    n[0]
  );
  const u = (e) => (
    /*tag*/
    e[12].id
  );
  for (let e = 0; e < f.length; e += 1) {
    let r = C(n, f, e), s = u(r);
    i.set(s, o[e] = T(s, r));
  }
  return {
    c() {
      var e;
      t = D("div");
      for (let r = 0; r < o.length; r += 1)
        o[r].c();
      c(t, "class", "tag--container svelte-9ehqs9"), c(t, "data-infive", m = !/*state*/
      n[4].visible || !/*temporaryState*/
      n[5].visible ? "1" : "0"), S(t, "hide", !/*state*/
      n[4].visible || !/*temporaryState*/
      n[5].visible), z(
        t,
        "z-index",
        /*zIndex*/
        (e = n[6]) != null ? e : ""
      );
    },
    m(e, r) {
      h(e, t, r);
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(t, null);
      n[10](t), l = !0;
    },
    p(e, r) {
      var s;
      r & /*state, temporaryState, tags, mediaStore, rendererMap, contentTypeMap, wrapperElement, popoverContainerEl*/
      447 && (f = /*tags*/
      e[0], E(), o = F(o, r, u, 1, e, f, i, t, G, T, null, C), q()), (!l || r & /*state, temporaryState*/
      48 && m !== (m = !/*state*/
      e[4].visible || !/*temporaryState*/
      e[5].visible ? "1" : "0")) && c(t, "data-infive", m), (!l || r & /*state, temporaryState*/
      48) && S(t, "hide", !/*state*/
      e[4].visible || !/*temporaryState*/
      e[5].visible), r & /*zIndex*/
      64 && z(
        t,
        "z-index",
        /*zIndex*/
        (s = e[6]) != null ? s : ""
      );
    },
    i(e) {
      if (!l) {
        for (let r = 0; r < f.length; r += 1)
          d(o[r]);
        p || H(() => {
          p = J(t, V, {}), p.start();
        }), l = !0;
      }
    },
    o(e) {
      for (let r = 0; r < o.length; r += 1)
        _(o[r]);
      l = !1;
    },
    d(e) {
      e && g(t);
      for (let r = 0; r < o.length; r += 1)
        o[r].d();
      n[10](null);
    }
  };
}
function T(n, t) {
  let o, i, m;
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
    key: n,
    first: null,
    c() {
      o = I(), K(i.$$.fragment), this.first = o;
    },
    m(p, l) {
      h(p, o, l), L(i, p, l), m = !0;
    },
    p(p, l) {
      t = p;
      const f = {};
      l & /*state*/
      16 && (f.state = /*state*/
      t[4]), l & /*temporaryState*/
      32 && (f.temporaryState = /*temporaryState*/
      t[5]), l & /*tags*/
      1 && (f.tag = /*tag*/
      t[12]), l & /*mediaStore*/
      2 && (f.mediaStore = /*mediaStore*/
      t[1]), l & /*rendererMap*/
      4 && (f.rendererMap = /*rendererMap*/
      t[2]), l & /*contentTypeMap*/
      8 && (f.contentTypeMap = /*contentTypeMap*/
      t[3]), l & /*wrapperElement*/
      128 && (f.wrapperElement = /*wrapperElement*/
      t[7]), l & /*popoverContainerEl*/
      256 && (f.popoverContainer = /*popoverContainerEl*/
      t[8]), i.$set(f);
    },
    i(p) {
      m || (d(i.$$.fragment, p), m = !0);
    },
    o(p) {
      _(i.$$.fragment, p), m = !1;
    },
    d(p) {
      p && g(o), Q(i, p);
    }
  };
}
function Y(n) {
  let t, o, i = (
    /*state*/
    n[4].enabled && w(n)
  );
  return {
    c() {
      i && i.c(), t = I();
    },
    m(m, p) {
      i && i.m(m, p), h(m, t, p), o = !0;
    },
    p(m, [p]) {
      /*state*/
      m[4].enabled ? i ? (i.p(m, p), p & /*state*/
      16 && d(i, 1)) : (i = w(m), i.c(), d(i, 1), i.m(t.parentNode, t)) : i && (E(), _(i, 1, 1, () => {
        i = null;
      }), q());
    },
    i(m) {
      o || (d(i), o = !0);
    },
    o(m) {
      _(i), o = !1;
    },
    d(m) {
      i && i.d(m), m && g(t);
    }
  };
}
function x(n, t, o) {
  let { tags: i = [] } = t, { hooks: m } = t, { mediaStore: p } = t, { rendererMap: l } = t, { contentTypeMap: f } = t, { state: u } = t, { temporaryState: e } = t, { zIndex: r = void 0 } = t, s = null, b = null, v = 2e3;
  A("hooks", m), B(() => {
    o(8, b = W(v));
  });
  function N(a) {
    R[a ? "unshift" : "push"](() => {
      s = a, o(7, s);
    });
  }
  return n.$$set = (a) => {
    "tags" in a && o(0, i = a.tags), "hooks" in a && o(9, m = a.hooks), "mediaStore" in a && o(1, p = a.mediaStore), "rendererMap" in a && o(2, l = a.rendererMap), "contentTypeMap" in a && o(3, f = a.contentTypeMap), "state" in a && o(4, u = a.state), "temporaryState" in a && o(5, e = a.temporaryState), "zIndex" in a && o(6, r = a.zIndex);
  }, n.$$.update = () => {
    var a, k, M, y;
    n.$$.dirty & /*tags*/
    1 && i && i.length > 0 && (v = (y = (M = (k = (a = i[0]) == null ? void 0 : a.config) == null ? void 0 : k.popoverConfig) == null ? void 0 : M.zIndex) != null ? y : 2e6);
  }, [
    i,
    p,
    l,
    f,
    u,
    e,
    r,
    s,
    b,
    m,
    N
  ];
}
class Sr extends O {
  constructor(t) {
    super(), P(
      this,
      t,
      x,
      Y,
      Z,
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
  Sr as default
};
