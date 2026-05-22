import * as p from "three";
import { Subscribe as To, Five as Mo } from "@realsee/five";
import { CSS3DRenderPlugin as Po } from "../CSS3DRenderPlugin/index.js";
import xo from "./Components/origins.js";
import Eo from "./Components/tag.js";
import { pluginStyle as Io } from "./style.js";
import { render as Ao } from "../shared-utils/tinyEJSrender.js";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../shared-utils/three/blink.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../vendor/earcut/src/earcut.js";
import { PANO_SPATIAL_TAG_BLUR_IMAGE as jo } from "../shared-utils/url/defaultUrls.js";
import "../shared-utils/five/FivePuppet.js";
import "../CSS3DRenderPlugin/Controller.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../shared-utils/createResizeObserver.js";
import "../shared-utils/even.js";
import "../shared-utils/Subscribe.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../shared-utils/CSS3DRender/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/isNil.js";
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
import "../shared-utils/five/fiveModelLoad.js";
import "../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../shared-utils/three/Magnifier.js";
import "../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../shared-utils/three/Assets/index.js";
import "../shared-utils/three/PointSelector/utils/html.js";
import "../shared-utils/CSS3DRender/index.js";
import "../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../Sculpt/Meshes/Line.js";
import "../Sculpt/typings/style.js";
import "../shared-utils/three/IObject3D.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/util.js";
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
import "../vendor/animejs/lib/anime.es.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../vendor/svelte/internal/index.js";
import "./store.js";
import "../vendor/svelte/store/index.js";
const W = 1e-3, v = 0.01, oo = jo, Kt = (n, r) => {
  var k, z, q, G, B, J, K, Q;
  let I = r == null ? void 0 : r.container, y = 1.4;
  const to = (k = r == null ? void 0 : r.wait) != null ? k : 200, eo = (z = r == null ? void 0 : r.maxNumberOnScreen) != null ? z : 3, A = (q = r == null ? void 0 : r.minRad) != null ? q : Math.PI / 4, D = (G = r == null ? void 0 : r.nearTolerance) != null ? G : 100, no = (B = r == null ? void 0 : r.upsideHeight) != null ? B : 1.6, j = (J = r == null ? void 0 : r.minDistance) != null ? J : 1.2, f = (K = r == null ? void 0 : r.maxDistance) != null ? K : 3.5, _ = Po(n), O = document.createElement("div");
  O.classList.add("PanoSpatialTagPlugin"), Object.assign(O.style, Io);
  const C = new To();
  let V = new Image();
  V.src = oo;
  const o = {
    points: [],
    origins: [],
    tags: [],
    template: "",
    events: {},
    render: Ao,
    folded: !1,
    enabled: !0,
    forbidden: !0
  }, R = new xo({
    target: O,
    props: { origins: o.origins }
  }), Z = (t, s) => {
    T(), s && M();
  }, F = () => {
    o.forbidden && (o.forbidden = !1, M());
  }, H = (t, s) => {
    if (o.tags.length === 0)
      return;
    const m = s.longitude - n.state.longitude, e = n.camera.clone();
    e.position.copy(s.offset), e.rotateOnWorldAxis(new p.Vector3(0, 1, 0), m), e.updateProjectionMatrix(), e.updateMatrixWorld(!0);
    const g = new p.Frustum(), P = new p.Matrix4();
    P.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), g.setFromProjectionMatrix(P), o.tags.forEach((i) => {
      const S = e.position.clone().setY(y).distanceTo(i.position);
      if (S < j || S > f || !g.containsPoint(i.position))
        return i.destroying = !0;
      const x = i.position.clone().sub(e.position).setY(0);
      if (x.angleTo(i.normal) > Math.PI / 2 - A && x.angleTo(i.normal) < Math.PI / 2 + A)
        return i.destroying = !0;
    }), o.tags.forEach((i) => {
      i.destroying ? i.app.$set({
        contentZoom: 0.1 + e.position.distanceTo(i.position) / f,
        lineWidthZoom: 0.38 * (0.01 + e.position.distanceTo(i.position) / f),
        destroying: i.destroying
      }) : i.app.$set({
        lineWidthZoom: 0.38 * (0.01 + e.position.distanceTo(i.position) / f),
        lineHeightZoom: 0.4 + (e.position.distanceTo(i.position) - j) / f * 0.6,
        contentZoom: 0.1 + e.position.distanceTo(i.position) / f
      });
    }), setTimeout(() => {
      o.tags.forEach((i) => {
        i.destroying && (i.app.$destroy(), i = null);
      }), o.tags = o.tags.filter((i) => !i.destroying), T();
    }, 1900);
  }, N = (t) => {
    t !== Mo.Mode.Panorama && !o.forbidden && (R.$set({ origins: [] }), o.tags.forEach((s) => {
      s.app.$destroy(), s = null;
    }), o.origins = [], o.tags = [], o.forbidden = !0);
  }, T = () => {
    if (o.forbidden || !o.enabled)
      return;
    const t = n.camera, s = t.getWorldDirection(new p.Vector3());
    o.origins = o.tags.map((m) => {
      const e = m.position.clone().project(t), g = m.position.clone().sub(t.position).setY(0).angleTo(s.setY(0)) < Math.PI / 2;
      return {
        id: m.id,
        front: g,
        left: (e.x + 1) / 2 * 100,
        top: (-e.y + 1) / 2 * 100,
        destroying: m.destroying
      };
    }), R.$set({ origins: o.origins });
  }, M = () => {
    o.forbidden || !o.enabled || (o.timeoutId && clearTimeout(o.timeoutId), o.timeoutId = setTimeout(() => {
      o.timeoutId = void 0;
      const t = io();
      t.length && (o.tags = o.tags.concat(t), T());
    }, to));
  }, io = () => {
    const { clientWidth: t, clientHeight: s } = n.getElement(), m = [], e = n.camera, g = new p.Frustum(), P = new p.Matrix4(), i = e.getWorldDirection(new p.Vector3());
    P.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), g.setFromProjectionMatrix(P);
    const S = o.tags.filter((d) => g.containsPoint(d.position) && !d.destroying).length, x = o.points.reduce((d, a) => {
      if (o.tags.find((l) => a.id === l.id && !l.destroying))
        return d;
      const u = e.position.clone().setY(y).distanceTo(a.position);
      if (u < j || u > f || !g.containsPoint(a.position))
        return d;
      const E = a.position.clone().sub(e.position).setY(0);
      if (E.angleTo(a.normal) > Math.PI / 2 - A && E.angleTo(a.normal) < Math.PI / 2 + A)
        return d;
      const w = a.position.clone().project(e);
      if (!o.tags.every((l) => {
        if (l.position.clone().sub(e.position).setY(0).angleTo(i.setY(0)) > Math.PI / 2)
          return !0;
        const b = l.position.clone().project(e);
        return Math.sqrt(Math.pow((w.x - b.x) / 2 * t, 2) + Math.pow((w.y - b.y) / 2 * s, 2)) > D;
      }))
        return d;
      const h = {
        id: a.id,
        position: a.position,
        normal: a.normal,
        replacement: a.replacement,
        weight: a.weight,
        distance: u
      };
      let c;
      for (let l = 0, b = d.length; l < b; l++) {
        const Y = d[l];
        if (h.weight > Y.weight) {
          c = l;
          break;
        }
        if (h.distance < Y.distance) {
          c = l;
          break;
        }
      }
      return c !== void 0 ? d.splice(c, 0, h) : d.push(h), d;
    }, []);
    for (let d = 0, a = x.length; d < a && !(S + m.length >= eo); d++) {
      const u = x[d];
      if (m.find((c) => u.id === c.id))
        continue;
      const E = u.position.clone().project(e);
      if (!o.tags.concat(m).every((c) => {
        if (c.position.clone().sub(e.position).setY(0).angleTo(i.setY(0)) > Math.PI / 2)
          return !0;
        const l = c.position.clone().project(e);
        return Math.sqrt(Math.pow((E.x - l.x) / 2 * t, 2) + Math.pow((E.y - l.y) / 2 * s, 2)) > D;
      }))
        continue;
      const w = new p.Raycaster(
        e.position.clone().setY(y),
        u.position.clone().sub(e.position.clone().setY(y)).normalize(),
        0,
        u.distance + v
      ), [h] = o.intersectObjects ? w.intersectObjects(o.intersectObjects, !0) : n.model.loaded ? n.model.intersectRaycaster(w) : w.intersectObjects(n.model.children, !0);
      if (h && u.distance - h.distance < v) {
        const { position: c, normal: l, id: b, replacement: Y } = u, uo = new p.Plane().setFromNormalAndCoplanarPoint(l, c), X = c.clone().sub(e.position).cross(new p.Vector3(0, 1, 0)).setLength(W), go = [
          c.clone(),
          c.clone().add(X),
          c.clone().add(new p.Vector3(0, W, 0)).add(X),
          c.clone().add(new p.Vector3(0, W, 0))
        ].map((yo) => uo.projectPoint(yo, new p.Vector3())), { container: ho, dispose: bo } = _.create3DDomContainer(go) || {}, wo = new Eo({
          target: ho,
          props: {
            id: b,
            content: o.render(o.template, Y),
            lineWidthZoom: 0.38 * (0.01 + e.position.distanceTo(c) / f),
            lineHeightZoom: 0.4 + (e.position.distanceTo(c) - j) / f * 0.6,
            contentZoom: 0.1 + e.position.distanceTo(c) / f,
            upsideDown: c.y > no,
            folded: o.folded,
            events: o.events,
            hooks: C,
            dispose: bo,
            blurImageUrl: oo
          }
        });
        m.push({
          position: c,
          normal: l,
          id: b,
          app: wo
        });
      }
    }
    return m;
  }, ro = (t) => {
    o.points = t.points.map((s) => {
      var m, e;
      return {
        id: s.id,
        position: new p.Vector3().fromArray(s.position),
        normal: new p.Vector3().fromArray(s.normal),
        replacement: (m = s.replacement) != null ? m : {},
        weight: (e = s.weight) != null ? e : -1
      };
    }), t.render && (o.render = t.render), t.template && (o.template = t.template), t.events && (o.events = t.events), t.enabled === !1 && (o.enabled = t.enabled), t.folded === !0 && (o.folded = t.folded);
  }, so = (t) => {
    o.intersectObjects = t, M();
  }, co = () => {
    o.enabled = !0, M();
  }, lo = () => {
    o.enabled = !1, R.$set({ origins: [] }), o.tags.forEach((t) => {
      t.app.$destroy(), t = null;
    }), o.origins = [], o.tags = [];
  }, po = () => {
    o.folded = !1, o.tags.forEach((t) => {
      t.app.$set({ folded: o.folded });
    });
  }, mo = () => {
    o.folded = !0, o.tags.forEach((t) => {
      t.app.$set({ folded: o.folded });
    });
  }, ao = (t) => {
    o.tags.forEach((s) => {
      s.id === t && s.app.$set({ folded: !1 });
    });
  }, fo = (t) => {
    o.tags.forEach((s) => {
      s.id === t && s.app.$set({ folded: !0 });
    });
  }, U = () => {
    n.once("renderFrame", T);
  }, $ = () => {
    I || (I = n.getElement().parentElement), I && I.appendChild(O), o.forbidden = !1, y = n.model.bounding.getCenter(new p.Vector3()).y, M(), n.on("panoWillArrive", H), n.on("panoArrived", F), n.on("modeChange", N), n.on("cameraUpdate", Z);
  }, L = () => {
    V = null, _.disposeAll(), R.$destroy(), o.tags.forEach((t) => {
      t.app.$destroy(), t = null;
    }), o.origins = [], o.tags = [], n.off("modelLoaded", $), n.off("renderFrame", T), n.off("panoWillArrive", H), n.off("panoArrived", F), n.off("modeChange", N), n.off("cameraUpdate", Z), n.off("dispose", L), window.removeEventListener("resize", U, !1);
  };
  return window.addEventListener("resize", U, !1), (Q = n == null ? void 0 : n.model) != null && Q.loaded ? $() : n.once("modelLoaded", $), n.on("dispose", L), {
    load: ro,
    setIntersectObjects: so,
    unfoldAll: po,
    foldAll: mo,
    unfold: ao,
    fold: fo,
    enable: co,
    disable: lo,
    hooks: C,
    dispose: L
  };
};
export {
  Kt as PanoSpatialTagPlugin,
  Kt as default
};
