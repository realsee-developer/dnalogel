var l = Object.defineProperty;
var t = (s, i, e) => i in s ? l(s, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[i] = e;
var n = (s, i, e) => (t(s, typeof i != "symbol" ? i + "" : i, e), e);
import { safeObj as a } from "../../shared-utils/safeObj.js";
class r {
  constructor(i) {
    n(this, "plugin");
    this.plugin = i;
  }
  closeIntersectRaycaster() {
    this.plugin.tags.forEach((i) => {
      var e;
      a((e = i == null ? void 0 : i.initialConfig) == null ? void 0 : e.visibleConfig).intersectRaycaster && (i.initialConfig.visibleConfig.intersectRaycaster.enabled = !1);
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
  r as DebugUtil
};
