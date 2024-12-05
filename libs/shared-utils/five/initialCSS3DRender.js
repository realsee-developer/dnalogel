import { ICSS3DRenderer as m } from "../CSS3DRender/CSS3DRenderer.js";
const d = "CSS3DRenderer-dshauidwahdslkadnmsla";
function a(n) {
  var t;
  const r = (t = n.getElement()) == null ? void 0 : t.parentElement;
  if (!r) {
    console.error("initialCSS3DRender2: five element is not exist");
    return;
  }
  if (document.getElementById(d))
    return;
  const e = new m();
  e.domElementWrapper.id = d, e.domElementWrapper.style.zIndex = "1", e.appendToElement(r), e.renderEveryFrame(n.scene, n.camera);
}
export {
  a as initialCSS3DRender
};
