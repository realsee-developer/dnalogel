function o(t, n = "m", e = 2) {
  let r;
  if (n === "m")
    return r = t.toFixed(e), parseFloat(r) === 0 ? void 0 : r + "m";
  if (n === "mm")
    return r = (t * 1e3).toFixed(0), r === "0" ? void 0 : r + "mm";
  if (n === "ft") {
    const f = Math.floor(t / 0.3048), i = Math.floor(t % 0.3048 / 0.0254);
    return f === 0 && i === 0 ? void 0 : `${f}′${i}″`;
  }
}
function m(t, n = "m") {
  let e;
  if (n === "m")
    return e = t.toFixed(2), e === "0.00" ? void 0 : e + "m²";
  if (n === "mm")
    return e = (t * 1e3 * 1e3).toFixed(0), e === "0" ? void 0 : e + "mm²";
  if (n === "ft") {
    const r = (t * 10.76).toFixed(1);
    return r === "0.0" ? void 0 : r + "ft²";
  }
}
export {
  o as transformUnit,
  m as transformUnitSquare
};
