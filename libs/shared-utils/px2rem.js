function n(e, r = 16) {
  return (Number(typeof e == "string" ? e.replace(/px/g, "") : e) / r).toFixed(5) + "rem";
}
export {
  n as px2rem
};
