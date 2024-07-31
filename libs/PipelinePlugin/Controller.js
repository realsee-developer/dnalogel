var j = Object.defineProperty;
var v = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty, _ = Object.prototype.propertyIsEnumerable;
var A = (c, n, e) => n in c ? j(c, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[n] = e, m = (c, n) => {
  for (var e in n || (n = {}))
    P.call(n, e) && A(c, e, n[e]);
  if (v)
    for (var e of v(n))
      _.call(n, e) && A(c, e, n[e]);
  return c;
};
var u = (c, n, e) => (A(c, typeof n != "symbol" ? n + "" : n, e), e);
var d = (c, n, e) => new Promise((t, i) => {
  var s = (a) => {
    try {
      o(e.next(a));
    } catch (p) {
      i(p);
    }
  }, r = (a) => {
    try {
      o(e.throw(a));
    } catch (p) {
      i(p);
    }
  }, o = (a) => a.done ? t(a.value) : Promise.resolve(a.value).then(s, r);
  o((e = e.apply(c, n)).next());
});
import * as F from "three";
import { Controller as S } from "../base/BasePluginWithData.js";
import { equal as O } from "../shared-utils/equal.js";
import { notNil as T } from "../shared-utils/isNil.js";
import { loadTexture as x } from "../shared-utils/three/loadTexture.js";
import { format as y, getPipesFromLibrary as C } from "./utils/formatData.js";
import { ObjectFlowPipe as D } from "./utils/Objects/FlowPipe.js";
import "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
import "hammerjs";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
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
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/isTruelyObject.js";
import "../shared-utils/animationFrame/index.js";
import "./utils/Objects/Pipe.js";
import "../shared-utils/animationFrame/BetterTween.js";
import "../shared-utils/three/Extras/Curves/BezierCurve3.js";
import "../shared-utils/three/Extras/Core/Interpolations.js";
import "../shared-utils/three/Extras/Core/Interpolations2.js";
const g = { flowSpeed: 0.6, rotateSpeed: 0 };
class Ae extends S {
  constructor(e) {
    super(e);
    // ==================== public properties ====================
    u(this, "data");
    /** 插件状态
     * @property `visible` `<boolean>` 是否可见
     * @property `enabled` `<boolean>` 是否启用
     * @property `visiblePipeIDs` `<string[]>` 可见的管道 ID
     * @property `speed` `<Speed>` 水流速度
     * @property `speed.flowSpeed` `<number>` 横向流动速度，默认是 0.6 m/s
     * @property `speed.rotateSpeed` `<number>` 纵向旋转速度：默认是 0 deg/s
     */
    u(this, "state");
    /** 当前插件所有新增 THREE 相关副作用都在 group 下 */
    u(this, "group");
    /** 用于展示水流的水管 */
    u(this, "pipeObjects", []);
    // ==================== private properties ====================
    /** 水管贴图缓存 */
    u(this, "texturePromiseCache", /* @__PURE__ */ new Map());
    /** 销毁插件，移除所有副作用，销毁后将不响应任何 API */
    u(this, "dispose", () => {
      this.disable(), this.five.scene.remove(this.group), this.texturePromiseCache.forEach((e) => e.then((t) => t.dispose())), this.texturePromiseCache.clear();
    });
    u(this, "onWantsFiveTapGesture", (...e) => {
      const [t] = e, i = t.intersectObjects(this.pipeObjects, !1);
      if (i.length === 0 || !this.data)
        return;
      const o = i[0].object.customID, a = this.data.pipes.find(({ id: h }) => h === o), p = this.data.pipelines.find((h) => a && h.pipes.includes(a));
      if (!(!a || !p))
        return this.hooks.emit("tap", {
          intersectObjects: i,
          pipe: a,
          pipeline: p,
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
    return d(this, null, function* () {
      const r = this.data;
      this.data = yield this.formatData(e, s), this.removeAllPipes(), this.hooks.emit("dataChange", this.data, r), this.pipeObjects = yield Promise.all(
        this.data.pipes.filter((o) => !!(o != null && o.texture)).map((b) => d(this, [b], function* ({ id: o, texture: a, path: p, radius: h }) {
          const l = yield this.loadPipeTexture(a), f = { id: o, path: p, textureURL: a, texture: l, geometryConfig: { radius: h } };
          return new D(f);
        }))
      ), this.data.pipelines.forEach((o) => {
        o.pipes.reduce((a, p) => {
          const h = this.findPipeObjectWithID(p.id);
          return h == null || h.setInitialDisplacement(a), a + ((h == null ? void 0 : h.pathLength) || 0);
        }, 0);
      }), this.hooks.emit("dataLoaded", this.data), this.state.visible === !1 && this.pipeObjects.forEach((o) => o.setOpacity(0)), this.state.enabled && (this.group.add(...this.pipeObjects), this.five.needsRender = !0), t && this.setState(t, { userAction: i });
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
    return d(this, arguments, function* (e = {}) {
      if (this.state.visible)
        return;
      const t = m({
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
    return d(this, arguments, function* (e = {}) {
      if (this.state.visible === !1)
        return;
      const t = m({
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
    return d(this, null, function* () {
      var p, h, b, l, f, w;
      if (!this.data)
        return;
      const t = (p = e == null ? void 0 : e.target) != null ? p : null, i = (h = e == null ? void 0 : e.userAction) != null ? h : !0;
      this.updateState({ target: t }, i);
      const s = { duration: 500 }, r = (l = (b = e == null ? void 0 : e.hideAnime) != null ? b : e == null ? void 0 : e.anime) != null ? l : s, o = (w = (f = e == null ? void 0 : e.showAnime) != null ? f : e == null ? void 0 : e.anime) != null ? w : s, a = {
        target: t,
        showAnime: o,
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
    return d(this, null, function* () {
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
    return d(this, null, function* () {
      var s;
      this.hooks.emit("show", { userAction: e.userAction });
      const t = (s = e == null ? void 0 : e.anime) != null ? s : { duration: 500 }, i = this.findPipeObjectWithTarget(this.state.target);
      yield Promise.all(i.map((r) => r == null ? void 0 : r.show(t))), this.five.needsRender = !0;
    });
  }
  _hide(e) {
    return d(this, null, function* () {
      var i;
      this.hooks.emit("hide", { userAction: e.userAction });
      const t = (i = e == null ? void 0 : e.anime) != null ? i : { duration: 500 };
      yield Promise.all(this.pipeObjects.map((s) => s.hide(t))), this.five.needsRender = !0;
    });
  }
  _switchPipelines(e) {
    return d(this, null, function* () {
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
    this.state = m(m({}, this.state), e), this.hooks.emit("stateChange", { state: this.state, prevState: i, userAction: t });
  }
  /** 加载管道贴图，如果再加载中，复用之前的加载 Promise */
  loadPipeTexture(e) {
    return d(this, null, function* () {
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
  Ae as Controller
};
