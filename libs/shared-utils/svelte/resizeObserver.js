import { index as f } from "../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
function E(i) {
  new f((l, p) => {
    var n, e, c, s, o, h;
    for (const d of l) {
      const { borderBoxSize: t, contentRect: v } = d, r = (c = (e = (n = t == null ? void 0 : t[0]) == null ? void 0 : n.inlineSize) != null ? e : v.width) != null ? c : i.clientWidth, a = (h = (o = (s = t == null ? void 0 : t[0]) == null ? void 0 : s.blockSize) != null ? o : v.height) != null ? h : i.clientHeight;
      i.dispatchEvent(new CustomEvent("clientWidth", { detail: r })), i.dispatchEvent(new CustomEvent("clientHeight", { detail: a }));
    }
  }).observe(i);
}
export {
  E as svelteResizeObserver
};
