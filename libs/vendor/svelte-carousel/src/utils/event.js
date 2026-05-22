function c(t) {
  return function(e, n) {
    t.dispatchEvent(
      new CustomEvent(e, {
        detail: n
      })
    );
  };
}
export {
  c as createDispatcher
};
