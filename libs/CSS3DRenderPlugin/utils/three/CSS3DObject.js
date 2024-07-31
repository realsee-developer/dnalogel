var H = Object.defineProperty;
var C = (c, r, t) => r in c ? H(c, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[r] = t;
var i = (c, r, t) => (C(c, typeof r != "symbol" ? r + "" : r, t), t);
import { CSS3DObject as j } from "three/examples/jsm/renderers/CSS3DRenderer";
import { Vector3 as l } from "three";
import { even as w } from "../even.js";
import { Subscribe as A } from "../../../shared-utils/Subscribe.js";
import Q from "./OpacityMesh.js";
import { centerPoint as R } from "../../../shared-utils/three/centerPoint.js";
import { getObjectVisible as D } from "../../../shared-utils/three/getObjectVisible.js";
const O = 1, S = `CSS3DObjectPlus@${O}`, L = 216e-5, N = 3e-3;
class G extends j {
  constructor(t) {
    var f, b, g;
    const e = t.container, o = t.cornerPoints, n = (f = t.ratio) != null ? f : N, M = (b = t.dpr) != null ? b : 1, E = (g = t.pointerEvents) != null ? g : "auto", h = Math.max(L, n), d = o[0].distanceTo(o[1]), m = o[1].distanceTo(o[2]), a = w(d / n * M), p = w(m / n * M), y = R(...o);
    let u;
    if (h === n)
      e.style.width = `${a}px`, e.style.height = `${p}px`, u = e;
    else {
      const s = document.createElement("div");
      s.style.width = `${a}px`, s.style.height = `${p}px`, s.style.pointerEvents = "none";
      const V = n / h;
      e.style.position = "absolute", e.style.left = "0", e.style.top = "0", e.style.width = `${V * a}px`, e.style.height = `${V * p}px`, s.appendChild(e), u = s;
    }
    super(u);
    i(this, "version", O);
    i(this, "isCSS3DObjectPlus", !0);
    i(this, "name", S);
    i(this, "container");
    i(this, "width");
    i(this, "height");
    i(this, "domWidthPx");
    i(this, "domHeightPx");
    i(this, "cornerPoints");
    i(this, "centerPosition");
    i(this, "ratio");
    i(this, "mode", "front");
    i(this, "hooks", new A());
    i(this, "opacityMesh");
    i(this, "selfVisible", !0);
    i(this, "setVisible", (t) => {
      this.selfVisible = t, this.visible = D(this.parent) && this.selfVisible, this.opacityMesh && (this.opacityMesh.visible = this.visible);
    });
    i(this, "updateVisible", () => {
      this.setVisible(this.selfVisible);
    });
    /**
     * @description: 生成透明Mesh
     */
    i(this, "createOpacityMesh", (t) => {
      const { domWidthPx: e, domHeightPx: o } = t, n = new Q(e, o);
      return n.position.copy(t.position), n.rotation.copy(t.rotation), n.scale.copy(t.scale), n;
    });
    if (e.style.pointerEvents = E, Object.assign(e.style, t.style), this.scale.set(h, h, h), this.cornerPoints = o, this.ratio = n, this.container = e, t.mode && (this.mode = t.mode), h === n)
      this.width = d, this.height = m, this.domWidthPx = a, this.domHeightPx = p, this.centerPosition = y;
    else {
      const s = n / h;
      this.width = s * d, this.height = s * m, this.domWidthPx = s * a, this.domHeightPx = s * p, this.centerPosition = new l().subVectors(y, o[0]).multiplyScalar(s).add(o[0]);
    }
    e.classList.add(`${S}__container`);
    const $ = new l().subVectors(o[1], o[0]), P = new l().subVectors(o[3], o[0]), F = new l().crossVectors($, P).normalize();
    this.lookAt(F);
    const x = this.up.clone().applyQuaternion(this.quaternion), v = P.clone(), W = new l().crossVectors(x, v).normalize();
    this.rotateOnWorldAxis(W, x.angleTo(v)), this.position.copy(y), this.addEventListener("added", () => {
      var s;
      this.mode === "front" && ((s = this.opacityMesh) == null || s.removeFromParent());
    }), this.addEventListener("removed", () => {
      var s;
      (s = this.opacityMesh) == null || s.removeFromParent();
    });
  }
  removeFromParent() {
    var e;
    const t = this.parent;
    return t !== null && t.remove(this), (e = this.opacityMesh) == null || e.removeFromParent(), this;
  }
  removeOpacityMesh() {
    var t;
    return (t = this.opacityMesh) == null || t.removeFromParent(), this.opacityMesh = void 0, this;
  }
  dispose() {
    var t;
    this.container.remove(), this.removeFromParent(), (t = this.opacityMesh) == null || t.removeFromParent();
  }
  getOpacityMesh() {
    if (this.opacityMesh)
      return this.opacityMesh;
    {
      const t = this.createOpacityMesh(this);
      return this.opacityMesh = t, t;
    }
  }
  applyMatrix4(t) {
    var e;
    super.applyMatrix4(t), (e = this.opacityMesh) == null || e.applyMatrix4(t);
  }
  applyQuaternion(t) {
    var e;
    return super.applyQuaternion(t), (e = this.opacityMesh) == null || e.applyQuaternion(t), this;
  }
  applyScaleMatrix4(t) {
    var e;
    this.scale.applyMatrix4(t), (e = this.opacityMesh) == null || e.scale.applyMatrix4(t);
  }
}
export {
  G as CSS3DObjectPlus,
  N as DefaultRatio,
  L as MinRatio
};
