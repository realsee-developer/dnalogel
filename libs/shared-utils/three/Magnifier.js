var b = Object.defineProperty;
var C = (r, t, e) => t in r ? b(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var n = (r, t, e) => (C(r, typeof t != "symbol" ? t + "" : t, e), e);
import { hammerExports as w } from "../../vendor/hammerjs/hammer.js";
import * as y from "three";
import { Subscribe as D } from "../Subscribe.js";
class S {
  constructor(t, e) {
    n(this, "width");
    n(this, "height");
    n(this, "containerDom");
    n(this, "hooks", new D());
    n(this, "canvas", document.createElement("canvas"));
    n(this, "config");
    n(this, "state", { enabled: !1 });
    n(this, "five");
    n(this, "scale");
    n(this, "offset", { x: 0, y: 0 });
    n(this, "context");
    n(this, "renderCenter", new y.Vector3());
    n(this, "hammer");
    n(this, "offsetRange");
    n(this, "isPanning", !1);
    n(this, "imageData", new ImageData(1, 1));
    n(this, "onPanstart", () => {
      this.isPanning = !0, this.canvas.style.boxShadow = "0 2px 30px 0 rgba(0,0,0,0.20)";
    });
    n(this, "onPan", (t) => {
      if (!this.isPanning || !this.offsetRange || this.hooks.emit("wantsPanGesture", t))
        return;
      const { translateX: i, translateY: s } = this.getPanOffset(t, this.offsetRange);
      this.canvas.style.transform = `translate3d(${i}px, ${s}px, 100px)`;
    });
    n(this, "onPanend", (t) => {
      if (this.isPanning = !1, this.canvas.style.boxShadow = "none", !this.offsetRange)
        return;
      const { translateX: e, translateY: i } = this.getPanOffset(t, this.offsetRange);
      this.canvas.style.transform = `translate3d(${e}px, ${i}px, 100px)`, this.offset = { x: e, y: i };
    });
    var s, h, o, a;
    if (!t.renderer) {
      console.error("Five Render 未初始化");
      return;
    }
    this.five = t, this.scale = (s = e == null ? void 0 : e.scale) != null ? s : 2, this.width = (h = e == null ? void 0 : e.width) != null ? h : 190, this.height = (a = (o = e == null ? void 0 : e.height) != null ? o : e == null ? void 0 : e.width) != null ? a : 190, this.config = {
      dragEnabled: (e == null ? void 0 : e.dragEnabled) || !1,
      autoFixPCPosition: (e == null ? void 0 : e.autoFixPCPosition) || !1,
      initialPosition: (e == null ? void 0 : e.initialPosition) || { left: "0", top: "0" }
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
  render() {
    if (!this.five.renderer || !this.containerDom)
      return;
    const { scale: t, context: e, width: i, height: s } = this, h = this.five.renderer.getSize(new y.Vector2()), [o, a] = (() => {
      if (this.renderCenter.isVector3) {
        const c = this.renderCenter.clone().project(this.five.camera);
        return [(c.x + 1) / 2 * h.x, (c.y + 1) / 2 * h.y];
      } else
        return [this.renderCenter.x, h.y - this.renderCenter.y];
    })(), f = 1, l = i / t, x = s / t, P = f * t, v = /* @__PURE__ */ new Map();
    this.five.scene.traverse((c) => {
      c.disableGetPixel === !0 && (v.set(c, c.visible), c.visible = !1);
    });
    const u = this.five.getPixels(o - l / 2, a - l / 2, l, x, P);
    v.forEach((c, p) => {
      p.visible = c;
    });
    const g = Math.floor(i * f), m = Math.floor(s * f);
    R(u, g, m), (this.imageData.width !== g || this.imageData.height !== m) && (this.imageData = new ImageData(g, m)), this.imageData.data.set(u), e.putImageData(this.imageData, 0, 0), this.canvas.style.visibility = "visible";
  }
  getRenderCenter() {
    return this.renderCenter;
  }
  _appendTo(t) {
    if (this.resetOffset(), t.appendChild(this.canvas), !this.offsetRange) {
      const e = this.canvas.getBoundingClientRect(), i = t.getBoundingClientRect(), s = i.right - e.right, h = i.bottom - e.bottom, o = i.left - e.left, a = i.top - e.top;
      this.offsetRange = {
        min: { x: o, y: a },
        max: { x: s, y: h }
      };
    }
  }
  autoFixPCPosition() {
    if (!this.containerDom)
      return;
    const { width: t, height: e } = this, { clientWidth: i, clientHeight: s } = this.containerDom, [h, o, a] = (() => {
      if (this.renderCenter.isVector3) {
        const f = this.renderCenter.clone().project(this.five.camera);
        return [
          //
          (f.x + 1) / 2 * i,
          -(f.x - 1) / 2 * i,
          -(f.y - 1) / 2 * s
        ];
      } else
        return [this.renderCenter.x, i - this.renderCenter.x, this.renderCenter.y];
    })();
    h < 183 ? (this.canvas.style.top = -e / 2 + "px", this.canvas.style.left = "90px") : a < 183 ? (this.canvas.style.top = "90px", this.canvas.style.left = -t / 2 + "px") : o < 183 ? (this.canvas.style.top = -e / 2 + "px", this.canvas.style.left = -t - 90 + "px") : (this.canvas.style.left = -t / 2 + "px", this.canvas.style.top = -e - 90 + "px"), this.canvas.style.transform = `translate3d(${h}px, ${a}px, 10px)`, this.offset = { x: h, y: a };
  }
  initStyle() {
    const t = this.canvas;
    t.classList.add("five-plugin__magnifier"), t.style.position = "absolute", t.style.pointerEvents = this.config.dragEnabled ? "all" : "none", t.style.borderRadius = "50%", t.style.zIndex = "99";
    const e = 1;
    t.setAttribute("width", (this.width * e).toString()), t.setAttribute("height", (this.height * e).toString()), t.style.border = "2px solid rgba(255,255,255,0.20)", t.style.width = this.width + "px", t.style.height = this.height + "px", t.style.top = this.config.initialPosition.top, t.style.left = this.config.initialPosition.left, t.style.transform = "translate(0,0,100px)", t.style.visibility = "hidden", this.config.dragEnabled && (this.canvas.style.cursor = "pointer");
  }
  getPanOffset(t, e) {
    const {
      min: { x: i, y: s },
      max: { x: h, y: o }
    } = e, a = this.offset.x + t.deltaX, f = this.offset.y + t.deltaY, l = Math.min(Math.max(a, i), h), x = Math.min(Math.max(f, s), o);
    return { translateX: l, translateY: x };
  }
}
function d(r, t, e) {
  const i = r[t], s = r[e];
  i === void 0 || s === void 0 || (r[t] = s, r[e] = i);
}
function R(r, t, e) {
  const i = e / 2;
  for (let s = 1; s <= i; s++) {
    const h = e - (s - 1);
    for (let o = 1; o <= t; o++) {
      const a = (s - 1) * t + o - 1, f = (h - 1) * t + o - 1;
      d(r, a * 4 + 0, f * 4 + 0), d(r, a * 4 + 1, f * 4 + 1), d(r, a * 4 + 2, f * 4 + 2), d(r, a * 4 + 3, f * 4 + 3);
    }
  }
}
export {
  S as Magnifier
};
