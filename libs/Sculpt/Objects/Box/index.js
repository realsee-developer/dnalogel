var B = Object.defineProperty, E = Object.defineProperties;
var C = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
var p = (o, e, t) => e in o ? B(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, c = (o, e) => {
  for (var t in e || (e = {}))
    H.call(e, t) && p(o, t, e[t]);
  if (y)
    for (var t of y(e))
      O.call(e, t) && p(o, t, e[t]);
  return o;
}, M = (o, e) => E(o, C(e));
var d = (o, e, t) => (p(o, typeof e != "symbol" ? e + "" : e, t), t);
var b = (o, e, t) => new Promise((r, i) => {
  var h = (s) => {
    try {
      n(t.next(s));
    } catch (a) {
      i(a);
    }
  }, m = (s) => {
    try {
      n(t.throw(s));
    } catch (a) {
      i(a);
    }
  }, n = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(h, m);
  n((t = t.apply(o, e)).next());
});
import { hotkeys as L } from "../../../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { BaseObject as W } from "../Base/index.js";
import * as j from "three";
import { BoxEditor as N } from "./Editor.js";
import { BoxMesh as w } from "../../Meshes/Box.js";
import { createRectangle as R } from "../Rectangle/index.js";
import { LineMesh as T } from "../../Meshes/Line.js";
import { getNormal as U } from "../../../shared-utils/three/getNormal.js";
import { rayOnLine as k } from "../../utils/three/rayOnLine.js";
import { Sculpt as z } from "../../index.js";
import { vector3ToArray as v } from "../../../shared-utils/three/vector3ToArray.js";
class Z extends W {
  constructor(t, r) {
    super(t, r);
    d(this, "type", "Box");
    d(this, "boxMesh");
    this.editor = new N(this), t && (this.boxMesh = new w(c(c({}, t.style), t)), this.add(this.boxMesh)), L("esc", () => {
      this.stopCreating();
    });
  }
  get data() {
    return M(c({}, this.baseData), {
      points: v(this.applyObjectMatrixWorld(this.boxMesh.bottomPlane.points)),
      heightPoint: v(this.applyObjectMatrixWorld(this.boxMesh.heightPoint)),
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
    return b(this, null, function* () {
      this.removeChildren(), this.boxMesh = new w(t), this.add(this.boxMesh), yield A(this.boxMesh, this.pointSelector), this.editor.enable();
    });
  }
}
function A(o, e) {
  return b(this, null, function* () {
    return yield R(o.bottomPlane, e), new Promise((t, r) => {
      const i = o.parent;
      if (!i) {
        r(new Error("No container"));
        return;
      }
      const h = new T(), m = U(o.bottomPlane.points).normalize(), n = o.bottomPlane.builtPoints.at(-1), s = n.clone().add(m.clone().multiplyScalar(10)), a = n.clone().sub(m.clone().multiplyScalar(10));
      h.setPoints([s, a]), i.add(h), e.enable();
      const f = (l) => {
        g(), t();
      }, x = (l) => {
        if (!(l != null && l.raycaster))
          return;
        const u = k({
          cameraPosition: z.modules.five.camera.position,
          raycaster: l.raycaster,
          line: new j.Line3(s, a)
        });
        u && o.setPoints({ heightPoint: u });
      }, g = () => {
        e.off("select", f), e.off("intersectionUpdate", x), e.off("disable", P), e.disable(), i == null || i.remove(h);
      }, P = () => {
        g(), i == null || i.remove(o), r(new Error("Cancelled"));
      };
      e.on("select", f), e.on("intersectionUpdate", x), e.on("disable", P);
    });
  });
}
export {
  Z as Box
};
