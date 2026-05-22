var h = Object.defineProperty;
var d = (e, t, i) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var n = (e, t, i) => (d(e, typeof t != "symbol" ? t + "" : t, i), i);
import { isNDCPointInFront as y } from "../isNDCPointInScreen.js";
function m(e) {
  const t = document.createElement("div");
  return t.setAttribute(
    "style",
    "backdrop-filter: blur(4px);-webkit-backdrop-filter: blur(4px);-webkit-tap-highlight-color: rgba(0,0,0,0);"
  ), t.style.width = "max-content", t.style.padding = "3px 6px", t.style.lineHeight = "1", t.style.textAlign = "center", t.style.transform = "translate(-50%, -50%)", t.style.fontSize = "14px", t.style.color = "#fff", t.style.cursor = "pointer", t.style.userSelect = "none", e != null && e.style && Object.assign(t.style, e == null ? void 0 : e.style), t;
}
function D(e) {
  const t = document.createElement("div");
  return e != null && e.id && (t.id = e == null ? void 0 : e.id), t.classList.add("five-plugin-measure__distance"), t.style.position = "absolute", t.style.left = "0", t.style.top = "0", t.style.width = "0", t.style.height = "0", t.style.transform = "translate(-10px, -10px)", t.style.transformOrigin = "left top", e != null && e.style && Object.assign(t.style, e.style), t;
}
class f {
  constructor(t) {
    n(this, "ndcPosition");
    n(this, "contentDom");
    n(this, "containerDom");
    n(this, "params");
    n(this, "canSelected");
    n(this, "handleClick", (t) => {
      var i, o;
      (o = (i = this.params).clickCallback) == null || o.call(i, t, this);
    });
    this.params = t, this.contentDom = m({ style: t.contentStyle }), this.containerDom = D({ style: t.containerStyle }), this.setCanSelect(!0);
  }
  setCanSelect(t) {
    this.canSelected = t, this.containerDom.style.pointerEvents = t ? "all" : "none";
  }
  highlight() {
    this.contentDom.style.border = "0.5px solid #95AEFF", this.contentDom.style.background = "linear-gradient(90deg, #95AEFF 0%, #6386FF 100%)";
  }
  unHighlight() {
    this.contentDom.style.border = "0.5px solid rgba(255,255,255,0.6)", this.contentDom.style.background = "rgba(195,195,195,0.70)";
  }
  appendTo(t) {
    return t.appendChild(this.containerDom), this.containerDom.addEventListener("click", this.handleClick), this;
  }
  remove() {
    this.contentDom.removeEventListener("click", this.handleClick), this.containerDom.remove();
  }
  show() {
    this.containerDom.style.visibility = "visible";
  }
  hide() {
    this.containerDom.style.visibility = "hidden";
  }
  tempHide() {
    this.containerDom.style.opacity = "0";
  }
  tempShow() {
    this.containerDom.style.opacity = "1";
  }
  /**
   * @description: camera update 的时候，更新dom的位置
   */
  updateDomPosition(t) {
    if (!this.ndcPosition) {
      this.tempHide();
      return;
    }
    const i = t.getElement();
    if (!i)
      return;
    const o = i.clientWidth, l = i.clientHeight, s = this.ndcPosition.clone().project(t.camera);
    if (!y(s)) {
      this.tempHide();
      return;
    }
    const c = (s.x + 1) / 2 * o, r = -(s.y - 1) / 2 * l;
    this.containerDom.style.transform = `translate(${c}px, ${r}px)`, this.tempShow();
  }
}
export {
  f as ItemDom
};
