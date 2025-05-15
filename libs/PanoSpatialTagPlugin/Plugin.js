import * as p from "three";
import { Subscribe as yo, Five as To } from "@realsee/five";
import { CSS3DRenderPlugin as Mo } from "../CSS3DRenderPlugin/index.js";
import Po from "./Components/origins.js";
import xo from "./Components/tag.js";
import { pluginStyle as Eo } from "./style.js";
import { render as jo } from "../shared-utils/tinyEJSrender.js";
import "../CSS3DRenderPlugin/Controller.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../shared-utils/createResizeObserver.js";
import "../shared-utils/even.js";
import "../shared-utils/Subscribe.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../shared-utils/CSS3DRender/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/tag.js";
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
import "../shared-utils/three/PointSelector/utils/html.js";
import "../shared-utils/CSS3DRender/index.js";
import "../shared-utils/five/fiveModelLoad.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../Sculpt/Meshes/Line.js";
import "../Sculpt/typings/style.js";
import "../shared-utils/three/IObject3D.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/util.js";
import "../shared-utils/three/core/LineGeometry.js";
import "@realsee/five/line";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/isNil.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../Sculpt/utils/unit.js";
import "../Sculpt/utils/renderDom.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../shared-utils/five/FivePuppet.js";
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
import "../vendor/svelte/internal/index.js";
import "./store.js";
import "../vendor/svelte/store/index.js";
const D = 1e-3, v = 0.01, Io = "https://vrlab-image4.ljcdn.com/release/web/PanoSpatialTagPlugin__blur.png", qt = (n, r) => {
  var k, z, q, B, G, J, K, Q;
  let j = r == null ? void 0 : r.container, y = 1.4;
  const oo = (k = r == null ? void 0 : r.wait) != null ? k : 200, to = (z = r == null ? void 0 : r.maxNumberOnScreen) != null ? z : 3, I = (q = r == null ? void 0 : r.minRad) != null ? q : Math.PI / 4, L = (B = r == null ? void 0 : r.nearTolerance) != null ? B : 100, eo = (G = r == null ? void 0 : r.upsideHeight) != null ? G : 1.6, A = (J = r == null ? void 0 : r.minDistance) != null ? J : 1.2, f = (K = r == null ? void 0 : r.maxDistance) != null ? K : 3.5, C = Mo(n), S = document.createElement("div");
  S.classList.add("PanoSpatialTagPlugin"), Object.assign(S.style, Eo);
  const V = new yo();
  let Z = new Image();
  Z.src = Io;
  const o = {
    points: [],
    origins: [],
    tags: [],
    template: "",
    events: {},
    render: jo,
    folded: !1,
    enabled: !0,
    forbidden: !0
  }, Y = new Po({
    target: S,
    props: { origins: o.origins }
  }), _ = (t, s) => {
    T(), s && M();
  }, F = () => {
    o.forbidden && (o.forbidden = !1, M());
  }, H = (t, s) => {
    if (o.tags.length === 0)
      return;
    const a = s.longitude - n.state.longitude, e = n.camera.clone();
    e.position.copy(s.offset), e.rotateOnWorldAxis(new p.Vector3(0, 1, 0), a), e.updateProjectionMatrix(), e.updateMatrixWorld(!0);
    const g = new p.Frustum(), P = new p.Matrix4();
    P.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), g.setFromProjectionMatrix(P), o.tags.forEach((i) => {
      const $ = e.position.clone().setY(y).distanceTo(i.position);
      if ($ < A || $ > f || !g.containsPoint(i.position))
        return i.destroying = !0;
      const x = i.position.clone().sub(e.position).setY(0);
      if (x.angleTo(i.normal) > Math.PI / 2 - I && x.angleTo(i.normal) < Math.PI / 2 + I)
        return i.destroying = !0;
    }), o.tags.forEach((i) => {
      i.destroying ? i.app.$set({
        contentZoom: 0.1 + e.position.distanceTo(i.position) / f,
        lineWidthZoom: 0.38 * (0.01 + e.position.distanceTo(i.position) / f),
        destroying: i.destroying
      }) : i.app.$set({
        lineWidthZoom: 0.38 * (0.01 + e.position.distanceTo(i.position) / f),
        lineHeightZoom: 0.4 + (e.position.distanceTo(i.position) - A) / f * 0.6,
        contentZoom: 0.1 + e.position.distanceTo(i.position) / f
      });
    }), setTimeout(() => {
      o.tags.forEach((i) => {
        i.destroying && (i.app.$destroy(), i = null);
      }), o.tags = o.tags.filter((i) => !i.destroying), T();
    }, 1900);
  }, N = (t) => {
    t !== To.Mode.Panorama && !o.forbidden && (Y.$set({ origins: [] }), o.tags.forEach((s) => {
      s.app.$destroy(), s = null;
    }), o.origins = [], o.tags = [], o.forbidden = !0);
  }, T = () => {
    if (o.forbidden || !o.enabled)
      return;
    const t = n.camera, s = t.getWorldDirection(new p.Vector3());
    o.origins = o.tags.map((a) => {
      const e = a.position.clone().project(t), g = a.position.clone().sub(t.position).setY(0).angleTo(s.setY(0)) < Math.PI / 2;
      return {
        id: a.id,
        front: g,
        left: (e.x + 1) / 2 * 100,
        top: (-e.y + 1) / 2 * 100,
        destroying: a.destroying
      };
    }), Y.$set({ origins: o.origins });
  }, M = () => {
    o.forbidden || !o.enabled || (o.timeoutId && clearTimeout(o.timeoutId), o.timeoutId = setTimeout(() => {
      o.timeoutId = void 0;
      const t = no();
      t.length && (o.tags = o.tags.concat(t), T());
    }, oo));
  }, no = () => {
    const { clientWidth: t, clientHeight: s } = n.getElement(), a = [], e = n.camera, g = new p.Frustum(), P = new p.Matrix4(), i = e.getWorldDirection(new p.Vector3());
    P.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), g.setFromProjectionMatrix(P);
    const $ = o.tags.filter((d) => g.containsPoint(d.position) && !d.destroying).length, x = o.points.reduce((d, m) => {
      if (o.tags.find((l) => m.id === l.id && !l.destroying))
        return d;
      const u = e.position.clone().setY(y).distanceTo(m.position);
      if (u < A || u > f || !g.containsPoint(m.position))
        return d;
      const E = m.position.clone().sub(e.position).setY(0);
      if (E.angleTo(m.normal) > Math.PI / 2 - I && E.angleTo(m.normal) < Math.PI / 2 + I)
        return d;
      const w = m.position.clone().project(e);
      if (!o.tags.every((l) => {
        if (l.position.clone().sub(e.position).setY(0).angleTo(i.setY(0)) > Math.PI / 2)
          return !0;
        const b = l.position.clone().project(e);
        return Math.sqrt(Math.pow((w.x - b.x) / 2 * t, 2) + Math.pow((w.y - b.y) / 2 * s, 2)) > L;
      }))
        return d;
      const h = {
        id: m.id,
        position: m.position,
        normal: m.normal,
        replacement: m.replacement,
        weight: m.weight,
        distance: u
      };
      let c;
      for (let l = 0, b = d.length; l < b; l++) {
        const O = d[l];
        if (h.weight > O.weight) {
          c = l;
          break;
        }
        if (h.distance < O.distance) {
          c = l;
          break;
        }
      }
      return c !== void 0 ? d.splice(c, 0, h) : d.push(h), d;
    }, []);
    for (let d = 0, m = x.length; d < m && !($ + a.length >= to); d++) {
      const u = x[d];
      if (a.find((c) => u.id === c.id))
        continue;
      const E = u.position.clone().project(e);
      if (!o.tags.concat(a).every((c) => {
        if (c.position.clone().sub(e.position).setY(0).angleTo(i.setY(0)) > Math.PI / 2)
          return !0;
        const l = c.position.clone().project(e);
        return Math.sqrt(Math.pow((E.x - l.x) / 2 * t, 2) + Math.pow((E.y - l.y) / 2 * s, 2)) > L;
      }))
        continue;
      const w = new p.Raycaster(
        e.position.clone().setY(y),
        u.position.clone().sub(e.position.clone().setY(y)).normalize(),
        0,
        u.distance + v
      ), [h] = o.intersectObjects ? w.intersectObjects(o.intersectObjects, !0) : n.model.loaded ? n.model.intersectRaycaster(w) : w.intersectObjects(n.model.children, !0);
      if (h && u.distance - h.distance < v) {
        const { position: c, normal: l, id: b, replacement: O } = u, fo = new p.Plane().setFromNormalAndCoplanarPoint(l, c), X = c.clone().sub(e.position).cross(new p.Vector3(0, 1, 0)).setLength(D), uo = [
          c.clone(),
          c.clone().add(X),
          c.clone().add(new p.Vector3(0, D, 0)).add(X),
          c.clone().add(new p.Vector3(0, D, 0))
        ].map((wo) => fo.projectPoint(wo, new p.Vector3())), { container: go, dispose: ho } = C.create3DDomContainer(uo) || {}, bo = new xo({
          target: go,
          props: {
            id: b,
            content: o.render(o.template, O),
            lineWidthZoom: 0.38 * (0.01 + e.position.distanceTo(c) / f),
            lineHeightZoom: 0.4 + (e.position.distanceTo(c) - A) / f * 0.6,
            contentZoom: 0.1 + e.position.distanceTo(c) / f,
            upsideDown: c.y > eo,
            folded: o.folded,
            events: o.events,
            hooks: V,
            dispose: ho
          }
        });
        a.push({
          position: c,
          normal: l,
          id: b,
          app: bo
        });
      }
    }
    return a;
  }, io = (t) => {
    o.points = t.points.map((s) => {
      var a, e;
      return {
        id: s.id,
        position: new p.Vector3().fromArray(s.position),
        normal: new p.Vector3().fromArray(s.normal),
        replacement: (a = s.replacement) != null ? a : {},
        weight: (e = s.weight) != null ? e : -1
      };
    }), t.render && (o.render = t.render), t.template && (o.template = t.template), t.events && (o.events = t.events), t.enabled === !1 && (o.enabled = t.enabled), t.folded === !0 && (o.folded = t.folded);
  }, ro = (t) => {
    o.intersectObjects = t, M();
  }, so = () => {
    o.enabled = !0, M();
  }, co = () => {
    o.enabled = !1, Y.$set({ origins: [] }), o.tags.forEach((t) => {
      t.app.$destroy(), t = null;
    }), o.origins = [], o.tags = [];
  }, lo = () => {
    o.folded = !1, o.tags.forEach((t) => {
      t.app.$set({ folded: o.folded });
    });
  }, po = () => {
    o.folded = !0, o.tags.forEach((t) => {
      t.app.$set({ folded: o.folded });
    });
  }, ao = (t) => {
    o.tags.forEach((s) => {
      s.id === t && s.app.$set({ folded: !1 });
    });
  }, mo = (t) => {
    o.tags.forEach((s) => {
      s.id === t && s.app.$set({ folded: !0 });
    });
  }, U = () => {
    n.once("renderFrame", T);
  }, R = () => {
    j || (j = n.getElement().parentElement), j && j.appendChild(S), o.forbidden = !1, y = n.model.bounding.getCenter(new p.Vector3()).y, M(), n.on("panoWillArrive", H), n.on("panoArrived", F), n.on("modeChange", N), n.on("cameraUpdate", _);
  }, W = () => {
    Z = null, C.disposeAll(), Y.$destroy(), o.tags.forEach((t) => {
      t.app.$destroy(), t = null;
    }), o.origins = [], o.tags = [], n.off("modelLoaded", R), n.off("renderFrame", T), n.off("panoWillArrive", H), n.off("panoArrived", F), n.off("modeChange", N), n.off("cameraUpdate", _), n.off("dispose", W), window.removeEventListener("resize", U, !1);
  };
  return window.addEventListener("resize", U, !1), (Q = n == null ? void 0 : n.model) != null && Q.loaded ? R() : n.once("modelLoaded", R), n.on("dispose", W), {
    load: io,
    setIntersectObjects: ro,
    unfoldAll: lo,
    foldAll: po,
    unfold: ao,
    fold: mo,
    enable: so,
    disable: co,
    hooks: V,
    dispose: W
  };
};
export {
  qt as PanoSpatialTagPlugin,
  qt as default
};
