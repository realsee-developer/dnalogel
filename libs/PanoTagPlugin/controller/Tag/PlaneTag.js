var b = Object.defineProperty, I = Object.defineProperties;
var R = Object.getOwnPropertyDescriptors;
var v = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, F = Object.prototype.propertyIsEnumerable;
var P = (n, i, t) => i in n ? b(n, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[i] = t, f = (n, i) => {
  for (var t in i || (i = {}))
    V.call(i, t) && P(n, t, i[t]);
  if (v)
    for (var t of v(i))
      F.call(i, t) && P(n, t, i[t]);
  return n;
}, y = (n, i) => I(n, R(i));
var D = (n, i, t) => new Promise((m, o) => {
  var p = (s) => {
    try {
      e(t.next(s));
    } catch (a) {
      o(a);
    }
  }, r = (s) => {
    try {
      e(t.throw(s));
    } catch (a) {
      o(a);
    }
  }, e = (s) => s.done ? m(s.value) : Promise.resolve(s.value).then(p, r);
  e((t = t.apply(n, i)).next());
});
import { CONST as M } from "../../../shared-utils/constants.js";
import { CSS3DObjectPlus as k } from "../../../shared-utils/CSS3DRender/CSS3DObject.js";
import { anyPositionToVector3 as E, arrayPositionToVector3 as S } from "../../../shared-utils/positionToVector3.js";
import "three";
import { planeNormal as w } from "../../utils/planeNormal.js";
import { VideoPlane as j, ImagePlane as N } from "../../utils/model/mediaPlane.js";
import G from "../../Components/Tag/index.js";
import { BaseTag as A } from "./BaseTag.js";
import "../../../shared-utils/tag.js";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import { initialCSS3DRender as L } from "../../../shared-utils/CSS3DRender/index.js";
import "@realsee/five/line";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import { waitFiveModelLoaded as C } from "../../../shared-utils/five/fiveModelLoad.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../shared-utils/five/FivePuppet.js";
import "../../../shared-utils/even.js";
import "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/loadTexture.js";
import "../../../shared-utils/three/Quadrangle.js";
import "../../../shared-utils/math/pointsIsRectangle.js";
import "../../../shared-utils/three/loadVideoTexture.js";
import "../../../shared-utils/device.js";
import "../../Assets/Icon.js";
import "../../../shared-utils/three/getPositionsByObjectFit.js";
import "../../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../../shared-utils/three/getNormal.js";
import "../../../vendor/svelte/internal/index.js";
import "../../Components/Tag/TextTag/index.js";
import "../../Components/Tag/TextTag/TextTag.js";
import "../../Components/Common/Line/Straight.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "../../../shared-utils/uuid.js";
import "../../Components/Common/Shadow.js";
import "../../Components/Common/Text/FlyMText.js";
import "../../Components/Common/Text/FlyText.js";
import "../../utils/search.js";
import "../../utils/constants.js";
import "../../Components/Common/Arrow.js";
import "../../utils/doUtil.js";
import "../../../shared-utils/svelte/resizeObserver.js";
import "../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "../../Components/Tag/TextTag/TextPlaneTag.js";
import "../../Components/Common/Text/MText.js";
import "../../utils/px2rem.js";
import "../../Components/Tag/ImageTextTag.js";
import "../../Components/Common/Line/Polyline.js";
import "../../Components/Common/Media.js";
import "../../../vendor/svelte-carousel/src/components/Carousel/Carousel.js";
import "../../../vendor/svelte-carousel/src/components/Dots/Dots.js";
import "../../../vendor/svelte-carousel/src/components/Dot/Dot.js";
import "../../../vendor/svelte-carousel/src/components/Arrow/Arrow.js";
import "../../../vendor/svelte-carousel/src/direction.js";
import "../../../vendor/svelte-carousel/src/components/Progress/Progress.js";
import "../../../vendor/svelte-carousel/src/actions/swipeable/swipeable.js";
import "../../../vendor/svelte-carousel/src/actions/swipeable/event.js";
import "../../../vendor/svelte-carousel/src/utils/event.js";
import "../../../vendor/svelte-carousel/src/units.js";
import "../../../vendor/svelte-carousel/src/actions/hoverable/hoverable.js";
import "../../../vendor/svelte-carousel/src/actions/hoverable/event.js";
import "../../../vendor/svelte-carousel/src/actions/tappable/tappable.js";
import "../../../vendor/svelte-carousel/src/utils/math.js";
import "../../../vendor/svelte-carousel/src/actions/tappable/event.js";
import "../../../vendor/svelte-carousel/src/utils/page.js";
import "../../../vendor/svelte-carousel/src/utils/clones.js";
import "../../../vendor/svelte-carousel/src/utils/object.js";
import "../../../vendor/svelte-carousel/src/components/Carousel/createCarousel.js";
import "../../../vendor/easy-reactive/src/simply-reactive.js";
import "../../../vendor/lodash.get/index.js";
import "../../../_commonjsHelpers.js";
import "../../../vendor/lodash.clonedeep/index.js";
import "../../../vendor/easy-reactive/src/utils/subscription.js";
import "../../../vendor/easy-reactive/src/utils/object.js";
import "../../../vendor/lodash.isequal/index.js";
import "../../../vendor/easy-reactive/src/utils/watcher.js";
import "../../../vendor/svelte-carousel/src/utils/lazy.js";
import "../../../vendor/svelte-carousel/src/utils/ProgressManager.js";
import "../../../vendor/svelte-carousel/src/utils/interval.js";
import "../../Components/Common/MediaItem.js";
import "../../Components/Tag/MarketingTag.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Subscribe.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/three/core/Raycaster.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/five/fiveEveryReadyListener.js";
import "../../../shared-utils/throttle.js";
import "../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../shared-utils/createResizeObserver.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../Sculpt/Meshes/Line.js";
import "../../../Sculpt/typings/style.js";
import "../../../shared-utils/three/IObject3D.js";
import "../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/util.js";
import "../../../shared-utils/three/core/LineGeometry.js";
import "../../../shared-utils/three/core/LineMaterial.js";
import "../../../shared-utils/three/core/Line2.js";
import "../../../shared-utils/three/core/LineMaterial2.js";
import "../../../Sculpt/utils/unit.js";
import "../../../Sculpt/utils/renderDom.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../Sculpt/utils/three/rayOnLine.js";
import "@realsee/five";
import "../../utils/noTypecheck.js";
import "../../Components/Tag/AudioTag/index.js";
import "../../Components/Tag/AudioTag/AudioTag.js";
import "../../Components/Common/Audio.js";
import "../../utils/audio/SharedAudio.js";
import "../../../shared-utils/audio.js";
import "../../Components/Common/Icon/audioIcon.js";
import "../../Components/Tag/AudioTag/AudioPlaneTag.js";
import "../../Components/Tag/MediaPlane.js";
import "../../Components/Tag/LinkTag.js";
import "../../Components/Common/Icon/Icon.js";
import "../../utils/getImageInfo.js";
import "../../Components/Tag/PanoramaTag.js";
import "../../Components/Tag/CustomTag.js";
import "../../../vendor/classnames/index.js";
import "./ModelTag.js";
import "../../../shared-utils/three/GLTFLoader.js";
import "@realsee/five/gltf-loader";
import "../../utils/tag/tagCheck.js";
import "../../../shared-utils/five/mode.js";
import "../../utils/tag/calculateTagConfig.js";
import "../../../vendor/object-assign-deep/objectAssignDeep.js";
import "../../../shared-utils/typescript/entries.js";
import "../../utils/tag/adaptConfig.js";
import "../../typings/tag/TagConfig.js";
import "../../utils/tag/format.js";
import "../../../shared-utils/three/blink.js";
import "../../../shared-utils/vectorToCoordinate.js";
import "../../../shared-utils/formatRad.js";
import "../../../shared-utils/five/lookPoint.js";
import "../../utils/tagPosition.js";
import "../../utils/checkRange.js";
import "../../../shared-utils/url/getUrl.js";
import "../../../shared-utils/five/getFloorIndex.js";
import "../../../shared-utils/safeObj.js";
import "../../utils/Cache.js";
import "../../../shared-utils/promise/withResolvers.js";
const O = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map();
class We extends A {
  constructor(i, t) {
    super(i, t), this.state.unfolded = !0, this.loadModel();
  }
  applyVisible() {
    var t, m, o, p, r, e;
    this.computeRenderType() === "Mesh" ? ((m = (t = this.data.mediaData) == null ? void 0 : t[0]) == null ? void 0 : m.type) === "Video" ? this.renderVideoPlane() : ((p = (o = this.data.mediaData) == null ? void 0 : o[0]) == null ? void 0 : p.type) === "Image" && this.renderImagePlane() : ((r = this.tag3DContentSvelte) == null || r.svelteApp.$set({ tag: this, state: this.plugin.state, temporaryState: this.plugin.temporaryState }), (e = this.tag3DContentSvelte) != null && e.css3DInstance && (this.tag3DContentSvelte.css3DInstance.visible = this.visible, this.five.needsRender = !0));
  }
  set(i, t = !0) {
    super.set(i, t), C(this.five).then(() => {
      this.tag3DContentSvelte && (i.data ? this.tag3DContentSvelte.svelteApp.$set({ tag: this, state: this.plugin.state, temporaryState: this.plugin.temporaryState }) : i.position && this.loadModel());
    });
  }
  setData(...i) {
    var m, o, p, r, e;
    super.setData(...i), this.computeRenderType() === "Mesh" ? ((o = (m = this.data.mediaData) == null ? void 0 : m[0]) == null ? void 0 : o.type) === "Video" ? this.renderVideoPlane() : ((r = (p = this.data.mediaData) == null ? void 0 : p[0]) == null ? void 0 : r.type) === "Image" && this.renderImagePlane() : (e = this.tag3DContentSvelte) == null || e.svelteApp.$set({ tag: this });
  }
  loadModel() {
    return D(this, null, function* () {
      var t, m, o, p, r, e;
      if (yield C(this.five), this.computeRenderType() === "Mesh")
        ((m = (t = this.data.mediaData) == null ? void 0 : t[0]) == null ? void 0 : m.type) === "Video" ? this.renderVideoPlane() : ((p = (o = this.data.mediaData) == null ? void 0 : o[0]) == null ? void 0 : p.type) === "Image" && this.renderImagePlane();
      else {
        L(this.five);
        const s = this.position.map(E);
        (e = (r = this.tag3DContentSvelte) == null ? void 0 : r.dispose) == null || e.call(r);
        const a = document.createElement("div");
        a.classList.add("tag-media-container");
        const h = f({ mode: "front", cornerPoints: s, container: a }, this.config.tag3DConfig), l = this.computeRenderType() === "BehindDom" || h.mode === "behind" ? "behind" : "front", d = new k(y(f({}, h), { mode: l })), u = this.computeNormal();
        d.position.add(u.clone().setLength(M.Z_FIGHTING_OFFSET)), this.plugin.group.add(d);
        let c;
        d.mode === "behind" && this.config.clickable !== !1 && (c = this.addObjectClickHandler(this, d, (T) => {
          this.plugin.hooks.emit("click", { event: T, target: "TagContent", tag: this });
        }));
        const g = new G({
          target: a,
          props: {
            tag: this,
            hooks: this.plugin.hooks,
            /** 模型标签要等模型加载好之后再展示 */
            state: this.plugin.state,
            mediaStore: this.plugin.mediaStore,
            temporaryState: this.plugin.temporaryState
          }
        });
        this.tag3DContentSvelte = {
          svelteApp: g,
          domContainer: {
            css3DObject: d
          },
          css3DInstance: d,
          initialNormal: u,
          currentNormal: u,
          dispose: () => {
            g.$destroy(), d.dispose(), c == null || c();
          }
        }, this.five.needsRender = !0;
      }
    });
  }
  renderVideoPlane() {
    var e;
    const i = this.data.mediaData[0];
    if (!i)
      return;
    const { url: t } = i;
    if (!t)
      return;
    const m = this.currentVisible, o = (() => !!(this.mediaPlane && !m))(), p = (() => !!(!this.mediaPlane && m))(), r = (() => !!(this.mediaPlane && this.mediaPlane.src !== t))();
    if ((o || r) && this.mediaPlane && (this.plugin.imagePlaneGroup.remove(this.mediaPlane), this.mediaPlane.dispose(), this.mediaPlane.removeFromParent(), this.mediaPlane = void 0), p || r) {
      const s = this.position.map(S), a = new j(t, s, {
        videoCoverSrc: i.videoCoverUrl,
        playButton: this.data.playIcon,
        paused: !((e = this.data.autoplayConfig) != null && e.autoplayVideo),
        objectFit: this.data.objectFit,
        videoTextureMap: O,
        ImageTextureMap: x,
        domEvents: this.plugin.domEvents
      });
      a.onVideoReady = (l) => {
        l.addEventListener("play", () => this.plugin.mediaStore.set({ currentMediaElement: a.videoInstance }));
      };
      const h = (l) => (this.five.on("renderFrame", l), () => this.five.off("renderFrame", l));
      a.initialRenderHooks(h), this.mediaPlane = a, this.play = () => a.play(), this.pause = () => a.pause(), this.plugin.imagePlaneGroup.add(this.mediaPlane);
    }
    this.five.needsRender = !0;
  }
  renderImagePlane() {
    const i = this.data.mediaData[0];
    if (!i)
      return;
    const { url: t } = i;
    if (!t)
      return;
    const m = this.position.map(S), o = this.currentVisible, p = (() => !!(this.mediaPlane && !o))(), r = (() => !!(!this.mediaPlane && o))(), e = (() => !!(this.mediaPlane && this.mediaPlane.src !== t))();
    (p || e) && this.mediaPlane && (this.plugin.imagePlaneGroup.remove(this.mediaPlane), this.mediaPlane.dispose(), this.mediaPlane.removeFromParent(), this.mediaPlane = void 0), (r || e) && (this.mediaPlane = new N(t, m, { objectFit: this.data.objectFit }), this.getConfig().clickable !== !1 && this.plugin.domEvents.addAutoBindEventListener(
      this.mediaPlane,
      "click",
      (s) => {
        this.plugin.hooks.emit("click", { tag: this, target: "TagContent", event: s.origDomEvent });
      },
      { noEmitWhenHide: !0 }
    ), this.plugin.imagePlaneGroup.add(this.mediaPlane)), this.five.needsRender = !0;
  }
  computeNormal() {
    return w(this.position);
  }
}
export {
  We as PlaneTag
};
