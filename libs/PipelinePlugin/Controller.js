var j = Object.defineProperty;
var v = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty, _ = Object.prototype.propertyIsEnumerable;
var A = (m, o, t) => o in m ? j(m, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : m[o] = t, u = (m, o) => {
  for (var t in o || (o = {}))
    P.call(o, t) && A(m, t, o[t]);
  if (v)
    for (var t of v(o))
      _.call(o, t) && A(m, t, o[t]);
  return m;
};
var d = (m, o, t) => (A(m, typeof o != "symbol" ? o + "" : o, t), t);
var c = (m, o, t) => new Promise((e, i) => {
  var s = (a) => {
    try {
      n(t.next(a));
    } catch (h) {
      i(h);
    }
  }, r = (a) => {
    try {
      n(t.throw(a));
    } catch (h) {
      i(h);
    }
  }, n = (a) => a.done ? e(a.value) : Promise.resolve(a.value).then(s, r);
  n((t = t.apply(m, o)).next());
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
import "../shared-utils/three/blink.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../vendor/earcut/src/earcut.js";
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
import "../shared-utils/url/defaultUrls.js";
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
import "../shared-utils/five/getFiveFromParentChain.js";
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
import "../vendor/animejs/lib/anime.es.js";
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
class ae extends S {
  constructor(t) {
    super(t);
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
      this.disable(), this.five.scene.remove(this.group), this.texturePromiseCache.forEach((t) => t.then((e) => e.dispose())), this.texturePromiseCache.clear();
    });
    d(this, "onWantsFiveTapGesture", (...t) => {
      const [e] = t, i = e.intersectObjects(this.pipeObjects, !1);
      if (i.length === 0 || !this.data)
        return;
      const n = i[0].object.customID, a = this.data.pipes.find(({ id: p }) => p === n), h = this.data.pipelines.find((p) => a && p.pipes.includes(a));
      if (!(!a || !h))
        return this.hooks.emit("tap", {
          intersectObjects: i,
          pipe: a,
          pipeline: h,
          wantsFiveTapGestureParams: t
        }), !1;
    });
    this.state = {
      target: null,
      visible: !0,
      enabled: !0,
      isFlowing: !1,
      speed: g
    }, this.five = t, this.group = new F.Group(), this.group.name = "water-pipe-group", this.five.scene.add(this.group), this.five.once("dispose", this.dispose), this.five.on("wantsTapGesture", this.onWantsFiveTapGesture);
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
  load(t, e, i, s) {
    return c(this, null, function* () {
      const r = this.data;
      this.data = yield this.formatData(t, s), this.removeAllPipes(), this.hooks.emit("dataChange", this.data, r), this.pipeObjects = yield Promise.all(
        this.data.pipes.filter((n) => !!(n != null && n.texture)).map((b) => c(this, [b], function* ({ id: n, texture: a, path: h, radius: p }) {
          const l = yield this.loadPipeTexture(a), f = { id: n, path: h, textureURL: a, texture: l, geometryConfig: { radius: p } };
          return new D(f);
        }))
      ), this.data.pipelines.forEach((n) => {
        n.pipes.reduce((a, h) => {
          const p = this.findPipeObjectWithID(h.id);
          return p == null || p.setInitialDisplacement(a), a + ((p == null ? void 0 : p.pathLength) || 0);
        }, 0);
      }), this.hooks.emit("dataLoaded", this.data), this.state.visible === !1 && this.pipeObjects.forEach((n) => n.setOpacity(0)), this.state.enabled && (this.group.add(...this.pipeObjects), this.five.needsRender = !0), e && this.setState(e, { userAction: i });
    });
  }
  /** 更改插件 State
   * @param `state` `<Partial<Plugin.State>>` 插件属性 `state` 的子集。
   * @param `options` `<Option> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  setState(t, e = {}) {
    const i = this.state;
    if (O(t, i, { deep: !0 }))
      return;
    const s = e.userAction !== void 0 ? e.userAction : !0;
    if (this.updateState(t, s), t.enabled !== void 0 && i.enabled !== t.enabled && (t.enabled ? this._enable({ userAction: s }) : this._disable({ userAction: s })), t.visible !== void 0 && i.visible !== t.visible) {
      const r = { userAction: s, anime: { duration: 500 } };
      t.visible ? this._show(r) : this._hide(r);
    }
    if (t.isFlowing !== void 0 && i.isFlowing !== t.isFlowing && (t.isFlowing ? this._flow() : this._stopFlow()), t.speed !== void 0 && !O(i.speed, this.state.speed, { deep: !0 }) && this._setSpeed(t.speed), t.target !== void 0 && !O(i.target, this.state.target, { deep: !0 })) {
      const r = {
        target: t.target,
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
  enable(t = {}) {
    var i;
    if (this.state.enabled)
      return;
    const e = (i = t.userAction) != null ? i : !0;
    this.updateState({ enabled: !0 }, e), this._enable({ userAction: e });
  }
  /** 禁用插件
   * @param `options` `<Option> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  disable(t = {}) {
    var i;
    if (this.state.enabled === !1)
      return;
    const e = (i = t.userAction) != null ? i : !0;
    this.updateState({ enabled: !1, isFlowing: !1 }, e), this._disable({ userAction: e });
  }
  /** 展示管道模型，注意如果通过 `switchPipelines` 更改过 `visibleIDs`，则只会展示这一部分模型。
   * @param `options` `<Partial<ShowHideOptions>> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   * @param `options.anime` `<AnimeOptions> | <undefined>` 动画配置。
   * @param `options.anime.duration` `<number> | <undefined>` 动画时间，默认是 500ms。
   */
  show() {
    return c(this, arguments, function* (t = {}) {
      if (this.state.visible)
        return;
      const e = u({
        userAction: !0,
        anime: { duration: 500 }
      }, t);
      this.updateState({ visible: !0 }, e.userAction), yield this._show(e);
    });
  }
  /** 插件内容整体隐藏
   * @param `options` `<Partial<ShowHideOptions>> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   * @param `options.anime` `<AnimeOptions> | <undefined>` 动画配置。
   * @param `options.anime.duration` `<number> | <undefined>` 动画时间，默认是 500ms。
   */
  hide() {
    return c(this, arguments, function* (t = {}) {
      if (this.state.visible === !1)
        return;
      const e = u({
        userAction: !0,
        anime: { duration: 500 }
      }, t);
      this.updateState({ visible: !1 }, e.userAction), yield this._hide(e);
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
  switchPipelines(t) {
    return c(this, null, function* () {
      var h, p, b, l, f, w;
      if (!this.data)
        return;
      const e = (h = t == null ? void 0 : t.target) != null ? h : null, i = (p = t == null ? void 0 : t.userAction) != null ? p : !0;
      this.updateState({ target: e }, i);
      const s = { duration: 500 }, r = (l = (b = t == null ? void 0 : t.hideAnime) != null ? b : t == null ? void 0 : t.anime) != null ? l : s, n = (w = (f = t == null ? void 0 : t.showAnime) != null ? f : t == null ? void 0 : t.anime) != null ? w : s, a = {
        target: e,
        showAnime: n,
        hideAnime: r
      };
      this._switchPipelines(a);
    });
  }
  /** 开始流动 */
  flow(t = {}) {
    var i;
    if (this.state.isFlowing)
      return;
    const e = (i = t.userAction) != null ? i : !0;
    this.updateState({ isFlowing: !0 }, e), this._flow();
  }
  /** 停止流动 */
  stopFlow(t = {}) {
    var i;
    if (this.state.isFlowing === !1)
      return;
    const e = (i = t.userAction) != null ? i : !0;
    this.updateState({ isFlowing: !1 }, e), this._stopFlow();
  }
  /** 更改水管流速
   * @param `options` `<SetSpeedOptions> | <undefined>`
   * @param `options.speed` `<Speed> | <undefined>` 参考 `state.speed` 的描述。
   * @param `options.userAction` `<boolean> | <undefined>` 是否是否是用户操作。
   */
  setSpeed(t) {
    var s, r;
    const e = (s = t == null ? void 0 : t.speed) != null ? s : g, i = (r = t.userAction) != null ? r : !0;
    this.updateState({ speed: e }, i), this._setSpeed(e);
  }
  formatData(t, e) {
    return c(this, null, function* () {
      return y(t, e);
    });
  }
  _enable(t) {
    this.hooks.emit("enable", { userAction: t.userAction }), this.five.scene.add(this.group), this.five.needsRender = !0, this.five.on("wantsTapGesture", this.onWantsFiveTapGesture);
  }
  _disable(t) {
    this.hooks.emit("disable", { userAction: t.userAction }), this.disposeAnime(), this.five.scene.remove(this.group), this.five.needsRender = !0, this.five.off("wantsTapGesture", this.onWantsFiveTapGesture);
  }
  _show(t) {
    return c(this, null, function* () {
      var s;
      this.hooks.emit("show", { userAction: t.userAction });
      const e = (s = t == null ? void 0 : t.anime) != null ? s : { duration: 500 }, i = this.findPipeObjectWithTarget(this.state.target);
      yield Promise.all(i.map((r) => r == null ? void 0 : r.show(e))), this.five.needsRender = !0;
    });
  }
  _hide(t) {
    return c(this, null, function* () {
      var i;
      this.hooks.emit("hide", { userAction: t.userAction });
      const e = (i = t == null ? void 0 : t.anime) != null ? i : { duration: 500 };
      yield Promise.all(this.pipeObjects.map((s) => s.hide(e))), this.five.needsRender = !0;
    });
  }
  _switchPipelines(t) {
    return c(this, null, function* () {
      if (!this.data)
        return;
      const e = this.findPipeObjectWithTarget(t.target), i = t.hideAnime;
      yield Promise.all(this.pipeObjects.map((r) => r.hide(i)));
      const s = t.showAnime;
      yield Promise.all(e.map((r) => r.show(s)));
    });
  }
  _flow() {
    this.pipeObjects.forEach((t) => t.flow());
  }
  _stopFlow() {
    this.pipeObjects.forEach((t) => t.stopFlow());
  }
  _setSpeed(t) {
    this.pipeObjects.forEach((e) => e.setSpeed(t));
  }
  updateState(t, e) {
    const i = this.state;
    this.state = u(u({}, this.state), t), this.hooks.emit("stateChange", { state: this.state, prevState: i, userAction: e });
  }
  /** 加载管道贴图，如果再加载中，复用之前的加载 Promise */
  loadPipeTexture(t) {
    return c(this, null, function* () {
      const e = this.texturePromiseCache.get(t);
      if (e)
        return e;
      const i = x(t);
      return this.texturePromiseCache.set(t, i), i;
    });
  }
  /** 销毁所有动画 */
  disposeAnime() {
    this.pipeObjects.forEach((t) => t.disposeAnime()), this.five.needsRender = !0;
  }
  /** 移除所有管道模型 */
  removeAllPipes() {
    this.disposeAnime(), this.group.remove(...this.pipeObjects), this.pipeObjects.forEach((t) => t.dispose()), this.pipeObjects = [], this.five.needsRender = !0;
  }
  /** 根据 ID 查找管道模型 */
  findPipeObjectWithID(t) {
    return this.pipeObjects.find(({ customID: e }) => e === t);
  }
  /** 根据 target 查找管道模型 */
  findPipeObjectWithTarget(t) {
    return t ? C({ data: this.data, target: t }).map(({ id: i }) => this.findPipeObjectWithID(i)).filter(T) : this.pipeObjects;
  }
}
export {
  ae as Controller
};
