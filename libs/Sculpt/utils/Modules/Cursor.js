var t = Object.defineProperty;
var c = (s, r, e) => r in s ? t(s, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[r] = e;
var o = (s, r, e) => (c(s, typeof r != "symbol" ? r + "" : r, e), e);
const n = {
  auto: "",
  pen: "",
  "pen-forbidden": "",
  "pen-crosshair": "",
  "pne-polygon": "",
  "pen-circle": "",
  "crosshair-rectangle": "",
  "crosshair-circle": ""
};
class a {
  constructor(r) {
    o(this, "container");
    this.container = r;
  }
  /**
   * @param type - The type of the cursor.
   */
  setType(r) {
    const e = n[r];
    e ? this.container.style.cursor = `url(${e}), auto` : this.container.style.cursor = r;
  }
  tip(r) {
    return () => this.closeTip();
  }
  closeTip() {
  }
  reset() {
    this.container.style.cursor = "auto";
  }
}
export {
  a as Cursor
};
