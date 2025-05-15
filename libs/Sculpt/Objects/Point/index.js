var b = Object.defineProperty, g = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var d = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var c = (e, i, t) => i in e ? b(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t, f = (e, i) => {
  for (var t in i || (i = {}))
    P.call(i, t) && c(e, t, i[t]);
  if (d)
    for (var t of d(i))
      v.call(i, t) && c(e, t, i[t]);
  return e;
}, m = (e, i) => g(e, M(i));
var p = (e, i, t) => (c(e, typeof i != "symbol" ? i + "" : i, t), t);
var y = (e, i, t) => new Promise((h, n) => {
  var r = (s) => {
    try {
      o(t.next(s));
    } catch (a) {
      n(a);
    }
  }, l = (s) => {
    try {
      o(t.throw(s));
    } catch (a) {
      n(a);
    }
  }, o = (s) => s.done ? h(s.value) : Promise.resolve(s.value).then(r, l);
  o((t = t.apply(e, i)).next());
});
import { PointMesh as u } from "../../Meshes/Point.js";
import { BaseObject as w } from "../Base/index.js";
import { PointEditor as x } from "./Editor.js";
import { vector3ToArray as _ } from "../../../shared-utils/three/vector3ToArray.js";
import { anyPositionToVector3 as E } from "../../../shared-utils/positionToVector3.js";
class B extends w {
  constructor(t, h) {
    super(t, h);
    p(this, "type", "Point");
    p(this, "pointMesh");
    p(this, "_editor");
    t && (this.pointMesh = new u(f(f({}, t.style), t)), this.add(this.pointMesh));
  }
  get editor() {
    return this._editor || (this._editor = new x(this)), this._editor;
  }
  get data() {
    return m(f({}, this.baseData), {
      point: _(this.applyObjectMatrixWorld(this.pointMesh.position)),
      style: {
        color: this.pointMesh.color.getHex(),
        size: this.pointMesh.size
      }
    });
  }
  setData(t) {
    t.point && this.pointMesh.position.copy(E(t.point)), this.pointMesh.setStyle(t.style);
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
    return y(this, null, function* () {
      this.pointMesh && this.remove(this.pointMesh), this.add(this.pointMesh = new u(t)), yield U(this.pointMesh, this.pointSelector), this.config.defaultAction && this.editor.enable();
    });
  }
}
function U(e, i) {
  return new Promise((t, h) => {
    i.enable(), e.visible = !1;
    const n = (s) => {
      s && (e.visible = !0, e.position.copy(s.point));
    }, r = (s) => {
      s && (e.visible = !0, e.position.copy(s.point), l());
    }, l = () => {
      i.off("select", r), i.off("disable", o), i.off("intersectionUpdate", n), i.disable(), t();
    }, o = () => {
      i.off("select", r), i.off("disable", o), i.off("intersectionUpdate", n), e.removeFromParent(), h(new Error("Cancelled"));
    };
    i.on("intersectionUpdate", n), i.on("disable", o), i.once("select", r);
  });
}
export {
  B as Point,
  U as createPoint
};
