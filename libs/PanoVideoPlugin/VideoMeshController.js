var g = Object.defineProperty;
var I = (v, e, i) => e in v ? g(v, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : v[e] = i;
var t = (v, e, i) => (I(v, typeof e != "symbol" ? e + "" : e, i), i);
import { vertexShader as M, fragmentShader as P } from "./utils/shader.js";
import "hammerjs";
import { VideoTexture as F, LinearFilter as m, ShaderMaterial as y, Vector4 as x, SphereBufferGeometry as L, Mesh as V, Vector3 as l, Quaternion as b } from "three";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import A from "animejs";
import { requestAnimationFrameInterval as D } from "../shared-utils/animationFrame/index.js";
import E from "./utils/index.js";
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
class ee {
  /** 初始化视频、模型以及相关事件监听。 */
  constructor(e, i) {
    t(this, "video");
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
    t(this, "uv2Position", (e, i) => {
      var c;
      const n = Math.PI, a = Math.PI * 2, d = e, s = 1 - i, r = new l(
        -1 * Math.cos(a * d) * Math.sin(n * s),
        1 * Math.cos(n * s),
        1 * Math.sin(a * d) * Math.sin(n * s)
      );
      r.setX(-r.x);
      const h = (c = this.five.work) == null ? void 0 : c.observers[this.panoIndex];
      if (!h)
        return this.logWarning(`点位 ${this.panoIndex} 不存在，请检查 Five 数据是否正常。`);
      const f = h.position.clone(), p = h.quaternion.clone(), u = r.clone();
      return u.applyAxisAngle(new l(0, 1, 0), Math.PI / 2), u.applyQuaternion(p), u.add(f), u;
    });
    /** Five 数据加载后需要根据点位位姿调整点位模型位置 */
    t(this, "onFiveDataLoaded", () => {
      var r;
      const e = (r = this.five.work) == null ? void 0 : r.observers[this.panoIndex];
      if (!e)
        return this.logWarning(`点位 ${this.panoIndex} 不存在，请检查 Five 数据是否正常。`);
      this.observer = e;
      const { x: i, y: o, z: n, w: a } = e.quaternion, d = new b(i, o, n, a), s = e.position;
      this.videoMesh.position.fromArray([s.x, s.y, s.z]), this.videoMesh.quaternion.set(0, 0, 0, 1), this.videoMesh.rotateOnAxis(new l(0, 1, 0), Math.PI / 2), this.videoMesh.applyQuaternion(d);
    });
    /** 兼容视频播放 */
    t(this, "onFiveWantsMoveToPano", (e) => {
      e === this.panoIndex && (this.hasVideoEverPlayed || this.video.play().catch(() => {
      }));
    });
    /** 走到某个点位上时，挂载/卸载视频 */
    t(this, "onFivePanoArrived", (e) => {
      if (this.disposed)
        return this.logWarning("实例已被销毁");
      this.enabled && this.panoIndex === e && this.mount();
    });
    t(this, "onFivePanoWillArrive", (e) => {
      if (e !== this.panoIndex)
        return this.unmount();
      this.panoIndex !== e && this.unmount();
    });
    /** Five 模型变化 */
    t(this, "onFiveModeChange", (e) => {
      e !== "Panorama" && this.hide();
    });
    /** Five mode change 动画结束 */
    t(this, "onFiveInitAnimationEnded", () => {
      const e = this.five.getCurrentState();
      e.mode === "Panorama" && e.panoIndex === this.panoIndex && this.mount();
    });
    /** Five Canvas 点击 */
    t(this, "onFiveWantsTapGesture", (e) => {
      if (!this.five.scene.children.includes(this.videoMesh))
        return;
      if (this.disposed)
        return this.logWarning("实例已被销毁");
      if (!this.enabled)
        return this.logWarning("实例已被禁用");
      const [i] = e.intersectObject(this.videoMesh);
      if (!i)
        return;
      if (this.checkIntersectionInBounding(this.origin, i)) {
        const n = {
          target: this,
          _preventDefaultReturn: !1,
          preventDefault: () => {
            n._preventDefaultReturn = !0;
          }
        };
        return this.hooks.emit("click", n), n._preventDefaultReturn === !1 && (this.video.muted = !this.video.muted), !1;
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
          if (this.enabled && this.panoIndex === this.five.getCurrentState().panoIndex && this.five.getCurrentState().mode === "Panorama" && (this.renderFiveDisposer || (this.renderFiveDisposer = D(() => {
            this.five.needsRender = !0;
          }, 30)), this.five.scene.add(this.videoMesh), this.videoMesh.material.uniforms.opacity.value === 0)) {
            const e = {
              value: 0
            };
            A({
              targets: e,
              value: 1,
              duration: 300,
              easing: "linear",
              update: () => {
                this.videoMesh.material.uniforms.opacity.value = e.value;
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
      var e;
      (e = this.renderFiveDisposer) == null || e.call(this), this.renderFiveDisposer = void 0;
    });
    var r, h;
    this.five = e, this.panoIndex = i.panoIndex, this._id = i.renderID, this.url = i.url, this.origin = i.origin.slice(), this.hooks = i.hooks, this._enabled = (h = (r = i.initialState) == null ? void 0 : r.enabled) != null ? h : !0;
    const o = document.createElement("video");
    o.crossOrigin = "anonymous", o.autoplay = !1, o.muted = !0, o.loop = !0, o.playsInline = !0, this.video = o;
    const n = new F(this.video);
    n.minFilter = m, n.magFilter = m;
    const a = new y({
      vertexShader: M,
      fragmentShader: P,
      uniforms: {
        map: { value: n },
        size: {
          value: new x(this.origin[0], 1 - this.origin[1] - this.origin[3], this.origin[2], this.origin[3])
        },
        opacity: { value: 0 }
      },
      depthTest: !0,
      transparent: !0
    }), d = new L(1, 64, 64);
    d.scale(-1, 1, 1);
    const s = new V(d, a);
    s.name = "pano-video-plugin", this.videoMesh = s, this.five.work && this.onFiveDataLoaded(), this.enabled && this.addEventListeners(), this.mountIfNeeded(), window[`__PANOVIDEO_${this.renderID}_DEBUG__`] = this;
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
    const e = this.getUVCenter();
    if (!e)
      return;
    const i = this.uv2Position(e[0], e[1]);
    if (!i)
      return;
    const o = new l().subVectors(i, this.observer.position).normalize(), { longitude: n, latitude: a } = E(o);
    this.five.setState({ panoIndex: this.panoIndex, longitude: n, latitude: a }), this.onFiveWantsMoveToPano(this.panoIndex);
  }
  /** 获取视频中心点的 uv */
  getUVCenter() {
    if (!this.origin)
      return;
    const e = this.origin[0] + this.origin[2] / 2, i = this.origin[1] + this.origin[3] / 2;
    return [e, i];
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
    const e = this.five.getCurrentState();
    e.mode === "Panorama" && e.panoIndex === this.panoIndex && this.enabled && this.mount();
  }
  /** 挂载：加载视频资源；添加模型。 */
  mount() {
    if (this.disposed)
      return this.logWarning("插件已经销毁，无法挂载。");
    if (this.url === "")
      return this.logWarning("视频资源不存在。");
    this.video.src !== this.url && (this.video.src = this.url), this.video.paused && this.video.play().catch((e) => {
      this.logWarning(e instanceof Error ? e.message : "视频播放失败。"), this.five.once("gesture", () => {
        this.video.play().catch((i) => {
          this.logWarning(i instanceof Error ? i.message : "自动播放视频失败。");
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
  logWarning(e) {
    console.warn("⛔ ==> [VideoMeshController]:", e);
  }
  /** 检测射线与模型的交点是不是在视频的范围内 */
  checkIntersectionInBounding(e, i) {
    if (!i.uv)
      return !1;
    const [o, n] = i.uv.toArray(), [a, d, s, r] = e, h = 1 - d - r, f = a + s, p = h + r;
    return o >= a && o <= f && n >= h && n <= p;
  }
}
export {
  ee as VideoMeshController
};
