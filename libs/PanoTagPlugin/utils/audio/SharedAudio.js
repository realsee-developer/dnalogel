var y = Object.defineProperty;
var L = (u, r, e) => r in u ? y(u, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : u[r] = e;
var c = (u, r, e) => (L(u, typeof r != "symbol" ? r + "" : r, e), e);
var m = (u, r, e) => new Promise((s, a) => {
  var h = (d) => {
    try {
      o(e.next(d));
    } catch (l) {
      a(l);
    }
  }, i = (d) => {
    try {
      o(e.throw(d));
    } catch (l) {
      a(l);
    }
  }, o = (d) => d.done ? s(d.value) : Promise.resolve(d.value).then(h, i);
  o((e = e.apply(u, r)).next());
});
import { getAudio as E, AudioNamespace as A } from "../../../shared-utils/audio.js";
class T extends Audio {
  constructor(e) {
    super();
    c(this, "sharedAudioSrc");
    c(this, "sharedAudioPaused", !0);
    c(this, "sharedAudioCurrentTime", 0);
    c(this, "tryplaying", !1);
    c(this, "audioInstance");
    c(this, "eventListenerDisposer");
    this.sharedAudioSrc = e;
  }
  get paused() {
    var e;
    return (e = this.sharedAudioPaused) != null ? e : !0;
  }
  get currentTime() {
    return this.sharedAudioCurrentTime;
  }
  play() {
    return m(this, null, function* () {
      var s, a, h;
      if (this.tryplaying)
        return;
      this.tryplaying = !0, (!this.audioInstance || ((s = this.audioInstance) == null ? void 0 : s.realSrc) !== this.sharedAudioSrc) && (this.audioInstance = E(this.sharedAudioSrc, { namespace: A.PlayAudio })), (a = this.eventListenerDisposer) == null || a.call(this), this.eventListenerDisposer = this.addEventListeners(), this.audioInstance.currentTime = (h = this.currentTime) != null ? h : 0;
      const e = this.audioInstance.currentTime !== this.currentTime;
      this.audioInstance.play().then(() => {
        var i;
        this.audioInstance.muted = !1, e && (this.audioInstance.currentTime = (i = this.currentTime) != null ? i : 0), this.sharedAudioPaused = !1;
      }).catch((i) => {
        var o;
        i.message === "The operation is not supported." ? console.error("Error: 音频文件可能损坏或修改过文件后缀", i) : console.error("Error: error playing media in Safari", i), this.endedHandler(), (o = this.onerror) == null || o.call(this, i);
      }).finally(() => {
        this.tryplaying = !1;
      });
    });
  }
  pause(e) {
    var s;
    if (this.audioInstance && !this.paused) {
      if (this.sharedAudioPaused = !0, (s = this.eventListenerDisposer) == null || s.call(this), this.audioInstance.ended) {
        this.endedHandler();
        return;
      }
      this.audioInstance.paused || this.audioInstance.pause(), this.onpause(e != null ? e : new Event("pause")), this.clear();
    }
  }
  dispose() {
    var e;
    (e = this.eventListenerDisposer) == null || e.call(this), this.clear(), this.audioInstance = void 0;
  }
  clear() {
    var e;
    (e = this.audioInstance) == null || e.clear();
  }
  endedHandler(e) {
    var s, a;
    (s = this.onended) == null || s.call(this, e != null ? e : new Event("ended")), (a = this.eventListenerDisposer) == null || a.call(this), this.sharedAudioPaused = !0, this.sharedAudioCurrentTime = 0, this.clear();
  }
  addEventListeners() {
    const e = this.audioInstance;
    if (!e)
      return;
    const s = (n) => {
      var t;
      this.sharedAudioCurrentTime = e.currentTime, (t = this.ontimeupdate) == null || t.call(this, n);
    }, a = (n) => {
      var t;
      e.isBlankAudio || (this.sharedAudioPaused = !1, (t = this.onplay) == null || t.call(this, n));
    }, h = (n) => {
      this.pause(n);
    }, i = (n) => {
      this.endedHandler(n);
    }, o = (n) => {
      var t;
      this.sharedAudioPaused = !0, (t = this.onerror) == null || t.call(this, n);
    }, d = (n) => {
      var t;
      return (t = this.oncanplay) == null ? void 0 : t.call(this, n);
    }, l = (n) => {
      var t;
      return (t = this.oncanplaythrough) == null ? void 0 : t.call(this, n);
    }, p = (n) => {
      var t;
      return (t = this.onloadeddata) == null ? void 0 : t.call(this, n);
    }, v = (n) => {
      var t;
      return (t = this.onloadedmetadata) == null ? void 0 : t.call(this, n);
    };
    return e.addEventListener("timeupdate", s), e.addEventListener("play", a), e.addEventListener("pause", h), e.addEventListener("ended", i), e.addEventListener("error", o), e.addEventListener("canplay", d), e.addEventListener("canplaythrough", l), e.addEventListener("loadeddata", p), e.addEventListener("loadedmetadata", v), () => {
      e.removeEventListener("timeupdate", s), e.removeEventListener("play", a), e.removeEventListener("pause", h), e.removeEventListener("ended", i), e.removeEventListener("error", o), e.removeEventListener("canplay", d), e.removeEventListener("canplaythrough", l), e.removeEventListener("loadeddata", p), e.removeEventListener("loadedmetadata", v);
    };
  }
}
export {
  T as SharedAudio
};
