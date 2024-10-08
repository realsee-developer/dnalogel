var S = Object.defineProperty;
var _ = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var g = (o, n, t) => n in o ? S(o, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[n] = t, d = (o, n) => {
  for (var t in n || (n = {}))
    C.call(n, t) && g(o, t, n[t]);
  if (_)
    for (var t of _(n))
      A.call(n, t) && g(o, t, n[t]);
  return o;
};
import { SvelteComponent as E, init as N, safe_not_equal as T, append_styles as w, create_slot as P, element as R, attr as y, insert as q, listen as D, stop_propagation as L, update_slot_base as M, get_all_dirty_from_scope as j, get_slot_changes as z, transition_in as B, transition_out as F, detach as G, createEventDispatcher as H, getContext as I } from "../../../vendor/svelte/internal/index.js";
import { SharedAudio as J } from "../../utils/audio/SharedAudio.js";
import "../../../shared-utils/audio.js";
function K(o) {
  w(o, "svelte-13e7hxv", ".audio.svelte-13e7hxv{pointer-events:auto;cursor:pointer;width:100%;height:100%}");
}
function O(o) {
  let n, t, c, m;
  const r = (
    /*#slots*/
    o[8].default
  ), u = P(
    r,
    o,
    /*$$scope*/
    o[7],
    null
  );
  return {
    c() {
      n = R("div"), u && u.c(), y(n, "class", "audio svelte-13e7hxv"), y(
        n,
        "style",
        /*style*/
        o[0]
      );
    },
    m(a, i) {
      q(a, n, i), u && u.m(n, null), t = !0, c || (m = D(n, "click", L(
        /*onClick*/
        o[1]
      )), c = !0);
    },
    p(a, [i]) {
      u && u.p && (!t || i & /*$$scope*/
      128) && M(
        u,
        r,
        a,
        /*$$scope*/
        a[7],
        t ? z(
          r,
          /*$$scope*/
          a[7],
          i,
          null
        ) : j(
          /*$$scope*/
          a[7]
        ),
        null
      ), (!t || i & /*style*/
      1) && y(
        n,
        "style",
        /*style*/
        a[0]
      );
    },
    i(a) {
      t || (B(u, a), t = !0);
    },
    o(a) {
      F(u, a), t = !1;
    },
    d(a) {
      a && G(n), u && u.d(a), c = !1, m();
    }
  };
}
function Q(o, n, t) {
  let { $$slots: c = {}, $$scope: m } = n, { url: r } = n, { enable: u = !0 } = n, { style: a = "" } = n, { hooksInfo: i } = n;
  const l = H(), p = I("hooks"), h = I("mediaStore");
  let e, f = !0;
  function b() {
    t(
      5,
      e.onplay = (s) => {
        p.emit("playStateChange", d({
          event: s,
          state: "playing",
          mediaInstance: e
        }, i)), l("play"), t(6, f = !1);
      },
      e
    ), t(
      5,
      e.onpause = (s) => {
        p.emit("playStateChange", d({
          event: s,
          state: "paused",
          mediaInstance: e
        }, i)), l("pause"), t(6, f = !0);
      },
      e
    ), t(
      5,
      e.onended = (s) => {
        p.emit("playStateChange", d({
          event: s,
          state: "paused",
          mediaInstance: e
        }, i)), l("pause"), t(6, f = !0);
      },
      e
    ), t(
      5,
      e.onloadedmetadata = (s) => {
        typeof e.duration == "number" && !Number.isNaN(e.duration) && l("duration", e.duration);
      },
      e
    ), t(
      5,
      e.onerror = (s) => {
        l("pause"), t(6, f = !0);
      },
      e
    ), t(
      5,
      e.ontimeupdate = (s) => {
        l("timeupdate", e.currentTime);
      },
      e
    );
  }
  h.subscribe(({ currentMediaElement: s }) => {
    s !== e && (f || e == null || e.pause());
  });
  function k(s) {
    e && (p.emit("click", d({
      event: s,
      target: "AudioTagPlayIcon",
      audioInstance: e
    }, i)), h.set({ currentMediaElement: e }), p.emit("playStateChange", d({
      event: s,
      state: e.paused ? "playing" : "paused",
      mediaInstance: e
    }, i)), e.paused ? e.play() : e.pause());
  }
  return o.$$set = (s) => {
    "url" in s && t(2, r = s.url), "enable" in s && t(3, u = s.enable), "style" in s && t(0, a = s.style), "hooksInfo" in s && t(4, i = s.hooksInfo), "$$scope" in s && t(7, m = s.$$scope);
  }, o.$$.update = () => {
    o.$$.dirty & /*url*/
    4 && (r || l("duration", 0)), o.$$.dirty & /*audio, url*/
    36 && (e == null || e.dispose(), t(5, e = new J(r)), l("audioRef", e), setTimeout(() => l("audioRef", e), 200), b()), o.$$.dirty & /*enable, audio*/
    40 && (u || e == null || e.pause()), o.$$.dirty & /*enable, audioPaused*/
    72 && l(u && !f ? "play" : "pause");
  }, [a, k, r, u, i, e, f, m, c];
}
class Y extends E {
  constructor(n) {
    super(), N(
      this,
      n,
      Q,
      O,
      T,
      {
        url: 2,
        enable: 3,
        style: 0,
        hooksInfo: 4
      },
      K
    );
  }
}
export {
  Y as default
};
