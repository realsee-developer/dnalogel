import { ModelRoomLabelController as r } from "./Controller.js";
import "./RoomLabelItems.js";
import "../vendor/svelte/internal/index.js";
import "three";
import "./RoomLabelItem.js";
import "./Assets/roomLabelBg.js";
import "../shared-utils/fontSize.js";
import "../shared-utils/px2rem.js";
import "../shared-utils/svelte/resizeObserver.js";
import "../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "./utils/parseData.js";
const b = (o) => new r(o), L = {
  name: "ModelRoomLabelPlugin",
  version: 0
};
export {
  b as ModelRoomLabelPlugin,
  b as default,
  L as modelRoomLabelPluginServerParams
};
