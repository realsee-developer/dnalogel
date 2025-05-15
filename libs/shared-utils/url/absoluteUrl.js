function n(t) {
  return /^https?:\/\/|^\/\//.test(t) || /^data:/.test(t);
}
function s(t, e) {
  return n(e) ? e : `${t}${e}`;
}
export {
  s as absoluteUrl,
  n as isAbsoluteURL
};
