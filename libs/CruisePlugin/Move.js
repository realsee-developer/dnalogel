var T = Object.defineProperty, x = Object.defineProperties;
var D = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, F = Object.prototype.propertyIsEnumerable;
var d = (e, i, t) => i in e ? T(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t, u = (e, i) => {
  for (var t in i || (i = {}))
    E.call(i, t) && d(e, t, i[t]);
  if (k)
    for (var t of k(i))
      F.call(i, t) && d(e, t, i[t]);
  return e;
}, c = (e, i) => x(e, D(i));
var n = (e, i, t) => (d(e, typeof i != "symbol" ? i + "" : i, t), t);
var w = (e, i, t) => new Promise((r, s) => {
  var m = (o) => {
    try {
      a(t.next(o));
    } catch (p) {
      s(p);
    }
  }, h = (o) => {
    try {
      a(t.throw(o));
    } catch (p) {
      s(p);
    }
  }, a = (o) => o.done ? r(o.value) : Promise.resolve(o.value).then(m, h);
  a((t = t.apply(e, i)).next());
});
import z from "./BaseController.js";
import { objectAssignDeepExports as g } from "../vendor/object-assign-deep/objectAssignDeep.js";
import * as L from "three";
import "hammerjs";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { uuid as O } from "../shared-utils/uuid.js";
import { getFiveStateOnCurve as v } from "./utils/getFiveStateOnCurve.js";
import { anyPositionToVector3 as A } from "../shared-utils/positionToVector3.js";
import M from "../GuideLinePlugin/index.js";
import "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/equal.js";
import "../shared-utils/isTruelyObject.js";
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
import "../shared-utils/vectorToCoordinate.js";
import "../shared-utils/formatRad.js";
import "../GuideLinePlugin/Controller.js";
import "../base/BasePluginWithData.js";
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
import "../shared-utils/isNil.js";
import "../shared-utils/animationFrame/BetterTween.js";
import "../shared-utils/animationFrame/index.js";
import "../shared-utils/three/loadTexture.js";
import "../PanoTagPlugin/controller/index.js";
import "@realsee/five";
import "../PanoTagPlugin/utils/addDebugPoints.js";
import "../PanoTagPlugin/utils/tag/tagCheck.js";
import "../PanoTagPlugin/utils/debounce.js";
import "../PanoTagPlugin/utils/throttle.js";
import "../PanoTagPlugin/utils/tag/format.js";
import "../shared-utils/audio.js";
import "../shared-utils/dom/resizeObserver.js";
import "../PanoTagPlugin/controller/TagRender.js";
import "../PanoTagPlugin/controller/TagComputer.js";
import "../PanoTagPlugin/utils/tagPosition.js";
import "../PanoTagPlugin/utils/checkRange.js";
import "../PanoTagPlugin/controller/TagUtil.js";
import "../PanoTagPlugin/typings/tag/TagConfig.js";
import "../PanoTagPlugin/tag.config.js";
import "../PanoTagPlugin/utils/planeNormal.js";
import "../PanoTagPlugin/utils/normalPositionToPositions.js";
import "../PanoTagPlugin/controller/TagCache.js";
import "../vendor/svelte/store/index.js";
import "../vendor/svelte/internal/index.js";
import "../shared-utils/device.js";
import "../CSS3DRenderPlugin/index.js";
import "../CSS3DRenderPlugin/Controller.js";
import "../shared-utils/five/fiveModelLoad.js";
import "../PanoTagPlugin/utils/model/mediaPlane.js";
import "../shared-utils/three/Quadrangle.js";
import "../shared-utils/math/pointIsRectangle.js";
import "../shared-utils/three/loadVideoTexture.js";
import "../PanoTagPlugin/Assets/Icon.js";
import "../shared-utils/three/getPositionsByObjectFit.js";
import "../shared-utils/three/FragmentTransparencyMaterial.js";
import "../shared-utils/three/getNormal.js";
import "../shared-utils/five/FiveDomEvents.js";
import "../shared-utils/five/calculateThreeMouse.js";
import "../PanoTagPlugin/utils/tag/adaptConfig.js";
import "../shared-utils/typescript/entries.js";
import "../shared-utils/url/getUrl.js";
import "../shared-utils/five/getFloorIndex.js";
import "../shared-utils/safeObj.js";
import "../PanoTagPlugin/Components/TagContainer.js";
import "../PanoTagPlugin/Components/TagItem.js";
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
import "../PanoTagPlugin/Components/Tag/CustomTag.js";
import "../vendor/classnames/index.js";
import "../PanoTagPlugin/Components/Common/TagPoint.js";
import "../shared-utils/three/GLTFLoader.js";
import "@realsee/five/gltf-loader";
import "../PanoTagPlugin/utils/DebugUtil.js";
import "./utils/sleep.js";
import "../GuideLinePlugin/Components/Tag.js";
import "../GuideLinePlugin/utils/index.js";
import "../shared-utils/to.js";
import "../shared-utils/five/changeMode.js";
import "../shared-utils/nearlyEqual.js";
import "./Move.js";
import "./Work.js";
import "./utils/coordinatesAngle.js";
import "./utils/coordinatesToVector.js";
import "./utils/safeCall.js";
import "../shared-utils/five/fiveLoaded.js";
class io extends z {
  constructor(t, r) {
    var h;
    super(t, r);
    n(this, "curve");
    n(this, "baseCurveOffset");
    n(this, "curveOffset");
    n(this, "playStartedTime", performance.now());
    n(this, "duration");
    n(this, "changeSpeed", (t, r = !0) => {
      this.state.speed = t, this.hooks.emit("speedChange", t, { userAction: r });
    });
    n(this, "moveToStart", () => {
      this.five.setState(c(u({}, v(this.curve, 0, this.curveOffset)), { mode: "Model" }));
    });
    n(this, "playFromStart", () => {
      this.clearPauseData(), this.setState({ playing: !0 });
    });
    n(this, "getDuration", () => this.getSpeededDuration(this.duration));
    n(this, "getProgress", () => {
      var o;
      const t = this.getPauseData();
      let r = (o = t == null ? void 0 : t.playedProgress) != null ? o : 0;
      (r < 0 || r >= 1) && (r = 0);
      const s = 1 - r, m = this.getDuration(), a = (performance.now() - this.playStartedTime) / m;
      return 1 - s + a;
    });
    const s = {
      config: {
        speedConfig: {
          moveSpeed: 2,
          moveSpeedUnit: "m/s"
        }
      }
    }, m = {
      allowBroke: !0
    };
    this.state = g({}, s, this.state), this.config = g({}, m, this.config), this.baseCurveOffset = g({ x: 0, y: 0, z: 0 }, { y: 2 }, (h = this.config) == null ? void 0 : h.offset);
  }
  load(t, r) {
    var a, o, p, f, y, S, C, P, b;
    this.handlePause(), this.clear(), this.data = u({ id: O() }, t);
    const s = (() => {
      if (this.data.path instanceof L.Curve)
        return this.data.path.curves[0];
      {
        if (this.data.path.length < 2)
          return null;
        const l = this.data.path.map(A);
        return new L.CatmullRomCurve3(l, void 0, "catmullrom", 0.5);
      }
    })();
    if (!s)
      return;
    if (this.curve = s, this.curveOffset = {
      x: this.baseCurveOffset.x + ((o = (a = this.data.offset) == null ? void 0 : a.x) != null ? o : 0),
      y: this.baseCurveOffset.y + ((f = (p = this.data.offset) == null ? void 0 : p.y) != null ? f : 0),
      z: this.baseCurveOffset.z + ((S = (y = this.data.offset) == null ? void 0 : y.z) != null ? S : 0)
    }, !this.curve)
      throw new Error("curve is not defined");
    const m = this.curve.getLength(), h = this.state.config.speedConfig.moveSpeedUnit === "m/ms" ? 1 : 1e3;
    if (this.duration = m / (this.state.config.speedConfig.moveSpeed / h), Array.isArray(this.data.path)) {
      const l = this.data.path.map(A).map((G) => G.toArray());
      !this.GuideLine && (((C = this.config) == null ? void 0 : C.useGuideLine) !== !1 && t.useGuildLine || (P = this.config) != null && P.useGuideLine && t.useGuildLine !== !1) && (this.GuideLine = M(this.five, this.config)), (b = this.GuideLine) == null || b.load({
        lines: [
          {
            id: O(),
            path: [{ type: "CatmullRomCurve3", points: l }],
            model_style: { visible: !0 }
          }
        ]
      });
    }
    return r ? this.setState(r) : (this.setState({ playing: !1 }), this.handleVisible(this.state.visible), this.handleEnable(this.state.enabled), this.changePlayState(this.state.playing), this.changeSpeed(this.state.speed)), Promise.resolve();
  }
  handlePlay() {
    return new Promise((t, r) => w(this, null, function* () {
      var o;
      this.hooks.emit("play", { userAction: !0 });
      const s = this.getPauseData();
      let m = (o = s == null ? void 0 : s.playedProgress) != null ? o : 0;
      (m < 0 || m >= 1) && (m = 0);
      const h = v(this.curve, m, this.curveOffset);
      if (this.hooks.emit("progressChange", m), this.five.setState(c(u({}, h), { mode: "Model" })), yield this.five.ready(), this.playStartedTime = performance.now(), this.config.allowBroke) {
        const p = this.addInterruptListener(() => {
          this.state.playing && (this.hooks.emit("broke"), this.handlePause(), p(), r(new Error("broke")));
        });
      }
      const a = () => {
        const p = this.getProgress();
        if (p >= 1)
          this.five.off("renderFrame", a), this.setState({ playing: !1 }, { userAction: !1 }), this.hooks.emit("end"), this.hooks.emit("progressChange", 1), t("end");
        else if (this.state.playing === !1)
          this.five.off("renderFrame", a);
        else if (p >= 0) {
          const f = v(this.curve, p, this.curveOffset);
          this.hooks.emit("progressChange", p), this.five.setState(f, !0);
        }
      };
      this.five.on("renderFrame", a);
    }));
  }
  handlePause(t) {
    var r;
    this.state.playing = !1, this.hooks.emit("pause", { userAction: (r = t == null ? void 0 : t.userAction) != null ? r : !0 }), this.setPauseData();
  }
}
export {
  io as default
};
