var B = Object.defineProperty;
var x = (p, e, t) => e in p ? B(p, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[e] = t;
var n = (p, e, t) => (x(p, typeof e != "symbol" ? e + "" : e, t), t);
var M = (p, e, t) => new Promise((l, o) => {
  var s = (d) => {
    try {
      y(t.next(d));
    } catch (F) {
      o(F);
    }
  }, I = (d) => {
    try {
      y(t.throw(d));
    } catch (F) {
      o(F);
    }
  }, y = (d) => d.done ? l(d.value) : Promise.resolve(d.value).then(s, I);
  y((t = t.apply(p, e)).next());
});
import * as i from "three";
import { DigitalStateMachine as L } from "./DigitalStateMachine.js";
import { Trace as S } from "./Trace.js";
const q = 300;
class D {
  constructor(e, t) {
    n(this, "model");
    n(this, "keyframesManager");
    n(this, "keyframes");
    n(this, "items");
    n(this, "effects");
    n(this, "digitalPlayground");
    n(this, "state");
    n(this, "animationFrameId");
    n(this, "curveLine");
    n(this, "effectsGroup");
    n(this, "effectObjects");
    n(this, "container");
    n(this, "mixer");
    n(this, "action");
    n(this, "itemMatrixMap");
    n(this, "trace");
    // 用于跟踪已处理的needRender keyframeIndex
    n(this, "processedNeedRenderKeyframeIndices", /* @__PURE__ */ new Set());
    // 跟踪已绑定到骨骼的 keyframe 道具（key: itemKey, value: item object）
    n(this, "attachedItems", /* @__PURE__ */ new Map());
    // 缓存 RightHand 骨骼
    n(this, "rightHandBone", null);
    this.model = e, this.model.visible = !1, this.model.mixer = null, this.mixer = new i.AnimationMixer(this.model), this.action = null, this.keyframesManager = new L(), this.keyframes = [], this.items = [], this.effects = [], this.digitalPlayground = t, this.state = {
      currentTime: 0,
      currentAnimation: null,
      currentAnimationRepeat: !1,
      playing: !1
    }, this.animationFrameId = null, this.itemMatrixMap = /* @__PURE__ */ new Map(), this.trace = new S(), this.curveLine = new i.Line(), this.curveLine.material = new i.LineBasicMaterial({ color: 14467195, linewidth: 5 }), this.effectsGroup = new i.Group(), this.effectObjects = /* @__PURE__ */ new Map(), this.container = new i.Group(), this.container.add(this.model), this.container.add(this.curveLine), this.container.add(this.effectsGroup);
  }
  playAnimation({ animation: e, repeat: t, switchDuration: l }) {
    const o = this.action, s = this.mixer.clipAction(e);
    s.reset(), t ? (s.setLoop(i.LoopRepeat, 1 / 0), s.clampWhenFinished = !1) : (s.setLoop(i.LoopOnce, 1), s.clampWhenFinished = !0), o && (s.enabled = !0, s.setEffectiveTimeScale(1), s.crossFadeFrom(o, l / 1e3, !0)), s.play(), o && o !== s && setTimeout(() => {
      o.stop();
    }, l), this.action = s;
  }
  pauseAnimation() {
    this.action && (this.action.paused = !0), this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null), this.state.playing = !1;
  }
  stopAnimation() {
    this.state.currentAnimation = null, this.mixer.stopAllAction(), this.state.playing = !1;
  }
  continueAnimation() {
    this.action && (this.action.paused = !1), this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null), this.keyframes.length > 0 && this.play(), this.state.playing = !0;
  }
  attachItem() {
  }
  init() {
    this.state.currentTime = 0, this.model.position.copy(new i.Vector3().fromArray(this.keyframes[0].position)), this.model.quaternion.copy(new i.Quaternion().fromArray(this.keyframes[0].quaternion)), this.model.visible = this.keyframes[0].visible;
  }
  reset() {
    this.state.currentTime = 0, this.keyframes && this.keyframes.length > 0 && (this.model.position.copy(new i.Vector3().fromArray(this.keyframes[0].position)), this.model.quaternion.copy(new i.Quaternion().fromArray(this.keyframes[0].quaternion))), this.model.visible = !1, this.container.visible = !1, this.animationFrameId && cancelAnimationFrame(this.animationFrameId), this.stopAnimation(), this.clearTrace(), this.detachAllKeyframeItems(), this.state.playing = !1;
  }
  play(e) {
    return M(this, null, function* () {
      this.clearProcessedNeedRenderKeyframeIndices();
      const { keyframes: t, items: l, effects: o } = e || {};
      return this.keyframes = t || this.keyframes, this.items = l || this.items, this.effects = o || this.effects, this.state.currentAnimation = null, this.state.currentAnimationRepeat = !1, this.state.playing = !0, new Promise((s, I) => {
        this.state.currentTime || this.init();
        let y = null;
        for (let c = 0; c < this.items.length; c++) {
          const h = this.digitalPlayground.getDigitalItem(this.items[c].model);
          if (h) {
            let a = null;
            const u = this.model.children[0].children.find((f) => f instanceof i.Bone), g = this.model.children[0].children.find((f) => f instanceof i.SkinnedMesh);
            if (!u || !g)
              throw new Error("模型骨骼缺失");
            if (this.model.children[0].children[2].traverse((f) => {
              f instanceof i.Bone && f.name === "RightHand" && (a = f);
            }), !a)
              throw new Error("没有找到绑定的骨骼");
            a.add(h);
            const w = new i.Vector3(), r = new i.Quaternion(), m = new i.Vector3();
            new i.Matrix4().fromArray(this.items[c].initialMatrix).decompose(w, r, m), h.position.copy(w), h.quaternion.copy(r), h.scale.copy(m), h.updateMatrixWorld(!0);
          }
        }
        const d = /* @__PURE__ */ new Map(), F = new i.TextureLoader();
        for (let c = 0; c < this.effects.length; c++) {
          const h = this.effects[c];
          if (h.type === "frameSequence") {
            const a = h.keyframes;
            for (let u = 0; u < a.length; u++)
              F.load(a[u].image, (g) => {
                g.name = a[u].image, d.set(a[u].image, g);
              });
          }
        }
        const v = (c) => {
          var g, w;
          y === null && (y = c);
          const h = c - y;
          y = c, this.state.currentTime += h;
          const a = this.keyframesManager.getStateByTime(this.state.currentTime, this.keyframes, "model");
          this.trace.addPoint(a.translation);
          const u = new i.BufferGeometry().setFromPoints(this.trace.tracePoints);
          if (this.curveLine.geometry = u, this.model.position.copy(a.translation), this.model.quaternion.copy(a.quaternion), this.model.scale.copy(a.scale), this.model.visible = a.visible, a.isFinal) {
            this.model.visible = !1, this.container.visible = !1, this.stopAnimation(), this.model.needsRender = !0, s(!0), this.animationFrameId !== null && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null);
            return;
          } else if (a.animation) {
            const r = this.digitalPlayground.getAnimation(a.animation.url), m = a.animation.needRender, A = a.animation.repeat !== this.state.currentAnimationRepeat;
            (r !== this.state.currentAnimation || A || m && !this.hasProcessedNeedRenderForTimestamp(a.keyframeIndex)) && (m && r === this.state.currentAnimation && this.markNeedRenderProcessedForTimestamp(a.keyframeIndex), this.state.currentAnimation = r, this.state.currentAnimationRepeat = a.animation.repeat, this.playAnimation({
              animation: r,
              repeat: a.animation.repeat,
              switchDuration: (g = a.animation.switchDuration) != null ? g : q
            })), this.mixer.update(h / 1e3), a.animation.isOver === !0 && (this.action.paused = !0, this.action.time = this.state.currentAnimation.duration, this.mixer.update(0));
          }
          this.updateKeyframeItems((w = a.animation) == null ? void 0 : w.item);
          for (let r = 0; r < this.items.length; r++) {
            const m = this.digitalPlayground.getDigitalItem(this.items[r].model);
            m && (this.keyframesManager.getStateByTime(this.state.currentTime, this.items[r].keyframes, "item").visible === !0 ? m.visible = !0 : m.visible = !1);
          }
          for (let r = 0; r < this.effects.length; r++) {
            const m = this.effects[r];
            if (m.type === "frameSequence") {
              const A = m.type + r;
              if (!this.effectObjects.has(A)) {
                const R = new i.PlaneGeometry(1, 1), b = new i.MeshBasicMaterial({
                  transparent: !0
                }), k = new i.Mesh(R, b);
                k.rotateX(-Math.PI / 2), k.position.copy(new i.Vector3().fromArray(m.position)), this.effectObjects.set(A, k), this.effectsGroup.add(k);
              }
              const f = this.effectObjects.get(A), T = this.keyframesManager.getStateByTime(this.state.currentTime, this.effects[r].keyframes, "effect"), P = d.get(T.image);
              f.material.map = P, f.visible = T.visible;
            }
          }
          this.model.needsRender = !0, this.animationFrameId = requestAnimationFrame(v);
        };
        this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null), this.animationFrameId = requestAnimationFrame(v);
      });
    });
  }
  // 用于分段时 更新轨迹
  traceUpDate() {
    this.trace.clear();
    for (let e = 0; e <= this.state.currentTime; e += 100) {
      const t = this.keyframesManager.getStateByTime(e, this.keyframes, "model");
      this.trace.addPoint(t.translation);
      const l = new i.BufferGeometry().setFromPoints(this.trace.tracePoints);
      this.curveLine.geometry = l;
    }
  }
  // 清楚轨迹
  clearTrace() {
    this.trace.clear();
    const e = new i.BufferGeometry().setFromPoints(this.trace.tracePoints);
    this.curveLine.geometry = e;
  }
  // 清理已处理的keyframeIndex记录（可选，在适当的时候调用）
  clearProcessedNeedRenderKeyframeIndices() {
    this.processedNeedRenderKeyframeIndices.clear();
  }
  // 检查指定keyframeIndex的needRender是否已经处理过
  hasProcessedNeedRenderForTimestamp(e) {
    return this.processedNeedRenderKeyframeIndices.has(e);
  }
  // 标记指定keyframeIndex的needRender已经处理过
  markNeedRenderProcessedForTimestamp(e) {
    this.processedNeedRenderKeyframeIndices.add(e);
  }
  // 获取并缓存 RightHand 骨骼
  getRightHandBone() {
    var e;
    return this.rightHandBone ? this.rightHandBone : ((e = this.model.children[0].children.find((t) => t instanceof i.Bone)) == null || e.traverse((t) => {
      t instanceof i.Bone && t.name === "RightHand" && (this.rightHandBone = t);
    }), this.rightHandBone);
  }
  // 根据当前帧的 items 动态绑定/解绑道具
  updateKeyframeItems(e) {
    var o;
    const t = (e == null ? void 0 : e.url) || null;
    for (const [s, I] of this.attachedItems)
      t !== s && ((o = I.parent) == null || o.remove(I), this.attachedItems.delete(s));
    if (!t)
      return;
    const l = this.getRightHandBone();
    if (l && !this.attachedItems.has(t)) {
      const s = this.digitalPlayground.getDigitalItem(t);
      s && (l.add(s), this.attachedItems.set(t, s));
    }
  }
  // 解绑所有 keyframe 道具
  detachAllKeyframeItems() {
    var e;
    for (const [, t] of this.attachedItems)
      (e = t.parent) == null || e.remove(t);
    this.attachedItems.clear();
  }
}
export {
  D as DigitalHuman
};
