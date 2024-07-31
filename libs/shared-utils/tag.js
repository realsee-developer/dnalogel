var c = Object.defineProperty;
var p = (s, t, e) => t in s ? c(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var i = (s, t, e) => (p(s, typeof t != "symbol" ? t + "" : t, e), e);
import { anyPositionToVector3 as f } from "./positionToVector3.js";
import * as d from "three";
import { vector3ToScreen as y } from "./five/vector3ToScreen.js";
import { getFiveModel as m } from "./five/getFiveModel.js";
const l = "LightTagContainer_shgjakdhwakjdhsja";
class v {
  constructor(t, e, n) {
    i(this, "container");
    i(this, "visible", !1);
    i(this, "enabled", !1);
    i(this, "wrapper");
    i(this, "five");
    i(this, "originPosition");
    i(this, "transformedPosition");
    i(this, "disposer");
    i(this, "config");
    i(this, "onCameraUpdate", () => {
      if (this.visible === !1)
        return;
      const t = y(this.five.camera, this.transformedPosition);
      t ? (this.container.style.left = t.leftPercent + "%", this.container.style.top = t.topPercent + "%") : (this.container.style.left = "-100%", this.container.style.top = "-100%");
    });
    i(this, "onFiveEveryReady", () => {
      var t;
      if (this.visible && this.five.state.mode !== "Panorama") {
        const e = new d.Raycaster();
        e.set(this.five.camera.position, this.transformedPosition.clone().sub(this.five.camera.position));
        const n = (t = m(this.five).intersectRaycaster(e)) == null ? void 0 : t[0];
        (n == null ? void 0 : n.distance) > this.transformedPosition.distanceTo(this.five.camera.position) ? (this.container.style.opacity = "1", this.container.style.pointerEvents = "auto") : (this.container.style.opacity = "0", this.container.style.pointerEvents = "none");
      }
    });
    this.five = t, this.originPosition = f(e).clone(), this.transformedPosition = this.originPosition.clone(), this.container = (() => {
      const o = document.createElement("div");
      return o.style.width = "0", o.style.height = "0", o.style.position = "absolute", o;
    })(), this.config = n, this.enable(), this.show();
  }
  show() {
    this.visible = !0, this.container.style.opacity = "1", this.container.style.pointerEvents = "auto", this.container.style.transition = "opacity 0.2s linear", this.onCameraUpdate();
  }
  hide(t) {
    this.visible = !1, t != null && t.withAnimation ? this.container.style.transition = "opacity 0.2s linear" : this.container.style.transition = "", this.container.style.opacity = "0", this.container.style.pointerEvents = "none";
  }
  enable() {
    var n, o, a, h;
    if (this.enabled)
      return;
    this.enabled = !0, this.wrapper || (this.wrapper = (o = (n = this.config.wrapper) != null ? n : document.getElementById(l)) != null ? o : (() => {
      const r = document.createElement("div");
      return r.id = l, r.style.position = "absolute", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.height = "100%", r.style.pointerEvents = "none", r;
    })(), (a = this.five.getElement()) != null && a.parentElement.contains(this.wrapper) || (h = this.five.getElement()) == null || h.parentElement.appendChild(this.wrapper)), this.wrapper.appendChild(this.container);
    let t = !1;
    const e = () => {
      t || (t = !0, this.five.ready().then(() => {
        this.onFiveEveryReady(), t = !1;
      }));
    };
    this.five.on("cameraUpdate", e), this.five.on("cameraUpdate", this.onCameraUpdate), this.disposer = () => {
      this.five.off("cameraUpdate", e), this.five.off("cameraUpdate", this.onCameraUpdate);
    };
  }
  disable() {
    var t;
    this.enabled && (this.enabled = !1, this.wrapper.removeChild(this.container), (t = this.disposer) == null || t.call(this));
  }
  setTransformMatrix(t) {
    this.transformedPosition = this.originPosition.clone().applyMatrix4(t), this.onCameraUpdate();
  }
}
function E(s, t, e) {
  return new v(s, t, e);
}
export {
  E as tag
};
