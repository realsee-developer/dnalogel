import { SvelteComponent as C, init as S, safe_not_equal as v, create_component as p, space as I, mount_component as l, insert as M, transition_in as h, transition_out as g, destroy_component as s, detach as A, bubble as j } from "../../../../vendor/svelte/internal/index.js";
import z from "./TagPopoverArrow.js";
import q from "./TagPopup.js";
import B from "./TagPopoverToolBar.js";
import "../Icon/tag-popover-arrow-base64.js";
import "../VideoIcon.js";
import "./PanoramaIcon.js";
import "../../../utils/videoHelper.js";
import "../AudioPlayer.js";
import "../Icon/audioIcon.js";
import "../../../utils/px2rem.js";
import "../Shadow.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
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
import "../../../../shared-utils/three/blink.js";
import "../../../../vendor/animejs/lib/anime.es.js";
import "../../../../shared-utils/util.js";
import "../../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../../shared-utils/createResizeObserver.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
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
import "../../../../shared-utils/five/getFiveFromParentChain.js";
import "../../../../shared-utils/three/core/LineGeometry.js";
import "../../../../shared-utils/three/core/LineMaterial.js";
import "../../../../shared-utils/three/core/Line2.js";
import "../../../../shared-utils/three/core/LineMaterial2.js";
import "../../../../Sculpt/utils/unit.js";
import "../../../../Sculpt/utils/renderDom.js";
import "../../../../vendor/earcut/src/earcut.js";
import "../../../../shared-utils/five/FivePuppet.js";
import "@realsee/five";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../../shared-utils/isTouchDevice.js";
import "../../../../shared-utils/five/getPosition.js";
import "../../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../../Sculpt/utils/three/rayOnLine.js";
function k(r) {
  let e, m;
  return e = new B({
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
      p(e.$$.fragment);
    },
    m(t, a) {
      l(e, t, a), m = !0;
    },
    p(t, a) {
      const o = {};
      a & /*toolbar*/
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
      }), a & /*effectiveTheme*/
      4 && (o.theme = /*effectiveTheme*/
      t[2]), a & /*tag*/
      16 && (o.tag = /*tag*/
      t[4]), a & /*closePopover*/
      256 && (o.closePopover = /*closePopover*/
      t[8]), e.$set(o);
    },
    i(t) {
      m || (h(e.$$.fragment, t), m = !0);
    },
    o(t) {
      g(e.$$.fragment, t), m = !1;
    },
    d(t) {
      s(e, t);
    }
  };
}
function E(r) {
  let e, m, t, a;
  return e = new z({
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
  }), t = new q({
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
      audioInstance: (
        /*audioInstance*/
        r[9]
      ),
      audioPlaying: (
        /*audioPlaying*/
        r[10]
      ),
      audioCurrentTime: (
        /*audioCurrentTime*/
        r[11]
      ),
      audioDuration: (
        /*audioDuration*/
        r[12]
      ),
      $$slots: { toolbar: [k] },
      $$scope: { ctx: r }
    }
  }), t.$on(
    "resize",
    /*resize_handler*/
    r[13]
  ), {
    c() {
      p(e.$$.fragment), m = I(), p(t.$$.fragment);
    },
    m(o, n) {
      l(e, o, n), M(o, m, n), l(t, o, n), a = !0;
    },
    p(o, [n]) {
      const f = {};
      n & /*showArrow*/
      1 && (f.show = /*showArrow*/
      o[0]), n & /*arrowDirection*/
      2 && (f.direction = /*arrowDirection*/
      o[1]), n & /*effectiveTheme*/
      4 && (f.theme = /*effectiveTheme*/
      o[2]), e.$set(f);
      const u = {};
      n & /*adjustedPlacement*/
      8 && (u.placement = /*adjustedPlacement*/
      o[3]), n & /*tag*/
      16 && (u.tag = /*tag*/
      o[4]), n & /*config*/
      32 && (u.config = /*config*/
      o[5]), n & /*theme*/
      64 && (u.theme = /*theme*/
      o[6]), n & /*audioInstance*/
      512 && (u.audioInstance = /*audioInstance*/
      o[9]), n & /*audioPlaying*/
      1024 && (u.audioPlaying = /*audioPlaying*/
      o[10]), n & /*audioCurrentTime*/
      2048 && (u.audioCurrentTime = /*audioCurrentTime*/
      o[11]), n & /*audioDuration*/
      4096 && (u.audioDuration = /*audioDuration*/
      o[12]), n & /*$$scope, toolbar, effectiveTheme, tag, closePopover*/
      16788 && (u.$$scope = { dirty: n, ctx: o }), t.$set(u);
    },
    i(o) {
      a || (h(e.$$.fragment, o), h(t.$$.fragment, o), a = !0);
    },
    o(o) {
      g(e.$$.fragment, o), g(t.$$.fragment, o), a = !1;
    },
    d(o) {
      s(e, o), o && A(m), s(t, o);
    }
  };
}
function F(r, e, m) {
  let { showArrow: t } = e, { arrowDirection: a } = e, { effectiveTheme: o } = e, { adjustedPlacement: n } = e, { tag: f } = e, { config: u } = e, { theme: w } = e, { toolbar: c } = e, { closePopover: d } = e, { audioInstance: P = null } = e, { audioPlaying: T = !1 } = e, { audioCurrentTime: _ = 0 } = e, { audioDuration: b = 0 } = e;
  function D(i) {
    j.call(this, r, i);
  }
  return r.$$set = (i) => {
    "showArrow" in i && m(0, t = i.showArrow), "arrowDirection" in i && m(1, a = i.arrowDirection), "effectiveTheme" in i && m(2, o = i.effectiveTheme), "adjustedPlacement" in i && m(3, n = i.adjustedPlacement), "tag" in i && m(4, f = i.tag), "config" in i && m(5, u = i.config), "theme" in i && m(6, w = i.theme), "toolbar" in i && m(7, c = i.toolbar), "closePopover" in i && m(8, d = i.closePopover), "audioInstance" in i && m(9, P = i.audioInstance), "audioPlaying" in i && m(10, T = i.audioPlaying), "audioCurrentTime" in i && m(11, _ = i.audioCurrentTime), "audioDuration" in i && m(12, b = i.audioDuration);
  }, [
    t,
    a,
    o,
    n,
    f,
    u,
    w,
    c,
    d,
    P,
    T,
    _,
    b,
    D
  ];
}
class he extends C {
  constructor(e) {
    super(), S(this, e, F, E, v, {
      showArrow: 0,
      arrowDirection: 1,
      effectiveTheme: 2,
      adjustedPlacement: 3,
      tag: 4,
      config: 5,
      theme: 6,
      toolbar: 7,
      closePopover: 8,
      audioInstance: 9,
      audioPlaying: 10,
      audioCurrentTime: 11,
      audioDuration: 12
    });
  }
}
export {
  he as default
};
