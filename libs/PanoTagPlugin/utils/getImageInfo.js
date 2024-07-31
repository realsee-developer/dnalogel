var I = Object.defineProperty, k = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, W = Object.prototype.propertyIsEnumerable;
var u = (i, e, t) => e in i ? I(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, f = (i, e) => {
  for (var t in e || (e = {}))
    H.call(e, t) && u(i, t, e[t]);
  if (w)
    for (var t of w(e))
      W.call(e, t) && u(i, t, e[t]);
  return i;
}, d = (i, e) => k(i, p(e));
var a = (i, e, t) => new Promise((r, o) => {
  var c = (n) => {
    try {
      s(t.next(n));
    } catch (h) {
      o(h);
    }
  }, g = (n) => {
    try {
      s(t.throw(n));
    } catch (h) {
      o(h);
    }
  }, s = (n) => n.done ? r(n.value) : Promise.resolve(n.value).then(c, g);
  s((t = t.apply(i, e)).next());
});
function y(i) {
  return a(this, null, function* () {
    return new Promise((e, t) => {
      if (!i) {
        t(Error("url is empty"));
        return;
      }
      const r = new Image();
      r.src = i, r.onload = () => e({ width: r.width, height: r.height }), r.onerror = t;
    });
  });
}
function K(i) {
  return a(this, null, function* () {
    const { url: e, ratio: t = 3 } = i;
    i.ratio || console.warn("Tag icon ratio is not set, default is 3");
    const { width: r, height: o } = yield y(e);
    return d(f({}, i), {
      width: r / t,
      height: o / t
    });
  });
}
function R(i) {
  return a(this, null, function* () {
    const { steps: e, url: t, ratio: r = 3, fps: o = 24 } = i;
    if (!e)
      throw new Error("KeyframeIcon requires steps");
    const { width: c, height: g } = yield y(t), s = c / r, n = g / r, h = s / e, l = n, m = 1 / o * e + "s";
    return d(f({}, i), {
      width: h,
      height: l,
      duration: m
    });
  });
}
export {
  K as getImageInfo,
  y as getImageSize,
  R as getKeyframeInfo
};
