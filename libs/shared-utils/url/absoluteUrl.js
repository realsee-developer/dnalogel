function s(t) {
  return /^https?:\/\/|^\/\//.test(t) || /^data:/.test(t) || t.startsWith("//");
}
export {
  s as isAbsoluteURL
};
