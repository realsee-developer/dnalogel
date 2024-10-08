var E = Object.defineProperty, v = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var O = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var b = (o, e, t) => e in o ? E(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    O.call(e, t) && b(o, t, e[t]);
  if (u)
    for (var t of u(e))
      C.call(e, t) && b(o, t, e[t]);
  return o;
}, M = (o, e) => v(o, H(e));
var d = (o, e, t) => (b(o, typeof e != "symbol" ? e + "" : e, t), t);
var f = (o, e, t) => new Promise((n, i) => {
  var a = (s) => {
    try {
      r(t.next(s));
    } catch (h) {
      i(h);
    }
  }, c = (s) => {
    try {
      r(t.throw(s));
    } catch (h) {
      i(h);
    }
  }, r = (s) => s.done ? n(s.value) : Promise.resolve(s.value).then(a, c);
  r((t = t.apply(o, e)).next());
});
import { BaseObject as L } from "../Base/index.js";
import * as W from "three";
import { BoxEditor as j } from "./Editor.js";
import { BoxMesh as w } from "../../Meshes/Box.js";
import { createRectangle as N } from "../Rectangle/index.js";
import { LineMesh as R } from "../../Meshes/Line.js";
import { getNormal as T } from "../../../shared-utils/three/getNormal.js";
import { rayOnLine as U } from "../../utils/three/rayOnLine.js";
import { vector3ToArray as B } from "../../../shared-utils/three/vector3ToArray.js";
class Q extends L {
  constructor(t, n) {
    super(t, n);
    d(this, "type", "Box");
    d(this, "boxMesh");
    this.editor = new j(this), t && (this.boxMesh = new w(m(m({}, t.style), t)), this.add(this.boxMesh));
  }
  get data() {
    return M(m({}, this.baseData), {
      points: B(this.applyObjectMatrixWorld(this.boxMesh.bottomPlane.points)),
      heightPoint: B(this.applyObjectMatrixWorld(this.boxMesh.heightPoint)),
      style: {
        color: this.boxMesh.color.getHex(),
        lineWidth: this.boxMesh.lineWidth,
        lineColor: this.boxMesh.lineColor.getHex()
      }
    });
  }
  highlight() {
    var t;
    (t = this.boxMesh) == null || t.highlight();
  }
  unhighlight() {
    var t;
    (t = this.boxMesh) == null || t.unhighlight();
  }
  create(t) {
    return f(this, null, function* () {
      this.removeChildren(), this.boxMesh = new w(t), this.add(this.boxMesh), yield z(this.boxMesh, this.pointSelector), this.editor.enable();
    });
  }
}
function z(o, e) {
  return f(this, null, function* () {
    return yield N(o.bottomPlane, e), new Promise((t, n) => {
      const i = o.parent;
      if (!i) {
        n(new Error("No container"));
        return;
      }
      const a = new R(), c = T(o.bottomPlane.points).normalize(), r = o.bottomPlane.builtPoints.at(-1), s = r.clone().add(c.clone().multiplyScalar(10)), h = r.clone().sub(c.clone().multiplyScalar(10));
      a.setPoints([s, h]), i.add(a), e.enable();
      const p = (l) => {
        g(), t();
      }, x = (l) => {
        if (!(l != null && l.raycaster))
          return;
        const y = U({
          raycaster: l.raycaster,
          line: new W.Line3(s, h)
        });
        y && o.setPoints({ heightPoint: y });
      }, g = () => {
        e.off("select", p), e.off("intersectionUpdate", x), e.off("disable", P), e.disable(), i == null || i.remove(a);
      }, P = () => {
        g(), i == null || i.remove(o), n(new Error("Cancelled"));
      };
      e.on("select", p), e.on("intersectionUpdate", x), e.on("disable", P);
    });
  });
}
export {
  Q as Box,
  z as createBox
};
