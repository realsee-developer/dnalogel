var y = Object.defineProperty;
var D = (n, s, e) => s in n ? y(n, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[s] = e;
var t = (n, s, e) => (D(n, typeof s != "symbol" ? s + "" : s, e), e);
import { Model as S } from "../Model/index.js";
import T from "../Model/line.js";
import M from "./BaseController.js";
import G from "../Modules/DeleteDom/index.js";
import { Vector2 as p } from "three";
import L from "../utils/isNDCPointInScreen.js";
import { closestPointOnLine as W } from "../utils/math.js";
import { Polyline as C } from "../Model/polyline.js";
import E from "../Modules/rangePiece/index.js";
import { getFiveModel as N } from "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Subscribe.js";
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
import "../Modules/DeleteDom/_Assets/delete.svg.js";
import "../Modules/DeleteDom/_Assets/delete_bg.png.js";
import "../Modules/DeleteDom/_Assets/delete_hover_bg.png.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/animationFrame/index.js";
import "../../shared-utils/noop.js";
import "../utils/mouseGroup.js";
import "../../shared-utils/five/calculateThreeMouse.js";
class me extends M {
  constructor(e) {
    super(e);
    t(this, "state", "watching");
    t(this, "polyline");
    t(this, "hasAppendDashed", !1);
    t(this, "mobileStartPoint", null);
    t(this, "mobileNowPoint", null);
    t(this, "highlightedLines", []);
    t(this, "deleteDom");
    t(this, "rangePieceController");
    t(this, "disposers", []);
    t(this, "onWantsTapGesture", (e) => {
      if (this.state === "editing")
        return !1;
      const i = N(this.five), [r] = i.intersectRaycaster(e);
      if (!r)
        return;
      const a = this.five.camera, g = r.point.clone().project(a), l = this.container.clientWidth, d = this.container.clientHeight, f = new p(g.x * l, g.y * d), u = this.model.getAllLines().map((o) => {
        const [h, w] = o.points, c = h.position.clone().project(a), m = w.position.clone().project(a);
        if (!L(c) && !L(m))
          return null;
        const k = new p(c.x * l, c.y * d), b = new p(m.x * l, m.y * d);
        return { id: o.id, points: [k, b] };
      }).filter((o) => !!o);
      if (u.length === 0)
        return;
      const P = u.map((o) => {
        const h = W(f, o.points);
        return { id: o.id, distance: h.distanceTo(f) };
      }).sort((o, h) => o.distance - h.distance)[0];
      if (P.distance > 20)
        return;
      const v = this.model.getAllLines().find(({ id: o }) => o === P.id);
      if (v)
        return this.chooseLine(v), !1;
    });
    /** 编辑时取消走点,watch时可以走 */
    t(this, "onWantsToMoveToPano", () => this.state === "watching");
    /** 移动全景时更新 distanceItem 在屏幕上的位置 */
    t(this, "onCameraUpdate", () => {
      this.updateDistanceUI(), this.dashed.distanceItem.update(this.five);
    });
    /** mobile态时更新虚线 */
    t(this, "updateMobileDashed", () => {
      !this.mobileStartPoint || !this.mobileNowPoint || (this.dashed.setPoints(this.mobileStartPoint.position, this.mobileNowPoint.position), this.dashed.distanceItem.update(this.five), this.hook.emit("editedDashedLineChange", this.dashed));
    });
    /** mobile态时更新放大镜 */
    t(this, "updateMagnifier", (e) => {
      this.magnifier.containerDom !== this.container && this.magnifier.appendTo(this.container), this.magnifier.state.enabled || this.magnifier.enable(), requestAnimationFrame(() => this.magnifier.renderWithPoint(e.position)), this.five.needsRender = !0;
    });
    t(this, "onGetStartPoint", (e) => {
      this.mobileStartPoint = e, this.polyline = new C({ model: this.model }), this.polyline.hook.on("lineAdded", () => this.hook.emit("editedPolylineChange", this.polyline)), this.polyline.hook.on("lineRemoved", () => this.hook.emit("editedPolylineChange", this.polyline));
    });
    t(this, "onGetEndPoint", () => {
      const e = this.mobileNowPoint;
      if (this.removeLine(this.dashed), this.hasAppendDashed = !1, this.mobileStartPoint && e) {
        const i = new T(this.mobileStartPoint, e, this.model);
        this.polyline.addLine(i), i.distanceItem.appendTo(this.container), i.distanceItem.update(this.five), i.hook.on("selected", this.chooseLine), this.disposers.push(() => i.hook.off("selected", this.chooseLine)), this.group.add(i.mesh), this.model.addPolyline(this.polyline);
      }
      this.mobileStartPoint = null, this.mobileNowPoint = null, this.five.needsRender = !0;
    });
    t(this, "onNowPointChange", (e) => {
      if (this.state === "watching") {
        this.mobileNowPoint = e, this.updateMagnifier(e);
        return;
      }
      this.hasAppendDashed || (this.dashed.distanceItem.appendTo(this.container), this.group.add(this.dashed.mesh), this.hasAppendDashed = !0), this.five.needsRender = !0, this.mobileNowPoint = e, this.updateMobileDashed(), this.updateMagnifier(e), this.five.needsRender = !0;
    });
    t(this, "onWillChangeState", (e, i) => {
      this.state = i, this.state === "watching" ? this.five.helperVisible = !0 : this.five.helperVisible = !1;
    });
    t(this, "chooseLine", (e) => {
      const i = e.getPolyline().lines;
      this.highlightLines(i), this.five.needsRender = !0, this.hook.emit(
        "selectedChange",
        i.map((r) => r)
      );
    });
    t(this, "deleteDomClickCallback", () => {
      this.highlightedLines.forEach((e) => {
        this.removeLine(e);
        const i = this.model.getPolylineByLine(e);
        this.model.removePolyline(i);
      }), this.highlightedLines = [], this.deleteDom.setLines([]).hide();
    });
    t(this, "cancelDeleteClickCallback", () => {
      this.clearHighlightLines();
    });
    this.model = new S(this.config), this.polyline = new C({ model: this.model }), this.rangePieceController = new E(e), this.deleteDom = new G(this.five, {
      i18n: this.config.i18n,
      onClick: this.deleteDomClickCallback,
      cancel: this.cancelDeleteClickCallback
    }).appendTo(this.container), this.five.on("cameraUpdate", this.onCameraUpdate), this.five.on("wantsTapGesture", this.onWantsTapGesture), this.five.on("wantsToMoveToPano", this.onWantsToMoveToPano), this.five.helperVisible = !1, this.hook.emit("editedDashedLineChange", null), this.hook.on("getStartPoint", this.onGetStartPoint), this.hook.on("getEndPoint", this.onGetEndPoint), this.hook.on("nowPointChange", this.onNowPointChange), this.hook.on("willChangeState", this.onWillChangeState), this.five.refresh();
  }
  dispose() {
    super.dispose(), this.disposers.forEach((e) => e()), this.five.helperVisible = !0, this.rangePieceController.dispose(), this.group.remove(this.mouseGroup), this.dashed.remove(), this.perpendicularDashed.remove(), this.five.off("cameraUpdate", this.onCameraUpdate), this.five.off("wantsTapGesture", this.onWantsTapGesture), this.five.off("wantsToMoveToPano", this.onWantsToMoveToPano), this.hook.off("getStartPoint", this.onGetStartPoint), this.hook.off("getEndPoint", this.onGetEndPoint), this.hook.off("nowPointChange", this.onNowPointChange), this.hook.off("willChangeState", this.onWillChangeState), this.hook.emit("selectedChange", []), this.five.needsRender = !0;
  }
  highlightLine(e) {
    e.selected || (e.selected = !0, this.group.add(e.lightMesh), e.distanceItem.highlight(), this.five.needsRender = !0);
  }
  clearHighlightLines() {
    this.group.children.length !== 0 && (this.deleteDom.setLines([]).hide(), this.model.getAllLines().forEach((e) => {
      e.selected = !1, e.distanceItem.unHighlight(), this.group.remove(e.lightMesh);
    }), this.highlightedLines = [], this.five.needsRender = !0);
  }
  getEditingLines() {
    return this.model.polylines;
  }
  highlightLines(e) {
    this.clearHighlightLines(), this.highlightedLines = e, this.deleteDom.setLines(e).updatePosition().show(), e.forEach((i) => this.highlightLine(i));
  }
}
export {
  me as default
};
