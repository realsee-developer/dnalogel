var g = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var f = (n, r, e) => r in n ? g(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e, a = (n, r) => {
  for (var e in r || (r = {}))
    v.call(r, e) && f(n, e, r[e]);
  if (c)
    for (var e of c(r))
      b.call(r, e) && f(n, e, r[e]);
  return n;
};
var o = (n, r, e) => (f(n, typeof r != "symbol" ? r + "" : r, e), e);
var u = (n, r, e) => new Promise((i, t) => {
  var s = (d) => {
    try {
      p(e.next(d));
    } catch (m) {
      t(m);
    }
  }, l = (d) => {
    try {
      p(e.throw(d));
    } catch (m) {
      t(m);
    }
  }, p = (d) => d.done ? i(d.value) : Promise.resolve(d.value).then(s, l);
  p((e = e.apply(n, r)).next());
});
import * as h from "three";
import { Controller as M } from "../base/BasePlugin.js";
import { tweenProgress as A } from "../shared-utils/animationFrame/BetterTween.js";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { equal as P } from "../shared-utils/equal.js";
import "../shared-utils/five/FivePuppet.js";
import { loadTexture as w } from "../shared-utils/three/loadTexture.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/animationFrame/index.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/three/core/Raycaster.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/five/fiveEveryReadyListener.js";
import "../shared-utils/throttle.js";
import "../shared-utils/five/fiveModelLoad.js";
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
import "../Sculpt/Meshes/Line.js";
import "../Sculpt/typings/style.js";
import "../shared-utils/three/IObject3D.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/util.js";
import "../shared-utils/three/core/LineGeometry.js";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
import "../Sculpt/utils/unit.js";
import "../Sculpt/utils/renderDom.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getPosition.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
import "../Sculpt/utils/three/rayOnLine.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
import "../shared-utils/isTruelyObject.js";
class Qe extends M {
  constructor(e, i) {
    super(e);
    // ==================== public properties ====================
    /** 插件当前状态 */
    o(this, "state");
    /** 查询问题使用的调试对象 */
    o(this, "checkMsg", {
      /** mesh 隐藏的原因 */
      meshHidden: "",
      /** 插件 enabled 校验信息 */
      pluginDisabled: "",
      /** 插件 visible 校验信息 */
      pluginHidden: ""
    });
    // ==================== private properties ====================
    o(this, "group", new h.Group());
    o(this, "mesh");
    o(this, "textureLoadingPromise");
    o(this, "opacityAnimeTween");
    /** 是否正在走点动画中 */
    o(this, "isInPanoMoveAnime", !1);
    /** 上一次走点的全景图索引 */
    o(this, "lastArrivedPanoIndex", -1);
    /** config 的原始值 */
    o(this, "_config");
    /** disposed 的原始值 */
    o(this, "_disposed", !1);
    /**
     * 销毁插件
     * @todo 销毁贴图时，最好还是直接销毁贴图吧，this.mesh?.material.map 这种都是很深层的引用了。THREE 的建议我看也是自己去管理和销毁公共贴图。
     */
    o(this, "dispose", () => {
      this.five.scene.remove(this.group), this.group.remove(...this.group.children), this.five.off("dispose", this.dispose), this.five.off("panoArrived", this.onFivePanoArrived), this.five.off("panoWillArrive", this.onFivePanoWillArrive);
    });
    o(this, "checkMeshVisible", () => this.state.visible ? this.config.imageURL === "" ? { result: !1, msg: "图片不存在" } : this.mesh.material.map ? this.five.work ? this.five.getCurrentState().mode !== "Panorama" ? { result: !1, msg: "非全景模式" } : this.isInPanoMoveAnime ? { result: !1, msg: "处于走点动画中" } : { result: !0, msg: "" } : { result: !1, msg: "Five 数据未加载" } : { result: !1, msg: "指南针贴图未加载" } : { result: !1, msg: "插件隐藏" });
    /** 贴图加载完成的回调 */
    o(this, "onTextureLoaded", (e) => {
      this.mesh.material.map = e, this.mesh.material.needsUpdate = !0, this.updateMeshVisible();
    });
    /** Five load Work 后 */
    o(this, "onFiveWillLoad", () => {
      this.lastArrivedPanoIndex = -1, this.updateMeshVisible();
    });
    /** 走点前 */
    o(this, "onFivePanoWillArrive", (e) => {
      var i;
      e !== this.five.getCurrentState().panoIndex && (this.isInPanoMoveAnime = !0, (i = this.opacityAnimeTween) == null || i.dispose(), this.updateMeshVisible());
    });
    /** 走点后 */
    // eslint-disable-next-line @typescript-eslint/member-ordering
    o(this, "onFivePanoArrived", (e) => {
      e !== this.lastArrivedPanoIndex && (this.lastArrivedPanoIndex = e, this.isInPanoMoveAnime = !1, this.updateMeshPosition(e), this.updateMeshVisible(), this.five.needsRender = !0);
    });
    o(this, "onMeshVisibleChange", (e) => {
      var i;
      if ((i = this.opacityAnimeTween) == null || i.dispose(), !e) {
        this.mesh.visible = !1;
        return;
      }
      this.mesh.material.setValues({ opacity: 0 }), this.mesh.visible = !0, this.opacityAnimeTween = A(1e3).onUpdate(({ progress: t }) => {
        var s;
        (s = this.mesh) == null || s.material.setValues({ opacity: t }), this.five.needsRender = !0;
      }).play();
    });
    o(this, "onFiveModeChange", () => {
      this.updateMeshVisible();
    });
    this.five = e;
    const t = {
      enabled: !0,
      visible: !0
    };
    this.state = Object.assign(t, i == null ? void 0 : i.initialState);
    const s = a({
      width: 1.4,
      yOffset: 0.01,
      yRotate: 0,
      imageURL: this.absoluteUrl("/release/web/logo.7febb17f.png")
    }, i == null ? void 0 : i.config);
    this._config = s, this.group.name = "current-pano-image-plugin-group", this.mesh = new h.Mesh(
      new h.PlaneBufferGeometry(this.config.width, this.config.width),
      new h.MeshBasicMaterial({ transparent: !0, opacity: 0, depthTest: !1 })
    ), this.mesh.visible = !1, this.group.add(this.mesh), this.updateMeshQuaternion(this.config.yRotate), this.state.visible || (this.checkMsg.pluginHidden = "初始值设置为隐藏"), this.state.enabled || (this.checkMsg.pluginDisabled = "初始值设置为禁用"), this.state.enabled && this._enable({ userAction: !1 }), this.five.once("dispose", this.dispose);
  }
  /** 插件配置项 */
  get config() {
    return a({}, this._config);
  }
  /** 是否已经被销毁 */
  get disposed() {
    return this._disposed;
  }
  /**
   * 启用插件，响应用户操作并展示UI
   * @param options
   */
  enable(e = {}) {
    var t;
    if (this.state.enabled)
      return;
    const i = (t = e.userAction) != null ? t : !0;
    this.updateState({ enabled: !0 }, i), this.checkMsg.pluginDisabled = "", this._enable({ userAction: i });
  }
  /** 禁用插件
   * @param `options` `<Option> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  disable(e = {}) {
    var t;
    if (this.state.enabled === !1)
      return;
    const i = (t = e.userAction) != null ? t : !0;
    this.updateState({ enabled: !1 }, i), this.checkMsg.pluginDisabled = "调用 disable 禁用", this._disable({ userAction: i });
  }
  /** 插件内容整体展示
   * @param `options` `<Partial<BaseOptions>> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  show(e) {
    return u(this, null, function* () {
      if (this.state.visible)
        return Promise.resolve();
      if (this.disposed)
        return Promise.reject(new Error("不能在已销毁的插件上调用 show"));
      const i = a({ userAction: !0 }, e);
      this.updateState({ visible: !0 }, i.userAction), this.checkMsg.pluginHidden = "", this._show(i);
    });
  }
  /** 插件内容整体隐藏
   * @param `options` `<Partial<BaseOptions>> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  hide(e) {
    return u(this, null, function* () {
      if (this.state.visible === !1)
        return;
      const i = a({ userAction: !0 }, e);
      this.updateState({ visible: !1 }, i.userAction), this.checkMsg.pluginDisabled = "调用 hide 隐藏", this._hide(i);
    });
  }
  /** 更改插件 State
   * @param `state` `<Partial<Plugin.State>>` 插件属性 `state` 的子集。
   * @param `options` `<Option> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  setState(e, i = {}) {
    const t = this.state;
    if (P(e, t, { deep: !0 }))
      return;
    const s = i.userAction !== void 0 ? i.userAction : !0;
    if (this.updateState(e, s), e.enabled !== void 0 && t.enabled !== e.enabled && (e.enabled ? this.checkMsg.pluginDisabled = "" : this.checkMsg.pluginDisabled = "调用 setState 禁用", e.enabled ? this._enable({ userAction: s }) : this._disable({ userAction: s })), e.visible !== void 0 && t.visible !== e.visible) {
      const l = { userAction: s, anime: { duration: 500 } };
      e.visible ? this.checkMsg.pluginHidden = "" : this.checkMsg.pluginHidden = "调用 setState 隐藏", e.visible ? this._show(l) : this._hide(l);
    }
  }
  /** 更改插件 Config
   * @param `config` `<Partial<Plugin.Config>>` 插件属性 `config` 的子集。
   * @param `options` `<Option> | <undefined>`
   */
  updateConfig(e, i = {}) {
    var l;
    const t = this.config, s = a(a({}, t), e);
    this._config = s, t.imageURL !== s.imageURL && this.reloadTexture(s.imageURL), t.yOffset !== s.yOffset && this.updateMeshPosition(this.five.getCurrentState().panoIndex), t.yRotate !== s.yRotate && this.updateMeshQuaternion(s.yRotate), t.width !== s.width && (this.mesh.geometry = new h.PlaneBufferGeometry(s.width, s.width)), this.hooks.emit("configChange", { prevConfig: t, config: s, userAction: (l = i.userAction) != null ? l : !0 });
  }
  /** 问什么看不到模型 */
  __whyCantSeeMesh() {
    if (this.disposed)
      return "插件已销毁";
    if (this.checkMsg.pluginDisabled)
      return this.checkMsg.pluginDisabled;
    if (this.checkMsg.pluginHidden)
      return this.checkMsg.pluginHidden;
    if (this.checkMsg.meshHidden)
      return this.checkMsg.meshHidden;
  }
  updateState(e, i) {
    const t = this.state;
    this.state = a(a({}, this.state), e), this.hooks.emit("stateChange", { state: this.state, prevState: t, userAction: i });
  }
  /** 根据各种条件更新 Mesh 的可见性 */
  updateMeshVisible() {
    const { result: e, msg: i } = this.checkMeshVisible();
    this.checkMsg.meshHidden = i, e !== this.mesh.visible && this.onMeshVisibleChange(e);
  }
  /** 根据点位更新 Mesh 坐标 */
  updateMeshPosition(e) {
    const i = this.workUtil.getObserverStandingPosition(e);
    if (!i) {
      console.warn("CurrentPanoImagePlugin: 无法获取到当前点位的 standingPosition");
      return;
    }
    const t = i.clone().setY(i.y + this.config.yOffset);
    t && this.mesh.position.copy(t);
  }
  /** 重新加载贴图，调用时会先清除已有的贴图 */
  reloadTexture(e) {
    return u(this, null, function* () {
      if (this.mesh.material.map = null, e !== "") {
        const i = w(e);
        this.textureLoadingPromise = i;
        const t = yield i;
        t.minFilter = h.LinearFilter, this.textureLoadingPromise === i && (this.onTextureLoaded(t), this.textureLoadingPromise = null);
      }
      this.updateMeshVisible();
    });
  }
  /** north_rad 变化时，需要更新模型的旋转角度 */
  updateMeshQuaternion(e) {
    const i = new h.Quaternion();
    i.multiplyQuaternions(
      // 沿着自身 X 轴旋转 -90 度
      new h.Quaternion().setFromAxisAngle(new h.Vector3(1, 0, 0), -Math.PI / 2),
      // 沿着自身 Z 轴旋转 rad 弧度
      new h.Quaternion().setFromAxisAngle(new h.Vector3(0, 0, 1), e)
    ), this.mesh.quaternion.copy(i);
  }
  _enable(e) {
    this.hooks.emit("enable", { userAction: e.userAction }), this.config.imageURL && !this.mesh.material.map && !this.textureLoadingPromise && this.reloadTexture(this.config.imageURL), this.five.scene.add(this.group), this.five.needsRender = !0, this.five.work && this.onFiveWillLoad(), this.five.getCurrentState().mode === "Panorama" && (this.onFiveModeChange(), this.onFivePanoArrived(this.five.getCurrentState().panoIndex)), this.five.on("willLoad", this.onFiveWillLoad), this.five.on("panoArrived", this.onFivePanoArrived), this.five.on("panoWillArrive", this.onFivePanoWillArrive), this.five.on("modeChange", this.onFiveModeChange);
  }
  _disable(e) {
    this.hooks.emit("disable", { userAction: e.userAction }), this.five.scene.remove(this.group), this.five.needsRender = !0, this.five.off("willLoad", this.onFiveWillLoad), this.five.off("panoArrived", this.onFivePanoArrived), this.five.off("panoWillArrive", this.onFivePanoWillArrive), this.five.off("modeChange", this.onFiveModeChange);
  }
  _show(e) {
    this.hooks.emit("show", e), this.updateMeshVisible(), this.five.needsRender = !0;
  }
  _hide(e) {
    this.hooks.emit("hide", e), this.updateMeshVisible(), this.five.needsRender = !0;
  }
}
export {
  Qe as CurrentPanoImagePluginController
};
