import o from "./Controller.js";
import { CSS3DRender as v } from "./utils/three/CSS3DRender.js";
import "./utils/generateBehindFiveElement.js";
import "hammerjs";
import "three";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "animejs";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/five/fiveModelLoad.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/positionToVector3.js";
import "./utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "./utils/getAllCSS3DObject.js";
import "../shared-utils/util.js";
import "./utils/createResizeObserver.js";
import "./utils/even.js";
import "../shared-utils/Subscribe.js";
import "./utils/three/CSS3DObject.js";
import "./utils/three/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "./utils/three/CSS3DScene.js";
import "./utils/three/CSS3DGroup.js";
const j = (r) => new o(r);
export {
  v as CSS3DRender,
  j as CSS3DRenderPlugin,
  j as default
};
