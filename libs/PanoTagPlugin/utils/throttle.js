function i(n, e = 200) {
  let t;
  return function(...u) {
    t || (n.apply(this, u), t = setTimeout(function() {
      t = null;
    }, e));
  };
}
export {
  i as throttle
};
