import { arrayPositionToVector3 as d } from "../../../shared-utils/positionToVector3.js";
import "three";
import { planeNormal as h } from "../../utils/planeNormal.js";
import { VideoPlane as u, ImagePlane as c } from "../../utils/model/mediaPlane.js";
import { BaseTag as f } from "./BaseTag.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/loadTexture.js";
import "../../../shared-utils/three/Quadrangle.js";
import "../../../shared-utils/math/pointsIsRectangle.js";
import "../../../shared-utils/three/loadVideoTexture.js";
import "../../../shared-utils/device.js";
import "../../Assets/Icon.js";
import "../../../shared-utils/three/getPositionsByObjectFit.js";
import "../../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../../shared-utils/three/getNormal.js";
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
const P = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map();
class be extends f {
  constructor(t, e) {
    super(t, e), this.state.unfolded = !0;
  }
  applyVisible() {
    var e, r, a, n, o, i;
    this.computeRenderType() === "Mesh" ? ((r = (e = this.data.mediaData) == null ? void 0 : e[0]) == null ? void 0 : r.type) === "Video" ? this.renderVideoPlane() : ((n = (a = this.data.mediaData) == null ? void 0 : a[0]) == null ? void 0 : n.type) === "Image" && this.renderImagePlane() : (this.tag3DContentSvelte || this.plugin.updateRender3DDomTag(), (o = this.tag3DContentSvelte) == null || o.svelteApp.$set({ tag: this, state: this.plugin.state }), (i = this.tag3DContentSvelte) == null || i.css3DInstance.setVisible(this.currentVisible));
  }
  renderVideoPlane() {
    var i;
    const t = this.data.mediaData[0];
    if (!t)
      return;
    const { url: e } = t;
    if (!e)
      return;
    const r = this.currentVisible, a = (() => !!(this.mediaPlane && !r))(), n = (() => !!(!this.mediaPlane && r))(), o = (() => !!(this.mediaPlane && this.mediaPlane.src !== e))();
    if ((a || o) && this.mediaPlane && (this.plugin.imagePlaneGroup.remove(this.mediaPlane), this.mediaPlane.dispose(), this.mediaPlane.removeFromParent(), this.mediaPlane = void 0), n || o) {
      const p = this.position.map(d), s = new u(e, p, {
        videoCoverSrc: t.videoCoverUrl,
        playButton: this.data.playIcon,
        paused: !((i = this.data.autoplayConfig) != null && i.autoplayVideo),
        objectFit: this.data.objectFit,
        videoTextureMap: P,
        ImageTextureMap: g,
        domEvents: this.plugin.domEvents
      });
      s.onVideoReady = (m) => {
        m.addEventListener("play", () => this.plugin.mediaStore.set({ currentMediaElement: s.videoInstance }));
      };
      const l = (m) => (this.five.on("renderFrame", m), () => this.five.off("renderFrame", m));
      s.initialRenderHooks(l), this.mediaPlane = s, this.play = () => s.play(), this.pause = () => s.pause(), this.plugin.imagePlaneGroup.add(this.mediaPlane);
    }
    this.five.needsRender = !0;
  }
  renderImagePlane() {
    const t = this.data.mediaData[0];
    if (!t)
      return;
    const { url: e } = t;
    if (!e)
      return;
    const r = this.position.map(d), a = this.currentVisible, n = (() => !!(this.mediaPlane && !a))(), o = (() => !!(!this.mediaPlane && a))(), i = (() => !!(this.mediaPlane && this.mediaPlane.src !== e))();
    (n || i) && this.mediaPlane && (this.plugin.imagePlaneGroup.remove(this.mediaPlane), this.mediaPlane.dispose(), this.mediaPlane.removeFromParent(), this.mediaPlane = void 0), (o || i) && (this.mediaPlane = new c(e, r, { objectFit: this.data.objectFit }), this.getConfig().clickable !== !1 && this.plugin.domEvents.addAutoBindEventListener(
      this.mediaPlane,
      "click",
      (p) => {
        this.plugin.hooks.emit("click", { tag: this, target: "TagContent", event: p.origDomEvent });
      },
      { noEmitWhenHide: !0 }
    ), this.plugin.imagePlaneGroup.add(this.mediaPlane)), this.five.needsRender = !0;
  }
  computeNormal() {
    return h(this.position);
  }
}
export {
  be as PlaneTag
};
