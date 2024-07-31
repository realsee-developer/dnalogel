var r = Object.defineProperty;
var a = (n, o, e) => o in n ? r(n, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[o] = e;
var s = (n, o, e) => (a(n, typeof o != "symbol" ? o + "" : o, e), e);
import h from "hammerjs";
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
  constructor(e) {
    super(e);
    s(this, "type", "view");
    s(this, "hammer");
    s(this, "polylineRemoved", (e) => {
      e.lines.forEach((i) => this.removeLine(i)), this.hook.emit(
        "selectedChange",
        this.model.getAllLines().filter((i) => i.selected).map((i) => i)
      );
    });
    s(this, "polylineAdded", (e) => {
      const { panoIndex: i, mode: t } = this.five.getCurrentState();
      e.lines.forEach((d) => {
        e.visibleFiveMode && !e.visibleFiveMode.includes(t) && (d.mesh.visible = !1), e.visiblePanoIndexes && !e.visiblePanoIndexes.includes(i) && (d.mesh.visible = !1), d.distanceItem.appendTo(this.container), d.distanceItem.update(this.five), this.group.add(d.mesh);
      }), this.updateDistanceUI();
    });
    s(this, "onCameraUpdate", () => {
      this.updateDistanceUI();
    });
    s(this, "onFiveModeChange", (e) => {
      this.model.polylines.forEach((i) => {
        i.visibleFiveMode && (i.visibleFiveMode.includes(e) || i.lines.forEach((t) => {
          t.mesh.visible = !1, t.distanceItem.update(this.five);
        }));
      }), this.five.ready().then(() => {
        const i = this.five.getCurrentState().mode;
        this.model.polylines.forEach((t) => {
          t.visibleFiveMode && t.visibleFiveMode.includes(i) && t.lines.forEach((d) => {
            d.mesh.visible = !0, d.distanceItem.update(this.five);
          });
        });
      });
    });
    s(this, "onFivePanoWillArrive", (e) => {
      this.model.polylines.forEach((i) => {
        i.visiblePanoIndexes && (i.visiblePanoIndexes.includes(e) || i.lines.forEach((t) => {
          t.mesh.visible = !1, t.distanceItem.update(this.five);
        }));
      });
    });
    s(this, "onFivePanoArrived", (e) => {
      this.model.polylines.forEach((i) => {
        i.visiblePanoIndexes && i.visiblePanoIndexes.includes(e) && i.lines.forEach((t) => {
          t.mesh.visible = !0, t.distanceItem.update(this.five);
        });
      });
    });
    this.model.getAllLines().forEach((t) => {
      t.distanceItem.appendTo(this.container), t.distanceItem.update(this.five), this.group.add(t.mesh), t.mesh.updateMatrixWorld();
    });
    const i = this.five.getElement();
    if (i) {
      const t = new h(i);
      this.hammer = t;
    }
    this.onFivePanoWillArrive(this.five.getCurrentState().panoIndex), this.onFivePanoArrived(this.five.getCurrentState().panoIndex), this.onFiveModeChange(this.five.getCurrentState().mode), this.updateDistanceUI(), this.five.needsRender = !0, this.model.hook.on("polylineAdded", this.polylineAdded), this.model.hook.on("polylineRemoved", this.polylineRemoved), this.five.on("cameraUpdate", this.onCameraUpdate), this.five.on("panoArrived", this.onFivePanoArrived), this.five.on("modeChange", this.onFiveModeChange), this.five.on("panoWillArrive", this.onFivePanoWillArrive);
  }
  dispose() {
    var e;
    super.dispose(), this.model.hook.off("polylineAdded", this.polylineAdded), this.model.hook.off("polylineRemoved", this.polylineRemoved), this.five.off("cameraUpdate", this.onCameraUpdate), this.five.off("panoArrived", this.onFivePanoArrived), this.five.off("modeChange", this.onFiveModeChange), this.five.off("panoWillArrive", this.onFivePanoWillArrive), this.five.needsRender = !0, this.hook.emit("selectedChange", []), (e = this.hammer) == null || e.destroy();
  }
}
export {
  R as default
};
