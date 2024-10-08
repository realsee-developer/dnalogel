var x = Object.defineProperty;
var I = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var c = (n, s, t) => s in n ? x(n, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[s] = t, m = (n, s) => {
  for (var t in s || (s = {}))
    D.call(s, t) && c(n, t, s[t]);
  if (I)
    for (var t of I(s))
      E.call(s, t) && c(n, t, s[t]);
  return n;
};
var r = (n, s, t) => (c(n, typeof s != "symbol" ? s + "" : s, t), t);
import h from "./EditController.js";
import k from "./ViewController.js";
import T from "./WatchController.js";
import a from "./MixedController.js";
import { omit as G } from "../../shared-utils/filter.js";
import { Group as S } from "three";
import { Model as L } from "../Model/index.js";
import { getMouseGroup as O } from "../utils/mouseGroup.js";
import { UIController as W } from "../Modules/UIController/index.js";
import { GuideController as A } from "../Modules/GuideController.js";
import { ShortcutKeyController as B } from "./ShortcutKeyController.js";
import { safeObj as U } from "../../shared-utils/safeObj.js";
import { Magnifier as V } from "../../shared-utils/three/Magnifier.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/three/core/Sphere.js";
import "animejs";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { isTouchDevice as K } from "../../shared-utils/isTouchDevice.js";
import { Controller as H } from "../../base/BasePlugin.js";
import "../Model/line.js";
import "../../shared-utils/uuid.js";
import "../utils/line.js";
import "../../shared-utils/five/FiveLine.js";
import "../utils/constants.js";
import "@realsee/five";
import "../utils/dom/distanceItem.js";
import "../utils/dom/base.js";
import "../utils/isNDCPointInScreen.js";
import "../../shared-utils/three/centerPoint.js";
import "../Model/point.js";
import "../../shared-utils/throttle.js";
import "./BaseController.js";
import "../utils/ironbox.js";
import "../Model/polyline.js";
import "../Model/area.js";
import "../Model/polygon.js";
import "../../shared-utils/three/IObject3D.js";
import "../../shared-utils/three/generatePolygonGeometry.js";
import "../../shared-utils/three/earcut3D.js";
import "earcut";
import "../../shared-utils/three/getNormal.js";
import "../utils/isIntersecting.js";
import "../utils/dom/areaDom.js";
import "../../shared-utils/three/geometryUtil.js";
import "hammerjs";
import "../../shared-utils/isNil.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/even.js";
import "../../shared-utils/Subscribe.js";
import "../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../vendor/three/build/three.module.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/five/initialCSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "../../CSS3DRenderPlugin/utils/three/THREEJS_CSS3DRenderer.js";
import "../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../Sculpt/utils/removeAllTag.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../Modules/DeleteDom/index.js";
import "../Modules/DeleteDom/_Assets/delete.svg.js";
import "../Modules/DeleteDom/_Assets/delete_bg.png.js";
import "../Modules/DeleteDom/_Assets/delete_hover_bg.png.js";
import "../utils/math.js";
import "../utils/findClosestPoint.js";
import "../utils/ndc2Screen.js";
import "../../shared-utils/getPointFromHammerEvent.js";
import "../Modules/rangePiece/index.js";
import "../../shared-utils/animationFrame/index.js";
import "../../shared-utils/noop.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "../../shared-utils/tap.js";
import "../Modules/UIController/HTML.js";
import "../Modules/UIController/mobileHTML.js";
import "../Modules/UIController/style.js";
import "../Modules/UIController/MainBtnController.js";
import "../Modules/UIController/mobileMainBtnController.js";
import "../Modules/UIController/Revoke/index.js";
import "../Components/Controller0.js";
import "../../vendor/svelte/internal/index.js";
import "../Components/Common/Switcher0.js";
import "../Components/Common/Exit.js";
import "../Components/Common/icons/index.js";
import "../Components/Controller1.js";
import "../Components/Common/Switcher1.js";
import "../Components/Common/CircleButton.js";
import "../../vendor/svelte/transition/index.js";
import "../../vendor/svelte/easing/index.js";
import "../../vendor/object-assign-deep/objectAssignDeep.js";
import "../Components/Tip.js";
import "../../shared-utils/url/absoluteUrl.js";
class Ye extends H {
  constructor(t, e) {
    var l, u, d, f, g, y, C, M, w, P, b, v;
    super(t);
    r(this, "state", { enabled: !0 });
    r(this, "hasOpen", !1);
    /** @deprecated use hooks instead */
    r(this, "hook");
    r(this, "magnifier");
    r(this, "controller", null);
    /** 允许的测量类型 */
    r(this, "allowMeasureType");
    /** 当前的测量类型 */
    r(this, "currentMeasureType");
    r(this, "model");
    r(this, "group");
    r(this, "config");
    r(this, "isMobile");
    r(this, "useUIController");
    r(this, "params");
    r(this, "useGuideController");
    r(this, "container", document.createElement("div"));
    r(this, "shortcutKeyController");
    /** 关闭插件功能
     * @description 清除标尺线条
     * @description 还原点位展示和默认鼠标 UI
     */
    r(this, "disable", () => {
      var t, e, i, o;
      this.hasOpen = !1, this.state.enabled = !1, this.container.style.visibility = "hidden", this.container.style.opacity = "0", (t = this.controller) == null || t.dispose(), (e = this.useUIController) == null || e.hide(), (i = this.useGuideController) == null || i.hide(), (o = this.shortcutKeyController) == null || o.dispose(), this.controller = null, this.five.helperVisible = !0, this.five.scene.remove(this.group), this.five.needsRender = !0, this.hook.emit("disable", !0);
    });
    r(this, "getCurrentMode", () => this.controller instanceof h ? "Edit" : this.controller instanceof T ? "Watch" : this.controller instanceof a ? "Mixed" : this.controller instanceof k ? "View" : null);
    /** 变更场景
     * @description 如果从编辑场景改变到观看场景，不会自动保存，默认丢弃所有改动
     */
    r(this, "changeMode", (t) => {
      var o;
      if (!this.hasOpen || this.getCurrentMode() === t)
        return;
      (o = this.controller) == null || o.dispose();
      const e = {
        View: k,
        Watch: T,
        Edit: h,
        Mixed: a
      };
      if (!e[t])
        throw new Error("不存在的 Mode");
      const i = this.createControllerParams();
      this.controller = new e[t](i), this.hook.emit("modeChange", t);
    });
    /**
     * @description: 切换测量的类型
     */
    r(this, "changeMeasureType", (t) => {
      this.currentMeasureType = t, this.hook.emit("measureTypeChange", t);
    });
    this.five = t, this.hook = this.hooks, this.params = e, this.config = G(e, ["openParams", "magnifierParams"]), this.model = new L(this.config), this.isMobile = (u = (l = e == null ? void 0 : e.openParams) == null ? void 0 : l.isMobile) != null ? u : !1, this.magnifier = new V(
      t,
      (y = (g = e.magnifierParams) != null ? g : (f = (d = e.pointSelectorConfig) == null ? void 0 : d.helper) == null ? void 0 : f.magnifierParams) != null ? y : { width: 190, height: 190, scale: 2 }
    ), this.allowMeasureType = Array.from(new Set((M = (C = e.editParams) == null ? void 0 : C.allowMeasureType) != null ? M : ["line"])), this.currentMeasureType = (w = this.allowMeasureType[0]) != null ? w : "line", this.group = new S(), this.group.name = "plugin-measure-group", this.container.classList.add("five-plugin-measure-container"), this.container.style.position = "absolute", this.container.style.left = "0", this.container.style.top = "0", this.container.style.visibility = "hidden", this.container.style.width = "100%", this.container.style.height = "100%", this.container.style.opacity = "0";
    const i = (b = (P = e.editParams) == null ? void 0 : P.pointSelectorMode) != null ? b : K ? "fixed" : "cursor", o = (v = this.params.openParams) != null ? v : {};
    if (this.params.useUIController !== !1) {
      const p = m({
        container: this.container,
        openParams: o,
        i18n: e.i18n,
        pointSelectorMode: i,
        useNewUI: this.allowMeasureType.length > 1
      }, U(this.params.useUIController));
      this.useUIController = new W(this, p);
    }
    if (this.params.useGuideController !== !1) {
      const p = m({
        container: this.container,
        pointSelectorMode: i,
        i18n: e.i18n
      }, U(this.params.useGuideController));
      this.useGuideController = new A(this, p);
    }
  }
  appendTo(t) {
    t.append(this.container);
  }
  clear() {
    this.model.clear();
  }
  dispose() {
    var t, e;
    this.disable(), this.clear(), (t = this.useUIController) == null || t.dispose(), (e = this.magnifier) == null || e.dispose(), this.five.needsRender = !0;
  }
  /** 加载数据
   * @description 数据加载时会覆盖当前已保存的数据
   * @description 如果当前正在编辑中，会自动退出并保存编辑
   */
  load(t) {
    this.model.parse(t), this.save();
  }
  /** 插件功能入口
   * @description 会隐藏鼠标的默认聚焦环
   * @description 会隐藏当前 VR 内的点位展示
   */
  enable(t) {
    var e, i;
    this.hasOpen || (this.state.enabled = !0, this.hasOpen = !0, this.group.matrix.copy(this.workUtil.transform), this.group.matrix.decompose(this.group.position, this.group.quaternion, this.group.scale), this.group.updateMatrixWorld(), this.five.scene.add(this.group), this.container.style.visibility = "visible", this.container.style.opacity = "1", t != null && t.mode ? this.changeMode(t.mode) : this.isMobile ? this.changeMode("Mixed") : this.changeMode("Watch"), (e = this.useUIController) == null || e.show(), (i = this.useGuideController) == null || i.show(), this.shortcutKeyController = new B(this, this.five), this.hook.emit("enable", !0));
  }
  /** 进入编辑模式 */
  edit(t) {
    t && this.changeMeasureType(t);
    const e = this.isMobile ? "Mixed" : "Edit";
    this.changeMode(e);
  }
  /** 撤销编辑 */
  revoke() {
    this.controller instanceof h && this.controller.revoke();
  }
  removePolyline(t) {
    this.model.removePolyline(t);
  }
  removeArea(t) {
    this.model.removeArea(t);
  }
  removePolylineByID(t) {
    const e = this.model.getPolylineByID(t);
    e && this.model.removePolyline(e);
  }
  getPolylineByID(t) {
    return this.model.getPolylineByID(t);
  }
  getEditedPolyline() {
  }
  /**
   * 高亮当前线段
   */
  highlightLine(t) {
    if (this.getCurrentMode() !== "Watch")
      return !1;
    const e = this.model.getLineByID(t);
    return e ? (this.controller.highlightLine(e), !0) : !1;
  }
  clearHighlightLines() {
    return this.getCurrentMode() !== "Watch" ? !1 : (this.controller.clearHighlightLines(), !0);
  }
  /** 保存编辑
   * @description 以下情况可能报错
   */
  save(t) {
    var o;
    if (!(this.controller instanceof h) && !(this.controller instanceof a))
      return this;
    const e = (o = t == null ? void 0 : t.mode) != null ? o : "View", i = this.controller.model.areas;
    return this.controller instanceof h ? this.controller.complete() : i.forEach((l) => {
      l.showArea(), this.model.addArea(l);
    }), this.changeMode(e), this;
  }
  /** Mixed 模式才有用，添加起点 */
  addStartPoint() {
    this.controller instanceof a && this.hook.emit("willChangeState", "watching", "editing");
  }
  /** Mixed 模式才有用，添加终点 */
  addEndPoint() {
    this.controller instanceof a && this.hook.emit("willChangeState", "editing", "watching");
  }
  /** 导出数据 */
  toJson() {
    return this.model.toJson();
  }
  /**
   * @deprecated 暂不支持
   * @description 改变插件的模式（pc端模式或移动端模式）
   * @param isMobile true为移动端模式，false为pc端
   */
  changeIsMobile(t) {
  }
  changeConfigs(t) {
    var e, i;
    Object.assign(this.config, t), (e = this.controller) == null || e.updateDistanceUI(), (i = this.controller) == null || i.updateAreaUI();
  }
  /** 设置线段的文本 */
  setCustomText(t, e) {
    var o;
    const i = this.model.getLineByID(t);
    if (!i)
      throw new Error("不存在的线段");
    i.setText(e), (o = this.controller) == null || o.updateDistanceUI();
  }
  createControllerParams() {
    var i, o;
    const t = (i = this.params.openParams) != null ? i : {}, e = (o = this.params.editParams) != null ? o : {};
    return t.isMobile = this.isMobile, {
      five: this.five,
      hook: this.hook,
      group: this.group,
      model: this.model,
      config: this.config,
      magnifier: this.magnifier,
      container: this.container,
      workUtil: this.workUtil,
      openParams: t,
      editParams: e,
      pointSelectorConfig: this.params.pointSelectorConfig,
      magnifierParams: this.params.magnifierParams,
      getMeasureType: () => this.currentMeasureType,
      mouseGroup: O(m({}, t.crossHairParameter)),
      userDistanceItemCreator: this.params.userDistanceItemCreator
    };
  }
}
export {
  Ye as default
};
