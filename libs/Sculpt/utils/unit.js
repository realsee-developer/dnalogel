function i(t, e = "m") {
  let r;
  if (e === "m")
    return r = t.toFixed(2), r === "0.00" ? void 0 : r + "m";
  if (e === "mm")
    return r = (t * 1e3).toFixed(0), r === "0" ? void 0 : r + "mm";
  if (e === "ft") {
    const n = Math.floor(t / 0.3048), f = Math.floor(t % 0.3048 / 0.0254);
    return n === 0 && f === 0 ? void 0 : `${n}′${f}″`;
  }
}
function o(t, e = "m") {
  let r;
  if (e === "m")
    return r = t.toFixed(2), r === "0.00" ? void 0 : r + "m²";
  if (e === "mm")
    return r = (t * 1e3 * 1e3).toFixed(0), r === "0" ? void 0 : r + "mm²";
  if (e === "ft") {
    const n = (t * 10.76).toFixed(1);
    return n === "0.0" ? void 0 : n + "ft²";
  }
}
export {
  i as transformUnit,
  o as transformUnitSquare
};
