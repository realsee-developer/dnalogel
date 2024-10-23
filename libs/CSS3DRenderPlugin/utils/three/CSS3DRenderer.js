var l = Object.defineProperty;
var a = (s, t, e) => t in s ? l(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var n = (s, t, e) => (a(s, typeof t != "symbol" ? t + "" : t, e), e);
import { CSS3DRenderer as d } from "./THREEJS_CSS3DRenderer.js";
import h from "../createResizeObserver.js";
import "three";
import "../even.js";
const E = d;
class y extends E {
  constructor() {
    super();
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
      for (let i = 0; i < e.children.length; i++)
        if (e.children.item(i) === this.domElementWrapper)
          return !0;
      return !1;
    })())
      return;
    const r = this.wrapper;
    return r && r.contains(this.domElementWrapper) && this.domElementWrapper.remove(), this.appendToElement(e), this.wrapper = e, this;
  }
  appendToElement(e) {
    e.appendChild(this.domElementWrapper);
    const o = (m, p) => this.setSize(m, p), { observe: r, unobserve: i } = h(this.domElementWrapper, o, !0);
    r(), this.resizeDisoper = i, this.wrapper = e;
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
  y as ICSS3DRenderer,
  y as default
};
