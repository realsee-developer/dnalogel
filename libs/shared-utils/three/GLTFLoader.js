import { GLTFLoader as i } from "@realsee/five/gltf-loader";
const a = new i();
function f(n) {
  return new Promise((r, e) => {
    function t(o) {
      r(o);
    }
    function d(o) {
      e(o);
    }
    a.load(n, t, void 0, d);
  });
}
export {
  f as loadGLTF
};
