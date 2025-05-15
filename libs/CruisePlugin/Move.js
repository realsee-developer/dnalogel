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
var w = (e, i, t) => new Promise((r, m) => {
  var p = (o) => {
    try {
      a(t.next(o));
    } catch (s) {
      m(s);
    }
  }, h = (o) => {
    try {
      a(t.throw(o));
    } catch (s) {
      m(s);
    }
  }, a = (o) => o.done ? r(o.value) : Promise.resolve(o.value).then(p, h);
  a((t = t.apply(e, i)).next());
});
import z from "./BaseController.js";
import { objectAssignDeepExports as g } from "../vendor/object-assign-deep/objectAssignDeep.js";
import * as L from "three";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { anyPositionToVector3 as O } from "../shared-utils/positionToVector3.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { uuid as A } from "../shared-utils/uuid.js";
import "../shared-utils/five/FivePuppet.js";
import { getFiveStateOnCurve as v } from "./utils/getFiveStateOnCurve.js";
import M from "../GuideLinePlugin/index.js";
import "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/equal.js";
import "../shared-utils/isTruelyObject.js";
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
import "../shared-utils/animationFrame/BetterTween.js";
import "../shared-utils/animationFrame/index.js";
import "../shared-utils/three/loadTexture.js";
import "../PanoTagPlugin/controller/index.js";
import "../PanoTagPlugin/utils/tag/tagCheck.js";
import "../PanoTagPlugin/utils/debounce.js";
import "../PanoTagPlugin/utils/throttle.js";
import "../PanoTagPlugin/utils/tag/format.js";
import "../shared-utils/audio.js";
import "../PanoTagPlugin/controller/TagRender.js";
import "../PanoTagPlugin/controller/TagUtil.js";
import "../PanoTagPlugin/typings/tag/TagConfig.js";
import "../PanoTagPlugin/tag.config.js";
import "../PanoTagPlugin/utils/normalPositionToPositions.js";
import "../vendor/svelte/store/index.js";
import "../vendor/svelte/internal/index.js";
import "../shared-utils/device.js";
import "../PanoTagPlugin/utils/model/mediaPlane.js";
import "../shared-utils/three/Quadrangle.js";
import "../shared-utils/math/pointsIsRectangle.js";
import "../shared-utils/three/loadVideoTexture.js";
import "../PanoTagPlugin/Assets/Icon.js";
import "../shared-utils/three/getPositionsByObjectFit.js";
import "../shared-utils/three/FragmentTransparencyMaterial.js";
import "../shared-utils/three/getNormal.js";
import "../shared-utils/constants.js";
import "../shared-utils/five/FiveDomEvents.js";
import "../shared-utils/five/calculateThreeMouse.js";
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
import "../shared-utils/promise/withResolvers.js";
import "../PanoTagPlugin/controller/Tag/ModelTag.js";
import "../shared-utils/CSS3DRender/CSS3DObject.js";
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
import "../GuideLinePlugin/Components/Tag.js";
import "../GuideLinePlugin/utils/index.js";
import "../GuideLinePlugin/utils/createPath.js";
import "../shared-utils/to.js";
import "../shared-utils/five/changeMode.js";
import "../shared-utils/nearlyEqual.js";
import "./Move.js";
import "./Work.js";
import "./utils/coordinatesAngle.js";
import "./utils/coordinatesToVector.js";
import "./utils/safeCall.js";
import "./utils/sleep.js";
import "../shared-utils/five/fiveLoaded.js";
class oe extends z {
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
      const m = 1 - r, p = this.getDuration(), a = (performance.now() - this.playStartedTime) / p;
      return 1 - m + a;
    });
    const m = {
      config: {
        speedConfig: {
          moveSpeed: 2,
          moveSpeedUnit: "m/s"
        }
      }
    }, p = {
      allowBroke: !0
    };
    this.state = g({}, m, this.state), this.config = g({}, p, this.config), this.baseCurveOffset = g({ x: 0, y: 0, z: 0 }, { y: 2 }, (h = this.config) == null ? void 0 : h.offset);
  }
  load(t, r) {
    var a, o, s, f, y, S, C, P, b;
    this.handlePause(), this.clear(), this.data = u({ id: A() }, t);
    const m = (() => {
      if (this.data.path instanceof L.Curve)
        return this.data.path.curves[0];
      {
        if (this.data.path.length < 2)
          return null;
        const l = this.data.path.map(O);
        return new L.CatmullRomCurve3(l, void 0, "catmullrom", 0.5);
      }
    })();
    if (!m)
      return;
    if (this.curve = m, this.curveOffset = {
      x: this.baseCurveOffset.x + ((o = (a = this.data.offset) == null ? void 0 : a.x) != null ? o : 0),
      y: this.baseCurveOffset.y + ((f = (s = this.data.offset) == null ? void 0 : s.y) != null ? f : 0),
      z: this.baseCurveOffset.z + ((S = (y = this.data.offset) == null ? void 0 : y.z) != null ? S : 0)
    }, !this.curve)
      throw new Error("curve is not defined");
    const p = this.curve.getLength(), h = this.state.config.speedConfig.moveSpeedUnit === "m/ms" ? 1 : 1e3;
    if (this.duration = p / (this.state.config.speedConfig.moveSpeed / h), Array.isArray(this.data.path)) {
      const l = this.data.path.map(O).map((G) => G.toArray());
      !this.GuideLine && (((C = this.config) == null ? void 0 : C.useGuideLine) !== !1 && t.useGuildLine || (P = this.config) != null && P.useGuideLine && t.useGuildLine !== !1) && (this.GuideLine = M(this.five, this.config)), (b = this.GuideLine) == null || b.load({
        lines: [
          {
            id: A(),
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
      const m = this.getPauseData();
      let p = (o = m == null ? void 0 : m.playedProgress) != null ? o : 0;
      (p < 0 || p >= 1) && (p = 0);
      const h = v(this.curve, p, this.curveOffset);
      if (this.hooks.emit("progressChange", p), this.five.setState(c(u({}, h), { mode: "Model" })), yield this.five.ready(), this.playStartedTime = performance.now(), this.config.allowBroke) {
        const s = this.addInterruptListener(() => {
          this.state.playing && (this.hooks.emit("broke"), this.handlePause(), s(), r(new Error("broke")));
        });
      }
      const a = () => {
        const s = this.getProgress();
        if (s >= 1)
          this.five.off("renderFrame", a), this.setState({ playing: !1 }, { userAction: !1 }), this.hooks.emit("end"), this.hooks.emit("progressChange", 1), t("end");
        else if (this.state.playing === !1)
          this.five.off("renderFrame", a);
        else if (s >= 0) {
          const f = v(this.curve, s, this.curveOffset);
          this.hooks.emit("progressChange", s), this.five.setState(f, !0);
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
  oe as default
};
