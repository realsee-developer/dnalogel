var u = Object.defineProperty, g = Object.defineProperties;
var b = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, W = Object.prototype.propertyIsEnumerable;
var l = (e, i, r) => i in e ? u(e, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[i] = r, p = (e, i) => {
  for (var r in i || (i = {}))
    M.call(i, r) && l(e, r, i[r]);
  if (h)
    for (var r of h(i))
      W.call(i, r) && l(e, r, i[r]);
  return e;
}, a = (e, i) => g(e, b(i));
var s = (e, i, r) => (l(e, typeof i != "symbol" ? i + "" : i, r), r);
import { VideoMeshController as m } from "./VideoMeshController.js";
import { Controller as _ } from "../base/BasePlugin.js";
import "./utils/shader.js";
import "../shared-utils/tag.js";
import "../shared-utils/positionToVector3.js";
import "three";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Subscribe.js";
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
import "@realsee/five";
import "../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getPosition.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
import "../Sculpt/utils/three/rayOnLine.js";
import "../shared-utils/animationFrame/index.js";
import "./utils/index.js";
import "../shared-utils/url/absoluteUrl.js";
class Lr extends _ {
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
  load(r, t) {
    var o;
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    typeof ((o = t == null ? void 0 : t.initialState) == null ? void 0 : o.enabled) != "undefined" && t.initialState.enabled !== this.enabled && (t.initialState.enabled ? this.enable() : this.disable()), r.list.forEach((n) => {
      const c = n.pano_index, f = n.render_id;
      n.video_list.forEach((d) => {
        this.controllerMap.set(
          d.render_id,
          new m(this.five, a(p({}, d), {
            fiveUtil: this.fiveUtil,
            panoIndex: c,
            renderID: f,
            hooks: this.hooks,
            initialState: { enabled: this.enabled }
          }))
        );
      });
    }), this.data = r, this.hooks.emit("dataLoaded", r);
  }
  /** 开启插件功能。 */
  enable(r) {
    var o;
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    if (this.enabled)
      return;
    this.enabled = !0, Array.from(this.controllerMap.values()).forEach((n) => n.enable());
    const t = (o = r == null ? void 0 : r.userAction) != null ? o : !0;
    this.hooks.emit("enable", { userAction: t });
  }
  /** 禁用插件功能。 */
  disable(r) {
    var o;
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    if (!this.enabled)
      return;
    this.enabled = !1, Array.from(this.controllerMap.values()).forEach((n) => n.disable());
    const t = (o = r == null ? void 0 : r.userAction) != null ? o : !0;
    this.hooks.emit("disable", { userAction: t });
  }
  /** 看向某个视频。
   * - 会自动切换到全景模式。
   * - 如果遇到不能自动播放的问题，需要放到用户交互事件中调用。
   */
  lookAtVideoItemByRenderID(r) {
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    const t = this.controllerMap.get(r);
    if (!t)
      return this.logWarning(`ID 为 ${r} 的点位视频不存在`);
    t.lookAtVideo();
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
    const t = this.controllerMap.get(r);
    if (!t)
      return this.logWarning(`ID 为 ${r} 的点位视频不存在`);
    t.unmute();
  }
  /** 为一个点位添加视频（可以是多条）。 */
  add(r, t) {
    if (this.disposed)
      return this.logWarning("插件已被销毁");
    t.forEach((o) => {
      if (this.controllerMap.get(o.render_id))
        return this.logWarning(`ID 为 ${o.render_id} 的点位视频已存在`);
      const n = o.render_id;
      this.controllerMap.set(
        o.render_id,
        new m(this.five, a(p({}, o), {
          fiveUtil: this.fiveUtil,
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
    const t = this.controllerMap.get(r);
    if (!t)
      return this.logWarning(`ID 为 ${r} 的点位视频不存在`);
    t.dispose(), this.controllerMap.delete(r);
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
  Lr as PanoVideoPluginController
};
