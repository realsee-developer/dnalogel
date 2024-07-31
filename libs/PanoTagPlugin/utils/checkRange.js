function i(t, r) {
  if (t === void 0)
    return;
  const { min: e, max: f } = r != null ? r : {};
  if (!(e === void 0 && f === void 0))
    return !(typeof f == "number" && f < t || typeof e == "number" && e > t);
}
export {
  i as checkRange
};
