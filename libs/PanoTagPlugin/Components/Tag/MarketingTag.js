import { SvelteComponent as te, init as ie, safe_not_equal as le, append_styles as re, element as d, create_component as se, space as C, text as S, attr as q, set_style as L, null_to_empty as D, toggle_class as H, insert as y, mount_component as oe, append as g, set_data as P, transition_in as ne, transition_out as ae, detach as T, destroy_component as ce, src_url_equal as F, action_destroyer as me, listen as fe, destroy_each as O, run_all as pe } from "../../../vendor/svelte/internal/index.js";
import "../../../shared-utils/tag.js";
import "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "@realsee/five/line";
import { notNil as ge } from "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../shared-utils/five/FivePuppet.js";
import qe from "../../utils/px2rem.js";
import de from "../Common/Shadow.js";
import { svelteResizeObserver as ve } from "../../../shared-utils/svelte/resizeObserver.js";
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
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
function he(i) {
  re(i, "svelte-sezqcq", '@charset "UTF-8";.svelte-sezqcq.svelte-sezqcq{box-sizing:border-box}.marketing.svelte-sezqcq.svelte-sezqcq{transform:translateY(-100%)}.marketing.svelte-sezqcq .line.svelte-sezqcq{position:absolute;height:1.875rem;width:0.0625rem;left:50%;transform:translateX(-50%);background-color:white;bottom:0;transform-origin:bottom;transition:all 500ms}.marketing.svelte-sezqcq .content.svelte-sezqcq{position:relative;min-width:7.5rem;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;border-radius:0.25rem;top:-1.875rem;left:-1rem;padding:0.5rem 0rem 0.5625rem;transition-property:opacity, transform;transition-duration:500ms}.marketing.svelte-sezqcq .content .headerImage.svelte-sezqcq{position:absolute;width:100%;top:0.25rem;transform:translateY(-100%);border-top-left-radius:0.25rem;border-top-right-radius:0.25rem}.title-wrapper.svelte-sezqcq.svelte-sezqcq{position:relative;width:100%;height:1.125rem}.title-wrapper.svelte-sezqcq .title.svelte-sezqcq{border-radius:0.25rem;width:100%;padding-left:0.625rem;padding-right:0.625rem}.title-wrapper.svelte-sezqcq .title .text.svelte-sezqcq{display:block;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:0.75rem;font-weight:bold;line-height:1.125rem}.footer.svelte-sezqcq.svelte-sezqcq{position:relative;padding:0.5rem 0.625rem 0 0;width:100%;display:flex;align-items:center}.footer.svelte-sezqcq .goto-button.svelte-sezqcq{display:flex;align-self:flex-end;flex-wrap:wrap;align-items:center;overflow:hidden;height:0.875rem}.footer.svelte-sezqcq .goto-button .gap.svelte-sezqcq{height:100%;width:0.625rem}.footer.svelte-sezqcq .goto-button .text.svelte-sezqcq{display:block;height:100%;font-size:0.625rem}.footer.svelte-sezqcq .arrow-wrapper.svelte-sezqcq{height:0.875rem;display:flex;align-self:flex-end;flex-grow:0;flex-shrink:0;align-items:center;margin-left:0.25rem}.footer.svelte-sezqcq .arrow-wrapper svg.arrow.svelte-sezqcq{width:0.375rem;height:0.625rem}.footer.svelte-sezqcq .price.svelte-sezqcq{flex-shrink:0;margin-right:auto;white-space:nowrap;display:flex;align-items:baseline;margin-left:0.625rem}.footer.svelte-sezqcq .price .value.svelte-sezqcq{position:relative;font-size:0.875rem;line-height:1rem;font-family:TG-TYPE, PingFangSC, Segoe UI, Rototo, sans-serif;letter-spacing:0rem}.footer.svelte-sezqcq .price .unit.svelte-sezqcq{padding-left:0.125rem;font-size:0.625rem}.tags-wrapper.svelte-sezqcq.svelte-sezqcq{position:relative;overflow:hidden;height:1rem;margin-top:0.25rem}.tags-wrapper.svelte-sezqcq .tags.svelte-sezqcq{position:relative;display:inline-flex;max-width:100%;flex-wrap:wrap;padding-left:0.625rem;padding-right:0.375rem}.tags-wrapper.svelte-sezqcq .tags .tag.svelte-sezqcq{display:flex;align-items:center;justify-content:center;flex-shrink:0;flex-grow:0;font-size:0.625rem;height:1rem;margin-right:0.25rem;margin-bottom:0.625rem;padding:0 0.25rem;border-radius:0.125rem;max-width:100%;text-overflow:ellipsis;overflow:hidden}.marketing.light.svelte-sezqcq .content.svelte-sezqcq{background-color:white}.marketing.light.svelte-sezqcq .content .title-wrapper .title .text.svelte-sezqcq{color:rgba(0, 0, 0, 0.8)}.marketing.light.svelte-sezqcq .content .tags-wrapper .tags .primary-tag.svelte-sezqcq{background:rgba(234, 208, 154, 0.5);color:#946700}.marketing.light.svelte-sezqcq .content .tags-wrapper .tags .secondary-tag.svelte-sezqcq{background:rgba(0, 0, 0, 0.06);color:rgba(0, 0, 0, 0.5)}.marketing.light.svelte-sezqcq .content .footer.svelte-sezqcq{color:#946700;fill:#946700}.marketing.dark.svelte-sezqcq .content.svelte-sezqcq{background-color:rgba(0, 0, 0, 0.5)}.marketing.dark.svelte-sezqcq .content .title-wrapper .title .text.svelte-sezqcq{color:white}.marketing.dark.svelte-sezqcq .content .tags-wrapper .tags .primary-tag.svelte-sezqcq{background:rgba(234, 208, 154, 0.5);color:white}.marketing.dark.svelte-sezqcq .content .tags-wrapper .tags .secondary-tag.svelte-sezqcq{background:rgba(255, 255, 255, 0.15);color:rgba(255, 255, 255, 0.85)}.marketing.dark.svelte-sezqcq .content .footer.svelte-sezqcq{color:#ead09a;fill:#ead09a}.marketing.unfolded.svelte-sezqcq .line.svelte-sezqcq{transform:translateX(-50%) scale(1, 1)}.marketing.folded.svelte-sezqcq .line.svelte-sezqcq{transform:translateX(-50%) scale(1, 0);transition-timing-function:ease-in}.marketing.unfolded.svelte-sezqcq .content.svelte-sezqcq{opacity:1}.marketing.folded.svelte-sezqcq .content.svelte-sezqcq{opacity:0;transform:translateY(0.425rem);transition-timing-function:ease-in}');
}
function j(i, e, t) {
  const r = i.slice();
  return r[0] = e[t], r;
}
function E(i, e, t) {
  const r = i.slice();
  return r[0] = e[t], r;
}
function N(i) {
  let e, t;
  return {
    c() {
      e = d("img"), q(e, "class", "headerImage svelte-sezqcq"), F(e.src, t = /*data*/
      i[3].headerPictureUrl) || q(e, "src", t), q(e, "alt", "");
    },
    m(r, l) {
      y(r, e, l);
    },
    p(r, l) {
      l & /*data*/
      8 && !F(e.src, t = /*data*/
      r[3].headerPictureUrl) && q(e, "src", t);
    },
    d(r) {
      r && T(e);
    }
  };
}
function Z(i) {
  let e, t, r, l, o, s = (
    /*primaryTags*/
    i[2] || []
  ), c = [];
  for (let a = 0; a < s.length; a += 1)
    c[a] = A(E(i, s, a));
  let f = (
    /*secondaryTags*/
    i[5] || []
  ), m = [];
  for (let a = 0; a < f.length; a += 1)
    m[a] = J(j(i, f, a));
  return {
    c() {
      e = d("div"), t = d("div");
      for (let a = 0; a < c.length; a += 1)
        c[a].c();
      r = C();
      for (let a = 0; a < m.length; a += 1)
        m[a].c();
      q(t, "class", "tags svelte-sezqcq"), q(e, "class", "tags-wrapper svelte-sezqcq");
    },
    m(a, v) {
      y(a, e, v), g(e, t);
      for (let n = 0; n < c.length; n += 1)
        c[n] && c[n].m(t, null);
      g(t, r);
      for (let n = 0; n < m.length; n += 1)
        m[n] && m[n].m(t, null);
      l || (o = [
        me(ve.call(null, t)),
        fe(
          t,
          "clientHeight",
          /*clientHeight_handler*/
          i[11]
        )
      ], l = !0);
    },
    p(a, v) {
      if (v & /*minTagWidth, primaryTags*/
      4) {
        s = /*primaryTags*/
        a[2] || [];
        let n;
        for (n = 0; n < s.length; n += 1) {
          const k = E(a, s, n);
          c[n] ? c[n].p(k, v) : (c[n] = A(k), c[n].c(), c[n].m(t, r));
        }
        for (; n < c.length; n += 1)
          c[n].d(1);
        c.length = s.length;
      }
      if (v & /*minTagWidth, secondaryTags*/
      32) {
        f = /*secondaryTags*/
        a[5] || [];
        let n;
        for (n = 0; n < f.length; n += 1) {
          const k = j(a, f, n);
          m[n] ? m[n].p(k, v) : (m[n] = J(k), m[n].c(), m[n].m(t, null));
        }
        for (; n < m.length; n += 1)
          m[n].d(1);
        m.length = f.length;
      }
    },
    d(a) {
      a && T(e), O(c, a), O(m, a), l = !1, pe(o);
    }
  };
}
function A(i) {
  let e, t = (
    /*tag*/
    i[0] + ""
  ), r;
  return {
    c() {
      e = d("div"), r = S(t), q(e, "class", "tag primary-tag svelte-sezqcq"), L(e, "min-width", B);
    },
    m(l, o) {
      y(l, e, o), g(e, r);
    },
    p(l, o) {
      o & /*primaryTags*/
      4 && t !== (t = /*tag*/
      l[0] + "") && P(r, t);
    },
    d(l) {
      l && T(e);
    }
  };
}
function J(i) {
  let e, t = (
    /*tag*/
    i[0] + ""
  ), r;
  return {
    c() {
      e = d("div"), r = S(t), q(e, "class", "tag secondary-tag svelte-sezqcq"), L(e, "min-width", B);
    },
    m(l, o) {
      y(l, e, o), g(e, r);
    },
    p(l, o) {
      o & /*secondaryTags*/
      32 && t !== (t = /*tag*/
      l[0] + "") && P(r, t);
    },
    d(l) {
      l && T(e);
    }
  };
}
function K(i) {
  let e, t, r = (
    /*havePrice*/
    i[7] && Q(i)
  ), l = (
    /*data*/
    i[3].highlightText && x(i)
  );
  return {
    c() {
      e = d("div"), r && r.c(), t = C(), l && l.c(), q(e, "class", "footer svelte-sezqcq");
    },
    m(o, s) {
      y(o, e, s), r && r.m(e, null), g(e, t), l && l.m(e, null);
    },
    p(o, s) {
      /*havePrice*/
      o[7] ? r ? r.p(o, s) : (r = Q(o), r.c(), r.m(e, t)) : r && (r.d(1), r = null), /*data*/
      o[3].highlightText ? l ? l.p(o, s) : (l = x(o), l.c(), l.m(e, null)) : l && (l.d(1), l = null);
    },
    d(o) {
      o && T(e), r && r.d(), l && l.d();
    }
  };
}
function Q(i) {
  let e, t, r = (
    /*data*/
    i[3].price.value + ""
  ), l, o, s = (
    /*data*/
    i[3].price.unit && V(i)
  );
  return {
    c() {
      e = d("div"), t = d("span"), l = S(r), o = C(), s && s.c(), q(t, "class", "value svelte-sezqcq"), q(e, "class", "price svelte-sezqcq");
    },
    m(c, f) {
      y(c, e, f), g(e, t), g(t, l), g(e, o), s && s.m(e, null);
    },
    p(c, f) {
      f & /*data*/
      8 && r !== (r = /*data*/
      c[3].price.value + "") && P(l, r), /*data*/
      c[3].price.unit ? s ? s.p(c, f) : (s = V(c), s.c(), s.m(e, null)) : s && (s.d(1), s = null);
    },
    d(c) {
      c && T(e), s && s.d();
    }
  };
}
function V(i) {
  let e, t = (
    /*data*/
    i[3].price.unit + ""
  ), r;
  return {
    c() {
      e = d("span"), r = S(t), q(e, "class", "unit svelte-sezqcq");
    },
    m(l, o) {
      y(l, e, o), g(e, r);
    },
    p(l, o) {
      o & /*data*/
      8 && t !== (t = /*data*/
      l[3].price.unit + "") && P(r, t);
    },
    d(l) {
      l && T(e);
    }
  };
}
function x(i) {
  let e, t, r, l, o = (
    /*data*/
    i[3].highlightText + ""
  ), s, c, f;
  return {
    c() {
      e = d("div"), t = d("div"), r = C(), l = d("span"), s = S(o), c = C(), f = d("div"), f.innerHTML = '<svg class="arrow svelte-sezqcq" viewBox="0 0 6 9"><g transform="translate(-3, -2)" fill-rule="nonzero" class="svelte-sezqcq"><path d="M4.43868724,2.12056563 C4.28121824,1.95989074 4.02582143,1.95979988 3.86824251,2.1203627 C3.72498894,2.26632889 3.71189225,2.49481723 3.82900374,2.65587166 L6.57092402,5.92894326 C6.72651763,6.11470411 6.72651763,6.38529589 6.57092402,6.57105674 L3.86804348,9.79798499 C3.72488984,9.94405307 3.71194952,10.1725507 3.8291712,10.3335217 L3.86824251,10.3796373 C4.01149607,10.5256035 4.23559087,10.5387981 4.39346025,10.4192733 L4.43868724,10.3794344 L8.1144599,6.5985342 C8.30312347,6.40447482 8.30312347,6.09552518 8.1144599,5.9014658 L4.43868724,2.12056563 Z" class="svelte-sezqcq"></path></g></svg>', q(t, "class", "gap svelte-sezqcq"), q(l, "class", "text svelte-sezqcq"), q(e, "class", "goto-button goto-icon svelte-sezqcq"), q(f, "class", "arrow-wrapper svelte-sezqcq");
    },
    m(m, a) {
      y(m, e, a), g(e, t), g(e, r), g(e, l), g(l, s), y(m, c, a), y(m, f, a);
    },
    p(m, a) {
      a & /*data*/
      8 && o !== (o = /*data*/
      m[3].highlightText + "") && P(s, o);
    },
    d(m) {
      m && T(e), m && T(c), m && T(f);
    }
  };
}
function ue(i) {
  var W, G;
  let e, t, r, l, o, s, c, f, m, a, v = (
    /*data*/
    i[3].title + ""
  ), n, k, U, _, w;
  t = new de({
    props: {
      visible: (
        /*unfolded*/
        i[4]
      ),
      outDelay: 500,
      left: 61,
      bottom: 87,
      blurRadius: 150,
      spreadRadius: 75
    }
  });
  let h = (
    /*data*/
    i[3].headerPictureUrl && N(i)
  ), u = (
    /*primaryTags*/
    ((W = i[2].length) != null ? W : 0) + /*secondaryTags*/
    ((G = i[5].length) != null ? G : 0) > 0 && Z(i)
  ), z = (
    /*havePrice*/
    (i[7] || /*data*/
    i[3].highlightText) && K(i)
  );
  return {
    c() {
      e = d("div"), se(t.$$.fragment), r = C(), l = d("div"), o = C(), s = d("div"), h && h.c(), c = C(), f = d("div"), m = d("div"), a = d("div"), n = S(v), k = C(), u && u.c(), U = C(), z && z.c(), q(l, "class", "line svelte-sezqcq"), L(
        l,
        "transition-delay",
        /*unfolded*/
        i[4] ? R + "ms" : Y + ee - $ - 40 + "ms"
      ), q(a, "class", "text svelte-sezqcq"), q(m, "class", "title svelte-sezqcq"), q(f, "class", "title-wrapper svelte-sezqcq"), q(s, "class", "content svelte-sezqcq"), L(s, "max-width", qe(
        /*maxWidth*/
        i[9]
      )), L(
        s,
        "transition-delay",
        /*unfolded*/
        i[4] ? R + Y + "ms" : "0ms"
      ), q(e, "class", _ = D(`marketing ${/*theme*/
      i[6]}`) + " svelte-sezqcq"), H(
        e,
        "unfolded",
        /*unfolded*/
        i[4]
      ), H(
        e,
        "folded",
        /*folded*/
        i[8]
      );
    },
    m(p, b) {
      y(p, e, b), oe(t, e, null), g(e, r), g(e, l), g(e, o), g(e, s), h && h.m(s, null), g(s, c), g(s, f), g(f, m), g(m, a), g(a, n), g(s, k), u && u.m(s, null), g(s, U), z && z.m(s, null), w = !0;
    },
    p(p, [b]) {
      var M, X;
      const I = {};
      b & /*unfolded*/
      16 && (I.visible = /*unfolded*/
      p[4]), t.$set(I), b & /*unfolded*/
      16 && L(
        l,
        "transition-delay",
        /*unfolded*/
        p[4] ? R + "ms" : Y + ee - $ - 40 + "ms"
      ), /*data*/
      p[3].headerPictureUrl ? h ? h.p(p, b) : (h = N(p), h.c(), h.m(s, c)) : h && (h.d(1), h = null), (!w || b & /*data*/
      8) && v !== (v = /*data*/
      p[3].title + "") && P(n, v), /*primaryTags*/
      ((M = p[2].length) != null ? M : 0) + /*secondaryTags*/
      ((X = p[5].length) != null ? X : 0) > 0 ? u ? u.p(p, b) : (u = Z(p), u.c(), u.m(s, U)) : u && (u.d(1), u = null), /*havePrice*/
      p[7] || /*data*/
      p[3].highlightText ? z ? z.p(p, b) : (z = K(p), z.c(), z.m(s, null)) : z && (z.d(1), z = null), b & /*unfolded*/
      16 && L(
        s,
        "transition-delay",
        /*unfolded*/
        p[4] ? R + Y + "ms" : "0ms"
      ), (!w || b & /*theme*/
      64 && _ !== (_ = D(`marketing ${/*theme*/
      p[6]}`) + " svelte-sezqcq")) && q(e, "class", _), (!w || b & /*theme, unfolded*/
      80) && H(
        e,
        "unfolded",
        /*unfolded*/
        p[4]
      ), (!w || b & /*theme, folded*/
      320) && H(
        e,
        "folded",
        /*folded*/
        p[8]
      );
    },
    i(p) {
      w || (ne(t.$$.fragment, p), w = !0);
    },
    o(p) {
      ae(t.$$.fragment, p), w = !1;
    },
    d(p) {
      p && T(e), ce(t), h && h.d(), u && u.d(), z && z.d();
    }
  };
}
const B = 40, R = 400, $ = 500, Y = 180, ee = 500;
function ze(i, e, t) {
  let r, l, o, s, c, f, m, a, { tag: v } = e, n, k = (() => {
    var w;
    const _ = (w = v.data.limitWidth) != null ? w : !0;
    if (typeof _ == "number")
      return _;
    if (_ === !0)
      return 172;
  })();
  const U = (_) => {
    t(1, n = _.detail);
  };
  return i.$$set = (_) => {
    "tag" in _ && t(0, v = _.tag);
  }, i.$$.update = () => {
    var _, w, h, u, z, W;
    i.$$.dirty & /*tag*/
    1 && t(4, r = (w = (_ = v.state) == null ? void 0 : _.unfolded) != null ? w : !1), i.$$.dirty & /*unfolded*/
    16 && t(8, l = !r), i.$$.dirty & /*tag*/
    1 && t(3, o = v.data), i.$$.dirty & /*data*/
    8 && t(7, s = ge((h = o.price) == null ? void 0 : h.value) && ((u = o.price) == null ? void 0 : u.value) !== ""), i.$$.dirty & /*tag*/
    1 && t(6, c = v.data.theme || "light"), i.$$.dirty & /*tagsOffsetHeight, maxTagsLength*/
    1026 && n > 40 && t(10, f = f - 1), i.$$.dirty & /*data, maxTagsLength*/
    1032 && t(2, m = ((z = o.brandTags) == null ? void 0 : z.slice(0, f).filter(Boolean)) || []), i.$$.dirty & /*data, maxTagsLength, primaryTags*/
    1036 && t(5, a = ((W = o.tags) == null ? void 0 : W.slice(0, f - m.length).filter(Boolean)) || []);
  }, t(10, f = (k - 20) / B), [
    v,
    n,
    m,
    o,
    r,
    a,
    c,
    s,
    l,
    k,
    f,
    U
  ];
}
class Ut extends te {
  constructor(e) {
    super(), ie(this, e, ze, ue, le, { tag: 0 }, he);
  }
}
export {
  Ut as default
};
