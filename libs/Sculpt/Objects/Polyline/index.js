var M = Object.defineProperty, C = Object.defineProperties;
var L = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var d = (i, t, e) => t in i ? M(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, p = (i, t) => {
  for (var e in t || (t = {}))
    v.call(t, e) && d(i, e, t[e]);
  if (m)
    for (var e of m(t))
      b.call(t, e) && d(i, e, t[e]);
  return i;
}, g = (i, t) => C(i, L(t));
var y = (i, t, e) => (d(i, typeof t != "symbol" ? t + "" : t, e), e);
var u = (i, t, e) => new Promise((n, l) => {
  var a = (o) => {
    try {
      h(e.next(o));
    } catch (s) {
      l(s);
    }
  }, r = (o) => {
    try {
      h(e.throw(o));
    } catch (s) {
      l(s);
    }
  }, h = (o) => o.done ? n(o.value) : Promise.resolve(o.value).then(a, r);
  h((e = e.apply(i, t)).next());
});
import { hotkeys as W } from "../../../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { PolylineWithDotsMesh as P, PolylineMesh as x } from "../../Meshes/Polyline.js";
import { BaseObject as E } from "../Base/index.js";
import * as j from "three";
import { PolylineEditor as D } from "./Editor.js";
import { vector3ToArray as H } from "../../../shared-utils/three/vector3ToArray.js";
class q extends E {
  constructor(e, n) {
    super(e, n);
    y(this, "type", "Polyline");
    y(this, "polyLineMesh");
    e && (this.polyLineMesh = new P(p(p({}, e.style), e)), this.add(this.polyLineMesh)), this.editor = new D(this), W("esc", () => {
      this.stopCreating();
    });
  }
  get data() {
    return g(p({}, this.baseData), {
      points: H(this.applyObjectMatrixWorld(this.polyLineMesh.points)),
      style: {
        lineColor: new j.Color(this.polyLineMesh.lineColor).getHex(),
        lineWidth: this.polyLineMesh.lineWidth,
        dashed: this.polyLineMesh.dashed
      }
    });
  }
  highlight() {
    var e;
    (e = this.polyLineMesh) == null || e.highlight();
  }
  unhighlight() {
    var e;
    (e = this.polyLineMesh) == null || e.unhighlight();
  }
  create(e) {
    return u(this, null, function* () {
      this.removeChildren();
      const n = new P(e);
      this.polyLineMesh = n, this.add(this.polyLineMesh), yield O(n, this.pointSelector), this.editor.enable();
    });
  }
}
function O(i, t) {
  const e = i.parent;
  if (!e)
    return;
  const n = new x({ dashed: !0, lineColor: i.lineColor, lineWidth: i.lineWidth });
  return e.add(n), t.enable(), new Promise((l, a) => {
    const r = [], h = (s) => {
      const c = s.point;
      r.push(c.clone()), i.setPoints(r);
    }, o = (s) => {
      var f;
      if (!((f = i.points) != null && f.length) || !s)
        return;
      const c = r.at(-1).clone(), w = s.point;
      n.setPoints([c, w]);
    };
    t.on("select", h), t.on("intersectionUpdate", o), t.on("disable", () => {
      if (t.off("select", h), t.off("intersectionUpdate", o), e.remove(n), r.length < 2)
        return e.remove(i), a(new Error("Cancelled"));
      l();
    });
  });
}
export {
  q as Polyline
};
