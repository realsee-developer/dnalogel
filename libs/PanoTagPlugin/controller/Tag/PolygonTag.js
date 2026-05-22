var f = Object.defineProperty;
var y = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var g = (l, r, t) => r in l ? f(l, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[r] = t, d = (l, r) => {
  for (var t in r || (r = {}))
    S.call(r, t) && g(l, t, r[t]);
  if (y)
    for (var t of y(r))
      P.call(r, t) && g(l, t, r[t]);
  return l;
};
var c = (l, r, t) => (g(l, typeof r != "symbol" ? r + "" : r, t), t);
var u = (l, r, t) => new Promise((o, i) => {
  var e = (s) => {
    try {
      n(t.next(s));
    } catch (h) {
      i(h);
    }
  }, p = (s) => {
    try {
      n(t.throw(s));
    } catch (h) {
      i(h);
    }
  }, n = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(e, p);
  n((t = t.apply(l, r)).next());
});
import { BaseTag as v } from "./BaseTag.js";
import * as a from "three";
import { Sculpt as C } from "../../../Sculpt/index.js";
import { Polygon as b } from "../../../Sculpt/Objects/Polygon/index.js";
import "../../../shared-utils/tag.js";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { anyPositionToVector3 as m } from "../../../shared-utils/positionToVector3.js";
import "@realsee/five/line";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../shared-utils/three/blink.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../vendor/earcut/src/earcut.js";
import { uuid as k } from "../../../shared-utils/uuid.js";
import "../../../shared-utils/five/FivePuppet.js";
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
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/five/lookPoint.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../utils/tagPosition.js";
import "../../utils/tag/tagCheck.js";
import "../../utils/checkRange.js";
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
import "../../../Sculpt/Objects/Prism/index.js";
import "../../../Sculpt/Meshes/Prism.js";
import "../../../Sculpt/utils/three/ColoredMesh.js";
import "../../../shared-utils/three/core/PrismGeometry.js";
import "../../../shared-utils/three/core/polygonVertex.js";
import "../../../shared-utils/three/earcut3D.js";
import "../../../shared-utils/three/core/PrismAnimationGeometry.js";
import "../../../shared-utils/three/geometryUtil.js";
import "../../../Sculpt/Editors/PrismMeshEditor.js";
import "../../../Sculpt/Meshes/Area.js";
import "../../../Sculpt/Meshes/PolygonWithEdge.js";
import "../../../Sculpt/Meshes/Polygon.js";
import "../../../shared-utils/three/generatePolygonGeometry.js";
import "../../../PanoMeasurePlugin/utils/isIntersecting.js";
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
import "../../../Sculpt/Objects/Box/index.js";
import "../../../Sculpt/Editors/BoxMeshEditor.js";
import "../../../Sculpt/Meshes/Box.js";
import "../../../shared-utils/forReverseEach.js";
import "../../../Sculpt/Objects/Line/index.js";
import "../../../Sculpt/Objects/Polygon/Editor.js";
import "../../../Sculpt/utils/isIntersecting.js";
class Ji extends v {
  constructor(t, o) {
    super(t, o);
    c(this, "tagStyle");
    c(this, "clickEventDispose");
    c(this, "domClickDispose");
    c(this, "screenPosition", null);
    this.tagStyle = o.style, this.initializeSculptPolygon(), this.updateVisible();
  }
  /**
   * 获取 Polygon 样式配置（合并用户配置和默认值）
   */
  getPolygonStyle() {
    var o, i, e, p, n, s;
    const t = ((o = this.tagStyle) == null ? void 0 : o.boxOrPolygon) || {};
    return {
      color: (i = t.color) != null ? i : 16777215,
      opacity: (e = t.opacity) != null ? e : 0.4,
      lineColor: (n = (p = t.lineColor) != null ? p : t.color) != null ? n : 16777215,
      lineWidth: (s = t.lineWidth) != null ? s : 1
    };
  }
  /**
   * 更新 Polygon 样式
   */
  updatePolygonStyle() {
    if (!this.polygonShape || !this.polygonShape.areaMesh)
      return;
    const t = this.getPolygonStyle();
    this.polygonShape.areaMesh.setStyle(t);
  }
  /**
   * 更新标签数据
   */
  set(t, o = !0) {
    super.set(t, o), t.style && (this.tagStyle = d(d({}, this.tagStyle), t.style)), t.position && (this.polygonShape ? this.updateSculptPolygon() : this.initializeSculptPolygon()), t.style && this.polygonShape && this.updatePolygonStyle();
  }
  /**
   * 获取多边形的所有角点（世界坐标）
   */
  getCorners() {
    return this.polygonShape ? this.polygonShape.areaMesh.points.map((t) => t.clone()) : [];
  }
  getCenter() {
    const t = this.originPosition;
    if (!t || t.length === 0)
      return [0, 0, 0];
    const o = new a.Vector3();
    return t.forEach((i) => {
      o.add(m(i));
    }), o.divideScalar(t.length), o.toArray();
  }
  /**
   * 计算多边形的法向量
   * 使用前三个点来计算平面的法向量
   */
  computeNormal() {
    const t = this.position;
    if (!t || t.length < 3)
      return new a.Vector3(0, 1, 0);
    const o = m(t[0]), i = m(t[1]), e = m(t[2]), p = new a.Vector3().subVectors(i, o), n = new a.Vector3().subVectors(e, o);
    return new a.Vector3().crossVectors(p, n).normalize();
  }
  /**
   * 初始化 Sculpt Polygon
   */
  initializeSculptPolygon() {
    var n, s;
    if (this.polygonShape || ((s = (n = this.getConfig()) == null ? void 0 : n.__experimental_PolygonMeshConfig) == null ? void 0 : s.enabled) === !1)
      return;
    const t = this.position;
    if (!t || t.length < 3)
      return;
    const o = new C(this.five, void 0, {
      magnifier: null
    });
    o.clear(), o.group.removeFromParent();
    const i = t.map((h) => m(h)), e = this.getPolygonStyle(), p = new b(
      {
        id: k(),
        type: "Polygon",
        points: i,
        style: e
      },
      {
        defaultAction: !1,
        occlusionVisibility: !0,
        occlusionMode: "depthTest"
      }
    );
    p.visible = this.visible, this.plugin.imagePlaneGroup.add(p), this.polygonShape = p, p.editor.hooks.on("objectUpdate", () => {
      this.syncPolygonPositionFromSculpt();
    }), p.editor.disable(), this.setupClickEvents();
  }
  /**
   * 设置点击事件
   */
  setupClickEvents() {
    if (!this.polygonShape || this.config.clickable === !1) {
      console.warn(
        `[PolygonTag ${this.id}] Cannot setup click events: polygonShape=${!!this.polygonShape}, clickable=${this.config.clickable}`
      );
      return;
    }
    this.cleanupClickEvents();
    const t = (o) => {
      this.plugin.hooks.emit("click", { event: o, target: "TagPolygonModel", tag: this });
    };
    requestAnimationFrame(() => {
      if (!this.polygonShape || !this.plugin.domEvents) {
        console.warn(`[PolygonTag ${this.id}] Cannot bind click events: polygonShape or domEvents not available`);
        return;
      }
      this.clickEventDispose = this.addObjectClickHandler(this, this.polygonShape, t);
    });
  }
  /**
   * 清理点击事件
   */
  cleanupClickEvents() {
    this.clickEventDispose && (this.clickEventDispose(), this.clickEventDispose = void 0);
  }
  /**
   * 更新 Sculpt Polygon 的数据
   */
  updateSculptPolygon() {
    if (!this.polygonShape)
      return;
    const t = this.position;
    if (!t || t.length < 3)
      return;
    const o = t.map((i) => m(i));
    this.polygonShape.setData({
      points: o.map((i) => i.toArray()),
      style: this.getPolygonStyle()
    }), this.setupClickEvents();
  }
  /**
   * 启用编辑器
   * 用于编辑已存在的 Polygon
   */
  editorEnable() {
    return u(this, null, function* () {
      if (!this.position) {
        console.warn("[PolygonTag] Cannot enable editor without position. Call startDrawing() first.");
        return;
      }
      this.polygonShape || this.initializeSculptPolygon(), this.polygonShape && (this.polygonShape.visible = !0, this.polygonShape.editor.enable());
    });
  }
  /**
   * 禁用编辑器
   */
  editorDisable() {
    this.polygonShape && this.polygonShape.editor.disable();
  }
  /**
   * 同步 Sculpt Polygon 的数据到 PolygonPosition
   */
  syncPolygonPositionFromSculpt() {
    if (!this.polygonShape)
      return;
    const i = this.polygonShape.data.points.map((e) => m(e)).map((e) => e.toArray());
    this.position = i, this.hooks.emit("positionChanged", i);
  }
  /**
   * @description 点击事件处理
   */
  onClick(t) {
    t.target === "TagPolygonModel" && this.unfoldAndFoldOthers();
  }
  /**
   * @description 展开自己，收起其他标签
   */
  unfoldAndFoldOthers() {
    if (this.isPopoverConfigEnabled())
      return;
    const t = this.can("fold"), o = this.can("unfold");
    t && o && (this.state.unfolded = !this.state.unfolded, this.manuallyOperated = !0, this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }), this.state.unfolded && this.plugin.tags.forEach((i) => {
      i.id !== this.id && i.fold();
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
    const o = this.can("fold"), i = this.can("unfold");
    o && i && (this.state.unfolded = t, this.hooks.emit(t ? "unfolded" : "folded"), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }));
  }
  /**
   * 获取多边形的中心点
   */
  getPolygonCenter() {
    const t = this.position;
    if (!t || t.length === 0)
      return new a.Vector3();
    const o = new a.Vector3();
    return t.forEach((i) => {
      const e = m(i);
      o.add(e);
    }), o.divideScalar(t.length), o;
  }
  /**
   * 更新屏幕位置（用于在 2D UI 中显示内容）
   * 显示在 Polygon 最右侧的顶点位置
   */
  updateScreenPosition() {
    if (!this.currentVisible) {
      this.screenPosition = null, this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
      return;
    }
    const o = this.position;
    if (!o || o.length === 0) {
      this.screenPosition = null, this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
      return;
    }
    let i = m(o[0]);
    o.forEach((p) => {
      const n = m(p);
      n.x > i.x && (i = n);
    });
    const e = i.clone().project(this.five.camera);
    if (e.x < -1 || e.x > 1 || e.y < -1 || e.y > 1 || e.z < 0 || e.z > 1)
      this.screenPosition = null;
    else if (this.five.renderer) {
      const p = this.five.renderer.getSize(new a.Vector2());
      this.screenPosition = {
        leftPx: (e.x + 1) / 2 * p.x,
        topPx: (-e.y + 1) / 2 * p.y,
        scale: 1
      };
    }
    this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
  }
  /**
   * 应用可见性变化
   */
  applyVisible() {
    var t;
    this.polygonShape && (this.plugin.imagePlaneGroup.children.includes(this.polygonShape) || (console.warn(`[PolygonTag ${this.id}] applyVisible: polygonShape not in imagePlaneGroup, re-adding...`, {
      polygonShapeParent: ((t = this.polygonShape.parent) == null ? void 0 : t.name) || "null",
      imagePlaneGroupChildren: this.plugin.imagePlaneGroup.children.length
    }), this.polygonShape.parent && this.polygonShape.parent.remove(this.polygonShape), this.plugin.imagePlaneGroup.add(this.polygonShape)), this.polygonShape.visible = this.visible), this.updateScreenPosition();
  }
  /**
   * 销毁标签
   */
  dispose() {
    this.cleanupClickEvents(), this.domClickDispose && (this.domClickDispose(), this.domClickDispose = void 0), this.polygonShape && (this.polygonShape.removeFromParent(), this.polygonShape = void 0);
  }
}
export {
  Ji as PolygonTag
};
