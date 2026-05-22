import { SvelteComponent as ve, init as ce, safe_not_equal as de, append_styles as ge, element as h, create_component as se, space as I, text as R, attr as v, set_style as z, null_to_empty as q, toggle_class as H, insert as P, mount_component as pe, append as c, set_data as D, transition_in as G, transition_out as j, check_outros as be, detach as U, destroy_component as me, src_url_equal as A, action_destroyer as he, listen as ke, destroy_each as K, run_all as ue, group_outros as we, noop as fe } from "../../../vendor/svelte/internal/index.js";
import "../../../shared-utils/tag.js";
import "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as x } from "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../shared-utils/three/blink.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../vendor/earcut/src/earcut.js";
import "../../../shared-utils/five/FivePuppet.js";
import _e from "../../utils/px2rem.js";
import ye from "../Common/Shadow.js";
import { svelteResizeObserver as Te } from "../../../shared-utils/svelte/resizeObserver.js";
import { MARKETING_MORE_ICON as Me, MARKETING_LIGHT_MORE_ICON as Pe } from "./Assets/marketingIcon.js";
import Ue from "../Common/MediaItem.js";
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
import "../../../shared-utils/five/getFiveFromParentChain.js";
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
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "../../Assets/Icon.js";
function Ce(i) {
  ge(i, "svelte-biv7k0", '@charset "UTF-8";.svelte-biv7k0.svelte-biv7k0{box-sizing:border-box}.marketing.svelte-biv7k0.svelte-biv7k0{transform:translateY(-100%)}.marketing.svelte-biv7k0 .line.svelte-biv7k0{position:absolute;height:1.875rem;width:0.0625rem;left:50%;transform:translateX(-50%);background-color:white;bottom:0;transform-origin:bottom;transition:all 500ms}.marketing.svelte-biv7k0 .content.svelte-biv7k0{position:relative;min-width:7.5rem;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;border-radius:0.375rem;top:-1.875rem;left:-1rem;transition-property:opacity, transform;transition-duration:500ms}.marketing.svelte-biv7k0 .content .headerImage.svelte-biv7k0{width:100%;position:absolute;left:0;top:0;transform:translateY(-100%);border-top-left-radius:0.375rem;border-top-right-radius:0.375rem}.marketing.svelte-biv7k0 .content .content-wrapper.svelte-biv7k0{width:100%;padding:1.25rem}.title-wrapper.svelte-biv7k0.svelte-biv7k0{position:relative;width:100%}.title-wrapper.svelte-biv7k0 .title.svelte-biv7k0{border-radius:0.25rem;width:100%}.title-wrapper.svelte-biv7k0 .title .text.svelte-biv7k0{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:normal;word-break:break-word;overflow-wrap:break-word;hyphens:auto;-webkit-hyphens:auto;letter-spacing:0;font-size:1rem;font-weight:600;line-height:1.375rem}.price-wrapper.svelte-biv7k0.svelte-biv7k0{box-sizing:border-box;width:100%;margin-top:0.5rem;display:flex;justify-content:space-between;align-items:center}.price-wrapper.svelte-biv7k0 .price-section.svelte-biv7k0{flex-shrink:0;overflow:hidden;white-space:nowrap}.price-wrapper.svelte-biv7k0 .price-section .value.svelte-biv7k0{font-size:1.25rem;font-weight:700;line-height:1.5rem;font-family:DINAlternate-Bold TG-TYPE, PingFangSC, Segoe UI, Rototo, sans-serif;letter-spacing:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.price-wrapper.svelte-biv7k0 .price-section .unit.svelte-biv7k0{font-size:1.25rem;font-weight:700;line-height:1.5rem;font-family:DINAlternate-Bold TG-TYPE, PingFangSC, Segoe UI, Rototo, sans-serif !important;letter-spacing:0}.price-wrapper.svelte-biv7k0 .action-section.svelte-biv7k0{display:flex;align-items:center;height:1.125rem}.price-wrapper.svelte-biv7k0 .action-section .highlight-text.svelte-biv7k0{font-size:0.75rem;line-height:1.125rem;font-weight:400;letter-spacing:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:8.75rem}.tags-wrapper.svelte-biv7k0.svelte-biv7k0{position:relative;overflow:hidden;margin-top:0.3125rem}.tags-wrapper.svelte-biv7k0 .tags.svelte-biv7k0{position:relative;display:inline-flex;max-width:100%;flex-wrap:wrap}.tags-wrapper.svelte-biv7k0 .tags .tag.svelte-biv7k0{display:block;text-align:center;flex-shrink:0;flex-grow:0;font-size:0.75rem;font-weight:400;height:1.125rem;line-height:1.125rem;margin-right:0.25rem;margin-bottom:0.25rem;padding:0 0.25rem;border-radius:0.125rem;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;box-sizing:border-box}.media-wrapper.svelte-biv7k0.svelte-biv7k0{margin-top:0.375rem;width:100%;aspect-ratio:16/9;border-radius:0.25rem;overflow:hidden}.description.svelte-biv7k0.svelte-biv7k0{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;line-clamp:4;width:100%;overflow:hidden;text-overflow:ellipsis;word-break:break-word;overflow-wrap:break-word;hyphens:auto;-webkit-hyphens:auto;white-space:normal;margin-top:0.25rem;font-size:0.875rem;font-weight:400;line-height:1.25rem;letter-spacing:0}.more-share-wrapper.svelte-biv7k0.svelte-biv7k0{margin-top:0.75rem;display:block;width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-between}.more-share-wrapper.svelte-biv7k0 .more-text.svelte-biv7k0{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;height:1.25rem;font-size:0.875rem;font-weight:500;line-height:1.25rem;letter-spacing:0}.more-share-wrapper.svelte-biv7k0 .more-text .more-icon.svelte-biv7k0{margin-left:0.125rem;width:0.875rem;height:0.875rem}.marketing.light.svelte-biv7k0 .content.svelte-biv7k0{background-color:white}.marketing.light.svelte-biv7k0 .content .title-wrapper .title .text.svelte-biv7k0{color:rgba(0, 0, 0, 0.8)}.marketing.light.svelte-biv7k0 .content .tags-wrapper .tags .primary-tag.svelte-biv7k0{background:rgba(234, 208, 154, 0.5);color:#946700}.marketing.light.svelte-biv7k0 .content .tags-wrapper .tags .secondary-tag.svelte-biv7k0{background:rgba(0, 0, 0, 0.06);color:rgba(0, 0, 0, 0.5)}.marketing.light.svelte-biv7k0 .content .description.svelte-biv7k0{color:#000}.marketing.light.svelte-biv7k0 .content .price-wrapper.svelte-biv7k0{color:#ae7900}.marketing.light.svelte-biv7k0 .content .more-share-wrapper .more-text.svelte-biv7k0{font-family:PingFangSC-Medium;color:rgba(0, 0, 0, 0.8509803922)}.marketing.dark.svelte-biv7k0 .content.svelte-biv7k0{background-color:rgba(0, 0, 0, 0.75)}.marketing.dark.svelte-biv7k0 .content .title-wrapper .title .text.svelte-biv7k0{color:white}.marketing.dark.svelte-biv7k0 .content .tags-wrapper .tags .primary-tag.svelte-biv7k0{background:rgba(234, 208, 154, 0.5);color:white}.marketing.dark.svelte-biv7k0 .content .tags-wrapper .tags .secondary-tag.svelte-biv7k0{background:rgba(255, 255, 255, 0.15);color:rgba(255, 255, 255, 0.85)}.marketing.dark.svelte-biv7k0 .content .description.svelte-biv7k0{color:#fff}.marketing.dark.svelte-biv7k0 .content .price-wrapper.svelte-biv7k0{color:#ead09a;fill:#ead09a}.marketing.dark.svelte-biv7k0 .content .more-share-wrapper .more-text.svelte-biv7k0{font-family:PingFangSC-Medium;color:#fff}.marketing.unfolded.svelte-biv7k0 .line.svelte-biv7k0{transform:translateX(-50%) scale(1, 1);transition-timing-function:ease-out}.marketing.folded.svelte-biv7k0 .line.svelte-biv7k0{transform:translateX(-50%) scale(1, 0);transition-timing-function:ease-in}.marketing.unfolded.svelte-biv7k0 .content.svelte-biv7k0{opacity:1;transform:translateY(0);transition-timing-function:ease-out}.marketing.folded.svelte-biv7k0 .content.svelte-biv7k0{opacity:0;transform:translateY(0.425rem);transition-timing-function:ease-in}.tag.svelte-biv7k0.svelte-biv7k0,.text.svelte-biv7k0.svelte-biv7k0{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}');
}
function J(i, e, t) {
  const l = i.slice();
  return l[0] = e[t], l;
}
function Q(i, e, t) {
  const l = i.slice();
  return l[0] = e[t], l;
}
function V(i) {
  let e, t;
  return {
    c() {
      e = h("img"), v(e, "class", "headerImage svelte-biv7k0"), A(e.src, t = /*data*/
      i[1].headerPictureUrl) || v(e, "src", t), v(e, "alt", "");
    },
    m(l, r) {
      P(l, e, r);
    },
    p(l, r) {
      r & /*data*/
      2 && !A(e.src, t = /*data*/
      l[1].headerPictureUrl) && v(e, "src", t);
    },
    d(l) {
      l && U(e);
    }
  };
}
function Z(i) {
  let e, t, l, r, n, o = (
    /*primaryTags*/
    i[4] || []
  ), s = [];
  for (let f = 0; f < o.length; f += 1)
    s[f] = $(Q(i, o, f));
  let p = (
    /*secondaryTags*/
    i[3] || []
  ), d = [];
  for (let f = 0; f < p.length; f += 1)
    d[f] = ee(J(i, p, f));
  return {
    c() {
      e = h("div"), t = h("div");
      for (let f = 0; f < s.length; f += 1)
        s[f].c();
      l = I();
      for (let f = 0; f < d.length; f += 1)
        d[f].c();
      v(t, "class", "tags svelte-biv7k0"), v(e, "class", "tags-wrapper svelte-biv7k0");
    },
    m(f, T) {
      P(f, e, T), c(e, t);
      for (let m = 0; m < s.length; m += 1)
        s[m] && s[m].m(t, null);
      c(t, l);
      for (let m = 0; m < d.length; m += 1)
        d[m] && d[m].m(t, null);
      r || (n = [
        he(Te.call(null, t)),
        ke(
          t,
          "clientHeight",
          /*clientHeight_handler*/
          i[23]
        )
      ], r = !0);
    },
    p(f, T) {
      if (T & /*minTagWidth, primaryTags*/
      16) {
        o = /*primaryTags*/
        f[4] || [];
        let m;
        for (m = 0; m < o.length; m += 1) {
          const C = Q(f, o, m);
          s[m] ? s[m].p(C, T) : (s[m] = $(C), s[m].c(), s[m].m(t, l));
        }
        for (; m < s.length; m += 1)
          s[m].d(1);
        s.length = o.length;
      }
      if (T & /*minTagWidth, secondaryTags*/
      8) {
        p = /*secondaryTags*/
        f[3] || [];
        let m;
        for (m = 0; m < p.length; m += 1) {
          const C = J(f, p, m);
          d[m] ? d[m].p(C, T) : (d[m] = ee(C), d[m].c(), d[m].m(t, null));
        }
        for (; m < d.length; m += 1)
          d[m].d(1);
        d.length = p.length;
      }
    },
    d(f) {
      f && U(e), K(s, f), K(d, f), r = !1, ue(n);
    }
  };
}
function $(i) {
  let e, t = (
    /*tag*/
    i[0] + ""
  ), l;
  return {
    c() {
      e = h("div"), l = R(t), v(e, "class", "tag primary-tag svelte-biv7k0"), z(e, "min-width", B);
    },
    m(r, n) {
      P(r, e, n), c(e, l);
    },
    p(r, n) {
      n & /*primaryTags*/
      16 && t !== (t = /*tag*/
      r[0] + "") && D(l, t);
    },
    d(r) {
      r && U(e);
    }
  };
}
function ee(i) {
  let e, t = (
    /*tag*/
    i[0] + ""
  ), l;
  return {
    c() {
      e = h("div"), l = R(t), v(e, "class", "tag secondary-tag svelte-biv7k0"), z(e, "min-width", B);
    },
    m(r, n) {
      P(r, e, n), c(e, l);
    },
    p(r, n) {
      n & /*secondaryTags*/
      8 && t !== (t = /*tag*/
      r[0] + "") && D(l, t);
    },
    d(r) {
      r && U(e);
    }
  };
}
function te(i) {
  let e, t, l;
  return t = new Ue({
    props: {
      media: (
        /*mediaData*/
        i[14][0]
      ),
      tag: (
        /*tag*/
        i[0]
      ),
      objectFit: "cover"
    }
  }), {
    c() {
      e = h("div"), se(t.$$.fragment), v(e, "class", "media-wrapper svelte-biv7k0");
    },
    m(r, n) {
      P(r, e, n), pe(t, e, null), l = !0;
    },
    p(r, n) {
      const o = {};
      n & /*mediaData*/
      16384 && (o.media = /*mediaData*/
      r[14][0]), n & /*tag*/
      1 && (o.tag = /*tag*/
      r[0]), t.$set(o);
    },
    i(r) {
      l || (G(t.$$.fragment, r), l = !0);
    },
    o(r) {
      j(t.$$.fragment, r), l = !1;
    },
    d(r) {
      r && U(e), me(t);
    }
  };
}
function ie(i) {
  let e, t = (
    /*data*/
    i[1].description + ""
  ), l;
  return {
    c() {
      e = h("div"), l = R(t), v(e, "class", "description svelte-biv7k0");
    },
    m(r, n) {
      P(r, e, n), c(e, l);
    },
    p(r, n) {
      n & /*data*/
      2 && t !== (t = /*data*/
      r[1].description + "") && D(l, t);
    },
    d(r) {
      r && U(e);
    }
  };
}
function re(i) {
  let e, t, l, r = (
    /*havePrice*/
    i[2] && le(i)
  ), n = !/*havePrice*/
  i[2] && /*data*/
  i[1].highlightText && ne(i);
  return {
    c() {
      e = h("div"), r && r.c(), t = I(), l = h("div"), n && n.c(), v(l, "class", "action-section svelte-biv7k0"), v(e, "class", "price-wrapper svelte-biv7k0");
    },
    m(o, s) {
      P(o, e, s), r && r.m(e, null), c(e, t), c(e, l), n && n.m(l, null);
    },
    p(o, s) {
      /*havePrice*/
      o[2] ? r ? r.p(o, s) : (r = le(o), r.c(), r.m(e, t)) : r && (r.d(1), r = null), !/*havePrice*/
      o[2] && /*data*/
      o[1].highlightText ? n ? n.p(o, s) : (n = ne(o), n.c(), n.m(l, null)) : n && (n.d(1), n = null);
    },
    d(o) {
      o && U(e), r && r.d(), n && n.d();
    }
  };
}
function le(i) {
  let e, t, l = (
    /*data*/
    i[1].price.value + ""
  ), r, n, o = (
    /*data*/
    i[1].price.unit && oe(i)
  );
  return {
    c() {
      e = h("div"), t = h("span"), r = R(l), n = I(), o && o.c(), v(t, "class", "value svelte-biv7k0"), v(e, "class", "price-section svelte-biv7k0");
    },
    m(s, p) {
      P(s, e, p), c(e, t), c(t, r), c(e, n), o && o.m(e, null);
    },
    p(s, p) {
      p & /*data*/
      2 && l !== (l = /*data*/
      s[1].price.value + "") && D(r, l), /*data*/
      s[1].price.unit ? o ? o.p(s, p) : (o = oe(s), o.c(), o.m(e, null)) : o && (o.d(1), o = null);
    },
    d(s) {
      s && U(e), o && o.d();
    }
  };
}
function oe(i) {
  let e, t = (
    /*data*/
    i[1].price.unit + ""
  ), l;
  return {
    c() {
      e = h("span"), l = R(t), v(e, "class", "unit svelte-biv7k0");
    },
    m(r, n) {
      P(r, e, n), c(e, l);
    },
    p(r, n) {
      n & /*data*/
      2 && t !== (t = /*data*/
      r[1].price.unit + "") && D(l, t);
    },
    d(r) {
      r && U(e);
    }
  };
}
function ne(i) {
  let e, t = (
    /*data*/
    i[1].highlightText + ""
  ), l;
  return {
    c() {
      e = h("span"), l = R(t), v(e, "class", "highlight-text svelte-biv7k0");
    },
    m(r, n) {
      P(r, e, n), c(e, l);
    },
    p(r, n) {
      n & /*data*/
      2 && t !== (t = /*data*/
      r[1].highlightText + "") && D(l, t);
    },
    d(r) {
      r && U(e);
    }
  };
}
function ae(i) {
  let e, t, l, r;
  function n(p, d) {
    return (
      /*isLight*/
      p[15] ? Ie : ze
    );
  }
  let o = n(i), s = o(i);
  return {
    c() {
      e = h("div"), t = h("div"), l = R(
        /*viewMoreText*/
        i[7]
      ), r = I(), s.c(), v(t, "class", "more-text svelte-biv7k0"), v(e, "class", "more-share-wrapper svelte-biv7k0");
    },
    m(p, d) {
      P(p, e, d), c(e, t), c(t, l), c(t, r), s.m(t, null);
    },
    p(p, d) {
      d & /*viewMoreText*/
      128 && D(
        l,
        /*viewMoreText*/
        p[7]
      ), o === (o = n(p)) && s ? s.p(p, d) : (s.d(1), s = o(p), s && (s.c(), s.m(t, null)));
    },
    d(p) {
      p && U(e), s.d();
    }
  };
}
function ze(i) {
  let e, t;
  return {
    c() {
      e = h("img"), v(e, "class", "more-icon svelte-biv7k0"), A(e.src, t = Me) || v(e, "src", t), v(e, "alt", "查看更多");
    },
    m(l, r) {
      P(l, e, r);
    },
    p: fe,
    d(l) {
      l && U(e);
    }
  };
}
function Ie(i) {
  let e, t;
  return {
    c() {
      e = h("img"), v(e, "class", "more-icon svelte-biv7k0"), A(e.src, t = Pe) || v(e, "src", t), v(e, "alt", "查看更多");
    },
    m(l, r) {
      P(l, e, r);
    },
    p: fe,
    d(l) {
      l && U(e);
    }
  };
}
function Re(i) {
  let e, t, l, r, n, o, s, p, d, f, T, m = (
    /*data*/
    i[1].title + ""
  ), C, W, F, N, E, O, S, k;
  t = new ye({
    props: {
      visible: (
        /*unfolded*/
        i[6]
      ),
      outDelay: 500,
      left: 61,
      bottom: 87,
      blurRadius: 150,
      spreadRadius: 75
    }
  });
  let u = (
    /*data*/
    i[1].headerPictureUrl && V(i)
  ), w = (
    /*hasTags*/
    i[9] && Z(i)
  ), g = (
    /*showMedia*/
    i[13] && /*mediaData*/
    i[14] && /*mediaData*/
    i[14].length > 0 && te(i)
  ), _ = (
    /*data*/
    i[1].description && ie(i)
  ), y = (
    /*havePrice*/
    (i[2] || /*data*/
    i[1].highlightText) && re(i)
  ), M = (
    /*hasMore*/
    i[8] && ae(i)
  );
  return {
    c() {
      e = h("div"), se(t.$$.fragment), l = I(), r = h("div"), n = I(), o = h("div"), u && u.c(), s = I(), p = h("div"), d = h("div"), f = h("div"), T = h("div"), C = R(m), W = I(), w && w.c(), F = I(), g && g.c(), N = I(), _ && _.c(), E = I(), y && y.c(), O = I(), M && M.c(), v(r, "class", "line svelte-biv7k0"), z(
        r,
        "transition-delay",
        /*unfolded*/
        i[6] ? (
          /*lineDelayUnfolded*/
          i[12] + "ms"
        ) : (
          /*lineDelayFolded*/
          i[11] + "ms"
        )
      ), v(T, "class", "text svelte-biv7k0"), v(f, "class", "title svelte-biv7k0"), v(d, "class", "title-wrapper svelte-biv7k0"), v(p, "class", "content-wrapper svelte-biv7k0"), z(
        p,
        "padding-top",
        /*data*/
        i[1].headerPictureUrl ? "10px" : "20px"
      ), v(o, "class", "content svelte-biv7k0"), z(o, "max-width", _e(
        /*maxWidth*/
        i[17]
      )), z(
        o,
        "transition-delay",
        /*unfolded*/
        i[6] ? (
          /*contentDelayUnfolded*/
          i[10] + "ms"
        ) : "0ms"
      ), z(
        o,
        "border-top-left-radius",
        /*data*/
        i[1].headerPictureUrl ? "0px" : "6px"
      ), z(
        o,
        "border-top-right-radius",
        /*data*/
        i[1].headerPictureUrl ? "0px" : "6px"
      ), v(e, "class", S = q(`marketing ${/*theme*/
      i[5]}`) + " svelte-biv7k0"), H(
        e,
        "unfolded",
        /*unfolded*/
        i[6]
      ), H(
        e,
        "folded",
        /*folded*/
        i[16]
      );
    },
    m(a, b) {
      P(a, e, b), pe(t, e, null), c(e, l), c(e, r), c(e, n), c(e, o), u && u.m(o, null), c(o, s), c(o, p), c(p, d), c(d, f), c(f, T), c(T, C), c(p, W), w && w.m(p, null), c(p, F), g && g.m(p, null), c(p, N), _ && _.m(p, null), c(p, E), y && y.m(p, null), c(p, O), M && M.m(p, null), k = !0;
    },
    p(a, [b]) {
      const Y = {};
      b & /*unfolded*/
      64 && (Y.visible = /*unfolded*/
      a[6]), t.$set(Y), b & /*unfolded, lineDelayUnfolded, lineDelayFolded*/
      6208 && z(
        r,
        "transition-delay",
        /*unfolded*/
        a[6] ? (
          /*lineDelayUnfolded*/
          a[12] + "ms"
        ) : (
          /*lineDelayFolded*/
          a[11] + "ms"
        )
      ), /*data*/
      a[1].headerPictureUrl ? u ? u.p(a, b) : (u = V(a), u.c(), u.m(o, s)) : u && (u.d(1), u = null), (!k || b & /*data*/
      2) && m !== (m = /*data*/
      a[1].title + "") && D(C, m), /*hasTags*/
      a[9] ? w ? w.p(a, b) : (w = Z(a), w.c(), w.m(p, F)) : w && (w.d(1), w = null), /*showMedia*/
      a[13] && /*mediaData*/
      a[14] && /*mediaData*/
      a[14].length > 0 ? g ? (g.p(a, b), b & /*showMedia, mediaData*/
      24576 && G(g, 1)) : (g = te(a), g.c(), G(g, 1), g.m(p, N)) : g && (we(), j(g, 1, 1, () => {
        g = null;
      }), be()), /*data*/
      a[1].description ? _ ? _.p(a, b) : (_ = ie(a), _.c(), _.m(p, E)) : _ && (_.d(1), _ = null), /*havePrice*/
      a[2] || /*data*/
      a[1].highlightText ? y ? y.p(a, b) : (y = re(a), y.c(), y.m(p, O)) : y && (y.d(1), y = null), /*hasMore*/
      a[8] ? M ? M.p(a, b) : (M = ae(a), M.c(), M.m(p, null)) : M && (M.d(1), M = null), b & /*data*/
      2 && z(
        p,
        "padding-top",
        /*data*/
        a[1].headerPictureUrl ? "10px" : "20px"
      ), b & /*unfolded, contentDelayUnfolded*/
      1088 && z(
        o,
        "transition-delay",
        /*unfolded*/
        a[6] ? (
          /*contentDelayUnfolded*/
          a[10] + "ms"
        ) : "0ms"
      ), b & /*data*/
      2 && z(
        o,
        "border-top-left-radius",
        /*data*/
        a[1].headerPictureUrl ? "0px" : "6px"
      ), b & /*data*/
      2 && z(
        o,
        "border-top-right-radius",
        /*data*/
        a[1].headerPictureUrl ? "0px" : "6px"
      ), (!k || b & /*theme*/
      32 && S !== (S = q(`marketing ${/*theme*/
      a[5]}`) + " svelte-biv7k0")) && v(e, "class", S), (!k || b & /*theme, unfolded*/
      96) && H(
        e,
        "unfolded",
        /*unfolded*/
        a[6]
      ), (!k || b & /*theme, folded*/
      65568) && H(
        e,
        "folded",
        /*folded*/
        a[16]
      );
    },
    i(a) {
      k || (G(t.$$.fragment, a), G(g), k = !0);
    },
    o(a) {
      j(t.$$.fragment, a), j(g), k = !1;
    },
    d(a) {
      a && U(e), me(t), u && u.d(), w && w.d(), g && g.d(), _ && _.d(), y && y.d(), M && M.d();
    }
  };
}
const B = 40;
function De(i, e, t) {
  let l, r, n, o, s, p, d, f, T, m, C, W, F, N, E, O, S, { tag: k } = e, u, w = (() => {
    var b;
    const a = (b = k.data.limitWidth) != null ? b : !0;
    if (typeof a == "number")
      return a;
    if (a === !0)
      return 280;
  })(), g = 0, _ = !1;
  function y(a) {
    Math.abs(u - a) > 5 && (t(19, u = a), setTimeout(
      () => {
        t(21, _ = !1);
      },
      100
    ));
  }
  const M = (a) => y(a.detail);
  return i.$$set = (a) => {
    "tag" in a && t(0, k = a.tag);
  }, i.$$.update = () => {
    var a, b, Y, L, X;
    i.$$.dirty & /*tag*/
    1 && t(6, l = (b = (a = k.state) == null ? void 0 : a.unfolded) != null ? b : !1), i.$$.dirty & /*unfolded*/
    64 && t(16, r = !l), i.$$.dirty & /*tag*/
    1 && t(1, n = k.data), i.$$.dirty & /*data*/
    2 && t(2, o = x((Y = n.price) == null ? void 0 : Y.value) && ((L = n.price) == null ? void 0 : L.value) !== ""), i.$$.dirty & /*tag*/
    1 && t(5, s = k.data.theme || "light"), i.$$.dirty & /*theme*/
    32 && t(15, p = s === "light"), i.$$.dirty & /*data*/
    2 && t(14, d = n.mediaData), i.$$.dirty & /*tag*/
    1 && t(13, f = ((X = k.config.popoverConfig) == null ? void 0 : X.showMedia) === !0), i.$$.dirty & /*tagsCalculated, tagsOffsetHeight, maxTagsLength*/
    3670016 && (!_ || w && w > 0) && (t(20, g = Math.max(1, Math.floor(((w || 172) - 20) / B))), u !== void 0 && u > 40 && t(20, g = Math.max(1, g - 1)), t(21, _ = !0)), i.$$.dirty & /*data, maxTagsLength*/
    1048578 && t(4, T = (n.brandTags || []).filter(Boolean).slice(0, g)), i.$$.dirty & /*maxTagsLength, primaryTags*/
    1048592 && t(22, m = Math.max(0, g - T.length)), i.$$.dirty & /*data, secondaryTagsLimit*/
    4194306 && t(3, C = (n.tags || []).filter(Boolean).slice(0, m)), i.$$.dirty & /*primaryTags, secondaryTags*/
    24 && t(9, E = T.length > 0 || C.length > 0), i.$$.dirty & /*havePrice, data*/
    6 && (o || n.highlightText), i.$$.dirty & /*tag*/
    1 && t(8, O = k.config.popoverConfig.toolbar.showMore), i.$$.dirty & /*tag*/
    1 && t(7, S = (() => x(k.config.popoverConfig.viewMoreText) && k.config.popoverConfig.viewMoreText.trim() !== "" ? k.config.popoverConfig.viewMoreText : "查看更多")());
  }, t(12, W = 400), t(11, F = 180 + 500 - 500 - 40), t(10, N = 400 + 180), [
    k,
    n,
    o,
    C,
    T,
    s,
    l,
    S,
    O,
    E,
    N,
    F,
    W,
    f,
    d,
    p,
    r,
    w,
    y,
    u,
    g,
    _,
    m,
    M
  ];
}
class ii extends ve {
  constructor(e) {
    super(), ce(this, e, De, Re, de, { tag: 0 }, Ce);
  }
}
export {
  ii as default
};
