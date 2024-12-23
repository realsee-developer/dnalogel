var c = Object.defineProperty;
var h = (s, e, t) => e in s ? c(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var n = (s, e, t) => (h(s, typeof e != "symbol" ? e + "" : e, t), t);
import { mainIconStyle as d, mainItemStyle as x } from "./style.js";
class u {
  constructor(e, t, i) {
    n(this, "container");
    n(this, "measureController");
    n(this, "mainElement");
    n(this, "_params");
    n(this, "_btnTexts", {
      start: "开始",
      end: "结束",
      revoke: "撤销",
      exit: "退出"
    });
    /* 鼠标移入时 */
    n(this, "onMouseEnter", () => {
      const { mainItem: e } = this.mainElement;
      e.style.opacity = "1";
    });
    /* 鼠标移出时 */
    n(this, "onMouseLeave", () => {
      const { mainItem: e } = this.mainElement;
      e.style.opacity = "0.85";
    });
    n(this, "onClick", () => {
      this.measureController.getCurrentMode() !== "Edit" ? this.measureController.changeMode("Edit") : this.measureController.save().changeMode("Watch");
    });
    n(this, "modeChangeHandler", (e) => {
      e === "Edit" ? this.change2Done() : this.change2Add();
    });
    var o, r, _, l;
    this._params = i, this._btnTexts = {
      start: (o = this._params.startButtonText) != null ? o : this._btnTexts.start,
      end: (r = this._params.endButtonText) != null ? r : this._btnTexts.end,
      revoke: (_ = this._params.revokeButtonText) != null ? _ : this._btnTexts.revoke,
      exit: (l = this._params.exitButtonText) != null ? l : this._btnTexts.exit
    }, this.measureController = e, this.container = t, this.mainElement = this.getMainElement(), Object.assign(this.mainElement.mainIcon.style, d), Object.assign(this.mainElement.mainItem.style, x);
    const { revokeTextDom: a, exitTextDom: m } = this._getTextElement();
    a && (a.innerText = this._btnTexts.revoke), m && (m.innerText = this._btnTexts.exit), this.change2Add(), this.measureController.hook.on("modeChange", this.modeChangeHandler), this.mainElement.mainItem.addEventListener("click", this.onClick), this.mainElement.mainItem.addEventListener("mouseenter", this.onMouseEnter), this.mainElement.mainItem.addEventListener("mouseleave", this.onMouseLeave);
  }
  dispose() {
    this.measureController.hook.off("modeChange", this.modeChangeHandler), this.mainElement.mainItem.removeEventListener("click", this.onClick), this.mainElement.mainItem.removeEventListener("mouseenter", this.onMouseEnter), this.mainElement.mainItem.removeEventListener("mouseleave", this.onMouseLeave);
  }
  getMainElement() {
    const e = this.container.querySelector(".fpm__main-text"), t = this.container.querySelector(".fpm__main"), i = this.container.querySelector(".fpm__main-icon");
    if (!t || !e || !i)
      throw new Error("cannot find dom");
    return { mainTextDom: e, mainItem: t, mainIcon: i };
  }
  _getTextElement() {
    const e = this.container.querySelector(".fpm__revoke-text"), t = this.container.querySelector(".fpm__exit-text");
    return { revokeTextDom: e, exitTextDom: t };
  }
  change2Add() {
    const { mainIcon: e, mainTextDom: t } = this.mainElement;
    if (e.className.includes("fpm__main__start")) {
      t.innerText = this._btnTexts.start;
      return;
    }
    e.className.includes("fpm__main__end") && (e.style.transform = "scale(0.8)", t.className.includes("fpm__main-text__show") ? t.classList.replace("fpm__main-text__show", "fpm__main-text__hide") : t.classList.add("fpm__main-text__hide"), setTimeout(() => {
      e.classList.replace("fpm__main__end", "fpm__main__start"), e.style.transform = "scale(1)", t.innerText = this._btnTexts.start, t.classList.replace("fpm__main-text__hide", "fpm__main-text__show");
    }, 200));
  }
  change2Done() {
    const { mainTextDom: e, mainIcon: t } = this.getMainElement();
    e.innerText !== this._btnTexts.end && (t.className.includes("fpm__main__end") || t.className.includes("fpm__main__start") && (t.style.transform = "scale(0.8)", e.className.includes("fpm__main-text__show") ? e.classList.replace("fpm__main-text__show", "fpm__main-text__hide") : e.classList.add("fpm__main-text__hide"), setTimeout(() => {
      t.classList.replace("fpm__main__start", "fpm__main__end"), t.style.transform = "scale(1)", e.innerText = this._btnTexts.end, e.classList.replace("fpm__main-text__hide", "fpm__main-text__show");
    }, 200)));
  }
}
export {
  u as MainBtnController
};
