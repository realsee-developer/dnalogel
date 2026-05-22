var u = Object.defineProperty, v = Object.defineProperties;
var m = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, _ = Object.prototype.propertyIsEnumerable;
var r = (t, e, i) => e in t ? u(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, f = (t, e) => {
  for (var i in e || (e = {}))
    p.call(e, i) && r(t, i, e[i]);
  if (h)
    for (var i of h(e))
      _.call(e, i) && r(t, i, e[i]);
  return t;
}, c = (t, e) => v(t, m(e));
var o = (t, e, i) => (r(t, typeof e != "symbol" ? e + "" : e, i), i);
import { Cursor as d } from "./Cursor.js";
import { Object3DHelperController as g } from "../../../Object3DHelperPlugin/Controller.js";
import { FiveDomEvents as a } from "../../../shared-utils/five/FiveDomEvents.js";
import { PointSelector as D } from "../../../shared-utils/three/PointSelector/index.js";
class b {
  constructor() {
    o(this, "five");
    o(this, "config");
    o(this, "_cursor");
    o(this, "_pointSelector");
    o(this, "_fiveDomEvents");
    o(this, "_object3DHelper");
    o(this, "inited", !1);
    o(this, "init", (e, i) => {
      this.inited = !0, this.five = e, this.config = i, this._cursor = void 0, this._pointSelector = void 0, this._fiveDomEvents = void 0, this._object3DHelper = void 0;
    });
  }
  get cursor() {
    if (!this.inited)
      throw new Error("Global not inited");
    return this._cursor ? this._cursor : (this._cursor = new d(this.five.getElement()), this._cursor);
  }
  get pointSelector() {
    var n, s, l;
    if (!this.inited)
      throw new Error("Global not inited");
    if (this._pointSelector)
      return this._pointSelector;
    const e = (n = this.config) == null ? void 0 : n.magnifier;
    let i = e === null || e === !1 ? { magnifier: null } : { magnifierParams: e };
    return (s = this.config) != null && s.hideCursorCircle && (i = c(f({}, i), { pointHelper: null })), this._pointSelector = new D(this.five, {
      mode: "cursor",
      helper: i,
      hitFilter: (l = this.config) == null ? void 0 : l.hitFilter
    }), this._pointSelector;
  }
  get fiveDomEvents() {
    if (!this.inited)
      throw new Error("Global not inited");
    return this._fiveDomEvents ? this._fiveDomEvents : (this._fiveDomEvents = new a(this.five, { noEmitWhenNotInScene: !0 }), this._fiveDomEvents);
  }
  get object3DHelper() {
    if (!this.inited)
      throw new Error("Global not inited");
    return this._object3DHelper ? this._object3DHelper : (this._object3DHelper = new g(this.five), this._object3DHelper);
  }
}
const w = new b();
window.globalModules = w;
export {
  w as globalModules
};
