import { SvelteComponent as lt, init as it, safe_not_equal as at, append_styles as ot, create_slot as Ce, element as b, space as U, attr as f, insert as P, append as q, transition_out as z, check_outros as fe, transition_in as j, update_slot_base as Ue, get_all_dirty_from_scope as Ve, get_slot_changes as Me, detach as I, onDestroy as rt, text as V, set_data as A, destroy_each as je, create_component as ae, mount_component as oe, destroy_component as re, group_outros as ue, src_url_equal as W, set_style as G, noop as ze } from "../../../../vendor/svelte/internal/index.js";
import Re from "../VideoIcon.js";
import nt from "./PanoramaIcon.js";
import { isYouTube as Ae, getYouTubeId as st, isVimeo as Se, getVimeoId as pt, formatVideo as ft } from "../../../utils/videoHelper.js";
import ut from "../AudioPlayer.js";
import "../Icon/audioIcon.js";
import "../../../utils/px2rem.js";
import "../Shadow.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
function qt(l) {
  ot(l, "svelte-817q8q", '@charset "UTF-8";.tag-popup.svelte-817q8q.svelte-817q8q.svelte-817q8q{position:absolute;pointer-events:auto;padding:0.625rem 0.625rem 0.625rem 1.125rem;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;transform-origin:center}.tag-popup-top.svelte-817q8q.svelte-817q8q.svelte-817q8q{transform:translate(-50%, -100%);left:50%}.tag-popup-bottom.svelte-817q8q.svelte-817q8q.svelte-817q8q{transform:translate(-50%, 0);left:50%}.tag-popup-left.svelte-817q8q.svelte-817q8q.svelte-817q8q{transform:translate(-100%, -50%);top:50%}.tag-popup-right.svelte-817q8q.svelte-817q8q.svelte-817q8q{transform:translate(0, -50%);top:50%}.tag-popup-top-left.svelte-817q8q.svelte-817q8q.svelte-817q8q{transform:translate(calc(2.625rem - 100%), -100%)}.tag-popup-top-right.svelte-817q8q.svelte-817q8q.svelte-817q8q{transform:translate(-2.625rem, -100%)}.tag-popup-bottom-left.svelte-817q8q.svelte-817q8q.svelte-817q8q{transform:translate(calc(2.625rem - 100%), 0)}.tag-popup-bottom-right.svelte-817q8q.svelte-817q8q.svelte-817q8q{transform:translate(-2.625rem, 0)}.tag-popup-left-top.svelte-817q8q.svelte-817q8q.svelte-817q8q{transform:translate(-100%, -2.625rem)}.tag-popup-left-bottom.svelte-817q8q.svelte-817q8q.svelte-817q8q{transform:translate(-100%, calc(2.625rem - 100%))}.tag-popup-right-top.svelte-817q8q.svelte-817q8q.svelte-817q8q{transform:translate(0, -2.625rem)}.tag-popup-right-bottom.svelte-817q8q.svelte-817q8q.svelte-817q8q{transform:translate(0, calc(2.625rem - 100%))}.tag-popup-content.svelte-817q8q.svelte-817q8q.svelte-817q8q{position:relative;pointer-events:auto;cursor:pointer;padding:1.25rem;border-radius:0.375rem;max-width:17.5rem;width:17.5rem;background:rgba(0, 0, 0, 0.7490196078)}.tag-popup-top.svelte-817q8q .tag-popup-content.svelte-817q8q.svelte-817q8q,.tag-popup-top-left.svelte-817q8q .tag-popup-content.svelte-817q8q.svelte-817q8q,.tag-popup-top-right.svelte-817q8q .tag-popup-content.svelte-817q8q.svelte-817q8q{box-shadow:0.03125rem 0 0 0 rgba(255, 255, 255, 0.3), -0.03125rem 0 0 0 rgba(255, 255, 255, 0.3)}.tag-popup-bottom.svelte-817q8q .tag-popup-content.svelte-817q8q.svelte-817q8q,.tag-popup-bottom-left.svelte-817q8q .tag-popup-content.svelte-817q8q.svelte-817q8q,.tag-popup-bottom-right.svelte-817q8q .tag-popup-content.svelte-817q8q.svelte-817q8q{box-shadow:0.03125rem 0 0 0 rgba(255, 255, 255, 0.3), -0.03125rem 0 0 0 rgba(255, 255, 255, 0.3)}.tag-popup-left.svelte-817q8q .tag-popup-content.svelte-817q8q.svelte-817q8q,.tag-popup-left-top.svelte-817q8q .tag-popup-content.svelte-817q8q.svelte-817q8q,.tag-popup-left-bottom.svelte-817q8q .tag-popup-content.svelte-817q8q.svelte-817q8q{box-shadow:0 0.03125rem 0 0 rgba(255, 255, 255, 0.3), 0 -0.03125rem 0 0 rgba(255, 255, 255, 0.3)}.tag-popup-right.svelte-817q8q .tag-popup-content.svelte-817q8q.svelte-817q8q,.tag-popup-right-top.svelte-817q8q .tag-popup-content.svelte-817q8q.svelte-817q8q,.tag-popup-right-bottom.svelte-817q8q .tag-popup-content.svelte-817q8q.svelte-817q8q{box-shadow:0 0.03125rem 0 0 rgba(255, 255, 255, 0.3), 0 -0.03125rem 0 0 rgba(255, 255, 255, 0.3)}.light.svelte-817q8q.svelte-817q8q.svelte-817q8q{background:#ffffff}.tag-popup-title.svelte-817q8q.svelte-817q8q.svelte-817q8q{margin:0;font-size:1rem;font-weight:600;line-height:1.375rem;letter-spacing:0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;color:#ffffff}.light.svelte-817q8q .tag-popup-title.svelte-817q8q.svelte-817q8q{color:rgba(0, 0, 0, 0.8509803922)}.tag-popup-description.svelte-817q8q.svelte-817q8q.svelte-817q8q{margin:0;font-size:0.875rem;font-weight:400;color:#ffffff;line-height:1.25rem;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;max-height:5rem;overflow:hidden;word-wrap:break-word;word-break:break-word;text-overflow:ellipsis;white-space:pre-wrap}.light.svelte-817q8q .tag-popup-description.svelte-817q8q.svelte-817q8q{color:rgba(0, 0, 0, 0.8509803922)}.tag-popup-tags.svelte-817q8q.svelte-817q8q.svelte-817q8q{display:flex;align-items:center;margin:0;margin-bottom:0}.tag-popup-tags.svelte-817q8q .tag-popup-tag.svelte-817q8q+.tag-popup-tag.svelte-817q8q{margin-left:0.25rem}.tag-popup-tag.svelte-817q8q.svelte-817q8q.svelte-817q8q{padding:0.125rem 0.25rem;display:flex;align-items:center;justify-content:center;border-radius:0.25rem;font-size:0.75rem;line-height:1.125rem;letter-spacing:0;border-radius:0.125rem;max-width:7.5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag-popup-tag-primary.svelte-817q8q.svelte-817q8q.svelte-817q8q{color:#ffffff;background-image:linear-gradient(90deg, #ead09a 0%, #e0cca3 100%)}.light.svelte-817q8q .tag-popup-tag-primary.svelte-817q8q.svelte-817q8q{color:#946700;background-image:linear-gradient(90deg, #ead09a 0%, #e0cca3 100%)}.tag-popup-tag-secondary.svelte-817q8q.svelte-817q8q.svelte-817q8q{color:#ffffff;background:rgba(255, 255, 255, 0.1490196078)}.light.svelte-817q8q .tag-popup-tag-secondary.svelte-817q8q.svelte-817q8q{color:rgba(0, 0, 0, 0.5019607843);background:rgba(0, 0, 0, 0.0588235294)}.tag-popup-price.svelte-817q8q.svelte-817q8q.svelte-817q8q{font-family:DINAlternate-Bold;font-weight:700;font-size:1.25rem;color:#ae7900;letter-spacing:0;text-align:center;display:flex;justify-content:flex-start;align-items:center;width:100%;margin:0}.tag-popup-media.svelte-817q8q.svelte-817q8q.svelte-817q8q{width:15rem;height:10rem;margin:0 auto;overflow:hidden;border-radius:0.25rem;display:flex;align-items:center;justify-content:center;position:relative}.tag-popup-media.svelte-817q8q img.svelte-817q8q.svelte-817q8q{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block}.tag-popup-media-type.svelte-817q8q.svelte-817q8q.svelte-817q8q{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:2}.tag-popup-media-index.svelte-817q8q.svelte-817q8q.svelte-817q8q{position:absolute;right:0.375rem;bottom:0.375rem;padding:0.0625rem 0.25rem;background:rgba(0, 0, 0, 0.5);border-radius:0.125rem;font-weight:bold;font-size:0.75rem;color:#ffffff;letter-spacing:0;line-height:1.125rem}.iframe-overlay.svelte-817q8q.svelte-817q8q.svelte-817q8q{position:absolute;top:0;left:0;width:100%;height:100%;background:transparent;z-index:10}.tag-popup-content.svelte-817q8q>.svelte-817q8q+.svelte-817q8q{margin-top:0.5rem}.tag-popup-content.svelte-817q8q>.svelte-817q8q.svelte-817q8q:first-child{margin-top:0 !important}');
}
const dt = (l) => ({}), Fe = (l) => ({}), mt = (l) => ({}), Be = (l) => ({});
function Le(l, t, e) {
  const a = l.slice();
  return a[2] = t[e], a;
}
function Ye(l, t, e) {
  const a = l.slice();
  return a[2] = t[e], a;
}
function Ee(l) {
  let t, e;
  return {
    c() {
      t = b("h3"), e = V(
        /*finalTitle*/
        l[5]
      ), f(t, "class", "tag-popup-title svelte-817q8q");
    },
    m(a, i) {
      P(a, t, i), q(t, e);
    },
    p(a, i) {
      i[0] & /*finalTitle*/
      32 && A(
        e,
        /*finalTitle*/
        a[5]
      );
    },
    d(a) {
      a && I(t);
    }
  };
}
function Ne(l) {
  let t, e, a = (
    /*primaryTags*/
    l[4]
  ), i = [];
  for (let n = 0; n < a.length; n += 1)
    i[n] = Ge(Ye(l, a, n));
  let o = (
    /*secondaryTags*/
    l[13]
  ), r = [];
  for (let n = 0; n < o.length; n += 1)
    r[n] = He(Le(l, o, n));
  return {
    c() {
      t = b("div");
      for (let n = 0; n < i.length; n += 1)
        i[n].c();
      e = U();
      for (let n = 0; n < r.length; n += 1)
        r[n].c();
      f(t, "class", "tag-popup-tags svelte-817q8q");
    },
    m(n, d) {
      P(n, t, d);
      for (let s = 0; s < i.length; s += 1)
        i[s] && i[s].m(t, null);
      q(t, e);
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(t, null);
    },
    p(n, d) {
      if (d[0] & /*primaryTags*/
      16) {
        a = /*primaryTags*/
        n[4];
        let s;
        for (s = 0; s < a.length; s += 1) {
          const c = Ye(n, a, s);
          i[s] ? i[s].p(c, d) : (i[s] = Ge(c), i[s].c(), i[s].m(t, e));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = a.length;
      }
      if (d[0] & /*secondaryTags*/
      8192) {
        o = /*secondaryTags*/
        n[13];
        let s;
        for (s = 0; s < o.length; s += 1) {
          const c = Le(n, o, s);
          r[s] ? r[s].p(c, d) : (r[s] = He(c), r[s].c(), r[s].m(t, null));
        }
        for (; s < r.length; s += 1)
          r[s].d(1);
        r.length = o.length;
      }
    },
    d(n) {
      n && I(t), je(i, n), je(r, n);
    }
  };
}
function Ge(l) {
  let t, e = (
    /*tag*/
    l[2] + ""
  ), a;
  return {
    c() {
      t = b("div"), a = V(e), f(t, "class", "tag-popup-tag tag-popup-tag-primary svelte-817q8q");
    },
    m(i, o) {
      P(i, t, o), q(t, a);
    },
    p(i, o) {
      o[0] & /*primaryTags*/
      16 && e !== (e = /*tag*/
      i[2] + "") && A(a, e);
    },
    d(i) {
      i && I(t);
    }
  };
}
function He(l) {
  let t, e = (
    /*tag*/
    l[2] + ""
  ), a;
  return {
    c() {
      t = b("div"), a = V(e), f(t, "class", "tag-popup-tag tag-popup-tag-secondary svelte-817q8q");
    },
    m(i, o) {
      P(i, t, o), q(t, a);
    },
    p(i, o) {
      o[0] & /*secondaryTags*/
      8192 && e !== (e = /*tag*/
      i[2] + "") && A(a, e);
    },
    d(i) {
      i && I(t);
    }
  };
}
function ct(l) {
  let t, e, a, i, o, r, n, d;
  r = new Re({});
  let s = (
    /*mediaCount*/
    l[15] > 1 && Je(l)
  );
  return {
    c() {
      t = b("div"), e = b("video"), i = U(), o = b("div"), ae(r.$$.fragment), n = U(), s && s.c(), W(e.src, a = /*tag*/
      l[2].data.mediaData[0].url) || f(e, "src", a), f(e, "class", "tag-popup-video-fallback"), e.controls = !1, e.autoplay = !1, e.muted = !0, e.loop = !0, f(e, "preload", "metadata"), f(e, "disablepictureinpicture", ""), e.playsInline = !0, G(e, "width", "100%"), G(e, "height", "100%"), G(e, "object-fit", "cover"), f(o, "class", "tag-popup-media-type svelte-817q8q"), f(t, "class", "tag-popup-media svelte-817q8q");
    },
    m(c, g) {
      P(c, t, g), q(t, e), q(t, i), q(t, o), oe(r, o, null), q(t, n), s && s.m(t, null), d = !0;
    },
    p(c, g) {
      (!d || g[0] & /*tag*/
      4 && !W(e.src, a = /*tag*/
      c[2].data.mediaData[0].url)) && f(e, "src", a), /*mediaCount*/
      c[15] > 1 ? s ? s.p(c, g) : (s = Je(c), s.c(), s.m(t, null)) : s && (s.d(1), s = null);
    },
    i(c) {
      d || (j(r.$$.fragment, c), d = !0);
    },
    o(c) {
      z(r.$$.fragment, c), d = !1;
    },
    d(c) {
      c && I(t), re(r), s && s.d();
    }
  };
}
function gt(l) {
  let t, e, a, i, o, r, n, d, s;
  const c = [ht, _t], g = [];
  function F(m, v) {
    return (
      /*isVideoMedia*/
      m[7] ? 0 : (
        /*isPanoramaMedia*/
        m[18] ? 1 : -1
      )
    );
  }
  ~(r = F(l)) && (n = g[r] = c[r](l));
  let _ = (
    /*mediaCount*/
    l[15] > 1 && Ke(l)
  );
  return {
    c() {
      t = b("div"), e = b("img"), o = U(), n && n.c(), d = U(), _ && _.c(), W(e.src, a = /*mediaUrl*/
      l[19]) || f(e, "src", a), f(e, "alt", i = /*finalTitle*/
      l[5] || ""), f(e, "draggable", "false"), f(e, "class", "svelte-817q8q"), f(t, "class", "tag-popup-media svelte-817q8q");
    },
    m(m, v) {
      P(m, t, v), q(t, e), q(t, o), ~r && g[r].m(t, null), q(t, d), _ && _.m(t, null), s = !0;
    },
    p(m, v) {
      (!s || v[0] & /*mediaUrl*/
      524288 && !W(e.src, a = /*mediaUrl*/
      m[19])) && f(e, "src", a), (!s || v[0] & /*finalTitle*/
      32 && i !== (i = /*finalTitle*/
      m[5] || "")) && f(e, "alt", i);
      let y = r;
      r = F(m), r !== y && (n && (ue(), z(g[y], 1, 1, () => {
        g[y] = null;
      }), fe()), ~r ? (n = g[r], n || (n = g[r] = c[r](m), n.c()), j(n, 1), n.m(t, d)) : n = null), /*mediaCount*/
      m[15] > 1 ? _ ? _.p(m, v) : (_ = Ke(m), _.c(), _.m(t, null)) : _ && (_.d(1), _ = null);
    },
    i(m) {
      s || (j(n), s = !0);
    },
    o(m) {
      z(n), s = !1;
    },
    d(m) {
      m && I(t), ~r && g[r].d(), _ && _.d();
    }
  };
}
function vt(l) {
  let t, e, a, i, o, r, n = (
    /*mediaCount*/
    l[15] > 1 && Oe(l)
  );
  return {
    c() {
      t = b("div"), e = b("iframe"), i = U(), o = b("div"), r = U(), n && n.c(), f(
        e,
        "title",
        /*videoPlayerTitle*/
        l[16]
      ), W(e.src, a = /*formattedVideoUrl*/
      l[17]) || f(e, "src", a), f(e, "class", "tag-popup-video-iframe"), f(e, "frameborder", "0"), f(e, "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"), f(e, "referrerpolicy", "strict-origin-when-cross-origin"), e.allowFullscreen = !0, G(e, "width", "100%"), G(e, "height", "100%"), G(e, "position", "absolute"), G(e, "top", "0"), G(e, "left", "0"), f(o, "class", "iframe-overlay svelte-817q8q"), f(t, "class", "tag-popup-media svelte-817q8q");
    },
    m(d, s) {
      P(d, t, s), q(t, e), q(t, i), q(t, o), q(t, r), n && n.m(t, null);
    },
    p(d, s) {
      s[0] & /*videoPlayerTitle*/
      65536 && f(
        e,
        "title",
        /*videoPlayerTitle*/
        d[16]
      ), s[0] & /*formattedVideoUrl*/
      131072 && !W(e.src, a = /*formattedVideoUrl*/
      d[17]) && f(e, "src", a), /*mediaCount*/
      d[15] > 1 ? n ? n.p(d, s) : (n = Oe(d), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: ze,
    o: ze,
    d(d) {
      d && I(t), n && n.d();
    }
  };
}
function Je(l) {
  let t, e, a, i;
  return {
    c() {
      t = b("div"), e = V(
        /*currentMediaIndex*/
        l[14]
      ), a = V("/"), i = V(
        /*mediaCount*/
        l[15]
      ), f(t, "class", "tag-popup-media-index svelte-817q8q");
    },
    m(o, r) {
      P(o, t, r), q(t, e), q(t, a), q(t, i);
    },
    p(o, r) {
      r[0] & /*currentMediaIndex*/
      16384 && A(
        e,
        /*currentMediaIndex*/
        o[14]
      ), r[0] & /*mediaCount*/
      32768 && A(
        i,
        /*mediaCount*/
        o[15]
      );
    },
    d(o) {
      o && I(t);
    }
  };
}
function _t(l) {
  let t, e, a;
  return e = new nt({}), {
    c() {
      t = b("div"), ae(e.$$.fragment), f(t, "class", "tag-popup-media-type svelte-817q8q");
    },
    m(i, o) {
      P(i, t, o), oe(e, t, null), a = !0;
    },
    i(i) {
      a || (j(e.$$.fragment, i), a = !0);
    },
    o(i) {
      z(e.$$.fragment, i), a = !1;
    },
    d(i) {
      i && I(t), re(e);
    }
  };
}
function ht(l) {
  let t, e, a;
  return e = new Re({}), {
    c() {
      t = b("div"), ae(e.$$.fragment), f(t, "class", "tag-popup-media-type svelte-817q8q");
    },
    m(i, o) {
      P(i, t, o), oe(e, t, null), a = !0;
    },
    i(i) {
      a || (j(e.$$.fragment, i), a = !0);
    },
    o(i) {
      z(e.$$.fragment, i), a = !1;
    },
    d(i) {
      i && I(t), re(e);
    }
  };
}
function Ke(l) {
  let t, e, a, i;
  return {
    c() {
      t = b("div"), e = V(
        /*currentMediaIndex*/
        l[14]
      ), a = V("/"), i = V(
        /*mediaCount*/
        l[15]
      ), f(t, "class", "tag-popup-media-index svelte-817q8q");
    },
    m(o, r) {
      P(o, t, r), q(t, e), q(t, a), q(t, i);
    },
    p(o, r) {
      r[0] & /*currentMediaIndex*/
      16384 && A(
        e,
        /*currentMediaIndex*/
        o[14]
      ), r[0] & /*mediaCount*/
      32768 && A(
        i,
        /*mediaCount*/
        o[15]
      );
    },
    d(o) {
      o && I(t);
    }
  };
}
function Oe(l) {
  let t, e, a, i;
  return {
    c() {
      t = b("div"), e = V(
        /*currentMediaIndex*/
        l[14]
      ), a = V("/"), i = V(
        /*mediaCount*/
        l[15]
      ), f(t, "class", "tag-popup-media-index svelte-817q8q");
    },
    m(o, r) {
      P(o, t, r), q(t, e), q(t, a), q(t, i);
    },
    p(o, r) {
      r[0] & /*currentMediaIndex*/
      16384 && A(
        e,
        /*currentMediaIndex*/
        o[14]
      ), r[0] & /*mediaCount*/
      32768 && A(
        i,
        /*mediaCount*/
        o[15]
      );
    },
    d(o) {
      o && I(t);
    }
  };
}
function Qe(l) {
  let t, e;
  return {
    c() {
      t = b("div"), e = V(
        /*finalDescription*/
        l[20]
      ), f(t, "class", "tag-popup-description svelte-817q8q");
    },
    m(a, i) {
      P(a, t, i), q(t, e);
    },
    p(a, i) {
      i[0] & /*finalDescription*/
      1048576 && A(
        e,
        /*finalDescription*/
        a[20]
      );
    },
    d(a) {
      a && I(t);
    }
  };
}
function We(l) {
  let t, e, a;
  return e = new ut({
    props: {
      playing: (
        /*audioPlaying*/
        l[1]
      ),
      progress: (
        /*audioProgress*/
        l[9]
      ),
      elapsedTime: (
        /*audioElapsedTime*/
        l[10]
      ),
      onClick: (
        /*handleAudioPlayerClick*/
        l[22]
      )
    }
  }), {
    c() {
      t = b("div"), ae(e.$$.fragment), f(t, "class", "tag-popup-audio-player-wrapper svelte-817q8q");
    },
    m(i, o) {
      P(i, t, o), oe(e, t, null), a = !0;
    },
    p(i, o) {
      const r = {};
      o[0] & /*audioPlaying*/
      2 && (r.playing = /*audioPlaying*/
      i[1]), o[0] & /*audioProgress*/
      512 && (r.progress = /*audioProgress*/
      i[9]), o[0] & /*audioElapsedTime*/
      1024 && (r.elapsedTime = /*audioElapsedTime*/
      i[10]), e.$set(r);
    },
    i(i) {
      a || (j(e.$$.fragment, i), a = !0);
    },
    o(i) {
      z(e.$$.fragment, i), a = !1;
    },
    d(i) {
      i && I(t), re(e);
    }
  };
}
function Xe(l) {
  let t, e, a, i, o = (
    /*marketingPriceUnit*/
    l[11] && Ze(l)
  );
  return {
    c() {
      t = b("div"), o && o.c(), e = U(), a = b("span"), i = V(
        /*marketingPrice*/
        l[12]
      ), f(a, "class", "tag-popup-price-value"), f(t, "class", "tag-popup-price svelte-817q8q");
    },
    m(r, n) {
      P(r, t, n), o && o.m(t, null), q(t, e), q(t, a), q(a, i);
    },
    p(r, n) {
      /*marketingPriceUnit*/
      r[11] ? o ? o.p(r, n) : (o = Ze(r), o.c(), o.m(t, e)) : o && (o.d(1), o = null), n[0] & /*marketingPrice*/
      4096 && A(
        i,
        /*marketingPrice*/
        r[12]
      );
    },
    d(r) {
      r && I(t), o && o.d();
    }
  };
}
function Ze(l) {
  let t, e;
  return {
    c() {
      t = b("span"), e = V(
        /*marketingPriceUnit*/
        l[11]
      ), f(t, "class", "tag-popup-price-unit");
    },
    m(a, i) {
      P(a, t, i), q(t, e);
    },
    p(a, i) {
      i[0] & /*marketingPriceUnit*/
      2048 && A(
        e,
        /*marketingPriceUnit*/
        a[11]
      );
    },
    d(a) {
      a && I(t);
    }
  };
}
function bt(l) {
  let t, e, a, i, o, r, n, d, s, c, g, F, _, m, v = (
    /*finalTitle*/
    l[5] && Ee(l)
  ), y = (
    /*isMarketingTag*/
    l[3] && /*primaryTags*/
    (l[4].length > 0 || /*secondaryTags*/
    l[13].length > 0) && Ne(l)
  );
  const J = [vt, gt, ct], S = [];
  function X(p, w) {
    var N;
    return (
      /*isExternalVideo*/
      p[6] && /*formattedVideoUrl*/
      p[17] ? 0 : (
        /*mediaUrl*/
        p[19] ? 1 : (
          /*isVideoMedia*/
          p[7] && /*tag*/
          p[2].data.mediaData && /*tag*/
          ((N = p[2].data.mediaData[0]) != null && N.url) ? 2 : -1
        )
      )
    );
  }
  ~(o = X(l)) && (r = S[o] = J[o](l));
  let D = (
    /*finalDescription*/
    l[20] && Qe(l)
  ), k = (
    /*isAudioTag*/
    l[8] && We(l)
  ), T = (
    /*marketingPrice*/
    l[12] && Xe(l)
  );
  const H = (
    /*#slots*/
    l[38].toolbar
  ), C = Ce(
    H,
    l,
    /*$$scope*/
    l[37],
    Be
  ), E = (
    /*#slots*/
    l[38].arrow
  ), M = Ce(
    E,
    l,
    /*$$scope*/
    l[37],
    Fe
  );
  return {
    c() {
      t = b("div"), e = b("div"), v && v.c(), a = U(), y && y.c(), i = U(), r && r.c(), n = U(), D && D.c(), d = U(), k && k.c(), s = U(), T && T.c(), c = U(), C && C.c(), g = U(), M && M.c(), f(e, "class", F = "tag-popup-content " + /*effectiveTheme*/
      l[21] + " svelte-817q8q"), f(t, "class", _ = "tag-popup tag-popup-" + /*placement*/
      l[0] + " svelte-817q8q");
    },
    m(p, w) {
      P(p, t, w), q(t, e), v && v.m(e, null), q(e, a), y && y.m(e, null), q(e, i), ~o && S[o].m(e, null), q(e, n), D && D.m(e, null), q(e, d), k && k.m(e, null), q(e, s), T && T.m(e, null), q(e, c), C && C.m(e, null), q(e, g), M && M.m(e, null), m = !0;
    },
    p(p, w) {
      /*finalTitle*/
      p[5] ? v ? v.p(p, w) : (v = Ee(p), v.c(), v.m(e, a)) : v && (v.d(1), v = null), /*isMarketingTag*/
      p[3] && /*primaryTags*/
      (p[4].length > 0 || /*secondaryTags*/
      p[13].length > 0) ? y ? y.p(p, w) : (y = Ne(p), y.c(), y.m(e, i)) : y && (y.d(1), y = null);
      let N = o;
      o = X(p), o === N ? ~o && S[o].p(p, w) : (r && (ue(), z(S[N], 1, 1, () => {
        S[N] = null;
      }), fe()), ~o ? (r = S[o], r ? r.p(p, w) : (r = S[o] = J[o](p), r.c()), j(r, 1), r.m(e, n)) : r = null), /*finalDescription*/
      p[20] ? D ? D.p(p, w) : (D = Qe(p), D.c(), D.m(e, d)) : D && (D.d(1), D = null), /*isAudioTag*/
      p[8] ? k ? (k.p(p, w), w[0] & /*isAudioTag*/
      256 && j(k, 1)) : (k = We(p), k.c(), j(k, 1), k.m(e, s)) : k && (ue(), z(k, 1, 1, () => {
        k = null;
      }), fe()), /*marketingPrice*/
      p[12] ? T ? T.p(p, w) : (T = Xe(p), T.c(), T.m(e, c)) : T && (T.d(1), T = null), C && C.p && (!m || w[1] & /*$$scope*/
      64) && Ue(
        C,
        H,
        p,
        /*$$scope*/
        p[37],
        m ? Me(
          H,
          /*$$scope*/
          p[37],
          w,
          mt
        ) : Ve(
          /*$$scope*/
          p[37]
        ),
        Be
      ), M && M.p && (!m || w[1] & /*$$scope*/
      64) && Ue(
        M,
        E,
        p,
        /*$$scope*/
        p[37],
        m ? Me(
          E,
          /*$$scope*/
          p[37],
          w,
          dt
        ) : Ve(
          /*$$scope*/
          p[37]
        ),
        Fe
      ), (!m || w[0] & /*effectiveTheme*/
      2097152 && F !== (F = "tag-popup-content " + /*effectiveTheme*/
      p[21] + " svelte-817q8q")) && f(e, "class", F), (!m || w[0] & /*placement*/
      1 && _ !== (_ = "tag-popup tag-popup-" + /*placement*/
      p[0] + " svelte-817q8q")) && f(t, "class", _);
    },
    i(p) {
      m || (j(r), j(k), j(C, p), j(M, p), m = !0);
    },
    o(p) {
      z(r), z(k), z(C, p), z(M, p), m = !1;
    },
    d(p) {
      p && I(t), v && v.d(), y && y.d(), ~o && S[o].d(), D && D.d(), k && k.d(), T && T.d(), C && C.d(p), M && M.d(p);
    }
  };
}
function yt(l) {
  const t = Math.floor(l / 60), e = Math.floor(l % 60);
  return `${t.toString().padStart(2, "0")}:${e.toString().padStart(2, "0")}`;
}
function kt(l, t, e) {
  let a, i, o, r, n, d, s, c, g, F, _, m, v, y, J, S, X, D, k, T, H, C, E, M, p, w, { $$slots: N = {}, $$scope: qe } = t, { tag: u } = t, { config: K = {} } = t, { theme: Z = void 0 } = t, { placement: de = "right-top" } = t, { audioInstance: O = null } = t, { audioPlaying: R = !1 } = t, { audioCurrentTime: ee = 0 } = t, { audioDuration: B = 0 } = t, ne = 0, se = "00:00", L = null, me = 0, Q = 0;
  function xe() {
    return B > 0 ? ee / B * 100 : 0;
  }
  function ce() {
    if (!R || B <= 0) {
      L = null;
      return;
    }
    const te = (Date.now() - me) / 1e3, le = ee + te, x = Math.min(le / B * 100, 100) - Q;
    Math.abs(x) > 0.05 && (Q += x * 0.2), L = requestAnimationFrame(ce);
  }
  function $e() {
    if (!i)
      return;
    const h = xe();
    B > 0 ? (R || (Q = h), e(9, ne = Q), e(10, se = yt(Q / 100 * B)), me = Date.now()) : (Q = 0, e(9, ne = 0), e(10, se = "00:00"));
  }
  function et() {
    R && B > 0 ? L || ce() : L && (cancelAnimationFrame(L), L = null);
  }
  function tt() {
    O && (O.paused ? O.play() : O.pause());
  }
  return rt(() => {
    L && (cancelAnimationFrame(L), L = null);
  }), l.$$set = (h) => {
    "tag" in h && e(2, u = h.tag), "config" in h && e(23, K = h.config), "theme" in h && e(24, Z = h.theme), "placement" in h && e(0, de = h.placement), "audioInstance" in h && e(25, O = h.audioInstance), "audioPlaying" in h && e(1, R = h.audioPlaying), "audioCurrentTime" in h && e(26, ee = h.audioCurrentTime), "audioDuration" in h && e(27, B = h.audioDuration), "$$scope" in h && e(37, qe = h.$$scope);
  }, l.$$.update = () => {
    var h, te, le, pe, x, ge;
    l.$$.dirty[0] & /*tag*/
    4 && e(3, a = u.contentType === "Marketing"), l.$$.dirty[0] & /*tag*/
    4 && e(8, i = u.contentType === "Audio"), l.$$.dirty[0] & /*isMarketingTag*/
    8 && e(36, o = a ? "light" : "dark"), l.$$.dirty[0] & /*tag, theme*/
    16777220 | l.$$.dirty[1] & /*defaultTheme*/
    32 && e(21, r = u.data.theme !== void 0 && u.data.theme !== null ? u.data.theme : Z != null ? Z : o), l.$$.dirty[0] & /*tag*/
    4 && e(35, n = u.data.title || u.data.name || ""), l.$$.dirty[0] & /*tag*/
    4 && e(34, d = u.data.description || u.data.tooltip || ""), l.$$.dirty[1] & /*title*/
    16 && e(5, s = n || ""), l.$$.dirty[1] & /*description*/
    8 && e(20, c = d || ""), l.$$.dirty[0] & /*audioCurrentTime, audioDuration, audioPlaying*/
    201326594 && $e(), l.$$.dirty[0] & /*audioPlaying, audioDuration*/
    134217730 && et(), l.$$.dirty[0] & /*isAudioTag, isMarketingTag, tag*/
    268 && e(33, g = (() => {
      var ve, _e, he, be, ye, ke, we, Te, De, Pe, Ie;
      if (i || a)
        return null;
      if (u.data.mediaData && u.data.mediaData.length > 0) {
        const Y = u.data.mediaData[0];
        if (Y.type === "Video") {
          if (Y.videoCoverUrl)
            return Y.videoCoverUrl;
          if (Y.url) {
            const ie = Y.url.toLowerCase();
            if (Ae(ie)) {
              const $ = st(ie);
              if ($)
                return `https://img.youtube.com/vi/${$}/hqdefault.jpg`;
            }
            if (Se(ie)) {
              const $ = pt(ie);
              if ($)
                return `https://vumbnail.com/${$}.jpg`;
            }
            return;
          }
        }
        if (u.contentType === "Panorama")
          return (Ie = (we = (he = (_e = (ve = u.data.mediaData) == null ? void 0 : ve[0]) == null ? void 0 : _e.cube) == null ? void 0 : he.front) != null ? we : (ke = (ye = (be = u.data.mediaData) == null ? void 0 : be[0]) == null ? void 0 : ye.thumbnail) == null ? void 0 : ke.split("?")[0]) != null ? Ie : (Pe = (De = (Te = u.data.mediaData) == null ? void 0 : Te[0]) == null ? void 0 : De.url) == null ? void 0 : Pe.split("?")[0];
        if (Y.url || Y.thumbnail)
          return Y.url || Y.thumbnail;
      }
      return u.data.imageUrl;
    })()), l.$$.dirty[0] & /*config, tag*/
    8388612 | l.$$.dirty[1] & /*mediaRawUrl*/
    4 && e(19, F = K != null && K.imageURLTransform && (g != null && g.includes("realsee-cdn") || g != null && g.includes("ljcdn.com")) ? K.imageURLTransform(g, { width: 280, height: 280 }) : g || u.data.mediaUrl || ""), l.$$.dirty[0] & /*tag*/
    4 && e(7, _ = u.contentType === "Video" || u.data.mediaType === "video"), l.$$.dirty[0] & /*tag*/
    4 && e(18, m = u.contentType === "Panorama" || u.data.mediaType === "panorama"), l.$$.dirty[0] & /*isVideoMedia, tag*/
    132 && e(32, v = _ && u.data.mediaData && ((h = u.data.mediaData[0]) == null ? void 0 : h.url) && Ae(u.data.mediaData[0].url)), l.$$.dirty[0] & /*isVideoMedia, tag*/
    132 && e(31, y = _ && u.data.mediaData && ((te = u.data.mediaData[0]) == null ? void 0 : te.url) && Se(u.data.mediaData[0].url)), l.$$.dirty[1] & /*isYouTubeVideo, isVimeoVideo*/
    3 && e(6, J = v || y), l.$$.dirty[0] & /*isExternalVideo, tag*/
    68 && e(17, S = J && u.data.mediaData && ((le = u.data.mediaData[0]) != null && le.url) ? ft(u.data.mediaData[0].url, { autoplay: 0 }) : ""), l.$$.dirty[0] & /*finalTitle*/
    32 | l.$$.dirty[1] & /*isYouTubeVideo, isVimeoVideo*/
    3 && e(16, X = v ? "YouTube video player" : y ? "Vimeo video player" : s), l.$$.dirty[0] & /*tag*/
    4 && e(15, D = ((pe = u.data.mediaData) == null ? void 0 : pe.length) || 0), l.$$.dirty[0] & /*isMarketingTag, tag*/
    12 && e(30, T = a ? u.data.brandTags || [] : []), l.$$.dirty[0] & /*isMarketingTag, tag*/
    12 && e(29, H = a ? u.data.tags || [] : []), l.$$.dirty[0] & /*marketingBrandTags*/
    1073741824 && e(4, C = T.filter(Boolean).slice(0, 2)), l.$$.dirty[0] & /*primaryTags*/
    16 && e(28, E = Math.max(0, 2 - C.length)), l.$$.dirty[0] & /*remainingCount, marketingTags*/
    805306368 && e(13, M = E > 0 ? H.filter(Boolean).slice(0, E) : []), l.$$.dirty[0] & /*isMarketingTag, tag*/
    12 && e(12, p = a && ((x = u.data.price) == null ? void 0 : x.value) || ""), l.$$.dirty[0] & /*isMarketingTag, tag*/
    12 && e(11, w = a && ((ge = u.data.price) == null ? void 0 : ge.unit) || "");
  }, e(14, k = 1), [
    de,
    R,
    u,
    a,
    C,
    s,
    J,
    _,
    i,
    ne,
    se,
    w,
    p,
    M,
    k,
    D,
    X,
    S,
    m,
    F,
    c,
    r,
    tt,
    K,
    Z,
    O,
    ee,
    B,
    E,
    H,
    T,
    y,
    v,
    g,
    d,
    n,
    o,
    qe,
    N
  ];
}
class zt extends lt {
  constructor(t) {
    super(), it(
      this,
      t,
      kt,
      bt,
      at,
      {
        tag: 2,
        config: 23,
        theme: 24,
        placement: 0,
        audioInstance: 25,
        audioPlaying: 1,
        audioCurrentTime: 26,
        audioDuration: 27
      },
      qt,
      [-1, -1]
    );
  }
}
export {
  zt as default
};
