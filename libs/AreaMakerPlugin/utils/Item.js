var f = Object.defineProperty;
var b = (n, e, t) => e in n ? f(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var i = (n, e, t) => (b(n, typeof e != "symbol" ? e + "" : e, t), t);
import * as a from "three";
import "hammerjs";
import { Subscribe as k } from "../../shared-utils/Subscribe.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { Object3D as y } from "../../shared-utils/three/core/Object3D.js";
import { LineSegments as T } from "../../shared-utils/three/objects/LineSegments.js";
import "animejs";
import { BetterTween as C } from "../../shared-utils/animationFrame/BetterTween.js";
import { LabelItem as O } from "../../components/AreaLabel/LabelItem.js";
import { getCenterPointOfPoints as v } from "../../shared-utils/math/planimetry.js";
import { resizeObserver as M } from "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/positionToVector3.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/even.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../shared-utils/animationFrame/index.js";
import "../../vendor/svelte/internal/index.js";
import "../../components/AreaLabel/Assets/roomLabelBg.js";
class V extends y {
  constructor(t) {
    super();
    i(this, "areaMakerItem");
    this.areaMakerItem = t;
  }
  raycast(t, s) {
    this.areaMakerItem.makerObject.raycast(t, s);
  }
}
class it {
  constructor(e, t) {
    i(this, "id");
    /** 标注名称 */
    i(this, "name", "");
    /** 标注几何体 */
    i(this, "makerObject");
    /** 标注几何体的边框 */
    i(this, "outline");
    /** 标注底面 Y 坐标 */
    i(this, "bottomY");
    /** 标注透明度 */
    i(this, "opacity");
    /** 标注高度 */
    i(this, "height");
    /** 标注所在楼层 */
    i(this, "floorIndex");
    /** 标注底面形状 */
    i(this, "shape");
    /** 是否被挂载 */
    i(this, "mounted", !1);
    /** 查询问题使用的调试对象 */
    i(this, "checkMsg", {
      /** 当标注没有展示时，可以通过这个字段查看原因 */
      checkVisibleMsg: "",
      /** 当标注标签没有展示时，可以通过这个字段查看原因 */
      checkTagVisibleMsg: ""
    });
    /** 模型容器 */
    i(this, "modelGroup");
    /** 标注是否可见 */
    i(this, "visible", !0);
    // ==================== 标签相关 ====================
    /** 标注标签实例 */
    i(this, "tagApp");
    /** 标注标签是否可见 */
    i(this, "tagVisible", null);
    /** 标注标签的世界坐标 */
    i(this, "tagPosition", new a.Vector3());
    /** 标注标签的 NDC 坐标 */
    i(this, "tagNDCPosition", new a.Vector3());
    /** 标注标签的 transform */
    i(this, "tagTransform", { left: 0, top: 0 });
    /** 标注标签的显示层级 */
    i(this, "tagZIndex", 0);
    /** 标注实例的事件处理器 */
    i(this, "hooks", new k());
    /** 自定义 Dom */
    i(this, "itemRenderer");
    /** 数据 */
    i(this, "data");
    /** Plugin 实例 */
    i(this, "plugin");
    /** 标注透明度动画 */
    i(this, "opacityAnime");
    /** 是否在容器 resize 动画中 */
    i(this, "isInContainerResizeAnimation", !1);
    /** 监听容器 resize 的计时器 id，用于判断 resize 过程是否结束 */
    i(this, "containerResizeTimeoutID", null);
    i(this, "resizeObserver");
    /** 显示标注 */
    // public show() {
    // return this.doOpacityAnime({
    //   duration: 500,
    //   makerObjectOpacity: [this.makerObject.material.opacity, this.opacity],
    //   outlineOpacity: [this.outline.material.opacity, 1],
    //   ...options,
    // })
    // }
    /** 隐藏标注 */
    // public hide() {
    // return this.doOpacityAnime({
    //   duration: 500,
    //   makerObjectOpacity: [this.makerObject.material.opacity, 0],
    //   outlineOpacity: [this.outline.material.opacity, 0],
    //   ...options,
    // })
    // }
    /** 透明度动画 */
    i(this, "doOpacityAnime", (e) => {
      var h;
      (h = this.opacityAnime) == null || h.dispose();
      const t = e.duration, [s, o] = e.makerObjectOpacity, [r, l] = e.outlineOpacity;
      if (t === 0) {
        this.makerObject.material.opacity = o, this.outline.material.opacity = l;
        return;
      }
      return new Promise((m) => {
        this.opacityAnime = new C({ makerObjectOpacity: s, outlineOpacity: r }).to({
          makerObjectOpacity: o,
          outlineOpacity: l
        }).onUpdate(({ makerObjectOpacity: p, outlineOpacity: c }) => {
          this.makerObject.material.opacity = p, this.outline.material.opacity = c, this.plugin.five.needsRender = !0;
        }).onComplete(() => m(!0)).onDispose(() => {
          this.makerObject.material.opacity = o, this.outline.material.opacity = l, this.plugin.five.needsRender = !0, m(!1);
        }).play();
      });
    });
    /** 插件 Config 变化时更新自身 depthTest */
    i(this, "onPluginConfigChange", (e) => {
      this.makerObject.material.depthTest = e.config.modelDepthTest, this.outline.material.depthTest = e.config.modelDepthTest, this.plugin.five.needsRender = !0;
    });
    /** 插件整体可见性变化时，需要更新自身可见性 */
    i(this, "onPluginStateChange", () => {
      this.updateVisible(), this.updateTagVisible();
    });
    /** 更新标注可见性 */
    i(this, "updateVisible", () => {
      var o;
      const { result: e, msg: t } = this.checkVisible();
      if (this.checkMsg.checkVisibleMsg = t, this.visible === e)
        return;
      this.visible = e;
      const s = (o = this.data.object_data.visible) != null ? o : !0;
      this.modelGroup.visible = e && s, this.plugin.five.needsRender = !0;
    });
    /** 检测标注是否可见 */
    i(this, "checkVisible", () => {
      if (!this.plugin.state.visible)
        return { result: !1, msg: "插件不可见" };
      const t = this.plugin.fiveUtil.model.shownFloor;
      return t === null || t === this.floorIndex ? { result: !0, msg: "" } : { result: !1, msg: `模型高亮楼层不符合展示条件, 当前高亮楼层为：${t}` };
    });
    /** 更新标注标签 */
    i(this, "updateTag", () => {
      this.tagApp && (this.updateTagNDCPosition(), this.updateTagDomTransform(), this.updateTagVisible());
    });
    /** 更新标注标签的 NDC Position */
    i(this, "updateTagNDCPosition", () => {
      const t = this.tagPosition.clone().project(this.plugin.five.camera);
      this.tagNDCPosition.copy(t);
    });
    /** 更新标注标签的 transform */
    i(this, "updateTagDomTransform", () => {
      var o;
      const e = this.tagNDCPosition, t = Math.round((e.x + 1) / 2 * this.plugin.tagDomContainer.clientWidth), s = Math.round((-e.y + 1) / 2 * this.plugin.tagDomContainer.clientHeight);
      this.tagTransform.left === t && this.tagTransform.top === s || (this.tagTransform = { left: t, top: s }, (o = this.tagApp) == null || o.$set({ transform: `translate(${t}px, ${s}px)` }));
    });
    /** 更新标注标签可见性 */
    i(this, "updateTagVisible", () => {
      var s;
      const { result: e, msg: t } = this.checkTagVisible();
      this.checkMsg.checkTagVisibleMsg = t, this.tagVisible !== e && (this.tagVisible = e, this.tagApp && (this.tagVisible ? this.hooks.emit("tagShow") : this.hooks.emit("tagHide"), (s = this.tagApp) == null || s.$set({ visible: e })));
    });
    /** 检测标注标签是否可见 */
    i(this, "checkTagVisible", () => {
      if (!this.visible)
        return { result: !1, msg: "标注整体不可见" };
      if (this.isInContainerResizeAnimation)
        return { result: !1, msg: "处于容器 resize 动画中" };
      const t = this.plugin.five, s = new a.Raycaster(), o = t.camera.position.clone();
      s.set(o.clone(), this.tagPosition.clone().sub(o).normalize());
      const [r] = this.plugin.fiveUtil.model.intersectRaycaster(s), l = this.tagPosition.distanceTo(t.camera.position);
      if (r && r.distance + 0.1 < l)
        return { result: !1, msg: "标注标签被 Five 模型遮挡" };
      const h = this.tagNDCPosition;
      return Math.abs(h.x) > 1.2 || Math.abs(h.y) > 1.2 || Math.abs(h.z) > 1 ? { result: !1, msg: "标注标签不在屏幕内" } : { result: !0, msg: "" };
    });
    /** 相机位姿发生变化时，更新标签 */
    i(this, "onFiveCameraUpdate", () => {
      this.tagApp && this.visible && (this.updateTagNDCPosition(), this.updateTagDomTransform(), this.updateTagVisible());
    });
    /** tag container DOM 发生 resize */
    i(this, "onContainerResize", () => {
      this.isInContainerResizeAnimation === !1 && (this.isInContainerResizeAnimation = !0, this.updateTag());
      const t = () => {
        this.isInContainerResizeAnimation = !1, this.containerResizeTimeoutID = null, this.updateTag();
      };
      this.containerResizeTimeoutID && clearTimeout(this.containerResizeTimeoutID), this.containerResizeTimeoutID = setTimeout(t, 100);
    });
    var m, p, c, g;
    const s = t.object_data, o = s.bottom_y, r = s.height, l = new a.Color((m = s.color) != null ? m : "#FFFFFF"), h = (p = s.opacity) != null ? p : 0.4;
    this.data = t, this.id = t.id, this.name = (c = t.name) != null ? c : "", this.plugin = e, this.height = r, this.bottomY = o, this.opacity = h, this.shape = new a.Shape().fromJSON(s.shape), this.floorIndex = t.floor_index, this.makerObject = new a.Mesh(d(this.shape, r), P(l, h)), u(this.makerObject, o), this.makerObject.material.depthTest = this.plugin.config.modelDepthTest, this.outline = new T(
      new a.EdgesGeometry(this.makerObject.geometry),
      new a.LineBasicMaterial({ color: l, transparent: !0 })
    ), u(this.outline, o), this.outline.material.depthTest = this.plugin.config.modelDepthTest, this.setHeight(r), this.modelGroup = new V(this), this.modelGroup.visible = (g = s.visible) != null ? g : !0;
  }
  /** 挂载标注 */
  mount() {
    if (this.mounted)
      return;
    this.mounted = !0, this.updateVisible(), this.makerObject.material.depthTest = this.plugin.config.modelDepthTest, this.outline.material.depthTest = this.plugin.config.modelDepthTest, this.modelGroup.add(this.makerObject, this.outline);
    const e = !!this.name, t = this.plugin.tagDomContainer;
    e && (this.tagApp = new O({
      target: t,
      props: {
        rendererData: this.data,
        content: this.name,
        visible: this.tagVisible,
        rendererIfNeed: this.itemRenderer,
        transform: `translate(${this.tagTransform.left}px, ${this.tagTransform.top}px)`,
        onClick: (s) => this.hooks.emit("tagClick", { target: this, nativeEvent: s })
      }
    }), this.updateTag()), this.plugin.five.needsRender = !0, this.plugin.hooks.on("stateChange", this.onPluginStateChange), this.plugin.hooks.on("configChange", this.onPluginConfigChange), this.plugin.five.on("modeChange", this.updateVisible), this.plugin.five.on("modelShownFloorChange", this.updateVisible), this.plugin.five.on("cameraUpdate", this.onFiveCameraUpdate), this.resizeObserver = M(this.onContainerResize, t), this.resizeObserver.observe();
  }
  /** 卸载标注 */
  unmount() {
    var e, t;
    this.mounted && (this.mounted = !1, this.modelGroup.remove(...this.modelGroup.children), (e = this.tagApp) == null || e.$destroy(), this.tagApp = null, this.plugin.hooks.off("stateChange", this.onPluginStateChange), this.plugin.hooks.off("configChange", this.onPluginConfigChange), this.plugin.five.off("modeChange", this.updateVisible), this.plugin.five.off("modelShownFloorChange", this.updateVisible), this.plugin.five.off("cameraUpdate", this.onFiveCameraUpdate), (t = this.resizeObserver) == null || t.unobserve());
  }
  /** 更改标注透明度
   * @param opacity 标注透明度，范围：0-1
   */
  setOpacity(e) {
    var t;
    this.opacity = e, (t = this.opacityAnime) == null || t.dispose(), this.makerObject.material.opacity = e, this.plugin.five.needsRender = !0;
  }
  /** 更改标注颜色
   * @param color 标注颜色，支持 hex
   * @example setColor('#FF0000')
   */
  setColor(e) {
    const t = new a.Color(e);
    this.makerObject.material.color = t, this.outline.material.color = t, this.plugin.five.needsRender = !0;
  }
  /** 更改标注高度
   * @param height 标注高度，单位：米
   */
  setHeight(e) {
    if (e <= 0)
      throw new Error("高度必须大于 0");
    this.height = e, this.makerObject.geometry = d(this.shape, e), this.outline.geometry = new a.EdgesGeometry(this.makerObject.geometry);
    const t = this.shape.extractPoints(10).shape.slice(0, -1), s = v(t), o = new a.Vector3(s.x, s.y, e);
    u(o, this.bottomY), this.tagPosition.copy(o), this.updateTag(), this.plugin.five.needsRender = !0;
  }
  /** 更改标注标签的显示层级
   * @description 为什么需要这个方法
   * 在相机朝向或位置发生变化时，各个标签所在的坐标与相机的远近关系发生了变化，所以标签的层级也会有变化。
   * 比如：
   * - 相机 -> 标签 A -> 标签 B： 标签 A 在标签 B 的前面
   * - 标签 A <- 标签 B <- 相机： 标签 A 在标签 B 的后面
   * 但是当前元素是无法感知到这种变化的，所以需要通过父元素调用这个方法来更新标签的层级。
   */
  setTagZIndex(e) {
    var t;
    this.tagZIndex !== e && ((t = this.tagApp) == null || t.$set({ zIndex: e }));
  }
}
function d(n, e) {
  return new a.ExtrudeBufferGeometry(n, {
    depth: e,
    bevelEnabled: !1
  });
}
function P(n, e) {
  return new a.MeshBasicMaterial({
    color: n,
    opacity: e,
    transparent: !0
  });
}
function u(n, e) {
  const t = new a.Matrix4(), s = new a.Matrix4().makeRotationX(Math.PI / 2), o = new a.Matrix4().makeTranslation(0, 0, -e), r = new a.Matrix4().makeScale(1, 1, -1);
  t.multiply(s), t.multiply(o), t.multiply(r), n.applyMatrix4(t);
}
export {
  it as AreaMakerItem
};
