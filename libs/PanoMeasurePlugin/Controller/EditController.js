var R = Object.defineProperty;
var b = (m, c, e) => c in m ? R(m, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : m[c] = e;
var o = (m, c, e) => (b(m, typeof c != "symbol" ? c + "" : c, e), e);
import H from "../Model/line.js";
import k from "../Model/point.js";
import { throttle as U } from "../../shared-utils/throttle.js";
import j from "./BaseController.js";
import { Polyline as S } from "../Model/polyline.js";
import w from "../Model/area.js";
import D from "../utils/isIntersecting.js";
import { PointSelector as x } from "../../shared-utils/three/PointSelector.js";
import G from "../Modules/DeleteDom/index.js";
import { Vector2 as y } from "three";
import T from "../utils/isNDCPointInScreen.js";
import { closestPointOnLine as B } from "../utils/math.js";
import { getFiveModel as W } from "../../shared-utils/five/getFiveModel.js";
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
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/positionToVector3.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/even.js";
import "../../shared-utils/Subscribe.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import "../../shared-utils/isNil.js";
import "../../shared-utils/three/PointSelectorHelper.js";
import "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../shared-utils/three/PointDomHelper.js";
import "../Modules/rangePiece/html.js";
import "../../CSS3DRenderPlugin/index.js";
import "../../CSS3DRenderPlugin/Controller.js";
import "../../shared-utils/url/absoluteUrl.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/animationFrame/BetterTween.js";
import "../../shared-utils/animationFrame/index.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../Modules/DeleteDom/_Assets/delete.svg.js";
import "../Modules/DeleteDom/_Assets/delete_bg.png.js";
import "../Modules/DeleteDom/_Assets/delete_hover_bg.png.js";
const M = () => !1;
class it extends j {
  constructor(e) {
    var t;
    super(e);
    o(this, "type", "edit");
    o(this, "polyline");
    o(this, "area");
    o(this, "hasAppendDashed", !1);
    // private deleteDom: DeleteDom
    o(this, "fiveElement");
    /** 上一个端点位置 */
    o(this, "lastPoint", null);
    o(this, "pointSelector");
    o(this, "deleteDom");
    /** 根据 intersection 更新放大镜和吸附点 */
    o(this, "onIntersectionUpdate", U((e, t) => {
      this.currentMeasureType === "area" && typeof t == "boolean" && (t ? this.hook.emit("readyComplete") : this.hook.emit("notReadyComplete")), this.updateDashed();
    }, 20));
    /** 撤销编辑 */
    o(this, "revoke", () => {
      this.currentMeasureType === "area" ? this.revokeArea() : this.currentMeasureType === "line" && this.revokeLine();
    });
    /**
     * @description: 测面积的撤销功能
     */
    o(this, "revokeArea", () => {
      if (this.area.points.length !== 0) {
        if (this.area.popPoint(), this.hook.emit("pointsChange", this.area.points), this.area.points.length === 0) {
          this.lastPoint = null, this.hasAppendDashed = !1, this.dashed.remove(), this.five.needsRender = !0, this.hook.emit("revoke", { isEmpty: !0 });
          return;
        } else
          this.lastPoint = new k(this.area.points[this.area.points.length - 1]), this.updateDashed();
        this.five.needsRender = !0;
      }
    });
    /**
     * @description: 测距的撤销功能
     */
    o(this, "revokeLine", (e) => {
      const t = e || this.polyline;
      if (t.lines.length === 0 && this.lastPoint) {
        this.lastPoint = null, this.hasAppendDashed = !1, this.dashed.remove(), this.hook.emit("anchorChange", null), this.hook.emit("editedDashedLineChange", null), this.five.needsRender = !0, this.hook.emit("pointsChange", []);
        return;
      }
      if (t.lines.length === 0 && !this.lastPoint || !this.lastPoint)
        return;
      const i = t.lines[t.lines.length - 1], s = i.findAnotherPoint(this.lastPoint);
      s && (this.lastPoint = s, this.hook.emit("anchorChange", s.position), this.group.remove(i.mesh), t.removeLine(i), i.distanceItem.remove(), this.updateDashed(), this.five.needsRender = !0);
    });
    o(this, "onMouseLeave", () => {
      this.dashed.hide(), this.perpendicularDashed.hide(), this.area.hideArea();
    });
    /** 编辑线条发生改变时通知外部 */
    o(this, "onLineChanged", () => {
      this.hook.emit("editedPolylineChange", this.polyline);
    });
    o(this, "onWantsSelect", () => {
      if (this.currentMeasureType === "area") {
        const e = this.area.polygon.isBlank || this.area.polygon.visible === !1;
        if (this.area.points.length >= 3 && e)
          return !1;
      }
    });
    o(this, "wantsMoveToPano", () => {
      if (this.lastPoint)
        return !1;
    });
    /**
     * 1. 如果存在上一个点，需要绘制当前点到上一个点的连线
     * 2. 把上一个点的位置更新为当前点的位置
     * 3. 清除 pointSelector
     */
    o(this, "onSelect", () => {
      var s, r, l, d;
      this.hasAppendDashed || (this.dashed.distanceItem.appendTo(this.container), this.group.add(this.dashed.mesh), this.currentMeasureType === "area" && this.group.add(this.perpendicularDashed.mesh)), this.hasAppendDashed = !0;
      const e = (() => {
        var a, n;
        if (this.currentMeasureType === "area")
          return this.area.projectPoint((a = this.pointSelector.position) == null ? void 0 : a.point);
        if (this.currentMeasureType === "line")
          return (n = this.pointSelector.position) == null ? void 0 : n.point;
      })();
      if (!e)
        return;
      const t = new k(e), i = this.lastPoint;
      if (!(i != null && i.position && t.position.equals(i == null ? void 0 : i.position))) {
        if (this.lastPoint = t, this.currentMeasureType === "line") {
          if (t && i) {
            const n = new H(i, t, this.model);
            n.distanceItem.setCanSelect(!1), n.distanceItem.appendTo(this.container), this.polyline.addLine(n), this.group.add(n.mesh), n.distanceItem.update(this.five);
          }
          const a = (r = (s = this.editParams) == null ? void 0 : s.autoEndConfig) == null ? void 0 : r.line;
          typeof a == "number" && (this.polyline.getPointLength() >= a ? this.complete() : this.polyline.getPointLength() === a - 1 && this.hook.emit("readyComplete")), this.hook.emit("pointsChange", this.polyline.points);
        } else if (this.currentMeasureType === "area") {
          if (this.area.addPoints(t.position), this.area.isClosed) {
            this.complete();
            return;
          }
          this.area.points.length >= 3 ? this.pointSelector.setAdherePoints([this.area.points[0]]) : this.pointSelector.setAdherePoints(null);
          const a = (d = (l = this.editParams) == null ? void 0 : l.autoEndConfig) == null ? void 0 : d.area;
          typeof a == "number" && (this.area.points.length >= a ? this.complete() : this.area.points.length === a - 1 && this.hook.emit("readyComplete")), this.hook.emit("pointsChange", this.area.points);
        }
        this.updateDashed(), this.five.needsRender = !0, this.hook.emit("anchorChange", t.position);
      }
    });
    /** 移动全景时更新 distanceItem 在屏幕上的位置 */
    o(this, "onCameraUpdate", () => {
      this.updateDistanceUI();
    });
    /** 更新虚线 */
    o(this, "updateDashed", () => {
      var i;
      if (!this.lastPoint)
        return;
      const e = this.lastPoint.position, t = (() => {
        var s, r;
        if (this.currentMeasureType === "area")
          return this.area.projectPoint((s = this.pointSelector.position) == null ? void 0 : s.point);
        if (this.currentMeasureType === "line")
          return (r = this.pointSelector.position) == null ? void 0 : r.point;
      })();
      if (!t) {
        this.dashed.hide();
        return;
      }
      if (this.dashed.show(), this.dashed.setPoints(e, t), this.dashed.distanceItem.update(this.five), this.hook.emit("editedDashedLineChange", this.dashed), this.currentMeasureType === "area")
        if (this.area.areaItem.setCanSelect(!1), this.area.points.length >= 2) {
          const s = (i = this.pointSelector.position) == null ? void 0 : i.point;
          if (s) {
            const n = s, g = t;
            this.perpendicularDashed.setPoints(n, g), this.perpendicularDashed.show();
          } else
            this.perpendicularDashed.hide();
          const r = this.area.polyline.lines.map((n) => ({ start: n.points[0].position, end: n.points[1].position })), l = D({ start: e, end: t }, r), d = D({ start: t, end: this.area.points[0] }, r);
          if (l || d)
            this.area.hideArea(), this.hook.emit("allowAddPointStateChange", "forbid");
          else {
            this.area.showArea();
            const n = [...this.area.points, t];
            this.area.polygon.updatePoints(n), this.area.areaItem.updateArea(this.five), this.hook.emit("allowAddPointStateChange", "allow");
          }
        } else
          this.area.hideArea(), this.perpendicularDashed.hide();
      this.five.needsRender = !0;
    });
    // ====================================================================================================================================
    // 下面一堆高亮相关
    o(this, "wantsTapGesture", (e) => {
      var A, C;
      if (this.editParams.pointSelectorMode === "cursor" || this.lastPoint)
        return !1;
      const t = this.model.areas.map((h) => e.intersectObject(h.polygon, !0)[0]).sort((h, p) => h.distance - p.distance), i = (C = (A = t[0]) == null ? void 0 : A.object) == null ? void 0 : C.parent;
      if (i != null && i.isPolygonMesh) {
        const h = this.model.areas.find((p) => p.polygon === i);
        if (h) {
          const { x: p, y: v } = t[0].point.clone().project(this.five.camera), f = `${(p + 1) / 2 * 100}%`, u = `${(-v + 1) / 2 * 100}%`;
          return this.chooseArea(h, { left: f, top: u }), !1;
        }
      }
      const [s] = W(this.five).intersectRaycaster(e);
      if (!s)
        return;
      const r = this.five.camera, l = s.point.clone().project(r), d = this.container.clientWidth, a = this.container.clientHeight, n = new y(l.x * d, l.y * a), g = this.model.getAllLines().map((h) => {
        const [p, v] = h.points, f = p.position.clone().project(r), u = v.position.clone().project(r);
        if (!T(f) && !T(u))
          return null;
        const E = new y(f.x * d, f.y * a), I = new y(u.x * d, u.y * a);
        return { id: h.id, points: [E, I] };
      }).filter((h) => !!h);
      if (g.length === 0)
        return;
      const P = g.map((h) => {
        const p = B(n, h.points);
        return { id: h.id, distance: p.distanceTo(n) };
      }).sort((h, p) => h.distance - p.distance)[0];
      if (P.distance > 20)
        return;
      const L = this.model.getAllLines().find(({ id: h }) => h === P.id);
      if (L)
        return this.chooseLine(L), !1;
    });
    o(this, "chooseLine", (e) => {
      const t = e.getPolyline().lines;
      this.deleteDom.setTarget(t).setLines(t).updatePosition().show(), this.highlightLines(t), this.hook.emit("selectedChange", t);
    });
    o(this, "chooseArea", (e, t) => {
      this.deleteDom.setTarget(e).updatePosition(t.left, `calc(${t.top} - 1.5rem)`).show(), this.highlightArea(e);
    });
    o(this, "deleteArea", (e) => {
      this.unHighlightArea(e), e.dispose(), this.deleteDom.hide();
    });
    o(this, "deleteLine", (e) => {
      const t = e[0], i = this.model.getPolylineByLine(t);
      i && (this.model.removePolyline(i), i.lines.forEach((s) => this.removeLine(s)), this.deleteDom.setLines([]).hide());
    });
    this.fiveElement = this.five.getElement(), this.deleteDom = new G(this.five, {
      i18n: this.config.i18n,
      onClick: (i, s) => {
        var d;
        const r = s.type === "area", l = Array.isArray(s) && ((d = s[0]) == null ? void 0 : d.type) === "line";
        r && this.deleteArea(s), l && this.deleteLine(s);
      },
      cancel: (i) => {
        var l;
        this.deleteDom.hide();
        const s = i.type === "area", r = Array.isArray(i) && ((l = i[0]) == null ? void 0 : l.type) === "line";
        s && this.unHighlightArea(i), r && this.unHighlightLines(i);
      }
    }).appendTo(this.container), this.pointSelector = new x(this.five, {
      mode: this.editParams.pointSelectorMode,
      pointSelectorHelperParams: { magnifierParams: this.magnifierParams, container: this.container }
    }), this.pointSelector.enable(), this.polyline = new S({ model: this.model }), this.area = new w(void 0, {
      five: this.five,
      model: this.model,
      meshContainer: this.group,
      domContainer: this.container
    }), this.model.addPolyline(this.polyline), this.model.addArea(this.area), this.model.getAllLines().forEach((i) => {
      i.distanceItem.appendTo(this.container), i.distanceItem.update(this.five), i.distanceItem.setCanSelect(!0), i.hook.on("selected", this.chooseLine), this.group.add(i.mesh);
    }), this.model.getAllAreas().forEach((i) => {
      i.areaItem.appendTo(this.container), i.areaItem.updateDomPosition(this.five), i.areaItem.setCanSelect(!0), i.hook.on("selected", this.chooseArea), this.group.add(i.polygon), i.polyline.lines.forEach((s) => {
        s.distanceItem.appendTo(this.container), s.distanceItem.update(this.five), this.group.add(s.mesh);
      });
    }), this.five.on("cameraUpdate", this.onCameraUpdate), this.five.on("wantsTapGesture", this.wantsTapGesture), this.five.on("wantsMoveToPano", this.wantsMoveToPano), this.five.on("wantsChangeMode", M), this.pointSelector.hook.on("intersectionUpdate", this.onIntersectionUpdate), this.pointSelector.hook.on("select", this.onSelect), this.pointSelector.hook.on("wantsSelect", this.onWantsSelect), this.polyline.hook.on("lineAdded", this.onLineChanged), this.polyline.hook.on("lineRemoved", this.onLineChanged), this.five.helperVisible = !1, (t = this.fiveElement) == null || t.addEventListener("mouseleave", this.onMouseLeave), this.hook.emit("anchorChange", null), this.hook.emit("editedDashedLineChange", null), this.five.refresh();
  }
  dispose() {
    var e;
    super.dispose(), this.model.areas.forEach((t) => {
      (t.points.length < 2 || t.polygon.isBlank) && this.model.removeArea(t);
    }), this.five.helperVisible = !0, this.pointSelector.disable(), this.dashed.remove(), this.perpendicularDashed.remove(), this.five.off("cameraUpdate", this.onCameraUpdate), this.five.off("wantsTapGesture", this.wantsTapGesture), this.five.off("wantsMoveToPano", this.wantsMoveToPano), this.five.off("wantsChangeMode", M), this.pointSelector.hook.off("intersectionUpdate", this.onIntersectionUpdate), this.pointSelector.hook.off("select", this.onSelect), this.polyline.hook.off("lineAdded", this.onLineChanged), this.polyline.hook.off("lineRemoved", this.onLineChanged), (e = this.fiveElement) == null || e.removeEventListener("mouseleave", this.onMouseLeave), this.magnifier.dispose(), this.deleteDom.dispose(), this.dashed.distanceItem.remove(), this.five.needsRender = !0;
  }
  getEditingLines() {
    return this.polyline.lines;
  }
  selectPoint() {
    this.onSelect();
  }
  complete() {
    this.hook.emit("complete"), this.currentMeasureType === "area" ? (this.area.points.length < 3 ? this.deleteArea(this.area) : (this.area.showArea(), this.area.complete(), this.area.hook.on("selected", this.chooseArea)), this.area = new w(void 0, { five: this.five, model: this.model, meshContainer: this.group, domContainer: this.container }), this.model.addArea(this.area)) : this.currentMeasureType === "line" && (this.polyline.lines.forEach((e) => {
      e.hook.on("selected", this.chooseLine), e.distanceItem.setCanSelect(!0);
    }), this.polyline = new S({ model: this.model }), this.model.addPolyline(this.polyline)), this.pointSelector.setAdherePoints(null), this.dashed.hide(), this.perpendicularDashed.hide(), this.lastPoint = void 0;
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
  it as default
};
