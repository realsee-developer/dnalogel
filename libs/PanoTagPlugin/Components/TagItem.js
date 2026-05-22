import { SvelteComponent as ke, init as Te, safe_not_equal as Ce, append_styles as he, space as pe, empty as Pe, insert as R, transition_in as _, transition_out as h, check_outros as V, detach as Z, getContext as ye, onMount as Ee, element as X, attr as c, toggle_class as H, set_style as F, append as Me, group_outros as j, create_component as Y, mount_component as $, destroy_component as x, binding_callbacks as W, noop as I, bind as De, add_flush_callback as Se } from "../../vendor/svelte/internal/index.js";
import we from "./Tag/index.js";
import "three";
import { noTypecheck as re } from "../utils/noTypecheck.js";
import He from "./Common/TagPoint.js";
import "../../shared-utils/tag.js";
import { isModelLike as Ie } from "../../shared-utils/five/mode.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../shared-utils/three/blink.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../vendor/earcut/src/earcut.js";
import "../../shared-utils/five/FivePuppet.js";
import Ue from "./Common/TagPopover/index.js";
import "./Tag/TextTag/index.js";
import "./Tag/TextTag/TextTag.js";
import "./Common/Line/Straight.js";
import "../../vendor/svelte/transition/index.js";
import "../../vendor/svelte/easing/index.js";
import "../../shared-utils/uuid.js";
import "./Common/Shadow.js";
import "./Common/Text/FlyMText.js";
import "./Common/Text/FlyText.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../shared-utils/isNil.js";
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
import "./Tag/Assets/marketingIcon.js";
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
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../shared-utils/even.js";
import "../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/CSS3DRender/index.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../shared-utils/three/IObject3D.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/util.js";
import "../../shared-utils/five/getFiveFromParentChain.js";
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../Sculpt/utils/unit.js";
import "../../Sculpt/utils/renderDom.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../../Sculpt/utils/three/rayOnLine.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
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
import "./Tag/AudioTag/AudioPoint.js";
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
function Le(o) {
  he(o, "svelte-2g2g8a", ".tag.svelte-2g2g8a{position:absolute;width:0rem;height:0rem;overflow:visible;pointer-events:auto;will-change:opacity;transition:opacity 0.2s linear}.tag.enableZIndex.svelte-2g2g8a{position:absolute}.tag.hide.svelte-2g2g8a{opacity:0;pointer-events:none}.tag.hide.svelte-2g2g8a *{pointer-events:none !important}.tag.unClickable.svelte-2g2g8a{pointer-events:none !important}.tag.unClickable.svelte-2g2g8a *{pointer-events:none !important}");
}
function ne(o) {
  let e, i, a, m, r, n, u, l, g, d;
  const U = [Ae, ze], b = [];
  function L(f, s) {
    return (
      /*havePoint*/
      f[10] ? 0 : 1
    );
  }
  i = L(o), a = b[i] = U[i](o);
  const t = [Ze, Re], v = [];
  function D(f, s) {
    return (
      /*haveContent*/
      f[25] ? 0 : 1
    );
  }
  return r = D(o), n = v[r] = t[r](o), {
    c() {
      e = X("div"), a.c(), m = pe(), n.c(), c(e, "class", "tag svelte-2g2g8a"), c(
        e,
        "data-tag-id",
        /*id*/
        o[23]
      ), c(
        e,
        "data-tag-unfolded",
        /*unfolded*/
        o[8]
      ), c(e, "data-content-type", u = /*tag*/
      o[0].contentType), c(e, "data-popover-enabled", l = /*tag*/
      o[0].isPopoverConfigEnabled()), c(e, "id", g = `tag-${/*id*/
      o[23]}`), H(
        e,
        "unClickable",
        /*tag*/
        o[0].config.clickable === !1
      ), H(
        e,
        "hide",
        /*hide*/
        o[21]
      ), H(
        e,
        "enableZIndex",
        /*zIndex*/
        o[18]
      ), F(
        e,
        "z-index",
        /*zIndex*/
        o[18]
      ), F(e, "transform", `translate3d(${/*left*/
      o[20]}, ${/*top*/
      o[19]}, 0) scale(${/*screenPosition*/
      o[9].scale})`);
    },
    m(f, s) {
      R(f, e, s), b[i].m(e, null), Me(e, m), v[r].m(e, null), o[36](e), d = !0;
    },
    p(f, s) {
      let S = i;
      i = L(f), i === S ? b[i].p(f, s) : (j(), h(b[S], 1, 1, () => {
        b[S] = null;
      }), V(), a = b[i], a ? a.p(f, s) : (a = b[i] = U[i](f), a.c()), _(a, 1), a.m(e, m));
      let w = r;
      r = D(f), r === w ? v[r].p(f, s) : (j(), h(v[w], 1, 1, () => {
        v[w] = null;
      }), V(), n = v[r], n ? n.p(f, s) : (n = v[r] = t[r](f), n.c()), _(n, 1), n.m(e, null)), (!d || s[0] & /*id*/
      8388608) && c(
        e,
        "data-tag-id",
        /*id*/
        f[23]
      ), (!d || s[0] & /*unfolded*/
      256) && c(
        e,
        "data-tag-unfolded",
        /*unfolded*/
        f[8]
      ), (!d || s[0] & /*tag*/
      1 && u !== (u = /*tag*/
      f[0].contentType)) && c(e, "data-content-type", u), (!d || s[0] & /*tag*/
      1 && l !== (l = /*tag*/
      f[0].isPopoverConfigEnabled())) && c(e, "data-popover-enabled", l), (!d || s[0] & /*id*/
      8388608 && g !== (g = `tag-${/*id*/
      f[23]}`)) && c(e, "id", g), (!d || s[0] & /*tag*/
      1) && H(
        e,
        "unClickable",
        /*tag*/
        f[0].config.clickable === !1
      ), (!d || s[0] & /*hide*/
      2097152) && H(
        e,
        "hide",
        /*hide*/
        f[21]
      ), (!d || s[0] & /*zIndex*/
      262144) && H(
        e,
        "enableZIndex",
        /*zIndex*/
        f[18]
      ), s[0] & /*zIndex*/
      262144 && F(
        e,
        "z-index",
        /*zIndex*/
        f[18]
      ), s[0] & /*left, top, screenPosition*/
      1573376 && F(e, "transform", `translate3d(${/*left*/
      f[20]}, ${/*top*/
      f[19]}, 0) scale(${/*screenPosition*/
      f[9].scale})`);
    },
    i(f) {
      d || (_(a), _(n), d = !0);
    },
    o(f) {
      h(a), h(n), d = !1;
    },
    d(f) {
      f && Z(e), b[i].d(), v[r].d(), o[36](null);
    }
  };
}
function ze(o) {
  let e;
  return {
    c() {
      e = X("div"), c(e, "data-info", "tag point is disable");
    },
    m(i, a) {
      R(i, e, a);
    },
    p: I,
    i: I,
    o: I,
    d(i) {
      i && Z(e);
    }
  };
}
function Ae(o) {
  let e, i, a;
  function m(n) {
    o[34](n);
  }
  let r = {
    tag: (
      /*tag*/
      o[0]
    ),
    handleMouseEnter: (
      /*handleMouseEnter*/
      o[30]
    ),
    handleMouseLeave: (
      /*handleMouseLeave*/
      o[31]
    ),
    handleTagPointClick: (
      /*handleTagPointClick*/
      o[32]
    )
  };
  return (
    /*tagPointClickHelper*/
    o[12] !== void 0 && (r.tagPointClickHelper = /*tagPointClickHelper*/
    o[12]), e = new He({ props: r }), W.push(() => De(e, "tagPointClickHelper", m)), o[35](e), e.$on(
      "audioInstanceReady",
      /*audioEventHandlers*/
      o[27].audioInstanceReady
    ), e.$on(
      "audioPlay",
      /*audioEventHandlers*/
      o[27].audioPlay
    ), e.$on(
      "audioPause",
      /*audioEventHandlers*/
      o[27].audioPause
    ), e.$on(
      "audioTimeUpdate",
      /*audioEventHandlers*/
      o[27].audioTimeUpdate
    ), e.$on(
      "audioDuration",
      /*audioEventHandlers*/
      o[27].audioDuration
    ), {
      c() {
        Y(e.$$.fragment);
      },
      m(n, u) {
        $(e, n, u), a = !0;
      },
      p(n, u) {
        const l = {};
        u[0] & /*tag*/
        1 && (l.tag = /*tag*/
        n[0]), !i && u[0] & /*tagPointClickHelper*/
        4096 && (i = !0, l.tagPointClickHelper = /*tagPointClickHelper*/
        n[12], Se(() => i = !1)), e.$set(l);
      },
      i(n) {
        a || (_(e.$$.fragment, n), a = !0);
      },
      o(n) {
        h(e.$$.fragment, n), a = !1;
      },
      d(n) {
        o[35](null), x(e, n);
      }
    }
  );
}
function Re(o) {
  let e;
  return {
    c() {
      e = X("div"), c(e, "data-info", "tag content is disable");
    },
    m(i, a) {
      R(i, e, a);
    },
    p: I,
    i: I,
    o: I,
    d(i) {
      i && Z(e);
    }
  };
}
function Ze(o) {
  let e, i;
  return e = new we({
    props: {
      mediaStore: (
        /*mediaStore*/
        o[1]
      ),
      tag: re(
        /*tag*/
        o[0]
      ),
      hooks: (
        /*hooks*/
        o[26]
      ),
      state: (
        /*state*/
        o[4]
      ),
      temporaryState: (
        /*temporaryState*/
        o[5]
      ),
      rendererMap: (
        /*rendererMap*/
        o[2]
      ),
      contentTypeMap: (
        /*contentTypeMap*/
        o[3]
      )
    }
  }), {
    c() {
      Y(e.$$.fragment);
    },
    m(a, m) {
      $(e, a, m), i = !0;
    },
    p(a, m) {
      const r = {};
      m[0] & /*mediaStore*/
      2 && (r.mediaStore = /*mediaStore*/
      a[1]), m[0] & /*tag*/
      1 && (r.tag = re(
        /*tag*/
        a[0]
      )), m[0] & /*state*/
      16 && (r.state = /*state*/
      a[4]), m[0] & /*temporaryState*/
      32 && (r.temporaryState = /*temporaryState*/
      a[5]), m[0] & /*rendererMap*/
      4 && (r.rendererMap = /*rendererMap*/
      a[2]), m[0] & /*contentTypeMap*/
      8 && (r.contentTypeMap = /*contentTypeMap*/
      a[3]), e.$set(r);
    },
    i(a) {
      i || (_(e.$$.fragment, a), i = !0);
    },
    o(a) {
      h(e.$$.fragment, a), i = !1;
    },
    d(a) {
      x(e, a);
    }
  };
}
function ae(o) {
  var a;
  let e, i;
  return e = new Ue({
    props: {
      tag: (
        /*tag*/
        o[0]
      ),
      config: (
        /*tag*/
        o[0].config.popoverConfig
      ),
      theme: (
        /*tag*/
        (a = o[0].config.popoverConfig) == null ? void 0 : a.theme
      ),
      wrapperElement: (
        /*wrapperElement*/
        o[6]
      ),
      triggerElement: (
        /*tagPointClickHelper*/
        o[12]
      ),
      popoverContainer: (
        /*popoverContainer*/
        o[7]
      ),
      visible: !0,
      closePopover: (
        /*closePopover*/
        o[33]
      ),
      audioInstance: (
        /*audioInstance*/
        o[14]
      ),
      audioPlaying: (
        /*audioPlaying*/
        o[15]
      ),
      audioCurrentTime: (
        /*audioCurrentTime*/
        o[16]
      ),
      audioDuration: (
        /*audioDuration*/
        o[17]
      )
    }
  }), e.$on(
    "mouseenter",
    /*handlePopoverMouseEnter*/
    o[28]
  ), e.$on(
    "mouseleave",
    /*handlePopoverMouseLeave*/
    o[29]
  ), e.$on(
    "close",
    /*closePopover*/
    o[33]
  ), {
    c() {
      Y(e.$$.fragment);
    },
    m(m, r) {
      $(e, m, r), i = !0;
    },
    p(m, r) {
      var u;
      const n = {};
      r[0] & /*tag*/
      1 && (n.tag = /*tag*/
      m[0]), r[0] & /*tag*/
      1 && (n.config = /*tag*/
      m[0].config.popoverConfig), r[0] & /*tag*/
      1 && (n.theme = /*tag*/
      (u = m[0].config.popoverConfig) == null ? void 0 : u.theme), r[0] & /*wrapperElement*/
      64 && (n.wrapperElement = /*wrapperElement*/
      m[6]), r[0] & /*tagPointClickHelper*/
      4096 && (n.triggerElement = /*tagPointClickHelper*/
      m[12]), r[0] & /*popoverContainer*/
      128 && (n.popoverContainer = /*popoverContainer*/
      m[7]), r[0] & /*audioInstance*/
      16384 && (n.audioInstance = /*audioInstance*/
      m[14]), r[0] & /*audioPlaying*/
      32768 && (n.audioPlaying = /*audioPlaying*/
      m[15]), r[0] & /*audioCurrentTime*/
      65536 && (n.audioCurrentTime = /*audioCurrentTime*/
      m[16]), r[0] & /*audioDuration*/
      131072 && (n.audioDuration = /*audioDuration*/
      m[17]), e.$set(n);
    },
    i(m) {
      i || (_(e.$$.fragment, m), i = !0);
    },
    o(m) {
      h(e.$$.fragment, m), i = !1;
    },
    d(m) {
      x(e, m);
    }
  };
}
function Ne(o) {
  var u;
  let e, i = (
    /*tag*/
    o[0].isPopoverConfigEnabled() && /*hasPopoverContent*/
    o[24] && /*isHovering*/
    (o[11] || /*tag*/
    ((u = o[0].config.popoverConfig) == null ? void 0 : u.debug))
  ), a, m, r = (
    /*screenPosition*/
    o[9] && (!/*disable*/
    o[22] || /*isHovering*/
    o[11]) && ne(o)
  ), n = i && ae(o);
  return {
    c() {
      r && r.c(), e = pe(), n && n.c(), a = Pe();
    },
    m(l, g) {
      r && r.m(l, g), R(l, e, g), n && n.m(l, g), R(l, a, g), m = !0;
    },
    p(l, g) {
      var d;
      /*screenPosition*/
      l[9] && (!/*disable*/
      l[22] || /*isHovering*/
      l[11]) ? r ? (r.p(l, g), g[0] & /*screenPosition, disable, isHovering*/
      4196864 && _(r, 1)) : (r = ne(l), r.c(), _(r, 1), r.m(e.parentNode, e)) : r && (j(), h(r, 1, 1, () => {
        r = null;
      }), V()), g[0] & /*tag, hasPopoverContent, isHovering*/
      16779265 && (i = /*tag*/
      l[0].isPopoverConfigEnabled() && /*hasPopoverContent*/
      l[24] && /*isHovering*/
      (l[11] || /*tag*/
      ((d = l[0].config.popoverConfig) == null ? void 0 : d.debug))), i ? n ? (n.p(l, g), g[0] & /*tag, hasPopoverContent, isHovering*/
      16779265 && _(n, 1)) : (n = ae(l), n.c(), _(n, 1), n.m(a.parentNode, a)) : n && (j(), h(n, 1, 1, () => {
        n = null;
      }), V());
    },
    i(l) {
      m || (_(r), _(n), m = !0);
    },
    o(l) {
      h(r), h(n), m = !1;
    },
    d(l) {
      r && r.d(l), l && Z(e), n && n.d(l), l && Z(a);
    }
  };
}
function Oe(o, e, i) {
  let a, m, r, n, u, l, g, d, U, b, L, { tag: t } = e, { mediaStore: v } = e, { rendererMap: D = /* @__PURE__ */ new Map() } = e, { contentTypeMap: f = /* @__PURE__ */ new Map() } = e, { state: s } = e, { temporaryState: S } = e, { wrapperElement: w = null } = e, { popoverContainer: ee = null } = e;
  const me = ye("hooks");
  let y = !1, M, E, B = null, G = !1, J = !1, K = null, Q = null, N = !1, te = 0, oe = 0;
  const le = {
    audioInstanceReady: (p) => {
      i(14, Q = p.detail), i(15, N = !Q.paused);
    },
    audioPlay: () => {
      i(15, N = !0);
    },
    audioPause: () => {
      i(15, N = !1);
    },
    audioTimeUpdate: (p) => {
      i(16, te = p.detail);
    },
    audioDuration: (p) => {
      i(17, oe = p.detail);
    }
  };
  let O = !1;
  const q = (p) => {
    if (E && clearTimeout(E), p === !0 && !O) {
      O = !0, i(11, y = !0);
      return;
    }
    E = setTimeout(
      () => {
        var k;
        !G && !J && !((k = t.config.popoverConfig) != null && k.debug) && (O = !1, i(11, y = !1));
      },
      300
    );
  }, fe = () => {
    G = !0, E && clearTimeout(E);
  }, ue = () => {
    G = !1, q(!1);
  }, se = (p) => {
    var P, T, C, z, A, ie;
    if (p.pointerType !== "mouse")
      return;
    J = !0;
    const k = (T = (P = t.currentConfig) == null ? void 0 : P.popoverConfig) == null ? void 0 : T.trigger;
    if (t.isPopoverConfigEnabled() && t.isHoverEnabled() && k === "hover") {
      if (E && clearTimeout(E), M !== void 0)
        return;
      ((z = (C = t.currentConfig) == null ? void 0 : C.popoverConfig) == null ? void 0 : z.triggerDelay) > 0 ? M = setTimeout(
        () => {
          q(!0), t.hooks.emit("hover", { event: p, tag: t }), M = void 0;
        },
        (ie = (A = t.currentConfig) == null ? void 0 : A.popoverConfig) == null ? void 0 : ie.triggerDelay
      ) : (q(!0), t.hooks.emit("hover", { event: p, tag: t }));
    }
  }, de = (p) => {
    var P, T;
    if (p.pointerType !== "mouse")
      return;
    J = !1;
    const k = (T = (P = t.currentConfig) == null ? void 0 : P.popoverConfig) == null ? void 0 : T.trigger;
    t.isHoverEnabled() && t.isPopoverConfigEnabled() && k === "hover" && (M !== void 0 && (clearTimeout(M), M = void 0), q(!1));
  }, ge = (p) => {
    var T, C;
    const k = t.contentType === "Audio" && t.data.appearance === "plane", P = (C = (T = t.currentConfig) == null ? void 0 : T.popoverConfig) == null ? void 0 : C.trigger;
    t.isPopoverConfigEnabled() && t.isHoverEnabled() && P === "click" && (k ? y || (i(11, y = !0), t.hooks.emit("hover", { event: p, tag: t })) : (i(11, y = !y), y && t.hooks.emit("hover", { event: p, tag: t })));
  };
  function ce() {
    O = !1, i(11, y = !1);
  }
  Ee(() => () => {
    M && clearTimeout(M), E && clearTimeout(E);
  });
  function _e(p) {
    B = p, i(12, B);
  }
  function be(p) {
    W[p ? "unshift" : "push"](() => {
      K = p, i(13, K);
    });
  }
  function ve(p) {
    W[p ? "unshift" : "push"](() => {
      t.dom = p, i(0, t);
    });
  }
  return o.$$set = (p) => {
    "tag" in p && i(0, t = p.tag), "mediaStore" in p && i(1, v = p.mediaStore), "rendererMap" in p && i(2, D = p.rendererMap), "contentTypeMap" in p && i(3, f = p.contentTypeMap), "state" in p && i(4, s = p.state), "temporaryState" in p && i(5, S = p.temporaryState), "wrapperElement" in p && i(6, w = p.wrapperElement), "popoverContainer" in p && i(7, ee = p.popoverContainer);
  }, o.$$.update = () => {
    var p, k, P, T;
    o.$$.dirty[0] & /*tag, rendererMap*/
    5 && i(10, a = (() => {
      var C, z, A;
      return ((z = (C = t.style) == null ? void 0 : C.point) == null ? void 0 : z.enabled) === !1 || ((A = D.get(t.contentType)) == null ? void 0 : A.usePoint) === !1 || t.contentType === "Sticker" || t.contentType === "Link" || t.contentType === "VRLink" || t.contentType === "PanoLink" ? !1 : t.contentType === "Panorama" ? !0 : t.contentType === "Audio" && t.data.appearance === "plane" ? t.isPopoverConfigEnabled() : !(t.stickType && t.stickType !== "2DPoint" && t.stickType !== "3DPoint");
    })()), o.$$.dirty[0] & /*tag, rendererMap, havePoint*/
    1029 && i(25, m = (() => t.isPopoverConfigEnabled() && t.contentType === "Panorama" || t.isPopoverConfigEnabled() && t.contentType === "ImageText" || t.isPopoverConfigEnabled() && t.contentType === "Text" || t.isPopoverConfigEnabled() && t.contentType === "Audio" ? !1 : t.element || D.has(t.contentType) ? !0 : !(t.stickType && t.stickType !== "2DPoint" && t.stickType !== "3DPoint" || t.entryFromModel && Ie(t.five.state.mode) && a))()), o.$$.dirty[0] & /*tag*/
    1 && i(24, r = (() => {
      var C;
      return t.contentType === "Marketing" ? !!(t.data.title || t.data.name || t.data.description || t.data.tooltip || (C = t.data.price) != null && C.value || t.data.brandTags && t.data.brandTags.length > 0 || t.data.tags && t.data.tags.length > 0 || t.data.imageUrl || t.data.mediaUrl || t.data.mediaData && t.data.mediaData.length > 0) : !!(t.data.title || t.data.name || t.data.text || t.data.description || t.data.tooltip || t.data.imageUrl || t.data.mediaUrl || t.data.audioUrl || t.data.mediaData && t.data.mediaData.length > 0);
    })()), o.$$.dirty[0] & /*tag*/
    1 && i(23, n = t.id), o.$$.dirty[0] & /*tag*/
    1 && i(9, u = t.screenPosition), o.$$.dirty[0] & /*tag*/
    1 && i(22, l = t.enabled === !1 || !t.state), o.$$.dirty[0] & /*tag, screenPosition*/
    513 && i(21, g = !((p = t.state) != null && p.visible) || ((k = t.temporaryState) == null ? void 0 : k.visible) === !1 || !u), o.$$.dirty[0] & /*tag*/
    1 && i(8, d = ((P = t.state) == null ? void 0 : P.unfolded) && !t.isPopoverConfigEnabled()), o.$$.dirty[0] & /*screenPosition*/
    512 && i(20, U = (u == null ? void 0 : u.leftPx) + "px"), o.$$.dirty[0] & /*screenPosition*/
    512 && i(19, b = (u == null ? void 0 : u.topPx) + "px"), o.$$.dirty[0] & /*unfolded, tag*/
    257 && i(18, L = d ? ((T = t.zIndex) != null ? T : 0) + (d ? 1e6 : 0) : void 0);
  }, [
    t,
    v,
    D,
    f,
    s,
    S,
    w,
    ee,
    d,
    u,
    a,
    y,
    B,
    K,
    Q,
    N,
    te,
    oe,
    L,
    b,
    U,
    g,
    l,
    n,
    r,
    m,
    me,
    le,
    fe,
    ue,
    se,
    de,
    ge,
    ce,
    _e,
    be,
    ve
  ];
}
class _r extends ke {
  constructor(e) {
    super(), Te(
      this,
      e,
      Oe,
      Ne,
      Ce,
      {
        tag: 0,
        mediaStore: 1,
        rendererMap: 2,
        contentTypeMap: 3,
        state: 4,
        temporaryState: 5,
        wrapperElement: 6,
        popoverContainer: 7
      },
      Le,
      [-1, -1]
    );
  }
}
export {
  _r as default
};
