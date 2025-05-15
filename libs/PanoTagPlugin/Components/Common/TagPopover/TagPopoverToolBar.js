import { SvelteComponent as z, init as I, safe_not_equal as N, append_styles as V, empty as q, insert as h, transition_in as m, transition_out as s, check_outros as w, detach as u, getContext as A, createEventDispatcher as B, element as _, space as y, attr as g, append as b, group_outros as d, text as D, create_component as P, mount_component as x, listen as C, set_data as E, destroy_component as j } from "../../../../vendor/svelte/internal/index.js";
import R from "./ArrowRightIcon.js";
import F from "./ShareIcon.js";
import "../../../../shared-utils/tag.js";
import "three";
import "../../../../vendor/hammerjs/hammer.js";
import "../../../../shared-utils/three/PointSelector/index.js";
import "../../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as k } from "../../../../shared-utils/isNil.js";
import "../../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../../shared-utils/three/core/Sphere.js";
import "../../../../vendor/animejs/lib/anime.es.js";
import "../../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../../shared-utils/five/FivePuppet.js";
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
function G(n) {
  V(n, "svelte-18owx9v", ".tag-popover-toolbar.svelte-18owx9v.svelte-18owx9v{display:flex;align-items:center;margin-top:0.75rem;padding-top:0;border-top:none}.tag-popover-toolbar.both-buttons.svelte-18owx9v.svelte-18owx9v{justify-content:space-between}.tag-popover-toolbar.single-button.svelte-18owx9v.svelte-18owx9v{justify-content:flex-end}.tag-popover-toolbar-dark.svelte-18owx9v .tag-popover-btn.svelte-18owx9v{color:#ffffff}.tag-popover-toolbar-light.svelte-18owx9v .tag-popover-btn.svelte-18owx9v{color:rgba(0, 0, 0, 0.85)}.tag-popover-btn.view-more.svelte-18owx9v.svelte-18owx9v{display:flex;align-items:center;justify-content:center;font-weight:500;font-size:0.875rem;letter-spacing:0;line-height:1.25rem}.tag-popover-btn.share.svelte-18owx9v.svelte-18owx9v{display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem}");
}
function M(n) {
  let t, p, r, i, o = (
    /*toolbar*/
    n[0].showMore && S(n)
  ), e = (
    /*toolbar*/
    n[0].showShare && T(n)
  );
  return {
    c() {
      t = _("div"), o && o.c(), p = y(), e && e.c(), g(t, "class", r = "tag-popover-toolbar tag-popover-toolbar-" + /*theme*/
      n[1] + " " + /*toolbar*/
      (n[0].showMore && /*toolbar*/
      n[0].showShare ? "both-buttons" : "single-button") + " svelte-18owx9v");
    },
    m(f, l) {
      h(f, t, l), o && o.m(t, null), b(t, p), e && e.m(t, null), i = !0;
    },
    p(f, l) {
      /*toolbar*/
      f[0].showMore ? o ? (o.p(f, l), l & /*toolbar*/
      1 && m(o, 1)) : (o = S(f), o.c(), m(o, 1), o.m(t, p)) : o && (d(), s(o, 1, 1, () => {
        o = null;
      }), w()), /*toolbar*/
      f[0].showShare ? e ? (e.p(f, l), l & /*toolbar*/
      1 && m(e, 1)) : (e = T(f), e.c(), m(e, 1), e.m(t, null)) : e && (d(), s(e, 1, 1, () => {
        e = null;
      }), w()), (!i || l & /*theme, toolbar*/
      3 && r !== (r = "tag-popover-toolbar tag-popover-toolbar-" + /*theme*/
      f[1] + " " + /*toolbar*/
      (f[0].showMore && /*toolbar*/
      f[0].showShare ? "both-buttons" : "single-button") + " svelte-18owx9v")) && g(t, "class", r);
    },
    i(f) {
      i || (m(o), m(e), i = !0);
    },
    o(f) {
      s(o), s(e), i = !1;
    },
    d(f) {
      f && u(t), o && o.d(), e && e.d();
    }
  };
}
function S(n) {
  let t, p, r, i, o, e, f;
  return i = new R({
    props: {
      size: "14",
      color: (
        /*theme*/
        n[1] === "light" ? "#000000" : "#ffffff"
      ),
      opacity: (
        /*theme*/
        n[1] === "light" ? 0.8 : 1
      )
    }
  }), {
    c() {
      t = _("div"), p = D(
        /*viewMoreText*/
        n[2]
      ), r = y(), P(i.$$.fragment), g(t, "class", "tag-popover-btn view-more svelte-18owx9v");
    },
    m(l, c) {
      h(l, t, c), b(t, p), b(t, r), x(i, t, null), o = !0, e || (f = C(
        t,
        "click",
        /*handleViewMore*/
        n[3]
      ), e = !0);
    },
    p(l, c) {
      (!o || c & /*viewMoreText*/
      4) && E(
        p,
        /*viewMoreText*/
        l[2]
      );
      const v = {};
      c & /*theme*/
      2 && (v.color = /*theme*/
      l[1] === "light" ? "#000000" : "#ffffff"), c & /*theme*/
      2 && (v.opacity = /*theme*/
      l[1] === "light" ? 0.8 : 1), i.$set(v);
    },
    i(l) {
      o || (m(i.$$.fragment, l), o = !0);
    },
    o(l) {
      s(i.$$.fragment, l), o = !1;
    },
    d(l) {
      l && u(t), j(i), e = !1, f();
    }
  };
}
function T(n) {
  let t, p, r, i, o;
  return p = new F({
    props: {
      size: "20",
      color: (
        /*theme*/
        n[1] === "light" ? "#000000" : "#ffffff"
      ),
      opacity: (
        /*theme*/
        n[1] === "light" ? 0.8 : 1
      )
    }
  }), {
    c() {
      t = _("div"), P(p.$$.fragment), g(t, "class", "tag-popover-btn share svelte-18owx9v");
    },
    m(e, f) {
      h(e, t, f), x(p, t, null), r = !0, i || (o = C(
        t,
        "click",
        /*handleShare*/
        n[4]
      ), i = !0);
    },
    p(e, f) {
      const l = {};
      f & /*theme*/
      2 && (l.color = /*theme*/
      e[1] === "light" ? "#000000" : "#ffffff"), f & /*theme*/
      2 && (l.opacity = /*theme*/
      e[1] === "light" ? 0.8 : 1), p.$set(l);
    },
    i(e) {
      r || (m(p.$$.fragment, e), r = !0);
    },
    o(e) {
      s(p.$$.fragment, e), r = !1;
    },
    d(e) {
      e && u(t), j(p), i = !1, o();
    }
  };
}
function H(n) {
  let t, p, r = (
    /*toolbar*/
    (n[0].showMore || /*toolbar*/
    n[0].showShare) && M(n)
  );
  return {
    c() {
      r && r.c(), t = q();
    },
    m(i, o) {
      r && r.m(i, o), h(i, t, o), p = !0;
    },
    p(i, [o]) {
      /*toolbar*/
      i[0].showMore || /*toolbar*/
      i[0].showShare ? r ? (r.p(i, o), o & /*toolbar*/
      1 && m(r, 1)) : (r = M(i), r.c(), m(r, 1), r.m(t.parentNode, t)) : r && (d(), s(r, 1, 1, () => {
        r = null;
      }), w());
    },
    i(i) {
      p || (m(r), p = !0);
    },
    o(i) {
      s(r), p = !1;
    },
    d(i) {
      r && r.d(i), i && u(t);
    }
  };
}
function J(n, t, p) {
  let r;
  const i = A("hooks");
  B();
  let { tag: o } = t, { toolbar: e = { showMore: !0, showShare: !0 } } = t, { theme: f = "dark" } = t, { closePopover: l = void 0 } = t;
  function c(a) {
    a.stopPropagation(), typeof l == "function" && l(), i.emit("click", { event: a, target: "TagPopoverViewMore", tag: o });
  }
  function v(a) {
    a.stopPropagation(), typeof l == "function" && l(), i.emit("click", { event: a, target: "TagPopoverShare", tag: o });
  }
  return n.$$set = (a) => {
    "tag" in a && p(5, o = a.tag), "toolbar" in a && p(0, e = a.toolbar), "theme" in a && p(1, f = a.theme), "closePopover" in a && p(6, l = a.closePopover);
  }, n.$$.update = () => {
    n.$$.dirty & /*tag*/
    32 && p(2, r = (() => k(o.data.highlightText) && o.data.highlightText.trim() !== "" ? o.data.highlightText : k(o.config.popoverConfig.viewMoreText) && o.config.popoverConfig.viewMoreText.trim() !== "" ? o.config.popoverConfig.viewMoreText : "查看更多")());
  }, [e, f, r, c, v, o, l];
}
class it extends z {
  constructor(t) {
    super(), I(
      this,
      t,
      J,
      H,
      N,
      {
        tag: 5,
        toolbar: 0,
        theme: 1,
        closePopover: 6
      },
      G
    );
  }
}
export {
  it as default
};
