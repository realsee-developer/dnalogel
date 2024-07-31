function l(e) {
  return e.model ? e.work ? e.model.loaded ? e.model.name !== e.work.model.file ? { result: !1, msg: "five.model.name 与 five.work.model.file 不一致" } : { result: !0, msg: "" } : { result: !1, msg: "five.model 未加载完成" } : { result: !1, msg: "five 数据未加载" } : { result: !1, msg: "five.model 不存在" };
}
export {
  l as checkFiveModelLoaded
};
