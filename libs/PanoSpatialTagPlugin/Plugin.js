import * as a from "three";
import { Subscribe as we, Five as ye } from "@realsee/five";
import { CSS3DRenderPlugin as Te } from "../CSS3DRenderPlugin/index.js";
import Me from "./Components/origins.js";
import Pe from "./Components/tag.js";
import { pluginStyle as xe } from "./style.js";
import { render as Ee } from "../shared-utils/tinyEJSrender.js";
import "../CSS3DRenderPlugin/Controller.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../shared-utils/positionToVector3.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../shared-utils/util.js";
import "../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../CSS3DRenderPlugin/utils/even.js";
import "../shared-utils/Subscribe.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "hammerjs";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "animejs";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/five/fiveModelLoad.js";
import "../shared-utils/five/getFiveModel.js";
import "../vendor/svelte/internal/index.js";
import "./store.js";
import "../vendor/svelte/store/index.js";
const D = 1e-3, v = 0.01, je = "https://vrlab-image4.ljcdn.com/release/web/PanoSpatialTagPlugin__blur.png", io = (n, s) => {
  var k, z, q, B, G, J, K, Q;
  let j = s == null ? void 0 : s.container, y = 1.4;
  const ee = (k = s == null ? void 0 : s.wait) != null ? k : 200, oe = (z = s == null ? void 0 : s.maxNumberOnScreen) != null ? z : 3, I = (q = s == null ? void 0 : s.minRad) != null ? q : Math.PI / 4, L = (B = s == null ? void 0 : s.nearTolerance) != null ? B : 100, te = (G = s == null ? void 0 : s.upsideHeight) != null ? G : 1.6, A = (J = s == null ? void 0 : s.minDistance) != null ? J : 1.2, f = (K = s == null ? void 0 : s.maxDistance) != null ? K : 3.5, C = Te(n), S = document.createElement("div");
  S.classList.add("PanoSpatialTagPlugin"), Object.assign(S.style, xe);
  const V = new we();
  let Z = new Image();
  Z.src = je;
  const e = {
    points: [],
    origins: [],
    tags: [],
    template: "",
    events: {},
    render: Ee,
    folded: !1,
    enabled: !0,
    forbidden: !0
  }, Y = new Me({
    target: S,
    props: { origins: e.origins }
  }), _ = (o, r) => {
    T(), r && M();
  }, F = () => {
    e.forbidden && (e.forbidden = !1, M());
  }, H = (o, r) => {
    if (e.tags.length === 0)
      return;
    const p = r.longitude - n.state.longitude, t = n.camera.clone();
    t.position.copy(r.offset), t.rotateOnWorldAxis(new a.Vector3(0, 1, 0), p), t.updateProjectionMatrix(), t.updateMatrixWorld(!0);
    const g = new a.Frustum(), P = new a.Matrix4();
    P.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), g.setFromProjectionMatrix(P), e.tags.forEach((i) => {
      const $ = t.position.clone().setY(y).distanceTo(i.position);
      if ($ < A || $ > f || !g.containsPoint(i.position))
        return i.destroying = !0;
      const x = i.position.clone().sub(t.position).setY(0);
      if (x.angleTo(i.normal) > Math.PI / 2 - I && x.angleTo(i.normal) < Math.PI / 2 + I)
        return i.destroying = !0;
    }), e.tags.forEach((i) => {
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
      e.tags.forEach((i) => {
        i.destroying && (i.app.$destroy(), i = null);
      }), e.tags = e.tags.filter((i) => !i.destroying), T();
    }, 1900);
  }, N = (o) => {
    o !== ye.Mode.Panorama && !e.forbidden && (Y.$set({ origins: [] }), e.tags.forEach((r) => {
      r.app.$destroy(), r = null;
    }), e.origins = [], e.tags = [], e.forbidden = !0);
  }, T = () => {
    if (e.forbidden || !e.enabled)
      return;
    const o = n.camera, r = o.getWorldDirection(new a.Vector3());
    e.origins = e.tags.map((p) => {
      const t = p.position.clone().project(o), g = p.position.clone().sub(o.position).setY(0).angleTo(r.setY(0)) < Math.PI / 2;
      return {
        id: p.id,
        front: g,
        left: (t.x + 1) / 2 * 100,
        top: (-t.y + 1) / 2 * 100,
        destroying: p.destroying
      };
    }), Y.$set({ origins: e.origins });
  }, M = () => {
    e.forbidden || !e.enabled || (e.timeoutId && clearTimeout(e.timeoutId), e.timeoutId = setTimeout(() => {
      e.timeoutId = void 0;
      const o = ne();
      o.length && (e.tags = e.tags.concat(o), T());
    }, ee));
  }, ne = () => {
    const { clientWidth: o, clientHeight: r } = n.getElement(), p = [], t = n.camera, g = new a.Frustum(), P = new a.Matrix4(), i = t.getWorldDirection(new a.Vector3());
    P.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), g.setFromProjectionMatrix(P);
    const $ = e.tags.filter((d) => g.containsPoint(d.position) && !d.destroying).length, x = e.points.reduce((d, m) => {
      if (e.tags.find((l) => m.id === l.id && !l.destroying))
        return d;
      const u = t.position.clone().setY(y).distanceTo(m.position);
      if (u < A || u > f || !g.containsPoint(m.position))
        return d;
      const E = m.position.clone().sub(t.position).setY(0);
      if (E.angleTo(m.normal) > Math.PI / 2 - I && E.angleTo(m.normal) < Math.PI / 2 + I)
        return d;
      const w = m.position.clone().project(t);
      if (!e.tags.every((l) => {
        if (l.position.clone().sub(t.position).setY(0).angleTo(i.setY(0)) > Math.PI / 2)
          return !0;
        const b = l.position.clone().project(t);
        return Math.sqrt(Math.pow((w.x - b.x) / 2 * o, 2) + Math.pow((w.y - b.y) / 2 * r, 2)) > L;
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
    for (let d = 0, m = x.length; d < m && !($ + p.length >= oe); d++) {
      const u = x[d];
      if (p.find((c) => u.id === c.id))
        continue;
      const E = u.position.clone().project(t);
      if (!e.tags.concat(p).every((c) => {
        if (c.position.clone().sub(t.position).setY(0).angleTo(i.setY(0)) > Math.PI / 2)
          return !0;
        const l = c.position.clone().project(t);
        return Math.sqrt(Math.pow((E.x - l.x) / 2 * o, 2) + Math.pow((E.y - l.y) / 2 * r, 2)) > L;
      }))
        continue;
      const w = new a.Raycaster(
        t.position.clone().setY(y),
        u.position.clone().sub(t.position.clone().setY(y)).normalize(),
        0,
        u.distance + v
      ), [h] = e.intersectObjects ? w.intersectObjects(e.intersectObjects, !0) : n.model.loaded ? n.model.intersectRaycaster(w) : w.intersectObjects(n.model.children, !0);
      if (h && u.distance - h.distance < v) {
        const { position: c, normal: l, id: b, replacement: O } = u, me = new a.Plane().setFromNormalAndCoplanarPoint(l, c), X = c.clone().sub(t.position).cross(new a.Vector3(0, 1, 0)).setLength(D), fe = [
          c.clone(),
          c.clone().add(X),
          c.clone().add(new a.Vector3(0, D, 0)).add(X),
          c.clone().add(new a.Vector3(0, D, 0))
        ].map((be) => me.projectPoint(be, new a.Vector3())), { container: ue, dispose: ge } = C.create3DDomContainer(fe) || {}, he = new Pe({
          target: ue,
          props: {
            id: b,
            content: e.render(e.template, O),
            lineWidthZoom: 0.38 * (0.01 + t.position.distanceTo(c) / f),
            lineHeightZoom: 0.4 + (t.position.distanceTo(c) - A) / f * 0.6,
            contentZoom: 0.1 + t.position.distanceTo(c) / f,
            upsideDown: c.y > te,
            folded: e.folded,
            events: e.events,
            hooks: V,
            dispose: ge
          }
        });
        p.push({
          position: c,
          normal: l,
          id: b,
          app: he
        });
      }
    }
    return p;
  }, ie = (o) => {
    e.points = o.points.map((r) => {
      var p, t;
      return {
        id: r.id,
        position: new a.Vector3().fromArray(r.position),
        normal: new a.Vector3().fromArray(r.normal),
        replacement: (p = r.replacement) != null ? p : {},
        weight: (t = r.weight) != null ? t : -1
      };
    }), o.render && (e.render = o.render), o.template && (e.template = o.template), o.events && (e.events = o.events), o.enabled === !1 && (e.enabled = o.enabled), o.folded === !0 && (e.folded = o.folded);
  }, se = (o) => {
    e.intersectObjects = o, M();
  }, re = () => {
    e.enabled = !0, M();
  }, ce = () => {
    e.enabled = !1, Y.$set({ origins: [] }), e.tags.forEach((o) => {
      o.app.$destroy(), o = null;
    }), e.origins = [], e.tags = [];
  }, de = () => {
    e.folded = !1, e.tags.forEach((o) => {
      o.app.$set({ folded: e.folded });
    });
  }, le = () => {
    e.folded = !0, e.tags.forEach((o) => {
      o.app.$set({ folded: e.folded });
    });
  }, ae = (o) => {
    e.tags.forEach((r) => {
      r.id === o && r.app.$set({ folded: !1 });
    });
  }, pe = (o) => {
    e.tags.forEach((r) => {
      r.id === o && r.app.$set({ folded: !0 });
    });
  }, U = () => {
    n.once("renderFrame", T);
  }, R = () => {
    j || (j = n.getElement().parentElement), j && j.appendChild(S), e.forbidden = !1, y = n.model.bounding.getCenter(new a.Vector3()).y, M(), n.on("panoWillArrive", H), n.on("panoArrived", F), n.on("modeChange", N), n.on("cameraUpdate", _);
  }, W = () => {
    Z = null, C.disposeAll(), Y.$destroy(), e.tags.forEach((o) => {
      o.app.$destroy(), o = null;
    }), e.origins = [], e.tags = [], n.off("modelLoaded", R), n.off("renderFrame", T), n.off("panoWillArrive", H), n.off("panoArrived", F), n.off("modeChange", N), n.off("cameraUpdate", _), n.off("dispose", W), window.removeEventListener("resize", U, !1);
  };
  return window.addEventListener("resize", U, !1), (Q = n == null ? void 0 : n.model) != null && Q.loaded ? R() : n.once("modelLoaded", R), n.on("dispose", W), {
    load: ie,
    setIntersectObjects: se,
    unfoldAll: de,
    foldAll: le,
    unfold: ae,
    fold: pe,
    enable: re,
    disable: ce,
    hooks: V,
    dispose: W
  };
};
export {
  io as PanoSpatialTagPlugin,
  io as default
};
