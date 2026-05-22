const o = (r, n, t) => {
  if (r && r.hasOwnProperty(n))
    return r[n];
  if (t === void 0)
    throw new Error(`Required arg "${n}" was not provided`);
  return t;
}, w = (r) => (n) => {
  r[n] && r[n]();
};
export {
  o as get,
  w as switcher
};
