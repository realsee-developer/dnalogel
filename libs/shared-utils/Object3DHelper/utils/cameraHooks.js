import { Subscribe as m } from "../../Subscribe.js";
const e = /* @__PURE__ */ new Map();
function l(o) {
  if (e.has(o))
    return e.get(o).hooks;
  const t = new m();
  let n = null, r;
  const i = () => {
    n = requestAnimationFrame(i);
    const a = o.projectionMatrix.toArray().join(",") + o.matrixWorld.toArray().join(",");
    a !== r && (r = a, t.emit("cameraUpdate"));
  };
  i();
  const s = () => {
    e.delete(o), cancelAnimationFrame(n);
  };
  return e.set(o, {
    hooks: t,
    dispose: s
  }), t;
}
export {
  l as cameraHooks
};
