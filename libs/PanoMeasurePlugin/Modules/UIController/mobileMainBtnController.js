var _ = Object.defineProperty;
var r = (i, t, e) => t in i ? _(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var n = (i, t, e) => (r(i, typeof t != "symbol" ? t + "" : t, e), e);
import { mainIconStyle as l, mainItemStyle as o } from "./style.js";
class d {
  constructor(t, e, s) {
    n(this, "container");
    n(this, "measureController");
    n(this, "mainElement");
    n(this, "_params");
    n(this, "_btnTexts", {
      start: "开始",
      end: "结束"
    });
    n(this, "onClick", () => {
      var t;
      this.mainElement.mainTextDom.innerText === ((t = this._params.startButtonText) != null ? t : "开始") ? (this.measureController.hook.emit("willChangeState", "watching", "editing"), this.change2Done()) : (this.measureController.hook.emit("willChangeState", "editing", "watching"), this.change2Add());
    });
    var a, m;
    this._params = s, this._btnTexts = {
      start: (a = this._params.startButtonText) != null ? a : this._btnTexts.start,
      end: (m = this._params.endButtonText) != null ? m : this._btnTexts.end
    }, this.measureController = t, this.container = e, this.mainElement = this.getMainElement(), this.mainElement.mainIcon.setAttribute("style", "-webkit-tap-highlight-color: rgba(0,0,0,0);"), Object.assign(this.mainElement.mainIcon.style, l), Object.assign(this.mainElement.mainItem.style, o), this.change2Add(), this.mainElement.mainItem.addEventListener("click", this.onClick);
  }
  dispose() {
    this.mainElement.mainItem.removeEventListener("click", this.onClick);
  }
  getMainElement() {
    const t = this.container.querySelector(".fpm__main-text"), e = this.container.querySelector(".fpm__main"), s = this.container.querySelector(".fpm__main-icon");
    if (!e || !t || !s)
      throw new Error("cannot find dom");
    return { mainTextDom: t, mainItem: e, mainIcon: s };
  }
  change2Add() {
    const { mainIcon: t, mainTextDom: e } = this.mainElement;
    if (t.className.includes("fpm__main__start")) {
      e.innerText = this._btnTexts.start;
      return;
    }
    t.className.includes("fpm__main__end") && (t.style.transform = "scale(0.8)", e.className.includes("fpm__main-text__show") ? e.classList.replace("fpm__main-text__show", "fpm__main-text__hide") : e.classList.add("fpm__main-text__hide"), setTimeout(() => {
      t.classList.replace("fpm__main__end", "fpm__main__start"), t.style.transform = "scale(1)", e.innerText = this._btnTexts.start, e.classList.replace("fpm__main-text__hide", "fpm__main-text__show");
    }, 200));
  }
  change2Done() {
    const { mainTextDom: t, mainIcon: e } = this.mainElement;
    t.innerText !== this._btnTexts.end && (e.className.includes("fpm__main__end") || e.className.includes("fpm__main__start") && (e.style.transform = "scale(0.8)", t.className.includes("fpm__main-text__show") ? t.classList.replace("fpm__main-text__show", "fpm__main-text__hide") : t.classList.add("fpm__main-text__hide"), setTimeout(() => {
      e.classList.replace("fpm__main__start", "fpm__main__end"), e.style.transform = "scale(1)", t.innerText = this._btnTexts.end, t.classList.replace("fpm__main-text__hide", "fpm__main-text__show");
    }, 200)));
  }
}
export {
  d as MobileMainBtnController
};
