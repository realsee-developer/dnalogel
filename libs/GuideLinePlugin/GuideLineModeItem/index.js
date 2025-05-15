var w = Object.defineProperty, V = Object.defineProperties;
var P = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var b = (h, e, t) => e in h ? w(h, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[e] = t, f = (h, e) => {
  for (var t in e || (e = {}))
    x.call(e, t) && b(h, t, e[t]);
  if (y)
    for (var t of y(e))
      S.call(e, t) && b(h, t, e[t]);
  return h;
}, C = (h, e) => V(h, P(e));
var i = (h, e, t) => (b(h, typeof e != "symbol" ? e + "" : e, t), t);
import * as n from "three";
import { logError as T } from "../../shared-utils/log.js";
import { createLineGeometry as L } from "../utils/createLineGeometry.js";
import "../../shared-utils/tag.js";
import { isPanoramaLike as F, isModelLike as M } from "../../shared-utils/five/mode.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as _ } from "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import { blink as O } from "../../shared-utils/three/blink.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { BetterTween as U } from "../../shared-utils/animationFrame/BetterTween.js";
import "../../shared-utils/five/FivePuppet.js";
import { loadTexture as E } from "../../shared-utils/three/loadTexture.js";
import k from "../../PanoTagPlugin/controller/index.js";
import A from "../Components/Tag.js";
import { filterAdjacentDistinct as G } from "../utils/index.js";
import { objectAssignDeepExports as B } from "../../vendor/object-assign-deep/objectAssignDeep.js";
import { createPath as W } from "../utils/createPath.js";
const I = (
  /* glsl */
  `
  varying vec2 vUv;
  varying float ignoreAnimationMap;
  attribute float animationWillError;

  void main() {
    vUv = uv;
    ignoreAnimationMap = animationWillError;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
), R = (
  /* glsl */
  `
  precision highp float;
  precision mediump int;
  // 是否使用颜色
  uniform int useMapColor;
  // 贴图
  uniform sampler2D map;
  // 贴图颜色
  uniform vec3 mapColor;
  // 贴图透明度
  uniform float mapOpacity;
  // 背景颜色
  uniform vec3 backgroundColor;
  // 边框颜色
  uniform vec3 borderColor;
  // 边框透明度
  uniform float borderOpacity;
  // 边框宽度
  uniform float borderWidth;
  // 背景透明度
  uniform float backgroundOpacity;
  // @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
  uniform int backgroundClip;
  // 整体透明度
  uniform float opacity;
  // 最大 U 值
  uniform float maxV;
  // v offset
  uniform float vOffset;
  // 闪烁动画值
  uniform float flicker;
  // 纹理坐标
  varying vec2 vUv;
  varying float ignoreAnimationMap;

  // 获取纹理颜色
  vec4 getImage() {
    vec2 uv = vUv;
    uv.y = uv.y - vOffset;

    if (ignoreAnimationMap == 1.0) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    }

    // 原始贴图颜色
    vec4 image = texture2D(map, uv);
    // 如果使用颜色
    if (useMapColor == 1) {
      // 混合颜色
      image = mix(image, vec4(mapColor, image.a), image.a);
    }
    image.a = image.a * mapOpacity;
    return image;
  }

  // 获取线性渐变的透明度
  float linearGradientOpacity() {
    // 当前的 v 值
    float v = vUv.y;
    float gradientLength = 1.0;
    if (v <= gradientLength) {
      return v / gradientLength; // 在 [0, gradientLength] 范围内，透明度为 [0, 1]
    } else if (v <= maxV - gradientLength) {
      return 1.0; // 在 (gradientLength, maxV - gradientLength) 范围内，透明度为 1
    } else {
      return (maxV - v) / gradientLength; // 在 [maxV - gradientLength, maxV] 范围内，透明度为 [1, 0]
    }
  }

  // 获取边框颜色
  vec4 getBorder() {
    float u = vUv.x;
    if (u <= borderWidth || u >= 1.0 - borderWidth) {
      return vec4(borderColor, borderOpacity);
    }
    return vec4(0.0, 0.0, 0.0, 0.0);
  }

  // 获取背景色
  vec4 getBackground() {
    // border-box
    if (backgroundClip == 0) {
      return vec4(backgroundColor, backgroundOpacity);
    } else {
    // padding-box
      float u = vUv.x;
      if (u > borderWidth && u < 1.0 - borderWidth) {
        return vec4(backgroundColor, backgroundOpacity);
      }
      return vec4(0.0, 0.0, 0.0, 0.0);
    }
  }

  // 根据摄像机位置计算透明度
  float distanceOpacity() {
    return 1.0;
  }

  void main() {
    float v = vUv.y;
    vec4 image = getImage();
    vec4 border = getBorder();
    vec4 background = getBackground();
    // 设置背景颜色
    gl_FragColor = background;
    // 混合颜色和背景
    gl_FragColor = mix(background, vec4(image.rgb, image.a * 0.4 + 0.6), image.a); //  image.a * 0.4 + 0.6 先这么写，但是不是最优解
    // 混合边框
    gl_FragColor = mix(gl_FragColor, border, border.a);
    // 设置整体透明度
    gl_FragColor.a = gl_FragColor.a * opacity;
    gl_FragColor.a = gl_FragColor.a * linearGradientOpacity();
    gl_FragColor.a = gl_FragColor.a * distanceOpacity();
    gl_FragColor.a = gl_FragColor.a * flicker;
  }
`
);
class N {
  constructor(e, t) {
    i(this, "name", "");
    i(this, "startTagContainer");
    i(this, "endTagContainer");
    i(this, "path", []);
    i(this, "geometryStyle", {});
    i(this, "materialStyle", {});
    i(this, "meshStyle", {});
    i(this, "group", new n.Group());
    i(this, "mesh");
    i(this, "visible", null);
    i(this, "five");
    i(this, "mode");
    i(this, "_curvePath", null);
    i(this, "_curvePoints", null);
    i(this, "_panoGroup", []);
    i(this, "skippedPositions", null);
    i(this, "textureUrl", "");
    i(this, "scale", 1);
    i(this, "width", 0.5);
    i(this, "unitLength", 0.5);
    i(this, "_visibleFloorIndexes", null);
    /** Five Mode 是否满足 */
    i(this, "modeVisible", !1);
    /** 楼层是否满足展示条件 */
    i(this, "floorVisible", !0);
    /** 默认是否展示 */
    i(this, "defaultVisible", !1);
    /** 走点动画 */
    i(this, "inWalkAnimation", !1);
    i(this, "customVisible", null);
    i(this, "parent");
    i(this, "plugin");
    i(this, "textureHasLoaded", !1);
    i(this, "disposed", !1);
    i(this, "flowAnime", new U({ progress: 0 }).to({ progress: 1 }).duration(1500).repeat(1 / 0));
    /** 缓存 panoGroup 中每个点距离起点的长度 */
    i(this, "cacheLengths", []);
    /** 为了让多条路线在高度上错开，每个路线都需要有个额外的 offset */
    i(this, "heightOffset", 0);
    i(this, "dispose", () => {
      var e, t;
      this.disposed || (this.disposed = !0, this.parent.hooks.off("show", this.updateVisible), this.parent.hooks.off("hide", this.updateVisible), this.plugin.hooks.off("show", this.updateVisible), this.plugin.hooks.off("hide", this.updateVisible), this.plugin.hooks.off("enable", this.updateVisible), this.plugin.hooks.off("disable", this.updateVisible), this.five.off("modeChange", this.onFiveModeChange), this.five.off("modelShownFloorChange", this.onFiveModelShownFloorChange), this.doHide(), (e = this.startTagContainer) == null || e.plugin.dispose(), (t = this.endTagContainer) == null || t.plugin.dispose());
    });
    /** 开始走点动画 */
    i(this, "onWalkAnimationStart", () => {
      this.inWalkAnimation = !0, this.updateVisible();
    });
    /** 结束走点动画 */
    i(this, "onWalkAnimationEnd", () => {
      this.inWalkAnimation = !1, this.updateVisible();
    });
    /** 模型状态变更 */
    i(this, "onFiveModeChange", (e) => {
      this.modeVisible = this.mode === "panorama" ? F(e) : M(e), this.updateVisible();
    });
    i(this, "onFiveModelShownFloorChange", (e) => {
      this.floorVisible = e === null || this.visibleFloorIndexes === null || this.visibleFloorIndexes.includes(e), this.updateVisible();
    });
    /** 更新可见性 */
    i(this, "updateVisible", () => {
      const e = (() => !this.parent.visible || !this.plugin.state.enabled || !this.plugin.state.visible ? !1 : this.customVisible !== null ? this.customVisible : this.inWalkAnimation ? !0 : this.modeVisible && this.defaultVisible && this.floorVisible)();
      this.visible = e, e && this.textureHasLoaded ? this.doShow() : this.doHide();
    });
    i(this, "onFlowAnimeUpdate", (e) => {
      const { progress: t } = e;
      this.mesh.material.uniforms.vOffset.value = t, this.mesh.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
    });
    i(this, "logError", (e) => T("GuideLineModeItem: ", e));
    var a, o;
    this.five = e, this.mode = t.mode, this.plugin = t.plugin, this.parent = t.parent, this.group.name = "GuideLineModeItem";
    const s = new n.BufferGeometry(), r = new n.ShaderMaterial({
      vertexShader: I,
      fragmentShader: R,
      transparent: !0,
      uniforms: {
        map: { value: null },
        useMapColor: { value: 0 },
        mapColor: { value: new n.Color() },
        mapOpacity: { value: 1 },
        backgroundColor: { value: new n.Color() },
        backgroundOpacity: { value: 0 },
        borderColor: { value: new n.Color() },
        borderOpacity: { value: 0 },
        backgroundClip: { value: 0 },
        borderWidth: { value: 0.05 },
        opacity: { value: 1 },
        flicker: { value: 1 },
        maxV: { value: 0 },
        vOffset: { value: 0 }
      }
    });
    this.mesh = new n.Mesh(s, r), this.mesh.name = "GuideLineModeItem", this.group.add(this.mesh), this.mode === "panorama" && (this.parent.hooks.on("walkStart", this.onWalkAnimationStart), this.parent.hooks.on("walkEnded", this.onWalkAnimationEnd)), this.updateVisible(), this.onFiveModeChange(this.five.getCurrentState().mode), this.onFiveModelShownFloorChange((o = (a = this.five.model) == null ? void 0 : a.shownFloor) != null ? o : null), this.flowAnime.onUpdate(this.onFlowAnimeUpdate), this.parent.hooks.on("show", this.updateVisible), this.parent.hooks.on("hide", this.updateVisible), this.plugin.hooks.on("show", this.updateVisible), this.plugin.hooks.on("hide", this.updateVisible), this.plugin.hooks.on("enable", this.updateVisible), this.plugin.hooks.on("disable", this.updateVisible), this.plugin.hooks.on("dispose", this.dispose), this.five.on("modeChange", this.onFiveModeChange), this.five.on("modelShownFloorChange", this.onFiveModelShownFloorChange), this.five.needsRender = !0;
  }
  get panoGroup() {
    return this._panoGroup;
  }
  /** 可展示的楼层 */
  get visibleFloorIndexes() {
    return this._visibleFloorIndexes;
  }
  /** THREE Curve 路径 */
  get curvePath() {
    return this._curvePath;
  }
  /** THREE Curve 路径上的点 */
  get curvePoints() {
    return this._curvePoints;
  }
  /** 自定义展示 */
  setCustomVisible(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.customVisible !== e && (this.customVisible = e, this.updateVisible());
  }
  /** 设置默认展示 */
  setDefaultVisible(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.defaultVisible !== e && (this.defaultVisible = e, this.updateVisible());
  }
  /** 基础宽、长 */
  setUnitSize(e, t) {
    if (this.disposed)
      return this.logError("disposed");
    this.width = e, this.unitLength = t, this.setGeometryByPath(this.path, { width: e, unit_length: t });
  }
  /** 设置缩放 */
  setScale(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.scale = e, this.setGeometryByPath(this.path, { scale: e });
  }
  /** 通过点位设置线条形状 */
  setGeometryByPanoGroup(e, t) {
    if (this.disposed)
      return this.logError("disposed");
    if (!this.five.work)
      return this.logError("setPathByPanoGroup: work is not ready");
    const s = G(e);
    if (this._panoGroup = s, (t == null ? void 0 : t.skipPanoGroup) !== void 0) {
      const l = t.skipPanoGroup ? s.map((g) => this.plugin.workUtil.getObserverStandingPosition(g)).filter(_) : null;
      this.skippedPositions = l;
    }
    const r = this.five.getCurrentState(), a = this.five.works.getWork(r.workCode), o = W(s, a, t);
    this.path = o, this.setGeometryByPath(o, t);
  }
  /** 通过路径设置线条形状 */
  setGeometryByPath(e, t) {
    var u, m, d;
    if (this.disposed)
      return this.logError("disposed");
    const s = (u = t == null ? void 0 : t.scale) != null ? u : this.scale, r = (m = t == null ? void 0 : t.width) != null ? m : this.width, a = (d = t == null ? void 0 : t.unit_length) != null ? d : this.unitLength;
    this.scale = s, this.width = r, this.unitLength = a;
    const { geometry: o, maxV: l, curvePath: g, curvePoints: c } = L({
      path: e,
      width: r * s,
      unitLength: a * s,
      skipPositions: this.skippedPositions
    });
    this._curvePath = g, this._curvePoints = c, this.mesh.geometry.copy(o), this.mesh.material.needsUpdate = !0, this.mesh.material.uniforms.maxV.value = l, this.five.needsRender = !0, this.path = e, this.geometryStyle = f(f({}, this.geometryStyle), t);
  }
  /** 设置线条材质 */
  setMartial(e) {
    var s, r, a, o, l;
    if (this.disposed)
      return this.logError("disposed");
    this.setDefaultVisible((s = e == null ? void 0 : e.visible) != null ? s : !1), this.setColor((r = e == null ? void 0 : e.color) != null ? r : "#ffffff"), this.setOpacity((a = e == null ? void 0 : e.opacity) != null ? a : 0.5), this.setTextureUrl((l = (o = e == null ? void 0 : e.texture) == null ? void 0 : o.url) != null ? l : "https://vr-image-4.realsee-cdn.cn/release/web/arrow1.ebe7d0ff.png"), (e == null ? void 0 : e.background_color) !== void 0 && this.setBackgroundColor(e.background_color), (e == null ? void 0 : e.background_opacity) !== void 0 && this.setBackgroundOpacity(e.background_opacity), (e == null ? void 0 : e.border_color) !== void 0 && this.setBorderColor(e.border_color), (e == null ? void 0 : e.border_opacity) !== void 0 && this.setBorderOpacity(e.border_opacity), (e == null ? void 0 : e.border_width) !== void 0 && this.setBorderWidth(e.border_width), (e == null ? void 0 : e.background_clip) !== void 0 && this.setBackgroundClip(e.background_clip);
    const t = f(f({}, this.materialStyle), e);
    this.materialStyle = t;
  }
  /** 设置模型状态 */
  setMeshStyle(e) {
    if (e != null && e.translate) {
      const r = new n.Vector3(), a = new n.Vector3().fromArray(e.translate);
      a.y += this.heightOffset, r.add(a), this.group.position.copy(r), s(this.startTagContainer, a), s(this.endTagContainer, a);
    }
    const t = f(f({}, this.meshStyle), e);
    this.meshStyle = t;
    function s(r, a) {
      if (!(r != null && r.tag))
        return;
      const o = new n.Vector3().fromArray(r.tag.position);
      o.add(a);
      const l = o.toArray();
      r.plugin.changeTagById(r.tag.id, { position: l });
    }
  }
  /** 设置 Y 轴上的偏移量，为了让多条路线在高度上错开，每个路线都需要有个额外的 offset */
  setHeightOffset(e) {
    const t = new n.Vector3();
    this.meshStyle.translate && t.add(new n.Vector3().fromArray(this.meshStyle.translate)), t.setY(t.y + e), this.group.position.copy(t), this.heightOffset = e, this.five.needsRender = !0;
  }
  /** 设置贴图颜色 */
  setColor(e) {
    if (this.disposed)
      return this.logError("disposed");
    e && (this.mesh.material.uniforms.mapColor.value = new n.Color().set(e)), this.mesh.material.uniforms.useMapColor.value = e ? 1 : 0, this.mesh.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /** 设置边框 */
  setBorderColor(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.mesh.material.uniforms.borderColor.value = new n.Color().set(e), this.five.needsRender = !0;
  }
  /** 设置边框透明度 */
  setBorderOpacity(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.mesh.material.uniforms.borderOpacity.value = e, this.mesh.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  setBackgroundClip(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.mesh.material.uniforms.backgroundClip.value = e === "border-box" ? 0 : 1, this.mesh.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /**
   * @description: 设置边框宽度
   */
  setBorderWidth(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.mesh.material.uniforms.borderWidth.value = e, this.mesh.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /** 设置背景颜色 */
  setBackgroundColor(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.mesh.material.uniforms.backgroundColor.value = new n.Color().set(e), this.mesh.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /** 设置背景透明度 */
  setBackgroundOpacity(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.mesh.material.uniforms.backgroundOpacity.value = e, this.mesh.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /** 设置整体透明度 */
  setOpacity(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.mesh.material.uniforms.opacity.value = e, this.mesh.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /** 设置贴图透明度 */
  setMapOpacity(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.mesh.material.uniforms.mapOpacity.value = e, this.mesh.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /** 设置贴图 */
  setTextureUrl(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.textureUrl = e, E(e).then((t) => {
      this.disposed || this.textureUrl === e && (t.wrapT = n.RepeatWrapping, this.textureHasLoaded = !0, this.mesh.material.uniforms.map.value = t, this.mesh.material.uniformsNeedUpdate = !0, this.mesh.material.needsUpdate = !0, this.five.needsRender = !0, this.updateVisible());
    });
  }
  setVisibleFloorIndexes(e) {
    var t, s;
    if (this.disposed)
      return this.logError("disposed");
    this._visibleFloorIndexes = e, this.onFiveModelShownFloorChange((s = (t = this.five.model) == null ? void 0 : t.shownFloor) != null ? s : null);
  }
  setStartTag(e) {
    this.setTag("start", e);
  }
  setEndTag(e) {
    this.setTag("end", e);
  }
  /** 闪烁 */
  flicker() {
    var e, t, s, r, a, o;
    if (this.disposed)
      return this.logError("disposed");
    O([this.group, (s = (t = (e = this.startTagContainer) == null ? void 0 : e.plugin) == null ? void 0 : t.tags[0]) == null ? void 0 : s.dom, (o = (a = (r = this.endTagContainer) == null ? void 0 : r.plugin) == null ? void 0 : a.tags[0]) == null ? void 0 : o.dom], {
      loop: 6,
      updateRender: () => {
        this.five.needsRender = !0;
      }
    });
  }
  /** 求起点到 panoIndex 曲线长度
   * @param index panoIndex 在 panoGroup 中的索引
   *
   * @description 为什么不使用 panoIndex 作为参数？
   * - panoIndex 在一个曲线中可能出现多次，无法确定是哪一个。
   */
  getLengthByPanoGroupIndex(e) {
    return this.disposed ? this.logError("disposed") : this.cacheLengths.length !== 0 ? this.cacheLengths[e] : (this.cacheLengths = this.getPanoGroupLengths(), this.cacheLengths[e]);
  }
  getPanoGroupLengths() {
    var g, c, u, m;
    if (!this.curvePoints || !this.curvePath)
      return [];
    const e = this.curvePoints.length, t = (c = (g = this.curvePath) == null ? void 0 : g.getLength()) != null ? c : 0, s = e - 1, r = t / s, a = (m = (u = this.curvePath) == null ? void 0 : u.getLengths(s)) != null ? m : [], o = [];
    let l = 0;
    for (let d = 0; d < e; d++) {
      const v = this.curvePoints[d], p = this.plugin.workUtil.getObserverStandingPosition(l);
      if (!p)
        break;
      p.clone().setY(0).distanceTo(v.clone().setY(0)) < r && (o.push(a[d]), l += 1);
    }
    return o;
  }
  setTag(e, t) {
    var g, c;
    const s = this.curvePath;
    if (!(t != null && t.data))
      return;
    const r = e === "start" ? (g = this.startTagContainer) != null ? g : (() => (this.startTagContainer = { tag: null, plugin: new k(this.five, { containerZIndex: 10 }) }, this.startTagContainer))() : (c = this.endTagContainer) != null ? c : (() => (this.endTagContainer = { tag: null, plugin: new k(this.five, { containerZIndex: 10 }) }, this.endTagContainer))(), o = B({}, {
      contentType: "Custom",
      stickType: "2DPoint",
      config: { visibleConfig: { visibleFiveMode: ["Floorplan", "Mapview"], followModelVisibility: !1 } },
      style: { point: { enabled: !1 } },
      data: {}
    }, t);
    r.tag = o, H(o) && (r.tag.element = (u) => {
      var v, p;
      (v = r.app) == null || v.$destroy();
      const m = e === "start" ? C(f({}, o.data), { name: this.name, distance: Math.round((p = s == null ? void 0 : s.getLength()) != null ? p : 0), i18n: this.plugin.config.i18n }) : o.data, d = new A({ target: u, intro: !0, props: m });
      return r.app = d, () => d.$destroy();
    }), r.plugin.load({ tagList: [r.tag] });
    const l = this.meshStyle.translate;
    if (l && o.position) {
      const u = new n.Vector3().fromArray(o.position), m = new n.Vector3().fromArray(l);
      u.add(m), u.y += this.heightOffset;
      const d = u.toArray();
      r.plugin.changeTagById(r.tag.id, { position: d });
    }
  }
  doShow() {
    var e, t;
    this.mode === "model" && !this.flowAnime.isPlaying() && this.flowAnime.play(), this.five.scene.add(this.group), (e = this.startTagContainer) == null || e.plugin.show(), (t = this.endTagContainer) == null || t.plugin.show(), this.five.needsRender = !0;
  }
  doHide() {
    var e, t;
    this.mode === "model" && this.flowAnime.stop(), this.five.scene.remove(this.group), (e = this.startTagContainer) == null || e.plugin.hide(), (t = this.endTagContainer) == null || t.plugin.hide(), this.five.needsRender = !0;
  }
}
function H(h) {
  return h.contentType === "Custom";
}
const fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GuideLineModeItem: N
}, Symbol.toStringTag, { value: "Module" }));
export {
  N as GuideLineModeItem,
  fe as GuideLineModeItem$1
};
