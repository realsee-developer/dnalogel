import o from "./Controller.js";
import { CSS3DRender as O } from "./utils/three/CSS3DRender.js";
import "./utils/generateBehindFiveElement.js";
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../vendor/three/build/three.module.js";
import "../shared-utils/tag.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/three/core/Sphere.js";
import "animejs";
import "../shared-utils/url/absoluteUrl.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../shared-utils/five/fiveModelLoad.js";
import "./utils/three/CSS3DRenderer.js";
import "./utils/three/THREEJS_CSS3DRenderer.js";
import "./utils/createResizeObserver.js";
import "./utils/even.js";
import "./utils/three/CSS3DObject.js";
import "./utils/three/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/isNil.js";
import "./utils/three/CSS3DScene.js";
import "./utils/getAllCSS3DObject.js";
import "../shared-utils/util.js";
import "./utils/three/CSS3DGroup.js";
const L = (r) => new o(r);
export {
  O as CSS3DRender,
  L as CSS3DRenderPlugin,
  L as default
};
