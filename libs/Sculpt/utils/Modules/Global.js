var r = Object.defineProperty;
var n = (i, e, o) => e in i ? r(i, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[e] = o;
var t = (i, e, o) => (n(i, typeof e != "symbol" ? e + "" : e, o), o);
import { Cursor as s } from "./Cursor.js";
import { Object3DHelperController as l } from "../../../Object3DHelperPlugin/Controller.js";
import { FiveDomEvents as h } from "../../../shared-utils/five/FiveDomEvents.js";
import { PointSelector as c } from "../../../shared-utils/three/PointSelector/index.js";
class f {
  constructor() {
    t(this, "five");
    t(this, "_cursor");
    t(this, "_pointSelector");
    t(this, "_fiveDomEvents");
    t(this, "_object3DHelper");
    t(this, "inited", !1);
    t(this, "init", (e) => {
      this.inited = !0, this.five = e, this._cursor = void 0, this._pointSelector = void 0, this._fiveDomEvents = void 0, this._object3DHelper = void 0;
    });
  }
  get cursor() {
    if (!this.inited)
      throw new Error("Global not inited");
    return this._cursor ? this._cursor : (this._cursor = new s(this.five.getElement()), this._cursor);
  }
  get pointSelector() {
    if (!this.inited)
      throw new Error("Global not inited");
    return this._pointSelector ? this._pointSelector : (this._pointSelector = new c(this.five, { mode: "cursor" }), this._pointSelector);
  }
  get fiveDomEvents() {
    if (!this.inited)
      throw new Error("Global not inited");
    return this._fiveDomEvents ? this._fiveDomEvents : (this._fiveDomEvents = new h(this.five, { noEmitWhenNotInScene: !0 }), this._fiveDomEvents);
  }
  get object3DHelper() {
    if (!this.inited)
      throw new Error("Global not inited");
    return this._object3DHelper ? this._object3DHelper : (this._object3DHelper = new l(this.five), this._object3DHelper);
  }
}
const v = new f();
window.globalModules = v;
export {
  v as globalModules
};
