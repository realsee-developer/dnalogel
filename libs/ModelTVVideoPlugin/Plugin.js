var R = (s, g, e) => new Promise((f, v) => {
  var b = (m) => {
    try {
      h(e.next(m));
    } catch (x) {
      v(x);
    }
  }, w = (m) => {
    try {
      h(e.throw(m));
    } catch (x) {
      v(x);
    }
  }, h = (m) => m.done ? f(m.value) : Promise.resolve(m.value).then(b, w);
  h((e = e.apply(s, g)).next());
});
import * as c from "three";
import { parseModelTVVideoPoints as S } from "./utils/parseData.js";
import { CSS3DRenderPlugin as z } from "../CSS3DRenderPlugin/index.js";
import { Image_Play_Icon_With_Text as O } from "../PanoTagPlugin/Assets/Icon.js";
import "./typings.js";
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
const Me = (s, { videoElement: g }) => {
  const e = {
    videoMeshes: [],
    videoTextureEnabled: !1,
    videoSource: "",
    rectPoints: [],
    enabled: !1,
    videoElement: g
  }, f = z(s), v = /* @__PURE__ */ new Map(), b = (t) => {
    e.videoTexture && (e.videoTexture.image.muted = t);
  }, w = () => e.videoTexture ? e.videoTexture.image.muted : !0, h = () => {
    if (e.enabled || !e.videoTexture)
      return;
    e.enabled = !0, e.videoMeshes = x(), e.videoMeshes.forEach((i) => s.scene.add(i));
    const t = () => {
      if (!e.videoTexture)
        return;
      const i = () => {
        var n;
        e.videoTexture && ((n = e.videoTexture) == null || n.image.removeEventListener("timeupdate", i), e.videoTextureEnabled = !0, e.videoMeshes.forEach((o) => {
          o.material.map !== e.videoTexture && (o.material.map = e.videoTexture);
        }), s.needsRender = !0);
      };
      e.videoTexture.image.addEventListener("timeupdate", i), e.videoTexture && e.videoMeshes.length && (e.videoTexture.image.play(), e.videoTexture.image.onplay = () => {
        f.hide();
      }, e.videoTexture.image.onpause = () => {
        f.show();
      }, e.videoTexture.image.onclick = () => {
        e.videoTexture.image.muted = !1, e.videoTexture.image.play();
      });
    };
    if (s.model.loaded)
      t();
    else
      return s.once("modelLoaded", () => t());
  }, m = () => {
    e.enabled && (e.enabled = !1, e.videoMeshes.forEach((t) => {
      t.geometry.dispose(), t.material.dispose(), s.scene.remove(t), e.videoTexture && e.videoTexture.image.pause();
    }), e.videoMeshes = [], s.needsRender = !0);
  }, x = () => e.rectPoints.map((t, i) => {
    const n = new c.BufferGeometry(), o = 128, d = [];
    d.push(...t[0].toArray());
    for (let r = 1; r < o; r++)
      d.push(
        t[0].x + (t[1].x - t[0].x) * r / o,
        t[0].y + (t[1].y - t[0].y) * r / o,
        t[0].z + (t[1].z - t[0].z) * r / o
      );
    d.push(...t[1].toArray()), d.push(...t[2].toArray());
    for (let r = 1; r < o; r++)
      d.push(
        t[2].x + (t[3].x - t[2].x) * r / o,
        t[2].y + (t[3].y - t[2].y) * r / o,
        t[2].z + (t[3].z - t[2].z) * r / o
      );
    d.push(...t[3].toArray());
    const a = [];
    a.push(0, 1);
    for (let r = 1; r < o; r++)
      a.push(0, 1 - r / o);
    a.push(0, 0), a.push(1, 0);
    for (let r = 1; r < o; r++)
      a.push(1, r / o);
    a.push(1, 1);
    const u = [];
    for (let r = 0; r < o; r++)
      u.push(r, r + 1, o * 2 - r, r, o * 2 - r, o * 2 + 1 - r);
    n.setAttribute("position", new c.BufferAttribute(new Float32Array(d), 3)), n.setAttribute("uv", new c.BufferAttribute(new Float32Array(a), 2)), n.setIndex(new c.BufferAttribute(new Uint32Array(u), 1));
    const l = new c.MeshBasicMaterial({
      map: e.videoTextureEnabled ? e.videoTexture : e.imageTexture,
      side: c.DoubleSide
    }), p = new c.Mesh(n, l);
    p.renderOrder = 1, p.name = `ModelTVVideoPlugin-${i}-${performance.now()}`;
    const I = [t[1], t[2], t[3], t[0]], y = f.create3DDomContainer(I);
    if (y != null && y.container) {
      const r = document.createElement("div");
      r.classList.add("play-icon"), r.style.width = "100%", r.style.height = "100%", r.style.display = "flex", r.style.justifyContent = "center", r.style.alignItems = "center", r.style.pointerEvents = "none", y.container.appendChild(r);
      const T = document.createElement("img");
      T.src = O, T.style.width = "200px", T.style.pointerEvents = "auto", T.onclick = () => {
        e.videoTexture.image.muted = !1, e.videoTexture.image.play();
      }, r.appendChild(T), v.set(p, y);
    }
    return p;
  }), F = (t) => {
    const i = new c.TextureLoader().load(t);
    return i.minFilter = c.LinearFilter, i.magFilter = c.LinearFilter, i.format = c.RGBFormat, i;
  }, P = (t, i) => {
    let n = i;
    return new Promise((o, d) => {
      const a = new XMLHttpRequest();
      a.onreadystatechange = () => {
        if (a.readyState === 4)
          if (a.status === 200) {
            const u = window.URL || window.webkitURL;
            n = n || document.createElement("video"), n.crossOrigin = "anonymous", n.muted = !0, n.loop = !0, n.playsInline = !0, n.src = u.createObjectURL(a.response);
            const l = new c.VideoTexture(n);
            l.minFilter = c.LinearFilter, l.magFilter = c.LinearFilter, l.format = c.RGBFormat, o(Object.assign(l, { videoSource: t }));
          } else
            d(new Error("Video download Error: " + a.status));
      }, a.onerror = (u) => d(u), a.open("GET", t), a.responseType = "blob", a.send();
    });
  }, L = (t, i) => R(void 0, null, function* () {
    const { video_src: n, video_poster_src: o, points: d } = t;
    e.videoSource = n, e.rectPoints = S(d).map((a) => a.map(({ x: u, y: l, z: p }) => new c.Vector3(u, l, p))), e.imageTexture = F(o), i && (e.videoElement = i), e.videoTexture = yield P(e.videoSource, e.videoElement), e.enabled = !!t.enable, e.enabled && h();
  }), E = (t) => {
    if (!e.enabled)
      return;
    const i = e.videoMeshes;
    if (!(!i || t.intersectObjects(i).length === 0))
      return e.videoTexture && (e.videoTexture.image.paused || e.videoTexture.image.pause()), !1;
  }, M = (t) => {
    t === "Floorplan" ? f.hide() : f.show();
  }, A = () => {
    if (!e.enabled)
      return;
    const t = s.camera.position;
    if (v.forEach((i, n) => {
      const o = i.css3DObject.position.clone(), d = o.clone().sub(t).normalize(), a = new c.Raycaster(t, d), u = s.model.intersectRaycaster(a)[0], l = o.distanceTo(t), p = 0.01;
      u && u.distance + p < l ? i.hide() : i.show();
    }), !w()) {
      const i = e.rectPoints.find((n) => {
        const o = n[0].clone().add(n[1]).add(n[2]).add(n[3]).divideScalar(4);
        return n.map((d) => d.clone().add(o).divideScalar(2)).filter((d) => {
          const a = d.distanceTo(t), u = new c.Raycaster(t, d.clone().sub(t).normalize()), l = s.model.intersectRaycaster(u)[0], p = 0.01;
          return !(l && l.distance + p < a);
        }).length >= 2;
      });
      (!i || i.length === 0) && b(!0);
    }
  }, V = () => {
    m(), e.videoTexture = void 0, s.off("modeChange", M), s.off("wantsTapGesture", E), s.off("panoArrived", A), s.off("renderFrame", () => {
      e.videoMeshes.forEach((t) => {
        t && (t.needsRender = !0);
      });
    });
  };
  return s.on("modeChange", M), s.on("wantsTapGesture", E), s.on("panoArrived", A), s.on("renderFrame", () => {
    e.videoMeshes.forEach((t) => {
      t && (t.needsRender = !0);
    });
  }), { enable: h, disable: m, load: L, dispose: V, state: e, css3DRenderPlugin: f };
};
export {
  Me as ModelTVVideoPlugin,
  Me as default
};
