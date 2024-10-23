var r = Object.defineProperty, m = Object.defineProperties;
var a = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var e = (i, o, t) => o in i ? r(i, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[o] = t, s = (i, o) => {
  for (var t in o || (o = {}))
    d.call(o, t) && e(i, t, o[t]);
  if (n)
    for (var t of n(o))
      u.call(o, t) && e(i, t, o[t]);
  return i;
}, p = (i, o) => m(i, a(o));
function x(i) {
  return i.item_labels.map((o) => p(s({}, o), {
    modelPosition: [o.position[0], o.position[1], o.position[2]],
    observerIndex: void 0
  }));
}
export {
  x as parseItemLabelPluginData
};
