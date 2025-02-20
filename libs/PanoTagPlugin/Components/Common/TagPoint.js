import { SvelteComponent as j, init as q, safe_not_equal as O, append_styles as U, element as g, space as k, create_component as z, attr as y, set_style as b, toggle_class as _, insert as W, append as w, mount_component as A, listen as X, transition_in as D, transition_out as I, detach as B, destroy_component as R, getContext as E, bubble as G } from "../../../vendor/svelte/internal/index.js";
import H from "./Shadow.js";
import J from "./Icon/Icon.js";
import { Image_Default_Point as K } from "../../Assets/Icon.js";
import "../../../shared-utils/tag.js";
import { isModelLike as N } from "../../../shared-utils/five/mode.js";
import "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../shared-utils/five/FivePuppet.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "../../utils/noTypecheck.js";
import "../../utils/getImageInfo.js";
import "../../utils/px2rem.js";
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
import "../../../shared-utils/isNil.js";
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
import "@realsee/five";
function Q(t) {
  U(t, "svelte-fwhwvn", '@charset "UTF-8";.tag-point-click-helper.svelte-fwhwvn.svelte-fwhwvn{position:absolute;pointer-events:auto;cursor:pointer;width:141%;height:141%;left:50%;top:50%;transform:translate(-50%, -50%)}.tag-point-wrapper.svelte-fwhwvn.svelte-fwhwvn{pointer-events:none;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.tag-folded-point.svelte-fwhwvn.svelte-fwhwvn,.tag-unfolded-point.svelte-fwhwvn.svelte-fwhwvn{transition:all 0.5s}.tag-point-wrapper.svelte-fwhwvn .tag-unfolded-point.svelte-fwhwvn{display:flex;justify-content:center;align-items:center;position:absolute;width:100%;height:100%;border-radius:50%}.tag-point-wrapper.svelte-fwhwvn .tag-unfolded-point.svelte-fwhwvn:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:0.3125rem;height:0.3125rem;border-radius:50%;background-color:white}.tag-point-wrapper.svelte-fwhwvn .tag-unfolded-point.svelte-fwhwvn:before{content:"";position:absolute;width:0.875rem;height:0.875rem;border-radius:50%;background-color:rgba(0, 0, 0, 0.2)}.tag-point-wrapper.folded.svelte-fwhwvn .tag-folded-point.svelte-fwhwvn{opacity:1;scale:1}.tag-point-wrapper.folded.svelte-fwhwvn .tag-unfolded-point.svelte-fwhwvn{opacity:0;scale:1}.tag-point-wrapper.unfolded.svelte-fwhwvn .tag-folded-point.svelte-fwhwvn{opacity:0;scale:0.2}.tag-point-wrapper.unfolded.svelte-fwhwvn .tag-unfolded-point.svelte-fwhwvn{opacity:1;scale:1}');
}
function V(t) {
  let i, p, f, s, u, m, h, e, r, a, v, c;
  return s = new H({
    props: {
      center: !0,
      blurRadius: 15,
      spreadRadius: 5,
      opacity: 0.3
    }
  }), r = new J({
    props: {
      icon: (
        /*url*/
        t[2]
      ),
      width: (
        /*width*/
        t[1]
      )
    }
  }), r.$on(
    "iconLoaded",
    /*iconLoaded_handler*/
    t[7]
  ), {
    c() {
      i = g("div"), p = g("div"), f = k(), z(s.$$.fragment), u = k(), m = g("div"), h = k(), e = g("div"), z(r.$$.fragment), y(p, "class", "tag-point-click-helper svelte-fwhwvn"), y(m, "class", "tag-unfolded-point svelte-fwhwvn"), b(
        m,
        "transition-delay",
        /*folded*/
        (t[3] ? (
          /*foldDelay*/
          t[5]
        ) : 0) + "ms"
      ), y(e, "class", "tag-folded-point svelte-fwhwvn"), b(
        e,
        "transition-delay",
        /*folded*/
        (t[3] ? (
          /*foldDelay*/
          t[5]
        ) : 0) + "ms"
      ), y(i, "class", "tag-point-wrapper svelte-fwhwvn"), _(
        i,
        "unfolded",
        /*unfolded*/
        t[0]
      ), _(
        i,
        "folded",
        /*folded*/
        t[3]
      );
    },
    m(o, l) {
      W(o, i, l), w(i, p), w(i, f), A(s, i, null), w(i, u), w(i, m), w(i, h), w(i, e), A(r, e, null), a = !0, v || (c = X(
        p,
        "click",
        /*handlePointClick*/
        t[4]
      ), v = !0);
    },
    p(o, [l]) {
      l & /*folded*/
      8 && b(
        m,
        "transition-delay",
        /*folded*/
        (o[3] ? (
          /*foldDelay*/
          o[5]
        ) : 0) + "ms"
      );
      const n = {};
      l & /*url*/
      4 && (n.icon = /*url*/
      o[2]), l & /*width*/
      2 && (n.width = /*width*/
      o[1]), r.$set(n), l & /*folded*/
      8 && b(
        e,
        "transition-delay",
        /*folded*/
        (o[3] ? (
          /*foldDelay*/
          o[5]
        ) : 0) + "ms"
      ), (!a || l & /*unfolded*/
      1) && _(
        i,
        "unfolded",
        /*unfolded*/
        o[0]
      ), (!a || l & /*folded*/
      8) && _(
        i,
        "folded",
        /*folded*/
        o[3]
      );
    },
    i(o) {
      a || (D(s.$$.fragment, o), D(r.$$.fragment, o), a = !0);
    },
    o(o) {
      I(s.$$.fragment, o), I(r.$$.fragment, o), a = !1;
    },
    d(o) {
      o && B(i), R(s), R(r), v = !1, c();
    }
  };
}
function Y(t, i, p) {
  let f, s, u, m;
  const h = E("hooks");
  let { tag: e } = i, r, a = !1;
  const v = () => {
    r !== void 0 && clearTimeout(r), a = !0, r = setTimeout(
      () => {
        a = !1;
      },
      800
    );
  }, c = (n) => {
    a || (e.entryFromModel && N(e.five.state.mode) ? e.find({ targetMode: "Panorama" }).then(() => e.unfoldAndFoldOthers()) : h.emit("click", { event: n, target: "TagPoint", tag: e }));
  }, o = (() => e.contentType === "Text" && e.data.appearance === "plane" ? 500 : 800)();
  function l(n) {
    G.call(this, t, n);
  }
  return t.$$set = (n) => {
    "tag" in n && p(6, e = n.tag);
  }, t.$$.update = () => {
    var n, T, L, P;
    t.$$.dirty & /*tag*/
    64 && p(0, f = (n = e.state) == null ? void 0 : n.unfolded), t.$$.dirty & /*unfolded*/
    1 && p(3, s = !f), t.$$.dirty & /*tag*/
    64 && p(2, u = (L = (T = e.style) == null ? void 0 : T.point) != null && L.url ? (P = e.style) == null ? void 0 : P.point : { url: K }), t.$$.dirty & /*tag*/
    64 && p(1, m = (() => {
      var $, C, F, S;
      const M = (C = ($ = e.style) == null ? void 0 : $.point) == null ? void 0 : C.width;
      if (typeof M == "number")
        return M;
      const d = (S = (F = e.style) == null ? void 0 : F.point) == null ? void 0 : S.size;
      if (typeof d == "number")
        return d;
      if (d === "S")
        return 18;
      if (d === "M")
        return 20;
      if (d === "L")
        return 24;
      if (d === "XL")
        return 28;
    })());
  }, v(), [
    f,
    m,
    u,
    s,
    c,
    o,
    e,
    l
  ];
}
class ue extends j {
  constructor(i) {
    super(), q(this, i, Y, V, O, { tag: 6 }, Q);
  }
}
export {
  ue as default
};
