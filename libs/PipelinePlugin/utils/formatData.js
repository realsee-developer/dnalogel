import { notNil as c } from "../../shared-utils/isNil.js";
function d(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((a) => a.pipes.forEach((s) => t.set(s.id, s))), Array.from(t.values());
}
function v(e) {
  const t = e.target.map(({ startLibraryID: a, endLibraryID: s }) => {
    const r = e.data.pipelines.find(
      (n) => n.startLibraryID === a && n.endLibraryID === s
    );
    return r || console.warn(`Cannot find pipeline with startLibraryID ${a} and endLibraryID ${s}`), r;
  }).filter(c);
  return d(t);
}
function b(e) {
  if (e.quality === 0)
    return "//vr-static.realsee-cdn.cn/release/web/aqueous-system-demo/19/1.png";
  if (e.quality === 1)
    return "//vr-static.realsee-cdn.cn/release/web/aqueous-system-demo/19/2.png";
  if (e.quality === 2)
    return "//vr-static.realsee-cdn.cn/release/web/aqueous-system-demo/19/3.png";
  if (e.quality === 3)
    return "//vr-static.realsee-cdn.cn/release/web/aqueous-system-demo/19/4.png";
  if (e.quality === 4)
    return "//vr-static.realsee-cdn.cn/release/web/aqueous-system-demo/19/5.png";
  if (e.isHot)
    return "//vr-static.realsee-cdn.cn/release/web/aqueous-system-demo/19/6.png";
}
function w(e, t) {
  const a = e.ConnectsDataset.map((r) => {
    const n = r.data, l = r.start, f = r.end, u = { isHot: r.waterType === 5, quality: r.waterType }, p = n.map((o) => {
      const i = e.LinesDataset.find((g) => g.id === o);
      if (!i)
        return null;
      const m = i.data, y = t != null && t.getPipeRadius ? t.getPipeRadius(i) : 1.6 / 100, q = t != null && t.getPipeUrl ? t.getPipeUrl(u) : b(u);
      return { id: i.id, radius: y, water: u, path: m, texture: q };
    }).filter(c);
    return { startLibraryID: l, endLibraryID: f, pipes: p };
  });
  return { pipes: d(a), pipelines: a };
}
export {
  w as format,
  b as getDefaultPipeUrl,
  v as getPipesFromLibrary
};
