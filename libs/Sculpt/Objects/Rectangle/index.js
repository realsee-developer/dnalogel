var D = Object.defineProperty, L = Object.defineProperties;
var N = Object.getOwnPropertyDescriptors;
var M = Object.getOwnPropertySymbols;
var O = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
var f = (n, t, e) => t in n ? D(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, d = (n, t) => {
  for (var e in t || (t = {}))
    O.call(t, e) && f(n, e, t[e]);
  if (M)
    for (var e of M(t))
      T.call(t, e) && f(n, e, t[e]);
  return n;
}, E = (n, t) => L(n, N(t));
var m = (n, t, e) => (f(n, typeof t != "symbol" ? t + "" : t, e), e);
var V = (n, t, e) => new Promise((l, r) => {
  var h = (o) => {
    try {
      s(e.next(o));
    } catch (a) {
      r(a);
    }
  }, g = (o) => {
    try {
      s(e.throw(o));
    } catch (a) {
      r(a);
    }
  }, s = (o) => o.done ? l(o.value) : Promise.resolve(o.value).then(h, g);
  s((e = e.apply(n, t)).next());
});
import { hotkeys as U } from "../../../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { BaseObject as k } from "../Base/index.js";
import * as c from "three";
import { PolylineWithDotsMesh as v } from "../../Meshes/Polyline.js";
import { RectangleEditor as z } from "./Editor.js";
import { RectangleWithEdgeMesh as R } from "../../Meshes/RectangleWithEdge.js";
class K extends k {
  constructor(e, l) {
    super(e, l);
    m(this, "type", "Rectangle");
    m(this, "rectangleMesh");
    this.config.canEdit && (this.editor = new z(this)), e && (this.rectangleMesh = new R(d(d({}, e.style), e)), this.add(this.rectangleMesh)), U("esc", () => {
      this.stopCreating();
    });
  }
  get data() {
    return E(d({}, this.baseData), {
      points: this.rectangleMesh.builtPoints.map((e) => e.toArray()),
      style: {
        color: this.rectangleMesh.color.getHex(),
        lineWidth: this.rectangleMesh.lineWidth,
        lineColor: this.rectangleMesh.lineColor.getHex()
      }
    });
  }
  highlight() {
    var e;
    (e = this.rectangleMesh) == null || e.highlight();
  }
  unhighlight() {
    var e;
    (e = this.rectangleMesh) == null || e.unhighlight();
  }
  create(e) {
    return V(this, null, function* () {
      this.removeChildren();
      const l = new R(e);
      this.rectangleMesh = l, this.add(this.rectangleMesh), yield B(this.rectangleMesh, this.pointSelector), this.editor.enable();
    });
  }
}
function B(n, t) {
  return new Promise((e, l) => {
    var P, C;
    const r = n.parent;
    if (!r) {
      l(new Error("No container"));
      return;
    }
    const h = new v({ dashed: !0, lineColor: (P = n.lineColor) != null ? P : n.color }), g = new v({ dashed: !1, lineColor: (C = n.lineColor) != null ? C : n.color });
    r.add(h, g), t.enable();
    const s = [], o = new c.Vector3(), a = new c.Plane(), p = (i) => {
      s.push(o.clone()), s.length !== 1 && (s.length === 2 ? g.setPoints([s[0], s[1]]) : s.length === 3 && (u(), e()));
    }, w = (i) => {
      if (i != null && i.raycaster) {
        if (s.length === 0)
          o.copy(i.point), a.setFromNormalAndCoplanarPoint(i.face.normal, i.point.clone());
        else if (s.length === 1)
          i.raycaster.ray.intersectPlane(a, o), h.setPoints([s.at(-1), o]);
        else if (s.length === 2) {
          const x = i.raycaster.ray.intersectPlane(a, new c.Vector3()), W = s[0].distanceTo(s[1]) / 2, b = new c.Vector3().lerpVectors(s[0], s[1], 0.5), A = new c.Vector3().subVectors(x, b).normalize(), H = new c.Vector3().addVectors(b, A.multiplyScalar(W));
          o.copy(H), r.remove(h), n.setPoints([...s, o]);
        }
      }
    }, u = () => {
      t.off("select", p), t.off("intersectionUpdate", w), t.off("disable", y), t.disable(), r == null || r.remove(h, g);
    }, y = () => {
      u(), r == null || r.remove(n), l(new Error("Cancelled"));
    };
    t.on("select", p), t.on("intersectionUpdate", w), t.on("disable", y);
  });
}
export {
  K as Rectangle,
  B as createRectangle
};
