var f = Object.defineProperty, m = Object.defineProperties;
var b = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, W = Object.prototype.propertyIsEnumerable;
var l = (o, t, e) => t in o ? f(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, a = (o, t) => {
  for (var e in t || (t = {}))
    M.call(t, e) && l(o, e, t[e]);
  if (p)
    for (var e of p(t))
      W.call(t, e) && l(o, e, t[e]);
  return o;
}, d = (o, t) => m(o, b(t));
var s = (o, t, e) => (l(o, typeof t != "symbol" ? t + "" : t, e), e);
import { VideoMeshController as c } from "./VideoMeshController.js";
import { Controller as _ } from "../base/BasePlugin.js";
import "./utils/shader.js";
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../vendor/three/build/three.module.js";
import "../shared-utils/tag.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/three/core/Sphere.js";
import "animejs";
import "../shared-utils/animationFrame/index.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "./utils/index.js";
import "../shared-utils/url/absoluteUrl.js";
class T extends _ {
  constructor(e) {
    super(e);
    s(this, "controllerMap", /* @__PURE__ */ new Map());
    s(this, "data");
    s(this, "enabled", !0);
    s(this, "_disposed", !1);
  }
  /** 插件 State */
  get state() {
    return {
      enabled: this.enabled
    };
  }
  /** 插件是否已被销毁 */
  get disposed() {
    return this._disposed;
  }
  /** 加载点位视频数据，加载数据并不代表会加载点位视频。 */
  load(e, r) {
    var i;
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    typeof ((i = r == null ? void 0 : r.initialState) == null ? void 0 : i.enabled) != "undefined" && r.initialState.enabled !== this.enabled && (r.initialState.enabled ? this.enable() : this.disable()), e.list.forEach((n) => {
      const u = n.pano_index, g = n.render_id;
      n.video_list.forEach((h) => {
        this.controllerMap.set(
          h.render_id,
          new c(this.five, d(a({}, h), {
            panoIndex: u,
            renderID: g,
            hooks: this.hooks,
            initialState: { enabled: this.enabled }
          }))
        );
      });
    }), this.data = e, this.hooks.emit("dataLoaded", e);
  }
  /** 开启插件功能。 */
  enable(e) {
    var i;
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    if (this.enabled)
      return;
    this.enabled = !0, Array.from(this.controllerMap.values()).forEach((n) => n.enable());
    const r = (i = e == null ? void 0 : e.userAction) != null ? i : !0;
    this.hooks.emit("enable", { userAction: r });
  }
  /** 禁用插件功能。 */
  disable(e) {
    var i;
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    if (!this.enabled)
      return;
    this.enabled = !1, Array.from(this.controllerMap.values()).forEach((n) => n.disable());
    const r = (i = e == null ? void 0 : e.userAction) != null ? i : !0;
    this.hooks.emit("disable", { userAction: r });
  }
  /** 看向某个视频。
   * - 会自动切换到全景模式。
   * - 如果遇到不能自动播放的问题，需要放到用户交互事件中调用。
   */
  lookAtVideoItemByRenderID(e) {
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    const r = this.controllerMap.get(e);
    if (!r)
      return this.logWarning(`ID 为 ${e} 的点位视频不存在`);
    r.lookAtVideo();
  }
  /**
   * 取消静音。
   *
   * 大部分浏览器需要用户交互后才能开启视频声音。
   *
   * 如果需要取消静音，建议在用户交互事件中调用本方法。
   *
   * 例如:
   *
   * ```jsx
   * onClick={() => {
   *  panoVideoPluginController.lookAtVideoItemByRenderID('xxx')
   *  panoVideoPluginController.unmuteByRenderID('xxx')
   * }}
   * ```
   */
  unmuteByRenderID(e) {
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    const r = this.controllerMap.get(e);
    if (!r)
      return this.logWarning(`ID 为 ${e} 的点位视频不存在`);
    r.unmute();
  }
  /** 为一个点位添加视频（可以是多条）。 */
  add(e, r) {
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    r.forEach((i) => {
      if (this.controllerMap.get(i.render_id))
        return this.logWarning(`ID 为 ${i.render_id} 的点位视频已存在`);
      const n = i.render_id;
      this.controllerMap.set(
        i.render_id,
        new c(this.five, d(a({}, i), {
          panoIndex: e,
          renderID: n,
          hooks: this.hooks,
          initialState: { enabled: this.enabled }
        }))
      );
    });
  }
  /** 根据 VideoItem render_id 删除某个视频。 */
  removeByRenderID(e) {
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    const r = this.controllerMap.get(e);
    if (!r)
      return this.logWarning(`ID 为 ${e} 的点位视频不存在`);
    r.dispose(), this.controllerMap.delete(e);
  }
  /** 清空现有数据 */
  clear() {
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    Array.from(this.controllerMap.values()).forEach((e) => e.dispose()), this.controllerMap.clear();
  }
  /** 销毁插件 */
  dispose() {
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    this._disposed = !0, Array.from(this.controllerMap.values()).forEach((e) => e.dispose()), this.controllerMap.clear();
  }
  /** 控制台打印警告 */
  // TODO: 全局函数 curry 化
  logWarning(e) {
    console.warn("⛔ ==> [PanoVideoPluginController]:", e);
  }
}
export {
  T as PanoVideoPluginController
};
