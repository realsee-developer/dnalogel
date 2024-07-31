function o(i, s, n = 300) {
  const e = i.getElement();
  e && (e.style.opacity = s + "", e.style.transition = n === 0 ? "none" : `opacity ${n}ms linear`, n !== 0 && Promise.race([
    new Promise((t) => e.addEventListener("transitionend", t, { once: !0 })),
    new Promise((t) => setTimeout(t, n))
  ]).then(() => {
    e.style.transition = "none";
  }));
}
export {
  o as changeModelCanvasOpacity
};
