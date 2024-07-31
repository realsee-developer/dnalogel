var l = Object.defineProperty;
var h = (r, i, e) => i in r ? l(r, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[i] = e;
var t = (r, i, e) => (h(r, typeof i != "symbol" ? i + "" : i, e), e);
import * as p from "three";
import { Magnifier as d } from "./Magnifier.js";
import { PointHelper as m } from "./PointHelper.js";
import { PointDomHelper as o } from "./PointDomHelper.js";
import { Subscribe as f } from "../Subscribe.js";
import "animejs";
class D {
  constructor(i, e) {
    t(this, "five");
    t(this, "hooks", new f());
    t(this, "position");
    t(this, "magnifier", null);
    t(this, "pointHelper", null);
    t(this, "pointDomHelper", null);
    t(this, "state", { enabled: !1, visible: !0 });
    t(this, "group", new p.Group());
    t(this, "show", () => {
      this.state.visible || (this.state.visible = !0, this.pointHelper.visible = !0, this.pointDomHelper.enable(), this.magnifier.enable(), this.five.needsRender = !0);
    });
    t(this, "hide", () => {
      this.state.visible && (this.state.visible = !1, this.pointHelper.visible = !1, this.pointDomHelper.disable(), this.magnifier.disable(), this.five.needsRender = !0);
    });
    t(this, "updateWithIntersect", (i, e = { emitEvent: !0 }) => {
      var n;
      this.abortUpdateMagnifier(), this.position = i, e.emitEvent && this.hooks.emit("intersectionUpdate", i), this.pointHelper.updateWithIntersect(i), (n = this.pointDomHelper) == null || n.updateWithIntersect(i);
      const s = () => this.magnifier.renderWithPoint(i.point);
      this.abortUpdateMagnifier = () => this.five.off("renderFrame", s), this.five.once("renderFrame", s), this.five.needsRender = !0;
    });
    t(this, "abortUpdateMagnifier", () => {
    });
    var s, n, a;
    this.five = i, this.magnifier = (e == null ? void 0 : e.magnifier) !== void 0 ? e.magnifier : new d(i, (s = e == null ? void 0 : e.magnifierParams) != null ? s : { dragEnabled: !0 }), this.pointHelper = (e == null ? void 0 : e.pointHelper) !== void 0 ? e.pointHelper : new m(), this.pointDomHelper = (e == null ? void 0 : e.pointDomHelper) !== void 0 ? e.pointDomHelper : new o(i), this.group.name = "five-point-selector", this.five.scene.add(this.group), this.magnifier.appendTo((a = (n = e.container) != null ? n : i.getElement().parentElement) != null ? a : document.body);
  }
  enable() {
    var i, e;
    this.state.enabled || (this.state.enabled = !0, this.pointHelper && this.group.add(this.pointHelper), (i = this.magnifier) == null || i.enable(), (e = this.pointDomHelper) == null || e.enable(), this.five.needsRender = !0, this.hooks.emit("enabled"));
  }
  disable() {
    var i, e;
    this.state.enabled && (this.state.enabled = !1, this.pointHelper && this.group.remove(this.pointHelper), (i = this.magnifier) == null || i.disable(), (e = this.pointDomHelper) == null || e.disable(), this.hooks.emit("disabled"));
  }
  dispose() {
    this.hooks.off(), this.disable(), this.magnifier = null, this.pointHelper = null, this.pointDomHelper = null;
  }
}
export {
  D as PointSelectorHelper
};
