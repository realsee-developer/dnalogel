import { LightTag as a } from "../../shared-utils/tag.js";
function s(o) {
  n(o), o.traverse((r) => n(r));
}
function n(o) {
  const r = o;
  Array.isArray(r.doms) && r.doms[0] instanceof a && r.doms.forEach((t) => t.destroy());
  const e = o;
  e.dom && e.dom instanceof a && e.dom.destroy(), o.areaDom instanceof a && o.areaDom.destroy();
}
export {
  s as removeAllTag
};
