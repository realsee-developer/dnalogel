var x = Object.defineProperty;
var P = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty, W = Object.prototype.propertyIsEnumerable;
var S = (l, o, e) => o in l ? x(l, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[o] = e, n = (l, o) => {
  for (var e in o || (o = {}))
    I.call(o, e) && S(l, e, o[e]);
  if (P)
    for (var e of P(o))
      W.call(o, e) && S(l, e, o[e]);
  return l;
};
var f = (l, o, e) => (S(l, typeof o != "symbol" ? o + "" : o, e), e);
var g = (l, o, e) => new Promise((t, r) => {
  var s = (h) => {
    try {
      b(e.next(h));
    } catch (p) {
      r(p);
    }
  }, m = (h) => {
    try {
      b(e.throw(h));
    } catch (p) {
      r(p);
    }
  }, b = (h) => h.done ? t(h.value) : Promise.resolve(h.value).then(s, m);
  b((e = e.apply(l, o)).next());
});
import { Controller as L } from "../base/BasePlugin.js";
import "three";
import { MoveHelper as _ } from "../shared-utils/Object3DHelper/Helper/MoveHelper.js";
import { RotateHelper as $ } from "../shared-utils/Object3DHelper/Helper/RotateHelper.js";
import { CSS3DScaleHelper as F } from "../shared-utils/Object3DHelper/Helper/CSS3DScaleHelper.js";
import { BoundingBoxHelper as G } from "../shared-utils/Object3DHelper/Helper/BoundingBoxHelper.js";
import { MoveController as U } from "../shared-utils/Object3DHelper/Controller/MoveController.js";
import { ControllerWrapper as H } from "./FiveControllerWrapper.js";
import { Object3DHelper as N } from "../shared-utils/Object3DHelper/index.js";
import { RotateController as V } from "../shared-utils/Object3DHelper/Controller/RotateController.js";
import { CSS3DScaleController as q } from "../shared-utils/Object3DHelper/Controller/CSS3DScaleController.js";
import { CSS3DRender as z } from "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import A from "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { BoundingBoxController as J } from "../shared-utils/Object3DHelper/Controller/BoundingBoxController.js";
import { ScaleHelper as K } from "../shared-utils/Object3DHelper/Helper/ScaleHelper.js";
import { ScaleController as Q } from "../shared-utils/Object3DHelper/Controller/ScaleController.js";
import { waitFiveModelLoaded as T } from "../shared-utils/five/fiveModelLoad.js";
import { Subscribe as R } from "../shared-utils/Subscribe.js";
import "hammerjs";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "animejs";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Object3DHelper/Base/BaseHelper.js";
import "../shared-utils/Object3DHelper/utils/setObjectQuaternion.js";
import "../shared-utils/three/IObject3D.js";
import "../shared-utils/Object3DHelper/utils/boundingBox.js";
import "../shared-utils/Object3DHelper/Helper/Objects/ArrowGroup.js";
import "../shared-utils/Object3DHelper/utils/direction.js";
import "../shared-utils/Object3DHelper/Constants/color.js";
import "../shared-utils/Object3DHelper/utils/calculateScaleByCamera.js";
import "../shared-utils/Object3DHelper/Helper/HTML/tipsDom.js";
import "../shared-utils/Object3DHelper/Helper/HTML/utils/createElement.js";
import "../shared-utils/Object3DHelper/Helper/HTML/rectangleScaleDom.js";
import "../shared-utils/Object3DHelper/Base/BaseController.js";
import "../shared-utils/threex/domevents/index.js";
import "../shared-utils/isNil.js";
import "../shared-utils/util.js";
import "../shared-utils/Object3DHelper/utils/getMouseRaycaster.js";
import "../shared-utils/Object3DHelper/utils/calculateThreeMouse.js";
import "../Sculpt/utils/three/rayOnLine.js";
import "../shared-utils/math/rad2Deg.js";
import "../shared-utils/math/deg2Rad.js";
import "../shared-utils/Object3DHelper/Controller/RectangleScaleController.js";
import "../shared-utils/Object3DHelper/utils/vectorIsEqual.js";
import "../shared-utils/positionToVector3.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../CSS3DRenderPlugin/utils/even.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
const w = "Object3DHelperPlugin", D = w, X = () => {
  console.error(`${D} is disposed`);
}, Y = () => {
  console.warn(`${D} is disabled`);
}, Z = () => {
  console.error(`${D} is disabled`);
};
class ar extends L {
  constructor(e) {
    super(e);
    f(this, "name", w);
    f(this, "state", {
      visible: !0,
      enabled: !0,
      disposed: !1
    });
    f(this, "objectHelperMap", /* @__PURE__ */ new Map());
    f(this, "css3DObjectParentMap", /* @__PURE__ */ new Map());
    f(this, "css3DRender");
    this.five = e, this.css3DRender = new z(this.five.scene), console.warn("Object3DHelper: 使用此插件，需要在初始化five时，设置five参数: { backgroundAlpha: 0, backgroundColor: 0x000000 }"), Object.assign(window, { [`__${w.toUpperCase()}_DEBUG__`]: this });
  }
  /**
   * @description Show guide line
   */
  show(e) {
    return g(this, null, function* () {
      this.setState({ visible: !0 }, e);
    });
  }
  /**
   * @description Hide guide line
   */
  hide(e) {
    return g(this, null, function* () {
      this.setState({ visible: !1 }, e);
    });
  }
  /**
   * @description Enable
   */
  enable(e) {
    this.setState({ enabled: !0 }, e);
  }
  /**
   * @description Disable
   */
  disable(e) {
    this.setState({ enabled: !1 }, e);
  }
  /**
   * @description Dispose
   */
  dispose() {
    this.setState({ disposed: !0 });
  }
  setState(e, t) {
    if (this.state.disposed)
      return X();
    if (!this.state.enabled && e.enabled !== !0 && e.disposed !== !0)
      return Z();
    const r = n({}, this.state);
    this.state = n(n({}, this.state), e), e.disposed !== void 0 && e.disposed !== r.disposed && e.disposed && this.handleDispose(), e.visible !== void 0 && e.visible !== r.visible && this.handleVisible(e.visible), e.enabled !== void 0 && e.enabled !== r.enabled && this.handleEnable(e.enabled), this.hooks.emit("stateChange", { state: this.state, prevState: r });
  }
  getObject3DHelper(e) {
    return this.objectHelperMap.get(e);
  }
  /**
   * @description 添加 helper
   * @param { THREE.Object3D } object3D       要添加helper的物体
   * @param { boolean } config.moveHelper     位移helper
   * @param { boolean } config.rotateHelper   旋转helper
   * @param { boolean } config.scaleHelper    缩放helper
   */
  addObject3DHelper(e, t = {}) {
    var M;
    if (!e) {
      console.error("Object3D is undefined");
      return;
    }
    if (this.objectHelperMap.has(e)) {
      console.warn(`Object3DHelperPlugin: object3D ${e.name} is already has helper`);
      return;
    }
    const r = new N(), s = [], m = (M = this.five.getElement()) == null ? void 0 : M.parentElement, b = this.five.camera, p = n(n({}, {
      moveHelper: !0,
      rotateHelper: !0,
      scaleHelper: !0,
      boundingBoxHelper: !1,
      positionFrom: "objectPosition"
    }), t), { moveHelper: y, rotateHelper: B, scaleHelper: j, boundingBoxHelper: k, positionFrom: ee } = p, u = new R(), v = new R(), C = (i) => {
      if (i)
        return typeof i == "boolean" ? i : i.enable;
    };
    if (C(y)) {
      const i = n(n({}, this.getConfig(p.moveHelper)), p), d = new _(e, n({}, i)), a = new H(this.five, U, e, d, i, u, v);
      r.addControllers({ moveController: a.helperController }), s.push(() => a.dispose());
    }
    if (C(B)) {
      const i = n(n({}, this.getConfig(p.rotateHelper)), p), d = new $(e, n({ container: m }, i)), a = new H(this.five, V, e, d, i, u, v);
      r.addControllers({ rotateController: a.helperController }), s.push(() => a.dispose());
    }
    if (C(k)) {
      const i = new G(e), d = new H(
        this.five,
        J,
        e,
        i,
        void 0,
        u,
        v
      );
      r.addControllers({ boundingBoxController: d.helperController });
    }
    if (C(j))
      if (e.isCSS3DObjectPlus && m) {
        const i = new F(e, m, b, this.five.scene), d = new H(
          this.five,
          q,
          e,
          i,
          void 0,
          u,
          v
        );
        r.addControllers({ scaleController: d.helperController }), s.push(() => d.dispose()), T(this.five).then(() => {
          var a, O;
          if (e.isCSS3DObjectPlus) {
            const c = e;
            if (!c || c.mode !== "front")
              return;
            const E = (a = this.css3DRender.behindModeCSS3DRenderer.wrapper) != null ? a : A(this.five);
            E && (this.css3DObjectParentMap.set(c, c.parent), c.removeFromParent(), this.css3DRender.behindModeCSS3DRenderer.setWrapper(E), (O = this.css3DRender.getBehindCSS3DObjectGroup()) == null || O.add(c), this.css3DRender.render(this.five.camera));
          }
        });
      } else {
        const i = n(n({}, this.getConfig(p.scaleHelper)), p), d = new K(e, i), a = new H(this.five, Q, e, d, i, u, v);
        r.addControllers({ scaleController: a.helperController }), s.push(() => a.dispose());
      }
    return this.objectHelperMap.set(e, { helper: r, disposers: s }), r.controllers;
  }
  removeObject3DHelper(e) {
    if (!this.objectHelperMap.has(e))
      return;
    const { helper: t, disposers: r } = this.objectHelperMap.get(e);
    if (t) {
      if (e.isCSS3DObjectPlus) {
        const s = e, m = this.css3DObjectParentMap.get(s);
        m && m.add(s), this.css3DRender.render(this.five.camera);
      }
      this.objectHelperMap.delete(e), t.dispose(), r == null || r.forEach((s) => s == null ? void 0 : s());
    }
  }
  handleEnable(e, t = !0) {
    e ? (this.everyHelperDo((r) => r.enable()), this.hooks.emit("enable", { userAction: t })) : (this.everyHelperDo((r) => r.disable()), this.hooks.emit("disable", { userAction: t })), this.state.enabled = e;
  }
  handleVisible(e, t = !0) {
    e ? (this.everyHelperDo((r) => r.show()), this.actionIfStateIsEnabled(() => this.hooks.emit("show", { userAction: t }))) : (this.everyHelperDo((r) => r.hide()), this.actionIfStateIsEnabled(() => this.hooks.emit("hide", { userAction: t }))), this.state.visible = e;
  }
  handleDispose() {
    this.everyHelperDo((e, t) => {
      e.dispose(), t == null || t.forEach((r) => r == null ? void 0 : r());
    });
  }
  everyHelperDo(e) {
    this.objectHelperMap.forEach(({ helper: t, disposers: r }) => {
      t && e(t, r);
    });
  }
  actionIfStateIsEnabled(e, t) {
    if (this.state.enabled)
      return e();
    t != null && t.warnLog && Y();
  }
  getConfig(e) {
    if (e && typeof e != "boolean" && e.enable)
      return e;
  }
}
export {
  ar as Object3DHelperController,
  D as PLUGIN
};
