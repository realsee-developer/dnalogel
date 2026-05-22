import { toArray as S } from "../../shared-utils/util.js";
function o(r) {
  const t = [];
  return S(r).forEach((e) => {
    e.traverse((s) => {
      (s.isCSS3DObjectPlus || s.isCSS3DObject || s.isCSS3DSprite) && t.push(s);
    });
  }), t;
}
export {
  o as default
};
