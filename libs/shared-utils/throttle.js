function o(n, e = 200) {
  let t;
  return function(...u) {
    t || (n(...u), t = setTimeout(function() {
      t = null;
    }, e));
  };
}
export {
  o as throttle
};
