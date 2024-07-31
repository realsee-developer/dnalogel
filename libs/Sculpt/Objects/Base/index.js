var b = Object.defineProperty;
var u = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
var n = (s, t, e) => t in s ? b(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, d = (s, t) => {
  for (var e in t || (t = {}))
    g.call(t, e) && n(s, e, t[e]);
  if (u)
    for (var e of u(t))
      a.call(t, e) && n(s, e, t[e]);
  return s;
};
var o = (s, t, e) => (n(s, typeof t != "symbol" ? t + "" : t, e), e);
import { hotkeys as p } from "../../../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { Sculpt as r } from "../../index.js";
import { IObject3D as m } from "../../../shared-utils/three/IObject3D.js";
import { applyObjectMatrixWorld as y } from "../../../shared-utils/three/applyObjectMatrixWorld.js";
const f = /* @__PURE__ */ new Map();
class E extends m {
  constructor(e, l) {
    super();
    o(this, "name", "Sculpt");
    o(this, "isSculptObject", !0);
    o(this, "draggable");
    /**
     * @description 是否被选中
     */
    o(this, "selected");
    /**
     * @description 配置
     */
    o(this, "config");
    o(this, "editor");
    o(this, "on", (e, l, i) => r.modules.fiveDomEvents.addEventListener(this, e, l, i));
    o(this, "off", (...e) => r.modules.fiveDomEvents.removeEventListener(this, ...e));
    e != null && e.id && (this.uuid = e.id), this.config = d({ canEdit: !0, occlusionVisibility: !0, occlusionMode: "translucence" }, l), e != null && e.style && (e.style.occlusionVisibility = this.config.occlusionVisibility, e.style.occlusionMode = this.config.occlusionMode), this.config.canEdit && (p("backspace, delete", () => {
      this.selected && this.delete();
    }), this.on("click", () => {
      var c, h;
      if (this.pointSelector.enabled)
        return;
      let i = f.get(this.parent.uuid);
      i && (i.selected = !1, i.unhighlight(), (c = i.editor) == null || c.disable()), f.set(this.parent.uuid, this), this.selected = !0, this.highlight(), (h = this.editor) == null || h.enable();
    }), p("esc", () => {
      var i;
      this.selected = !1, this.unhighlight(), !this.pointSelector.enabled && ((i = this.editor) == null || i.disable());
    }));
  }
  get baseData() {
    return {
      id: this.uuid,
      type: this.type
    };
  }
  get pointSelector() {
    return r.modules.pointSelector;
  }
  /**
   * @description 停止创建当前物体，等同于`esc`
   */
  stopCreating() {
    r.modules.pointSelector.disable();
  }
  /**
   * @description 从场景中删除当前物体，并且移除事件监听
   */
  delete() {
    var e;
    this.removeFromParent(), this.off(), (e = this.editor) == null || e.disable();
  }
  /**
   * @description 高亮当前物体
   */
  highlight() {
  }
  /**
   * @description 取消高亮当前物体
   */
  unhighlight() {
  }
  applyObjectMatrixWorld(e) {
    return y(this, e);
  }
  applyObjectQuaternion(e) {
    const l = this.quaternion.clone();
    return Array.isArray(e) ? e.map((i) => i.clone().applyQuaternion(l)) : e.clone().applyQuaternion(l);
  }
}
export {
  E as BaseObject
};
