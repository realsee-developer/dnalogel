var m = Object.defineProperty;
var d = Object.getOwnPropertySymbols;
var a = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var l = (o, t, e) => t in o ? m(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, u = (o, t) => {
  for (var e in t || (t = {}))
    a.call(t, e) && l(o, e, t[e]);
  if (d)
    for (var e of d(t))
      f.call(t, e) && l(o, e, t[e]);
  return o;
};
var r = (o, t, e) => (l(o, typeof t != "symbol" ? t + "" : t, e), e);
import { hotkeys as c } from "../../../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { Sculpt as n } from "../../index.js";
import { IObject3D as g } from "../../../shared-utils/three/IObject3D.js";
import { applyObjectMatrixWorld as b } from "../../../shared-utils/three/applyObjectMatrixWorld.js";
import { removeAllTag as y } from "../../utils/removeAllTag.js";
const p = /* @__PURE__ */ new Map();
class O extends g {
  constructor(e, s) {
    super();
    r(this, "name", "Sculpt");
    r(this, "isSculptObject", !0);
    r(this, "draggable");
    /**
     * @description 是否被选中
     */
    r(this, "selected");
    /**
     * @description 配置
     */
    r(this, "config");
    r(this, "editor");
    r(this, "on", (e, s, i) => n.modules.fiveDomEvents.addEventListener(this, e, s, i));
    r(this, "off", (...e) => n.modules.fiveDomEvents.removeEventListener(this, ...e));
    e != null && e.id && (this.uuid = e.id), this.config = u({ canEdit: !0, occlusionVisibility: !0, occlusionMode: "translucence" }, s), e != null && e.style && (e.style.occlusionVisibility = this.config.occlusionVisibility, e.style.occlusionMode = this.config.occlusionMode), this.addEventListener("removed", () => {
      y(this);
    }), c("esc", () => {
      this.stopCreating();
    }), this.config.canEdit && (c("backspace, delete", () => {
      this.selected && this.delete();
    }), this.on("click", () => {
      var h;
      if (this.pointSelector.enabled)
        return;
      let i = p.get(this.parent.uuid);
      i && (i.selected = !1, i.unhighlight(), (h = i.editor) == null || h.disable()), p.set(this.parent.uuid, this), this.selected = !0, this.highlight();
    }), c("esc", () => {
      var i;
      this.selected = !1, this.unhighlight(), !this.pointSelector.enabled && ((i = this.editor) == null || i.disable());
    }));
  }
  get editing() {
    return this.pointSelector.enabled;
  }
  get baseData() {
    return {
      id: this.uuid,
      type: this.type
    };
  }
  get pointSelector() {
    return n.modules.pointSelector;
  }
  /**
   * @description 撤销
   */
  undo() {
    throw new Error("Method not implemented.");
  }
  /**
   * @description 重做
   */
  redo() {
    throw new Error("Method not implemented.");
  }
  /**
   * @description 是否可以撤销
   */
  canUndo() {
    throw new Error("Method not implemented.");
  }
  /**
   * @description 是否可以重做
   */
  canRedo() {
    throw new Error("Method not implemented.");
  }
  /**
   * @description 停止创建当前物体，等同于`esc`
   */
  stopCreating() {
    n.modules.pointSelector.disable();
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
  /**
   * @description 显示删除按钮
   */
  showDeleteButton(e, s) {
    n.modules.cursor.showDeleteButton({ clientX: e, clientY: s, container: document.body, onClick: () => this.delete() }), n.modules.five.once("cameraUpdate", () => {
      n.modules.cursor.removeDeleteButton();
    });
  }
  applyObjectMatrixWorld(e) {
    return this.updateMatrixWorld(), b(this, e);
  }
  applyObjectQuaternion(e) {
    const s = this.quaternion.clone();
    return Array.isArray(e) ? e.map((i) => i.clone().applyQuaternion(s)) : e.clone().applyQuaternion(s);
  }
}
export {
  O as BaseObject
};
