var c = Object.defineProperty;
var u = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var n = (a, s, e) => s in a ? c(a, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[s] = e, f = (a, s) => {
  for (var e in s || (s = {}))
    v.call(s, e) && n(a, e, s[e]);
  if (u)
    for (var e of u(s))
      S.call(s, e) && n(a, e, s[e]);
  return a;
};
var o = (a, s, e) => (n(a, typeof s != "symbol" ? s + "" : s, e), e);
var m = (a, s, e) => new Promise((t, i) => {
  var r = (d) => {
    try {
      h(e.next(d));
    } catch (l) {
      i(l);
    }
  }, b = (d) => {
    try {
      h(e.throw(d));
    } catch (l) {
      i(l);
    }
  }, h = (d) => d.done ? t(d.value) : Promise.resolve(d.value).then(r, b);
  h((e = e.apply(a, s)).next());
});
import { Controller as y } from "../base/BasePlugin.js";
import "../shared-utils/tag.js";
import "three";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { equal as L } from "../shared-utils/equal.js";
import "../shared-utils/five/FivePuppet.js";
import { objectAssignDeepExports as C } from "../vendor/object-assign-deep/objectAssignDeep.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/url/absoluteUrl.js";
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
import "../shared-utils/isNil.js";
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
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
import "../shared-utils/isTruelyObject.js";
const g = "CruisePlugin", p = `${g}`, We = (a) => `${p}--${a}`;
class qe extends y {
  constructor(e, t) {
    super(e, t);
    o(this, "state", {
      visible: !0,
      enabled: !0,
      disposed: !1,
      playing: !1,
      speed: 1
    });
    o(this, "data");
    o(this, "config");
    o(this, "pauseDataMap", /* @__PURE__ */ new Map());
    o(this, "privateState", {
      playing: !1,
      broke: !1,
      modeChanging: !1
    });
    o(this, "GuideLine");
    o(this, "disposedErrorLog", () => {
      console.error(`${p} is disposed`);
    });
    o(this, "disableWarnLog", () => {
      console.warn(`${p} is disabled`);
    });
    o(this, "disableErrorLog", () => {
      console.error(`${p} is disabled`);
    });
    this.config = t, Object.assign(window, { [`__${g}_DEBUG__`]: this });
  }
  /**
   * @description Play | Continue play. if have been paused, continue play from the pause position; if playing, do nothing
   */
  play(e) {
    this.setState({ playing: !0 }, e);
  }
  /**
   * @description Pause
   */
  pause(e) {
    this.setState({ playing: !1 }, e);
  }
  /**
   * @description Show guide line
   */
  show(e) {
    return m(this, null, function* () {
      this.setState({ visible: !0 }, e);
    });
  }
  /**
   * @description Hide guide line
   */
  hide(e) {
    return m(this, null, function* () {
      this.setState({ visible: !1 }, e);
    });
  }
  /**
   * @description Enable
   */
  enable(e) {
    this.setState({ enabled: !0 }, e);
  }
  /**
   * @description Disable
   */
  disable(e) {
    this.setState({ enabled: !1 }, e);
  }
  /**
   * @description Dispose
   */
  dispose() {
    this.setState({ disposed: !0 });
  }
  /**
   * @description Set state
   */
  setState(e, t) {
    var r;
    if (this.state.disposed)
      return this.disposedErrorLog();
    if (!this.state.enabled && e.enabled !== !0 && e.disposed !== !0)
      return this.disableErrorLog();
    const i = f({}, this.state);
    this.state = C({}, this.state, e), e.disposed !== void 0 && e.disposed !== i.disposed && e.disposed && this.handleDispose(), e.visible !== void 0 && e.visible !== i.visible && this.handleVisible(e.visible, t == null ? void 0 : t.userAction), e.enabled !== void 0 && e.enabled !== i.enabled && this.handleEnable(e.enabled, t == null ? void 0 : t.userAction), e.playing !== void 0 && e.playing !== i.playing && this.changePlayState(e.playing, t), e.speed !== void 0 && e.speed !== i.speed && this.changeSpeed(e.speed), L(i, this.state, { deep: !0 }) || this.hooks.emit("stateChange", { state: this.state, prevState: i, userAction: (r = t == null ? void 0 : t.userAction) != null ? r : !0 });
  }
  /**
   * @description Clear pause data
   */
  clearPauseData() {
    var e, t;
    if ((e = this.data) != null && e.id)
      return this.pauseDataMap.delete((t = this.data) == null ? void 0 : t.id);
  }
  changePlayState(e, t) {
    this.actionIfStateIsEnabled(
      () => {
        var i;
        return this.hooks.emit("playStateChange", e ? "playing" : "pause", { userAction: (i = t == null ? void 0 : t.userAction) != null ? i : !0 });
      }
    ), e ? this.handlePlay(t) : this.handlePause(t), this.state.playing = e;
  }
  handleEnable(e, t = !0) {
    var i, r;
    e ? ((i = this.GuideLine) == null || i.enable(), this.hooks.emit("enable", { userAction: t })) : ((r = this.GuideLine) == null || r.disable(), this.changePlayState(!1, { userAction: t }), this.hooks.emit("disable", { userAction: t })), this.state.enabled = e;
  }
  handleVisible(e, t = !0) {
    var i, r;
    e ? ((i = this.GuideLine) == null || i.show(), this.actionIfStateIsEnabled(() => this.hooks.emit("show", { userAction: t }))) : ((r = this.GuideLine) == null || r.hide(), this.actionIfStateIsEnabled(() => this.hooks.emit("hide", { userAction: t }))), this.state.visible = e;
  }
  /**
   * @description: listen interupted by five gesture
   */
  addInterruptListener(e) {
    const t = () => {
      this.privateState.modeChanging || e();
    }, i = (r) => {
      r !== "mouseMove" && (e(), this.five.off("gesture", i));
    };
    return this.five.on("gesture", i), this.five.once("wantsChangeMode", t), () => {
      this.five.off("gesture", i), this.five.off("wantsChangeMode", t);
    };
  }
  /**
   * @description Get duration by speed
   */
  getSpeededDuration(e) {
    return e / this.state.speed;
  }
  /**
   * @description Force interupt five updateCamera
   */
  forceInteruptUpdateCamera() {
    this.five.updateCamera({}, 0);
  }
  getPauseData() {
    var e;
    if ((e = this.data) != null && e.id)
      return this.pauseDataMap.get(this.data.id);
  }
  /**
   * @description Set pause data
   */
  setPauseData() {
    var t;
    const e = (t = this.data) == null ? void 0 : t.id;
    if (e)
      return this.pauseDataMap.set(e, {
        fiveState: this.five.getCurrentState(),
        playedProgress: this.getProgress()
      });
  }
  /**
   * @description: Restore state that before loaded
   */
  clear() {
    this.clearPauseData();
  }
  // TODO
  handleDispose() {
    var e;
    this.setState({ playing: !1 }), this.clearPauseData(), this.clear(), (e = this.GuideLine) == null || e.dispose(), this.GuideLine = void 0;
  }
  /**
   * @description Action function if plugin is enable
   */
  actionIfStateIsEnabled(e, t) {
    if (this.state.enabled)
      return e();
    t != null && t.warnLog && this.disableWarnLog();
  }
}
export {
  qe as default,
  We as pluginFlag
};
