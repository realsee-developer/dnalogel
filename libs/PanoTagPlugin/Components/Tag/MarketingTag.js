import { SvelteComponent as K, init as Q, safe_not_equal as V, append_styles as $, element as _, create_component as ee, space as C, text as W, attr as g, set_style as U, null_to_empty as F, toggle_class as D, insert as L, mount_component as te, append as c, set_data as H, transition_in as ie, transition_out as le, detach as M, destroy_component as re, src_url_equal as I, action_destroyer as oe, listen as ne, destroy_each as X, run_all as se } from "../../../vendor/svelte/internal/index.js";
import "../../../shared-utils/tag.js";
import "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as ae } from "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../shared-utils/five/FivePuppet.js";
import me from "../../utils/px2rem.js";
import fe from "../Common/Shadow.js";
import { svelteResizeObserver as pe } from "../../../shared-utils/svelte/resizeObserver.js";
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
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
function de(i) {
  $(i, "svelte-1707m54", '@charset "UTF-8";.svelte-1707m54.svelte-1707m54{box-sizing:border-box}.marketing.svelte-1707m54.svelte-1707m54{transform:translateY(-100%)}.marketing.svelte-1707m54 .line.svelte-1707m54{position:absolute;height:1.875rem;width:0.0625rem;left:50%;transform:translateX(-50%);background-color:white;bottom:0;transform-origin:bottom;transition:all 500ms}.marketing.svelte-1707m54 .content.svelte-1707m54{position:relative;min-width:7.5rem;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;border-radius:0.25rem;top:-1.875rem;left:-1rem;padding:0.5rem 0rem 0.5625rem;transition-property:opacity, transform;transition-duration:500ms}.marketing.svelte-1707m54 .content .headerImage.svelte-1707m54{position:absolute;width:100%;top:0.25rem;transform:translateY(-100%);border-top-left-radius:0.25rem;border-top-right-radius:0.25rem}.title-wrapper.svelte-1707m54.svelte-1707m54{position:relative;width:100%;height:1.125rem}.title-wrapper.svelte-1707m54 .title.svelte-1707m54{border-radius:0.25rem;width:100%;padding-left:0.625rem;padding-right:0.625rem}.title-wrapper.svelte-1707m54 .title .text.svelte-1707m54{display:block;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:0.75rem;font-weight:bold;line-height:1.125rem}.footer.svelte-1707m54.svelte-1707m54{box-sizing:border-box;width:100%;padding:0.5rem 0.625rem 0;display:flex;justify-content:space-between;align-items:center}.footer.svelte-1707m54 .price-section.svelte-1707m54{flex-shrink:0;max-width:calc(100% - 1.875rem);overflow:hidden;white-space:nowrap}.footer.svelte-1707m54 .price-section .value.svelte-1707m54{font-size:0.875rem;line-height:1rem;font-weight:normal;font-family:TG-TYPE, PingFangSC, Segoe UI, Rototo, sans-serif;letter-spacing:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.footer.svelte-1707m54 .price-section .unit.svelte-1707m54{font-size:0.625rem;margin-left:0.125rem}.footer.svelte-1707m54 .action-section.svelte-1707m54{display:flex;align-items:center;height:0.875rem}.footer.svelte-1707m54 .action-section .highlight-text.svelte-1707m54{font-size:0.625rem;line-height:0.875rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:8.75rem}.footer.svelte-1707m54 .action-section .arrow.svelte-1707m54{display:flex;align-items:center;margin-left:0.25rem;flex-shrink:0;width:0.625rem}.footer.svelte-1707m54 .action-section .arrow svg.svelte-1707m54{width:0.375rem;height:0.625rem}.tags-wrapper.svelte-1707m54.svelte-1707m54{position:relative;overflow:hidden;height:1rem;margin-top:0.25rem}.tags-wrapper.svelte-1707m54 .tags.svelte-1707m54{position:relative;display:inline-flex;max-width:100%;flex-wrap:wrap;padding-left:0.625rem;padding-right:0.375rem}.tags-wrapper.svelte-1707m54 .tags .tag.svelte-1707m54{display:block;text-align:center;flex-shrink:0;flex-grow:0;font-size:0.625rem;height:1rem;line-height:1rem;margin-right:0.25rem;margin-bottom:0.25rem;padding:0 0.25rem;border-radius:0.125rem;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;box-sizing:border-box}.marketing.light.svelte-1707m54 .content.svelte-1707m54{background-color:white}.marketing.light.svelte-1707m54 .content .title-wrapper .title .text.svelte-1707m54{color:rgba(0, 0, 0, 0.8)}.marketing.light.svelte-1707m54 .content .tags-wrapper .tags .primary-tag.svelte-1707m54{background:rgba(234, 208, 154, 0.5);color:#946700}.marketing.light.svelte-1707m54 .content .tags-wrapper .tags .secondary-tag.svelte-1707m54{background:rgba(0, 0, 0, 0.06);color:rgba(0, 0, 0, 0.5)}.marketing.light.svelte-1707m54 .content .footer.svelte-1707m54{color:#946700;fill:#946700}.marketing.dark.svelte-1707m54 .content.svelte-1707m54{background-color:rgba(0, 0, 0, 0.5)}.marketing.dark.svelte-1707m54 .content .title-wrapper .title .text.svelte-1707m54{color:white}.marketing.dark.svelte-1707m54 .content .tags-wrapper .tags .primary-tag.svelte-1707m54{background:rgba(234, 208, 154, 0.5);color:white}.marketing.dark.svelte-1707m54 .content .tags-wrapper .tags .secondary-tag.svelte-1707m54{background:rgba(255, 255, 255, 0.15);color:rgba(255, 255, 255, 0.85)}.marketing.dark.svelte-1707m54 .content .footer.svelte-1707m54{color:#ead09a;fill:#ead09a}.marketing.unfolded.svelte-1707m54 .line.svelte-1707m54{transform:translateX(-50%) scale(1, 1);transition-timing-function:ease-out}.marketing.folded.svelte-1707m54 .line.svelte-1707m54{transform:translateX(-50%) scale(1, 0);transition-timing-function:ease-in}.marketing.unfolded.svelte-1707m54 .content.svelte-1707m54{opacity:1;transform:translateY(0);transition-timing-function:ease-out}.marketing.folded.svelte-1707m54 .content.svelte-1707m54{opacity:0;transform:translateY(0.425rem);transition-timing-function:ease-in}.tag.svelte-1707m54.svelte-1707m54,.text.svelte-1707m54.svelte-1707m54{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}');
}
function q(i, e, t) {
  const r = i.slice();
  return r[0] = e[t], r;
}
function x(i, e, t) {
  const r = i.slice();
  return r[0] = e[t], r;
}
function O(i) {
  let e, t;
  return {
    c() {
      e = _("img"), g(e, "class", "headerImage svelte-1707m54"), I(e.src, t = /*data*/
      i[1].headerPictureUrl) || g(e, "src", t), g(e, "alt", "");
    },
    m(r, o) {
      L(r, e, o);
    },
    p(r, o) {
      o & /*data*/
      2 && !I(e.src, t = /*data*/
      r[1].headerPictureUrl) && g(e, "src", t);
    },
    d(r) {
      r && M(e);
    }
  };
}
function j(i) {
  let e, t, r, o, a, l = (
    /*primaryTags*/
    i[4] || []
  ), n = [];
  for (let m = 0; m < l.length; m += 1)
    n[m] = E(x(i, l, m));
  let f = (
    /*secondaryTags*/
    i[3] || []
  ), d = [];
  for (let m = 0; m < f.length; m += 1)
    d[m] = G(q(i, f, m));
  return {
    c() {
      e = _("div"), t = _("div");
      for (let m = 0; m < n.length; m += 1)
        n[m].c();
      r = C();
      for (let m = 0; m < d.length; m += 1)
        d[m].c();
      g(t, "class", "tags svelte-1707m54"), g(e, "class", "tags-wrapper svelte-1707m54");
    },
    m(m, b) {
      L(m, e, b), c(e, t);
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(t, null);
      c(t, r);
      for (let s = 0; s < d.length; s += 1)
        d[s] && d[s].m(t, null);
      o || (a = [
        oe(pe.call(null, t)),
        ne(
          t,
          "clientHeight",
          /*clientHeight_handler*/
          i[18]
        )
      ], o = !0);
    },
    p(m, b) {
      if (b & /*minTagWidth, primaryTags*/
      16) {
        l = /*primaryTags*/
        m[4] || [];
        let s;
        for (s = 0; s < l.length; s += 1) {
          const T = x(m, l, s);
          n[s] ? n[s].p(T, b) : (n[s] = E(T), n[s].c(), n[s].m(t, r));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = l.length;
      }
      if (b & /*minTagWidth, secondaryTags*/
      8) {
        f = /*secondaryTags*/
        m[3] || [];
        let s;
        for (s = 0; s < f.length; s += 1) {
          const T = q(m, f, s);
          d[s] ? d[s].p(T, b) : (d[s] = G(T), d[s].c(), d[s].m(t, null));
        }
        for (; s < d.length; s += 1)
          d[s].d(1);
        d.length = f.length;
      }
    },
    d(m) {
      m && M(e), X(n, m), X(d, m), o = !1, se(a);
    }
  };
}
function E(i) {
  let e, t = (
    /*tag*/
    i[0] + ""
  ), r;
  return {
    c() {
      e = _("div"), r = W(t), g(e, "class", "tag primary-tag svelte-1707m54"), U(e, "min-width", R);
    },
    m(o, a) {
      L(o, e, a), c(e, r);
    },
    p(o, a) {
      a & /*primaryTags*/
      16 && t !== (t = /*tag*/
      o[0] + "") && H(r, t);
    },
    d(o) {
      o && M(e);
    }
  };
}
function G(i) {
  let e, t = (
    /*tag*/
    i[0] + ""
  ), r;
  return {
    c() {
      e = _("div"), r = W(t), g(e, "class", "tag secondary-tag svelte-1707m54"), U(e, "min-width", R);
    },
    m(o, a) {
      L(o, e, a), c(e, r);
    },
    p(o, a) {
      a & /*secondaryTags*/
      8 && t !== (t = /*tag*/
      o[0] + "") && H(r, t);
    },
    d(o) {
      o && M(e);
    }
  };
}
function N(i) {
  let e, t, r, o, a, l = (
    /*havePrice*/
    i[2] && Z(i)
  ), n = !/*havePrice*/
  i[2] && /*data*/
  i[1].highlightText && J(i);
  return {
    c() {
      e = _("div"), l && l.c(), t = C(), r = _("div"), n && n.c(), o = C(), a = _("span"), a.innerHTML = '<svg viewBox="0 0 6 9" class="svelte-1707m54"><g transform="translate(-3, -2)" fill-rule="nonzero" class="svelte-1707m54"><path d="M4.43868724,2.12056563 C4.28121824,1.95989074 4.02582143,1.95979988 3.86824251,2.1203627 C3.72498894,2.26632889 3.71189225,2.49481723 3.82900374,2.65587166 L6.57092402,5.92894326 C6.72651763,6.11470411 6.72651763,6.38529589 6.57092402,6.57105674 L3.86804348,9.79798499 C3.72488984,9.94405307 3.71194952,10.1725507 3.8291712,10.3335217 L3.86824251,10.3796373 C4.01149607,10.5256035 4.23559087,10.5387981 4.39346025,10.4192733 L4.43868724,10.3794344 L8.1144599,6.5985342 C8.30312347,6.40447482 8.30312347,6.09552518 8.1144599,5.9014658 L4.43868724,2.12056563 Z" class="svelte-1707m54"></path></g></svg>', g(a, "class", "arrow svelte-1707m54"), g(r, "class", "action-section svelte-1707m54"), g(e, "class", "footer svelte-1707m54");
    },
    m(f, d) {
      L(f, e, d), l && l.m(e, null), c(e, t), c(e, r), n && n.m(r, null), c(r, o), c(r, a);
    },
    p(f, d) {
      /*havePrice*/
      f[2] ? l ? l.p(f, d) : (l = Z(f), l.c(), l.m(e, t)) : l && (l.d(1), l = null), !/*havePrice*/
      f[2] && /*data*/
      f[1].highlightText ? n ? n.p(f, d) : (n = J(f), n.c(), n.m(r, o)) : n && (n.d(1), n = null);
    },
    d(f) {
      f && M(e), l && l.d(), n && n.d();
    }
  };
}
function Z(i) {
  let e, t, r = (
    /*data*/
    i[1].price.value + ""
  ), o, a, l = (
    /*data*/
    i[1].price.unit && A(i)
  );
  return {
    c() {
      e = _("div"), t = _("span"), o = W(r), a = C(), l && l.c(), g(t, "class", "value svelte-1707m54"), g(e, "class", "price-section svelte-1707m54");
    },
    m(n, f) {
      L(n, e, f), c(e, t), c(t, o), c(e, a), l && l.m(e, null);
    },
    p(n, f) {
      f & /*data*/
      2 && r !== (r = /*data*/
      n[1].price.value + "") && H(o, r), /*data*/
      n[1].price.unit ? l ? l.p(n, f) : (l = A(n), l.c(), l.m(e, null)) : l && (l.d(1), l = null);
    },
    d(n) {
      n && M(e), l && l.d();
    }
  };
}
function A(i) {
  let e, t = (
    /*data*/
    i[1].price.unit + ""
  ), r;
  return {
    c() {
      e = _("span"), r = W(t), g(e, "class", "unit svelte-1707m54");
    },
    m(o, a) {
      L(o, e, a), c(e, r);
    },
    p(o, a) {
      a & /*data*/
      2 && t !== (t = /*data*/
      o[1].price.unit + "") && H(r, t);
    },
    d(o) {
      o && M(e);
    }
  };
}
function J(i) {
  let e, t = (
    /*data*/
    i[1].highlightText + ""
  ), r;
  return {
    c() {
      e = _("span"), r = W(t), g(e, "class", "highlight-text svelte-1707m54");
    },
    m(o, a) {
      L(o, e, a), c(e, r);
    },
    p(o, a) {
      a & /*data*/
      2 && t !== (t = /*data*/
      o[1].highlightText + "") && H(r, t);
    },
    d(o) {
      o && M(e);
    }
  };
}
function ce(i) {
  let e, t, r, o, a, l, n, f, d, m, b = (
    /*data*/
    i[1].title + ""
  ), s, T, P, z, k;
  t = new fe({
    props: {
      visible: (
        /*unfolded*/
        i[5]
      ),
      outDelay: 500,
      left: 61,
      bottom: 87,
      blurRadius: 150,
      spreadRadius: 75
    }
  });
  let v = (
    /*data*/
    i[1].headerPictureUrl && O(i)
  ), h = (
    /*hasTags*/
    i[6] && j(i)
  ), u = (
    /*havePrice*/
    (i[2] || /*data*/
    i[1].highlightText) && N(i)
  );
  return {
    c() {
      e = _("div"), ee(t.$$.fragment), r = C(), o = _("div"), a = C(), l = _("div"), v && v.c(), n = C(), f = _("div"), d = _("div"), m = _("div"), s = W(b), T = C(), h && h.c(), P = C(), u && u.c(), g(o, "class", "line svelte-1707m54"), U(
        o,
        "transition-delay",
        /*unfolded*/
        i[5] ? (
          /*lineDelayUnfolded*/
          i[9] + "ms"
        ) : (
          /*lineDelayFolded*/
          i[8] + "ms"
        )
      ), g(m, "class", "text svelte-1707m54"), g(d, "class", "title svelte-1707m54"), g(f, "class", "title-wrapper svelte-1707m54"), g(l, "class", "content svelte-1707m54"), U(l, "max-width", me(
        /*maxWidth*/
        i[12]
      )), U(
        l,
        "transition-delay",
        /*unfolded*/
        i[5] ? (
          /*contentDelayUnfolded*/
          i[7] + "ms"
        ) : "0ms"
      ), g(e, "class", z = F(`marketing ${/*theme*/
      i[10]}`) + " svelte-1707m54"), D(
        e,
        "unfolded",
        /*unfolded*/
        i[5]
      ), D(
        e,
        "folded",
        /*folded*/
        i[11]
      );
    },
    m(p, y) {
      L(p, e, y), te(t, e, null), c(e, r), c(e, o), c(e, a), c(e, l), v && v.m(l, null), c(l, n), c(l, f), c(f, d), c(d, m), c(m, s), c(l, T), h && h.m(l, null), c(l, P), u && u.m(l, null), k = !0;
    },
    p(p, [y]) {
      const w = {};
      y & /*unfolded*/
      32 && (w.visible = /*unfolded*/
      p[5]), t.$set(w), y & /*unfolded, lineDelayUnfolded, lineDelayFolded*/
      800 && U(
        o,
        "transition-delay",
        /*unfolded*/
        p[5] ? (
          /*lineDelayUnfolded*/
          p[9] + "ms"
        ) : (
          /*lineDelayFolded*/
          p[8] + "ms"
        )
      ), /*data*/
      p[1].headerPictureUrl ? v ? v.p(p, y) : (v = O(p), v.c(), v.m(l, n)) : v && (v.d(1), v = null), (!k || y & /*data*/
      2) && b !== (b = /*data*/
      p[1].title + "") && H(s, b), /*hasTags*/
      p[6] ? h ? h.p(p, y) : (h = j(p), h.c(), h.m(l, P)) : h && (h.d(1), h = null), /*havePrice*/
      p[2] || /*data*/
      p[1].highlightText ? u ? u.p(p, y) : (u = N(p), u.c(), u.m(l, null)) : u && (u.d(1), u = null), y & /*unfolded, contentDelayUnfolded*/
      160 && U(
        l,
        "transition-delay",
        /*unfolded*/
        p[5] ? (
          /*contentDelayUnfolded*/
          p[7] + "ms"
        ) : "0ms"
      ), (!k || y & /*theme*/
      1024 && z !== (z = F(`marketing ${/*theme*/
      p[10]}`) + " svelte-1707m54")) && g(e, "class", z), (!k || y & /*theme, unfolded*/
      1056) && D(
        e,
        "unfolded",
        /*unfolded*/
        p[5]
      ), (!k || y & /*theme, folded*/
      3072) && D(
        e,
        "folded",
        /*folded*/
        p[11]
      );
    },
    i(p) {
      k || (ie(t.$$.fragment, p), k = !0);
    },
    o(p) {
      le(t.$$.fragment, p), k = !1;
    },
    d(p) {
      p && M(e), re(t), v && v.d(), h && h.d(), u && u.d();
    }
  };
}
const R = 40;
function ge(i, e, t) {
  let r, o, a, l, n, f, d, m, b, s, T, P, { tag: z } = e, k, v = (() => {
    var Y;
    const w = (Y = z.data.limitWidth) != null ? Y : !0;
    if (typeof w == "number")
      return w;
    if (w === !0)
      return 172;
  })(), h = 0, u = !1;
  function p(w) {
    Math.abs(k - w) > 5 && (t(14, k = w), setTimeout(
      () => {
        t(16, u = !1);
      },
      100
    ));
  }
  const y = (w) => p(w.detail);
  return i.$$set = (w) => {
    "tag" in w && t(0, z = w.tag);
  }, i.$$.update = () => {
    var w, Y, S, B;
    i.$$.dirty & /*tag*/
    1 && t(5, r = (Y = (w = z.state) == null ? void 0 : w.unfolded) != null ? Y : !1), i.$$.dirty & /*unfolded*/
    32 && t(11, o = !r), i.$$.dirty & /*tag*/
    1 && t(1, a = z.data), i.$$.dirty & /*data*/
    2 && t(2, l = ae((S = a.price) == null ? void 0 : S.value) && ((B = a.price) == null ? void 0 : B.value) !== ""), i.$$.dirty & /*tag*/
    1 && t(10, n = z.data.theme || "light"), i.$$.dirty & /*tagsCalculated, tagsOffsetHeight, maxTagsLength*/
    114688 && (!u || v && v > 0) && (t(15, h = Math.max(1, Math.floor(((v || 172) - 20) / R))), k !== void 0 && k > 40 && t(15, h = Math.max(1, h - 1)), t(16, u = !0)), i.$$.dirty & /*data, maxTagsLength*/
    32770 && t(4, f = (a.brandTags || []).filter(Boolean).slice(0, h)), i.$$.dirty & /*maxTagsLength, primaryTags*/
    32784 && t(17, d = Math.max(0, h - f.length)), i.$$.dirty & /*data, secondaryTagsLimit*/
    131074 && t(3, m = (a.tags || []).filter(Boolean).slice(0, d)), i.$$.dirty & /*primaryTags, secondaryTags*/
    24 && t(6, P = f.length > 0 || m.length > 0), i.$$.dirty & /*havePrice, data*/
    6 && (l || a.highlightText);
  }, t(9, b = 400), t(8, s = 180 + 500 - 500 - 40), t(7, T = 400 + 180), [
    z,
    a,
    l,
    m,
    f,
    r,
    P,
    T,
    s,
    b,
    n,
    o,
    v,
    p,
    k,
    h,
    u,
    d,
    y
  ];
}
class Dt extends K {
  constructor(e) {
    super(), Q(this, e, ge, ce, V, { tag: 0 }, de);
  }
}
export {
  Dt as default
};
