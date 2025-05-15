import { even as o } from "./even.js";
function u(e, i, n = !0) {
  if (!e)
    return console.error("createResizeObserver: element is undefined"), { observe: () => {
    }, unobserve: () => {
    } };
  const r = () => {
    const t = o(e.clientWidth, { floor: !0 }), v = o(e.clientHeight, { floor: !0 });
    i(t, v);
  };
  if (typeof ResizeObserver == "undefined" || !ResizeObserver)
    return console.warn("createResizeObserver: ResizeObserver is undefined"), { observe: () => r(), unobserve: () => {
    } };
  const s = new ResizeObserver(r);
  return n && r(), {
    observe: () => s.observe(e),
    unobserve: () => s.unobserve(e)
  };
}
export {
  u as createResizeObserver
};
