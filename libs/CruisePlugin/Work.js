var b = Object.defineProperty, F = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var I = (h, l, t) => l in h ? b(h, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[l] = t, g = (h, l) => {
  for (var t in l || (l = {}))
    D.call(l, t) && I(h, t, l[t]);
  if (w)
    for (var t of w(l))
      C.call(l, t) && I(h, t, l[t]);
  return h;
}, x = (h, l) => F(h, E(l));
var k = (h, l, t) => (I(h, typeof l != "symbol" ? l + "" : l, t), t);
var y = (h, l, t) => new Promise((e, r) => {
  var i = (n) => {
    try {
      p(t.next(n));
    } catch (a) {
      r(a);
    }
  }, m = (n) => {
    try {
      p(t.throw(n));
    } catch (a) {
      r(a);
    }
  }, p = (n) => n.done ? e(n.value) : Promise.resolve(n.value).then(i, m);
  p((t = t.apply(h, l)).next());
});
import { GuideLinePlugin as K } from "../GuideLinePlugin/index.js";
import { uuid as S } from "../shared-utils/uuid.js";
import { coordinatesAngle as L } from "./utils/coordinatesAngle.js";
import { safeCall as T } from "./utils/safeCall.js";
import * as U from "three";
import { sleep as O } from "./utils/sleep.js";
import { waitFiveLoaded as M } from "../shared-utils/five/fiveLoaded.js";
import { vectorToCoordinates as A } from "../shared-utils/vectorToCoordinate.js";
import G from "./BaseController.js";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as Q } from "../shared-utils/isNil.js";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../shared-utils/five/FivePuppet.js";
import "../GuideLinePlugin/Controller.js";
import "../base/BasePluginWithData.js";
import "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/five/fiveModelLoad.js";
import "../shared-utils/equal.js";
import "../shared-utils/isTruelyObject.js";
import "../GuideLinePlugin/GuideLineItem/index.js";
import "../GuideLinePlugin/GuideLineModeItem/index.js";
import "../shared-utils/log.js";
import "../GuideLinePlugin/utils/createLineGeometry.js";
import "../vendor/polyline-normals/index.js";
import "../vendor/polyline-miter-util/index.js";
import "../vendor/gl-vec2/add.js";
import "../vendor/gl-vec2/set.js";
import "../vendor/gl-vec2/normalize.js";
import "../vendor/gl-vec2/subtract.js";
import "../vendor/gl-vec2/dot.js";
import "../shared-utils/math/intersecting.js";
import "../shared-utils/five/mode.js";
import "../shared-utils/three/blink.js";
import "../shared-utils/util.js";
import "../shared-utils/animationFrame/BetterTween.js";
import "../shared-utils/animationFrame/index.js";
import "../shared-utils/three/loadTexture.js";
import "../PanoTagPlugin/controller/index.js";
import "../vendor/object-assign-deep/objectAssignDeep.js";
import "../shared-utils/positionToVector3.js";
import "../PanoTagPlugin/utils/tag/tagCheck.js";
import "../PanoTagPlugin/utils/debounce.js";
import "../PanoTagPlugin/utils/throttle.js";
import "../PanoTagPlugin/utils/tag/format.js";
import "../shared-utils/audio.js";
import "../shared-utils/dom/resizeObserver.js";
import "../PanoTagPlugin/controller/TagRender.js";
import "../PanoTagPlugin/controller/TagUtil.js";
import "../PanoTagPlugin/typings/tag/TagConfig.js";
import "../PanoTagPlugin/tag.config.js";
import "../PanoTagPlugin/utils/normalPositionToPositions.js";
import "../vendor/svelte/store/index.js";
import "../vendor/svelte/internal/index.js";
import "../shared-utils/device.js";
import "@realsee/five";
import "../PanoTagPlugin/utils/model/mediaPlane.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/Quadrangle.js";
import "../shared-utils/math/pointsIsRectangle.js";
import "../shared-utils/three/loadVideoTexture.js";
import "../PanoTagPlugin/Assets/Icon.js";
import "../shared-utils/three/getPositionsByObjectFit.js";
import "../shared-utils/three/FragmentTransparencyMaterial.js";
import "../shared-utils/three/getNormal.js";
import "../shared-utils/constants.js";
import "../shared-utils/five/FiveDomEvents.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/five/calculateThreeMouse.js";
import "../shared-utils/three/core/Raycaster.js";
import "../PanoTagPlugin/utils/Cache.js";
import "../shared-utils/typescript/entries.js";
import "../PanoTagPlugin/utils/tag/adaptConfig.js";
import "../PanoTagPlugin/utils/DebugUtil.js";
import "../shared-utils/safeObj.js";
import "../PanoTagPlugin/utils/addDebugPoints.js";
import "../PanoTagPlugin/controller/Tag/PointTag.js";
import "../PanoTagPlugin/controller/Tag/BaseTag.js";
import "../PanoTagPlugin/utils/tag/calculateTagConfig.js";
import "../shared-utils/five/lookPoint.js";
import "../PanoTagPlugin/utils/tagPosition.js";
import "../PanoTagPlugin/utils/checkRange.js";
import "../shared-utils/url/getUrl.js";
import "../shared-utils/five/getFloorIndex.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/promise/withResolvers.js";
import "../PanoTagPlugin/controller/Tag/ModelTag.js";
import "../shared-utils/CSS3DRender/index.js";
import "../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../shared-utils/createResizeObserver.js";
import "../shared-utils/even.js";
import "../shared-utils/CSS3DRender/CSS3DObject.js";
import "../shared-utils/CSS3DRender/OpacityMesh.js";
import "../shared-utils/three/GLTFLoader.js";
import "@realsee/five/gltf-loader";
import "../PanoTagPlugin/utils/planeNormal.js";
import "../PanoTagPlugin/Components/Tag/index.js";
import "../PanoTagPlugin/Components/Tag/TextTag/index.js";
import "../PanoTagPlugin/Components/Tag/TextTag/TextTag.js";
import "../PanoTagPlugin/Components/Common/Line/Straight.js";
import "../vendor/svelte/transition/index.js";
import "../vendor/svelte/easing/index.js";
import "../PanoTagPlugin/Components/Common/Shadow.js";
import "../PanoTagPlugin/Components/Common/Text/FlyMText.js";
import "../PanoTagPlugin/Components/Common/Text/FlyText.js";
import "../PanoTagPlugin/utils/search.js";
import "../PanoTagPlugin/utils/constants.js";
import "../PanoTagPlugin/Components/Common/Arrow.js";
import "../PanoTagPlugin/utils/doUtil.js";
import "../shared-utils/svelte/resizeObserver.js";
import "../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "../PanoTagPlugin/Components/Tag/TextTag/TextPlaneTag.js";
import "../PanoTagPlugin/Components/Common/Text/MText.js";
import "../PanoTagPlugin/utils/px2rem.js";
import "../PanoTagPlugin/Components/Tag/ImageTextTag.js";
import "../PanoTagPlugin/Components/Common/Line/Polyline.js";
import "../PanoTagPlugin/Components/Common/Media.js";
import "../vendor/svelte-carousel/src/components/Carousel/Carousel.js";
import "../vendor/svelte-carousel/src/components/Dots/Dots.js";
import "../vendor/svelte-carousel/src/components/Dot/Dot.js";
import "../vendor/svelte-carousel/src/components/Arrow/Arrow.js";
import "../vendor/svelte-carousel/src/direction.js";
import "../vendor/svelte-carousel/src/components/Progress/Progress.js";
import "../vendor/svelte-carousel/src/actions/swipeable/swipeable.js";
import "../vendor/svelte-carousel/src/actions/swipeable/event.js";
import "../vendor/svelte-carousel/src/utils/event.js";
import "../vendor/svelte-carousel/src/units.js";
import "../vendor/svelte-carousel/src/actions/hoverable/hoverable.js";
import "../vendor/svelte-carousel/src/actions/hoverable/event.js";
import "../vendor/svelte-carousel/src/actions/tappable/tappable.js";
import "../vendor/svelte-carousel/src/utils/math.js";
import "../vendor/svelte-carousel/src/actions/tappable/event.js";
import "../vendor/svelte-carousel/src/utils/page.js";
import "../vendor/svelte-carousel/src/utils/clones.js";
import "../vendor/svelte-carousel/src/utils/object.js";
import "../vendor/svelte-carousel/src/components/Carousel/createCarousel.js";
import "../vendor/easy-reactive/src/simply-reactive.js";
import "../vendor/lodash.get/index.js";
import "../_commonjsHelpers.js";
import "../vendor/lodash.clonedeep/index.js";
import "../vendor/easy-reactive/src/utils/subscription.js";
import "../vendor/easy-reactive/src/utils/object.js";
import "../vendor/lodash.isequal/index.js";
import "../vendor/easy-reactive/src/utils/watcher.js";
import "../vendor/svelte-carousel/src/utils/lazy.js";
import "../vendor/svelte-carousel/src/utils/ProgressManager.js";
import "../vendor/svelte-carousel/src/utils/interval.js";
import "../PanoTagPlugin/Components/Common/MediaItem.js";
import "../PanoTagPlugin/Components/Tag/MarketingTag.js";
import "../PanoTagPlugin/utils/noTypecheck.js";
import "../PanoTagPlugin/Components/Tag/AudioTag/index.js";
import "../PanoTagPlugin/Components/Tag/AudioTag/AudioTag.js";
import "../PanoTagPlugin/Components/Common/Audio.js";
import "../PanoTagPlugin/utils/audio/SharedAudio.js";
import "../PanoTagPlugin/Components/Common/Icon/audioIcon.js";
import "../PanoTagPlugin/Components/Tag/AudioTag/AudioPlaneTag.js";
import "../PanoTagPlugin/Components/Tag/MediaPlane.js";
import "../PanoTagPlugin/Components/Tag/LinkTag.js";
import "../PanoTagPlugin/Components/Common/Icon/Icon.js";
import "../PanoTagPlugin/utils/getImageInfo.js";
import "../PanoTagPlugin/Components/Tag/PanoramaTag.js";
import "../PanoTagPlugin/Components/Common/Icon/PanoramaIcon.js";
import "../PanoTagPlugin/Components/Tag/CustomTag.js";
import "../vendor/classnames/index.js";
import "../PanoTagPlugin/controller/Tag/PlaneTag.js";
import "../PanoTagPlugin/Components/TagContainer.js";
import "../PanoTagPlugin/Components/TagItem.js";
import "../PanoTagPlugin/Components/Common/TagPoint.js";
import "../PanoTagPlugin/Components/Common/TagPopover/index.js";
import "../PanoTagPlugin/Components/Common/TagPopover/PopoverContent.js";
import "../PanoTagPlugin/Components/Common/TagPopover/TagPopoverArrow.js";
import "../PanoTagPlugin/Components/Common/Icon/tag-popover-arrow-base64.js";
import "../PanoTagPlugin/Components/Common/TagPopover/TagPopup.js";
import "../PanoTagPlugin/Components/Common/VideoIcon.js";
import "../PanoTagPlugin/Components/Common/TagPopover/PanoramaIcon.js";
import "../PanoTagPlugin/utils/videoHelper.js";
import "../PanoTagPlugin/Components/Common/TagPopover/TagPopoverToolBar.js";
import "../PanoTagPlugin/Components/Common/TagPopover/ArrowRightIcon.js";
import "../PanoTagPlugin/Components/Common/TagPopover/ShareIcon.js";
import "../PanoTagPlugin/utils/popoverContainer.js";
import "../shared-utils/five/fiveEveryReadyListener.js";
import "../shared-utils/throttle.js";
import "../GuideLinePlugin/Components/Tag.js";
import "../GuideLinePlugin/utils/index.js";
import "../GuideLinePlugin/utils/createPath.js";
import "../shared-utils/to.js";
import "../shared-utils/five/changeMode.js";
import "../shared-utils/nearlyEqual.js";
import "./Move.js";
import "./utils/getFiveStateOnCurve.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../shared-utils/three/Magnifier.js";
import "../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../shared-utils/three/Assets/index.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../shared-utils/three/PointSelector/utils/html.js";
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
import "../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getPosition.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
import "../Sculpt/utils/three/rayOnLine.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../shared-utils/formatRad.js";
import "./Work.js";
import "./utils/coordinatesToVector.js";
class ao extends G {
  constructor(t, e) {
    super(t, e);
    k(this, "state", {
      visible: !0,
      enabled: !0,
      disposed: !1,
      playing: !1,
      speed: 1,
      config: {
        speedConfig: {
          rotateSpeed: 1e-3,
          rotateSpeedUnit: "rad/ms",
          moveSpeed: 2e-3,
          moveSpeedUnit: "m/ms"
        }
      }
    });
    k(this, "privateState", {
      playing: !1,
      currentPlayQueue: [],
      currentPlayKeyframe: null,
      broke: !1,
      modeChanging: !1
    });
    this.config = e, Object.assign(window, { __WalkPlugin_DEBUG__: this });
  }
  /**
   * @description Load Data and State
   */
  load(t, e, r) {
    return y(this, null, function* () {
      var o, s;
      this.clear();
      const i = this.data ? JSON.parse(JSON.stringify(this.data)) : void 0, m = yield this.formatData(t);
      this.data = g({ id: m.keyframesId }, m), this.hooks.emit("dataChange", m, i);
      let p = [], n;
      const a = this.data.keyframes.filter((f) => f.data.panoIndex !== void 0);
      a.filter((f, d) => {
        var u;
        return f.data.panoIndex !== ((u = a[d - 1]) == null ? void 0 : u.data.panoIndex);
      }).map((f) => f.data.panoIndex).forEach((f) => {
        var u, v;
        const d = (u = this.workUtil.getObserver(f)) == null ? void 0 : u.floorIndex;
        if (d !== void 0)
          if (n === d) {
            const c = p.length - 1;
            p[c] = [...(v = p[c]) != null ? v : [], f];
          } else {
            n = d;
            const c = p.length;
            p[c] = [f];
          }
      }), !this.GuideLine && ((o = this.config) == null ? void 0 : o.useGuideLine) !== !1 && m.useGuildLine !== !1 && (this.GuideLine = K(this.five, this.config)), (s = this.GuideLine) == null || s.load({ routes: p.map((f) => ({ panoIndexList: f })), config: m.guildPluginOptions }), e ? this.setState(e, { userAction: r }) : (this.setState({ playing: !1 }, { userAction: !1 }), this.handleVisible(this.state.visible), this.handleEnable(this.state.enabled), this.changePlayState(this.state.playing, { userAction: !1 }), this.changeSpeed(this.state.speed)), this.clearPauseData(), console.debug("WORKPLUGIN loaded", m), this.hooks.emit("dataLoaded", m);
    });
  }
  /**
   * @description If playing, first pause, then play from keyframes index/id
   * @param {number} options.index play from keyframes index
   * @param {string} options.id play from keyframes id
   */
  playFrom(t) {
    const { index: e, id: r, userAction: i } = t;
    this.state.playing && this.setState({ playing: !1 }, { userAction: i }), this.setState({ playing: !0 }, { userAction: i, playFromIndex: e, playFromId: r });
  }
  /**
   * @description Play from first keyframe
   */
  playFromStart(t) {
    return this.playFrom(x(g({}, t), { index: 0 }));
  }
  /**
   * @description Format data
   */
  formatData(t) {
    return y(this, null, function* () {
      this.five.work || (yield M(this.five));
      const e = (() => {
        const r = t;
        return typeof r == "object" && r !== null && Q(r.version) && r.data ? r.data : r;
      })();
      if (e.keyframes)
        return {
          keyframesId: S(),
          keyframes: e.keyframes.map((r, i) => {
            var n;
            const m = e.keyframes[i + 1], p = (() => !m || m.start === void 0 || r.end === void 0 ? 0 : m.start - r.end)();
            return x(g({ id: (n = r.uuid) != null ? n : S(), moveIndex: i, stay: p, index: i }, r), { guildPluginOptions: e.guildPluginOptions });
          })
        };
      if (e.panoIndexList) {
        let r = [];
        const { moveEffect: i, moveToFirstPanoEffect: m, moveToFirstPanoDuration: p } = e;
        return this.privateState.moveToFirstPanoEffect = m, this.privateState.moveToFirstPanoDuration = p, e.panoIndexList.forEach((n, a) => {
          const o = (() => {
            var v, c;
            const s = e.panoIndexList.slice(a).find((P) => P !== n);
            if (s === void 0)
              return;
            const f = this.workUtil.getObserverPosition(n), d = this.workUtil.getObserverPosition(s);
            if (!d || !f || ((v = this.workUtil.getObserver(n)) == null ? void 0 : v.floorIndex) !== ((c = this.workUtil.getObserver(s)) == null ? void 0 : c.floorIndex))
              return;
            const u = new U.Vector3().subVectors(d, f);
            return A(u.normalize());
          })();
          e.moveType === void 0 || e.moveType === "justMove" ? r.push({
            moveIndex: a,
            stay: e.stay,
            data: g({ effect: "Move", panoIndex: n, moveEffect: i }, o != null ? o : {})
          }) : e.moveType === "moveAndRotate" && (r.push({ moveIndex: a, stay: e.stay, data: { effect: "Move", panoIndex: n, moveEffect: i } }), o && r.push({ moveIndex: a, stay: e.stay, data: g({ effect: "Rotate", panoIndex: n }, o) }));
        }), {
          keyframesId: S(),
          keyframes: r.map((n, a) => g({ id: S(), index: a }, n)),
          guildPluginOptions: e.guildPluginOptions,
          useGuildLine: e.useGuildLine
        };
      } else
        throw new Error("format error: data no keyframes or no panoIndexList");
    });
  }
  /**
   * @description Play | Continue play. if have been paused, continue play from the pause position; if playing, do nothing
   * @param {number} options.playFromIndex play from keyframes index
   * @param {string} options.playFromId play from keyframes id
   */
  // eslint-disable-next-line complexity
  handlePlay(t) {
    return y(this, null, function* () {
      var d;
      const { data: e, state: r, privateState: i, hooks: m } = this;
      if (i.playing || !(e != null && e.keyframes) || (e == null ? void 0 : e.keyframes.length) === 0)
        return;
      const p = S();
      i.playId = p, i.playing = !0, i.broke = !1;
      const n = e.keyframes, a = this.getPauseData();
      (t == null ? void 0 : t.notEmitEvent) !== !0 && m.emit("play", { userAction: (d = t == null ? void 0 : t.userAction) != null ? d : !0 });
      let o = !1;
      const f = yield (() => y(this, null, function* () {
        var u, v;
        if ((t == null ? void 0 : t.playFromIndex) !== void 0)
          return t.playFromIndex;
        if ((t == null ? void 0 : t.playFromId) !== void 0)
          return (u = this.data) == null ? void 0 : u.keyframes.findIndex((c) => c.id === t.playFromId);
        if (a != null && a.id) {
          const c = (v = this.data) == null ? void 0 : v.keyframes.find((P) => P.id === a.id);
          if (a != null && a.fiveState && (yield this.move(a.fiveState, {
            moveEffect: i.moveToFirstPanoEffect,
            duration: i.moveToFirstPanoDuration
          })), c) {
            if (c.data.effect === "Move")
              return c.index;
            if (c.data.effect === "Rotate") {
              const P = a.duration !== void 0 ? a.duration * (1 - a.playedProgress) : void 0;
              return yield this.playKeyframe(c, { duration: P }), o = !0, c.index + 1;
            }
          }
        }
      }))();
      this.clearPauseData();
      for (const u of n) {
        if (i.broke || !r.playing || !i.playing || p !== i.playId)
          return;
        if (!(f !== void 0 && u.index < f))
          try {
            m.emit("playIndexChange", u.index, u), yield this.playKeyframe(u, {
              moveEffect: o === !1 ? i.moveToFirstPanoEffect : void 0,
              duration: o === !1 && typeof i.moveToFirstPanoDuration == "number" ? i.moveToFirstPanoDuration : void 0
            }), u.stay && (yield O(u.stay)), o === !1 && (o = !0);
          } catch (v) {
            return Promise.resolve("broke");
          }
      }
      r.playing && p === i.playId && (this.setState({ playing: !1 }, { userAction: !1 }), m.emit("end"), this.clearPauseData());
    });
  }
  /**
   * @description: Pause and record pause state
   */
  handlePause(t) {
    var m;
    const { state: e, privateState: r, hooks: i } = this;
    e.playing = !1, r.playing !== !1 && (r.playing = !1, (t == null ? void 0 : t.userAction) !== !1 && this.setPauseData(), r.broke || this.forceInteruptUpdateCamera(), (t == null ? void 0 : t.notEmitEvent) !== !0 && i.emit("pause", { userAction: (m = t == null ? void 0 : t.userAction) != null ? m : !0 }));
  }
  /**
   * @description: Change play speed
   */
  changeSpeed(t, e = !0) {
    var n;
    const { state: r, privateState: i, hooks: m } = this, { currentPlayKeyframe: p } = i;
    if (m.emit("speedChange", t, { userAction: e }), r.playing && p)
      try {
        const a = p.originDuration !== void 0 ? p.originDuration * (1 - this.getProgress()) : void 0, o = p.keyframe, { privateState: s } = this;
        ((n = this.privateState.currentPlayKeyframe) == null ? void 0 : n.keyframe.id) !== o.id && (this.privateState.currentPlayKeyframe = { keyframe: o }), s.currentPlayQueue.push(this.getPlayPromise(o, { duration: a }));
      } catch (a) {
        console.error(a);
      }
  }
  /**
   * @description Get ratate progress
   */
  getProgress() {
    return this.five.controller.cameraMotion.progress;
  }
  /**
   * @description Set pause data
   */
  setPauseData() {
    var t, e, r;
    if ((t = this.data) != null && t.id)
      return this.pauseDataMap.set(this.data.id, {
        id: (e = this.privateState.currentPlayKeyframe) == null ? void 0 : e.keyframe.id,
        fiveState: this.five.getCurrentState(),
        duration: (r = this.privateState.currentPlayKeyframe) == null ? void 0 : r.originDuration,
        playedProgress: this.getProgress()
      });
  }
  /**
   * @description: Restore state that before loaded
   */
  clear() {
    this.clearPauseData(), this.privateState.currentPlayKeyframe = null;
  }
  /**
   * @description Play single keyframe
   */
  playKeyframe(t, e) {
    return y(this, null, function* () {
      var i;
      const { privateState: r } = this;
      return ((i = this.privateState.currentPlayKeyframe) == null ? void 0 : i.keyframe.id) !== t.id && (this.privateState.currentPlayKeyframe = { keyframe: t }), r.currentPlayQueue.push(this.getPlayPromise(t, e)), this.actionPromiseQueue();
    });
  }
  /**
   * @description: getPlayPromise
   */
  getPlayPromise(r) {
    return y(this, arguments, function* (t, e = {}) {
      var m;
      const i = t.data;
      if (e.duration = (m = e.duration) != null ? m : t.start !== void 0 && t.end !== void 0 ? t.end - t.start : void 0, !!i)
        return new Promise((p, n) => {
          let a = !1;
          this.addInterruptListener(() => {
            if (!a)
              return this.hooks.emit("broke"), this.privateState.broke = !0, this.setState({ playing: !1 }), a = !0, n(new Error("play is interupted"));
          });
          try {
            if (a)
              return;
            const o = () => {
              p(), a = !0;
            };
            switch (i.effect) {
              case "Move":
                this.move(i, e).then(o);
                break;
              case "Rotate":
                this.rotate(i, e).then(o);
                break;
              default:
                this.rotate(i, e).then(o);
            }
          } catch (o) {
          }
        });
    });
  }
  /**
   * @description Action promise queue in sequence
   */
  actionPromiseQueue() {
    return y(this, null, function* () {
      const { privateState: t } = this;
      return new Promise((e, r) => {
        if (t.currentPlayQueue.length === 0) {
          e();
          return;
        }
        const i = t.currentPlayQueue.shift();
        if (!i) {
          e();
          return;
        }
        i.then(e, r);
      }).then(() => t.currentPlayQueue.length === 0 ? Promise.resolve() : this.actionPromiseQueue());
    });
  }
  /**
   * @description Action move keyframe
   */
  move(t, e) {
    return y(this, null, function* () {
      if (t.mode && t.mode !== this.five.currentMode)
        yield this.changeMode(t);
      else if (t.panoIndex !== this.five.panoIndex)
        yield this.changePano(t, e);
      else
        return Promise.resolve();
    });
  }
  /**
   * @description Action rotate keyframe
   */
  rotate(t, e) {
    return y(this, null, function* () {
      if (t.mode && t.mode !== this.five.currentMode)
        yield this.changeMode({ mode: t.mode, panoIndex: t.panoIndex });
      else if (t.panoIndex && t.panoIndex !== this.five.panoIndex)
        return yield this.changePano(t, e);
      yield this.updateCamera(t, e);
    });
  }
  /**
   * @description Update five camera
   */
  updateCamera(r) {
    return y(this, arguments, function* (t, e = {}) {
      const { five: i, privateState: m, state: p } = this, n = (() => {
        var d, u;
        const s = (d = p.config) == null ? void 0 : d.speedConfig, f = (u = t.rotateSpeed) != null ? u : s == null ? void 0 : s.rotateSpeed;
        if ((s == null ? void 0 : s.rotateSpeedUnit) === void 0)
          return f;
        if (f !== void 0)
          return s.rotateSpeedUnit === "rad/ms" ? f : f / 1e3;
      })(), a = (() => {
        if (e.duration)
          return e.duration;
        if (n) {
          const s = this.five.getCurrentState();
          return L(s, t) / n;
        }
        return 800;
      })();
      m.currentPlayKeyframe && (m.currentPlayKeyframe.originDuration = a);
      const o = this.getSpeededDuration(a);
      return new Promise((s) => {
        T(() => i.updateCamera(t, o)), setTimeout(() => s(), o);
      });
    });
  }
  /**
   * @description: Change five pano
   */
  changePano(t, e) {
    return y(this, null, function* () {
      const { five: r, privateState: i, state: m } = this;
      if (typeof t.panoIndex != "number" || t.panoIndex === r.panoIndex)
        return;
      const p = r.getCurrentState().mode !== "Panorama";
      p && (this.privateState.modeChanging = !0);
      const n = (() => {
        var f, d;
        const o = (f = m.config) == null ? void 0 : f.speedConfig, s = (d = t.moveSpeed) != null ? d : o == null ? void 0 : o.moveSpeed;
        if ((o == null ? void 0 : o.moveSpeedUnit) === void 0)
          return s;
        if (s !== void 0)
          return o.moveSpeedUnit === "m/ms" ? s : s / 1e3;
      })(), a = (() => {
        if (e != null && e.duration)
          return e.duration;
        if (n && typeof r.panoIndex == "number" && typeof t.panoIndex == "number") {
          const o = this.workUtil.getObserverPosition(r.panoIndex), s = this.workUtil.getObserverPosition(t.panoIndex);
          return o && s ? o.distanceTo(s) / n : 800;
        }
        return 800;
      })();
      i.currentPlayKeyframe && (i.currentPlayKeyframe.originDuration = a), yield new Promise((o) => {
        var f, d, u;
        const s = this.fiveUtil.moveToPano(t.panoIndex, {
          latitude: t.latitude,
          longitude: t.longitude,
          fov: t.fov,
          duration: this.getSpeededDuration(a),
          effect: (u = (d = e == null ? void 0 : e.moveEffect) != null ? d : (f = this.state.config) == null ? void 0 : f.moveEffect) != null ? u : t.moveEffect,
          moveCancelCallback: () => o(),
          moveEndCallback: () => o()
        });
        s instanceof Promise && s.then(() => o()), p && r.once("panoArrived", () => o());
      }), p && (this.privateState.modeChanging = !1);
    });
  }
  /**
   * @description Change five mode
   */
  changeMode(t, e) {
    return y(this, null, function* () {
      t.mode && t.mode !== this.five.currentMode && (this.privateState.modeChanging = !0, yield this.five.changeMode(t.mode, t, e), this.privateState.modeChanging = !1);
    });
  }
}
export {
  ao as default
};
