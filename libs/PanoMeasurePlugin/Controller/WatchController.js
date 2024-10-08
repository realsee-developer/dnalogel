var I = Object.defineProperty;
var R = (c, r, t) => r in c ? I(c, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[r] = t;
var s = (c, r, t) => (R(c, typeof r != "symbol" ? r + "" : r, t), t);
import G from "hammerjs";
import T from "../Modules/DeleteDom/index.js";
import w from "../utils/isNDCPointInScreen.js";
import U from "./BaseController.js";
import { Raycaster as M, Vector2 as L } from "three";
import { closestPointOnLine as b } from "../utils/math.js";
import { findClosestPoint as j } from "../utils/findClosestPoint.js";
import { getPointFromHammerEvent as C } from "../../shared-utils/getPointFromHammerEvent.js";
import x from "../Model/area.js";
import F from "../Model/polygon.js";
import { getFiveModel as D } from "../../shared-utils/five/getFiveModel.js";
import "../Modules/DeleteDom/_Assets/delete.svg.js";
import "../Modules/DeleteDom/_Assets/delete_bg.png.js";
import "../Modules/DeleteDom/_Assets/delete_hover_bg.png.js";
import "../Model/line.js";
import "../../shared-utils/uuid.js";
import "../utils/line.js";
import "../../shared-utils/five/FiveLine.js";
import "@realsee/five/line";
import "../utils/constants.js";
import "@realsee/five";
import "../utils/dom/distanceItem.js";
import "../utils/dom/base.js";
import "../../shared-utils/three/centerPoint.js";
import "../Model/point.js";
import "../utils/ironbox.js";
import "../utils/ndc2Screen.js";
import "../Model/polyline.js";
import "../utils/dom/areaDom.js";
import "../../shared-utils/three/geometryUtil.js";
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
import "../../shared-utils/three/IObject3D.js";
import "../../shared-utils/three/generatePolygonGeometry.js";
import "../../shared-utils/three/earcut3D.js";
import "earcut";
import "../../shared-utils/three/getNormal.js";
import "../utils/isIntersecting.js";
const E = () => !1;
class Vt extends U {
  constructor(t) {
    super(t);
    s(this, "type", "watch");
    s(this, "deleteDom");
    s(this, "choose");
    // tmd 真没时间改了，先这样吧，理解万岁
    s(this, "highlightedLines", []);
    s(this, "highlightedArea");
    s(this, "fiveElement");
    s(this, "editPointState");
    s(this, "hammer");
    s(this, "onPanStart", (t) => {
      var p;
      if (this.model.getAllLines().length === 0 || !this.fiveElement)
        return;
      const i = C(t).point, e = (p = j(this.five, this.model.getAllPoints(), i, 20)) == null ? void 0 : p.point;
      if (!e) {
        this.editPointState = void 0;
        return;
      }
      const n = this.model.polylines.find((a) => a.includes(e)), l = {
        point: e,
        associatedLines: n.lines
      };
      this.hook.emit("wantsDragLine", {
        point: e.id,
        lines: l.associatedLines.map(({ id: a }) => a)
      }) || (this.editPointState = l, this.magnifier.appendTo(this.container), this.magnifier.enable(), this.group.add(this.mouseGroup));
    });
    s(this, "onPanEnd", () => {
      this.editPointState && (this.editPointState.associatedLines.forEach((t) => t.mesh.setMaterial({ dashed: !1 })), this.highlightLines(this.editPointState.associatedLines), this.editPointState = void 0, this.magnifier.disable(), this.group.remove(this.mouseGroup));
    });
    s(this, "onPan", (t) => {
      if (!this.editPointState || !this.fiveElement)
        return;
      const i = C(t).ndcPoint, e = new M();
      e.setFromCamera(i, this.five.camera);
      const [n] = D(this.five).intersectRaycaster(e);
      n && this.onIntersectionUpdate(n);
    });
    s(this, "onIntersectionUpdate", (t, i) => {
      if (this.editPointState) {
        if (this.clearHighlightLines(), this.editPointState.point.position.copy(t.point), this.editPointState.associatedLines.forEach((e) => {
          e.mesh.setPoints(e.points[0].position.clone(), e.points[1].position.clone()), e.lightMesh.setPoints(e.points[0].position.clone(), e.points[1].position.clone()), e.mesh.setMaterial({ dashed: !0 });
        }), this.updateDistanceUI(), this.magnifier.renderWithPoint(t.point), this.mouseGroup.position.copy(t.point), i)
          this.mouseGroup.quaternion.copy(i.quaternion);
        else if (t.face) {
          const n = t.face.normal.clone().multiplyScalar(0.05), d = t.point.clone().add(n).clone().add(n);
          this.mouseGroup.lookAt(d);
        }
        this.five.needsRender = !0, this.hook.emit(
          "selectedChange",
          this.editPointState.associatedLines.map((e) => e)
        );
      }
    });
    s(this, "wantsPanGesture", () => {
      if (this.editPointState)
        return !1;
    });
    s(this, "wantsTapGesture", (t) => {
      var S;
      const i = this.model.areas.map((o) => t.intersectObject(o.polygon, !0)[0]).sort((o, h) => o.distance - h.distance), e = (S = i[0]) == null ? void 0 : S.object.parent;
      if (e instanceof F) {
        const o = this.model.areas.find((h) => h.polygon === e);
        if (o) {
          const { x: h, y: u } = i[0].point.clone().project(this.five.camera), m = `${(h + 1) / 2 * 100}%`, g = `${(-u + 1) / 2 * 100}%`;
          return this.chooseArea(o, { left: m, top: g }), !1;
        }
      }
      const n = D(this.five), [l] = n.intersectRaycaster(t);
      if (!l)
        return;
      const d = this.five.camera, p = l.point.clone().project(d), a = this.container.clientWidth, f = this.container.clientHeight, P = new L(p.x * a, p.y * f), v = this.model.getAllLines().map((o) => {
        const [h, u] = o.points, m = h.position.clone().project(d), g = u.position.clone().project(d);
        if (!w(m) && !w(g))
          return null;
        const H = new L(m.x * a, m.y * f), k = new L(g.x * a, g.y * f);
        return { id: o.id, points: [H, k] };
      }).filter((o) => !!o);
      if (v.length === 0)
        return;
      const y = v.map((o) => {
        const h = b(P, o.points);
        return { id: o.id, distance: h.distanceTo(P) };
      }).sort((o, h) => o.distance - h.distance)[0];
      if (y.distance > 20)
        return;
      const A = this.model.getAllLines().find(({ id: o }) => o === y.id);
      if (A)
        return this.chooseLine(A), !1;
    });
    s(this, "chooseLine", (t) => {
      this.choose = "line";
      const i = t.getPolyline().lines;
      this.deleteDom.setLines(i).updatePosition().show(), this.highlightLines(i), this.five.needsRender = !0, this.hook.emit(
        "selectedChange",
        i.map((e) => e)
      );
    });
    s(this, "chooseArea", (t, i) => {
      this.choose = t, this.deleteDom.updatePosition(i.left, `calc(${i.top} - 20px)`).show(), this.highlightArea(t);
    });
    s(this, "polylineRemoved", (t) => {
      t.lines.forEach((i) => this.removeLine(i)), this.hook.emit(
        "selectedChange",
        this.model.getAllLines().filter((i) => i.selected).map((i) => i)
      );
    });
    s(this, "onCameraUpdate", () => {
      this.updateDistanceUI(), this.highlightedLines.length > 0 && this.deleteDom.updatePosition();
    });
    s(this, "deleteArea", (t) => {
      this.unHighlightArea(t), t.dispose(), this.deleteDom.hide();
    });
    s(this, "deleteLine", () => {
      const t = this.highlightedLines[0], i = this.model.getPolylineByLine(t);
      i && (this.model.removePolyline(i), this.highlightedLines = [], this.deleteDom.setLines([]).hide());
    });
    s(this, "cancelDeleteClickCallback", () => {
      this.deleteDom.hide(), this.clearHighlightLines(), this.unHighlightArea();
    });
    this.deleteDom = new T(this.five, {
      i18n: this.config.i18n,
      onClick: () => {
        this.choose === "line" ? this.deleteLine() : this.choose instanceof x && this.deleteArea(this.choose);
      },
      cancel: this.cancelDeleteClickCallback
    }).appendTo(this.container), this.model.getAllLines().forEach((e) => {
      e.distanceItem.appendTo(this.container), e.distanceItem.update(this.five), e.hook.on("selected", this.chooseLine), e.distanceItem.setCanSelect(!0), this.group.add(e.mesh);
    }), this.model.getAllAreas().forEach((e) => {
      e.areaItem.appendTo(this.container), e.areaItem.updateArea(this.five), e.hook.on("selected", this.chooseArea), e.areaItem.setCanSelect(!0), this.group.add(e.polygon), e.polyline.lines.forEach((n) => {
        n.distanceItem.appendTo(this.container), n.distanceItem.update(this.five), this.group.add(n.mesh);
      });
    });
    const i = this.five.getElement();
    if (i) {
      this.fiveElement = i;
      const e = new G(i);
      this.hammer = e, e.on("pan", this.onPan), e.on("panstart", this.onPanStart), e.on("panend", this.onPanEnd);
    }
    this.updateDistanceUI(), this.five.needsRender = !0, this.five.on("cameraUpdate", this.onCameraUpdate), this.five.on("wantsTapGesture", this.wantsTapGesture), this.five.on("wantsPanGesture", this.wantsPanGesture), this.five.on("wantsChangeMode", E), this.model.hook.on("polylineRemoved", this.polylineRemoved);
  }
  dispose() {
    var t;
    super.dispose(), this.deleteDom.dispose(), this.model.hook.off("polylineRemoved", this.polylineRemoved), this.model.getAllLines().forEach((i) => i.hook.off("selected", this.chooseLine)), this.five.off("cameraUpdate", this.onCameraUpdate), this.five.off("wantsPanGesture", this.wantsPanGesture), this.five.off("wantsTapGesture", this.wantsTapGesture), this.five.off("wantsChangeMode", E), this.five.needsRender = !0, this.hook.emit("selectedChange", []), (t = this.hammer) == null || t.destroy();
  }
  highlightLine(t) {
    t.selected || (t.selected = !0, this.group.add(t.lightMesh), t.distanceItem.highlight(), this.five.needsRender = !0);
  }
  clearHighlightLines() {
    this.group.children.length !== 0 && (this.unHighlightLines(this.highlightedLines), this.highlightedLines = []);
  }
  highlightArea(t) {
    this.unHighlightLines(), this.unHighlightArea(), this.highlightLines(t.polyline.lines), this.five.needsRender = !0;
  }
  unHighlightArea(t) {
    const i = t != null ? t : this.highlightedArea;
    i && (this.unHighlightLines(i.polyline.lines), this.five.needsRender = !0);
  }
  highlightLines(t) {
    this.unHighlightLines(), this.highlightedLines = t, t.forEach((i) => this.highlightLine(i));
  }
  unHighlightLines(t) {
    this.unHighlightArea();
    const i = t != null ? t : this.highlightedLines;
    i && i.forEach((e) => {
      e.selected = !1, e.distanceItem.unHighlight(), this.group.remove(e.lightMesh), this.five.needsRender = !0;
    });
  }
}
export {
  Vt as default
};
