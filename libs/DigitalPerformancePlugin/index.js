import t from "./controller/index.js";
import { DigitalHuman as D } from "./core/DigitalHuman.js";
import { DigitalPlayground as c } from "./core/DigitalPlayground.js";
import { DigitalStateMachine as d } from "./core/DigitalStateMachine.js";
import "three";
import "./mock.js";
import "../shared-utils/five/transformPosition.js";
import "@realsee/five/gltf-loader";
import "./core/Trace.js";
import "@realsee/five";
const g = (r, o) => new t(r, o);
export {
  D as DigitalHuman,
  g as DigitalPerformancePlugin,
  c as DigitalPlayground,
  d as DigitalStateMachine,
  g as default
};
