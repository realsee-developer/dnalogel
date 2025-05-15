import p from "./Text.js";
import { LabelItem as m } from "../../components/AreaLabel/LabelItem.js";
import "../../vendor/svelte/internal/index.js";
import "../../components/AreaLabel/Assets/roomLabelBg.js";
import "../../shared-utils/math/rad2Deg.js";
const n = (e, r) => {
  var t;
  const o = new p({
    target: e,
    props: { text: (t = r.rawData) == null ? void 0 : t.name }
  });
  return () => o.$destroy();
}, s = (e, r, o) => {
  var a;
  const t = new m({
    target: e,
    props: { content: (a = r.rawData) == null ? void 0 : a.name, five: o }
  });
  return () => t.$destroy();
}, l = {
  box: n,
  triangles: n,
  prism: s
};
export {
  l as tagRendererMap
};
