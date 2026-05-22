var I = Object.defineProperty;
var B = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var w = (n, i, e) => i in n ? I(n, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[i] = e, p = (n, i) => {
  for (var e in i || (i = {}))
    W.call(i, e) && w(n, e, i[e]);
  if (B)
    for (var e of B(i))
      L.call(i, e) && w(n, e, i[e]);
  return n;
};
var f = (n, i, e) => (w(n, typeof i != "symbol" ? i + "" : i, e), e);
var O = (n, i, e) => new Promise((r, t) => {
  var s = (d) => {
    try {
      u(e.next(d));
    } catch (l) {
      t(l);
    }
  }, h = (d) => {
    try {
      u(e.throw(d));
    } catch (l) {
      t(l);
    }
  }, u = (d) => d.done ? r(d.value) : Promise.resolve(d.value).then(s, h);
  u((e = e.apply(n, i)).next());
});
import { Controller as _ } from "../base/BasePlugin.js";
import "three";
import "../shared-utils/three/core/Sphere.js";
import { MoveHelper as $ } from "../shared-utils/Object3DHelper/Helper/MoveHelper.js";
import { RotateHelper as F } from "../shared-utils/Object3DHelper/Helper/RotateHelper.js";
import { CSS3DScaleHelper as G } from "../shared-utils/Object3DHelper/Helper/CSS3DScaleHelper.js";
import { BoundingBoxHelper as U } from "../shared-utils/Object3DHelper/Helper/BoundingBoxHelper.js";
import { MoveController as N } from "../shared-utils/Object3DHelper/Controller/MoveController.js";
import { ControllerWrapper as S } from "./FiveControllerWrapper.js";
import { Object3DHelper as V } from "../shared-utils/Object3DHelper/index.js";
import { RotateController as q } from "../shared-utils/Object3DHelper/Controller/RotateController.js";
import { CSS3DScaleController as z } from "../shared-utils/Object3DHelper/Controller/CSS3DScaleController.js";
import { CSS3DRender as A } from "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import J from "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { BoundingBoxController as K } from "../shared-utils/Object3DHelper/Controller/BoundingBoxController.js";
import { ScaleHelper as Q } from "../shared-utils/Object3DHelper/Helper/ScaleHelper.js";
import { ScaleController as T } from "../shared-utils/Object3DHelper/Controller/ScaleController.js";
import { waitFiveModelLoaded as X } from "../shared-utils/five/fiveModelLoad.js";
import { Subscribe as Y } from "../shared-utils/Subscribe.js";
import { DomEvents as Z } from "../shared-utils/threex/domevents/index.js";
import "../shared-utils/tag.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/three/core/Raycaster.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/five/fiveEveryReadyListener.js";
import "../shared-utils/throttle.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../shared-utils/three/Magnifier.js";
import "../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../shared-utils/three/Assets/index.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../shared-utils/even.js";
import "../shared-utils/CSS3DRender/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "@realsee/five/line";
import "../shared-utils/isNil.js";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/blink.js";
import "../vendor/animejs/lib/anime.es.js";
import "../shared-utils/util.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../vendor/earcut/src/earcut.js";
import "../shared-utils/five/FivePuppet.js";
import "@realsee/five";
import "../shared-utils/three/PointSelector/utils/html.js";
import "../shared-utils/CSS3DRender/index.js";
import "../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../shared-utils/createResizeObserver.js";
import "../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../Sculpt/Meshes/Line.js";
import "../Sculpt/typings/style.js";
import "../shared-utils/three/IObject3D.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/five/getFiveFromParentChain.js";
import "../shared-utils/three/core/LineGeometry.js";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
import "../Sculpt/utils/unit.js";
import "../Sculpt/utils/renderDom.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getPosition.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
import "../Sculpt/utils/three/rayOnLine.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../shared-utils/url/defaultUrls.js";
import "../shared-utils/Object3DHelper/Base/BaseHelper.js";
import "../shared-utils/Object3DHelper/utils/setObjectQuaternion.js";
import "../shared-utils/three/boundingBox.js";
import "../shared-utils/Object3DHelper/Helper/Objects/ArrowGroup.js";
import "../shared-utils/Object3DHelper/utils/direction.js";
import "../shared-utils/Object3DHelper/Constants/RenderOrder.js";
import "../shared-utils/Object3DHelper/Helper/Objects/CenterHandle.js";
import "../shared-utils/Object3DHelper/Constants/color.js";
import "../shared-utils/Object3DHelper/utils/calculateScaleByCamera.js";
import "../shared-utils/Object3DHelper/utils/getPoseFromCamera.js";
import "../shared-utils/clamp.js";
import "../shared-utils/formatRad.js";
import "../shared-utils/Object3DHelper/utils/getOrthographicCameraDirection.js";
import "../shared-utils/Object3DHelper/Helper/HTML/tipsDom.js";
import "../shared-utils/Object3DHelper/Helper/HTML/utils/createElement.js";
import "../shared-utils/Object3DHelper/Helper/HTML/rectangleScaleDom.js";
import "../shared-utils/Object3DHelper/utils/cameraHooks.js";
import "../shared-utils/Object3DHelper/Base/BaseController.js";
import "../shared-utils/Object3DHelper/utils/solidGuide.js";
import "../shared-utils/Object3DHelper/utils/getMouseRaycaster.js";
import "../shared-utils/Object3DHelper/utils/calculateThreeMouse.js";
import "../shared-utils/math/rad2Deg.js";
import "../shared-utils/math/deg2Rad.js";
import "../shared-utils/Object3DHelper/Controller/RectangleScaleController.js";
import "../shared-utils/three/vectorIsEqual.js";
import "../shared-utils/three/getNormal.js";
const M = "Object3DHelperPlugin", E = M, ee = () => {
  console.error(`${E} is disposed`);
}, te = () => {
  console.warn(`${E} is disabled`);
}, re = () => {
  console.error(`${E} is disabled`);
};
class ir extends _ {
  constructor(e) {
    super(e);
    f(this, "name", M);
    f(this, "state", {
      visible: !0,
      enabled: !0,
      disposed: !1
    });
    f(this, "objectHelperMap", /* @__PURE__ */ new Map());
    f(this, "css3DObjectParentMap", /* @__PURE__ */ new Map());
    f(this, "css3DObjectModeMap", /* @__PURE__ */ new Map());
    f(this, "css3DRender");
    this.five = e, this.css3DRender = new A(this.five.scene), console.warn("Object3DHelper: 使用此插件，需要在初始化five时，设置five参数: { backgroundAlpha: 0, backgroundColor: 0x000000 }"), Object.assign(window, { [`__${M.toUpperCase()}_DEBUG__`]: this });
  }
  /**
   * @description Show guide line
   */
  show(e) {
    return O(this, null, function* () {
      this.setState({ visible: !0 }, e);
    });
  }
  /**
   * @description Hide guide line
   */
  hide(e) {
    return O(this, null, function* () {
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
  setState(e, r) {
    if (this.state.disposed)
      return ee();
    if (!this.state.enabled && e.enabled !== !0 && e.disposed !== !0)
      return re();
    const t = p({}, this.state);
    this.state = p(p({}, this.state), e), e.disposed !== void 0 && e.disposed !== t.disposed && e.disposed && this.handleDispose(), e.visible !== void 0 && e.visible !== t.visible && this.handleVisible(e.visible), e.enabled !== void 0 && e.enabled !== t.enabled && this.handleEnable(e.enabled), this.hooks.emit("stateChange", { state: this.state, prevState: t });
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
  addObject3DHelper(e, r = {}) {
    var D;
    if (!e) {
      console.error("Object3D is undefined");
      return;
    }
    if (this.objectHelperMap.has(e)) {
      console.warn(`Object3DHelperPlugin: object3D ${e.name} is already has helper`);
      return;
    }
    const t = new V(), s = [], h = (D = this.five.getElement()) == null ? void 0 : D.parentElement, u = this.five.camera, l = p(p({}, {
      moveHelper: !0,
      rotateHelper: !0,
      scaleHelper: !0,
      boundingBoxHelper: !1,
      positionFrom: "objectPosition"
    }), r), { moveHelper: P, rotateHelper: k, scaleHelper: x, boundingBoxHelper: j } = l, v = t.hooks, H = new Y(), C = new Z(this.five.camera, this.five.getElement()), g = (o) => {
      if (o)
        return typeof o == "boolean" ? o : o.enable;
    }, c = {};
    if (g(P)) {
      const o = p(p({}, this.getConfig(l.moveHelper)), l), m = new $(e, p({}, o)), a = new S(
        this.five,
        C,
        N,
        e,
        m,
        o,
        v,
        H
      );
      c.moveController = a.helperController, s.push(() => a.dispose());
    }
    if (g(k)) {
      const o = p(p({}, this.getConfig(l.rotateHelper)), l), m = new F(e, p({ container: h }, o)), a = new S(
        this.five,
        C,
        q,
        e,
        m,
        o,
        v,
        H
      );
      c.rotateController = a.helperController, s.push(() => a.dispose());
    }
    if (g(j)) {
      const o = new U(e), m = new S(
        this.five,
        C,
        K,
        e,
        o,
        void 0,
        v,
        H
      );
      c.boundingBoxController = m.helperController, s.push(() => m.dispose());
    }
    if (g(x))
      if (e.isCSS3DObject && h) {
        const o = new G(e, h, u, this.five.scene), m = new S(
          this.five,
          C,
          z,
          e,
          o,
          void 0,
          v,
          H
        );
        c.scaleController = m.helperController, s.push(() => m.dispose()), X(this.five).then(() => {
          var a, y;
          if (e.isCSS3DObjectPlus) {
            const b = e;
            if (!b || b.mode !== "front")
              return;
            const R = (a = this.css3DRender.behindModeCSS3DRenderer.wrapper) != null ? a : J(this.five);
            R && (this.css3DObjectParentMap.set(b, b.parent), b.removeFromParent(), this.css3DRender.behindModeCSS3DRenderer.setWrapper(R), (y = this.css3DRender.getBehindCSS3DObjectGroup()) == null || y.add(b), this.css3DRender.render(this.five.camera));
          } else
            e.isCSS3DObject && (this.css3DObjectModeMap.set(e, e.mode), e.mode = "behind");
        });
      } else {
        const o = p(p({}, this.getConfig(l.scaleHelper)), l), m = new Q(e, o), a = new S(
          this.five,
          C,
          T,
          e,
          m,
          o,
          v,
          H
        );
        c.scaleController = a.helperController, s.push(() => a.dispose());
      }
    return Object.values(c).forEach((o) => {
      o && typeof o.updateOtherControllers == "function" && o.updateOtherControllers(c);
    }), t.addControllers(c), this.objectHelperMap.set(e, { helper: t, disposers: s }), t.controllers;
  }
  removeObject3DHelper(e) {
    if (!this.objectHelperMap.has(e))
      return;
    const { helper: r, disposers: t } = this.objectHelperMap.get(e);
    if (r) {
      if (e.isCSS3DObjectPlus) {
        const s = e, h = this.css3DObjectParentMap.get(s);
        h && h.add(s), this.css3DRender.render(this.five.camera);
      } else if (e.isCSS3DObject) {
        const s = this.css3DObjectModeMap.get(e);
        e.mode = s;
      }
      this.objectHelperMap.delete(e), r.dispose(), t == null || t.forEach((s) => s == null ? void 0 : s());
    }
  }
  handleEnable(e, r = !0) {
    e ? (this.everyHelperDo((t) => t.enable()), this.hooks.emit("enable", { userAction: r })) : (this.everyHelperDo((t) => t.disable()), this.hooks.emit("disable", { userAction: r })), this.state.enabled = e;
  }
  handleVisible(e, r = !0) {
    e ? (this.everyHelperDo((t) => t.show()), this.actionIfStateIsEnabled(() => this.hooks.emit("show", { userAction: r }))) : (this.everyHelperDo((t) => t.hide()), this.actionIfStateIsEnabled(() => this.hooks.emit("hide", { userAction: r }))), this.state.visible = e;
  }
  handleDispose() {
    this.everyHelperDo((e, r) => {
      e.dispose(), r == null || r.forEach((t) => t == null ? void 0 : t());
    });
  }
  everyHelperDo(e) {
    this.objectHelperMap.forEach(({ helper: r, disposers: t }) => {
      r && e(r, t);
    });
  }
  actionIfStateIsEnabled(e, r) {
    if (this.state.enabled)
      return e();
    r != null && r.warnLog && te();
  }
  getConfig(e) {
    if (e && typeof e != "boolean" && e.enable)
      return e;
  }
}
export {
  ir as Object3DHelperController,
  E as PLUGIN
};
