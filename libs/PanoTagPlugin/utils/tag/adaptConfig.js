function f(e) {
  var l, d;
  typeof e.visibleConfig == "object" && e.visibleConfig.keep && (e.visibleConfig.keep === "visible" ? e.visibleConfig = { keep: e.visibleConfig.keep, visibleFiveMode: (l = e.visibleConfig) == null ? void 0 : l.visibleFiveMode } : e.visibleConfig.keep === "hidden" && (e.visibleConfig = { keep: e.visibleConfig.keep })), typeof e.unfoldedConfig == "object" && (e.unfoldedConfig.disableFold && (e.unfoldedConfig = { keep: "unfolded" }), e.unfoldedConfig.disableUnfold && (e.unfoldedConfig = { keep: "folded" }), e.unfoldedConfig.keep && (e.unfoldedConfig = { keep: e.unfoldedConfig.keep }));
  const i = (d = e.initialState) != null ? d : {};
  return typeof e.unfoldedConfig == "object" && (e.unfoldedConfig.keep === "unfolded" ? i.unfolded = !0 : e.unfoldedConfig.keep === "folded" && (i.unfolded = !1)), typeof e.visibleConfig == "object" && (e.visibleConfig.keep === "visible" ? i.visible = !0 : e.visibleConfig.keep === "hidden" && (i.visible = !1)), e.initialState = i, e;
}
export {
  f as default
};
