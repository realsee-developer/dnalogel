var f = Object.defineProperty;
var A = (l, u, e) => u in l ? f(l, u, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[u] = e;
var h = (l, u, e) => (A(l, typeof u != "symbol" ? u + "" : u, e), e);
var v = (l, u, e) => new Promise((t, o) => {
  var a = (i) => {
    try {
      d(e.next(i));
    } catch (c) {
      o(c);
    }
  }, s = (i) => {
    try {
      d(e.throw(i));
    } catch (c) {
      o(c);
    }
  }, d = (i) => i.done ? t(i.value) : Promise.resolve(i.value).then(a, s);
  d((e = e.apply(l, u)).next());
});
import { getAudio as g, AudioNamespace as E } from "../../../shared-utils/audio.js";
import { AudioDiagnostics as y } from "./AudioDiagnostics.js";
class S extends Audio {
  constructor(e) {
    super();
    h(this, "sharedAudioSrc");
    h(this, "sharedAudioPaused", !0);
    h(this, "sharedAudioCurrentTime", 0);
    h(this, "tryplaying", !1);
    h(this, "audioInstance");
    h(this, "eventListenerDisposer");
    this.sharedAudioSrc = e, e && this.validateAudioSource(e);
  }
  get paused() {
    var e;
    return (e = this.sharedAudioPaused) != null ? e : !0;
  }
  get currentTime() {
    return this.sharedAudioCurrentTime;
  }
  get duration() {
    var e;
    return ((e = this.audioInstance) == null ? void 0 : e.duration) || 0;
  }
  play() {
    return v(this, null, function* () {
      var t, o, a;
      if (this.tryplaying)
        return;
      this.tryplaying = !0, (!this.audioInstance || ((t = this.audioInstance) == null ? void 0 : t.realSrc) !== this.sharedAudioSrc) && (this.audioInstance = g(this.sharedAudioSrc, { namespace: E.PlayAudio })), (o = this.eventListenerDisposer) == null || o.call(this), this.eventListenerDisposer = this.addEventListeners(), this.audioInstance.currentTime = (a = this.currentTime) != null ? a : 0;
      const e = this.audioInstance.currentTime !== this.currentTime;
      this.audioInstance.play().then(() => {
        var s;
        this.audioInstance.muted = !1, e && (this.audioInstance.currentTime = (s = this.currentTime) != null ? s : 0), this.sharedAudioPaused = !1;
      }).catch((s) => {
        var d;
        this.handlePlayError(s), this.endedHandler(), (d = this.onerror) == null || d.call(this, s);
      }).finally(() => {
        this.tryplaying = !1;
      });
    });
  }
  pause(e) {
    var t;
    if (this.audioInstance && !this.paused) {
      if (this.sharedAudioPaused = !0, (t = this.eventListenerDisposer) == null || t.call(this), this.audioInstance.ended) {
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
  handlePlayError(e) {
    var a, s, d, i;
    const t = navigator.userAgent, o = this.sharedAudioSrc;
    if (console.group("🎵 音频播放错误详情"), console.error("错误对象:", e), console.error("错误名称:", e.name), console.error("错误信息:", e.message), console.error("音频文件路径:", o), console.error("浏览器信息:", t), console.error("音频实例状态:", {
      exists: !!this.audioInstance,
      readyState: (a = this.audioInstance) == null ? void 0 : a.readyState,
      networkState: (s = this.audioInstance) == null ? void 0 : s.networkState,
      error: (d = this.audioInstance) == null ? void 0 : d.error
    }), e.name === "NotSupportedError") {
      if (e.message.includes("no supported source was found") && (console.error("❌ 错误原因: 无法找到支持的音频源"), console.error("💡 可能的解决方案:"), console.error("   1. 检查音频文件路径是否正确"), console.error("   2. 检查音频文件是否存在"), console.error("   3. 检查音频文件格式是否被浏览器支持 (推荐: MP3, OGG, WAV)"), console.error("   4. 检查CORS设置，确保可以跨域访问音频文件"), o)) {
        const c = (i = o.split(".").pop()) == null ? void 0 : i.toLowerCase(), p = ["mp3", "ogg", "wav", "m4a", "aac"];
        c && !p.includes(c) && (console.error(`   ⚠️  检测到不常见的音频格式: .${c}`), console.error(`   📝 建议使用: ${p.join(", ")}`));
      }
    } else
      e.name === "AbortError" ? console.error("❌ 错误原因: 音频播放被中断") : e.name === "NotAllowedError" ? console.error("❌ 错误原因: 浏览器阻止了音频播放 (通常需要用户交互)") : e.message === "The operation is not supported." ? console.error("❌ 错误原因: 音频文件可能损坏或格式有问题") : console.error("❌ 未知的音频播放错误");
    console.groupEnd(), e.name === "NotSupportedError" && o && (console.error("💡 建议运行完整音频诊断来查找问题根源："), console.error(`AudioDiagnostics.diagnoseAudio("${o}")`), process.env.NODE_ENV === "development" && (console.warn("🔍 自动运行音频诊断..."), y.diagnoseAudio(o)));
  }
  validateAudioSource(e) {
    var a;
    try {
      new URL(e, window.location.href);
    } catch (s) {
      console.warn("🎵 音频URL格式可能有问题:", e), y.diagnoseAudio(e);
      return;
    }
    const t = (a = e.split(".").pop()) == null ? void 0 : a.toLowerCase(), o = ["mp3", "ogg", "wav", "m4a", "aac", "webm"];
    t && !o.includes(t) && (console.warn("🎵 音频格式可能不被广泛支持:", t), console.warn("💡 建议使用常见格式:", o.join(", ")), console.warn('💡 运行音频诊断：AudioDiagnostics.diagnoseAudio("' + e + '")')), this.checkBrowserSupport(t);
  }
  checkBrowserSupport(e) {
    if (!e)
      return;
    const t = document.createElement("audio"), a = {
      mp3: "audio/mpeg",
      ogg: "audio/ogg",
      wav: "audio/wav",
      m4a: "audio/mp4",
      aac: "audio/aac",
      webm: "audio/webm"
    }[e];
    if (a) {
      const s = t.canPlayType(a);
      s === "" ? (console.warn(`🎵 当前浏览器可能不支持 ${e.toUpperCase()} 格式`), console.warn("💡 建议提供多种格式的音频文件作为备选")) : console.info(s === "maybe" ? `🎵 当前浏览器可能支持 ${e.toUpperCase()} 格式 (不确定)` : `🎵 当前浏览器支持 ${e.toUpperCase()} 格式`);
    }
  }
  endedHandler(e) {
    var t, o;
    (t = this.onended) == null || t.call(this, e != null ? e : new Event("ended")), (o = this.eventListenerDisposer) == null || o.call(this), this.sharedAudioPaused = !0, this.sharedAudioCurrentTime = 0, this.clear();
  }
  addEventListeners() {
    const e = this.audioInstance;
    if (!e)
      return;
    const t = (r) => {
      var n;
      this.sharedAudioCurrentTime = e.currentTime, (n = this.ontimeupdate) == null || n.call(this, r);
    }, o = (r) => {
      var n;
      e.isBlankAudio || (this.sharedAudioPaused = !1, (n = this.onplay) == null || n.call(this, r));
    }, a = (r) => {
      this.pause(r);
    }, s = (r) => {
      this.endedHandler(r);
    }, d = (r) => {
      var n;
      this.sharedAudioPaused = !0, (n = this.onerror) == null || n.call(this, r);
    }, i = (r) => {
      var n;
      return (n = this.oncanplay) == null ? void 0 : n.call(this, r);
    }, c = (r) => {
      var n;
      return (n = this.oncanplaythrough) == null ? void 0 : n.call(this, r);
    }, p = (r) => {
      var n;
      return (n = this.onloadeddata) == null ? void 0 : n.call(this, r);
    }, m = (r) => {
      var n;
      return (n = this.onloadedmetadata) == null ? void 0 : n.call(this, r);
    };
    return e.addEventListener("timeupdate", t), e.addEventListener("play", o), e.addEventListener("pause", a), e.addEventListener("ended", s), e.addEventListener("error", d), e.addEventListener("canplay", i), e.addEventListener("canplaythrough", c), e.addEventListener("loadeddata", p), e.addEventListener("loadedmetadata", m), () => {
      e.removeEventListener("timeupdate", t), e.removeEventListener("play", o), e.removeEventListener("pause", a), e.removeEventListener("ended", s), e.removeEventListener("error", d), e.removeEventListener("canplay", i), e.removeEventListener("canplaythrough", c), e.removeEventListener("loadeddata", p), e.removeEventListener("loadedmetadata", m);
    };
  }
}
export {
  y as AudioDiagnostics,
  S as SharedAudio
};
