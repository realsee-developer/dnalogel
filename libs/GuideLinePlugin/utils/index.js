function s(e) {
  const t = e.data, o = e.item, a = e.mode === "panorama" ? t.panorama_style : t.model_style;
  if (!a)
    return;
  const r = t.path, n = a, i = a;
  t.path ? o.setGeometryByPath(r, n) : t.pano_group && o.setGeometryByPanoGroup(t.pano_group, n), o.setMartial(i);
}
function l(e) {
  return e.length === 0 ? [] : e.filter((t, o) => t !== e[o - 1]);
}
export {
  l as filterAdjacentDistinct,
  s as updateGuideLineModeItemByData
};
