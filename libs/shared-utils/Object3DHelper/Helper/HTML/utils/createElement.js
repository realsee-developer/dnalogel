function o(r, n) {
  return i(document.createElement(n != null ? n : "div"), r);
}
function i(r, n) {
  if (!n)
    return r;
  for (const c in n)
    c && n[c] && (r.style[c] = n[c]);
  return r;
}
export {
  o as createElement
};
