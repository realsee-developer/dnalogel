var I = Object.defineProperty;
var R = (p, r, t) => r in p ? I(p, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[r] = t;
var o = (p, r, t) => (R(p, typeof r != "symbol" ? r + "" : r, t), t);
import { hammerExports as G } from "../../vendor/hammerjs/hammer.js";
import T from "../Modules/DeleteDom/index.js";
import w from "../utils/isNDCPointInScreen.js";
import U from "./BaseController.js";
import { Raycaster as M, Vector2 as L } from "three";
import { closestPointOnLine as b } from "../utils/math.js";
import { findClosestPoint as x } from "../utils/findClosestPoint.js";
import { getPointFromHammerEvent as C } from "../../shared-utils/getPointFromHammerEvent.js";
import j from "../Model/area.js";
import { PolygonMesh as F } from "../Model/polygon.js";
import { getFiveModel as E } from "../../shared-utils/five/getFiveModel.js";
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
import "../../shared-utils/tag.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
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
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/CSS3DRender/index.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../shared-utils/three/IObject3D.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../Sculpt/utils/unit.js";
import "../../Sculpt/utils/renderDom.js";
import "../../shared-utils/five/FivePuppet.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../../Sculpt/utils/three/rayOnLine.js";
import "../../shared-utils/three/generatePolygonGeometry.js";
import "../../shared-utils/three/earcut3D.js";
import "../../vendor/earcut/src/earcut.js";
import "../../shared-utils/three/getNormal.js";
import "../utils/isIntersecting.js";
const D = () => !1;
class De extends U {
  constructor(t) {
    super(t);
    o(this, "type", "watch");
    o(this, "deleteDom");
    o(this, "choose");
    // tmd 真没时间改了，先这样吧，理解万岁
    o(this, "highlightedLines", []);
    o(this, "highlightedArea");
    o(this, "fiveElement");
    o(this, "editPointState");
    o(this, "hammer");
    o(this, "onPanStart", (t) => {
      var l;
      if (this.model.getAllLines().length === 0 || !this.fiveElement)
        return;
      const i = C(t).point, e = (l = x(this.five, this.model.getAllPoints(), i, 20)) == null ? void 0 : l.point;
      if (!e) {
        this.editPointState = void 0;
        return;
      }
      const n = this.model.polylines.find((a) => a.includes(e)), m = {
        point: e,
        associatedLines: n.lines
      };
      this.hook.emit("wantsDragLine", {
        point: e.id,
        lines: m.associatedLines.map(({ id: a }) => a)
      }) || (this.editPointState = m, this.magnifier.appendTo(this.container), this.magnifier.enable(), this.group.add(this.mouseGroup));
    });
    o(this, "onPanEnd", () => {
      this.editPointState && (this.editPointState.associatedLines.forEach((t) => t.mesh.setMaterial({ dashed: !1 })), this.highlightLines(this.editPointState.associatedLines), this.editPointState = void 0, this.magnifier.disable(), this.group.remove(this.mouseGroup));
    });
    o(this, "onPan", (t) => {
      if (!this.editPointState || !this.fiveElement)
        return;
      const i = C(t).ndcPoint, e = new M();
      e.setFromCamera(i, this.five.camera);
      const [n] = E(this.five).intersectRaycaster(e);
      n && this.onIntersectionUpdate(n);
    });
    o(this, "onIntersectionUpdate", (t, i) => {
      if (this.editPointState) {
        if (this.clearHighlightLines(), this.editPointState.point.position.copy(t.point), this.editPointState.associatedLines.forEach((e) => {
          e.mesh.setPoints(e.points[0].position.clone(), e.points[1].position.clone()), e.lightMesh.setPoints(e.points[0].position.clone(), e.points[1].position.clone()), e.mesh.setMaterial({ dashed: !0 });
        }), this.updateDistanceUI(), this.magnifier.renderWithPoint(t.point), this.mouseGroup.position.copy(t.point), i)
          this.mouseGroup.quaternion.copy(i.quaternion);
        else if (t.face) {
          const n = t.face.normal.clone().multiplyScalar(0.05), c = t.point.clone().add(n).clone().add(n);
          this.mouseGroup.lookAt(c);
        }
        this.five.needsRender = !0, this.hook.emit(
          "selectedChange",
          this.editPointState.associatedLines.map((e) => e)
        );
      }
    });
    o(this, "wantsPanGesture", () => {
      if (this.editPointState)
        return !1;
    });
    o(this, "wantsTapGesture", (t) => {
      var S;
      const i = this.model.areas.map((s) => t.intersectObject(s.polygon, !0)[0]).sort((s, h) => s.distance - h.distance), e = (S = i[0]) == null ? void 0 : S.object.parent;
      if (e instanceof F) {
        const s = this.model.areas.find((h) => h.polygon === e);
        if (s) {
          const { x: h, y: u } = i[0].point.clone().project(this.five.camera), d = `${(h + 1) / 2 * 100}%`, g = `${(-u + 1) / 2 * 100}%`;
          return this.chooseArea(s, { left: d, top: g }), !1;
        }
      }
      const n = E(this.five), [m] = n.intersectRaycaster(t);
      if (!m)
        return;
      const c = this.five.camera, l = m.point.clone().project(c), a = this.container.clientWidth, f = this.container.clientHeight, P = new L(l.x * a, l.y * f), v = this.model.getAllLines().map((s) => {
        const [h, u] = s.points, d = h.position.clone().project(c), g = u.position.clone().project(c);
        if (!w(d) && !w(g))
          return null;
        const H = new L(d.x * a, d.y * f), k = new L(g.x * a, g.y * f);
        return { id: s.id, points: [H, k] };
      }).filter((s) => !!s);
      if (v.length === 0)
        return;
      const y = v.map((s) => {
        const h = b(P, s.points);
        return { id: s.id, distance: h.distanceTo(P) };
      }).sort((s, h) => s.distance - h.distance)[0];
      if (y.distance > 20)
        return;
      const A = this.model.getAllLines().find(({ id: s }) => s === y.id);
      if (A)
        return this.chooseLine(A), !1;
    });
    o(this, "chooseLine", (t) => {
      this.choose = "line";
      const i = t.getPolyline().lines;
      this.deleteDom.setLines(i).updatePosition().show(), this.highlightLines(i), this.five.needsRender = !0, this.hook.emit(
        "selectedChange",
        i.map((e) => e)
      );
    });
    o(this, "chooseArea", (t, i) => {
      this.choose = t, this.deleteDom.updatePosition(i.left, `calc(${i.top} - 20px)`).show(), this.highlightArea(t);
    });
    o(this, "polylineRemoved", (t) => {
      t.lines.forEach((i) => this.removeLine(i)), this.hook.emit(
        "selectedChange",
        this.model.getAllLines().filter((i) => i.selected).map((i) => i)
      );
    });
    o(this, "onCameraUpdate", () => {
      this.updateDistanceUI(), this.highlightedLines.length > 0 && this.deleteDom.updatePosition();
    });
    o(this, "deleteArea", (t) => {
      this.unHighlightArea(t), t.dispose(), this.deleteDom.hide();
    });
    o(this, "deleteLine", () => {
      const t = this.highlightedLines[0], i = this.model.getPolylineByLine(t);
      i && (this.model.removePolyline(i), this.highlightedLines = [], this.deleteDom.setLines([]).hide());
    });
    o(this, "cancelDeleteClickCallback", () => {
      this.deleteDom.hide(), this.clearHighlightLines(), this.unHighlightArea();
    });
    this.deleteDom = new T(this.five, {
      i18n: this.config.i18n,
      onClick: () => {
        this.choose === "line" ? this.deleteLine() : this.choose instanceof j && this.deleteArea(this.choose);
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
    this.updateDistanceUI(), this.five.needsRender = !0, this.five.on("cameraUpdate", this.onCameraUpdate), this.five.on("wantsTapGesture", this.wantsTapGesture), this.five.on("wantsPanGesture", this.wantsPanGesture), this.five.on("wantsChangeMode", D), this.model.hook.on("polylineRemoved", this.polylineRemoved);
  }
  dispose() {
    var t;
    super.dispose(), this.deleteDom.dispose(), this.model.hook.off("polylineRemoved", this.polylineRemoved), this.model.getAllLines().forEach((i) => i.hook.off("selected", this.chooseLine)), this.five.off("cameraUpdate", this.onCameraUpdate), this.five.off("wantsPanGesture", this.wantsPanGesture), this.five.off("wantsTapGesture", this.wantsTapGesture), this.five.off("wantsChangeMode", D), this.five.needsRender = !0, this.hook.emit("selectedChange", []), (t = this.hammer) == null || t.destroy();
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
  De as default
};
