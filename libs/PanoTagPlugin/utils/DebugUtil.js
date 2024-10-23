var c = Object.defineProperty;
var a = (t, i, e) => i in t ? c(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e;
var o = (t, i, e) => (a(t, typeof i != "symbol" ? i + "" : i, e), e);
import { safeObj as g } from "../../shared-utils/safeObj.js";
import { addDebugPoints as d } from "./addDebugPoints.js";
import "three";
import "../../shared-utils/positionToVector3.js";
class y {
  constructor(i) {
    o(this, "plugin");
    o(this, "logBinded", !1);
    this.plugin = i;
  }
  get debug() {
    return this.plugin.debug;
  }
  addDebugPoints() {
    try {
      d(this.plugin.five, this.plugin.tags);
    } catch (i) {
      console.error(i);
    }
  }
  bindLog() {
    if (this.logBinded)
      return;
    this.logBinded = !0;
    const i = (e) => {
      Object.getOwnPropertyNames(e).forEach((n) => {
        typeof e[n] == "function" && (e[n] = new Proxy(e[n], {
          apply: (s, l, r) => (["render"].includes(n) || this.addLog(n, ...r), s.apply(l, r))
        }));
      });
    };
    i(this.plugin), i(this.plugin.constructor.prototype);
  }
  addLog(i, ...e) {
    if (this.debug) {
      let n = new Error().stack;
      console.debug(
        `%cPanoTagPlugin%c${i}`,
        "background-color: #35e0ed; color: black; padding:0 6px; border-radius: 3px",
        "padding: 0 3px; color: #f3f47c",
        ...e,
        { stack: n }
      );
    }
  }
  closeIntersectRaycaster() {
    this.plugin.tags.forEach((i) => {
      var e;
      g((e = i == null ? void 0 : i.initialConfig) == null ? void 0 : e.visibleConfig).intersectRaycaster && (i.initialConfig.visibleConfig.intersectRaycaster.enabled = !1);
    }), this.plugin.changeGlobalConfig({
      visibleConfig: {
        intersectRaycaster: {
          enabled: !1
        }
      }
    });
  }
}
export {
  y as DebugUtil
};
