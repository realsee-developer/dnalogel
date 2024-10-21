var M = Object.defineProperty, C = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, _ = Object.prototype.propertyIsEnumerable;
var m = (h, o, t) => o in h ? M(h, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[o] = t, d = (h, o) => {
  for (var t in o || (o = {}))
    A.call(o, t) && m(h, t, o[t]);
  if (f)
    for (var t of f(o))
      _.call(o, t) && m(h, t, o[t]);
  return h;
}, p = (h, o) => C(h, S(o));
var r = (h, o, t) => (m(h, typeof o != "symbol" ? o + "" : o, t), t);
var u = (h, o, t) => new Promise((i, e) => {
  var s = (n) => {
    try {
      c(t.next(n));
    } catch (l) {
      e(l);
    }
  }, a = (n) => {
    try {
      c(t.throw(n));
    } catch (l) {
      e(l);
    }
  }, c = (n) => n.done ? i(n.value) : Promise.resolve(n.value).then(s, a);
  c((t = t.apply(h, o)).next());
});
import * as g from "three";
import { Controller as k } from "../base/BasePluginWithData.js";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../shared-utils/tag.js";
import "../shared-utils/three/core/Sphere.js";
import "animejs";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { equal as I } from "../shared-utils/equal.js";
import { AreaMakerItem as D } from "./utils/Item.js";
import "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/url/absoluteUrl.js";
import "../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../vendor/three/build/three.module.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/isTruelyObject.js";
import "../shared-utils/three/core/Object3D.js";
import "../shared-utils/three/core/LineSegments.js";
import "../shared-utils/animationFrame/BetterTween.js";
import "../shared-utils/animationFrame/index.js";
import "../components/AreaLabel/LabelItem.js";
import "../vendor/svelte/internal/index.js";
import "../components/AreaLabel/Assets/roomLabelBg.js";
import "../shared-utils/math/planimetry.js";
class ht extends k {
  /** AreaMakerPlugin
   * @param `five` `<Five>` Five 实例
   * @param `params` `<PluginType.Params> | <undefined>` 插件初始化参数
   * @param `params.initialState` `<PluginType.State> | <undefined>` 插件初始化后，使用的状态
   */
  constructor(t, i) {
    super(t);
    // ==================== public properties ====================
    /** 插件当前状态 */
    r(this, "state");
    /** 标注模型 { id: item } 的映射表 */
    r(this, "itemMap");
    /** 自定义 DOM */
    r(this, "itemRenderer");
    /** 标注模型容器 */
    r(this, "modelGroup");
    /** 当前使用的数据 */
    r(this, "data");
    /** tag 容器 */
    r(this, "tagDomContainer");
    /** 查询问题使用的调试对象 */
    r(this, "checkMsg", {
      childrenMountedState: ""
    });
    // ==================== private properties ====================
    /** 是否在 Five Change Mode 动画中 */
    r(this, "isInFiveChangeModeAnime", !1);
    /** 子组件是否挂载 */
    r(this, "childrenMountedState", !1);
    /** config 的原始值 */
    r(this, "_config");
    /** disposed 的原始值 */
    r(this, "_disposed", !1);
    /** 销毁插件，移除所有副作用，销毁后将不响应任何 API */
    r(this, "dispose", () => {
      this.five.scene.remove(this.modelGroup);
    });
    r(this, "onFiveInitAnimationWillStart", () => {
      this.isInFiveChangeModeAnime = !0, this.updateChildrenMountedState();
    });
    r(this, "onFiveInitAnimationEnded", () => {
      this.isInFiveChangeModeAnime = !1, this.updateChildrenMountedState();
    });
    r(this, "onFiveCameraUpdate", () => {
      const t = this.five.camera;
      [...this.itemMap.values()].sort((e, s) => {
        const a = e.tagPosition.distanceTo(t.position);
        return s.tagPosition.distanceTo(t.position) - a;
      }).forEach((e, s) => {
        var a;
        (a = this.getMaskItemByID(e.id)) == null || a.setTagZIndex(s * 10);
      });
    });
    r(this, "onFiveModeChange", () => {
      this.updateChildrenMountedState();
    });
    r(this, "onMakerTagClick", (t) => {
      this.hooks.emit("wantsTap", { target: t.target, intersectObjects: [] });
    });
    r(this, "onWantsFiveTapGesture", (t) => {
      const i = Array.from(this.itemMap.values()).filter((n) => n.mounted && n.visible).map((n) => ({
        makerItem: n,
        intersects: n.modelGroup.getRaycastIntersects(t)
      })).filter(({ intersects: n }) => n.length > 0);
      if (i.length === 0)
        return;
      const e = i.reduce((n, l) => {
        const v = n.intersects[0].distance, b = l.intersects[0].distance;
        return v < b ? n : l;
      }), s = this.fiveUtil.model.intersectRaycaster(t)[0];
      if (this.config.modelDepthTest && s && s.distance < e.intersects[0].distance)
        return;
      if (this.hooks.emit("wantsTap", {
        target: e.makerItem,
        intersectObjects: e.intersects
      }))
        return !1;
    });
    this.five = t, this.tagDomContainer = document.createElement("div"), this.tagDomContainer.style.position = "absolute", this.tagDomContainer.style.top = "0", this.tagDomContainer.style.left = "0", this.tagDomContainer.style.width = "100%", this.tagDomContainer.style.height = "100%", this.tagDomContainer.style.pointerEvents = "none";
    const e = {
      enabled: !0,
      visible: !0
    };
    this.state = Object.assign(e, i == null ? void 0 : i.initialState);
    const s = d({
      modelDepthTest: !0
    }, i == null ? void 0 : i.config);
    this._config = s, this.modelGroup = new g.Group(), this.modelGroup.name = "ModelMakerPluginGroup", this.itemMap = /* @__PURE__ */ new Map(), this.state.enabled && this._enable({ userAction: !1 });
  }
  /** 插件配置项 */
  get config() {
    return d({}, this._config);
  }
  /** 是否已经被销毁 */
  get disposed() {
    return this._disposed;
  }
  /** 加载数据，重复调用会使用新数据覆盖旧数据 */
  load(t) {
    return u(this, null, function* () {
      const i = this.data;
      this.data = this.formatData(t), this.hooks.emit("dataChange", this.data, i), this.modelGroup.remove(...this.modelGroup.children), this.itemMap.forEach((e) => e.unmount()), this.itemMap.clear(), this.childrenMountedState = !1, this.checkMsg.childrenMountedState = "", this.data.list.forEach((e) => {
        const s = new D(this, e);
        s.itemRenderer = this.itemRenderer, this.modelGroup.add(s.modelGroup), this.itemMap.set(e.id, s), s.hooks.on("tagClick", this.onMakerTagClick);
      }), this.updateChildrenMountedState();
    });
  }
  /** 将插件的 DOM 容器添加到指定的 DOM 元素上 */
  appendTo(t) {
    t.appendChild(this.tagDomContainer);
  }
  /** 启用插件
   * @param `options` `<Option> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  enable(t = {}) {
    var e;
    if (this.state.enabled)
      return;
    const i = (e = t.userAction) != null ? e : !0;
    this.updateState({ enabled: !0 }, i), this._enable({ userAction: i });
  }
  /** 禁用插件
   * @param `options` `<Option> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  disable(t = {}) {
    var e;
    if (this.state.enabled === !1)
      return;
    const i = (e = t.userAction) != null ? e : !0;
    this.updateState({ enabled: !1 }, i), this._disable({ userAction: i });
  }
  /** 展示标注
   * @param `options` `<Partial<ShowHideOptions>> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  show(t) {
    return u(this, null, function* () {
      if (this.state.visible)
        return Promise.resolve();
      if (this.disposed)
        return Promise.reject(new Error("不能在已销毁的插件上调用 show"));
      const i = d({ userAction: !0 }, t);
      this.updateState({ visible: !0 }, i.userAction), yield this._show(i);
    });
  }
  /** 插件内容整体隐藏
   * @param `options` `<Partial<ShowHideOptions>> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  hide(t) {
    return u(this, null, function* () {
      if (this.state.visible === !1)
        return;
      const i = d({ userAction: !0 }, t);
      this.updateState({ visible: !1 }, i.userAction), yield this._hide(i);
    });
  }
  // 目前带动画的展示和隐藏功能有些需求细节没有确定，暂时不实现
  // /** 展示标注
  //  * @param `options` `<Partial<ShowHideOptions>> | <undefined>`
  //  * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
  //  * @param `options.anime` `<AnimeOptions> | <undefined>` 动画配置。
  //  * @param `options.anime.duration` `<number> | <undefined>` 动画时间，默认是 500ms。
  //  */
  // public async show(options?: Partial<PluginType.ShowHideOptions>): Promise<void> {
  //   if (this.state.visible) return Promise.resolve()
  //   if (this.disposed) return Promise.reject(new Error('不能在已销毁的插件上调用 show'))
  //   const mergedOptions: PluginType.ShowHideOptions = {
  //     userAction: true,
  //     anime: { duration: 500, ...options?.anime },
  //     ...options,
  //   }
  //   this.updateState({ visible: true }, mergedOptions.userAction)
  //   await this._show(mergedOptions)
  // }
  // /** 插件内容整体隐藏
  //  * @param `options` `<Partial<ShowHideOptions>> | <undefined>`
  //  * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
  //  * @param `options.anime` `<AnimeOptions> | <undefined>` 动画配置。
  //  * @param `options.anime.duration` `<number> | <undefined>` 动画时间，默认是 500ms。
  //  */
  // public async hide(options?: Partial<PluginType.ShowHideOptions>) {
  //   if (this.state.visible === false) return
  //   const mergedOptions: PluginType.ShowHideOptions = {
  //     userAction: true,
  //     anime: { duration: 500, ...options?.anime },
  //     ...options,
  //   }
  //   this.updateState({ visible: false }, mergedOptions.userAction)
  //   await this._hide(mergedOptions)
  // }
  /** 更改插件 State
   * @param `state` `<Partial<Plugin.State>>` 插件属性 `state` 的子集。
   * @param `options` `<Option> | <undefined>`
   * @param `options.userAction` `<boolean> | <undefined>` 是否是用户操作。默认是 true。
   */
  setState(t, i = {}) {
    const e = this.state;
    if (I(t, e, { deep: !0 }))
      return;
    const s = i.userAction !== void 0 ? i.userAction : !0;
    if (this.updateState(t, s), t.enabled !== void 0 && e.enabled !== t.enabled && (t.enabled ? this._enable({ userAction: s }) : this._disable({ userAction: s })), t.visible !== void 0 && e.visible !== t.visible) {
      const a = { userAction: s, anime: { duration: 500 } };
      t.visible ? this._show(a) : this._hide(a);
    }
  }
  /** 更改插件 Config
   * @param `config` `<Partial<Plugin.Config>>` 插件属性 `config` 的子集。
   * @param `options` `<Option> | <undefined>`
   */
  updateConfig(t, i = {}) {
    var a;
    const e = this.config, s = d(d({}, e), t);
    this._config = s, this.hooks.emit("configChange", { prevConfig: e, config: s, userAction: (a = i.userAction) != null ? a : !0 });
  }
  /** 根据 ID 获取标注 */
  getMaskItemByID(t) {
    return this.itemMap.get(t);
  }
  formatData(t) {
    function i(e) {
      return e.list.length === 0 ? !0 : !("shape" in e.list[0].object_data);
    }
    return i(t) ? {
      list: t.list.filter((e) => e.object_data.points.length >= 3).map((e) => {
        const s = new g.Shape(), a = e.object_data.points[0];
        return s.moveTo(a[0], a[2]), e.object_data.points.slice(1).forEach((n) => s.lineTo(n[0], n[2])), s.lineTo(a[0], a[2]), p(d({}, e), {
          floor_index: e.object_data.floorIndex,
          object_data: p(d({}, e.object_data), {
            bottom_y: a[1] + e.object_data.fixedY,
            shape: s.toJSON(),
            height: e.object_data.height + e.object_data.fixedHeight
          })
        });
      })
    } : t;
  }
  checkChildrenMountedState() {
    const t = this.state, i = this.five;
    if (!t.enabled)
      return { result: !1, msg: "插件不可用" };
    const e = i.getCurrentState().mode;
    return e === "Panorama" ? { result: !1, msg: `Five 模态不符合条件, 当前模态为：${e}` } : this.isInFiveChangeModeAnime ? { result: !1, msg: "切换模态动画中不展示" } : { result: !0, msg: "" };
  }
  updateChildrenMountedState() {
    const { result: t, msg: i } = this.checkChildrenMountedState();
    this.checkMsg.childrenMountedState = i, t !== this.childrenMountedState && (this.childrenMountedState = t, this.itemMap.forEach((e) => {
      this.childrenMountedState ? e.mount() : e.unmount();
    }));
  }
  updateState(t, i) {
    const e = this.state;
    this.state = d(d({}, this.state), t), this.hooks.emit("stateChange", { state: this.state, prevState: e, userAction: i });
  }
  _enable(t) {
    this.hooks.emit("enable", { userAction: t.userAction }), this.five.scene.add(this.modelGroup), this.updateChildrenMountedState(), this.five.needsRender = !0, this.five.on("wantsTapGesture", this.onWantsFiveTapGesture), this.five.on("initAnimationWillStart", this.onFiveInitAnimationWillStart), this.five.on("initAnimationEnded", this.onFiveInitAnimationEnded), this.five.on("modeChange", this.onFiveModeChange), this.five.on("cameraUpdate", this.onFiveCameraUpdate);
  }
  _disable(t) {
    this.hooks.emit("disable", { userAction: t.userAction }), this.five.scene.remove(this.modelGroup), this.updateChildrenMountedState(), this.five.needsRender = !0, this.five.off("wantsTapGesture", this.onWantsFiveTapGesture), this.five.off("initAnimationWillStart", this.onFiveInitAnimationWillStart), this.five.off("initAnimationEnded", this.onFiveInitAnimationEnded), this.five.off("modeChange", this.onFiveModeChange), this.five.off("cameraUpdate", this.onFiveCameraUpdate);
  }
  _show(t) {
    return u(this, null, function* () {
      this.hooks.emit("show", t), this.five.needsRender = !0;
    });
  }
  _hide(t) {
    return u(this, null, function* () {
      this.hooks.emit("hide", t), this.five.needsRender = !0;
    });
  }
}
export {
  ht as Controller
};
