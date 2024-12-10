import { SvelteComponent as J, init as K, safe_not_equal as O, append_styles as Q, empty as U, insert as I, transition_in as _, transition_out as g, check_outros as z, detach as P, getContext as W, element as Z, space as X, attr as d, toggle_class as T, set_style as C, append as Y, group_outros as L, binding_callbacks as x, noop as v, create_component as B, mount_component as E, destroy_component as G } from "../../vendor/svelte/internal/index.js";
import $ from "./Tag/index.js";
import "three";
import { noTypecheck as V } from "../utils/noTypecheck.js";
import tt from "./Common/TagPoint.js";
import "../../shared-utils/tag.js";
import { isModelLike as et } from "../../shared-utils/five/mode.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "@realsee/five/line";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../shared-utils/five/FivePuppet.js";
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
function it(o) {
  Q(o, "svelte-2g2g8a", ".tag.svelte-2g2g8a{position:absolute;width:0rem;height:0rem;overflow:visible;pointer-events:auto;will-change:opacity;transition:opacity 0.2s linear}.tag.enableZIndex.svelte-2g2g8a{position:absolute}.tag.hide.svelte-2g2g8a{opacity:0;pointer-events:none}.tag.hide.svelte-2g2g8a *{pointer-events:none !important}.tag.unClickable.svelte-2g2g8a{pointer-events:none !important}.tag.unClickable.svelte-2g2g8a *{pointer-events:none !important}");
}
function j(o) {
  let t, i, e, r, p, a, b, k, s;
  const M = [rt, ot], u = [];
  function S(n, l) {
    return (
      /*havePoint*/
      n[8] ? 0 : 1
    );
  }
  i = S(o), e = u[i] = M[i](o);
  const m = [nt, pt], c = [];
  function y(n, l) {
    return (
      /*haveContent*/
      n[15] ? 0 : 1
    );
  }
  return p = y(o), a = c[p] = m[p](o), {
    c() {
      t = Z("div"), e.c(), r = X(), a.c(), d(t, "class", "tag svelte-2g2g8a"), d(
        t,
        "data-tag-id",
        /*id*/
        o[14]
      ), d(
        t,
        "data-tag-unfolded",
        /*unfolded*/
        o[6]
      ), d(t, "data-content-type", b = /*tag*/
      o[0].contentType), d(t, "id", k = `tag-${/*id*/
      o[14]}`), T(
        t,
        "unClickable",
        /*tag*/
        o[0].config.clickable === !1
      ), T(
        t,
        "hide",
        /*hide*/
        o[12]
      ), T(
        t,
        "enableZIndex",
        /*zIndex*/
        o[9]
      ), C(
        t,
        "z-index",
        /*zIndex*/
        o[9]
      ), C(t, "transform", `translate3d(${/*left*/
      o[11]}, ${/*top*/
      o[10]}, 0) scale(${/*screenPosition*/
      o[7].scale})`);
    },
    m(n, l) {
      I(n, t, l), u[i].m(t, null), Y(t, r), c[p].m(t, null), o[17](t), s = !0;
    },
    p(n, l) {
      let h = i;
      i = S(n), i === h ? u[i].p(n, l) : (L(), g(u[h], 1, 1, () => {
        u[h] = null;
      }), z(), e = u[i], e ? e.p(n, l) : (e = u[i] = M[i](n), e.c()), _(e, 1), e.m(t, r));
      let w = p;
      p = y(n), p === w ? c[p].p(n, l) : (L(), g(c[w], 1, 1, () => {
        c[w] = null;
      }), z(), a = c[p], a ? a.p(n, l) : (a = c[p] = m[p](n), a.c()), _(a, 1), a.m(t, null)), (!s || l & /*id*/
      16384) && d(
        t,
        "data-tag-id",
        /*id*/
        n[14]
      ), (!s || l & /*unfolded*/
      64) && d(
        t,
        "data-tag-unfolded",
        /*unfolded*/
        n[6]
      ), (!s || l & /*tag*/
      1 && b !== (b = /*tag*/
      n[0].contentType)) && d(t, "data-content-type", b), (!s || l & /*id*/
      16384 && k !== (k = `tag-${/*id*/
      n[14]}`)) && d(t, "id", k), (!s || l & /*tag*/
      1) && T(
        t,
        "unClickable",
        /*tag*/
        n[0].config.clickable === !1
      ), (!s || l & /*hide*/
      4096) && T(
        t,
        "hide",
        /*hide*/
        n[12]
      ), (!s || l & /*zIndex*/
      512) && T(
        t,
        "enableZIndex",
        /*zIndex*/
        n[9]
      ), l & /*zIndex*/
      512 && C(
        t,
        "z-index",
        /*zIndex*/
        n[9]
      ), l & /*left, top, screenPosition*/
      3200 && C(t, "transform", `translate3d(${/*left*/
      n[11]}, ${/*top*/
      n[10]}, 0) scale(${/*screenPosition*/
      n[7].scale})`);
    },
    i(n) {
      s || (_(e), _(a), s = !0);
    },
    o(n) {
      g(e), g(a), s = !1;
    },
    d(n) {
      n && P(t), u[i].d(), c[p].d(), o[17](null);
    }
  };
}
function ot(o) {
  let t;
  return {
    c() {
      t = Z("div"), d(t, "data-info", "tag point is disable");
    },
    m(i, e) {
      I(i, t, e);
    },
    p: v,
    i: v,
    o: v,
    d(i) {
      i && P(t);
    }
  };
}
function rt(o) {
  let t, i;
  return t = new tt({ props: { tag: (
    /*tag*/
    o[0]
  ) } }), {
    c() {
      B(t.$$.fragment);
    },
    m(e, r) {
      E(t, e, r), i = !0;
    },
    p(e, r) {
      const p = {};
      r & /*tag*/
      1 && (p.tag = /*tag*/
      e[0]), t.$set(p);
    },
    i(e) {
      i || (_(t.$$.fragment, e), i = !0);
    },
    o(e) {
      g(t.$$.fragment, e), i = !1;
    },
    d(e) {
      G(t, e);
    }
  };
}
function pt(o) {
  let t;
  return {
    c() {
      t = Z("div"), d(t, "data-info", "tag content is disable");
    },
    m(i, e) {
      I(i, t, e);
    },
    p: v,
    i: v,
    o: v,
    d(i) {
      i && P(t);
    }
  };
}
function nt(o) {
  let t, i;
  return t = new $({
    props: {
      mediaStore: (
        /*mediaStore*/
        o[1]
      ),
      tag: V(
        /*tag*/
        o[0]
      ),
      hooks: (
        /*hooks*/
        o[16]
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
      B(t.$$.fragment);
    },
    m(e, r) {
      E(t, e, r), i = !0;
    },
    p(e, r) {
      const p = {};
      r & /*mediaStore*/
      2 && (p.mediaStore = /*mediaStore*/
      e[1]), r & /*tag*/
      1 && (p.tag = V(
        /*tag*/
        e[0]
      )), r & /*state*/
      16 && (p.state = /*state*/
      e[4]), r & /*temporaryState*/
      32 && (p.temporaryState = /*temporaryState*/
      e[5]), r & /*rendererMap*/
      4 && (p.rendererMap = /*rendererMap*/
      e[2]), r & /*contentTypeMap*/
      8 && (p.contentTypeMap = /*contentTypeMap*/
      e[3]), t.$set(p);
    },
    i(e) {
      i || (_(t.$$.fragment, e), i = !0);
    },
    o(e) {
      g(t.$$.fragment, e), i = !1;
    },
    d(e) {
      G(t, e);
    }
  };
}
function mt(o) {
  let t, i, e = (
    /*screenPosition*/
    o[7] && !/*disable*/
    o[13] && j(o)
  );
  return {
    c() {
      e && e.c(), t = U();
    },
    m(r, p) {
      e && e.m(r, p), I(r, t, p), i = !0;
    },
    p(r, [p]) {
      /*screenPosition*/
      r[7] && !/*disable*/
      r[13] ? e ? (e.p(r, p), p & /*screenPosition, disable*/
      8320 && _(e, 1)) : (e = j(r), e.c(), _(e, 1), e.m(t.parentNode, t)) : e && (L(), g(e, 1, 1, () => {
        e = null;
      }), z());
    },
    i(r) {
      i || (_(e), i = !0);
    },
    o(r) {
      g(e), i = !1;
    },
    d(r) {
      e && e.d(r), r && P(t);
    }
  };
}
function at(o, t, i) {
  let e, r, p, a, b, k, s, M, u, S, { tag: m } = t, { mediaStore: c } = t, { rendererMap: y = /* @__PURE__ */ new Map() } = t, { contentTypeMap: n = /* @__PURE__ */ new Map() } = t, { state: l } = t, { temporaryState: h } = t;
  const w = W("hooks");
  function H(f) {
    x[f ? "unshift" : "push"](() => {
      m.dom = f, i(0, m);
    });
  }
  return o.$$set = (f) => {
    "tag" in f && i(0, m = f.tag), "mediaStore" in f && i(1, c = f.mediaStore), "rendererMap" in f && i(2, y = f.rendererMap), "contentTypeMap" in f && i(3, n = f.contentTypeMap), "state" in f && i(4, l = f.state), "temporaryState" in f && i(5, h = f.temporaryState);
  }, o.$$.update = () => {
    var f, q, A, D;
    o.$$.dirty & /*tag, rendererMap*/
    5 && i(8, e = (() => {
      var F, N, R;
      return !(((N = (F = m.style) == null ? void 0 : F.point) == null ? void 0 : N.enabled) === !1 || ((R = y.get(m.contentType)) == null ? void 0 : R.usePoint) === !1 || m.contentType === "Sticker" || m.contentType === "Link" || m.contentType === "VRLink" || m.contentType === "PanoLink" || m.contentType === "Panorama" || m.contentType === "Audio" && m.data.appearance === "plane");
    })()), o.$$.dirty & /*tag, havePoint*/
    257 && i(15, r = (() => !(m.stickType !== "2DPoint" || m.entryFromModel && et(m.five.state.mode) && e))()), o.$$.dirty & /*tag*/
    1 && i(14, p = m.id), o.$$.dirty & /*tag*/
    1 && i(7, a = m.screenPosition), o.$$.dirty & /*tag*/
    1 && i(13, b = m.enabled === !1 || !m.state), o.$$.dirty & /*tag, screenPosition*/
    129 && i(12, k = !((f = m.state) != null && f.visible) || ((q = m.temporaryState) == null ? void 0 : q.visible) === !1 || !a), o.$$.dirty & /*tag*/
    1 && i(6, s = (A = m.state) == null ? void 0 : A.unfolded), o.$$.dirty & /*screenPosition*/
    128 && i(11, M = (a == null ? void 0 : a.leftPx) + "px"), o.$$.dirty & /*screenPosition*/
    128 && i(10, u = (a == null ? void 0 : a.topPx) + "px"), o.$$.dirty & /*unfolded, tag*/
    65 && i(9, S = s ? ((D = m.zIndex) != null ? D : 0) + (s ? 1e6 : 0) : void 0);
  }, [
    m,
    c,
    y,
    n,
    l,
    h,
    s,
    a,
    e,
    S,
    u,
    M,
    k,
    b,
    p,
    r,
    w,
    H
  ];
}
class co extends J {
  constructor(t) {
    super(), K(
      this,
      t,
      at,
      mt,
      O,
      {
        tag: 0,
        mediaStore: 1,
        rendererMap: 2,
        contentTypeMap: 3,
        state: 4,
        temporaryState: 5
      },
      it
    );
  }
}
export {
  co as default
};
