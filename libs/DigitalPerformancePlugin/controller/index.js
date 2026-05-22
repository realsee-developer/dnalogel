var D = Object.defineProperty, k = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable;
var v = (d, t, e) => t in d ? D(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e, E = (d, t) => {
  for (var e in t || (t = {}))
    I.call(t, e) && v(d, e, t[e]);
  if (S)
    for (var e of S(t))
      U.call(t, e) && v(d, e, t[e]);
  return d;
}, x = (d, t) => k(d, H(t));
var P = (d, t, e) => (v(d, typeof t != "symbol" ? t + "" : t, e), e);
var m = (d, t, e) => new Promise((i, s) => {
  var o = (a) => {
    try {
      n(e.next(a));
    } catch (l) {
      s(l);
    }
  }, r = (a) => {
    try {
      n(e.throw(a));
    } catch (l) {
      s(l);
    }
  }, n = (a) => a.done ? i(a.value) : Promise.resolve(a.value).then(o, r);
  n((e = e.apply(d, t)).next());
});
import { DigitalPlayground as R } from "../core/DigitalPlayground.js";
import { Vector3 as w } from "three";
import { convertMockToPlayer as z } from "../mock.js";
import { transformPosition as N } from "../../shared-utils/five/transformPosition.js";
import "@realsee/five/gltf-loader";
import "../core/DigitalHuman.js";
import "../core/DigitalStateMachine.js";
import "../core/Trace.js";
import "@realsee/five";
const G = "Dnalogel-DigitalPerformancePlugin";
class Q {
  constructor(t, e = {}) {
    P(this, "five");
    P(this, "playground");
    P(this, "config");
    P(this, "state");
    P(this, "NAME");
    // 全局进度条相关属性
    P(this, "totalDurationCache", null);
    P(this, "chapterTimeMapCache", null);
    P(this, "progressListeners", /* @__PURE__ */ new Set());
    P(this, "progressUpdateInterval", 100);
    // 默认100ms更新一次
    P(this, "progressUpdateTimer", null);
    P(this, "_autoPlayOnNaturalEnd", !1);
    // 新增：playing-players-changed 事件监听集合
    P(this, "playingPlayersListeners", /* @__PURE__ */ new Set());
    this.five = t, this.config = E({
      autoPlay: !1,
      loop: !1,
      debug: !1
    }, e), this.playground = new R(this.config.debug), this.state = {
      enabled: !0,
      playing: !1,
      currentChapter: null,
      currentScript: null,
      continuousPlaying: !1,
      playMode: "single"
    }, this.NAME = G, this.config.debug, this.init();
  }
  /**
   * 加载剧本数据
   */
  loadScript(t) {
    return m(this, null, function* () {
      try {
        if (this.state.currentScript = t, this.playground.setScript(t), this.clearProgressCache(), this.config.debug, yield this.preloadResources(t), this.five && this.five.scene) {
          yield new Promise((i) => requestAnimationFrame(i));
          let e = 0;
          if (t.chapters.forEach((i) => {
            i.players.forEach((s) => {
              if (s.type === "model") {
                const o = this.getDigitalHuman(s.model, s.id);
                o != null && o.model && (this.five.scene.add(o.model), e++);
              }
            });
          }), e === 0)
            throw new Error("没有模型被添加到场景中");
        }
        this.config.autoPlay && t.chapters.length > 0 && (yield this.playChapter(t.chapters[0]));
      } catch (e) {
        throw console.error(`${this.NAME} failed to load script:`, e), e;
      }
    });
  }
  init() {
  }
  /**
   * 预加载资源
   */
  preloadResources(t) {
    return m(this, null, function* () {
      const e = [], i = [], s = /* @__PURE__ */ new Set(), o = [], r = /* @__PURE__ */ new Map();
      t.chapters.forEach((n) => {
        n.players.forEach((a) => {
          if (a.type === "model") {
            const l = a;
            e.push(l.model), i.push(a.id), l.keyframes.forEach((u) => {
              u.animation && (s.add(u.animation.url), u.animation.item && (o.push(u.animation.item.url), r.set(u.animation.item.url, {
                position: u.animation.item.position,
                rotation: u.animation.item.rotation
              })));
            });
          }
        });
      }), yield Promise.all([
        this.playground.loadModels(e, i),
        this.playground.loadItems(o, r),
        this.playground.loadAnimations(Array.from(s))
      ]), this.config.debug;
    });
  }
  /**
   * 播放指定章节
   */
  playChapter(t) {
    return m(this, null, function* () {
      this.emitPlayingPlayersChanged();
      try {
        this.state.currentChapter = t, this.state.playing = !0, this.state.playMode = "single", this.config.debug, yield this.playground.playByChapter(t), this.state.playing = !1, this.config.debug;
      } catch (e) {
        throw console.error(`${this.NAME} failed to play chapter:`, e), this.state.playing = !1, e;
      }
    });
  }
  /**
   * 播放指定章节（内部方法，用于连续播放）
   */
  playChapterForContinuous(t) {
    return m(this, null, function* () {
      this.emitPlayingPlayersChanged();
      try {
        this.state.currentChapter = t, this.state.playing = !0, this.config.debug, yield this.playground.playByChapter(t), this.state.continuousPlaying && (this.state.playing = !0), yield new Promise((e) => setTimeout(e, 100)), this.config.debug;
      } catch (e) {
        throw console.error(`${this.NAME} failed to play chapter for continuous:`, e), this.state.playing = !1, e;
      }
    });
  }
  /**
   * 播放指定章节（通过索引）
   */
  playChapterByIndex(t) {
    return m(this, null, function* () {
      if (!this.state.currentScript)
        throw new Error("No script loaded");
      if (t < 0 || t >= this.state.currentScript.chapters.length)
        throw new Error("Invalid chapter index");
      yield this.playChapter(this.state.currentScript.chapters[t]);
    });
  }
  /**
   * 暂停播放
   */
  pause() {
    this.playground.pause(), this.state.playing = !1, this.state.continuousPlaying = !1, this.config.debug && console.log(`${this.NAME} paused in ${this.state.playMode} mode`);
  }
  /**
   * 继续播放
   */
  continue() {
    return m(this, null, function* () {
      this._autoPlayOnNaturalEnd = !0;
      try {
        this.config.debug && console.log(`${this.NAME} continuing in ${this.state.playMode} mode`), this.state.playMode === "continuous" ? yield this.continueAllRemaining() : (this.state.currentChapter && this.state.currentChapter.players.forEach((t) => {
          if (t.type === "model") {
            const e = this.playground.getDigitalHuman(t.model, t.id);
            e && e.continueAnimation();
          }
        }), this.state.playing = !0, this.config.debug && console.log(`${this.NAME} continued single chapter successfully`));
      } catch (t) {
        throw console.error(`${this.NAME} failed to continue:`, t), this.state.playing = !1, t;
      }
    });
  }
  /**
   * 连续播放模式下的继续播放（从暂停位置继续播放所有剩余章节）
   */
  continueAllRemaining() {
    return m(this, null, function* () {
      if (!this.state.currentScript || !this.state.currentChapter)
        throw new Error("No script or chapter loaded");
      const t = this.state.currentScript.chapters, e = t.findIndex((i) => i.name === this.state.currentChapter.name);
      if (e === -1)
        throw new Error("Current chapter not found in script");
      this.state.continuousPlaying = !0;
      try {
        this.config.debug;
        let i = this.getProgress();
        console.log(`${this.NAME} [continueAllRemaining] current progress:`, i), this.emitPlayingPlayersChanged();
        const s = i && i.currentTime >= 26e3 && i.currentTime <= 27e3, o = i && i.currentTime >= i.totalTime;
        console.log(`${this.NAME} [continueAllRemaining] pause analysis:`, {
          currentTime: i == null ? void 0 : i.currentTime,
          totalTime: i == null ? void 0 : i.totalTime,
          isCompleted: o,
          isNearHardcodedPause: s
        }), o ? (console.log(`${this.NAME} [continueAllRemaining] chapter already completed, restarting`), yield this.playChapterForContinuous(this.state.currentChapter), i = this.getProgress(), console.log(`${this.NAME} [continueAllRemaining] progress after restart:`, i)) : s ? (console.log(`${this.NAME} [continueAllRemaining] detected hardcoded pause, skipping to 27500ms`), this.state.currentChapter.players.filter((n) => n.type === "model").forEach((n) => {
          const a = this.playground.getDigitalHuman(n.model, n.id);
          a && (a.state.currentTime = 27500);
        }), this.state.currentChapter.players.forEach((n) => {
          if (n.type === "model") {
            const a = this.playground.getDigitalHuman(n.model, n.id);
            a && a.continueAnimation();
          }
        }), this.state.playing = !0, console.log(`${this.NAME} [continueAllRemaining] after hardcoded pause skip - playing:`, this.state.playing)) : (console.log(`${this.NAME} [continueAllRemaining] continuing from paused position`), this.state.currentChapter.players.forEach((r) => {
          if (r.type === "model") {
            const n = this.playground.getDigitalHuman(r.model, r.id);
            n && n.continueAnimation();
          }
        }), this.state.playing = !0, console.log(`${this.NAME} [continueAllRemaining] after continue - playing:`, this.state.playing)), i = this.getProgress(), console.log(`${this.NAME} [continueAllRemaining] updated progress before wait:`, i, "playing:", this.state.playing), i && i.currentTime < i.totalTime ? yield new Promise((r) => {
          let n = (i == null ? void 0 : i.currentTime) || 0, a = 0;
          const l = 15, u = () => {
            var p;
            if (!((p = this.state) != null && p.continuousPlaying)) {
              console.log(`${this.NAME} [continueAllRemaining] stopped by user`), r();
              return;
            }
            const h = this.getProgress();
            if (this.config.debug, h && h.currentTime >= h.totalTime) {
              r();
              return;
            }
            if (h && h.currentTime < 0) {
              console.warn(`${this.NAME} [continueAllRemaining] detected negative time, skipping wait`), r();
              return;
            }
            if (h && h.currentTime === n) {
              if (a++, a >= l) {
                console.warn(`${this.NAME} [continueAllRemaining] progress stagnant for 3s, assuming chapter completed`), r();
                return;
              }
            } else
              a = 0, n = (h == null ? void 0 : h.currentTime) || 0;
            setTimeout(u, 200);
          };
          u();
        }) : console.log(`${this.NAME} [continueAllRemaining] chapter already completed or restarted, skipping wait`), console.log(
          `${this.NAME} [continueAllRemaining] starting to play remaining chapters from index ${e + 1} to ${t.length - 1}`
        ), this.emitPlayingPlayersChanged();
        for (let r = e + 1; r < t.length; r++) {
          if (!this.state.continuousPlaying) {
            this.config.debug && console.log(`${this.NAME} continuous playback stopped by user at chapter ${r + 1}`);
            break;
          }
          const n = t[r];
          this.config.debug;
          try {
            n.players.filter((h) => h.type === "model").forEach((h) => {
              const p = this.playground.getDigitalHuman(h.model, h.id);
              p && (p.state.currentTime = 0);
            });
            const l = Date.now();
            yield this.playChapterForContinuous(n);
            const u = Date.now() - l;
            if (this.config.debug, !this.state.continuousPlaying) {
              this.config.debug && console.log(`${this.NAME} continuous playback stopped after chapter ${r + 1}`);
              break;
            }
            r < t.length - 1 && (yield new Promise((h) => setTimeout(h, 1e3)));
          } catch (a) {
            console.error(`${this.NAME} failed to play chapter ${n.name}:`, a), this.state.continuousPlaying = !1;
            break;
          }
        }
        this.config.debug;
      } catch (i) {
        throw console.error(`${this.NAME} failed during continuous continue:`, i), this.emitPlayingPlayersChanged(), this.state.playing = !1, this.state.continuousPlaying = !1, i;
      } finally {
        this.state.playing = !1, this.state.continuousPlaying = !1;
      }
    });
  }
  /**
   * 从当前章节播放到最后一个章节（连续自动播放）
   */
  playAllRemaining() {
    return m(this, null, function* () {
      if (this._autoPlayOnNaturalEnd = !0, !this.state.currentScript)
        throw new Error("No script loaded");
      const t = this.state.currentScript.chapters;
      if (t.length === 0)
        throw new Error("No chapters to play");
      let e = 0;
      this.state.currentChapter && (e = t.findIndex((i) => i.name === this.state.currentChapter.name), e === -1 && (e = 0)), this.state.continuousPlaying = !0, this.state.playMode = "continuous";
      try {
        this.config.debug;
        const i = !this.state.playing && this.state.currentChapter !== null, s = this.getProgress();
        if (i) {
          const o = s && s.currentTime >= 26e3 && s.currentTime <= 27e3, r = s && s.totalTime > 0 && s.currentTime >= s.totalTime;
          if (console.log(`${this.NAME} [playAllRemaining] pause analysis:`, {
            hasProgress: !!s,
            currentTime: s == null ? void 0 : s.currentTime,
            totalTime: s == null ? void 0 : s.totalTime,
            isCompleted: r,
            isNearHardcodedPause: o,
            shouldContinueFromPause: !r || o
          }), this.emitPlayingPlayersChanged(), !r || o) {
            this.config.debug, yield this.continue();
            return;
          } else if (this.config.debug, e += 1, e >= t.length) {
            this.config.debug, this.state.playing = !1, this.emitPlayingPlayersChanged && this.emitPlayingPlayersChanged();
            return;
          }
        }
        for (let o = e; o < t.length; o++) {
          if (!this.state.continuousPlaying) {
            this.config.debug && console.log(`${this.NAME} continuous playback stopped by user at chapter ${o + 1}`), this.emitPlayingPlayersChanged();
            break;
          }
          const r = t[o];
          this.config.debug;
          try {
            const n = this.state.currentChapter && this.state.currentChapter.name === r.name, a = i && n && o === e;
            if (!n || a) {
              const h = r.players.filter((p) => p.type === "model");
              if (a) {
                const p = this.getProgress();
                p && p.currentTime >= 26e3 && p.currentTime <= 27e3 ? (h.forEach((b) => {
                  const M = this.playground.getDigitalHuman(b.model);
                  M && (M.state.currentTime = 27500);
                }), this.config.debug && console.log(`${this.NAME} skipped hardcoded pause for chapter: ${r.name}`)) : this.config.debug && console.log(`${this.NAME} continuing current chapter from existing position: ${r.name}`);
              } else
                h.forEach((p) => {
                  const T = this.playground.getDigitalHuman(p.model, p.id);
                  T && (T.state.currentTime = 0);
                }), this.config.debug && console.log(`${this.NAME} reset time for new chapter: ${r.name}`);
            } else
              this.config.debug;
            const l = Date.now();
            yield this.playChapterForContinuous(r);
            const u = Date.now() - l;
            if (this.config.debug, this.state.continuousPlaying && !this.state.playing && (console.warn(`${this.NAME} [playAllRemaining] chapter completed but playing state is false, fixing...`), this.state.playing = !0), !this.state.continuousPlaying) {
              this.config.debug && console.log(`${this.NAME} continuous playback stopped after chapter ${o + 1}`), this.emitPlayingPlayersChanged();
              break;
            }
            o < t.length - 1, o < t.length - 1 && (yield new Promise((h) => setTimeout(h, 1e3)));
          } catch (n) {
            console.error(`${this.NAME} failed to play chapter ${r.name}:`, n), this.emitPlayingPlayersChanged(), this.state.continuousPlaying = !1;
            break;
          }
        }
        this.stopAllPlayers(), this.state.playing = !1, this.emitPlayingPlayersChanged && this.emitPlayingPlayersChanged(), this.config.debug;
      } catch (i) {
        throw console.error(`${this.NAME} failed during continuous playback:`, i), this.emitPlayingPlayersChanged(), this.state.playing = !1, this.state.continuousPlaying = !1, i;
      } finally {
        this.state.playing = !1, this.state.continuousPlaying = !1;
      }
    });
  }
  /**
   * 重置播放
   */
  reset() {
    this.playground.reset(), this.state.playing = !1, this.state.continuousPlaying = !1, this.state.currentChapter = null, this.state.playMode = "single", this.config.debug && console.log(`${this.NAME} reset`);
  }
  /**
   * 设置时间线
   */
  setTimelineTo(t) {
    this.playground.setTimelineTo(t), this.config.debug && console.log(`${this.NAME} timeline set to:`, t);
  }
  /**
   * 启用插件
   */
  enable() {
    this.state.enabled = !0, this.config.debug && console.log(`${this.NAME} enabled`);
  }
  /**
   * 禁用插件
   */
  disable() {
    this.state.enabled = !1, this.pause(), this.config.debug && console.log(`${this.NAME} disabled`);
  }
  /**
   * 重置并清理（完全重置插件状态，包括对 five 的操作和 DigitalHuman）
   */
  resetAndCleanup() {
    this.stopAllPlayers(), this.playground && (typeof this.playground.dispose == "function" && this.playground.dispose(), this.playground = new this.playground.constructor(this.config.debug || !1)), this.state.playing = !1, this.state.continuousPlaying = !1, this.state.currentChapter = null, this.state.currentScript = null, this.state.enabled = !1, this.state.playMode = "single", this.stopProgressUpdateTimer(), this.clearProgressCache(), this.totalDurationCache = null, this.chapterTimeMapCache = null, this.five && (this.five.models.filter((e) => e.name && (e.name.includes("animation") || e.name.includes("digital"))).forEach((e) => {
      this.five.scene.remove(e);
    }), this.five.refresh(), this.five.getCurrentState && this.five.getCurrentState()), this._autoPlayOnNaturalEnd = !1, this.config.debug && console.log(`${this.NAME} resetAndCleanup - 完全重置完成（包括 DigitalHuman）`);
  }
  /**
   * 销毁插件（彻底释放资源）
   */
  dispose() {
    this.resetAndCleanup(), this.playground && typeof this.playground.dispose == "function" && this.playground.dispose(), this.playingPlayersListeners.clear(), this.state = void 0, this.playground = void 0, this.five = void 0, this.config = void 0, typeof window != "undefined" && window.console && console.log(`${this.NAME} disposed (彻底销毁)`);
  }
  /**
   * 获取当前状态
   */
  getState() {
    return E({}, this.state);
  }
  /**
   * 获取可用章节列表
   */
  getChapters() {
    var t;
    return ((t = this.state.currentScript) == null ? void 0 : t.chapters) || [];
  }
  /**
   * 获取数字人实例
   */
  getDigitalHuman(t, e) {
    return this.playground.getDigitalHuman(t, e);
  }
  /**
   * 获取当前播放进度信息
   */
  getProgress() {
    if (!this.state.currentChapter)
      return null;
    let t = 0, e = 0;
    return this.state.currentChapter.players.forEach((i) => {
      if (i.type === "model") {
        const s = i, o = s.keyframes[s.keyframes.length - 1];
        o && (t = Math.max(t, o.timeStamp));
        const r = this.playground.getDigitalHuman(s.model, s.id);
        r && (e = Math.max(e, r.state.currentTime || 0));
      }
    }), { currentTime: e, totalTime: t };
  }
  /**
   * 对原始 res 数据进行 transformPosition 处理和章节分组，返回完整结构
   * @param res 原始数据
   * @param work 可选，存在时才做transformPosition
   * @param totalDelay 可选，默认0
   */
  transformScriptData(t, e, i = 0) {
    var n, a;
    if (!t || !t.players || !Array.isArray(t.players))
      return t;
    const s = (n = t.players[0]) != null && n.fiveState ? E({}, t.players[0].fiveState) : void 0;
    if (s && s.offset && e) {
      const l = new w(s.offset.x, s.offset.y, s.offset.z), u = N(l, e == null ? void 0 : e.transform);
      s.offset = { x: u.x, y: u.y, z: u.z };
    }
    const o = [
      {
        id: 0,
        name: ((a = t.players[0]) == null ? void 0 : a.chapterName) || "Chapter 1",
        players: []
      }
    ];
    let r = 0;
    return t.players.forEach((l, u) => {
      var T, b, M;
      let h = E({}, l);
      if (e && ((T = h.track) != null && T.path && Array.isArray(h.track.path) && (h.track.path = h.track.path.map((y) => {
        const f = N(new w(y.x, y.y, y.z), e == null ? void 0 : e.transform);
        return {
          x: f.x,
          y: f.y,
          z: f.z
        };
      })), (b = h.track) != null && b.points && Array.isArray(h.track.points) && (h.track.points = h.track.points.map((y) => {
        if (y.point) {
          const f = N(
            new w(y.point.x, y.point.y, y.point.z),
            e == null ? void 0 : e.transform
          );
          return x(E({}, y), {
            point: {
              x: f.x,
              y: f.y,
              z: f.z
            }
          });
        }
        return y;
      })), h.matrix && Array.isArray(h.matrix) && h.matrix.length >= 16)) {
        const y = new w(h.matrix[12], h.matrix[13], h.matrix[14]), f = N(y, e == null ? void 0 : e.transform);
        h.matrix[12] = f.x, h.matrix[13] = f.y, h.matrix[14] = f.z;
      }
      const p = z(h, i);
      ((M = l.config) == null ? void 0 : M.type) === "simultaneous" || u > 0 && r++, o[r] || o.push({
        id: r,
        name: l.chapterName || `Chapter ${r + 1}`,
        players: []
      }), o[r].players.push(p);
    }), {
      id: t.id,
      name: t.name,
      fiveState: s,
      chapters: o
    };
  }
  // ===================== 全局进度条功能 =====================
  /**
   * 清理进度缓存
   */
  clearProgressCache() {
    this.totalDurationCache = null, this.chapterTimeMapCache = null, this.config.debug && console.log(`${this.NAME} progress cache cleared`);
  }
  /**
   * 计算单个章节的时长
   */
  calculateChapterDuration(t) {
    let e = 0;
    return t.players.forEach((i) => {
      if (i.type === "model") {
        const s = i, o = s.keyframes[s.keyframes.length - 1];
        o && (e = Math.max(e, o.timeStamp));
      }
    }), e;
  }
  /**
   * 获取所有章节的总时长（毫秒）
   */
  getTotalDuration() {
    if (this.totalDurationCache !== null)
      return this.totalDurationCache;
    if (!this.state.currentScript)
      return 0;
    let t = 0;
    return this.state.currentScript.chapters.forEach((e) => {
      t += this.calculateChapterDuration(e);
    }), this.totalDurationCache = t, this.config.debug && console.log(`${this.NAME} calculated total duration: ${t}ms`), t;
  }
  /**
   * 获取章节时间映射信息
   */
  getChapterTimeMap() {
    if (this.chapterTimeMapCache !== null)
      return this.chapterTimeMapCache;
    if (!this.state.currentScript)
      return [];
    const t = [];
    let e = 0;
    return this.state.currentScript.chapters.forEach((i, s) => {
      const o = this.calculateChapterDuration(i), r = e + o;
      t.push({
        chapterIndex: s,
        chapterName: i.name,
        startTime: e,
        duration: o,
        endTime: r,
        chapter: i
      }), e = r;
    }), this.chapterTimeMapCache = t, this.config.debug && console.log(`${this.NAME} generated chapter time map:`, t), t;
  }
  /**
   * 获取当前全局播放时间（毫秒）
   *
   * @deprecated 建议使用 getGlobalProgress().currentTime 获取更完整的信息
   * @returns 当前全局时间（毫秒）
   */
  getCurrentGlobalTime() {
    return this.getGlobalProgress().currentTime;
  }
  /**
   * 获取全局进度信息
   */
  getGlobalProgress() {
    let t = 0, e = 0, i = 0;
    if (this.state.currentChapter) {
      const n = this.getChapterTimeMap().find((a) => a.chapter.name === this.state.currentChapter.name);
      if (n) {
        e = n.chapterIndex;
        const a = this.getProgress();
        i = (a == null ? void 0 : a.currentTime) || 0, t = n.startTime + i;
      }
    }
    const s = this.getTotalDuration(), o = s > 0 ? t / s * 100 : 0;
    return {
      currentTime: t,
      totalTime: s,
      percentage: Math.min(100, Math.max(0, o)),
      currentChapterIndex: e,
      currentChapterTime: i,
      currentChapter: this.state.currentChapter || void 0
    };
  }
  /**
   * 根据全局时间获取对应的章节信息
   */
  getChapterByGlobalTime(t) {
    const e = this.getChapterTimeMap();
    if (e.length === 0)
      return null;
    const s = e.find((r) => t >= r.startTime && t < r.endTime) || (t >= e[e.length - 1].startTime ? e[e.length - 1] : null);
    if (!s)
      return null;
    const o = t - s.startTime;
    return {
      chapterIndex: s.chapterIndex,
      chapterTime: Math.max(0, o),
      chapter: s.chapter
    };
  }
  /**
   * 跳转到指定的全局时间
   */
  seekToGlobalTime(t, e) {
    return m(this, null, function* () {
      var i;
      this._autoPlayOnNaturalEnd = !!e;
      try {
        if (!this.state.currentScript)
          throw new Error("No script loaded");
        const s = this.getTotalDuration(), o = Math.max(0, Math.min(t, s));
        this.config.debug, this.emit("seek-started", o);
        const r = this.getChapterByGlobalTime(o);
        if (!r)
          throw new Error("Unable to locate chapter for the specified time");
        const { chapterIndex: n, chapterTime: a, chapter: l } = r, u = this.state.playing;
        this.state.playing && this.pause(), (!this.state.currentChapter || this.state.currentChapter.name !== l.name) && (this.config.debug && console.log(`${this.NAME} switching to chapter ${n}: ${l.name}`), yield this.initializeChapterForSeek(l, a), this.state.currentChapter = l, this.emit("chapter-changed", n, l)), this.setTimelineTo(a), a === 0 && this.state.currentScript.chapters.forEach((g) => {
          g.players.forEach((C) => {
            if (C.type === "model") {
              const A = this.playground.getDigitalHuman(C.model, C.id);
              A && A.stopAnimation();
            }
          });
        });
        const T = this.getChapterTimeMap().find((g) => g.chapter.name === l.name), b = (i = T == null ? void 0 : T.chapterIndex) != null ? i : 0;
        this.state.currentScript.chapters.forEach((g, C) => {
          g.players.forEach((A) => {
            if (A.type === "model") {
              const c = this.playground.getDigitalHuman(A.model, A.id);
              if (!c)
                return;
              if (C < b)
                c.model.visible = !1, c.container.visible = !1, c.state.currentTime = 0, c.pauseAnimation && c.pauseAnimation();
              else if (C === b) {
                if (c.play({
                  keyframes: A.keyframes,
                  items: A.items,
                  effects: A.effects
                }), c.state.currentTime = a, c.model.visible = !0, c.container.visible = !0, c.state.currentTime = a, c.keyframesManager && c.keyframes) {
                  const $ = c.keyframesManager.getStateByTime(a, c.keyframes, "model");
                  $ && (c.model.position.copy($.translation), c.model.quaternion.copy($.quaternion), c.model.scale.copy($.scale), c.model.visible = $.visible);
                }
                e ? c.continueAnimation() : c.pauseAnimation && c.pauseAnimation();
              } else
                c.model.visible = !1, c.container.visible = !1, c.state.currentTime = 0, c.pauseAnimation && c.pauseAnimation();
            }
          });
        }), (e !== void 0 ? e : u) && (this.state.playing = !0, l.players.forEach((g) => {
          if (g.type === "model") {
            const C = this.playground.getDigitalHuman(g.model, g.id);
            C && (C.play({
              keyframes: g.keyframes,
              items: g.items,
              effects: g.effects
            }), C.state.currentTime = a, C.continueAnimation());
          }
        }), this.emit("playback-started", o)), this.emit("seek-completed", o);
        const f = this.getChapterTimeMap().find((g) => g.chapter.name === l.name);
        if (f && Math.abs(a - f.duration) < 1 && // 允许1ms误差
        e) {
          const g = this.state.currentScript.chapters[n + 1];
          g && (this.config.debug && console.log(`${this.NAME} seekToGlobalTime: auto switch to next chapter:`, g.name), yield this.playChapter(g));
        }
        this.config.debug;
      } catch (s) {
        throw console.error(`${this.NAME} failed to seek to global time ${t}:`, s), s;
      }
    });
  }
  /**
   * 初始化章节用于跳转（不自动播放）
   */
  initializeChapterForSeek(t, e = 0) {
    return m(this, null, function* () {
      this.emitPlayingPlayersChanged();
      try {
        this.config.debug && console.log(`${this.NAME} initializing chapter for seek: ${t.name}`), this.playground.reset();
        const i = t.players.filter((r) => r.type === "model"), s = [];
        i.forEach((r) => {
          const n = r;
          n.keyframes && Array.isArray(n.keyframes) && n.keyframes.forEach((a) => {
            a.animation && a.animation.url && s.push(a.animation.url);
          });
        }), s.length > 0 && (yield this.playground.loadAnimations(s)), yield Promise.all(
          i.map((r) => m(this, null, function* () {
            const n = r;
            let a = this.playground.getDigitalHuman(n.model, n.id);
            if (a || (yield this.playground.loadModels([n.model], [n.id]), a = this.playground.getDigitalHuman(n.model, n.id)), a && n.keyframes.length > 0) {
              a.state.currentTime = e, a.state.currentAnimation = null, a.keyframes = n.keyframes;
              const l = n.keyframes[0];
              a.model.position.set(l.position[0], l.position[1], l.position[2]), a.model.quaternion.set(
                l.quaternion[0],
                l.quaternion[1],
                l.quaternion[2],
                l.quaternion[3]
              ), a.model.scale.set(l.scale[0], l.scale[1], l.scale[2]), a.model.visible = l.visible, a.play({
                keyframes: n.keyframes,
                items: n.items,
                effects: n.effects
              }), a.state.currentTime = e, a.continueAnimation();
            }
          }))
        ), t.players.filter((r) => r.type === "camera").length > 0 && this.config.debug, this.config.debug;
      } catch (i) {
        throw console.error(`${this.NAME} failed to initialize chapter for seek:`, i), i;
      }
    });
  }
  /**
   * 跳转到指定百分比位置
   */
  seekToPercentage(t, e) {
    return m(this, null, function* () {
      const i = Math.max(0, Math.min(100, t)), o = this.getTotalDuration() * i / 100;
      this.config.debug && console.log(`${this.NAME} seeking to ${i}% (${o}ms)`), yield this.seekToGlobalTime(o, e);
    });
  }
  /**
   * 跳转到指定章节的指定时间
   */
  seekToChapter(t, e = 0, i) {
    return m(this, null, function* () {
      if (!this.state.currentScript)
        throw new Error("No script loaded");
      if (t < 0 || t >= this.state.currentScript.chapters.length)
        throw new Error("Invalid chapter index");
      const r = this.getChapterTimeMap()[t].startTime + Math.max(0, e);
      this.config.debug && console.log(`${this.NAME} seeking to chapter ${t} at ${e}ms (global: ${r}ms)`), yield this.seekToGlobalTime(r, i);
    });
  }
  /**
   * 从指定全局时间开始播放所有剩余内容
   */
  playFromGlobalTime(t) {
    return m(this, null, function* () {
      yield this.seekToGlobalTime(t, !0), yield this.playAllRemaining();
    });
  }
  /**
   * 注册进度变化监听器
   */
  onProgressChanged(t) {
    const e = (i) => m(this, null, function* () {
      var a;
      t(i);
      const s = ((a = this.state.currentScript) == null ? void 0 : a.chapters) || [], o = this.state.currentChapter ? s.findIndex((l) => l.name === this.state.currentChapter.name) : -1, n = this.getChapterTimeMap().find((l) => {
        var u;
        return l.chapter.name === ((u = this.state.currentChapter) == null ? void 0 : u.name);
      });
      if (this.state.playing && this.state.currentChapter && n && i.currentChapterTime >= n.duration - 10 && // 允许10ms误差，比较章节内时间
      this._autoPlayOnNaturalEnd) {
        const l = s[o + 1];
        l ? yield this.playChapter(l) : (this.stopAllPlayers(), this.state.playing = !1, this.five.refresh(), this.emitPlayingPlayersChanged && this.emitPlayingPlayersChanged());
      }
    });
    return this.progressListeners.add(e), this.startProgressUpdateTimer(), this.config.debug && console.log(`${this.NAME} progress listener added, total: ${this.progressListeners.size}`), () => {
      this.progressListeners.delete(e), this.progressListeners.size === 0 && this.stopProgressUpdateTimer(), this.config.debug && console.log(`${this.NAME} progress listener removed, remaining: ${this.progressListeners.size}`);
    };
  }
  /**
   * 移除进度监听器
   */
  offProgressChanged(t) {
    this.progressListeners.delete(t), this.progressListeners.size === 0 && this.stopProgressUpdateTimer(), this.config.debug && console.log(`${this.NAME} progress listener removed via off method, remaining: ${this.progressListeners.size}`);
  }
  /**
   * 设置进度回调频率（毫秒）
   */
  setProgressUpdateInterval(t) {
    const e = this.progressUpdateInterval;
    this.progressUpdateInterval = Math.max(50, t), this.config.debug && console.log(`${this.NAME} progress update interval changed from ${e}ms to ${this.progressUpdateInterval}ms`), this.progressUpdateTimer !== null && (this.stopProgressUpdateTimer(), this.startProgressUpdateTimer());
  }
  /**
   * 启动进度更新定时器
   */
  startProgressUpdateTimer() {
    this.progressUpdateTimer === null && (this.progressUpdateTimer = window.setInterval(() => {
      if (this.progressListeners.size > 0) {
        const t = this.getGlobalProgress();
        this.emit("progress-changed", t);
      }
    }, this.progressUpdateInterval), this.config.debug && console.log(`${this.NAME} progress update timer started with ${this.progressUpdateInterval}ms interval`));
  }
  /**
   * 停止进度更新定时器
   */
  stopProgressUpdateTimer() {
    this.progressUpdateTimer !== null && (clearInterval(this.progressUpdateTimer), this.progressUpdateTimer = null, this.config.debug && console.log(`${this.NAME} progress update timer stopped`));
  }
  /**
   * 播放完整的所有章节（从头开始）
   */
  playAllChapters() {
    return m(this, null, function* () {
      if (!this.state.currentScript || this.state.currentScript.chapters.length === 0)
        throw new Error("No script or chapters loaded");
      this.config.debug, yield this.seekToGlobalTime(0, !0), yield this.playAllRemaining();
    });
  }
  /**
   * 获取播放范围信息
   */
  getPlaybackRange() {
    const t = this.getCurrentGlobalTime(), e = this.getTotalDuration();
    return {
      startTime: t,
      endTime: e,
      estimatedDuration: e - t
    };
  }
  /**
   * 停止所有 player 的播放状态
   */
  stopAllPlayers() {
    this.state.currentScript && this.state.currentScript.chapters.forEach((t) => {
      t.players.forEach((e) => {
        if (e.type === "model") {
          const i = this.playground.getDigitalHuman(e.model, e.id);
          i && (i.pauseAnimation && i.pauseAnimation(), i.state.playing = !1);
        }
      });
    });
  }
  // 简单的事件发射器实现
  emit(t, ...e) {
    if (this.config.debug, t === "progress-changed" && e.length > 0) {
      const i = e[0];
      this.progressListeners.forEach((s) => {
        try {
          s(i);
        } catch (o) {
          console.error(`${this.NAME} progress listener error:`, o);
        }
      });
    }
  }
  /**
   * 注册监听当前正在播放的所有player变化
   */
  onPlayingPlayersChanged(t) {
    return this.playingPlayersListeners.add(t), () => this.playingPlayersListeners.delete(t);
  }
  /**
   * 获取当前正在播放的所有player（数组）
   */
  getCurrentPlayingPlayers() {
    const e = this.getGlobalProgress().currentTime, s = this.getChapterTimeMap().find((o) => e >= o.startTime && e < o.endTime);
    return s ? this.getPlayingPlayersFromChapter(s.chapter) : [];
  }
  /**
   * 从指定章节获取正在播放的players
   */
  getPlayingPlayersFromChapter(t) {
    return t.players.filter((e) => {
      if (e.type === "model") {
        const i = this.playground.getDigitalHuman(e.model, e.id);
        return !(!i || !i.state);
      }
      return !1;
    });
  }
  /**
   * 触发 playing-players-changed 事件
   */
  emitPlayingPlayersChanged() {
    const t = this.getCurrentPlayingPlayers();
    this.playingPlayersListeners.forEach((e) => e(t));
  }
}
export {
  Q as default
};
