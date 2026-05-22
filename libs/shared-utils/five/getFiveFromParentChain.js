function r() {
  var i, e;
  return (e = (i = window.globalModules) == null ? void 0 : i.five) != null ? e : window.$five;
}
function f(i) {
  let e = i;
  for (; e; ) {
    const t = e.__five__;
    if (t)
      return t;
    const n = e.__sculpt__;
    if (n != null && n.five)
      return n.five;
    e = e.parent;
  }
  return r();
}
export {
  f as getFiveFromParentChain
};
