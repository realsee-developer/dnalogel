var i = Object.defineProperty;
var o = (r, e, s) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[e] = s;
var t = (r, e, s) => (o(r, typeof e != "symbol" ? e + "" : e, s), s);
import { Subscribe as c } from "../Subscribe.js";
class u extends c {
  constructor(s) {
    super();
    t(this, "five");
    this.five = s;
  }
}
export {
  u as BaseUtil
};
