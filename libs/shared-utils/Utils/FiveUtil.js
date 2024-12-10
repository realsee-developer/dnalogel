var n = Object.defineProperty;
var m = (r, e, o) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o;
var t = (r, e, o) => (m(r, typeof e != "symbol" ? e + "" : e, o), o);
import { BaseUtil as v } from "./BaseUtil.js";
import { WorkUtil as l } from "./WorkUtil.js";
import { getFiveModel as a } from "../five/getFiveModel.js";
class c extends v {
  constructor(o) {
    super(o);
    t(this, "workUtil", new l(this.five));
  }
  get version() {
    return this.five.constructor.version;
  }
  get majorVersion() {
    return Number(this.version.split(".")[0]);
  }
  get model() {
    return a(this.five);
  }
  moveToPano(o, i) {
    const s = this.majorVersion === 5 ? o : {
      workCode: this.workUtil.workCode,
      panoIndex: o
    };
    return this.five.moveToPano(s, i);
  }
}
export {
  c as FiveUtil
};
