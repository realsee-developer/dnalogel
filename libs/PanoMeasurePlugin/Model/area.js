var l = Object.defineProperty;
var d = (o, t, e) => t in o ? l(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var i = (o, t, e) => (d(o, typeof t != "symbol" ? t + "" : t, e), e);
import * as m from "three";
import { uuid as f } from "../../shared-utils/uuid.js";
import { Subscribe as c } from "@realsee/five";
import u from "./line.js";
import { PolygonMesh as v } from "./polygon.js";
import { Polyline as y } from "./polyline.js";
import n from "./point.js";
import { AreaItem as C } from "../utils/dom/areaDom.js";
import "../utils/line.js";
import "../../shared-utils/five/FiveLine.js";
import "@realsee/five/line";
import "../utils/constants.js";
import "../utils/dom/distanceItem.js";
import "../utils/dom/base.js";
import "../utils/isNDCPointInScreen.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/IObject3D.js";
import "../../shared-utils/three/generatePolygonGeometry.js";
import "../../shared-utils/three/earcut3D.js";
import "../../vendor/earcut/src/earcut.js";
import "../../shared-utils/three/getNormal.js";
import "../utils/isIntersecting.js";
import "../../shared-utils/three/geometryUtil.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/five/fiveEveryReadyListener.js";
import "../../shared-utils/throttle.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../shared-utils/even.js";
import "../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../shared-utils/five/FivePuppet.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/CSS3DRender/index.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../Sculpt/utils/removeAllTag.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/util.js";
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
class Nt {
  constructor(t, e) {
    i(this, "id", f());
    i(this, "selected", !1);
    i(this, "text");
    i(this, "type", "area");
    i(this, "lightMesh");
    i(this, "areaItem");
    i(this, "hook", new c());
    i(this, "model");
    /** 多边形mesh */
    i(this, "polygon");
    /** 多边形顶点 */
    i(this, "points", []);
    /** 多边形前三个点组成的平面，用来使得后面加的点也落在这个平面上 */
    i(this, "planeHelper");
    /** 多边形边框 */
    i(this, "polyline");
    /** 多边形mesh容器 */
    i(this, "meshContainer");
    /** 多边形dom容器 */
    i(this, "domContainer");
    i(this, "five");
    /**
     * @description: five camera update 时，更新Dom的位置
     */
    i(this, "updateDom", () => {
      this.five && (this.polyline.lines.forEach((t) => t.distanceItem.update(this.five)), this.areaItem.updateDomPosition(this.five));
    });
    var s;
    t && (this.points = t), this.model = e.model, this.polygon = new v(t), this.polyline = new y({ model: e.model }), this.areaItem = new C({
      area: this,
      clickCallback: (r, p) => {
        const a = r.clientX + "px", h = r.clientY + "px";
        this.hook.emit("selected", this, { left: a, top: h });
      }
    }), this.domContainer = e.domContainer || null, this.meshContainer = e.meshContainer || null, this.five = e.five || null, this.areaItem.appendTo(this.domContainer), (s = this.five) == null || s.on("cameraUpdate", this.updateDom);
  }
  /**
   * @description: 多边形的端点是否闭合
   */
  get isClosed() {
    var t;
    return this.points.length >= 4 && ((t = this.points.at(0)) == null ? void 0 : t.equals(this.points.at(-1)));
  }
  addPoints(t) {
    var r;
    this.points = this.points.concat(t);
    const e = this.points.at(-2), s = this.points.at(-1);
    if (e && s) {
      const p = new u(new n(e), new n(s), this.polyline.model);
      this.polyline.addLine(p), this.meshContainer.add(p.mesh), this.five && (p.distanceItem.setCanSelect(!1), p.distanceItem.appendTo(this.domContainer), p.distanceItem.update(this.five));
    }
    (r = this.meshContainer) != null && r.children.includes(this.polygon) || this.meshContainer.add(this.polygon), this.polygon.updatePoints(this.points), this.areaItem.updateArea(this.five), this.points.length === 3 ? this.planeHelper = new m.Plane().setFromCoplanarPoints(this.points[0], this.points[1], this.points[2]) : this.points.length < 3 && (this.planeHelper = null);
  }
  /**
   * @description: 移除最后一个添加的点
   */
  popPoint() {
    this.points.pop();
    const t = this.polyline.lines.pop();
    t == null || t.remove(), this.polygon.updatePoints(this.points), this.areaItem.updateArea(this.five), this.points.length < 3 && (this.planeHelper = null);
  }
  /**
   * @description: 自动补全多边形的各个边
   */
  complete() {
    this.points.at(-1).equals(this.points[0]) || this.addPoints(this.points[0]);
  }
  hideArea() {
    this.polygon.visible = !1, this.areaItem.hide();
  }
  showArea() {
    this.polygon.visible = !0, this.areaItem.show();
  }
  /**
   * @description: 获取一个点投影在当前平面上的点
   */
  projectPoint(t) {
    return t && (this.planeHelper ? this.planeHelper.projectPoint(t, new m.Vector3()) : t);
  }
  remove() {
    this.polygon.removeFromParent(), this.areaItem.remove(), this.polyline.lines.forEach((t) => t.remove());
  }
  /**
   * @todo: 没写完
   */
  dispose() {
    this.remove(), this.model.areas.splice(this.model.areas.indexOf(this), 1), this.planeHelper = null, this.five.off("cameraUpdate", this.updateDom), this.five.needsRender = !0;
  }
  toJSON() {
    return {
      id: this.id,
      points: this.points.map((t) => t.toArray()),
      text: this.text
    };
  }
}
export {
  Nt as default
};
