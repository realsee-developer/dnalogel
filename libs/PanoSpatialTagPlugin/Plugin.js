import * as a from "three";
import { Subscribe as yo, Five as To } from "@realsee/five";
import { CSS3DRenderPlugin as Mo } from "../CSS3DRenderPlugin/index.js";
import Po from "./Components/origins.js";
import xo from "./Components/tag.js";
import { pluginStyle as Eo } from "./style.js";
import { render as jo } from "../shared-utils/tinyEJSrender.js";
import "../CSS3DRenderPlugin/Controller.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../shared-utils/positionToVector3.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "../CSS3DRenderPlugin/utils/three/THREEJS_CSS3DRenderer.js";
import "../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../CSS3DRenderPlugin/utils/even.js";
import "../shared-utils/Subscribe.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "hammerjs";
import "@realsee/five/line";
import "../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../vendor/three/build/three.module.js";
import "../shared-utils/tag.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/three/core/Sphere.js";
import "animejs";
import "../shared-utils/isNil.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../shared-utils/util.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/five/fiveModelLoad.js";
import "../vendor/svelte/internal/index.js";
import "./store.js";
import "../vendor/svelte/store/index.js";
const D = 1e-3, v = 0.01, Io = "https://vrlab-image4.ljcdn.com/release/web/PanoSpatialTagPlugin__blur.png", Te = (n, r) => {
  var k, z, q, B, G, J, K, Q;
  let j = r == null ? void 0 : r.container, y = 1.4;
  const oo = (k = r == null ? void 0 : r.wait) != null ? k : 200, eo = (z = r == null ? void 0 : r.maxNumberOnScreen) != null ? z : 3, I = (q = r == null ? void 0 : r.minRad) != null ? q : Math.PI / 4, L = (B = r == null ? void 0 : r.nearTolerance) != null ? B : 100, to = (G = r == null ? void 0 : r.upsideHeight) != null ? G : 1.6, A = (J = r == null ? void 0 : r.minDistance) != null ? J : 1.2, f = (K = r == null ? void 0 : r.maxDistance) != null ? K : 3.5, C = Mo(n), S = document.createElement("div");
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
  }), _ = (e, s) => {
    T(), s && M();
  }, F = () => {
    o.forbidden && (o.forbidden = !1, M());
  }, H = (e, s) => {
    if (o.tags.length === 0)
      return;
    const p = s.longitude - n.state.longitude, t = n.camera.clone();
    t.position.copy(s.offset), t.rotateOnWorldAxis(new a.Vector3(0, 1, 0), p), t.updateProjectionMatrix(), t.updateMatrixWorld(!0);
    const g = new a.Frustum(), P = new a.Matrix4();
    P.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), g.setFromProjectionMatrix(P), o.tags.forEach((i) => {
      const $ = t.position.clone().setY(y).distanceTo(i.position);
      if ($ < A || $ > f || !g.containsPoint(i.position))
        return i.destroying = !0;
      const x = i.position.clone().sub(t.position).setY(0);
      if (x.angleTo(i.normal) > Math.PI / 2 - I && x.angleTo(i.normal) < Math.PI / 2 + I)
        return i.destroying = !0;
    }), o.tags.forEach((i) => {
      i.destroying ? i.app.$set({
        contentZoom: 0.1 + t.position.distanceTo(i.position) / f,
        lineWidthZoom: 0.38 * (0.01 + t.position.distanceTo(i.position) / f),
        destroying: i.destroying
      }) : i.app.$set({
        lineWidthZoom: 0.38 * (0.01 + t.position.distanceTo(i.position) / f),
        lineHeightZoom: 0.4 + (t.position.distanceTo(i.position) - A) / f * 0.6,
        contentZoom: 0.1 + t.position.distanceTo(i.position) / f
      });
    }), setTimeout(() => {
      o.tags.forEach((i) => {
        i.destroying && (i.app.$destroy(), i = null);
      }), o.tags = o.tags.filter((i) => !i.destroying), T();
    }, 1900);
  }, N = (e) => {
    e !== To.Mode.Panorama && !o.forbidden && (Y.$set({ origins: [] }), o.tags.forEach((s) => {
      s.app.$destroy(), s = null;
    }), o.origins = [], o.tags = [], o.forbidden = !0);
  }, T = () => {
    if (o.forbidden || !o.enabled)
      return;
    const e = n.camera, s = e.getWorldDirection(new a.Vector3());
    o.origins = o.tags.map((p) => {
      const t = p.position.clone().project(e), g = p.position.clone().sub(e.position).setY(0).angleTo(s.setY(0)) < Math.PI / 2;
      return {
        id: p.id,
        front: g,
        left: (t.x + 1) / 2 * 100,
        top: (-t.y + 1) / 2 * 100,
        destroying: p.destroying
      };
    }), Y.$set({ origins: o.origins });
  }, M = () => {
    o.forbidden || !o.enabled || (o.timeoutId && clearTimeout(o.timeoutId), o.timeoutId = setTimeout(() => {
      o.timeoutId = void 0;
      const e = no();
      e.length && (o.tags = o.tags.concat(e), T());
    }, oo));
  }, no = () => {
    const { clientWidth: e, clientHeight: s } = n.getElement(), p = [], t = n.camera, g = new a.Frustum(), P = new a.Matrix4(), i = t.getWorldDirection(new a.Vector3());
    P.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), g.setFromProjectionMatrix(P);
    const $ = o.tags.filter((d) => g.containsPoint(d.position) && !d.destroying).length, x = o.points.reduce((d, m) => {
      if (o.tags.find((l) => m.id === l.id && !l.destroying))
        return d;
      const u = t.position.clone().setY(y).distanceTo(m.position);
      if (u < A || u > f || !g.containsPoint(m.position))
        return d;
      const E = m.position.clone().sub(t.position).setY(0);
      if (E.angleTo(m.normal) > Math.PI / 2 - I && E.angleTo(m.normal) < Math.PI / 2 + I)
        return d;
      const w = m.position.clone().project(t);
      if (!o.tags.every((l) => {
        if (l.position.clone().sub(t.position).setY(0).angleTo(i.setY(0)) > Math.PI / 2)
          return !0;
        const b = l.position.clone().project(t);
        return Math.sqrt(Math.pow((w.x - b.x) / 2 * e, 2) + Math.pow((w.y - b.y) / 2 * s, 2)) > L;
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
    for (let d = 0, m = x.length; d < m && !($ + p.length >= eo); d++) {
      const u = x[d];
      if (p.find((c) => u.id === c.id))
        continue;
      const E = u.position.clone().project(t);
      if (!o.tags.concat(p).every((c) => {
        if (c.position.clone().sub(t.position).setY(0).angleTo(i.setY(0)) > Math.PI / 2)
          return !0;
        const l = c.position.clone().project(t);
        return Math.sqrt(Math.pow((E.x - l.x) / 2 * e, 2) + Math.pow((E.y - l.y) / 2 * s, 2)) > L;
      }))
        continue;
      const w = new a.Raycaster(
        t.position.clone().setY(y),
        u.position.clone().sub(t.position.clone().setY(y)).normalize(),
        0,
        u.distance + v
      ), [h] = o.intersectObjects ? w.intersectObjects(o.intersectObjects, !0) : n.model.loaded ? n.model.intersectRaycaster(w) : w.intersectObjects(n.model.children, !0);
      if (h && u.distance - h.distance < v) {
        const { position: c, normal: l, id: b, replacement: O } = u, fo = new a.Plane().setFromNormalAndCoplanarPoint(l, c), X = c.clone().sub(t.position).cross(new a.Vector3(0, 1, 0)).setLength(D), uo = [
          c.clone(),
          c.clone().add(X),
          c.clone().add(new a.Vector3(0, D, 0)).add(X),
          c.clone().add(new a.Vector3(0, D, 0))
        ].map((wo) => fo.projectPoint(wo, new a.Vector3())), { container: go, dispose: ho } = C.create3DDomContainer(uo) || {}, bo = new xo({
          target: go,
          props: {
            id: b,
            content: o.render(o.template, O),
            lineWidthZoom: 0.38 * (0.01 + t.position.distanceTo(c) / f),
            lineHeightZoom: 0.4 + (t.position.distanceTo(c) - A) / f * 0.6,
            contentZoom: 0.1 + t.position.distanceTo(c) / f,
            upsideDown: c.y > to,
            folded: o.folded,
            events: o.events,
            hooks: V,
            dispose: ho
          }
        });
        p.push({
          position: c,
          normal: l,
          id: b,
          app: bo
        });
      }
    }
    return p;
  }, io = (e) => {
    o.points = e.points.map((s) => {
      var p, t;
      return {
        id: s.id,
        position: new a.Vector3().fromArray(s.position),
        normal: new a.Vector3().fromArray(s.normal),
        replacement: (p = s.replacement) != null ? p : {},
        weight: (t = s.weight) != null ? t : -1
      };
    }), e.render && (o.render = e.render), e.template && (o.template = e.template), e.events && (o.events = e.events), e.enabled === !1 && (o.enabled = e.enabled), e.folded === !0 && (o.folded = e.folded);
  }, ro = (e) => {
    o.intersectObjects = e, M();
  }, so = () => {
    o.enabled = !0, M();
  }, co = () => {
    o.enabled = !1, Y.$set({ origins: [] }), o.tags.forEach((e) => {
      e.app.$destroy(), e = null;
    }), o.origins = [], o.tags = [];
  }, lo = () => {
    o.folded = !1, o.tags.forEach((e) => {
      e.app.$set({ folded: o.folded });
    });
  }, ao = () => {
    o.folded = !0, o.tags.forEach((e) => {
      e.app.$set({ folded: o.folded });
    });
  }, po = (e) => {
    o.tags.forEach((s) => {
      s.id === e && s.app.$set({ folded: !1 });
    });
  }, mo = (e) => {
    o.tags.forEach((s) => {
      s.id === e && s.app.$set({ folded: !0 });
    });
  }, U = () => {
    n.once("renderFrame", T);
  }, R = () => {
    j || (j = n.getElement().parentElement), j && j.appendChild(S), o.forbidden = !1, y = n.model.bounding.getCenter(new a.Vector3()).y, M(), n.on("panoWillArrive", H), n.on("panoArrived", F), n.on("modeChange", N), n.on("cameraUpdate", _);
  }, W = () => {
    Z = null, C.disposeAll(), Y.$destroy(), o.tags.forEach((e) => {
      e.app.$destroy(), e = null;
    }), o.origins = [], o.tags = [], n.off("modelLoaded", R), n.off("renderFrame", T), n.off("panoWillArrive", H), n.off("panoArrived", F), n.off("modeChange", N), n.off("cameraUpdate", _), n.off("dispose", W), window.removeEventListener("resize", U, !1);
  };
  return window.addEventListener("resize", U, !1), (Q = n == null ? void 0 : n.model) != null && Q.loaded ? R() : n.once("modelLoaded", R), n.on("dispose", W), {
    load: io,
    setIntersectObjects: ro,
    unfoldAll: lo,
    foldAll: ao,
    unfold: po,
    fold: mo,
    enable: so,
    disable: co,
    hooks: V,
    dispose: W
  };
};
export {
  Te as PanoSpatialTagPlugin,
  Te as default
};
