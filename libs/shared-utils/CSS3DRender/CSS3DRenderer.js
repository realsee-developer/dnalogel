var p = Object.defineProperty;
var l = (s, r, e) => r in s ? p(s, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[r] = e;
var o = (s, r, e) => (l(s, typeof r != "symbol" ? r + "" : r, e), e);
import { CSS3DRenderer as d } from "../three/CSS3DRenderer/index.js";
import { createResizeObserver as h } from "../createResizeObserver.js";
class f extends d {
  constructor(e) {
    super(e);
    o(this, "wrapper");
    o(this, "domElementWrapper", document.createElement("div"));
    o(this, "requestAnimationFrameId");
    o(this, "resizeDisoper");
    this.domElementWrapper.classList.add("ICSS3DRendererWrapper"), this.domElementWrapper.style.position = "absolute", this.domElementWrapper.style.top = "0", this.domElementWrapper.style.left = "0", this.domElementWrapper.style.width = "100%", this.domElementWrapper.style.height = "100%", this.domElementWrapper.style.userSelect = "none", this.domElementWrapper.style.pointerEvents = "none", this.domElement.classList.add("ICSS3DRenderer"), this.domElement.style.position = "absolute", this.domElement.style.top = "0", this.domElement.style.left = "0", this.domElement.style.userSelect = "none", this.domElement.style.pointerEvents = "none", this.domElementWrapper.appendChild(this.domElement);
  }
  setWrapper(e) {
    if (!e)
      throw new Error("CSS3DRenderer: wrapper is required");
    if ((() => {
      for (let i = 0; i < e.children.length; i++)
        if (e.children.item(i) === this.domElementWrapper)
          return !0;
      return !1;
    })())
      return;
    const t = this.wrapper;
    return t && t.contains(this.domElementWrapper) && this.domElementWrapper.remove(), this.appendToElement(e), this.wrapper = e, this;
  }
  appendToElement(e) {
    e.appendChild(this.domElementWrapper);
    const n = (m, a) => this.setSize(m, a), { observe: t, unobserve: i } = h(this.domElementWrapper, n, !0);
    t(), this.resizeDisoper = i, this.wrapper = e;
  }
  renderEveryFrame(e, n) {
    if (this.wrapper || console.warn("wrapper is not find, creating a html element and call setWrapper(wrapper)", this, e), this.requestAnimationFrameId)
      return;
    const t = () => {
      this.requestAnimationFrameId = requestAnimationFrame(t), e.visible && this.render(e, n);
    };
    t();
  }
  renderCss3dObjectEveryFrame(e, n) {
    if (this.wrapper || console.warn("wrapper is not find, creating a html element and call setWrapper(wrapper)", this, e), this.requestAnimationFrameId)
      return;
    const t = () => {
      this.requestAnimationFrameId = requestAnimationFrame(t), Array.isArray(e) ? e.forEach((i) => {
        i.visible && this.render(i, n);
      }) : this.sceneRender(Array.from(e.values()), n);
    };
    t();
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
  f as ICSS3DRenderer
};
