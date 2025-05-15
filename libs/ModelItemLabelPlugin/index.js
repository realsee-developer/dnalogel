import { ModelItemLabelPlugin as m } from "./ModelItemLabelPlugin.js";
import { DISPLAY_STRATEGY_TYPE as u } from "./typings.js";
import "@realsee/five";
import "./ItemLabelComponent.js";
import "../vendor/svelte/internal/index.js";
import "three";
import "./ItemLabelItem.js";
import "../vendor/classnames/index.js";
import "../shared-utils/debounce.js";
import "./utils/parseData.js";
const P = {
  name: "ModelItemLabelPlugin",
  version: 0
};
export {
  u as DISPLAY_STRATEGY_TYPE,
  m as ModelItemLabelPlugin,
  m as default,
  P as modelItemLabelPluginServerParams
};
