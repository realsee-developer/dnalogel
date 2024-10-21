import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "@realsee/five/line";
import "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../tag.js";
import "../three/core/Sphere.js";
import "animejs";
function u(e) {
  return e.model ? e.work ? e.model.loaded ? e.model.name !== e.work.model.file ? { result: !1, msg: "five.model.name 与 five.work.model.file 不一致" } : { result: !0, msg: "" } : { result: !1, msg: "five.model 未加载完成" } : { result: !1, msg: "five 数据未加载" } : { result: !1, msg: "five.model 不存在" };
}
export {
  u as checkFiveModelLoaded
};
