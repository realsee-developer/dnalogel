function r(e) {
  return typeof e == "object" ? e === null ? {} : e : {};
}
export {
  r as safeObj
};
