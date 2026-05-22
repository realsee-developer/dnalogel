import c from "./Text.js";
import { LabelItem as l } from "../../components/AreaLabel/LabelItem.js";
import { getGlobalResponsiveFontSize as f, getCurrentFontSize as b } from "../../shared-utils/fontSize.js";
import "../../vendor/svelte/internal/index.js";
import "../../components/AreaLabel/Assets/roomLabelBg.js";
import "../../shared-utils/math/rad2Deg.js";
import "../../components/AreaLabel/Assets/fontSize.js";
import "../../shared-utils/px2rem.js";
const s = (r, o) => {
  var t;
  const n = new c({
    target: r,
    props: { text: (t = o.rawData) == null ? void 0 : t.name }
  });
  return () => n.$destroy();
}, g = (r, o, n) => {
  var i;
  let t = b();
  const a = new l({
    target: r,
    props: { content: (i = o.rawData) == null ? void 0 : i.name, five: n, fontSize: t }
  }), p = f();
  let e = null;
  return typeof p == "object" && "subscribe" in p && (e = p.subscribe((m) => {
    t = m, a.$set({ fontSize: t });
  })), () => {
    e == null || e(), a.$destroy();
  };
}, F = {
  box: s,
  triangles: s,
  prism: g
};
export {
  F as tagRendererMap
};
