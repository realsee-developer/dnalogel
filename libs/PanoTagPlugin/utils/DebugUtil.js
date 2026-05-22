var l = Object.defineProperty;
var c = (t, i, e) => i in t ? l(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e;
var o = (t, i, e) => (c(t, typeof i != "symbol" ? i + "" : i, e), e);
import { safeObj as g } from "../../shared-utils/safeObj.js";
import { addDebugPoints as a } from "./addDebugPoints.js";
import "three";
import "../../shared-utils/positionToVector3.js";
class h {
  constructor(i) {
    o(this, "plugin");
    o(this, "logBound", !1);
    o(this, "bindLogByObject", (i) => {
      Object.getOwnPropertyNames(i).forEach((e) => {
        try {
          typeof i[e] == "function" && (i[e] = new Proxy(i[e], {
            apply: (n, s, r) => (["render"].includes(e) || this.log(e, { obj: i }, ...r), n.apply(s, r))
          }));
        } catch (n) {
        }
      });
    });
    this.plugin = i;
  }
  get debug() {
    return this.plugin.debug;
  }
  addDebugPoints() {
    try {
      a(this.plugin.five, this.plugin.tags);
    } catch (i) {
      console.error(i);
    }
  }
  bindLog() {
    this.logBound || (this.logBound = !0, this.bindLogByObject(this.plugin), this.bindLogByObject(this.plugin.constructor.prototype));
  }
  log(i, ...e) {
    let n = new Error().stack;
    console.debug(
      `%cPanoTagPlugin%c${i}`,
      "background-color: #35e0ed; color: black; padding:0 6px; border-radius: 3px",
      "padding: 0 3px; color: #f3f47c",
      ...e,
      { stack: n }
    );
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
  h as DebugUtil
};
