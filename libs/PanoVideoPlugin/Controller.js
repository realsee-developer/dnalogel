var f = Object.defineProperty, m = Object.defineProperties;
var b = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, W = Object.prototype.propertyIsEnumerable;
var l = (o, t, r) => t in o ? f(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, a = (o, t) => {
  for (var r in t || (t = {}))
    M.call(t, r) && l(o, r, t[r]);
  if (p)
    for (var r of p(t))
      W.call(t, r) && l(o, r, t[r]);
  return o;
}, d = (o, t) => m(o, b(t));
var s = (o, t, r) => (l(o, typeof t != "symbol" ? t + "" : t, r), r);
import { VideoMeshController as c } from "./VideoMeshController.js";
import { Controller as _ } from "../base/BasePlugin.js";
import "./utils/shader.js";
import "hammerjs";
import "three";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../shared-utils/positionToVector3.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../shared-utils/util.js";
import "../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../CSS3DRenderPlugin/utils/even.js";
import "../shared-utils/Subscribe.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import "../shared-utils/animationFrame/index.js";
import "./utils/index.js";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
class Z extends _ {
  constructor(r) {
    super(r);
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
  load(r, e) {
    var i;
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    typeof ((i = e == null ? void 0 : e.initialState) == null ? void 0 : i.enabled) != "undefined" && e.initialState.enabled !== this.enabled && (e.initialState.enabled ? this.enable() : this.disable()), r.list.forEach((n) => {
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
    }), this.data = r, this.hooks.emit("dataLoaded", r);
  }
  /** 开启插件功能。 */
  enable(r) {
    var i;
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    if (this.enabled)
      return;
    this.enabled = !0, Array.from(this.controllerMap.values()).forEach((n) => n.enable());
    const e = (i = r == null ? void 0 : r.userAction) != null ? i : !0;
    this.hooks.emit("enable", { userAction: e });
  }
  /** 禁用插件功能。 */
  disable(r) {
    var i;
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    if (!this.enabled)
      return;
    this.enabled = !1, Array.from(this.controllerMap.values()).forEach((n) => n.disable());
    const e = (i = r == null ? void 0 : r.userAction) != null ? i : !0;
    this.hooks.emit("disable", { userAction: e });
  }
  /** 看向某个视频。
   * - 会自动切换到全景模式。
   * - 如果遇到不能自动播放的问题，需要放到用户交互事件中调用。
   */
  lookAtVideoItemByRenderID(r) {
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    const e = this.controllerMap.get(r);
    if (!e)
      return this.logWarning(`ID 为 ${r} 的点位视频不存在`);
    e.lookAtVideo();
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
  unmuteByRenderID(r) {
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    const e = this.controllerMap.get(r);
    if (!e)
      return this.logWarning(`ID 为 ${r} 的点位视频不存在`);
    e.unmute();
  }
  /** 为一个点位添加视频（可以是多条）。 */
  add(r, e) {
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    e.forEach((i) => {
      if (this.controllerMap.get(i.render_id))
        return this.logWarning(`ID 为 ${i.render_id} 的点位视频已存在`);
      const n = i.render_id;
      this.controllerMap.set(
        i.render_id,
        new c(this.five, d(a({}, i), {
          panoIndex: r,
          renderID: n,
          hooks: this.hooks,
          initialState: { enabled: this.enabled }
        }))
      );
    });
  }
  /** 根据 VideoItem render_id 删除某个视频。 */
  removeByRenderID(r) {
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    const e = this.controllerMap.get(r);
    if (!e)
      return this.logWarning(`ID 为 ${r} 的点位视频不存在`);
    e.dispose(), this.controllerMap.delete(r);
  }
  /** 清空现有数据 */
  clear() {
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    Array.from(this.controllerMap.values()).forEach((r) => r.dispose()), this.controllerMap.clear();
  }
  /** 销毁插件 */
  dispose() {
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    this._disposed = !0, Array.from(this.controllerMap.values()).forEach((r) => r.dispose()), this.controllerMap.clear();
  }
  /** 控制台打印警告 */
  // TODO: 全局函数 curry 化
  logWarning(r) {
    console.warn("⛔ ==> [PanoVideoPluginController]:", r);
  }
}
export {
  Z as PanoVideoPluginController
};
