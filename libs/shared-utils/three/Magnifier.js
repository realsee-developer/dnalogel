var D = Object.defineProperty;
var C = (s, t, e) => t in s ? D(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var r = (s, t, e) => (C(s, typeof t != "symbol" ? t + "" : t, e), e);
import { hammerExports as w } from "../../vendor/hammerjs/hammer.js";
import * as p from "three";
import { Subscribe as R } from "../Subscribe.js";
class L {
  constructor(t, e) {
    r(this, "width");
    r(this, "height");
    r(this, "containerDom");
    r(this, "hooks", new R());
    r(this, "canvas", document.createElement("canvas"));
    r(this, "config");
    r(this, "state", { enabled: !1 });
    r(this, "five");
    r(this, "scale");
    r(this, "offset", { x: 0, y: 0 });
    r(this, "context");
    r(this, "renderCenter", new p.Vector3());
    r(this, "hammer");
    r(this, "offsetRange");
    r(this, "isPanning", !1);
    r(this, "imageData", new ImageData(1, 1));
    r(this, "onPanstart", () => {
      this.isPanning = !0, this.canvas.style.boxShadow = "0 2px 30px 0 rgba(0,0,0,0.20)";
    });
    r(this, "onPan", (t) => {
      if (!this.isPanning || !this.offsetRange || this.hooks.emit("wantsPanGesture", t))
        return;
      const { translateX: i, translateY: h } = this.getPanOffset(t, this.offsetRange);
      this.canvas.style.transform = `translate3d(${i}px, ${h}px, 100px)`;
    });
    r(this, "onPanend", (t) => {
      if (this.isPanning = !1, this.canvas.style.boxShadow = "none", !this.offsetRange)
        return;
      const { translateX: e, translateY: i } = this.getPanOffset(t, this.offsetRange);
      this.canvas.style.transform = `translate3d(${e}px, ${i}px, 100px)`, this.offset = { x: e, y: i };
    });
    var h, n, l, o;
    if (!t.renderer) {
      console.error("Five Render 未初始化");
      return;
    }
    this.five = t, this.scale = (h = e == null ? void 0 : e.scale) != null ? h : 2, this.width = (n = e == null ? void 0 : e.width) != null ? n : 190, this.height = (o = (l = e == null ? void 0 : e.height) != null ? l : e == null ? void 0 : e.width) != null ? o : 190, this.config = {
      dragEnabled: (e == null ? void 0 : e.dragEnabled) || !1,
      autoFixPCPosition: (e == null ? void 0 : e.autoFixPCPosition) || !1,
      initialPosition: (e == null ? void 0 : e.initialPosition) || { left: "0", top: "0" },
      skipPanorama: (e == null ? void 0 : e.skipPanorama) || !1
    };
    const i = this.canvas.getContext("2d");
    if (!i)
      throw new Error("CANNOT CREATE CONTEXT2D");
    this.context = i, this.config.dragEnabled && (this.hammer = new w(this.canvas), this.hammer.on("pan", this.onPan), this.hammer.on("panstart", this.onPanstart), this.hammer.on("panend", this.onPanend)), this.initStyle();
  }
  enable() {
    if (!this.state.enabled)
      return this.state.enabled = !0, this.containerDom && this._appendTo(this.containerDom), this;
  }
  disable() {
    if (this.state.enabled)
      return this.state.enabled = !1, this.canvas.style.visibility = "hidden", this.canvas.remove(), this;
  }
  dispose() {
    var t;
    this.clear(), this.disable(), (t = this.hammer) == null || t.destroy();
  }
  /** 把放大镜放到某一个容器中 */
  appendTo(t) {
    var e;
    return this.containerDom && ((e = this.containerDom) == null || e.removeChild(this.canvas)), this.containerDom = t, this.state.enabled && this._appendTo(t), this;
  }
  /** 清除放大镜渲染内容 */
  clear() {
    var t;
    return (t = this.context) == null || t.clearRect(0, 0, this.canvas.width, this.canvas.height), this;
  }
  /** 放大传入点位周围的内容 */
  renderWithPoint(t) {
    this.containerDom && this.state.enabled && (this.renderCenter = t, this.render(), this.config.autoFixPCPosition && this.autoFixPCPosition());
  }
  /** 放大传入点位周围的内容 */
  renderWithScreenPoint(t) {
    this.containerDom && this.state.enabled && (this.renderCenter = t, this.render(), this.config.autoFixPCPosition && this.autoFixPCPosition());
  }
  resetOffset() {
    this.offset = { x: 0, y: 0 }, this.canvas.style.transform = "translate3d(0px, 0px, 100px)";
  }
  /** 更新放大镜的缩放比例 */
  updateScale(t) {
    t > 0 && (this.scale = t);
  }
  /** 更新放大镜的尺寸 */
  updateSize(t, e) {
    if (t > 0) {
      this.width = t, this.height = e || t;
      const i = 1;
      this.canvas.setAttribute("width", (this.width * i).toString()), this.canvas.setAttribute("height", (this.height * i).toString()), this.canvas.style.width = this.width + "px", this.canvas.style.height = this.height + "px";
      const h = Math.floor(this.width * i), n = Math.floor(this.height * i);
      this.imageData = new ImageData(h, n), this.clear();
    }
  }
  render() {
    if (!this.five.renderer || !this.containerDom)
      return;
    const { scale: t, context: e, width: i, height: h } = this, n = this.five.renderer.getSize(new p.Vector2()), [l, o] = (() => {
      if (this.renderCenter.isVector3) {
        const a = this.renderCenter.clone().project(this.five.camera);
        return [(a.x + 1) / 2 * n.x, (a.y + 1) / 2 * n.y];
      } else
        return [this.renderCenter.x, n.y - this.renderCenter.y];
    })(), c = 1, m = i / t, d = h / t, x = c * t, v = /* @__PURE__ */ new Map();
    this.five.scene.traverse((a) => {
      a.disableGetPixel === !0 && (v.set(a, a.visible), a.visible = !1);
    });
    try {
      const a = this.five.getPixels({
        x: l - m / 2,
        y: o - m / 2,
        width: m,
        height: d,
        pixelRatio: x,
        skipPanorama: this.config.skipPanorama
      });
      v.forEach((P, b) => {
        b.visible = P;
      });
      const f = Math.floor(i * c), g = Math.floor(h * c), y = f * g * 4;
      if (!a || a.length !== y) {
        console.warn("Magnifier: Invalid pixel data", {
          pixelsLength: a == null ? void 0 : a.length,
          expectedLength: y,
          imageWidth: f,
          imageHeight: g
        });
        return;
      }
      E(a, f, g), (this.imageData.width !== f || this.imageData.height !== g) && (this.imageData = new ImageData(f, g)), this.imageData.data.length !== a.length && (console.warn("Magnifier: ImageData size mismatch", {
        imageDataLength: this.imageData.data.length,
        pixelsLength: a.length,
        imageWidth: f,
        imageHeight: g
      }), this.imageData = new ImageData(f, g));
      try {
        this.imageData.data.set(a);
      } catch (P) {
        console.error("Magnifier: Failed to set pixel data", {
          error: P,
          imageDataLength: this.imageData.data.length,
          pixelsLength: a.length,
          imageWidth: f,
          imageHeight: g
        });
        return;
      }
      e.putImageData(this.imageData, 0, 0), this.canvas.style.visibility = "visible";
    } catch (a) {
      console.error("Magnifier render error:", a), v.forEach((f, g) => {
        g.visible = f;
      });
    }
  }
  getRenderCenter() {
    return this.renderCenter;
  }
  _appendTo(t) {
    if (this.resetOffset(), t.appendChild(this.canvas), !this.offsetRange) {
      const e = this.canvas.getBoundingClientRect(), i = t.getBoundingClientRect(), h = i.right - e.right, n = i.bottom - e.bottom, l = i.left - e.left, o = i.top - e.top;
      this.offsetRange = {
        min: { x: l, y: o },
        max: { x: h, y: n }
      };
    }
  }
  autoFixPCPosition() {
    if (!this.containerDom)
      return;
    const { width: t, height: e } = this, { clientWidth: i, clientHeight: h } = this.containerDom, [n, l, o] = (() => {
      if (this.renderCenter.isVector3) {
        const c = this.renderCenter.clone().project(this.five.camera);
        return [
          //
          (c.x + 1) / 2 * i,
          -(c.x - 1) / 2 * i,
          -(c.y - 1) / 2 * h
        ];
      } else
        return [this.renderCenter.x, i - this.renderCenter.x, this.renderCenter.y];
    })();
    n < 183 ? (this.canvas.style.top = -e / 2 + "px", this.canvas.style.left = "90px") : o < 183 ? (this.canvas.style.top = "90px", this.canvas.style.left = -t / 2 + "px") : l < 183 ? (this.canvas.style.top = -e / 2 + "px", this.canvas.style.left = -t - 90 + "px") : (this.canvas.style.left = -t / 2 + "px", this.canvas.style.top = -e - 90 + "px"), this.canvas.style.transform = `translate3d(${n}px, ${o}px, 10px)`, this.offset = { x: n, y: o };
  }
  initStyle() {
    const t = this.canvas;
    t.classList.add("five-plugin__magnifier"), t.style.position = "absolute", t.style.pointerEvents = this.config.dragEnabled ? "all" : "none", t.style.borderRadius = "50%", t.style.zIndex = "99";
    const e = 1;
    t.setAttribute("width", (this.width * e).toString()), t.setAttribute("height", (this.height * e).toString()), t.style.border = "2px solid rgba(255,255,255,0.20)", t.style.width = this.width + "px", t.style.height = this.height + "px", t.style.top = this.config.initialPosition.top, t.style.left = this.config.initialPosition.left, t.style.transform = "translate(0,0,100px)", t.style.visibility = "hidden", this.config.dragEnabled && (this.canvas.style.cursor = "pointer");
  }
  getPanOffset(t, e) {
    const {
      min: { x: i, y: h },
      max: { x: n, y: l }
    } = e, o = this.offset.x + t.deltaX, c = this.offset.y + t.deltaY, m = Math.min(Math.max(o, i), n), d = Math.min(Math.max(c, h), l);
    return { translateX: m, translateY: d };
  }
}
function u(s, t, e) {
  if (!s || t < 0 || e < 0 || t >= s.length || e >= s.length) {
    console.warn("exchange: Index out of bounds", {
      arrayLength: s == null ? void 0 : s.length,
      index1: t,
      index2: e
    });
    return;
  }
  const i = s[t], h = s[e];
  s[t] = h, s[e] = i;
}
function E(s, t, e) {
  if (!s || t <= 0 || e <= 0) {
    console.warn("flipPixelsY: Invalid parameters", { pixelsLength: s == null ? void 0 : s.length, width: t, height: e });
    return;
  }
  const i = t * e * 4;
  if (s.length < i) {
    console.warn("flipPixelsY: Pixel array too small", {
      actualLength: s.length,
      expectedLength: i,
      width: t,
      height: e
    });
    return;
  }
  const h = e / 2;
  for (let n = 1; n <= h; n++) {
    const l = e - (n - 1);
    for (let o = 1; o <= t; o++) {
      const c = (n - 1) * t + o - 1, m = (l - 1) * t + o - 1, d = c * 4, x = m * 4;
      d + 3 < s.length && x + 3 < s.length && (u(s, d + 0, x + 0), u(s, d + 1, x + 1), u(s, d + 2, x + 2), u(s, d + 3, x + 3));
    }
  }
}
export {
  L as Magnifier
};
