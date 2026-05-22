var d = Object.defineProperty;
var n = (r, t, e) => t in r ? d(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var i = (r, t, e) => (n(r, typeof t != "symbol" ? t + "" : t, e), e);
import * as u from "three";
import h from "../getAllCSS3DObject.js";
import "../../../shared-utils/util.js";
class o extends u.Group {
  constructor(e) {
    super();
    i(this, "isCSS3DGroup", !0);
    i(this, "mode");
    i(this, "CSS3DObjectLength", 0);
    this.mode = e;
  }
  add(...e) {
    return h(e).forEach((s) => {
      s.mode = this.mode;
    }), super.add(...e), this.updateLength(), this;
  }
  setVisible(e) {
    this.visible = e, this.traverse((s) => {
      s.isCSS3DObjectPlus && s.updateVisible();
    });
  }
  remove(...e) {
    return super.remove(...e), this.updateLength(), this;
  }
  updateLength() {
    this.CSS3DObjectLength = h(this).length;
  }
}
class c extends o {
  constructor() {
    super("front");
  }
}
class m extends o {
  constructor(e) {
    super("behind");
    i(this, "scene");
    if (!e)
      throw new Error("CSS3DBehindScene: scene is required");
    this.scene = e;
  }
  add(...e) {
    return h(e).forEach((s) => {
      this.scene.add(s.getOpacityMesh());
    }), super.add(...e), this;
  }
}
export {
  m as CSS3DBehindGroup,
  c as CSS3DFrontGroup,
  o as CSS3DGroup
};
