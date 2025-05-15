var dt = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var bt = Object.prototype.hasOwnProperty, gt = Object.prototype.propertyIsEnumerable;
var Q = (t, i, e) => i in t ? dt(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e, X = (t, i) => {
  for (var e in i || (i = {}))
    bt.call(i, e) && Q(t, e, i[e]);
  if (L)
    for (var e of L(i))
      gt.call(i, e) && Q(t, e, i[e]);
  return t;
};
import { SvelteComponent as vt, init as wt, safe_not_equal as _t, append_styles as yt, empty as kt, insert as et, transition_in as W, transition_out as q, check_outros as Pt, detach as ot, getContext as Ct, createEventDispatcher as Et, onMount as zt, afterUpdate as Tt, onDestroy as Mt, element as Y, create_component as St, attr as D, set_style as z, append as Dt, mount_component as At, listen as V, add_render_callback as Bt, create_bidirectional_transition as Z, destroy_component as Nt, run_all as jt, group_outros as Ht, bubble as R, binding_callbacks as x } from "../../../../vendor/svelte/internal/index.js";
import { cubicOut as G } from "../../../../vendor/svelte/easing/index.js";
import "../../../../shared-utils/tag.js";
import "three";
import "../../../../vendor/hammerjs/hammer.js";
import "../../../../shared-utils/three/PointSelector/index.js";
import "../../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as $ } from "../../../../shared-utils/isNil.js";
import "../../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../../shared-utils/three/core/Sphere.js";
import "../../../../vendor/animejs/lib/anime.es.js";
import "../../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../../shared-utils/five/FivePuppet.js";
import Wt from "./PopoverContent.js";
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
import "./TagPopoverToolBar.js";
import "./ArrowRightIcon.js";
import "./ShareIcon.js";
function Ft(t) {
  yt(t, "svelte-12m4kzk", ".tag-popover.svelte-12m4kzk{position:absolute;z-index:1000010;pointer-events:auto;width:auto;height:auto;padding:0;margin:0;visibility:visible;opacity:1}.tag-popover-content.svelte-12m4kzk{cursor:pointer;pointer-events:auto}");
}
function tt(t) {
  let i, e, r, p, a, y, h, k, T;
  return r = new Wt({
    props: {
      showArrow: (
        /*showArrow*/
        t[8]
      ),
      arrowDirection: (
        /*arrowDirection*/
        t[7]
      ),
      effectiveTheme: (
        /*effectiveTheme*/
        t[13]
      ),
      adjustedPlacement: (
        /*adjustedPlacement*/
        t[4]
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
        t[11]
      ),
      closePopover: (
        /*closePopoverInternal*/
        t[19]
      )
    }
  }), r.$on(
    "viewMore",
    /*handleViewMore*/
    t[15]
  ), r.$on(
    "share",
    /*handleShare*/
    t[16]
  ), r.$on(
    "resize",
    /*handleContentResize*/
    t[17]
  ), {
    c() {
      i = Y("div"), e = Y("div"), St(r.$$.fragment), D(e, "class", "tag-popover-content svelte-12m4kzk"), D(i, "class", a = "tag-popover tag-popover-" + /*effectiveTheme*/
      t[13] + " tag-popover-" + /*adjustedPlacement*/
      t[4] + " svelte-12m4kzk"), D(i, "data-tag-id", y = /*tag*/
      t[0].id), z(
        i,
        "z-index",
        /*zIndex*/
        t[12]
      ), z(
        i,
        "left",
        /*finalPosition*/
        t[9].x + "px"
      ), z(
        i,
        "top",
        /*finalPosition*/
        t[9].y + "px"
      );
    },
    m(c, l) {
      et(c, i, l), Dt(i, e), At(r, e, null), t[30](e), t[31](i), h = !0, k || (T = [
        V(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[28]
        ),
        V(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[29]
        ),
        V(
          e,
          "click",
          /*handleClick*/
          t[18]
        )
      ], k = !0);
    },
    p(c, l) {
      t = c;
      const s = {};
      l[0] & /*showArrow*/
      256 && (s.showArrow = /*showArrow*/
      t[8]), l[0] & /*arrowDirection*/
      128 && (s.arrowDirection = /*arrowDirection*/
      t[7]), l[0] & /*effectiveTheme*/
      8192 && (s.effectiveTheme = /*effectiveTheme*/
      t[13]), l[0] & /*adjustedPlacement*/
      16 && (s.adjustedPlacement = /*adjustedPlacement*/
      t[4]), l[0] & /*tag*/
      1 && (s.tag = /*tag*/
      t[0]), l[0] & /*config*/
      2 && (s.config = /*config*/
      t[1]), l[0] & /*theme*/
      4 && (s.theme = /*theme*/
      t[2]), l[0] & /*toolbar*/
      2048 && (s.toolbar = /*toolbar*/
      t[11]), r.$set(s), (!h || l[0] & /*effectiveTheme, adjustedPlacement*/
      8208 && a !== (a = "tag-popover tag-popover-" + /*effectiveTheme*/
      t[13] + " tag-popover-" + /*adjustedPlacement*/
      t[4] + " svelte-12m4kzk")) && D(i, "class", a), (!h || l[0] & /*tag*/
      1 && y !== (y = /*tag*/
      t[0].id)) && D(i, "data-tag-id", y), (!h || l[0] & /*zIndex*/
      4096) && z(
        i,
        "z-index",
        /*zIndex*/
        t[12]
      ), (!h || l[0] & /*finalPosition*/
      512) && z(
        i,
        "left",
        /*finalPosition*/
        t[9].x + "px"
      ), (!h || l[0] & /*finalPosition*/
      512) && z(
        i,
        "top",
        /*finalPosition*/
        t[9].y + "px"
      );
    },
    i(c) {
      h || (W(r.$$.fragment, c), Bt(() => {
        h && (p || (p = Z(
          e,
          /*fadeAndFly*/
          t[14],
          {
            duration: (
              /*transitionDuration*/
              t[10]
            ),
            easing: G,
            y: (
              /*arrowDirection*/
              t[7] === "top" ? -8 : (
                /*arrowDirection*/
                t[7] === "bottom" ? 8 : 0
              )
            ),
            x: (
              /*arrowDirection*/
              t[7] === "left" ? -8 : (
                /*arrowDirection*/
                t[7] === "right" ? 8 : 0
              )
            )
          },
          !0
        )), p.run(1));
      }), h = !0);
    },
    o(c) {
      q(r.$$.fragment, c), p || (p = Z(
        e,
        /*fadeAndFly*/
        t[14],
        {
          duration: (
            /*transitionDuration*/
            t[10]
          ),
          easing: G,
          y: (
            /*arrowDirection*/
            t[7] === "top" ? -8 : (
              /*arrowDirection*/
              t[7] === "bottom" ? 8 : 0
            )
          ),
          x: (
            /*arrowDirection*/
            t[7] === "left" ? -8 : (
              /*arrowDirection*/
              t[7] === "right" ? 8 : 0
            )
          )
        },
        !1
      )), p.run(0), h = !1;
    },
    d(c) {
      c && ot(i), Nt(r), t[30](null), c && p && p.end(), t[31](null), k = !1, jt(T);
    }
  };
}
function It(t) {
  let i, e, r = (
    /*visible*/
    t[3] && /*finalPosition*/
    t[9] && tt(t)
  );
  return {
    c() {
      r && r.c(), i = kt();
    },
    m(p, a) {
      r && r.m(p, a), et(p, i, a), e = !0;
    },
    p(p, a) {
      /*visible*/
      p[3] && /*finalPosition*/
      p[9] ? r ? (r.p(p, a), a[0] & /*visible, finalPosition*/
      520 && W(r, 1)) : (r = tt(p), r.c(), W(r, 1), r.m(i.parentNode, i)) : r && (Ht(), q(r, 1, 1, () => {
        r = null;
      }), Pt());
    },
    i(p) {
      e || (W(r), e = !0);
    },
    o(p) {
      q(r), e = !1;
    },
    d(p) {
      r && r.d(p), p && ot(i);
    }
  };
}
function Ot(t, i, e) {
  let r, p, a, y, h, k, T, c, l;
  const s = Ct("hooks");
  let { tag: u } = i, { config: m = {} } = i, { triggerElement: P } = i, { wrapperElement: f = document.body } = i, { popoverContainer: M = null } = i, { theme: A = void 0 } = i, { visible: U = !0 } = i, { closePopover: B = void 0 } = i;
  const it = Et();
  let F, _ = { width: 0, height: 0 }, I = null, b = p;
  function rt(o, { duration: n = 400, easing: v = G, x: w = 0, y: O = 0 }) {
    return {
      duration: n,
      css: (S, d) => `
          opacity: ${S};
          transform: translate(${d * w}px, ${d * O}px);
        `
    };
  }
  const N = () => {
    if (!u.screenPosition || !P || !f)
      return p;
    const o = (m == null ? void 0 : m.autoPlacementBaseSpace) || {
      top: 0.2,
      // 顶部区域占比20%
      bottom: 0.2,
      // 底部区域占比20%
      right: 0.15
      // 右侧区域占比15%
    }, n = f.clientWidth, v = f.clientHeight, w = v * o.top, O = v * (1 - o.bottom), S = n * (1 - o.right), d = u.screenPosition.leftPx, C = u.screenPosition.topPx, E = _.width || 280, H = _.height || 200;
    return C <= w ? d <= S ? d + E <= n && C + H <= v ? "right-top" : "bottom-left" : d - E >= 0 && C + H <= v ? "left-top" : "bottom-right" : C >= O ? d <= S ? d + E <= n && C - H >= 0 ? "right-bottom" : "top-left" : d - E >= 0 && C - H >= 0 ? "left-bottom" : "top-right" : d <= S ? d + E <= n ? "right-top" : "left-top" : d - E >= 0 ? "left-top" : "right-top";
  }, nt = (o, n) => {
    if (!o)
      return null;
    const v = 8, w = X({}, o);
    return ["top", "top-left", "top-right"].includes(n) ? w.y -= v : ["bottom", "bottom-left", "bottom-right"].includes(n) ? w.y += v : ["left", "left-top", "left-bottom"].includes(n) ? w.x -= v : ["right", "right-top", "right-bottom"].includes(n) && (w.x += v), w;
  }, pt = (o, n) => {
    switch (o) {
      case "top":
      case "top-left":
      case "top-right":
        return {
          x: n.left + n.width / 2,
          y: n.top
        };
      case "bottom":
      case "bottom-left":
      case "bottom-right":
        return {
          x: n.left + n.width / 2,
          y: n.top + n.height
        };
      case "left":
      case "left-top":
      case "left-bottom":
        return {
          x: n.left,
          y: n.top + n.height / 2
        };
      case "right":
      case "right-top":
      case "right-bottom":
        return {
          x: n.left + n.width,
          y: n.top + n.height / 2
        };
      default:
        return {
          x: n.left + n.width / 2,
          y: n.top
        };
    }
  }, lt = (o) => {
    j(), s && s.emit("click", {
      event: o.detail.event,
      target: "TagPopoverViewMore",
      tag: u
    });
  }, mt = (o) => {
    j(), s && s.emit("click", {
      event: o.detail.event,
      target: "TagPopoverShare",
      tag: u
    });
  }, at = (o) => {
    e(24, _ = o.detail), _.width > 0 && _.height > 0 && e(4, b = N());
  }, st = (o) => {
    j(), o.stopPropagation(), s.emit("click", { event: o, target: "TagPopoverContent", tag: u });
  };
  let g = null, J = !1;
  function K() {
    M && g && g.parentNode !== M && M.appendChild(g);
  }
  zt(() => {
    (!f || f === document.body) && console.warn("TagPopover 组件警告：禁止使用 document.body 作为 wrapperElement，请传入自定义容器元素。"), J = !0, K(), f && f !== document.body && e(20, f.style.overflow = "hidden", f);
  }), Tt(() => {
    J && K();
  }), Mt(() => {
    g && g.parentNode && g.parentNode.removeChild(g), f && f !== document.body && e(20, f.style.overflow = "", f);
  });
  function j() {
    typeof B == "function" && B(), it("close");
  }
  function ft(o) {
    R.call(this, t, o);
  }
  function ut(o) {
    R.call(this, t, o);
  }
  function ht(o) {
    x[o ? "unshift" : "push"](() => {
      F = o, e(5, F);
    });
  }
  function ct(o) {
    x[o ? "unshift" : "push"](() => {
      g = o, e(6, g);
    });
  }
  return t.$$set = (o) => {
    "tag" in o && e(0, u = o.tag), "config" in o && e(1, m = o.config), "triggerElement" in o && e(21, P = o.triggerElement), "wrapperElement" in o && e(20, f = o.wrapperElement), "popoverContainer" in o && e(22, M = o.popoverContainer), "theme" in o && e(2, A = o.theme), "visible" in o && e(3, U = o.visible), "closePopover" in o && e(23, B = o.closePopover);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*theme, tag*/
    5 && e(13, r = (() => $(A) ? A : $(u.data.theme) && ["light", "dark"].includes(u.data.theme) ? u.data.theme : u.contentType === "Marketing" ? "light" : "dark")()), t.$$.dirty[0] & /*config*/
    2 && e(27, p = (m == null ? void 0 : m.placement) || "right-top"), t.$$.dirty[0] & /*config*/
    2 && e(11, h = (() => typeof (m == null ? void 0 : m.toolbar) == "boolean" ? m.toolbar ? { showMore: !0, showShare: !0 } : { showMore: !1, showShare: !1 } : (m == null ? void 0 : m.toolbar) || { showMore: !0, showShare: !0 })()), t.$$.dirty[0] & /*placement*/
    134217728 && (p === "auto" ? e(4, b = N()) : e(4, b = p)), t.$$.dirty[0] & /*config*/
    2 && e(10, k = (m == null ? void 0 : m.transitionDuration) || 350), t.$$.dirty[0] & /*tag, triggerElement*/
    2097153 && u.screenPosition && P && e(4, b = N()), t.$$.dirty[0] & /*popoverContentElementRect*/
    16777216 && _.width > 0 && _.height > 0 && e(4, b = N()), t.$$.dirty[0] & /*tag, adjustedPlacement, triggerElement*/
    2097169 && u.screenPosition && b && P) {
      const o = P.getBoundingClientRect();
      e(25, I = pt(b, o));
    }
    t.$$.dirty[0] & /*anchorPosition, adjustedPlacement*/
    33554448 && e(9, T = nt(I, b)), t.$$.dirty[0] & /*arrow*/
    67108864 && e(8, c = typeof a == "boolean" ? a : !0), t.$$.dirty[0] & /*adjustedPlacement*/
    16 && e(7, l = (() => {
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
    })());
  }, e(26, a = !0), e(12, y = 1060), [
    u,
    m,
    A,
    U,
    b,
    F,
    g,
    l,
    c,
    T,
    k,
    h,
    y,
    r,
    rt,
    lt,
    mt,
    at,
    st,
    j,
    f,
    P,
    M,
    B,
    _,
    I,
    a,
    p,
    ft,
    ut,
    ht,
    ct
  ];
}
class ao extends vt {
  constructor(i) {
    super(), wt(
      this,
      i,
      Ot,
      It,
      _t,
      {
        tag: 0,
        config: 1,
        triggerElement: 21,
        wrapperElement: 20,
        popoverContainer: 22,
        theme: 2,
        visible: 3,
        closePopover: 23
      },
      Ft,
      [-1, -1]
    );
  }
}
export {
  ao as default
};
