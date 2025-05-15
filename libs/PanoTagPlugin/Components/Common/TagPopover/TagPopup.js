import { SvelteComponent as Ne, init as Se, safe_not_equal as Ge, append_styles as He, create_slot as ce, element as z, space as j, attr as n, insert as T, append as f, transition_out as L, check_outros as Le, transition_in as F, update_slot_base as me, get_all_dirty_from_scope as ge, get_slot_changes as ve, detach as D, text as I, set_data as C, destroy_each as ze, group_outros as Fe, create_component as Q, src_url_equal as G, set_style as A, mount_component as W, destroy_component as X, noop as _e } from "../../../../vendor/svelte/internal/index.js";
import Ae from "../VideoIcon.js";
import Je from "./PanoramaIcon.js";
import { isYouTube as he, getYouTubeId as Ke, isVimeo as ke, getVimeoId as Oe, formatVideo as Qe } from "../../../utils/videoHelper.js";
function We(l) {
  He(l, "svelte-u1dbzb", '@charset "UTF-8";.tag-popup.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{position:absolute;pointer-events:auto;padding:0.625rem;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;transform-origin:center}.tag-popup-top.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{transform:translate(-50%, -100%);left:50%}.tag-popup-bottom.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{transform:translate(-50%, 0);left:50%}.tag-popup-left.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{transform:translate(-100%, -50%);top:50%}.tag-popup-right.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{transform:translate(0, -50%);top:50%}.tag-popup-top-left.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{transform:translate(calc(2.625rem - 100%), -100%)}.tag-popup-top-right.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{transform:translate(-2.625rem, -100%)}.tag-popup-bottom-left.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{transform:translate(calc(2.625rem - 100%), 0)}.tag-popup-bottom-right.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{transform:translate(-2.625rem, 0)}.tag-popup-left-top.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{transform:translate(-100%, -2.625rem)}.tag-popup-left-bottom.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{transform:translate(-100%, calc(2.625rem - 100%))}.tag-popup-right-top.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{transform:translate(0, -2.625rem)}.tag-popup-right-bottom.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{transform:translate(0, calc(2.625rem - 100%))}.tag-popup-content.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{position:relative;pointer-events:auto;cursor:pointer;padding:1.25rem;border-radius:0.375rem;max-width:17.5rem;width:17.5rem;background:rgba(0, 0, 0, 0.7490196078)}.tag-popup-top.svelte-u1dbzb .tag-popup-content.svelte-u1dbzb.svelte-u1dbzb,.tag-popup-top-left.svelte-u1dbzb .tag-popup-content.svelte-u1dbzb.svelte-u1dbzb,.tag-popup-top-right.svelte-u1dbzb .tag-popup-content.svelte-u1dbzb.svelte-u1dbzb{box-shadow:0.03125rem 0 0 0 rgba(255, 255, 255, 0.3), -0.03125rem 0 0 0 rgba(255, 255, 255, 0.3)}.tag-popup-bottom.svelte-u1dbzb .tag-popup-content.svelte-u1dbzb.svelte-u1dbzb,.tag-popup-bottom-left.svelte-u1dbzb .tag-popup-content.svelte-u1dbzb.svelte-u1dbzb,.tag-popup-bottom-right.svelte-u1dbzb .tag-popup-content.svelte-u1dbzb.svelte-u1dbzb{box-shadow:0.03125rem 0 0 0 rgba(255, 255, 255, 0.3), -0.03125rem 0 0 0 rgba(255, 255, 255, 0.3)}.tag-popup-left.svelte-u1dbzb .tag-popup-content.svelte-u1dbzb.svelte-u1dbzb,.tag-popup-left-top.svelte-u1dbzb .tag-popup-content.svelte-u1dbzb.svelte-u1dbzb,.tag-popup-left-bottom.svelte-u1dbzb .tag-popup-content.svelte-u1dbzb.svelte-u1dbzb{box-shadow:0 0.03125rem 0 0 rgba(255, 255, 255, 0.3), 0 -0.03125rem 0 0 rgba(255, 255, 255, 0.3)}.tag-popup-right.svelte-u1dbzb .tag-popup-content.svelte-u1dbzb.svelte-u1dbzb,.tag-popup-right-top.svelte-u1dbzb .tag-popup-content.svelte-u1dbzb.svelte-u1dbzb,.tag-popup-right-bottom.svelte-u1dbzb .tag-popup-content.svelte-u1dbzb.svelte-u1dbzb{box-shadow:0 0.03125rem 0 0 rgba(255, 255, 255, 0.3), 0 -0.03125rem 0 0 rgba(255, 255, 255, 0.3)}.light.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{background:#ffffff}.tag-popup-title.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{margin:0;font-size:1rem;font-weight:600;line-height:1.375rem;letter-spacing:0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;color:#ffffff}.light.svelte-u1dbzb .tag-popup-title.svelte-u1dbzb.svelte-u1dbzb{color:rgba(0, 0, 0, 0.8509803922)}.tag-popup-description.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{margin:0;font-size:0.875rem;font-weight:400;color:#ffffff;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.light.svelte-u1dbzb .tag-popup-description.svelte-u1dbzb.svelte-u1dbzb{color:rgba(0, 0, 0, 0.8509803922)}.tag-popup-tags.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{display:flex;align-items:center;margin:0;margin-bottom:0}.tag-popup-tags.svelte-u1dbzb .tag-popup-tag.svelte-u1dbzb+.tag-popup-tag.svelte-u1dbzb{margin-left:0.25rem}.tag-popup-tag.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{padding:0.125rem 0.25rem;display:flex;align-items:center;justify-content:center;border-radius:0.25rem;font-size:0.75rem;line-height:1.125rem;letter-spacing:0;border-radius:0.125rem;max-width:7.5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag-popup-tag-primary.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{color:#ffffff;background-image:linear-gradient(90deg, #ead09a 0%, #e0cca3 100%)}.light.svelte-u1dbzb .tag-popup-tag-primary.svelte-u1dbzb.svelte-u1dbzb{color:#946700;background-image:linear-gradient(90deg, #ead09a 0%, #e0cca3 100%)}.tag-popup-tag-secondary.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{color:#ffffff;background:rgba(255, 255, 255, 0.1490196078)}.light.svelte-u1dbzb .tag-popup-tag-secondary.svelte-u1dbzb.svelte-u1dbzb{color:rgba(0, 0, 0, 0.5019607843);background:rgba(0, 0, 0, 0.0588235294)}.tag-popup-price.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{font-family:DINAlternate-Bold;font-weight:700;font-size:1.25rem;color:#ae7900;letter-spacing:0;text-align:center;display:flex;justify-content:flex-start;align-items:center;width:100%;margin:0}.tag-popup-media.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{width:15rem;height:10rem;margin:0 auto;overflow:hidden;border-radius:0.25rem;display:flex;align-items:center;justify-content:center;position:relative}.tag-popup-media.svelte-u1dbzb img.svelte-u1dbzb.svelte-u1dbzb{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block}.tag-popup-media-type.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:2}.tag-popup-media-index.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{position:absolute;right:0.375rem;bottom:0.375rem;padding:0.0625rem 0.25rem;background:rgba(0, 0, 0, 0.5);border-radius:0.125rem;font-weight:bold;font-size:0.75rem;color:#ffffff;letter-spacing:0;line-height:1.125rem}.iframe-overlay.svelte-u1dbzb.svelte-u1dbzb.svelte-u1dbzb{position:absolute;top:0;left:0;width:100%;height:100%;background:transparent;z-index:10}.tag-popup-content.svelte-u1dbzb>.svelte-u1dbzb+.svelte-u1dbzb{margin-top:0.5rem}.tag-popup-content.svelte-u1dbzb>.svelte-u1dbzb.svelte-u1dbzb:first-child{margin-top:0 !important}');
}
const Xe = (l) => ({}), ye = (l) => ({}), Ze = (l) => ({}), we = (l) => ({});
function Te(l, t, e) {
  const i = l.slice();
  return i[1] = t[e], i;
}
function De(l, t, e) {
  const i = l.slice();
  return i[1] = t[e], i;
}
function Ve(l) {
  let t, e;
  return {
    c() {
      t = z("h3"), e = I(
        /*finalTitle*/
        l[4]
      ), n(t, "class", "tag-popup-title svelte-u1dbzb");
    },
    m(i, a) {
      T(i, t, a), f(t, e);
    },
    p(i, a) {
      a[0] & /*finalTitle*/
      16 && C(
        e,
        /*finalTitle*/
        i[4]
      );
    },
    d(i) {
      i && D(t);
    }
  };
}
function Ie(l) {
  let t, e, i = (
    /*primaryTags*/
    l[3]
  ), a = [];
  for (let u = 0; u < i.length; u += 1)
    a[u] = je(De(l, i, u));
  let o = (
    /*secondaryTags*/
    l[9]
  ), r = [];
  for (let u = 0; u < o.length; u += 1)
    r[u] = Pe(Te(l, o, u));
  return {
    c() {
      t = z("div");
      for (let u = 0; u < a.length; u += 1)
        a[u].c();
      e = j();
      for (let u = 0; u < r.length; u += 1)
        r[u].c();
      n(t, "class", "tag-popup-tags svelte-u1dbzb");
    },
    m(u, m) {
      T(u, t, m);
      for (let b = 0; b < a.length; b += 1)
        a[b] && a[b].m(t, null);
      f(t, e);
      for (let b = 0; b < r.length; b += 1)
        r[b] && r[b].m(t, null);
    },
    p(u, m) {
      if (m[0] & /*primaryTags*/
      8) {
        i = /*primaryTags*/
        u[3];
        let b;
        for (b = 0; b < i.length; b += 1) {
          const c = De(u, i, b);
          a[b] ? a[b].p(c, m) : (a[b] = je(c), a[b].c(), a[b].m(t, e));
        }
        for (; b < a.length; b += 1)
          a[b].d(1);
        a.length = i.length;
      }
      if (m[0] & /*secondaryTags*/
      512) {
        o = /*secondaryTags*/
        u[9];
        let b;
        for (b = 0; b < o.length; b += 1) {
          const c = Te(u, o, b);
          r[b] ? r[b].p(c, m) : (r[b] = Pe(c), r[b].c(), r[b].m(t, null));
        }
        for (; b < r.length; b += 1)
          r[b].d(1);
        r.length = o.length;
      }
    },
    d(u) {
      u && D(t), ze(a, u), ze(r, u);
    }
  };
}
function je(l) {
  let t, e = (
    /*tag*/
    l[1] + ""
  ), i;
  return {
    c() {
      t = z("div"), i = I(e), n(t, "class", "tag-popup-tag tag-popup-tag-primary svelte-u1dbzb");
    },
    m(a, o) {
      T(a, t, o), f(t, i);
    },
    p(a, o) {
      o[0] & /*primaryTags*/
      8 && e !== (e = /*tag*/
      a[1] + "") && C(i, e);
    },
    d(a) {
      a && D(t);
    }
  };
}
function Pe(l) {
  let t, e = (
    /*tag*/
    l[1] + ""
  ), i;
  return {
    c() {
      t = z("div"), i = I(e), n(t, "class", "tag-popup-tag tag-popup-tag-secondary svelte-u1dbzb");
    },
    m(a, o) {
      T(a, t, o), f(t, i);
    },
    p(a, o) {
      o[0] & /*secondaryTags*/
      512 && e !== (e = /*tag*/
      a[1] + "") && C(i, e);
    },
    d(a) {
      a && D(t);
    }
  };
}
function Re(l) {
  let t, e, i, a, o, r, u, m;
  r = new Ae({});
  let b = (
    /*mediaCount*/
    l[11] > 1 && Ue(l)
  );
  return {
    c() {
      t = z("div"), e = z("video"), a = j(), o = z("div"), Q(r.$$.fragment), u = j(), b && b.c(), G(e.src, i = /*tag*/
      l[1].data.mediaData[0].url) || n(e, "src", i), n(e, "class", "tag-popup-video-fallback"), e.controls = !1, e.autoplay = !1, e.muted = !0, e.loop = !0, n(e, "preload", "metadata"), n(e, "disablepictureinpicture", ""), e.playsInline = !0, A(e, "width", "100%"), A(e, "height", "100%"), A(e, "object-fit", "cover"), n(o, "class", "tag-popup-media-type svelte-u1dbzb"), n(t, "class", "tag-popup-media svelte-u1dbzb");
    },
    m(c, _) {
      T(c, t, _), f(t, e), f(t, a), f(t, o), W(r, o, null), f(t, u), b && b.m(t, null), m = !0;
    },
    p(c, _) {
      (!m || _[0] & /*tag*/
      2 && !G(e.src, i = /*tag*/
      c[1].data.mediaData[0].url)) && n(e, "src", i), /*mediaCount*/
      c[11] > 1 ? b ? b.p(c, _) : (b = Ue(c), b.c(), b.m(t, null)) : b && (b.d(1), b = null);
    },
    i(c) {
      m || (F(r.$$.fragment, c), m = !0);
    },
    o(c) {
      L(r.$$.fragment, c), m = !1;
    },
    d(c) {
      c && D(t), X(r), b && b.d();
    }
  };
}
function xe(l) {
  let t, e, i, a, o, r, u, m, b;
  const c = [tt, et], _ = [];
  function U(p, v) {
    return (
      /*isVideoMedia*/
      p[6] ? 0 : (
        /*isPanoramaMedia*/
        p[14] ? 1 : -1
      )
    );
  }
  ~(r = U(l)) && (u = _[r] = c[r](l));
  let g = (
    /*mediaCount*/
    l[11] > 1 && Ce(l)
  );
  return {
    c() {
      t = z("div"), e = z("img"), o = j(), u && u.c(), m = j(), g && g.c(), G(e.src, i = /*mediaUrl*/
      l[15]) || n(e, "src", i), n(e, "alt", a = /*finalTitle*/
      l[4] || ""), n(e, "draggable", "false"), n(e, "class", "svelte-u1dbzb"), n(t, "class", "tag-popup-media svelte-u1dbzb");
    },
    m(p, v) {
      T(p, t, v), f(t, e), f(t, o), ~r && _[r].m(t, null), f(t, m), g && g.m(t, null), b = !0;
    },
    p(p, v) {
      (!b || v[0] & /*mediaUrl*/
      32768 && !G(e.src, i = /*mediaUrl*/
      p[15])) && n(e, "src", i), (!b || v[0] & /*finalTitle*/
      16 && a !== (a = /*finalTitle*/
      p[4] || "")) && n(e, "alt", a);
      let B = r;
      r = U(p), r !== B && (u && (Fe(), L(_[B], 1, 1, () => {
        _[B] = null;
      }), Le()), ~r ? (u = _[r], u || (u = _[r] = c[r](p), u.c()), F(u, 1), u.m(t, m)) : u = null), /*mediaCount*/
      p[11] > 1 ? g ? g.p(p, v) : (g = Ce(p), g.c(), g.m(t, null)) : g && (g.d(1), g = null);
    },
    i(p) {
      b || (F(u), b = !0);
    },
    o(p) {
      L(u), b = !1;
    },
    d(p) {
      p && D(t), ~r && _[r].d(), g && g.d();
    }
  };
}
function $e(l) {
  let t, e, i, a, o, r, u = (
    /*mediaCount*/
    l[11] > 1 && Me(l)
  );
  return {
    c() {
      t = z("div"), e = z("iframe"), a = j(), o = z("div"), r = j(), u && u.c(), n(
        e,
        "title",
        /*videoPlayerTitle*/
        l[12]
      ), G(e.src, i = /*formattedVideoUrl*/
      l[13]) || n(e, "src", i), n(e, "class", "tag-popup-video-iframe"), n(e, "frameborder", "0"), n(e, "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"), n(e, "referrerpolicy", "strict-origin-when-cross-origin"), e.allowFullscreen = !0, A(e, "width", "100%"), A(e, "height", "100%"), A(e, "position", "absolute"), A(e, "top", "0"), A(e, "left", "0"), n(o, "class", "iframe-overlay svelte-u1dbzb"), n(t, "class", "tag-popup-media svelte-u1dbzb");
    },
    m(m, b) {
      T(m, t, b), f(t, e), f(t, a), f(t, o), f(t, r), u && u.m(t, null);
    },
    p(m, b) {
      b[0] & /*videoPlayerTitle*/
      4096 && n(
        e,
        "title",
        /*videoPlayerTitle*/
        m[12]
      ), b[0] & /*formattedVideoUrl*/
      8192 && !G(e.src, i = /*formattedVideoUrl*/
      m[13]) && n(e, "src", i), /*mediaCount*/
      m[11] > 1 ? u ? u.p(m, b) : (u = Me(m), u.c(), u.m(t, null)) : u && (u.d(1), u = null);
    },
    i: _e,
    o: _e,
    d(m) {
      m && D(t), u && u.d();
    }
  };
}
function Ue(l) {
  let t, e, i, a;
  return {
    c() {
      t = z("div"), e = I(
        /*currentMediaIndex*/
        l[10]
      ), i = I("/"), a = I(
        /*mediaCount*/
        l[11]
      ), n(t, "class", "tag-popup-media-index svelte-u1dbzb");
    },
    m(o, r) {
      T(o, t, r), f(t, e), f(t, i), f(t, a);
    },
    p(o, r) {
      r[0] & /*currentMediaIndex*/
      1024 && C(
        e,
        /*currentMediaIndex*/
        o[10]
      ), r[0] & /*mediaCount*/
      2048 && C(
        a,
        /*mediaCount*/
        o[11]
      );
    },
    d(o) {
      o && D(t);
    }
  };
}
function et(l) {
  let t, e, i;
  return e = new Je({}), {
    c() {
      t = z("div"), Q(e.$$.fragment), n(t, "class", "tag-popup-media-type svelte-u1dbzb");
    },
    m(a, o) {
      T(a, t, o), W(e, t, null), i = !0;
    },
    i(a) {
      i || (F(e.$$.fragment, a), i = !0);
    },
    o(a) {
      L(e.$$.fragment, a), i = !1;
    },
    d(a) {
      a && D(t), X(e);
    }
  };
}
function tt(l) {
  let t, e, i;
  return e = new Ae({}), {
    c() {
      t = z("div"), Q(e.$$.fragment), n(t, "class", "tag-popup-media-type svelte-u1dbzb");
    },
    m(a, o) {
      T(a, t, o), W(e, t, null), i = !0;
    },
    i(a) {
      i || (F(e.$$.fragment, a), i = !0);
    },
    o(a) {
      L(e.$$.fragment, a), i = !1;
    },
    d(a) {
      a && D(t), X(e);
    }
  };
}
function Ce(l) {
  let t, e, i, a;
  return {
    c() {
      t = z("div"), e = I(
        /*currentMediaIndex*/
        l[10]
      ), i = I("/"), a = I(
        /*mediaCount*/
        l[11]
      ), n(t, "class", "tag-popup-media-index svelte-u1dbzb");
    },
    m(o, r) {
      T(o, t, r), f(t, e), f(t, i), f(t, a);
    },
    p(o, r) {
      r[0] & /*currentMediaIndex*/
      1024 && C(
        e,
        /*currentMediaIndex*/
        o[10]
      ), r[0] & /*mediaCount*/
      2048 && C(
        a,
        /*mediaCount*/
        o[11]
      );
    },
    d(o) {
      o && D(t);
    }
  };
}
function Me(l) {
  let t, e, i, a;
  return {
    c() {
      t = z("div"), e = I(
        /*currentMediaIndex*/
        l[10]
      ), i = I("/"), a = I(
        /*mediaCount*/
        l[11]
      ), n(t, "class", "tag-popup-media-index svelte-u1dbzb");
    },
    m(o, r) {
      T(o, t, r), f(t, e), f(t, i), f(t, a);
    },
    p(o, r) {
      r[0] & /*currentMediaIndex*/
      1024 && C(
        e,
        /*currentMediaIndex*/
        o[10]
      ), r[0] & /*mediaCount*/
      2048 && C(
        a,
        /*mediaCount*/
        o[11]
      );
    },
    d(o) {
      o && D(t);
    }
  };
}
function Be(l) {
  let t, e;
  return {
    c() {
      t = z("div"), e = I(
        /*finalDescription*/
        l[16]
      ), n(t, "class", "tag-popup-description svelte-u1dbzb");
    },
    m(i, a) {
      T(i, t, a), f(t, e);
    },
    p(i, a) {
      a[0] & /*finalDescription*/
      65536 && C(
        e,
        /*finalDescription*/
        i[16]
      );
    },
    d(i) {
      i && D(t);
    }
  };
}
function Ye(l) {
  let t, e, i, a, o = (
    /*marketingPriceUnit*/
    l[7] && qe(l)
  );
  return {
    c() {
      t = z("div"), o && o.c(), e = j(), i = z("span"), a = I(
        /*marketingPrice*/
        l[8]
      ), n(i, "class", "tag-popup-price-value"), n(t, "class", "tag-popup-price svelte-u1dbzb");
    },
    m(r, u) {
      T(r, t, u), o && o.m(t, null), f(t, e), f(t, i), f(i, a);
    },
    p(r, u) {
      /*marketingPriceUnit*/
      r[7] ? o ? o.p(r, u) : (o = qe(r), o.c(), o.m(t, e)) : o && (o.d(1), o = null), u[0] & /*marketingPrice*/
      256 && C(
        a,
        /*marketingPrice*/
        r[8]
      );
    },
    d(r) {
      r && D(t), o && o.d();
    }
  };
}
function qe(l) {
  let t, e;
  return {
    c() {
      t = z("span"), e = I(
        /*marketingPriceUnit*/
        l[7]
      ), n(t, "class", "tag-popup-price-unit");
    },
    m(i, a) {
      T(i, t, a), f(t, e);
    },
    p(i, a) {
      a[0] & /*marketingPriceUnit*/
      128 && C(
        e,
        /*marketingPriceUnit*/
        i[7]
      );
    },
    d(i) {
      i && D(t);
    }
  };
}
function lt(l) {
  let t, e, i, a, o, r, u, m, b, c, _, U, g, p = (
    /*finalTitle*/
    l[4] && Ve(l)
  ), v = (
    /*isMarketingTag*/
    l[2] && /*primaryTags*/
    (l[3].length > 0 || /*secondaryTags*/
    l[9].length > 0) && Ie(l)
  );
  const B = [$e, xe, Re], M = [];
  function H(s, h) {
    var Y;
    return (
      /*isExternalVideo*/
      s[5] && /*formattedVideoUrl*/
      s[13] ? 0 : (
        /*mediaUrl*/
        s[15] ? 1 : (
          /*isVideoMedia*/
          s[6] && /*tag*/
          s[1].data.mediaData && /*tag*/
          ((Y = s[1].data.mediaData[0]) != null && Y.url) ? 2 : -1
        )
      )
    );
  }
  ~(o = H(l)) && (r = M[o] = B[o](l));
  let k = (
    /*finalDescription*/
    l[16] && Be(l)
  ), y = (
    /*marketingPrice*/
    l[8] && Ye(l)
  );
  const E = (
    /*#slots*/
    l[30].toolbar
  ), V = ce(
    E,
    l,
    /*$$scope*/
    l[29],
    we
  ), N = (
    /*#slots*/
    l[30].arrow
  ), w = ce(
    N,
    l,
    /*$$scope*/
    l[29],
    ye
  );
  return {
    c() {
      t = z("div"), e = z("div"), p && p.c(), i = j(), v && v.c(), a = j(), r && r.c(), u = j(), k && k.c(), m = j(), y && y.c(), b = j(), V && V.c(), c = j(), w && w.c(), n(e, "class", _ = "tag-popup-content " + /*effectiveTheme*/
      l[17] + " svelte-u1dbzb"), n(t, "class", U = "tag-popup tag-popup-" + /*placement*/
      l[0] + " svelte-u1dbzb");
    },
    m(s, h) {
      T(s, t, h), f(t, e), p && p.m(e, null), f(e, i), v && v.m(e, null), f(e, a), ~o && M[o].m(e, null), f(e, u), k && k.m(e, null), f(e, m), y && y.m(e, null), f(e, b), V && V.m(e, null), f(e, c), w && w.m(e, null), g = !0;
    },
    p(s, h) {
      /*finalTitle*/
      s[4] ? p ? p.p(s, h) : (p = Ve(s), p.c(), p.m(e, i)) : p && (p.d(1), p = null), /*isMarketingTag*/
      s[2] && /*primaryTags*/
      (s[3].length > 0 || /*secondaryTags*/
      s[9].length > 0) ? v ? v.p(s, h) : (v = Ie(s), v.c(), v.m(e, a)) : v && (v.d(1), v = null);
      let Y = o;
      o = H(s), o === Y ? ~o && M[o].p(s, h) : (r && (Fe(), L(M[Y], 1, 1, () => {
        M[Y] = null;
      }), Le()), ~o ? (r = M[o], r ? r.p(s, h) : (r = M[o] = B[o](s), r.c()), F(r, 1), r.m(e, u)) : r = null), /*finalDescription*/
      s[16] ? k ? k.p(s, h) : (k = Be(s), k.c(), k.m(e, m)) : k && (k.d(1), k = null), /*marketingPrice*/
      s[8] ? y ? y.p(s, h) : (y = Ye(s), y.c(), y.m(e, b)) : y && (y.d(1), y = null), V && V.p && (!g || h[0] & /*$$scope*/
      536870912) && me(
        V,
        E,
        s,
        /*$$scope*/
        s[29],
        g ? ve(
          E,
          /*$$scope*/
          s[29],
          h,
          Ze
        ) : ge(
          /*$$scope*/
          s[29]
        ),
        we
      ), w && w.p && (!g || h[0] & /*$$scope*/
      536870912) && me(
        w,
        N,
        s,
        /*$$scope*/
        s[29],
        g ? ve(
          N,
          /*$$scope*/
          s[29],
          h,
          Xe
        ) : ge(
          /*$$scope*/
          s[29]
        ),
        ye
      ), (!g || h[0] & /*effectiveTheme*/
      131072 && _ !== (_ = "tag-popup-content " + /*effectiveTheme*/
      s[17] + " svelte-u1dbzb")) && n(e, "class", _), (!g || h[0] & /*placement*/
      1 && U !== (U = "tag-popup tag-popup-" + /*placement*/
      s[0] + " svelte-u1dbzb")) && n(t, "class", U);
    },
    i(s) {
      g || (F(r), F(V, s), F(w, s), g = !0);
    },
    o(s) {
      L(r), L(V, s), L(w, s), g = !1;
    },
    d(s) {
      s && D(t), p && p.d(), v && v.d(), ~o && M[o].d(), k && k.d(), y && y.d(), V && V.d(s), w && w.d(s);
    }
  };
}
function it(l, t, e) {
  let i, a, o, r, u, m, b, c, _, U, g, p, v, B, M, H, k, y, E, V, N, w, s, h, Y, { $$slots: Ee = {}, $$scope: Z } = t, { tag: d } = t, { config: S = {} } = t, { theme: J = void 0 } = t, { placement: R = "right-top" } = t;
  return l.$$set = (P) => {
    "tag" in P && e(1, d = P.tag), "config" in P && e(18, S = P.config), "theme" in P && e(19, J = P.theme), "placement" in P && e(0, R = P.placement), "$$scope" in P && e(29, Z = P.$$scope);
  }, l.$$.update = () => {
    var P, x, $, ee, te, le;
    l.$$.dirty[0] & /*tag*/
    2 && e(2, i = d.contentType === "Marketing"), l.$$.dirty[0] & /*isMarketingTag*/
    4 && e(28, a = i ? "light" : "dark"), l.$$.dirty[0] & /*tag, theme, defaultTheme*/
    268959746 && e(17, o = d.data.theme !== void 0 && d.data.theme !== null ? d.data.theme : J != null ? J : a), l.$$.dirty[0] & /*tag*/
    2 && e(27, r = d.data.title || d.data.name || ""), l.$$.dirty[0] & /*tag*/
    2 && e(26, u = d.data.description || d.data.tooltip || ""), l.$$.dirty[0] & /*title*/
    134217728 && e(4, m = r || ""), l.$$.dirty[0] & /*description*/
    67108864 && e(16, b = u || ""), l.$$.dirty[0] & /*isMarketingTag, tag*/
    6 && e(25, c = (() => {
      var ie, ae, oe, re, ue, be, se, ne, de, pe, fe;
      if (i)
        return null;
      if (d.data.mediaData && d.data.mediaData.length > 0) {
        const q = d.data.mediaData[0];
        if (q.type === "Video") {
          if (q.videoCoverUrl)
            return q.videoCoverUrl;
          if (q.url) {
            const O = q.url.toLowerCase();
            if (he(O)) {
              const K = Ke(O);
              if (K)
                return `https://img.youtube.com/vi/${K}/hqdefault.jpg`;
            }
            if (ke(O)) {
              const K = Oe(O);
              if (K)
                return `https://vumbnail.com/${K}.jpg`;
            }
            return;
          }
        }
        if (d.contentType === "Panorama")
          return (fe = (se = (oe = (ae = (ie = d.data.mediaData) == null ? void 0 : ie[0]) == null ? void 0 : ae.cube) == null ? void 0 : oe.front) != null ? se : (be = (ue = (re = d.data.mediaData) == null ? void 0 : re[0]) == null ? void 0 : ue.thumbnail) == null ? void 0 : be.split("?")[0]) != null ? fe : (pe = (de = (ne = d.data.mediaData) == null ? void 0 : ne[0]) == null ? void 0 : de.url) == null ? void 0 : pe.split("?")[0];
        if (q.url || q.thumbnail)
          return q.url || q.thumbnail;
      }
      return d.data.imageUrl;
    })()), l.$$.dirty[0] & /*config, mediaRawUrl, tag*/
    33816578 && e(15, _ = S != null && S.imageURLTransform && (c != null && c.includes("realsee-cdn") || c != null && c.includes("ljcdn.com")) ? S.imageURLTransform(c, { width: 280, height: 280 }) : c || d.data.mediaUrl || ""), l.$$.dirty[0] & /*tag*/
    2 && e(6, U = d.contentType === "Video" || d.data.mediaType === "video"), l.$$.dirty[0] & /*tag*/
    2 && e(14, g = d.contentType === "Panorama" || d.data.mediaType === "panorama"), l.$$.dirty[0] & /*isVideoMedia, tag*/
    66 && e(24, p = U && d.data.mediaData && ((P = d.data.mediaData[0]) == null ? void 0 : P.url) && he(d.data.mediaData[0].url)), l.$$.dirty[0] & /*isVideoMedia, tag*/
    66 && e(23, v = U && d.data.mediaData && ((x = d.data.mediaData[0]) == null ? void 0 : x.url) && ke(d.data.mediaData[0].url)), l.$$.dirty[0] & /*isYouTubeVideo, isVimeoVideo*/
    25165824 && e(5, B = p || v), l.$$.dirty[0] & /*isExternalVideo, tag*/
    34 && e(13, M = B && d.data.mediaData && (($ = d.data.mediaData[0]) != null && $.url) ? Qe(d.data.mediaData[0].url, { autoplay: 0 }) : ""), l.$$.dirty[0] & /*isYouTubeVideo, isVimeoVideo, finalTitle*/
    25165840 && e(12, H = p ? "YouTube video player" : v ? "Vimeo video player" : m), l.$$.dirty[0] & /*tag*/
    2 && e(11, k = ((ee = d.data.mediaData) == null ? void 0 : ee.length) || 0), l.$$.dirty[0] & /*isMarketingTag, tag*/
    6 && e(22, E = i ? d.data.brandTags || [] : []), l.$$.dirty[0] & /*isMarketingTag, tag*/
    6 && e(21, V = i ? d.data.tags || [] : []), l.$$.dirty[0] & /*marketingBrandTags*/
    4194304 && e(3, N = E.filter(Boolean).slice(0, 2)), l.$$.dirty[0] & /*primaryTags*/
    8 && e(20, w = Math.max(0, 2 - N.length)), l.$$.dirty[0] & /*remainingCount, marketingTags*/
    3145728 && e(9, s = w > 0 ? V.filter(Boolean).slice(0, w) : []), l.$$.dirty[0] & /*isMarketingTag, tag*/
    6 && e(8, h = i && ((te = d.data.price) == null ? void 0 : te.value) || ""), l.$$.dirty[0] & /*isMarketingTag, tag*/
    6 && e(7, Y = i && ((le = d.data.price) == null ? void 0 : le.unit) || "");
  }, e(10, y = 1), [
    R,
    d,
    i,
    N,
    m,
    B,
    U,
    Y,
    h,
    s,
    y,
    k,
    H,
    M,
    g,
    _,
    b,
    o,
    S,
    J,
    w,
    V,
    E,
    v,
    p,
    c,
    u,
    r,
    a,
    Z,
    Ee
  ];
}
class bt extends Ne {
  constructor(t) {
    super(), Se(
      this,
      t,
      it,
      lt,
      Ge,
      {
        tag: 1,
        config: 18,
        theme: 19,
        placement: 0
      },
      We,
      [-1, -1]
    );
  }
}
export {
  bt as default
};
