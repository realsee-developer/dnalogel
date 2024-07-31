import { toArray as c } from "../../shared-utils/util.js";
function a(e) {
  const t = [];
  return c(e).forEach((r) => {
    r.traverse((s) => {
      s.isCSS3DObjectPlus && t.push(s);
    });
  }), t;
}
export {
  a as default
};
