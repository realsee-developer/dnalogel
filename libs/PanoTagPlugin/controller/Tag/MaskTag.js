var F = Object.defineProperty;
var R = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var E = (m, c, e) => c in m ? F(m, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : m[c] = e, v = (m, c) => {
  for (var e in c || (c = {}))
    B.call(c, e) && E(m, e, c[e]);
  if (R)
    for (var e of R(c))
      A.call(c, e) && E(m, e, c[e]);
  return m;
};
var x = (m, c, e) => (E(m, typeof c != "symbol" ? c + "" : c, e), e);
var S = (m, c, e) => new Promise((s, t) => {
  var o = (l) => {
    try {
      r(e.next(l));
    } catch (n) {
      t(n);
    }
  }, i = (l) => {
    try {
      r(e.throw(l));
    } catch (n) {
      t(n);
    }
  }, r = (l) => l.done ? s(l.value) : Promise.resolve(l.value).then(o, i);
  r((e = e.apply(m, c)).next());
});
import { BaseTag as D } from "./BaseTag.js";
import * as g from "three";
import { anime as $ } from "../../../vendor/animejs/lib/anime.es.js";
import { maskVertexShader as z, maskFragmentShaderMulti as G } from "./MaskTag.shaders.js";
import { transformPosition as L } from "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/Subscribe.js";
import "../../utils/tag/calculateTagConfig.js";
import "../../../vendor/object-assign-deep/objectAssignDeep.js";
import "../../../shared-utils/typescript/entries.js";
import "../../utils/tag/adaptConfig.js";
import "../../typings/tag/TagConfig.js";
import "@realsee/five";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/three/core/Raycaster.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/five/fiveEveryReadyListener.js";
import "../../../shared-utils/throttle.js";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../shared-utils/even.js";
import "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../shared-utils/three/blink.js";
import "../../../shared-utils/util.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../shared-utils/createResizeObserver.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../shared-utils/CSS3DRender/index.js";
import "../../../shared-utils/five/fiveModelLoad.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../Sculpt/Meshes/Line.js";
import "../../../Sculpt/typings/style.js";
import "../../../shared-utils/three/IObject3D.js";
import "../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/five/getFiveFromParentChain.js";
import "../../../shared-utils/three/core/LineGeometry.js";
import "../../../shared-utils/three/core/LineMaterial.js";
import "../../../shared-utils/three/core/Line2.js";
import "../../../shared-utils/three/core/LineMaterial2.js";
import "../../../Sculpt/utils/unit.js";
import "../../../Sculpt/utils/renderDom.js";
import "../../../vendor/earcut/src/earcut.js";
import "../../../shared-utils/five/FivePuppet.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../Sculpt/utils/three/rayOnLine.js";
import "../../../shared-utils/five/mode.js";
import "../../utils/tag/format.js";
import "../../../shared-utils/url/defaultUrls.js";
import "../../../shared-utils/vectorToCoordinate.js";
import "../../../shared-utils/formatRad.js";
import "../../../shared-utils/five/lookPoint.js";
import "../../../shared-utils/uuid.js";
import "../../utils/tagPosition.js";
import "../../utils/tag/tagCheck.js";
import "../../utils/checkRange.js";
import "../../../shared-utils/url/getUrl.js";
import "../../../shared-utils/five/getFloorIndex.js";
import "../../../shared-utils/safeObj.js";
import "../../utils/Cache.js";
import "../../../shared-utils/promise/withResolvers.js";
function w(m) {
  if (Array.isArray(m))
    return m;
  if (typeof m == "number")
    return [m >> 16 & 255, m >> 8 & 255, m & 255];
  if (typeof m == "string") {
    let c = m.trim().replace(/^#/, "");
    if (c.length === 3 && (c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2]), c.length === 6) {
      const e = parseInt(c.substring(0, 2), 16), s = parseInt(c.substring(2, 4), 16), t = parseInt(c.substring(4, 6), 16);
      if (!isNaN(e) && !isNaN(s) && !isNaN(t))
        return [e, s, t];
    }
    console.warn("[MaskTag] Invalid hex color string:", m);
  }
  return [0, 0, 0];
}
const h = class extends D {
  constructor(e, s) {
    var i;
    super(e, s);
    /**
     * mask 图片 URL 或 Canvas 元素（2:1 全景图格式）
     */
    x(this, "maskUrl");
    /**
     * 目标颜色（RGB 格式）
     */
    x(this, "targetColor");
    /**
     * mask 渲染的 mesh 对象（使用 Sphere）
     */
    x(this, "maskMesh");
    /**
     * mask 纹理对象
     */
    x(this, "maskTexture");
    /**
     * 是否正在加载 mask
     */
    x(this, "loadingMask", !1);
    /**
     * 资源是否已释放
     */
    x(this, "_disposed", !1);
    /**
     * 标签样式配置
     */
    x(this, "tagStyle");
    /**
     * 点击事件清理函数
     */
    x(this, "clickEventDispose");
    /** 当前 tag 在共享 style 纹理中的下标（color 即 id） */
    x(this, "sharedStyleIndex", -1);
    /** 共享 mesh 的 registry key，用于 updateMaskStyle / dispose 查找 entry */
    x(this, "_sharedMeshKey", null);
    const t = (i = s.mask) != null ? i : s.maskUrl;
    this.maskUrl = t instanceof HTMLCanvasElement || typeof t == "string" && t ? t : "";
    const o = s.color;
    this.targetColor = w(o), o || console.warn(`[MaskTag] No color provided for tag ${s.id}, using default [0, 0, 0]`), this.tagStyle = s.style, this.updateVisible(), this.currentVisible && this.initializeMaskMesh();
  }
  getColorKey() {
    return `${this.targetColor[0]},${this.targetColor[1]},${this.targetColor[2]}`;
  }
  /** 同点位共用一个 mesh，key 仅用 panoIndex（string/canvas 切换时不会因 key 不同而重复创建） */
  static getMeshKey(e) {
    return String(e);
  }
  /**
   * 初始化/挂载到同点位共享 mesh，用 appendStyleToMaterial 注册本 tag 的 style（color 即 id）
   */
  initializeMaskMesh() {
    return S(this, null, function* () {
      var s;
      if (this._disposed || !this.maskUrl)
        return;
      const e = (s = this.fiveState) == null ? void 0 : s.panoIndex;
      if (typeof e == "number") {
        this.loadingMask = !0;
        try {
          const t = yield h.loadMaskTexture(this.maskUrl);
          this.maskTexture = t;
          const o = h.getMeshKey(e);
          this._sharedMeshKey = o;
          let i = h.sharedMeshRegistry.get(o);
          const r = this.getColorKey(), l = this.buildStyleForMaterial();
          i ? i.maskSource !== this.maskUrl && (h.releaseMaskTexture(i.maskSource), i.maskTexture = t, i.maskSource = this.maskUrl, i.material.uniforms.map.value = t) : (i = h.createSharedMesh(t, this.maskUrl, this.plugin), h.sharedMeshRegistry.set(o, i), this.plugin.imagePlaneGroup.add(i.mesh));
          const n = i.styleIndexByColorKey.get(r);
          n !== void 0 ? (this.sharedStyleIndex = n, this.maskMesh = i.mesh, this.updateStyleSlotInMaterial(i.material, n, l)) : (i.tagsByColorKey.set(r, this), this.appendStyleToMaterial(i.material, l), this.sharedStyleIndex = i.tagsByColorKey.size - 1, i.styleIndexByColorKey.set(r, this.sharedStyleIndex), this.maskMesh = i.mesh), this.setupSharedMeshRaycast(i), this.updateMeshTransform(), this.setupClickEvents(), this.updateScreenPosition(), i.mesh.visible = !0;
        } finally {
          this.loadingMask = !1;
        }
      }
    });
  }
  /** 构建用于 mergedTexture 的 style 对象（color 作 id），tolerance 0–255 */
  buildStyleForMaterial() {
    const e = this.getMaskStyle(), s = e.tolerance, t = s <= 1 ? s * 255 : s;
    return {
      color: [this.targetColor[0], this.targetColor[1], this.targetColor[2], 1],
      tolerance: t,
      highlightColor: e.highlightColor,
      opacity: this.enabled && this.visible ? e.opacity : 0
    };
  }
  static createSharedMesh(e, s, t) {
    const r = Math.max(1, Math.ceil(Math.sqrt(0))), l = 1, n = new Float32Array(r * l * 4), a = new g.DataTexture(n, r, l, g.RGBAFormat, g.FloatType);
    a.needsUpdate = !0;
    const d = new g.ShaderMaterial({
      vertexShader: z,
      fragmentShader: G,
      uniforms: {
        map: { value: e },
        mergedTexture: { value: a },
        groupCount: { value: 0 },
        textureWidth: { value: r },
        pixelsPerGroup: { value: 3 }
      },
      depthWrite: !1,
      depthTest: !1,
      transparent: !0
    }), u = new g.SphereGeometry(1, 60, 40);
    u.rotateY(-Math.PI / 2), u.scale(-1, 1, 1);
    const p = new g.Mesh(u, d);
    return p.renderOrder = -1e3, p.__maskMesh = !0, {
      mesh: p,
      material: d,
      maskTexture: e,
      maskSource: s,
      tagsByColorKey: /* @__PURE__ */ new Map(),
      styleIndexByColorKey: /* @__PURE__ */ new Map()
    };
  }
  /** 仅更新材质中某一 slot 的 style（用于 enable/disable/updateMaskStyle） */
  updateStyleSlotInMaterial(e, s, t) {
    const i = e.uniforms.mergedTexture.value, r = i.image.data, n = s * 3, a = n * 4;
    r[a] = t.color[0] / 255, r[a + 1] = t.color[1] / 255, r[a + 2] = t.color[2] / 255, r[a + 3] = t.color[3];
    const d = (n + 1) * 4;
    r[d] = t.tolerance / 255, r[d + 1] = t.highlightColor[0] / 255, r[d + 2] = t.highlightColor[1] / 255, r[d + 3] = t.highlightColor[2] / 255;
    const u = (n + 2) * 4;
    r[u] = t.opacity, i.needsUpdate = !0, this.five.needsRender = !0;
  }
  setupSharedMeshRaycast(e) {
    const s = e.mesh;
    if (s.__maskRaycastSet)
      return;
    s.__maskRaycastSet = !0;
    let t = null, o = null;
    const i = () => {
      const l = e.maskTexture;
      if (!(l != null && l.image))
        return null;
      if (o === l && t)
        return t;
      o = l;
      try {
        const n = document.createElement("canvas"), a = n.getContext("2d");
        if (!a)
          return null;
        const d = l.image;
        return n.width = d.width, n.height = d.height, a.drawImage(d, 0, 0), t = a.getImageData(0, 0, d.width, d.height), t;
      } catch (n) {
        return null;
      }
    }, r = s.raycast.bind(s);
    s.raycast = (l, n) => {
      var k, I;
      const a = [];
      if (r(l, a), a.length === 0)
        return;
      const d = a[0];
      if (!d.uv || !((k = e.maskTexture) != null && k.image))
        return;
      const u = i();
      if (!u)
        return;
      const p = Math.floor(d.uv.x * u.width), y = (Math.floor((1 - d.uv.y) * u.height) * u.width + p) * 4, f = [u.data[y], u.data[y + 1], u.data[y + 2]], M = 0.5 / 255;
      for (const [, T] of e.tagsByColorKey) {
        if (!T.enabled || ((I = T.config) == null ? void 0 : I.clickable) === !1)
          continue;
        const [K, P, U] = T.targetColor;
        if (Math.abs(f[0] / 255 - K / 255) + Math.abs(f[1] / 255 - P / 255) + Math.abs(f[2] / 255 - U / 255) <= M) {
          s.userData.__lastHitTag = T, n.push(d);
          return;
        }
      }
    };
  }
  /**
   * 计算法向量
   * Mask 标签返回向上的法向量（因为是贴在 cube 面上）
   */
  computeNormal() {
    return new g.Vector3(0, 1, 0);
  }
  /**
   * 不把共享 mesh 作为 blink 目标，闪烁通过本 tag 的 style opacity 动画实现
   */
  getAdditionalBlinkTargets() {
    return null;
  }
  /**
   * 闪烁仅针对本 tag：通过改变本 tag 在 merged texture 中的 opacity 实现
   */
  blink(e) {
    return S(this, null, function* () {
      var a, d, u;
      if (!this.maskMesh || this._sharedMeshKey === null || this.sharedStyleIndex < 0)
        return;
      const s = h.sharedMeshRegistry.get(this._sharedMeshKey);
      if (!s)
        return;
      const i = { opacity: this.buildStyleForMaterial().opacity }, r = (a = e == null ? void 0 : e.duration) != null ? a : 300, l = (d = e == null ? void 0 : e.loop) != null ? d : 4, n = $({
        targets: i,
        opacity: [0, 1],
        duration: r,
        easing: (u = e == null ? void 0 : e.easing) != null ? u : "easeInOutQuad",
        direction: "alternate",
        loop: l,
        update: () => {
          const p = this.buildStyleForMaterial();
          p.opacity = i.opacity, this.updateStyleSlotInMaterial(s.material, this.sharedStyleIndex, p);
        }
      });
      try {
        yield n.finished;
      } catch (p) {
      } finally {
        this.updateMaskStyle();
      }
    });
  }
  /**
   * 更新标签数据
   */
  set(e, s = !0) {
    var o, i;
    super.set(e, s), e.style && (this.tagStyle = v(v({}, this.tagStyle), e.style), (o = e.style) != null && o.mask && this.updateMaskStyle());
    const t = (i = e.mask) != null ? i : e.maskUrl;
    t && t !== this.maskUrl && (this.maskUrl = t, this.updateSharedMeshTexture()), e.color !== void 0 && (this.targetColor = w(e.color), this.updateMaskStyle()), this.maskMesh && this.updateMaskStyle();
  }
  /** 供 rebuildEntryMaterial 使用：返回当前 tag 的 style 对象 */
  getStyleForMaterial() {
    return this.buildStyleForMaterial();
  }
  /**
   * 重写 getVisible 方法
   * Mask 标签仅在当前点位可见
   */
  getVisible(e) {
    var s;
    try {
      if (!this.enabled || !this.plugin.state.enabled || !this.fiveUtil.model || !this.maskUrl)
        return !1;
      const t = v(v({}, this.five.getCurrentState()), e), { panoIndex: o } = t;
      return o !== ((s = this.fiveState) == null ? void 0 : s.panoIndex) ? !1 : super.getVisible(t);
    } catch (t) {
      return !1;
    }
  }
  /**
   * 重写 computeVisible 方法
   * 增加 Mask 特有的可见性检查逻辑，用于 whyHide 功能
   */
  computeVisible(e) {
    var o, i, r;
    const s = v(v({}, this.five.getCurrentState()), e), { panoIndex: t } = s;
    return t !== ((o = this.fiveState) == null ? void 0 : o.panoIndex) ? {
      value: !1,
      reason: {
        type: "panoIndex mismatch",
        detail: `Mask 标签仅在当前点位可见。当前点位: ${t}, 标签点位: ${(i = this.fiveState) == null ? void 0 : i.panoIndex}`,
        currentPanoIndex: t,
        tagPanoIndex: (r = this.fiveState) == null ? void 0 : r.panoIndex
      }
    } : super.computeVisible(e);
  }
  /**
   * 点击事件处理
   */
  onClick(e) {
    e.target === "TagMaskModel" && this.unfoldAndFoldOthers();
  }
  /**
   * 展开自己，收起其他标签
   */
  unfoldAndFoldOthers() {
    if (this.isPopoverConfigEnabled())
      return;
    const e = this.can("fold"), s = this.can("unfold");
    e && s && (this.state.unfolded = !this.state.unfolded, this.manuallyOperated = !0, this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }), this.state.unfolded && this.plugin.tags.forEach((t) => {
      t.id !== this.id && t.fold();
    }));
  }
  /**
   * 展开标签详情
   */
  unfold() {
    this.isPopoverConfigEnabled() || this.setUnfold(!0);
  }
  /**
   * 折叠标签详情
   */
  fold() {
    this.isPopoverConfigEnabled() || this.setUnfold(!1);
  }
  /**
   * 设置展开/折叠状态
   */
  setUnfold(e) {
    if (this.isPopoverConfigEnabled())
      return;
    const s = this.can("fold"), t = this.can("unfold");
    s && t && (this.state.unfolded = e, this.hooks.emit(e ? "unfolded" : "folded"), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }));
  }
  /**
   * 更新屏幕位置
   */
  updateScreenPosition() {
    if (!this.currentVisible || !this.position || !Array.isArray(this.position)) {
      this.screenPosition = null, this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
      return;
    }
    const s = new g.Vector3(...this.position).clone().project(this.five.camera);
    if (this.five.renderer) {
      const t = this.five.renderer.getSize(new g.Vector2());
      this.screenPosition = {
        leftPx: (s.x + 1) / 2 * t.x,
        topPx: (-s.y + 1) / 2 * t.y,
        scale: 1
      };
    }
    this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
  }
  /**
   * 应用可见性变化（通过 style opacity 控制展示，共享 mesh 保持 visible）
   */
  applyVisible() {
    try {
      if (!this.maskUrl)
        return;
      this.visible && !this.loadingMask && this.initializeMaskMesh(), this.maskMesh && (this.updateMaskStyle(), this.updateMeshTransform()), this.updateScreenPosition();
    } catch (e) {
      console.error(`[MaskTag] Error in applyVisible for tag ${this.id}:`, e);
    }
  }
  /**
   * 更新 mesh 的位置和旋转（跟随观察者）
   * 参考 itemMask 实现
   */
  updateMeshTransform() {
    var r;
    if (!this.maskMesh)
      return;
    const e = (r = this.fiveState) == null ? void 0 : r.panoIndex;
    if (e === void 0)
      return;
    const s = this.workUtil.getObserver(e);
    if (!s)
      return;
    this.maskMesh.position.copy(L(s.position, this.workUtil.transform)), this.maskMesh.quaternion.copy(s.quaternion);
    const t = new g.Vector3(), o = new g.Quaternion(), i = new g.Vector3();
    this.workUtil.transform.decompose(t, o, i), this.maskMesh.quaternion.multiply(o), this.five.needsRender = !0;
  }
  /**
   * 步骤1：从材质中解析出 styleList
   * @param {THREE.ShaderMaterial} material - 目标材质
   * @returns {Array} 解析后的 styleList
   */
  parseStyleListFromMaterial(e) {
    const s = e.uniforms, t = s.groupCount.value, o = s.pixelsPerGroup.value, r = s.mergedTexture.value.image.data, l = [];
    for (let n = 0; n < t; n++) {
      const a = n * o, d = a * 4, u = r[d] * 255, p = r[d + 1] * 255, C = r[d + 2] * 255, y = r[d + 3], f = (a + 1) * 4, M = r[f] * 255, k = r[f + 1] * 255, I = r[f + 2] * 255, T = r[f + 3] * 255, K = (a + 2) * 4, P = r[K];
      l.push({
        color: [Math.round(u), Math.round(p), Math.round(C), y],
        tolerance: Math.round(M),
        highlightColor: [Math.round(k), Math.round(I), Math.round(T)],
        opacity: P
      });
    }
    return l;
  }
  /**
   * 步骤2：更新材质的样式纹理（追加新元素后）
   * @param {THREE.ShaderMaterial} material - 目标材质
   * @param {Array} newStyle - 要追加的新样式对象
   */
  appendStyleToMaterial(e, s) {
    const t = this.parseStyleListFromMaterial(e);
    Array.isArray(s) ? t.push(...s) : t.push(s);
    const o = t.length, i = 3, l = o * i, n = 1, a = new Float32Array(l * n * 4);
    t.forEach((p, C) => {
      const y = C * i, f = y * 4;
      a[f] = p.color[0] / 255, a[f + 1] = p.color[1] / 255, a[f + 2] = p.color[2] / 255, a[f + 3] = p.color[3];
      const M = (y + 1) * 4;
      a[M] = p.tolerance / 255, a[M + 1] = p.highlightColor[0] / 255, a[M + 2] = p.highlightColor[1] / 255, a[M + 3] = p.highlightColor[2] / 255;
      const k = (y + 2) * 4;
      a[k] = p.opacity, a[k + 1] = 0, a[k + 2] = 0, a[k + 3] = 0;
    });
    const d = e.uniforms.mergedTexture.value, u = d.image;
    u.data = a, u.width = l, u.height = n, d.needsUpdate = !0, e.uniforms.groupCount.value = o, e.uniforms.textureWidth.value = l, console.log(`成功追加样式，当前总组数：${o}`);
  }
  /**
   * 获取 Mask 样式配置（合并用户配置和默认值）
   */
  getMaskStyle() {
    var t, o, i;
    const e = ((t = this.tagStyle) == null ? void 0 : t.mask) || {};
    let s = [255, 255, 255];
    return e.color !== void 0 ? s = w(e.color) : e.highlightColor !== void 0 && (s = w(e.highlightColor)), {
      tolerance: (o = e.tolerance) != null ? o : 1e-3,
      // 参考 itemMask 默认 0.001（归一化后的值）
      highlightColor: s,
      opacity: (i = e.opacity) != null ? i : 0.6
      // 默认 0.6（用于填充区域）
    };
  }
  /**
   * 设置点击事件（仅当 raycast 命中本 tag 的 color 时触发）
   */
  setupClickEvents() {
    var s;
    if (!this.maskMesh || ((s = this.config) == null ? void 0 : s.clickable) === !1)
      return;
    this.cleanupClickEvents();
    const e = (t) => {
      var i, r;
      ((r = (i = this.maskMesh) == null ? void 0 : i.userData) == null ? void 0 : r.__lastHitTag) === this && this.plugin.hooks.emit("click", { event: t, target: "TagMaskModel", tag: this });
    };
    requestAnimationFrame(() => {
      !this.maskMesh || !this.plugin.domEvents || (this.clickEventDispose = this.addObjectClickHandler(this, this.maskMesh, e));
    });
  }
  /**
   * 清理点击事件
   */
  cleanupClickEvents() {
    this.clickEventDispose && (this.clickEventDispose(), this.clickEventDispose = void 0);
  }
  /**
   * 重新加载 mask 图：从旧点位 mesh 注销，再按新 maskUrl 初始化
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- 保留参数与 set() 调用一致
  reloadMask(e) {
    var i;
    const s = (i = this.fiveState) == null ? void 0 : i.panoIndex, t = this.getColorKey(), o = typeof s == "number" ? h.getMeshKey(s) : this._sharedMeshKey;
    if (o) {
      const r = h.sharedMeshRegistry.get(o);
      r && (r.tagsByColorKey.delete(t), r.styleIndexByColorKey.delete(t), r.tagsByColorKey.size === 0 && (r.mesh.parent && r.mesh.parent.remove(r.mesh), r.mesh.geometry.dispose(), r.mesh.material.dispose(), r.material.uniforms.mergedTexture.value.dispose(), h.releaseMaskTexture(r.maskSource), h.sharedMeshRegistry.delete(o)));
    }
    this.maskMesh = void 0, this._sharedMeshKey = null, this.sharedStyleIndex = -1, this.maskTexture = void 0, this.visible && !this.loadingMask && this.initializeMaskMesh();
  }
  /**
   * changeTagById 改 mask 时：只更新共享 mesh 的 texture，不 unregister
   * 有 entry 则换图；无 entry 则走完整初始化
   */
  updateSharedMeshTexture() {
    return S(this, null, function* () {
      var i;
      if (this._disposed || !this.maskUrl)
        return;
      const e = (i = this.fiveState) == null ? void 0 : i.panoIndex;
      if (typeof e != "number")
        return;
      const s = h.getMeshKey(e), t = h.sharedMeshRegistry.get(s);
      if (!t) {
        yield this.initializeMaskMesh();
        return;
      }
      if (t.maskSource === this.maskUrl)
        return;
      const o = yield h.loadMaskTexture(this.maskUrl);
      this.maskTexture = o, h.releaseMaskTexture(t.maskSource), t.maskTexture = o, t.maskSource = this.maskUrl, t.material.uniforms.map.value = o, this.five.needsRender = !0;
    });
  }
  /**
   * 更新当前 tag 在共享材质中的 style slot（color/style 控制展示）
   */
  updateMaskStyle() {
    if (!this.maskMesh || this._sharedMeshKey === null || this.sharedStyleIndex < 0)
      return;
    const e = h.sharedMeshRegistry.get(this._sharedMeshKey);
    e && this.updateStyleSlotInMaterial(e.material, this.sharedStyleIndex, this.buildStyleForMaterial());
  }
  /**
   * 更新 Canvas 纹理（仅当 maskUrl 为 Canvas 时有效）
   * 当 canvas 内容发生变化时，调用此方法更新渲染
   */
  updateCanvasTexture() {
    if (!this.maskTexture || typeof this.maskUrl == "string") {
      console.warn("[MaskTag] updateCanvasTexture only works for Canvas-based masks");
      return;
    }
    this.maskTexture instanceof g.CanvasTexture && (this.maskTexture.needsUpdate = !0, this.five.needsRender = !0, console.log("[MaskTag] Canvas texture updated"));
  }
  /**
   * 清理当前标签：从共享材质中删除本 tag 的样式槽，并更新材质；
   * 若该点位已无其他 tag 则销毁 mesh 并释放纹理。
   */
  disposeMaskResources() {
    if (this._disposed)
      return;
    this._disposed = !0, this.cleanupClickEvents();
    const e = this._sharedMeshKey, s = this.getColorKey();
    if (e) {
      const t = h.sharedMeshRegistry.get(e);
      t && (t.tagsByColorKey.delete(s), t.styleIndexByColorKey.delete(s), t.tagsByColorKey.size === 0 ? (t.mesh.parent && t.mesh.parent.remove(t.mesh), t.mesh.geometry.dispose(), t.mesh.material.dispose(), t.material.uniforms.mergedTexture.value.dispose(), h.releaseMaskTexture(t.maskSource), h.sharedMeshRegistry.delete(e)) : h.rebuildEntryMaterial(t));
    }
    this.maskMesh = void 0, this._sharedMeshKey = null, this.sharedStyleIndex = -1, this.maskTexture = void 0;
  }
  /**
   * 清理 MaskTag 特有的资源（公开方法）
   */
  dispose() {
    this.disposeMaskResources();
  }
  /**
   * 禁用标签（通过 style opacity=0 隐藏，不拆 mesh）
   */
  disable() {
    super.disable(), this.updateMaskStyle();
  }
  /**
   * 启用标签（恢复 style 展示）
   */
  enable() {
    super.enable(), this.updateMaskStyle();
  }
  /**
   * 销毁标签（重写父类方法）
   */
  destroy() {
    this.disposeMaskResources(), super.destroy();
  }
  /**
   * 清除所有点位共享 mesh（重新 load 数据前调用）
   */
  static clearSharedMeshRegistry() {
    h.sharedMeshRegistry.forEach((e) => {
      e.tagsByColorKey.forEach((s) => {
        s.maskMesh = void 0, s._sharedMeshKey = null, s.sharedStyleIndex = -1;
      }), e.mesh.parent && e.mesh.parent.remove(e.mesh), e.mesh.geometry.dispose(), e.mesh.material.dispose(), e.material.uniforms.mergedTexture.value.dispose(), h.releaseMaskTexture(e.maskSource);
    }), h.sharedMeshRegistry.clear();
  }
  /**
   * 将 style 列表写入材质（用于重建材质）
   */
  static writeStyleListToMaterial(e, s) {
    const t = s.length, o = 3, r = t * o, l = 1, n = new Float32Array(r * l * 4);
    s.forEach((u, p) => {
      const C = p * o, y = C * 4;
      n[y] = u.color[0] / 255, n[y + 1] = u.color[1] / 255, n[y + 2] = u.color[2] / 255, n[y + 3] = u.color[3];
      const f = (C + 1) * 4;
      n[f] = u.tolerance / 255, n[f + 1] = u.highlightColor[0] / 255, n[f + 2] = u.highlightColor[1] / 255, n[f + 3] = u.highlightColor[2] / 255;
      const M = (C + 2) * 4;
      n[M] = u.opacity;
    });
    const a = e.uniforms.mergedTexture.value, d = a.image;
    d.data = n, d.width = r, d.height = l, a.needsUpdate = !0, e.uniforms.groupCount.value = t, e.uniforms.textureWidth.value = r;
  }
  /**
   * destroy 后重建该点位材质，更新剩余 tag 的 styleIndex
   */
  static rebuildEntryMaterial(e) {
    const s = Array.from(e.tagsByColorKey.values()).sort((o, i) => o.sharedStyleIndex - i.sharedStyleIndex);
    if (s.length === 0)
      return;
    const t = s.map((o) => o.getStyleForMaterial());
    h.writeStyleListToMaterial(e.material, t), s.forEach((o, i) => {
      o.sharedStyleIndex = i, e.styleIndexByColorKey.set(`${o.targetColor[0]},${o.targetColor[1]},${o.targetColor[2]}`, i);
    });
  }
  /**
   * 获取 mask 的缓存 key
   * @param maskSource mask URL 或 Canvas
   * @returns 缓存 key
   */
  static getMaskCacheKey(e) {
    if (typeof e == "string")
      return e;
    {
      let s = h.canvasSymbolMap.get(e);
      return s || (s = Symbol("canvas-mask"), h.canvasSymbolMap.set(e, s)), s;
    }
  }
  /**
   * 加载 Mask 纹理（静态方法，支持缓存和引用计数）
   * @param maskSource mask 图片 URL 或 Canvas 元素
   * @returns Promise<THREE.Texture>
   */
  static loadMaskTexture(e) {
    return S(this, null, function* () {
      const s = h.getMaskCacheKey(e), t = h.maskTextureCache.get(s);
      if (t)
        return t.refCount++, t.texture;
      const o = performance.now(), i = new AbortController();
      try {
        let r;
        if (typeof e == "string") {
          const a = new g.TextureLoader();
          r = yield new Promise((d, u) => {
            if (i.signal.aborted) {
              u(new Error("Load aborted"));
              return;
            }
            a.load(
              e,
              (p) => {
                i.signal.aborted ? (p.dispose(), u(new Error("Load aborted"))) : d(p);
              },
              void 0,
              (p) => {
                u(p);
              }
            ), i.signal.addEventListener("abort", () => {
              u(new Error("Load aborted"));
            });
          });
        } else
          r = new g.CanvasTexture(e), r.needsUpdate = !0, console.log("[MaskTag] Created texture from canvas, size:", e.width, "x", e.height);
        r.wrapS = g.ClampToEdgeWrapping, r.wrapT = g.ClampToEdgeWrapping, r.minFilter = g.LinearFilter, r.magFilter = g.LinearFilter, r.anisotropy = 4, r instanceof g.CanvasTexture && (r.needsUpdate = !0), h.maskTextureCache.set(s, {
          texture: r,
          refCount: 1,
          abortController: i
        });
        const l = performance.now() - o, n = typeof e == "string" ? e.substring(0, 50) : "Canvas";
        if (console.log(`[MaskTag Performance] Texture loaded in ${l.toFixed(2)}ms, source: ${n}`), r.image) {
          const a = (r.image.width * r.image.height * 4 / 1048576).toFixed(2);
          console.log(`[MaskTag Memory] Texture size: ${r.image.width}x${r.image.height}, estimated memory: ${a}MB`);
        }
        return r;
      } catch (r) {
        throw console.error("[MaskTag] Failed to load mask texture:", typeof e == "string" ? e : "Canvas", r), r;
      }
    });
  }
  /**
   * 释放 Mask 纹理（静态方法）
   * @param maskSource mask 图片 URL 或 Canvas 元素
   */
  static releaseMaskTexture(e) {
    var o;
    const s = h.getMaskCacheKey(e), t = h.maskTextureCache.get(s);
    if (t && (t.refCount--, t.refCount <= 0)) {
      const i = typeof e == "string" ? e.substring(0, 50) : "Canvas";
      console.log(`[MaskTag Memory] Releasing texture (refCount=0): ${i}`), (o = t.abortController) == null || o.abort(), t.texture.dispose(), h.maskTextureCache.delete(s);
    }
  }
  /**
   * 获取当前缓存的纹理统计信息（用于性能监控和调试）
   * @returns 缓存统计信息
   */
  static getCacheStats() {
    let e = 0, s = 0;
    const t = [];
    return h.maskTextureCache.forEach((o, i) => {
      e += o.refCount;
      let r = 0;
      if (o.texture.image) {
        const n = o.texture.image.width || 0, a = o.texture.image.height || 0;
        r = n * a * 4 / (1024 * 1024), s += r;
      }
      const l = typeof i == "string" ? i.substring(0, 80) : "[Canvas]";
      t.push({
        source: l,
        refCount: o.refCount,
        sizeMB: parseFloat(r.toFixed(2))
      });
    }), {
      totalCached: h.maskTextureCache.size,
      totalRefCount: e,
      estimatedMemoryMB: parseFloat(s.toFixed(2)),
      cacheEntries: t
    };
  }
  /**
   * 强制清理所有缓存的纹理（用于内存管理，谨慎使用）
   * 注意：这会释放所有纹理，即使它们仍在使用中
   */
  static clearAllCache() {
    console.warn("[MaskTag] Clearing all texture cache"), h.maskTextureCache.forEach((e) => {
      var s;
      (s = e.abortController) == null || s.abort(), e.texture.dispose();
    }), h.maskTextureCache.clear();
  }
};
let b = h;
/**
 * Mask 纹理缓存（静态，所有 MaskTag 实例共享）
 * key: mask URL 或 canvas 的 symbol, value: { texture: THREE.Texture, refCount: number, abortController?: AbortController }
 */
x(b, "maskTextureCache", /* @__PURE__ */ new Map()), /**
 * Canvas 到 Symbol 的映射（用于缓存 canvas 纹理）
 */
x(b, "canvasSymbolMap", /* @__PURE__ */ new WeakMap()), /** 同点位共用 mesh：key = meshKey(panoIndex + maskKey), value = 共享数据 */
x(b, "sharedMeshRegistry", /* @__PURE__ */ new Map());
export {
  b as MaskTag
};
