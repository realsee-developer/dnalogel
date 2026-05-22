var K = Object.defineProperty, L = Object.defineProperties;
var A = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty, D = Object.prototype.propertyIsEnumerable;
var E = (h, f, t) => f in h ? K(h, f, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[f] = t, I = (h, f) => {
  for (var t in f || (f = {}))
    T.call(f, t) && E(h, t, f[t]);
  if (F)
    for (var t of F(f))
      D.call(f, t) && E(h, t, f[t]);
  return h;
}, k = (h, f) => L(h, A(f));
var C = (h, f, t) => (E(h, typeof f != "symbol" ? f + "" : f, t), t);
var g = (h, f, t) => new Promise((i, r) => {
  var o = (m) => {
    try {
      s(t.next(m));
    } catch (e) {
      r(e);
    }
  }, n = (m) => {
    try {
      s(t.throw(m));
    } catch (e) {
      r(e);
    }
  }, s = (m) => m.done ? i(m.value) : Promise.resolve(m.value).then(o, n);
  s((t = t.apply(h, f)).next());
});
import { GuideLinePlugin as U } from "../GuideLinePlugin/index.js";
import { uuid as x } from "../shared-utils/uuid.js";
import { coordinatesRotation as M } from "./utils/coordinatesAngle.js";
import { safeCall as O } from "./utils/safeCall.js";
import * as G from "three";
import { sleep as Q } from "./utils/sleep.js";
import { waitFiveLoaded as R } from "../shared-utils/five/fiveLoaded.js";
import { vectorToCoordinates as _ } from "../shared-utils/vectorToCoordinate.js";
import V from "./BaseController.js";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as W } from "../shared-utils/isNil.js";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../shared-utils/three/blink.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../vendor/earcut/src/earcut.js";
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
import "../shared-utils/url/defaultUrls.js";
import "../shared-utils/five/fiveModelLoad.js";
import "../shared-utils/url/replace-static-prefix.js";
import "../shared-utils/url/absoluteUrl.js";
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
import "../shared-utils/util.js";
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
import "../vendor/animejs/lib/anime.es.js";
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
import "../shared-utils/three/IObject3D.js";
import "../shared-utils/three/boundingBox.js";
import "../shared-utils/Object3DHelper/Helper/Objects/ArrowGroup.js";
import "../shared-utils/Object3DHelper/utils/direction.js";
import "../shared-utils/Object3DHelper/Constants/RenderOrder.js";
import "../shared-utils/Object3DHelper/Helper/Objects/CenterHandle.js";
import "../shared-utils/Object3DHelper/Constants/color.js";
import "../shared-utils/Object3DHelper/utils/calculateScaleByCamera.js";
import "../shared-utils/Object3DHelper/utils/getPoseFromCamera.js";
import "../shared-utils/clamp.js";
import "../shared-utils/formatRad.js";
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
import "../Sculpt/utils/three/rayOnLine.js";
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
import "../Sculpt/typings/style.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/five/getFiveFromParentChain.js";
import "../Sculpt/utils/renderDom.js";
import "../Sculpt/Meshes/Line.js";
import "../shared-utils/three/core/LineGeometry.js";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
import "../Sculpt/utils/unit.js";
import "../shared-utils/three/closeVectors.js";
import "../Sculpt/Objects/Base/index.js";
import "../vendor/hotkeys-js/dist/hotkeys.esm.js";
import "../Sculpt/Objects/Polyline/Editor.js";
import "../shared-utils/five/getPosition.js";
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
import "../shared-utils/five/fiveEveryReadyListener.js";
import "../shared-utils/throttle.js";
import "../GuideLinePlugin/Components/Tag.js";
import "../shared-utils/fontSize.js";
import "../shared-utils/px2rem.js";
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
import "../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "./Work.js";
import "./utils/coordinatesToVector.js";
class fm extends V {
  constructor(t, i) {
    super(t, i);
    C(this, "state", {
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
    C(this, "privateState", {
      playing: !1,
      currentPlayQueue: [],
      currentPlayKeyframe: null,
      broke: !1,
      modeChanging: !1
    });
    this.config = i, Object.assign(window, { __WalkPlugin_DEBUG__: this });
  }
  /**
   * @description Load Data and State
   */
  load(t, i, r) {
    return g(this, null, function* () {
      var a, p;
      this.clear();
      const o = this.data ? JSON.parse(JSON.stringify(this.data)) : void 0, n = yield this.formatData(t);
      this.data = I({ id: n.keyframesId }, n), this.hooks.emit("dataChange", n, o);
      let s = [], m;
      const e = this.data.keyframes.filter((u) => u.data.panoIndex !== void 0);
      e.filter((u, l) => {
        var d;
        return u.data.panoIndex !== ((d = e[l - 1]) == null ? void 0 : d.data.panoIndex);
      }).map((u) => u.data.panoIndex).forEach((u) => {
        var d, c;
        const l = (d = this.workUtil.getObserver(u)) == null ? void 0 : d.floorIndex;
        if (l !== void 0)
          if (m === l) {
            const v = s.length - 1;
            s[v] = [...(c = s[v]) != null ? c : [], u];
          } else {
            m = l;
            const v = s.length;
            s[v] = [u];
          }
      }), !this.GuideLine && ((a = this.config) == null ? void 0 : a.useGuideLine) !== !1 && n.useGuildLine !== !1 && (this.GuideLine = U(this.five, this.config)), (p = this.GuideLine) == null || p.load({ routes: s.map((u) => ({ panoIndexList: u })), config: n.guildPluginOptions }), i ? this.setState(i, { userAction: r }) : (this.setState({ playing: !1 }, { userAction: !1 }), this.handleVisible(this.state.visible), this.handleEnable(this.state.enabled), this.changePlayState(this.state.playing, { userAction: !1 }), this.changeSpeed(this.state.speed)), this.clearPauseData(), console.debug("WORKPLUGIN loaded", n), this.hooks.emit("dataLoaded", n);
    });
  }
  /**
   * @description If playing, first pause, then play from keyframes index/id
   * @param {number} options.index play from keyframes index
   * @param {string} options.id play from keyframes id
   */
  playFrom(t) {
    const { index: i, id: r, userAction: o } = t;
    this.state.playing && this.setState({ playing: !1 }, { userAction: o }), this.setState({ playing: !0 }, { userAction: o, playFromIndex: i, playFromId: r });
  }
  /**
   * @description Play from first keyframe
   */
  playFromStart(t) {
    return this.playFrom(k(I({}, t), { index: 0 }));
  }
  /**
   * @description Format data
   */
  formatData(t) {
    return g(this, null, function* () {
      this.five.work || (yield R(this.five));
      const i = (() => {
        const r = t;
        return typeof r == "object" && r !== null && W(r.version) && r.data ? r.data : r;
      })();
      if (i.keyframes)
        return {
          keyframesId: x(),
          keyframes: i.keyframes.map((r, o) => {
            var m;
            const n = i.keyframes[o + 1], s = (() => !n || n.start === void 0 || r.end === void 0 ? 0 : n.start - r.end)();
            return k(I({ id: (m = r.uuid) != null ? m : x(), moveIndex: o, stay: s, index: o }, r), { guildPluginOptions: i.guildPluginOptions });
          })
        };
      if (i.panoIndexList) {
        let r = [];
        const { moveEffect: o, moveToFirstPanoEffect: n, moveToFirstPanoDuration: s } = i;
        return this.privateState.moveToFirstPanoEffect = n, this.privateState.moveToFirstPanoDuration = s, i.panoIndexList.forEach((m, e) => {
          const a = (() => {
            var c, v;
            const p = i.panoIndexList.slice(e).find((w) => w !== m);
            if (p === void 0)
              return;
            const u = this.workUtil.getObserverPosition(m), l = this.workUtil.getObserverPosition(p);
            if (!l || !u || ((c = this.workUtil.getObserver(m)) == null ? void 0 : c.floorIndex) !== ((v = this.workUtil.getObserver(p)) == null ? void 0 : v.floorIndex))
              return;
            const d = new G.Vector3().subVectors(l, u);
            return _(d.normalize());
          })();
          i.moveType === void 0 || i.moveType === "justMove" ? r.push({
            moveIndex: e,
            stay: i.stay,
            data: I({ effect: "Move", panoIndex: m, moveEffect: o }, a != null ? a : {})
          }) : i.moveType === "moveAndRotate" && (r.push({ moveIndex: e, stay: i.stay, data: { effect: "Move", panoIndex: m, moveEffect: o } }), a && r.push({ moveIndex: e, stay: i.stay, data: I({ effect: "Rotate", panoIndex: m }, a) }));
        }), {
          keyframesId: x(),
          keyframes: r.map((m, e) => I({ id: x(), index: e }, m)),
          guildPluginOptions: i.guildPluginOptions,
          useGuildLine: i.useGuildLine
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
    return g(this, null, function* () {
      var d, c, v, w;
      const { data: i, state: r, privateState: o, hooks: n } = this;
      if (o.playing || !(i != null && i.keyframes) || (i == null ? void 0 : i.keyframes.length) === 0)
        return;
      const s = x();
      o.playId = s, o.audio && o.audio.paused && (((c = this.data) == null ? void 0 : c.keyframes[(d = t == null ? void 0 : t.playFromIndex) != null ? d : 0]).data.effect === "Move" ? this.privateState.audio && (this.privateState.audio.pause(), this.privateState.audio.currentTime = 0, this.privateState.audio = null) : o.audio.play()), o.playing = !0, o.broke = !1;
      const m = i.keyframes, e = this.getPauseData();
      (t == null ? void 0 : t.notEmitEvent) !== !0 && n.emit("play", { userAction: (v = t == null ? void 0 : t.userAction) != null ? v : !0 });
      let a = !1;
      const u = yield (() => g(this, null, function* () {
        var y, S;
        if ((t == null ? void 0 : t.playFromIndex) !== void 0)
          return t.playFromIndex;
        if ((t == null ? void 0 : t.playFromId) !== void 0)
          return (y = this.data) == null ? void 0 : y.keyframes.findIndex((P) => P.id === t.playFromId);
        if (e != null && e.id) {
          const P = (S = this.data) == null ? void 0 : S.keyframes.find((b) => b.id === e.id);
          if (e != null && e.fiveState && (yield this.move(e.fiveState, {
            moveEffect: o.moveToFirstPanoEffect,
            duration: o.moveToFirstPanoDuration
          })), P) {
            if (P.data.effect === "Move")
              return P.index;
            if (P.data.effect === "Rotate") {
              const b = e.duration !== void 0 ? e.duration * (1 - e.playedProgress) : void 0;
              return yield this.playKeyframe(P, { duration: b }), a = !0, P.index + 1;
            }
          }
        }
      }))();
      if ((t == null ? void 0 : t.userAction) !== !1) {
        this.privateState.audioCache || (this.privateState.audioCache = /* @__PURE__ */ new Map());
        for (let y = u; y < m.length; y++) {
          const S = m[y];
          if ((w = S == null ? void 0 : S.data) != null && w.audio && !this.privateState.audioCache.has(S.data.audio.url)) {
            const P = new Audio(S.data.audio.url);
            P.preload = "auto", this.privateState.audioCache.set(S.data.audio.url, P);
          }
        }
      }
      this.clearPauseData();
      for (const y of m) {
        if (o.broke || !r.playing || !o.playing || s !== o.playId)
          return;
        if (!(u !== void 0 && y.index < u))
          try {
            n.emit("playIndexChange", y.index, y), yield this.playKeyframe(y, {
              moveEffect: a === !1 ? o.moveToFirstPanoEffect : void 0,
              duration: a === !1 && typeof o.moveToFirstPanoDuration == "number" ? o.moveToFirstPanoDuration : void 0
            }), y.stay && (yield Q(y.stay)), a === !1 && (a = !0);
          } catch (S) {
            return Promise.resolve("broke");
          }
      }
      r.playing && s === o.playId && (this.setState({ playing: !1 }, { userAction: !1 }), n.emit("end"), this.clearPauseData());
    });
  }
  /**
   * @description: Pause and record pause state
   */
  handlePause(t) {
    var n;
    const { state: i, privateState: r, hooks: o } = this;
    i.playing = !1, r.playing !== !1 && (r.playing = !1, r.audio && r.audio.pause(), (t == null ? void 0 : t.userAction) !== !1 && this.setPauseData(), r.broke || this.forceInteruptUpdateCamera(), (t == null ? void 0 : t.notEmitEvent) !== !0 && o.emit("pause", { userAction: (n = t == null ? void 0 : t.userAction) != null ? n : !0 }));
  }
  /**
   * @description: Change play speed
   */
  changeSpeed(t, i = !0) {
    var m;
    const { state: r, privateState: o, hooks: n } = this, { currentPlayKeyframe: s } = o;
    if (n.emit("speedChange", t, { userAction: i }), r.playing && s)
      try {
        const e = s.originDuration !== void 0 ? s.originDuration * (1 - this.getProgress()) : void 0, a = s.keyframe, { privateState: p } = this;
        ((m = this.privateState.currentPlayKeyframe) == null ? void 0 : m.keyframe.id) !== a.id && (this.privateState.currentPlayKeyframe = { keyframe: a }), p.currentPlayQueue.push(this.getPlayPromise(a, { duration: e }));
      } catch (e) {
        console.error(e);
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
    var t, i, r;
    if ((t = this.data) != null && t.id)
      return this.pauseDataMap.set(this.data.id, {
        id: (i = this.privateState.currentPlayKeyframe) == null ? void 0 : i.keyframe.id,
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
  playKeyframe(t, i) {
    return g(this, null, function* () {
      var o;
      const { privateState: r } = this;
      return ((o = this.privateState.currentPlayKeyframe) == null ? void 0 : o.keyframe.id) !== t.id && (this.privateState.currentPlayKeyframe = { keyframe: t }), r.currentPlayQueue.push(this.getPlayPromise(t, i)), this.actionPromiseQueue();
    });
  }
  /**
   * @description: getPlayPromise
   */
  getPlayPromise(r) {
    return g(this, arguments, function* (t, i = {}) {
      var n;
      const o = t.data;
      if (i.duration = (n = i.duration) != null ? n : t.start !== void 0 && t.end !== void 0 ? t.end - t.start : void 0, !!o)
        return new Promise((s, m) => {
          let e = !1;
          this.addInterruptListener(() => {
            if (!e)
              return this.hooks.emit("broke"), this.privateState.broke = !0, this.setState({ playing: !1 }), e = !0, m(new Error("play is interupted"));
          });
          try {
            if (e)
              return;
            const a = () => {
              s(), e = !0;
            };
            switch (o.effect) {
              case "Move":
                this.move(o, i).then(a);
                break;
              case "Rotate":
                this.rotate(o, i).then(a);
                break;
              default:
                this.rotate(o, i).then(a);
            }
          } catch (a) {
          }
        });
    });
  }
  /**
   * @description Action promise queue in sequence
   */
  actionPromiseQueue() {
    return g(this, null, function* () {
      const { privateState: t } = this;
      return new Promise((i, r) => {
        if (t.currentPlayQueue.length === 0) {
          i();
          return;
        }
        const o = t.currentPlayQueue.shift();
        if (!o) {
          i();
          return;
        }
        o.then(i, r);
      }).then(() => t.currentPlayQueue.length === 0 ? Promise.resolve() : this.actionPromiseQueue());
    });
  }
  /**
   * @description Action move keyframe
   */
  move(t, i) {
    return g(this, null, function* () {
      var r;
      return this.privateState.audio && (this.privateState.audio.pause(), this.privateState.audio.currentTime = 0, this.privateState.audio = null), t.mode && t.mode !== this.five.currentMode ? yield this.changeMode(t) : t.panoIndex !== this.five.panoIndex && (yield this.changePano(t, i)), (r = this.privateState.audio) != null && r.pause || (this.loadAudio(t.audio), yield this.playAudio()), Promise.resolve();
    });
  }
  /**
   * @description Action rotate keyframe
   */
  rotate(t, i) {
    return g(this, null, function* () {
      var r;
      if (t.audio && this.privateState.audio && (this.privateState.audio.pause(), this.privateState.audio.currentTime = 0, this.privateState.audio = null), t.mode && t.mode !== this.five.currentMode)
        yield this.changeMode({ mode: t.mode, panoIndex: t.panoIndex });
      else if (t.panoIndex && t.panoIndex !== this.five.panoIndex)
        return yield this.changePano(t, i);
      yield this.updateCamera(t, i), t.audio && !((r = this.privateState.audio) != null && r.pause) && (this.loadAudio(t.audio), yield this.playAudio());
    });
  }
  /**
   * @description Update five camera
   */
  updateCamera(r) {
    return g(this, arguments, function* (t, i = {}) {
      const { five: o, privateState: n, state: s } = this, m = (() => {
        var v, w;
        const d = (v = s.config) == null ? void 0 : v.speedConfig, c = (w = t.rotateSpeed) != null ? w : d == null ? void 0 : d.rotateSpeed;
        if ((d == null ? void 0 : d.rotateSpeedUnit) === void 0)
          return c;
        if (c !== void 0)
          return d.rotateSpeedUnit === "rad/ms" ? c : c / 1e3;
      })(), e = this.five.getCurrentState(), a = Math.PI * 2;
      let p = t.longitude;
      p !== void 0 && (p = (p % a + a) % a, t.direction === "left" ? p <= e.longitude && (p += a) : t.direction === "right" && p >= e.longitude && (p -= a));
      const u = (() => i.duration ? i.duration : m ? M(e, k(I({}, t), { longitude: p })) / m : 800)();
      n.currentPlayKeyframe && (n.currentPlayKeyframe.originDuration = u);
      const l = this.getSpeededDuration(u);
      return new Promise((d) => {
        O(
          () => {
            var c;
            return o.updateCameraWithKeyframes(
              [
                {
                  progress: 0,
                  value: {
                    longitude: e.longitude,
                    latitude: e.latitude,
                    fov: e.fov,
                    offset: e.offset.clone(),
                    distance: e.distance
                  }
                },
                {
                  progress: 0.25,
                  value: {
                    longitude: p !== void 0 ? (e.longitude + (p + e.longitude) / 2) / 2 : e.longitude,
                    latitude: e.latitude,
                    fov: e.fov,
                    offset: e.offset.clone(),
                    distance: e.distance
                  }
                },
                {
                  progress: 0.5,
                  value: {
                    longitude: p !== void 0 ? (p + e.longitude) / 2 : e.longitude,
                    latitude: t.latitude !== void 0 ? (t.latitude + e.latitude) / 2 : e.latitude,
                    fov: e.fov,
                    offset: e.offset.clone(),
                    distance: e.distance
                  }
                },
                {
                  progress: 0.75,
                  value: {
                    longitude: p !== void 0 ? (p + (p + e.longitude) / 2) / 2 : e.longitude,
                    latitude: e.latitude,
                    fov: e.fov,
                    offset: e.offset.clone(),
                    distance: e.distance
                  }
                },
                {
                  progress: 1,
                  value: {
                    longitude: p !== void 0 ? p : (c = t.longitude) != null ? c : e.longitude,
                    latitude: t.latitude !== void 0 ? t.latitude : e.latitude,
                    fov: e.fov,
                    offset: e.offset.clone(),
                    distance: e.distance
                  }
                }
              ],
              l
            );
          }
        ), setTimeout(() => d(), l);
      });
    });
  }
  /**
   * @description: Change five pano
   */
  changePano(t, i) {
    return g(this, null, function* () {
      const { five: r, privateState: o, state: n } = this;
      if (typeof t.panoIndex != "number" || t.panoIndex === r.panoIndex)
        return;
      const s = r.getCurrentState().mode !== "Panorama";
      s && (this.privateState.modeChanging = !0);
      const m = (() => {
        var u, l;
        const a = (u = n.config) == null ? void 0 : u.speedConfig, p = (l = t.moveSpeed) != null ? l : a == null ? void 0 : a.moveSpeed;
        if ((a == null ? void 0 : a.moveSpeedUnit) === void 0)
          return p;
        if (p !== void 0)
          return a.moveSpeedUnit === "m/ms" ? p : p / 1e3;
      })(), e = (() => {
        if (i != null && i.duration)
          return i.duration;
        if (m && typeof r.panoIndex == "number" && typeof t.panoIndex == "number") {
          const a = this.workUtil.getObserverPosition(r.panoIndex), p = this.workUtil.getObserverPosition(t.panoIndex);
          return a && p ? a.distanceTo(p) / m : 800;
        }
        return 800;
      })();
      o.currentPlayKeyframe && (o.currentPlayKeyframe.originDuration = e), yield new Promise((a) => {
        var u, l, d;
        const p = this.fiveUtil.moveToPano(t.panoIndex, {
          latitude: t.latitude,
          longitude: t.longitude,
          fov: t.fov,
          duration: this.getSpeededDuration(e),
          effect: (d = (l = i == null ? void 0 : i.moveEffect) != null ? l : (u = this.state.config) == null ? void 0 : u.moveEffect) != null ? d : t.moveEffect,
          moveCancelCallback: () => a(),
          moveEndCallback: () => a()
        });
        p instanceof Promise && p.then(() => a()), s && r.once("panoArrived", () => a());
      }), s && (this.privateState.modeChanging = !1);
    });
  }
  /**
   * @description Change five mode
   */
  changeMode(t, i) {
    return g(this, null, function* () {
      t.mode && t.mode !== this.five.currentMode && (this.privateState.modeChanging = !0, yield this.five.changeMode(t.mode, t, i), this.privateState.modeChanging = !1);
    });
  }
  loadAudio(t) {
    if (t) {
      let i;
      this.privateState.audioCache && (i = this.privateState.audioCache.get(t.url)), i || (i = new Audio(t.url), i.preload = "auto", i.load()), this.privateState.audio && (this.privateState.audio.pause(), this.privateState.audio.currentTime = 0, this.privateState.audio = null), this.privateState.audio = i;
    }
  }
  playAudio() {
    return g(this, null, function* () {
      const t = this.privateState.audio;
      t && (yield new Promise((i, r) => {
        const o = () => {
          m(), i();
        }, n = () => {
          m(), r(new Error("Audio failed to play"));
        }, s = () => {
          this.privateState.audio && (this.privateState.audio.pause(), this.privateState.audio.currentTime = 0, this.privateState.audio = null);
        }, m = () => {
          t.removeEventListener("playing", o), t.removeEventListener("error", n);
        };
        t.addEventListener("playing", o), t.addEventListener("error", n), t.addEventListener("ended", s), t.play().catch(r);
      }));
    });
  }
}
export {
  fm as default
};
