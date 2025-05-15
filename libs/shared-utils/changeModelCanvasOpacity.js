function a(o, s, t = 300) {
  var r, l;
  const e = o.getElement();
  if (e) {
    e.style.opacity = s + "";
    for (let n = 0; n < ((l = (r = e.parentElement) == null ? void 0 : r.children) == null ? void 0 : l.length); n++) {
      const i = e.parentElement.children[n];
      i instanceof HTMLElement && i.dataset.infive === "1" && (i.style.opacity = s + "");
    }
    e.style.transition = t === 0 ? "none" : `opacity ${t}ms linear`, t !== 0 && Promise.race([
      new Promise((n) => e.addEventListener("transitionend", n, { once: !0 })),
      new Promise((n) => setTimeout(n, t))
    ]).then(() => {
      e.style.transition = "none";
    });
  }
}
export {
  a as changeModelCanvasOpacity
};
