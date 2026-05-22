var T = Object.defineProperty, x = Object.defineProperties;
var D = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, F = Object.prototype.propertyIsEnumerable;
var d = (m, i, t) => i in m ? T(m, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : m[i] = t, u = (m, i) => {
  for (var t in i || (i = {}))
    E.call(i, t) && d(m, t, i[t]);
  if (k)
    for (var t of k(i))
      F.call(i, t) && d(m, t, i[t]);
  return m;
}, c = (m, i) => x(m, D(i));
var n = (m, i, t) => (d(m, typeof i != "symbol" ? i + "" : i, t), t);
var w = (m, i, t) => new Promise((r, p) => {
  var e = (o) => {
    try {
      a(t.next(o));
    } catch (s) {
      p(s);
    }
  }, h = (o) => {
    try {
      a(t.throw(o));
    } catch (s) {
      p(s);
    }
  }, a = (o) => o.done ? r(o.value) : Promise.resolve(o.value).then(e, h);
  a((t = t.apply(m, i)).next());
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
import "../shared-utils/three/blink.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../vendor/earcut/src/earcut.js";
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
import "../shared-utils/url/defaultUrls.js";
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
import "../shared-utils/five/getFiveFromParentChain.js";
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
import "../vendor/animejs/lib/anime.es.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
import "../shared-utils/vectorToCoordinate.js";
import "../shared-utils/formatRad.js";
import "../GuideLinePlugin/Controller.js";
import "../base/BasePluginWithData.js";
import "../shared-utils/url/replace-static-prefix.js";
import "../shared-utils/url/absoluteUrl.js";
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
import "../PanoTagPlugin/Components/Tag/Assets/marketingIcon.js";
import "../PanoTagPlugin/utils/noTypecheck.js";
import "../PanoTagPlugin/Components/Tag/AudioTag/index.js";
import "../PanoTagPlugin/Components/Tag/AudioTag/AudioTag.js";
import "../PanoTagPlugin/Components/Common/Audio.js";
import "../PanoTagPlugin/utils/audio/SharedAudio.js";
import "../PanoTagPlugin/utils/audio/AudioDiagnostics.js";
import "../PanoTagPlugin/Components/Common/Icon/audioIcon.js";
import "../PanoTagPlugin/Components/Tag/AudioTag/AudioPlaneTag.js";
import "../PanoTagPlugin/Components/Tag/MediaPlane.js";
import "../PanoTagPlugin/Components/Tag/LinkTag.js";
import "../PanoTagPlugin/Components/Common/Icon/Icon.js";
import "../PanoTagPlugin/utils/getImageInfo.js";
import "../PanoTagPlugin/Components/Common/Icon/animationUtils.js";
import "../PanoTagPlugin/Components/Tag/PanoramaTag.js";
import "../PanoTagPlugin/Components/Common/Icon/PanoramaIcon.js";
import "../PanoTagPlugin/Components/Tag/CustomTag.js";
import "../vendor/classnames/index.js";
import "../PanoTagPlugin/controller/Tag/PlaneTag.js";
import "../Sculpt/index.js";
import "../Sculpt/utils/Modules/Global.js";
import "../Sculpt/utils/Modules/Cursor.js";
import "../Sculpt/utils/Modules/DeleteButtonBgBorder.js";
import "../Sculpt/utils/Modules/DeleteIconSVG.js";
import "../Object3DHelperPlugin/Controller.js";
import "../shared-utils/Object3DHelper/Helper/MoveHelper.js";
import "../shared-utils/Object3DHelper/Base/BaseHelper.js";
import "../shared-utils/Object3DHelper/utils/setObjectQuaternion.js";
import "../shared-utils/three/boundingBox.js";
import "../shared-utils/Object3DHelper/Helper/Objects/ArrowGroup.js";
import "../shared-utils/Object3DHelper/utils/direction.js";
import "../shared-utils/Object3DHelper/Constants/RenderOrder.js";
import "../shared-utils/Object3DHelper/Helper/Objects/CenterHandle.js";
import "../shared-utils/Object3DHelper/Constants/color.js";
import "../shared-utils/Object3DHelper/utils/calculateScaleByCamera.js";
import "../shared-utils/Object3DHelper/utils/getPoseFromCamera.js";
import "../shared-utils/clamp.js";
import "../shared-utils/Object3DHelper/utils/getOrthographicCameraDirection.js";
import "../shared-utils/Object3DHelper/Helper/RotateHelper.js";
import "../shared-utils/Object3DHelper/Helper/HTML/tipsDom.js";
import "../shared-utils/Object3DHelper/Helper/HTML/utils/createElement.js";
import "../shared-utils/Object3DHelper/Helper/CSS3DScaleHelper.js";
import "../shared-utils/Object3DHelper/Helper/HTML/rectangleScaleDom.js";
import "../shared-utils/Object3DHelper/utils/cameraHooks.js";
import "../shared-utils/Object3DHelper/Helper/BoundingBoxHelper.js";
import "../shared-utils/Object3DHelper/Controller/MoveController.js";
import "../shared-utils/Object3DHelper/Base/BaseController.js";
import "../shared-utils/Object3DHelper/utils/solidGuide.js";
import "../shared-utils/Object3DHelper/utils/getMouseRaycaster.js";
import "../shared-utils/Object3DHelper/utils/calculateThreeMouse.js";
import "../Object3DHelperPlugin/FiveControllerWrapper.js";
import "../shared-utils/Object3DHelper/index.js";
import "../shared-utils/Object3DHelper/Controller/RotateController.js";
import "../shared-utils/math/rad2Deg.js";
import "../shared-utils/math/deg2Rad.js";
import "../shared-utils/Object3DHelper/Controller/CSS3DScaleController.js";
import "../shared-utils/Object3DHelper/Controller/RectangleScaleController.js";
import "../shared-utils/three/vectorIsEqual.js";
import "../shared-utils/Object3DHelper/Controller/BoundingBoxController.js";
import "../shared-utils/Object3DHelper/Helper/ScaleHelper.js";
import "../shared-utils/Object3DHelper/Controller/ScaleController.js";
import "../shared-utils/threex/domevents/index.js";
import "../shared-utils/three/recurveFindObject.js";
import "../Sculpt/Objects/Polyline/index.js";
import "../Sculpt/Meshes/Polyline.js";
import "../Sculpt/Meshes/LineWithDots.js";
import "../Sculpt/Meshes/Point.js";
import "../shared-utils/three/closeVectors.js";
import "../Sculpt/Objects/Base/index.js";
import "../vendor/hotkeys-js/dist/hotkeys.esm.js";
import "../Sculpt/Objects/Polyline/Editor.js";
import "../Sculpt/Objects/Line/Editor.js";
import "../Sculpt/Objects/Base/Editor.js";
import "../shared-utils/three/vector3ToArray.js";
import "../Sculpt/Objects/Point/index.js";
import "../Sculpt/Objects/Point/Editor.js";
import "../Sculpt/Objects/Polygon/index.js";
import "../Sculpt/Meshes/Area.js";
import "../Sculpt/Meshes/PolygonWithEdge.js";
import "../Sculpt/Meshes/Polygon.js";
import "../shared-utils/three/generatePolygonGeometry.js";
import "../shared-utils/three/earcut3D.js";
import "../PanoMeasurePlugin/utils/isIntersecting.js";
import "../Sculpt/utils/three/ColoredMesh.js";
import "../shared-utils/three/geometryUtil.js";
import "../Sculpt/Objects/Polygon/Editor.js";
import "../Sculpt/utils/isIntersecting.js";
import "../Sculpt/Objects/Prism/index.js";
import "../Sculpt/Meshes/Prism.js";
import "../shared-utils/three/core/PrismGeometry.js";
import "../shared-utils/three/core/polygonVertex.js";
import "../shared-utils/three/core/PrismAnimationGeometry.js";
import "../Sculpt/Editors/PrismMeshEditor.js";
import "../Sculpt/Objects/Rectangle/index.js";
import "../Sculpt/Editors/RectangleMeshEditor.js";
import "../Sculpt/Meshes/Rectangle.js";
import "../Sculpt/utils/three/RectangleGeometry.js";
import "../Sculpt/Meshes/RectangleWithEdge.js";
import "../Sculpt/utils/sortPositionsByCameraPosition.js";
import "../Sculpt/Objects/Circle/index.js";
import "../Sculpt/Editors/CircleMeshEditor.js";
import "../Sculpt/Meshes/CircleWithEdge.js";
import "../Sculpt/Meshes/Circle.js";
import "../Sculpt/utils/radiusToSegments.js";
import "../Sculpt/Objects/Cylinder/index.js";
import "../Sculpt/Meshes/Cylinder.js";
import "../Sculpt/Editors/CylinderMeshEditor.js";
import "../Sculpt/Objects/Box/index.js";
import "../Sculpt/Editors/BoxMeshEditor.js";
import "../Sculpt/Meshes/Box.js";
import "../shared-utils/forReverseEach.js";
import "../Sculpt/Objects/Line/index.js";
import "../shared-utils/five/getFloorMesh.js";
import "../PanoTagPlugin/controller/Tag/BoxTag.js";
import "../PanoTagPlugin/utils/sculptDataToBoxPosition.js";
import "../PanoTagPlugin/controller/Tag/PolygonTag.js";
import "../PanoTagPlugin/controller/Tag/MaskTag.js";
import "../PanoTagPlugin/controller/Tag/MaskTag.shaders.js";
import "../PanoTagPlugin/Components/TagContainer.js";
import "../PanoTagPlugin/Components/TagItem.js";
import "../PanoTagPlugin/Components/Common/TagPoint.js";
import "../PanoTagPlugin/Components/Tag/AudioTag/AudioPoint.js";
import "../PanoTagPlugin/Components/Common/TagPopover/index.js";
import "../PanoTagPlugin/Components/Common/TagPopover/PopoverContent.js";
import "../PanoTagPlugin/Components/Common/TagPopover/TagPopoverArrow.js";
import "../PanoTagPlugin/Components/Common/Icon/tag-popover-arrow-base64.js";
import "../PanoTagPlugin/Components/Common/TagPopover/TagPopup.js";
import "../PanoTagPlugin/Components/Common/VideoIcon.js";
import "../PanoTagPlugin/Components/Common/TagPopover/PanoramaIcon.js";
import "../PanoTagPlugin/utils/videoHelper.js";
import "../PanoTagPlugin/Components/Common/AudioPlayer.js";
import "../PanoTagPlugin/Components/Common/TagPopover/TagPopoverToolBar.js";
import "../PanoTagPlugin/Components/Common/TagPopover/ArrowRightIcon.js";
import "../PanoTagPlugin/Components/Common/TagPopover/ShareIcon.js";
import "../PanoTagPlugin/utils/popoverContainer.js";
import "../GuideLinePlugin/Components/Tag.js";
import "../shared-utils/fontSize.js";
import "../shared-utils/px2rem.js";
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
class pe extends z {
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
      const p = 1 - r, e = this.getDuration(), a = (performance.now() - this.playStartedTime) / e;
      return 1 - p + a;
    });
    const p = {
      config: {
        speedConfig: {
          moveSpeed: 2,
          moveSpeedUnit: "m/s"
        }
      }
    }, e = {
      allowBroke: !0
    };
    this.state = g({}, p, this.state), this.config = g({}, e, this.config), this.baseCurveOffset = g({ x: 0, y: 0, z: 0 }, { y: 2 }, (h = this.config) == null ? void 0 : h.offset);
  }
  load(t, r) {
    var a, o, s, f, y, S, C, P, b;
    this.handlePause(), this.clear(), this.data = u({ id: A() }, t);
    const p = (() => {
      if (this.data.path instanceof L.Curve)
        return this.data.path.curves[0];
      {
        if (this.data.path.length < 2)
          return null;
        const l = this.data.path.map(O);
        return new L.CatmullRomCurve3(l, void 0, "catmullrom", 0.5);
      }
    })();
    if (!p)
      return;
    if (this.curve = p, this.curveOffset = {
      x: this.baseCurveOffset.x + ((o = (a = this.data.offset) == null ? void 0 : a.x) != null ? o : 0),
      y: this.baseCurveOffset.y + ((f = (s = this.data.offset) == null ? void 0 : s.y) != null ? f : 0),
      z: this.baseCurveOffset.z + ((S = (y = this.data.offset) == null ? void 0 : y.z) != null ? S : 0)
    }, !this.curve)
      throw new Error("curve is not defined");
    const e = this.curve.getLength(), h = this.state.config.speedConfig.moveSpeedUnit === "m/ms" ? 1 : 1e3;
    if (this.duration = e / (this.state.config.speedConfig.moveSpeed / h), Array.isArray(this.data.path)) {
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
      const p = this.getPauseData();
      let e = (o = p == null ? void 0 : p.playedProgress) != null ? o : 0;
      (e < 0 || e >= 1) && (e = 0);
      const h = v(this.curve, e, this.curveOffset);
      if (this.hooks.emit("progressChange", e), this.five.setState(c(u({}, h), { mode: "Model" })), yield this.five.ready(), this.playStartedTime = performance.now(), this.config.allowBroke) {
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
  pe as default
};
