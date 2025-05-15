let e = null;
function n(t = 2e6) {
  return e && document.body.contains(e) ? (e.style.zIndex = String(t), e) : (e = document.createElement("div"), e.className = "tag-popover-container", Object.assign(e.style, {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    zIndex: String(t),
    pointerEvents: "none",
    overflow: "hidden"
  }), document.body.appendChild(e), e);
}
export {
  n as getOrCreatePopoverContainer
};
