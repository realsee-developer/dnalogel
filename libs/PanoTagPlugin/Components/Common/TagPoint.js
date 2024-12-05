import { SvelteComponent as j, init as q, safe_not_equal as O, append_styles as U, element as h, space as _, create_component as S, attr as z, set_style as y, toggle_class as b, insert as W, append as f, mount_component as A, listen as X, transition_in as D, transition_out as I, detach as B, destroy_component as R, getContext as E, bubble as G } from "../../../vendor/svelte/internal/index.js";
import H from "./Shadow.js";
import J from "./Icon/Icon.js";
import { Image_Default_Point as K } from "../../Assets/Icon.js";
import "../../../shared-utils/tag.js";
import { isModelLike as N } from "../../../shared-utils/five/mode.js";
import "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
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
import "../../../shared-utils/five/initialCSS3DRender.js";
import "../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../shared-utils/createResizeObserver.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../Sculpt/Meshes/Line.js";
import "../../../Sculpt/typings/style.js";
import "../../../shared-utils/three/IObject3D.js";
import "../../../Sculpt/utils/removeAllTag.js";
import "../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/util.js";
import "../../../shared-utils/three/core/LineGeometry.js";
import "../../../shared-utils/three/core/LineMaterial.js";
import "../../../shared-utils/three/core/Line2.js";
import "../../../shared-utils/three/core/LineMaterial2.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "@realsee/five";
function Q(t) {
  U(t, "svelte-7aiuwz", '@charset "UTF-8";.tag-point-click-helper.svelte-7aiuwz.svelte-7aiuwz{position:absolute;pointer-events:auto;cursor:pointer;width:calc(100% + 0.75rem);height:calc(100% + 0.75rem);left:50%;top:50%;transform:translate(-50%, -50%)}.tag-point-wrapper.svelte-7aiuwz.svelte-7aiuwz{pointer-events:none;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.tag-folded-point.svelte-7aiuwz.svelte-7aiuwz,.tag-unfolded-point.svelte-7aiuwz.svelte-7aiuwz{transition:all 0.5s}.tag-point-wrapper.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz{display:flex;justify-content:center;align-items:center;position:absolute;width:100%;height:100%;border-radius:50%}.tag-point-wrapper.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:0.3125rem;height:0.3125rem;border-radius:50%;background-color:white}.tag-point-wrapper.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz:before{content:"";position:absolute;width:0.875rem;height:0.875rem;border-radius:50%;background-color:rgba(0, 0, 0, 0.2)}.tag-point-wrapper.folded.svelte-7aiuwz .tag-folded-point.svelte-7aiuwz{opacity:1;scale:1}.tag-point-wrapper.folded.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz{opacity:0;scale:1}.tag-point-wrapper.unfolded.svelte-7aiuwz .tag-folded-point.svelte-7aiuwz{opacity:0;scale:0.2}.tag-point-wrapper.unfolded.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz{opacity:1;scale:1}');
}
function V(t) {
  let o, a, d, s, c, m, w, e, n, p, g, v;
  return s = new H({
    props: {
      center: !0,
      blurRadius: 15,
      spreadRadius: 5,
      opacity: 0.3
    }
  }), n = new J({
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
  }), n.$on(
    "iconLoaded",
    /*iconLoaded_handler*/
    t[7]
  ), {
    c() {
      o = h("div"), a = h("div"), d = _(), S(s.$$.fragment), c = _(), m = h("div"), w = _(), e = h("div"), S(n.$$.fragment), z(a, "class", "tag-point-click-helper svelte-7aiuwz"), z(m, "class", "tag-unfolded-point svelte-7aiuwz"), y(
        m,
        "transition-delay",
        /*folded*/
        (t[3] ? (
          /*foldDelay*/
          t[5]
        ) : 0) + "ms"
      ), z(e, "class", "tag-folded-point svelte-7aiuwz"), y(
        e,
        "transition-delay",
        /*folded*/
        (t[3] ? (
          /*foldDelay*/
          t[5]
        ) : 0) + "ms"
      ), z(o, "class", "tag-point-wrapper svelte-7aiuwz"), b(
        o,
        "unfolded",
        /*unfolded*/
        t[0]
      ), b(
        o,
        "folded",
        /*folded*/
        t[3]
      );
    },
    m(i, l) {
      W(i, o, l), f(o, a), f(o, d), A(s, o, null), f(o, c), f(o, m), f(o, w), f(o, e), A(n, e, null), p = !0, g || (v = X(
        a,
        "click",
        /*handlePointClick*/
        t[4]
      ), g = !0);
    },
    p(i, [l]) {
      l & /*folded*/
      8 && y(
        m,
        "transition-delay",
        /*folded*/
        (i[3] ? (
          /*foldDelay*/
          i[5]
        ) : 0) + "ms"
      );
      const r = {};
      l & /*url*/
      4 && (r.icon = /*url*/
      i[2]), l & /*width*/
      2 && (r.width = /*width*/
      i[1]), n.$set(r), l & /*folded*/
      8 && y(
        e,
        "transition-delay",
        /*folded*/
        (i[3] ? (
          /*foldDelay*/
          i[5]
        ) : 0) + "ms"
      ), (!p || l & /*unfolded*/
      1) && b(
        o,
        "unfolded",
        /*unfolded*/
        i[0]
      ), (!p || l & /*folded*/
      8) && b(
        o,
        "folded",
        /*folded*/
        i[3]
      );
    },
    i(i) {
      p || (D(s.$$.fragment, i), D(n.$$.fragment, i), p = !0);
    },
    o(i) {
      I(s.$$.fragment, i), I(n.$$.fragment, i), p = !1;
    },
    d(i) {
      i && B(o), R(s), R(n), g = !1, v();
    }
  };
}
function Y(t, o, a) {
  let d, s, c, m;
  const w = E("hooks");
  let { tag: e } = o, n, p = !1;
  const g = () => {
    n !== void 0 && clearTimeout(n), p = !0, n = setTimeout(
      () => {
        p = !1;
      },
      800
    );
  }, v = (r) => {
    p || (e.entryFromModel && N(e.five.state.mode) ? e.find({ targetMode: "Panorama" }).then(() => e.unfoldAndFoldOthers()) : w.emit("click", { event: r, target: "TagPoint", tag: e }));
  }, i = (() => e.contentType === "Text" && e.data.appearance === "plane" ? 500 : 800)();
  function l(r) {
    G.call(this, t, r);
  }
  return t.$$set = (r) => {
    "tag" in r && a(6, e = r.tag);
  }, t.$$.update = () => {
    var r, k, T, L;
    t.$$.dirty & /*tag*/
    64 && a(0, d = (r = e.state) == null ? void 0 : r.unfolded), t.$$.dirty & /*unfolded*/
    1 && a(3, s = !d), t.$$.dirty & /*tag*/
    64 && a(2, c = (T = (k = e.style) == null ? void 0 : k.point) != null && T.url ? (L = e.style) == null ? void 0 : L.point : { url: K }), t.$$.dirty & /*tag*/
    64 && a(1, m = (() => {
      var M, $, C, F;
      const P = ($ = (M = e.style) == null ? void 0 : M.point) == null ? void 0 : $.width;
      if (typeof P == "number")
        return P;
      const u = (F = (C = e.style) == null ? void 0 : C.point) == null ? void 0 : F.size;
      if (typeof u == "number")
        return u;
      if (u === "S")
        return 18;
      if (u === "M")
        return 20;
      if (u === "L")
        return 24;
      if (u === "XL")
        return 28;
    })());
  }, g(), [
    d,
    m,
    c,
    s,
    v,
    i,
    e,
    l
  ];
}
class de extends j {
  constructor(o) {
    super(), q(this, o, Y, V, O, { tag: 6 }, Q);
  }
}
export {
  de as default
};
