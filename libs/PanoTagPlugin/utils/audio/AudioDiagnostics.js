var d = (u, o, t) => new Promise((e, n) => {
  var r = (s) => {
    try {
      a(t.next(s));
    } catch (i) {
      n(i);
    }
  }, c = (s) => {
    try {
      a(t.throw(s));
    } catch (i) {
      n(i);
    }
  }, a = (s) => s.done ? e(s.value) : Promise.resolve(s.value).then(r, c);
  a((t = t.apply(u, o)).next());
});
class E {
  /**
   * 检查浏览器音频支持
   */
  static checkBrowserSupport() {
    var s, i, g, m;
    const o = navigator.userAgent, t = document.createElement("audio");
    let e = "Unknown", n = "Unknown";
    o.includes("Edge/") ? (e = "Microsoft Edge", n = ((s = o.match(/Edge\/(\d+)/)) == null ? void 0 : s[1]) || "Unknown") : o.includes("Chrome/") ? (e = "Chrome", n = ((i = o.match(/Chrome\/(\d+)/)) == null ? void 0 : i[1]) || "Unknown") : o.includes("Firefox/") ? (e = "Firefox", n = ((g = o.match(/Firefox\/(\d+)/)) == null ? void 0 : g[1]) || "Unknown") : o.includes("Safari/") && !o.includes("Chrome") && (e = "Safari", n = ((m = o.match(/Version\/(\d+)/)) == null ? void 0 : m[1]) || "Unknown");
    const r = [
      { name: "MP3", mime: "audio/mpeg" },
      { name: "OGG", mime: "audio/ogg" },
      { name: "WAV", mime: "audio/wav" },
      { name: "M4A", mime: "audio/mp4" },
      { name: "AAC", mime: "audio/aac" },
      { name: "WEBM", mime: "audio/webm" }
    ], c = [], a = [];
    return r.forEach((l) => {
      const p = t.canPlayType(l.mime);
      p === "probably" ? c.push(`${l.name} (完全支持)`) : p === "maybe" ? (c.push(`${l.name} (可能支持)`), a.push(`${l.name} 格式支持不确定，建议使用其他格式`)) : a.push(`${l.name} 格式不被支持`);
    }), {
      browser: `${e} ${n}`,
      version: n,
      supportedFormats: c,
      warnings: a
    };
  }
  /**
   * 测试音频URL的可访问性
   */
  static testAudioUrl(o) {
    return d(this, null, function* () {
      try {
        const t = yield fetch(o, { method: "HEAD" });
        return {
          accessible: t.ok,
          status: t.status,
          contentType: t.headers.get("content-type") || void 0,
          contentLength: parseInt(t.headers.get("content-length") || "0") || void 0
        };
      } catch (t) {
        return {
          accessible: !1,
          error: t instanceof Error ? t.message : String(t)
        };
      }
    });
  }
  /**
   * 尝试创建和测试音频元素
   */
  static testAudioElement(o) {
    return d(this, null, function* () {
      return new Promise((t) => {
        const e = new Audio();
        let n = !1;
        const r = () => {
          n || (n = !0, e.removeEventListener("loadedmetadata", c), e.removeEventListener("error", s), e.removeEventListener("canplay", a));
        }, c = () => {
          r(), t({
            success: !0,
            duration: e.duration,
            networkState: e.networkState,
            readyState: e.readyState
          });
        }, a = () => {
          r(), t({
            success: !0,
            canPlay: "canplay",
            duration: e.duration,
            networkState: e.networkState,
            readyState: e.readyState
          });
        }, s = () => {
          r(), t({
            success: !1,
            error: e.error ? `${e.error.code}: ${e.error.message}` : "Unknown audio error",
            networkState: e.networkState,
            readyState: e.readyState
          });
        };
        e.addEventListener("loadedmetadata", c), e.addEventListener("canplay", a), e.addEventListener("error", s), setTimeout(() => {
          n || (r(), t({
            success: !1,
            error: "音频加载超时",
            networkState: e.networkState,
            readyState: e.readyState
          }));
        }, 1e4), e.src = o, e.load();
      });
    });
  }
  /**
   * 完整的音频诊断
   */
  static diagnoseAudio(o) {
    return d(this, null, function* () {
      var c;
      console.group("🎵 音频诊断报告"), console.group("1. 浏览器支持检查");
      const t = this.checkBrowserSupport();
      console.log("浏览器:", t.browser), console.log("支持的格式:", t.supportedFormats), t.warnings.length > 0 && console.warn("警告:", t.warnings), console.groupEnd(), console.group("2. 音频文件URL检查"), console.log("音频URL:", o);
      try {
        new URL(o, window.location.href), console.log("✅ URL格式正确");
      } catch (a) {
        console.error("❌ URL格式错误"), console.groupEnd(), console.groupEnd();
        return;
      }
      const e = (c = o.split(".").pop()) == null ? void 0 : c.toLowerCase();
      e && (console.log("文件扩展名:", e.toUpperCase()), ["mp3", "ogg", "wav", "m4a", "aac", "webm"].includes(e) ? console.log("✅ 文件格式常见") : console.warn("⚠️ 不常见的文件格式，可能存在兼容性问题")), console.groupEnd(), console.group("3. 网络可访问性测试");
      const n = yield this.testAudioUrl(o);
      n.accessible ? (console.log("✅ 文件可访问"), console.log("HTTP状态:", n.status), n.contentType && console.log("内容类型:", n.contentType), n.contentLength && console.log("文件大小:", (n.contentLength / 1024).toFixed(2), "KB")) : (console.error("❌ 文件无法访问"), n.status && console.error("HTTP状态:", n.status), n.error && console.error("错误:", n.error)), console.groupEnd(), console.group("4. 音频元素测试");
      const r = yield this.testAudioElement(o);
      r.success ? (console.log("✅ 音频元素创建成功"), r.duration && console.log("音频时长:", r.duration.toFixed(2), "秒"), console.log("网络状态:", this.getNetworkStateDescription(r.networkState)), console.log("就绪状态:", this.getReadyStateDescription(r.readyState))) : (console.error("❌ 音频元素创建失败"), console.error("错误:", r.error), console.log("网络状态:", this.getNetworkStateDescription(r.networkState)), console.log("就绪状态:", this.getReadyStateDescription(r.readyState))), console.groupEnd(), console.groupEnd();
    });
  }
  static getNetworkStateDescription(o) {
    switch (o) {
      case 0:
        return "NETWORK_EMPTY - 音频元素尚未初始化";
      case 1:
        return "NETWORK_IDLE - 音频元素处于活动状态但未使用网络";
      case 2:
        return "NETWORK_LOADING - 浏览器正在下载数据";
      case 3:
        return "NETWORK_NO_SOURCE - 未找到合适的音频源";
      default:
        return `未知状态 (${o})`;
    }
  }
  static getReadyStateDescription(o) {
    switch (o) {
      case 0:
        return "HAVE_NOTHING - 没有音频数据";
      case 1:
        return "HAVE_METADATA - 已获取元数据";
      case 2:
        return "HAVE_CURRENT_DATA - 有当前播放位置的数据";
      case 3:
        return "HAVE_FUTURE_DATA - 有足够的数据开始播放";
      case 4:
        return "HAVE_ENOUGH_DATA - 有足够的数据流畅播放";
      default:
        return `未知状态 (${o})`;
    }
  }
}
export {
  E as AudioDiagnostics
};
