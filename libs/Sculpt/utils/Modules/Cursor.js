var l = Object.defineProperty;
var u = (n, e, o) => e in n ? l(n, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[e] = o;
var r = (n, e, o) => (u(n, typeof e != "symbol" ? e + "" : e, o), o);
import { DeleteButtonBgBorder as a } from "./DeleteButtonBgBorder.js";
import { DeleteIconSVG as p } from "./DeleteIconSVG.js";
const d = {
  auto: "",
  pen: "",
  "pen-forbidden": "",
  "pen-crosshair": "",
  "pne-polygon": "",
  "pen-circle": "",
  "crosshair-rectangle": "",
  "crosshair-circle": ""
}, h = {
  position: "absolute",
  width: "34px",
  height: "34px",
  transform: "translate(-50%, -40px)",
  borderRadius: "50%",
  cursor: "pointer",
  zIndex: "9999",
  userSelect: "none",
  display: "flex",
  pointerEvents: "auto",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "34px 34px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
}, m = `
  <div style="width: 32px; height: 32px; background-color: rgba(0, 0, 0, 0.5); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
    ${p}
  </div>
`;
class B {
  constructor(e) {
    r(this, "container");
    r(this, "deleteButton");
    this.container = e != null ? e : document.documentElement;
  }
  /**
   * @param type - The type of the cursor.
   */
  setType(e) {
    const o = d[e];
    o ? this.container.style.cursor = `url(${o}), auto` : this.container.style.cursor = e;
  }
  showDeleteButton(e) {
    const { clientX: o, clientY: i, container: s = this.container, onClick: c } = e;
    let t = this.deleteButton;
    return t || (t = document.createElement("div"), Object.assign(t.style, h), t.style.backgroundImage = `url(${a})`, t.innerHTML = m), this.deleteButton = t, s.appendChild(t), t.style.left = `${o}px`, t.style.top = `${i}px`, t.onclick = () => {
      s.removeChild(t), c();
    }, t;
  }
  removeDeleteButton() {
    this.deleteButton && this.deleteButton.remove();
  }
  tip(e) {
    return () => this.closeTip();
  }
  closeTip() {
  }
  reset() {
    this.container.style.cursor = "auto";
  }
}
export {
  B as Cursor
};
