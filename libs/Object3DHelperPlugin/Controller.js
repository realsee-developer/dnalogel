var I = Object.defineProperty;
var y = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty, j = Object.prototype.propertyIsEnumerable;
var g = (n, o, e) => o in n ? I(n, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[o] = e, p = (n, o) => {
  for (var e in o || (o = {}))
    W.call(o, e) && g(n, e, o[e]);
  if (y)
    for (var e of y(o))
      j.call(o, e) && g(n, e, o[e]);
  return n;
};
var c = (n, o, e) => (g(n, typeof o != "symbol" ? o + "" : o, e), e);
var w = (n, o, e) => new Promise((t, r) => {
  var s = (h) => {
    try {
      b(e.next(h));
    } catch (l) {
      r(l);
    }
  }, d = (h) => {
    try {
      b(e.throw(h));
    } catch (l) {
      r(l);
    }
  }, b = (h) => h.done ? t(h.value) : Promise.resolve(h.value).then(s, d);
  b((e = e.apply(n, o)).next());
});
import { Controller as L } from "../base/BasePlugin.js";
import "three";
import "../shared-utils/three/core/Sphere.js";
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
import { Subscribe as X } from "../shared-utils/Subscribe.js";
import { DomEvents as Y } from "../shared-utils/threex/domevents/index.js";
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
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
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
import "../shared-utils/util.js";
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
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/Object3DHelper/Base/BaseHelper.js";
import "../shared-utils/Object3DHelper/utils/setObjectQuaternion.js";
import "../shared-utils/three/boundingBox.js";
import "../shared-utils/Object3DHelper/Helper/Objects/ArrowGroup.js";
import "../shared-utils/Object3DHelper/utils/direction.js";
import "../shared-utils/Object3DHelper/Constants/color.js";
import "../shared-utils/Object3DHelper/utils/calculateScaleByCamera.js";
import "../shared-utils/Object3DHelper/utils/getPoseFromCamera.js";
import "../shared-utils/clamp.js";
import "../shared-utils/formatRad.js";
import "../shared-utils/Object3DHelper/utils/getOrthographicCameraDirection.js";
import "../shared-utils/Object3DHelper/Helper/HTML/tipsDom.js";
import "../shared-utils/Object3DHelper/Helper/HTML/utils/createElement.js";
import "../shared-utils/Object3DHelper/Helper/HTML/rectangleScaleDom.js";
import "../shared-utils/Object3DHelper/Base/BaseController.js";
import "../shared-utils/Object3DHelper/utils/cameraHooks.js";
import "../shared-utils/Object3DHelper/utils/getMouseRaycaster.js";
import "../shared-utils/Object3DHelper/utils/calculateThreeMouse.js";
import "../shared-utils/math/rad2Deg.js";
import "../shared-utils/math/deg2Rad.js";
import "../shared-utils/Object3DHelper/Controller/RectangleScaleController.js";
import "../shared-utils/three/vectorIsEqual.js";
const M = "Object3DHelperPlugin", O = M, Z = () => {
  console.error(`${O} is disposed`);
}, ee = () => {
  console.warn(`${O} is disabled`);
}, re = () => {
  console.error(`${O} is disabled`);
};
class Tr extends L {
  constructor(e) {
    super(e);
    c(this, "name", M);
    c(this, "state", {
      visible: !0,
      enabled: !0,
      disposed: !1
    });
    c(this, "objectHelperMap", /* @__PURE__ */ new Map());
    c(this, "css3DObjectParentMap", /* @__PURE__ */ new Map());
    c(this, "css3DObjectModeMap", /* @__PURE__ */ new Map());
    c(this, "css3DRender");
    this.five = e, this.css3DRender = new z(this.five.scene), console.warn("Object3DHelper: 使用此插件，需要在初始化five时，设置five参数: { backgroundAlpha: 0, backgroundColor: 0x000000 }"), Object.assign(window, { [`__${M.toUpperCase()}_DEBUG__`]: this });
  }
  /**
   * @description Show guide line
   */
  show(e) {
    return w(this, null, function* () {
      this.setState({ visible: !0 }, e);
    });
  }
  /**
   * @description Hide guide line
   */
  hide(e) {
    return w(this, null, function* () {
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
      return Z();
    if (!this.state.enabled && e.enabled !== !0 && e.disposed !== !0)
      return re();
    const r = p({}, this.state);
    this.state = p(p({}, this.state), e), e.disposed !== void 0 && e.disposed !== r.disposed && e.disposed && this.handleDispose(), e.visible !== void 0 && e.visible !== r.visible && this.handleVisible(e.visible), e.enabled !== void 0 && e.enabled !== r.enabled && this.handleEnable(e.enabled), this.hooks.emit("stateChange", { state: this.state, prevState: r });
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
    var E;
    if (!e) {
      console.error("Object3D is undefined");
      return;
    }
    if (this.objectHelperMap.has(e)) {
      console.warn(`Object3DHelperPlugin: object3D ${e.name} is already has helper`);
      return;
    }
    const r = new N(), s = [], d = (E = this.five.getElement()) == null ? void 0 : E.parentElement, b = this.five.camera, l = p(p({}, {
      moveHelper: !0,
      rotateHelper: !0,
      scaleHelper: !0,
      boundingBoxHelper: !1,
      positionFrom: "objectPosition"
    }), t), { moveHelper: B, rotateHelper: P, scaleHelper: k, boundingBoxHelper: x } = l, u = r.hooks, v = new X(), C = new Y(this.five.camera, this.five.getElement()), S = (i) => {
      if (i)
        return typeof i == "boolean" ? i : i.enable;
    };
    if (S(B)) {
      const i = p(p({}, this.getConfig(l.moveHelper)), l), m = new _(e, p({}, i)), a = new H(
        this.five,
        C,
        U,
        e,
        m,
        i,
        u,
        v
      );
      r.addControllers({ moveController: a.helperController }), s.push(() => a.dispose());
    }
    if (S(P)) {
      const i = p(p({}, this.getConfig(l.rotateHelper)), l), m = new $(e, p({ container: d }, i)), a = new H(
        this.five,
        C,
        V,
        e,
        m,
        i,
        u,
        v
      );
      r.addControllers({ rotateController: a.helperController }), s.push(() => a.dispose());
    }
    if (S(x)) {
      const i = new G(e), m = new H(
        this.five,
        C,
        J,
        e,
        i,
        void 0,
        u,
        v
      );
      r.addControllers({ boundingBoxController: m.helperController });
    }
    if (S(k))
      if (e.isCSS3DObject && d) {
        const i = new F(e, d, b, this.five.scene), m = new H(
          this.five,
          C,
          q,
          e,
          i,
          void 0,
          u,
          v
        );
        r.addControllers({ scaleController: m.helperController }), s.push(() => m.dispose()), T(this.five).then(() => {
          var a, D;
          if (e.isCSS3DObjectPlus) {
            const f = e;
            if (!f || f.mode !== "front")
              return;
            const R = (a = this.css3DRender.behindModeCSS3DRenderer.wrapper) != null ? a : A(this.five);
            R && (this.css3DObjectParentMap.set(f, f.parent), f.removeFromParent(), this.css3DRender.behindModeCSS3DRenderer.setWrapper(R), (D = this.css3DRender.getBehindCSS3DObjectGroup()) == null || D.add(f), this.css3DRender.render(this.five.camera));
          } else
            e.isCSS3DObject && (this.css3DObjectModeMap.set(e, e.mode), e.mode = "behind");
        });
      } else {
        const i = p(p({}, this.getConfig(l.scaleHelper)), l), m = new K(e, i), a = new H(
          this.five,
          C,
          Q,
          e,
          m,
          i,
          u,
          v
        );
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
        const s = e, d = this.css3DObjectParentMap.get(s);
        d && d.add(s), this.css3DRender.render(this.five.camera);
      } else if (e.isCSS3DObject) {
        const s = this.css3DObjectModeMap.get(e);
        e.mode = s;
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
    t != null && t.warnLog && ee();
  }
  getConfig(e) {
    if (e && typeof e != "boolean" && e.enable)
      return e;
  }
}
export {
  Tr as Object3DHelperController,
  O as PLUGIN
};
