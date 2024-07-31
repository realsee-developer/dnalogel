var y = Object.defineProperty, b = Object.defineProperties;
var u = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var a = (e, i, t) => i in e ? y(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t, n = (e, i) => {
  for (var t in i || (i = {}))
    w.call(i, t) && a(e, t, i[t]);
  if (m)
    for (var t of m(i))
      P.call(i, t) && a(e, t, i[t]);
  return e;
}, g = (e, i) => b(e, u(i));
var M = (e, i, t) => (a(e, typeof i != "symbol" ? i + "" : i, t), t);
var d = (e, i, t) => new Promise((o, h) => {
  var r = (s) => {
    try {
      l(t.next(s));
    } catch (c) {
      h(c);
    }
  }, p = (s) => {
    try {
      l(t.throw(s));
    } catch (c) {
      h(c);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(r, p);
  l((t = t.apply(e, i)).next());
});
import { PointMesh as f } from "../../Meshes/Point.js";
import { BaseObject as x } from "../Base/index.js";
import { hotkeys as j } from "../../../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { PointEditor as v } from "./Editor.js";
import { vector3ToArray as z } from "../../../shared-utils/three/vector3ToArray.js";
class H extends x {
  constructor(t, o) {
    super(t, o);
    M(this, "type", "Point");
    M(this, "pointMesh");
    this.editor = new v(this), t && (this.pointMesh = new f(n(n({}, t.style), t)), this.add(this.pointMesh)), j("esc", () => {
      this.stopCreating();
    });
  }
  get data() {
    return g(n({}, this.baseData), {
      point: z(this.applyObjectMatrixWorld(this.pointMesh.position)),
      style: {
        color: this.pointMesh.color.getHex(),
        size: this.pointMesh.size
      }
    });
  }
  highlight() {
    var t;
    (t = this.pointMesh) == null || t.highlight();
  }
  unhighlight() {
    var t;
    (t = this.pointMesh) == null || t.unhighlight();
  }
  /**
   * @description: 设置颜色
   * @param {Color} style.color
   * @param {number} style.size
   */
  setStyle(t) {
    this.pointMesh.setStyle(t);
  }
  /**
   * @description: 创建点
   */
  create(t) {
    return d(this, null, function* () {
      this.pointMesh && this.remove(this.pointMesh), this.add(this.pointMesh = new f(t)), yield C(this.pointMesh, this.pointSelector), this.editor.enable();
    });
  }
}
function C(e, i) {
  return new Promise((t, o) => {
    i.enable();
    const h = (r) => {
      const { point: p } = r;
      e.position.copy(p), t(), i.disable();
    };
    i.on("disable", () => {
      i.off("select", h), o(new Error("Cancelled"));
    }), i.once("select", h);
  });
}
export {
  H as Point
};
