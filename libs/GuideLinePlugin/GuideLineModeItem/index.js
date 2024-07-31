var k = Object.defineProperty, x = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var D = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var T = (m, e, t) => e in m ? k(m, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : m[e] = t, c = (m, e) => {
  for (var t in e || (e = {}))
    M.call(e, t) && T(m, t, e[t]);
  if (D)
    for (var t of D(e))
      P.call(e, t) && T(m, t, e[t]);
  return m;
}, y = (m, e) => x(m, w(e));
var i = (m, e, t) => (T(m, typeof e != "symbol" ? e + "" : e, t), t);
import * as h from "three";
import { logError as F } from "../../shared-utils/log.js";
import { createLineGeometry as U } from "../utils/createLineGeometry.js";
import { isPanoramaLike as L, isModelLike as S } from "../../shared-utils/five/mode.js";
import "hammerjs";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { blink as O } from "../../shared-utils/three/blink.js";
import { notNil as C } from "../../shared-utils/isNil.js";
import { BetterTween as _ } from "../../shared-utils/animationFrame/BetterTween.js";
import { loadTexture as A } from "../../shared-utils/three/loadTexture.js";
import V from "../../PanoTagPlugin/controller/index.js";
import E from "../Components/Tag.js";
import { filterAdjacentDistinct as G } from "../utils/index.js";
import { objectAssignDeepExports as B } from "../../vendor/object-assign-deep/objectAssignDeep.js";
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
), N = (
  /* glsl */
  `
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
  // 只显示 includeMinV ~ includeMaxV 之内的颜色
  uniform float includeMinV;
  uniform float includeMaxV;
  // 不显示 excludeMinV ~ excludeMaxV 之内的颜色
  uniform float excludeMinV;
  uniform float excludeMaxV;
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
    if (includeMinV != -1.0 && includeMaxV != -1.0) {
      if (v < includeMinV || v > includeMaxV) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        return;
      }
    }
    if (excludeMinV != -1.0 && excludeMaxV != -1.0) {
      if (v >= excludeMinV && v <= excludeMaxV) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        return;
      }
    }
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
class R {
  constructor(e, t) {
    i(this, "name", "");
    i(this, "startTagContainer");
    i(this, "endTagContainer");
    i(this, "path", []);
    i(this, "geometryStyle", {});
    i(this, "materialStyle", {});
    i(this, "meshStyle", {});
    i(this, "group", new h.Group());
    i(this, "meshWithDepthTest");
    i(this, "meshWithoutDepthTest");
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
    i(this, "visible", null);
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
    i(this, "flowAnime", new _({ progress: 0 }).to({ progress: 1 }).duration(1500).repeat(1 / 0));
    /** 缓存 panoGroup 中每个点距离起点的长度 */
    i(this, "cacheLengths", []);
    /** 为了让多条路线在高度上错开，每个路线都需要有个额外的 offset */
    i(this, "heightOffset", 0);
    i(this, "panoMap", {});
    i(this, "autoDepthTestEffectDistance");
    i(this, "dispose", () => {
      var e, t;
      this.disposed || (this.disposed = !0, this.parent.hooks.off("show", this.updateVisible), this.parent.hooks.off("hide", this.updateVisible), this.plugin.hooks.off("show", this.updateVisible), this.plugin.hooks.off("hide", this.updateVisible), this.plugin.hooks.off("enable", this.updateVisible), this.plugin.hooks.off("disable", this.updateVisible), this.five.off("modeChange", this.onFiveModeChange), this.five.off("panoArrived", this.onFivePanoArrived), this.five.off("modelShownFloorChange", this.onFiveModelShownFloorChange), this.doHide(), (e = this.startTagContainer) == null || e.plugin.dispose(), (t = this.endTagContainer) == null || t.plugin.dispose());
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
      this.modeVisible = this.mode === "panorama" ? L(e) : S(e), this.updateVisible();
    });
    /** 走点 */
    i(this, "onFivePanoArrived", (e) => {
      var s, a, o, n, l, d;
      const t = (o = (a = (s = this.path) == null ? void 0 : s[0]) == null ? void 0 : a.panoIndexMap) == null ? void 0 : o[e], r = this.panoMap[t != null ? t : e];
      if (r === void 0)
        this.group.children.includes(this.meshWithoutDepthTest) && this.group.remove(this.meshWithoutDepthTest), this.meshWithDepthTest.material.uniforms.excludeMinV.value = -1, this.meshWithDepthTest.material.uniforms.excludeMaxV.value = -1;
      else {
        this.group.children.includes(this.meshWithoutDepthTest) || this.group.add(this.meshWithoutDepthTest), this.meshWithoutDepthTest.visible = !0;
        const u = this.meshWithDepthTest.geometry.getAttribute("uv"), p = 100 * ((n = this.autoDepthTestEffectDistance) != null ? n : 2), g = (l = u.getY((r - p) * 2)) != null ? l : 0, f = (d = u.getY((r + p) * 2)) != null ? d : u.getY(u.count - 1);
        this.meshWithDepthTest.material.uniforms.excludeMinV.value = g, this.meshWithDepthTest.material.uniforms.excludeMaxV.value = f, this.meshWithoutDepthTest.material.uniforms.includeMinV.value = g, this.meshWithoutDepthTest.material.uniforms.includeMaxV.value = f;
      }
      this.meshWithDepthTest.material.uniformsNeedUpdate = !0, this.meshWithoutDepthTest.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
    });
    i(this, "onFiveModelShownFloorChange", (e) => {
      this.floorVisible = e === null || this.visibleFloorIndexes === null || this.visibleFloorIndexes.includes(e), this.updateVisible();
    });
    /** 更新可见性 */
    i(this, "updateVisible", () => {
      const e = (() => !this.parent.visible || !this.plugin.state.enabled || !this.plugin.state.visible ? !1 : this.customVisible !== null ? this.customVisible : this.inWalkAnimation ? !0 : this.modeVisible && this.textureHasLoaded && this.defaultVisible && this.floorVisible)();
      this.visible !== e && (this.visible = e, e ? this.doShow() : this.doHide());
    });
    i(this, "onFlowAnimeUpdate", (e) => {
      const { progress: t } = e;
      this.meshWithDepthTest.material.uniforms.vOffset.value = t, this.meshWithoutDepthTest.material.uniforms.vOffset.value = t, this.meshWithDepthTest.material.uniformsNeedUpdate = !0, this.meshWithoutDepthTest.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
    });
    i(this, "logError", (e) => F("GuideLineModeItem: ", e));
    var a, o;
    this.five = e, this.mode = t.mode, this.plugin = t.plugin, this.parent = t.parent, this.group.name = "GuideLineModeItem";
    const r = new h.BufferGeometry(), s = new h.ShaderMaterial({
      vertexShader: I,
      fragmentShader: N,
      transparent: !0,
      uniforms: {
        map: { value: null },
        useMapColor: { value: 0 },
        mapColor: { value: new h.Color() },
        mapOpacity: { value: 1 },
        backgroundColor: { value: new h.Color() },
        backgroundOpacity: { value: 0 },
        borderColor: { value: new h.Color() },
        borderOpacity: { value: 0 },
        backgroundClip: { value: 0 },
        borderWidth: { value: 0.05 },
        opacity: { value: 1 },
        flicker: { value: 1 },
        maxV: { value: 0 },
        vOffset: { value: 0 },
        includeMinV: { value: -1 },
        includeMaxV: { value: -1 },
        excludeMinV: { value: -1 },
        excludeMaxV: { value: -1 }
      }
    });
    this.meshWithDepthTest = new h.Mesh(r, s), this.meshWithoutDepthTest = new h.Mesh(r, s.clone()), this.meshWithoutDepthTest.material.depthTest = !1, this.meshWithDepthTest.name = "GuideLineModeItemWithDepthTest", this.meshWithoutDepthTest.name = "GuideLineModeItemWithoutDepthTest", this.group.add(this.meshWithDepthTest), this.mode === "panorama" && (this.parent.hooks.on("walkStart", this.onWalkAnimationStart), this.parent.hooks.on("walkEnded", this.onWalkAnimationEnd), this.onFivePanoArrived(this.five.getCurrentState().panoIndex)), this.updateVisible(), this.onFiveModeChange(this.five.getCurrentState().mode), this.onFiveModelShownFloorChange((o = (a = this.five.model) == null ? void 0 : a.shownFloor) != null ? o : null), this.flowAnime.onUpdate(this.onFlowAnimeUpdate), this.parent.hooks.on("show", this.updateVisible), this.parent.hooks.on("hide", this.updateVisible), this.plugin.hooks.on("show", this.updateVisible), this.plugin.hooks.on("hide", this.updateVisible), this.plugin.hooks.on("enable", this.updateVisible), this.plugin.hooks.on("disable", this.updateVisible), this.plugin.hooks.on("dispose", this.dispose), this.five.on("modeChange", this.onFiveModeChange), this.five.on("panoArrived", this.onFivePanoArrived), this.five.on("modelShownFloorChange", this.onFiveModelShownFloorChange), this.five.needsRender = !0;
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
    const r = G(e);
    if (this._panoGroup = r, (t == null ? void 0 : t.skipPanoGroup) !== void 0) {
      const a = t.skipPanoGroup ? r.map((o) => this.plugin.workUtil.getObserverStandingPosition(o)).filter(C) : null;
      this.skippedPositions = a;
    }
    const s = this.getPathFromPanoGroup(r, this.five.work, t);
    this.path = s, this.setGeometryByPath(s, t);
  }
  /** 通过路径设置线条形状 */
  setGeometryByPath(e, t) {
    var g, f, v, W;
    if (this.disposed)
      return this.logError("disposed");
    const r = (g = t == null ? void 0 : t.scale) != null ? g : this.scale, s = (f = t == null ? void 0 : t.width) != null ? f : this.width, a = (v = t == null ? void 0 : t.unit_length) != null ? v : this.unitLength;
    this.scale = r, this.width = s, this.unitLength = a;
    const { geometry: o, maxV: n, curvePath: l, curvePoints: d, panoMap: u, totalLength: p } = U({
      path: e,
      width: s * r,
      unitLength: a * r,
      skipPositions: this.skippedPositions,
      useAutoDepthTest: t.useAutoDepthTest
    });
    this.autoDepthTestEffectDistance = (W = t.autoDepthTestEffectDistance) != null ? W : (() => {
      const b = p / 10;
      return b > 3 ? 3 : b < 1 ? 1 : b;
    })(), this.panoMap = u, this._curvePath = l, this._curvePoints = d, this.meshWithDepthTest.geometry.copy(o), this.onFivePanoArrived(this.five.getCurrentState().panoIndex), this.meshWithDepthTest.material.needsUpdate = !0, this.meshWithDepthTest.material.uniforms.maxV.value = n, this.meshWithoutDepthTest.material.needsUpdate = !0, this.meshWithoutDepthTest.material.uniforms.maxV.value = n, this.five.needsRender = !0, this.path = e, this.geometryStyle = c(c({}, this.geometryStyle), t);
  }
  /** 设置线条材质 */
  setMartial(e) {
    var r, s, a, o, n;
    if (this.disposed)
      return this.logError("disposed");
    this.setDefaultVisible((r = e == null ? void 0 : e.visible) != null ? r : !1), this.setColor((s = e == null ? void 0 : e.color) != null ? s : "#ffffff"), this.setOpacity((a = e == null ? void 0 : e.opacity) != null ? a : 0.5), this.setTextureUrl((n = (o = e == null ? void 0 : e.texture) == null ? void 0 : o.url) != null ? n : "https://vr-image-4.realsee-cdn.cn/release/web/arrow1.ebe7d0ff.png"), (e == null ? void 0 : e.background_color) !== void 0 && this.setBackgroundColor(e.background_color), (e == null ? void 0 : e.background_opacity) !== void 0 && this.setBackgroundOpacity(e.background_opacity), (e == null ? void 0 : e.border_color) !== void 0 && this.setBorderColor(e.border_color), (e == null ? void 0 : e.border_opacity) !== void 0 && this.setBorderOpacity(e.border_opacity), (e == null ? void 0 : e.border_width) !== void 0 && this.setBorderWidth(e.border_width), (e == null ? void 0 : e.background_clip) !== void 0 && this.setBackgroundClip(e.background_clip);
    const t = c(c({}, this.materialStyle), e);
    this.materialStyle = t;
  }
  /** 设置模型状态 */
  setMeshStyle(e) {
    if (e != null && e.translate) {
      const s = new h.Vector3(), a = new h.Vector3().fromArray(e.translate);
      a.y += this.heightOffset, s.add(a), this.group.position.copy(s), r(this.startTagContainer, a), r(this.endTagContainer, a);
    }
    const t = c(c({}, this.meshStyle), e);
    this.meshStyle = t;
    function r(s, a) {
      if (!(s != null && s.tag))
        return;
      const o = new h.Vector3().fromArray(s.tag.position);
      o.add(a);
      const n = o.toArray();
      s.plugin.changeTagById(s.tag.id, { position: n });
    }
  }
  /** 设置 Y 轴上的偏移量，为了让多条路线在高度上错开，每个路线都需要有个额外的 offset */
  setHeightOffset(e) {
    const t = new h.Vector3();
    this.meshStyle.translate && t.add(new h.Vector3().fromArray(this.meshStyle.translate)), t.setY(t.y + e), this.group.position.copy(t), this.heightOffset = e, this.five.needsRender = !0;
  }
  /** 设置贴图颜色 */
  setColor(e) {
    if (this.disposed)
      return this.logError("disposed");
    e && (this.meshWithDepthTest.material.uniforms.mapColor.value = new h.Color().set(e), this.meshWithoutDepthTest.material.uniforms.mapColor.value = new h.Color().set(e)), this.meshWithDepthTest.material.uniforms.useMapColor.value = e ? 1 : 0, this.meshWithoutDepthTest.material.uniforms.useMapColor.value = e ? 1 : 0, this.meshWithDepthTest.material.uniformsNeedUpdate = !0, this.meshWithoutDepthTest.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /** 设置边框 */
  setBorderColor(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.meshWithDepthTest.material.uniforms.borderColor.value = new h.Color().set(e), this.meshWithoutDepthTest.material.uniforms.borderColor.value = new h.Color().set(e), this.meshWithDepthTest.material.uniformsNeedUpdate = !0, this.meshWithoutDepthTest.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /** 设置边框透明度 */
  setBorderOpacity(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.meshWithDepthTest.material.uniforms.borderOpacity.value = e, this.meshWithoutDepthTest.material.uniforms.borderOpacity.value = e, this.meshWithDepthTest.material.uniformsNeedUpdate = !0, this.meshWithoutDepthTest.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  setBackgroundClip(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.meshWithDepthTest.material.uniforms.backgroundClip.value = e === "border-box" ? 0 : 1, this.meshWithoutDepthTest.material.uniforms.backgroundClip.value = e === "border-box" ? 0 : 1, this.meshWithDepthTest.material.uniformsNeedUpdate = !0, this.meshWithoutDepthTest.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /**
   * @description: 设置边框宽度
   */
  setBorderWidth(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.meshWithDepthTest.material.uniforms.borderWidth.value = e, this.meshWithoutDepthTest.material.uniforms.borderWidth.value = e, this.meshWithDepthTest.material.uniformsNeedUpdate = !0, this.meshWithoutDepthTest.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /** 设置背景颜色 */
  setBackgroundColor(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.meshWithDepthTest.material.uniforms.backgroundColor.value = new h.Color().set(e), this.meshWithoutDepthTest.material.uniforms.backgroundColor.value = new h.Color().set(e), this.meshWithDepthTest.material.uniformsNeedUpdate = !0, this.meshWithoutDepthTest.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /** 设置背景透明度 */
  setBackgroundOpacity(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.meshWithDepthTest.material.uniforms.backgroundOpacity.value = e, this.meshWithoutDepthTest.material.uniforms.backgroundOpacity.value = e, this.meshWithDepthTest.material.uniformsNeedUpdate = !0, this.meshWithoutDepthTest.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /** 设置整体透明度 */
  setOpacity(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.meshWithDepthTest.material.uniforms.opacity.value = e, this.meshWithoutDepthTest.material.uniforms.opacity.value = e, this.meshWithDepthTest.material.uniformsNeedUpdate = !0, this.meshWithoutDepthTest.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /** 设置贴图透明度 */
  setMapOpacity(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.meshWithDepthTest.material.uniforms.mapOpacity.value = e, this.meshWithoutDepthTest.material.uniforms.mapOpacity.value = e, this.meshWithDepthTest.material.uniformsNeedUpdate = !0, this.meshWithoutDepthTest.material.uniformsNeedUpdate = !0, this.five.needsRender = !0;
  }
  /** 设置贴图 */
  setTextureUrl(e) {
    if (this.disposed)
      return this.logError("disposed");
    this.textureUrl = e, A(e).then((t) => {
      this.disposed || this.textureUrl === e && (t.wrapT = h.RepeatWrapping, this.textureHasLoaded = !0, this.meshWithDepthTest.material.uniforms.map.value = t, this.meshWithoutDepthTest.material.uniforms.map.value = t, this.meshWithDepthTest.material.uniformsNeedUpdate = !0, this.meshWithoutDepthTest.material.uniformsNeedUpdate = !0, this.meshWithDepthTest.material.needsUpdate = !0, this.meshWithoutDepthTest.material.needsUpdate = !0, this.five.needsRender = !0, this.updateVisible());
    });
  }
  setVisibleFloorIndexes(e) {
    var t, r;
    if (this.disposed)
      return this.logError("disposed");
    this._visibleFloorIndexes = e, this.onFiveModelShownFloorChange((r = (t = this.five.model) == null ? void 0 : t.shownFloor) != null ? r : null);
  }
  setStartTag(e) {
    this.setTag("start", e);
  }
  setEndTag(e) {
    this.setTag("end", e);
  }
  /** 闪烁 */
  flicker() {
    var e, t, r, s, a, o;
    if (this.disposed)
      return this.logError("disposed");
    O([this.group, (r = (t = (e = this.startTagContainer) == null ? void 0 : e.plugin) == null ? void 0 : t.tags[0]) == null ? void 0 : r.dom, (o = (a = (s = this.endTagContainer) == null ? void 0 : s.plugin) == null ? void 0 : a.tags[0]) == null ? void 0 : o.dom], {
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
    var l;
    if (!this.curvePoints || !this.curvePath)
      return [];
    const e = this.curvePoints.length, t = this.curvePath.getLength(), r = e - 1, s = t / r, a = (l = this.curvePath.getLengths(r)) != null ? l : [], o = [];
    let n = 0;
    for (let d = 0; d < e; d++) {
      const u = this.curvePoints[d], p = this.plugin.workUtil.getObserverStandingPosition(n);
      if (!p)
        break;
      p.clone().setY(0).distanceTo(u.clone().setY(0)) < s && (o.push(a[d]), n += 1);
    }
    return o;
  }
  setTag(e, t) {
    var l, d;
    const r = this.curvePath;
    if (!(t != null && t.data))
      return;
    const s = e === "start" ? (l = this.startTagContainer) != null ? l : (() => (this.startTagContainer = { tag: null, plugin: new V(this.five, { containerZIndex: 1 }) }, this.startTagContainer))() : (d = this.endTagContainer) != null ? d : (() => (this.endTagContainer = { tag: null, plugin: new V(this.five, { containerZIndex: 1 }) }, this.endTagContainer))(), o = B({}, {
      contentType: "Custom",
      stickType: "2DPoint",
      config: { visibleConfig: { visibleFiveMode: ["Floorplan", "Mapview"], followModelVisibility: !1 } },
      style: { point: { enabled: !1 } },
      data: {}
    }, t);
    s.tag = o, H(o) && (s.tag.element = (u) => {
      var f, v;
      (f = s.app) == null || f.$destroy();
      const p = e === "start" ? y(c({}, o.data), { name: this.name, distance: Math.round((v = r.getLength()) != null ? v : 0), i18n: this.plugin.config.i18n }) : o.data, g = new E({ target: u, intro: !0, props: p });
      return s.app = g, () => g.$destroy();
    }), s.plugin.load({ tagList: [s.tag] });
    const n = this.meshStyle.translate;
    if (n && o.position) {
      const u = new h.Vector3().fromArray(o.position), p = new h.Vector3().fromArray(n);
      u.add(p), u.y += this.heightOffset;
      const g = u.toArray();
      s.plugin.changeTagById(s.tag.id, { position: g });
    }
  }
  doShow() {
    var e, t;
    this.mode === "model" && this.flowAnime.play(), this.five.scene.add(this.group), (e = this.startTagContainer) == null || e.plugin.show(), (t = this.endTagContainer) == null || t.plugin.show(), this.five.needsRender = !0;
  }
  doHide() {
    var e, t;
    this.mode === "model" && this.flowAnime.stop(), this.five.scene.remove(this.group), (e = this.startTagContainer) == null || e.plugin.hide(), (t = this.endTagContainer) == null || t.plugin.hide(), this.five.needsRender = !0;
  }
  /** 通过 panoIndex 数组计算路径 */
  getPathFromPanoGroup(e, t, r) {
    if (e.length < 2)
      return [];
    const s = {}, a = e.map((l, d) => {
      const u = this.plugin.workUtil.getObserverStandingPosition(l);
      if (!u)
        return;
      const p = e[d - 1];
      if ((d === 0 ? 999 : u.distanceTo(this.plugin.workUtil.getObserverStandingPosition(p))) < 0.05) {
        let f = p;
        for (; s[f] !== void 0; )
          f = s[f];
        s[l] = f;
        return;
      }
      return {
        position: u,
        panoIndex: l
      };
    }).filter(C), o = a.map((l) => l.position.toArray()), n = a.map((l) => l.panoIndex);
    return [y(c({ type: "CatmullRomCurve3", points: o }, r), { panoIndexList: n, panoIndexMap: s })];
  }
}
function H(m) {
  return m.contentType === "Custom";
}
const ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GuideLineModeItem: R
}, Symbol.toStringTag, { value: "Module" }));
export {
  R as GuideLineModeItem,
  ae as GuideLineModeItem$1
};
