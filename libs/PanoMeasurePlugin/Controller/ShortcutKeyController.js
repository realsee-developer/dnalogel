var o = Object.defineProperty;
var s = (r, e, t) => e in r ? o(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var n = (r, e, t) => (s(r, typeof e != "symbol" ? e + "" : e, t), t);
class l {
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
    this.five = t, this.measureController = e, this.five.getElement() && document.body.addEventListener("keydown", this.onKeyDown);
  }
  dispose() {
    this.five.getElement() && document.body.removeEventListener("keydown", this.onKeyDown);
  }
  escape() {
    return this.measureController.getCurrentMode() === "Watch" ? this.measureController.disable() : this.measureController.save().changeMode("Watch");
  }
}
export {
  l as ShortcutKeyController
};
