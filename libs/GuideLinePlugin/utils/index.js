function i(t) {
  return t.length === 0 ? [] : t.filter((e, n) => e !== t[n - 1]);
}
export {
  i as filterAdjacentDistinct
};
