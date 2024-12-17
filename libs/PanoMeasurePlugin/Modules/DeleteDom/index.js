var f = Object.defineProperty;
var k = (o, t, e) => t in o ? f(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var n = (o, t, e) => (k(o, typeof t != "symbol" ? t + "" : t, e), e);
import x from "./_Assets/delete.svg.js";
import y from "./_Assets/delete_bg.png.js";
import E from "./_Assets/delete_hover_bg.png.js";
class w {
  constructor(t, e) {
    n(this, "visible", !1);
    n(this, "five");
    n(this, "lines", []);
    n(this, "points", []);
    n(this, "onClick");
    n(this, "cancel");
    n(this, "content", document.createElement("div"));
    n(this, "container", document.createElement("div"));
    n(this, "masking", document.createElement("div"));
    n(this, "target");
    n(this, "clickHandler", (t) => {
      this.onClick(t, this.target);
    });
    n(this, "cancelHandler", () => {
      this.cancel(this.target);
    });
    n(this, "hover", () => {
      this.content.style.backgroundImage = `url(${E})`;
    });
    n(this, "unHover", () => {
      this.content.style.backgroundImage = `url(${y})`;
    });
    var a, r;
    this.five = t, this.onClick = (e == null ? void 0 : e.onClick) || (() => {
    }), this.cancel = (e == null ? void 0 : e.cancel) || (() => {
    }), this.container.classList.add("fpm__delete"), this.container.style.opacity = "0", this.container.style.position = "absolute", this.container.style.left = "0", this.container.style.top = "10px", this.container.style.transform = "translate3d(0, 0, 10px)", this.container.style.pointerEvents = "none", this.container.style.transition = "opacity 200ms ease", this.container.style.zIndex = "99", this.content.classList.add("fpm__delete-content"), this.content.style.width = "62px", this.content.style.height = "26px", this.content.style.display = "flex", this.content.style.alignItems = "center", this.content.style.justifyContent = "center", this.content.style.transform = "translate(-50%, -50%)", this.content.style.color = "#fff", this.content.style.fontSize = "12px", this.content.style.lineHeight = "17px", this.content.style.borderRadius = "11px", this.content.style.backgroundSize = "100% 100%", this.content.style.cursor = "pointer", this.content.style.userSelect = "none", this.content.style.backgroundImage = `url(${y})`, this.content.innerHTML = `
      ${x}
      <span>${(r = (a = e.i18n) == null ? void 0 : a.call(e, "删除")) != null ? r : "删除"}</span>
    `, this.container.append(this.content);
    const s = this.content.querySelector(".fpm__delete-icon");
    s && (s.style.width = "16px", s.style.height = "17px", s.style.marginRight = "1px"), this.content.addEventListener("click", this.clickHandler), this.content.addEventListener("mouseenter", this.hover), this.content.addEventListener("mouseleave", this.unHover), this.masking.setAttribute("style", "position: absolute;top: 0;left: 0;bottom: 0;right: 0;pointer-events: none;"), this.masking.addEventListener("click", this.cancelHandler), this.masking.addEventListener("touchstart", this.cancelHandler);
  }
  dispose() {
    this.content.removeEventListener("click", this.clickHandler), this.content.removeEventListener("mouseenter", this.hover), this.content.removeEventListener("mouseleave", this.unHover), this.container.remove(), this.masking.removeEventListener("click", this.cancelHandler), this.masking.removeEventListener("touchstart", this.cancelHandler), this.masking.remove();
  }
  appendTo(t) {
    return t.append(this.container), t.append(this.masking), this;
  }
  setLines(t) {
    return this.lines = t, this.points = Array.from(new Set(this.lines.map((e) => [e.points[0], e.points[1]]).flat(1))), this;
  }
  setTarget(t) {
    return this.target = t, this;
  }
  updatePosition(t, e) {
    if (t && e)
      return this.container.style.left = t, this.container.style.top = e, this.container.style.transform = "", this.show();
    if (this.lines.length === 0)
      return this;
    const s = this.points.map((i) => i.position).map((i) => i.clone().applyMatrix4(this.lines[0].mesh.matrixWorld)), a = s.map((i) => i.clone().project(this.five.camera));
    if (a.some((i) => Math.abs(i.z) > 1))
      return this.hide();
    const r = a.map((i) => i.x), c = a.map((i) => i.y), p = (Math.min(...r) + Math.max(...r)) / 2, v = Math.max(...c), h = this.container.parentElement;
    if (!h)
      return this;
    const l = (p + 1) / 2 * h.clientWidth, u = -(v - 1) / 2 * h.clientHeight;
    let m = l, d = u - 34;
    if (this.lines.length === 1 && s.length === 2) {
      const i = (c[1] - c[0]) / (r[1] - r[0]), g = -((c[1] + c[0]) / 2 - 1) / 2 * h.clientHeight;
      Math.abs(i) > 0.4 && (m = l + 57, d = g);
    }
    return this.container.style.top = "0", this.container.style.left = "0", this.container.style.transform = `translate3d(${m}px, ${d}px, 0)`, this.show();
  }
  hide() {
    return this.visible = !1, this.masking.style.pointerEvents = "none", this.container.style.opacity = "0", this.container.style.pointerEvents = "none", this.unHover(), this;
  }
  show() {
    return this.visible = !0, this.masking.style.pointerEvents = "auto", this.container.style.opacity = "1", this.container.style.pointerEvents = "auto", this;
  }
}
export {
  w as default
};
