import { toArray as t } from "../util.js";
function a(n, o) {
  const r = t(o).map((l) => n.localToWorld(l.clone()));
  return Array.isArray(o) ? r : r[0];
}
function e(n, o) {
  const r = t(o).map((l) => n.worldToLocal(l.clone()));
  return Array.isArray(o) ? r : r[0];
}
export {
  a as localToWorld,
  e as worldToLocal
};
