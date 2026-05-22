var r = Object.defineProperty;
var n = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var l = (o, e, t) => e in o ? r(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, p = (o, e) => {
  for (var t in e || (e = {}))
    d.call(e, t) && l(o, t, e[t]);
  if (n)
    for (var t of n(e))
      f.call(e, t) && l(o, t, e[t]);
  return o;
};
import { createElement as a } from "./utils/createElement.js";
function x(o) {
  const e = a(p({
    position: "absolute",
    display: "block",
    borderRadius: "4px",
    paddingTop: "1px",
    paddingBottom: "1px",
    paddingLeft: "4px",
    paddingRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
    zIndex: "99999",
    backgroundColor: "rgba(0,0,0,0.7)",
    fontSize: "12px",
    color: "#fff",
    letterSpacing: "0",
    lineHeight: "18px"
  }, o)), t = () => {
    e.style.display !== "block" && e.style.top && e.style.left && (e.style.display = "block");
  };
  return { element: e, show: t, hide: () => {
    e.style.display = "none", e.style.top = "", e.style.left = "";
  }, setLeftTop: (s, i) => {
    e.style.left = s, e.style.top = i, t();
  } };
}
export {
  x as tipsDom
};
