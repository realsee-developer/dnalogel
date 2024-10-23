import n from "./Text.js";
import { LabelItem as p } from "../../components/AreaLabel/LabelItem.js";
import "../../vendor/svelte/internal/index.js";
import "../../components/AreaLabel/Assets/roomLabelBg.js";
const a = (e, r) => {
  var t;
  const o = new n({
    target: e,
    props: { text: (t = r.rawData) == null ? void 0 : t.name }
  });
  return () => o.$destroy();
}, s = (e, r) => {
  var t;
  const o = new p({
    target: e,
    props: { content: (t = r.rawData) == null ? void 0 : t.name }
  });
  return () => o.$destroy();
}, x = {
  box: a,
  triangles: a,
  prism: s
};
export {
  x as tagRendererMap
};
