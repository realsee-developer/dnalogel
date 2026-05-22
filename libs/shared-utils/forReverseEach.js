function f(o, t) {
  for (let e = o.length - 1; e >= 0; e--)
    t(o[e]);
}
export {
  f as forReverseEach
};
