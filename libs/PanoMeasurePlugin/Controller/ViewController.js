var r = Object.defineProperty;
var n = (a, o, i) => o in a ? r(a, o, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[o] = i;
var s = (a, o, i) => (n(a, typeof o != "symbol" ? o + "" : o, i), i);
import { hammerExports as h } from "../../vendor/hammerjs/hammer.js";
import v from "./BaseController.js";
import "three";
import "../Model/line.js";
import "../../shared-utils/uuid.js";
import "../utils/line.js";
import "../../shared-utils/five/FiveLine.js";
import "@realsee/five/line";
import "../utils/constants.js";
import "@realsee/five";
import "../utils/dom/distanceItem.js";
import "../utils/dom/base.js";
import "../utils/isNDCPointInScreen.js";
import "../../shared-utils/three/centerPoint.js";
import "../Model/point.js";
import "../utils/ironbox.js";
class R extends v {
  constructor(i) {
    super(i);
    s(this, "type", "view");
    s(this, "hammer");
    s(this, "polylineRemoved", (i) => {
      i.lines.forEach((e) => this.removeLine(e)), this.hook.emit(
        "selectedChange",
        this.model.getAllLines().filter((e) => e.selected).map((e) => e)
      );
    });
    s(this, "polylineAdded", (i) => {
      const { panoIndex: e, mode: t } = this.five.getCurrentState();
      i.lines.forEach((d) => {
        i.visibleFiveMode && !i.visibleFiveMode.includes(t) && (d.mesh.visible = !1), i.visiblePanoIndexes && !i.visiblePanoIndexes.includes(e) && (d.mesh.visible = !1), d.distanceItem.appendTo(this.container), d.distanceItem.update(this.five), this.group.add(d.mesh);
      }), this.updateDistanceUI();
    });
    s(this, "onCameraUpdate", () => {
      this.updateDistanceUI();
    });
    s(this, "onFiveModeChange", (i) => {
      i !== "Panorama" && (this.model.polylines.forEach((e) => {
        e.visibleFiveMode && !e.visibleFiveMode.includes(i) && e.lines.forEach((t) => {
          t.mesh.visible = !1, t.distanceItem.update(this.five);
        });
      }), this.five.ready().then(() => {
        const e = this.five.getCurrentState().mode;
        e !== "Panorama" && this.model.polylines.forEach((t) => {
          t.visibleFiveMode && t.visibleFiveMode.includes(e) && t.lines.forEach((d) => {
            d.mesh.visible = !0, d.distanceItem.update(this.five);
          });
        });
      }));
    });
    s(this, "onFivePanoWillArrive", (i) => {
      this.model.polylines.forEach((e) => {
        (e.visiblePanoIndexes && !e.visiblePanoIndexes.includes(i) || e.visibleFiveMode && !e.visibleFiveMode.includes(this.five.getCurrentState().mode)) && e.lines.forEach((t) => {
          t.mesh.visible = !1, t.distanceItem.update(this.five);
        });
      });
    });
    s(this, "onFivePanoArrived", (i) => {
      this.model.polylines.forEach((e) => {
        e.visiblePanoIndexes && e.visiblePanoIndexes.includes(i) && e.visibleFiveMode && e.visibleFiveMode.includes(this.five.getCurrentState().mode) && e.lines.forEach((t) => {
          t.mesh.visible = !0, t.distanceItem.update(this.five);
        });
      });
    });
    this.model.getAllLines().forEach((t) => {
      t.distanceItem.appendTo(this.container), t.distanceItem.update(this.five), this.group.add(t.mesh), t.mesh.updateMatrixWorld();
    });
    const e = this.five.getElement();
    if (e) {
      const t = new h(e);
      this.hammer = t;
    }
    this.onFiveModeChange(this.five.getCurrentState().mode), this.onFivePanoWillArrive(this.five.getCurrentState().panoIndex), this.onFivePanoArrived(this.five.getCurrentState().panoIndex), this.updateDistanceUI(), this.five.needsRender = !0, this.model.hook.on("polylineAdded", this.polylineAdded), this.model.hook.on("polylineRemoved", this.polylineRemoved), this.five.on("cameraUpdate", this.onCameraUpdate), this.five.on("panoArrived", this.onFivePanoArrived), this.five.on("modeChange", this.onFiveModeChange), this.five.on("panoWillArrive", this.onFivePanoWillArrive);
  }
  dispose() {
    var i;
    super.dispose(), this.model.hook.off("polylineAdded", this.polylineAdded), this.model.hook.off("polylineRemoved", this.polylineRemoved), this.five.off("cameraUpdate", this.onCameraUpdate), this.five.off("panoArrived", this.onFivePanoArrived), this.five.off("modeChange", this.onFiveModeChange), this.five.off("panoWillArrive", this.onFivePanoWillArrive), this.five.needsRender = !0, this.hook.emit("selectedChange", []), (i = this.hammer) == null || i.destroy();
  }
}
export {
  R as default
};
