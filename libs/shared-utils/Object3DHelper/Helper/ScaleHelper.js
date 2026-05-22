var S = Object.defineProperty;
var y = (l, a, e) => a in l ? S(l, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[a] = e;
var h = (l, a, e) => (y(l, typeof a != "symbol" ? a + "" : a, e), e);
import * as t from "three";
import { ScaleHelperAbstract as b } from "../Base/BaseHelper.js";
import { RENDER_ORDER as m } from "../Constants/RenderOrder.js";
import { calculateScaleByCamera as C } from "../utils/calculateScaleByCamera.js";
class O extends b {
  constructor(e, i) {
    super(e, i);
    h(this, "name", "ScaleHelper");
    h(this, "scaleMeshes", []);
    h(this, "lineConnections", []);
    h(this, "positions", []);
    h(this, "container");
    h(this, "needsInitialScaling", !1);
    h(this, "lastCamera", null);
    h(this, "isInitializing", !1);
    i && (this.positions = i.positions, this.container = i.container), this.raycast = () => {
    };
  }
  initQuaternion() {
    this.quaternion.copy(this.originObject3D.quaternion);
  }
  initialPosition(e) {
    if (this.isInitializing) {
      console.warn("ScaleHelper: initialPosition called while already initializing, skipping");
      return;
    }
    this.isInitializing = !0;
    try {
      this.position.copy(this.originObject3D.position);
      const i = typeof this.positions == "function" ? this.positions() : this.positions;
      if (!i) {
        this.isInitializing = !1;
        return;
      }
      this.clearAllSpheres(), this.scaleMeshes = i.map((s, n) => {
        const o = E();
        return o.position.copy(s.handlePosition), o.scalePosition = s, o.children.forEach((r) => {
          r.scalePosition = s;
        }), this.add(o), o;
      }), this.createLineConnections(), this.needsInitialScaling = !0, this.lastCamera && (this.applySphereScaling(this.lastCamera), this.applyLineScaling(this.lastCamera), this.needsInitialScaling = !1);
    } finally {
      this.isInitializing = !1;
    }
  }
  /**
   * 清理所有缩放球
   */
  clearAllSpheres() {
    this.scaleMeshes.forEach((i) => {
      this.remove(i);
    }), this.scaleMeshes = [];
    const e = this.children.filter((i) => i.name === "ScaleHelperSphere");
    e.length > 0 && e.forEach((i) => {
      this.remove(i);
    });
  }
  /**
   * 创建中心对称球之间的直线连接
   */
  createLineConnections() {
    this.lineConnections.forEach((s) => {
      this.remove(s.line);
    }), this.lineConnections = [];
    const e = {
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left",
      front: "back",
      back: "front"
    }, i = /* @__PURE__ */ new Set();
    for (const s of this.scaleMeshes) {
      const n = s.scalePosition.id;
      if (!n || i.has(n))
        continue;
      const o = e[n];
      if (!o)
        continue;
      const r = this.scaleMeshes.find((d) => d.scalePosition.id === o);
      if (!r)
        continue;
      const p = w(s.position.clone(), r.position.clone());
      this.add(p), this.lineConnections.push({
        line: p,
        mesh1: s,
        mesh2: r
      }), i.add(n), i.add(o);
    }
  }
  update(e) {
    const i = e.type === "OrthographicCamera", s = e.position.clone(), n = this.originObject3D.getWorldPosition(new t.Vector3()), o = s.sub(n).normalize(), r = {
      front: new t.Vector3(0, 0, 1).applyQuaternion(this.originObject3D.getWorldQuaternion(new t.Quaternion())),
      back: new t.Vector3(0, 0, -1).applyQuaternion(this.originObject3D.getWorldQuaternion(new t.Quaternion())),
      left: new t.Vector3(-1, 0, 0).applyQuaternion(this.originObject3D.getWorldQuaternion(new t.Quaternion())),
      right: new t.Vector3(1, 0, 0).applyQuaternion(this.originObject3D.getWorldQuaternion(new t.Quaternion())),
      top: new t.Vector3(0, 1, 0).applyQuaternion(this.originObject3D.getWorldQuaternion(new t.Quaternion())),
      bottom: new t.Vector3(0, -1, 0).applyQuaternion(this.originObject3D.getWorldQuaternion(new t.Quaternion()))
    };
    let p = -1, d = "";
    Object.entries(r).forEach(([c, f]) => {
      const u = o.dot(f);
      u > p && (p = u, d = c);
    });
    const g = {
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left",
      front: "back",
      back: "front"
    };
    this.scaleMeshes.forEach((c) => {
      if (!i) {
        c.visible = !0;
        return;
      }
      const f = c.scalePosition.id, u = g[d];
      f === d || f === u ? c.visible = !1 : c.visible = !0;
    }), this.updateLineConnections(), this.lastCamera && (this.applySphereScaling(this.lastCamera), this.applyLineScaling(this.lastCamera));
  }
  /**
   * 应用球的缩放逻辑
   */
  applySphereScaling(e) {
    this.updateMatrixWorld(!0), this.scaleMeshes.forEach((i) => {
      i.scale.setScalar(
        C(e, i.scalePosition.handlePosition.clone().applyMatrix4(this.matrixWorld))
      );
    });
  }
  /**
   * 应用直线缩放逻辑（直线不需要特殊的缩放处理）
   */
  applyLineScaling(e) {
  }
  /**
   * 显示所有直线连接
   */
  showLineConnections() {
    this.lineConnections.forEach((e) => {
      const i = e.mesh1.visible && e.mesh2.visible;
      e.line.visible = i;
    });
  }
  /**
   * 隐藏所有直线连接
   */
  hideLineConnections() {
    this.lineConnections.forEach((e) => {
      e.line.visible = !1;
    });
  }
  /**
   * 更新直线连接的位置和可见性
   */
  updateLineConnections() {
    this.lineConnections.forEach((e) => {
      e.line.scale.set(1, 1, 1), e.line.position.set(0, 0, 0), e.line.rotation.set(0, 0, 0);
      const s = e.line.geometry.attributes.position;
      s.setXYZ(0, e.mesh1.position.x, e.mesh1.position.y, e.mesh1.position.z), s.setXYZ(1, e.mesh2.position.x, e.mesh2.position.y, e.mesh2.position.z), s.needsUpdate = !0;
      const n = e.mesh1.visible && e.mesh2.visible;
      e.line.visible = n;
    });
  }
  setScaleByCamera(e) {
    this.lastCamera = e, this.applySphereScaling(e), this.applyLineScaling(e), this.needsInitialScaling && requestAnimationFrame(() => {
      this.applySphereScaling(e), this.applyLineScaling(e);
    }), this.needsInitialScaling = !1;
  }
}
function E() {
  const a = new t.SphereGeometry(0.03, 16, 16), e = new t.MeshBasicMaterial({
    color: 16776960,
    side: t.DoubleSide,
    transparent: !0,
    opacity: 1,
    depthTest: !1,
    depthWrite: !1
  }), i = new t.Mesh(a, e);
  i.name = "ScaleHelperSphere", i.renderOrder = m.SCALE_HELPER_SPHERE;
  const s = 0.03 * 4, n = new t.SphereGeometry(s, 16, 16), o = new t.MeshBasicMaterial({
    transparent: !0,
    opacity: 0,
    // 完全透明
    side: t.DoubleSide,
    depthTest: !1,
    depthWrite: !1
  }), r = new t.Mesh(n, o);
  return r.name = "ScaleHelperTransparentGroup", r.renderOrder = m.SCALE_HELPER_SPHERE, r.add(i), r;
}
function w(l, a) {
  const e = new t.BufferGeometry(), i = [l, a];
  e.setFromPoints(i);
  const s = new t.LineBasicMaterial({
    color: 16776960,
    // 黄色，与球的颜色一致
    opacity: 0.75,
    transparent: !0,
    depthTest: !1,
    depthWrite: !1
  }), n = new t.Line(e, s);
  return n.name = "ScaleHelperSolidLine", n.renderOrder = m.SCALE_HELPER_LINE, n.raycast = () => {
  }, n;
}
export {
  O as ScaleHelper
};
