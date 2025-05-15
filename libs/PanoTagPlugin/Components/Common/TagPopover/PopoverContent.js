import { SvelteComponent as b, init as v, safe_not_equal as T, create_component as h, space as S, mount_component as s, insert as M, transition_in as l, transition_out as u, destroy_component as g, detach as A, bubble as d } from "../../../../vendor/svelte/internal/index.js";
import j from "./TagPopoverArrow.js";
import D from "./TagPopup.js";
import z from "./TagPopoverToolBar.js";
import "../Icon/tag-popover-arrow-base64.js";
import "../VideoIcon.js";
import "./PanoramaIcon.js";
import "../../../utils/videoHelper.js";
import "./ArrowRightIcon.js";
import "./ShareIcon.js";
import "../../../../shared-utils/tag.js";
import "../../../../shared-utils/positionToVector3.js";
import "three";
import "../../../../shared-utils/five/vector3ToScreen.js";
import "../../../../shared-utils/five/getFiveModel.js";
import "../../../../shared-utils/Utils/FiveUtil.js";
import "../../../../shared-utils/Utils/BaseUtil.js";
import "../../../../shared-utils/Subscribe.js";
import "../../../../shared-utils/Utils/WorkUtil.js";
import "../../../../shared-utils/five/transformPosition.js";
import "../../../../shared-utils/three/temp.js";
import "../../../../shared-utils/three/core/Raycaster.js";
import "../../../../shared-utils/dom/resizeObserver.js";
import "../../../../shared-utils/five/fiveEveryReadyListener.js";
import "../../../../shared-utils/throttle.js";
import "../../../../vendor/hammerjs/hammer.js";
import "../../../../shared-utils/three/PointSelector/index.js";
import "../../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../../shared-utils/three/Magnifier.js";
import "../../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../../shared-utils/three/Assets/index.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../../shared-utils/even.js";
import "../../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../../shared-utils/three/centerPoint.js";
import "../../../../shared-utils/three/getObjectVisible.js";
import "../../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../../../shared-utils/isNil.js";
import "../../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../../shared-utils/three/core/Sphere.js";
import "../../../../vendor/animejs/lib/anime.es.js";
import "../../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../../shared-utils/createResizeObserver.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../../shared-utils/util.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../../shared-utils/CSS3DRender/index.js";
import "../../../../shared-utils/five/fiveModelLoad.js";
import "../../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../../Sculpt/Meshes/Line.js";
import "../../../../Sculpt/typings/style.js";
import "../../../../shared-utils/three/IObject3D.js";
import "../../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../../shared-utils/three/core/LineGeometry.js";
import "../../../../shared-utils/three/core/LineMaterial.js";
import "../../../../shared-utils/three/core/Line2.js";
import "../../../../shared-utils/three/core/LineMaterial2.js";
import "../../../../Sculpt/utils/unit.js";
import "../../../../Sculpt/utils/renderDom.js";
import "../../../../shared-utils/five/FivePuppet.js";
import "@realsee/five";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../../shared-utils/isTouchDevice.js";
import "../../../../shared-utils/five/getPosition.js";
import "../../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../../Sculpt/utils/three/rayOnLine.js";
function C(r) {
  let e, m;
  return e = new z({
    props: {
      toolbar: {
        showMore: (
          /*toolbar*/
          r[7].showMore === void 0 ? !0 : (
            /*toolbar*/
            r[7].showMore
          )
        ),
        showShare: (
          /*toolbar*/
          r[7].showShare === void 0 ? !0 : (
            /*toolbar*/
            r[7].showShare
          )
        )
      },
      theme: (
        /*effectiveTheme*/
        r[2]
      ),
      tag: (
        /*tag*/
        r[4]
      ),
      closePopover: (
        /*closePopover*/
        r[8]
      )
    }
  }), {
    c() {
      h(e.$$.fragment);
    },
    m(t, p) {
      s(e, t, p), m = !0;
    },
    p(t, p) {
      const o = {};
      p & /*toolbar*/
      128 && (o.toolbar = {
        showMore: (
          /*toolbar*/
          t[7].showMore === void 0 ? !0 : (
            /*toolbar*/
            t[7].showMore
          )
        ),
        showShare: (
          /*toolbar*/
          t[7].showShare === void 0 ? !0 : (
            /*toolbar*/
            t[7].showShare
          )
        )
      }), p & /*effectiveTheme*/
      4 && (o.theme = /*effectiveTheme*/
      t[2]), p & /*tag*/
      16 && (o.tag = /*tag*/
      t[4]), p & /*closePopover*/
      256 && (o.closePopover = /*closePopover*/
      t[8]), e.$set(o);
    },
    i(t) {
      m || (l(e.$$.fragment, t), m = !0);
    },
    o(t) {
      u(e.$$.fragment, t), m = !1;
    },
    d(t) {
      g(e, t);
    }
  };
}
function q(r) {
  let e, m, t, p;
  return e = new j({
    props: {
      show: (
        /*showArrow*/
        r[0]
      ),
      direction: (
        /*arrowDirection*/
        r[1]
      ),
      theme: (
        /*effectiveTheme*/
        r[2]
      )
    }
  }), t = new D({
    props: {
      placement: (
        /*adjustedPlacement*/
        r[3]
      ),
      tag: (
        /*tag*/
        r[4]
      ),
      config: (
        /*config*/
        r[5]
      ),
      theme: (
        /*theme*/
        r[6]
      ),
      $$slots: { toolbar: [C] },
      $$scope: { ctx: r }
    }
  }), t.$on(
    "resize",
    /*resize_handler*/
    r[9]
  ), {
    c() {
      h(e.$$.fragment), m = S(), h(t.$$.fragment);
    },
    m(o, n) {
      s(e, o, n), M(o, m, n), s(t, o, n), p = !0;
    },
    p(o, [n]) {
      const a = {};
      n & /*showArrow*/
      1 && (a.show = /*showArrow*/
      o[0]), n & /*arrowDirection*/
      2 && (a.direction = /*arrowDirection*/
      o[1]), n & /*effectiveTheme*/
      4 && (a.theme = /*effectiveTheme*/
      o[2]), e.$set(a);
      const f = {};
      n & /*adjustedPlacement*/
      8 && (f.placement = /*adjustedPlacement*/
      o[3]), n & /*tag*/
      16 && (f.tag = /*tag*/
      o[4]), n & /*config*/
      32 && (f.config = /*config*/
      o[5]), n & /*theme*/
      64 && (f.theme = /*theme*/
      o[6]), n & /*$$scope, toolbar, effectiveTheme, tag, closePopover*/
      1428 && (f.$$scope = { dirty: n, ctx: o }), t.$set(f);
    },
    i(o) {
      p || (l(e.$$.fragment, o), l(t.$$.fragment, o), p = !0);
    },
    o(o) {
      u(e.$$.fragment, o), u(t.$$.fragment, o), p = !1;
    },
    d(o) {
      g(e, o), o && A(m), g(t, o);
    }
  };
}
function B(r, e, m) {
  let { showArrow: t } = e, { arrowDirection: p } = e, { effectiveTheme: o } = e, { adjustedPlacement: n } = e, { tag: a } = e, { config: f } = e, { theme: w } = e, { toolbar: c } = e, { closePopover: P } = e;
  function _(i) {
    d.call(this, r, i);
  }
  return r.$$set = (i) => {
    "showArrow" in i && m(0, t = i.showArrow), "arrowDirection" in i && m(1, p = i.arrowDirection), "effectiveTheme" in i && m(2, o = i.effectiveTheme), "adjustedPlacement" in i && m(3, n = i.adjustedPlacement), "tag" in i && m(4, a = i.tag), "config" in i && m(5, f = i.config), "theme" in i && m(6, w = i.theme), "toolbar" in i && m(7, c = i.toolbar), "closePopover" in i && m(8, P = i.closePopover);
  }, [
    t,
    p,
    o,
    n,
    a,
    f,
    w,
    c,
    P,
    _
  ];
}
class $o extends b {
  constructor(e) {
    super(), v(this, e, B, q, T, {
      showArrow: 0,
      arrowDirection: 1,
      effectiveTheme: 2,
      adjustedPlacement: 3,
      tag: 4,
      config: 5,
      theme: 6,
      toolbar: 7,
      closePopover: 8
    });
  }
}
export {
  $o as default
};
