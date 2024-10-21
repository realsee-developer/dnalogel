import { isTruelyObject as s } from "./isTruelyObject.js";
function u(r, e) {
  return r === e ? !0 : typeof r != typeof e ? !1 : !!(Number.isNaN(r) && Number.isNaN(e));
}
function o(r, e) {
  const n = Object.getOwnPropertyNames(r), t = Object.getOwnPropertyNames(e);
  if (n.length !== t.length)
    return !1;
  for (let f = 0, l = n.length; f < l; f++) {
    const i = n[f];
    if (!u(r[i], e[i]))
      return !1;
  }
  return !0;
}
function p(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let n = 0, t = r.length; n < t; n++)
    if (!u(r[n], e[n]))
      return !1;
  return !0;
}
function c(r, e) {
  return u(r, e) ? !0 : s(r) && s(e) ? o(r, e) : Array.isArray(r) && Array.isArray(e) ? p(r, e) : !1;
}
function a(r, e) {
  return u(r, e) ? !0 : s(r) && s(e) ? g(r, e) : Array.isArray(r) && Array.isArray(e) ? y(r, e) : !1;
}
function y(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let n = 0, t = r.length; n < t; n++)
    if (!a(r[n], e[n]))
      return !1;
  return !0;
}
function g(r, e) {
  const n = Object.getOwnPropertyNames(r), t = Object.getOwnPropertyNames(e);
  if (n.length !== t.length)
    return !1;
  for (let f = 0, l = n.length; f < l; f++) {
    const i = n[f];
    if (!a(r[i], e[i]))
      return !1;
  }
  return !0;
}
function b(r, e, n = { deep: !1 }) {
  return n.deep ? a(r, e) : c(r, e);
}
export {
  b as equal
};
