import { CanvasTexture as m } from "three";
function z(n, t) {
  var s, a, x, u, C;
  const e = (s = t == null ? void 0 : t.size) != null ? s : 512, b = (a = t == null ? void 0 : t.fontSize) != null ? a : e * (35 / 256) * 1.2, d = (x = t == null ? void 0 : t.backgroundColor) != null ? x : "rgba(0,0,0,0)", o = (u = t == null ? void 0 : t.fontColor) != null ? u : "#fff", A = (C = t == null ? void 0 : t.textAlign) != null ? C : "center", l = document.createElement("canvas");
  l.setAttribute("width", e + ""), l.setAttribute("height", e + "");
  const r = l.getContext("2d");
  return r.fillStyle = d, r.fillRect(0, 0, e, e), r.font = `${b}px "微软雅黑"`, r.textAlign = A, r.fillStyle = o, r.fillText(n, e / 2, e * 0.7), new m(l);
}
export {
  z as createCanvasTextTexture
};
