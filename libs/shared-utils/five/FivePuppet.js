var m = Object.defineProperty;
var p = (a, e, t) => e in a ? m(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var r = (a, e, t) => (p(a, typeof e != "symbol" ? e + "" : e, t), t);
import { InternalWebGLRenderer as d } from "@realsee/five";
import * as i from "three";
const l = new i.Vector2();
class u {
  constructor(e, t) {
    r(this, "scene", new i.Scene());
    r(this, "five");
    r(this, "renderer");
    r(this, "cancelRequestAnimationFrameId");
    r(this, "camera", new i.Camera());
    r(this, "domInited", !1);
    r(this, "canvasWrapper");
    r(this, "params");
    r(this, "_rendererCache");
    r(this, "_cameraCache");
    r(this, "animate", () => {
      var s, c, o;
      if (this.cancelRequestAnimationFrameId = requestAnimationFrame(this.animate), !this.five.renderer)
        return;
      const e = this.five.renderer.getSize(l), t = e.toArray().join(",");
      t !== this._rendererCache && (this._rendererCache = t, this.renderer.setSize(e.x, e.y));
      const n = this.five.camera.projectionMatrix.toArray().join(",") + this.five.camera.matrixWorld.toArray().join(",");
      if (n !== this._cameraCache && (this._cameraCache = n, this.camera.copy(this.five.camera)), this.renderer.render(this.scene, this.camera), !this.domInited) {
        const h = (s = this.five.getElement()) == null ? void 0 : s.parentElement;
        h && (this.canvasWrapper = document.createElement("div"), this.canvasWrapper.classList.add("five-puppet"), this.canvasWrapper.style.position = "absolute", this.canvasWrapper.style.pointerEvents = "none", this.canvasWrapper.style.left = "0", this.canvasWrapper.style.top = "0", this.canvasWrapper.style.zIndex = `${(o = (c = this.params) == null ? void 0 : c.zIndex) != null ? o : 1}`, this.canvasWrapper.appendChild(this.renderer.domElement), h.appendChild(this.canvasWrapper), this.domInited = !0);
      }
    });
    r(this, "stopAnimate", () => {
      this.cancelRequestAnimationFrameId && cancelAnimationFrame(this.cancelRequestAnimationFrameId);
    });
    r(this, "destory", () => {
      var e;
      this.stopAnimate(), this.renderer.dispose(), this.renderer.domElement.remove(), (e = this.canvasWrapper) == null || e.remove();
    });
    this.five = e, this.params = t, this.renderer = new d({
      webgl2: !0,
      pixelRatio: window.devicePixelRatio,
      backgroundAlpha: 0,
      backgroundColor: 0
    }), this.renderer.domElement.style.pointerEvents = "none", this.renderer.setSize(1, 1), window.__FIVEPUPPET_DEBUG__ = this, this.animate();
  }
}
export {
  u as FivePuppet
};
