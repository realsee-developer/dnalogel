import { SvelteComponent as te, init as le, safe_not_equal as ie, append_styles as se, element as p, create_component as re, space as C, text as S, attr as d, set_style as L, null_to_empty as D, toggle_class as H, insert as y, mount_component as ne, append as q, set_data as P, transition_in as oe, transition_out as ae, detach as T, destroy_component as ce, src_url_equal as F, action_destroyer as fe, listen as me, destroy_each as O, run_all as ge } from "../../../vendor/svelte/internal/index.js";
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/three/core/Sphere.js";
import "animejs";
import { notNil as qe } from "../../../shared-utils/isNil.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import de from "../../utils/px2rem.js";
import pe from "../Common/Shadow.js";
import { svelteResizeObserver as ve } from "../../../shared-utils/svelte/resizeObserver.js";
import "../../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../../vendor/three/build/three.module.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Subscribe.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
function he(l) {
  se(l, "svelte-sezqcq", '@charset "UTF-8";.svelte-sezqcq.svelte-sezqcq{box-sizing:border-box}.marketing.svelte-sezqcq.svelte-sezqcq{transform:translateY(-100%)}.marketing.svelte-sezqcq .line.svelte-sezqcq{position:absolute;height:1.875rem;width:0.0625rem;left:50%;transform:translateX(-50%);background-color:white;bottom:0;transform-origin:bottom;transition:all 500ms}.marketing.svelte-sezqcq .content.svelte-sezqcq{position:relative;min-width:7.5rem;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;border-radius:0.25rem;top:-1.875rem;left:-1rem;padding:0.5rem 0rem 0.5625rem;transition-property:opacity, transform;transition-duration:500ms}.marketing.svelte-sezqcq .content .headerImage.svelte-sezqcq{position:absolute;width:100%;top:0.25rem;transform:translateY(-100%);border-top-left-radius:0.25rem;border-top-right-radius:0.25rem}.title-wrapper.svelte-sezqcq.svelte-sezqcq{position:relative;width:100%;height:1.125rem}.title-wrapper.svelte-sezqcq .title.svelte-sezqcq{border-radius:0.25rem;width:100%;padding-left:0.625rem;padding-right:0.625rem}.title-wrapper.svelte-sezqcq .title .text.svelte-sezqcq{display:block;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:0.75rem;font-weight:bold;line-height:1.125rem}.footer.svelte-sezqcq.svelte-sezqcq{position:relative;padding:0.5rem 0.625rem 0 0;width:100%;display:flex;align-items:center}.footer.svelte-sezqcq .goto-button.svelte-sezqcq{display:flex;align-self:flex-end;flex-wrap:wrap;align-items:center;overflow:hidden;height:0.875rem}.footer.svelte-sezqcq .goto-button .gap.svelte-sezqcq{height:100%;width:0.625rem}.footer.svelte-sezqcq .goto-button .text.svelte-sezqcq{display:block;height:100%;font-size:0.625rem}.footer.svelte-sezqcq .arrow-wrapper.svelte-sezqcq{height:0.875rem;display:flex;align-self:flex-end;flex-grow:0;flex-shrink:0;align-items:center;margin-left:0.25rem}.footer.svelte-sezqcq .arrow-wrapper svg.arrow.svelte-sezqcq{width:0.375rem;height:0.625rem}.footer.svelte-sezqcq .price.svelte-sezqcq{flex-shrink:0;margin-right:auto;white-space:nowrap;display:flex;align-items:baseline;margin-left:0.625rem}.footer.svelte-sezqcq .price .value.svelte-sezqcq{position:relative;font-size:0.875rem;line-height:1rem;font-family:TG-TYPE, PingFangSC, Segoe UI, Rototo, sans-serif;letter-spacing:0rem}.footer.svelte-sezqcq .price .unit.svelte-sezqcq{padding-left:0.125rem;font-size:0.625rem}.tags-wrapper.svelte-sezqcq.svelte-sezqcq{position:relative;overflow:hidden;height:1rem;margin-top:0.25rem}.tags-wrapper.svelte-sezqcq .tags.svelte-sezqcq{position:relative;display:inline-flex;max-width:100%;flex-wrap:wrap;padding-left:0.625rem;padding-right:0.375rem}.tags-wrapper.svelte-sezqcq .tags .tag.svelte-sezqcq{display:flex;align-items:center;justify-content:center;flex-shrink:0;flex-grow:0;font-size:0.625rem;height:1rem;margin-right:0.25rem;margin-bottom:0.625rem;padding:0 0.25rem;border-radius:0.125rem;max-width:100%;text-overflow:ellipsis;overflow:hidden}.marketing.light.svelte-sezqcq .content.svelte-sezqcq{background-color:white}.marketing.light.svelte-sezqcq .content .title-wrapper .title .text.svelte-sezqcq{color:rgba(0, 0, 0, 0.8)}.marketing.light.svelte-sezqcq .content .tags-wrapper .tags .primary-tag.svelte-sezqcq{background:rgba(234, 208, 154, 0.5);color:#946700}.marketing.light.svelte-sezqcq .content .tags-wrapper .tags .secondary-tag.svelte-sezqcq{background:rgba(0, 0, 0, 0.06);color:rgba(0, 0, 0, 0.5)}.marketing.light.svelte-sezqcq .content .footer.svelte-sezqcq{color:#946700;fill:#946700}.marketing.dark.svelte-sezqcq .content.svelte-sezqcq{background-color:rgba(0, 0, 0, 0.5)}.marketing.dark.svelte-sezqcq .content .title-wrapper .title .text.svelte-sezqcq{color:white}.marketing.dark.svelte-sezqcq .content .tags-wrapper .tags .primary-tag.svelte-sezqcq{background:rgba(234, 208, 154, 0.5);color:white}.marketing.dark.svelte-sezqcq .content .tags-wrapper .tags .secondary-tag.svelte-sezqcq{background:rgba(255, 255, 255, 0.15);color:rgba(255, 255, 255, 0.85)}.marketing.dark.svelte-sezqcq .content .footer.svelte-sezqcq{color:#ead09a;fill:#ead09a}.marketing.unfolded.svelte-sezqcq .line.svelte-sezqcq{transform:translateX(-50%) scale(1, 1)}.marketing.folded.svelte-sezqcq .line.svelte-sezqcq{transform:translateX(-50%) scale(1, 0);transition-timing-function:ease-in}.marketing.unfolded.svelte-sezqcq .content.svelte-sezqcq{opacity:1}.marketing.folded.svelte-sezqcq .content.svelte-sezqcq{opacity:0;transform:translateY(0.425rem);transition-timing-function:ease-in}');
}
function j(l, e, t) {
  const s = l.slice();
  return s[0] = e[t], s;
}
function E(l, e, t) {
  const s = l.slice();
  return s[0] = e[t], s;
}
function N(l) {
  let e, t;
  return {
    c() {
      e = p("img"), d(e, "class", "headerImage svelte-sezqcq"), F(e.src, t = /*data*/
      l[3].headerPictureUrl) || d(e, "src", t), d(e, "alt", "");
    },
    m(s, i) {
      y(s, e, i);
    },
    p(s, i) {
      i & /*data*/
      8 && !F(e.src, t = /*data*/
      s[3].headerPictureUrl) && d(e, "src", t);
    },
    d(s) {
      s && T(e);
    }
  };
}
function Z(l) {
  let e, t, s, i, n, r = (
    /*primaryTags*/
    l[2] || []
  ), c = [];
  for (let a = 0; a < r.length; a += 1)
    c[a] = A(E(l, r, a));
  let m = (
    /*secondaryTags*/
    l[5] || []
  ), f = [];
  for (let a = 0; a < m.length; a += 1)
    f[a] = J(j(l, m, a));
  return {
    c() {
      e = p("div"), t = p("div");
      for (let a = 0; a < c.length; a += 1)
        c[a].c();
      s = C();
      for (let a = 0; a < f.length; a += 1)
        f[a].c();
      d(t, "class", "tags svelte-sezqcq"), d(e, "class", "tags-wrapper svelte-sezqcq");
    },
    m(a, v) {
      y(a, e, v), q(e, t);
      for (let o = 0; o < c.length; o += 1)
        c[o] && c[o].m(t, null);
      q(t, s);
      for (let o = 0; o < f.length; o += 1)
        f[o] && f[o].m(t, null);
      i || (n = [
        fe(ve.call(null, t)),
        me(
          t,
          "clientHeight",
          /*clientHeight_handler*/
          l[11]
        )
      ], i = !0);
    },
    p(a, v) {
      if (v & /*minTagWidth, primaryTags*/
      4) {
        r = /*primaryTags*/
        a[2] || [];
        let o;
        for (o = 0; o < r.length; o += 1) {
          const k = E(a, r, o);
          c[o] ? c[o].p(k, v) : (c[o] = A(k), c[o].c(), c[o].m(t, s));
        }
        for (; o < c.length; o += 1)
          c[o].d(1);
        c.length = r.length;
      }
      if (v & /*minTagWidth, secondaryTags*/
      32) {
        m = /*secondaryTags*/
        a[5] || [];
        let o;
        for (o = 0; o < m.length; o += 1) {
          const k = j(a, m, o);
          f[o] ? f[o].p(k, v) : (f[o] = J(k), f[o].c(), f[o].m(t, null));
        }
        for (; o < f.length; o += 1)
          f[o].d(1);
        f.length = m.length;
      }
    },
    d(a) {
      a && T(e), O(c, a), O(f, a), i = !1, ge(n);
    }
  };
}
function A(l) {
  let e, t = (
    /*tag*/
    l[0] + ""
  ), s;
  return {
    c() {
      e = p("div"), s = S(t), d(e, "class", "tag primary-tag svelte-sezqcq"), L(e, "min-width", B);
    },
    m(i, n) {
      y(i, e, n), q(e, s);
    },
    p(i, n) {
      n & /*primaryTags*/
      4 && t !== (t = /*tag*/
      i[0] + "") && P(s, t);
    },
    d(i) {
      i && T(e);
    }
  };
}
function J(l) {
  let e, t = (
    /*tag*/
    l[0] + ""
  ), s;
  return {
    c() {
      e = p("div"), s = S(t), d(e, "class", "tag secondary-tag svelte-sezqcq"), L(e, "min-width", B);
    },
    m(i, n) {
      y(i, e, n), q(e, s);
    },
    p(i, n) {
      n & /*secondaryTags*/
      32 && t !== (t = /*tag*/
      i[0] + "") && P(s, t);
    },
    d(i) {
      i && T(e);
    }
  };
}
function K(l) {
  let e, t, s = (
    /*havePrice*/
    l[7] && Q(l)
  ), i = (
    /*data*/
    l[3].highlightText && x(l)
  );
  return {
    c() {
      e = p("div"), s && s.c(), t = C(), i && i.c(), d(e, "class", "footer svelte-sezqcq");
    },
    m(n, r) {
      y(n, e, r), s && s.m(e, null), q(e, t), i && i.m(e, null);
    },
    p(n, r) {
      /*havePrice*/
      n[7] ? s ? s.p(n, r) : (s = Q(n), s.c(), s.m(e, t)) : s && (s.d(1), s = null), /*data*/
      n[3].highlightText ? i ? i.p(n, r) : (i = x(n), i.c(), i.m(e, null)) : i && (i.d(1), i = null);
    },
    d(n) {
      n && T(e), s && s.d(), i && i.d();
    }
  };
}
function Q(l) {
  let e, t, s = (
    /*data*/
    l[3].price.value + ""
  ), i, n, r = (
    /*data*/
    l[3].price.unit && V(l)
  );
  return {
    c() {
      e = p("div"), t = p("span"), i = S(s), n = C(), r && r.c(), d(t, "class", "value svelte-sezqcq"), d(e, "class", "price svelte-sezqcq");
    },
    m(c, m) {
      y(c, e, m), q(e, t), q(t, i), q(e, n), r && r.m(e, null);
    },
    p(c, m) {
      m & /*data*/
      8 && s !== (s = /*data*/
      c[3].price.value + "") && P(i, s), /*data*/
      c[3].price.unit ? r ? r.p(c, m) : (r = V(c), r.c(), r.m(e, null)) : r && (r.d(1), r = null);
    },
    d(c) {
      c && T(e), r && r.d();
    }
  };
}
function V(l) {
  let e, t = (
    /*data*/
    l[3].price.unit + ""
  ), s;
  return {
    c() {
      e = p("span"), s = S(t), d(e, "class", "unit svelte-sezqcq");
    },
    m(i, n) {
      y(i, e, n), q(e, s);
    },
    p(i, n) {
      n & /*data*/
      8 && t !== (t = /*data*/
      i[3].price.unit + "") && P(s, t);
    },
    d(i) {
      i && T(e);
    }
  };
}
function x(l) {
  let e, t, s, i, n = (
    /*data*/
    l[3].highlightText + ""
  ), r, c, m;
  return {
    c() {
      e = p("div"), t = p("div"), s = C(), i = p("span"), r = S(n), c = C(), m = p("div"), m.innerHTML = '<svg class="arrow svelte-sezqcq" viewBox="0 0 6 9"><g transform="translate(-3, -2)" fill-rule="nonzero" class="svelte-sezqcq"><path d="M4.43868724,2.12056563 C4.28121824,1.95989074 4.02582143,1.95979988 3.86824251,2.1203627 C3.72498894,2.26632889 3.71189225,2.49481723 3.82900374,2.65587166 L6.57092402,5.92894326 C6.72651763,6.11470411 6.72651763,6.38529589 6.57092402,6.57105674 L3.86804348,9.79798499 C3.72488984,9.94405307 3.71194952,10.1725507 3.8291712,10.3335217 L3.86824251,10.3796373 C4.01149607,10.5256035 4.23559087,10.5387981 4.39346025,10.4192733 L4.43868724,10.3794344 L8.1144599,6.5985342 C8.30312347,6.40447482 8.30312347,6.09552518 8.1144599,5.9014658 L4.43868724,2.12056563 Z" class="svelte-sezqcq"></path></g></svg>', d(t, "class", "gap svelte-sezqcq"), d(i, "class", "text svelte-sezqcq"), d(e, "class", "goto-button goto-icon svelte-sezqcq"), d(m, "class", "arrow-wrapper svelte-sezqcq");
    },
    m(f, a) {
      y(f, e, a), q(e, t), q(e, s), q(e, i), q(i, r), y(f, c, a), y(f, m, a);
    },
    p(f, a) {
      a & /*data*/
      8 && n !== (n = /*data*/
      f[3].highlightText + "") && P(r, n);
    },
    d(f) {
      f && T(e), f && T(c), f && T(m);
    }
  };
}
function ue(l) {
  var W, G;
  let e, t, s, i, n, r, c, m, f, a, v = (
    /*data*/
    l[3].title + ""
  ), o, k, U, _, w;
  t = new pe({
    props: {
      visible: (
        /*unfolded*/
        l[4]
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
    l[3].headerPictureUrl && N(l)
  ), u = (
    /*primaryTags*/
    ((W = l[2].length) != null ? W : 0) + /*secondaryTags*/
    ((G = l[5].length) != null ? G : 0) > 0 && Z(l)
  ), z = (
    /*havePrice*/
    (l[7] || /*data*/
    l[3].highlightText) && K(l)
  );
  return {
    c() {
      e = p("div"), re(t.$$.fragment), s = C(), i = p("div"), n = C(), r = p("div"), h && h.c(), c = C(), m = p("div"), f = p("div"), a = p("div"), o = S(v), k = C(), u && u.c(), U = C(), z && z.c(), d(i, "class", "line svelte-sezqcq"), L(
        i,
        "transition-delay",
        /*unfolded*/
        l[4] ? R + "ms" : Y + ee - $ - 40 + "ms"
      ), d(a, "class", "text svelte-sezqcq"), d(f, "class", "title svelte-sezqcq"), d(m, "class", "title-wrapper svelte-sezqcq"), d(r, "class", "content svelte-sezqcq"), L(r, "max-width", de(
        /*maxWidth*/
        l[9]
      )), L(
        r,
        "transition-delay",
        /*unfolded*/
        l[4] ? R + Y + "ms" : "0ms"
      ), d(e, "class", _ = D(`marketing ${/*theme*/
      l[6]}`) + " svelte-sezqcq"), H(
        e,
        "unfolded",
        /*unfolded*/
        l[4]
      ), H(
        e,
        "folded",
        /*folded*/
        l[8]
      );
    },
    m(g, b) {
      y(g, e, b), ne(t, e, null), q(e, s), q(e, i), q(e, n), q(e, r), h && h.m(r, null), q(r, c), q(r, m), q(m, f), q(f, a), q(a, o), q(r, k), u && u.m(r, null), q(r, U), z && z.m(r, null), w = !0;
    },
    p(g, [b]) {
      var M, X;
      const I = {};
      b & /*unfolded*/
      16 && (I.visible = /*unfolded*/
      g[4]), t.$set(I), b & /*unfolded*/
      16 && L(
        i,
        "transition-delay",
        /*unfolded*/
        g[4] ? R + "ms" : Y + ee - $ - 40 + "ms"
      ), /*data*/
      g[3].headerPictureUrl ? h ? h.p(g, b) : (h = N(g), h.c(), h.m(r, c)) : h && (h.d(1), h = null), (!w || b & /*data*/
      8) && v !== (v = /*data*/
      g[3].title + "") && P(o, v), /*primaryTags*/
      ((M = g[2].length) != null ? M : 0) + /*secondaryTags*/
      ((X = g[5].length) != null ? X : 0) > 0 ? u ? u.p(g, b) : (u = Z(g), u.c(), u.m(r, U)) : u && (u.d(1), u = null), /*havePrice*/
      g[7] || /*data*/
      g[3].highlightText ? z ? z.p(g, b) : (z = K(g), z.c(), z.m(r, null)) : z && (z.d(1), z = null), b & /*unfolded*/
      16 && L(
        r,
        "transition-delay",
        /*unfolded*/
        g[4] ? R + Y + "ms" : "0ms"
      ), (!w || b & /*theme*/
      64 && _ !== (_ = D(`marketing ${/*theme*/
      g[6]}`) + " svelte-sezqcq")) && d(e, "class", _), (!w || b & /*theme, unfolded*/
      80) && H(
        e,
        "unfolded",
        /*unfolded*/
        g[4]
      ), (!w || b & /*theme, folded*/
      320) && H(
        e,
        "folded",
        /*folded*/
        g[8]
      );
    },
    i(g) {
      w || (oe(t.$$.fragment, g), w = !0);
    },
    o(g) {
      ae(t.$$.fragment, g), w = !1;
    },
    d(g) {
      g && T(e), ce(t), h && h.d(), u && u.d(), z && z.d();
    }
  };
}
const B = 40, R = 400, $ = 500, Y = 180, ee = 500;
function ze(l, e, t) {
  let s, i, n, r, c, m, f, a, { tag: v } = e, o, k = (() => {
    var w;
    const _ = (w = v.data.limitWidth) != null ? w : !0;
    if (typeof _ == "number")
      return _;
    if (_ === !0)
      return 172;
  })();
  const U = (_) => {
    t(1, o = _.detail);
  };
  return l.$$set = (_) => {
    "tag" in _ && t(0, v = _.tag);
  }, l.$$.update = () => {
    var _, w, h, u, z, W;
    l.$$.dirty & /*tag*/
    1 && t(4, s = (w = (_ = v.state) == null ? void 0 : _.unfolded) != null ? w : !1), l.$$.dirty & /*unfolded*/
    16 && t(8, i = !s), l.$$.dirty & /*tag*/
    1 && t(3, n = v.data), l.$$.dirty & /*data*/
    8 && t(7, r = qe((h = n.price) == null ? void 0 : h.value) && ((u = n.price) == null ? void 0 : u.value) !== ""), l.$$.dirty & /*tag*/
    1 && t(6, c = v.data.theme || "light"), l.$$.dirty & /*tagsOffsetHeight, maxTagsLength*/
    1026 && o > 40 && t(10, m = m - 1), l.$$.dirty & /*data, maxTagsLength*/
    1032 && t(2, f = ((z = n.brandTags) == null ? void 0 : z.slice(0, m).filter(Boolean)) || []), l.$$.dirty & /*data, maxTagsLength, primaryTags*/
    1036 && t(5, a = ((W = n.tags) == null ? void 0 : W.slice(0, m - f.length).filter(Boolean)) || []);
  }, t(10, m = (k - 20) / B), [
    v,
    o,
    f,
    n,
    s,
    a,
    c,
    r,
    i,
    k,
    m,
    U
  ];
}
class Ke extends te {
  constructor(e) {
    super(), le(this, e, ze, ue, ie, { tag: 0 }, he);
  }
}
export {
  Ke as default
};
