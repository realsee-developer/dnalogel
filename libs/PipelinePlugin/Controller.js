var j = Object.defineProperty;
var v = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty, _ = Object.prototype.propertyIsEnumerable;
var A = (m, o, e) => o in m ? j(m, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : m[o] = e, u = (m, o) => {
  for (var e in o || (o = {}))
    P.call(o, e) && A(m, e, o[e]);
  if (v)
    for (var e of v(o))
      _.call(o, e) && A(m, e, o[e]);
  return m;
};
var d = (m, o, e) => (A(m, typeof o != "symbol" ? o + "" : o, e), e);
var c = (m, o, e) => new Promise((t, i) => {
  var s = (a) => {
    try {
      n(e.next(a));
    } catch (h) {
      i(h);
    }
  }, r = (a) => {
    try {
      n(e.throw(a));
    } catch (h) {
      i(h);
    }
  }, n = (a) => a.done ? t(a.value) : Promise.resolve(a.value).then(s, r);
  n((e = e.apply(m, o)).next());
});
import * as F from "three";
import { Controller as S } from "../base/BasePluginWithData.js";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as T } from "../shared-utils/isNil.js";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { equal as O } from "../shared-utils/equal.js";
import "../shared-utils/five/FivePuppet.js";
import { loadTexture as x } from "../shared-utils/three/loadTexture.js";
import { format as y, getPipesFromLibrary as C } from "./utils/formatData.js";
import { ObjectFlowPipe as D } from "./utils/Objects/FlowPipe.js";
import "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/url/absoluteUrl.js";
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
import "../shared-utils/animationFrame/index.js";
import "./utils/Objects/Pipe.js";
import "../shared-utils/animationFrame/BetterTween.js";
import "../shared-utils/three/Extras/Curves/BezierCurve3.js";
import "../shared-utils/three/Extras/Core/Interpolations.js";
import "../shared-utils/three/Extras/Core/Interpolations2.js";
const g = { flowSpeed: 0.6, rotateSpeed: 0 };
class it extends S {
  constructor(e) {
    super(e);
    // ==================== public properties ====================
    d(this, "data");
    /** 插件状态
     * @property `visible` `<boolean>` 是否可见
     * @property `enabled` `<boolean>` 是否启用
     * @property `visiblePipeIDs` `<string[]>` 可见的管道 ID
     * @property `speed` `<Speed>` 水流速度
     * @property `speed.flowSpeed` `<number>` 横向流动速度，默认是 0.6 m/s
     * @property `speed.rotateSpeed` `<number>` 纵向旋转速度：默认是 0 deg/s
     */
    d(this, "state");
    /** 当前插件所有新增 THREE 相关副作用都在 group 下 */
    d(this, "group");
    /** 用于展示水流的水管 */
    d(this, "pipeObjects", []);
    // ==================== private properties ====================
    /** 水管贴图缓存 */
    d(this, "texturePromiseCache", /* @__PURE__ */ new Map());
    /** 销毁插件，移除所有副作用，销毁后将不响应任何 API */
    d(this, "dispose", () => {
      this.disable(), this.five.scene.remove(this.group), this.texturePromiseCache.forEach((e) => e.then((t) => t.dispose())), this.texturePromiseCache.clear();
    });
    d(this, "onWantsFiveTapGesture", (...e) => {
      const [t] = e, i = t.intersectObjects(this.pipeObjects, !1);
      if (i.length === 0 || !this.data)
        return;
      const n = i[0].object.customID, a = this.data.pipes.find(({ id: p }) => p === n), h = this.data.pipelines.find((p) => a && p.pipes.includes(a));
      if (!(!a || !h))
        return this.hooks.emit("tap", {
          intersectObjects: i,
          pipe: a,
          pipeline: h,
          wantsFiveTapGestureParams: e
        }), !1;
    });
    this.state = {
      target: null,
      visible: !0,
      enabled: !0,
      isFlowing: !1,
      speed: g
    }, this.five = e, this.group = new F.Group(), this.group.name = "water-pipe-group", this.five.scene.add(this.group), this.five.once("dispose", this.dispose), this.five.on("wantsTapGesture", this.onWantsFiveTapGesture);
  }
  /** 加载管道数据，重复调用会使用新数据覆盖旧数据
   * @param `data` `<Plugin.ServerData>` Open API 接口返回的数据。
   * @param `initialState` `<Plugin.State> | <undefined>` 数据加载后，要应用的 state，默认是 undefined。
   * @param `userAction` `<boolean> | <undefined>` 是否是用户操作，默认是 true。
   * @param `options` `<Plugin.LoadOptions> | <undefined>` 数据加载配置项。
   * @param `options.getPipeRadius` `<(pipe: ServerData.LinesDataset) => number> | <undefined>` 允许用户通过函数自定义管道半径。
   * @param `options.getPipeUrl` `<(water: Water) => string> | <undefined>` 允许用户通过函数自定义管道贴图，
   * 函数返回的 string 就是当前 water 对应的贴图地址。
   */
  // eslint-disable-next-line max-params
  load(e, t, i, s) {
    return c(this, null, function* () {
      const r = this.data;
      this.data = yield this.formatData(e, s), this.removeAllPipes(), this.hooks.emit("dataChange", this.data, r), this.pipeObjects = yield Promise.all(
        this.data.pipes.filter((n) => !!(n != null && n.texture)).map((b) => c(this, [b], function* ({ id: n, texture: a, path: h, radius: p }) {
          const l = yield this.loadPipeTexture(a), f = { id: n, path: h, textureURL: a, texture: l, geometryConfig: { radius: p } };
          return new D(f);
        }))
      ), this.data.pipelines.forEach((n) => {
        n.pipes.reduce((a, h) => {
          const p = this.findPipeObjectWithID(h.id);
          return p == null || p.setInitialDisplacement(a), a + ((p == null ? void 0 : p.pathLength) || 0);
        }, 0);
      }), this.hooks.emit("dataLoaded", this.data), this.state.visible === !1 && this.pipeObjects.forEach((n) => n.setOpacity(0)), this.state.enabled && (this.group.add(...this.pipeObjects), this.five.needsRender = !0), t && this.setState(t, { userAction: i });
    });
  }
  /** 更改插件 State
   * @param `state` `<Partial<Plugin.State>>` 插件属性 `state` 的子集。
   * @param `options` `<Option> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  setState(e, t = {}) {
    const i = this.state;
    if (O(e, i, { deep: !0 }))
      return;
    const s = t.userAction !== void 0 ? t.userAction : !0;
    if (this.updateState(e, s), e.enabled !== void 0 && i.enabled !== e.enabled && (e.enabled ? this._enable({ userAction: s }) : this._disable({ userAction: s })), e.visible !== void 0 && i.visible !== e.visible) {
      const r = { userAction: s, anime: { duration: 500 } };
      e.visible ? this._show(r) : this._hide(r);
    }
    if (e.isFlowing !== void 0 && i.isFlowing !== e.isFlowing && (e.isFlowing ? this._flow() : this._stopFlow()), e.speed !== void 0 && !O(i.speed, this.state.speed, { deep: !0 }) && this._setSpeed(e.speed), e.target !== void 0 && !O(i.target, this.state.target, { deep: !0 })) {
      const r = {
        target: e.target,
        showAnime: { duration: 500 },
        hideAnime: { duration: 500 }
      };
      this._switchPipelines(r);
    }
  }
  /** 启用插件
   * @param `options` `<Option> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  enable(e = {}) {
    var i;
    if (this.state.enabled)
      return;
    const t = (i = e.userAction) != null ? i : !0;
    this.updateState({ enabled: !0 }, t), this._enable({ userAction: t });
  }
  /** 禁用插件
   * @param `options` `<Option> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  disable(e = {}) {
    var i;
    if (this.state.enabled === !1)
      return;
    const t = (i = e.userAction) != null ? i : !0;
    this.updateState({ enabled: !1, isFlowing: !1 }, t), this._disable({ userAction: t });
  }
  /** 展示管道模型，注意如果通过 `switchPipelines` 更改过 `visibleIDs`，则只会展示这一部分模型。
   * @param `options` `<Partial<ShowHideOptions>> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   * @param `options.anime` `<AnimeOptions> | <undefined>` 动画配置。
   * @param `options.anime.duration` `<number> | <undefined>` 动画时间，默认是 500ms。
   */
  show() {
    return c(this, arguments, function* (e = {}) {
      if (this.state.visible)
        return;
      const t = u({
        userAction: !0,
        anime: { duration: 500 }
      }, e);
      this.updateState({ visible: !0 }, t.userAction), yield this._show(t);
    });
  }
  /** 插件内容整体隐藏
   * @param `options` `<Partial<ShowHideOptions>> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   * @param `options.anime` `<AnimeOptions> | <undefined>` 动画配置。
   * @param `options.anime.duration` `<number> | <undefined>` 动画时间，默认是 500ms。
   */
  hide() {
    return c(this, arguments, function* (e = {}) {
      if (this.state.visible === !1)
        return;
      const t = u({
        userAction: !0,
        anime: { duration: 500 }
      }, e);
      this.updateState({ visible: !1 }, t.userAction), yield this._hide(t);
    });
  }
  /** 切换管路
   * @param `options` `Partial<ShowPipelinesOptions> | <undefined>`
   * @param `options.target` `<{ startLibraryID: number; endLibraryID: number }[]> | <undefined>`
   * 目标管路，存在时，展示目标管路包含的管道，同时隐藏其他管道。不存在则展示所有管道。
   * startLibraryID 和 endLibraryID 是起始和结束的设备 ID。
   * @param `options.showAnime` `<AnimeOptions> | <undefined>` 展示的动画配置。
   * @param `options.hideAnime` `<AnimeOptions> | <undefined>` 隐藏的动画配置。
   * @param `options.anime` `<AnimeOptions> | <undefined>` 兜底的动画配置。
   * @param `options.userAction` `<boolean> | <undefined>` 是否是否是用户操作。
   * */
  switchPipelines(e) {
    return c(this, null, function* () {
      var h, p, b, l, f, w;
      if (!this.data)
        return;
      const t = (h = e == null ? void 0 : e.target) != null ? h : null, i = (p = e == null ? void 0 : e.userAction) != null ? p : !0;
      this.updateState({ target: t }, i);
      const s = { duration: 500 }, r = (l = (b = e == null ? void 0 : e.hideAnime) != null ? b : e == null ? void 0 : e.anime) != null ? l : s, n = (w = (f = e == null ? void 0 : e.showAnime) != null ? f : e == null ? void 0 : e.anime) != null ? w : s, a = {
        target: t,
        showAnime: n,
        hideAnime: r
      };
      this._switchPipelines(a);
    });
  }
  /** 开始流动 */
  flow(e = {}) {
    var i;
    if (this.state.isFlowing)
      return;
    const t = (i = e.userAction) != null ? i : !0;
    this.updateState({ isFlowing: !0 }, t), this._flow();
  }
  /** 停止流动 */
  stopFlow(e = {}) {
    var i;
    if (this.state.isFlowing === !1)
      return;
    const t = (i = e.userAction) != null ? i : !0;
    this.updateState({ isFlowing: !1 }, t), this._stopFlow();
  }
  /** 更改水管流速
   * @param `options` `<SetSpeedOptions> | <undefined>`
   * @param `options.speed` `<Speed> | <undefined>` 参考 `state.speed` 的描述。
   * @param `options.userAction` `<boolean> | <undefined>` 是否是否是用户操作。
   */
  setSpeed(e) {
    var s, r;
    const t = (s = e == null ? void 0 : e.speed) != null ? s : g, i = (r = e.userAction) != null ? r : !0;
    this.updateState({ speed: t }, i), this._setSpeed(t);
  }
  formatData(e, t) {
    return c(this, null, function* () {
      return y(e, t);
    });
  }
  _enable(e) {
    this.hooks.emit("enable", { userAction: e.userAction }), this.five.scene.add(this.group), this.five.needsRender = !0, this.five.on("wantsTapGesture", this.onWantsFiveTapGesture);
  }
  _disable(e) {
    this.hooks.emit("disable", { userAction: e.userAction }), this.disposeAnime(), this.five.scene.remove(this.group), this.five.needsRender = !0, this.five.off("wantsTapGesture", this.onWantsFiveTapGesture);
  }
  _show(e) {
    return c(this, null, function* () {
      var s;
      this.hooks.emit("show", { userAction: e.userAction });
      const t = (s = e == null ? void 0 : e.anime) != null ? s : { duration: 500 }, i = this.findPipeObjectWithTarget(this.state.target);
      yield Promise.all(i.map((r) => r == null ? void 0 : r.show(t))), this.five.needsRender = !0;
    });
  }
  _hide(e) {
    return c(this, null, function* () {
      var i;
      this.hooks.emit("hide", { userAction: e.userAction });
      const t = (i = e == null ? void 0 : e.anime) != null ? i : { duration: 500 };
      yield Promise.all(this.pipeObjects.map((s) => s.hide(t))), this.five.needsRender = !0;
    });
  }
  _switchPipelines(e) {
    return c(this, null, function* () {
      if (!this.data)
        return;
      const t = this.findPipeObjectWithTarget(e.target), i = e.hideAnime;
      yield Promise.all(this.pipeObjects.map((r) => r.hide(i)));
      const s = e.showAnime;
      yield Promise.all(t.map((r) => r.show(s)));
    });
  }
  _flow() {
    this.pipeObjects.forEach((e) => e.flow());
  }
  _stopFlow() {
    this.pipeObjects.forEach((e) => e.stopFlow());
  }
  _setSpeed(e) {
    this.pipeObjects.forEach((t) => t.setSpeed(e));
  }
  updateState(e, t) {
    const i = this.state;
    this.state = u(u({}, this.state), e), this.hooks.emit("stateChange", { state: this.state, prevState: i, userAction: t });
  }
  /** 加载管道贴图，如果再加载中，复用之前的加载 Promise */
  loadPipeTexture(e) {
    return c(this, null, function* () {
      const t = this.texturePromiseCache.get(e);
      if (t)
        return t;
      const i = x(e);
      return this.texturePromiseCache.set(e, i), i;
    });
  }
  /** 销毁所有动画 */
  disposeAnime() {
    this.pipeObjects.forEach((e) => e.disposeAnime()), this.five.needsRender = !0;
  }
  /** 移除所有管道模型 */
  removeAllPipes() {
    this.disposeAnime(), this.group.remove(...this.pipeObjects), this.pipeObjects.forEach((e) => e.dispose()), this.pipeObjects = [], this.five.needsRender = !0;
  }
  /** 根据 ID 查找管道模型 */
  findPipeObjectWithID(e) {
    return this.pipeObjects.find(({ customID: t }) => t === e);
  }
  /** 根据 target 查找管道模型 */
  findPipeObjectWithTarget(e) {
    return e ? C({ data: this.data, target: e }).map(({ id: i }) => this.findPipeObjectWithID(i)).filter(T) : this.pipeObjects;
  }
}
export {
  it as Controller
};
