var l = Object.defineProperty;
var a = (i, t, e) => t in i ? l(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var n = (i, t, e) => (a(i, typeof t != "symbol" ? t + "" : t, e), e);
import { CSS3DRenderer as d } from "../three/CSS3DRenderer/index.js";
import { createResizeObserver as h } from "../createResizeObserver.js";
class W extends d {
  constructor(e) {
    super(e);
    n(this, "wrapper");
    n(this, "domElementWrapper", document.createElement("div"));
    n(this, "requestAnimationFrameId");
    n(this, "resizeDisoper");
    this.domElementWrapper.classList.add("ICSS3DRendererWrapper"), this.domElementWrapper.style.position = "absolute", this.domElementWrapper.style.top = "0", this.domElementWrapper.style.left = "0", this.domElementWrapper.style.width = "100%", this.domElementWrapper.style.height = "100%", this.domElementWrapper.style.userSelect = "none", this.domElementWrapper.style.pointerEvents = "none", this.domElement.classList.add("ICSS3DRenderer"), this.domElement.style.position = "absolute", this.domElement.style.top = "0", this.domElement.style.left = "0", this.domElement.style.userSelect = "none", this.domElement.style.pointerEvents = "none", this.domElementWrapper.appendChild(this.domElement);
  }
  setWrapper(e) {
    if (!e)
      throw new Error("CSS3DRenderer: wrapper is required");
    if ((() => {
      for (let s = 0; s < e.children.length; s++)
        if (e.children.item(s) === this.domElementWrapper)
          return !0;
      return !1;
    })())
      return;
    const r = this.wrapper;
    return r && r.contains(this.domElementWrapper) && this.domElementWrapper.remove(), this.appendToElement(e), this.wrapper = e, this;
  }
  appendToElement(e) {
    e.appendChild(this.domElementWrapper);
    const o = (m, p) => this.setSize(m, p), { observe: r, unobserve: s } = h(this.domElementWrapper, o, !0);
    r(), this.resizeDisoper = s, this.wrapper = e;
  }
  renderEveryFrame(e, o) {
    if (this.wrapper || console.warn("wrapper is not find, creating a html element and call setWrapper(wrapper)", this, e), this.requestAnimationFrameId)
      return;
    const r = () => {
      this.requestAnimationFrameId = requestAnimationFrame(r), e.visible && this.render(e, o);
    };
    r();
  }
  stopRender() {
    this.requestAnimationFrameId && cancelAnimationFrame(this.requestAnimationFrameId);
  }
  dispose() {
    var e;
    this.stopRender(), (e = this.resizeDisoper) == null || e.call(this), this.domElementWrapper.remove();
  }
}
export {
  W as ICSS3DRenderer
};
