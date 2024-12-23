var m = Object.defineProperty;
var p = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var h = (n, i, e) => i in n ? m(n, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[i] = e, a = (n, i) => {
  for (var e in i || (i = {}))
    g.call(i, e) && h(n, e, i[e]);
  if (p)
    for (var e of p(i))
      y.call(i, e) && h(n, e, i[e]);
  return n;
};
var s = (n, i, e) => (h(n, typeof i != "symbol" ? i + "" : i, e), e);
import { hotkeys as c } from "../../../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { Sculpt as r } from "../../index.js";
import { IObject3D as v } from "../../../shared-utils/three/IObject3D.js";
import { localToWorld as M, worldToLocal as w } from "../../../shared-utils/three/applyObjectMatrixWorld.js";
import { removeAllTag as E } from "../../utils/removeAllTag.js";
const d = /* @__PURE__ */ new Map();
class f extends v {
  constructor(e, t) {
    super();
    s(this, "name", "Sculpt");
    s(this, "isSculptObject", !0);
    s(this, "draggable");
    /**
     * @description 是否被选中
     */
    s(this, "selected");
    /**
     * @description 配置
     */
    s(this, "config");
    s(this, "on", (e, t, o) => r.modules.fiveDomEvents.addEventListener(this, e, t, o));
    s(this, "off", (...e) => r.modules.fiveDomEvents.removeEventListener(this, ...e));
    s(this, "applyObjectMatrixWorld", (e, t) => {
      const o = t != null ? t : this;
      return o.updateMatrixWorld(), M(o, e);
    });
    s(this, "applyObjectReversalMatrixWorld", (e, t) => {
      const o = t != null ? t : this;
      return o.updateMatrixWorld(), w(o, e);
    });
    e != null && e.id && (this.uuid = e.id), this.config = a({ defaultAction: !0, occlusionVisibility: !0, occlusionMode: "translucence" }, t), e != null && e.style && (e.style.occlusionVisibility = this.config.occlusionVisibility, e.style.occlusionMode = this.config.occlusionMode), this.addEventListener("removed", () => {
      E(this);
    }), c("esc", () => {
      this.stopCreating();
    }), this.config.defaultAction && (c("backspace, delete", () => {
      this.selected && this.delete();
    }), this.on("click", () => {
      var o;
      this.editing || (this.select({ only: !0 }), this.editor.enable(), (o = this.parent) == null || o.children.forEach((l) => {
        var u;
        l instanceof f && l !== this && ((u = l._editor) == null || u.disable());
      }));
    }), c("esc", () => {
      this.selected && this.unselect();
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
    return r.modules.pointSelector;
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
    r.modules.pointSelector.disable();
  }
  /**
   * @description 从场景中删除当前物体，并且移除事件监听
   */
  delete() {
    var e;
    this.stopCreating(), this.removeFromParent(), this.off(), (e = this.editor) == null || e.disable();
  }
  /**
   * @description 选择当前物体
   * @param params.only 只选择当前物体，自动取消选择其他物体；默认 `false`
   *
   */
  select(e = { only: !1 }) {
    if (this.selected)
      return;
    this.selected = !0, this.highlight(), d.has(this.parent.uuid) || d.set(this.parent.uuid, []);
    const t = d.get(this.parent.uuid);
    t.push(this), e.only && (t == null || t.forEach((o) => {
      o !== this && o.unselect();
    }));
  }
  /**
   * @description 取消选择当前物体
   */
  unselect() {
    var e;
    this.selected && (this.selected = !1, this.unhighlight(), (e = this._editor) == null || e.disable());
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
  showDeleteButton(e, t) {
    r.modules.cursor.showDeleteButton({ clientX: e, clientY: t, container: document.body, onClick: () => this.delete() }), r.modules.five.once("cameraUpdate", () => {
      r.modules.cursor.removeDeleteButton();
    });
  }
}
export {
  f as BaseObject
};
