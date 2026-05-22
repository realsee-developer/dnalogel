var I = Object.defineProperty;
var M = (p, h, t) => h in p ? I(p, h, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[h] = t;
var c = (p, h, t) => (M(p, typeof h != "symbol" ? h + "" : h, t), t);
import { BaseTag as R } from "./BaseTag.js";
import * as r from "three";
import { Line as U } from "@realsee/five/line";
import { anyPositionToVector3 as g } from "../../../shared-utils/positionToVector3.js";
import { transformPosition as D } from "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/Subscribe.js";
import "../../utils/tag/calculateTagConfig.js";
import "../../../vendor/object-assign-deep/objectAssignDeep.js";
import "../../../shared-utils/typescript/entries.js";
import "../../utils/tag/adaptConfig.js";
import "../../typings/tag/TagConfig.js";
import "@realsee/five";
import "../../../shared-utils/tag.js";
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
import "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../shared-utils/three/blink.js";
import "../../../vendor/animejs/lib/anime.es.js";
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
const P = new r.Vector2();
class yi extends R {
  constructor(t, e) {
    var o, i, n, s, a;
    super(t, e);
    c(this, "__Object__");
    c(this, "requestIdleCallbackId");
    // icon 与线条端点的固定像素间距
    c(this, "iconPixelGap", 10);
    // 优化：重用临时对象，避免频繁创建
    c(this, "_temp", {
      lineStart: new r.Vector3(),
      // 线条起点（project后会变成NDC）
      iconPos: new r.Vector3(),
      // icon位置（project后会变成NDC）
      screenDirPixel: new r.Vector2(),
      // 屏幕方向（normalize后会变成单位向量）
      targetNDC: new r.Vector2(),
      // 目标NDC坐标
      lineDir: new r.Vector3(),
      // 线条方向（计算w0时重用）
      lineEnd: new r.Vector3(),
      // 线条终点
      raycaster: new r.Raycaster()
      // 射线投射器
    });
    // 用于变化检测的缓存值
    c(this, "_lastUpdateCache", {
      position: [0, 0, 0],
      screenLeft: 0,
      screenTop: 0,
      scale: 1,
      visible: !1
    });
    if ((i = (o = e.style) == null ? void 0 : o.point) != null && i.width) {
      const d = (a = (s = (n = e.style) == null ? void 0 : n.point) == null ? void 0 : s.scale) != null ? a : 1;
      this.iconPixelGap = e.style.point.width * d * 1.4 / 2 + 2;
    }
    e.contentType === "Audio" && (this.iconPixelGap = 34 / 2 + 2), this.initialTagLine();
  }
  initialTagLine() {
    var n, s, a;
    const t = this.config;
    if (!this.five.renderer || !((n = t == null ? void 0 : t.tagNormalLineConfig) != null && n.enabled) || !this.normalLineLength)
      return;
    const e = this.five.renderer.getSize(P), o = this.five.renderer.getPixelRatio(), i = D(g(this.originPosition), this.plugin.workUtil.transform);
    this.tagNormalLine = new U(new r.Vector3().fromArray(this.position), i), this.tagNormalLine.points.visible = !1, this.tagNormalLine.setMaterial({
      color: new r.Vector3(1, 1, 1),
      linewidth: (a = (s = t == null ? void 0 : t.tagNormalLineConfig) == null ? void 0 : s.lineWidth) != null ? a : 1.2,
      dashed: !1
    }), this.tagNormalLine.line.material.transparent = !0, this.tagNormalLine.line.material.depthWrite = !1, this.tagNormalLine.line.material.depthTest = !0, this.tagNormalLine.line.material.dashed = !1, this.tagNormalLine.line.renderOrder = 2, this.tagNormalLine.setResolution(e.width * o, e.height * o), this.tagNormalLine.visible = !1, this.tagNormalLine.name = `tagNormalLine-${this.id}`, this.plugin.group.add(this.tagNormalLine);
  }
  /**
   * @description 展开自己，收起其他标签
   */
  unfoldAndFoldOthers() {
    if (this.isPopoverConfigEnabled())
      return;
    const t = this.can("fold"), e = this.can("unfold");
    t && e && (this.state.unfolded = !this.state.unfolded, this.manuallyOperated = !0, this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }), this.state.unfolded && this.plugin.tags.forEach((o) => {
      o.id !== this.id && o.fold();
    }));
  }
  onClick(t) {
    t.target === "TagPoint" && this.unfoldAndFoldOthers();
  }
  applyVisible() {
    var t, e;
    this.currentVisible && this.updateScreenPosition(), (t = this.tag3DContentSvelte) != null && t.css3DInstance && (this.tag3DContentSvelte.css3DInstance.visible = this.visible), (e = this.tag3DContentSvelte) == null || e.svelteApp.$set({
      state: this.plugin.state,
      temporaryState: this.temporaryState
    }), !this.tagNormalLine && this.normalLineLength && this.initialTagLine(), this.tagNormalLine && (this.tagNormalLine.visible = this.visible), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
  }
  unfold() {
    this.isPopoverConfigEnabled() || this.setUnfold(!0);
  }
  fold() {
    this.isPopoverConfigEnabled() || this.setUnfold(!1);
  }
  /**
   * @description 展开/收起指定id的标签
   * @param {boolean} unfolded
   */
  setUnfold(t) {
    if (this.isPopoverConfigEnabled())
      return;
    const e = this.can("fold"), o = this.can("unfold");
    e && o && (this.state.unfolded = t, this.hooks.emit(t ? "unfolded" : "folded"), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }));
  }
  setPosition(t) {
    this.originPosition = t, this.position = (() => {
      let e = g(t).toArray();
      if (this.normal && this.normalLineLength) {
        const o = this.computeNormal();
        e = new r.Vector3().fromArray(e).clone().add(o.clone().setLength(this.normalLineLength)).toArray();
      }
      return e;
    })(), this.cache.clear(), this._lastUpdateCache.position = [0, 0, 0], this.updateVisible(), this.updateScreenPosition(), this.updateZIndex(), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
  }
  /**
   * 更新标签连线的位置，使其端点与icon保持固定像素距离
   * 使用屏幕空间反投影方法，确保任意视角下都保持固定像素距离
   */
  updateTagNormalLinePosition(t) {
    var b, L, x, C, N, S, T;
    if (!this.screenPosition || !this.tagNormalLine)
      return;
    const { force: e = !1 } = t != null ? t : {};
    if (!(e ? this.state.visible : this.currentVisible)) {
      this.tagNormalLine.visible = !1;
      return;
    }
    const i = this._lastUpdateCache;
    if (!(this.visible !== i.visible)) {
      const u = Math.abs(this.position[0] - i.position[0]) > 1e-3 || Math.abs(this.position[1] - i.position[1]) > 1e-3 || Math.abs(this.position[2] - i.position[2]) > 1e-3, E = Math.abs(((b = this.screenPosition.leftPx) != null ? b : 0) - i.screenLeft) > 0.5 || Math.abs(((L = this.screenPosition.topPx) != null ? L : 0) - i.screenTop) > 0.5 || Math.abs(((x = this.screenPosition.scale) != null ? x : 1) - i.scale) > 2e-3;
      if (!u && !E)
        return;
    }
    if (i.position = new r.Vector3().fromArray(this.position).toArray(), i.screenLeft = (C = this.screenPosition.leftPx) != null ? C : 0, i.screenTop = (N = this.screenPosition.topPx) != null ? N : 0, i.scale = (S = this.screenPosition.scale) != null ? S : 1, i.visible = this.visible, !this.five.renderer)
      return;
    const s = this.five.renderer.getSize(P), a = D(
      g(this.originPosition),
      this.plugin.workUtil.transform
    ).toArray();
    this._temp.lineStart.fromArray(a), this._temp.iconPos.fromArray(this.position), this._temp.lineStart.project(this.five.camera), this._temp.iconPos.project(this.five.camera), this._temp.screenDirPixel.set(
      (this._temp.iconPos.x - this._temp.lineStart.x) * s.x / 2,
      (this._temp.iconPos.y - this._temp.lineStart.y) * s.y / 2
    );
    const d = this._temp.screenDirPixel.length();
    this._temp.screenDirPixel.normalize();
    const m = this.iconPixelGap * ((T = this.screenPosition.scale) != null ? T : 1);
    this._temp.targetNDC.set(
      (this._temp.iconPos.x * s.x / 2 - this._temp.screenDirPixel.x * m) / (s.x / 2),
      (this._temp.iconPos.y * s.y / 2 - this._temp.screenDirPixel.y * m) / (s.y / 2)
    ), this._temp.raycaster.setFromCamera(this._temp.targetNDC, this.five.camera);
    const l = this._temp.raycaster.ray;
    this._temp.lineStart.fromArray(a), this._temp.iconPos.fromArray(this.position), this._temp.lineDir.copy(this._temp.iconPos).sub(this._temp.lineStart).normalize(), this._temp.lineEnd.copy(l.origin).sub(this._temp.lineStart);
    const A = l.direction.dot(l.direction), f = l.direction.dot(this._temp.lineDir), _ = this._temp.lineDir.dot(this._temp.lineDir), w = l.direction.dot(this._temp.lineEnd), V = this._temp.lineDir.dot(this._temp.lineEnd), y = A * _ - f * f;
    let v = 0;
    Math.abs(y) > 1e-4 && (v = (f * V - _ * w) / y), this._temp.lineEnd.copy(l.origin).add(l.direction.multiplyScalar(Math.max(0, v)));
    const k = this._temp.lineStart.distanceTo(this._temp.iconPos);
    if (this._temp.lineStart.distanceTo(this._temp.lineEnd) > k) {
      const u = Math.max(0, 1 - m / d);
      this._temp.lineEnd.copy(this._temp.lineStart).lerp(this._temp.iconPos, u);
    }
    this.tagNormalLine.setPoints(this._temp.lineStart, this._temp.lineEnd), this.tagNormalLine.visible = !0;
  }
  updateScreenPosition(t) {
    var s;
    if (this.stickType !== "2DPoint" && this.stickType !== "3DPoint")
      return;
    const { force: e = !1 } = t != null ? t : {}, o = e ? this.state.visible : this.currentVisible, i = (s = this.__Object__) != null ? s : {
      timeoutId: void 0,
      inAnimation: !1
    };
    if (this.__Object__ = i, !o && this.screenPosition ? (i.inAnimation = !0, i.timeoutId = setTimeout(() => {
      requestAnimationFrame(() => {
        this.currentVisible || (i.inAnimation = !1, this.screenPosition = null, this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }));
      });
    }, 1e3)) : i.timeoutId && (clearTimeout(i.timeoutId), i.inAnimation = !1, i.timeoutId = void 0), !o && !i.inAnimation)
      return;
    const n = this.computeTagProject();
    if (n && this.five.renderer) {
      const a = this.getDistance(void 0, 1), d = (() => {
        if (!this.currentConfig.simulate3D)
          return 1;
        const l = 2 * Math.tan(0.5 * this.five.camera.fov / 180 * Math.PI);
        return Math.max(Math.min(1 - l * a / 40, 1), 0.7);
      })(), m = this.five.renderer.getSize(P);
      this.screenPosition = {
        leftPx: (n.x + 1) / 2 * m.x,
        topPx: (-n.y + 1) / 2 * m.y,
        scale: d
      }, this.updateTagNormalLinePosition({ force: t == null ? void 0 : t.force });
    } else
      this.screenPosition = null;
    this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
  }
  set(t, e = !0) {
    var o, i, n;
    super.set(t, e), this.normalLineLength = (n = (i = (o = t.style) == null ? void 0 : o.point) == null ? void 0 : i.normalLen) != null ? n : 0, this._lastUpdateCache.position = [0, 0, 0], this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }), t.position && this.setPosition(this.position);
  }
  setData(...t) {
    super.setData(...t), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
  }
  updateUnfoldedByPanoIndex() {
    if (this.isPopoverConfigEnabled())
      return;
    const t = this.getUnfoldedByPanoIndex();
    if (this.state && (t !== void 0 && (this.state.unfolded = t), t && !this.state.visible)) {
      const e = this.getConfig();
      typeof e.unfoldedConfig == "object" && e.unfoldedConfig.autoFoldWhenHide !== !1 && (this.state.unfolded = !1);
    }
  }
  computeNormal() {
    return new r.Vector3().fromArray(this.normal);
  }
  removeTagNormalLine() {
    this.tagNormalLine && (this.plugin.group.remove(this.tagNormalLine), this.tagNormalLine = null);
  }
  /**
   * @description 获取额外的闪烁目标，包括法线（如果有）
   */
  getAdditionalBlinkTargets() {
    var t;
    return (t = this.tagNormalLine) != null && t.line ? this.tagNormalLine.line : null;
  }
}
export {
  yi as PointTag
};
