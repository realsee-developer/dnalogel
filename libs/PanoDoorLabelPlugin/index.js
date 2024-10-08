import { PanoDoorLabelPluginController as r } from "./Controller.js";
import "three";
import "./BaseController.js";
import "@realsee/five";
import "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
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
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/three/core/Sphere.js";
import "animejs";
import "../shared-utils/url/absoluteUrl.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "./DoorLabelItem.js";
import "../vendor/svelte/internal/index.js";
import "../vendor/classnames/index.js";
import "./utils.js";
const E = (o) => new r(o);
export {
  E as PanoDoorLabelPlugin,
  E as default
};
