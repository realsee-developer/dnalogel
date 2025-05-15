var c = (a, n, t) => new Promise((l, u) => {
  var i = (r) => {
    try {
      o(t.next(r));
    } catch (e) {
      u(e);
    }
  }, f = (r) => {
    try {
      o(t.throw(r));
    } catch (e) {
      u(e);
    }
  }, o = (r) => r.done ? l(r.value) : Promise.resolve(r.value).then(i, f);
  o((t = t.apply(a, n)).next());
});
function d(a) {
  return c(this, null, function* () {
    try {
      return [null, yield a];
    } catch (n) {
      return n instanceof Error ? [n, null] : [new Error(""), null];
    }
  });
}
export {
  d as to
};
