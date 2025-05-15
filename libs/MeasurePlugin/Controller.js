var C = Object.defineProperty, k = Object.defineProperties;
var F = Object.getOwnPropertyDescriptors;
var D = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable;
var b = (p, l, e) => l in p ? C(p, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : p[l] = e, h = (p, l) => {
  for (var e in l || (l = {}))
    H.call(l, e) && b(p, e, l[e]);
  if (D)
    for (var e of D(l))
      U.call(l, e) && b(p, e, l[e]);
  return p;
}, E = (p, l) => k(p, F(l));
var i = (p, l, e) => (b(p, typeof l != "symbol" ? l + "" : l, e), e);
import * as a from "three";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import { Subscribe as x } from "../shared-utils/Subscribe.js";
import { PointSelector as I } from "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { LineMesh as L } from "../Sculpt/Meshes/Line.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { FiveDomEvents as T } from "../shared-utils/five/FiveDomEvents.js";
import "../shared-utils/five/FivePuppet.js";
import { MeasureMesh as _ } from "./utils/MeasureMesh.js";
import { PointMesh as w } from "../Sculpt/Meshes/Point.js";
import { LineWithDotsMesh as V } from "../Sculpt/Meshes/LineWithDots.js";
import { hotkeys as m } from "../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { PolygonMesh as R } from "../Sculpt/Meshes/Polygon.js";
import { validatePolygon as z } from "./utils/validatePolygon.js";
import { IObject3D as A } from "../shared-utils/three/IObject3D.js";
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
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
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
import "../Sculpt/utils/Modules/DeleteButtonBgBorder.js";
import "../Sculpt/utils/Modules/DeleteIconSVG.js";
class gt extends x {
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
     * @description Initialize event listeners for all existing meshes
     */
    i(this, "initEventListeners", () => {
      this.group.children.forEach(this.addMeshEventListeners);
    });
    /**
     * @description 开始测量
     */
    i(this, "measure", () => {
      this.listener.addMeasureListener(), m.unbind("delete, backspace"), this.group.children.forEach((r) => r.unselect()), this.cursor.removeDeleteButton();
      const e = new _({
        lineStyle: this.lineStyle,
        polygonStyle: this.polygonStyle
      });
      this.currentMeasureMesh = e, e.line.setStyle({ cssStyle: "pointer-events: none;" }), this.pointSelector.actionIfNoIntersection = "disable", this.updateSelectAdsorbedHelper();
      const t = new w({ occlusionMode: "depthTest", occlusionVisibility: !0 }), n = new V(E(h({}, this.lineStyle), { dashed: !0, cssStyle: "pointer-events: none;" })), o = new R(this.polygonStyle), c = new L(E(h({}, this.lineStyle), {
        lineOpacity: 0.5,
        lineColor: 3407837,
        dashed: !0,
        cssStyle: "pointer-events: none; opacity: 0.5;"
      })), u = new L(E(h({}, this.lineStyle), {
        lineOpacity: 0.5,
        lineColor: 3407837,
        dashed: !0,
        cssStyle: "pointer-events: none; opacity: 0.5;"
      })), d = new w({ occlusionMode: "depthTest", occlusionVisibility: !0, color: 3407837, opacity: 0.5 }), v = () => {
        t.removeFromParent(), n.removeFromParent(), o.removeFromParent(), c.removeFromParent(), u.removeFromParent(), d.removeFromParent();
      };
      this.group.add(e);
      const g = (r) => {
        if (!r) {
          v();
          return;
        }
        if (e.points.length === 0 && (this.pointSelector.actionIfNoIntersection = "disable", this.group.addIfNotExists(t), t.position.copy(r.point)), e.points.length >= 1)
          if (this.pointSelector.actionIfNoIntersection = "virtualPoint", t.removeFromParent(), this.group.addIfNotExists(n), n.setPoints([e.points.at(-1), r.point]), r.isAdsorbed)
            c.removeFromParent(), u.removeFromParent(), d.removeFromParent();
          else {
            const s = e.points.at(-1);
            if (Math.abs(r.point.y - s.y) > 0.2) {
              const f = new a.Vector3(r.point.x, s.y, r.point.z);
              c.setPoints([s, f]), u.setPoints([f, r.point]), d.position.copy(f);
            } else {
              let f = new a.Vector3();
              Math.abs(r.point.x - s.x) < Math.abs(r.point.z - s.z) ? f = new a.Vector3(r.point.x, s.y, s.z) : f = new a.Vector3(s.x, s.y, r.point.z), c.setPoints([s, f]), u.setPoints([f, r.point]), d.position.copy(f);
            }
            this.group.addIfNotExists(c, u, d);
          }
        if (e.points.length >= 2) {
          const s = [...e.points, r.point];
          z(s) ? (o.setPoints(s), this.group.addIfNotExists(o)) : o.removeFromParent();
        }
      }, y = (r) => {
        r && (v(), e.setPoints([...e.points, r.point]), this.updateSelectAdsorbedHelper(), e.isPolygon && this.pointSelector.disable());
      }, M = () => {
        var r, s;
        e == null || e.setPoints(e.points.slice(0, -1)), v(), (s = (r = this.pointSelector.pointSelectorHelper) == null ? void 0 : r.magnifier) == null || s.render(), this.updateSelectAdsorbedHelper(), this.five.needsRender = !0;
      }, P = () => {
        this.pointSelector.off("intersectionUpdate", g), this.pointSelector.off("select", y), this.pointSelector.off("disable", P), this.off("undo", M), e.line.setStyle({ cssStyle: "pointer-events: auto;" }), v(), e.points.length < 2 ? e.removeFromParent() : this.addMeshEventListeners(e), e.__five_pano_index = this.five.panoIndex, this.currentMeasureMesh = null, this.listener.removeMeasureListener(), this.emit("measureEnd");
      };
      this.on("undo", M), this.pointSelector.on("intersectionUpdate", g), this.pointSelector.on("select", y), this.pointSelector.on("disable", P), this.pointSelector.enable();
    });
    /**
     * @description 结束测量
     */
    i(this, "endMeasure", () => {
      this.pointSelector.disable();
    });
    /**
     * Enable or disable the display of length measurements
     * @param enable - Whether to display length measurements
     */
    i(this, "setLengthEnable", (e) => {
      this.lineStyle.lengthEnable = e, this.polygonStyle.lengthEnable = e, this.group.children.forEach((t) => {
        t.changeConfig({
          lineStyle: h({}, this.lineStyle),
          polygonStyle: h({}, this.polygonStyle)
        }), this.addMeshEventListeners(t);
      }), this.currentMeasureMesh && this.currentMeasureMesh.changeConfig({
        lineStyle: h({}, this.lineStyle),
        polygonStyle: h({}, this.polygonStyle)
      }), this.five.needsRender = !0;
    });
    /**
     * Switch the measurement unit without resetting the plugin
     * @param unit - The new unit to use ('m' for metric or 'ft' for imperial)
     */
    i(this, "setUnit", (e) => {
      if (this._config && (this._config.unit = e), this.lineStyle.lengthUnit = e, this.polygonStyle.lengthUnit = e, this.group.children.forEach((t) => {
        try {
          t.changeConfig({
            lineStyle: h({}, this.lineStyle),
            polygonStyle: h({}, this.polygonStyle)
          }), this.addMeshEventListeners(t);
        } catch (n) {
        }
      }), this.currentMeasureMesh)
        try {
          this.currentMeasureMesh.changeConfig({
            lineStyle: h({}, this.lineStyle),
            polygonStyle: h({}, this.polygonStyle)
          });
        } catch (t) {
        }
      this.five.needsRender = !0;
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
      this.currentMeasureMesh = null, this.pointSelector.disable(), this.group.children.forEach(this.removeMeshEventListeners), this.group.removeChildren(), this.cursor.removeDeleteButton();
    });
    i(this, "dispose", () => {
      this.listener.removeMeasureListener(), this.listener.removeClickListener(), this.pointSelector.disable(), this.clear();
    });
    // eslint-disable-next-line @typescript-eslint/member-ordering
    i(this, "listener", {
      // 点击事件
      addClickListener: () => {
        this.five.on("panoArrived", this.onMoveToPano), this.five.on("modeChange", this.onModeChange), m("delete, backspace", this.deleteSelectedMesh), this.initEventListeners();
      },
      removeClickListener: () => {
        this.group.children.forEach((e) => {
          var t, n;
          (t = e.line.doms) == null || t.forEach((o) => {
            o != null && o.container && (o.container.onclick = null, o.container.onmouseenter = null, o.container.onmouseleave = null);
          }), (n = e.polygon.areaDom) != null && n.container && (e.polygon.areaDom.container.onclick = null, e.polygon.areaDom.container.onmouseenter = null, e.polygon.areaDom.container.onmouseleave = null);
        }), this.fiveDomEvents.clear(), this.five.off("panoArrived", this.onMoveToPano), this.five.off("modeChange", this.onModeChange), m.unbind("delete, backspace");
      },
      // 绘制快捷键
      addMeasureListener: () => {
        m("ctrl+z, command+z", this.undo), m("esc", this.cancel), m("enter", this.endMeasure), this.five.on("mode.change", this.endMeasure), this.five.on("pano.moveTo", this.endMeasure), this.five.on("model.changeShownFloor", this.endMeasure);
      },
      removeMeasureListener: () => {
        m.unbind("ctrl+z, command+z"), m.unbind("esc"), m.unbind("enter"), this.five.off("mode.change", this.endMeasure), this.five.off("pano.moveTo", this.endMeasure), this.five.off("model.changeShownFloor", this.endMeasure);
      }
    });
    i(this, "onMoveToPano", (e) => {
      const t = this.group.children.filter((o) => o !== this.currentMeasureMesh), n = new N();
      t.forEach((o) => {
        var u;
        if (o.unselect(), o.__five_pano_index === e) {
          o.visible = !0;
          return;
        }
        ((u = o.line.points) == null ? void 0 : u.some((d) => {
          var s, S;
          const v = d.clone().sub(this.five.camera.position).normalize();
          n.set(this.five.camera.position, v);
          const g = (S = (s = this.five.model.intersectRaycaster(n, void 0, !0)) == null ? void 0 : s[0]) == null ? void 0 : S.point;
          if (!g)
            return !0;
          const y = 0.01, M = d.distanceTo(this.five.camera.position);
          return g.distanceTo(this.five.camera.position) + y > M;
        })) ? o.visible = !0 : o.visible = !1, this.five.needsRender = !0;
      });
    });
    i(this, "onModeChange", (e) => {
      e === "Mapview" && this.group.children.forEach((t) => {
        t.visible = !0;
      });
    });
    i(this, "onClick", ({ origDomEvent: e, target: t }) => {
      var v;
      const n = t;
      if (!n)
        return;
      if (n.selected) {
        n.unselect(), this.cursor.removeDeleteButton();
        return;
      }
      let o, c;
      if (e && ("touches" in e && e.touches && e.touches[0] ? (o = e.touches[0].clientX, c = e.touches[0].clientY) : "clientX" in e && "clientY" in e && (o = e.clientX, c = e.clientY)), o === void 0 || c === void 0)
        return;
      this.group.children.forEach((g) => g.unselect()), n.select();
      const u = () => {
        this.removeMeshEventListeners(n), n.removeFromParent(), this.cursor.removeDeleteButton(), this.five.needsRender = !0;
      }, d = ((v = this.five.getElement()) == null ? void 0 : v.parentElement) || document.body;
      this.cursor.showDeleteButton({
        clientX: o,
        clientY: c,
        container: d,
        onClick: u
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
      this.group.children.filter((t) => t.selected).forEach((t) => {
        this.removeMeshEventListeners(t), t.removeFromParent();
      }), this.cursor.removeDeleteButton(), this.five.needsRender = !0;
    });
    // Helper method to remove all event listeners from a mesh
    i(this, "removeMeshEventListeners", (e) => {
      var t, n;
      (t = e.line.doms) == null || t.forEach((o) => {
        o != null && o.container && (o.container.onclick = null, o.container.onmouseenter = null, o.container.onmouseleave = null);
      }), (n = e.polygon.areaDom) != null && n.container && (e.polygon.areaDom.container.onclick = null, e.polygon.areaDom.container.onmouseenter = null, e.polygon.areaDom.container.onmouseleave = null), this.fiveDomEvents.removeEventListener(e, "click"), this.fiveDomEvents.removeEventListener(e, "hover"), this.fiveDomEvents.removeEventListener(e, "unHover");
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
          new a.Line3(new a.Vector3(1, 0, 0).add(e), new a.Vector3(-1, 0, 0).add(e)),
          new a.Line3(new a.Vector3(0, 1, 0).add(e), new a.Vector3(0, -1, 0).add(e)),
          new a.Line3(new a.Vector3(0, 0, 1).add(e), new a.Vector3(0, 0, -1).add(e))
        ], this.pointSelector.adherePlane = [];
      }
      if (this.currentMeasureMesh.points.length >= 3) {
        const e = new a.Plane().setFromCoplanarPoints(
          this.currentMeasureMesh.points[0],
          this.currentMeasureMesh.points[1],
          this.currentMeasureMesh.points[2]
        );
        this.pointSelector.adherePlane = [e];
      } else
        this.pointSelector.adherePlane = [];
    });
    i(this, "addMeshEventListeners", (e) => {
      var t, n;
      this.removeMeshEventListeners(e), (t = e.line.doms) == null || t.forEach((o) => {
        o != null && o.container && (o.container.onclick = (c) => this.onClick({ origDomEvent: c, target: e }), o.container.onmouseenter = () => this.onHover({ target: e }), o.container.onmouseleave = () => this.onUnHover({ target: e }));
      }), (n = e.polygon.areaDom) != null && n.container && (e.polygon.areaDom.container.onclick = (o) => this.onClick({ origDomEvent: o, target: e }), e.polygon.areaDom.container.onmouseenter = () => this.onHover({ target: e }), e.polygon.areaDom.container.onmouseleave = () => this.onUnHover({ target: e })), this.fiveDomEvents.addEventListener(e, "click", this.onClick), this.fiveDomEvents.addEventListener(e, "hover", this.onHover), this.fiveDomEvents.addEventListener(e, "unHover", this.onUnHover);
    });
    /**
     * @description Load measurement data from external source
     * @param data Array of point data for measurements
     */
    i(this, "load", (e) => {
      this.clear(), e.forEach((t) => {
        const n = new _({
          lineStyle: this.lineStyle,
          polygonStyle: this.polygonStyle
        });
        n.setPoints(t.points), this.group.add(n), this.addMeshEventListeners(n), n.__five_pano_index = this.five.panoIndex;
      }), this.five.needsRender = !0;
    });
    this.five = e;
    const n = { unit: "m", lengthEnable: !0 };
    this.config = t ? h(h({}, n), t) : n, this.group = new A(), this.group.name = "MeasureGroup", this.five.scene.add(this.group), this.five.on("panoArrived", this.onMoveToPano), this.five.on("modeChange", this.onModeChange), m("delete, backspace", this.deleteSelectedMesh), this.initEventListeners();
  }
  get pointSelector() {
    return this._pointSelector ? this._pointSelector : (this._pointSelector = new I(this.five, { mode: "cursor", helper: { pointHelper: "highlight" } }), this._pointSelector);
  }
  get fiveDomEvents() {
    return this._fiveDomEvents ? this._fiveDomEvents : (this._fiveDomEvents = new T(this.five, { fiveModels: null }), this._fiveDomEvents);
  }
  get cursor() {
    return this._cursor ? this._cursor : (this._cursor = new B(), this._cursor);
  }
  get config() {
    return this._config;
  }
  set config(e) {
    var t, n;
    this._config = e, this.lineStyle.lengthUnit = e.unit, this.polygonStyle.lengthUnit = e.unit, e.lengthEnable !== void 0 && (this.lineStyle.lengthEnable = e.lengthEnable, this.polygonStyle.lengthEnable = e.lengthEnable), (n = (t = this.group) == null ? void 0 : t.children) == null || n.forEach((o) => o.changeConfig({ lineStyle: this.lineStyle, polygonStyle: this.polygonStyle }));
  }
}
export {
  gt as MeasureController
};
