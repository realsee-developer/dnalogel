import { Subscribe as y, Five as s } from "@realsee/five";
import L from "./ItemLabelComponent.js";
import { DISPLAY_STRATEGY_TYPE as g } from "./typings.js";
import { parseModelItemLabelPluginData as E } from "./utils/parseData.js";
import "../vendor/svelte/internal/index.js";
import "three";
import "./ItemLabelItem.js";
import "../vendor/classnames/index.js";
import "../shared-utils/debounce.js";
const C = (n, o) => {
  var a, d;
  const e = {
    container: document.createElement("div"),
    data: null,
    enabled: !0,
    fiveModeEnabled: void 0,
    itemLabels: [],
    wrapper: null,
    app: void 0,
    hooks: new y(),
    modelOcclusionEnable: (a = o == null ? void 0 : o.modelOcclusionEnable) != null ? a : !0,
    displayStrategyType: (d = o == null ? void 0 : o.displayStrategyType) != null ? d : g.SMALL
  };
  e.container.setAttribute("class", "model-item-label-plugin-container"), e.container.style.cssText = `
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 5;
    `, e.container.style.pointerEvents = "none";
  const p = (t) => (e.wrapper = t, t.appendChild(e.container), i(), !0), c = (t) => {
    e.itemLabels = E(t), i();
  }, u = () => (e.enabled || (e.enabled = !0, i()), !0), b = () => (e.enabled && (e.enabled = !1, i()), !0), l = () => {
    f(), e.container.remove();
  }, i = () => {
    var t;
    if (e.wrapper) {
      if (!e.enabled || !e.fiveModeEnabled) {
        (t = e.app) == null || t.$destroy(), e.app = void 0;
        return;
      }
      e.app ? e.app.$set({
        five: n,
        itemLabels: e.itemLabels
      }) : e.app = new L({
        target: e.container,
        props: {
          five: n,
          modelOcclusionEnable: e.modelOcclusionEnable,
          itemLabels: e.itemLabels,
          hooks: e.hooks,
          displayStrategyType: e.displayStrategyType
        }
      });
    }
  }, m = () => {
    n.on("modeChange", r), n.once("dispose", l);
  }, f = () => {
    n.off("modeChange", r);
  }, r = (t) => {
    if (e.enabled) {
      if (t !== s.Mode.Floorplan) {
        e.fiveModeEnabled = !1, i();
        return;
      }
      n.once("initAnimationEnded", () => {
        e.fiveModeEnabled = n.currentMode === s.Mode.Floorplan, i();
      });
    }
  };
  return m(), {
    appendTo: p,
    load: c,
    enable: u,
    disable: b,
    dispose: l,
    hooks: e.hooks
  };
};
export {
  C as ModelItemLabelPlugin,
  C as default
};
