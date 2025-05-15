var b = Object.defineProperty;
var k = (a, e, t) => e in a ? b(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var i = (a, e, t) => (k(a, typeof e != "symbol" ? e + "" : e, t), t);
import * as r from "three";
import "../../shared-utils/tag.js";
import "../../vendor/hammerjs/hammer.js";
import { Subscribe as y } from "../../shared-utils/Subscribe.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import { Object3D as T } from "../../shared-utils/three/core/Object3D.js";
import { LineSegments as C } from "../../shared-utils/three/core/LineSegments.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { BetterTween as O } from "../../shared-utils/animationFrame/BetterTween.js";
import "../../shared-utils/five/FivePuppet.js";
import { LabelItem as v } from "../../components/AreaLabel/LabelItem.js";
import { getCenterPointOfPoints as M } from "../../shared-utils/math/planimetry.js";
import { resizeObserver as V } from "../../shared-utils/dom/resizeObserver.js";
import { _raycaster as d } from "../../shared-utils/three/temp.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/five/fiveEveryReadyListener.js";
import "../../shared-utils/throttle.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../shared-utils/even.js";
import "../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/isNil.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/CSS3DRender/index.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../shared-utils/three/IObject3D.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/util.js";
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../Sculpt/utils/unit.js";
import "../../Sculpt/utils/renderDom.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../../Sculpt/utils/three/rayOnLine.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../shared-utils/animationFrame/index.js";
import "@realsee/five";
import "../../vendor/svelte/internal/index.js";
import "../../components/AreaLabel/Assets/roomLabelBg.js";
import "../../shared-utils/math/rad2Deg.js";
class P extends T {
  constructor(t) {
    super();
    i(this, "areaMakerItem");
    this.areaMakerItem = t;
  }
  raycast(t, s) {
    this.areaMakerItem.makerObject.raycast(t, s);
  }
}
class Lt {
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
    i(this, "tagPosition", new r.Vector3());
    /** 标注标签的 NDC 坐标 */
    i(this, "tagNDCPosition", new r.Vector3());
    /** 标注标签的 transform */
    i(this, "tagTransform", { left: 0, top: 0 });
    /** 标注标签的显示层级 */
    i(this, "tagZIndex", 0);
    /** 标注实例的事件处理器 */
    i(this, "hooks", new y());
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
      var m;
      (m = this.opacityAnime) == null || m.dispose();
      const t = e.duration, [s, o] = e.makerObjectOpacity, [h, n] = e.outlineOpacity;
      if (t === 0) {
        this.makerObject.material.opacity = o, this.outline.material.opacity = n;
        return;
      }
      return new Promise((p) => {
        this.opacityAnime = new O({ makerObjectOpacity: s, outlineOpacity: h }).to({
          makerObjectOpacity: o,
          outlineOpacity: n
        }).onUpdate(({ makerObjectOpacity: l, outlineOpacity: c }) => {
          this.makerObject.material.opacity = l, this.outline.material.opacity = c, this.plugin.five.needsRender = !0;
        }).onComplete(() => p(!0)).onDispose(() => {
          this.makerObject.material.opacity = o, this.outline.material.opacity = n, this.plugin.five.needsRender = !0, p(!1);
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
      const t = this.plugin.five, s = t.camera.position.clone();
      d.set(s.clone(), this.tagPosition.clone().sub(s).normalize());
      const [o] = this.plugin.fiveUtil.model.intersectRaycaster(d), h = this.tagPosition.distanceTo(t.camera.position);
      if (o && o.distance + 0.1 < h)
        return { result: !1, msg: "标注标签被 Five 模型遮挡" };
      const n = this.tagNDCPosition;
      return Math.abs(n.x) > 1.2 || Math.abs(n.y) > 1.2 || Math.abs(n.z) > 1 ? { result: !1, msg: "标注标签不在屏幕内" } : { result: !0, msg: "" };
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
    var p, l, c, g;
    const s = t.object_data, o = s.bottom_y, h = s.height, n = new r.Color((p = s.color) != null ? p : "#FFFFFF"), m = (l = s.opacity) != null ? l : 0.4;
    this.data = t, this.id = t.id, this.name = (c = t.name) != null ? c : "", this.plugin = e, this.height = h, this.bottomY = o, this.opacity = m, this.shape = new r.Shape().fromJSON(s.shape), this.floorIndex = t.floor_index, this.makerObject = new r.Mesh(f(this.shape, h), j(n, m)), u(this.makerObject, o), this.makerObject.material.depthTest = this.plugin.config.modelDepthTest, this.outline = new C(
      new r.EdgesGeometry(this.makerObject.geometry),
      new r.LineBasicMaterial({ color: n, transparent: !0 })
    ), u(this.outline, o), this.outline.material.depthTest = this.plugin.config.modelDepthTest, this.setHeight(h), this.modelGroup = new P(this), this.modelGroup.visible = (g = s.visible) != null ? g : !0;
  }
  /** 挂载标注 */
  mount() {
    if (this.mounted)
      return;
    this.mounted = !0, this.updateVisible(), this.makerObject.material.depthTest = this.plugin.config.modelDepthTest, this.outline.material.depthTest = this.plugin.config.modelDepthTest, this.modelGroup.add(this.makerObject, this.outline);
    const e = !!this.name, t = this.plugin.tagDomContainer;
    e && (this.tagApp = new v({
      target: t,
      props: {
        rendererData: this.data,
        content: this.name,
        visible: this.tagVisible,
        rendererIfNeed: this.itemRenderer,
        transform: `translate(${this.tagTransform.left}px, ${this.tagTransform.top}px)`,
        onClick: (s) => this.hooks.emit("tagClick", { target: this, nativeEvent: s })
      }
    }), this.updateTag()), this.plugin.five.needsRender = !0, this.plugin.hooks.on("stateChange", this.onPluginStateChange), this.plugin.hooks.on("configChange", this.onPluginConfigChange), this.plugin.five.on("modeChange", this.updateVisible), this.plugin.five.on("modelShownFloorChange", this.updateVisible), this.plugin.five.on("cameraUpdate", this.onFiveCameraUpdate), this.resizeObserver = V(this.onContainerResize, t), this.resizeObserver.observe();
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
    const t = new r.Color(e);
    this.makerObject.material.color = t, this.outline.material.color = t, this.plugin.five.needsRender = !0;
  }
  /** 更改标注高度
   * @param height 标注高度，单位：米
   */
  setHeight(e) {
    if (e <= 0)
      throw new Error("高度必须大于 0");
    this.height = e, this.makerObject.geometry = f(this.shape, e), this.outline.geometry = new r.EdgesGeometry(this.makerObject.geometry);
    const t = this.shape.extractPoints(10).shape.slice(0, -1), s = M(t), o = new r.Vector3(s.x, s.y, e);
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
function f(a, e) {
  return new r.ExtrudeBufferGeometry(a, {
    depth: e,
    bevelEnabled: !1
  });
}
function j(a, e) {
  return new r.MeshBasicMaterial({
    color: a,
    opacity: e,
    transparent: !0
  });
}
function u(a, e) {
  const t = new r.Matrix4(), s = new r.Matrix4().makeRotationX(Math.PI / 2), o = new r.Matrix4().makeTranslation(0, 0, -e), h = new r.Matrix4().makeScale(1, 1, -1);
  t.multiply(s), t.multiply(o), t.multiply(h), a.applyMatrix4(t);
}
export {
  Lt as AreaMakerItem
};
