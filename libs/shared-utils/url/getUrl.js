function o(e) {
  const t = e.split("?")[0].split(".").pop();
  return t ? t.toLowerCase() : "";
}
export {
  o as getUrlExt
};
