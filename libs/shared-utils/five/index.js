import "three";
import "../../vendor/hammerjs/hammer.js";
import "../three/PointSelector/index.js";
import "../tag.js";
import "../three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "./FivePuppet.js";
import "@realsee/five/line";
import "../three/core/Five_LineMaterial2.js";
import "../three/core/Sphere.js";
import "../three/blink.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../vendor/earcut/src/earcut.js";
function k(r) {
  return r.model ? r.work ? r.model.loaded ? r.model.name !== r.work.getURL(r.work.model.file) ? { result: !1, msg: "five.model.name 与 five.work.model.file 不一致" } : { result: !0, msg: "" } : { result: !1, msg: "five.model 未加载完成" } : { result: !1, msg: "five 数据未加载" } : { result: !1, msg: "five.model 不存在" };
}
export {
  k as checkFiveModelLoaded
};
