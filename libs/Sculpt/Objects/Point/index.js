var g = Object.defineProperty, u = Object.defineProperties;
var y = Object.getOwnPropertyDescriptors;
var d = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var p = (e, i, t) => i in e ? g(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t, a = (e, i) => {
  for (var t in i || (i = {}))
    P.call(i, t) && p(e, t, i[t]);
  if (d)
    for (var t of d(i))
      w.call(i, t) && p(e, t, i[t]);
  return e;
}, m = (e, i) => u(e, y(i));
var c = (e, i, t) => (p(e, typeof i != "symbol" ? i + "" : i, t), t);
var M = (e, i, t) => new Promise((h, n) => {
  var r = (s) => {
    try {
      o(t.next(s));
    } catch (l) {
      n(l);
    }
  }, f = (s) => {
    try {
      o(t.throw(s));
    } catch (l) {
      n(l);
    }
  }, o = (s) => s.done ? h(s.value) : Promise.resolve(s.value).then(r, f);
  o((t = t.apply(e, i)).next());
});
import { PointMesh as b } from "../../Meshes/Point.js";
import { BaseObject as v } from "../Base/index.js";
import { PointEditor as x } from "./Editor.js";
import { vector3ToArray as E } from "../../../shared-utils/three/vector3ToArray.js";
class C extends v {
  constructor(t, h) {
    super(t, h);
    c(this, "type", "Point");
    c(this, "pointMesh");
    this.editor = new x(this), t && (this.pointMesh = new b(a(a({}, t.style), t)), this.add(this.pointMesh));
  }
  get data() {
    return m(a({}, this.baseData), {
      point: E(this.applyObjectMatrixWorld(this.pointMesh.position)),
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
    return M(this, null, function* () {
      this.pointMesh && this.remove(this.pointMesh), this.add(this.pointMesh = new b(t)), yield U(this.pointMesh, this.pointSelector);
    });
  }
}
function U(e, i) {
  return new Promise((t, h) => {
    i.enable(), e.visible = !1;
    const n = (s) => {
      s && (e.visible = !0, e.position.copy(s.point));
    }, r = (s) => {
      s && (e.position.copy(s.point), f());
    }, f = () => {
      i.off("select", r), i.off("disable", o), i.off("intersectionUpdate", n), i.disable(), t();
    }, o = () => {
      i.off("select", r), i.off("disable", o), i.off("intersectionUpdate", n), e.removeFromParent(), h(new Error("Cancelled"));
    };
    i.on("intersectionUpdate", n), i.on("disable", o), i.once("select", r);
  });
}
export {
  C as Point,
  U as createPoint
};
