function u(t, n = 200) {
  let e;
  return function(...o) {
    clearTimeout(e), e = setTimeout(() => {
      t(...o);
    }, n);
  };
}
export {
  u as debounce
};
