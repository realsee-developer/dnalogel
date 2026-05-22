function l(e) {
  var o;
  return ((o = e.models) == null ? void 0 : o.filter((t) => t.name === e.state.workCode)[0]) || e.model;
}
export {
  l as getFiveModel
};
