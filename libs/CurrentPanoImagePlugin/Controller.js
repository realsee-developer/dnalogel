var g = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var c = (r, o, e) => o in r ? g(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, l = (r, o) => {
  for (var e in o || (o = {}))
    v.call(o, e) && c(r, e, o[e]);
  if (m)
    for (var e of m(o))
      b.call(o, e) && c(r, e, o[e]);
  return r;
};
var n = (r, o, e) => (c(r, typeof o != "symbol" ? o + "" : o, e), e);
var f = (r, o, e) => new Promise((i, t) => {
  var s = (d) => {
    try {
      u(e.next(d));
    } catch (p) {
      t(p);
    }
  }, a = (d) => {
    try {
      u(e.throw(d));
    } catch (p) {
      t(p);
    }
  }, u = (d) => d.done ? i(d.value) : Promise.resolve(d.value).then(s, a);
  u((e = e.apply(r, o)).next());
});
import * as h from "three";
import { Controller as M } from "../base/BasePlugin.js";
import { tweenProgress as A } from "../shared-utils/animationFrame/BetterTween.js";
import "hammerjs";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { equal as w } from "../shared-utils/equal.js";
import { loadTexture as P } from "../shared-utils/three/loadTexture.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/animationFrame/index.js";
import "../shared-utils/positionToVector3.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../shared-utils/util.js";
import "../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../CSS3DRenderPlugin/utils/even.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../shared-utils/isTruelyObject.js";
class ie extends M {
  constructor(e, i) {
    super(e);
    // ==================== public properties ====================
    /** 插件当前状态 */
    n(this, "state");
    /** 查询问题使用的调试对象 */
    n(this, "checkMsg", {
      /** mesh 隐藏的原因 */
      meshHidden: "",
      /** 插件 enabled 校验信息 */
      pluginDisabled: "",
      /** 插件 visible 校验信息 */
      pluginHidden: ""
    });
    // ==================== private properties ====================
    n(this, "group", new h.Group());
    n(this, "mesh");
    n(this, "textureLoadingPromise");
    n(this, "opacityAnimeTween");
    /** 是否正在走点动画中 */
    n(this, "isInPanoMoveAnime", !1);
    /** 上一次走点的全景图索引 */
    n(this, "lastArrivedPanoIndex", -1);
    /** config 的原始值 */
    n(this, "_config");
    /** disposed 的原始值 */
    n(this, "_disposed", !1);
    /**
     * 销毁插件
     * @todo 销毁贴图时，最好还是直接销毁贴图吧，this.mesh?.material.map 这种都是很深层的引用了。THREE 的建议我看也是自己去管理和销毁公共贴图。
     */
    n(this, "dispose", () => {
      this.five.scene.remove(this.group), this.group.remove(...this.group.children), this.five.off("dispose", this.dispose), this.five.off("panoArrived", this.onFivePanoArrived), this.five.off("panoWillArrive", this.onFivePanoWillArrive);
    });
    n(this, "checkMeshVisible", () => this.state.visible ? this.config.imageURL === "" ? { result: !1, msg: "图片不存在" } : this.mesh.material.map ? this.five.work ? this.five.getCurrentState().mode !== "Panorama" ? { result: !1, msg: "非全景模式" } : this.isInPanoMoveAnime ? { result: !1, msg: "处于走点动画中" } : { result: !0, msg: "" } : { result: !1, msg: "Five 数据未加载" } : { result: !1, msg: "指南针贴图未加载" } : { result: !1, msg: "插件隐藏" });
    /** 贴图加载完成的回调 */
    n(this, "onTextureLoaded", (e) => {
      this.mesh.material.map = e, this.mesh.material.needsUpdate = !0, this.updateMeshVisible();
    });
    /** Five load Work 后 */
    n(this, "onFiveWillLoad", () => {
      this.lastArrivedPanoIndex = -1, this.updateMeshVisible();
    });
    /** 走点前 */
    n(this, "onFivePanoWillArrive", (e) => {
      var i;
      e !== this.five.getCurrentState().panoIndex && (this.isInPanoMoveAnime = !0, (i = this.opacityAnimeTween) == null || i.dispose(), this.updateMeshVisible());
    });
    /** 走点后 */
    // eslint-disable-next-line @typescript-eslint/member-ordering
    n(this, "onFivePanoArrived", (e) => {
      e !== this.lastArrivedPanoIndex && (this.lastArrivedPanoIndex = e, this.isInPanoMoveAnime = !1, this.updateMeshPosition(e), this.updateMeshVisible(), this.five.needsRender = !0);
    });
    n(this, "onMeshVisibleChange", (e) => {
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
    n(this, "onFiveModeChange", () => {
      this.updateMeshVisible();
    });
    this.five = e;
    const t = {
      enabled: !0,
      visible: !0
    };
    this.state = Object.assign(t, i == null ? void 0 : i.initialState);
    const s = l({
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
    return l({}, this._config);
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
    return f(this, null, function* () {
      if (this.state.visible)
        return Promise.resolve();
      if (this.disposed)
        return Promise.reject(new Error("不能在已销毁的插件上调用 show"));
      const i = l({ userAction: !0 }, e);
      this.updateState({ visible: !0 }, i.userAction), this.checkMsg.pluginHidden = "", this._show(i);
    });
  }
  /** 插件内容整体隐藏
   * @param `options` `<Partial<BaseOptions>> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  hide(e) {
    return f(this, null, function* () {
      if (this.state.visible === !1)
        return;
      const i = l({ userAction: !0 }, e);
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
    if (w(e, t, { deep: !0 }))
      return;
    const s = i.userAction !== void 0 ? i.userAction : !0;
    if (this.updateState(e, s), e.enabled !== void 0 && t.enabled !== e.enabled && (e.enabled ? this.checkMsg.pluginDisabled = "" : this.checkMsg.pluginDisabled = "调用 setState 禁用", e.enabled ? this._enable({ userAction: s }) : this._disable({ userAction: s })), e.visible !== void 0 && t.visible !== e.visible) {
      const a = { userAction: s, anime: { duration: 500 } };
      e.visible ? this.checkMsg.pluginHidden = "" : this.checkMsg.pluginHidden = "调用 setState 隐藏", e.visible ? this._show(a) : this._hide(a);
    }
  }
  /** 更改插件 Config
   * @param `config` `<Partial<Plugin.Config>>` 插件属性 `config` 的子集。
   * @param `options` `<Option> | <undefined>`
   */
  updateConfig(e, i = {}) {
    var a;
    const t = this.config, s = l(l({}, t), e);
    this._config = s, t.imageURL !== s.imageURL && this.reloadTexture(s.imageURL), t.yOffset !== s.yOffset && this.updateMeshPosition(this.five.getCurrentState().panoIndex), t.yRotate !== s.yRotate && this.updateMeshQuaternion(s.yRotate), t.width !== s.width && (this.mesh.geometry = new h.PlaneBufferGeometry(s.width, s.width)), this.hooks.emit("configChange", { prevConfig: t, config: s, userAction: (a = i.userAction) != null ? a : !0 });
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
    this.state = l(l({}, this.state), e), this.hooks.emit("stateChange", { state: this.state, prevState: t, userAction: i });
  }
  /** 根据各种条件更新 Mesh 的可见性 */
  updateMeshVisible() {
    const { result: e, msg: i } = this.checkMeshVisible();
    this.checkMsg.meshHidden = i, e !== this.mesh.visible && this.onMeshVisibleChange(e);
  }
  /** 根据点位更新 Mesh 坐标 */
  updateMeshPosition(e) {
    var s, a, u;
    const i = (u = (a = (s = this.five.work) == null ? void 0 : s.observers) == null ? void 0 : a[e]) == null ? void 0 : u.standingPosition, t = i == null ? void 0 : i.clone().setY(i.y + this.config.yOffset);
    t && this.mesh.position.copy(t);
  }
  /** 重新加载贴图，调用时会先清除已有的贴图 */
  reloadTexture(e) {
    return f(this, null, function* () {
      if (this.mesh.material.map = null, e !== "") {
        const i = P(e);
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
  ie as CurrentPanoImagePluginController
};
