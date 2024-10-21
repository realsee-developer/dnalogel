var h = Object.defineProperty;
var m = (n, o, t) => o in n ? h(n, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[o] = t;
var l = (n, o, t) => (m(n, typeof o != "symbol" ? o + "" : o, t), t);
import { BaseTag as g } from "./BaseTag.js";
import * as c from "three";
import "../../../shared-utils/Subscribe.js";
import "../../utils/tag/calculateTagConfig.js";
import "../../../vendor/object-assign-deep/objectAssignDeep.js";
import "../../../shared-utils/typescript/entries.js";
import "../../utils/tag/adaptConfig.js";
import "../../typings/tag/TagConfig.js";
import "@realsee/five";
import "../../../shared-utils/five/mode.js";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../../vendor/three/build/three.module.js";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/three/core/Sphere.js";
import "animejs";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../utils/tag/format.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/util.js";
import "../../../shared-utils/three/blink.js";
import "../../../shared-utils/vectorToCoordinate.js";
import "../../../shared-utils/formatRad.js";
import "../../../shared-utils/isNil.js";
import "../../../shared-utils/five/lookPoint.js";
import "../../../shared-utils/uuid.js";
import "../../utils/tagPosition.js";
import "../../utils/tag/tagCheck.js";
import "../../utils/checkRange.js";
import "../../../shared-utils/url/getUrl.js";
import "../../../shared-utils/five/getFloorIndex.js";
import "../../../shared-utils/safeObj.js";
import "../../utils/Cache.js";
const b = new c.Vector2();
class dt extends g {
  constructor(t, e) {
    super(t, e);
    l(this, "__Object__");
    l(this, "requestIdleCallbackId");
  }
  /**
   * @description 展开自己，收起其他标签
   */
  unfoldAndFoldOthers() {
    const t = this.can("fold"), e = this.can("unfold");
    t && e && (this.state.unfolded = !this.state.unfolded, this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }), this.state.unfolded && this.plugin.tags.forEach((s) => {
      s.id !== this.id && s.fold();
    }));
  }
  onClick(t) {
    t.target === "TagPoint" && this.unfoldAndFoldOthers();
  }
  updateVisible() {
    if (typeof window.requestIdleCallback == "undefined") {
      super.updateVisible();
      return;
    }
    const t = () => {
      this.requestIdleCallbackId && cancelIdleCallback(this.requestIdleCallbackId), this.requestIdleCallbackId = requestIdleCallback(() => {
        super.updateVisible();
      });
    };
    let e = !1;
    requestIdleCallback(() => {
      e = !0;
    }), t(), setTimeout(() => {
      e || (this.requestIdleCallbackId && cancelIdleCallback(this.requestIdleCallbackId), super.updateVisible());
    }, 200);
  }
  applyVisible() {
    var t, e, s, i;
    this.currentVisible && this.updateScreenPosition(), (s = (e = (t = this.tag3DContentSvelte) == null ? void 0 : t.css3DInstance) == null ? void 0 : e.css3DObject) == null || s.setVisible(this.currentVisible), (i = this.tag3DContentSvelte) == null || i.svelteApp.$set({
      state: this.plugin.state,
      temporaryState: this.temporaryState
    }), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
  }
  unfold() {
    this.setUnfold(!0);
  }
  fold() {
    this.setUnfold(!1);
  }
  /**
   * @description 展开/收起指定id的标签
   * @param {boolean} unfolded
   */
  setUnfold(t) {
    const e = this.can("fold"), s = this.can("unfold");
    e && s && (this.state.unfolded = t, this.hooks.emit(t ? "unfolded" : "folded"), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }));
  }
  setPosition(t) {
    this.originPosition = t, this.position = t, this.cache.clear(), this.updateVisible(), this.updateScreenPosition(), this.updateZIndex(), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
  }
  updateScreenPosition(t) {
    var a;
    if (this.stickType !== "2DPoint" && this.stickType !== "3DPoint")
      return;
    const { force: e = !1 } = t != null ? t : {}, s = e ? this.state.visible : this.currentVisible, i = (a = this.__Object__) != null ? a : {
      timeoutId: void 0,
      inAnimation: !1
    };
    if (this.__Object__ = i, !s && this.screenPosition ? (i.inAnimation = !0, i.timeoutId = setTimeout(() => {
      requestAnimationFrame(() => {
        this.currentVisible || (i.inAnimation = !1, this.screenPosition = null, this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }));
      });
    }, 1e3)) : i.timeoutId && (clearTimeout(i.timeoutId), i.inAnimation = !1, i.timeoutId = void 0), !s && !i.inAnimation)
      return;
    const r = this.computeTagProject();
    if (r) {
      const d = (() => {
        if (!this.currentConfig.simulate3D)
          return 1;
        const p = 2 * Math.tan(0.5 * this.five.camera.fov / 180 * Math.PI), f = this.getDistance(void 0, 1);
        return Math.max(Math.min(1 - p * f / 40, 1), 0.5);
      })(), u = this.five.renderer.getSize(b);
      this.screenPosition = {
        leftPx: (r.x + 1) / 2 * u.x,
        topPx: (-r.y + 1) / 2 * u.y,
        scale: d
      };
    } else
      this.screenPosition = null;
    this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
  }
  updateUnfoldedByPanoIndex() {
    const t = this.getUnfoldedByPanoIndex();
    if (this.state && (t !== void 0 && (this.state.unfolded = t), t && !this.state.visible)) {
      const e = this.getConfig();
      typeof e.unfoldedConfig == "object" && e.unfoldedConfig.autoFoldWhenHide !== !1 && (this.state.unfolded = !1);
    }
  }
  computeNormal() {
    return new c.Vector3().fromArray(this.normal);
  }
}
export {
  dt as PointTag
};
