import { ModelRoomLabelController as r } from "./Controller.js";
import "./RoomLabelItems.js";
import "../vendor/svelte/internal/index.js";
import "three";
import "./RoomLabelItem.js";
import "./Assets/roomLabelBg.js";
import "../shared-utils/svelte/resizeObserver.js";
import "../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "./utils/parseData.js";
const s = (o) => new r(o), u = {
  name: "ModelRoomLabelPlugin",
  version: 0
};
export {
  s as ModelRoomLabelPlugin,
  s as default,
  u as modelRoomLabelPluginServerParams
};
