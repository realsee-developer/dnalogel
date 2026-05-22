var s = Object.defineProperty;
var l = (o, t, e) => t in o ? s(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var r = (o, t, e) => (l(o, typeof t != "symbol" ? t + "" : t, e), e);
import { LineMaterial as c } from "@realsee/five/line";
import { notNil as d } from "../../isNil.js";
class S extends c {
  constructor(e) {
    var h;
    super(e);
    r(this, "_three_color");
    r(this, "_dashed");
    d(e == null ? void 0 : e.color) && (this.three_color = (h = e == null ? void 0 : e.color) != null ? h : 16777215), Object.keys(e).forEach((i) => {
      ["color", "dashed", "dashScale", "dashSize", "gapSize", "resolution"].includes(i) || i in this && (this[i] = e[i]);
    }), Object.defineProperties(this, {
      dashed: {
        get() {
          return this._dashed;
        },
        set(i) {
          this._dashed = i, i ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH, this.needsUpdate = !0;
        }
      }
    });
  }
  get three_color() {
    return this._three_color;
  }
  set three_color(e) {
    this._three_color = e, this.color = e;
  }
  toJSON() {
    return {
      type: "FiveLineMaterial",
      color: this.color
    };
  }
}
export {
  S as LineMaterial
};
