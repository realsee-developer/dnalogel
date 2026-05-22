var f = Object.defineProperty;
var u = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, z = Object.prototype.propertyIsEnumerable;
var b = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, w = (t, e) => {
  for (var r in e || (e = {}))
    x.call(e, r) && b(t, r, e[r]);
  if (u)
    for (var r of u(e))
      z.call(e, r) && b(t, r, e[r]);
  return t;
};
import { createElement as s } from "./utils/createElement.js";
function D() {
  const t = s({
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    position: "absolute",
    pointerEvents: "none"
  }), e = s({
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }), r = s({
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    position: "absolute",
    border: "1px solid rgba(255,255,255,0.4)"
  });
  t.appendChild(e), e.appendChild(r);
  const n = "-4px", i = { direction: "nesw", element: o({ cursor: "nesw-resize", left: n, bottom: n }) }, p = { direction: "ns", element: o({ cursor: "ns-resize", bottom: n }) }, c = { direction: "nwse", element: o({ cursor: "nwse-resize", right: n, bottom: n }) }, h = { direction: "ew", element: o({ cursor: "ew-resize", right: n }) }, d = { direction: "nesw", element: o({ cursor: "nesw-resize", right: n, top: n }) }, a = { direction: "ns", element: o({ cursor: "ns-resize", top: n }) }, l = { direction: "nwse", element: o({ cursor: "nwse-resize", left: n, top: n }) }, g = { direction: "ew", element: o({ cursor: "ew-resize", left: n }) };
  return new Array(p, h, a, g, i, c, d, l).forEach((m) => e.appendChild(m.element)), { container: t, spheres: [
    i,
    p,
    c,
    h,
    d,
    a,
    l,
    g
  ] };
}
function o(t) {
  const e = s(w({
    background: "#FFFF00",
    width: "9px",
    height: "9px",
    position: "absolute",
    pointerEvents: "none",
    borderRadius: "50%"
  }, t)), r = s({
    width: "15px",
    height: "15px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none"
  }), n = s({
    width: "15px",
    height: "15px",
    cursor: t == null ? void 0 : t.cursor,
    pointerEvents: "auto",
    // backgroundColor: 'red',
    background: "transparent"
  });
  return n.draggable = !0, r.appendChild(n), e.appendChild(r), e;
}
export {
  D as rectangleScaleDom
};
