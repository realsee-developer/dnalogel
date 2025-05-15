var k = Object.defineProperty, O = Object.defineProperties;
var F = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var f = (e, o, t) => o in e ? k(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, b = (e, o) => {
  for (var t in o || (o = {}))
    w.call(o, t) && f(e, t, o[t]);
  if (C)
    for (var t of C(o))
      x.call(o, t) && f(e, t, o[t]);
  return e;
}, P = (e, o) => O(e, F(o));
var v = (e, o, t) => (f(e, typeof o != "symbol" ? o + "" : o, t), t);
var y = (e, o, t) => new Promise((m, p) => {
  var n = (r) => {
    try {
      a(t.next(r));
    } catch (i) {
      p(i);
    }
  }, d = (r) => {
    try {
      a(t.throw(r));
    } catch (i) {
      p(i);
    }
  }, a = (r) => r.done ? m(r.value) : Promise.resolve(r.value).then(n, d);
  a((t = t.apply(e, o)).next());
});
import { initialCSS3DRender as L } from "../../../shared-utils/CSS3DRender/index.js";
import { CSS3DObjectPlus as N } from "../../../shared-utils/CSS3DRender/CSS3DObject.js";
import { arrayPositionToVector3 as S } from "../../../shared-utils/positionToVector3.js";
import { loadGLTF as A } from "../../../shared-utils/three/GLTFLoader.js";
import * as T from "three";
import { planeNormal as E } from "../../utils/planeNormal.js";
import { isMediaModelTag as G } from "../../utils/tag/tagCheck.js";
import { ImagePlane as D } from "../../utils/model/mediaPlane.js";
import I from "../../Components/Tag/index.js";
import { BaseTag as R } from "./BaseTag.js";
import { CONST as V } from "../../../shared-utils/constants.js";
import "../../../shared-utils/tag.js";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "@realsee/five/line";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { waitFiveModelLoaded as H } from "../../../shared-utils/five/fiveModelLoad.js";
import "../../../shared-utils/five/FivePuppet.js";
import "../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../shared-utils/createResizeObserver.js";
import "../../../shared-utils/even.js";
import "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/isNil.js";
import "@realsee/five/gltf-loader";
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
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
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
import "../../Components/Common/Icon/PanoramaIcon.js";
import "../../Components/Tag/CustomTag.js";
import "../../../vendor/classnames/index.js";
import "./ModelTag.js";
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
class Ko extends R {
  constructor(t, m) {
    super(t, m);
    v(this, "loading", !1);
    /** 加载外部模型 */
    v(this, "loadModel", () => y(this, null, function* () {
      var d, a;
      const t = this.data.modelUrl;
      if (!t || (this.loading = !0, yield H(this.five), !this.plugin.tags.includes(this)))
        return;
      const m = A(t).then((r) => y(this, null, function* () {
        var l;
        const i = Object.assign(r.scene, {
          customID: this.id,
          isTagModel: !0,
          removeEventListener: this.getConfig().clickable === !1 ? () => {
          } : this.addObjectClickHandler(this, r.scene, (g) => {
            this.plugin.hooks.emit("click", { target: "TagModel", tag: this, event: g });
          })
        });
        return new T.Matrix4().fromArray(this.matrix).decompose(i.position, i.quaternion, i.scale), i.updateWorldMatrix(!0, !0), i.visible = this.visible, (l = this.getConfig().modelConfig) != null && l.autoLookAtEnabled && i.lookAt(this.five.camera.position.clone().setY(i.position.y)), i;
      }));
      this.model = { promise: m };
      const p = yield m;
      if (this.loading = !1, ((d = this.model) == null ? void 0 : d.promise) !== m || !this.plugin.tags.includes(this))
        return;
      this.model.object = p;
      const n = this.plugin.gltfObjectGroup.children.find((r) => r.customID === this.id);
      if (n && (this.plugin.gltfObjectGroup.remove(n), n.removeEventListener()), G(this)) {
        const r = this.data.mediaPosition.map(S);
        if (this.computeRenderType() === "Mesh" && !this.mediaPlane) {
          this.mediaPlane = new D(this.data.mediaData[0].url, r, { objectFit: this.data.objectFit });
          const i = new T.Vector3().addVectors(r[0], r[2]).divideScalar(2);
          this.mediaPlane.position.copy(i), p.add(this.mediaPlane);
        }
        if (this.computeRenderType() !== "Mesh") {
          (a = this.tag3DContentSvelte) == null || a.dispose();
          const i = document.createElement("div");
          i.classList.add("tag-media-container");
          const c = "black";
          i.style.backgroundColor = c, i.style.border = `3px solid ${c}`;
          const l = b({ mode: "behind", cornerPoints: r, container: i }, this.config.tag3DConfig), g = this.computeRenderType() === "BehindDom" || l.mode === "behind" ? "behind" : "front", s = new N(P(b({}, l), { mode: g })), u = this.computeNormal();
          s.position.add(u.clone().setLength(V.Z_FIGHTING_OFFSET)), p.add(s);
          let h;
          s.mode === "behind" && this.config.clickable !== !1 && (h = this.addObjectClickHandler(this, s, (M) => {
            this.plugin.hooks.emit("click", { event: M, target: "TagContent", tag: this });
          }));
          const j = new I({
            target: i,
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
            svelteApp: j,
            domContainer: {
              css3DObject: s
            },
            css3DInstance: s,
            initialNormal: u,
            currentNormal: u,
            dispose: () => {
              j.$destroy(), s.dispose(), h == null || h();
            }
          };
        }
      }
      return this.plugin.gltfObjectGroup.add(p), p;
    }));
    this.state.unfolded = !0, L(this.five), this.loadModel().then(() => this.updateVisible());
  }
  applyVisible() {
    var t, m;
    (t = this.tag3DContentSvelte) == null || t.svelteApp.$set({ tag: this, state: this.plugin.state, temporaryState: this.plugin.temporaryState }), (m = this.model) != null && m.object && (this.model.object.visible = this.visible);
  }
  set(...t) {
    super.set(...t), this.loadModel();
  }
  setData(...t) {
    var p;
    super.setData(...t);
    const m = this.data.mediaPosition.map(S);
    this.computeRenderType() === "Mesh" ? this.mediaPlane && this.mediaPlane.src !== this.data.mediaData[0].url && (this.mediaPlane.removeFromParent(), this.mediaPlane = new D(this.data.mediaData[0].url, m, { objectFit: this.data.objectFit })) : (p = this.tag3DContentSvelte) == null || p.svelteApp.$set({ tag: this });
  }
  computeNormal() {
    return E(this.data.mediaPosition);
  }
}
export {
  Ko as ModelTag
};
