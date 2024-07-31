var c = Object.defineProperty;
var f = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var p = (a, s, e) => s in a ? c(a, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[s] = e, g = (a, s) => {
  for (var e in s || (s = {}))
    v.call(s, e) && p(a, e, s[e]);
  if (f)
    for (var e of f(s))
      S.call(s, e) && p(a, e, s[e]);
  return a;
};
var d = (a, s, e) => (p(a, typeof s != "symbol" ? s + "" : s, e), e);
var u = (a, s, e) => new Promise((t, i) => {
  var r = (h) => {
    try {
      n(e.next(h));
    } catch (o) {
      i(o);
    }
  }, b = (h) => {
    try {
      n(e.throw(h));
    } catch (o) {
      i(o);
    }
  }, n = (h) => h.done ? t(h.value) : Promise.resolve(h.value).then(r, b);
  n((e = e.apply(a, s)).next());
});
import { Controller as y } from "../base/BasePlugin.js";
import { equal as L } from "../shared-utils/equal.js";
import { objectAssignDeepExports as C } from "../vendor/object-assign-deep/objectAssignDeep.js";
import "../shared-utils/Subscribe.js";
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
const m = "CruisePlugin", l = `${m}`, ee = (a) => `${l}--${a}`;
class te extends y {
  constructor(e, t) {
    super(e, t);
    d(this, "state", {
      visible: !0,
      enabled: !0,
      disposed: !1,
      playing: !1,
      speed: 1
    });
    d(this, "data");
    d(this, "config");
    d(this, "pauseDataMap", /* @__PURE__ */ new Map());
    d(this, "privateState", {
      playing: !1,
      broke: !1,
      modeChanging: !1
    });
    d(this, "GuideLine");
    d(this, "disposedErrorLog", () => {
      console.error(`${l} is disposed`);
    });
    d(this, "disableWarnLog", () => {
      console.warn(`${l} is disabled`);
    });
    d(this, "disableErrorLog", () => {
      console.error(`${l} is disabled`);
    });
    this.config = t, Object.assign(window, { [`__${m}_DEBUG__`]: this });
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
    return u(this, null, function* () {
      this.setState({ visible: !0 }, e);
    });
  }
  /**
   * @description Hide guide line
   */
  hide(e) {
    return u(this, null, function* () {
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
    const i = g({}, this.state);
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
  te as default,
  ee as pluginFlag
};
