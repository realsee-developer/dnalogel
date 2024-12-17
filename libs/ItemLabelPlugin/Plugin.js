import { ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE as L } from "./typings.js";
import { Subscribe as E, Five as g } from "@realsee/five";
import h from "./ItemLabelComponent.js";
import { parseItemLabelPluginData as v } from "./utils/parseData.js";
import "../vendor/svelte/internal/index.js";
import "three";
import "./ItemLabelItem.js";
import "../vendor/classnames/index.js";
import "../shared-utils/debounce.js";
import "./utils/isImpacted.js";
import "./utils/getStrokeLength.js";
import "./utils/getLabelTransform.js";
import "./utils/transform2RenderData.js";
const T = void 0, O = (o, t) => {
  var d, c, b, u;
  const e = {
    container: document.createElement("div"),
    data: null,
    enabled: !0,
    fiveModeEnabled: !0,
    itemLabels: [],
    wrapper: null,
    app: void 0,
    hooks: new E(),
    modelOcclusionEnable: (d = t == null ? void 0 : t.modelOcclusionEnable) != null ? d : !0,
    onlyVisibleInPanorama: (c = t == null ? void 0 : t.onlyVisibleInPanorama) != null ? c : !0,
    displayStrategyType: (b = t == null ? void 0 : t.displayStrategyType) != null ? b : L.SMALL,
    maxVisibleDistance: (u = t == null ? void 0 : t.maxVisibleDistance) != null ? u : T
  };
  e.container.setAttribute("class", "item-label-plugin-container"), e.container.style.cssText = `
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 5;
    `, e.container.style.pointerEvents = "none";
  const p = (n) => (e.wrapper = n, n.appendChild(e.container), i(), !0), m = (n) => {
    e.itemLabels = v(n), i();
  }, l = () => (e.enabled || (e.enabled = !0, i()), !0), r = () => (e.enabled && (e.enabled = !1, i()), !0), a = () => {
    f(), e.container.remove();
  }, i = () => {
    var n;
    if (e.wrapper) {
      if (!e.enabled || !e.fiveModeEnabled) {
        (n = e.app) == null || n.$destroy(), e.app = void 0;
        return;
      }
      e.app ? e.app.$set({
        five: o,
        itemLabels: e.itemLabels
      }) : e.app = new h({
        target: e.container,
        props: {
          five: o,
          modelOcclusionEnable: e.modelOcclusionEnable,
          itemLabels: e.itemLabels,
          hooks: e.hooks,
          displayStrategyType: e.displayStrategyType,
          maxVisibleDistance: e.maxVisibleDistance
        }
      });
    }
  }, y = () => {
    o.on("modeChange", s), o.once("dispose", a);
  }, f = () => {
    o.off("modeChange", s);
  }, s = (n) => {
    if (n !== g.Mode.Panorama) {
      e.fiveModeEnabled = !1, r();
      return;
    }
    o.once("initAnimationEnded", () => {
      e.fiveModeEnabled = !0, l();
    });
  };
  return y(), {
    appendTo: p,
    load: m,
    enable: l,
    disable: r,
    dispose: a,
    hooks: e.hooks
  };
};
export {
  O as Plugin,
  O as default
};
