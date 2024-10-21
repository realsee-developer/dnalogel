var x = Object.defineProperty, j = Object.defineProperties;
var G = Object.getOwnPropertyDescriptors;
var D = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
var w = (d, a, e) => a in d ? x(d, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[a] = e, k = (d, a) => {
  for (var e in a || (a = {}))
    B.call(a, e) && w(d, e, a[e]);
  if (D)
    for (var e of D(a))
      O.call(a, e) && w(d, e, a[e]);
  return d;
}, M = (d, a) => j(d, G(a));
var s = (d, a, e) => (w(d, typeof a != "symbol" ? a + "" : a, e), e);
import $ from "../Model/line.js";
import I from "../Model/point.js";
import { throttle as q } from "../../shared-utils/throttle.js";
import z from "./BaseController.js";
import { Polyline as E } from "../Model/polyline.js";
import R from "../Model/area.js";
import { isIntersecting as H } from "../utils/isIntersecting.js";
import { PointSelector as F } from "../../shared-utils/three/PointSelector/index.js";
import N from "../Modules/DeleteDom/index.js";
import * as f from "three";
import { Vector2 as T } from "three";
import U from "../utils/isNDCPointInScreen.js";
import { closestPointOnLine as Q } from "../utils/math.js";
import { getFiveModel as X } from "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/uuid.js";
import "../utils/line.js";
import "../../shared-utils/five/FiveLine.js";
import "@realsee/five/line";
import "../utils/constants.js";
import "@realsee/five";
import "../utils/dom/distanceItem.js";
import "../utils/dom/base.js";
import "../../shared-utils/three/centerPoint.js";
import "../utils/ironbox.js";
import "../Model/polygon.js";
import "../../shared-utils/three/IObject3D.js";
import "../../shared-utils/three/generatePolygonGeometry.js";
import "../../shared-utils/three/earcut3D.js";
import "earcut";
import "../../shared-utils/three/getNormal.js";
import "../utils/dom/areaDom.js";
import "../../shared-utils/three/geometryUtil.js";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../vendor/three/build/three.module.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
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
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/even.js";
import "../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/five/initialCSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "../../CSS3DRenderPlugin/utils/three/THREEJS_CSS3DRenderer.js";
import "../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../Sculpt/utils/removeAllTag.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../Modules/DeleteDom/_Assets/delete.svg.js";
import "../Modules/DeleteDom/_Assets/delete_bg.png.js";
import "../Modules/DeleteDom/_Assets/delete_hover_bg.png.js";
const b = () => !1;
class Lt extends z {
  constructor(e) {
    super(e);
    s(this, "type", "edit");
    s(this, "polyline");
    s(this, "area");
    s(this, "hasAppendDashed", !1);
    // private deleteDom: DeleteDom
    s(this, "fiveElement");
    /** 上一个端点位置 */
    s(this, "lastPoint", null);
    s(this, "pointSelector");
    s(this, "deleteDom");
    /** 根据 intersection 更新放大镜和吸附点 */
    s(this, "onIntersectionUpdate", q((e, t) => {
      this.currentMeasureType === "area" && typeof t == "boolean" && (t ? this.hook.emit("readyComplete") : this.hook.emit("notReadyComplete")), this.updateDashed();
    }, 20));
    /** 撤销编辑 */
    s(this, "revoke", () => {
      this.currentMeasureType === "area" ? this.revokeArea() : this.currentMeasureType === "line" && this.revokeLine();
    });
    /**
     * @description: 测面积的撤销功能
     */
    s(this, "revokeArea", () => {
      if (this.area.points.length !== 0) {
        if (this.area.popPoint(), this.hook.emit("pointsChange", this.area.points), this.area.points.length === 0) {
          this.lastPoint = null, this.hasAppendDashed = !1, this.dashed.remove(), this.five.needsRender = !0, this.hook.emit("revoke", { isEmpty: !0 });
          return;
        } else
          this.lastPoint = new I(this.area.points[this.area.points.length - 1]), this.updateDashed();
        this.five.needsRender = !0;
      }
    });
    /**
     * @description: 测距的撤销功能
     */
    s(this, "revokeLine", (e) => {
      const t = e || this.polyline;
      if (t.lines.length === 0 && this.lastPoint) {
        this.lastPoint = null, this.hasAppendDashed = !1, this.dashed.remove(), this.hook.emit("anchorChange", null), this.hook.emit("editedDashedLineChange", null), this.five.needsRender = !0, this.hook.emit("pointsChange", []);
        return;
      }
      if (t.lines.length === 0 && !this.lastPoint || !this.lastPoint)
        return;
      const i = t.lines[t.lines.length - 1], n = i.findAnotherPoint(this.lastPoint);
      n && (this.lastPoint = n, this.hook.emit("anchorChange", n.position), this.group.remove(i.mesh), t.removeLine(i), i.distanceItem.remove(), this.updateDashed(), this.five.needsRender = !0);
    });
    s(this, "checkMouseLeave", (e) => {
      e || (this.dashed.hide(), this.perpendicularDashed.hide(), this.area.hideArea());
    });
    /** 编辑线条发生改变时通知外部 */
    s(this, "onLineChanged", () => {
      this.hook.emit("editedPolylineChange", this.polyline);
    });
    s(this, "onWantsSelect", () => {
      if (this.currentMeasureType === "area") {
        const e = this.area.polygon.isBlank || this.area.polygon.visible === !1;
        if (this.area.points.length >= 3 && e)
          return !1;
      }
    });
    s(this, "wantsMoveToPano", () => {
      if (this.lastPoint)
        return !1;
    });
    /**
     * 1. 如果存在上一个点，需要绘制当前点到上一个点的连线
     * 2. 把上一个点的位置更新为当前点的位置
     * 3. 清除 pointSelector
     */
    s(this, "onSelect", () => {
      var l, c, u, y;
      this.hasAppendDashed || (this.dashed.distanceItem.appendTo(this.container), this.group.add(this.dashed.mesh), this.currentMeasureType === "area" && this.group.add(this.perpendicularDashed.mesh)), this.hasAppendDashed = !0;
      const e = (() => {
        var o, h;
        if (this.currentMeasureType === "area")
          return this.area.projectPoint((o = this.pointSelector.position) == null ? void 0 : o.point);
        if (this.currentMeasureType === "line")
          return (h = this.pointSelector.position) == null ? void 0 : h.point;
      })();
      if (!e)
        return;
      const t = new I(e), i = this.lastPoint;
      if (i != null && i.position && t.position.equals(i == null ? void 0 : i.position))
        return;
      this.lastPoint = t;
      const n = (o) => {
        if (!this.lastPoint)
          return [];
        const { intersection: h, pointSelectorInstance: L } = o, g = L.pointSelectorHelper.pointHelper, m = new f.Vector3(0, 0, 1).applyQuaternion(g.quaternion);
        if (m.x > 0.9999 || m.y > 0.9999 || m.z > 0.9999 || m.x < -0.9999 || m.y < -0.9999 || m.z < -0.9999) {
          const S = h.point, v = this.lastPoint.position.clone().sub(S);
          L.pointSelectorHelper.updateWithIntersect(h, { emitEvent: !1 });
          const r = new f.Line3(
            g.localToWorld(new f.Vector3(1, 0, 0)).add(v),
            g.localToWorld(new f.Vector3(-1, 0, 0)).add(v)
          ), p = new f.Line3(
            g.localToWorld(new f.Vector3(0, 1, 0)).add(v),
            g.localToWorld(new f.Vector3(0, -1, 0)).add(v)
          ), A = r.closestPointToPoint(S, !1, new f.Vector3()), P = p.closestPointToPoint(S, !1, new f.Vector3());
          return [A, P];
        }
        return [];
      };
      if (this.pointSelector.setAdherePoints(n), this.currentMeasureType === "line") {
        if (t && i) {
          const h = new $(i, t, this.model);
          h.distanceItem.setCanSelect(!1), h.distanceItem.appendTo(this.container), this.polyline.addLine(h), this.group.add(h.mesh), h.distanceItem.update(this.five);
        }
        const o = (c = (l = this.editParams) == null ? void 0 : l.autoEndConfig) == null ? void 0 : c.line;
        typeof o == "number" && (this.polyline.getPointLength() >= o ? this.complete() : this.polyline.getPointLength() === o - 1 && this.hook.emit("readyComplete")), this.hook.emit("pointsChange", this.polyline.points);
      } else if (this.currentMeasureType === "area") {
        if (this.area.addPoints(t.position), this.area.isClosed) {
          this.complete();
          return;
        }
        this.area.points.length >= 3 && this.pointSelector.setAdherePoints((...h) => {
          var L;
          return [this.area.points[0], ...(L = n(...h)) != null ? L : []];
        });
        const o = (y = (u = this.editParams) == null ? void 0 : u.autoEndConfig) == null ? void 0 : y.area;
        typeof o == "number" && (this.area.points.length >= o ? this.complete() : this.area.points.length === o - 1 && this.hook.emit("readyComplete")), this.hook.emit("pointsChange", this.area.points);
      }
      this.updateDashed(), this.five.needsRender = !0, this.hook.emit("anchorChange", t.position);
    });
    /** 移动全景时更新 distanceItem 在屏幕上的位置 */
    s(this, "onCameraUpdate", () => {
      this.updateDistanceUI();
    });
    /** 更新虚线 */
    s(this, "updateDashed", () => {
      var i;
      if (!this.lastPoint)
        return;
      const e = this.lastPoint.position, t = (() => {
        var n, l;
        if (this.currentMeasureType === "area")
          return this.area.projectPoint((n = this.pointSelector.position) == null ? void 0 : n.point);
        if (this.currentMeasureType === "line")
          return (l = this.pointSelector.position) == null ? void 0 : l.point;
      })();
      if (!t) {
        this.dashed.hide();
        return;
      }
      if (this.dashed.show(), this.dashed.setPoints(e, t), this.dashed.distanceItem.update(this.five), this.hook.emit("editedDashedLineChange", this.dashed), this.currentMeasureType === "area")
        if (this.area.areaItem.setCanSelect(!1), this.area.points.length >= 2) {
          const n = (i = this.pointSelector.position) == null ? void 0 : i.point;
          if (n) {
            const o = n, h = t;
            this.perpendicularDashed.setPoints(o, h), this.perpendicularDashed.show();
          } else
            this.perpendicularDashed.hide();
          const l = this.area.polyline.lines.map((o) => ({ start: o.points[0].position, end: o.points[1].position })), c = H({ start: e, end: t }, l), u = H({ start: t, end: this.area.points[0] }, l);
          if (c || u)
            this.area.hideArea(), this.hook.emit("allowAddPointStateChange", "forbid");
          else {
            this.area.showArea();
            const o = [...this.area.points, t];
            this.area.polygon.updatePoints(o), this.area.areaItem.updateArea(this.five), this.hook.emit("allowAddPointStateChange", "allow");
          }
        } else
          this.area.hideArea(), this.perpendicularDashed.hide();
      this.five.needsRender = !0;
    });
    // ====================================================================================================================================
    // 下面一堆高亮相关
    s(this, "wantsTapGesture", (e) => {
      var S, v;
      if (this.editParams.pointSelectorMode === "cursor" || this.lastPoint)
        return !1;
      const t = this.model.areas.map((r) => e.intersectObject(r.polygon, !0)[0]).sort((r, p) => r.distance - p.distance), i = (v = (S = t[0]) == null ? void 0 : S.object) == null ? void 0 : v.parent;
      if (i != null && i.isPolygonMesh) {
        const r = this.model.areas.find((p) => p.polygon === i);
        if (r) {
          const { x: p, y: A } = t[0].point.clone().project(this.five.camera), P = `${(p + 1) / 2 * 100}%`, C = `${(-A + 1) / 2 * 100}%`;
          return this.chooseArea(r, { left: P, top: C }), !1;
        }
      }
      const [n] = X(this.five).intersectRaycaster(e);
      if (!n)
        return;
      const l = this.five.camera, c = n.point.clone().project(l), u = this.container.clientWidth, y = this.container.clientHeight, o = new T(c.x * u, c.y * y), h = this.model.getAllLines().map((r) => {
        const [p, A] = r.points, P = p.position.clone().project(l), C = A.position.clone().project(l);
        if (!U(P) && !U(C))
          return null;
        const V = new T(P.x * u, P.y * y), W = new T(C.x * u, C.y * y);
        return { id: r.id, points: [V, W] };
      }).filter((r) => !!r);
      if (h.length === 0)
        return;
      const g = h.map((r) => {
        const p = Q(o, r.points);
        return { id: r.id, distance: p.distanceTo(o) };
      }).sort((r, p) => r.distance - p.distance)[0];
      if (g.distance > 20)
        return;
      const m = this.model.getAllLines().find(({ id: r }) => r === g.id);
      if (m)
        return this.chooseLine(m), !1;
    });
    s(this, "chooseLine", (e) => {
      const t = e.getPolyline().lines;
      this.deleteDom.setTarget(t).setLines(t).updatePosition().show(), this.highlightLines(t), this.hook.emit("selectedChange", t);
    });
    s(this, "chooseArea", (e, t) => {
      this.deleteDom.setTarget(e).updatePosition(t.left, `calc(${t.top} - 1.5rem)`).show(), this.highlightArea(e);
    });
    s(this, "deleteArea", (e) => {
      this.unHighlightArea(e), e.dispose(), this.deleteDom.hide();
    });
    s(this, "deleteLine", (e) => {
      const t = e[0], i = this.model.getPolylineByLine(t);
      i && (this.model.removePolyline(i), i.lines.forEach((n) => this.removeLine(n)), this.deleteDom.setLines([]).hide());
    });
    this.fiveElement = this.five.getElement(), this.deleteDom = new N(this.five, {
      i18n: this.config.i18n,
      onClick: (t, i) => {
        var c;
        const n = i.type === "area", l = Array.isArray(i) && ((c = i[0]) == null ? void 0 : c.type) === "line";
        n && this.deleteArea(i), l && this.deleteLine(i);
      },
      cancel: (t) => {
        var l;
        this.deleteDom.hide();
        const i = t.type === "area", n = Array.isArray(t) && ((l = t[0]) == null ? void 0 : l.type) === "line";
        i && this.unHighlightArea(t), n && this.unHighlightLines(t);
      }
    }).appendTo(this.container), this.pointSelector = new F(this.five, M(k({}, this.pointSelectorConfig), {
      mode: this.editParams.pointSelectorMode,
      helper: k({ magnifierParams: this.magnifierParams, container: this.container }, this.pointSelectorConfig.helper)
    })), this.pointSelector.enable(), this.polyline = new E({ model: this.model }), this.area = new R(void 0, {
      five: this.five,
      model: this.model,
      meshContainer: this.group,
      domContainer: this.container
    }), this.model.addPolyline(this.polyline), this.model.addArea(this.area), this.model.getAllLines().forEach((t) => {
      t.distanceItem.appendTo(this.container), t.distanceItem.update(this.five), t.distanceItem.setCanSelect(!0), t.hook.on("selected", this.chooseLine), this.group.add(t.mesh);
    }), this.model.getAllAreas().forEach((t) => {
      t.areaItem.appendTo(this.container), t.areaItem.updateDomPosition(this.five), t.areaItem.setCanSelect(!0), t.hook.on("selected", this.chooseArea), this.group.add(t.polygon), t.polyline.lines.forEach((i) => {
        i.distanceItem.appendTo(this.container), i.distanceItem.update(this.five), this.group.add(i.mesh);
      });
    }), this.five.on("cameraUpdate", this.onCameraUpdate), this.five.on("wantsTapGesture", this.wantsTapGesture), this.five.on("wantsMoveToPano", this.wantsMoveToPano), this.five.on("wantsChangeMode", b), this.pointSelector.on("intersectionUpdate", this.onIntersectionUpdate), this.pointSelector.on("intersectionUpdate", this.checkMouseLeave), this.pointSelector.on("select", this.onSelect), this.pointSelector.on("wantsSelect", this.onWantsSelect), this.polyline.hook.on("lineAdded", this.onLineChanged), this.polyline.hook.on("lineRemoved", this.onLineChanged), this.five.helperVisible = !1, this.hook.emit("anchorChange", null), this.hook.emit("editedDashedLineChange", null), this.five.refresh();
  }
  dispose() {
    super.dispose(), this.model.areas.forEach((e) => {
      (e.points.length < 2 || e.polygon.isBlank) && this.model.removeArea(e);
    }), this.five.helperVisible = !0, this.pointSelector.disable(), this.dashed.remove(), this.perpendicularDashed.remove(), this.five.off("cameraUpdate", this.onCameraUpdate), this.five.off("wantsTapGesture", this.wantsTapGesture), this.five.off("wantsMoveToPano", this.wantsMoveToPano), this.five.off("wantsChangeMode", b), this.pointSelector.off("intersectionUpdate", this.onIntersectionUpdate), this.pointSelector.off("intersectionUpdate", this.checkMouseLeave), this.pointSelector.off("select", this.onSelect), this.pointSelector.off("wantsSelect", this.onWantsSelect), this.polyline.hook.off("lineAdded", this.onLineChanged), this.polyline.hook.off("lineRemoved", this.onLineChanged), this.magnifier.dispose(), this.deleteDom.dispose(), this.dashed.distanceItem.remove(), this.five.needsRender = !0;
  }
  getEditingLines() {
    return this.polyline.lines;
  }
  selectPoint() {
    this.onSelect();
  }
  complete() {
    this.hook.emit("complete"), this.currentMeasureType === "area" ? (this.area.points.length < 3 ? this.deleteArea(this.area) : (this.area.showArea(), this.area.complete(), this.area.hook.on("selected", this.chooseArea)), this.area = new R(void 0, { five: this.five, model: this.model, meshContainer: this.group, domContainer: this.container }), this.model.addArea(this.area)) : this.currentMeasureType === "line" && (this.polyline.lines.forEach((e) => {
      e.hook.on("selected", this.chooseLine), e.distanceItem.setCanSelect(!0);
    }), this.polyline = new E({ model: this.model }), this.model.addPolyline(this.polyline)), this.pointSelector.setAdherePoints(null), this.dashed.hide(), this.perpendicularDashed.hide(), this.lastPoint = void 0;
  }
  highlightArea(e) {
    this.highlightLines(e.polyline.lines), this.five.needsRender = !0;
  }
  unHighlightArea(e) {
    this.unHighlightLines(e.polyline.lines), this.five.needsRender = !0;
  }
  highlightLines(e) {
    e.forEach((t) => this.highlightLine(t));
  }
  unHighlightLines(e) {
    e.forEach((t) => {
      t.selected = !1, t.distanceItem.unHighlight(), this.group.remove(t.lightMesh), this.five.needsRender = !0;
    });
  }
  highlightLine(e) {
    this.unHighlightLines(this.model.getAllLines()), !e.selected && (e.selected = !0, this.group.add(e.lightMesh), e.distanceItem.highlight(), this.five.needsRender = !0);
  }
}
export {
  Lt as default
};
