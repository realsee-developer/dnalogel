var i = (e, o, r) => new Promise((c, d) => {
  var u = (n) => {
    try {
      t(r.next(n));
    } catch (a) {
      d(a);
    }
  }, w = (n) => {
    try {
      t(r.throw(n));
    } catch (a) {
      d(a);
    }
  }, t = (n) => n.done ? c(n.value) : Promise.resolve(n.value).then(u, w);
  t((r = r.apply(e, o)).next());
});
function k(e) {
  return i(this, null, function* () {
    return new Promise((o) => {
      if (e.work) {
        o();
        return;
      }
      e.once("loaded", () => o());
    });
  });
}
export {
  k as waitFiveLoaded
};
