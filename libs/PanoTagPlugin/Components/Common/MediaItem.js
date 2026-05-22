import { SvelteComponent as A, init as J, safe_not_equal as R, append_styles as X, empty as D, insert as p, noop as V, detach as h, getContext as j, onMount as G, element as k, attr as r, binding_callbacks as K, space as Q, set_style as _, toggle_class as v, append as U, listen as P, src_url_equal as w, run_all as Y } from "../../../vendor/svelte/internal/index.js";
import { Image_Play_Icon_With_Text as Z, Image_Play_Icon as x } from "../../Assets/Icon.js";
function $(n) {
  X(n, "svelte-159ski6", ".media-item.svelte-159ski6.svelte-159ski6{position:relative;height:100%}.media-content.svelte-159ski6.svelte-159ski6{position:relative;pointer-events:auto;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;-o-object-fit:inherit;object-fit:inherit}.media-content.showPlayButton.svelte-159ski6.svelte-159ski6{pointer-events:none}.video-icon.svelte-159ski6.svelte-159ski6{width:12.5rem;height:6.25rem;max-width:60%;max-height:60%;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.video-play-button-container.svelte-159ski6.svelte-159ski6{display:none;position:absolute;width:100%;height:100%;top:0;left:0;transform:translate3d(0, 0, 0)}.video-play-button-container.showPlayButton.svelte-159ski6.svelte-159ski6{pointer-events:none;display:block}.video-icon.svelte-159ski6.svelte-159ski6{pointer-events:auto}.video-icon.large.svelte-159ski6.svelte-159ski6{width:12.5rem;height:6.25rem}.video-icon.small.svelte-159ski6.svelte-159ski6{width:1.75rem;height:1.75rem}.video-icon.svelte-159ski6 .video-icon-img.svelte-159ski6{width:100%;height:100%;background-position:center center;background-size:contain;background-repeat:no-repeat}.video-icon.svelte-159ski6 .video-icon-img.canPlay.svelte-159ski6{cursor:pointer}");
}
function L(n) {
  let e;
  function i(l, f) {
    if (
      /*media*/
      l[2].type === "Image"
    )
      return te;
    if (
      /*media*/
      l[2].type === "Video"
    )
      return ee;
  }
  let t = i(n), o = t && t(n);
  return {
    c() {
      e = k("div"), o && o.c(), r(e, "class", "media-item svelte-159ski6"), r(e, "draggable", "false");
    },
    m(l, f) {
      p(l, e, f), o && o.m(e, null);
    },
    p(l, f) {
      t === (t = i(l)) && o ? o.p(l, f) : (o && o.d(1), o = t && t(l), o && (o.c(), o.m(e, null)));
    },
    d(l) {
      l && h(e), o && o.d();
    }
  };
}
function ee(n) {
  let e, i, t, o, l, f;
  function a(u, c) {
    return (
      /*disableVideoIfHavePoster*/
      u[8] && /*media*/
      u[2].videoCoverUrl ? oe : ie
    );
  }
  let d = a(n), m = d(n);
  return {
    c() {
      m.c(), e = Q(), i = k("div"), t = k("div"), o = k("div"), r(o, "class", "video-icon-img svelte-159ski6"), _(o, "background-image", "url(" + /*func*/
      n[21]() + ")"), v(
        o,
        "canPlay",
        /*canPlay*/
        n[5]
      ), r(t, "class", "video-icon svelte-159ski6"), v(
        t,
        "large",
        /*playButtonSizeIfNeed*/
        n[4] === "large"
      ), v(
        t,
        "small",
        /*playButtonSizeIfNeed*/
        n[4] === "small"
      ), r(i, "class", "video-play-button-container svelte-159ski6"), v(
        i,
        "showPlayButton",
        /*showPlayButton*/
        n[11]
      );
    },
    m(u, c) {
      m.m(u, c), p(u, e, c), p(u, i, c), U(i, t), U(t, o), l || (f = P(
        o,
        "click",
        /*click_handler_1*/
        n[22]
      ), l = !0);
    },
    p(u, c) {
      d === (d = a(u)) && m ? m.p(u, c) : (m.d(1), m = d(u), m && (m.c(), m.m(e.parentNode, e))), c & /*playButtonIfNeed*/
      8 && _(o, "background-image", "url(" + /*func*/
      u[21]() + ")"), c & /*canPlay*/
      32 && v(
        o,
        "canPlay",
        /*canPlay*/
        u[5]
      ), c & /*playButtonSizeIfNeed*/
      16 && v(
        t,
        "large",
        /*playButtonSizeIfNeed*/
        u[4] === "large"
      ), c & /*playButtonSizeIfNeed*/
      16 && v(
        t,
        "small",
        /*playButtonSizeIfNeed*/
        u[4] === "small"
      ), c & /*showPlayButton*/
      2048 && v(
        i,
        "showPlayButton",
        /*showPlayButton*/
        u[11]
      );
    },
    d(u) {
      m.d(u), u && h(e), u && h(i), l = !1, f();
    }
  };
}
function te(n) {
  let e, i, t;
  return {
    c() {
      e = k("img"), r(e, "class", "media-content svelte-159ski6"), w(e.src, i = /*media*/
      n[2].url) || r(e, "src", i), r(e, "alt", t = /*media*/
      n[2].name), r(e, "draggable", !1), _(
        e,
        "object-fit",
        /*objectFit*/
        n[7]
      );
    },
    m(o, l) {
      p(o, e, l);
    },
    p(o, l) {
      l & /*media*/
      4 && !w(e.src, i = /*media*/
      o[2].url) && r(e, "src", i), l & /*media*/
      4 && t !== (t = /*media*/
      o[2].name) && r(e, "alt", t), l & /*objectFit*/
      128 && _(
        e,
        "object-fit",
        /*objectFit*/
        o[7]
      );
    },
    d(o) {
      o && h(e);
    }
  };
}
function ie(n) {
  let e, i, t, o, l, f;
  return {
    c() {
      e = k("video"), r(e, "class", "media-content svelte-159ski6"), w(e.src, i = /*media*/
      n[2].videoCoverUrl ? (
        /*media*/
        n[2].url
      ) : (
        /*media*/
        n[2].url + "#t=0.1"
      )) || r(e, "src", i), r(e, "poster", t = /*media*/
      n[2].videoCoverUrl), r(e, "preload", o = /*media*/
      n[2].videoCoverUrl ? "none" : "auto"), r(e, "disablepictureinpicture", ""), e.playsInline = !0, r(e, "paused", ""), e.muted = !0, r(e, "draggable", !1), e.loop = !1, r(e, "crossorigin", ""), e.autoplay = /*autoplayVideo*/
      n[6], e.controls = !1, v(
        e,
        "showPlayButton",
        /*showPlayButton*/
        n[11]
      ), _(
        e,
        "object-fit",
        /*objectFit*/
        n[7]
      );
    },
    m(a, d) {
      p(a, e, d), n[20](e), l || (f = [
        P(
          e,
          "play",
          /*play_handler*/
          n[15]
        ),
        P(
          e,
          "pause",
          /*pause_handler*/
          n[16]
        ),
        P(
          e,
          "error",
          /*error_handler*/
          n[17]
        ),
        P(
          e,
          "ended",
          /*ended_handler*/
          n[18]
        ),
        P(
          e,
          "click",
          /*click_handler*/
          n[19]
        )
      ], l = !0);
    },
    p(a, d) {
      d & /*media*/
      4 && !w(e.src, i = /*media*/
      a[2].videoCoverUrl ? (
        /*media*/
        a[2].url
      ) : (
        /*media*/
        a[2].url + "#t=0.1"
      )) && r(e, "src", i), d & /*media*/
      4 && t !== (t = /*media*/
      a[2].videoCoverUrl) && r(e, "poster", t), d & /*media*/
      4 && o !== (o = /*media*/
      a[2].videoCoverUrl ? "none" : "auto") && r(e, "preload", o), d & /*autoplayVideo*/
      64 && (e.autoplay = /*autoplayVideo*/
      a[6]), d & /*showPlayButton*/
      2048 && v(
        e,
        "showPlayButton",
        /*showPlayButton*/
        a[11]
      ), d & /*objectFit*/
      128 && _(
        e,
        "object-fit",
        /*objectFit*/
        a[7]
      );
    },
    d(a) {
      a && h(e), n[20](null), l = !1, Y(f);
    }
  };
}
function oe(n) {
  let e, i, t;
  return {
    c() {
      e = k("img"), r(e, "class", "media-content svelte-159ski6"), w(e.src, i = /*media*/
      n[2].videoCoverUrl) || r(e, "src", i), r(e, "alt", t = /*media*/
      n[2].name), r(e, "draggable", !1), _(
        e,
        "object-fit",
        /*objectFit*/
        n[7]
      );
    },
    m(o, l) {
      p(o, e, l);
    },
    p(o, l) {
      l & /*media*/
      4 && !w(e.src, i = /*media*/
      o[2].videoCoverUrl) && r(e, "src", i), l & /*media*/
      4 && t !== (t = /*media*/
      o[2].name) && r(e, "alt", t), l & /*objectFit*/
      128 && _(
        e,
        "object-fit",
        /*objectFit*/
        o[7]
      );
    },
    d(o) {
      o && h(e);
    }
  };
}
function ne(n) {
  let e, i = (
    /*media*/
    n[2] && L(n)
  );
  return {
    c() {
      i && i.c(), e = D();
    },
    m(t, o) {
      i && i.m(t, o), p(t, e, o);
    },
    p(t, [o]) {
      /*media*/
      t[2] ? i ? i.p(t, o) : (i = L(t), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null);
    },
    i: V,
    o: V,
    d(t) {
      i && i.d(t), t && h(e);
    }
  };
}
function le(n, e, i) {
  let t, o, { mediaInstance: l = { videoInstance: void 0, paused: !0 } } = e, { tag: f } = e, { media: a } = e, { playButtonIfNeed: d = "withoutText" } = e, { playButtonSizeIfNeed: m = "small" } = e, { canPlay: u = !0 } = e, { autoplayVideo: c = !1 } = e, { objectFit: B = "fill" } = e, { disableVideoIfHavePoster: S = !1 } = e, b = !0, y = !1;
  function N() {
    i(9, y = (a == null ? void 0 : a.type) === "Video" && !!a.videoCoverUrl);
  }
  const C = j("mediaStore"), I = j("hooks"), g = () => {
    y || t && (i(10, t.muted = !0, t), t.play(), t.pause(), i(10, t.muted = !1, t), i(9, y = !0));
  };
  I.on("loadVideoFirstFrame", g), G(() => {
    C.subscribe(({ currentMediaElement: s }) => {
      s !== t && (t == null || t.pause());
    });
  });
  const E = (s) => {
    i(11, b = !1), i(0, l.paused = !1, l), i(9, y = !0), t && C.set({ currentMediaElement: t }), I.emit("playStateChange", {
      event: s,
      state: "playing",
      tag: f,
      mediaInstance: t
    });
  }, z = (s) => {
    i(11, b = !0), i(0, l.paused = !0, l), I.emit("playStateChange", {
      event: s,
      state: "paused",
      tag: f,
      mediaInstance: t
    });
  }, F = (s) => {
    i(11, b = !0), i(0, l.paused = !0, l), I.emit("playStateChange", {
      event: s,
      state: "paused",
      tag: f,
      mediaInstance: t
    });
  }, O = (s) => {
    i(11, b = !0), i(0, l.paused = !0, l), I.emit("playStateChange", {
      event: s,
      state: "paused",
      tag: f,
      mediaInstance: t
    });
  }, W = (s) => {
    t && t.pause();
  };
  function H(s) {
    K[s ? "unshift" : "push"](() => {
      l.videoInstance = s, i(0, l);
    });
  }
  const T = () => d === "withText" ? Z : d === "withoutText" ? x : d, M = (s) => {
    u && t && (i(10, t.muted = !1, t), t.play());
  };
  return n.$$set = (s) => {
    "mediaInstance" in s && i(0, l = s.mediaInstance), "tag" in s && i(1, f = s.tag), "media" in s && i(2, a = s.media), "playButtonIfNeed" in s && i(3, d = s.playButtonIfNeed), "playButtonSizeIfNeed" in s && i(4, m = s.playButtonSizeIfNeed), "canPlay" in s && i(5, u = s.canPlay), "autoplayVideo" in s && i(6, c = s.autoplayVideo), "objectFit" in s && i(7, B = s.objectFit), "disableVideoIfHavePoster" in s && i(8, S = s.disableVideoIfHavePoster);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*mediaInstance*/
    1 && i(10, t = l.videoInstance), n.$$.dirty & /*media*/
    4 && i(14, o = a == null ? void 0 : a.url), n.$$.dirty & /*mediaUrl*/
    16384 && o && N(), n.$$.dirty & /*videoInstance*/
    1024 && t && i(11, b = t.paused), n.$$.dirty & /*media, videoPosterLoaded, videoInstance*/
    1540 && (a == null ? void 0 : a.type) === "Video" && !y) {
      const s = navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1, q = navigator.userAgent.toLowerCase().indexOf("iphone") !== -1 && s;
      t && q && t.paused && (document.removeEventListener("WeixinJSBridgeReady", g), document.removeEventListener("touchstart", g), document.removeEventListener("click", g), document.addEventListener("WeixinJSBridgeReady", g), document.addEventListener("touchstart", g), document.addEventListener("click", g));
    }
  }, [
    l,
    f,
    a,
    d,
    m,
    u,
    c,
    B,
    S,
    y,
    t,
    b,
    C,
    I,
    o,
    E,
    z,
    F,
    O,
    W,
    H,
    T,
    M
  ];
}
class ue extends A {
  constructor(e) {
    super(), J(
      this,
      e,
      le,
      ne,
      R,
      {
        mediaInstance: 0,
        tag: 1,
        media: 2,
        playButtonIfNeed: 3,
        playButtonSizeIfNeed: 4,
        canPlay: 5,
        autoplayVideo: 6,
        objectFit: 7,
        disableVideoIfHavePoster: 8
      },
      $
    );
  }
}
export {
  ue as default
};
