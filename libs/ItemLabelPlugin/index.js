import { Plugin as m } from "./Plugin.js";
import { ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE as E } from "./typings.js";
import "@realsee/five";
import "./ItemLabelComponent.js";
import "../vendor/svelte/internal/index.js";
import "three";
import "./ItemLabelItem.js";
import "../vendor/classnames/index.js";
import "../shared-utils/debounce.js";
import "./utils/isImpacted.js";
import "./utils/getStrokeLength.js";
import "./utils/getLabelTransform.js";
import "./utils/transform2RenderData.js";
import "./utils/parseData.js";
const I = {
  name: "ItemLabelPlugin",
  version: 0
};
export {
  E as ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE,
  m as ItemLabelPlugin,
  m as default,
  I as itemLabelPluginServerParams
};
