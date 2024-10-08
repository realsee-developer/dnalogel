var l = Object.defineProperty;
var d = (o, t, e) => t in o ? l(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var i = (o, t, e) => (d(o, typeof t != "symbol" ? t + "" : t, e), e);
import * as r from "three";
import { uuid as f } from "../../shared-utils/uuid.js";
import { Subscribe as c } from "@realsee/five";
import u from "./line.js";
import v from "./polygon.js";
import { Polyline as y } from "./polyline.js";
import a from "./point.js";
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
import "earcut";
import "../../shared-utils/three/getNormal.js";
import "../utils/isIntersecting.js";
import "../../shared-utils/three/geometryUtil.js";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../vendor/three/build/three.module.js";
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
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/three/core/Sphere.js";
import "animejs";
import "../../shared-utils/isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
class at {
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
    var n;
    t && (this.points = t), this.model = e.model, this.polygon = new v(t), this.polyline = new y({ model: e.model }), this.areaItem = new C({
      area: this,
      clickCallback: (p, s) => {
        const h = p.clientX + "px", m = p.clientY + "px";
        this.hook.emit("selected", this, { left: h, top: m });
      }
    }), this.domContainer = e.domContainer || null, this.meshContainer = e.meshContainer || null, this.five = e.five || null, this.areaItem.appendTo(this.domContainer), (n = this.five) == null || n.on("cameraUpdate", this.updateDom);
  }
  /**
   * @description: 多边形的端点是否闭合
   */
  get isClosed() {
    var t;
    return this.points.length >= 4 && ((t = this.points.at(0)) == null ? void 0 : t.equals(this.points.at(-1)));
  }
  addPoints(t) {
    var p;
    this.points = this.points.concat(t);
    const e = this.points.at(-2), n = this.points.at(-1);
    if (e && n) {
      const s = new u(new a(e), new a(n), this.polyline.model);
      this.polyline.addLine(s), this.meshContainer.add(s.mesh), this.five && (s.distanceItem.setCanSelect(!1), s.distanceItem.appendTo(this.domContainer), s.distanceItem.update(this.five));
    }
    (p = this.meshContainer) != null && p.children.includes(this.polygon) || this.meshContainer.add(this.polygon), this.polygon.updatePoints(this.points), this.areaItem.updateArea(this.five), this.points.length === 3 ? this.planeHelper = new r.Plane().setFromCoplanarPoints(this.points[0], this.points[1], this.points[2]) : this.points.length < 3 && (this.planeHelper = null);
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
    return t && (this.planeHelper ? this.planeHelper.projectPoint(t, new r.Vector3()) : t);
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
  at as default
};
