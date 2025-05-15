var s = Object.defineProperty;
var i = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var n = (o, e, t) => (i(o, typeof e != "symbol" ? e + "" : e, t), t);
class u {
  constructor(e, t) {
    n(this, "five");
    n(this, "measureController");
    n(this, "onKeyDown", (e) => {
      if (e.metaKey && e.code === "KeyS") {
        this.measureController.save().changeMode("Watch"), e.preventDefault();
        return;
      }
      if (e.code === "Escape")
        return this.escape();
    });
    n(this, "onMouseDown", (e) => {
      e.button === 2 && (e.preventDefault(), this.measureController.save().changeMode("Watch"));
    });
    this.five = t, this.measureController = e;
    const r = this.five.getElement();
    r && (document.body.addEventListener("keydown", this.onKeyDown), r.addEventListener("mousedown", this.onMouseDown));
  }
  dispose() {
    const e = this.five.getElement();
    e && (document.body.removeEventListener("keydown", this.onKeyDown), e.removeEventListener("mousedown", this.onMouseDown));
  }
  escape() {
    return this.measureController.getCurrentMode() === "Watch" ? this.measureController.disable() : this.measureController.save().changeMode("Watch");
  }
}
export {
  u as ShortcutKeyController
};
