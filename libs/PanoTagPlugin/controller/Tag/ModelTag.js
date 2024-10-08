var f = Object.defineProperty;
var b = (m, r, i) => r in m ? f(m, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : m[r] = i;
var l = (m, r, i) => (b(m, typeof r != "symbol" ? r + "" : r, i), i);
var d = (m, r, i) => new Promise((s, o) => {
  var a = (t) => {
    try {
      e(i.next(t));
    } catch (n) {
      o(n);
    }
  }, p = (t) => {
    try {
      e(i.throw(t));
    } catch (n) {
      o(n);
    }
  }, e = (t) => t.done ? s(t.value) : Promise.resolve(t.value).then(a, p);
  e((i = i.apply(m, r)).next());
});
import { arrayPositionToVector3 as h } from "../../../shared-utils/positionToVector3.js";
import { loadGLTF as j } from "../../../shared-utils/three/GLTFLoader.js";
import * as u from "three";
import { planeNormal as v } from "../../utils/planeNormal.js";
import { isMediaModelTag as T } from "../../utils/tag/tagCheck.js";
import { ImagePlane as M } from "../../utils/model/mediaPlane.js";
import { BaseTag as D } from "./BaseTag.js";
import "@realsee/five/gltf-loader";
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
import "../../utils/checkRange.js";
import "../../../shared-utils/url/getUrl.js";
import "../../../shared-utils/five/getFloorIndex.js";
import "../../../shared-utils/safeObj.js";
import "../../utils/Cache.js";
class Ot extends D {
  constructor(i, s) {
    super(i, s);
    l(this, "loading", !1);
    /** 加载外部模型 */
    l(this, "loadModel", () => d(this, null, function* () {
      var p;
      const i = this.data.modelUrl;
      if (!i)
        return;
      this.loading = !0;
      const s = j(i).then((e) => d(this, null, function* () {
        var c;
        const t = Object.assign(e.scene, {
          customID: this.id,
          isTagModel: !0,
          removeEventListener: this.getConfig().clickable === !1 ? () => {
          } : this.addObjectClickHandler(this, e.scene, (g) => {
            this.plugin.hooks.emit("click", { target: "TagModel", tag: this, event: g });
          })
        });
        return t.visible = this.currentVisible, new u.Matrix4().fromArray(this.matrix).decompose(t.position, t.quaternion, t.scale), t.updateWorldMatrix(!0, !0), t.visible = yield this.getVisible(), (c = this.getConfig().modelConfig) != null && c.autoLookAtEnabled && t.lookAt(this.five.camera.position.clone().setY(t.position.y)), t;
      }));
      this.model = { promise: s };
      const o = yield s;
      if (this.loading = !1, ((p = this.model) == null ? void 0 : p.promise) !== s || !this.plugin.tags.includes(this))
        return;
      this.model.object = o;
      const a = this.plugin.gltfObjectGroup.children.find((e) => e.customID === this.id);
      if (a && (this.plugin.gltfObjectGroup.remove(a), a.removeEventListener()), this.plugin.updateRender3DDomTag(), T(this)) {
        if (this.computeRenderType() === "Mesh" && !this.mediaPlane) {
          const e = this.data.mediaPosition.map(h);
          this.mediaPlane = new M(this.data.mediaData[0].url, this.data.mediaPosition.map(h), {
            objectFit: this.data.objectFit
          });
          const t = new u.Vector3().addVectors(e[0], e[2]).divideScalar(2);
          this.mediaPlane.position.copy(t), o.add(this.mediaPlane);
        }
        this.computeRenderType() !== "Mesh" && (o.updateTagCss3DObjectMatrix = () => this.plugin.updateTagCss3DObjectMatrix(this, o), o.updateTagCss3DObjectMatrix());
      }
      return this.plugin.gltfObjectGroup.add(o), o;
    }));
    this.state.unfolded = !0;
  }
  applyVisible() {
    var i, s, o;
    (i = this.model) != null && i.object && (this.model.object.visible = this.currentVisible), (s = this.tag3DContentSvelte) == null || s.svelteApp.$set({ tag: this, state: this.plugin.state }), (o = this.tag3DContentSvelte) == null || o.css3DInstance.setVisible(this.currentVisible);
  }
  computeNormal() {
    return v(this.data.mediaPosition);
  }
}
export {
  Ot as ModelTag
};
