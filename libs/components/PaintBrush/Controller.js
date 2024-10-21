var N = Object.defineProperty;
var T = (v, p, t) => p in v ? N(v, p, { enumerable: !0, configurable: !0, writable: !0, value: t }) : v[p] = t;
var f = (v, p, t) => (T(v, typeof p != "symbol" ? p + "" : p, t), t);
import { transformCoords as x, getQuadraticCurvePoint as w, nextFrame as D, execInterval as L, queue as S, noop as W, unTransformCoords as E } from "./utils.js";
import { tween as _ } from "./tween.js";
import { PaintBrushTypeEnum as g } from "./typings.js";
import { Subscribe as k } from "./Subscribe.js";
import { uuid as M } from "../../shared-utils/uuid.js";
import { PaintBrushStyle as O } from "./style.js";
class X extends k {
  constructor(t) {
    super();
    f(this, "configs");
    f(this, "clientWidth");
    f(this, "clientHeight");
    f(this, "ready", !1);
    f(this, "uuid", M());
    f(this, "tween");
    f(this, "tweening", !1);
    f(this, "container");
    f(this, "canvas");
    f(this, "data", {});
    f(this, "tempLine", {});
    this.configs = t, this.clientWidth = document.body.clientWidth, this.clientHeight = document.body.clientHeight, this.container = this.ifInsertToDOM(), this.canvas = {}, this.initCtrl();
  }
  get color() {
    return this.configs.currentColor;
  }
  get state() {
    return this.data;
  }
  get dpr() {
    return this.configs.DPR || 1;
  }
  ifInsertToDOM() {
    if (this.container)
      return this.container;
    if (this.configs.container)
      this.configs.container.id = "_gl_paintBrush", this.container = this.configs.container;
    else if (document.getElementById("_gl_paintBrush"))
      this.container = document.getElementById("_gl_paintBrush");
    else {
      const t = document.createElement("div");
      t.id = "_gl_paintBrush", document.body.appendChild(t), this.container = t;
    }
    return this.container.innerHTML = O, this.container;
  }
  /**
   *
   * @param className 初始化画板
   * @returns
   */
  initCanvas(t) {
    const e = document.createElement("canvas");
    e.className = t, e.width = this.clientWidth, e.height = this.clientHeight;
    const h = e.getContext("2d");
    if (h)
      return h.lineWidth = 5 * this.dpr, h.lineCap = "round", h.lineJoin = "round", this.container.appendChild(e), e;
  }
  /**
   * 初始化操作面板
   * @returns
   */
  initCtrl() {
    const t = document.createElement("div");
    t.className = "_paintBrush-ctrl";
    const e = document.createElement("div");
    e.className = "_paintBrush-ctrlinner";
    const h = document.createElement("a");
    h.className = "_paintBrush-ctrlitem _paintBrush-ctrlitem--undo", h.addEventListener("click", (n) => {
      var a;
      if (n.stopPropagation(), this.configs.onClickUndo && this.configs.onClickUndo(), !this.canvas[this.uuid] || !this.data[this.uuid] || this.data[this.uuid].length === 0)
        return;
      const u = this.data[this.uuid].pop();
      u && this.emitStateChange({
        type: g.Undo,
        color: this.color,
        ready: this.ready,
        state: u,
        uuid: this.uuid
      });
      const d = (a = this.canvas[this.uuid]) == null ? void 0 : a.getContext("2d");
      if (!this.canvas[this.uuid])
        return;
      const { width: m, height: r } = this.canvas[this.uuid];
      d && d.clearRect(0, 0, m, r), this.data[this.uuid].forEach((s) => this.handleDrawLine(this.uuid, s, { withUndo: !0 }));
    });
    const i = document.createElement("a");
    return i.className = "_paintBrush-ctrlitem _paintBrush-ctrlitem--close", i.addEventListener("click", (n) => {
      n.stopPropagation(), this.closeBrush(), this.configs.onClickClose && this.configs.onClickClose();
    }), [h, i].forEach((n) => {
      const u = document.createElement("i");
      u.className = "brush-icon";
      const d = document.createElement("span");
      d.className = "brush-txt", d.innerText = n.className.endsWith("undo") ? this.configs.onUndoText : this.configs.onExitText, n.appendChild(u), n.appendChild(d);
    }), e.appendChild(h), e.appendChild(i), t.appendChild(e), this.container.appendChild(t), t;
  }
  openBrush() {
    if (this.ready)
      return;
    this.canvas[this.uuid] || (this.canvas[this.uuid] = this.initCanvas("_paintBrush-canvas")), this.container.className = "brushing";
    const t = this.canvas[this.uuid];
    t.getContext("2d").clearRect(0, 0, t.width, t.height), this.openBrushHandle(), this.ready = !0, this.emit("readyChange", !0);
  }
  closeBrush() {
    this.ready && (this.container.className = "", this.data = {}, this.tempLine = {}, Object.keys(this.canvas).forEach((t) => {
      this.canvas[t].ontouchstart = () => !1, this.canvas[t].ontouchmove = () => !1, this.canvas[t].ontouchend = () => !1, this.canvas[t].ontouchcancel = () => !1;
      const e = this.canvas[t].getContext("2d");
      e && e.clearRect(0, 0, this.canvas[t].width, this.canvas[t].height);
    }), this.ready = !1, this.emit("readyChange", !1), this.emitStateChange({
      type: g.Exit,
      color: this.color,
      ready: !1,
      uuid: this.uuid
    }));
  }
  updateCurrentColor(t) {
    const e = this.canvas[this.uuid];
    if (!e)
      return;
    const h = e.getContext("2d");
    h && (this.configs.currentColor = t, h.strokeStyle = t);
  }
  openBrushHandle() {
    const t = this.canvas[this.uuid];
    if (!t)
      return;
    const e = t.getContext("2d");
    if (!e)
      return;
    const h = this.color || "#6D92FF";
    e.strokeStyle = h;
    let i = null, o = [], n, u = [], d = 0;
    const m = (r, a, s) => {
      const l = this.color || "#ff0000";
      e.strokeStyle = l, e.beginPath(), e.moveTo(r.x, r.y), e.quadraticCurveTo(a.x, a.y, s.x, s.y), e.stroke();
    };
    t.onmousedown = (r) => {
      r.preventDefault(), d = Date.now();
      const a = r.clientX, s = r.clientY;
      o = [], o.push({ x: a, y: s }), i = { x: a, y: s }, n = x({ x: a, y: s }, this.clientWidth, this.clientHeight), u = [];
    }, t.onmousemove = (r) => {
      if (r.preventDefault(), !i)
        return;
      const a = Number(r.clientX), s = Number(r.clientY);
      if (Math.abs(a - i.x) < 5 && Math.abs(s - i.y) < 5 || (o.push({ x: a, y: s }), u.push(x({ x: a, y: s }, this.clientWidth, this.clientHeight)), o.length < 3))
        return;
      const { control: l, end: c } = w(o);
      !l || !c || (m(i, l, c), i = c);
    }, t.onmouseup = (r) => {
      if (r.preventDefault(), i = null, o.length < 3)
        return;
      this.data[this.uuid] || (this.data[this.uuid] = []);
      const a = Date.now() - d, s = {
        move: Object.assign({}, n),
        uuid: this.uuid,
        line: [...u],
        color: this.color,
        duration: a < 1280 ? a : a < 2e3 ? 1280 : 0
        // 单次笔迹时长超过2000ms不加动画
      };
      this.data[this.uuid].push(s), D(() => {
        this.emitStateChange({
          type: g.Drawline,
          color: this.color,
          ready: this.ready,
          state: s,
          uuid: this.uuid
        });
      });
    }, t.ontouchstart = (r) => {
      r.preventDefault(), d = Date.now();
      const a = r.touches[0].clientX, s = r.touches[0].clientY;
      o = [], o.push({ x: a, y: s }), i = { x: a, y: s }, n = x({ x: a, y: s }, this.clientWidth, this.clientHeight), u = [];
    }, t.ontouchmove = (r) => {
      if (r.preventDefault(), !i)
        return;
      const a = Number(r.touches[0].clientX), s = Number(r.touches[0].clientY);
      if (Math.abs(a - i.x) < 5 && Math.abs(s - i.y) < 5 || (o.push({ x: a, y: s }), u.push(x({ x: a, y: s }, this.clientWidth, this.clientHeight)), o.length < 3))
        return;
      const { control: l, end: c } = w(o);
      !l || !c || (m(i, l, c), i = c);
    }, t.ontouchend = t.ontouchcancel = (r) => {
      if (r.preventDefault(), i = null, o.length < 3)
        return;
      this.data[this.uuid] || (this.data[this.uuid] = []);
      const a = Date.now() - d, s = {
        move: Object.assign({}, n),
        line: [...u],
        uuid: this.uuid,
        color: this.color,
        duration: a < 1280 ? a : a < 2e3 ? 1280 : 0
        // 单次笔迹时长超过2000ms不加动画
      };
      this.data[this.uuid].push(s), D(() => {
        this.emitStateChange({
          type: g.Drawline,
          color: this.color,
          ready: this.ready,
          state: s,
          uuid: this.uuid
        });
      });
    };
  }
  emitStateChange(t, e = !0) {
    if (t.type !== g.Drawline) {
      this.emit("stateChange", t, e);
      return;
    }
    const h = Date.now(), i = t.state;
    if (!i || !i.line)
      return;
    const o = Math.ceil(i.line.length / 100);
    for (let n = 0; n < o; n++) {
      const u = {
        uuid: this.uuid,
        color: this.color,
        ready: this.ready,
        type: t.type,
        state: {
          uuid: this.uuid,
          move: i.move,
          duration: i.duration,
          color: this.color,
          line: i.line.slice(n * 100, (n + 1) * 100)
        },
        timestamp: h,
        end: n === o - 1
      };
      L(n, 20, () => {
        this.emit("stateChange", u, e);
      });
    }
  }
  action(t) {
    const { ready: e, type: h, uuid: i } = t;
    if (!e && this.ready) {
      this.closeBrush();
      return;
    }
    if (e && !this.ready) {
      this.openBrush();
      return;
    }
    if (this.ready)
      switch (h) {
        case g.Drawline:
          const { state: o, timestamp: n, end: u } = t;
          if (!n || !o)
            return;
          this.tempLine[n] = [].concat(this.tempLine[n] || [], o.line), u && (Object.assign(o, { line: this.tempLine[n] }), this.handleDrawLine(i, o, {}, () => delete this.tempLine[n]));
          break;
        case g.Undo:
          this.handleUndo(i);
          break;
      }
  }
  handleDrawLine(t, e, { withUndo: h = !1 }, i = W) {
    !e || Object.prototype.toString.call(e) != "[object Object]" || Object.keys(e).length === 0 || S(() => new Promise((o) => {
      if (h || (this.canvas[t] || (this.canvas[t] = this.initCanvas("_paintBrush-canvas--sync")), this.data[t] || (this.data[t] = []), this.data[t].push(e)), !this.canvas[t])
        return;
      const n = this.canvas[t].getContext("2d");
      if (!n)
        return;
      const { line: u = [], color: d = "black", duration: m = 0, uuid: r } = e, a = E(e.move || {}, this.clientWidth, this.clientHeight);
      let s = [a];
      if (n.strokeStyle = d, n.beginPath(), n.moveTo(a.x, a.y), m && !h) {
        let l = [];
        const c = this;
        c.tween = _({ step: 0 }, { step: u.length - 1 }, m).onUpdate(({ step: C }) => {
          var H;
          if (c.tweening = !0, !c.ready)
            return n.clearRect(0, 0, c.canvas[r].width, c.canvas[r].height), (H = c.tween) == null ? void 0 : H.stop();
          const b = Math.floor(C);
          if (!l.find((y) => y === b)) {
            if (l.push(b), s.push(E(u[b], c.clientWidth, c.clientHeight)), s.length < 3)
              return;
            const { control: y, end: B } = w(s);
            if (!y || !B)
              return;
            n.quadraticCurveTo(y.x, y.y, B.x, B.y), n.stroke();
          }
        }).onComplete((C) => {
          c.tween = void 0, c.tweening = !1, l = [], s = [], i && i(), o();
        });
      } else {
        for (let l = 0; l < u.length; l++) {
          if (s.push(E(u[l], this.clientWidth, this.clientHeight)), s.length < 3)
            continue;
          const { control: c, end: C } = w(s);
          !c || !C || n.quadraticCurveTo(c.x, c.y, C.x, C.y);
        }
        n.stroke(), s = [], i && i(), o();
      }
    }));
  }
  handleUndo(t) {
    if (!this.canvas[t] || !this.data[t] || this.data[t].length === 0)
      return;
    this.data[t].pop();
    const e = () => {
      var i;
      const h = (i = this.canvas[t]) == null ? void 0 : i.getContext("2d");
      h && h.clearRect(0, 0, this.canvas[t].width, this.canvas[t].height), this.data[t].forEach((o) => this.handleDrawLine(t, o, { withUndo: !0 }));
    };
    if (this.tween && this.tweening) {
      this.tween.stop(), D(e, 60);
      return;
    }
    e();
  }
  destroyBrush() {
    this.closeBrush(), this.ready = !1, this.emit("readyChange", !0);
  }
}
export {
  X as Controller
};
