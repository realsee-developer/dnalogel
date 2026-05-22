import { SvelteComponent as bt, init as vt, safe_not_equal as wt, append_styles as _t, empty as yt, insert as rt, transition_in as H, transition_out as q, check_outros as Pt, detach as nt, getContext as Ct, createEventDispatcher as Tt, onMount as jt, afterUpdate as kt, onDestroy as Dt, element as R, create_component as Et, attr as M, toggle_class as x, set_style as T, append as It, mount_component as Mt, listen as V, add_render_callback as St, create_bidirectional_transition as $, destroy_component as At, run_all as zt, group_outros as Bt, bubble as tt, binding_callbacks as et } from "../../../../vendor/svelte/internal/index.js";
import { cubicOut as G } from "../../../../vendor/svelte/easing/index.js";
import "../../../../shared-utils/tag.js";
import "three";
import "../../../../vendor/hammerjs/hammer.js";
import "../../../../shared-utils/three/PointSelector/index.js";
import "../../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as ot } from "../../../../shared-utils/isNil.js";
import "../../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../../shared-utils/three/core/Sphere.js";
import "../../../../shared-utils/three/blink.js";
import "../../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../../vendor/earcut/src/earcut.js";
import "../../../../shared-utils/five/FivePuppet.js";
import Nt from "./PopoverContent.js";
import "../../../../shared-utils/positionToVector3.js";
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
import "../../../../shared-utils/five/fiveModelLoad.js";
import "../../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../../shared-utils/three/Magnifier.js";
import "../../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../../shared-utils/three/Assets/index.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../../shared-utils/even.js";
import "../../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../../shared-utils/three/centerPoint.js";
import "../../../../shared-utils/three/getObjectVisible.js";
import "../../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../../shared-utils/CSS3DRender/index.js";
import "../../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../../shared-utils/createResizeObserver.js";
import "../../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../../Sculpt/Meshes/Line.js";
import "../../../../Sculpt/typings/style.js";
import "../../../../shared-utils/three/IObject3D.js";
import "../../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../../shared-utils/util.js";
import "../../../../shared-utils/five/getFiveFromParentChain.js";
import "../../../../shared-utils/three/core/LineGeometry.js";
import "../../../../shared-utils/three/core/LineMaterial.js";
import "../../../../shared-utils/three/core/Line2.js";
import "../../../../shared-utils/three/core/LineMaterial2.js";
import "../../../../Sculpt/utils/unit.js";
import "../../../../Sculpt/utils/renderDom.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../../shared-utils/isTouchDevice.js";
import "../../../../shared-utils/five/getPosition.js";
import "../../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../../Sculpt/utils/three/rayOnLine.js";
import "../../../../vendor/animejs/lib/anime.es.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
import "./TagPopoverArrow.js";
import "../Icon/tag-popover-arrow-base64.js";
import "./TagPopup.js";
import "../VideoIcon.js";
import "./PanoramaIcon.js";
import "../../../utils/videoHelper.js";
import "../AudioPlayer.js";
import "../Icon/audioIcon.js";
import "../../../utils/px2rem.js";
import "../Shadow.js";
import "../../../../vendor/svelte/transition/index.js";
import "./TagPopoverToolBar.js";
import "./ArrowRightIcon.js";
import "./ShareIcon.js";
function Ht(t) {
  _t(t, "svelte-11cjg3j", '@charset "UTF-8";.tag-popover.svelte-11cjg3j{position:absolute;z-index:1000010;pointer-events:auto;width:auto;height:auto;padding:0;margin:0;visibility:visible;opacity:1}.tag-popover-content.svelte-11cjg3j{cursor:pointer;pointer-events:auto}.tag-popover-content.audio-tag-popover.svelte-11cjg3j{cursor:default}');
}
function it(t) {
  let i, o, r, n, f, w, h, _, j;
  return r = new Nt({
    props: {
      showArrow: (
        /*showArrow*/
        t[13]
      ),
      arrowDirection: (
        /*arrowDirection*/
        t[12]
      ),
      effectiveTheme: (
        /*effectiveTheme*/
        t[18]
      ),
      adjustedPlacement: (
        /*adjustedPlacement*/
        t[8]
      ),
      tag: (
        /*tag*/
        t[0]
      ),
      config: (
        /*config*/
        t[1]
      ),
      theme: (
        /*theme*/
        t[2]
      ),
      toolbar: (
        /*toolbar*/
        t[16]
      ),
      audioInstance: (
        /*audioInstance*/
        t[4]
      ),
      audioPlaying: (
        /*audioPlaying*/
        t[5]
      ),
      audioCurrentTime: (
        /*audioCurrentTime*/
        t[6]
      ),
      audioDuration: (
        /*audioDuration*/
        t[7]
      ),
      closePopover: (
        /*closePopoverInternal*/
        t[24]
      )
    }
  }), r.$on(
    "viewMore",
    /*handleViewMore*/
    t[20]
  ), r.$on(
    "share",
    /*handleShare*/
    t[21]
  ), r.$on(
    "resize",
    /*handleContentResize*/
    t[22]
  ), {
    c() {
      i = R("div"), o = R("div"), Et(r.$$.fragment), M(o, "class", "tag-popover-content svelte-11cjg3j"), x(
        o,
        "audio-tag-popover",
        /*isAudioTag*/
        t[11]
      ), M(i, "class", f = "tag-popover tag-popover-" + /*effectiveTheme*/
      t[18] + " tag-popover-" + /*adjustedPlacement*/
      t[8] + " svelte-11cjg3j"), M(i, "data-tag-id", w = /*tag*/
      t[0].id), T(
        i,
        "z-index",
        /*zIndex*/
        t[17]
      ), T(
        i,
        "left",
        /*finalPosition*/
        t[14].x + "px"
      ), T(
        i,
        "top",
        /*finalPosition*/
        t[14].y + "px"
      );
    },
    m(d, l) {
      rt(d, i, l), It(i, o), Mt(r, o, null), t[35](o), t[36](i), h = !0, _ || (j = [
        V(
          o,
          "mouseenter",
          /*mouseenter_handler*/
          t[33]
        ),
        V(
          o,
          "mouseleave",
          /*mouseleave_handler*/
          t[34]
        ),
        V(
          o,
          "click",
          /*handleClick*/
          t[23]
        )
      ], _ = !0);
    },
    p(d, l) {
      t = d;
      const p = {};
      l[0] & /*showArrow*/
      8192 && (p.showArrow = /*showArrow*/
      t[13]), l[0] & /*arrowDirection*/
      4096 && (p.arrowDirection = /*arrowDirection*/
      t[12]), l[0] & /*effectiveTheme*/
      262144 && (p.effectiveTheme = /*effectiveTheme*/
      t[18]), l[0] & /*adjustedPlacement*/
      256 && (p.adjustedPlacement = /*adjustedPlacement*/
      t[8]), l[0] & /*tag*/
      1 && (p.tag = /*tag*/
      t[0]), l[0] & /*config*/
      2 && (p.config = /*config*/
      t[1]), l[0] & /*theme*/
      4 && (p.theme = /*theme*/
      t[2]), l[0] & /*toolbar*/
      65536 && (p.toolbar = /*toolbar*/
      t[16]), l[0] & /*audioInstance*/
      16 && (p.audioInstance = /*audioInstance*/
      t[4]), l[0] & /*audioPlaying*/
      32 && (p.audioPlaying = /*audioPlaying*/
      t[5]), l[0] & /*audioCurrentTime*/
      64 && (p.audioCurrentTime = /*audioCurrentTime*/
      t[6]), l[0] & /*audioDuration*/
      128 && (p.audioDuration = /*audioDuration*/
      t[7]), r.$set(p), (!h || l[0] & /*isAudioTag*/
      2048) && x(
        o,
        "audio-tag-popover",
        /*isAudioTag*/
        t[11]
      ), (!h || l[0] & /*effectiveTheme, adjustedPlacement*/
      262400 && f !== (f = "tag-popover tag-popover-" + /*effectiveTheme*/
      t[18] + " tag-popover-" + /*adjustedPlacement*/
      t[8] + " svelte-11cjg3j")) && M(i, "class", f), (!h || l[0] & /*tag*/
      1 && w !== (w = /*tag*/
      t[0].id)) && M(i, "data-tag-id", w), (!h || l[0] & /*zIndex*/
      131072) && T(
        i,
        "z-index",
        /*zIndex*/
        t[17]
      ), (!h || l[0] & /*finalPosition*/
      16384) && T(
        i,
        "left",
        /*finalPosition*/
        t[14].x + "px"
      ), (!h || l[0] & /*finalPosition*/
      16384) && T(
        i,
        "top",
        /*finalPosition*/
        t[14].y + "px"
      );
    },
    i(d) {
      h || (H(r.$$.fragment, d), St(() => {
        h && (n || (n = $(
          o,
          /*fadeAndFly*/
          t[19],
          {
            duration: (
              /*transitionDuration*/
              t[15]
            ),
            easing: G,
            y: (
              /*arrowDirection*/
              t[12] === "top" ? -8 : (
                /*arrowDirection*/
                t[12] === "bottom" ? 8 : 0
              )
            ),
            x: (
              /*arrowDirection*/
              t[12] === "left" ? -8 : (
                /*arrowDirection*/
                t[12] === "right" ? 8 : 0
              )
            )
          },
          !0
        )), n.run(1));
      }), h = !0);
    },
    o(d) {
      q(r.$$.fragment, d), n || (n = $(
        o,
        /*fadeAndFly*/
        t[19],
        {
          duration: (
            /*transitionDuration*/
            t[15]
          ),
          easing: G,
          y: (
            /*arrowDirection*/
            t[12] === "top" ? -8 : (
              /*arrowDirection*/
              t[12] === "bottom" ? 8 : 0
            )
          ),
          x: (
            /*arrowDirection*/
            t[12] === "left" ? -8 : (
              /*arrowDirection*/
              t[12] === "right" ? 8 : 0
            )
          )
        },
        !1
      )), n.run(0), h = !1;
    },
    d(d) {
      d && nt(i), At(r), t[35](null), d && n && n.end(), t[36](null), _ = !1, zt(j);
    }
  };
}
function Wt(t) {
  let i, o, r = (
    /*visible*/
    t[3] && /*finalPosition*/
    t[14] && it(t)
  );
  return {
    c() {
      r && r.c(), i = yt();
    },
    m(n, f) {
      r && r.m(n, f), rt(n, i, f), o = !0;
    },
    p(n, f) {
      /*visible*/
      n[3] && /*finalPosition*/
      n[14] ? r ? (r.p(n, f), f[0] & /*visible, finalPosition*/
      16392 && H(r, 1)) : (r = it(n), r.c(), H(r, 1), r.m(i.parentNode, i)) : r && (Bt(), q(r, 1, 1, () => {
        r = null;
      }), Pt());
    },
    i(n) {
      o || (H(r), o = !0);
    },
    o(n) {
      q(r), o = !1;
    },
    d(n) {
      r && r.d(n), n && nt(i);
    }
  };
}
function Ft(t, i, o) {
  let r, n, f, w, h, _, j, d, l, p;
  const k = Ct("hooks");
  let { tag: u } = i, { config: m = {} } = i, { triggerElement: y } = i, { wrapperElement: s = document.body } = i, { popoverContainer: D = null } = i, { theme: S = void 0 } = i, { visible: J = !0 } = i, { closePopover: A = void 0 } = i, { audioInstance: K = null } = i, { audioPlaying: L = !1 } = i, { audioCurrentTime: Q = 0 } = i, { audioDuration: X = 0 } = i;
  const at = Tt();
  let W, v = { width: 0, height: 0 }, F = null, b = n;
  function lt(e, { duration: a = 400, easing: E = G, x: O = 0, y: U = 0 }) {
    return {
      duration: a,
      css: (I, c) => `
          opacity: ${I};
          transform: translate(${c * O}px, ${c * U}px);
        `
    };
  }
  const z = () => {
    if (!u.screenPosition || !y || !s)
      return n;
    const e = (m == null ? void 0 : m.autoPlacementBaseSpace) || {
      top: 0.2,
      // 顶部区域占比20%
      bottom: 0.2,
      // 底部区域占比20%
      right: 0.15
      // 右侧区域占比15%
    }, a = s.clientWidth, E = s.clientHeight, O = E * e.top, U = E * (1 - e.bottom), I = a * (1 - e.right), c = u.screenPosition.leftPx, P = u.screenPosition.topPx, C = v.width || 280, N = v.height || 200;
    return P <= O ? c <= I ? c + C <= a && P + N <= E ? "right-top" : "bottom-left" : c - C >= 0 && P + N <= E ? "left-top" : "bottom-right" : P >= U ? c <= I ? c + C <= a && P - N >= 0 ? "right-bottom" : "top-left" : c - C >= 0 && P - N >= 0 ? "left-bottom" : "top-right" : c <= I ? c + C <= a ? "right-top" : "left-top" : c - C >= 0 ? "left-top" : "right-top";
  }, mt = (e, a) => {
    switch (e) {
      case "top":
      case "top-left":
      case "top-right":
        return {
          x: a.left + a.width / 2,
          y: a.top
        };
      case "bottom":
      case "bottom-left":
      case "bottom-right":
        return {
          x: a.left + a.width / 2,
          y: a.top + a.height
        };
      case "left":
      case "left-top":
      case "left-bottom":
        return {
          x: a.left,
          y: a.top + a.height / 2
        };
      case "right":
      case "right-top":
      case "right-bottom":
        return {
          x: a.left + a.width,
          y: a.top + a.height / 2
        };
      default:
        return {
          x: a.left + a.width / 2,
          y: a.top
        };
    }
  }, pt = (e) => {
    B(), k && k.emit("click", {
      event: e.detail.event,
      target: "TagPopoverViewMore",
      tag: u
    });
  }, ut = (e) => {
    B(), k && k.emit("click", {
      event: e.detail.event,
      target: "TagPopoverShare",
      tag: u
    });
  }, ft = (e) => {
    o(29, v = e.detail), v.width > 0 && v.height > 0 && o(8, b = z());
  }, st = (e) => {
    p || B(), e.stopPropagation(), k.emit("click", { event: e, target: "TagPopoverContent", tag: u });
  };
  let g = null, Y = !1;
  function Z() {
    D && g && g.parentNode !== D && D.appendChild(g);
  }
  jt(() => {
    (!s || s === document.body) && console.warn("TagPopover 组件警告：禁止使用 document.body 作为 wrapperElement，请传入自定义容器元素。"), Y = !0, Z(), s && s !== document.body && o(25, s.style.overflow = "hidden", s);
  }), kt(() => {
    Y && Z();
  }), Dt(() => {
    g && g.parentNode && g.parentNode.removeChild(g), s && s !== document.body && o(25, s.style.overflow = "", s);
  });
  function B() {
    typeof A == "function" && A(), at("close");
  }
  function ht(e) {
    tt.call(this, t, e);
  }
  function dt(e) {
    tt.call(this, t, e);
  }
  function ct(e) {
    et[e ? "unshift" : "push"](() => {
      W = e, o(9, W);
    });
  }
  function gt(e) {
    et[e ? "unshift" : "push"](() => {
      g = e, o(10, g);
    });
  }
  return t.$$set = (e) => {
    "tag" in e && o(0, u = e.tag), "config" in e && o(1, m = e.config), "triggerElement" in e && o(26, y = e.triggerElement), "wrapperElement" in e && o(25, s = e.wrapperElement), "popoverContainer" in e && o(27, D = e.popoverContainer), "theme" in e && o(2, S = e.theme), "visible" in e && o(3, J = e.visible), "closePopover" in e && o(28, A = e.closePopover), "audioInstance" in e && o(4, K = e.audioInstance), "audioPlaying" in e && o(5, L = e.audioPlaying), "audioCurrentTime" in e && o(6, Q = e.audioCurrentTime), "audioDuration" in e && o(7, X = e.audioDuration);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*theme, tag*/
    5 && o(18, r = (() => ot(S) ? S : ot(u.data.theme) && ["light", "dark"].includes(u.data.theme) ? u.data.theme : u.contentType === "Marketing" ? "light" : "dark")()), t.$$.dirty[0] & /*config*/
    2 && o(32, n = (m == null ? void 0 : m.placement) || "right-top"), t.$$.dirty[0] & /*config*/
    2 && o(16, h = (() => typeof (m == null ? void 0 : m.toolbar) == "boolean" ? m.toolbar ? { showMore: !0, showShare: !0 } : { showMore: !1, showShare: !1 } : (m == null ? void 0 : m.toolbar) || { showMore: !0, showShare: !0 })()), t.$$.dirty[1] & /*placement*/
    2 && (n === "auto" ? o(8, b = z()) : o(8, b = n)), t.$$.dirty[0] & /*config*/
    2 && o(15, _ = (m == null ? void 0 : m.transitionDuration) || 350), t.$$.dirty[0] & /*tag, triggerElement*/
    67108865 && u.screenPosition && y && o(8, b = z()), t.$$.dirty[0] & /*popoverContentElementRect*/
    536870912 && v.width > 0 && v.height > 0 && o(8, b = z()), t.$$.dirty[0] & /*tag, adjustedPlacement, triggerElement*/
    67109121 && u.screenPosition && b && y) {
      const e = y.getBoundingClientRect();
      e.width > 0 && e.height > 0 && o(30, F = mt(b, e));
    }
    t.$$.dirty[0] & /*anchorPosition*/
    1073741824 && o(14, j = F), t.$$.dirty[1] & /*arrow*/
    1 && o(13, d = typeof f == "boolean" ? f : !0), t.$$.dirty[0] & /*adjustedPlacement*/
    256 && o(12, l = (() => {
      switch (b) {
        case "top":
        case "top-left":
        case "top-right":
          return "bottom";
        case "bottom":
        case "bottom-left":
        case "bottom-right":
          return "top";
        case "left":
        case "left-top":
        case "left-bottom":
          return "right";
        case "right":
        case "right-top":
        case "right-bottom":
          return "left";
        default:
          return "bottom";
      }
    })()), t.$$.dirty[0] & /*tag*/
    1 && o(11, p = u.contentType === "Audio" && u.data.appearance === "plane");
  }, o(31, f = !0), o(17, w = 1060), [
    u,
    m,
    S,
    J,
    K,
    L,
    Q,
    X,
    b,
    W,
    g,
    p,
    l,
    d,
    j,
    _,
    h,
    w,
    r,
    lt,
    pt,
    ut,
    ft,
    st,
    B,
    s,
    y,
    D,
    A,
    v,
    F,
    f,
    n,
    ht,
    dt,
    ct,
    gt
  ];
}
class go extends bt {
  constructor(i) {
    super(), vt(
      this,
      i,
      Ft,
      Wt,
      wt,
      {
        tag: 0,
        config: 1,
        triggerElement: 26,
        wrapperElement: 25,
        popoverContainer: 27,
        theme: 2,
        visible: 3,
        closePopover: 28,
        audioInstance: 4,
        audioPlaying: 5,
        audioCurrentTime: 6,
        audioDuration: 7
      },
      Ht,
      [-1, -1]
    );
  }
}
export {
  go as default
};
