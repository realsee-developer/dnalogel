import { SvelteComponent as tA, init as iA, safe_not_equal as oA, append_styles as rA, empty as nA, insert as L, transition_out as w, check_outros as $, transition_in as k, detach as O, setContext as q, group_outros as AA, binding_callbacks as X, element as Y, attr as _, noop as j, toggle_class as Q, null_to_empty as S, set_style as W, append as x, listen as eA, create_component as h, mount_component as D, destroy_component as M } from "../../../vendor/svelte/internal/index.js";
import aA from "./TextTag/index.js";
import lA from "./ImageTextTag.js";
import mA from "./MarketingTag.js";
import "three";
import { noTypecheck as c } from "../../utils/noTypecheck.js";
import fA from "./AudioTag/index.js";
import pA from "./MediaPlane.js";
import sA from "./LinkTag.js";
import uA from "./PanoramaTag.js";
import gA from "./CustomTag.js";
import { classnames as F } from "../../../vendor/classnames/index.js";
import { ModelTag as cA } from "../../controller/Tag/ModelTag.js";
import "../../../shared-utils/tag.js";
import { isModelLike as dA } from "../../../shared-utils/five/mode.js";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../shared-utils/five/FivePuppet.js";
import "./TextTag/TextTag.js";
import "../Common/Line/Straight.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "../../../shared-utils/uuid.js";
import "../Common/Shadow.js";
import "../Common/Text/FlyMText.js";
import "../Common/Text/FlyText.js";
import "../../../shared-utils/isNil.js";
import "../../utils/search.js";
import "../../utils/constants.js";
import "../Common/Arrow.js";
import "../../Assets/Icon.js";
import "../../utils/doUtil.js";
import "../../../shared-utils/svelte/resizeObserver.js";
import "../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "./TextTag/TextPlaneTag.js";
import "../Common/Text/MText.js";
import "../../utils/px2rem.js";
import "../Common/Line/Polyline.js";
import "../Common/Media.js";
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
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Subscribe.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/three/core/Raycaster.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/five/fiveEveryReadyListener.js";
import "../../../shared-utils/throttle.js";
import "../../../shared-utils/five/fiveModelLoad.js";
import "../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../shared-utils/even.js";
import "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../shared-utils/CSS3DRender/index.js";
import "../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../shared-utils/createResizeObserver.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../Sculpt/Meshes/Line.js";
import "../../../Sculpt/typings/style.js";
import "../../../shared-utils/three/IObject3D.js";
import "../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/util.js";
import "../../../shared-utils/three/core/LineGeometry.js";
import "../../../shared-utils/three/core/LineMaterial.js";
import "../../../shared-utils/three/core/Line2.js";
import "../../../shared-utils/three/core/LineMaterial2.js";
import "../../../Sculpt/utils/unit.js";
import "../../../Sculpt/utils/renderDom.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../Sculpt/utils/three/rayOnLine.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
import "./AudioTag/AudioTag.js";
import "../Common/Audio.js";
import "../../utils/audio/SharedAudio.js";
import "../../../shared-utils/audio.js";
import "../Common/Icon/audioIcon.js";
import "./AudioTag/AudioPlaneTag.js";
import "../Common/Icon/Icon.js";
import "../../utils/getImageInfo.js";
import "../Common/Icon/PanoramaIcon.js";
import "../../../shared-utils/CSS3DRender/CSS3DObject.js";
import "../../../shared-utils/three/GLTFLoader.js";
import "@realsee/five/gltf-loader";
import "../../utils/planeNormal.js";
import "../../utils/tag/tagCheck.js";
import "../../utils/model/mediaPlane.js";
import "../../../shared-utils/three/loadTexture.js";
import "../../../shared-utils/three/Quadrangle.js";
import "../../../shared-utils/math/pointsIsRectangle.js";
import "../../../shared-utils/three/loadVideoTexture.js";
import "../../../shared-utils/device.js";
import "../../../shared-utils/three/getPositionsByObjectFit.js";
import "../../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../../shared-utils/three/getNormal.js";
import "../../../shared-utils/constants.js";
import "./index.js";
import "../../controller/Tag/BaseTag.js";
import "../../utils/tag/calculateTagConfig.js";
import "../../../vendor/object-assign-deep/objectAssignDeep.js";
import "../../../shared-utils/typescript/entries.js";
import "../../utils/tag/adaptConfig.js";
import "../../typings/tag/TagConfig.js";
import "../../utils/tag/format.js";
import "../../../shared-utils/three/blink.js";
import "../../../shared-utils/vectorToCoordinate.js";
import "../../../shared-utils/formatRad.js";
import "../../../shared-utils/five/lookPoint.js";
import "../../utils/tagPosition.js";
import "../../utils/checkRange.js";
import "../../../shared-utils/url/getUrl.js";
import "../../../shared-utils/five/getFloorIndex.js";
import "../../../shared-utils/safeObj.js";
import "../../utils/Cache.js";
import "../../../shared-utils/promise/withResolvers.js";
function BA(i) {
  rA(i, "svelte-1fy4duy", '@font-face{font-family:"TG-TYPE";font-style:normal;font-weight:400;src:local("TG-TYPE-Bold"), url(data:application/font-woff2;charset=utf-8;base64,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) format("woff2")}*{-webkit-tap-highlight-color:transparent}.content__container.svelte-1fy4duy{position:relative;left:50%;top:50%;transform:translate(-50%, -50%);font-family:PingFangSC, Segoe UI, Rototo, sans-serif;transition:opacity 0.2s linear}.content__container.unClickable.svelte-1fy4duy{pointer-events:none !important}.content__container.unClickable.svelte-1fy4duy *{pointer-events:none !important}.content__wrapper.svelte-1fy4duy{pointer-events:none;width:100%;height:100%}.content__container.hide.svelte-1fy4duy{opacity:0;pointer-events:none}.content__container.hide.svelte-1fy4duy *{pointer-events:none !important}.content__container.disable.svelte-1fy4duy{display:none}.content.svelte-1fy4duy{position:relative;width:100%;height:100%;font-size:0.75rem;color:#fff}.content.svelte-1fy4duy:not(.unfolded){pointer-events:none}.content.svelte-1fy4duy:not(.unfolded) *{pointer-events:none !important}.content.unfolded.svelte-1fy4duy{pointer-events:auto;cursor:pointer}');
}
function _A(i) {
  let A, t;
  return {
    c() {
      A = Y("div"), _(A, "data-info", "tag content is keep folded"), _(A, "data-id", t = /*tag*/
      i[0].id);
    },
    m(e, r) {
      L(e, A, r);
    },
    p(e, r) {
      r & /*tag*/
      1 && t !== (t = /*tag*/
      e[0].id) && _(A, "data-id", t);
    },
    i: j,
    o: j,
    d(e) {
      e && O(A);
    }
  };
}
function QA(i) {
  let A, t, e, r, a, d, u, m, o, f, p, g, b, y, B, v, E;
  const J = [
    MA,
    DA,
    hA,
    yA,
    bA,
    CA,
    kA
  ], C = [];
  function H(n, s) {
    return s & /*tag, contentTypeMap*/
    9 && (r = null), s & /*tag, contentTypeMap*/
    9 && (a = null), s & /*tag, contentTypeMap*/
    9 && (d = null), s & /*tag, contentTypeMap*/
    9 && (u = null), s & /*tag, contentTypeMap*/
    9 && (m = null), s & /*tag, contentTypeMap*/
    9 && (o = null), s & /*tag, contentTypeMap*/
    9 && (f = null), r == null && (r = !!(["Text"].includes(
      /*tag*/
      n[0].contentType
    ) || ["Text"].includes(
      /*contentTypeMap*/
      n[3].get(
        /*tag*/
        n[0].contentType
      )
    ))), r ? 0 : (a == null && (a = !!(["ImageText", "Image", "Video"].includes(
      /*tag*/
      n[0].contentType
    ) || ["ImageText", "Image", "Video"].includes(
      /*contentTypeMap*/
      n[3].get(
        /*tag*/
        n[0].contentType
      )
    ))), a ? 1 : (d == null && (d = !!(["Audio"].includes(
      /*tag*/
      n[0].contentType
    ) || ["Audio"].includes(
      /*contentTypeMap*/
      n[3].get(
        /*tag*/
        n[0].contentType
      )
    ))), d ? 2 : (u == null && (u = !!(["Marketing"].includes(
      /*tag*/
      n[0].contentType
    ) || ["Marketing"].includes(
      /*contentTypeMap*/
      n[3].get(
        /*tag*/
        n[0].contentType
      )
    ))), u ? 3 : (m == null && (m = !!(["Link", "VRLink", "PanoLink", "Sticker"].includes(
      /*tag*/
      n[0].contentType
    ) || ["Link", "VRLink", "PanoLink", "Sticker"].includes(
      /*contentTypeMap*/
      n[3].get(
        /*tag*/
        n[0].contentType
      )
    ))), m ? 4 : (o == null && (o = !!(["MediaPlane", "MediaModel"].includes(
      /*tag*/
      n[0].contentType
    ) || ["MediaPlane", "MediaModel"].includes(
      /*contentTypeMap*/
      n[3].get(
        /*tag*/
        n[0].contentType
      )
    ))), o ? 5 : (f == null && (f = !!(["Panorama"].includes(
      /*tag*/
      n[0].contentType
    ) || ["Panorama"].includes(
      /*contentTypeMap*/
      n[3].get(
        /*tag*/
        n[0].contentType
      )
    ))), f ? 6 : -1))))));
  }
  return ~(p = H(i, -1)) && (g = C[p] = J[p](i)), {
    c() {
      var n;
      A = Y("div"), t = Y("div"), e = Y("div"), g && g.c(), _(e, "class", "content svelte-1fy4duy"), Q(
        e,
        "unfolded",
        /*tag*/
        (n = i[0].state) == null ? void 0 : n.unfolded
      ), _(t, "class", "content__wrapper svelte-1fy4duy"), _(A, "class", b = S(F(
        "content__container",
        /*tag*/
        i[0].className
      )) + " svelte-1fy4duy"), _(A, "data-id", y = /*tag*/
      i[0].id), Q(
        A,
        "disable",
        /*tag*/
        i[0].enabled === !1
      ), Q(
        A,
        "hide",
        /*isHide*/
        i[5]
      ), Q(
        A,
        "unClickable",
        /*tag*/
        i[0].config.clickable === !1
      ), W(
        A,
        "width",
        /*tag*/
        i[0].stickType === "Plane" || /*tag*/
        i[0].contentType === "MediaModel" ? "100%" : 0
      ), W(
        A,
        "height",
        /*tag*/
        i[0].stickType === "Plane" || /*tag*/
        i[0].contentType === "MediaModel" ? "100%" : 0
      );
    },
    m(n, s) {
      L(n, A, s), x(A, t), x(t, e), ~p && C[p].m(e, null), i[16](A), B = !0, v || (E = eA(
        A,
        "click",
        /*click_handler_1*/
        i[17],
        !0
      ), v = !0);
    },
    p(n, s) {
      var l;
      let T = p;
      p = H(n, s), p === T ? ~p && C[p].p(n, s) : (g && (AA(), w(C[T], 1, 1, () => {
        C[T] = null;
      }), $()), ~p ? (g = C[p], g ? g.p(n, s) : (g = C[p] = J[p](n), g.c()), k(g, 1), g.m(e, null)) : g = null), (!B || s & /*tag*/
      1) && Q(
        e,
        "unfolded",
        /*tag*/
        (l = n[0].state) == null ? void 0 : l.unfolded
      ), (!B || s & /*tag*/
      1 && b !== (b = S(F(
        "content__container",
        /*tag*/
        n[0].className
      )) + " svelte-1fy4duy")) && _(A, "class", b), (!B || s & /*tag*/
      1 && y !== (y = /*tag*/
      n[0].id)) && _(A, "data-id", y), (!B || s & /*tag, tag*/
      1) && Q(
        A,
        "disable",
        /*tag*/
        n[0].enabled === !1
      ), (!B || s & /*tag, isHide*/
      33) && Q(
        A,
        "hide",
        /*isHide*/
        n[5]
      ), (!B || s & /*tag, tag*/
      1) && Q(
        A,
        "unClickable",
        /*tag*/
        n[0].config.clickable === !1
      ), s & /*tag*/
      1 && W(
        A,
        "width",
        /*tag*/
        n[0].stickType === "Plane" || /*tag*/
        n[0].contentType === "MediaModel" ? "100%" : 0
      ), s & /*tag*/
      1 && W(
        A,
        "height",
        /*tag*/
        n[0].stickType === "Plane" || /*tag*/
        n[0].contentType === "MediaModel" ? "100%" : 0
      );
    },
    i(n) {
      B || (k(g), B = !0);
    },
    o(n) {
      w(g), B = !1;
    },
    d(n) {
      n && O(A), ~p && C[p].d(), i[16](null), v = !1, E();
    }
  };
}
function wA(i) {
  let A, t, e, r, a, d, u;
  return t = new gA({
    props: {
      tag: c(
        /*tag*/
        i[0]
      ),
      rendererMap: (
        /*rendererMap*/
        i[2]
      )
    }
  }), {
    c() {
      A = Y("div"), h(t.$$.fragment), _(A, "class", e = S(F(
        "content__container",
        /*tag*/
        i[0].className
      )) + " svelte-1fy4duy"), _(A, "data-id", r = /*tag*/
      i[0].id), Q(
        A,
        "custom-tag-disable",
        /*tag*/
        i[0].enabled === !1
      ), Q(
        A,
        "custom-tag-hide",
        /*isHide*/
        i[5]
      );
    },
    m(m, o) {
      L(m, A, o), D(t, A, null), i[14](A), a = !0, d || (u = eA(
        A,
        "click",
        /*click_handler*/
        i[15]
      ), d = !0);
    },
    p(m, o) {
      const f = {};
      o & /*tag*/
      1 && (f.tag = c(
        /*tag*/
        m[0]
      )), o & /*rendererMap*/
      4 && (f.rendererMap = /*rendererMap*/
      m[2]), t.$set(f), (!a || o & /*tag*/
      1 && e !== (e = S(F(
        "content__container",
        /*tag*/
        m[0].className
      )) + " svelte-1fy4duy")) && _(A, "class", e), (!a || o & /*tag*/
      1 && r !== (r = /*tag*/
      m[0].id)) && _(A, "data-id", r), (!a || o & /*tag, tag*/
      1) && Q(
        A,
        "custom-tag-disable",
        /*tag*/
        m[0].enabled === !1
      ), (!a || o & /*tag, isHide*/
      33) && Q(
        A,
        "custom-tag-hide",
        /*isHide*/
        m[5]
      );
    },
    i(m) {
      a || (k(t.$$.fragment, m), a = !0);
    },
    o(m) {
      w(t.$$.fragment, m), a = !1;
    },
    d(m) {
      m && O(A), M(t), i[14](null), d = !1, u();
    }
  };
}
function kA(i) {
  let A, t;
  return A = new uA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      h(A.$$.fragment);
    },
    m(e, r) {
      D(A, e, r), t = !0;
    },
    p(e, r) {
      const a = {};
      r & /*tag*/
      1 && (a.tag = c(
        /*tag*/
        e[0]
      )), A.$set(a);
    },
    i(e) {
      t || (k(A.$$.fragment, e), t = !0);
    },
    o(e) {
      w(A.$$.fragment, e), t = !1;
    },
    d(e) {
      M(A, e);
    }
  };
}
function CA(i) {
  let A, t;
  return A = new pA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      h(A.$$.fragment);
    },
    m(e, r) {
      D(A, e, r), t = !0;
    },
    p(e, r) {
      const a = {};
      r & /*tag*/
      1 && (a.tag = c(
        /*tag*/
        e[0]
      )), A.$set(a);
    },
    i(e) {
      t || (k(A.$$.fragment, e), t = !0);
    },
    o(e) {
      w(A.$$.fragment, e), t = !1;
    },
    d(e) {
      M(A, e);
    }
  };
}
function bA(i) {
  let A, t;
  return A = new sA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      h(A.$$.fragment);
    },
    m(e, r) {
      D(A, e, r), t = !0;
    },
    p(e, r) {
      const a = {};
      r & /*tag*/
      1 && (a.tag = c(
        /*tag*/
        e[0]
      )), A.$set(a);
    },
    i(e) {
      t || (k(A.$$.fragment, e), t = !0);
    },
    o(e) {
      w(A.$$.fragment, e), t = !1;
    },
    d(e) {
      M(A, e);
    }
  };
}
function yA(i) {
  let A, t;
  return A = new mA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      h(A.$$.fragment);
    },
    m(e, r) {
      D(A, e, r), t = !0;
    },
    p(e, r) {
      const a = {};
      r & /*tag*/
      1 && (a.tag = c(
        /*tag*/
        e[0]
      )), A.$set(a);
    },
    i(e) {
      t || (k(A.$$.fragment, e), t = !0);
    },
    o(e) {
      w(A.$$.fragment, e), t = !1;
    },
    d(e) {
      M(A, e);
    }
  };
}
function hA(i) {
  let A, t;
  return A = new fA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      h(A.$$.fragment);
    },
    m(e, r) {
      D(A, e, r), t = !0;
    },
    p(e, r) {
      const a = {};
      r & /*tag*/
      1 && (a.tag = c(
        /*tag*/
        e[0]
      )), A.$set(a);
    },
    i(e) {
      t || (k(A.$$.fragment, e), t = !0);
    },
    o(e) {
      w(A.$$.fragment, e), t = !1;
    },
    d(e) {
      M(A, e);
    }
  };
}
function DA(i) {
  let A, t;
  return A = new lA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      h(A.$$.fragment);
    },
    m(e, r) {
      D(A, e, r), t = !0;
    },
    p(e, r) {
      const a = {};
      r & /*tag*/
      1 && (a.tag = c(
        /*tag*/
        e[0]
      )), A.$set(a);
    },
    i(e) {
      t || (k(A.$$.fragment, e), t = !0);
    },
    o(e) {
      w(A.$$.fragment, e), t = !1;
    },
    d(e) {
      M(A, e);
    }
  };
}
function MA(i) {
  let A, t;
  return A = new aA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      h(A.$$.fragment);
    },
    m(e, r) {
      D(A, e, r), t = !0;
    },
    p(e, r) {
      const a = {};
      r & /*tag*/
      1 && (a.tag = c(
        /*tag*/
        e[0]
      )), A.$set(a);
    },
    i(e) {
      t || (k(A.$$.fragment, e), t = !0);
    },
    o(e) {
      w(A.$$.fragment, e), t = !1;
    },
    d(e) {
      M(A, e);
    }
  };
}
function vA(i) {
  let A, t, e, r, a;
  const d = [wA, QA, _A], u = [];
  function m(o, f) {
    return f & /*tag, rendererMap*/
    5 && (A = null), A == null && (A = !!/*tag*/
    (o[0].element || /*rendererMap*/
    o[2].has(
      /*tag*/
      o[0].contentType
    ))), A ? 0 : (
      /*haveContent*/
      o[4] ? 1 : 2
    );
  }
  return t = m(i, -1), e = u[t] = d[t](i), {
    c() {
      e.c(), r = nA();
    },
    m(o, f) {
      u[t].m(o, f), L(o, r, f), a = !0;
    },
    p(o, [f]) {
      let p = t;
      t = m(o, f), t === p ? u[t].p(o, f) : (AA(), w(u[p], 1, 1, () => {
        u[p] = null;
      }), $(), e = u[t], e ? e.p(o, f) : (e = u[t] = d[t](o), e.c()), k(e, 1), e.m(r.parentNode, r));
    },
    i(o) {
      a || (k(e), a = !0);
    },
    o(o) {
      w(e), a = !1;
    },
    d(o) {
      u[t].d(o), o && O(r);
    }
  };
}
function EA(i, A, t) {
  let e, r, a, d, u, m, { tag: o } = A, { hooks: f } = A, { rendererMap: p = /* @__PURE__ */ new Map() } = A, { contentTypeMap: g = /* @__PURE__ */ new Map() } = A, { state: b } = A, { mediaStore: y } = A, { temporaryState: B } = A;
  q("hooks", f), q("mediaStore", y);
  let v, E;
  function J(l) {
    l ? f.emit("exposure", { id: d, type: "start" }) : f.emit("exposure", { id: d, type: "end" });
  }
  function C(l, G, U) {
    var I, P;
    return !(!l.enabled || !G.visible || !G.enabled || !U.visible || !((I = l.state) != null && I.visible) || ((P = l.temporaryState) == null ? void 0 : P.visible) === !1 || l instanceof cA && l.loading);
  }
  function H(l) {
    X[l ? "unshift" : "push"](() => {
      o.contentDom = l, t(0, o);
    });
  }
  const n = (l) => f.emit("click", { event: l, target: "TagContent", tag: o });
  function s(l) {
    X[l ? "unshift" : "push"](() => {
      o.contentDom = l, t(0, o);
    });
  }
  const T = (l) => {
    o.entryFromModel && dA(o.five.state.mode) ? (l.stopPropagation(), o.find({ targetMode: "Panorama" })) : f.emit("click", { event: l, target: "TagContent", tag: o });
  };
  return i.$$set = (l) => {
    "tag" in l && t(0, o = l.tag), "hooks" in l && t(1, f = l.hooks), "rendererMap" in l && t(2, p = l.rendererMap), "contentTypeMap" in l && t(3, g = l.contentTypeMap), "state" in l && t(6, b = l.state), "mediaStore" in l && t(7, y = l.mediaStore), "temporaryState" in l && t(8, B = l.temporaryState);
  }, i.$$.update = () => {
    var l, G, U, I, P, V, Z, K, N, z, R;
    i.$$.dirty & /*tag*/
    1 && t(12, e = (l = o.state) == null ? void 0 : l.unfolded), i.$$.dirty & /*tag*/
    1 && t(11, r = (G = o.state) == null ? void 0 : G.visible), i.$$.dirty & /*state, temporaryState, tag*/
    321 && t(13, a = b.visible && B.visible && ((U = o.state) == null ? void 0 : U.visible)), i.$$.dirty & /*tag*/
    1 && (d = o.id), i.$$.dirty & /*tag, state, temporaryState*/
    321 && t(5, u = !C(o, b, B)), i.$$.dirty & /*isVisible*/
    8192 && J(a), i.$$.dirty & /*tag, unfolded, lastUnfoldedState, visible, lastVisibleState*/
    7681 && o.hooks && (e !== void 0 && e !== E && (t(10, E = e), e ? (P = (I = o.hooks).emit) == null || P.call(I, "unfolded") : (Z = o == null ? void 0 : (V = o.hooks).emit) == null || Z.call(V, "folded")), r !== void 0 && r !== v && (t(9, v = r), r ? (N = (K = o.hooks).emit) == null || N.call(K, "show") : (R = (z = o.hooks).emit) == null || R.call(z, "hide"))), i.$$.dirty & /*tag*/
    1 && t(4, m = (() => !(typeof o.config.unfoldedConfig == "object" && o.config.unfoldedConfig.keep === "folded"))());
  }, [
    o,
    f,
    p,
    g,
    m,
    u,
    b,
    y,
    B,
    v,
    E,
    r,
    e,
    a,
    H,
    n,
    s,
    T
  ];
}
class Si extends tA {
  constructor(A) {
    super(), iA(
      this,
      A,
      EA,
      vA,
      oA,
      {
        tag: 0,
        hooks: 1,
        rendererMap: 2,
        contentTypeMap: 3,
        state: 6,
        mediaStore: 7,
        temporaryState: 8
      },
      BA
    );
  }
}
export {
  Si as default
};
