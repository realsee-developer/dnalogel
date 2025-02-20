var i = Object.defineProperty;
var p = (t, S, e) => S in t ? i(t, S, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[S] = e;
var r = (t, S, e) => (p(t, typeof S != "symbol" ? S + "" : S, e), e);
import { CSS3DSprite as s } from "../../../shared-utils/three/CSS3DRenderer/index.js";
import "three";
class m extends s {
  constructor() {
    super(...arguments);
    r(this, "isCSS3DSprite", !0);
    r(this, "isCSS3DObject", !0);
  }
}
export {
  m as ICSS3DSprite
};
