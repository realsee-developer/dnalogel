var I = Object.defineProperty;
var b = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var M = (c, s, e) => s in c ? I(c, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[s] = e, x = (c, s) => {
  for (var e in s || (s = {}))
    S.call(s, e) && M(c, e, s[e]);
  if (b)
    for (var e of b(s))
      V.call(s, e) && M(c, e, s[e]);
  return c;
};
var l = (c, s, e) => (M(c, typeof s != "symbol" ? s + "" : s, e), e);
import { IObject3D as E } from "../../shared-utils/three/IObject3D.js";
import { anyPositionToVector3 as w } from "../../shared-utils/positionToVector3.js";
import * as o from "three";
import { intersectWithoutLine as C } from "../../shared-utils/three/core/Raycaster.js";
import { ColoredMesh as W } from "../utils/three/ColoredMesh.js";
import { PrismGeometry as F } from "../../shared-utils/three/core/PrismGeometry.js";
import { PrismAnimationGeometry as U } from "../../shared-utils/three/core/PrismAnimationGeometry.js";
import { triangleArea as _, triangleCenter as T } from "../../shared-utils/three/geometryUtil.js";
import { LineMesh as O } from "./Line.js";
import { LineGeometry as R } from "../../shared-utils/three/core/LineGeometry.js";
import { AnimationFrameLoop as z } from "@realsee/five";
class Q extends E {
  constructor(e) {
    super();
    l(this, "name", "PrismMesh");
    l(this, "five");
    l(this, "animatedBoxMesh");
    l(this, "activeAnimations", /* @__PURE__ */ new Map());
    l(this, "activeEaseInAnimations", /* @__PURE__ */ new Map());
    l(this, "_geometryInfoCache");
    l(this, "geometryInfoNeedUpdate", !0);
    l(this, "edgeMesh", new O());
    l(this, "prismMesh", new W());
    l(this, "paramStyle");
    this.five = e == null ? void 0 : e.five, this.prismMesh.name = "PrismMesh", this.prismMesh.geometry = new F(), this.edgeMesh.name = "EdgeMesh", this.addIfNotExists(this.prismMesh, this.edgeMesh), e && Object.keys(e).some((i) => i !== "five") && this.setPoints(e), this.setStyle(e);
  }
  get topPosition() {
    return new o.Vector3().fromArray(this.prismMesh.geometry.topPosition);
  }
  get bottomPositions() {
    return this.prismMesh.geometry.bottomPositions.map((e) => new o.Vector3().fromArray(e));
  }
  get topPositions() {
    const e = this.bottomPositions[0].clone().sub(this.topPosition);
    return this.bottomPositions.map((i) => i.clone().sub(e));
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
    return (e = this.geometryInfo.center.clone()) != null ? e : new o.Vector3(9999, 9999, 9999);
  }
  get geometryInfo() {
    if (this.geometryInfoNeedUpdate) {
      this.geometryInfoNeedUpdate = !1;
      const e = this.prismMesh.geometry.bottomPositions, i = this.prismMesh.geometry.topPosition;
      if (!e || e.length < 3 || !i) {
        this._geometryInfoCache = void 0;
        return;
      }
      const t = e.map((d, f) => f >= e.length - 2 ? null : [
        new o.Vector3().fromArray(e[0]),
        new o.Vector3().fromArray(e[f + 1]),
        new o.Vector3().fromArray(e[f + 2])
      ]).filter(Boolean);
      if (t.length === 0) {
        this._geometryInfoCache = void 0;
        return;
      }
      let n = 0, r = new o.Vector3();
      for (const [d, f, m] of t) {
        const a = _(d, f, m), u = T(d, f, m, a);
        n += a, r.add(u);
      }
      r = r.divideScalar(n);
      const y = new o.Vector3().fromArray(i).sub(new o.Vector3().fromArray(e[0])), p = r.clone().add(y.divideScalar(2));
      this._geometryInfoCache = { center: p };
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
    this.paramStyle = x(x({}, this.paramStyle), e), this.prismMesh.setStyle(this.paramStyle), this.edgeMesh.setStyle(this.paramStyle);
  }
  /**
   * Check if the prism is a box (has 4 bottom positions)
   */
  isBox() {
    const e = this.prismMesh.geometry.bottomPositions;
    return e && e.length === 4;
  }
  setPoints(e) {
    var i;
    this.prismMesh.geometry.setPosition({
      bottomPositions: (i = e.points) == null ? void 0 : i.map(w).map((t) => t.toArray()),
      topPosition: e.heightPoint ? w(e.heightPoint).toArray() : void 0
    }), this.edgeMesh.geometry = new R().fromEdgesGeometry(new o.EdgesGeometry(this.prismMesh.geometry)), this.geometryInfoNeedUpdate = !0;
  }
  highlight() {
    this.prismMesh.highlight();
  }
  unhighlight() {
    this.prismMesh.unhighlight();
  }
  raycast(e, i) {
    return this.children.forEach((t) => C(t, e, i, !0)), !1;
  }
  /**
   * 设置Five实例
   * @param five Five实例
   */
  setFive(e) {
    this.five = e;
  }
  /**
   * 播放盒子上下动画
   * @param id 盒子项目ID
   * @param color 动画颜色，默认为浅蓝色 (#4DF0FF)
   * @returns Promise，动画完成时解析
   */
  playBoxAnimation(e, i = "#4DF0FF") {
    return this.five ? (this.activeAnimations.has(e) && this.forceFinishBoxAnimation(e), new Promise((t) => {
      this.prismMesh.visible = !1, this.edgeMesh.visible = !1;
      const n = this.createOrUpdateAnimatedBoxMesh(i), r = n.material, y = 3e3;
      let p = 0;
      const d = z.shared.add((f, m) => {
        p += m;
        let a = p / y;
        a > 1 && (a = 1);
        let u = a;
        a <= 0.5 ? u = a * 2 : u = 2 - a * 2, r.forEach((g) => {
          g.uniforms.progress.value = u;
        }), a === 1 && (d(), n.visible = !1, this.playEaseInAnimation(e, () => {
          this.activeAnimations.delete(e), t();
        })), this.five.needsRender = !0;
      });
      this.activeAnimations.set(e, { animatedBoxMesh: n, remove: d }), n.visible = !0;
    })) : (console.warn("Five instance not available for box animation"), Promise.resolve());
  }
  /**
   * 强制立即完成所有活动的盒子动画
   * @param id 可选的盒子项目ID。如果未提供，完成所有活动的盒子动画。
   */
  forceFinishBoxAnimation(e) {
    if (!this.five) {
      console.warn("Five instance not available for finishing box animation");
      return;
    }
    (e ? [e] : Array.from(this.activeAnimations.keys())).forEach((t) => {
      const n = this.activeAnimations.get(t);
      n && (n.remove(), this.animatedBoxMesh && (this.animatedBoxMesh.visible = !1), this.activeAnimations.delete(t));
      const r = this.activeEaseInAnimations.get(t);
      r && (clearInterval(r.interval), this.activeEaseInAnimations.delete(t));
    }), this.showBoxFinalState(), this.five.needsRender = !0;
  }
  playEaseInAnimation(e, i) {
    if (!this.five)
      return;
    this.prismMesh.visible = !0, this.edgeMesh.visible = !0;
    let t = 0;
    const n = this.prismMesh.style.opacity;
    this.prismMesh.setStyle({ opacity: 0 }), this.edgeMesh.setStyle({ lineOpacity: 0 });
    const r = setInterval(() => {
      t === 61 && (clearInterval(r), this.activeEaseInAnimations.delete(e), this.showBoxFinalState(), i()), this.edgeMesh.setStyle({ lineOpacity: t / 60 }), this.prismMesh.setStyle({ opacity: t / 60 * n }), this.five.needsRender = !0, t++;
    }, 16);
    this.activeEaseInAnimations.set(e, { interval: r, model: this });
  }
  /**
   * 创建或更新动画盒子网格
   * @param color 动画颜色
   */
  createOrUpdateAnimatedBoxMesh(e) {
    if (!this.five)
      throw new Error("Five instance not available");
    const i = new o.Vector3(1 / 0, 1 / 0, 1 / 0), t = new o.Vector3(-1 / 0, -1 / 0, -1 / 0), n = this.bottomPositions;
    for (const h of n)
      i.min(h), t.max(h);
    const r = this.topPositions;
    for (const h of r)
      i.min(h), t.max(h);
    const y = t.clone().sub(i), p = this.prismMesh.geometry, d = p.bottomPositions, f = p.topPosition;
    if (this.animatedBoxMesh)
      return this.matrixWorld.decompose(this.animatedBoxMesh.position, this.animatedBoxMesh.quaternion, this.animatedBoxMesh.scale), this.animatedBoxMesh.updateMatrixWorld(), this.animatedBoxMesh.matrixAutoUpdate = !1, this.animatedBoxMesh;
    const m = new U({
      bottomPositions: d,
      topPosition: f,
      type: "Concave"
    }), a = `
    varying vec2 vUV;
    varying vec3 vWorldPosition;
    #include <common>
    void main() {
      vUV = uv;
      vec4 transformed = vec4(position, 1.0);
      vWorldPosition = (modelMatrix * vec4( position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * transformed;
    }
    `, u = `
    #include <common>
    uniform vec3 color;
    uniform vec3 size;
    uniform vec3 minPos;
    uniform vec2 faceSize;
    uniform float opacity;
    uniform float progress;
    uniform float spread;
    uniform float faceIndex;
    varying vec2 vUV;
    varying vec3 vWorldPosition;
    void main() {

      float u = vUV.x;
      float v = vUV.y;
      float r = 0.1 + sqrt(u * u + v * v) * 0.3;

      // 边缘线效果 - 基于UV坐标
      float edgeThickness = 0.003;
      if (u < edgeThickness || u > 1.0 - edgeThickness || v < edgeThickness || v > 1.0 - edgeThickness) {
        r += 1.0 - min(abs(u - 0.5), abs(v - 0.5)) * 2.0;
      }

      // 扫光动画 - 根据面类型使用不同效果
      float sweepEffect = 1.0;
   
      vec3 p = (vWorldPosition - minPos) / size;
      sweepEffect = pow(clamp(1.0 - abs(p.y - progress) / spread, 0.0, 1.0), 2.0);
      r = r * sweepEffect;

      gl_FragColor = vec4(color, clamp(r * opacity, 0.0, 1.0));
    }
    `, g = [], A = new o.Color(e);
    for (let h = 0; h < m.faceCount; h++) {
      const v = new o.ShaderMaterial({
        vertexShader: a,
        fragmentShader: u,
        uniforms: {
          color: { value: A },
          size: { value: y },
          minPos: { value: i },
          faceSize: { value: new o.Vector2(1, 1) },
          opacity: { value: 1.5 },
          progress: { value: 0.5 },
          spread: { value: 0.3 },
          faceIndex: { value: h }
        },
        depthTest: !1,
        side: o.DoubleSide,
        transparent: !0
      });
      v.polygonOffset = !0, v.polygonOffsetFactor = 1, v.polygonOffsetUnits = 1, g.push(v);
    }
    return this.animatedBoxMesh = new o.Mesh(m, g), this.matrixWorld.decompose(this.animatedBoxMesh.position, this.animatedBoxMesh.quaternion, this.animatedBoxMesh.scale), this.animatedBoxMesh.updateMatrixWorld(), this.animatedBoxMesh.matrixAutoUpdate = !1, this.animatedBoxMesh.onBeforeRender = () => {
      m.boundingBox || m.computeBoundingBox();
      const h = m.boundingBox.min.clone().applyMatrix4(this.animatedBoxMesh.matrixWorld), v = m.boundingBox.max.clone().applyMatrix4(this.animatedBoxMesh.matrixWorld), B = new o.Vector3().subVectors(v, h);
      g.forEach((P) => {
        P.uniforms.minPos.value.copy(h), P.uniforms.size.value.copy(B);
      }), this.five.needsRender = !0;
    }, this.five.scene.add(this.animatedBoxMesh), this.animatedBoxMesh;
  }
  /**
   * 显示盒子模型的最终状态（完全可见且不透明度完整）
   */
  showBoxFinalState() {
    this.prismMesh.visible = !0, this.edgeMesh.visible = !0, this.prismMesh.setStyle({ opacity: this.prismMesh.style.opacity }), this.edgeMesh.setStyle({ lineOpacity: 1 });
  }
}
export {
  Q as PrismMesh
};
