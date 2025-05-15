var I = Object.defineProperty, k = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty, z = Object.prototype.propertyIsEnumerable;
var d = (r, e, t) => e in r ? I(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, f = (r, e) => {
  for (var t in e || (e = {}))
    W.call(e, t) && d(r, t, e[t]);
  if (w)
    for (var t of w(e))
      z.call(e, t) && d(r, t, e[t]);
  return r;
}, m = (r, e) => k(r, H(e));
var g = (r, e, t) => new Promise((i, o) => {
  var h = (n) => {
    try {
      a(t.next(n));
    } catch (c) {
      o(c);
    }
  }, s = (n) => {
    try {
      a(t.throw(n));
    } catch (c) {
      o(c);
    }
  }, a = (n) => n.done ? i(n.value) : Promise.resolve(n.value).then(h, s);
  a((t = t.apply(r, e)).next());
});
const u = /* @__PURE__ */ new Map();
function y(r) {
  return g(this, null, function* () {
    return new Promise((e, t) => {
      if (!r) {
        t(Error("url is empty"));
        return;
      }
      const i = new Image();
      i.src = r, i.onload = () => e({ width: i.width, height: i.height }), i.onerror = t;
    });
  });
}
function K(r) {
  return g(this, null, function* () {
    const { url: e, ratio: t = 3 } = r, i = (() => {
      if (u.has(e))
        return u.get(e);
      const s = y(e);
      return u.set(e, s), s;
    })(), { width: o, height: h } = yield i;
    return m(f({}, r), {
      width: o / t,
      height: h / t
    });
  });
}
function P(r) {
  return g(this, null, function* () {
    const { steps: e, url: t, ratio: i = 3, fps: o = 24 } = r;
    if (!e)
      throw new Error("KeyframeIcon requires steps");
    const { width: h, height: s } = yield y(t), a = h / i, n = s / i, c = a / e, l = n, p = 1 / o * e + "s";
    return m(f({}, r), {
      width: c,
      height: l,
      duration: p
    });
  });
}
export {
  K as getImageInfo,
  y as getImageSize,
  P as getKeyframeInfo
};
