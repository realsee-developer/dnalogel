var v = Object.defineProperty, E = Object.defineProperties;
var L = Object.getOwnPropertyDescriptors;
var M = Object.getOwnPropertySymbols;
var O = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var p = (e, i, t) => i in e ? v(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t, c = (e, i) => {
  for (var t in i || (i = {}))
    O.call(i, t) && p(e, t, i[t]);
  if (M)
    for (var t of M(i))
      C.call(i, t) && p(e, t, i[t]);
  return e;
}, w = (e, i) => E(e, L(i));
var d = (e, i, t) => (p(e, typeof i != "symbol" ? i + "" : i, t), t);
var f = (e, i, t) => new Promise((s, n) => {
  var m = (o) => {
    try {
      r(t.next(o));
    } catch (a) {
      n(a);
    }
  }, l = (o) => {
    try {
      r(t.throw(o));
    } catch (a) {
      n(a);
    }
  }, r = (o) => o.done ? s(o.value) : Promise.resolve(o.value).then(m, l);
  r((t = t.apply(e, i)).next());
});
import { BaseObject as W } from "../Base/index.js";
import * as j from "three";
import { createPolygon as T } from "../Polygon/index.js";
import { PrismMesh as x } from "../../Meshes/Prism.js";
import { Sculpt as U } from "../../index.js";
import { LineMesh as k } from "../../Meshes/Line.js";
import { PrismEditor as z } from "./Editor.js";
import { hotkeys as A } from "../../../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { rayOnLine as B } from "../../utils/three/rayOnLine.js";
import { getNormal as D } from "../../../shared-utils/three/getNormal.js";
import { vector3ToArray as H } from "../../../shared-utils/three/vector3ToArray.js";
class Z extends W {
  constructor(t, s) {
    super(t, s);
    d(this, "type", "Prism");
    d(this, "prismMesh");
    this.editor = new z(this), t && (this.prismMesh = new x(c(c({}, t.style), t)), this.add(this.prismMesh)), A("esc", () => {
      this.stopCreating();
    });
  }
  get data() {
    return w(c({}, this.baseData), {
      points: H(this.applyObjectMatrixWorld(this.prismMesh.bottomPolygon.points)),
      heightPoint: H(this.applyObjectMatrixWorld(this.prismMesh.heightPoint)),
      style: {
        color: this.prismMesh.color.getHex(),
        lineWidth: this.prismMesh.lineWidth,
        lineColor: this.prismMesh.lineColor.getHex()
      }
    });
  }
  highlight() {
    var t;
    (t = this.prismMesh) == null || t.highlight();
  }
  unhighlight() {
    var t;
    (t = this.prismMesh) == null || t.unhighlight();
  }
  create(t) {
    return f(this, null, function* () {
      this.prismMesh = new x(t), this.add(this.prismMesh), yield N(this.prismMesh, this.pointSelector), this.editor.enable();
    });
  }
}
function N(e, i) {
  return f(this, null, function* () {
    const t = e.parent;
    yield T(e.bottomPolygon, i);
    const s = new k();
    s.name = "LineHelper", t.add(s);
    const n = e.bottomPolygon.points.at(-1), m = D(e.bottomPolygon.points).normalize(), l = n.clone().add(m.clone().multiplyScalar(10)), r = n.clone().sub(m.clone().multiplyScalar(10));
    return s.setPoints([l, r]), i.enable(), new Promise((o, a) => {
      const g = (h) => {
        y(), o();
      }, P = (h) => {
        if (!(h != null && h.raycaster))
          return;
        const u = B({
          cameraPosition: U.modules.five.camera.position,
          raycaster: h.raycaster,
          line: new j.Line3(l, r)
        });
        u && e.setPoints({ heightPoint: u });
      }, y = () => {
        i.off("select", g), i.off("intersectionUpdate", P), i.off("disable", b), t.remove(s), i.disable();
      }, b = () => {
        y(), t.remove(e), a(new Error("Cancelled"));
      };
      i.on("select", g), i.on("intersectionUpdate", P), i.on("disable", b);
    });
  });
}
export {
  Z as Prism
};
