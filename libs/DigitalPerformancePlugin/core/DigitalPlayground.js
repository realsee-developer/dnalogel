var g = Object.defineProperty;
var u = (o, t, i) => t in o ? g(o, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[t] = i;
var m = (o, t, i) => (u(o, typeof t != "symbol" ? t + "" : t, i), i);
var p = (o, t, i) => new Promise((e, a) => {
  var r = (l) => {
    try {
      s(i.next(l));
    } catch (h) {
      a(h);
    }
  }, n = (l) => {
    try {
      s(i.throw(l));
    } catch (h) {
      a(h);
    }
  }, s = (l) => l.done ? e(l.value) : Promise.resolve(l.value).then(r, n);
  s((i = i.apply(o, t)).next());
});
import * as d from "three";
import { GLTFLoader as M } from "@realsee/five/gltf-loader";
import { DigitalHuman as y } from "./DigitalHuman.js";
import { loadGltf as A } from "@realsee/five";
import "./DigitalStateMachine.js";
import "./Trace.js";
class T {
  constructor(t = !1) {
    m(this, "gltfLoader");
    m(this, "script");
    m(this, "currentChapter");
    m(this, "digitalHumanMap");
    m(this, "digitalItemMap");
    m(this, "skeletalAnimationMap");
    m(this, "debugMode");
    this.gltfLoader = new M(), this.digitalHumanMap = /* @__PURE__ */ new Map(), this.digitalItemMap = /* @__PURE__ */ new Map(), this.skeletalAnimationMap = /* @__PURE__ */ new Map(), this.script = null, this.currentChapter = null, this.debugMode = t;
  }
  setScript(t) {
    this.script = t;
  }
  loadModel(t, i) {
    return p(this, null, function* () {
      const e = i ? `${t}_${i}` : t;
      if (this.digitalHumanMap.has(e)) {
        const a = this.digitalHumanMap.get(e);
        return Promise.resolve(a);
      } else
        return new Promise((a, r) => {
          t.endsWith(".gltf") || t.endsWith(".glb") ? this.loadGLTF(t).then((n) => {
            const s = n.scene, l = new y(s, this);
            this.digitalHumanMap.set(e, l), a(l);
          }) : r(new Error("不支持的模型格式"));
        });
    });
  }
  loadModels(t, i) {
    return p(this, null, function* () {
      return i && i.length === t.length ? Promise.all(t.map((e, a) => this.loadModel(e, i[a]))) : Promise.all(t.map((e) => this.loadModel(e)));
    });
  }
  // 加载骨骼动画，暂且认为一个glb只包含一个骨骼动画
  loadAnimation(t) {
    return p(this, null, function* () {
      if (this.skeletalAnimationMap.has(t)) {
        const i = this.skeletalAnimationMap.get(t);
        return Promise.resolve(i);
      } else
        return new Promise((i, e) => {
          this.loadGLTF(t).then((a) => {
            const n = a.animations[0];
            this.skeletalAnimationMap.set(t, n), i(n);
          });
        });
    });
  }
  loadAnimations(t) {
    return p(this, null, function* () {
      return Promise.all(t.map((i) => this.loadAnimation(i)));
    });
  }
  getAnimation(t) {
    return this.skeletalAnimationMap.get(t) || null;
  }
  getDigitalHuman(t, i) {
    const e = i ? `${t}_${i}` : t;
    return this.digitalHumanMap.get(e) || null;
  }
  playByChapter(t) {
    return p(this, null, function* () {
      if (!t || !Array.isArray(t.players))
        throw new Error("Invalid chapter: chapter or chapter.players is undefined");
      this.currentChapter = t;
      const i = t.players.filter((a) => a.type === "model");
      this.digitalHumanMap.forEach((a) => {
        a.model.visible = !1, a.container.visible = !1;
      });
      const e = [];
      for (let a = 0; a < i.length; a++) {
        const r = i[a], n = `${r.model}_${r.id}`, s = this.digitalHumanMap.get(n);
        s && (s.model.visible = !0, s.container.visible = !0, e.push(s.play({ keyframes: r.keyframes, items: [], effects: [] })));
      }
      return Promise.all(e);
    });
  }
  loadItems(t, i) {
    return p(this, null, function* () {
      return Promise.all(t.map((e) => this.loadItem(e, i == null ? void 0 : i.get(e))));
    });
  }
  loadItem(t, i) {
    return p(this, null, function* () {
      if (this.digitalItemMap.has(t)) {
        const e = this.digitalItemMap.get(t);
        return Promise.resolve(e);
      } else
        return new Promise((e, a) => {
          t.endsWith(".gltf") || t.endsWith(".glb") ? this.loadGLTF(t).then((r) => {
            const n = r.scene;
            if (i && (i != null && i.position) && (i != null && i.rotation)) {
              const [s, l, h] = i.position;
              n.position.set(s * 0.01, -l * 0.01, -h * 0.01);
              const c = new d.Euler(
                d.MathUtils.degToRad(i.rotation[0]),
                d.MathUtils.degToRad(i.rotation[1]),
                d.MathUtils.degToRad(i.rotation[2])
              );
              n.quaternion.setFromEuler(c);
            }
            this.digitalItemMap.set(t, n), e(n);
          }) : a(new Error("不支持的模型格式"));
        });
    });
  }
  getDigitalItem(t) {
    return this.digitalItemMap.get(t) || null;
  }
  pause() {
    this.digitalHumanMap.forEach((t) => {
      t.pauseAnimation();
    });
  }
  continue() {
    this.digitalHumanMap.forEach((t) => {
      t.continueAnimation();
    });
  }
  reset() {
    this.digitalHumanMap.forEach((t) => {
      t.reset();
    });
  }
  setTimelineTo(t) {
    this.digitalHumanMap.forEach((i) => {
      i.state.currentTime = t;
    });
  }
  /**
   * 销毁 playground
   */
  dispose() {
    this.digitalHumanMap.forEach((t) => {
      t.reset();
    }), this.digitalHumanMap.clear(), this.digitalItemMap.clear(), this.skeletalAnimationMap.clear();
  }
  loadGLTF(t) {
    return A(t).then((i) => {
      const e = i == null ? void 0 : i.upAxis;
      return i && e === "Z" && i.scene && (i.scene.rotateX(-Math.PI / 2), i.scene.updateMatrixWorld(!0)), i;
    });
  }
}
export {
  T as DigitalPlayground
};
