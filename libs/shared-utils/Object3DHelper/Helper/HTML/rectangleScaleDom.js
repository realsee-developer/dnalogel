var f = Object.defineProperty;
var g = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var w = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, b = (t, e) => {
  for (var r in e || (e = {}))
    q.call(e, r) && w(t, r, e[r]);
  if (g)
    for (var r of g(e))
      x.call(e, r) && w(t, r, e[r]);
  return t;
};
import { createElement as s } from "./utils/createElement.js";
function F() {
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
  const n = "-4px", i = { direction: "nesw", element: o({ cursor: "nesw-resize", left: n, bottom: n }) }, a = { direction: "ns", element: o({ cursor: "ns-resize", bottom: n }) }, c = { direction: "nwse", element: o({ cursor: "nwse-resize", right: n, bottom: n }) }, p = { direction: "ew", element: o({ cursor: "ew-resize", right: n }) }, u = { direction: "nesw", element: o({ cursor: "nesw-resize", right: n, top: n }) }, d = { direction: "ns", element: o({ cursor: "ns-resize", top: n }) }, l = { direction: "nwse", element: o({ cursor: "nwse-resize", left: n, top: n }) }, h = { direction: "ew", element: o({ cursor: "ew-resize", left: n }) };
  return new Array(a, p, d, h, i, c, u, l).forEach((m) => e.appendChild(m.element)), { container: t, squares: [
    i,
    a,
    c,
    p,
    u,
    d,
    l,
    h
  ] };
}
function o(t) {
  const e = s(b({
    background: "#FFFFFF",
    width: "9px",
    height: "9px",
    position: "absolute",
    pointerEvents: "none"
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
  F as rectangleScaleDom
};
