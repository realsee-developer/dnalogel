var i = Object.defineProperty;
var p = (r, S, t) => S in r ? i(r, S, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[S] = t;
var e = (r, S, t) => (p(r, typeof S != "symbol" ? S + "" : S, t), t);
import { CSS3DSprite as o } from "../../../shared-utils/three/CSS3DRenderer/index.js";
import "three";
class D extends o {
  constructor() {
    super(...arguments);
    e(this, "isCSS3DSprite", !0);
  }
}
export {
  D as ICSS3DSprite
};
