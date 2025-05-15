import * as a from "three";
import { isWX as d } from "../device.js";
function s(i, r) {
  let n = !d;
  const e = r != null ? r : document.createElement("video");
  e.preload = "metadata", e.crossOrigin = "anonymous", e.muted = !0, e.loop = !0, e.playsInline = !0, e.autoplay = !0;
  const t = new a.VideoTexture(e);
  t.minFilter = a.LinearFilter, t.magFilter = a.LinearFilter, t.encoding = a.sRGBEncoding, t.metadataLoaded = !1, e.src = i;
  const o = () => {
    t.metadataLoaded || (t.dispatchEvent({ type: "videoLoaded" }), t.metadataLoaded = !0);
  };
  if (d || (e.onloadedmetadata = () => {
    o();
  }), d) {
    const u = () => {
      if (!n) {
        if (!e.paused) {
          o();
          return;
        }
        e.muted = !0, e.play().then(() => {
          n = !0, e.pause(), e.currentTime = 0, o();
        }).catch(() => {
          console.warn("video auto play error");
        });
      }
    };
    document.addEventListener("click", u, { once: !0 }), document.addEventListener("touchend", u, { once: !0 });
  }
  return t;
}
export {
  s as getVideoTexture
};
