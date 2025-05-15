var b = Object.defineProperty;
var d = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var c = (o, t, e) => t in o ? b(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, a = (o, t) => {
  for (var e in t || (t = {}))
    C.call(t, e) && c(o, e, t[e]);
  if (d)
    for (var e of d(t))
      w.call(t, e) && c(o, e, t[e]);
  return o;
};
var s = (o, t, e) => (c(o, typeof t != "symbol" ? t + "" : t, e), e);
import { IObject3D as V } from "../../shared-utils/three/IObject3D.js";
import { anyPositionToVector3 as f } from "../../shared-utils/positionToVector3.js";
import * as i from "three";
import { intersectWithoutLine as I } from "../../shared-utils/three/core/Raycaster.js";
import { ColoredMesh as A } from "../utils/three/ColoredMesh.js";
import { PrismGeometry as S } from "../../shared-utils/three/core/PrismGeometry.js";
import { triangleArea as v, triangleCenter as E } from "../../shared-utils/three/geometryUtil.js";
import { LineMesh as W } from "./Line.js";
import { LineGeometry as N } from "../../shared-utils/three/core/LineGeometry.js";
class H extends V {
  constructor(e) {
    super();
    s(this, "name", "PrismMesh");
    s(this, "_geometryInfoCache");
    s(this, "geometryInfoNeedUpdate", !0);
    s(this, "edgeMesh", new W());
    s(this, "prismMesh", new A());
    s(this, "paramStyle");
    this.prismMesh.name = "PrismMesh", this.prismMesh.geometry = new S(), this.edgeMesh.name = "EdgeMesh", this.addIfNotExists(this.prismMesh, this.edgeMesh), e && this.setPoints(e), this.setStyle(e);
  }
  get topPosition() {
    return new i.Vector3().fromArray(this.prismMesh.geometry.topPosition);
  }
  get bottomPositions() {
    return this.prismMesh.geometry.bottomPositions.map((e) => new i.Vector3().fromArray(e));
  }
  get topPositions() {
    const e = this.bottomPositions[0].clone().sub(this.topPosition);
    return this.bottomPositions.map((r) => r.clone().sub(e));
  }
  get style() {
    return {
      color: this.color,
      lineColor: this.lineColor,
      lineWidth: this.lineWidth,
      opacity: this.opacity,
      occlusionVisibility: this.occlusionVisibility,
      occlusionMode: this.occlusionMode
    };
  }
  get opacity() {
    return this.prismMesh.opacity;
  }
  get occlusionVisibility() {
    return this.prismMesh.occlusionVisibility;
  }
  get occlusionMode() {
    return this.prismMesh.occlusionMode;
  }
  /**
   * @deprecated notice: please use specified center instead, such as `localCenter` or `worldCenter`
   */
  get center() {
    return this.localCenter.clone();
  }
  get localCenter() {
    var e;
    return (e = this.geometryInfo.center.clone()) != null ? e : new i.Vector3(9999, 9999, 9999);
  }
  get geometryInfo() {
    if (this.geometryInfoNeedUpdate) {
      this.geometryInfoNeedUpdate = !1;
      const e = this.prismMesh.geometry.bottomPositions, r = this.prismMesh.geometry.topPosition;
      if (!e || e.length < 3 || !r) {
        this._geometryInfoCache = void 0;
        return;
      }
      const n = e.map((l, h) => h >= e.length - 2 ? null : [
        new i.Vector3().fromArray(e[0]),
        new i.Vector3().fromArray(e[h + 1]),
        new i.Vector3().fromArray(e[h + 2])
      ]).filter(Boolean);
      if (n.length === 0) {
        this._geometryInfoCache = void 0;
        return;
      }
      let g = 0, m = new i.Vector3();
      for (const [l, h, p] of n) {
        const y = v(l, h, p), P = E(l, h, p, y);
        g += y, m.add(P);
      }
      m = m.divideScalar(g);
      const u = new i.Vector3().fromArray(r).sub(new i.Vector3().fromArray(e[0])), M = m.clone().add(u.divideScalar(2));
      this._geometryInfoCache = { center: M };
    }
    return this._geometryInfoCache;
  }
  get worldCenter() {
    return this.updateMatrixWorld(), this.localToWorld(this.localCenter);
  }
  get color() {
    return this.prismMesh.color;
  }
  get lineWidth() {
    return this.edgeMesh.style.lineWidth;
  }
  get lineColor() {
    return this.edgeMesh.color;
  }
  setStyle(e = {}) {
    this.paramStyle = a(a({}, this.paramStyle), e), this.prismMesh.setStyle(this.paramStyle), this.edgeMesh.setStyle(this.paramStyle);
  }
  setPoints(e) {
    var r;
    this.prismMesh.geometry.setPosition({
      bottomPositions: (r = e.points) == null ? void 0 : r.map(f).map((n) => n.toArray()),
      topPosition: e.heightPoint ? f(e.heightPoint).toArray() : void 0
    }), this.edgeMesh.geometry = new N().fromEdgesGeometry(new i.EdgesGeometry(this.prismMesh.geometry)), this.geometryInfoNeedUpdate = !0;
  }
  highlight() {
    this.prismMesh.highlight();
  }
  unhighlight() {
    this.prismMesh.unhighlight();
  }
  raycast(e, r) {
    return this.children.forEach((n) => I(n, e, r, !0)), !1;
  }
}
export {
  H as PrismMesh
};
