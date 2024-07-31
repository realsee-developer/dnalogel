import { notNil as c } from "../../shared-utils/isNil.js";
function l(e) {
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
  return l(t);
}
function g(e) {
  if (e.quality === 0)
    return "//vrlab-static.ljcdn.com/release/web/aqueous-system-demo/19/1.png";
  if (e.quality === 1)
    return "//vrlab-static.ljcdn.com/release/web/aqueous-system-demo/19/2.png";
  if (e.quality === 2)
    return "//vrlab-static.ljcdn.com/release/web/aqueous-system-demo/19/3.png";
  if (e.quality === 3)
    return "//vrlab-static.ljcdn.com/release/web/aqueous-system-demo/19/4.png";
  if (e.quality === 4)
    return "//vrlab-static.ljcdn.com/release/web/aqueous-system-demo/19/5.png";
  if (e.isHot)
    return "//vrlab-static.ljcdn.com/release/web/aqueous-system-demo/19/6.png";
}
function w(e, t) {
  const a = e.ConnectsDataset.map((r) => {
    const n = r.data, d = r.start, o = r.end, u = { isHot: r.waterType === 5, quality: r.waterType }, m = n.map((f) => {
      const i = e.LinesDataset.find((q) => q.id === f);
      if (!i)
        return null;
      const p = i.data, y = t != null && t.getPipeRadius ? t.getPipeRadius(i) : 1.6 / 100, b = t != null && t.getPipeUrl ? t.getPipeUrl(u) : g(u);
      return { id: i.id, radius: y, water: u, path: p, texture: b };
    }).filter(c);
    return { startLibraryID: d, endLibraryID: o, pipes: m };
  });
  return { pipes: l(a), pipelines: a };
}
export {
  w as format,
  g as getDefaultPipeUrl,
  v as getPipesFromLibrary
};
