var i = Object.defineProperty;
var n = Object.getOwnPropertySymbols;
var t = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var o = (a, e, r) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, s = (a, e) => {
  for (var r in e || (e = {}))
    t.call(e, r) && o(a, r, e[r]);
  if (n)
    for (var r of n(e))
      d.call(e, r) && o(a, r, e[r]);
  return a;
};
function l(a) {
  return a.map((e) => s({
    observerIndex: void 0,
    visible: !1,
    isFold: !1
  }, e));
}
export {
  l as transform2RenderData
};
