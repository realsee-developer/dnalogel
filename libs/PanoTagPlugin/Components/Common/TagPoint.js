import { SvelteComponent as Q, init as V, safe_not_equal as Y, append_styles as Z, element as y, space as C, create_component as j, attr as _, set_style as k, toggle_class as h, insert as x, append as g, mount_component as q, listen as M, transition_in as B, transition_out as U, detach as $, destroy_component as W, run_all as tt, getContext as et, is_function as it, binding_callbacks as ot, bubble as nt } from "../../../vendor/svelte/internal/index.js";
import rt from "./Shadow.js";
import lt from "./Icon/Icon.js";
import { Image_Default_Point as at } from "../../Assets/Icon.js";
import "../../../shared-utils/tag.js";
import { isModelLike as pt } from "../../../shared-utils/five/mode.js";
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
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
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
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
function st(t) {
  Z(t, "svelte-18ithb3", '@charset "UTF-8";.tag-point-click-helper.svelte-18ithb3.svelte-18ithb3{position:absolute;pointer-events:auto;cursor:pointer;width:141%;height:141%;left:50%;top:50%;transform:translate(-50%, -50%);z-index:1000000}.tag-point-wrapper.svelte-18ithb3.svelte-18ithb3{pointer-events:none;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);cursor:pointer;z-index:1040}.tag-folded-point.svelte-18ithb3.svelte-18ithb3,.tag-unfolded-point.svelte-18ithb3.svelte-18ithb3{transition:all 0.5s}.tag-point-wrapper.svelte-18ithb3 .tag-unfolded-point.svelte-18ithb3{display:flex;justify-content:center;align-items:center;position:absolute;width:100%;height:100%;border-radius:50%}.tag-point-wrapper.svelte-18ithb3 .tag-unfolded-point.svelte-18ithb3:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:0.3125rem;height:0.3125rem;border-radius:50%;background-color:white}.tag-point-wrapper.svelte-18ithb3 .tag-unfolded-point.svelte-18ithb3:before{content:"";position:absolute;width:0.875rem;height:0.875rem;border-radius:50%;background-color:rgba(0, 0, 0, 0.2)}.tag-point-wrapper.folded.svelte-18ithb3 .tag-folded-point.svelte-18ithb3{opacity:1;scale:1}.tag-point-wrapper.folded.svelte-18ithb3 .tag-unfolded-point.svelte-18ithb3{opacity:0;scale:1}.tag-point-wrapper.unfolded.svelte-18ithb3 .tag-folded-point.svelte-18ithb3{opacity:0;scale:0.2}.tag-point-wrapper.unfolded.svelte-18ithb3 .tag-unfolded-point.svelte-18ithb3{opacity:1;scale:1}.tag-point-wrapper.disable-unfold.svelte-18ithb3 .tag-folded-point.svelte-18ithb3{opacity:1 !important;scale:1 !important}.tag-point-wrapper.disable-unfold.svelte-18ithb3 .tag-unfolded-point.svelte-18ithb3{opacity:0 !important;scale:1 !important}');
}
function dt(t) {
  let e, n, f, s, c, d, w, o, a, p, b, v;
  return s = new rt({
    props: {
      center: !0,
      blurRadius: 15,
      spreadRadius: 5,
      opacity: 0.3
    }
  }), a = new lt({
    props: {
      icon: (
        /*url*/
        t[7]
      ),
      width: (
        /*width*/
        t[6]
      )
    }
  }), a.$on(
    "iconLoaded",
    /*iconLoaded_handler*/
    t[15]
  ), {
    c() {
      e = y("div"), n = y("div"), f = C(), j(s.$$.fragment), c = C(), d = y("div"), w = C(), o = y("div"), j(a.$$.fragment), _(n, "class", "tag-point-click-helper svelte-18ithb3"), _(d, "class", "tag-unfolded-point svelte-18ithb3"), k(
        d,
        "transition-delay",
        /*folded*/
        (t[8] ? (
          /*foldDelay*/
          t[10]
        ) : 0) + "ms"
      ), _(o, "class", "tag-folded-point svelte-18ithb3"), k(
        o,
        "transition-delay",
        /*folded*/
        (t[8] ? (
          /*foldDelay*/
          t[10]
        ) : 0) + "ms"
      ), _(e, "class", "tag-point-wrapper svelte-18ithb3"), h(
        e,
        "unfolded",
        /*unfolded*/
        t[5]
      ), h(
        e,
        "folded",
        /*folded*/
        t[8]
      ), h(
        e,
        "disable-unfold",
        /*tag*/
        t[1].isPopoverConfigEnabled()
      );
    },
    m(l, r) {
      x(l, e, r), g(e, n), t[14](n), g(e, f), q(s, e, null), g(e, c), g(e, d), g(e, w), g(e, o), q(a, o, null), p = !0, b || (v = [
        M(
          n,
          "click",
          /*click_handler*/
          t[12]
        ),
        M(
          n,
          "mouseenter",
          /*mouseenter_handler*/
          t[13]
        ),
        M(n, "mouseleave", function() {
          it(
            /*handleMouseLeave*/
            t[3]
          ) && t[3].apply(this, arguments);
        })
      ], b = !0);
    },
    p(l, [r]) {
      t = l, r & /*folded*/
      256 && k(
        d,
        "transition-delay",
        /*folded*/
        (t[8] ? (
          /*foldDelay*/
          t[10]
        ) : 0) + "ms"
      );
      const m = {};
      r & /*url*/
      128 && (m.icon = /*url*/
      t[7]), r & /*width*/
      64 && (m.width = /*width*/
      t[6]), a.$set(m), r & /*folded*/
      256 && k(
        o,
        "transition-delay",
        /*folded*/
        (t[8] ? (
          /*foldDelay*/
          t[10]
        ) : 0) + "ms"
      ), (!p || r & /*unfolded*/
      32) && h(
        e,
        "unfolded",
        /*unfolded*/
        t[5]
      ), (!p || r & /*folded*/
      256) && h(
        e,
        "folded",
        /*folded*/
        t[8]
      ), (!p || r & /*tag*/
      2) && h(
        e,
        "disable-unfold",
        /*tag*/
        t[1].isPopoverConfigEnabled()
      );
    },
    i(l) {
      p || (B(s.$$.fragment, l), B(a.$$.fragment, l), p = !0);
    },
    o(l) {
      U(s.$$.fragment, l), U(a.$$.fragment, l), p = !1;
    },
    d(l) {
      l && $(e), t[14](null), W(s), W(a), b = !1, tt(v);
    }
  };
}
function mt(t, e, n) {
  var E, H;
  let f, s, c, d;
  const w = et("hooks");
  let { tag: o } = e, a, p = !1;
  const b = () => {
    a !== void 0 && clearTimeout(a), p = !0, a = setTimeout(
      () => {
        p = !1;
      },
      800
    );
  }, v = (i) => {
    p || (o.entryFromModel && pt(o.five.state.mode) ? o.find({ targetMode: "Panorama" }).then(() => o.unfoldAndFoldOthers()) : w.emit("click", { event: i, target: "TagPoint", tag: o }));
  }, l = (() => o.contentType === "Text" && o.data.appearance === "plane" ? 500 : 800)();
  let { tagPointClickHelper: r = null } = e, { handleMouseEnter: m = () => {
  } } = e, { handleMouseLeave: T = () => {
  } } = e, { handleTagPointClick: P = () => {
  } } = e;
  const X = () => !0, L = (H = (E = o.config.popoverConfig) == null ? void 0 : E.beforeOpen) != null ? H : X, G = (i) => {
    P(i), v(i);
  }, J = (i) => {
    L(o) && m(i);
  };
  function K(i) {
    ot[i ? "unshift" : "push"](() => {
      r = i, n(0, r);
    });
  }
  function N(i) {
    nt.call(this, t, i);
  }
  return t.$$set = (i) => {
    "tag" in i && n(1, o = i.tag), "tagPointClickHelper" in i && n(0, r = i.tagPointClickHelper), "handleMouseEnter" in i && n(2, m = i.handleMouseEnter), "handleMouseLeave" in i && n(3, T = i.handleMouseLeave), "handleTagPointClick" in i && n(4, P = i.handleTagPointClick);
  }, t.$$.update = () => {
    var i, z, F, S;
    t.$$.dirty & /*tag*/
    2 && n(5, f = (i = o.state) == null ? void 0 : i.unfolded), t.$$.dirty & /*unfolded*/
    32 && n(8, s = !f), t.$$.dirty & /*tag*/
    2 && n(7, c = (F = (z = o.style) == null ? void 0 : z.point) != null && F.url ? (S = o.style) == null ? void 0 : S.point : { url: at }), t.$$.dirty & /*tag*/
    2 && n(6, d = (() => {
      var D, I, O, R;
      const A = (I = (D = o.style) == null ? void 0 : D.point) == null ? void 0 : I.width;
      if (typeof A == "number")
        return A;
      const u = (R = (O = o.style) == null ? void 0 : O.point) == null ? void 0 : R.size;
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
  }, b(), [
    r,
    o,
    m,
    T,
    P,
    f,
    d,
    c,
    s,
    v,
    l,
    L,
    G,
    J,
    K,
    N
  ];
}
class Se extends Q {
  constructor(e) {
    super(), V(
      this,
      e,
      mt,
      dt,
      Y,
      {
        tag: 1,
        tagPointClickHelper: 0,
        handleMouseEnter: 2,
        handleMouseLeave: 3,
        handleTagPointClick: 4
      },
      st
    );
  }
}
export {
  Se as default
};
