var P = Object.defineProperty;
var b = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var S = (a, p, t) => p in a ? P(a, p, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[p] = t, y = (a, p) => {
  for (var t in p || (p = {}))
    E.call(p, t) && S(a, t, p[t]);
  if (b)
    for (var t of b(p))
      B.call(p, t) && S(a, t, p[t]);
  return a;
};
var f = (a, p, t) => (S(a, typeof p != "symbol" ? p + "" : p, t), t);
var g = (a, p, t) => new Promise((i, o) => {
  var e = (n) => {
    try {
      l(t.next(n));
    } catch (h) {
      o(h);
    }
  }, s = (n) => {
    try {
      l(t.throw(n));
    } catch (h) {
      o(h);
    }
  }, l = (n) => n.done ? i(n.value) : Promise.resolve(n.value).then(e, s);
  l((t = t.apply(a, p)).next());
});
import { BaseTag as z } from "./BaseTag.js";
import * as r from "three";
import { Sculpt as T } from "../../../Sculpt/index.js";
import { Box as D } from "../../../Sculpt/Objects/Box/index.js";
import "../../../shared-utils/tag.js";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { anyPositionToVector3 as u } from "../../../shared-utils/positionToVector3.js";
import "@realsee/five/line";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../shared-utils/three/blink.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../vendor/earcut/src/earcut.js";
import { transformPosition as x } from "../../../shared-utils/five/transformPosition.js";
import { uuid as M } from "../../../shared-utils/uuid.js";
import "../../../shared-utils/five/FivePuppet.js";
import { getBoxCorners as A, applyMatrixToPoints as F } from "../../utils/tagPosition.js";
import { sculptDataToBoxPosition as U } from "../../utils/sculptDataToBoxPosition.js";
import "../../../shared-utils/Subscribe.js";
import "../../utils/tag/calculateTagConfig.js";
import "../../../vendor/object-assign-deep/objectAssignDeep.js";
import "../../../shared-utils/typescript/entries.js";
import "../../utils/tag/adaptConfig.js";
import "../../typings/tag/TagConfig.js";
import "@realsee/five";
import "../../../shared-utils/five/mode.js";
import "../../utils/tag/format.js";
import "../../../shared-utils/url/defaultUrls.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/util.js";
import "../../../shared-utils/isNil.js";
import "../../../shared-utils/vectorToCoordinate.js";
import "../../../shared-utils/formatRad.js";
import "../../../shared-utils/five/lookPoint.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../utils/checkRange.js";
import "../../utils/tag/tagCheck.js";
import "../../../shared-utils/url/getUrl.js";
import "../../../shared-utils/five/getFloorIndex.js";
import "../../../shared-utils/safeObj.js";
import "../../utils/Cache.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/three/core/Raycaster.js";
import "../../../shared-utils/promise/withResolvers.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/five/fiveEveryReadyListener.js";
import "../../../shared-utils/throttle.js";
import "../../../shared-utils/five/fiveModelLoad.js";
import "../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../shared-utils/even.js";
import "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../shared-utils/CSS3DRender/index.js";
import "../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../shared-utils/createResizeObserver.js";
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
import "../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../Sculpt/utils/three/rayOnLine.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../../Sculpt/utils/Modules/Global.js";
import "../../../Sculpt/utils/Modules/Cursor.js";
import "../../../Sculpt/utils/Modules/DeleteButtonBgBorder.js";
import "../../../Sculpt/utils/Modules/DeleteIconSVG.js";
import "../../../Object3DHelperPlugin/Controller.js";
import "../../../base/BasePlugin.js";
import "../../../shared-utils/Object3DHelper/Helper/MoveHelper.js";
import "../../../shared-utils/Object3DHelper/Base/BaseHelper.js";
import "../../../shared-utils/Object3DHelper/utils/setObjectQuaternion.js";
import "../../../shared-utils/three/boundingBox.js";
import "../../../shared-utils/Object3DHelper/Helper/Objects/ArrowGroup.js";
import "../../../shared-utils/Object3DHelper/utils/direction.js";
import "../../../shared-utils/Object3DHelper/Constants/RenderOrder.js";
import "../../../shared-utils/Object3DHelper/Helper/Objects/CenterHandle.js";
import "../../../shared-utils/Object3DHelper/Constants/color.js";
import "../../../shared-utils/Object3DHelper/utils/calculateScaleByCamera.js";
import "../../../shared-utils/Object3DHelper/utils/getPoseFromCamera.js";
import "../../../shared-utils/clamp.js";
import "../../../shared-utils/Object3DHelper/utils/getOrthographicCameraDirection.js";
import "../../../shared-utils/Object3DHelper/Helper/RotateHelper.js";
import "../../../shared-utils/Object3DHelper/Helper/HTML/tipsDom.js";
import "../../../shared-utils/Object3DHelper/Helper/HTML/utils/createElement.js";
import "../../../shared-utils/Object3DHelper/Helper/CSS3DScaleHelper.js";
import "../../../shared-utils/Object3DHelper/Helper/HTML/rectangleScaleDom.js";
import "../../../shared-utils/Object3DHelper/utils/cameraHooks.js";
import "../../../shared-utils/Object3DHelper/Helper/BoundingBoxHelper.js";
import "../../../shared-utils/Object3DHelper/Controller/MoveController.js";
import "../../../shared-utils/Object3DHelper/Base/BaseController.js";
import "../../../shared-utils/Object3DHelper/utils/solidGuide.js";
import "../../../shared-utils/Object3DHelper/utils/getMouseRaycaster.js";
import "../../../shared-utils/Object3DHelper/utils/calculateThreeMouse.js";
import "../../../Object3DHelperPlugin/FiveControllerWrapper.js";
import "../../../shared-utils/Object3DHelper/index.js";
import "../../../shared-utils/Object3DHelper/Controller/RotateController.js";
import "../../../shared-utils/math/rad2Deg.js";
import "../../../shared-utils/math/deg2Rad.js";
import "../../../shared-utils/Object3DHelper/Controller/CSS3DScaleController.js";
import "../../../shared-utils/Object3DHelper/Controller/RectangleScaleController.js";
import "../../../shared-utils/three/vectorIsEqual.js";
import "../../../shared-utils/Object3DHelper/Controller/BoundingBoxController.js";
import "../../../shared-utils/Object3DHelper/Helper/ScaleHelper.js";
import "../../../shared-utils/Object3DHelper/Controller/ScaleController.js";
import "../../../shared-utils/three/getNormal.js";
import "../../../shared-utils/threex/domevents/index.js";
import "../../../shared-utils/five/FiveDomEvents.js";
import "../../../shared-utils/five/calculateThreeMouse.js";
import "../../../shared-utils/three/recurveFindObject.js";
import "../../../Sculpt/Objects/Polyline/index.js";
import "../../../Sculpt/Meshes/Polyline.js";
import "../../../Sculpt/Meshes/LineWithDots.js";
import "../../../Sculpt/Meshes/Point.js";
import "../../../shared-utils/three/closeVectors.js";
import "../../../Sculpt/Objects/Base/index.js";
import "../../../vendor/hotkeys-js/dist/hotkeys.esm.js";
import "../../../Sculpt/Objects/Polyline/Editor.js";
import "../../../Sculpt/Objects/Line/Editor.js";
import "../../../Sculpt/Objects/Base/Editor.js";
import "../../../shared-utils/three/vector3ToArray.js";
import "../../../Sculpt/Objects/Point/index.js";
import "../../../Sculpt/Objects/Point/Editor.js";
import "../../../Sculpt/Objects/Polygon/index.js";
import "../../../Sculpt/Meshes/Area.js";
import "../../../Sculpt/Meshes/PolygonWithEdge.js";
import "../../../Sculpt/Meshes/Polygon.js";
import "../../../shared-utils/three/generatePolygonGeometry.js";
import "../../../shared-utils/three/earcut3D.js";
import "../../../PanoMeasurePlugin/utils/isIntersecting.js";
import "../../../Sculpt/utils/three/ColoredMesh.js";
import "../../../shared-utils/three/geometryUtil.js";
import "../../../Sculpt/Objects/Polygon/Editor.js";
import "../../../Sculpt/utils/isIntersecting.js";
import "../../../Sculpt/Objects/Prism/index.js";
import "../../../Sculpt/Meshes/Prism.js";
import "../../../shared-utils/three/core/PrismGeometry.js";
import "../../../shared-utils/three/core/polygonVertex.js";
import "../../../shared-utils/three/core/PrismAnimationGeometry.js";
import "../../../Sculpt/Editors/PrismMeshEditor.js";
import "../../../Sculpt/Objects/Rectangle/index.js";
import "../../../Sculpt/Editors/RectangleMeshEditor.js";
import "../../../Sculpt/Meshes/Rectangle.js";
import "../../../Sculpt/utils/three/RectangleGeometry.js";
import "../../../Sculpt/Meshes/RectangleWithEdge.js";
import "../../../Sculpt/utils/sortPositionsByCameraPosition.js";
import "../../../Sculpt/Objects/Circle/index.js";
import "../../../Sculpt/Editors/CircleMeshEditor.js";
import "../../../Sculpt/Meshes/CircleWithEdge.js";
import "../../../Sculpt/Meshes/Circle.js";
import "../../../Sculpt/utils/radiusToSegments.js";
import "../../../Sculpt/Objects/Cylinder/index.js";
import "../../../Sculpt/Meshes/Cylinder.js";
import "../../../Sculpt/Editors/CylinderMeshEditor.js";
import "../../../shared-utils/forReverseEach.js";
import "../../../Sculpt/Objects/Line/index.js";
import "../../../Sculpt/Editors/BoxMeshEditor.js";
import "../../../Sculpt/Meshes/Box.js";
class ne extends z {
  constructor(t, i) {
    super(t, i);
    f(this, "tagStyle");
    f(this, "clickEventDispose");
    f(this, "domClickDispose");
    f(this, "screenPosition", null);
    this.tagStyle = i.style, this.initializeSculptBox(), this.updateVisible();
  }
  /**
   * 获取 Box 样式配置（合并用户配置和默认值）
   */
  getBoxStyle() {
    var i, o, e, s;
    const t = ((i = this.tagStyle) == null ? void 0 : i.boxOrPolygon) || {};
    return {
      color: (o = t.color) != null ? o : 16777215,
      opacity: (e = t.opacity) != null ? e : 0.4,
      lineColor: (s = t.color) != null ? s : 16777215,
      lineWidth: 1
    };
  }
  /**
   * 更新 Box 样式
   */
  updateBoxStyle() {
    if (!this.boxShape || !this.boxShape.boxMesh)
      return;
    const t = this.getBoxStyle();
    this.boxShape.boxMesh.setStyle(t);
  }
  /**
   * 更新标签数据
   */
  set(t, i = !0) {
    super.set(t, i), t.style && (this.tagStyle = y(y({}, this.tagStyle), t.style)), t.position && (this.boxShape ? this.updateSculptBox() : this.initializeSculptBox()), t.style && this.boxShape && this.updateBoxStyle();
  }
  /**
   * 设置标签数据
   */
  setData(...t) {
    super.setData(...t);
  }
  /**
   * 获取盒子的中心点
   */
  getCenter() {
    const t = this.position;
    if (!(t != null && t.start) || !(t != null && t.end))
      return [0, 0, 0];
    const i = t.end.map((h) => Number(h)), o = t.start.map((h) => Number(h)), e = i[0] / 2 + o[0] / 2, s = i[1] / 2 + o[1] / 2, l = i[2] / 2 + o[2] / 2, n = new r.Vector3(e, s, l);
    return x(n, this.workUtil.transform).toArray();
  }
  /**
   * 获取盒子的8个角点坐标
   */
  getCorners() {
    if (this.boxShape) {
      const t = this.boxShape.data, i = t.points.map((s) => u(s)), o = new r.Vector3().subVectors(
        u(t.heightPoint),
        i[0]
      ), e = i.map((s) => s.clone().add(o));
      return [...i, ...e];
    }
    return [];
  }
  /**
   * 计算盒子的法向量
   */
  computeNormal() {
    const t = this.position;
    if (!t.rotation)
      return new r.Vector3(0, 1, 0);
    const i = new r.Euler().fromArray(t.rotation), o = new r.Vector3(0, 1, 0);
    return o.applyEuler(i), o;
  }
  /**
   * 初始化 Sculpt Box
   */
  initializeSculptBox() {
    if (this.boxShape)
      return;
    const t = this.position;
    if (!(t != null && t.start) || !(t != null && t.end) || !(t != null && t.rotation))
      return;
    const i = new T(this.five, void 0, {
      magnifier: null
    });
    i.clear(), i.group.removeFromParent();
    const o = this.boxPositionToSculptData(t), e = this.getBoxStyle(), s = new D(
      {
        id: M(),
        type: "Box",
        points: o.bottomPoints,
        heightPoint: o.heightPoint,
        style: e
      },
      {
        defaultAction: !1,
        occlusionVisibility: !1
        // occlusionMode: 'translucence' as any,
      }
    );
    s.visible = this.visible, this.plugin.imagePlaneGroup.add(s), this.boxShape = s, s.editor.hooks.on("objectUpdate", () => {
      this.syncBoxPositionFromSculpt();
    }), s.editor.disable(), this.setupClickEvents();
  }
  /**
   * 设置点击事件
   */
  setupClickEvents() {
    var i;
    if (!this.boxShape || !this.boxShape.boxMesh || this.config.clickable === !1) {
      console.warn(
        `[BoxTag ${this.id}] Cannot setup click events: boxShape=${!!this.boxShape}, boxMesh=${!!((i = this.boxShape) != null && i.boxMesh)}, clickable=${this.config.clickable}`
      );
      return;
    }
    this.cleanupClickEvents();
    const t = (o) => {
      this.plugin.hooks.emit("click", { event: o, target: "TagBoxModel", tag: this });
    };
    requestAnimationFrame(() => {
      if (!this.boxShape || !this.plugin.domEvents) {
        console.warn(`[BoxTag ${this.id}] Cannot bind click events: boxShape or domEvents not available`);
        return;
      }
      this.clickEventDispose = this.addObjectClickHandler(this, this.boxShape, t);
    });
  }
  /**
   * 清理点击事件
   */
  cleanupClickEvents() {
    this.clickEventDispose && (this.clickEventDispose(), this.clickEventDispose = void 0);
  }
  /**
   * 更新 Sculpt Box 的数据
   */
  updateSculptBox() {
    if (!this.boxShape)
      return;
    const t = this.position;
    if (!(t != null && t.start) || !(t != null && t.end) || !(t != null && t.rotation))
      return;
    const i = this.boxPositionToSculptData(t);
    this.boxShape.setData({
      points: i.bottomPoints.map((o) => o.toArray()),
      heightPoint: i.heightPoint.toArray()
    }), this.setupClickEvents();
  }
  /**
   * 启用编辑器
   * 用于编辑已存在的 Box
   */
  editorEnable() {
    return g(this, null, function* () {
      if (!this.position) {
        console.warn("[BoxTag] Cannot enable editor without position. Call startDrawing() first.");
        return;
      }
      this.boxShape || this.initializeSculptBox(), this.boxShape && (this.boxShape.visible = !0, this.boxShape.editor.enable());
    });
  }
  /**
   * 禁用编辑器
   */
  editorDisable() {
    this.boxShape && this.boxShape.editor.disable();
  }
  /**
   * 从 Sculpt Box 同步 position 到 BoxTag
   */
  syncBoxPositionFromSculpt() {
    if (!this.boxShape)
      return;
    const t = this.boxShape.data, i = t.points.map((s) => u(s)), o = u(t.heightPoint), e = U(i, o);
    this.position = e, this.hooks.emit("positionChanged", e);
  }
  /**
   * 将 BoxPosition 转换为 Sculpt 需要的数据格式
   */
  boxPositionToSculptData(t) {
    const i = u(t.start), o = u(t.end), e = new r.Euler().fromArray(t.rotation), s = new r.Vector3((i.x + o.x) / 2, (i.y + o.y) / 2, (i.z + o.z) / 2), l = new r.Vector3(Math.abs(o.x - i.x) / 2, Math.abs(o.y - i.y) / 2, Math.abs(o.z - i.z) / 2), n = new r.Matrix4().makeRotationFromEuler(e), h = [
      new r.Vector3(-0.5, -0.5, -0.5),
      new r.Vector3(0.5, -0.5, -0.5),
      new r.Vector3(0.5, -0.5, 0.5),
      new r.Vector3(-0.5, -0.5, 0.5)
    ], d = new r.Vector3(-0.5, 0.5, -0.5), c = l.clone().multiplyScalar(2), m = this.workUtil.transform, v = h.map((V) => {
      const C = V.clone().multiply(c).applyMatrix4(n).add(s);
      return x(C, m);
    }), w = d.clone().multiply(c).applyMatrix4(n).add(s), k = x(w, m);
    return { bottomPoints: v, heightPoint: k };
  }
  /**
   * @description 点击事件处理
   */
  onClick(t) {
    t.target === "TagBoxModel" && this.unfoldAndFoldOthers();
  }
  /**
   * @description 展开自己，收起其他标签
   */
  unfoldAndFoldOthers() {
    if (this.isPopoverConfigEnabled())
      return;
    const t = this.can("fold"), i = this.can("unfold");
    t && i && (this.state.unfolded = !this.state.unfolded, this.manuallyOperated = !0, this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }), this.state.unfolded && this.plugin.tags.forEach((o) => {
      o.id !== this.id && o.fold();
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
  setUnfold(t) {
    if (this.isPopoverConfigEnabled())
      return;
    const i = this.can("fold"), o = this.can("unfold");
    i && o && (this.state.unfolded = t, this.hooks.emit(t ? "unfolded" : "folded"), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }));
  }
  /**
   * 更新屏幕位置（用于在 2D UI 中显示内容）
   * 显示在 Box 最右侧的顶点位置
   */
  updateScreenPosition() {
    if (!this.currentVisible) {
      this.screenPosition = null, this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
      return;
    }
    const i = this.position;
    if (!(i != null && i.start) || !(i != null && i.end)) {
      this.screenPosition = null, this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
      return;
    }
    const o = new r.Vector3().fromArray(i.start), e = new r.Vector3().fromArray(i.end), s = new r.Euler().fromArray(i.rotation), l = [
      new r.Vector3(o.x, o.y, o.z),
      new r.Vector3(e.x, o.y, o.z),
      new r.Vector3(o.x, e.y, o.z),
      new r.Vector3(e.x, e.y, o.z),
      new r.Vector3(o.x, o.y, e.z),
      new r.Vector3(e.x, o.y, e.z),
      new r.Vector3(o.x, e.y, e.z),
      new r.Vector3(e.x, e.y, e.z)
    ], n = new r.Vector3().addVectors(o, e).multiplyScalar(0.5), h = this.workUtil.transform;
    l.forEach((m) => {
      m.sub(n).applyEuler(s).add(n), m.copy(x(m, h));
    });
    let d = l[0];
    l.forEach((m) => {
      m.x > d.x && (d = m);
    });
    const c = d.clone().project(this.five.camera);
    if (c.x < -1 || c.x > 1 || c.y < -1 || c.y > 1 || c.z < 0 || c.z > 1)
      this.screenPosition = null;
    else if (this.five.renderer) {
      const m = this.five.renderer.getSize(new r.Vector2());
      this.screenPosition = {
        leftPx: (c.x + 1) / 2 * m.x,
        topPx: (-c.y + 1) / 2 * m.y,
        scale: 1
      };
    }
    this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
  }
  get centerPosition() {
    const t = A(this.position, this.workUtil.transform), i = F(t, this.matrix);
    let o = i[0];
    return i.forEach((e) => {
      e.x > o.x && (o = e);
    }), o;
  }
  /**
   * 应用可见性变化
   */
  applyVisible() {
    var t;
    this.boxShape && (this.plugin.imagePlaneGroup.children.includes(this.boxShape) || (console.warn(`[BoxTag ${this.id}] applyVisible: boxShape not in imagePlaneGroup, re-adding...`, {
      boxShapeParent: ((t = this.boxShape.parent) == null ? void 0 : t.name) || "null",
      imagePlaneGroupChildren: this.plugin.imagePlaneGroup.children.length
    }), this.boxShape.parent && this.boxShape.parent.remove(this.boxShape), this.plugin.imagePlaneGroup.add(this.boxShape)), this.boxShape.visible = this.visible), this.updateScreenPosition();
  }
  /**
   * 销毁标签
   */
  dispose() {
    this.cleanupClickEvents(), this.domClickDispose && (this.domClickDispose(), this.domClickDispose = void 0), this.boxShape && (this.boxShape.removeFromParent(), this.boxShape = void 0);
  }
}
export {
  ne as BoxTag
};
