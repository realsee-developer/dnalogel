var c = Object.defineProperty;
var d = (l, t, i) => t in l ? c(l, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : l[t] = i;
var s = (l, t, i) => (d(l, typeof t != "symbol" ? t + "" : t, i), i);
const I = {
  auto: "",
  pen: "",
  "pen-forbidden": "",
  "pen-crosshair": "",
  "pne-polygon": "",
  "pen-circle": "",
  "crosshair-rectangle": "",
  "crosshair-circle": ""
};
class p {
  constructor(t) {
    s(this, "container");
    s(this, "deleteButton");
    this.container = t != null ? t : document.documentElement;
  }
  /**
   * @param type - The type of the cursor.
   */
  setType(t) {
    const i = I[t];
    i ? this.container.style.cursor = `url(${i}), auto` : this.container.style.cursor = t;
  }
  showDeleteButton(t) {
    const { clientX: i, clientY: n, container: o = this.container, onClick: r } = t;
    let e = this.deleteButton;
    return e || (e = document.createElement("div"), e.style.position = "absolute", e.style.width = "20px", e.style.height = "20px", e.style.transform = "translate(-50%, -40px)", e.style.borderRadius = "50%", e.style.cursor = "pointer", e.style.zIndex = "9999", e.style.cursor = "pointer", e.style.userSelect = "none", e.style.display = "flex", e.style.pointerEvents = "auto", e.style.alignItems = "center", e.style.justifyContent = "center", e.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iMjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMC43MDYlIiB5MT0iNDIuNzQ0JSIgeDI9Ijg5LjA2NCUiIHkyPSI1Ny4yMDglIiBpZD0icHJlZml4X19hIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZGIiBzdG9wLW9wYWNpdHk9Ii4zMDgiIG9mZnNldD0iNDkuNTY5JSIvPjxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iLS4yNSIgeT0iLS4yNSIgd2lkdGg9IjU3LjUiIGhlaWdodD0iMjMuNSIgcng9IjExLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIiBmaWxsPSIjMkMyQzJDIiBzdHJva2U9InVybCgjcHJlZml4X19hKSIgc3Ryb2tlLXdpZHRoPSIuNSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsLW9wYWNpdHk9Ii4zMDMiLz48L3N2Zz4=)", e.innerHTML = '<svg width="16px" height="17px" viewBox="0 0 16 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="22.185491%" y1="100%" x2="66.8316686%" y2="6.67239121%" id="1"><stop stop-color="#FFFCFC" stop-opacity="0.6"></stop><stop stop-color="#FFFFFF" offset="100%"></stop></linearGradient></defs>   <path fill="url(#1)" fill-rule="nonzero" transform="translate(2.16 2.16)" d="M11.2979686,2.71818182 C11.611378,2.71818182 11.8654465,2.97561809 11.8654465,3.29318182 C11.8654465,3.58428191 11.6519584,3.82485822 11.374972,3.86293275 L11.2979686,3.86818182 L10.464,3.868 L9.7236795,10.6246222 C9.64153248,11.3737453 9.04854423,11.9512142 8.32013277,12.0165596 L8.18206028,12.0227273 L3.68338622,12.0227273 C2.89302127,12.0227273 2.22904821,11.4205655 2.141767,10.6246222 L2.141767,10.6246222 L1.4,3.868 L0.567477876,3.86818182 C0.254068499,3.86818182 0,3.61074555 0,3.29318182 C0,3.00208173 0.213488114,2.76150541 0.49047449,2.72343089 L0.567477876,2.71818182 L11.2979686,2.71818182 Z M9.322,3.868 L2.542,3.868 L3.26978106,10.4976259 C3.28762252,10.6603274 3.39528004,10.7928487 3.53932022,10.8467307 L3.61412483,10.866894 L3.68338622,10.8727273 L8.18206028,10.8727273 C8.39410941,10.8727273 8.57224853,10.7111717 8.59566544,10.4976259 L8.59566544,10.4976259 L9.322,3.868 Z M8.16824216,0 C8.48165153,0 8.73572003,0.257436269 8.73572003,0.575 C8.73572003,0.866100087 8.52223192,1.1066764 8.24524554,1.14475093 L8.16824216,1.15 L3.69720434,1.15 C3.38379497,1.15 3.12972647,0.892563731 3.12972647,0.575 C3.12972647,0.283899913 3.34321458,0.0433235966 3.62020096,0.00524907226 L3.69720434,0 L8.16824216,0 Z"></path></svg>'), this.deleteButton = e, o.appendChild(e), e.style.left = `${i}px`, e.style.top = `${n}px`, e.onclick = () => {
      o.removeChild(e), r();
    }, e;
  }
  removeDeleteButton() {
    this.deleteButton && this.deleteButton.remove();
  }
  tip(t) {
    return () => this.closeTip();
  }
  closeTip() {
  }
  reset() {
    this.container.style.cursor = "auto";
  }
}
export {
  p as Cursor
};
