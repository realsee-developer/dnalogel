var C = Object.defineProperty, L = Object.defineProperties;
var F = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var b = (h, l, e) => l in h ? C(h, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[l] = e, y = (h, l) => {
  for (var e in l || (l = {}))
    k.call(l, e) && b(h, e, l[e]);
  if (w)
    for (var e of w(l))
      H.call(l, e) && b(h, e, l[e]);
  return h;
}, P = (h, l) => L(h, F(l));
var i = (h, l, e) => (b(h, typeof l != "symbol" ? l + "" : l, e), e);
import * as c from "three";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import { Subscribe as T } from "../shared-utils/Subscribe.js";
import { PointSelector as I } from "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { LineMesh as D } from "../Sculpt/Meshes/Line.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import { FiveDomEvents as x } from "../shared-utils/five/FiveDomEvents.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../shared-utils/five/FivePuppet.js";
import { MeasureMesh as U } from "./utils/MeasureMesh.js";
import { PointMesh as _ } from "../Sculpt/Meshes/Point.js";
import { LineWithDotsMesh as V } from "../Sculpt/Meshes/LineWithDots.js";
import { hotkeys as d } from "../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { PolygonMesh as z } from "../Sculpt/Meshes/Polygon.js";
import { validatePolygon as A } from "./utils/validatePolygon.js";
import { IObject3D as R } from "../shared-utils/three/IObject3D.js";
import { Cursor as B } from "../Sculpt/utils/Modules/Cursor.js";
import { THREERaycaster as N } from "../shared-utils/three/core/Raycaster.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/five/fiveEveryReadyListener.js";
import "../shared-utils/throttle.js";
import "../shared-utils/five/fiveModelLoad.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../shared-utils/three/Magnifier.js";
import "../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../shared-utils/three/Assets/index.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../shared-utils/even.js";
import "../shared-utils/CSS3DRender/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/isNil.js";
import "../shared-utils/three/PointSelector/utils/html.js";
import "../shared-utils/CSS3DRender/index.js";
import "../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../shared-utils/createResizeObserver.js";
import "../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../Sculpt/typings/style.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/util.js";
import "../shared-utils/three/core/LineGeometry.js";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
import "../Sculpt/utils/unit.js";
import "../Sculpt/utils/renderDom.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getPosition.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
import "../Sculpt/utils/three/rayOnLine.js";
import "@realsee/five";
import "../shared-utils/five/calculateThreeMouse.js";
import "../shared-utils/three/generatePolygonGeometry.js";
import "../shared-utils/three/earcut3D.js";
import "../vendor/earcut/src/earcut.js";
import "../shared-utils/three/getNormal.js";
import "../PanoMeasurePlugin/utils/isIntersecting.js";
import "../Sculpt/utils/three/ColoredMesh.js";
import "../shared-utils/three/geometryUtil.js";
import "../shared-utils/three/vectorIsEqual.js";
class pt extends T {
  constructor(e, t) {
    super();
    i(this, "name", "MeasurePlugin");
    i(this, "currentMeasureMesh");
    i(this, "five");
    i(this, "group");
    i(this, "_pointSelector");
    i(this, "_fiveDomEvents");
    i(this, "_cursor");
    i(this, "_config");
    i(this, "lineStyle", {
      lengthEnable: !0,
      occlusionVisibility: !0,
      lengthUnit: "m"
    });
    i(this, "polygonStyle", {
      lengthEnable: !0,
      occlusionVisibility: !0,
      opacity: 0.2,
      lengthUnit: "m"
    });
    /**
     * @description 开始测量
     */
    i(this, "measure", () => {
      this.listener.addMeasureListener(), this.listener.removeClickListener(), this.group.children.forEach((r) => r.unselect()), this.cursor.removeDeleteButton();
      const e = new U({
        lineStyle: this.lineStyle,
        polygonStyle: this.polygonStyle
      });
      this.currentMeasureMesh = e, e.line.setStyle({ cssStyle: "pointer-events: none;" }), this.pointSelector.actionIfNoIntersection = "disable", this.updateSelectAdsorbedHelper();
      const t = new _({ occlusionMode: "depthTest", occlusionVisibility: !0 }), n = new V(P(y({}, this.lineStyle), { dashed: !0, cssStyle: "pointer-events: none;" })), o = new z(this.polygonStyle), a = new D(P(y({}, this.lineStyle), {
        lineOpacity: 0.5,
        lineColor: 3407837,
        dashed: !0,
        cssStyle: "pointer-events: none; color: #fff; opacity: 0.5;"
      })), p = new D(P(y({}, this.lineStyle), {
        lineOpacity: 0.5,
        lineColor: 3407837,
        dashed: !0,
        cssStyle: "pointer-events: none; color: #fff; opacity: 0.5;"
      })), u = new _({ occlusionMode: "depthTest", occlusionVisibility: !0, color: 3407837, opacity: 0.5 }), f = () => {
        t.removeFromParent(), n.removeFromParent(), o.removeFromParent(), a.removeFromParent(), p.removeFromParent(), u.removeFromParent();
      };
      this.group.add(e);
      const v = (r) => {
        if (!r) {
          f();
          return;
        }
        if (e.points.length === 0 && (this.pointSelector.actionIfNoIntersection = "disable", this.group.addIfNotExists(t), t.position.copy(r.point)), e.points.length >= 1)
          if (this.pointSelector.actionIfNoIntersection = "virtualPoint", t.removeFromParent(), this.group.addIfNotExists(n), n.setPoints([e.points.at(-1), r.point]), r.isAdsorbed)
            a.removeFromParent(), p.removeFromParent(), u.removeFromParent();
          else {
            const s = e.points.at(-1);
            if (Math.abs(r.point.y - s.y) > 0.2) {
              const m = new c.Vector3(r.point.x, s.y, r.point.z);
              a.setPoints([s, m]), p.setPoints([m, r.point]), u.position.copy(m);
            } else {
              let m = new c.Vector3();
              Math.abs(r.point.x - s.x) < Math.abs(r.point.z - s.z) ? m = new c.Vector3(r.point.x, s.y, s.z) : m = new c.Vector3(s.x, s.y, r.point.z), a.setPoints([s, m]), p.setPoints([m, r.point]), u.position.copy(m);
            }
            this.group.addIfNotExists(a, p, u);
          }
        if (e.points.length >= 2) {
          const s = [...e.points, r.point];
          A(s) ? (o.setPoints(s), this.group.addIfNotExists(o)) : o.removeFromParent();
        }
      }, M = (r) => {
        r && (f(), e.setPoints([...e.points, r.point]), this.updateSelectAdsorbedHelper(), e.isPolygon && this.pointSelector.disable());
      }, g = () => {
        var r, s;
        e == null || e.setPoints(e.points.slice(0, -1)), f(), (s = (r = this.pointSelector.pointSelectorHelper) == null ? void 0 : r.magnifier) == null || s.render(), this.updateSelectAdsorbedHelper(), this.five.needsRender = !0;
      }, E = () => {
        this.pointSelector.off("intersectionUpdate", v), this.pointSelector.off("select", M), this.pointSelector.off("disable", E), this.off("undo", g), e.line.setStyle({ cssStyle: "pointer-events: auto;" }), f(), e.points.length < 2 && e.removeFromParent(), e.__five_pano_index = this.five.panoIndex, this.currentMeasureMesh = null, this.listener.addClickListener(), this.listener.removeMeasureListener(), this.emit("measureEnd");
      };
      this.on("undo", g), this.pointSelector.on("intersectionUpdate", v), this.pointSelector.on("select", M), this.pointSelector.on("disable", E), this.pointSelector.enable();
    });
    /**
     * @description 结束测量
     */
    i(this, "endMeasure", () => {
      this.pointSelector.disable();
    });
    /**
     * @description 取消本次测量
     */
    i(this, "cancel", () => {
      var e;
      (e = this.currentMeasureMesh) == null || e.removeFromParent(), this.pointSelector.disable();
    });
    /**
     * @description 撤销上一步
     */
    i(this, "undo", () => {
      this.emit("undo");
    });
    /**
     * @description 清空正在测量的内容
     */
    i(this, "clearCurrentMeasure", () => {
      var e;
      (e = this.currentMeasureMesh) == null || e.removeFromParent(), this.currentMeasureMesh = null, this.pointSelector.disable();
    });
    /**
     * @description 清空所有测量内容
     */
    i(this, "clear", () => {
      this.currentMeasureMesh = null, this.pointSelector.disable(), this.group.removeChildren(), this.cursor.removeDeleteButton();
    });
    i(this, "dispose", () => {
      this.listener.removeMeasureListener(), this.listener.removeClickListener(), this.pointSelector.disable(), this.clear();
    });
    // eslint-disable-next-line @typescript-eslint/member-ordering
    i(this, "listener", {
      // 点击事件
      addClickListener: () => {
        this.group.children.forEach((e) => {
          var t;
          (t = e.line.doms) == null || t.forEach((n) => {
            n.container.onclick = (o) => this.onClick({ origDomEvent: o, target: e }), n.container.onmouseenter = () => this.onHover({ target: e }), n.container.onmouseleave = () => this.onUnHover({ target: e });
          }), e.polygon.areaDom && (e.polygon.areaDom.container.onclick = (n) => this.onClick({ origDomEvent: n, target: e }), e.polygon.areaDom.container.onmouseenter = () => this.onHover({ target: e }), e.polygon.areaDom.container.onmouseleave = () => this.onUnHover({ target: e })), this.fiveDomEvents.addEventListener(e, "click", this.onClick), this.fiveDomEvents.addEventListener(e, "hover", this.onHover), this.fiveDomEvents.addEventListener(e, "unHover", this.onUnHover), this.five.on("panoArrived", this.onMoveToPano), this.five.on("modeChange", this.onModeChange), d("delete, backspace", this.deleteSelectedMesh);
        });
      },
      removeClickListener: () => {
        this.group.children.forEach((e) => {
          var t, n;
          (t = e.line.doms) == null || t.forEach((o) => {
            o != null && o.container && (o.container.onclick = null, o.container.onmouseenter = null, o.container.onmouseleave = null);
          }), (n = e.polygon.areaDom) != null && n.container && (e.polygon.areaDom.container.onclick = null, e.polygon.areaDom.container.onmouseenter = null, e.polygon.areaDom.container.onmouseleave = null);
        }), this.fiveDomEvents.clear(), this.five.off("panoArrived", this.onMoveToPano), this.five.off("modeChange", this.onModeChange), d.unbind("delete, backspace");
      },
      // 绘制快捷键
      addMeasureListener: () => {
        d("ctrl+z, command+z", this.undo), d("esc", this.cancel), d("enter", this.endMeasure), this.five.on("mode.change", this.endMeasure), this.five.on("pano.moveTo", this.endMeasure), this.five.on("model.changeShownFloor", this.endMeasure);
      },
      removeMeasureListener: () => {
        d.unbind("ctrl+z, command+z"), d.unbind("esc"), d.unbind("enter"), this.five.off("mode.change", this.endMeasure), this.five.off("pano.moveTo", this.endMeasure), this.five.off("model.changeShownFloor", this.endMeasure);
      }
    });
    i(this, "onMoveToPano", (e) => {
      const t = this.group.children.filter((o) => o !== this.currentMeasureMesh), n = new N();
      t.forEach((o) => {
        var p;
        if (o.unselect(), o.__five_pano_index === e) {
          o.visible = !0;
          return;
        }
        ((p = o.line.points) == null ? void 0 : p.some((u) => {
          var s, S;
          const f = u.clone().sub(this.five.camera.position).normalize();
          n.set(this.five.camera.position, f);
          const v = (S = (s = this.five.model.intersectRaycaster(n, void 0, !0)) == null ? void 0 : s[0]) == null ? void 0 : S.point;
          if (!v)
            return !0;
          const M = 0.01, g = u.distanceTo(this.five.camera.position);
          return v.distanceTo(this.five.camera.position) + M > g;
        })) ? o.visible = !0 : o.visible = !1, this.five.needsRender = !0;
      });
    });
    i(this, "onModeChange", (e) => {
      e === "Mapview" && this.group.children.forEach((t) => {
        t.visible = !0;
      });
    });
    i(this, "onClick", ({ origDomEvent: e, target: t }) => {
      const n = t;
      if (!n)
        return;
      if (n.selected) {
        n.unselect(), this.cursor.removeDeleteButton();
        return;
      }
      let o, a;
      if (e instanceof TouchEvent ? (o = e.touches[0].clientX, a = e.touches[0].clientY) : e instanceof MouseEvent && (o = e.clientX, a = e.clientY), o === void 0 || a === void 0)
        return;
      this.group.children.forEach((u) => u.unselect()), n.select();
      const p = () => {
        n.removeFromParent(), this.cursor.removeDeleteButton(), this.five.needsRender = !0;
      };
      this.cursor.showDeleteButton({
        clientX: o,
        clientY: a,
        container: this.five.getElement().parentElement,
        onClick: p
      }), this.five.once("cameraUpdate", () => {
        n.unselect(), this.cursor.removeDeleteButton();
      });
    });
    i(this, "onHover", ({ target: e }) => {
      if (this.currentMeasureMesh)
        return;
      const t = e;
      t && t.hover();
    });
    i(this, "onUnHover", ({ target: e }) => {
      if (this.currentMeasureMesh)
        return;
      const t = e;
      t && t.unhover();
    });
    i(this, "deleteSelectedMesh", () => {
      this.group.children.filter((t) => t.selected).forEach((t) => t.removeFromParent()), this.cursor.removeDeleteButton(), this.five.needsRender = !0;
    });
    i(this, "updateSelectAdsorbedHelper", () => {
      if (!this.currentMeasureMesh || this.currentMeasureMesh.points.length === 0) {
        this.pointSelector.setAdherePoints(null), this.pointSelector.adhereLine = [], this.pointSelector.adherePlane = [];
        return;
      }
      if (this.currentMeasureMesh.points.length >= 1) {
        this.pointSelector.setAdherePoints([this.currentMeasureMesh.points[0]]);
        const e = this.currentMeasureMesh.points.at(-1);
        this.pointSelector.adhereLine = [
          new c.Line3(new c.Vector3(1, 0, 0).add(e), new c.Vector3(-1, 0, 0).add(e)),
          new c.Line3(new c.Vector3(0, 1, 0).add(e), new c.Vector3(0, -1, 0).add(e)),
          new c.Line3(new c.Vector3(0, 0, 1).add(e), new c.Vector3(0, 0, -1).add(e))
        ], this.pointSelector.adherePlane = [];
      }
      if (this.currentMeasureMesh.points.length >= 3) {
        const e = new c.Plane().setFromCoplanarPoints(
          this.currentMeasureMesh.points[0],
          this.currentMeasureMesh.points[1],
          this.currentMeasureMesh.points[2]
        );
        this.pointSelector.adherePlane = [e];
      } else
        this.pointSelector.adherePlane = [];
    });
    this.five = e, this.config = t != null ? t : { unit: "m" }, this.group = new R(), this.group.name = "MeasureGroup", this.five.scene.add(this.group);
  }
  get pointSelector() {
    return this._pointSelector ? this._pointSelector : (this._pointSelector = new I(this.five, { mode: "cursor", helper: { pointHelper: "highlight" } }), this._pointSelector);
  }
  get fiveDomEvents() {
    return this._fiveDomEvents ? this._fiveDomEvents : (this._fiveDomEvents = new x(this.five, { fiveModels: null }), this._fiveDomEvents);
  }
  get cursor() {
    return this._cursor ? this._cursor : (this._cursor = new B(), this._cursor);
  }
  get config() {
    return this._config;
  }
  set config(e) {
    var t, n;
    this._config = e, this.lineStyle.lengthUnit = e.unit, this.polygonStyle.lengthUnit = e.unit, (n = (t = this.group) == null ? void 0 : t.children) == null || n.forEach((o) => o.changeConfig({ lineStyle: this.lineStyle, polygonStyle: this.polygonStyle }));
  }
}
export {
  pt as MeasureController
};
