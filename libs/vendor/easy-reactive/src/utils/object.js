import { isEqual as o } from "../../../lodash.isequal/index.js";
const p = (e, t) => o(e, t), c = (e) => Object.keys(e || {}), u = (e, t) => {
  const r = {};
  return e.forEach((s) => {
    r[s] = t[s];
  }), r;
};
export {
  p as depsAreEqual,
  c as getDepNames,
  u as getUpdatedDeps
};
