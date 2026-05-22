var b = Object.defineProperty, g = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var d = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var n = (t, i, e) => i in t ? b(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e, p = (t, i) => {
  for (var e in i || (i = {}))
    v.call(i, e) && n(t, e, i[e]);
  if (d)
    for (var e of d(i))
      o.call(i, e) && n(t, e, i[e]);
  return t;
}, u = (t, i) => g(t, H(i));
var r = (t, i, e) => (n(t, typeof i != "symbol" ? i + "" : i, e), e);
import * as c from "three";
import { Magnifier as k } from "../../Magnifier.js";
import "../index.js";
import { PointHelper as w } from "./PointHelper.js";
import { Subscribe as E } from "../../../Subscribe.js";
import { PointHelper2 as P } from "./PointHelper2.js";
import "../../core/Sphere.js";
import "../../blink.js";
import "../../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../tag.js";
import "../../CSS3DRenderer/index.js";
import "../../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../../../five/FivePuppet.js";
import "../../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../../vendor/earcut/src/earcut.js";
class B {
  constructor(i, e) {
    r(this, "five");
    r(this, "hooks", new E());
    r(this, "position", null);
    r(this, "magnifier", null);
    r(this, "pointHelper", null);
    r(this, "state", { enabled: !1, visible: !0 });
    r(this, "group", new c.Group());
    r(this, "show", () => {
      var i, e;
      this.state.visible || (this.state.visible = !0, (i = this.pointHelper) == null || i.show(), (e = this.magnifier) == null || e.enable(), this.five.needsRender = !0);
    });
    r(this, "hide", () => {
      var i, e;
      this.state.visible && (this.state.visible = !1, (i = this.pointHelper) == null || i.hide(), (e = this.magnifier) == null || e.disable(), this.five.needsRender = !0);
    });
    r(this, "updateWithIntersect", (i, e = { emitEvent: !0 }) => {
      var l;
      if (!i)
        return;
      this.abortUpdateMagnifier(), this.position = i, e.emitEvent && this.hooks.emit("intersectionUpdate", i), (l = this.pointHelper) == null || l.updateWithIntersect(i);
      const a = () => {
        var h;
        return (h = this.magnifier) == null ? void 0 : h.renderWithPoint(i.point);
      };
      this.abortUpdateMagnifier = () => this.five.off("renderFrame", a), this.five.once("renderFrame", a), this.five.needsRender = !0;
    });
    r(this, "abortUpdateMagnifier", () => {
    });
    var l, h, s, f, m;
    this.five = i, this.magnifier = (e == null ? void 0 : e.magnifier) !== void 0 ? e.magnifier : new k(i, u(p({ dragEnabled: !0 }, e == null ? void 0 : e.magnifierParams), { skipPanorama: (l = e == null ? void 0 : e.skipPanorama) != null ? l : !1 }));
    let a = null;
    (e == null ? void 0 : e.pointHelper) === "default" || (e == null ? void 0 : e.pointHelper) === void 0 ? a = new w(i) : (e == null ? void 0 : e.pointHelper) === "highlight" ? a = new P(i) : (e == null ? void 0 : e.pointHelper) === null ? a = null : a = e.pointHelper, this.pointHelper = a, this.group.name = "five-point-selector", this.five.scene.add(this.group), (m = this.magnifier) == null || m.appendTo((f = (s = e.container) != null ? s : (h = i.getElement()) == null ? void 0 : h.parentElement) != null ? f : document.body);
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
  B as PointSelectorHelper
};
