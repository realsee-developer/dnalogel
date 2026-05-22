var H = Object.defineProperty, I = Object.defineProperties;
var F = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var G = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable;
var _ = (M, S, e) => S in M ? H(M, S, { enumerable: !0, configurable: !0, writable: !0, value: e }) : M[S] = e, g = (M, S) => {
  for (var e in S || (S = {}))
    G.call(S, e) && _(M, e, S[e]);
  if (C)
    for (var e of C(S))
      U.call(S, e) && _(M, e, S[e]);
  return M;
}, D = (M, S) => I(M, F(S));
var s = (M, S, e) => (_(M, typeof S != "symbol" ? S + "" : S, e), e);
import * as y from "three";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import { Subscribe as B } from "../shared-utils/Subscribe.js";
import { PointSelector as V } from "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { LineMesh as w } from "../Sculpt/Meshes/Line.js";
import "../shared-utils/three/core/Sphere.js";
import "../shared-utils/three/blink.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../vendor/earcut/src/earcut.js";
import { FiveDomEvents as X } from "../shared-utils/five/FiveDomEvents.js";
import "../shared-utils/five/FivePuppet.js";
import { MeasureMesh as T } from "./utils/MeasureMesh.js";
import { PointMesh as k } from "../Sculpt/Meshes/Point.js";
import { LineWithDotsMesh as Y } from "../Sculpt/Meshes/LineWithDots.js";
import { hotkeys as P } from "../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { PolygonMesh as O } from "../Sculpt/Meshes/Polygon.js";
import { validatePolygon as z } from "./utils/validatePolygon.js";
import { IObject3D as A } from "../shared-utils/three/IObject3D.js";
import { Cursor as N } from "../Sculpt/utils/Modules/Cursor.js";
import { THREERaycaster as W } from "../shared-utils/three/core/Raycaster.js";
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
import "../shared-utils/five/getFiveFromParentChain.js";
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
import "../vendor/animejs/lib/anime.es.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
import "../shared-utils/five/calculateThreeMouse.js";
import "../shared-utils/three/generatePolygonGeometry.js";
import "../shared-utils/three/earcut3D.js";
import "../shared-utils/three/getNormal.js";
import "../PanoMeasurePlugin/utils/isIntersecting.js";
import "../Sculpt/utils/three/ColoredMesh.js";
import "../shared-utils/three/geometryUtil.js";
import "../shared-utils/three/vectorIsEqual.js";
import "../Sculpt/utils/Modules/DeleteButtonBgBorder.js";
import "../Sculpt/utils/Modules/DeleteIconSVG.js";
class Lt extends B {
  constructor(e, t) {
    super();
    s(this, "name", "MeasurePlugin");
    s(this, "currentMeasureMesh");
    s(this, "five");
    s(this, "group");
    // 当前测量结束的原因
    s(this, "currentEndReason", "enter");
    // Repositioning state
    s(this, "repositioningState", null);
    // Long press visual feedback
    s(this, "longPressIndicator", null);
    // Global cleanup function for mouse/touch listeners
    s(this, "cleanupGlobalListeners");
    // Global touch handler for endpoint long press
    s(this, "globalTouchHandler", null);
    s(this, "_pointSelector");
    s(this, "_fiveDomEvents");
    s(this, "_cursor");
    s(this, "_config");
    s(this, "lineStyle", {
      lengthEnable: !0,
      occlusionVisibility: !0,
      lengthUnit: "m",
      precision: 2
    });
    s(this, "polygonStyle", {
      lengthEnable: !0,
      occlusionVisibility: !0,
      opacity: 0.2,
      lengthUnit: "m"
    });
    /**
     * @description Initialize event listeners for all existing meshes
     */
    s(this, "initEventListeners", () => {
      this.group.children.forEach(this.addMeshEventListeners);
    });
    /**
     * @description 开始测量
     */
    s(this, "measure", () => {
      this.repositioningState && this.cancelRepositioning(), this.listener.addMeasureListener(), P.unbind("delete, backspace"), this.group.children.forEach((d) => d.unselect()), this.cursor.removeDeleteButton();
      const e = new T({
        lineStyle: this.lineStyle,
        polygonStyle: this.polygonStyle
      });
      this.currentMeasureMesh = e, e.line.setStyle({ cssStyle: "pointer-events: none;" }), this.pointSelector.actionIfNoIntersection = "disable", this.updateSelectAdsorbedHelper();
      const t = new k({ occlusionMode: "depthTest", occlusionVisibility: !0 }), i = new Y(D(g({}, this.lineStyle), { dashed: !0, cssStyle: "pointer-events: none;" })), n = new O(this.polygonStyle), o = new w(D(g({}, this.lineStyle), {
        lineOpacity: 0.5,
        lineColor: 3407837,
        dashed: !0,
        cssStyle: "pointer-events: none; opacity: 0.5;"
      })), c = new w(D(g({}, this.lineStyle), {
        lineOpacity: 0.5,
        lineColor: 3407837,
        dashed: !0,
        cssStyle: "pointer-events: none; opacity: 0.5;"
      })), a = new k({ occlusionMode: "depthTest", occlusionVisibility: !0, color: 3407837, opacity: 0.5 });
      let r = null, h = !1, l = !1;
      const f = (d) => {
        d.key === "Shift" && (l = !0);
      }, u = (d) => {
        d.key === "Shift" && (l = !1);
      }, p = () => {
        t.removeFromParent(), i.removeFromParent(), n.removeFromParent(), o.removeFromParent(), c.removeFromParent(), a.removeFromParent();
      };
      this.group.add(e), document.addEventListener("keydown", f), document.addEventListener("keyup", u);
      const v = (d) => {
        if (!d) {
          p(), r = null, h = !1;
          return;
        }
        if (e.points.length === 0 && (this.pointSelector.actionIfNoIntersection = "disable", this.group.addIfNotExists(t), t.position.copy(d.point), r = null, h = !1), e.points.length >= 1)
          if (this.pointSelector.actionIfNoIntersection = "virtualPoint", t.removeFromParent(), this.group.addIfNotExists(i), i.setStyle(D(g({}, this.lineStyle), { dashed: !0, cssStyle: "pointer-events: none;" })), i.setPoints([e.points.at(-1), d.point]), d.isAdsorbed)
            o.removeFromParent(), c.removeFromParent(), a.removeFromParent(), r = null, h = !1;
          else {
            const m = e.points.at(-1);
            if (Math.abs(d.point.y - m.y) > 0.2) {
              const L = new y.Vector3(d.point.x, m.y, d.point.z);
              o.setStyle(D(g({}, this.lineStyle), {
                lineOpacity: 0.5,
                lineColor: 3407837,
                dashed: !0,
                cssStyle: "pointer-events: none; opacity: 0.5;"
              })), c.setStyle(D(g({}, this.lineStyle), {
                lineOpacity: 0.5,
                lineColor: 3407837,
                dashed: !0,
                cssStyle: "pointer-events: none; opacity: 0.5;"
              })), o.setPoints([m, L]), c.setPoints([L, d.point]), a.position.copy(L), r = L.clone(), h = !0;
            } else {
              let L = new y.Vector3();
              Math.abs(d.point.x - m.x) < Math.abs(d.point.z - m.z) ? L = new y.Vector3(d.point.x, m.y, m.z) : L = new y.Vector3(m.x, m.y, d.point.z), o.setStyle(D(g({}, this.lineStyle), {
                lineOpacity: 0.5,
                lineColor: 3407837,
                dashed: !0,
                cssStyle: "pointer-events: none; opacity: 0.5;"
              })), c.setStyle(D(g({}, this.lineStyle), {
                lineOpacity: 0.5,
                lineColor: 3407837,
                dashed: !0,
                cssStyle: "pointer-events: none; opacity: 0.5;"
              })), o.setPoints([m, L]), c.setPoints([L, d.point]), a.position.copy(L), r = L.clone(), h = !0;
            }
            this.group.addIfNotExists(o, c, a);
          }
        if (e.points.length >= 2) {
          const m = [...e.points, d.point];
          z(m) ? (n.setStyle(g({}, this.polygonStyle)), n.setPoints(m), this.group.addIfNotExists(n)) : n.removeFromParent();
        }
      }, E = (d) => {
        if (!d)
          return;
        let m = d.point;
        l && h && r && e.points.length >= 1 && (m = r.clone()), p(), e.setPoints([...e.points, m]), this.updateSelectAdsorbedHelper(), e.isPolygon && (this.currentEndReason = "polygon", this.pointSelector.disable());
      }, b = () => {
        var d, m;
        e == null || e.setPoints(e.points.slice(0, -1)), p(), (m = (d = this.pointSelector.pointSelectorHelper) == null ? void 0 : d.magnifier) == null || m.render(), this.updateSelectAdsorbedHelper(), this.five.needsRender = !0;
      }, R = () => {
        this.pointSelector.off("intersectionUpdate", v), this.pointSelector.off("select", E), this.pointSelector.off("disable", R), this.off("undo", b), document.removeEventListener("keydown", f), document.removeEventListener("keyup", u), e.line.setStyle({ cssStyle: "pointer-events: auto;" }), p();
        let d = this.currentEndReason, m = !0;
        d === "escape" ? m = !1 : e.points.length < 2 ? (e.removeFromParent(), d = "points_insufficient", m = !1) : this.addMeshEventListeners(e), e.__five_pano_index = this.five.panoIndex, this.currentMeasureMesh = null, this.listener.removeMeasureListener(), this.emit("measureEnd", d, m ? e.points : []), this.currentEndReason = "enter";
      };
      this.on("undo", b), this.pointSelector.on("intersectionUpdate", v), this.pointSelector.on("select", E), this.pointSelector.on("disable", R), this.pointSelector.enable();
    });
    /**
     * @description 结束测量
     */
    s(this, "endMeasure", () => {
      this.currentEndReason = "external", this.pointSelector.disable();
    });
    /**
     * @description 通过Enter键结束测量
     */
    s(this, "endMeasureByEnter", () => {
      this.currentEndReason = "enter", this.endMeasure();
    });
    /**
     * @description 通过模式改变结束测量
     */
    s(this, "endMeasureByModeChange", () => {
      this.currentEndReason = "mode_change", this.endMeasure();
    });
    /**
     * @description 通过全景移动结束测量
     */
    s(this, "endMeasureByPanoMove", () => {
      this.currentEndReason = "pano_move", this.endMeasure();
    });
    /**
     * @description 通过楼层改变结束测量
     */
    s(this, "endMeasureByFloorChange", () => {
      this.currentEndReason = "floor_change", this.endMeasure();
    });
    /**
     * Enable or disable the display of length measurements
     * @param enable - Whether to display length measurements
     */
    s(this, "setLengthEnable", (e) => {
      this.lineStyle.lengthEnable = e, this.polygonStyle.lengthEnable = e, this.group.children.forEach((t) => {
        t.changeConfig({
          lineStyle: g({}, this.lineStyle),
          polygonStyle: g({}, this.polygonStyle)
        }), this.addMeshEventListeners(t);
      }), this.currentMeasureMesh && this.currentMeasureMesh.changeConfig({
        lineStyle: g({}, this.lineStyle),
        polygonStyle: g({}, this.polygonStyle)
      }), this.five.needsRender = !0;
    });
    /**
     * Switch the measurement unit without resetting the plugin
     * @param unit - The new unit to use ('m' for metric, 'ft' for imperial, or 'mm' for millimeters)
     */
    s(this, "setUnit", (e) => {
      if (this._config && (this._config.unit = e), this.lineStyle.lengthUnit = e, this.polygonStyle.lengthUnit = e, this.group.children.forEach((t) => {
        try {
          t.changeConfig({
            lineStyle: g({}, this.lineStyle),
            polygonStyle: g({}, this.polygonStyle)
          }), this.addMeshEventListeners(t);
        } catch (i) {
        }
      }), this.currentMeasureMesh)
        try {
          this.currentMeasureMesh.changeConfig({
            lineStyle: g({}, this.lineStyle),
            polygonStyle: g({}, this.polygonStyle)
          });
        } catch (t) {
        }
      this.five.needsRender = !0;
    });
    /**
     * Set the precision (number of decimal places) for length measurements
     * @param precision - The number of decimal places for length measurements (area measurements remain at fixed 2 decimal places)
     */
    s(this, "setPrecision", (e) => {
      if (this._config && (this._config.precision = e), this.lineStyle.precision = e, this.group.children.forEach((t) => {
        try {
          t.changeConfig({
            lineStyle: g({}, this.lineStyle),
            polygonStyle: g({}, this.polygonStyle)
          }), this.addMeshEventListeners(t);
        } catch (i) {
        }
      }), this.currentMeasureMesh)
        try {
          this.currentMeasureMesh.changeConfig({
            lineStyle: g({}, this.lineStyle),
            polygonStyle: g({}, this.polygonStyle)
          });
        } catch (t) {
        }
      this.five.needsRender = !0;
    });
    /**
     * @description 取消本次测量
     */
    s(this, "cancel", () => {
      var e;
      this.currentEndReason = "escape", (e = this.currentMeasureMesh) == null || e.removeFromParent(), this.pointSelector.disable();
    });
    /**
     * @description 撤销上一步
     */
    s(this, "undo", () => {
      this.emit("undo");
    });
    /**
     * @description 清空正在测量的内容
     */
    s(this, "clearCurrentMeasure", () => {
      var e;
      (e = this.currentMeasureMesh) == null || e.removeFromParent(), this.currentMeasureMesh = null, this.pointSelector.disable();
    });
    /**
     * @description 清空所有测量内容
     */
    s(this, "clear", () => {
      this.currentMeasureMesh = null, this.pointSelector.disable(), this.group.children.forEach(this.removeMeshEventListeners), this.group.removeChildren(), this.cursor.removeDeleteButton();
    });
    s(this, "dispose", () => {
      this.listener.removeMeasureListener(), this.listener.removeClickListener(), this.pointSelector.disable(), this.disposeGlobalTouchHandler(), this.clear();
    });
    // eslint-disable-next-line @typescript-eslint/member-ordering
    s(this, "listener", {
      // 点击事件
      addClickListener: () => {
        this.five.on("panoArrived", this.onMoveToPano), this.five.on("modeChange", this.onModeChange), P("delete, backspace", this.deleteSelectedMesh), this.initEventListeners();
      },
      removeClickListener: () => {
        this.group.children.forEach((e) => {
          var t, i;
          (t = e.line.doms) == null || t.forEach((n) => {
            n != null && n.container && (n.container.onclick = null, n.container.onmouseenter = null, n.container.onmouseleave = null);
          }), (i = e.polygon.areaDom) != null && i.container && (e.polygon.areaDom.container.onclick = null, e.polygon.areaDom.container.onmouseenter = null, e.polygon.areaDom.container.onmouseleave = null);
        }), this.fiveDomEvents.clear(), this.five.off("panoArrived", this.onMoveToPano), this.five.off("modeChange", this.onModeChange), P.unbind("delete, backspace");
      },
      // 绘制快捷键
      addMeasureListener: () => {
        P("ctrl+z, command+z", this.undo), P("esc", this.cancel), P("enter", this.endMeasureByEnter), this.five.on("mode.change", this.endMeasureByModeChange), this.five.on("pano.moveTo", this.endMeasureByPanoMove), this.five.on("model.changeShownFloor", this.endMeasureByFloorChange);
      },
      removeMeasureListener: () => {
        P.unbind("ctrl+z, command+z"), P.unbind("esc"), P.unbind("enter"), this.five.off("mode.change", this.endMeasureByModeChange), this.five.off("pano.moveTo", this.endMeasureByPanoMove), this.five.off("model.changeShownFloor", this.endMeasureByFloorChange);
      }
    });
    s(this, "onMoveToPano", (e) => {
      const t = this.group.children.filter((n) => n !== this.currentMeasureMesh), i = new W();
      t.forEach((n) => {
        var c;
        if (n.unselect(), n.__five_pano_index === e) {
          n.visible = !0;
          return;
        }
        ((c = n.line.points) == null ? void 0 : c.some((a) => {
          var v, E;
          const r = a.clone().sub(this.five.camera.position).normalize();
          i.set(this.five.camera.position, r);
          const h = (E = (v = this.five.model.intersectRaycaster(i)) == null ? void 0 : v[0]) == null ? void 0 : E.point;
          if (!h)
            return !0;
          const l = 0.01, f = a.distanceTo(this.five.camera.position);
          return h.distanceTo(this.five.camera.position) + l > f;
        })) ? n.visible = !0 : n.visible = !1, this.five.needsRender = !0;
      });
    });
    s(this, "onModeChange", (e) => {
      e === "Mapview" && this.group.children.forEach((t) => {
        t.visible = !0;
      });
    });
    s(this, "onClick", ({ origDomEvent: e, target: t }) => {
      var r;
      const i = t;
      if (!i)
        return;
      if (i.selected) {
        i.unselect(), this.cursor.removeDeleteButton();
        return;
      }
      let n, o;
      if (e && ("touches" in e && e.touches && e.touches[0] ? (n = e.touches[0].clientX, o = e.touches[0].clientY) : "clientX" in e && "clientY" in e && (n = e.clientX, o = e.clientY)), n === void 0 || o === void 0)
        return;
      this.group.children.forEach((h) => h.unselect()), i.select();
      const c = () => {
        this.removeMeshEventListeners(i), i.removeFromParent(), this.cursor.removeDeleteButton(), this.five.needsRender = !0;
      }, a = ((r = this.five.getElement()) == null ? void 0 : r.parentElement) || document.body;
      this.cursor.showDeleteButton({
        clientX: n,
        clientY: o,
        container: a,
        onClick: c
      }), this.five.once("cameraUpdate", () => {
        i.unselect(), this.cursor.removeDeleteButton();
      });
    });
    s(this, "onHover", ({ target: e }) => {
      if (this.currentMeasureMesh)
        return;
      const t = e;
      t && t.hover();
    });
    s(this, "onUnHover", ({ target: e }) => {
      if (this.currentMeasureMesh)
        return;
      const t = e;
      t && t.unhover();
    });
    s(this, "deleteSelectedMesh", () => {
      this.group.children.filter((t) => t.selected).forEach((t) => {
        this.removeMeshEventListeners(t), t.removeFromParent();
      }), this.cursor.removeDeleteButton(), this.five.needsRender = !0;
    });
    // Helper method to remove all event listeners from a mesh
    s(this, "removeMeshEventListeners", (e) => {
      var t, i, n;
      (t = e.line.pointMeshes) == null || t.forEach((o) => {
        const c = o.__longPressCleanup;
        c && (c(), delete o.__longPressCleanup);
      }), (i = e.line.doms) == null || i.forEach((o) => {
        o != null && o.container && (o.container.onclick = null, o.container.onmouseenter = null, o.container.onmouseleave = null);
      }), (n = e.polygon.areaDom) != null && n.container && (e.polygon.areaDom.container.onclick = null, e.polygon.areaDom.container.onmouseenter = null, e.polygon.areaDom.container.onmouseleave = null), this.fiveDomEvents.removeEventListener(e, "click"), this.fiveDomEvents.removeEventListener(e, "hover"), this.fiveDomEvents.removeEventListener(e, "unHover");
    });
    s(this, "updateSelectAdsorbedHelper", () => {
      if (!this.currentMeasureMesh || this.currentMeasureMesh.points.length === 0) {
        this.pointSelector.setAdherePoints(null), this.pointSelector.adhereLine = [], this.pointSelector.adherePlane = [];
        return;
      }
      if (this.currentMeasureMesh.points.length >= 1) {
        this.pointSelector.setAdherePoints([this.currentMeasureMesh.points[0]]);
        const e = this.currentMeasureMesh.points.at(-1);
        this.pointSelector.adhereLine = [
          new y.Line3(new y.Vector3(1, 0, 0).add(e), new y.Vector3(-1, 0, 0).add(e)),
          new y.Line3(new y.Vector3(0, 1, 0).add(e), new y.Vector3(0, -1, 0).add(e)),
          new y.Line3(new y.Vector3(0, 0, 1).add(e), new y.Vector3(0, 0, -1).add(e))
        ], this.pointSelector.adherePlane = [];
      }
      if (this.currentMeasureMesh.points.length >= 3) {
        const e = new y.Plane().setFromCoplanarPoints(
          this.currentMeasureMesh.points[0],
          this.currentMeasureMesh.points[1],
          this.currentMeasureMesh.points[2]
        );
        this.pointSelector.adherePlane = [e];
      } else
        this.pointSelector.adherePlane = [];
    });
    s(this, "addMeshEventListeners", (e) => {
      var t, i;
      this.removeMeshEventListeners(e), this.addEndpointLongPressListeners(e), (t = e.line.doms) == null || t.forEach((n) => {
        n != null && n.container && (n.container.onclick = (o) => this.onClick({ origDomEvent: o, target: e }), n.container.onmouseenter = () => this.onHover({ target: e }), n.container.onmouseleave = () => this.onUnHover({ target: e }));
      }), (i = e.polygon.areaDom) != null && i.container && (e.polygon.areaDom.container.onclick = (n) => this.onClick({ origDomEvent: n, target: e }), e.polygon.areaDom.container.onmouseenter = () => this.onHover({ target: e }), e.polygon.areaDom.container.onmouseleave = () => this.onUnHover({ target: e })), this.fiveDomEvents.addEventListener(e, "click", this.onClick), this.fiveDomEvents.addEventListener(e, "hover", this.onHover), this.fiveDomEvents.addEventListener(e, "unHover", this.onUnHover);
    });
    s(this, "addEndpointLongPressListeners", (e) => {
      this.setupGlobalTouchHandler(), e.line.pointMeshes.forEach((t, i) => {
        let n, o = !1, c = i;
        e.isPolygon && e.points.length > 3 && (i === e.line.pointMeshes.length - 1 && (c = 0), i >= e.points.length && (c = 0));
        const a = (l) => {
          if (this.currentMeasureMesh)
            return;
          o = !1;
          let f = null;
          l.origDomEvent && ("clientX" in l.origDomEvent && "clientY" in l.origDomEvent ? f = {
            x: l.origDomEvent.clientX,
            y: l.origDomEvent.clientY
          } : "touches" in l.origDomEvent && l.origDomEvent.touches && l.origDomEvent.touches[0] ? f = {
            x: l.origDomEvent.touches[0].clientX,
            y: l.origDomEvent.touches[0].clientY
          } : "changedTouches" in l.origDomEvent && l.origDomEvent.changedTouches && l.origDomEvent.changedTouches[0] && (f = {
            x: l.origDomEvent.changedTouches[0].clientX,
            y: l.origDomEvent.changedTouches[0].clientY
          })), l.stopPropagation(), l.origDomEvent && (l.origDomEvent.preventDefault(), l.origDomEvent.stopPropagation()), this.showLongPressIndicator(t, f);
          const u = (p) => {
            var v;
            if (f) {
              let E, b;
              if ("touches" in p && p.touches[0])
                E = p.touches[0].clientX, b = p.touches[0].clientY;
              else if ("clientX" in p)
                E = p.clientX, b = p.clientY;
              else
                return;
              Math.sqrt(Math.pow(E - f.x, 2) + Math.pow(b - f.y, 2)) > 10 && (this.hideLongPressIndicator(), n && (clearTimeout(n), n = void 0), (v = this.cleanupGlobalListeners) == null || v.call(this));
            }
          };
          this.cleanupGlobalListeners = () => {
            document.removeEventListener("mousemove", u), document.removeEventListener("touchmove", u);
          }, document.addEventListener("mousemove", u), document.addEventListener("touchmove", u, { passive: !1 }), n = setTimeout(() => {
            var p;
            o = !0, (p = this.cleanupGlobalListeners) == null || p.call(this), this.hideLongPressIndicator(), this.startRepositioning(e, c, !0, f);
          }, 500);
        }, r = () => {
          var l;
          n && (clearTimeout(n), n = void 0), (l = this.cleanupGlobalListeners) == null || l.call(this), this.hideLongPressIndicator(), o && this.repositioningState && (this.repositioningState.isDragMode && this.repositioningState.hasMoved || this.repositioningState.isDragMode, o = !1);
        }, h = (l) => {
          if (o)
            return l.stopPropagation(), o = !1, !1;
        };
        this.fiveDomEvents.addEventListener(t, "mousedown", a), this.fiveDomEvents.addEventListener(t, "mouseup", r), this.fiveDomEvents.addEventListener(t, "click", h), t.__longPressHandlers = {
          onPointerDown: a,
          onPointerUp: r,
          onClick: h,
          measureMesh: e,
          pointIndex: c
          // Use the corrected point index
        }, t.__longPressCleanup = () => {
          var l;
          n && clearTimeout(n), (l = this.cleanupGlobalListeners) == null || l.call(this), this.hideLongPressIndicator(), this.fiveDomEvents.removeEventListener(t, "mousedown", a), this.fiveDomEvents.removeEventListener(t, "mouseup", r), this.fiveDomEvents.removeEventListener(t, "click", h), delete t.__longPressHandlers;
        };
      });
    });
    /**
     * @description Load measurement data from external source
     * @param data Array of point data for measurements
     */
    s(this, "load", (e) => {
      this.clear(), e.forEach((t) => {
        const i = new T({
          lineStyle: this.lineStyle,
          polygonStyle: this.polygonStyle
        });
        i.setPoints(t.points), this.group.add(i), this.addMeshEventListeners(i), i.__five_pano_index = this.five.panoIndex;
      }), this.five.needsRender = !0;
    });
    /**
     * Start repositioning an endpoint
     */
    s(this, "startRepositioning", (e, t, i = !1, n) => {
      this.currentMeasureMesh || this.repositioningState || (this.repositioningState = {
        measureMesh: e,
        pointIndex: t,
        originalOpacity: e.line.lineOpacity,
        originalMeshState: e.points.map((o) => o.clone()),
        isDragMode: i,
        mouseDownPosition: n || void 0,
        hasMoved: !1
      }, this.applyRepositioningStyle(e, !0), this.five.on("wantsGesture", this.preventFiveGestures), i ? this.enableGlobalMouseTracking() : (this.pointSelector.actionIfNoIntersection = "virtualPoint", this.pointSelector.enable(), this.pointSelector.on("intersectionUpdate", this.onRepositioningMove), this.pointSelector.on("select", this.onRepositioningConfirm), this.pointSelector.on("disable", this.cancelRepositioning)), P("esc", this.cancelRepositioning));
    });
    /**
     * Helper method to safely update polygon points while maintaining closure
     */
    s(this, "updatePolygonPoints", (e, t, i, n = !1) => {
      if (e.isPolygon && t.length > 3 && i !== void 0) {
        const o = t.length - 1;
        i === 0 ? t[o] = t[0].clone() : i === o && (t[0] = t[o].clone());
      }
      if (e.points = t, n && this.repositioningState) {
        const o = e.line;
        if (o.points = t, t.length >= 2) {
          const c = t.flatMap((a) => [a.x, a.y, a.z]);
          o.line1.geometry.setPositions(c), o.line1.computeLineDistances();
        }
        if (i !== void 0 && e.line.pointMeshes) {
          const c = t[i];
          if (e.isPolygon && t.length > 3) {
            const a = t.length - 1;
            if (i === 0) {
              const r = e.line.pointMeshes[0], h = e.line.pointMeshes[a];
              r && r.position.copy(c), h && h.position.copy(c);
            } else if (i === a) {
              const r = e.line.pointMeshes[0], h = e.line.pointMeshes[a];
              r && r.position.copy(c), h && h.position.copy(c);
            } else {
              const r = e.line.pointMeshes[i];
              r && r.position.copy(c);
            }
          } else {
            const a = e.line.pointMeshes[i];
            a && a.position.copy(c);
          }
        }
        e.isPolygon && e.polygon.setPoints(t);
      } else
        e.line.setPoints(t), e.isPolygon && e.polygon.setPoints(t);
    });
    /**
     * Handle mouse movement during repositioning
     */
    s(this, "onRepositioningMove", (e) => {
      if (!this.repositioningState || !e)
        return;
      const { measureMesh: t, pointIndex: i } = this.repositioningState;
      this.repositioningState.hasMoved = !0;
      const n = [...t.points];
      n[i] = e.point.clone(), this.updatePolygonPoints(t, n, i, !0), this.five.needsRender = !0;
    });
    /**
     * Confirm repositioning with click
     */
    s(this, "onRepositioningConfirm", (e) => {
      if (!this.repositioningState || !e)
        return;
      const { measureMesh: t, pointIndex: i } = this.repositioningState, n = [...t.points];
      n[i] = e.point.clone(), this.updatePolygonPoints(t, n, i, !1), this.applyRepositioningStyle(t, !1), this.addEndpointLongPressListeners(t), this.cleanupRepositioning();
    });
    /**
     * Confirm repositioning when drag ends (mouse up after long press drag)
     */
    s(this, "confirmRepositioningOnDragEnd", () => {
      if (!this.repositioningState)
        return;
      const { measureMesh: e, pointIndex: t } = this.repositioningState, i = [...e.points];
      this.updatePolygonPoints(e, i, t, !1), this.applyRepositioningStyle(e, !1), this.addEndpointLongPressListeners(e), this.cleanupRepositioning();
    });
    /**
     * Cancel repositioning (restore original position)
     */
    s(this, "cancelRepositioning", () => {
      if (!this.repositioningState)
        return;
      const { measureMesh: e, originalMeshState: t } = this.repositioningState;
      this.updatePolygonPoints(e, t, void 0, !1), this.applyRepositioningStyle(e, !1), this.addEndpointLongPressListeners(e), this.cleanupRepositioning();
    });
    /**
     * Apply or remove repositioning preview styling
     */
    s(this, "applyRepositioningStyle", (e, t) => {
      const i = t ? 0.4 : 1, n = t;
      e.line.setStyle({
        lineOpacity: i,
        dashed: n,
        cssStyle: t ? "pointer-events: none;" : "pointer-events: auto;"
      }), e.isPolygon && e.polygon.setStyle({
        opacity: i * 0.3
        // Even more transparent for area
      }), e.line.pointMeshes.forEach((o) => {
        o.setStyle({
          opacity: i
        });
      });
    });
    /**
     * Enable global mouse tracking for drag mode (when PointSelector can't track due to mouse being held down)
     */
    s(this, "enableGlobalMouseTracking", () => {
      const e = this.five.getElement();
      if (!e)
        return;
      let t = null;
      const i = (r) => {
        if (!this.repositioningState)
          return;
        const h = e.getBoundingClientRect(), l = (r.clientX - h.left) / h.width * 2 - 1, f = -((r.clientY - h.top) / h.height) * 2 + 1, u = new y.Raycaster();
        u.setFromCamera(new y.Vector2(l, f), this.five.camera);
        const p = this.five.model.intersectRaycaster(u);
        p && p.length > 0 ? (t = {
          point: p[0].point,
          distance: p[0].distance,
          face: p[0].face,
          raycaster: u
        }, this.onRepositioningMove(t)) : (t = {
          point: u.ray.origin.clone().add(u.ray.direction.clone().multiplyScalar(5)),
          distance: 5,
          raycaster: u,
          isVirtual: !0
        }, this.onRepositioningMove(t));
      }, n = (r) => {
        if (!this.repositioningState || !r.touches[0])
          return;
        const h = e.getBoundingClientRect(), l = r.touches[0], f = (l.clientX - h.left) / h.width * 2 - 1, u = -((l.clientY - h.top) / h.height) * 2 + 1, p = new y.Raycaster();
        p.setFromCamera(new y.Vector2(f, u), this.five.camera);
        const v = this.five.model.intersectRaycaster(p);
        v && v.length > 0 ? (t = {
          point: v[0].point,
          distance: v[0].distance,
          face: v[0].face,
          raycaster: p
        }, this.onRepositioningMove(t)) : (t = {
          point: p.ray.origin.clone().add(p.ray.direction.clone().multiplyScalar(5)),
          distance: 5,
          raycaster: p,
          isVirtual: !0
        }, this.onRepositioningMove(t));
      }, o = (r) => {
        this.repositioningState && (t ? this.onRepositioningConfirm(t) : this.confirmRepositioningOnDragEnd());
      }, c = (r) => {
        this.repositioningState && (t ? this.onRepositioningConfirm(t) : this.confirmRepositioningOnDragEnd());
      }, a = (r) => {
        this.repositioningState && t && this.onRepositioningConfirm(t);
      };
      document.addEventListener("mousemove", i), document.addEventListener("mouseup", o), document.addEventListener("click", a), document.addEventListener("touchmove", n, { passive: !1 }), document.addEventListener("touchend", c, { passive: !1 }), this.repositioningState.__globalMouseCleanup = () => {
        document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", o), document.removeEventListener("click", a), document.removeEventListener("touchmove", n), document.removeEventListener("touchend", c);
      };
    });
    /**
     * Show long press visual feedback circle
     */
    s(this, "showLongPressIndicator", (e, t) => {
      this.hideLongPressIndicator();
      const i = this.five.getElement();
      if (!i)
        return;
      this.five.on("wantsGesture", this.preventFiveGestures);
      const n = document.createElement("div");
      if (n.style.position = "absolute", n.style.width = "80px", n.style.height = "80px", n.style.border = "6px solid #f0f0f0", n.style.borderRadius = "50%", n.style.pointerEvents = "none", n.style.zIndex = "10000", n.style.boxSizing = "border-box", n.style.animation = "longPressShrink 500ms linear forwards", !document.querySelector("#longpress-keyframes")) {
        const o = document.createElement("style");
        o.id = "longpress-keyframes", o.textContent = `
        @keyframes longPressShrink {
          from {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          to {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
        }
      `, document.head.appendChild(o);
      }
      if (t)
        n.style.left = `${t.x}px`, n.style.top = `${t.y}px`, n.style.transform = "translate(-50%, -50%)";
      else {
        const c = e.getWorldPosition(new y.Vector3()).clone().project(this.five.camera), a = i.getBoundingClientRect(), r = (c.x + 1) * a.width / 2 + a.left, h = (-c.y + 1) * a.height / 2 + a.top;
        n.style.left = `${r}px`, n.style.top = `${h}px`, n.style.transform = "translate(-50%, -50%)";
      }
      document.body.appendChild(n), this.longPressIndicator = n;
    });
    /**
     * Hide long press visual feedback circle
     */
    s(this, "hideLongPressIndicator", () => {
      this.longPressIndicator && (this.longPressIndicator.remove(), this.longPressIndicator = null, this.five.off("wantsGesture", this.preventFiveGestures));
    });
    /**
     * Prevent Five canvas gestures during repositioning
     */
    s(this, "preventFiveGestures", () => !1);
    /**
     * Clean up repositioning state and event listeners
     */
    s(this, "cleanupRepositioning", () => {
      if (this.repositioningState) {
        const e = this.repositioningState.__globalMouseCleanup;
        e && e(), this.repositioningState.isDragMode || (this.pointSelector.off("intersectionUpdate", this.onRepositioningMove), this.pointSelector.off("select", this.onRepositioningConfirm), this.pointSelector.off("disable", this.cancelRepositioning), this.pointSelector.disable());
      }
      this.five.off("wantsGesture", this.preventFiveGestures), P.unbind("esc", this.cancelRepositioning), this.repositioningState = null, this.five.needsRender = !0;
    });
    s(this, "setupGlobalTouchHandler", () => {
      var n;
      if ((n = this.globalTouchHandler) != null && n.isSetup)
        return;
      const e = this.five.getElement();
      if (!e)
        return;
      const t = (o) => {
        if (this.currentMeasureMesh)
          return;
        const c = o.touches[0];
        if (!c)
          return;
        const a = e.getBoundingClientRect(), r = (c.clientX - a.left) / a.width * 2 - 1, h = -((c.clientY - a.top) / a.height) * 2 + 1, l = new y.Raycaster();
        l.setFromCamera(new y.Vector2(r, h), this.five.camera), l.params.Points.threshold = 0.5, l.params.Line.threshold = 0.1, l.params.Mesh = {};
        const f = [];
        for (const u of this.group.children)
          if (!(!u || !u.line || !u.line.pointMeshes))
            for (let p = 0; p < u.line.pointMeshes.length; p++) {
              const v = u.line.pointMeshes[p];
              if (!v)
                continue;
              if (l.intersectObject(v, !0).length > 0) {
                const b = v.__longPressHandlers;
                if (b) {
                  const R = this.calculateScreenDistance(c, v, e);
                  R < 30 && f.push({
                    pointMesh: v,
                    handlers: b,
                    distance: R,
                    // Use screen distance for sorting
                    measureMesh: b.measureMesh,
                    pointIndex: b.pointIndex
                    // Use the STORED pointIndex, not the loop index
                  });
                }
              }
            }
        if (f.length > 0) {
          f.sort((v, E) => v.distance - E.distance);
          const u = f[0];
          if (this.repositioningState)
            return;
          const p = {
            type: "mousedown",
            target: u.pointMesh,
            origDomEvent: o,
            raycaster: l,
            intersects: [{ distance: 0 }],
            // Use dummy distance since we're using screen distance
            stopPropagation: () => {
              o.stopPropagation();
            }
          };
          u.handlers && typeof u.handlers.onPointerDown == "function" && u.handlers.onPointerDown(p);
        }
      }, i = (o) => {
        for (const c of this.group.children)
          if (!(!c || !c.line || !c.line.pointMeshes))
            for (const a of c.line.pointMeshes) {
              if (!a)
                continue;
              const r = a.__longPressHandlers;
              r && typeof r.onPointerUp == "function" && r.onPointerUp();
            }
      };
      e.addEventListener("touchstart", t, { passive: !1 }), e.addEventListener("touchend", i, { passive: !1 }), this.globalTouchHandler = {
        isSetup: !0,
        onTouchStart: t,
        onTouchEnd: i
      };
    });
    // Remove the stub methods since they're not needed
    s(this, "disposeGlobalTouchHandler", () => {
      var e;
      if ((e = this.globalTouchHandler) != null && e.isSetup) {
        const t = this.five.getElement();
        t && (t.removeEventListener("touchstart", this.globalTouchHandler.onTouchStart), t.removeEventListener("touchend", this.globalTouchHandler.onTouchEnd)), this.globalTouchHandler = null;
      }
    });
    /**
     * Calculate screen distance between touch/mouse point and point mesh
     */
    s(this, "calculateScreenDistance", (e, t, i) => {
      const n = e.clientX, o = e.clientY, a = t.getWorldPosition(new y.Vector3()).clone().project(this.five.camera), r = i.getBoundingClientRect(), h = (a.x + 1) * r.width / 2 + r.left, l = (-a.y + 1) * r.height / 2 + r.top, f = n - h, u = o - l;
      return Math.sqrt(f * f + u * u);
    });
    this.five = e;
    const i = { unit: "m", lengthEnable: !0, precision: 2 };
    this.config = t ? g(g({}, i), t) : i, this.group = new A(), this.group.name = "MeasureGroup", this.group.__five__ = this.five, this.five.scene.add(this.group), this.five.on("panoArrived", this.onMoveToPano), this.five.on("modeChange", this.onModeChange), P("delete, backspace", this.deleteSelectedMesh), this.initEventListeners();
  }
  get pointSelector() {
    return this._pointSelector ? this._pointSelector : (this._pointSelector = new V(this.five, { mode: "cursor", helper: { pointHelper: "highlight" }, skipPanorama: !0 }), this._pointSelector);
  }
  get fiveDomEvents() {
    return this._fiveDomEvents ? this._fiveDomEvents : (this._fiveDomEvents = new X(this.five, { fiveModels: null }), this._fiveDomEvents);
  }
  get cursor() {
    return this._cursor ? this._cursor : (this._cursor = new N(), this._cursor);
  }
  get config() {
    return this._config;
  }
  set config(e) {
    var t, i;
    this._config = e, this.lineStyle.lengthUnit = e.unit, this.polygonStyle.lengthUnit = e.unit, e.lengthEnable !== void 0 && (this.lineStyle.lengthEnable = e.lengthEnable, this.polygonStyle.lengthEnable = e.lengthEnable), e.precision !== void 0 && (this.lineStyle.precision = e.precision), (i = (t = this.group) == null ? void 0 : t.children) == null || i.forEach((n) => n.changeConfig({ lineStyle: this.lineStyle, polygonStyle: this.polygonStyle }));
  }
}
export {
  Lt as MeasureController
};
