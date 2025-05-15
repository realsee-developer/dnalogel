var C = Object.defineProperty, g = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
var i = (e, o, A) => o in e ? C(e, o, { enumerable: !0, configurable: !0, writable: !0, value: A }) : e[o] = A, r = (e, o) => {
  for (var A in o || (o = {}))
    p.call(o, A) && i(e, A, o[A]);
  if (t)
    for (var A of t(o))
      a.call(o, A) && i(e, A, o[A]);
  return e;
}, l = (e, o) => g(e, d(o));
import { Color as n, TextureLoader as B } from "three";
const c = 1, h = 3, L = new n(16777215), I = new n(6522623), R = new n(16777215), J = new n(6522623), E = 6, M = 8, O = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAIVBMVEUAAAD////////////////////////////////////////PIev5AAAACnRSTlMAG/Py2baba05un7UgfgAAAHJJREFUKM9joBpgLHVSCRdA4metAoJlCJHmVWBgAeNzroKCCVCBLpjACqgJVjCBxRBT2FbBQQJYQAohsBAsUIUQWA4WiEIILAULeCEEloAFtBACizAEMLRgGIphLabDMJ2O6TlM72MGECIIMQIZIxqoBQCPvpJ/e9FaAAAAAABJRU5ErkJggg==", s = new B().load(O), U = {
  pointTexture: s,
  pointSize: E,
  lineWidth: c,
  lineColor: L,
  pointColor: R,
  lineRenderOrder: 20,
  pointsRenderOrder: 20
}, w = l(r({}, U), { dashed: !0 }), Q = {
  pointTexture: s,
  pointSize: M,
  lineWidth: h,
  lineColor: I,
  pointColor: J,
  lineRenderOrder: 10,
  pointsRenderOrder: 10
};
export {
  w as dashLineOpts,
  Q as lightLineOpts,
  U as normalLineOpts
};
