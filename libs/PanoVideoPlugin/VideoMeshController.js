var c = Object.defineProperty;
var g = (v, i, e) => i in v ? c(v, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : v[i] = e;
var t = (v, i, e) => (g(v, typeof i != "symbol" ? i + "" : i, e), e);
import { vertexShader as I, fragmentShader as M } from "./utils/shader.js";
import "../shared-utils/tag.js";
import { VideoTexture as P, LinearFilter as f, ShaderMaterial as F, Vector4 as y, SphereBufferGeometry as x, Mesh as L, Vector3 as p, Quaternion as V } from "three";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import { anime as b } from "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { requestAnimationFrameInterval as A } from "../shared-utils/animationFrame/index.js";
import "../shared-utils/five/FivePuppet.js";
import D from "./utils/index.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Subscribe.js";
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
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../shared-utils/even.js";
import "../shared-utils/CSS3DRender/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/isNil.js";
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
import "@realsee/five";
class Bi {
  /** 初始化视频、模型以及相关事件监听。 */
  constructor(i, e) {
    t(this, "video");
    t(this, "fiveUtil");
    t(this, "_id");
    /** 视频资源地址 */
    t(this, "url");
    /** Five Instance */
    t(this, "five");
    /** 视频对应的点位 */
    t(this, "panoIndex");
    /** 视频对应的 Work Observer */
    t(this, "observer");
    /** 视频在球面的 uv：[left, top, width, height] */
    t(this, "origin");
    /** Video DOM */
    /** Video Mesh */
    t(this, "videoMesh");
    t(this, "_enabled", !0);
    t(this, "_disposed", !1);
    /** 视频资源是否满足播放条件 */
    t(this, "videoDataLoaded", !1);
    /** 视频是否曾经播放过 */
    t(this, "hasVideoEverPlayed", !1);
    /** 自动 render five 的销毁函数
     * @remark 由于 render video 依赖 Five render，因此需要自动 render five。
     */
    t(this, "renderFiveDisposer");
    t(this, "hooks");
    /**
     * 取消静音
     *
     * @warning 需要注意：由于大部分浏览器的限制，视频的声音必须在用户有交互事件后才能开启，否则会被浏览器禁用视频播放。
     */
    t(this, "unmute", () => {
      this.video.muted = !1;
    });
    /** 把 uv 值转换成位置 */
    t(this, "uv2Position", (i, e) => {
      const o = Math.PI, r = Math.PI * 2, a = i, s = 1 - e, d = new p(
        -1 * Math.cos(r * a) * Math.sin(o * s),
        1 * Math.cos(o * s),
        1 * Math.sin(r * a) * Math.sin(o * s)
      );
      d.setX(-d.x);
      const h = this.fiveUtil.workUtil.getResolvedObserver(this.panoIndex);
      if (!h)
        return this.logWarning(`点位 ${this.panoIndex} 不存在，请检查 Five 数据是否正常。`);
      const l = h.position.clone(), m = h.quaternion.clone(), u = d.clone();
      return u.applyAxisAngle(new p(0, 1, 0), Math.PI / 2), u.applyQuaternion(m), u.add(l), u;
    });
    /** Five 数据加载后需要根据点位位姿调整点位模型位置 */
    t(this, "onFiveDataLoaded", () => {
      const i = this.fiveUtil.workUtil.getResolvedObserver(this.panoIndex);
      if (!i)
        return this.logWarning(`点位 ${this.panoIndex} 不存在，请检查 Five 数据是否正常。`);
      this.observer = i;
      const { x: e, y: n, z: o, w: r } = i.quaternion, a = new V(e, n, o, r), s = i.position;
      this.videoMesh.position.fromArray([s.x, s.y, s.z]), this.videoMesh.quaternion.set(0, 0, 0, 1), this.videoMesh.rotateOnAxis(new p(0, 1, 0), Math.PI / 2), this.videoMesh.applyQuaternion(a);
    });
    /** 兼容视频播放 */
    t(this, "onFiveWantsMoveToPano", (i) => {
      i === this.panoIndex && (this.hasVideoEverPlayed || this.video.play().catch(() => {
      }));
    });
    /** 走到某个点位上时，挂载/卸载视频 */
    t(this, "onFivePanoArrived", (i) => {
      if (this.disposed)
        return this.logWarning("实例已被销毁");
      this.enabled && this.panoIndex === i && this.mount();
    });
    t(this, "onFivePanoWillArrive", (i) => {
      if (i !== this.panoIndex)
        return this.unmount();
      this.panoIndex !== i && this.unmount();
    });
    /** Five 模型变化 */
    t(this, "onFiveModeChange", (i) => {
      i !== "Panorama" && this.hide();
    });
    /** Five mode change 动画结束 */
    t(this, "onFiveInitAnimationEnded", () => {
      const i = this.five.getCurrentState();
      i.mode === "Panorama" && i.panoIndex === this.panoIndex && this.mount();
    });
    /** Five Canvas 点击 */
    t(this, "onFiveWantsTapGesture", (i) => {
      if (!this.five.scene.children.includes(this.videoMesh))
        return;
      if (this.disposed)
        return this.logWarning("实例已被销毁");
      if (!this.enabled)
        return this.logWarning("实例已被禁用");
      const [e] = i.intersectObject(this.videoMesh);
      if (!e)
        return;
      if (this.checkIntersectionInBounding(this.origin, e)) {
        const o = {
          target: this,
          _preventDefaultReturn: !1,
          preventDefault: () => {
            o._preventDefaultReturn = !0;
          }
        };
        return this.hooks.emit("click", o), o._preventDefaultReturn === !1 && (this.video.muted = !this.video.muted), !1;
      }
    });
    /** video canplaythrough 事件触发 */
    t(this, "onVideoDataLoaded", () => {
      this.videoDataLoaded = !0, this.video.paused === !1 && this.video.src !== "" && this.onVideoPlayingAndLoaded();
    });
    /** video playing 事件触发
     * @remarks
     * 事件触发时机：
     * - video is ready to start after having been paused.
     * - video is ready to play after delayed due to lack of data.
     * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
     */
    t(this, "onVideoPlaying", () => {
      this.hasVideoEverPlayed = !0, this.enabled && this.videoDataLoaded && this.onVideoPlayingAndLoaded();
    });
    /** 触发 playing 和 canplaythrough */
    t(this, "onVideoPlayingAndLoaded", () => {
      if (!this.videoDataLoaded)
        return this.logWarning("视频数据未加载");
      if (this.video.paused === !0)
        return this.logWarning("视频已暂停");
      this.video.addEventListener(
        "timeupdate",
        () => {
          if (this.enabled && this.panoIndex === this.five.getCurrentState().panoIndex && this.five.getCurrentState().mode === "Panorama" && (this.renderFiveDisposer || (this.renderFiveDisposer = A(() => {
            this.five.needsRender = !0;
          }, 30)), this.five.scene.add(this.videoMesh), this.videoMesh.material.uniforms.opacity.value === 0)) {
            const i = {
              value: 0
            };
            b({
              targets: i,
              value: 1,
              duration: 300,
              easing: "linear",
              update: () => {
                this.videoMesh.material.uniforms.opacity.value = i.value;
              },
              complete: () => {
                this.videoMesh.material.uniforms.opacity.value = 1;
              }
            });
          }
        },
        { once: !0 }
      );
    });
    /** video pause 事件触发 */
    t(this, "onVideoPaused", () => {
      var i;
      (i = this.renderFiveDisposer) == null || i.call(this), this.renderFiveDisposer = void 0;
    });
    var d, h;
    this.five = i, this.panoIndex = e.panoIndex, this.fiveUtil = e.fiveUtil, this._id = e.renderID, this.url = e.url, this.origin = e.origin.slice(), this.hooks = e.hooks, this._enabled = (h = (d = e.initialState) == null ? void 0 : d.enabled) != null ? h : !0;
    const n = document.createElement("video");
    n.crossOrigin = "anonymous", n.autoplay = !1, n.muted = !0, n.loop = !0, n.playsInline = !0, this.video = n;
    const o = new P(this.video);
    o.minFilter = f, o.magFilter = f;
    const r = new F({
      vertexShader: I,
      fragmentShader: M,
      uniforms: {
        map: { value: o },
        size: {
          value: new y(this.origin[0], 1 - this.origin[1] - this.origin[3], this.origin[2], this.origin[3])
        },
        opacity: { value: 0 }
      },
      depthTest: !0,
      transparent: !0
    }), a = new x(1, 64, 64);
    a.scale(-1, 1, 1);
    const s = new L(a, r);
    s.name = "pano-video-plugin", this.videoMesh = s, this.fiveUtil.workUtil.work && this.onFiveDataLoaded(), this.enabled && this.addEventListeners(), this.mountIfNeeded(), window[`__PANOVIDEO_${this.renderID}_DEBUG__`] = this;
  }
  /** 传入的 ID，不可更改 */
  get renderID() {
    return this._id;
  }
  /** 是否已经销毁 */
  get disposed() {
    return this._disposed;
  }
  /** 是否已经启用 */
  get enabled() {
    return this._enabled;
  }
  /** 彻底销毁，不响应之后的任何事件 */
  dispose() {
    this.disposed || (this.disable(), this._disposed = !0);
  }
  enable() {
    this.disposed || this.enabled || (this._enabled = !0, !this.observer && this.five.work && this.onFiveDataLoaded(), this.addEventListeners(), this.mountIfNeeded());
  }
  /** 禁用插件 */
  disable() {
    this.disposed || this.enabled && (this._enabled = !1, this.removeEventListeners(), this.unmount());
  }
  /** 切换到全景模式并看向视频
   * @remark 如果遇到不能自动播放的问题，需要放到用户交互事件中调用。
   */
  lookAtVideo() {
    if (!this.observer)
      return;
    const i = this.getUVCenter();
    if (!i)
      return;
    const e = this.uv2Position(i[0], i[1]);
    if (!e)
      return;
    const n = new p().subVectors(e, this.observer.position).normalize(), { longitude: o, latitude: r } = D(n);
    this.five.setState({ panoIndex: this.panoIndex, longitude: o, latitude: r }), this.onFiveWantsMoveToPano(this.panoIndex);
  }
  /** 获取视频中心点的 uv */
  getUVCenter() {
    if (!this.origin)
      return;
    const i = this.origin[0] + this.origin[2] / 2, e = this.origin[1] + this.origin[3] / 2;
    return [i, e];
  }
  /** 添加时间监听 */
  addEventListeners() {
    this.five.on("loaded", this.onFiveDataLoaded), this.five.on("modeChange", this.onFiveModeChange), this.five.on("panoArrived", this.onFivePanoArrived), this.five.on("panoWillArrive", this.onFivePanoWillArrive), this.five.on("wantsMoveToPano", this.onFiveWantsMoveToPano), this.five.on("wantsTapGesture", this.onFiveWantsTapGesture), this.five.on("initAnimationEnded", this.onFiveInitAnimationEnded), this.video.addEventListener("canplaythrough", this.onVideoDataLoaded), this.video.addEventListener("playing", this.onVideoPlaying), this.video.addEventListener("pause", this.onVideoPaused);
  }
  /** 移除事件监听 */
  removeEventListeners() {
    this.five.off("loaded", this.onFiveDataLoaded), this.five.off("modeChange", this.onFiveModeChange), this.five.off("panoArrived", this.onFivePanoArrived), this.five.off("panoWillArrive", this.onFivePanoWillArrive), this.five.off("wantsMoveToPano", this.onFiveWantsMoveToPano), this.five.off("wantsTapGesture", this.onFiveWantsTapGesture), this.five.off("initAnimationEnded", this.onFiveInitAnimationEnded), this.video.removeEventListener("canplaythrough", this.onVideoDataLoaded), this.video.removeEventListener("playing", this.onVideoPlaying), this.video.removeEventListener("pause", this.onVideoPaused);
  }
  /** 如果满足 mount 条件，mount */
  mountIfNeeded() {
    const i = this.five.getCurrentState();
    i.mode === "Panorama" && i.panoIndex === this.panoIndex && this.enabled && this.mount();
  }
  /** 挂载：加载视频资源；添加模型。 */
  mount() {
    if (this.disposed)
      return this.logWarning("插件已经销毁，无法挂载。");
    if (this.url === "")
      return this.logWarning("视频资源不存在。");
    this.video.src !== this.url && (this.video.src = this.url), this.video.paused && this.video.play().catch((i) => {
      this.logWarning(i instanceof Error ? i.message : "视频播放失败。"), this.five.once("gesture", () => {
        this.video.play().catch((e) => {
          this.logWarning(e instanceof Error ? e.message : "自动播放视频失败。");
        });
      });
    });
  }
  /** 卸载：销毁视频资源；移除模型。 */
  unmount() {
    this.video.pause(), this.videoMesh.material.uniforms.opacity.value = 0, this.video.src !== "" && (this.video.src = ""), this.five.scene.remove(this.videoMesh);
  }
  /** 暂停视频，去除模型。 */
  hide() {
    this.video.pause(), this.videoMesh.material.uniforms.opacity.value = 0, this.five.scene.remove(this.videoMesh);
  }
  /** 控制台打印警告 */
  logWarning(i) {
    console.warn("⛔ ==> [VideoMeshController]:", i);
  }
  /** 检测射线与模型的交点是不是在视频的范围内 */
  checkIntersectionInBounding(i, e) {
    if (!e.uv)
      return !1;
    const [n, o] = e.uv.toArray(), [r, a, s, d] = i, h = 1 - a - d, l = r + s, m = h + d;
    return n >= r && n <= l && o >= h && o <= m;
  }
}
export {
  Bi as VideoMeshController
};
