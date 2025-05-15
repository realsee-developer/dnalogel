var p = Object.defineProperty;
var n = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var e = (t, o, i) => o in t ? p(t, o, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[o] = i, s = (t, o) => {
  for (var i in o || (o = {}))
    m.call(o, i) && e(t, i, o[i]);
  if (n)
    for (var i of n(o))
      r.call(o, i) && e(t, i, o[i]);
  return t;
};
function u(t) {
  return t.model_item_labels.map((o) => s({
    modelPosition: [o.position[0], o.position[1] + o.size[1], o.position[2]]
  }, o));
}
export {
  u as parseModelItemLabelPluginData
};
