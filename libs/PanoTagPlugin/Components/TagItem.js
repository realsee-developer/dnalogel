import { SvelteComponent as me, init as le, safe_not_equal as fe, append_styles as se, space as Y, empty as ge, insert as Z, transition_in as _, transition_out as h, check_outros as F, detach as N, getContext as ue, onMount as de, element as j, attr as c, toggle_class as S, set_style as A, append as ce, group_outros as R, create_component as B, mount_component as G, destroy_component as J, binding_callbacks as x, noop as H, bind as _e, add_flush_callback as be } from "../../vendor/svelte/internal/index.js";
import ve from "./Tag/index.js";
import "three";
import { noTypecheck as Q } from "../utils/noTypecheck.js";
import ke from "./Common/TagPoint.js";
import "../../shared-utils/tag.js";
import { isModelLike as Ce } from "../../shared-utils/five/mode.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/five/FivePuppet.js";
import he from "./Common/TagPopover/index.js";
import "./Tag/TextTag/index.js";
import "./Tag/TextTag/TextTag.js";
import "./Common/Line/Straight.js";
import "../../vendor/svelte/transition/index.js";
import "../../vendor/svelte/easing/index.js";
import "../../shared-utils/uuid.js";
import "./Common/Shadow.js";
import "./Common/Text/FlyMText.js";
import "./Common/Text/FlyText.js";
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
function Te(o) {
  se(o, "svelte-2g2g8a", ".tag.svelte-2g2g8a{position:absolute;width:0rem;height:0rem;overflow:visible;pointer-events:auto;will-change:opacity;transition:opacity 0.2s linear}.tag.enableZIndex.svelte-2g2g8a{position:absolute}.tag.hide.svelte-2g2g8a{opacity:0;pointer-events:none}.tag.hide.svelte-2g2g8a *{pointer-events:none !important}.tag.unClickable.svelte-2g2g8a{pointer-events:none !important}.tag.unClickable.svelte-2g2g8a *{pointer-events:none !important}");
}
function W(o) {
  let e, i, p, a, r, n, s, m, d, u;
  const D = [ye, Pe], b = [];
  function I(l, g) {
    return (
      /*havePoint*/
      l[10] ? 0 : 1
    );
  }
  i = I(o), p = b[i] = D[i](o);
  const t = [Ee, Me], v = [];
  function M(l, g) {
    return (
      /*haveContent*/
      l[20] ? 0 : 1
    );
  }
  return r = M(o), n = v[r] = t[r](o), {
    c() {
      e = j("div"), p.c(), a = Y(), n.c(), c(e, "class", "tag svelte-2g2g8a"), c(
        e,
        "data-tag-id",
        /*id*/
        o[18]
      ), c(
        e,
        "data-tag-unfolded",
        /*unfolded*/
        o[8]
      ), c(e, "data-content-type", s = /*tag*/
      o[0].contentType), c(e, "data-popover-enabled", m = /*tag*/
      o[0].isPopoverConfigEnabled()), c(e, "id", d = `tag-${/*id*/
      o[18]}`), S(
        e,
        "unClickable",
        /*tag*/
        o[0].config.clickable === !1
      ), S(
        e,
        "hide",
        /*hide*/
        o[16]
      ), S(
        e,
        "enableZIndex",
        /*zIndex*/
        o[13]
      ), A(
        e,
        "z-index",
        /*zIndex*/
        o[13]
      ), A(e, "transform", `translate3d(${/*left*/
      o[15]}, ${/*top*/
      o[14]}, 0) scale(${/*screenPosition*/
      o[9].scale})`);
    },
    m(l, g) {
      Z(l, e, g), b[i].m(e, null), ce(e, a), v[r].m(e, null), o[29](e), u = !0;
    },
    p(l, g) {
      let E = i;
      i = I(l), i === E ? b[i].p(l, g) : (R(), h(b[E], 1, 1, () => {
        b[E] = null;
      }), F(), p = b[i], p ? p.p(l, g) : (p = b[i] = D[i](l), p.c()), _(p, 1), p.m(e, a));
      let w = r;
      r = M(l), r === w ? v[r].p(l, g) : (R(), h(v[w], 1, 1, () => {
        v[w] = null;
      }), F(), n = v[r], n ? n.p(l, g) : (n = v[r] = t[r](l), n.c()), _(n, 1), n.m(e, null)), (!u || g[0] & /*id*/
      262144) && c(
        e,
        "data-tag-id",
        /*id*/
        l[18]
      ), (!u || g[0] & /*unfolded*/
      256) && c(
        e,
        "data-tag-unfolded",
        /*unfolded*/
        l[8]
      ), (!u || g[0] & /*tag*/
      1 && s !== (s = /*tag*/
      l[0].contentType)) && c(e, "data-content-type", s), (!u || g[0] & /*tag*/
      1 && m !== (m = /*tag*/
      l[0].isPopoverConfigEnabled())) && c(e, "data-popover-enabled", m), (!u || g[0] & /*id*/
      262144 && d !== (d = `tag-${/*id*/
      l[18]}`)) && c(e, "id", d), (!u || g[0] & /*tag*/
      1) && S(
        e,
        "unClickable",
        /*tag*/
        l[0].config.clickable === !1
      ), (!u || g[0] & /*hide*/
      65536) && S(
        e,
        "hide",
        /*hide*/
        l[16]
      ), (!u || g[0] & /*zIndex*/
      8192) && S(
        e,
        "enableZIndex",
        /*zIndex*/
        l[13]
      ), g[0] & /*zIndex*/
      8192 && A(
        e,
        "z-index",
        /*zIndex*/
        l[13]
      ), g[0] & /*left, top, screenPosition*/
      49664 && A(e, "transform", `translate3d(${/*left*/
      l[15]}, ${/*top*/
      l[14]}, 0) scale(${/*screenPosition*/
      l[9].scale})`);
    },
    i(l) {
      u || (_(p), _(n), u = !0);
    },
    o(l) {
      h(p), h(n), u = !1;
    },
    d(l) {
      l && N(e), b[i].d(), v[r].d(), o[29](null);
    }
  };
}
function Pe(o) {
  let e;
  return {
    c() {
      e = j("div"), c(e, "data-info", "tag point is disable");
    },
    m(i, p) {
      Z(i, e, p);
    },
    p: H,
    i: H,
    o: H,
    d(i) {
      i && N(e);
    }
  };
}
function ye(o) {
  let e, i, p;
  function a(n) {
    o[28](n);
  }
  let r = {
    tag: (
      /*tag*/
      o[0]
    ),
    handleMouseEnter: (
      /*handleMouseEnter*/
      o[24]
    ),
    handleMouseLeave: (
      /*handleMouseLeave*/
      o[25]
    ),
    handleTagPointClick: (
      /*handleTagPointClick*/
      o[26]
    )
  };
  return (
    /*tagPointClickHelper*/
    o[12] !== void 0 && (r.tagPointClickHelper = /*tagPointClickHelper*/
    o[12]), e = new ke({ props: r }), x.push(() => _e(e, "tagPointClickHelper", a)), {
      c() {
        B(e.$$.fragment);
      },
      m(n, s) {
        G(e, n, s), p = !0;
      },
      p(n, s) {
        const m = {};
        s[0] & /*tag*/
        1 && (m.tag = /*tag*/
        n[0]), !i && s[0] & /*tagPointClickHelper*/
        4096 && (i = !0, m.tagPointClickHelper = /*tagPointClickHelper*/
        n[12], be(() => i = !1)), e.$set(m);
      },
      i(n) {
        p || (_(e.$$.fragment, n), p = !0);
      },
      o(n) {
        h(e.$$.fragment, n), p = !1;
      },
      d(n) {
        J(e, n);
      }
    }
  );
}
function Me(o) {
  let e;
  return {
    c() {
      e = j("div"), c(e, "data-info", "tag content is disable");
    },
    m(i, p) {
      Z(i, e, p);
    },
    p: H,
    i: H,
    o: H,
    d(i) {
      i && N(e);
    }
  };
}
function Ee(o) {
  let e, i;
  return e = new ve({
    props: {
      mediaStore: (
        /*mediaStore*/
        o[1]
      ),
      tag: Q(
        /*tag*/
        o[0]
      ),
      hooks: (
        /*hooks*/
        o[21]
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
      B(e.$$.fragment);
    },
    m(p, a) {
      G(e, p, a), i = !0;
    },
    p(p, a) {
      const r = {};
      a[0] & /*mediaStore*/
      2 && (r.mediaStore = /*mediaStore*/
      p[1]), a[0] & /*tag*/
      1 && (r.tag = Q(
        /*tag*/
        p[0]
      )), a[0] & /*state*/
      16 && (r.state = /*state*/
      p[4]), a[0] & /*temporaryState*/
      32 && (r.temporaryState = /*temporaryState*/
      p[5]), a[0] & /*rendererMap*/
      4 && (r.rendererMap = /*rendererMap*/
      p[2]), a[0] & /*contentTypeMap*/
      8 && (r.contentTypeMap = /*contentTypeMap*/
      p[3]), e.$set(r);
    },
    i(p) {
      i || (_(e.$$.fragment, p), i = !0);
    },
    o(p) {
      h(e.$$.fragment, p), i = !1;
    },
    d(p) {
      J(e, p);
    }
  };
}
function X(o) {
  var p;
  let e, i;
  return e = new he({
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
        (p = o[0].config.popoverConfig) == null ? void 0 : p.theme
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
        o[27]
      )
    }
  }), e.$on(
    "mouseenter",
    /*handlePopoverMouseEnter*/
    o[22]
  ), e.$on(
    "mouseleave",
    /*handlePopoverMouseLeave*/
    o[23]
  ), e.$on(
    "close",
    /*closePopover*/
    o[27]
  ), {
    c() {
      B(e.$$.fragment);
    },
    m(a, r) {
      G(e, a, r), i = !0;
    },
    p(a, r) {
      var s;
      const n = {};
      r[0] & /*tag*/
      1 && (n.tag = /*tag*/
      a[0]), r[0] & /*tag*/
      1 && (n.config = /*tag*/
      a[0].config.popoverConfig), r[0] & /*tag*/
      1 && (n.theme = /*tag*/
      (s = a[0].config.popoverConfig) == null ? void 0 : s.theme), r[0] & /*wrapperElement*/
      64 && (n.wrapperElement = /*wrapperElement*/
      a[6]), r[0] & /*tagPointClickHelper*/
      4096 && (n.triggerElement = /*tagPointClickHelper*/
      a[12]), r[0] & /*popoverContainer*/
      128 && (n.popoverContainer = /*popoverContainer*/
      a[7]), e.$set(n);
    },
    i(a) {
      i || (_(e.$$.fragment, a), i = !0);
    },
    o(a) {
      h(e.$$.fragment, a), i = !1;
    },
    d(a) {
      J(e, a);
    }
  };
}
function we(o) {
  var s;
  let e, i = (
    /*tag*/
    o[0].isPopoverConfigEnabled() && /*hasPopoverContent*/
    o[19] && /*isHovering*/
    (o[11] || /*tag*/
    ((s = o[0].config.popoverConfig) == null ? void 0 : s.debug))
  ), p, a, r = (
    /*screenPosition*/
    o[9] && !/*disable*/
    o[17] && W(o)
  ), n = i && X(o);
  return {
    c() {
      r && r.c(), e = Y(), n && n.c(), p = ge();
    },
    m(m, d) {
      r && r.m(m, d), Z(m, e, d), n && n.m(m, d), Z(m, p, d), a = !0;
    },
    p(m, d) {
      var u;
      /*screenPosition*/
      m[9] && !/*disable*/
      m[17] ? r ? (r.p(m, d), d[0] & /*screenPosition, disable*/
      131584 && _(r, 1)) : (r = W(m), r.c(), _(r, 1), r.m(e.parentNode, e)) : r && (R(), h(r, 1, 1, () => {
        r = null;
      }), F()), d[0] & /*tag, hasPopoverContent, isHovering*/
      526337 && (i = /*tag*/
      m[0].isPopoverConfigEnabled() && /*hasPopoverContent*/
      m[19] && /*isHovering*/
      (m[11] || /*tag*/
      ((u = m[0].config.popoverConfig) == null ? void 0 : u.debug))), i ? n ? (n.p(m, d), d[0] & /*tag, hasPopoverContent, isHovering*/
      526337 && _(n, 1)) : (n = X(m), n.c(), _(n, 1), n.m(p.parentNode, p)) : n && (R(), h(n, 1, 1, () => {
        n = null;
      }), F());
    },
    i(m) {
      a || (_(r), _(n), a = !0);
    },
    o(m) {
      h(r), h(n), a = !1;
    },
    d(m) {
      r && r.d(m), m && N(e), n && n.d(m), m && N(p);
    }
  };
}
function Se(o, e, i) {
  let p, a, r, n, s, m, d, u, D, b, I, { tag: t } = e, { mediaStore: v } = e, { rendererMap: M = /* @__PURE__ */ new Map() } = e, { contentTypeMap: l = /* @__PURE__ */ new Map() } = e, { state: g } = e, { temporaryState: E } = e, { wrapperElement: w = null } = e, { popoverContainer: K = null } = e;
  const $ = ue("hooks");
  let T = !1, P, V = null, O = !1, q = !1;
  const ee = () => {
    O = !0;
  }, te = () => {
    O = !1, !O && !q && i(11, T = !1);
  }, oe = (f) => {
    var k, C, L, y, z, U;
    q = !0, t.isPopoverConfigEnabled() && t.isHoverEnabled() && ((C = (k = t.currentConfig) == null ? void 0 : k.popoverConfig) == null ? void 0 : C.trigger) === "hover" && (P !== void 0 && clearTimeout(P), ((y = (L = t.currentConfig) == null ? void 0 : L.popoverConfig) == null ? void 0 : y.triggerDelay) > 0 ? P = setTimeout(
      () => {
        i(11, T = !0), t.hooks.emit("hover", { event: f, tag: t }), P = void 0;
      },
      (U = (z = t.currentConfig) == null ? void 0 : z.popoverConfig) == null ? void 0 : U.triggerDelay
    ) : (i(11, T = !0), t.hooks.emit("hover", { event: f, tag: t })));
  }, ie = (f) => {
    var k, C;
    q = !1, t.isHoverEnabled() && t.isPopoverConfigEnabled() && ((C = (k = t.currentConfig) == null ? void 0 : k.popoverConfig) == null ? void 0 : C.trigger) === "hover" && (P !== void 0 && (clearTimeout(P), P = void 0), !O && !q && i(11, T = !1));
  }, re = (f) => {
    var k, C;
    t.isPopoverConfigEnabled() && t.isHoverEnabled() && ((C = (k = t.currentConfig) == null ? void 0 : k.popoverConfig) == null ? void 0 : C.trigger) === "click" && (i(11, T = !T), T && t.hooks.emit("hover", { event: f, tag: t }));
  };
  function ne() {
    i(11, T = !1);
  }
  de(() => () => {
    P && clearTimeout(P);
  });
  function pe(f) {
    V = f, i(12, V);
  }
  function ae(f) {
    x[f ? "unshift" : "push"](() => {
      t.dom = f, i(0, t);
    });
  }
  return o.$$set = (f) => {
    "tag" in f && i(0, t = f.tag), "mediaStore" in f && i(1, v = f.mediaStore), "rendererMap" in f && i(2, M = f.rendererMap), "contentTypeMap" in f && i(3, l = f.contentTypeMap), "state" in f && i(4, g = f.state), "temporaryState" in f && i(5, E = f.temporaryState), "wrapperElement" in f && i(6, w = f.wrapperElement), "popoverContainer" in f && i(7, K = f.popoverContainer);
  }, o.$$.update = () => {
    var f, k, C, L;
    o.$$.dirty[0] & /*tag, rendererMap*/
    5 && i(10, p = (() => {
      var y, z, U;
      return ((z = (y = t.style) == null ? void 0 : y.point) == null ? void 0 : z.enabled) === !1 || ((U = M.get(t.contentType)) == null ? void 0 : U.usePoint) === !1 || t.contentType === "Sticker" || t.contentType === "Link" || t.contentType === "VRLink" || t.contentType === "PanoLink" ? !1 : t.contentType === "Panorama" ? !0 : !(t.contentType === "Audio" && t.data.appearance === "plane");
    })()), o.$$.dirty[0] & /*tag, havePoint*/
    1025 && i(20, a = (() => !(t.isPopoverConfigEnabled() && t.contentType === "Panorama" || t.isPopoverConfigEnabled() && t.contentType === "ImageText" || t.isPopoverConfigEnabled() && t.contentType === "Text" || t.stickType !== "2DPoint" || t.entryFromModel && Ce(t.five.state.mode) && p))()), o.$$.dirty[0] & /*tag*/
    1 && i(19, r = (() => {
      var y;
      return t.contentType === "Marketing" ? !!(t.data.title || t.data.name || t.data.description || t.data.tooltip || (y = t.data.price) != null && y.value || t.data.brandTags && t.data.brandTags.length > 0 || t.data.tags && t.data.tags.length > 0 || t.data.imageUrl || t.data.mediaUrl || t.data.mediaData && t.data.mediaData.length > 0) : !!(t.data.title || t.data.name || t.data.text || t.data.description || t.data.tooltip || t.data.imageUrl || t.data.mediaUrl || t.data.mediaData && t.data.mediaData.length > 0);
    })()), o.$$.dirty[0] & /*tag*/
    1 && i(18, n = t.id), o.$$.dirty[0] & /*tag*/
    1 && i(9, s = t.screenPosition), o.$$.dirty[0] & /*tag*/
    1 && i(17, m = t.enabled === !1 || !t.state), o.$$.dirty[0] & /*tag, screenPosition*/
    513 && i(16, d = !((f = t.state) != null && f.visible) || ((k = t.temporaryState) == null ? void 0 : k.visible) === !1 || !s), o.$$.dirty[0] & /*tag*/
    1 && i(8, u = ((C = t.state) == null ? void 0 : C.unfolded) && !t.isPopoverConfigEnabled()), o.$$.dirty[0] & /*screenPosition*/
    512 && i(15, D = (s == null ? void 0 : s.leftPx) + "px"), o.$$.dirty[0] & /*screenPosition*/
    512 && i(14, b = (s == null ? void 0 : s.topPx) + "px"), o.$$.dirty[0] & /*unfolded, tag*/
    257 && i(13, I = u ? ((L = t.zIndex) != null ? L : 0) + (u ? 1e6 : 0) : void 0);
  }, [
    t,
    v,
    M,
    l,
    g,
    E,
    w,
    K,
    u,
    s,
    p,
    T,
    V,
    I,
    b,
    D,
    d,
    m,
    n,
    r,
    a,
    $,
    ee,
    te,
    oe,
    ie,
    re,
    ne,
    pe,
    ae
  ];
}
class Yi extends me {
  constructor(e) {
    super(), le(
      this,
      e,
      Se,
      we,
      fe,
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
      Te,
      [-1, -1]
    );
  }
}
export {
  Yi as default
};
