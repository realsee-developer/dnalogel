var l = (a, n, t) => new Promise((o, s) => {
  var r = (c) => {
    try {
      e(t.next(c));
    } catch (h) {
      s(h);
    }
  }, y = (c) => {
    try {
      e(t.throw(c));
    } catch (h) {
      s(h);
    }
  }, e = (c) => c.done ? o(c.value) : Promise.resolve(c.value).then(r, y);
  e((t = t.apply(a, n)).next());
});
const p = (a) => l(void 0, null, function* () {
  try {
    a().then(() => {
    }, () => {
    }).catch(() => {
    });
  } catch (n) {
  }
});
export {
  p as safeCall
};
