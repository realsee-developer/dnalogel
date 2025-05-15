const e = document.createElement("div");
e.classList.add("behindFiveElement");
e.style.position = "absolute";
e.style.top = "0";
e.style.left = "0";
e.style.width = "100%";
e.style.height = "100%";
e.style.pointerEvents = "none";
function d(t) {
  var o, a, i, l, s;
  const n = (s = (a = c(t.getElement())) != null ? a : c((o = t.getElement()) == null ? void 0 : o.parentElement)) != null ? s : c((l = (i = t.getElement()) == null ? void 0 : i.parentElement) == null ? void 0 : l.parentElement), r = n == null ? void 0 : n.parentElement;
  if (r)
    return r.contains(e) || n.parentElement.insertBefore(e, n), e;
  console.error(
    "Can not find a valid element to insert behindFiveElement. How to fix it: https://github.com/realsee-developer/dnalogel/tree/main/plugins/src/CSS3DRenderPlugin/README.md"
  );
}
function c(t) {
  var s;
  if (!t)
    return;
  const n = (s = t.style.position) != null ? s : getComputedStyle(t).position;
  if (n !== "fixed" && n !== "absolute" && n !== "relative")
    return;
  const r = getComputedStyle(t), o = r.backgroundColor, a = r.backgroundImage;
  if (!(o !== "transparent" && o !== "rgba(0, 0, 0, 0)" && o !== "" || a !== "none" && a !== ""))
    return t;
}
export {
  d as default,
  d as generateBehindFiveElement
};
