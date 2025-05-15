var q = Object.defineProperty;
var c = (V, e, A) => e in V ? q(V, e, { enumerable: !0, configurable: !0, writable: !0, value: A }) : V[e] = A;
var i = (V, e, A) => (c(V, typeof e != "symbol" ? e + "" : e, A), A);
const r = "data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAA5TEFNRTMuOThyAc0AAAAAAAAAABSAJAiqQgAAgAAABobxtI73AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQxAACFEII9ACZ/sJZwWEoEb8w/////N//////JcxjHjf+7/v/H2PzCCFAiDtGeyBCIx7bJJ1mmEEMy6g8mm2c8nrGABB4h2Mkmn//4z/73u773R5qHHu/j/w7Kxkzh5lWRWdsifCkNAnY9Zc1HvDAhjhSHdFkHFzLmabt/AQxSg2wwzLhHIJOBnAWwVY4zrhIYhhc2kvhYDfQ4hDi2Gmh5KyFn8EcGIrHAngNgIwVIEMf5bzbAiTRoAD///8z/KVhkkWEle6IX+d/z4fvH3BShK1e5kmjkCMoxVmXhd4ROlTKo3iipasvTilY21q19ta30/v/0/idPX1v8PNxJL6ramnOVsdvMv2akO0iSYIzdJFirtzWXCZicS9vHqvSKyqm5XJBdqBwPxyfJdykhWTZ0G0ZyTZGpLKxsNwwoRhsx3tZfhwmeOBVISm3impAC/IT/8hP/EKEM1KMdVdVKM2rHV4x7HVXZvbVVKN/qq8CiV9VL9jjH/6l6qf7MBCjZmOqsAibjcP+qqqv0oxqpa/NVW286hPo1nz2L/h8+jXt//uSxCmDU2IK/ECN98KKtE5IYzNoCfbw+u9i5r8PoadUMFPKqWL4LK3T/LCraMSHGkW4bpLXR/E6LlHOVQxmslKVJ8IULktMN06N0FKCpHCoYsjC4F+Z0NVqdNFoGSTjSiyjzLdnZ2fNqTi2eHKONONKLMPMKLONKLMPQRJGlFxZRoKcJFAYEeIFiRQkUWUeYfef//Ko04soswso40UJAgMw8wosososy0EalnZyjQUGBRQGIFggOWUacWUeYmuadrZziQKKEgQsQLAhQkUJAgMQDghltLO1onp0cpkNInSFMqlYeSEJ5AHsqFdOwy1DA2sRmRJKxdKRfLhfLw5BzUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7ksRRA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=", s = {};
var d = /* @__PURE__ */ ((V) => (V.Default = "default", V.GetAudioDuration = "getAudioDuration", V.PlayAudio = "playAudio", V))(d || {});
function L(V, e) {
  const A = (e == null ? void 0 : e.namespace) || "default", t = s[A] || (s[A] = []);
  let n = t.find((o) => !o.realSrc || o.realSrc === r);
  return n || (console.warn("未找到缓存音频，已新建", s), n = new u(r), t.push(n)), V && (n.src = V), n;
}
function a(V, e) {
  const A = (e == null ? void 0 : e.namespace) || "default", t = s[A] || (s[A] = []), n = V - t.length;
  if (!(n <= 0))
    for (let o = 0; o < n; o++)
      t.push(new u(r));
}
class u extends (() => typeof Audio == "undefined" ? class {
} : Audio)() {
  constructor(A) {
    super(A);
    i(this, "preload", "auto");
    i(this, "crossOrigin", "anonymous");
    i(this, "realSrc", "");
    i(this, "inited", !1);
    i(this, "removeDocumentEventListener");
    this.realSrc = A != null ? A : "", this.muted = !0, super.autoplay = !0, super.addEventListener("ended", () => {
      this.src = "";
    });
    const t = () => h(this);
    document.addEventListener("click", t), document.addEventListener("touchend", t), this.removeDocumentEventListener = () => {
      document.removeEventListener("click", t), document.removeEventListener("touchend", t);
    };
  }
  get isBlankAudio() {
    return this.realSrc === r || !this.realSrc;
  }
  get src() {
    return super.src;
  }
  set src(A) {
    super.src = A, this.realSrc = A, this.removeDocumentEventListener();
  }
  get muted() {
    return super.muted;
  }
  set muted(A) {
    super.muted = A;
  }
  clear() {
    this.currentTime = 0, this.src = r;
  }
}
function h(V) {
  V && (V.inited || (V.src && (V.inited = !0, V.removeDocumentEventListener()), V.src === r && V.play()));
}
export {
  d as AudioNamespace,
  a as generateBlankAudio,
  L as getAudio
};
