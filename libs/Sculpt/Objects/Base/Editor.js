var j = Object.defineProperty, m = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var O = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var h = (i, e, t) => e in i ? j(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, s = (i, e) => {
  for (var t in e || (e = {}))
    g.call(e, t) && h(i, t, e[t]);
  if (O)
    for (var t of O(e))
      k.call(e, t) && h(i, t, e[t]);
  return i;
}, n = (i, e) => m(i, S(e));
var r = (i, e, t) => (h(i, typeof e != "symbol" ? e + "" : e, t), t);
import { Sculpt as a } from "../../index.js";
import { IObject3D as v } from "../../../shared-utils/three/IObject3D.js";
import { Subscribe as E } from "../../../shared-utils/Subscribe.js";
class H extends v {
  constructor(t) {
    super();
    r(this, "hooks", new E());
    r(this, "originObject");
    this.originObject = t;
  }
  /**
   * @description: 开启编辑器
   */
  enable() {
    this.originObject.add(this);
  }
  /**
   * @description: 禁用编辑器
   */
  disable() {
    this.originObject.remove(this);
  }
}
class U extends H {
  constructor(t, o) {
    super(t);
    r(this, "objectHelperConfig");
    // 记录当前操作的类型、开始时间和轴向
    r(this, "currentOperation", null);
    // 记录移动操作开始
    r(this, "onMoveStart", (t) => {
      this.currentOperation = {
        type: "move",
        start_timestamp: Date.now(),
        axis: t
      };
    });
    // 记录旋转操作开始
    r(this, "onRotateStart", (t) => {
      this.currentOperation = {
        type: "rotate",
        start_timestamp: Date.now(),
        axis: t
      };
    });
    // 记录缩放操作开始
    r(this, "onScaleStart", (t) => {
      this.currentOperation = {
        type: "scale",
        start_timestamp: Date.now(),
        axis: t
      };
    });
    // 移动中的处理
    r(this, "onMove", () => {
      this.currentOperation && (this.currentOperation = n(s({}, this.currentOperation), {
        status: "moving"
      }), this.onObjectUpdate(!1));
    });
    // 旋转中的处理
    r(this, "onRotate", () => {
      this.currentOperation && (this.currentOperation = n(s({}, this.currentOperation), {
        status: "rotating"
      }), this.onObjectUpdate(!1));
    });
    // 缩放中的处理
    r(this, "onScale", () => {
      this.currentOperation && (this.currentOperation = n(s({}, this.currentOperation), {
        status: "scaling"
      }), this.onObjectUpdate(!1));
    });
    r(this, "onMoveEnd", () => {
      this.onObjectUpdate(!0);
    });
    r(this, "onRotateEnd", () => {
      this.onObjectUpdate(!0);
    });
    r(this, "onScaleEnd", () => {
      this.onObjectUpdate(!0);
    });
    // 统一的触发 objectUpdate 方法
    // @param isHandleEnd 是否为操作结束，true 表示松手，false 表示拖动中
    r(this, "onObjectUpdate", (t = !0) => {
      if (!this.currentOperation) {
        this.hooks.emit("objectUpdate");
        return;
      }
      const o = n(s({}, this.currentOperation), {
        end_timestamp: t ? Date.now() : void 0,
        // 只在松手时设置结束时间
        is_handle_end: t
      });
      this.hooks.emit("objectUpdate", o), t && (this.currentOperation = null);
    });
    this.objectHelperConfig = o;
  }
  get helper() {
    var t;
    return (t = a.modules.object3DHelper.getObject3DHelper(this.originObject)) == null ? void 0 : t.helper;
  }
  enable() {
    super.enable();
    const t = typeof this.objectHelperConfig == "function" ? this.objectHelperConfig() : this.objectHelperConfig;
    a.modules.object3DHelper.addObject3DHelper(this.originObject, s({ positionFrom: "boundingBox" }, t));
    const o = a.modules.object3DHelper.getObject3DHelper(this.originObject).helper;
    o.hooks.on("moveStart", this.onMoveStart), o.hooks.on("rotateStart", this.onRotateStart), o.hooks.on("scaleStart", this.onScaleStart), o.hooks.on("move", this.onMove), o.hooks.on("rotate", this.onRotate), o.hooks.on("scale", this.onScale), o.hooks.on("moveEnd", this.onMoveEnd), o.hooks.on("rotateEnd", this.onRotateEnd), o.hooks.on("scaleEnd", this.onScaleEnd);
  }
  disable() {
    var t, o, c, p, l, b, u, d, f;
    super.disable(), (t = this.helper) == null || t.hooks.off("moveStart", this.onMoveStart), (o = this.helper) == null || o.hooks.off("rotateStart", this.onRotateStart), (c = this.helper) == null || c.hooks.off("scaleStart", this.onScaleStart), (p = this.helper) == null || p.hooks.off("move", this.onMove), (l = this.helper) == null || l.hooks.off("rotate", this.onRotate), (b = this.helper) == null || b.hooks.off("scale", this.onScale), (u = this.helper) == null || u.hooks.off("moveEnd", this.onMoveEnd), (d = this.helper) == null || d.hooks.off("rotateEnd", this.onRotateEnd), (f = this.helper) == null || f.hooks.off("scaleEnd", this.onScaleEnd), a.modules.object3DHelper.removeObject3DHelper(this.originObject);
  }
  initialHelperMatrix() {
    var t;
    (t = this.helper) == null || t.initialHelperMatrix();
  }
}
export {
  H as BaseEditor,
  U as BaseEditorWithObjectHelper
};
