import { toArray as n } from "../util.js";
function i(r, o) {
  const a = n(o);
  r.updateMatrixWorld();
  const t = a.map((l) => r.localToWorld(l.clone()));
  return Array.isArray(o) ? t : t[0];
}
export {
  i as applyObjectMatrixWorld
};
