var i = Object.defineProperty;
var p = (e, S, r) => S in e ? i(e, S, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[S] = r;
var t = (e, S, r) => (p(e, typeof S != "symbol" ? S + "" : S, r), r);
import { CSS3DSprite as s } from "three/examples/jsm/renderers/CSS3DRenderer";
class D extends s {
  constructor() {
    super(...arguments);
    t(this, "isCSS3DSprite", !0);
  }
}
export {
  D as ICSS3DSprite
};
