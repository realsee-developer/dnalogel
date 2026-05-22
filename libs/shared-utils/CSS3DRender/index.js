import { ICSS3DRenderer as f } from "./CSS3DRenderer.js";
import { waitFiveModelLoaded as c } from "../five/fiveModelLoad.js";
import p from "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
let o = [null, null, () => null], t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
function F(e, n) {
  if (!e)
    return !1;
  const r = n || e.uuid;
  return t.has(r) ? !1 : (t.set(r, e), !0);
}
function R(e) {
  if (!e)
    return !1;
  if (typeof e == "string")
    return t.delete(e);
  for (const [n, r] of t.entries())
    if (r === e)
      return t.delete(n);
  return !1;
}
function b(e, n) {
  if (!e)
    return !1;
  const r = n || e.uuid;
  return i.has(r) ? !1 : (i.set(r, e), !0);
}
function w(e) {
  if (!e)
    return !1;
  if (typeof e == "string")
    return i.delete(e);
  for (const [n, r] of i.entries())
    if (r === e)
      return i.delete(n);
  return !1;
}
function m() {
  t.clear();
}
function S() {
  i.clear();
}
function h() {
  m(), S();
}
function g(e) {
  var s;
  if (o) {
    if (o[0] === e)
      return o[2];
    (s = o[1]) == null || s.dispose();
  }
  const n = new f("front");
  n.domElementWrapper.style.zIndex = "1";
  const r = new f("behind");
  c(e).then(() => {
    var u;
    const d = (u = e.getElement()) == null ? void 0 : u.parentElement, a = p(e);
    if (!d)
      return console.error("initialCSS3DRender: five element is not exist"), () => null;
    if (n.appendToElement(d), n.renderCss3dObjectEveryFrame(t, e.camera), !a)
      return console.error("initialCSS3DRender: behindWrapper is not exist"), () => null;
    r.appendToElement(a), r.renderCss3dObjectEveryFrame(i, e.camera);
  });
  const l = () => {
    n.dispose(), r.dispose(), h();
  };
  return o = [e, n, l], l;
}
export {
  b as addBehindScene,
  F as addFrontScene,
  g as initialCSS3DRender,
  w as removeBehindScene,
  R as removeFrontScene
};
