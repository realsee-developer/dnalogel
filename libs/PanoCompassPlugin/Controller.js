var P = Object.defineProperty;
var b = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, F = Object.prototype.propertyIsEnumerable;
var u = (h, n, e) => n in h ? P(h, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[n] = e, f = (h, n) => {
  for (var e in n || (n = {}))
    C.call(n, e) && u(h, e, n[e]);
  if (b)
    for (var e of b(n))
      F.call(n, e) && u(h, e, n[e]);
  return h;
};
var r = (h, n, e) => (u(h, typeof n != "symbol" ? n + "" : n, e), e);
var d = (h, n, e) => new Promise((t, o) => {
  var s = (p) => {
    try {
      m(e.next(p));
    } catch (c) {
      o(c);
    }
  }, i = (p) => {
    try {
      m(e.throw(p));
    } catch (c) {
      o(c);
    }
  }, m = (p) => p.done ? t(p.value) : Promise.resolve(p.value).then(s, i);
  m((e = e.apply(h, n)).next());
});
import * as a from "three";
import { Five as _ } from "@realsee/five";
import { Controller as A } from "../base/BasePluginWithData.js";
import { getRoomInfoInstance as U } from "./getRoomInfoInstance.js";
import { loadTexture as M } from "../shared-utils/three/loadTexture.js";
import { CSS3DRenderPlugin as T } from "../CSS3DRenderPlugin/index.js";
import { tweenProgress as D } from "../shared-utils/animationFrame/BetterTween.js";
import "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/tag.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/three/core/Raycaster.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/five/fiveEveryReadyListener.js";
import "../shared-utils/throttle.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../shared-utils/three/Magnifier.js";
import "../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../shared-utils/three/Assets/index.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../shared-utils/even.js";
import "../shared-utils/CSS3DRender/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/isNil.js";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../shared-utils/createResizeObserver.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../shared-utils/util.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../shared-utils/three/PointSelector/utils/html.js";
import "../shared-utils/CSS3DRender/index.js";
import "../shared-utils/five/fiveModelLoad.js";
import "../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../Sculpt/Meshes/Line.js";
import "../Sculpt/typings/style.js";
import "../shared-utils/three/IObject3D.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/three/core/LineGeometry.js";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
import "../Sculpt/utils/unit.js";
import "../Sculpt/utils/renderDom.js";
import "../shared-utils/five/FivePuppet.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getPosition.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
import "../Sculpt/utils/three/rayOnLine.js";
import "../shared-utils/url/absoluteUrl.js";
import "./Assets/roomInfoIcon.js";
import "../CSS3DRenderPlugin/Controller.js";
import "../shared-utils/animationFrame/index.js";
const g = { userAction: !0 };
class qe extends A {
  constructor(e, t) {
    super(e, t);
    /**
     * 默认状态
     */
    r(this, "state", {
      visible: !0,
      enabled: !0,
      config: {
        /**
         * @todo 图片转base64
         */
        compassImageUrl: this.absoluteUrl("/release/web/v3/north-point-circle.96498e69.png"),
        entryDoorImageUrl: this.absoluteUrl("/release/web/enterDoor.831b8208.png")
      }
    });
    r(this, "data");
    r(this, "group", new a.Group());
    r(this, "roomInfoInstance");
    r(this, "roomInfoWrapperInstance");
    r(this, "compassMeshTween");
    r(this, "compassMesh");
    r(this, "logoMesh");
    r(this, "logoMeshTween");
    r(this, "entryDoorMesh");
    /**
     * 销毁插件
     * @todo 销毁贴图时，最好还是直接销毁贴图吧，this.compassMesh?.material.map 这种都是很深层的引用了。THREE 的建议我看也是自己去管理和销毁公共贴图。
     */
    r(this, "dispose", () => {
      var e, t, o, s;
      this.five.scene.remove(this.group), this.group.remove(...this.group.children), (t = (e = this.compassMesh) == null ? void 0 : e.material.map) == null || t.dispose(), (s = (o = this.entryDoorMesh) == null ? void 0 : o.material.map) == null || s.dispose(), this.five.off("dispose", this.dispose), this.five.off("panoArrived", this.onFivePanoArrived), this.five.off("panoWillArrive", this.onFivePanoWillArrive), this.five.off("cameraDirectionUpdate", this.onFiveCameraDirectionUpdate);
    });
    /**
     * 添加事件监听
     */
    r(this, "_addEventListener", () => {
      this.five.on("panoArrived", this.onFivePanoArrived), this.five.on("panoWillArrive", this.onFivePanoWillArrive), this.five.on("modeChange", this.onFiveModeChange), this.five.on("cameraDirectionUpdate", this.onFiveCameraDirectionUpdate);
    });
    /**
     * 移除事件监听
     */
    r(this, "_removeEventListener", () => {
      this.five.off("panoArrived", this.onFivePanoArrived), this.five.off("panoWillArrive", this.onFivePanoWillArrive), this.five.off("modeChange", this.onFiveModeChange), this.five.off("cameraDirectionUpdate", this.onFiveCameraDirectionUpdate);
    });
    /**
     * 启用，响应事件，展示UI
     */
    r(this, "_enable", () => {
      this.five.scene.add(this.group), this.init(), this.onFivePanoArrived(this.five.panoIndex || 0), this._addEventListener();
    });
    /**
     * 禁用，不响应事件，不展示UI
     */
    r(this, "_disable", () => {
      this._clearCompassIfNeed(), this._clearEntryDoorIfNeed(), this.five.scene.remove(this.group), this._removeEventListener();
    });
    /**
     * 展示UI
     */
    r(this, "_toggleVisible", () => {
      this.group.visible = this.state.visible, this.five.needsRender = !0;
    });
    r(this, "_clearCompassIfNeed", () => {
      var e;
      this.compassMesh && (this.group.remove(this.compassMesh), (e = this.compassMesh.material.map) == null || e.dispose(), this.compassMesh = null);
    });
    r(this, "_clearLogoIfNeed", () => {
      var e;
      this.logoMesh && (this.group.remove(this.logoMesh), (e = this.logoMesh.material.map) == null || e.dispose(), this.logoMesh = null);
    });
    r(this, "_clearEntryDoorIfNeed", () => {
      var e;
      this.entryDoorMesh && (this.group.remove(this.entryDoorMesh), (e = this.entryDoorMesh.material.map) == null || e.dispose(), this.entryDoorMesh = null), this.roomInfoInstance && (this.roomInfoInstance.dispose(), this.roomInfoInstance = null), this.roomInfoWrapperInstance && (this.roomInfoWrapperInstance.dispose(), this.roomInfoWrapperInstance = null);
    });
    r(this, "onFivePanoWillArrive", (e) => {
      var t, o, s, i;
      e !== this.five.panoIndex && ((t = this.compassMeshTween) == null || t.dispose(), (o = this.compassMesh) == null || o.material.setValues({ opacity: 0 }), (s = this.logoMeshTween) == null || s.dispose(), (i = this.logoMesh) == null || i.material.setValues({ opacity: 0 }));
    });
    r(this, "onFivePanoArrived", (e) => {
      var o, s, i, m, p, c, y, I;
      const t = (i = (s = (o = this.five.work) == null ? void 0 : o.observers) == null ? void 0 : s[e]) == null ? void 0 : i.standingPosition;
      if (this.compassMesh && t && (this.compassMesh.position.copy(t.clone().setY(t.y + 0.01)), this.compassMesh.material.opacity === 0 && ((m = this.compassMeshTween) == null || m.dispose(), this.compassMeshTween = D(1e3).onUpdate(({ progress: v }) => {
        var l;
        (l = this.compassMesh) == null || l.material.setValues({ opacity: v }), this.five.needsRender = !0;
      }).play())), this.logoMesh && t && (this.logoMesh.position.copy(t.clone().setY(t.y + 0.011)), this.logoMesh.material.opacity === 0 && ((p = this.logoMeshTween) == null || p.dispose(), this.logoMeshTween = D(1e3).onUpdate(({ progress: v }) => {
        var l;
        (l = this.logoMesh) == null || l.material.setValues({ opacity: v }), this.five.needsRender = !0;
      }).play())), this.entryDoorMesh) {
        const l = new a.Vector3(
          this.data.entrance.position.x,
          this.data.entrance.position.y,
          this.data.entrance.position.z
        ).clone().setY(t.y).sub(t).normalize(), w = t.clone().add(l.clone().multiplyScalar(0.7)).setY(t.y + 0.01);
        this.entryDoorMesh.rotation.z = new a.Vector3(0, 0, -1).angleTo(l), this.entryDoorMesh.position.copy(w), ((c = this.data) == null ? void 0 : c.room_observers[e].room.type) === 1 ? (y = this.entryDoorMesh) == null || y.material.setValues({ opacity: 1 }) : (I = this.entryDoorMesh) == null || I.material.setValues({ opacity: 0 });
      }
      this.roomInfoInstance && this.roomInfoWrapperInstance && t && (this.roomInfoWrapperInstance.css3DObject.position.copy(t.clone().setY(t.y + 0.01)), this.roomInfoInstance.setRoom(this.data.room_observers[e].room)), this.five.needsRender = !0;
    });
    r(this, "onFiveCameraDirectionUpdate", ({ longitude: e, latitude: t }) => {
      var o, s;
      this.roomInfoWrapperInstance && (this.roomInfoWrapperInstance.css3DObject.rotation.z = e, t > 0.66 && this.five.getCurrentState().mode === "Panorama" ? (o = this.roomInfoInstance) == null || o.show() : (s = this.roomInfoInstance) == null || s.hide());
    });
    // eslint-disable-next-line max-params
    r(this, "onFiveModeChange", (e, t, o, s, i) => {
      e !== t && this.setState(
        {
          visible: e === _.Mode.Panorama
        },
        { userAction: i }
      );
    });
    this.five.scene.add(this.group), this.five.once("dispose", this.dispose), this.setState({
      visible: !0,
      enabled: !0,
      config: f(f({}, this.state.config), t || {})
    });
  }
  /**
   * 启用插件，响应用户操作并展示UI
   * @param options
   */
  enable(e = g) {
    this.setState(
      {
        enabled: !0
      },
      e
    );
  }
  /**
   * 禁用插件，禁止响应用户操作并隐藏UI
   * @param options
   */
  disable(e = g) {
    this.setState(
      {
        enabled: !1
      },
      e
    );
  }
  /**
   * 展示UI
   * @param options
   * @returns
   * @todo 需要考虑动画
   */
  show(e = g) {
    if (this.state.enabled)
      return this.setState(
        {
          visible: !0
        },
        e
      ), Promise.resolve();
  }
  /**
   * 隐藏UI
   * @param options
   * @returns
   * @todo 需要考虑动画
   */
  hide(e = g) {
    if (this.state.enabled)
      return this.setState(
        {
          visible: !1
        },
        e
      ), Promise.resolve();
  }
  setState(e, t = { userAction: !0 }) {
    var s, i;
    const o = JSON.parse(JSON.stringify(this.state));
    this.state = {
      visible: (s = e.visible) != null ? s : o.visible,
      enabled: (i = e.enabled) != null ? i : o.enabled,
      config: f(f({}, o.config), e.config || {})
    }, this.hooks.emit("stateChange", {
      state: this.state,
      prevState: o,
      userAction: t.userAction
    }), e.enabled === !0 && (this._enable(), this.hooks.emit("enable", t)), e.enabled === !1 && (this._disable(), this.hooks.emit("disable", t)), e.visible === !1 && (this._toggleVisible(), this.hooks.emit("hide", t)), e.visible === !0 && (this._toggleVisible(), this.hooks.emit("show", t)), e.config && this.init();
  }
  load(e, t, o = !0) {
    return d(this, null, function* () {
      const s = yield this.formatData(e);
      JSON.stringify(this.data) !== JSON.stringify(s) && (this.hooks.emit("dataChange", s, this.data), this.data = f({}, s), this.init(), t && this.setState(t, { userAction: o }), this.hooks.emit("dataLoaded", this.data));
    });
  }
  formatData(e) {
    return e.version && e.data ? Promise.resolve(e.data) : Promise.resolve(e);
  }
  /**
   * 初始化
   * @todo 逻辑需要细分
   */
  init() {
    return d(this, null, function* () {
      var o, s, i, m;
      const e = (s = (o = this.data) == null ? void 0 : o.north_rad) != null ? s : null;
      this._clearCompassIfNeed(), e !== null && (this.compassMesh = yield this.loadCompassMesh(), this.compassMesh && (this.compassMesh.rotateX(-Math.PI / 2), this.compassMesh.rotateZ(e - Math.PI / 2), this.group.add(this.compassMesh))), this._clearLogoIfNeed(), this.logoMesh = yield this.loadLogoMesh(), this.logoMesh && (this.logoMesh.rotateX(-Math.PI / 2), this.group.add(this.logoMesh));
      const t = (m = (i = this.data) == null ? void 0 : i.entrance) != null ? m : null;
      this._clearEntryDoorIfNeed(), t !== null && (this.entryDoorMesh = yield this.loadEntryDoorMesh(), this.roomInfoWrapperInstance = this.loadRoomInfo(), this.roomInfoInstance = U(), this.entryDoorMesh.rotateX(-Math.PI / 2), this.roomInfoWrapperInstance && this.roomInfoInstance.appendTo(this.roomInfoWrapperInstance.container), this.group.add(this.entryDoorMesh)), this.onFivePanoArrived(this.five.panoIndex || 0), this.five.needsRender = !0;
    });
  }
  loadCompassMesh() {
    return d(this, null, function* () {
      const e = this.state.config.compassImageUrl, t = yield M(e), o = new a.CircleGeometry(0.7, 32), s = new a.MeshBasicMaterial({
        map: t,
        transparent: !0,
        opacity: 0,
        depthTest: !1
      }), i = new a.Mesh(o, s);
      return i.name = "pano-compass-mesh", i;
    });
  }
  loadLogoMesh() {
    return d(this, null, function* () {
      if (!this.state.config.logoURL)
        return;
      const e = this.state.config.logoURL, t = yield M(e);
      t.minFilter = a.NearestFilter, t.magFilter = a.NearestFilter;
      const o = new a.PlaneBufferGeometry(0.4, 0.4), s = new a.MeshBasicMaterial({
        map: t,
        opacity: 0,
        transparent: !0,
        depthTest: !1
      }), i = new a.Mesh(o, s);
      return i.name = "pano-compass-logo-mesh", i;
    });
  }
  loadEntryDoorMesh() {
    return d(this, null, function* () {
      const e = this.state.config.entryDoorImageUrl, t = yield M(e), o = new a.PlaneGeometry(0.2, 0.16), s = new a.MeshBasicMaterial({
        map: t,
        transparent: !0,
        opacity: 0.8,
        depthTest: !1
      }), i = new a.Mesh(o, s);
      return i.name = "pano-compass-entry-door", i;
    });
  }
  loadRoomInfo() {
    const e = [
      new a.Vector3(-0.7, 0, -0.7),
      new a.Vector3(0.7, 0, -0.7),
      new a.Vector3(0.7, 0, 0.7),
      new a.Vector3(-0.7, 0, 0.7)
    ];
    return T(this.five).create3DDomContainer(e);
  }
}
export {
  qe as PanoCompassController
};
