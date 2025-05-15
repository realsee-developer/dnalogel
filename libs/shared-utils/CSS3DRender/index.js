import { ICSS3DRenderer as p } from "./CSS3DRenderer.js";
import { waitFiveModelLoaded as a } from "../five/fiveModelLoad.js";
import m from "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
let r = [null, null, () => null];
function E(e) {
  var s;
  if (r) {
    if (r[0] === e)
      return r[2];
    (s = r[1]) == null || s.dispose();
  }
  const n = new p("front");
  n.domElementWrapper.style.zIndex = "1";
  const t = new p("behind");
  a(e).then(() => {
    var d;
    const l = (d = e.getElement()) == null ? void 0 : d.parentElement, i = m(e);
    if (!l)
      return console.error("initialCSS3DRender: five element is not exist"), () => null;
    if (n.appendToElement(l), n.renderEveryFrame(e.scene, e.camera), !i)
      return console.error("initialCSS3DRender: behindWrapper is not exist"), () => null;
    t.appendToElement(i), t.renderEveryFrame(e.scene, e.camera);
  });
  const o = () => {
    n.dispose(), t.dispose();
  };
  return r = [e, n, o], o;
}
export {
  E as initialCSS3DRender
};
