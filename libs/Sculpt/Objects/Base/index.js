var w = Object.defineProperty, v = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty, D = Object.prototype.propertyIsEnumerable;
var c = (s, i, e) => i in s ? w(s, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[i] = e, l = (s, i) => {
  for (var e in i || (i = {}))
    b.call(i, e) && c(s, e, i[e]);
  if (g)
    for (var e of g(i))
      D.call(i, e) && c(s, e, i[e]);
  return s;
}, d = (s, i) => v(s, E(i));
var r = (s, i, e) => (c(s, typeof i != "symbol" ? i + "" : i, e), e);
import { hotkeys as u } from "../../../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { Sculpt as n } from "../../index.js";
import { IObject3D as S } from "../../../shared-utils/three/IObject3D.js";
import { localToWorld as x, worldToLocal as W } from "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/tag.js";
import "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as y } from "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../shared-utils/five/FivePuppet.js";
const p = /* @__PURE__ */ new Map();
class M extends S {
  constructor(e, t) {
    var o, m;
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
    r(this, "on", (e, t, o) => n.modules.fiveDomEvents.addEventListener(this, e, t, o));
    r(this, "off", (...e) => n.modules.fiveDomEvents.removeEventListener(this, ...e));
    r(this, "applyObjectMatrixWorld", (e, t) => {
      const o = t != null ? t : this;
      return o.updateMatrixWorld(), x(o, e);
    });
    r(this, "applyObjectReversalMatrixWorld", (e, t) => {
      const o = t != null ? t : this;
      return o.updateMatrixWorld(), W(o, e);
    });
    e != null && e.id && (this.uuid = e.id), this.config = l({ defaultAction: !0, occlusionVisibility: !0, occlusionMode: "translucence" }, t), e && (y((o = this.config) == null ? void 0 : o.occlusionMode) && (e.style = d(l({}, e.style), { occlusionMode: this.config.occlusionMode })), y((m = this.config) == null ? void 0 : m.occlusionVisibility) && (e.style = d(l({}, e.style), { occlusionVisibility: this.config.occlusionVisibility }))), u("esc", () => {
      this.stopCreating();
    }), this.config.defaultAction && (u("backspace, delete", () => {
      this.selected && this.delete();
    }), this.on("click", () => {
      var f;
      this.editing || (this.select({ only: !0 }), this.editor.enable(), (f = this.parent) == null || f.children.forEach((h) => {
        var a;
        h instanceof M && h !== this && ((a = h._editor) == null || a.disable());
      }));
    }), u("esc", () => {
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
    this.selected = !0, this.highlight(), p.has(this.parent.uuid) || p.set(this.parent.uuid, []);
    const t = p.get(this.parent.uuid);
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
    n.modules.cursor.showDeleteButton({ clientX: e, clientY: t, container: document.body, onClick: () => this.delete() }), n.modules.five.once("cameraUpdate", () => {
      n.modules.cursor.removeDeleteButton();
    });
  }
}
export {
  M as BaseObject
};
