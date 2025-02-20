var a = Object.defineProperty;
var h = (n, r, e) => r in n ? a(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e;
var i = (n, r, e) => (h(n, typeof r != "symbol" ? r + "" : r, e), e);
import * as s from "three";
import o from "../getAllCSS3DObject.js";
import "../../../shared-utils/util.js";
class m extends s.Scene {
  constructor() {
    super();
  }
  add(...r) {
    return super.add(...r), o(r).forEach((e) => {
      e.mode = "front";
    }), this;
  }
}
class u extends s.Scene {
  constructor(e) {
    super();
    i(this, "scene");
    if (!e)
      throw new Error("CSS3DBehindScene: scene is required");
    this.scene = e;
  }
  add(...e) {
    return super.add(...e), o(e).forEach((t) => {
      t.mode = "behind", this.scene.add(t.getOpacityMesh());
    }), this;
  }
  remove(...e) {
    return o(e).forEach((t) => {
      var d;
      (d = t.opacityMesh) == null || d.removeFromParent(), t.opacityMesh = null;
    }), super.remove(...e), this;
  }
}
export {
  u as CSS3DBehindScene,
  m as CSS3DFrontScene
};
