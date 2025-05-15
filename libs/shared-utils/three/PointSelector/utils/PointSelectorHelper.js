var d = Object.defineProperty;
var m = (a, i, e) => i in a ? d(a, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[i] = e;
var t = (a, i, e) => (m(a, typeof i != "symbol" ? i + "" : i, e), e);
import * as p from "three";
import { Magnifier as u } from "../../Magnifier.js";
import "../index.js";
import { PointHelper as o } from "./PointHelper.js";
import { Subscribe as b } from "../../../Subscribe.js";
import { PointHelper2 as g } from "./PointHelper2.js";
import "../../core/Sphere.js";
import "../../../../vendor/animejs/lib/anime.es.js";
import "../../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../tag.js";
import "../../CSS3DRenderer/index.js";
import "../../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../../../five/FivePuppet.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
class T {
  constructor(i, e) {
    t(this, "five");
    t(this, "hooks", new b());
    t(this, "position", null);
    t(this, "magnifier", null);
    t(this, "pointHelper", null);
    t(this, "state", { enabled: !1, visible: !0 });
    t(this, "group", new p.Group());
    t(this, "show", () => {
      var i, e;
      this.state.visible || (this.state.visible = !0, (i = this.pointHelper) == null || i.show(), (e = this.magnifier) == null || e.enable(), this.five.needsRender = !0);
    });
    t(this, "hide", () => {
      var i, e;
      this.state.visible && (this.state.visible = !1, (i = this.pointHelper) == null || i.hide(), (e = this.magnifier) == null || e.disable(), this.five.needsRender = !0);
    });
    t(this, "updateWithIntersect", (i, e = { emitEvent: !0 }) => {
      var s;
      if (!i)
        return;
      this.abortUpdateMagnifier(), this.position = i, e.emitEvent && this.hooks.emit("intersectionUpdate", i), (s = this.pointHelper) == null || s.updateWithIntersect(i);
      const r = () => {
        var n;
        return (n = this.magnifier) == null ? void 0 : n.renderWithPoint(i.point);
      };
      this.abortUpdateMagnifier = () => this.five.off("renderFrame", r), this.five.once("renderFrame", r), this.five.needsRender = !0;
    });
    t(this, "abortUpdateMagnifier", () => {
    });
    var s, n, l, h, f;
    this.five = i, this.magnifier = (e == null ? void 0 : e.magnifier) !== void 0 ? e.magnifier : new u(i, (s = e == null ? void 0 : e.magnifierParams) != null ? s : { dragEnabled: !0 });
    let r;
    (e == null ? void 0 : e.pointHelper) === "default" || (e == null ? void 0 : e.pointHelper) === void 0 ? r = new o(i) : (e == null ? void 0 : e.pointHelper) === "highlight" ? r = new g(i) : r = e.pointHelper, this.pointHelper = r, this.group.name = "five-point-selector", this.five.scene.add(this.group), (f = this.magnifier) == null || f.appendTo((h = (l = e.container) != null ? l : (n = i.getElement()) == null ? void 0 : n.parentElement) != null ? h : document.body);
  }
  enable() {
    var i;
    this.state.enabled || (this.state.enabled = !0, this.pointHelper && this.group.add(this.pointHelper), (i = this.magnifier) == null || i.enable(), this.five.needsRender = !0, this.hooks.emit("enabled"));
  }
  disable() {
    var i;
    this.state.enabled && (this.state.enabled = !1, this.pointHelper && this.group.remove(this.pointHelper), (i = this.magnifier) == null || i.disable(), this.hooks.emit("disabled"));
  }
  dispose() {
    this.hooks.off(), this.disable(), this.magnifier = null, this.pointHelper = null;
  }
}
export {
  T as PointSelectorHelper
};
