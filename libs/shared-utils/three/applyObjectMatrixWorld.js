import { toArray as l } from "../util.js";
function i(t, r) {
  const o = l(r).map((n) => t.localToWorld(n.clone()));
  return Array.isArray(r) ? o : o[0];
}
export {
  i as applyObjectMatrixWorld
};
